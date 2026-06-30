// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
// Run after `npm run build` (which copies dist into captures/) whenever src/ or obfuscation output changes.
//
// Resolution strategy (robust, no hand-maintained $N hints):
//   1. Re-run rollup in-memory with the exact build input to obtain the readable
//      pre-obfuscation bundle. Because the obfuscator runs with renameGlobals:false,
//      every top-level function name rollup emits (including dedup suffixes like r$3)
//      is preserved verbatim into the obfuscated bundle.
//   2. Map each src function to its readable pre-bundle counterpart by a
//      rename-invariant skeleton match (identifiers collapsed, literals/structure kept).
//      This disambiguates same-name functions across modules.
//   3. Look that exact bundle name up in the obfuscated captured bundle to slice the span.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rollup } from "rollup";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/note.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");
const ANCHOR_SOURCE_FUNCTION = "createReducer";

// Descriptive role_oracle labels -> [source_file, source_function]. Only used as a
// fallback for entries that do not already carry an explicit source_function.
const ALIASES = new Map([]);

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
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escape = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (escape) {
      escape = false;
      mask[i] = 1;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      mask[i] = 1;
      continue;
    }
    if (!inDouble && !inTemplate && ch === "'") inSingle = !inSingle;
    else if (!inSingle && !inTemplate && ch === '"') inDouble = !inDouble;
    else if (!inSingle && !inDouble && ch === "`") inTemplate = !inTemplate;
    if (inSingle || inDouble || inTemplate) mask[i] = 1;
  }
  return mask;
}

function findMatchingParen(source, openIndex, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    const ch = source[i];
    if (ch === "(") depth += 1;
    else if (ch === ")") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function findMatchingBrace(source, openIndex, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    const ch = source[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }
  return -1;
}

function extractFunctionSpan(source, keywordIndex, inString) {
  const parenOpen = source.indexOf("(", keywordIndex);
  if (parenOpen === -1) return null;
  const parenClose = findMatchingParen(source, parenOpen, inString);
  if (parenClose === -1) return null;
  let bodyOpen = -1;
  for (let i = parenClose + 1; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === "{") {
      bodyOpen = i;
      break;
    }
    if (!/\s/.test(source[i])) return null;
  }
  if (bodyOpen === -1) return null;
  const end = findMatchingBrace(source, bodyOpen, inString);
  if (end === -1) return null;
  return { start: keywordIndex, end, body: source.slice(keywordIndex, end) };
}

// Parse every `function NAME(` declaration (top-level or nested) in a source string.
function parseFunctions(source) {
  const inString = buildStringMask(source);
  const out = [];
  const re = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    const extracted = extractFunctionSpan(source, match.index, inString);
    if (!extracted) continue;
    out.push({ name: match[1], start: extracted.start, end: extracted.end, body: extracted.body });
  }
  return out;
}

// Declared functions of a src module (export/async/plain forms), first declaration wins.
function extractSourceFunctions(source) {
  const inString = buildStringMask(source);
  const out = new Map();
  const patterns = [
    /\bexport\s+async\s+function\s+([A-Za-z_$][\w$]*)\s*\(/g,
    /\bexport\s+function\s+([A-Za-z_$][\w$]*)\s*\(/g,
    /\basync\s+function\s+([A-Za-z_$][\w$]*)\s*\(/g,
    /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g,
  ];
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(source))) {
      const keywordIndex = match.index + match[0].indexOf("function");
      const extracted = extractFunctionSpan(source, keywordIndex, inString);
      if (!extracted) continue;
      if (!out.has(match[1])) out.set(match[1], { name: match[1], ...extracted });
    }
  }
  return out;
}

