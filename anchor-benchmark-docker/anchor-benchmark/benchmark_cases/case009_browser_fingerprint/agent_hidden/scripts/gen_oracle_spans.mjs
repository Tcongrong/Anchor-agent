import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/calendar.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

const BUNDLE_HINTS = new Map([
  ["src/z0/k7/q3/t9.js::deriveBrowserFingerprint", ["0x27d4eb2d", "Uint8Array", "0x66", "0x70", "0x5f"]],
  ["src/z0/k7/q3/t9.js::encodeFingerprintHash", ["0x27d4eb2d", "0x01000193", "0x7feb352d", "0x66", "0x70", "0x5f"]],
  ["src/z0/k7/q3/t9.js::materializeSignalBytes", ["Uint8Array", "0xff", "0x7feb352d", "0x846ca68b"]],
  ["src/z0/k7/q3/t9.js::signalLaneWord", ["0x7feb352d", "0x846ca68b", "Math", "imul"]],
  ["src/z0/k7/q3/t9.js::composeSignalText", ["joiner", "shadowLane", "transit"]],
  ["src/z0/k7/q3/t9.js::u", ["deriveBrowserFingerprint"]],
  ["src/z0/f5.js::f5", ["requestAnimationFrame", "MutationObserver", "queueMicrotask", "timeout0"]],
  ["src/z0/g6.js::g6", ["CustomEvent", "fingerprint.pipeline.advance", "__case009PipelineResult"]],
  ["src/z0/n0.js::buildPayload", ["browser_fp", "fingerprint.collect", "vendor_hint", "scan_mode"]],
  ["src/z0/n0.js::n0", ["console", "log", "buildPayload"]],
  ["src/z0/v/v00.js::digest", ["0x811c9dc5", "0x1000193"]],
]);

const NAME_HINTS = new Map([
  ["src/z0/k7/q3/t9.js::composeSignalText", "_0xbe6614"],
  ["src/z0/k7/q3/t9.js::signalLaneWord", "_0x565dba"],
  ["src/z0/k7/q3/t9.js::materializeSignalBytes", "_0x572989"],
  ["src/z0/k7/q3/t9.js::encodeFingerprintHash", "_0x2986f6"],
  ["src/z0/k7/q3/t9.js::deriveBrowserFingerprint", "_0xb8f764"],
  ["src/z0/k7/q3/t9.js::u", "_0x2f4243"],
  ["src/z0/f5.js::f5", "_0x39aaa1"],
  ["src/z0/g6.js::g6", "_0x3d6bba"],
  ["src/z0/n0.js::buildPayload", "_0x5c7329"],
  ["src/z0/n0.js::n0", "_0x244ef9"],
  ["src/z0/v/v00.js::digest", "_0x83d6e0"],
]);

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function nsha(text) {
  return sha(text.replace(/\s+/g, " ").trim());
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
  let quote = "";
  let escape = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (escape) {
      escape = false;
      if (quote) mask[i] = 1;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      if (quote) mask[i] = 1;
      continue;
    }
    if (quote) {
      mask[i] = 1;
      if (ch === quote) quote = "";
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      mask[i] = 1;
    }
  }
  return mask;
}

function findMatching(source, openIndex, openChar, closeChar, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === openChar) depth += 1;
    else if (source[i] === closeChar) {
      depth -= 1;
      if (depth === 0) return closeChar === "}" ? i + 1 : i;
    }
  }
  return -1;
}

function extractFunctionSpan(source, keywordIndex, inString) {
  const parenOpen = source.indexOf("(", keywordIndex);
  if (parenOpen === -1) return null;
  const parenClose = findMatching(source, parenOpen, "(", ")", inString);
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
  const end = findMatching(source, bodyOpen, "{", "}", inString);
  if (bodyOpen === -1 || end === -1) return null;
  return { start: keywordIndex, end, body: source.slice(keywordIndex, end) };
}

