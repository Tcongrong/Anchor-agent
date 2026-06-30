// Regenerate oracle.hidden.json captured_span + answer_function against the current
// captured bundle for case010_request_transformation.
//
// The shipped bundle is rollup -> javascript-obfuscator (identifierNamesGenerator:
// "hexadecimal" inside an IIFE, fixed seed 1010), so every identifier is mangled to a
// _0x... name and string literals/member names move into a string array. Resolution is
// therefore STRUCTURAL (call graph + operators + numeric literals), never by source
// name or by string-literal content, so it survives a reseeded rebuild:
//
//   * anchor r = the smallest function whose body contains the surviving constant
//     0x27d4eb2d (the per-character mixing loop); u = the function enclosing it.
//   * t9 cluster (createSource/makePlainMap/normalizeTuple/r32/segment/fromCodes) is
//     resolved from the anchor's callee set: createSource is the unique anchor-callee
//     that calls another anchor-callee (makePlainMap); the three leaves are split by
//     bit-shift operators (r32) and the base-36 literal 0x24 (segment).
//   * m0/produce/o0/chooseConfig/n0/dispatchRequest/buildPayload/paint and the four
//     char-code sink helpers are resolved by the runtime call graph and byte-size order
//     (which scales with the source char-code array length).
//
// Run after `npm run build` (which copies dist into captures/ then invokes this script).
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4197/assets/media.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");
const ast = acorn.parse(bundle, { ecmaVersion: 2022 });

function fail(error) { console.error(JSON.stringify({ error: "gen_oracle_spans_failed", ...error }, null, 2)); process.exit(1); }

const funcs = [];
const nameToNode = new Map();
const declNameOffset = new Map();
(function walk(node) {
  if (!node || typeof node.type !== "string") return;
  if (/Function/.test(node.type)) {
    funcs.push(node);
    if (node.type === "FunctionDeclaration" && node.id) { nameToNode.set(node.id.name, node); declNameOffset.set(node.id.name, node.id.start); }
  }
  if (node.type === "VariableDeclarator" && node.id?.type === "Identifier" && node.init && typeof node.init.type === "string" && /Function/.test(node.init.type)) {
    nameToNode.set(node.id.name, node.init); declNameOffset.set(node.id.name, node.id.start);
  }
  for (const k in node) { if (k === "type" || k === "start" || k === "end") continue; const v = node[k];
    if (Array.isArray(v)) v.forEach((c) => c && typeof c.type === "string" && walk(c));
    else if (v && typeof v.type === "string") walk(v); }
})(ast);

const txt = (n) => bundle.slice(n.start, n.end);
const size = (n) => n.end - n.start;
const nameOf = (node) => { for (const [n, nd] of nameToNode) if (nd === node) return n; return null; };
const refCountText = (name) => (bundle.match(new RegExp("\\b" + name + "\\b", "g")) || []).length;
function refFuncsIn(fn) {
  const own = nameOf(fn); const out = new Set();
  (function w(node) {
    if (!node || typeof node.type !== "string") return;
    if (node !== fn && /Function/.test(node.type)) return;
    if (node.type === "Identifier" && nameToNode.has(node.name) && node.name !== own && node.start !== declNameOffset.get(node.name)) out.add(node.name);
    for (const k in node) { if (k === "type" || k === "start" || k === "end") continue; const v = node[k];
      if (Array.isArray(v)) v.forEach((c) => c && typeof c.type === "string" && w(c));
      else if (v && typeof v.type === "string") w(v); }
  })(fn);
  return [...out];
}
const refFuncNodes = (fn) => refFuncsIn(fn).filter((n) => refCountText(n) < 200).map((n) => nameToNode.get(n));
const smallestFuncAt = (off) => { let best = null; for (const f of funcs) { if (f.start <= off && off < f.end) { if (!best || size(f) < size(best)) best = f; } } return best; };
function usersOf(name) {
  const decl = nameToNode.get(name); const re = new RegExp("\\b" + name + "\\b", "g"); const set = new Set(); let m;
  while ((m = re.exec(bundle))) { if (m.index === declNameOffset.get(name)) continue; const f = smallestFuncAt(m.index); if (f && f !== decl) set.add(f); }
  return [...set];
}
const smallestEnclosing = (node) => { let best = null; for (const f of funcs) { if (f !== node && f.start <= node.start && node.end <= f.end) { if (!best || size(f) < size(best)) best = f; } } return best; };

