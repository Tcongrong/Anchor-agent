// Browser execution harness for the execution-aware baselines.
//
//   node exec_run.mjs <caseDir> outputaware   -> external runtime artifacts
//   node exec_run.mjs <caseDir> fixedprobe    -> + CDP fixed-probe evidence
//
// Serves the frozen captured page (agent_visible/captures/.../<page dir>) over
// http, drives task.json's interaction with chromium, and emits a single JSON
// evidence object on stdout. The served bundle is byte-identical to the
// candidate corpus, so breakpoint URLs/offsets map straight back to FC.
//
// fixedprobe reads PROBE_PLAN (JSON {sink:[idx],top:[idx],fieldwrite:[idx]}) from
// the environment; breakpoints are placed (and awaited) before the interaction
// so every probe hit during the behaviour is captured.
import http from "node:http";
import { readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import { createServer } from "node:net";
import { chromium } from "playwright";
import { extractCandidates } from "./extract_lib.mjs";

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

// Ports Chromium refuses to navigate to (ERR_UNSAFE_PORT); skip them.
const UNSAFE_PORTS = new Set([1719, 1720, 1723, 2049, 3659, 4045, 5060, 5061, 6000,
  6566, 6665, 6666, 6667, 6668, 6669, 6697, 10080]);
function getFreePort() {
  return new Promise((res, rej) => {
    let tries = 0;
    const attempt = () => {
      const s = createServer();
      s.on("error", () => (++tries < 20 ? attempt() : rej(new Error("no free port"))));
      s.listen(0, "127.0.0.1", () => {
        const p = s.address().port;
        if (UNSAFE_PORTS.has(p) && ++tries < 20) { s.close(() => attempt()); return; }
        s.close(() => res(p));
      });
    };
    attempt();
  });
}
function startServer(port) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, resp) => {
      try {
        let urlPath = decodeURIComponent(req.url.split("?")[0]);
        if (urlPath === "/") urlPath = "/" + pageFile;
        const fp = path.join(servedRoot, urlPath);
        if (!fp.startsWith(servedRoot) || !existsSync(fp) || statSync(fp).isDirectory()) {
          resp.statusCode = 404; resp.end("nf"); return;
        }
        const ext = path.extname(fp);
        resp.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
        resp.end(readFileSync(fp));
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
  } catch (e) { /* selector may be absent; keep going */ }
  await page.waitForTimeout(120);
}
async function jsonSafe(handle) { try { return await handle.jsonValue(); } catch { return undefined; } }
function extractKeys(post) {
  if (!post) return [];
  const keys = new Set();
  try { const o = JSON.parse(post); if (o && typeof o === "object") for (const k of Object.keys(o)) keys.add(k); }
  catch { for (const pair of post.split("&")) { const k = pair.split("=")[0]; if (k) keys.add(decodeURIComponent(k)); } }
  return [...keys].slice(0, 40);
}
function lineCol(text, offset) {
  let line = 0, col = 0;
  for (let i = 0; i < offset && i < text.length; i++) {
    if (text[i] === "\n") { line++; col = 0; } else col++;
  }
  return { line, col };
}
function servedUrlFor(relFile, port) {
  let base;
  if (relFile.startsWith(servedPrefix + "/")) base = relFile.slice(servedPrefix.length + 1);
  else base = "assets/" + relFile.split("/assets/").pop();
  return `http://127.0.0.1:${port}/${base}`;
}

const evidence = { case_id: path.basename(caseDir), mode, ok: false,
  console: [], requests: [], domMutations: 0, error: null, probeHits: [], probeCandidateCount: 0 };

