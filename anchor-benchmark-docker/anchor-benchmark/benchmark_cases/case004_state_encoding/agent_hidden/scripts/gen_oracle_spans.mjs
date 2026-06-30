// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
// Run after `npm run build` (which copies dist into captures/) whenever src/ or obfuscation output changes.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/statebench.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

const M5_SOURCE = "src/z4/q8/r2/m5.js";

const ALIASES = new Map([
  ["function reducer (inner closure of createReducer, slot 23)", [M5_SOURCE, "reducer"]],
  ["function reducer (inner closure returned by createReducer at active slot 23)", [M5_SOURCE, "reducer"]],
  ["shortcutIntentBus", ["src/z4/b1.js", "bindIntentBus"]],
  ["n0 decoy runner", ["src/z4/n0.js", "runSubmitDecoys"]],
]);
const BUNDLE_HINTS = new Map();
const RETURN_FN_RE = /return\s+function\s+[A-Za-z_$][\w$]*\s*\(/g;

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
      byStart.set(extracted.start, {
        name: match[1],
        start: extracted.start,
        end: extracted.end,
        body: extracted.body,
      });
    }
  }
  return [...byStart.values()];
}

function extractSourceFunctions(source) {
  const out = new Map();
  const inString = buildStringMask(source);
  for (const fn of collectDeclaredFunctions(source, inString)) {
    if (!out.has(fn.name)) out.set(fn.name, fn);
  }
  return out;
}

