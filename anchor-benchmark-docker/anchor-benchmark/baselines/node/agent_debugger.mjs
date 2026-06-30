// Debugger-Agent: ReAct/CodeAct baseline over generic CDP debugger primitives.
//
// It can set breakpoints, read sync/async stacks, inspect local/closure vars,
// trigger the interaction, and observe console/DOM/network. It does not use any
// benchmark-specific strategy operation.
//
//   node agent_debugger.mjs <caseDir>
//
// Budgets come from env:
//   DBG_MAX_STEPS, DBG_BP_PER_ROUND, DBG_BP_TOTAL, DBG_MAX_TOKENS, DBG_WALL_SEC
// Requires ANTHROPIC_API_KEY; without it prints {ok:false,reason:"no_api_key"}.
import http from "node:http";
import { readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import { createServer } from "node:net";
import { chromium } from "playwright";
import { extractCandidates } from "./extract_lib.mjs";

const caseDir = process.argv[2];
const MAX_STEPS = parseInt(process.env.DBG_MAX_STEPS || "20", 10);
const BP_PER_ROUND = parseInt(process.env.DBG_BP_PER_ROUND || "6", 10);
const BP_TOTAL = parseInt(process.env.DBG_BP_TOTAL || "24", 10);
const MAX_TOKENS_BUDGET = parseInt(process.env.DBG_MAX_TOKENS || "200000", 10);
const WALL_SEC = parseInt(process.env.DBG_WALL_SEC || "600", 10);
const visibleRoot = path.join(caseDir, "agent_visible");
const task = JSON.parse(readFileSync(path.join(visibleRoot, "task.json"), "utf8").replace(/^﻿/, ""));
// Model-facing task prompt comes from agent_visible/prompt.md (falls back to
// task.json's question when prompt.md is absent). task.json is still the source
// for execution config: page, interaction, observable.
const promptPath = path.join(visibleRoot, "prompt.md");
const taskPrompt = existsSync(promptPath)
  ? readFileSync(promptPath, "utf8").replace(/^﻿/, "").trim()
  : (task.question || "");

// Backbone selection mirrors src/anchor_eval/llm/client.py: OpenAI-compatible
// (SophNet / DS4-Pro) when OPENAI_* / SOPHNET_API_KEY is present, else Anthropic.
function detectProvider() {
  const p = (process.env.ANCHOR_LLM_PROVIDER || "").toLowerCase();
  if (p === "openai" || p === "anthropic") return p;
  if (process.env.OPENAI_API_BASE || process.env.OPENAI_BASE_URL ||
      process.env.SOPHNET_API_KEY || process.env.OPENAI_API_KEY) return "openai";
  return "anthropic";
}
const PROVIDER = detectProvider();
const OPENAI_BASE = (process.env.OPENAI_BASE_URL || process.env.OPENAI_API_BASE ||
  "https://www.sophnet.com/api/open-apis/v1").replace(/\/+$/, "");
const OPENAI_KEY = process.env.OPENAI_API_KEY || process.env.SOPHNET_API_KEY;
const MODEL = process.env.DBG_MODEL || process.env.ANCHOR_LLM_MODEL || process.env.ANCHOR_MODEL ||
  (PROVIDER === "openai" ? "DeepSeek-V4-Pro" : "claude-opus-4-8");
const HAVE_KEY = PROVIDER === "openai" ? !!OPENAI_KEY : !!process.env.ANTHROPIC_API_KEY;

if (!HAVE_KEY) {
  process.stdout.write(JSON.stringify({ case_id: path.basename(caseDir), ok: false, reason: "no_api_key" }));
  process.exit(0);
}

const pageRel = task.page;
const servedRoot = path.join(visibleRoot, path.dirname(pageRel));
const pageFile = path.basename(pageRel);
const servedPrefix = path.relative(visibleRoot, servedRoot).split(path.sep).join("/");
const MIME = { ".js": "text/javascript", ".html": "text/html", ".css": "text/css", ".svg": "image/svg+xml", ".json": "application/json" };

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

let inTok = 0, outTok = 0;

// Anthropic-block <-> OpenAI translation (same canonical shape as the Python client).
function toOpenAITools(tools) {
  return tools.map((t) => ({ type: "function", function: {
    name: t.name, description: t.description || "",
    parameters: t.input_schema || { type: "object", properties: {} } } }));
}
function toOpenAIMessages(system, messages) {
  const out = [];
  if (system) out.push({ role: "system", content: system });
  for (const m of messages) {
    if (m.role === "assistant" && Array.isArray(m.content)) {
      const text = [], toolCalls = [];
      for (const b of m.content) {
        if (b.type === "text") text.push(b.text || "");
        else if (b.type === "tool_use") toolCalls.push({ id: b.id, type: "function",
          function: { name: b.name, arguments: JSON.stringify(b.input || {}) } });
      }
      const msg = { role: "assistant", content: text.join("\n") || null };
      if (toolCalls.length) msg.tool_calls = toolCalls;
      out.push(msg);
    } else if (m.role === "user" && Array.isArray(m.content)) {
      for (const b of m.content) {
        if (b.type === "tool_result") out.push({ role: "tool", tool_call_id: b.tool_use_id,
          content: typeof b.content === "string" ? b.content : JSON.stringify(b.content) });
        else out.push({ role: "user", content: b.text || "" });
      }
    } else {
      out.push({ role: m.role, content: typeof m.content === "string" ? m.content : JSON.stringify(m.content) });
    }
  }
  return out;
}
function fromOpenAIResponse(j) {
  const msg = (j.choices && j.choices[0] && j.choices[0].message) || {};
  const content = [];
  if (msg.content) content.push({ type: "text", text: msg.content });
  for (const tc of (msg.tool_calls || [])) {
    let input = {}; try { input = JSON.parse(tc.function.arguments || "{}"); } catch {}
    content.push({ type: "tool_use", id: tc.id, name: tc.function.name, input });
  }
  const u = j.usage || {};
  return { content, usage: { input_tokens: u.prompt_tokens || 0, output_tokens: u.completion_tokens || 0 } };
}

async function llm(messages, tools, system) {
  let resp;
  if (PROVIDER === "openai") {
    const body = { model: MODEL, max_tokens: 1500, temperature: 0,
      messages: toOpenAIMessages(system, messages) };
    if (tools) { body.tools = toOpenAITools(tools); body.tool_choice = "auto"; }
    const r = await fetch(OPENAI_BASE + "/chat/completions", { method: "POST",
      headers: { "content-type": "application/json", authorization: "Bearer " + OPENAI_KEY },
      body: JSON.stringify(body) });
    if (!r.ok) throw new Error("openai " + r.status + " " + (await r.text()).slice(0, 200));
    resp = fromOpenAIResponse(await r.json());
  } else {
    const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST",
      headers: { "content-type": "application/json", "x-api-key": process.env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: MODEL, max_tokens: 1500, temperature: 0, system, tools, messages }) });
    if (!r.ok) throw new Error("anthropic " + r.status + " " + (await r.text()).slice(0, 200));
    const j = await r.json();
    resp = { content: j.content, usage: { input_tokens: (j.usage && j.usage.input_tokens) || 0,
      output_tokens: (j.usage && j.usage.output_tokens) || 0 } };
  }
  inTok += resp.usage.input_tokens; outTok += resp.usage.output_tokens;
  return resp;
}

