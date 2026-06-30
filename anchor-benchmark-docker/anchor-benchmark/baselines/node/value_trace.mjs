// JS-DynSlice value-flow instrumentation (plan v5 §4.1.3 / §10.6).
//
// Source-instruments the main bundle (acorn rewrite, Korel-Laski trace style) to
// emit a dynamic value-flow trace at FUNCTION granularity:
//   - on entry: the value fingerprints of the call arguments (shadow "uses")
//   - on each return: the value fingerprint of the produced value (shadow "def")
// A global ordered counter timestamps every event so producer(before) -> consumer
// edges can be reconstructed in Python. Value fingerprints are content hashes, so
// the SAME runtime value can be matched across a return -> argument hand-off.
//
// CRUCIAL (and the point of the baseline): values produced INSIDE native/opaque
// transforms (SubtleCrypto.digest/encrypt/sign, TextEncoder, native JSON, WASM)
// have no JS-level def event, so the backward chain BREAKS at that boundary. The
// slicer has no cross-boundary value matching, so it cannot bridge it — exactly
// the failure mode JS-DynSlice is meant to exhibit.
//
//   node value_trace.mjs <caseDir> <maxEvents>
import http from "node:http";
import { readFileSync, statSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { createServer } from "node:net";
import { chromium } from "playwright";
import * as acorn from "acorn";

const caseDir = process.argv[2];
const MAX_EVENTS = parseInt(process.argv[3] || "200000", 10);
const visibleRoot = path.join(caseDir, "agent_visible");
const task = JSON.parse(readFileSync(path.join(visibleRoot, "task.json"), "utf8").replace(/^﻿/, ""));
const pageRel = task.page;
const servedRoot = path.join(visibleRoot, path.dirname(pageRel));
const pageFile = path.basename(pageRel);
const MIME = { ".js": "text/javascript", ".html": "text/html", ".css": "text/css", ".svg": "image/svg+xml", ".json": "application/json" };

function listJs(dir, acc) { for (const e of readdirSync(dir)) { const p = path.join(dir, e); if (statSync(p).isDirectory()) listJs(p, acc); else if (e.endsWith(".js")) acc.push(p); } return acc; }
const jsAbs = listJs(servedRoot, []);
let mainAbs = jsAbs.find((p) => p.includes("app.bundle")) || jsAbs.sort((a, b) => statSync(b).size - statSync(a).size)[0];

function parse(s) { for (const t of ["script", "module"]) { try { return acorn.parse(s, { ecmaVersion: "latest", sourceType: t, allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, allowHashBang: true, ranges: true }); } catch (e) {} } return null; }

function instrument(src) {
  const ast = parse(src);
  if (!ast) return null;
  // collect edits: entry hooks and return-expression wraps
  const entryInserts = [];   // {at, off, isArrow}
  const retWraps = [];       // {start, end, off}  wrap `return E` -> `return __VR(off,(E))`
  const fnStack = [];
  const visit = (node, parent) => {
    if (!node || typeof node.type !== "string") return;
    const isFn = (node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression");
    let pushed = false;
    if (isFn && node.body && node.body.type === "BlockStatement") {
      entryInserts.push({ at: node.body.start + 1, off: node.start, isArrow: node.type === "ArrowFunctionExpression" });
      fnStack.push(node.start); pushed = true;
    }
    if (node.type === "ReturnStatement" && node.argument && fnStack.length) {
      retWraps.push({ start: node.argument.start, end: node.argument.end, off: fnStack[fnStack.length - 1] });
    }
    for (const k in node) {
      if (k === "type" || k === "start" || k === "end" || k === "range") continue;
      const v = node[k];
      if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === "string") visit(c, node); }
      else if (v && typeof v.type === "string") visit(v, node);
    }
    if (pushed) fnStack.pop();
  };
  visit(ast, null);

  // apply edits right-to-left so offsets stay valid. Return-wraps and entry-inserts
  // never overlap (entry is at body.start+1, returns are deeper), but we still sort
  // a single merged edit list by descending position.
  const edits = [];
  for (const e of entryInserts) edits.push({ pos: e.at, kind: "entry", off: e.off, isArrow: e.isArrow });
  for (const r of retWraps) { edits.push({ pos: r.end, kind: "retClose" }); edits.push({ pos: r.start, kind: "retOpen", off: r.off }); }
  edits.sort((a, b) => b.pos - a.pos || (a.kind === "retClose" ? -1 : 1));
  let out = src;
  for (const e of edits) {
    if (e.kind === "entry") {
      const argExpr = e.isArrow ? "[]" : "arguments";
      out = out.slice(0, e.pos) + `try{__VE(${e.off},${argExpr})}catch(_e){};` + out.slice(e.pos);
    } else if (e.kind === "retClose") {
      out = out.slice(0, e.pos) + "))" + out.slice(e.pos);   // close call-paren + group-paren
    } else if (e.kind === "retOpen") {
      out = out.slice(0, e.pos) + `__VR(${e.off},(` + out.slice(e.pos);
    }
  }
  const prelude = `
globalThis.__VLOG=globalThis.__VLOG||[];globalThis.__VORD=0;
globalThis.__VFP=function(v){try{
  if(v==null)return null;var t=typeof v;
  if(t==='string'){return v.length<=64?('s:'+v):('s#'+__vh(v)+':'+v.length);}
  if(t==='number'||t==='boolean'||t==='bigint')return t[0]+':'+String(v);
  if(t==='function')return null;
  var s;try{s=JSON.stringify(v);}catch(_e){s=null;}
  if(s==null)return 'o:'+(v&&v.constructor&&v.constructor.name||'obj');
  return s.length<=200?('o:'+s):('o#'+__vh(s)+':'+s.length);
}catch(_e){return null;}};
globalThis.__vh=function(s){var h=2166136261>>>0;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return h.toString(16);};
globalThis.__VE=function(off,args){var A=globalThis.__VLOG;if(A.length>=${MAX_EVENTS})return;var fps=[];try{for(var i=0;i<args.length&&i<8;i++)fps.push(globalThis.__VFP(args[i]));}catch(_e){}A.push([0,off,globalThis.__VORD++,fps]);};
globalThis.__VR=function(off,val){var A=globalThis.__VLOG;if(A.length<${MAX_EVENTS})A.push([1,off,globalThis.__VORD++,globalThis.__VFP(val)]);return val;};
`;
  return prelude + "\n" + out;
}