// ---- anchor + factory (constant 0x27d4eb2d is unique to the mixing loop) ----
const fpFuncs = funcs.filter((f) => txt(f).includes("0x27d4eb2d")).sort((a, b) => size(a) - size(b));
if (!fpFuncs.length) fail({ reason: "anchor_fingerprint_0x27d4eb2d_not_found" });
const r = fpFuncs[0];
const u = smallestEnclosing(r);
if (!u) fail({ reason: "factory_u_not_found" });

// ---- t9 cluster from the anchor callee set ----
const rRefs = refFuncNodes(r);
const createSource = rRefs.find((c) => refFuncNodes(c).some((x) => rRefs.includes(x) && x !== c));
if (!createSource) fail({ reason: "createSource_not_found", rRefs: rRefs.length });
const makePlainMap = refFuncNodes(createSource).find((x) => rRefs.includes(x) && x !== createSource);
if (!makePlainMap) fail({ reason: "makePlainMap_not_found" });
const mpRefs = refFuncNodes(makePlainMap);
const normalizeTuple = mpRefs.find((c) => /\bsort\b/.test(txt(c))) || mpRefs[0];
if (!normalizeTuple) fail({ reason: "normalizeTuple_not_found" });
const leaves = rRefs.filter((c) => c !== createSource && c !== makePlainMap);
const r32 = leaves.find((c) => /<</.test(txt(c)) && />>>/.test(txt(c)));
const segment = leaves.find((c) => c !== r32 && /0x24\b/.test(txt(c)));
const fromCodes = leaves.find((c) => c !== r32 && c !== segment);
if (!r32 || !segment || !fromCodes) fail({ reason: "t9_leaf_split_failed", leaves: leaves.map((c) => size(c)) });

// ---- m0 / produce / o0 / chooseConfig ----
const produce = usersOf(nameOf(u)).filter((f) => f !== u && f !== r)[0];
if (!produce) fail({ reason: "produce_not_found" });
const m0 = usersOf(nameOf(produce)).filter((f) => f !== produce)[0];
if (!m0) fail({ reason: "m0_not_found" });
const produceRefs = refFuncNodes(produce).filter((n) => n !== u);
const o0 = produceRefs.find((c) => /fragment|salt|batch|lane/.test(txt(c))) || produceRefs.slice().sort((a, b) => size(b) - size(a))[0];
const chooseConfig = produceRefs.find((c) => c !== o0);
if (!o0 || !chooseConfig) fail({ reason: "o0_chooseConfig_not_found", produceRefs: produceRefs.length });