// Generic CDP debugger surface; no benchmark-specific strategy ops.
const TOOLS = [
  { name: "list_candidates", description: "List candidate functions {file, name, start_offset, end_offset}.",
    input_schema: { type: "object", properties: {}, required: [] } },
  { name: "read_source", description: "Return the complete function source at a (file, offset).",
    input_schema: { type: "object", properties: { file: { type: "string" }, offset: { type: "integer" } }, required: ["file", "offset"] } },
  { name: "set_breakpoint", description: "Set a breakpoint at a 0-based file offset (optional JS condition).",
    input_schema: { type: "object", properties: { file: { type: "string" }, offset: { type: "integer" }, condition: { type: "string" } }, required: ["file", "offset"] } },
  { name: "trigger", description: "Replay the task interaction once; returns ordered breakpoint hits with sync stack, async stack and shallow locals.",
    input_schema: { type: "object", properties: {}, required: [] } },
  { name: "read_vars", description: "Return local/closure variables captured at the i-th breakpoint hit of the last trigger.",
    input_schema: { type: "object", properties: { hit_index: { type: "integer" } }, required: ["hit_index"] } },
  { name: "observe", description: "Return observed console / DOM-mutation count / network requests after the last trigger.",
    input_schema: { type: "object", properties: { channel: { type: "string" } }, required: ["channel"] } },
  { name: "submit", description: "Submit the single complete anchor function.",
    input_schema: { type: "object", properties: { file: { type: "string" }, start_offset: { type: "integer" }, end_offset: { type: "integer" }, reason: { type: "string" } }, required: ["file", "start_offset", "end_offset"] } },
];

function servedUrlFor(relFile, port) {
  let base = relFile.startsWith(servedPrefix + "/") ? relFile.slice(servedPrefix.length + 1) : "assets/" + relFile.split("/assets/").pop();
  return `http://127.0.0.1:${port}/${base}`;
}
function lineCol(text, offset) { let l = 0, c = 0; for (let i = 0; i < offset && i < text.length; i++) { if (text[i] === "\n") { l++; c = 0; } else c++; } return { line: l, col: c }; }
function enclosing(ex, file, offset) {
  const c = ex.candidates.filter((c) => c.file === file && c.start_offset <= offset && c.end_offset >= offset);
  c.sort((a, b) => (a.end_offset - a.start_offset) - (b.end_offset - b.start_offset));
  return c[0] || null;
}