let browser, srv;
try {
  const port = await getFreePort();
  srv = await startServer(port);
  browser = await chromium.launch({ headless: true, executablePath: process.env.PW_CHROME || undefined });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  page.on("console", async (msg) => {
    const args = [];
    for (const a of msg.args()) args.push(await jsonSafe(a));
    evidence.console.push({ type: msg.type(), text: msg.text().slice(0, 2000), args });
  });
  page.on("request", (req) => {
    const post = req.postData();
    evidence.requests.push({ url: req.url(), method: req.method(), headers: Object.keys(req.headers()),
      bodyKeys: extractKeys(post), bodySample: post ? post.slice(0, 500) : null });
  });

  // ---- fixedprobe: CDP setup before navigation ----
  let cdp = null, ex = null, idToCand = new Map(), fileText = new Map();
  const MAX_HITS = 400;
  if (mode === "fixedprobe") {
    ex = extractCandidates(caseDir);
    fileText = new Map(ex.files.map((f) => [f.file, f.text]));
    evidence.probeCandidateCount = ex.candidates.length;
    cdp = await ctx.newCDPSession(page);
    await cdp.send("Debugger.enable");
    await cdp.send("Debugger.setAsyncCallStackDepth", { maxDepth: 32 });
    cdp.on("Debugger.paused", async (evp) => {
      try {
        if (evidence.probeHits.length < MAX_HITS) {
          const top = evp.callFrames[0];
          const bpIds = evp.hitBreakpoints || [];
          const candIdx = bpIds.map((id) => idToCand.get(id)).filter((x) => x != null);
          const asyncFrames = [];
          let a = evp.asyncStackTrace, guard = 0;
          while (a && guard++ < 8) { for (const cf of (a.callFrames || [])) asyncFrames.push(cf.functionName || ""); a = a.parent; }
          let locals = {};
          try {
            const scope = top.scopeChain.find((s) => s.type === "local");
            if (scope && scope.object && scope.object.objectId) {
              const props = await cdp.send("Runtime.getProperties", { objectId: scope.object.objectId, ownProperties: true });
              for (const p of (props.result || []).slice(0, 20)) {
                const v = p.value;
                locals[p.name] = v ? String(v.unserializableValue ?? v.value ?? v.description ?? v.type).slice(0, 120) : null;
              }
            }
          } catch {}
          evidence.probeHits.push({
            order: evidence.probeHits.length, candIdx,
            funcName: top.functionName || "",
            syncDepth: evp.callFrames.length,
            syncStack: evp.callFrames.map((f) => f.functionName || "").slice(0, 14),
            asyncStack: asyncFrames.slice(0, 14),
            hasAsyncParent: asyncFrames.length > 0,
            locals,
          });
        }
      } catch {}
      try { await cdp.send("Debugger.resume"); } catch {}
    });
  }

  await page.goto(`http://127.0.0.1:${port}/${pageFile}`, { waitUntil: "load", timeout: 15000 });

  // ---- fixedprobe: place breakpoints (awaited) before interaction ----
  if (mode === "fixedprobe") {
    const plan = JSON.parse(process.env.PROBE_PLAN || "null");
    let wanted;
    if (plan) wanted = [...new Set([...(plan.sink || []), ...(plan.top || []), ...(plan.fieldwrite || [])])];
    else wanted = ex.candidates.map((_, i) => i).slice(0, 20);
    wanted = wanted.slice(0, 26); // honour the breakpoint-location budget
    // wait until the relevant scripts are parsed
    const urls = new Set(wanted.map((i) => servedUrlFor(ex.candidates[i].file, port)));
    const parsed = new Set();
    const onParsed = (s) => { if (s.url) parsed.add(s.url); };
    cdp.on("Debugger.scriptParsed", onParsed);
    for (let t = 0; t < 40 && [...urls].some((u) => !parsed.has(u)); t++) await page.waitForTimeout(50);
    for (const i of wanted) {
      const c = ex.candidates[i];
      const url = servedUrlFor(c.file, port);
      const text = fileText.get(c.file);
      if (!text) continue;
      const { line, col } = lineCol(text, c.start_offset);
      try {
        const r = await cdp.send("Debugger.setBreakpointByUrl", { url, lineNumber: line, columnNumber: col });
        if (r.breakpointId) idToCand.set(r.breakpointId, i);
      } catch {}
    }
  }

  await page.evaluate(() => {
    window.__domMut = 0;
    new MutationObserver((m) => { window.__domMut += m.length; })
      .observe(document.documentElement, { childList: true, subtree: true, attributes: true });
  }).catch(() => {});

  for (const step of task.interaction || []) await applyStep(page, step);
  await page.waitForTimeout(700);
  evidence.domMutations = await page.evaluate(() => window.__domMut || 0).catch(() => 0);
  evidence.ok = true;
} catch (e) {
  evidence.error = String((e && e.message) || e).slice(0, 400);
} finally {
  try { if (browser) await browser.close(); } catch {}
  try { if (srv) srv.close(); } catch {}
}
process.stdout.write(JSON.stringify(evidence));
