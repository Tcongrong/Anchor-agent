// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4008/assets/filter.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

const ALIASES = new Map([
  ["returned reducer wrapper", ["src/z8/k7/q3/t9.js", "r"]],
  ["bind staged probe session actions", ["src/z8/b1.js", "b1"]],
  ["stage custom event handler", ["src/z8/b1.js", "stageHandler"]],
  ["collect custom event dispatcher", ["src/z8/b1.js", "collectHandler"]],
  ["c2 pipeline router", ["src/z8/c2.js", "c2"]],
  ["sink payload envelope", ["src/z8/n0.js", "buildPayload"]],
  ["sink wrapper", ["src/z8/n0.js", "n0"]],
  ["paint scan state", ["src/z8/n0.js", "paint"]],
  ["shadow cache append", ["src/z8/p0.js", "pushCache"]],
  ["shadow signal emitter", ["src/z8/p0.js", "send"]],
]);

const STATIC_BUNDLE_HINTS = new Map([
  ["src/z8/k7/q3/t9.js::deriveBrowserFingerprint", ["_0x18dc47"]],
  ["src/z8/k7/q3/t9.js::materializeSignalBytes", ["_0x12d5bc"]],
  ["src/z8/k7/q3/t9.js::encodeFingerprintHash", ["_0x2c2b7d"]],
  ["src/z8/k7/q3/t9.js::signalLaneWord", ["_0x43b647"]],
  ["src/z8/k7/q3/t9.js::composeSignalText", ["_0x31edb2"]],
  ["src/z8/k7/q3/t9.js::mapRows", ["_0x2709bd"]],
  ["src/z8/k7/q3/t9.js::rot", ["_0x3843c2"]],
  ["src/z8/k7/q3/t9.js::fmix", ["_0x5cdb0d"]],
  ["src/z8/k7/q3/t9.js::u", ["_0x585c58"]],
  ["src/z8/k7/q3/t9.js::r", ["_0x582297"]],
  ["src/z8/b1.js::b1", ["_0x501a3a"]],
  ["src/z8/c2.js::c2", ["_0x310402"]],
  ["src/z8/n0.js::buildPayload", ["_0x253d9a"]],
  ["src/z8/n0.js::n0", ["_0x1790ed"]],
  ["src/z8/n0.js::paint", ["_0x5bc9c9"]],
  ["src/z8/p0.js::pushCache", ["_0x351999"]],
  ["src/z8/p0.js::send", ["_0x3740f6"]],
]);

const BODY_MARKERS = new Map([
  ["src/z8/k7/q3/t9.js::materializeSignalBytes", ["new Uint8Array(0x12)"]],
  ["src/z8/k7/q3/t9.js::encodeFingerprintHash", ["0x811c9dc5", "0x85ebca6b", "0xc2b2ae35"]],
  ["src/z8/b1.js::b1", ["stageToken", "0xfff1"]],
  ["src/z8/c2.js::c2", ["pipelineGroup", "pipelineSalt"]],
  ["src/z8/n0.js::buildPayload", ["fp_view"]],
  ["src/z8/n0.js::paint", ["case008TargetLen"]],
  ["src/z8/p0.js::send", ["fingerprint.shadow.signal"]],
]);

let ACTIVE_BUNDLE_HINTS = new Map();
let ACTIVE_ARROW_HINTS = new Map();

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

function extractArrowSpan(source, marker, inString) {
  const idx = source.indexOf(marker);
  if (idx === -1) return null;
  const parenOpen = source.indexOf("(", idx);
  if (parenOpen === -1) return null;
  const parenClose = findMatchingParen(source, parenOpen, inString);
  if (parenClose === -1) return null;
  const arrow = source.indexOf("=>", parenClose);
  if (arrow === -1) return null;
  let bodyOpen = -1;
  for (let i = arrow + 2; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === "{") {
      bodyOpen = i;
      break;
    }
  }
  if (bodyOpen === -1) return null;
  const end = findMatchingBrace(source, bodyOpen, inString);
  if (end === -1) return null;
  return { start: parenOpen, end, body: source.slice(parenOpen, end) };
}

