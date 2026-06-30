import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_8077/assets/workspace.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

const baseRoles = [
  ["src/z0/k7/q3/t9.js", "r", "Anchor", 1.0, "Constructs the target state_code by hashing the workspace parameter tuple through the selected slot-23 config and returning the sc_ value."],
  ["src/z0/k7/q3/t9.js", "u", "Path/Wrapper", 0.2, "Factory that returns the selected reducer; it does not itself construct the target value for a concrete request."],
  ["src/z0/k7/q3/t9.js", "y", "Path/Wrapper", 0.2, "Dispatches to a slot reducer; selecting a reducer is not the target value construction site."],
  ["src/z0/m0.js", "produce", "Path/Wrapper", 0.2, "Orchestrates config lookup, reducer construction, and reducer invocation."],
  ["src/z0/m0.js", "m0", "Path/Wrapper", 0.2, "Runs middleware and forwards an already constructed value to the sink wrapper."],
  ["src/z0/l0.js", "l0", "Path-critical", 0.2, "Runs the state machine that produces transit state used by the encoder path."],
  ["src/z0/e4.js", "e4", "Path-critical", 0.2, "Parses workspace key and sync-derived stats before tuple construction."],
  ["src/z0/f5.js", "f5", "Path-critical", 0.2, "Builds the workspace parameter tuple passed to the anchor encoder."],
  ["src/z0/g6.js", "g6", "Path-critical", 0.2, "Carries prepared state through asynchronous boundaries before encoding."],
  ["src/z0/h7.js", "h7", "Path-critical", 0.2, "Transfers the workspace state state packet through the local event plane."],
  ["src/z0/d3.js", "d3", "Path-critical", 0.2, "Selects scope flags from the sync interval and offline-mode profile."],
  ["src/z0/c2.js", "c2", "Path-critical", 0.2, "Resolves the interval and offline action-table entry before scope resolution."],
  ["src/z0/b1.js", "b1", "Path-critical", 0.2, "Installs the apply-workspace click listener and collects form state."],
  ["src/z0/n0.js", "n0", "Wrapper", 0.2, "Packages and emits an already constructed state_code value under the workspace.commit action."],
  ["src/z0/p0.js", "p0", "Off-chain", 0.0, "Launches shadow computations that do not feed the target workspace.commit console log."],
  ["src/z0/q0.js", "q0", "Path-generic-helper", 0.1, "Renders workspace state and scope metadata without constructing the state code."]
];

const roleRows = baseRoles.map(([source_file, source_function, role, score, why]) => ({ source_file, source_function, role, score, why }));
for (let i = 0; i < 44; i += 1) {
  const id = String(i).padStart(2, "0");
  roleRows.push({
    source_file: `src/z0/x/x${id}.js`,
    source_function: `x${id}`,
    role: "Off-chain",
    score: 0.0,
    why: `Shadow reducer x${id} computes a plausible non-target value and does not feed the workspace.commit state_code console log.`
  });
}

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
    normalized_sha256: nsha(text)
  };
}

function buildStringMask(source) {
  const mask = new Uint8Array(source.length);
  let quote = "";
  let escape = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (escape) {
      mask[i] = quote ? 1 : 0;
      escape = false;
      continue;
    }
    if (quote) {
      mask[i] = 1;
      if (ch === "\\") escape = true;
      else if (ch === quote) quote = "";
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      mask[i] = 1;
    }
  }
  return mask;
}

function findMatching(source, openIndex, open, close, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === open) depth += 1;
    else if (source[i] === close) {
      depth -= 1;
      if (depth === 0) return i;
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
  if (bodyOpen === -1) return null;
  const bodyClose = findMatching(source, bodyOpen, "{", "}", inString);
  if (bodyClose === -1) return null;
  return { start: keywordIndex, end: bodyClose + 1, body: source.slice(keywordIndex, bodyClose + 1) };
}

function collectFunctions(source) {
  const inString = buildStringMask(source);
  const byStart = new Map();
  const pattern = /\b(?:export\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = pattern.exec(source))) {
    const keywordIndex = match.index + match[0].indexOf("function");
    const extracted = extractFunctionSpan(source, keywordIndex, inString);
    if (!extracted || byStart.has(extracted.start)) continue;
    byStart.set(extracted.start, { name: match[1], ...extracted });
  }
  return [...byStart.values()];
}

function sourceFunctions(relativePath) {
  const text = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
  return collectFunctions(text);
}

function sourceFunction(relativePath, name) {
  const matches = sourceFunctions(relativePath).filter((fn) => fn.name === name);
  return matches[0] || null;
}

const bundleFuncs = collectFunctions(bundle);

function needlesFromSource(body) {
  const needles = [];
  for (const match of body.matchAll(/"([^"\\]{3,})"|'([^'\\]{3,})'/g)) needles.push(match[1] || match[2]);
  for (const match of body.matchAll(/0x[0-9a-fA-F]{4,}/g)) needles.push(match[0]);
  for (const token of ["Math.imul", "workspace.commit", "state_code", "sc_", "applyWorkspace", "workspaceKey", "syncInterval", "offlineMode", "prefixCodes", "createSource", "queueMicrotask", "requestAnimationFrame", "MutationObserver", "CustomEvent"]) {
    if (body.includes(token)) needles.push(token);
  }
  return [...new Set(needles)];
}

