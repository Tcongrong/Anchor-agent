// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
//
// The shipped bundle is rollup -> javascript-obfuscator. All answer functions are module-private
// and therefore mangled to _0x... names, and >70% of string literals are moved into a string
// array, so neither source names nor string literals survive verbatim. Resolution is therefore
// STRUCTURAL, anchored on values that DO survive obfuscation: numeric/hex constants
// (0x27d4eb2d, 0x7feb352d, 0x846ca68b, Uint8Array(0x12), base36 radix 0x24, char-code arrays)
// and the call graph between functions. Each role_oracle entry carries a private `source_function`
// key; this script resolves it to a captured-bundle function node and writes the agent-visible
// `answer_function` (the function's leading name as it appears in the bundle) plus `captured_span`.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const caseRoot = path.resolve(__dirname, "..");            // agent_hidden
const visibleRoot = path.resolve(caseRoot, "../agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4212/assets/media.app.bundle.js";
const bundle = readFileSync(path.join(visibleRoot, capRel), "utf8");
const acorn = require("acorn");
const ast = acorn.parse(bundle, { ecmaVersion: 2022 });

const funcs = [];
(function walk(node) {
  if (!node || typeof node.type !== "string") return;
  if (/Function/.test(node.type)) funcs.push(node);
  for (const key in node) {
    if (key === "type" || key === "start" || key === "end") continue;
    const value = node[key];
    if (Array.isArray(value)) value.forEach((c) => c && typeof c.type === "string" && walk(c));
    else if (value && typeof value.type === "string") walk(value);
  }
})(ast);

const txt = (n) => bundle.slice(n.start, n.end);
const size = (n) => n.end - n.start;
const np = (n) => (n.params ? n.params.length : 0);
const lead = (n) => { const m = txt(n).match(/^\s*function\s*\*?\s*([A-Za-z0-9_$]+)/); return (m && m[1]) || "(anon)"; };
const all = (p) => funcs.filter(p);
const smallest = (p) => all(p).sort((a, b) => size(a) - size(b))[0];
const refRe = (n) => new RegExp("\\b" + lead(n).replace(/\$/g, "\\$") + "\\s*\\(");
const callees = (n) => funcs.filter((f) => f !== n && lead(f) !== "(anon)" && refRe(f).test(txt(n)));
const callers = (n) => funcs.filter((f) => f !== n && lead(n) !== "(anon)" && refRe(n).test(txt(f)));
const enclosing = (n) => { let best = null; for (const f of funcs) if (f !== n && f.start <= n.start && n.end <= f.end && size(f) < 1e6) if (!best || size(f) < size(best)) best = f; return best; };

// --- numeric-anchored leaves ---
const format = smallest((f) => (txt(f).match(/0x27d4eb2d/g) || []).length >= 2 && np(f) === 5);
const materialize = smallest((f) => /new\s+Uint8Array\s*\(\s*0x12\s*\)/.test(txt(f)));
const signLaneWord = smallest((f) => np(f) === 4 && /charCodeAt/.test(txt(f)));
const fmix = smallest((f) => np(f) === 1 && /0x7feb352d/.test(txt(f)) && /0x846ca68b/.test(txt(f)));
const fmtName = format && lead(format), matName = materialize && lead(materialize);
const derive = smallest((f) => np(f) === 3 && fmtName && matName && txt(f).includes(fmtName) && txt(f).includes(matName) && /Number\s*\(/.test(txt(f)));
const composeRequestCanon = derive && callees(derive).filter((f) => np(f) === 3 && f !== format).sort((a, b) => size(b) - size(a))[0];
// format's own callees: fromCodes(1p), rot(2p+rotate), segmentToken(2p+padStart)
const fmtCallees = format ? callees(format) : [];
const fromCodes = fmtCallees.filter((f) => np(f) === 1).sort((a, b) => size(a) - size(b))[0];
const rot = fmtCallees.filter((f) => np(f) === 2 && /0x20\s*-/.test(txt(f))).sort((a, b) => size(a) - size(b))[0];
const segmentToken = fmtCallees.filter((f) => np(f) === 2 && /\(\s*0x24\s*\)/.test(txt(f))).sort((a, b) => size(a) - size(b))[0];
// cluster around the signing functions for the generic tuple helpers
const lo = derive ? derive.start - 9000 : 0, hi = derive ? derive.start : bundle.length;
const inCluster = (f) => f.start >= lo && f.start <= hi;
const makePlainMap = smallest((f) => np(f) === 1 && /new\s+Map\s*\(\s*\)/.test(txt(f)) && inCluster(f) && size(f) < 700);
const normalizeTuple = smallest((f) => np(f) === 1 && /\['ix'\]/.test(txt(f)) && /'k'/.test(txt(f)) && inCluster(f) && size(f) < 900);

// --- sink (n0.js) leaves via surviving char-code arrays ---
const targetField = smallest((f) => /0x72[\s\S]{0,80}0x65[\s\S]{0,40}0x71[\s\S]{0,40}0x5f[\s\S]{0,40}0x73[\s\S]{0,40}0x69[\s\S]{0,40}0x67/.test(txt(f)) && size(f) < 600);
const actionValue = smallest((f) => /0x6d[\s\S]{0,60}0x65[\s\S]{0,40}0x64[\s\S]{0,40}0x69[\s\S]{0,40}0x61[\s\S]{0,40}0x2e[\s\S]{0,40}0x73[\s\S]{0,40}0x69[\s\S]{0,40}0x67[\s\S]{0,40}0x6e/.test(txt(f)) && size(f) < 700);
const tfName = targetField && lead(targetField), avName = actionValue && lead(actionValue);
const buildPayload = smallest((f) => tfName && avName && txt(f).includes(tfName) && txt(f).includes(avName) && f !== targetField && f !== actionValue && size(f) < 4000);
const n0 = buildPayload && callers(buildPayload).filter((f) => /console/.test(txt(f)) && size(f) < 3000).sort((a, b) => size(a) - size(b))[0];
const paint = n0 && callees(n0).filter((f) => f !== buildPayload && np(f) === 1 && /querySelector/.test(txt(f))).sort((a, b) => size(a) - size(b))[0];

// --- factory / orchestration chain ---
const rClosure = derive && smallest((f) => np(f) === 2 && f !== derive && txt(f).includes(lead(derive)) && size(f) < 260);
const uFactory = rClosure && enclosing(rClosure);
const produce = uFactory && callers(uFactory).filter((f) => f !== rClosure && callees(f).some((c) => /\(\s*\)/.test(txt(f).slice(txt(f).indexOf(lead(c)), txt(f).indexOf(lead(c)) + lead(c).length + 3)))).sort((a, b) => size(a) - size(b))[0]
  || (uFactory && callers(uFactory).filter((f) => f !== rClosure).sort((a, b) => size(a) - size(b))[0]);
const zeroArg = (host, c) => new RegExp("\\b" + lead(c).replace(/\$/g, "\\$") + "\\s*\\(\\s*\\)").test(txt(host));
const o0 = produce && callees(produce).filter((c) => zeroArg(produce, c)).sort((a, b) => size(b) - size(a))[0];
const chooseConfig = produce && callees(produce).filter((f) => np(f) === 1 && /\['find'\]|\.find\(/.test(txt(f)) && f !== uFactory).sort((a, b) => size(a) - size(b))[0];
const m0 = produce && n0 && callers(produce).filter((f) => txt(f).includes(lead(n0)) && size(f) < 6000).sort((a, b) => size(a) - size(b))[0];
const p0 = m0 && callees(m0).filter((f) => f !== produce && f !== n0 && /0xc\s*:\s*0x4/.test(txt(f))).sort((a, b) => size(b) - size(a))[0];

const resolved = {
  deriveRequestSignatureToken: derive, composeRequestCanon, materializeSignBytes: materialize, formatSignatureToken: format,
  signLaneWord, segmentToken, rot, fmix, normalizeTuple, makePlainMap, fromCodes, targetField, actionValue,
  u: uFactory, r: rClosure, produce, chooseConfig, o0, m0, n0, buildPayload, paint, p0
};
const missing = Object.entries(resolved).filter(([, v]) => !v).map(([k]) => k);
if (missing.length) { console.error(JSON.stringify({ error: "span_resolution_failed", missing }, null, 2)); process.exit(1); }

const sha = (t) => createHash("sha256").update(t).digest("hex");
const nsha = (t) => createHash("sha256").update(t.replace(/\s+/g, " ").trim()).digest("hex");
function offLC(offset) { let line = 1, ls = 0; for (let i = 0; i < offset && i < bundle.length; i += 1) if (bundle[i] === "\n") { line += 1; ls = i + 1; } return { line, col: offset - ls }; }
function span(n) { const s = offLC(n.start), e = offLC(n.end); return { file: capRel, start_line: s.line, end_line: e.line, start_column: s.col, end_column: e.col, start_offset: n.start, end_offset: n.end, sha256: sha(txt(n)), normalized_sha256: nsha(txt(n)) }; }

// duplicate-span check (u encloses r by design; everything else must be unique)
const spanKey = (n) => n.start + "-" + n.end;
const groups = new Map();
for (const [k, n] of Object.entries(resolved)) { const key = spanKey(n); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(k); }
const dupes = [...groups.values()].filter((v) => v.length > 1);
if (dupes.length) { console.error(JSON.stringify({ error: "duplicate_spans", dupes }, null, 2)); process.exit(1); }
if (np(derive) !== 3 || size(derive) < 100) { console.error(JSON.stringify({ error: "anchor_shape_invalid", params: np(derive), bytes: size(derive) }, null, 2)); process.exit(1); }

const oraclePath = path.join(caseRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
function apply(entry) {
  const node = resolved[entry.source_function];
  if (!node) { console.error(JSON.stringify({ error: "unmatched_source_function", source_function: entry.source_function }, null, 2)); process.exit(1); }
  entry.answer_function = lead(node);
  entry.captured_span = span(node);
}
apply(oracle.primary_anchor);
let updated = 0;
for (const entry of oracle.role_oracle) { apply(entry); updated += 1; }
writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

console.log(JSON.stringify({
  resolved: Object.keys(resolved).length,
  role_oracle_updated: updated,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_bytes: size(derive),
  anchor_params: np(derive),
  anchor_fingerprint_calls_formatter_and_materializer: txt(derive).includes(fmtName) && txt(derive).includes(matName),
  duplicate_span_groups: 0
}, null, 2));
