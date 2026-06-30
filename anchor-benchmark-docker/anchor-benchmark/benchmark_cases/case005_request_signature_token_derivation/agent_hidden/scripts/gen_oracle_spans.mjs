// gen_oracle_spans.mjs - case005_request_signature_token_derivation
// Regenerate oracle.hidden.json captured_span coordinates from the frozen
// agent-visible captures bundle (the corpus the agent actually sees).
//
// Design (审查.md §11):
//  - Offsets are 0-based BYTE offsets (canonical contract §12.4).
//  - Functions are located with a string/template-aware brace matcher (no
//    "first { after signature" shortcut, so default-parameter `= {}` cannot
//    truncate a span). parseFunctions also descends into nested functions.
//  - 12 oracle rows are module-level functions; with es output +
//    renameGlobals:false their source name survives obfuscation, so each row is
//    pinned by answer_function (= source name), asserted unique in the bundle.
//  - The anchor is the factory-returned inner closure requestSignatureTokenDerivation;
//    its name is mangled, so it is pinned by a rebuild-stable fingerprint: the
//    unique function (excluding makeBody/makeTape/hasRequestSignatureEvidence/
//    createSignatureReducer) whose body references all three of those preserved
//    callee names and contains the 0x27d4eb2d mixing constant. The discovered
//    mangled name is written back as answer_function.
//  - source_function is the private src/ name and never grades the agent.
import { readFile, writeFile } from "node:fs/promises";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const buildMetaPath = path.join(hiddenRoot, "build_meta.hidden.json");
const bundleRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/browser.app.bundle.js";
const bundlePath = path.join(visibleRoot, bundleRel);

function sha256(buf) { return crypto.createHash("sha256").update(buf).digest("hex"); }
// normalized hash: strip all whitespace, so cosmetic reflows hash equally.
function normalizedSha(text) { return sha256(Buffer.from(text.replace(/\s+/g, ""), "utf8")); }
function fail(msg) { console.error(JSON.stringify({ generator: "gen_oracle_spans", ok: false, error: msg }, null, 2)); process.exit(1); }