const instrumented = instrument(readFileSync(mainAbs, "utf8"));
if (process.env.VT_DEBUG && instrumented) {
  let err = null;
  for (const t of ["module", "script"]) {
    try { acorn.parse(instrumented, { ecmaVersion: "latest", sourceType: t, allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, allowHashBang: true }); err = null; break; }
    catch (e) { err = e; }
  }
  if (err) { const pos = err.pos || 0; console.error("INSTR ERR @", pos, err.message, "::", JSON.stringify(instrumented.slice(Math.max(0, pos - 160), pos + 30))); }
  else console.error("INSTR OK");
}
const mainUrlPath = "/" + path.relative(servedRoot, mainAbs).split(path.sep).join("/");

const LOOPBACK_HOSTS = ["127.0.0.1", "localhost", "::1"];
function getFreeEndpoint() {
  return new Promise((resolve, reject) => {
    let i = 0, lastErr = null;
    const tryHost = () => {
      if (i >= LOOPBACK_HOSTS.length) { reject(lastErr || new Error("no loopback host available")); return; }
      const host = LOOPBACK_HOSTS[i++];
      const s = createServer();
      s.once("error", (e) => { lastErr = e; tryHost(); });
      s.listen(0, host, () => {
        const p = s.address().port;
        s.close(() => resolve({ host, port: p }));
      });
    };
    tryHost();
  });
}
function startServer(endpoint) {
  return new Promise((resolve, reject) => {
    const srv = http.createServer((req, resp) => {
      try { let u = decodeURIComponent(req.url.split("?")[0]); if (u === "/") u = "/" + pageFile;
        if (u === mainUrlPath && instrumented) { resp.setHeader("Content-Type", "text/javascript"); resp.end(instrumented); return; }
        const fp = path.join(servedRoot, u);
        if (!fp.startsWith(servedRoot) || !existsSync(fp) || statSync(fp).isDirectory()) { resp.statusCode = 404; resp.end("nf"); return; }
        resp.setHeader("Content-Type", MIME[path.extname(fp)] || "application/octet-stream"); resp.end(readFileSync(fp));
      } catch (e) { resp.statusCode = 500; resp.end(String(e)); }
    });
    srv.once("error", reject);
    srv.listen(endpoint.port, endpoint.host, () => resolve(srv));
  });
}
async function applyStep(page, step) {
  const sel = step.selector;
  try { if (step.action === "type" || step.action === "fill") await page.fill(sel, String(step.value ?? "")); else if (step.action === "check") await page.check(sel).catch(() => page.click(sel)); else if (step.action === "click") await page.click(sel); else if (step.action === "select") await page.selectOption(sel, String(step.value ?? "")); } catch (e) {}
  await page.waitForTimeout(120);
}

