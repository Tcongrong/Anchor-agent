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
const capRel = "captures/devtools-source-dump/127.0.0.1_4191/assets/account.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

const ALIASES = new Map([
  ["r submit materialization pipeline", ["src/z0/l0.js", "r"]],
  ["z tuple builder", ["src/z0/e4.js", "z"]],
  ["r async queue", ["src/z0/f5.js", "r"]],
  ["r local event plane", ["src/z0/g6.js", "r"]],
  ["r action router", ["src/z0/c2.js", "r"]],
  ["r submit gate", ["src/z0/d3.js", "r"]],
  ["bind delegated click", ["src/z0/b1.js", "r"]],
  ["keyRing sink copy", ["src/z0/n0.js", "keyRing"]],
  ["r sink wrapper", ["src/z0/n0.js", "r"]],
  ["p decoy launcher", ["src/z0/p0.js", "p"]],
  ["soft decoy emitter", ["src/z0/p0.js", "soft"]],
]);

// Obfuscator renames that differ from source export names.
const BUNDLE_HINTS = new Map([
  ["src/z0/k7/q3/t9.js::r", ["r$d"]],
  ["src/z0/k7/q3/t9.js::m", ["m$6"]],
  ["src/z0/e4.js::z", ["z$1"]],
  ["src/z0/l0.js::r", ["r$c"]],
  ["src/z0/c2.js::r", ["r$1"]],
  ["src/z0/d3.js::r", ["r$2"]],
  ["src/z0/f5.js::r", ["r$3"]],
  ["src/z0/g6.js::r", ["r$4"]],
  ["src/z0/n0.js::r", ["r$e"]],
  ["src/z0/b1.js::r", ["r"]],
  ["src/z0/n0.js::keyRing", ["keyRing$1"]],
]);

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

function needlesFromSource(body) {
  const needles = [];
  for (const match of body.matchAll(/'([^'\\]{2,})'/g)) needles.push(match[1]);
  for (const match of body.matchAll(/"([^"\\]{2,})"/g)) needles.push(match[1]);
  for (const match of body.matchAll(/\['([^'\\]+)'\]/g)) needles.push(match[1]);
  for (const match of body.matchAll(/0x[0-9a-fA-F]{2,}/g)) needles.push(match[0]);
  for (const match of body.matchAll(/\b\d{5,}\b/g)) needles.push(match[0]);
  for (const id of [
    "isSurfacePart",
    "assembleBrowserFingerprint",
    "encodeFingerprintDigest",
    "fingerprintFrame",
    "assembleDeviceProbe",
    "device_hash",
    "browser_trace",
    "z0:local-plane",
    "surfaceArm",
    "surface:delegate",
    "surface:armed:",
    "queueDepth",
    "Submitted",
    "fp_probe",
    "vendorScore",
    "queueMicrotask",
    "requestAnimationFrame",
    "MutationObserver",
    "CustomEvent",
    "matchMedia",
    "toDataURL",
    "runtimeTicket",
    "runtimeSlot",
    "runtimeMetric",
    "materialize",
    "seedCells",
    "walk",
    "unpack",
    "decoys",
    "cellLane",
    "browser-fingerprint-surface",
    "fp:44:9",
    "composedPath",
    "data-scan",
    "getBoundingClientRect",
    "Reflect.set",
    "ownKeys",
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
  const match = slice.trim().match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : null;
}

function isCompleteFunctionSlice(text, label) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) {
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
  const minLength = label.includes("assembleBrowserFingerprint") ? 100 : 40;
  if (trimmed.length < minLength) {
    return { ok: false, reason: "span_too_short", label, length: trimmed.length };
  }
  return { ok: true };
}

const bundleFuncs = parseBundleFunctions(bundle);
const sourceCache = new Map();
const sourceBodyHashes = new Map();

function sourceFunctions(relativePath) {
  if (!sourceCache.has(relativePath)) {
    const text = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
    sourceCache.set(relativePath, extractSourceFunctions(text));
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
  if (entry.source_function) {
    return `${entry.source_file}::${entry.source_function}`;
  }
  if (ALIASES.has(entry.function)) {
    const [file, name] = ALIASES.get(entry.function);
    return `${file}::${name}`;
  }
  const token = (entry.function.match(/^[A-Za-z_$][\w$]*/) || [])[0];
  return `${entry.source_file}::${token}`;
}

function primaryAnchorSourceFunction(anchor) {
  return anchor.source_function ?? anchor.function;
}

function findBundleNode(sourceKey, sourceBody, preferredName, usedStarts) {
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
  const ah = BUNDLE_HINTS.has(a) || !a.endsWith("::r");
  const bh = BUNDLE_HINTS.has(b) || !b.endsWith("::r");
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

const anchorSourceFunction = primaryAnchorSourceFunction(oracle.primary_anchor);
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
  console.error(
    JSON.stringify(
      {
        error: "duplicate_span_across_source_keys",
        duplicates: duplicateSpans.map(([spanId, keys]) => ({ spanId, keys })),
      },
      null,
      2,
    ),
  );
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
const anchorCheck = isCompleteFunctionSlice(anchorSlice, "primary_anchor:assembleBrowserFingerprint");
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

console.log(
  JSON.stringify(
    {
      case_id: oracle.case_id,
      bundle_function_count: bundleFuncs.length,
      role_oracle_updated: oracle.role_oracle.length,
      hash_verified: pass,
      anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
      anchor_lines:
        oracle.primary_anchor.captured_span.end_line - oracle.primary_anchor.captured_span.start_line + 1,
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
