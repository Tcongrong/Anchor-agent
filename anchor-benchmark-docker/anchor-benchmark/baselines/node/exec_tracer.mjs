// Uniform-Tracer runtime (plan v2 §3.4): serve an INSTRUMENTED copy of the main
// bundle (function-entry trace via instrument logic), run the interaction once,
// and emit the function-entry trace + console/network. No CDP / no breakpoints.
//
//   node exec_tracer.mjs <caseDir> <budget>
import http from "node:http";
import { readFileSync, statSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { createServer } from "node:net";
import { chromium } from "playwright";
import * as acorn from "acorn";

const caseDir = process.argv[2];
const budget = parseInt(process.argv[3] || "50000", 10);
const visibleRoot = path.join(caseDir, "agent_visible");
const task = JSON.parse(readFileSync(path.join(visibleRoot, "task.json"), "utf8").replace(/^﻿/, ""));
const pageRel = task.page;
const servedRoot = path.join(visibleRoot, path.dirname(pageRel));
const pageFile = path.basename(pageRel);
const MIME = { ".js": "text/javascript", ".html": "text/html", ".css": "text/css", ".svg": "image/svg+xml", ".json": "application/json" };

// pick main bundle (largest *.app.bundle.js or largest .js) under servedRoot
function listJs(dir, acc) { for (const e of readdirSync(dir)) { const p = path.join(dir, e); if (statSync(p).isDirectory()) listJs(p, acc); else if (e.endsWith(".js")) acc.push(p); } return acc; }
const jsAbs = listJs(servedRoot, []);
let mainAbs = jsAbs.find((p) => p.includes("app.bundle")) || jsAbs.sort((a, b) => statSync(b).size - statSync(a).size)[0];

function parse(s) { for (const t of ["script", "module"]) { try { return acorn.parse(s, { ecmaVersion: "latest", sourceType: t, allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, allowHashBang: true }); } catch (e) {} } return null; }
function instrument(src) {
  const ast = parse(src); if (!ast) return null;
  const inserts = [];
  const visit = (n) => {
    if (!n || typeof n.type !== "string") return;
    if ((n.type === "FunctionDeclaration" || n.type === "FunctionExpression" || n.type === "ArrowFunctionExpression") && n.body && n.body.type === "BlockStatement")
      inserts.push({ at: n.body.start + 1, off: n.start });
    for (const k in n) { if (k === "type" || k === "start" || k === "end") continue; const v = n[k]; if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === "string") visit(c); } else if (v && typeof v.type === "string") visit(v); }
  };
  visit(ast);
  inserts.sort((a, b) => b.at - a.at);
  let out = src;
  for (const ins of inserts) out = out.slice(0, ins.at) + `try{__T(${ins.off})}catch(e){};` + out.slice(ins.at);
  const prelude = `globalThis.__TRACE=globalThis.__TRACE||[];globalThis.__T=function(o){var A=globalThis.__TRACE;if(A.length<${budget})A.push([o,(globalThis.performance&&performance.now())||Date.now()]);};`;
  return prelude + "\n" + out;
}

const instrumented = instrument(readFileSync(mainAbs, "utf8"));
const mainUrlPath = "/" + path.relative(servedRoot, mainAbs).split(path.sep).join("/");

function getFreePort() { return new Promise((res) => { const s = createServer(); s.listen(0, "127.0.0.1", () => { const p = s.address().port; s.close(() => res(p)); }); }); }
function startServer(port) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, resp) => {
      try { let u = decodeURIComponent(req.url.split("?")[0]); if (u === "/") u = "/" + pageFile;
        if (u === mainUrlPath && instrumented) { resp.setHeader("Content-Type", "text/javascript"); resp.end(instrumented); return; }
        const fp = path.join(servedRoot, u);
        if (!fp.startsWith(servedRoot) || !existsSync(fp) || statSync(fp).isDirectory()) { resp.statusCode = 404; resp.end("nf"); return; }
        resp.setHeader("Content-Type", MIME[path.extname(fp)] || "application/octet-stream"); resp.end(readFileSync(fp));
      } catch (e) { resp.statusCode = 500; resp.end(String(e)); }
    });
    srv.listen(port, "127.0.0.1", () => resolve(srv));
  });
}
async function applyStep(page, step) {
  const sel = step.selector;
  try { if (step.action === "type" || step.action === "fill") await page.fill(sel, String(step.value ?? "")); else if (step.action === "check") await page.check(sel).catch(() => page.click(sel)); else if (step.action === "click") await page.click(sel); else if (step.action === "select") await page.selectOption(sel, String(step.value ?? "")); } catch (e) {}
  await page.waitForTimeout(120);
}
async function jsonSafe(h) { try { return await h.jsonValue(); } catch { return undefined; } }

const ev = { case_id: path.basename(caseDir), mode: "trace", ok: false, mainBundleRel: path.relative(visibleRoot, mainAbs).split(path.sep).join("/"),
  trace: [], console: [], requests: [], error: null, instrumented: !!instrumented };
let browser, srv;
try {
  if (!instrumented) throw new Error("instrumentation failed (parse)");
  const port = await getFreePort(); srv = await startServer(port);
  browser = await chromium.launch({ headless: true, executablePath: process.env.PW_CHROME || undefined });
  const page = await (await browser.newContext()).newPage();
  page.on("console", async (m) => { const args = []; for (const a of m.args()) args.push(await jsonSafe(a)); ev.console.push({ type: m.type(), text: m.text().slice(0, 1000), args }); });
  page.on("request", (r) => ev.requests.push({ url: r.url(), method: r.method() }));
  await page.goto(`http://127.0.0.1:${port}/${pageFile}`, { waitUntil: "load", timeout: 15000 });
  // TRACE_CONTROL: unset -> feature run (task.interaction); "load" -> page-load-only
  // control (no interaction); JSON array -> custom control interaction (Software-Recon).
  let steps = task.interaction || [];
  const tc = process.env.TRACE_CONTROL;
  if (tc === "load") steps = [];
  else if (tc) { try { steps = JSON.parse(tc); } catch (e) {} }
  for (const step of steps) await applyStep(page, step);
  await page.waitForTimeout(700);
  ev.trace = await page.evaluate(() => (globalThis.__TRACE || []).slice(0, 60000)).catch(() => []);
  ev.ok = true;
} catch (e) { ev.error = String((e && e.message) || e).slice(0, 400); }
finally { try { if (browser) await browser.close(); } catch {} try { if (srv) srv.close(); } catch {} }
process.stdout.write(JSON.stringify(ev));