const ev = { case_id: path.basename(caseDir), mode: "valueslice", ok: false,
  mainBundleRel: path.relative(visibleRoot, mainAbs).split(path.sep).join("/"),
  events: [], requests: [], console: [], pageerrors: [], truncated: false, error: null, instrumented: !!instrumented };
let browser, srv;
try {
  if (!instrumented) throw new Error("instrumentation failed (parse)");
  const endpoint = await getFreeEndpoint(); srv = await startServer(endpoint);
  const hostForUrl = endpoint.host === "::1" ? "[::1]" : endpoint.host;
  browser = await chromium.launch({ headless: true, executablePath: process.env.PW_CHROME || undefined });
  const page = await (await browser.newContext()).newPage();
  page.on("request", (r) => { const post = r.postData(); let hdrs = {}; try { hdrs = r.headers(); } catch (e) {}
    ev.requests.push({ url: r.url(), method: r.method(), bodySample: post ? post.slice(0, 2000) : null, headers: hdrs }); });
  page.on("console", async (m) => { ev.console.push({ type: m.type(), text: m.text().slice(0, 1000) }); });
  page.on("pageerror", (e) => { if (ev.pageerrors.length < 8) ev.pageerrors.push(String((e && e.message) || e).slice(0, 240)); });
  // the value-instrumented bundle is heavier than the entry-only tracer, so 'load'
  // can miss a 15s deadline; wait for domcontentloaded with a longer, tolerant cap.
  try { await page.goto(`http://${hostForUrl}:${endpoint.port}/${pageFile}`, { waitUntil: "domcontentloaded", timeout: 30000 }); }
  catch (e) { ev.error = "goto: " + String((e && e.message) || e).slice(0, 120); }
  await page.waitForTimeout(400);
  for (const step of task.interaction || []) await applyStep(page, step);
  await page.waitForTimeout(700);
  if (process.env.VT_DEBUG) {
    const dbg = await page.evaluate(() => ({ hasVE: typeof globalThis.__VE, hasVR: typeof globalThis.__VR, vlen: (globalThis.__VLOG || []).length })).catch((e) => ({ err: String(e) }));
    console.error("VLOG DEBUG", JSON.stringify(dbg));
  }
  ev.events = await page.evaluate((max) => (globalThis.__VLOG || []).slice(0, max), MAX_EVENTS).catch(() => []);
  ev.truncated = ev.events.length >= MAX_EVENTS;
  ev.ok = true;
} catch (e) { ev.error = String((e && e.message) || e).slice(0, 400); }
finally { try { if (browser) await browser.close(); } catch {} try { if (srv) srv.close(); } catch {} }
process.stdout.write(JSON.stringify(ev));