function extractSingleParamArrowSpan(source, eventVar, absoluteStart, inString) {
  const idx = source.indexOf(`${eventVar}, `);
  if (idx === -1) return null;
  let scan = idx + eventVar.length + 2;
  while (scan < source.length && /\s/.test(source[scan])) scan += 1;
  const identMatch = source.slice(scan).match(/^(_0x[a-f0-9]+)\s*=>/);
  if (!identMatch) return null;
  const arrow = source.indexOf("=>", scan);
  let bodyOpen = -1;
  for (let i = arrow + 2; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === "{") {
      bodyOpen = i;
      break;
    }
  }
  if (bodyOpen === -1) return null;
  const end = findMatchingBrace(source, bodyOpen, inString);
  if (end === -1) return null;
  return {
    start: absoluteStart + scan,
    end: absoluteStart + end,
    body: source.slice(scan, end),
  };
}

function resolveBundleArrowNode(sourceKey) {
  const hint = ACTIVE_ARROW_HINTS.get(sourceKey);
  if (!hint) return null;
  const parent = bundleFuncs.find((fn) => fn.name === hint.parent);
  if (!parent || !hint.eventVar) return null;
  const inString = buildStringMask(parent.body);
  return extractSingleParamArrowSpan(parent.body, hint.eventVar, parent.start, inString);
}

function augmentSourceMap(relativePath, map, text) {
  const inString = buildStringMask(text);
  if (relativePath === "src/z8/k7/q3/t9.js") {
    const marker = "return function r(";
    const idx = text.indexOf(marker);
    if (idx !== -1) {
      const keywordIndex = text.indexOf("function", idx);
      const extracted = extractFunctionSpan(text, keywordIndex, inString);
      if (extracted) map.set("r", extracted);
    }
  }
  if (relativePath === "src/z8/b1.js") {
    const stage = extractArrowSpan(text, "document.addEventListener(stageEventName", inString);
    if (stage) map.set("stageHandler", stage);
    const collect = extractArrowSpan(text, "document.addEventListener(collectEventName", inString);
    if (collect) map.set("collectHandler", collect);
  }
}

function needlesFromSource(body) {
  const needles = [];
  for (const match of body.matchAll(/'([^'\\]{2,})'/g)) needles.push(match[1]);
  for (const match of body.matchAll(/"([^"\\]{2,})"/g)) needles.push(match[1]);
  for (const match of body.matchAll(/\['([^'\\]+)'\]/g)) needles.push(match[1]);
  for (const match of body.matchAll(/0x[0-9a-fA-F]{2,}/g)) needles.push(match[0]);
  for (const match of body.matchAll(/\b\d{4,}\b/g)) needles.push(match[0]);
  for (const id of [
    "Math.imul",
    "prefixCodes",
    "fingerprint.collect",
    "browser_fp",
    "fp_",
    "scanMode",
    "extendedSignals",
    "shadow_key",
    "case008ShadowCache",
    "case008bf",
    "deriveBrowserFingerprint",
    "materializeSignalBytes",
    "encodeFingerprintHash",
    "Uint8Array",
    "0x12",
    "queueMicrotask",
    "requestAnimationFrame",
    "MutationObserver",
    "CustomEvent",
    "slot:",
    "fromCodes",
    "createSource",
    "toString(36)",
    "padStart",
  ]) {
    if (body.includes(id)) needles.push(id);
  }
  return [...new Set(needles)];
}

function bundleNameMatches(sourceKey, preferredName, bundleName) {
  if (!preferredName) return false;
  const hints = ACTIVE_BUNDLE_HINTS.get(sourceKey);
  if (hints) return hints.includes(bundleName);
  if (sourceKey === "src/z8/b1.js::stageHandler" && bundleName === "__stageHandler") return true;
  if (sourceKey === "src/z8/b1.js::collectHandler" && bundleName === "__collectHandler") return true;
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
  const fnMatch = trimmed.match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  if (fnMatch) return fnMatch[1];
  const arrowMatch = trimmed.match(/^(?:async\s*)?\(([^)]*)\)\s*=>/);
  if (arrowMatch) return null;
  return null;
}

function isCompleteFunctionSlice(text, label) {
  const trimmed = text.trim();
  const isFunctionDecl = /^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed);
  const isArrow = /^(?:async\s*)?\([^)]*\)\s*=>/.test(trimmed) || /^_0x[a-f0-9]+\s*=>/.test(trimmed);
  if (!isFunctionDecl && !isArrow) {
    return { ok: false, reason: "missing_function_header", label };
  }
  if (!trimmed.endsWith("}")) {
    return { ok: false, reason: "missing_closing_brace", label };
  }
  if (!isBalancedBraces(trimmed)) {
    return { ok: false, reason: "unbalanced_braces", label };
  }
  let bodyOpen = -1;
  if (isFunctionDecl) {
    bodyOpen = trimmed.indexOf("{", trimmed.indexOf(")"));
  } else {
    bodyOpen = trimmed.indexOf("{", trimmed.indexOf("=>"));
  }
  if (bodyOpen === -1 || bodyOpen >= trimmed.length - 1) {
    return { ok: false, reason: "missing_function_body", label };
  }
  const minLength =
    label.includes("::deriveBrowserFingerprint") || label.includes("primary_anchor") ? 100 : 24;
  if (trimmed.length < minLength) {
    return { ok: false, reason: "span_too_short", label, length: trimmed.length };
  }
  return { ok: true };
}

