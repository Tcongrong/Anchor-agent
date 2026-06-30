// v2 browser execution: external artifacts (outputaware) + CDP fixed probes
// (fixedprobe), with probe hits keyed by stable (file,start_offset,end_offset)
// so they map to the AST FC the harness grades.
//
//   node exec_v2.mjs <caseDir> outputaware
//   node exec_v2.mjs <caseDir> fixedprobe     (reads PROBE_PLAN env: [{file,offset}])
import http from "node:http";
import { readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import { createServer } from "node:net";
import { chromium } from "playwright";
import { extractCandidates } from "./ast_extract_lib.mjs";

const caseDir = process.argv[2];
const mode = process.argv[3] || "outputaware";
const visibleRoot = path.join(caseDir, "agent_visible");
const task = JSON.parse(readFileSync(path.join(visibleRoot, "task.json"), "utf8").replace(/^﻿/, ""));
const pageRel = task.page;
const servedRoot = path.join(visibleRoot, path.dirname(pageRel));
const pageFile = path.basename(pageRel);
const servedPrefix = path.relative(visibleRoot, servedRoot).split(path.sep).join("/");
const MIME = { ".js": "text/javascript", ".html": "text/html", ".css": "text/css",
  ".svg": "image/svg+xml", ".json": "application/json", ".map": "application/json" };

function getFreePort() { return new Promise((res) => { const s = createServer(); s.listen(0, "127.0.0.1", () => { const p = s.address().port; s.close(() => res(p)); }); }); }
function startServer(port) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, resp) => {
      try { let u = decodeURIComponent(req.url.split("?")[0]); if (u === "/") u = "/" + pageFile;
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
  try {
    if (step.action === "type" || step.action === "fill") await page.fill(sel, String(step.value ?? ""));
    else if (step.action === "check") await page.check(sel).catch(() => page.click(sel));
    else if (step.action === "uncheck") await page.uncheck(sel).catch(() => {});
    else if (step.action === "click") await page.click(sel);
    else if (step.action === "select") await page.selectOption(sel, String(step.value ?? ""));
    else if (step.action === "wait") await page.waitForTimeout(step.value || 200);
  } catch (e) {}
  await page.waitForTimeout(120);
}
async function jsonSafe(h) { try { return await h.jsonValue(); } catch { return undefined; } }
function extractKeys(post) {
  if (!post) return [];
  const keys = new Set();
  try { const o = JSON.parse(post); if (o && typeof o === "object") for (const k of Object.keys(o)) keys.add(k); }
  catch { for (const pr of post.split("&")) { const k = pr.split("=")[0]; if (k) keys.add(decodeURIComponent(k)); } }
  return [...keys].slice(0, 40);
}
function lineCol(text, offset) { let l = 0, c = 0; for (let i = 0; i < offset && i < text.length; i++) { if (text[i] === "\n") { l++; c = 0; } else c++; } return { line: l, col: c }; }
function servedUrlFor(relFile, port) {
  let base = relFile.startsWith(servedPrefix + "/") ? relFile.slice(servedPrefix.length + 1) : "assets/" + relFile.split("/assets/").pop();
  return `http://127.0.0.1:${port}/${base}`;
}

const ev = { case_id: path.basename(caseDir), mode, ok: false, console: [], requests: [],
  domMutations: 0, error: null, probeHits: [], breakpoints_attempted: 0, breakpoints_set: 0,
  breakpoints_failed: 0 };

let browser, srv;
try {
  const port = await getFreePort();
  srv = await startServer(port);
  browser = await chromium.launch({ headless: true, executablePath: process.env.PW_CHROME || undefined });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  page.on("console", async (m) => { const args = []; for (const a of m.args()) args.push(await jsonSafe(a)); ev.console.push({ type: m.type(), text: m.text().slice(0, 2000), args }); });
  page.on("request", (r) => { const post = r.postData(); ev.requests.push({ url: r.url(), method: r.method(), headers: Object.keys(r.headers()), bodyKeys: extractKeys(post), bodySample: post ? post.slice(0, 500) : null }); });

  let cdp = null, ex = null, fileText = new Map(), bpToSpan = new Map();
  const MAX_HITS = 500;
  if (mode === "fixedprobe") {
    ex = extractCandidates(caseDir);
    fileText = new Map(ex.files.map((f) => [f.file, f.text]));
    cdp = await ctx.newCDPSession(page);
    await cdp.send("Debugger.enable");
    await cdp.send("Debugger.setAsyncCallStackDepth", { maxDepth: 32 });
    cdp.on("Debugger.paused", async (evp) => {
      try {
        if (ev.probeHits.length < MAX_HITS) {
          const top = evp.callFrames[0];
          const spans = (evp.hitBreakpoints || []).map((id) => bpToSpan.get(id)).filter(Boolean);
          const aFrames = []; let a = evp.asyncStackTrace, g = 0;
          while (a && g++ < 8) { for (const cf of (a.callFrames || [])) aFrames.push(cf.functionName || ""); a = a.parent; }
          let locals = {};
          try { const sc = top.scopeChain.find((s) => s.type === "local");
            if (sc && sc.object && sc.object.objectId) { const pr = await cdp.send("Runtime.getProperties", { objectId: sc.object.objectId, ownProperties: true });
              for (const p of (pr.result || []).slice(0, 20)) { const v = p.value; locals[p.name] = v ? String(v.unserializableValue ?? v.value ?? v.description ?? v.type).slice(0, 120) : null; } } } catch {}
          ev.probeHits.push({ order: ev.probeHits.length, spans, funcName: top.functionName || "",
            syncDepth: evp.callFrames.length, syncStack: evp.callFrames.map((f) => f.functionName || "").slice(0, 14),
            asyncStack: aFrames.slice(0, 14), hasAsyncParent: aFrames.length > 0, locals });
        }
      } catch {}
      try { await cdp.send("Debugger.resume"); } catch {}
    });
  }

  await page.goto(`http://127.0.0.1:${port}/${pageFile}`, { waitUntil: "load", timeout: 15000 });

  if (mode === "fixedprobe") {
    const plan = JSON.parse(process.env.PROBE_PLAN || "[]"); // [{file,offset,end}]
    const urls = new Set(plan.map((p) => servedUrlFor(p.file, port)));
    const parsed = new Set();
    cdp.on("Debugger.scriptParsed", (s) => { if (s.url) parsed.add(s.url); });
    for (let t = 0; t < 40 && [...urls].some((u) => !parsed.has(u)); t++) await page.waitForTimeout(50);
    for (const p of plan.slice(0, 30)) {
      const text = fileText.get(p.file); if (!text) continue;
      const { line, col } = lineCol(text, p.offset);
      ev.breakpoints_attempted++;
      try {
        const r = await cdp.send("Debugger.setBreakpointByUrl", { url: servedUrlFor(p.file, port), lineNumber: line, columnNumber: col });
        if (r.breakpointId) { bpToSpan.set(r.breakpointId, { file: p.file, start: p.offset, end: p.end }); ev.breakpoints_set++; }
        else ev.breakpoints_failed++;
      } catch { ev.breakpoints_failed++; }
    }
  }

  await page.evaluate(() => { window.__domMut = 0; new MutationObserver((m) => { window.__domMut += m.length; }).observe(document.documentElement, { childList: true, subtree: true, attributes: true }); }).catch(() => {});
  for (const step of task.interaction || []) await applyStep(page, step);
  await page.waitForTimeout(700);
  ev.domMutations = await page.evaluate(() => window.__domMut || 0).catch(() => 0);
  ev.ok = true;
} catch (e) { ev.error = String((e && e.message) || e).slice(0, 400); }
finally { try { if (browser) await browser.close(); } catch {} try { if (srv) srv.close(); } catch {} }
process.stdout.write(JSON.stringify(ev));
