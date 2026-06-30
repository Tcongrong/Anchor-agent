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
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/browser.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

const ALIASES = new Map([
  ["browserFingerprintDigest", ["src/z0/k7/q3/t9.js", "browserFingerprintDigest"]],
  ["hasBrowserEvidence", ["src/z0/k7/q3/t9.js", "hasBrowserEvidence"]],
  ["makeBody", ["src/z0/k7/q3/t9.js", "makeBody"]],
  ["makeTape", ["src/z0/k7/q3/t9.js", "makeTape"]],
  ["u", ["src/z0/k7/q3/t9.js", "u"]],
  ["submitPipeline", ["src/z0/b1.js", "submitPipeline"]],
  ["c2 action router", ["src/z0/c2.js", "c2"]],
  ["g6 local event bridge", ["src/z0/g6.js", "dispatchLocal"]],
  ["f5 async scheduler", ["src/z0/f5.js", "f5"]],
  ["e4 browser evidence collector", ["src/z0/e4.js", "e4"]],
  ["k1 route layer", ["src/z0/k1.js", "k1"]],
  ["m0 projection and digest caller", ["src/z0/m0.js", "m0"]],
  ["makePayload", ["src/z0/n0.js", "makePayload"]],
  ["n0 output wrapper", ["src/z0/n0.js", "n0"]],
  ["non-target route fallback", ["src/z0/c2.js", "tableMiss"]],
]);

