// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
// Run after `npm run build` (which copies dist into captures/) whenever src/ or obfuscation output changes.
//
// Every role_oracle entry carries an explicit { source_file, source_function }. This script locates the
// matching obfuscated function in the captured bundle (using per-sourceKey BUNDLE_HINTS for renames such as
// source `s` -> bundle `s$1` and the closure source `z` -> bundle `t`), extracts the complete function body
// by balancing parentheses then braces (string/template aware), and writes back captured_span +
// answer_function + source_function. It fails loudly on unresolved/ambiguous/duplicate/incomplete spans.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/search.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

// Obfuscator/Rollup renames keyed by `${source_file}::${source_function}` -> [acceptable bundle names].
// Each target name is globally unique in this bundle, so a single hint resolves unambiguously.
const BUNDLE_HINTS = new Map([
  ["src/z0/k7/q3/t9.js::z", ["t"]],
  ["src/z0/k7/q3/t9.js::o", ["o"]],
  ["src/z0/k7/q3/t9.js::q", ["q"]],
  ["src/z0/k7/q3/t9.js::s", ["s$1"]],
  ["src/z0/k7/q3/t9.js::k", ["k"]],
  ["src/z0/k7/q3/t9.js::l", ["l"]],
  ["src/z0/k7/q3/t9.js::m", ["m$1"]],
  ["src/z0/k7/q3/t9.js::n", ["n$1"]],
  ["src/z0/k7/q3/t9.js::h", ["h$1"]],
  ["src/z0/k7/q3/t9.js::j", ["j$1"]],
  ["src/z0/k7/q3/t9.js::r", ["r$h"]],
  ["src/z0/k7/q3/t9.js::b", ["b$j"]],
  ["src/z0/k7/q3/t9.js::p", ["p$2"]],
  ["src/z0/k7/q3/t9.js::u", ["u"]],
  ["src/z0/q0.js::r", ["r$g"]],
]);

const ANCHOR_MIN_BYTES = 100;
const HELPER_MIN_BYTES = 40;

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
      continue;
    }
    if (ch === "\\") {
      escape = true;
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

// Close the parameter list first (so a default value like `y = {}` is not mistaken for the body),
// then take the first `{` after it as the body open and balance to the matching `}`.
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

function collectDeclaredFunctions(source, inString) {
  const funcs = [];
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
      funcs.push({ name: match[1], ...extracted });
    }
  }
  return funcs;
}

function parseBundleFunctions(source) {
  const inString = buildStringMask(source);
  const byStart = new Map();
  const re = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    const keywordIndex = match.index;
    const extracted = extractFunctionSpan(source, keywordIndex, inString);
    if (!extracted) continue;
    if (!byStart.has(extracted.start)) {
      byStart.set(extracted.start, { name: match[1], start: extracted.start, end: extracted.end, body: extracted.body });
    }
  }
  return [...byStart.values()];
}

function extractSourceFunctions(source) {
  const out = new Map();
  const inString = buildStringMask(source);
  // Last declaration wins is wrong for shadowing; keep the first declaration of each name.
  for (const fn of collectDeclaredFunctions(source, inString)) {
    if (!out.has(fn.name)) out.set(fn.name, fn);
  }
  return out;
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

function isCompleteFunctionSlice(text, minLength, label) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return { ok: false, reason: "missing_function_header", label };
  if (!trimmed.endsWith("}")) return { ok: false, reason: "missing_closing_brace", label };
  if (!isBalancedBraces(trimmed)) return { ok: false, reason: "unbalanced_braces", label };
  const bodyOpen = trimmed.indexOf("{", trimmed.indexOf(")"));
  if (bodyOpen === -1 || bodyOpen >= trimmed.length - 1) return { ok: false, reason: "missing_function_body", label };
  if (trimmed.length < minLength) return { ok: false, reason: "span_too_short", label, length: trimmed.length };
  return { ok: true };
}

const bundleFuncs = parseBundleFunctions(bundle);
const bundleByName = new Map();
for (const fn of bundleFuncs) {
  if (!bundleByName.has(fn.name)) bundleByName.set(fn.name, []);
  bundleByName.get(fn.name).push(fn);
}

const sourceCache = new Map();
function sourceFunctions(relativePath) {
  if (!sourceCache.has(relativePath)) {
    const text = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
    sourceCache.set(relativePath, extractSourceFunctions(text));
  }
  return sourceCache.get(relativePath);
}

function sourceKeyOf(entry) {
  return `${entry.source_file}::${entry.source_function}`;
}