const bundleFuncs = parseBundleFunctions(bundle);

function bundleFuncByName(name) {
  return bundleFuncs.find((fn) => fn.name === name);
}

function nearOffset(left, right, maxDistance = 100000) {
  return Math.abs(left.start - right.start) <= maxDistance;
}

function pickClosest(candidates, anchor) {
  if (!candidates.length) return null;
  if (candidates.length === 1) return candidates[0];
  return candidates.sort(
    (a, b) => Math.abs(a.start - anchor.start) - Math.abs(b.start - anchor.start),
  )[0];
}

function pickLargest(candidates) {
  if (!candidates.length) return null;
  return candidates.sort((a, b) => b.body.length - a.body.length)[0];
}

function setActiveHint(sourceKey, fn) {
  if (fn?.name) ACTIVE_BUNDLE_HINTS.set(sourceKey, [fn.name]);
}

function bootstrapActiveHints() {
  ACTIVE_BUNDLE_HINTS = new Map();
  ACTIVE_ARROW_HINTS = new Map();

  for (const [sourceKey, names] of STATIC_BUNDLE_HINTS) {
    const valid = names.filter((name) => bundleFuncByName(name));
    if (valid.length) ACTIVE_BUNDLE_HINTS.set(sourceKey, valid);
  }

  const materialize = pickLargest(
    bundleFuncs.filter((fn) => fn.body.includes("new Uint8Array(0x12)")),
  );
  setActiveHint("src/z8/k7/q3/t9.js::materializeSignalBytes", materialize);

  const encode = pickClosest(
    bundleFuncs.filter(
      (fn) =>
        fn.body.includes("0x811c9dc5")
        && fn.body.includes("0x85ebca6b")
        && fn.body.includes("0xc2b2ae35"),
    ),
    materialize || { start: 0 },
  );
  setActiveHint("src/z8/k7/q3/t9.js::encodeFingerprintHash", encode);

  const derive = pickLargest(
    bundleFuncs.filter(
      (fn) =>
        materialize
        && encode
        && fn.body.includes(materialize.name)
        && fn.body.includes(encode.name)
        && fn.body.length < 650,
    ),
  );
  setActiveHint("src/z8/k7/q3/t9.js::deriveBrowserFingerprint", derive);

  const rot = pickClosest(
    bundleFuncs.filter(
      (fn) =>
        /<<[^;]+>>>\s*0x20\s*-/.test(fn.body)
        && fn.body.length < 220
        && materialize
        && nearOffset(fn, materialize, 80000),
    ),
    materialize || { start: 0 },
  );
  setActiveHint("src/z8/k7/q3/t9.js::rot", rot);

  const rotFn = rot || null;

  const fmix = pickClosest(
    bundleFuncs.filter(
      (fn) =>
        fn.body.includes("0x7feb352d")
        && fn.body.includes("0x846ca68b")
        && fn.body.length < 450
        && materialize
        && nearOffset(fn, materialize, 80000),
    ),
    materialize || { start: 0 },
  );
  setActiveHint("src/z8/k7/q3/t9.js::fmix", fmix);

  const signalLaneWord = pickLargest(
    bundleFuncs.filter(
      (fn) =>
        fn.body.includes("charCodeAt")
        && fn.body.includes("imul")
        && rotFn
        && fn.body.includes(rotFn.name)
        && materialize
        && nearOffset(fn, materialize, 50000),
    ),
  );
  setActiveHint("src/z8/k7/q3/t9.js::signalLaneWord", signalLaneWord);

  const composeSignalText = pickLargest(
    bundleFuncs.filter(
      (fn) =>
        fn.body.includes(".push(")
        && fn.body.includes("length")
        && materialize
        && nearOffset(fn, materialize, 80000)
        && fn.body.length > 450,
    ),
  );
  setActiveHint("src/z8/k7/q3/t9.js::composeSignalText", composeSignalText);

  const mapRows = pickLargest(
    bundleFuncs.filter(
      (fn) =>
        fn.body.includes("new Map")
        && fn.body.includes("plain")
        && materialize
        && nearOffset(fn, materialize, 80000)
        && fn.body.length < 350,
    ),
  );
  setActiveHint("src/z8/k7/q3/t9.js::mapRows", mapRows);

  const deriveName = ACTIVE_BUNDLE_HINTS.get("src/z8/k7/q3/t9.js::deriveBrowserFingerprint")?.[0];
  const u = pickLargest(
    bundleFuncs.filter(
      (fn) => deriveName && fn.body.includes(deriveName) && /return function _0x[a-f0-9]+/.test(fn.body),
    ),
  );
  setActiveHint("src/z8/k7/q3/t9.js::u", u);
  if (u) {
    const rMatch = u.body.match(/return function (_0x[a-f0-9]+)/);
    if (rMatch) ACTIVE_BUNDLE_HINTS.set("src/z8/k7/q3/t9.js::r", [rMatch[1]]);
  }

  setActiveHint(
    "src/z8/c2.js::c2",
    pickLargest(bundleFuncs.filter((fn) => fn.body.includes("pipelineGroup") && fn.body.includes("pipelineSalt"))),
  );
  setActiveHint("src/z8/n0.js::buildPayload", pickLargest(bundleFuncs.filter((fn) => fn.body.includes("fp_view"))));
  setActiveHint(
    "src/z8/n0.js::paint",
    pickLargest(bundleFuncs.filter((fn) => fn.body.includes("case008TargetLen"))),
  );
  setActiveHint(
    "src/z8/n0.js::n0",
    pickLargest(
      bundleFuncs.filter(
        (fn) =>
          fn.body.includes("console")
          && fn.body.includes("Object")
          && fn.body.length < 260
          && fn.body.length > 80,
      ),
    ),
  );
  const send = pickLargest(bundleFuncs.filter((fn) => fn.body.includes("fingerprint.shadow.signal")));
  setActiveHint("src/z8/p0.js::send", send);
  setActiveHint(
    "src/z8/p0.js::pushCache",
    pickLargest(
      bundleFuncs.filter(
        (fn) => fn.body.includes("['slice'](-0x30)") || fn.body.includes(".slice(-0x30)"),
      ),
    ),
  );

  const b1 = pickLargest(
    bundleFuncs.filter(
      (fn) => fn.body.includes("stageToken") && fn.body.includes("0xfff1") && fn.body.length > 3000,
    ),
  );
  setActiveHint("src/z8/b1.js::b1", b1);
  if (b1) {
    const listenerMatches = [...b1.body.matchAll(/\(_0x[a-f0-9]+,\s*(_0x[a-f0-9]+)\s*=>\s*\{/g)];
    for (const match of listenerMatches) {
      const eventVar = b1.body.slice(match.index + 1, match.index + 1 + b1.body.slice(match.index + 1).indexOf(",")).trim();
      const handlerStart = match.index + match[0].indexOf(match[1]);
      const handlerBody = b1.body.slice(handlerStart, handlerStart + 500);
      if (handlerBody.includes("stageToken") && !handlerBody.includes("Promise")) {
        ACTIVE_ARROW_HINTS.set("src/z8/b1.js::stageHandler", { parent: b1.name, eventVar });
      }
      if (handlerBody.includes("Promise") || handlerBody.includes("resolve")) {
        ACTIVE_ARROW_HINTS.set("src/z8/b1.js::collectHandler", { parent: b1.name, eventVar });
      }
    }
  }
}

const sourceCache = new Map();
const sourceBodyHashes = new Map();

function sourceFunctions(relativePath) {
  if (!sourceCache.has(relativePath)) {
    const text = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
    const map = extractSourceFunctions(text);
    augmentSourceMap(relativePath, map, text);
    sourceCache.set(relativePath, map);
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
  if (entry.source_function && entry.source_file) {
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

function bodyMatches(sourceKey, bundleBody) {
  const markers = BODY_MARKERS.get(sourceKey);
  if (!markers || !markers.length) return true;
  const active = markers.filter((marker) => bundle.includes(marker));
  if (!active.length) return true;
  return active.some((marker) => bundleBody.includes(marker));
}

function clusterAnchor(sourceKey) {
  if (!sourceKey.startsWith("src/z8/k7/q3/t9.js::")) return null;
  const materializeName = ACTIVE_BUNDLE_HINTS.get("src/z8/k7/q3/t9.js::materializeSignalBytes")?.[0];
  return materializeName ? bundleFuncByName(materializeName) : null;
}

function inResolutionCluster(fn, sourceKey) {
  const anchor = clusterAnchor(sourceKey);
  if (!anchor) return true;
  const clustered = new Set([
    "src/z8/k7/q3/t9.js::composeSignalText",
    "src/z8/k7/q3/t9.js::mapRows",
    "src/z8/k7/q3/t9.js::signalLaneWord",
    "src/z8/k7/q3/t9.js::rot",
    "src/z8/k7/q3/t9.js::fmix",
  ]);
  if (!clustered.has(sourceKey)) return true;
  return nearOffset(fn, anchor, 80000);
}

function findBundleNode(sourceKey, sourceBody, preferredName, usedStarts) {
  const scored = bundleFuncs
    .filter((fn) => {
      const owner = usedStarts.get(fn.start);
      if (owner && owner !== sourceKey && sourceBodyHash(owner) !== sourceBodyHash(sourceKey)) return false;
      if (!inResolutionCluster(fn, sourceKey)) return false;
      return bodyMatches(sourceKey, fn.body);
    })
    .map((fn) => {
      const nameMatch = bundleNameMatches(sourceKey, preferredName, fn.name);
      const score = scoreMatch(sourceBody, fn.body, sourceKey, preferredName, fn.name);
      const sizeRatio =
        Math.min(sourceBody.length, fn.body.length) / Math.max(sourceBody.length, fn.body.length);
      return { fn, score, nameMatch, sizeRatio };
    })
    .filter((item) => item.nameMatch || item.score >= 0.12)
    .sort((a, b) => {
      if (a.nameMatch !== b.nameMatch) return Number(b.nameMatch) - Number(a.nameMatch);
      if (Math.abs(a.score - b.score) > 0.005) return b.score - a.score;
      return b.sizeRatio - a.sizeRatio;
    });

  if (!scored.length) return null;
  const top = scored[0];
  if (top.nameMatch) return top.fn;
  const second = scored[1];
  if (!second || top.score - second.score >= 0.03 || top.sizeRatio - second.sizeRatio >= 0.12) {
    return top.fn;
  }
  if (top.score >= 0.42) return top.fn;
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
bootstrapActiveHints();
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
const resolved = new Map();
const usedStarts = new Map();
const failures = [];

const uniqueKeys = [...new Set(oracle.role_oracle.map((entry) => resolveSourceKey(entry)))];
uniqueKeys.sort((a, b) => {
  const ah = ACTIVE_BUNDLE_HINTS.has(a);
  const bh = ACTIVE_BUNDLE_HINTS.has(b);
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
  const arrowNode = resolveBundleArrowNode(sourceKey);
  const bundleNode = arrowNode || findBundleNode(sourceKey, sourceFn.body, name, usedStarts);
  if (!bundleNode) {
    failures.push({ sourceKey, reason: "bundle_function_unresolved" });
    continue;
  }
  if (bundleNode.ambiguous) {
    failures.push({ sourceKey, reason: "bundle_function_ambiguous", detail: bundleNode });
    continue;
  }
  resolved.set(sourceKey, span(bundleNode));
  usedStarts.set(bundleNode.start, sourceKey);
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

for (const entry of oracle.role_oracle) {
  const sourceKey = resolveSourceKey(entry);
  entry.captured_span = resolved.get(sourceKey);
  const slice = bundle.slice(entry.captured_span.start_offset, entry.captured_span.end_offset);
  entry.answer_function = bundleFunctionName(slice) || entry.source_function || sourceKey.split("::")[1];
  entry.source_function = sourceKey.split("::")[1];
  delete entry.captured_function;
  delete entry.function;
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
delete oracle.primary_anchor.captured_function;
oracle.span_status = "generated_by_gen_oracle_spans";

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
      { error: "duplicate_span_across_source_keys", duplicates: duplicateSpans.map(([spanId, keys]) => ({ spanId, keys })) },
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
const anchorCheck = isCompleteFunctionSlice(anchorSlice, "primary_anchor");
if (!anchorCheck.ok) {
  completenessFailures.push({ sourceKey: "primary_anchor", ...anchorCheck, preview: anchorSlice.slice(0, 120) });
}
if (completenessFailures.length) {
  console.error(JSON.stringify({ error: "span_completeness_failed", failures: completenessFailures }, null, 2));
  process.exit(1);
}

writeFileSync(oraclePath, `${JSON.stringify(oracle, null, 2)}\n`);

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