// ---- n0 sink cluster ----
const dispatchRequest = funcs.find((f) => /\bfetch\s*\(/.test(txt(f)) && size(f) < 2500);
if (!dispatchRequest) fail({ reason: "dispatchRequest_not_found" });
const dispatchUsers = usersOf(nameOf(dispatchRequest)).filter((f) => f !== dispatchRequest);
const n0 = dispatchUsers.filter((f) => size(f) < 1500).sort((a, b) => a.start - b.start)[0] || dispatchUsers[0];
if (!n0) fail({ reason: "n0_not_found" });
const n0Refs = refFuncNodes(n0);
const buildPayload = n0Refs.slice().sort((a, b) => size(b) - size(a))[0];
const paint = n0Refs.find((c) => c !== buildPayload && c !== dispatchRequest && /document/.test(txt(c)))
  || n0Refs.find((c) => c !== buildPayload && c !== dispatchRequest);
if (!buildPayload || !paint) fail({ reason: "buildPayload_paint_not_found" });
const bp = refFuncNodes(buildPayload);
const dr = refFuncNodes(dispatchRequest);
const pa = refFuncNodes(paint);
const targetField = pa.find((c) => bp.includes(c)) || pa[0];
const endpointName = bp.filter((c) => dr.includes(c)).sort((a, b) => size(b) - size(a))[0];
const contentTypeValue = dr.filter((c) => !bp.includes(c)).sort((a, b) => size(b) - size(a))[0];
const actionValue = bp.filter((c) => c !== targetField && !dr.includes(c)).sort((a, b) => size(b) - size(a))[0];
if (!targetField || !endpointName || !contentTypeValue || !actionValue) fail({ reason: "sink_field_helpers_not_found" });

// ---- p0 (off-chain shadow decoy emitter): largest m0 callee that is not produce/n0 ----
const p0 = refFuncNodes(m0).filter((c) => c !== produce && c !== n0).sort((a, b) => size(b) - size(a))[0];
if (!p0) fail({ reason: "p0_not_found" });

const resolved = {
  r, createSource, makePlainMap, segment, r32, normalizeTuple, fromCodes, u,
  produce, m0, o0, chooseConfig, n0, dispatchRequest, buildPayload, paint,
  targetField, actionValue, endpointName, contentTypeValue, p0,
};
const missing = Object.entries(resolved).filter(([, v]) => !v).map(([k]) => k);
if (missing.length) fail({ reason: "unresolved", missing });

// ---- spans + write ----
const sha = (t) => createHash("sha256").update(t).digest("hex");
const nsha = (t) => createHash("sha256").update(t.replace(/\s+/g, " ").trim()).digest("hex");
function offLC(off) { let line = 1, ls = 0; for (let i = 0; i < off && i < bundle.length; i += 1) { if (bundle[i] === "\n") { line += 1; ls = i + 1; } } return { line, col: off - ls }; }
function span(node) { const a = offLC(node.start), b = offLC(node.end);
  return { file: capRel, start_line: a.line, end_line: b.line, start_column: a.col, end_column: b.col, start_offset: node.start, end_offset: node.end, sha256: sha(txt(node)), normalized_sha256: nsha(txt(node)) }; }
function bundleName(node) { const m = txt(node).match(/^function\s+([A-Za-z0-9_$]+)/); return m ? m[1] : null; }

const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));

function applyEntry(entry) {
  const node = resolved[entry.source_function];
  if (!node) fail({ reason: "unresolved_source_function", source_function: entry.source_function });
  entry.captured_span = span(node);
  const an = bundleName(node);
  if (!an) fail({ reason: "answer_function_name_not_extracted", source_function: entry.source_function });
  entry.answer_function = an;
}
for (const entry of oracle.role_oracle) applyEntry(entry);

oracle.primary_anchor.captured_span = span(r);
oracle.primary_anchor.answer_function = bundleName(r);
oracle.primary_anchor.source_bundle_name_aligned = bundleName(r) === oracle.primary_anchor.source_function;

// ---- self-checks ----
function isComplete(text) { const t = text.trim(); return /^function\s+[A-Za-z0-9_$]+\s*\(/.test(t) && t.endsWith("}") && t.length > 40; }
const dupGroups = new Map();
for (const entry of oracle.role_oracle) {
  const id = `${entry.captured_span.start_offset}-${entry.captured_span.end_offset}`;
  if (!dupGroups.has(id)) dupGroups.set(id, []);
  dupGroups.get(id).push(entry.source_function);
}
const duplicates = [...dupGroups.entries()].filter(([, k]) => k.length > 1);
if (duplicates.length) fail({ reason: "duplicate_span_across_entries", duplicates });

let hashPass = 0; const incomplete = [];
for (const entry of oracle.role_oracle) {
  const slice = bundle.slice(entry.captured_span.start_offset, entry.captured_span.end_offset);
  if (sha(slice) === entry.captured_span.sha256) hashPass += 1;
  if (!isComplete(slice)) incomplete.push({ source_function: entry.source_function, head: slice.slice(0, 60) });
}
if (incomplete.length) fail({ reason: "non_complete_function_slices", incomplete });
const anchorBytes = r.end - r.start;
if (anchorBytes <= 100) fail({ reason: "anchor_span_too_short", anchorBytes });

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

console.log(JSON.stringify({
  case_id: oracle.case_id,
  bundle_function_count: funcs.length,
  role_oracle_updated: oracle.role_oracle.length,
  hash_verified: hashPass,
  anchor_bytes: anchorBytes,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
  duplicate_span_groups: duplicates.length,
}, null, 2));

if (hashPass !== oracle.role_oracle.length) fail({ reason: "post_write_hash_mismatch", hashPass, total: oracle.role_oracle.length });