// Parse every `function NAME(...) { ... }` (incl. async, incl. nested), string/template aware.
function parseFunctions(str) {
  const re = /(?:async\s+)?function\s+([A-Za-z0-9_$]+)\s*\(/g;
  const out = [];
  let m;
  while ((m = re.exec(str))) {
    const name = m[1];
    let i = m.index + m[0].length - 1; // at '('
    let depth = 0, inStr = null;
    for (; i < str.length; i++) {
      const c = str[i];
      if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
      if (c === "'" || c === '"' || c === "`") { inStr = c; continue; }
      if (c === "(") depth++;
      else if (c === ")") { depth--; if (depth === 0) { i++; break; } }
    }
    while (i < str.length && str[i] !== "{") i++;
    if (str[i] !== "{") continue;
    let bdepth = 0; inStr = null; let end = -1;
    for (; i < str.length; i++) {
      const c = str[i];
      if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
      if (c === "'" || c === '"' || c === "`") { inStr = c; continue; }
      if (c === "{") bdepth++;
      else if (c === "}") { bdepth--; if (bdepth === 0) { end = i + 1; break; } }
    }
    if (end < 0) continue;
    out.push({ name, charStart: m.index, charEnd: end, text: str.slice(m.index, end) });
  }
  return out;
}

const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
const buf = await readFile(bundlePath);
const str = buf.toString("utf8");

const funcs = parseFunctions(str);
const byName = new Map();
for (const f of funcs) { if (!byName.has(f.name)) byName.set(f.name, []); byName.get(f.name).push(f); }

function lineAt(charIdx) { let n = 1; for (let i = 0; i < charIdx; i++) if (str[i] === "\n") n++; return n; }
function byteOffsetOfChar(charIdx) { return Buffer.byteLength(str.slice(0, charIdx), "utf8"); }

function resolveByName(name, tag) {
  const list = byName.get(name) || [];
  if (list.length !== 1) fail(`${tag}: answer_function '${name}' resolves to ${list.length} declarations (need exactly 1)`);
  return list[0];
}

// Anchor fingerprint: the unique non-{makeBody,makeTape,hasRequestSignatureEvidence,
// createSignatureReducer} function whose body references all three preserved
// callee names AND contains the 0x27d4eb2d mixing constant.
let cachedAnchor = null;
function resolveAnchor(tag) {
  if (cachedAnchor) return cachedAnchor;
  for (const need of ["makeBody", "makeTape", "hasRequestSignatureEvidence", "createSignatureReducer"]) {
    if (!byName.has(need)) fail(`${tag}: expected module-level '${need}' not found in bundle (renameGlobals must stay false)`);
  }
  const excluded = new Set(["makeBody", "makeTape", "hasRequestSignatureEvidence", "createSignatureReducer"]);
  const cands = funcs.filter((f) => !excluded.has(f.name)
    && /\bmakeBody\b/.test(f.text) && /\bmakeTape\b/.test(f.text)
    && /\bhasRequestSignatureEvidence\b/.test(f.text) && f.text.includes("0x27d4eb2d"));
  if (cands.length !== 1) fail(`${tag}: anchor fingerprint matched ${cands.length} functions (need exactly 1): ${cands.map((c) => c.name).join(",")}`);
  cachedAnchor = cands[0];
  return cachedAnchor;
}

function resolveEntry(entry, tag) {
  if (entry.anchor_fingerprint) {
    const decl = resolveAnchor(tag);
    return { decl, answer_function: decl.name, source_function: entry.source_function || "requestSignatureTokenDerivation" };
  }
  const name = entry.answer_function;
  if (!name) fail(`${tag}: non-anchor entry must carry a preset answer_function`);
  const decl = resolveByName(name, tag);
  return { decl, answer_function: name, source_function: entry.source_function || name };
}

function buildSpan(decl) {
  const text = str.slice(decl.charStart, decl.charEnd);
  const byteStart = byteOffsetOfChar(decl.charStart);
  const byteEnd = byteStart + Buffer.byteLength(text, "utf8");
  const sliceBuf = buf.slice(byteStart, byteEnd);
  if (sliceBuf.toString("utf8") !== text) fail(`byte/char reslice mismatch for ${decl.name}`);
  return {
    file: bundleRel,
    start_line: lineAt(decl.charStart),
    end_line: lineAt(decl.charEnd),
    start_column: 0,
    end_column: 1,
    start_offset: byteStart,
    end_offset: byteEnd,
    sha256: sha256(sliceBuf),
    normalized_sha256: normalizedSha(text),
  };
}

// ---- primary anchor ----
const paInfo = resolveEntry(oracle.primary_anchor, "primary_anchor");
const paSpan = buildSpan(paInfo.decl);
const anchorText = paInfo.decl.text;
if (!/^(?:async\s+)?function\s+/.test(anchorText)) fail("anchor slice does not start with a function declaration");
if (paSpan.end_offset - paSpan.start_offset < 100) fail("anchor span < 100 bytes (likely truncated)");

oracle.primary_anchor = {
  answer_function: paInfo.answer_function,
  source_function: paInfo.source_function,
  source_file: oracle.primary_anchor.source_file,
  source_export: oracle.primary_anchor.source_export,
  captured_file: paSpan.file,
  captured_span: paSpan,
  answer_basis: "Agent-visible captures corpus only; grade by captured_span (byte offsets + sha256) plus answer_function. source_function is a private maintainer mapping and is not the agent answer space.",
  semantic_role: "Anchor",
  score: 1,
  why: oracle.primary_anchor.why,
};

// ---- role oracle ----
const seenSpans = new Map();
let anchorRows = 0;
const newRoles = oracle.role_oracle.map((entry, idx) => {
  const info = resolveEntry(entry, `role_oracle[${idx}] (${entry.answer_function || entry.source_function || "anchor"})`);
  const span = buildSpan(info.decl);
  if (entry.role === "Anchor") anchorRows++;
  const key = `${span.start_offset}-${span.end_offset}`;
  if (!seenSpans.has(key)) seenSpans.set(key, []);
  seenSpans.get(key).push(info.answer_function);
  return {
    answer_function: info.answer_function,
    source_function: info.source_function,
    role: entry.role,
    score: entry.score,
    source_file: entry.source_file,
    captured_span: span,
    why: entry.why,
  };
});
oracle.role_oracle = newRoles;
oracle.target_reference = { ...oracle.target_reference, task_file: "agent_visible/task.json" };

// ---- self checks (审查.md §11.2) ----
const duplicateGroups = [...seenSpans.entries()].filter(([, names]) => names.length > 1);
if (anchorRows !== 1) fail(`role_oracle must contain exactly 1 Anchor row, found ${anchorRows}`);
if (duplicateGroups.length) fail(`duplicate captured_span across distinct functions: ${JSON.stringify(duplicateGroups)}`);
const anchorRow = newRoles.find((r) => r.role === "Anchor");
if (anchorRow.answer_function !== oracle.primary_anchor.answer_function) fail("Anchor row answer_function != primary_anchor.answer_function");
if (anchorRow.captured_span.start_offset !== paSpan.start_offset || anchorRow.captured_span.end_offset !== paSpan.end_offset) fail("Anchor row span != primary_anchor span");
// anchor body must actually construct the rs_ token (semantic guard, 轨B)
if (!/\bmakeBody\b/.test(anchorText) || !/\bhasRequestSignatureEvidence\b/.test(anchorText)) fail("anchor body does not reference makeBody + hasRequestSignatureEvidence");

await writeFile(oraclePath, JSON.stringify(oracle, null, 2) + "\n", "utf8");

// ---- mirror anchor into build_meta (agent-hidden) ----
const buildMeta = JSON.parse(await readFile(buildMetaPath, "utf8"));
buildMeta.primary_anchor = {
  answer_function: oracle.primary_anchor.answer_function,
  source_function: oracle.primary_anchor.source_function,
  source_file: oracle.primary_anchor.source_file,
  captured_span: paSpan,
};
if (buildMeta.build_artifacts) {
  buildMeta.build_artifacts.bundle_bytes = buf.length;
  buildMeta.build_artifacts.bundle_lines = str.split(/\r?\n/).length;
}
await writeFile(buildMetaPath, JSON.stringify(buildMeta, null, 2) + "\n", "utf8");

console.log(JSON.stringify({
  generator: "gen_oracle_spans",
  ok: true,
  role_oracle_updated: newRoles.length,
  hash_verified: newRoles.length + 1,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_bytes: paSpan.end_offset - paSpan.start_offset,
  anchor_span: `${paSpan.start_offset}-${paSpan.end_offset}`,
  duplicate_span_groups: duplicateGroups.length,
  offset_unit: "utf8_bytes",
}, null, 2));