const BUNDLE_HINTS = new Map();

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
  const re = /\b(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    const keywordIndex = match.index + match[0].indexOf("function");
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

function needlesFromSource(body, sourceKey = "") {
  const needles = [];
  for (const match of body.matchAll(/'([^'\\]{2,})'/g)) {
    if (match[1].length <= 48) needles.push(match[1]);
  }
  for (const match of body.matchAll(/"([^"\\]{2,})"/g)) {
    if (match[1].length <= 48) needles.push(match[1]);
  }
  for (const match of body.matchAll(/\['([^'\\]+)'\]/g)) needles.push(match[1]);
  for (const match of body.matchAll(/0x[0-9a-fA-F]{2,}/g)) needles.push(match[0]);
  for (const match of body.matchAll(/\b\d{5,}\b/g)) needles.push(match[0]);
  for (const match of body.matchAll(/tag:\s*["']([^"']+)["']/g)) needles.push(match[1]);
  for (const match of body.matchAll(/localSalt\s*=\s*(\d+)/g)) needles.push(match[1]);
  for (const match of body.matchAll(/localSlot\s*=\s*(\d+)/g)) needles.push(match[1]);
  for (const id of [
    "browserFingerprintDigest",
    "hasBrowserEvidence",
    "makeBody",
    "makeTape",
    "browser.fingerprint",
    "browser_fingerprint",
    "navVector",
    "screenVector",
    "cssMedia",
    "canvasMark",
    "timeZone",
    "bf_",
    "Math.imul",
    "row.ix",
    "row.k",
    "row.v",
    "row.p",
    "parts.join",
    "b1-submit",
    "#fingerprintForm",
    "#fingerprintStatus",
    "Fingerprint failed",
    "requestSubmit",
    "tableMiss",
    "dispatchLocal",
    "0x27d4eb2d",
    "0x165667b1",
  ]) {
    if (body.includes(id)) needles.push(id);
  }
  if (sourceKey.includes("/x/x")) {
    const decoy = sourceKey.split("::")[1];
    if (decoy) {
      needles.push(decoy, `branch: "${decoy}"`, `:d${decoy.slice(1)}`, `${decoy}:`);
    }
  }
  if (sourceKey.includes("/w/w")) {
    const lane = sourceKey.split("::")[1];
    if (lane) {
      needles.push(lane, `middle["${lane}"]`, `${lane}:`);
    }
  }
  return [...new Set(needles.filter((needle) => needle.length >= 2 && needle.length <= 64))];
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

  const needles = needlesFromSource(sourceBody, sourceKey);
  let hits = 0;
  if (needles.length) {
    for (const needle of needles) {
      if (bundleBody.includes(needle)) hits += 1;
    }
  }

  const needleScore = needles.length ? hits / needles.length : 0;
  const sizeRatio =
    Math.min(sourceBody.length, bundleBody.length) / Math.max(sourceBody.length, bundleBody.length);
  return needleScore * 0.8 + sizeRatio * 0.2;
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
  const match = slice.trim().match(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : null;
}

function isCompleteFunctionSlice(text, label) {
  const trimmed = text.trim();
  if (!/^(?:async\s+)?function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) {
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
  const minLength = label.includes("browserFingerprintDigest") ? 100 : 40;
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
  return anchor.source_function ?? anchor.function ?? "browserFingerprintDigest";
}

function ensureDecoyEntries(oracle) {
  const existing = new Set(oracle.role_oracle.map((entry) => resolveSourceKey(entry)));
  for (let i = 0; i < 44; i += 1) {
    const name = `x${String(i).padStart(2, "0")}`;
    const file = `src/z0/x/${name}.js`;
    const key = `${file}::${name}`;
    if (!existing.has(key)) {
      oracle.role_oracle.push({
        function: `${name} off-chain decoy`,
        role: "Off-chain",
        score: 0,
        source_file: file,
        source_function: name,
        why: "Semantic decoy module emitting bf-like shadow values outside the target browser.fingerprint observable.",
      });
    }
  }
  for (let i = 0; i < 8; i += 1) {
    const name = `w${String(i).padStart(2, "0")}`;
    const file = `src/z0/w/${name}.js`;
    const key = `${file}::${name}`;
    if (!existing.has(key)) {
      oracle.role_oracle.push({
        function: `${name} middleware helper`,
        role: "Path-generic-helper",
        score: 0.1,
        source_file: file,
        source_function: name,
        why: "Generic middleware lane on the fingerprint path; not the value constructor.",
      });
    }
  }
}

function hardNeedlesForSource(sourceKey) {
  const hard = [];
  const [file] = sourceKey.split("::");
  const fileText = readFileSync(path.join(hiddenRoot, file), "utf8");
  if (sourceKey.includes("/x/x")) {
    const decoy = sourceKey.split("::")[1];
    if (decoy) hard.push(`:d${decoy.slice(1)}`);
  }
  if (sourceKey.includes("/w/w")) {
    const lane = sourceKey.split("::")[1];
    const tag = fileText.match(new RegExp(`tag:\\s*["']${lane}:\\d{3}["']`));
    if (tag) {
      const value = tag[0].match(/["']([^"']+)["']/);
      if (value) hard.push(value[1]);
    }
  }
  if (sourceKey.endsWith("::browserFingerprintDigest")) {
    hard.push("0x27d4eb2d", "0x165667b1", "'bf_'");
  }
  if (sourceKey.endsWith("::makeTape")) {
    hard.push("parts.join");
  }
  if (sourceKey.endsWith("::submitPipeline")) {
    hard.push("b1-submit", "browser.fingerprint");
  }
  return [...new Set(hard.filter(Boolean))];
}

function findByBundleOffset(sourceKey, sourceBody, usedStarts) {
  const [file, name] = sourceKey.split("::");
  const fileText = readFileSync(path.join(hiddenRoot, file), "utf8");
  const probes = [];
  if (file.includes("/x/x")) {
    probes.push(`:d${name.slice(1)}`, `branch: "${name}"`, `'${name}'`);
    const tag = fileText.match(/tag:\s*"([^"]+)"/);
    if (tag) probes.push(tag[1]);
  }
  if (file.includes("/w/w")) {
    const tag = fileText.match(/tag:\s*"([^"]+)"/);
    if (tag) probes.push(tag[1]);
    probes.push(`"${name}"`);
  }
  const ranked = [];
  for (const probe of probes) {
    let idx = -1;
    while ((idx = bundle.indexOf(probe, idx + 1)) !== -1) {
      for (const fn of bundleFuncs) {
        if (fn.start > idx || fn.end <= idx) continue;
        const owner = usedStarts.get(fn.start);
        if (owner && owner !== sourceKey && sourceBodyHash(owner) !== sourceBodyHash(sourceKey)) continue;
        const sizeRatio =
          Math.min(sourceBody.length, fn.body.length) / Math.max(sourceBody.length, fn.body.length);
        ranked.push({ fn, sizeRatio, probe });
      }
    }
  }
  if (!ranked.length) return null;
  ranked.sort((a, b) => b.sizeRatio - a.sizeRatio);
  if (ranked[0].sizeRatio >= 0.55) return ranked[0].fn;
  const byProbe = ranked.filter((item) => item.sizeRatio >= 0.45);
  if (byProbe.length === 1) return byProbe[0].fn;
  return null;
}