function augmentM5Reducer(text, funcs) {
  const createReducer = funcs.get("createReducer");
  if (!createReducer) return;
  const innerMatch = /return\s+function\s+reducer\s*\(/.exec(createReducer.body);
  if (!innerMatch) return;
  const inString = buildStringMask(text);
  const keywordIndex = createReducer.start + innerMatch.index + innerMatch[0].indexOf("function");
  const extracted = extractFunctionSpan(text, keywordIndex, inString);
  if (extracted) funcs.set("reducer", { name: "reducer", ...extracted });
}

function findReturnFunctionInBody(body, bodyStart, fullSource, inString) {
  const matches = [...body.matchAll(RETURN_FN_RE)];
  if (matches.length !== 1) return null;
  const keywordIndex = bodyStart + matches[0].index + matches[0][0].indexOf("function");
  const extracted = extractFunctionSpan(fullSource, keywordIndex, inString);
  if (!extracted) return null;
  const nameMatch = matches[0][0].match(/function\s+([A-Za-z_$][\w$]*)/);
  return { name: nameMatch ? nameMatch[1] : "(anon)", ...extracted };
}

function needlesFromSource(body) {
  const needles = [];
  for (const match of body.matchAll(/'([^'\\]{2,})'/g)) needles.push(match[1]);
  for (const match of body.matchAll(/"([^"\\]{2,})"/g)) needles.push(match[1]);
  for (const match of body.matchAll(/\['([^'\\]+)'\]/g)) needles.push(match[1]);
  for (const match of body.matchAll(/0x[0-9a-fA-F]{2,}/g)) needles.push(match[0]);
  for (const match of body.matchAll(/\b\d{5,}\b/g)) needles.push(match[0]);
  for (const id of [
    "makeBody", "makeTape", "rotateLeft", "normalizeTuple", "createReducer", "makeRecipe",
    "0x27d4eb2d", "0x165667b1", "0x9e3779b9", "0x85ebca6b", "Math.imul", "state.capture",
    "state.shortcut.intent", "state_code", "projectionLattice", "bindIntentBus", "runSubmitDecoys",
    "restoreFieldName", "wrapForConsole", "makePayload", "Control+Enter", "queueMicrotask", "CustomEvent",
  ]) {
    if (body.includes(id)) needles.push(id);
  }
  return [...new Set(needles)];
}

function bundleNameMatches(sourceKey, preferredName, bundleName) {
  if (!preferredName) return false;
  const hints = BUNDLE_HINTS.get(sourceKey);
  if (hints) return hints.includes(bundleName);
  return bundleName === preferredName;
}

function scoreMatch(sourceBody, bundleBody, sourceKey, preferredName, bundleName) {
  if (bundleNameMatches(sourceKey, preferredName, bundleName)) {
    const ratio =
      Math.min(sourceBody.length, bundleBody.length) / Math.max(sourceBody.length, bundleBody.length);
    if (ratio >= 0.08) return 0.95 + ratio * 0.05;
  }

  const needles = needlesFromSource(sourceBody);
  let hits = 0;
  if (needles.length) {
    for (const needle of needles) {
      if (bundleBody.includes(needle)) hits += 1;
    }
  }

  const needleScore = needles.length ? hits / needles.length : 0;
  const sizeRatio =
    Math.min(sourceBody.length, bundleBody.length) / Math.max(sourceBody.length, bundleBody.length);
  return needleScore * 0.82 + sizeRatio * 0.18;
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
  const trimmed = slice.trim();
  let match = trimmed.match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  if (match) return match[1];
  match = trimmed.match(/^return\s+function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : null;
}

function isCompleteFunctionSlice(text, label) {
  const trimmed = text.trim();
  const reducerLike =
    label.includes("primary_anchor") || label.includes("reducer") || label.endsWith("::reducer");
  const headerOk =
    /^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed) ||
    (reducerLike && /^return\s+function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed));
  if (!headerOk) {
    return { ok: false, reason: "missing_function_header", label };
  }
  if (!trimmed.endsWith("}")) {
    return { ok: false, reason: "missing_closing_brace", label };
  }
  if (!isBalancedBraces(trimmed)) {
    return { ok: false, reason: "unbalanced_braces", label };
  }
  const bodyOpen = trimmed.indexOf("{", trimmed.indexOf(")"));
  if (bodyOpen === -1 || bodyOpen >= trimmed.length - 1) {
    return { ok: false, reason: "missing_function_body", label };
  }
  const minLength = reducerLike ? 100 : 30;
  if (trimmed.length < minLength) {
    return { ok: false, reason: "span_too_short", label, length: trimmed.length };
  }
  return { ok: true };
}

const bundleFuncs = parseBundleFunctions(bundle);
const bundleInString = buildStringMask(bundle);
const sourceCache = new Map();
const sourceBodyHashes = new Map();

function sourceFunctions(relativePath) {
  if (!sourceCache.has(relativePath)) {
    const text = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
    const funcs = extractSourceFunctions(text);
    if (relativePath === M5_SOURCE) augmentM5Reducer(text, funcs);
    sourceCache.set(relativePath, funcs);
  }
  return sourceCache.get(relativePath);
}

function sourceBodyHash(sourceKey) {
  if (!sourceBodyHashes.has(sourceKey)) {
    const [file, name] = sourceKey.split("::");
    const fn = sourceFunctions(file).get(name);
    sourceBodyHashes.set(sourceKey, fn ? nsha(fn.body) : "");
  }
  return sourceBodyHashes.get(sourceKey);
}

function resolveSourceKey(entry) {
  if (entry.source_function) return `${entry.source_file}::${entry.source_function}`;
  if (ALIASES.has(entry.function)) {
    const [file, name] = ALIASES.get(entry.function);
    return `${file}::${name}`;
  }
  return `${entry.source_file}::${entry.function}`;
}

function sourceFunctionName(entry) {
  if (entry.source_function) return entry.source_function;
  if (ALIASES.has(entry.function)) return ALIASES.get(entry.function)[1];
  return entry.function;
}

function findBundleNode(sourceKey, sourceBody, preferredName, usedStarts) {
  if (sourceKey.endsWith("::reducer")) {
    const createReducerFn = bundleFuncs.find((fn) => fn.name === "createReducer");
    if (!createReducerFn) return null;
    const inner = findReturnFunctionInBody(createReducerFn.body, createReducerFn.start, bundle, bundleInString);
    if (!inner) return null;
    return inner;
  }

  const scored = bundleFuncs
    .filter((fn) => {
      const owner = usedStarts.get(fn.start);
      return !owner || owner === sourceKey || sourceBodyHash(owner) === sourceBodyHash(sourceKey);
    })
    .map((fn) => {
      const nameMatch = bundleNameMatches(sourceKey, preferredName, fn.name);
      const score = scoreMatch(sourceBody, fn.body, sourceKey, preferredName, fn.name);
      const sizeRatio =
        Math.min(sourceBody.length, fn.body.length) / Math.max(sourceBody.length, fn.body.length);
      return { fn, score, nameMatch, sizeRatio };
    })
    .filter((item) => item.nameMatch || item.score >= 0.2)
    .sort((a, b) => {
      if (a.nameMatch !== b.nameMatch) return Number(b.nameMatch) - Number(a.nameMatch);
      if (Math.abs(a.score - b.score) > 0.005) return b.score - a.score;
      return b.sizeRatio - a.sizeRatio;
    });

  if (!scored.length) return null;

  const top = scored[0];
  if (top.nameMatch) return top.fn;

  const second = scored[1];
  if (!second || top.score - second.score >= 0.04 || top.sizeRatio - second.sizeRatio >= 0.15) {
    return top.fn;
  }

  if (top.score >= 0.55) return top.fn;

  return {
    ambiguous: true,
    sourceKey,
    top: scored.slice(0, 3).map((item) => ({
      name: item.fn.name,
      score: item.score,
      nameMatch: item.nameMatch,
      start: item.fn.start,
      end: item.fn.end,
    })),
  };
}

const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
const resolved = new Map();
const usedStarts = new Map();
const failures = [];

const uniqueKeys = [...new Set(oracle.role_oracle.map((entry) => resolveSourceKey(entry)))];
uniqueKeys.sort((a, b) => {
  const ah = BUNDLE_HINTS.has(a) || !a.endsWith("::reducer");
  const bh = BUNDLE_HINTS.has(b) || !b.endsWith("::reducer");
  if (ah !== bh) return Number(bh) - Number(ah);
  const [af, an] = a.split("::");
  const [bf, bn] = b.split("::");
  const aLen = sourceFunctions(af).get(an)?.body.length || 0;
  const bLen = sourceFunctions(bf).get(bn)?.body.length || 0;
  return bLen - aLen;
});

for (const sourceKey of uniqueKeys) {
  const [file, name] = sourceKey.split("::");
  const sourceFn = sourceFunctions(file).get(name);
  if (!sourceFn) {
    failures.push({ sourceKey, reason: "source_function_missing" });
    continue;
  }
  const bundleNode = findBundleNode(sourceKey, sourceFn.body, name, usedStarts);
  if (!bundleNode) {
    failures.push({ sourceKey, reason: "bundle_function_unresolved" });
    continue;
  }
  if (bundleNode.ambiguous) {
    failures.push({ sourceKey, reason: "bundle_function_ambiguous", detail: bundleNode });
    continue;
  }
  const captured = span(bundleNode);
  resolved.set(sourceKey, captured);
  usedStarts.set(bundleNode.start, sourceKey);
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

for (const entry of oracle.role_oracle) {
  entry.captured_span = resolved.get(resolveSourceKey(entry));
  const slice = bundle.slice(entry.captured_span.start_offset, entry.captured_span.end_offset);
  entry.answer_function = bundleFunctionName(slice);
  const [, sourceName] = resolveSourceKey(entry).split("::");
  entry.source_function = sourceName;
}

const anchorSourceFunction = sourceFunctionName(oracle.primary_anchor);
const anchorKey = `${oracle.primary_anchor.source_file}::${anchorSourceFunction}`;
oracle.primary_anchor.source_function = anchorSourceFunction;
oracle.primary_anchor.captured_span = resolved.get(anchorKey);
const anchorSliceForName = bundle.slice(
  oracle.primary_anchor.captured_span.start_offset,
  oracle.primary_anchor.captured_span.end_offset,
);
const anchorBundleName = bundleFunctionName(anchorSliceForName);
oracle.primary_anchor.answer_function = anchorBundleName || anchorSourceFunction;
oracle.primary_anchor.source_bundle_name_aligned =
  oracle.primary_anchor.answer_function === anchorSourceFunction;
oracle.primary_anchor.answer_basis =
  "Agent-visible corpus only: the canonical anchor answer is captured_span plus answer_function as declared in the captured bundle slice. source_function is a private maintainer mapping into src/.";
if (!oracle.primary_anchor.source_bundle_name_aligned) {
  oracle.primary_anchor.naming_note =
    "source_function differs from answer_function after obfuscation; graders must match captured_span (hash/offset), not the source-side identifier string.";
}
delete oracle.primary_anchor.function;
delete oracle.primary_anchor.bundle_function;

const spanGroups = new Map();
for (const [sourceKey, captured] of resolved) {
  const id = `${captured.start_offset}-${captured.end_offset}`;
  if (!spanGroups.has(id)) spanGroups.set(id, []);
  spanGroups.get(id).push(sourceKey);
}
const duplicateSpans = [...spanGroups.entries()].filter(([, keys]) => {
  if (keys.length <= 1) return false;
  const hashes = new Set(keys.map((key) => sourceBodyHash(key)));
  return hashes.size > 1;
});
if (duplicateSpans.length) {
  console.error(JSON.stringify({
    error: "duplicate_span_across_source_keys",
    duplicates: duplicateSpans.map(([spanId, keys]) => ({ spanId, keys })),
  }, null, 2));
  process.exit(1);
}

const completenessFailures = [];
for (const [sourceKey, captured] of resolved) {
  const slice = bundle.slice(captured.start_offset, captured.end_offset);
  const check = isCompleteFunctionSlice(slice, sourceKey);
  if (!check.ok) completenessFailures.push({ sourceKey, ...check, preview: slice.slice(0, 120) });
}
const anchorSlice = bundle.slice(
  oracle.primary_anchor.captured_span.start_offset,
  oracle.primary_anchor.captured_span.end_offset,
);
const anchorCheck = isCompleteFunctionSlice(anchorSlice, "primary_anchor:reducer");
if (!anchorCheck.ok) {
  completenessFailures.push({ sourceKey: "primary_anchor", ...anchorCheck, preview: anchorSlice.slice(0, 120) });
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

const anchorSpan = oracle.primary_anchor.captured_span;
console.log(JSON.stringify({
  case_id: oracle.case_id,
  bundle_function_count: bundleFuncs.length,
  role_oracle_updated: oracle.role_oracle.length,
  hash_verified: pass,
  anchor_bytes: anchorSpan.end_offset - anchorSpan.start_offset,
  anchor_lines: anchorSpan.end_line - anchorSpan.start_line + 1,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
  duplicate_span_groups: duplicateSpans.length,
}, null, 2));

if (pass !== oracle.role_oracle.length) {
  console.error(JSON.stringify({ error: "post_write_hash_mismatch", pass, total: oracle.role_oracle.length }, null, 2));
  process.exit(1);
}