async function main() {
  const ex = extractCandidates(caseDir);
  const fileText = new Map(ex.files.map((f) => [f.file, f.text]));
  const out = { case_id: path.basename(caseDir), ok: false, steps: [], answer: null, best_guess: null,
    bp_total: 0, in_tokens: 0, out_tokens: 0, error: null, transcript: [], forced_submit: false };
  let browser, srv;
  const t0 = Date.now();
  try {
    const port = await getFreePort(); srv = await startServer(port);
    browser = await chromium.launch({ headless: true, executablePath: process.env.PW_CHROME || undefined });
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    const cdp = await ctx.newCDPSession(page);
    await cdp.send("Debugger.enable");
    await cdp.send("Debugger.setAsyncCallStackDepth", { maxDepth: 32 });
    const obs = { console: [], requests: [], domMutations: 0 };
    page.on("console", (m) => obs.console.push({ type: m.type(), text: m.text().slice(0, 400) }));
    page.on("request", (r) => obs.requests.push({ url: r.url(), method: r.method() }));
    const hits = [];
    cdp.on("Debugger.paused", async (evp) => {
      try {
        const top = evp.callFrames[0]; const aFrames = []; let a = evp.asyncStackTrace, g = 0;
        while (a && g++ < 6) { for (const cf of (a.callFrames || [])) aFrames.push(cf.functionName || ""); a = a.parent; }
        let locals = {};
        try { const sc = top.scopeChain.find((s) => s.type === "local" || s.type === "closure");
          if (sc && sc.object && sc.object.objectId) { const pr = await cdp.send("Runtime.getProperties", { objectId: sc.object.objectId, ownProperties: true });
            for (const p of (pr.result || []).slice(0, 16)) { const v = p.value; locals[p.name] = v ? String(v.value ?? v.description ?? v.type).slice(0, 80) : null; } } } catch {}
        hits.push({ funcName: top.functionName || "", url: top.url, lineNumber: top.location.lineNumber,
          syncStack: evp.callFrames.map((f) => f.functionName).slice(0, 12),
          asyncStack: aFrames.slice(0, 12), locals });
      } catch {}
      try { await cdp.send("Debugger.resume"); } catch {}
    });
    await page.goto(`http://127.0.0.1:${port}/${pageFile}`, { waitUntil: "load", timeout: 15000 });

    async function trigger() {
      hits.length = 0;
      for (const step of task.interaction || []) {
        const sel = step.selector;
        try {
          if (step.action === "type" || step.action === "fill") await page.fill(sel, String(step.value ?? ""));
          else if (step.action === "check") await page.check(sel).catch(() => page.click(sel));
          else if (step.action === "click") await page.click(sel);
          else if (step.action === "select") await page.selectOption(sel, String(step.value ?? ""));
        } catch {}
        await page.waitForTimeout(120);
      }
      await page.waitForTimeout(500);
      return hits.slice(0, 40);
    }

    const system = "You are a debugging agent locating the single behaviour-anchor function in a deployed, " +
      "obfuscated browser bundle. You may set breakpoints, replay the interaction, and inspect paused sync/async " +
      "stacks and local/closure variables. The anchor is the first target-specific value-construction function on " +
      "the dynamic chain (not routing, input collection, a wrapper, the sink, or a generic utility). Reason step by " +
      "step (ReAct). You MUST finish by calling the `submit` tool with the complete enclosing function's file and " +
      "offsets — do NOT give the answer only in prose, an answer not submitted via `submit` scores zero. Submit as " +
      "soon as you are confident, and always before you run out of steps; if uncertain, submit your single best guess.";
    const userText = `Task: ${taskPrompt}\nObservable: ${JSON.stringify(task.observable)}\nInteraction: ${JSON.stringify(task.interaction)}\nBundle files: ${ex.files.map((f) => f.file).join(", ")}`;
    const messages = [{ role: "user", content: userText }];

    for (let step = 0; step < MAX_STEPS; step++) {
      if (inTok + outTok >= MAX_TOKENS_BUDGET || (Date.now() - t0) / 1000 >= WALL_SEC) break;
      const resp = await llm(messages, TOOLS, system);
      out.transcript.push({
        step,
        usage: resp.usage,
        text: resp.content.filter((b) => b.type === "text").map((b) => b.text || "").join("\n").slice(0, 4000),
        tool_uses: resp.content.filter((b) => b.type === "tool_use").map((b) => ({ name: b.name, input: b.input })),
      });
      messages.push({ role: "assistant", content: resp.content });
      const toolUses = resp.content.filter((b) => b.type === "tool_use");
      if (toolUses.length === 0) break;
      let bpThisRound = 0;
      const results = [];
      for (const tu of toolUses) {
        let result = {};
        try {
          if (tu.name === "list_candidates") result = { candidates: ex.candidates.map((c) => ({ file: c.file, name: c.name, start_offset: c.start_offset, end_offset: c.end_offset })).slice(0, 400) };
          else if (tu.name === "read_source") { const fn = enclosing(ex, tu.input.file, tu.input.offset); result = fn ? { name: fn.name, start_offset: fn.start_offset, end_offset: fn.end_offset, code: fn.code.slice(0, 4000) } : { error: "not found" }; if (fn) out.best_guess = { file: fn.file, start_offset: fn.start_offset, end_offset: fn.end_offset }; }
          else if (tu.name === "set_breakpoint") {
            if (out.bp_total >= BP_TOTAL) result = { error: "task breakpoint budget exhausted" };
            else if (bpThisRound >= BP_PER_ROUND) result = { error: "per-round breakpoint budget exhausted" };
            else { const text = fileText.get(tu.input.file); const { line, col } = lineCol(text, tu.input.offset);
              const r = await cdp.send("Debugger.setBreakpointByUrl", { url: servedUrlFor(tu.input.file, port), lineNumber: line, columnNumber: col, condition: tu.input.condition || undefined });
              out.bp_total++; bpThisRound++; result = { breakpoint_id: r.breakpointId, locations: (r.locations || []).length }; }
          } else if (tu.name === "trigger") {
            const hh = await trigger();
            result = { hits: hh };
            (out.cdp_evidence = out.cdp_evidence || []).push({
              bp_total: out.bp_total,
              n_hits: Array.isArray(hh) ? hh.length : 0,
              funcs: Array.isArray(hh) ? hh.slice(0, 12).map((h) => h && h.funcName) : [],
            });
          }
          else if (tu.name === "read_vars") { const h = hits[tu.input.hit_index]; result = h ? { funcName: h.funcName, locals: h.locals, syncStack: h.syncStack, asyncStack: h.asyncStack } : { error: "no such hit" }; }
          else if (tu.name === "observe") { const ch = tu.input.channel; result = ch === "console" ? { console: obs.console.slice(-20) } : ch === "network" ? { requests: obs.requests.slice(-20) } : { domMutations: obs.domMutations }; }
          else if (tu.name === "submit") { out.answer = tu.input; out.ok = true; out.best_guess = tu.input; }
        } catch (e) { result = { error: String(e.message || e).slice(0, 160) }; }
        results.push({ type: "tool_result", tool_use_id: tu.id, content: JSON.stringify(result).slice(0, 6000) });
        out.steps.push({ tool: tu.name });
      }
      if (out.answer) break;
      messages.push({ role: "user", content: results });
    }
    // Final forced-submit step (mirrors src/anchor_eval/methods/agents/_agent_loop.py):
    // a budget-exhausted agent must still commit a top-1 via submit, not stop in prose.
    if (!out.answer && (Date.now() - t0) / 1000 < WALL_SEC && inTok + outTok < MAX_TOKENS_BUDGET) {
      const submitOnly = TOOLS.filter((t) => t.name === "submit");
      const finalUser = "This is the final allowed step. You MUST call submit now and may not use any other tool. " +
        "Submit the single complete enclosing function you believe is the behaviour anchor; if unsure, submit your " +
        "best current guess. An answer given only in prose (without calling submit) scores zero.";
      try {
        const resp = await llm([...messages, { role: "user", content: finalUser }], submitOnly, system);
        out.transcript.push({ step: "final", usage: resp.usage,
          text: resp.content.filter((b) => b.type === "text").map((b) => b.text || "").join("\n").slice(0, 4000),
          tool_uses: resp.content.filter((b) => b.type === "tool_use").map((b) => ({ name: b.name, input: b.input })) });
        for (const tu of resp.content.filter((b) => b.type === "tool_use")) {
          out.steps.push({ tool: tu.name });
          if (tu.name === "submit") { out.answer = tu.input; out.ok = true; out.best_guess = tu.input; out.forced_submit = true; }
        }
      } catch (e) { /* fall through to best_guess */ }
    }
    // Last resort: commit the running best_guess as an adapter-forced submission.
    if (!out.answer && out.best_guess) {
      out.answer = out.best_guess; out.ok = true; out.forced_submit = true;
      out.steps.push({ tool: "submit", adapter_forced: true });
    }
  } catch (e) { out.error = String((e && e.message) || e).slice(0, 300); }
  finally { try { if (browser) await browser.close(); } catch {} try { if (srv) srv.close(); } catch {} }
  out.in_tokens = inTok; out.out_tokens = outTok;
  process.stdout.write(JSON.stringify(out));
}
main();
