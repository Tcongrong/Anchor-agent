// Regenerate oracle.hidden.json captured_span coordinates + answer_function against
// the current captured bundle for case010_browser_fingerprint.
//
// The shipped bundle is obfuscated with identifierNamesGenerator:"hexadecimal" inside
// an IIFE, so every identifier is mangled to a _0x... name and source names do NOT
// survive. Resolution therefore cannot be name-based (unlike case001). Instead:
//
//   * The t9.js fingerprint cluster is resolved STRUCTURALLY and is robust across a
//     reseeded rebuild: the encoder is found via the unique constant 0x27d4eb2d, the
//     anchor via "the function that calls the encoder", and the remaining cluster
//     members via the runtime call graph (materialize via Uint8Array(0x12); rot is the
//     callee shared by materialize and signalLaneWord; fmix is signalLaneWord's other
//     callee; compose is the declaration immediately preceding signalLaneWord; the
//     factory u is the function enclosing the closure that calls the anchor).
//   * microSlice (async boundary) and fromCodes are resolved via stable source tokens
//     (queueMicrotask / fromCharCode), also reseed-robust.
//   * Four lower-tier decoy/path entries (collectFields, produce, n0, digest) are
//     resolved via the mangled bundle name recorded as a FROZEN hint below. These hints
//     are specific to the committed capture; if you reseed/rebuild, update them.
//
// Run after `npm run build` (which copies dist into captures/) whenever src/ or the
// obfuscation output changes.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4197/assets/media.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

// Frozen mangled-name hints for entries with no stable structural anchor.
const FROZEN_NAME_HINTS = {
  collectFields: "_0x6c09f3",
  produce: "_0x21548f",
  n0: "_0x2324ad",
  digest: "_0x34bfa3",
};

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}
function nsha(text) {
  return createHash("sha256").update(text.replace(/\s+/g, " ").trim()).digest("hex");
}

function offLC(offset) {
  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset && i < bundle.length; i += 1) {
    if (bundle[i] === "\n") {
      line += 1;
      lineStart = i + 1;
    }
  }
  return { line, col: offset - lineStart };
}

function span(node) {
  const start = offLC(node.start);
  const end = offLC(node.end);
  const text = bundle.slice(node.start, node.end);
  return {
    file: capRel,
    start_line: start.line,
    end_line: end.line,
    start_column: start.col,
    end_column: end.col,
    start_offset: node.start,
    end_offset: node.end,
    sha256: sha(text),
    normalized_sha256: nsha(text),
  };
}

function buildStringMask(source) {
  const mask = new Uint8Array(source.length);
  let inSingle = false, inDouble = false, inTemplate = false, escape = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (escape) { escape = false; continue; }
    if (ch === "\\") { escape = true; continue; }
    if (!inDouble && !inTemplate && ch === "'") inSingle = !inSingle;
    else if (!inSingle && !inTemplate && ch === '"') inDouble = !inDouble;
    else if (!inSingle && !inDouble && ch === "`") inTemplate = !inTemplate;
    if (inSingle || inDouble || inTemplate) mask[i] = 1;
  }
  return mask;
}
const inString = buildStringMask(bundle);

function findMatchingParen(openIndex) {
  let depth = 0;
  for (let i = openIndex; i < bundle.length; i += 1) {
    if (inString[i]) continue;
    const ch = bundle[i];
    if (ch === "(") depth += 1;
    else if (ch === ")") { depth -= 1; if (depth === 0) return i; }
  }
  return -1;
}
function findMatchingBrace(openIndex) {
  let depth = 0;
  for (let i = openIndex; i < bundle.length; i += 1) {
    if (inString[i]) continue;
    const ch = bundle[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") { depth -= 1; if (depth === 0) return i + 1; }
  }
  return -1;
}

// Parse every `function NAME(...) { ... }` declaration/expression in the bundle.
function parseBundleFunctions() {
  const out = [];
  const re = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(bundle))) {
    const keywordIndex = match.index;
    if (inString[keywordIndex]) continue;
    const parenOpen = bundle.indexOf("(", keywordIndex);
    if (parenOpen === -1) continue;
    const parenClose = findMatchingParen(parenOpen);
    if (parenClose === -1) continue;
    let bodyOpen = -1;
    for (let i = parenClose + 1; i < bundle.length; i += 1) {
      if (inString[i]) continue;
      if (bundle[i] === "{") { bodyOpen = i; break; }
      if (!/\s/.test(bundle[i])) { bodyOpen = -1; break; }
    }
    if (bodyOpen === -1) continue;
    const end = findMatchingBrace(bodyOpen);
    if (end === -1) continue;
    out.push({ name: match[1], start: keywordIndex, end, body: bundle.slice(keywordIndex, end) });
  }
  return out;
}
const decls = parseBundleFunctions();
const declNameSet = new Set(decls.map((d) => d.name));