function scoreMatch(sourceBody, bundleBody) {
  const needles = needlesFromSource(sourceBody);
  let hits = 0;
  for (const needle of needles) {
    if (bundleBody.includes(needle)) hits += 1;
  }
  const needleScore = needles.length ? hits / needles.length : 0;
  const sizeRatio = Math.min(sourceBody.length, bundleBody.length) / Math.max(sourceBody.length, bundleBody.length);
  return needleScore * 0.75 + sizeRatio * 0.25;
}

function resolveBundleFunction(sourceFile, sourceName, usedStarts) {
  const src = sourceFunction(sourceFile, sourceName);
  if (!src) throw new Error(`Missing source function ${sourceFile}::${sourceName}`);
  const ranked = bundleFuncs
    .filter((fn) => !usedStarts.has(fn.start))
    .map((fn) => {
      const exactName = fn.name === sourceName ? 1 : 0;
      const prefixName = fn.name.startsWith(`${sourceName}$`) ? 0.9 : 0;
      return { fn, score: scoreMatch(src.body, fn.body) + Math.max(exactName, prefixName) };
    })
    .filter((item) => item.score >= 0.08)
    .sort((a, b) => b.score - a.score);
  if (!ranked.length) throw new Error(`Unresolved bundle function ${sourceFile}::${sourceName}`);
  if (ranked.length > 1 && ranked[0].score - ranked[1].score < 0.08) {
    throw new Error(`Ambiguous bundle function ${sourceFile}::${sourceName}`);
  }
  return ranked[0].fn;
}

function isCompleteFunctionSlice(text) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return false;
  if (!trimmed.endsWith("}")) return false;
  const inString = buildStringMask(trimmed);
  let depth = 0;
  for (let i = 0; i < trimmed.length; i += 1) {
    if (inString[i]) continue;
    if (trimmed[i] === "{") depth += 1;
    if (trimmed[i] === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0 && trimmed.length > 40;
}

const usedStarts = new Set();
const updatedRows = [];
for (const row of roleRows) {
  const node = resolveBundleFunction(row.source_file, row.source_function, usedStarts);
  usedStarts.add(node.start);
  const captured = span(node);
  const slice = bundle.slice(captured.start_offset, captured.end_offset);
  if (!isCompleteFunctionSlice(slice)) {
    throw new Error(`Incomplete function slice for ${row.source_file}::${row.source_function}`);
  }
  updatedRows.push({
    role: row.role,
    score: row.score,
    answer_function: node.name,
    source_function: row.source_function,
    source_file: row.source_file,
    captured_span: captured,
    why: row.why
  });
}

const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
oracle.role_oracle = updatedRows;
const anchorRow = updatedRows.find((row) => row.role === "Anchor");
if (!anchorRow) throw new Error("Anchor row missing");
oracle.primary_anchor.answer_function = anchorRow.answer_function;
oracle.primary_anchor.source_function = anchorRow.source_function;
oracle.primary_anchor.source_file = anchorRow.source_file;
oracle.primary_anchor.captured_file = capRel;
oracle.primary_anchor.captured_span = anchorRow.captured_span;
oracle.primary_anchor.source_bundle_name_aligned = anchorRow.answer_function === anchorRow.source_function;
oracle.primary_anchor.answer_basis = "Agent-visible corpus only: the canonical anchor answer is captured_span plus answer_function as declared in the captured bundle slice. source_function is a private maintainer mapping into src/.";

const spans = new Map();
for (const row of updatedRows) {
  const id = `${row.captured_span.start_offset}-${row.captured_span.end_offset}`;
  if (!spans.has(id)) spans.set(id, []);
  spans.get(id).push(`${row.source_file}::${row.source_function}`);
}
const duplicateSpanGroups = [...spans.values()].filter((rows) => rows.length > 1);
if (duplicateSpanGroups.length) {
  throw new Error(`Duplicate spans across role rows: ${JSON.stringify(duplicateSpanGroups)}`);
}

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n", "utf8");

let hashVerified = 0;
for (const row of updatedRows) {
  const slice = bundle.slice(row.captured_span.start_offset, row.captured_span.end_offset);
  if (sha(slice) === row.captured_span.sha256) hashVerified += 1;
}

console.log(JSON.stringify({
  case_id: oracle.case_id,
  bundle_function_count: bundleFuncs.length,
  role_oracle_updated: updatedRows.length,
  hash_verified: hashVerified,
  anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
  anchor_lines: oracle.primary_anchor.captured_span.end_line - oracle.primary_anchor.captured_span.start_line + 1,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  duplicate_span_groups: duplicateSpanGroups.length
}));

if (hashVerified !== updatedRows.length) process.exit(1);