function parseFunctions(source) {
  const inString = buildStringMask(source);
  const out = [];
  const seen = new Set();
  const re = /\b(?:export\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    const keywordIndex = match.index + match[0].indexOf("function");
    const extracted = extractFunctionSpan(source, keywordIndex, inString);
    if (!extracted || seen.has(extracted.start)) continue;
    seen.add(extracted.start);
    out.push({ name: match[1], ...extracted });
  }
  return out;
}

function extractSourceFunctions(relativePath) {
  const source = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
  const map = new Map();
  for (const fn of parseFunctions(source)) {
    if (!map.has(fn.name)) map.set(fn.name, fn);
  }
  return map;
}

const bundleFunctions = parseFunctions(bundle);
const sourceCache = new Map();

function sourceFunction(file, name) {
  if (!sourceCache.has(file)) sourceCache.set(file, extractSourceFunctions(file));
  return sourceCache.get(file).get(name);
}

function sourceKey(entry) {
  return `${entry.source_file}::${entry.source_function}`;
}

function sourceNeedles(body, key) {
  const needles = [];
  for (const match of body.matchAll(/0x[0-9a-fA-F]+/g)) needles.push(match[0].toLowerCase());
  for (const match of body.matchAll(/\b\d{4,}\b/g)) needles.push(match[0]);
  for (const match of body.matchAll(/["']([^"'\\]{3,})["']/g)) needles.push(match[1]);
  for (const token of BUNDLE_HINTS.get(key) || []) needles.push(token);
  for (const token of ["Math", "imul", "Uint8Array", "requestAnimationFrame", "MutationObserver", "CustomEvent", "console"]) {
    if (body.includes(token)) needles.push(token);
  }
  return [...new Set(needles.map((value) => String(value).toLowerCase()))];
}

function scoreCandidate(sourceFn, bundleFn, key, usedStarts) {
  if (usedStarts.has(bundleFn.start) && usedStarts.get(bundleFn.start) !== key) return -1;
  const sourceBody = sourceFn.body.toLowerCase();
  const bundleBody = bundleFn.body.toLowerCase();
  const preferredName = key.split("::")[1];
  let score = bundleFn.name === preferredName ? 0.42 : 0;
  const needles = sourceNeedles(sourceBody, key);
  let hits = 0;
  for (const needle of needles) {
    if (bundleBody.includes(needle)) hits += 1;
  }
  score += needles.length ? (hits / needles.length) * 0.5 : 0;
  const ratio = Math.min(sourceFn.body.length, bundleFn.body.length) / Math.max(sourceFn.body.length, bundleFn.body.length);
  score += ratio * 0.08;
  return score;
}

function findBundleNode(key, sourceFn, usedStarts) {
  const expectedName = NAME_HINTS.get(key);
  if (expectedName) {
    const exact = bundleFunctions.find((fn) => fn.name === expectedName);
    if (!exact) return { missingHint: true, key, expectedName };
    if (usedStarts.has(exact.start) && usedStarts.get(exact.start) !== key) {
      return { duplicateHint: true, key, expectedName, usedBy: usedStarts.get(exact.start) };
    }
    return exact;
  }

  const scored = bundleFunctions
    .map((fn) => ({ fn, score: scoreCandidate(sourceFn, fn, key, usedStarts) }))
    .filter((item) => item.score >= 0.16)
    .sort((a, b) => b.score - a.score);
  if (!scored.length) return null;
  const top = scored[0];
  const second = scored[1];
  if (second && top.score - second.score < 0.015 && top.fn.name !== key.split("::")[1]) {
    return { ambiguous: true, key, top: scored.slice(0, 4).map((item) => ({ name: item.fn.name, score: item.score, start: item.fn.start, bytes: item.fn.end - item.fn.start })) };
  }
  return top.fn;
}

function bundleFunctionName(text) {
  const match = text.trim().match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : null;
}