function fail(error) {
  console.error(JSON.stringify({ error: "gen_oracle_spans_failed", ...error }, null, 2));
  process.exit(1);
}

function enclosingDecl(offset, excludeStart = -1) {
  let best = null;
  for (const d of decls) {
    if (d.start === excludeStart) continue;
    if (d.start <= offset && offset < d.end) {
      if (!best || d.end - d.start < best.end - best.start) best = d;
    }
  }
  return best;
}
function declByName(name) {
  const hits = decls.filter((d) => d.name === name);
  return hits.length === 1 ? hits[0] : null;
}
// Names of bundle functions actually invoked inside body (excludes self, string-array
// alias and any locally-declared name).
function realCallees(decl) {
  const localDecl = new Set();
  for (const m of decl.body.matchAll(/(?:const|let|var|function)\s+(_0x[0-9a-f]+)\b/g)) localDecl.add(m[1]);
  const callees = new Set();
  for (const m of decl.body.matchAll(/(_0x[0-9a-f]+)\s*\(/g)) {
    const n = m[1];
    if (n === decl.name) continue;
    if (localDecl.has(n)) continue;
    if (!declNameSet.has(n)) continue;
    callees.add(n);
  }
  return [...callees];
}
function declsCalling(name, excludeStart = -1) {
  const needle = name + "(";
  return decls.filter((d) => d.start !== excludeStart && d.start !== declByName(name)?.start && d.body.includes(needle));
}

// ---- structural resolution of the t9 fingerprint cluster ----
function uniqueOffset(token) {
  const first = bundle.indexOf(token);
  if (first === -1) return -1;
  if (bundle.indexOf(token, first + 1) !== -1) return -2; // not unique
  return first;
}

const encOff = uniqueOffset("0x27d4eb2d");
if (encOff < 0) fail({ reason: "encoder_constant_0x27d4eb2d_not_unique", encOff });
const encode = enclosingDecl(encOff);
if (!encode) fail({ reason: "encoder_enclosing_decl_not_found" });

const anchorCandidates = decls.filter((d) => d.start !== encode.start && d.body.includes(encode.name + "("));
if (anchorCandidates.length !== 1) fail({ reason: "anchor_not_unique", count: anchorCandidates.length });
const anchor = anchorCandidates[0];

const matOff = uniqueOffset("Uint8Array(0x12)");
if (matOff < 0) fail({ reason: "materialize_token_not_unique", matOff });
const materialize = enclosingDecl(matOff);
if (!materialize) fail({ reason: "materialize_enclosing_decl_not_found" });

const matCallees = realCallees(materialize); // expect {rot, signalLaneWord}
if (matCallees.length !== 2) fail({ reason: "materialize_callees_unexpected", matCallees });
// signalLaneWord is the materialize-callee whose body calls the OTHER materialize-callee (rot)
let slw = null, rot = null;
for (const name of matCallees) {
  const d = declByName(name);
  const other = matCallees.find((n) => n !== name);
  if (d && d.body.includes(other + "(")) { slw = d; rot = declByName(other); }
}
if (!slw || !rot) fail({ reason: "signalLaneWord_rot_resolution_failed", matCallees });

const slwCallees = realCallees(slw).filter((n) => n !== rot.name); // expect {fmix}
if (slwCallees.length !== 1) fail({ reason: "fmix_resolution_ambiguous", slwCallees });
const fmix = declByName(slwCallees[0]);
if (!fmix) fail({ reason: "fmix_decl_not_found" });

// compose = declaration immediately preceding signalLaneWord (adjacent in source order)
let compose = null;
for (const d of decls) {
  if (d.start < slw.start && (!compose || d.start > compose.start)) compose = d;
}
if (!compose || !anchor.body.includes(compose.name + "(")) {
  fail({ reason: "compose_resolution_failed", compose: compose && compose.name });
}

// u factory = the function enclosing the inner closure that calls the anchor.
// Nested matches appear (the closure AND its enclosing factory both contain the call);
// the inner closure is the innermost (smallest-span) match.
const innerCalls = decls
  .filter((d) => d.start !== anchor.start && d.body.includes(anchor.name + "("))
  .sort((a, b) => (a.end - a.start) - (b.end - b.start));
if (!innerCalls.length) fail({ reason: "anchor_inner_closure_not_found" });
const innerR = innerCalls[0];
const u = enclosingDecl(innerR.start, innerR.start);
if (!u) fail({ reason: "factory_u_not_found" });

// ---- token / hint resolution of non-cluster entries ----
function enclosingOfToken(token, which = "first") {
  let off = -1;
  if (which === "last") off = bundle.lastIndexOf(token);
  else off = bundle.indexOf(token);
  if (off === -1) return null;
  return enclosingDecl(off);
}
const microSlice = enclosingOfToken("queueMicrotask", "first");
if (!microSlice) fail({ reason: "microSlice_not_found" });
const fromCodes = enclosingOfToken("fromCharCode", "last");
if (!fromCodes) fail({ reason: "fromCodes_not_found" });

const resolved = {
  deriveMediaFingerprint: anchor,
  encodeFingerprintHash: encode,
  materializeSignalBytes: materialize,
  composeSignalText: compose,
  signalLaneWord: slw,
  fmix,
  rot,
  u,
  fromCodes,
  microSlice,
};
for (const [src, hint] of Object.entries(FROZEN_NAME_HINTS)) {
  const d = declByName(hint);
  if (!d) fail({ reason: "frozen_hint_not_found", source_function: src, hint });
  resolved[src] = d;
}

// ---- write oracle ----
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));