function resolveBundleNode(sourceKey) {
  const hints = BUNDLE_HINTS.get(sourceKey);
  if (!hints) return { error: "missing_bundle_hint", sourceKey };
  for (const name of hints) {
    const candidates = bundleByName.get(name) || [];
    if (candidates.length === 1) return { node: candidates[0], bundleName: name };
    if (candidates.length > 1) return { error: "bundle_name_not_unique", sourceKey, name, count: candidates.length };
  }
  return { error: "bundle_function_unresolved", sourceKey, hints };
}

const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
const anchorKey = `${oracle.primary_anchor.source_file}::${oracle.primary_anchor.source_function}`;

const failures = [];
const resolved = new Map();
const usedStarts = new Map();

for (const entry of oracle.role_oracle) {
  const sourceKey = sourceKeyOf(entry);
  // Confirm the source function actually exists in src/ (validates the private mapping chain).
  const srcFn = sourceFunctions(entry.source_file).get(entry.source_function);
  if (!srcFn) {
    failures.push({ sourceKey, reason: "source_function_missing" });
    continue;
  }
  const res = resolveBundleNode(sourceKey);
  if (res.error) {
    failures.push({ ...res, reason: res.error });
    continue;
  }
  if (usedStarts.has(res.node.start) && usedStarts.get(res.node.start) !== sourceKey) {
    failures.push({ sourceKey, reason: "bundle_start_already_used", start: res.node.start, by: usedStarts.get(res.node.start) });
    continue;
  }
  usedStarts.set(res.node.start, sourceKey);
  resolved.set(sourceKey, { node: res.node, bundleName: res.bundleName });
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

// Duplicate-span guard: distinct source functions must not collapse to the same bundle span.
const spanGroups = new Map();
for (const [sourceKey, r] of resolved) {
  const id = `${r.node.start}-${r.node.end}`;
  if (!spanGroups.has(id)) spanGroups.set(id, []);
  spanGroups.get(id).push(sourceKey);
}
const duplicateSpans = [...spanGroups.entries()].filter(([, keys]) => keys.length > 1);
if (duplicateSpans.length) {
  console.error(JSON.stringify({ error: "duplicate_span_across_source_keys", duplicates: duplicateSpans }, null, 2));
  process.exit(1);
}

// Completeness guard (track B): every slice is a full function body.
const completenessFailures = [];
for (const [sourceKey, r] of resolved) {
  const slice = bundle.slice(r.node.start, r.node.end);
  const minLength = sourceKey === anchorKey ? ANCHOR_MIN_BYTES : HELPER_MIN_BYTES;
  const check = isCompleteFunctionSlice(slice, minLength, sourceKey);
  if (!check.ok) completenessFailures.push({ sourceKey, ...check, preview: slice.slice(0, 120) });
}
if (completenessFailures.length) {
  console.error(JSON.stringify({ error: "span_completeness_failed", failures: completenessFailures }, null, 2));
  process.exit(1);
}

// Write back coordinates, answer_function, source_function for every role_oracle entry.
for (const entry of oracle.role_oracle) {
  const r = resolved.get(sourceKeyOf(entry));
  entry.captured_span = span(r.node);
  entry.answer_function = bundleFunctionName(bundle.slice(r.node.start, r.node.end)) || r.bundleName;
}

// Mirror onto primary_anchor.
const anchorRes = resolved.get(anchorKey);
oracle.primary_anchor.captured_span = span(anchorRes.node);
oracle.primary_anchor.answer_function = bundleFunctionName(bundle.slice(anchorRes.node.start, anchorRes.node.end)) || anchorRes.bundleName;
oracle.primary_anchor.source_bundle_name_aligned = oracle.primary_anchor.answer_function === oracle.primary_anchor.source_function;

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

// Independent post-write hash check against the captured bundle original bytes (not a re-read of oracle strings).
let pass = 0;
for (const entry of oracle.role_oracle) {
  const slice = bundle.slice(entry.captured_span.start_offset, entry.captured_span.end_offset);
  if (sha(slice) === entry.captured_span.sha256 && nsha(slice) === entry.captured_span.normalized_sha256) pass += 1;
}

console.log(
  JSON.stringify(
    {
      case_id: oracle.case_id,
      bundle_function_count: bundleFuncs.length,
      role_oracle_updated: oracle.role_oracle.length,
      hash_verified: pass,
      anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
      anchor_lines: oracle.primary_anchor.captured_span.end_line - oracle.primary_anchor.captured_span.start_line + 1,
      anchor_answer_function: oracle.primary_anchor.answer_function,
      anchor_source_function: oracle.primary_anchor.source_function,
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