function isBalancedFunction(text) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed) || !trimmed.endsWith("}")) return false;
  const mask = buildStringMask(trimmed);
  let depth = 0;
  for (let i = 0; i < trimmed.length; i += 1) {
    if (mask[i]) continue;
    if (trimmed[i] === "{") depth += 1;
    if (trimmed[i] === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
const resolved = new Map();
const usedStarts = new Map();
const failures = [];

const uniqueKeys = [...new Set(oracle.role_oracle.map(sourceKey))].sort((left, right) => {
  const leftName = left.split("::")[1];
  const rightName = right.split("::")[1];
  if (leftName === "deriveBrowserFingerprint") return -1;
  if (rightName === "deriveBrowserFingerprint") return 1;
  return right.length - left.length;
});

for (const key of uniqueKeys) {
  const [file, name] = key.split("::");
  const sourceFn = sourceFunction(file, name);
  if (!sourceFn) {
    failures.push({ key, reason: "source_function_missing" });
    continue;
  }
  const node = findBundleNode(key, sourceFn, usedStarts);
  if (!node) failures.push({ key, reason: "bundle_function_unresolved" });
  else if (node.ambiguous) failures.push({ key, reason: "bundle_function_ambiguous", detail: node });
  else if (node.missingHint) failures.push({ key, reason: "hinted_bundle_function_missing", expected_name: node.expectedName });
  else if (node.duplicateHint) failures.push({ key, reason: "hinted_bundle_function_duplicate", expected_name: node.expectedName, used_by: node.usedBy });
  else {
    resolved.set(key, span(node));
    usedStarts.set(node.start, key);
  }
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

for (const entry of oracle.role_oracle) {
  const captured = resolved.get(sourceKey(entry));
  entry.captured_span = captured;
  const slice = bundle.slice(captured.start_offset, captured.end_offset);
  entry.answer_function = bundleFunctionName(slice);
}

const anchorKey = `${oracle.primary_anchor.source_file}::${oracle.primary_anchor.source_function}`;
oracle.primary_anchor.captured_span = resolved.get(anchorKey);
oracle.primary_anchor.captured_file = capRel;
const anchorSlice = bundle.slice(oracle.primary_anchor.captured_span.start_offset, oracle.primary_anchor.captured_span.end_offset);
oracle.primary_anchor.answer_function = bundleFunctionName(anchorSlice);
oracle.primary_anchor.source_bundle_name_aligned = oracle.primary_anchor.answer_function === oracle.primary_anchor.source_function;
oracle.primary_anchor.answer_basis = "Agent-visible corpus only: the canonical anchor answer is captured_span plus answer_function as declared in the captured bundle slice. source_function is a private maintainer mapping into src/.";
delete oracle.primary_anchor.function;
delete oracle.primary_anchor.bundle_function;

const completenessFailures = [];
const spanGroups = new Map();
for (const entry of oracle.role_oracle) {
  const captured = entry.captured_span;
  const id = `${captured.file}:${captured.start_offset}-${captured.end_offset}`;
  if (!spanGroups.has(id)) spanGroups.set(id, []);
  spanGroups.get(id).push(`${entry.source_file}::${entry.source_function}:${entry.role}`);
  const slice = bundle.slice(captured.start_offset, captured.end_offset);
  if (!isBalancedFunction(slice)) completenessFailures.push({ key: sourceKey(entry), reason: "not_complete_function", preview: slice.slice(0, 120) });
}
const duplicateSpans = [...spanGroups.entries()].filter(([, values]) => values.length > 1);
if (duplicateSpans.length || completenessFailures.length) {
  console.error(JSON.stringify({ error: "post_resolution_validation_failed", duplicateSpans, completenessFailures }, null, 2));
  process.exit(1);
}

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

let verified = 0;
for (const entry of oracle.role_oracle) {
  const slice = bundle.slice(entry.captured_span.start_offset, entry.captured_span.end_offset);
  if (sha(slice) === entry.captured_span.sha256) verified += 1;
}

console.log(JSON.stringify({
  case_id: oracle.case_id,
  bundle_function_count: bundleFunctions.length,
  role_oracle_updated: oracle.role_oracle.length,
  hash_verified: verified,
  anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  duplicate_span_groups: duplicateSpans.length,
}, null, 2));

if (verified !== oracle.role_oracle.length) process.exit(1);