// Rename-invariant skeleton: drop whitespace, collapse every identifier/keyword run to
// "I", keep string/number literals and punctuation verbatim. Rollup only renames
// identifiers, so the same function has an identical skeleton in src and in the
// readable pre-bundle.
function skeleton(src) {
  const mask = buildStringMask(src);
  let out = "";
  let i = 0;
  while (i < src.length) {
    if (mask[i]) {
      let j = i;
      while (j < src.length && mask[j]) j += 1;
      let endDelim = j;
      if (endDelim < src.length && (src[endDelim] === "'" || src[endDelim] === '"' || src[endDelim] === "`")) endDelim += 1;
      out += src.slice(i, endDelim);
      i = endDelim;
      continue;
    }
    const ch = src[i];
    if (/\s/.test(ch)) {
      i += 1;
      continue;
    }
    if (/[A-Za-z_$]/.test(ch)) {
      let j = i + 1;
      while (j < src.length && /[\w$]/.test(src[j])) j += 1;
      out += "I";
      i = j;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

function needlesFromSource(body) {
  const needles = [];
  for (const match of body.matchAll(/'([^'\\]{2,})'/g)) needles.push(match[1]);
  for (const match of body.matchAll(/"([^"\\]{2,})"/g)) needles.push(match[1]);
  for (const match of body.matchAll(/`([^`]{2,})`/g)) needles.push(match[1]);
  for (const match of body.matchAll(/0x[0-9a-fA-F]+/g)) needles.push(match[0]);
  for (const match of body.matchAll(/\b\d{2,}\b/g)) needles.push(match[0]);
  for (const id of [
    "Promise", "queueMicrotask", "setTimeout", "requestAnimationFrame", "MutationObserver",
    "CustomEvent", "addEventListener", "removeEventListener", "dispatchEvent", "getBoundingClientRect",
    "getComputedStyle", "Reflect", "fetch", "JSON", "imul", "WeakMap", "closest", "querySelector",
    "querySelectorAll", "fromCharCode", "charCodeAt", "padStart", "reduce", "dataset",
  ]) {
    if (body.includes(id)) needles.push(id);
  }
  return [...new Set(needles)];
}

function looseScore(sourceBody, preBody) {
  const needles = needlesFromSource(sourceBody);
  let hits = 0;
  for (const needle of needles) if (preBody.includes(needle)) hits += 1;
  const needleScore = needles.length ? hits / needles.length : 0;
  const sizeRatio = Math.min(sourceBody.length, preBody.length) / Math.max(sourceBody.length, preBody.length);
  return needleScore * 0.8 + sizeRatio * 0.2;
}

function baseName(name) {
  return name.split("$")[0];
}

function isBalancedBraces(text) {
  const inString = buildStringMask(text);
  let depth = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (inString[i]) continue;
    if (text[i] === "{") depth += 1;
    else if (text[i] === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function bundleFunctionName(slice) {
  const match = slice.trim().match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : null;
}

function isCompleteFunctionSlice(text, label) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return { ok: false, reason: "missing_function_header", label };
  if (!trimmed.endsWith("}")) return { ok: false, reason: "missing_closing_brace", label };
  if (!isBalancedBraces(trimmed)) return { ok: false, reason: "unbalanced_braces", label };
  const bodyOpen = trimmed.indexOf("{", trimmed.indexOf(")"));
  if (bodyOpen === -1 || bodyOpen >= trimmed.length - 1) return { ok: false, reason: "missing_function_body", label };
  const minLength = label.includes(ANCHOR_SOURCE_FUNCTION) ? 100 : 40;
  if (trimmed.length < minLength) return { ok: false, reason: "span_too_short", label, length: trimmed.length };
  return { ok: true };
}

// --- load corpora -----------------------------------------------------------
const obfFuncs = parseFunctions(bundle);
const obfByName = new Map();
for (const fn of obfFuncs) {
  if (!obfByName.has(fn.name)) obfByName.set(fn.name, []);
  obfByName.get(fn.name).push(fn);
}

const preBundle = await (async () => {
  const b = await rollup({ input: path.join(hiddenRoot, "src", "z0", "a0.js"), treeshake: false });
  const { output } = await b.generate({ format: "es", inlineDynamicImports: true, sourcemap: false });
  await b.close();
  return output[0].code;
})();
const preFuncs = parseFunctions(preBundle);
const preByBase = new Map();
for (const fn of preFuncs) {
  const base = baseName(fn.name);
  if (!preByBase.has(base)) preByBase.set(base, []);
  preByBase.get(base).push(fn);
}

const sourceCache = new Map();
function sourceFunctions(relativePath) {
  if (!sourceCache.has(relativePath)) {
    const text = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
    sourceCache.set(relativePath, extractSourceFunctions(text));
  }
  return sourceCache.get(relativePath);
}

const skelCache = new Map();
function skel(body) {
  if (!skelCache.has(body)) skelCache.set(body, skeleton(body));
  return skelCache.get(body);
}

// Core z0 modules that host every oracle function. Used to (a) decide which function
// names are file-unique and (b) anchor each module's block position in the pre-bundle so
// that identical-body siblings across modules are disambiguated by proximity.
const CORE_FILES = ["a0", "b1", "c2", "d3", "e4", "f5", "g6", "h7", "i8", "j9", "k0", "k1", "k2", "l0", "m0", "n0", "o0", "p0", "r0", "s0", "t0"]
  .map((m) => `src/z0/${m}.js`)
  .concat(["src/z0/k7/q3/t9.js"]);
const nameFiles = new Map();
for (const file of CORE_FILES) {
  for (const nm of sourceFunctions(file).keys()) {
    if (!nameFiles.has(nm)) nameFiles.set(nm, new Set());
    nameFiles.get(nm).add(file);
  }
}
function preMatchUnique(file, nm) {
  const sf = sourceFunctions(file).get(nm);
  if (!sf) return null;
  const cands = (preByBase.get(nm) || []).filter((c) => skel(c.body) === skel(sf.body));
  return cands.length === 1 ? cands[0].start : null;
}
const fileAnchors = new Map();
for (const file of CORE_FILES) {
  const starts = [];
  for (const nm of sourceFunctions(file).keys()) {
    if (nameFiles.get(nm).size === 1) {
      const s = preMatchUnique(file, nm);
      if (s != null) starts.push(s);
    }
  }
  if (starts.length) fileAnchors.set(file, starts.reduce((a, b) => a + b, 0) / starts.length);
}

function resolveSourceKey(entry) {
  if (entry.source_function) return `${entry.source_file}::${entry.source_function}`;
  if (ALIASES.has(entry.function)) {
    const [file, name] = ALIASES.get(entry.function);
    return `${file}::${name}`;
  }
  const token = (entry.function.match(/^[A-Za-z_$][\w$]*/) || [])[0];
  return `${entry.source_file}::${token}`;
}

// source function -> bundle name, via the readable pre-bundle.
function resolveBundleName(sourceKey) {
  const [file, name] = sourceKey.split("::");
  const sourceFn = sourceFunctions(file).get(name);
  if (!sourceFn) return { error: "source_function_missing", sourceKey };
  const candidates = preByBase.get(name) || [];
  if (!candidates.length) return { error: "no_pre_bundle_candidate", sourceKey };
  const sourceSkel = skel(sourceFn.body);
  const exact = candidates.filter((c) => skel(c.body) === sourceSkel);
  if (exact.length === 1) return { bundleName: exact[0].name, basis: "skeleton" };
  const pool = exact.length > 1 ? exact : candidates;
  const anchor = fileAnchors.get(file);
  if (pool.length > 1 && anchor != null) {
    const byProximity = pool
      .map((c) => ({ name: c.name, dist: Math.abs(c.start - anchor) }))
      .sort((a, b) => a.dist - b.dist);
    if (!byProximity[1] || byProximity[1].dist - byProximity[0].dist > 1) {
      return { bundleName: byProximity[0].name, basis: exact.length > 1 ? "skeleton+proximity" : "proximity" };
    }
  }
  const scored = pool
    .map((c) => ({ name: c.name, score: looseScore(sourceFn.body, c.body) }))
    .sort((a, b) => b.score - a.score);
  if (scored.length === 1) return { bundleName: scored[0].name, basis: "single" };
  if (scored[0].score - scored[1].score >= 0.05) return { bundleName: scored[0].name, basis: "score" };
  return { error: "ambiguous_pre_bundle", sourceKey, top: scored.slice(0, 3) };
}

// --- resolve all unique source keys ----------------------------------------
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8").replace(/^﻿/, ""));

const anchorEntry = {
  function: oracle.primary_anchor.function || ANCHOR_SOURCE_FUNCTION,
  source_file: oracle.primary_anchor.source_file,
  source_function: oracle.primary_anchor.source_function || ANCHOR_SOURCE_FUNCTION,
};
const allEntries = [anchorEntry, ...oracle.role_oracle];
const uniqueKeys = [...new Set(allEntries.map(resolveSourceKey))];

const resolved = new Map();
const usedStarts = new Map();
const usedNames = new Map();
const failures = [];

for (const sourceKey of uniqueKeys) {
  const nameResult = resolveBundleName(sourceKey);
  if (nameResult.error) {
    failures.push(nameResult);
    continue;
  }
  const nodes = obfByName.get(nameResult.bundleName) || [];
  const node = nodes.find((n) => !usedStarts.has(n.start));
  if (!node) {
    failures.push({ error: "bundle_name_not_in_obfuscated", sourceKey, bundleName: nameResult.bundleName });
    continue;
  }
  resolved.set(sourceKey, { captured: span(node), bundleName: nameResult.bundleName, basis: nameResult.basis });
  usedStarts.set(node.start, sourceKey);
  if (usedNames.has(nameResult.bundleName)) usedNames.get(nameResult.bundleName).push(sourceKey);
  else usedNames.set(nameResult.bundleName, [sourceKey]);
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

const collisions = [...usedNames.entries()].filter(([, keys]) => keys.length > 1);
if (collisions.length) {
  console.error(JSON.stringify({ error: "bundle_name_claimed_twice", collisions }, null, 2));
  process.exit(1);
}

// --- write spans back -------------------------------------------------------
for (const entry of oracle.role_oracle) {
  const r = resolved.get(resolveSourceKey(entry));
  entry.captured_span = r.captured;
  const slice = bundle.slice(r.captured.start_offset, r.captured.end_offset);
  entry.answer_function = bundleFunctionName(slice);
  entry.source_function = resolveSourceKey(entry).split("::")[1];
}

const anchorKey = resolveSourceKey(anchorEntry);
const anchorResolved = resolved.get(anchorKey);
oracle.primary_anchor.source_function = ANCHOR_SOURCE_FUNCTION;
oracle.primary_anchor.captured_span = anchorResolved.captured;
const anchorSlice = bundle.slice(anchorResolved.captured.start_offset, anchorResolved.captured.end_offset);
oracle.primary_anchor.answer_function = bundleFunctionName(anchorSlice) || ANCHOR_SOURCE_FUNCTION;
oracle.primary_anchor.captured_file = capRel;
oracle.primary_anchor.source_bundle_name_aligned = oracle.primary_anchor.answer_function === ANCHOR_SOURCE_FUNCTION;
oracle.primary_anchor.answer_basis =
  "Agent-visible corpus only: the canonical anchor answer is captured_span plus answer_function as declared in the captured bundle slice. source_function is a private maintainer mapping into src/.";
if (!oracle.primary_anchor.source_bundle_name_aligned) {
  oracle.primary_anchor.naming_note =
    "source_function differs from answer_function after obfuscation; graders must match captured_span (hash/offset), not the source-side identifier string.";
}
delete oracle.primary_anchor.function;
delete oracle.primary_anchor.bundle_function;

// --- duplicate span + completeness validation -------------------------------
const spanGroups = new Map();
for (const [sourceKey, r] of resolved) {
  const id = `${r.captured.start_offset}-${r.captured.end_offset}`;
  if (!spanGroups.has(id)) spanGroups.set(id, []);
  spanGroups.get(id).push(sourceKey);
}
const duplicateSpans = [...spanGroups.entries()].filter(([, keys]) => keys.length > 1);
if (duplicateSpans.length) {
  console.error(JSON.stringify({ error: "duplicate_span_across_source_keys", duplicates: duplicateSpans.map(([id, keys]) => ({ id, keys })) }, null, 2));
  process.exit(1);
}

const completenessFailures = [];
for (const [sourceKey, r] of resolved) {
  const slice = bundle.slice(r.captured.start_offset, r.captured.end_offset);
  const check = isCompleteFunctionSlice(slice, sourceKey);
  if (!check.ok) completenessFailures.push({ sourceKey, ...check, preview: slice.slice(0, 120) });
}
if (completenessFailures.length) {
  console.error(JSON.stringify({ error: "span_completeness_failed", failures: completenessFailures }, null, 2));
  process.exit(1);
}

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

let pass = 0;
for (const entry of oracle.role_oracle) {
  const slice = bundle.slice(entry.captured_span.start_offset, entry.captured_span.end_offset);
  if (sha(slice) === entry.captured_span.sha256) pass += 1;
}

console.log(
  JSON.stringify(
    {
      case_id: oracle.case_id,
      bundle_function_count: obfFuncs.length,
      pre_bundle_function_count: preFuncs.length,
      role_oracle_updated: oracle.role_oracle.length,
      hash_verified: pass,
      anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
      anchor_lines: oracle.primary_anchor.captured_span.end_line - oracle.primary_anchor.captured_span.start_line + 1,
      anchor_source_function: oracle.primary_anchor.source_function,
      anchor_answer_function: oracle.primary_anchor.answer_function,
      anchor_source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
      duplicate_span_groups: duplicateSpans.length,
    },
    null,
    2,
  ),
);

if (pass !== oracle.role_oracle.length) {
  console.error(JSON.stringify({ error: "post_write_hash_mismatch", pass, total: oracle.role_oracle.length }, null, 2));
  process.exit(1);
}