function findByHardNeedles(sourceKey, sourceBody, usedStarts) {
  const hard = hardNeedlesForSource(sourceKey);
  if (!hard.length) return null;
  const candidates = bundleFuncs.filter((fn) => {
    const owner = usedStarts.get(fn.start);
    if (owner && owner !== sourceKey && sourceBodyHash(owner) !== sourceBodyHash(sourceKey)) return false;
    return hard.every((needle) => fn.body.includes(needle));
  });
  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1) {
    const ranked = candidates
      .map((fn) => ({
        fn,
        sizeRatio: Math.min(sourceBody.length, fn.body.length) / Math.max(sourceBody.length, fn.body.length),
      }))
      .sort((a, b) => b.sizeRatio - a.sizeRatio);
    if (ranked[0].sizeRatio >= 0.45) return ranked[0].fn;
  }
  return null;
}

function findBundleNode(sourceKey, sourceBody, preferredName, usedStarts) {
  const hardMatch = findByHardNeedles(sourceKey, sourceBody, usedStarts);
  if (hardMatch) return hardMatch;
  const offsetMatch = findByBundleOffset(sourceKey, sourceBody, usedStarts);
  if (offsetMatch) return offsetMatch;

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
    .filter((item) => item.nameMatch || item.score >= 0.18)
    .sort((a, b) => {
      if (a.nameMatch !== b.nameMatch) return Number(b.nameMatch) - Number(a.nameMatch);
      if (Math.abs(a.score - b.score) > 0.005) return b.score - a.score;
      return b.sizeRatio - a.sizeRatio;
    });

  if (!scored.length) return null;

  const top = scored[0];
  if (top.nameMatch) return top.fn;

  const second = scored[1];
  if (!second || top.score - second.score >= 0.02 || top.sizeRatio - second.sizeRatio >= 0.08) {
    return top.fn;
  }

  if (top.score >= 0.38) return top.fn;

  if (sourceKey.endsWith("::browserFingerprintDigest") && !top.fn.body.trimStart().startsWith("return function")) {
    return top.fn;
  }

  if (top.score >= 0.15) return top.fn;

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
oracle.target_reference.task_file = "agent_visible/task.json";
oracle.target_reference.metadata_file = "agent_hidden/build_meta.hidden.json";
oracle.acceptable_hit_conditions = [
  "Canonical match is primary_anchor.captured_span in the captured bundle (hash/offset/complete function body). Agents only see captures, so the standard answer identifier is primary_anchor.answer_function, not source_function.",
  "A returned function name is scored against answer_function in the captured corpus. source_function is a private maintainer label and is not something an agent can know unless the bundle still exposes that exact identifier.",
  "Agent explanation distinguishes the anchor from raw browser-feature collection, routing, input preparation, wrapper, sink, core utility and off-chain decoy functions.",
  "A snippet answer is accepted only when it maps uniquely to one complete enclosing function in the captured corpus.",
];
ensureDecoyEntries(oracle);
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
  delete entry.captured_function;
  delete entry.function;
}

const anchorSourceFunction = primaryAnchorSourceFunction(oracle.primary_anchor);
const anchorKey = `${oracle.primary_anchor.source_file}::${anchorSourceFunction}`;
oracle.primary_anchor.source_function = anchorSourceFunction;
oracle.primary_anchor.captured_span = resolved.get(anchorKey);
oracle.primary_anchor.captured_file = capRel;
const anchorSliceForName = bundle.slice(
  oracle.primary_anchor.captured_span.start_offset,
  oracle.primary_anchor.captured_span.end_offset,
);
const anchorBundleName = bundleFunctionName(anchorSliceForName);
oracle.primary_anchor.answer_function = anchorBundleName || anchorSourceFunction;
oracle.primary_anchor.source_bundle_name_aligned = oracle.primary_anchor.answer_function === anchorSourceFunction;
oracle.primary_anchor.answer_basis =
  "Agent-visible corpus only: the canonical anchor answer is captured_span plus answer_function as declared in the captured bundle slice. source_function is a private maintainer mapping into src/.";
if (!oracle.primary_anchor.source_bundle_name_aligned) {
  oracle.primary_anchor.naming_note =
    "source_function differs from answer_function after obfuscation; graders must match captured_span (hash/offset), not the source-side identifier string.";
}
delete oracle.primary_anchor.function;
delete oracle.primary_anchor.captured_function;
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
const anchorCheck = isCompleteFunctionSlice(anchorSlice, "primary_anchor:browserFingerprintDigest");
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