function applyEntry(entry) {
  const d = resolved[entry.source_function];
  if (!d) fail({ reason: "unresolved_source_function", source_function: entry.source_function });
  entry.captured_span = span(d);
  entry.answer_function = d.name;
}
for (const entry of oracle.role_oracle) applyEntry(entry);

// primary_anchor mirrors the Anchor role entry
oracle.primary_anchor.captured_span = span(anchor);
oracle.primary_anchor.answer_function = anchor.name;
oracle.primary_anchor.source_bundle_name_aligned =
  anchor.name === oracle.primary_anchor.source_function;

// ---- self-checks ----
function isComplete(text) {
  const t = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(t)) return false;
  if (!t.endsWith("}")) return false;
  return t.length > 40;
}
const dupGroups = new Map();
for (const entry of oracle.role_oracle) {
  const id = `${entry.captured_span.start_offset}-${entry.captured_span.end_offset}`;
  if (!dupGroups.has(id)) dupGroups.set(id, []);
  dupGroups.get(id).push(entry.source_function);
}
const duplicates = [...dupGroups.entries()].filter(([, k]) => k.length > 1);
if (duplicates.length) fail({ reason: "duplicate_span_across_entries", duplicates });

let hashPass = 0;
const completeness = [];
for (const entry of oracle.role_oracle) {
  const slice = bundle.slice(entry.captured_span.start_offset, entry.captured_span.end_offset);
  if (sha(slice) === entry.captured_span.sha256) hashPass += 1;
  if (!isComplete(slice)) completeness.push({ source_function: entry.source_function, head: slice.slice(0, 60) });
}
const anchorBytes = anchor.end - anchor.start;
if (anchorBytes <= 100) fail({ reason: "anchor_span_too_short", anchorBytes });

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

console.log(JSON.stringify({
  case_id: oracle.case_id,
  bundle_function_count: decls.length,
  role_oracle_updated: oracle.role_oracle.length,
  hash_verified: hashPass,
  anchor_bytes: anchorBytes,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
  duplicate_span_groups: duplicates.length,
  non_complete_function_slices: completeness,
}, null, 2));

if (hashPass !== oracle.role_oracle.length) {
  fail({ reason: "post_write_hash_mismatch", hashPass, total: oracle.role_oracle.length });
}
