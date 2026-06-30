// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundles.
// Run after `npm run build` (which copies dist into ../agent_visible/captures/) whenever src/ or
// the obfuscation output changes.
//
// Resolution strategy (simple and robust for this case):
//   The obfuscator runs with renameGlobals:false and deadCodeInjection:false, so every
//   top-level function declaration name (e.g. composeReceivablesSearchBody, projectCriteria,
//   collectFilterForm) is preserved verbatim and appears exactly once in its bundle file. Each
//   oracle entry already records which captured bundle file holds it (captured_span.file); we
//   slice the one `function <name>(` declaration in that file by balanced braces.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const ANCHOR_SOURCE_FUNCTION = "composeReceivablesSearchBody";

function stripBom(text) {
  return text.replace(/^﻿/, "");
}

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function nsha(text) {
  return createHash("sha256").update(text.replace(/\s+/g, " ").trim()).digest("hex");
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

// Extract a complete `function name(params){body}` span starting at keywordIndex.
// Closes the parameter list before looking for the body brace so default params like
// `({})` cannot be mistaken for the function body.
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
  return { start: keywordIndex, end };
}

function parseFunctions(source) {
  const inString = buildStringMask(source);
  const byName = new Map();
  // Allow an optional `async` keyword before `function`; the slice still starts at `function`.
  const re = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    if (inString[match.index]) continue;
    const extracted = extractFunctionSpan(source, match.index, inString);
    if (!extracted) continue;
    if (!byName.has(match[1])) byName.set(match[1], []);
    byName.get(match[1]).push({ name: match[1], start: extracted.start, end: extracted.end });
  }
  return byName;
}

function bundleFunctionName(slice) {
  const m = slice.trim().match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return m ? m[1] : null;
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

function isCompleteFunctionSlice(text, label, isAnchor) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return { ok: false, reason: "missing_function_header", label };
  if (!trimmed.endsWith("}")) return { ok: false, reason: "missing_closing_brace", label };
  if (!isBalancedBraces(trimmed)) return { ok: false, reason: "unbalanced_braces", label };
  const bodyOpen = trimmed.indexOf("{", trimmed.indexOf(")"));
  if (bodyOpen === -1 || bodyOpen >= trimmed.length - 1) return { ok: false, reason: "missing_function_body", label };
  const minLength = isAnchor ? 100 : 40;
  if (trimmed.length < minLength) return { ok: false, reason: "span_too_short", label, length: trimmed.length };
  return { ok: true };
}

function assertAscii(text, relPath) {
  // Offsets are documented as byte offsets; assert the bundle is pure ASCII so byte offsets
  // equal JS string indices (otherwise multi-byte chars would desynchronize them).
  for (let i = 0; i < text.length; i += 1) {
    if (text.charCodeAt(i) > 127) {
      console.error(JSON.stringify({ error: "non_ascii_bundle", file: relPath, at: i }, null, 2));
      process.exit(1);
    }
  }
}

// --- load captured bundles -------------------------------------------------
const oracle = JSON.parse(stripBom(readFileSync(oraclePath, "utf8")));

const fileCache = new Map(); // relPath -> { text, funcs }
function loadFile(relPath) {
  if (!fileCache.has(relPath)) {
    const text = readFileSync(path.join(visibleRoot, relPath), "utf8");
    assertAscii(text, relPath);
    fileCache.set(relPath, { text, funcs: parseFunctions(text) });
  }
  return fileCache.get(relPath);
}

function offLC(text, offset) {
  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset && i < text.length; i += 1) {
    if (text[i] === "\n") {
      line += 1;
      lineStart = i + 1;
    }
  }
  return { line, col: offset - lineStart };
}

function resolveEntry(entry, isAnchor) {
  const name = entry.source_function || (isAnchor ? ANCHOR_SOURCE_FUNCTION : entry.function);
  const relPath = entry.captured_span && entry.captured_span.file;
  if (!relPath) return { error: "missing_file_hint", name };
  const { text, funcs } = loadFile(relPath);
  const nodes = funcs.get(name) || [];
  if (nodes.length === 0) return { error: "function_not_found_in_file", name, file: relPath };
  if (nodes.length > 1) return { error: "function_name_not_unique_in_file", name, file: relPath, count: nodes.length };
  const node = nodes[0];
  const slice = text.slice(node.start, node.end);
  const start = offLC(text, node.start);
  const end = offLC(text, node.end);
  return {
    name,
    file: relPath,
    slice,
    captured: {
      file: relPath,
      start_line: start.line,
      end_line: end.line,
      start_column: start.col,
      end_column: end.col,
      start_offset: node.start,
      end_offset: node.end,
      sha256: sha(slice),
      normalized_sha256: nsha(slice)
    }
  };
}

const failures = [];
const completeness = [];
const resolvedAll = [];

function handle(entry, isAnchor) {
  const r = resolveEntry(entry, isAnchor);
  if (r.error) {
    failures.push(r);
    return null;
  }
  const check = isCompleteFunctionSlice(r.slice, `${r.file}::${r.name}`, isAnchor);
  if (!check.ok) completeness.push({ ...check, preview: r.slice.slice(0, 120) });
  resolvedAll.push(r);
  return r;
}

// role_oracle entries
for (const entry of oracle.role_oracle) {
  const r = handle(entry, false);
  if (!r) continue;
  entry.captured_span = r.captured;
  entry.answer_function = bundleFunctionName(r.slice);
  entry.source_function = r.name;
}

// primary anchor
const anchorR = handle(oracle.primary_anchor, true);
if (anchorR) {
  oracle.primary_anchor.source_function = ANCHOR_SOURCE_FUNCTION;
  oracle.primary_anchor.answer_function = bundleFunctionName(anchorR.slice) || ANCHOR_SOURCE_FUNCTION;
  oracle.primary_anchor.captured_file = anchorR.file;
  oracle.primary_anchor.captured_span = anchorR.captured;
  oracle.primary_anchor.source_bundle_name_aligned = oracle.primary_anchor.answer_function === ANCHOR_SOURCE_FUNCTION;
  oracle.primary_anchor.answer_basis =
    "Agent-visible corpus only: the canonical anchor answer is captured_span plus answer_function as declared in the captured bundle slice. source_function is a private maintainer mapping into src/.";
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

// duplicate span detection within the same file (different function names sharing a span)
const spanGroups = new Map();
for (const r of resolvedAll) {
  const id = `${r.file}#${r.captured.start_offset}-${r.captured.end_offset}`;
  if (!spanGroups.has(id)) spanGroups.set(id, new Set());
  spanGroups.get(id).add(r.name);
}
const duplicateSpans = [...spanGroups.entries()].filter(([, names]) => names.size > 1);
if (duplicateSpans.length) {
  console.error(JSON.stringify({ error: "duplicate_span_across_functions", duplicates: duplicateSpans.map(([id, names]) => ({ id, names: [...names] })) }, null, 2));
  process.exit(1);
}

if (completeness.length) {
  console.error(JSON.stringify({ error: "span_completeness_failed", failures: completeness }, null, 2));
  process.exit(1);
}

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

// post-write hash self-check against the captured bundles
let pass = 0;
for (const entry of oracle.role_oracle) {
  const { text } = loadFile(entry.captured_span.file);
  if (sha(text.slice(entry.captured_span.start_offset, entry.captured_span.end_offset)) === entry.captured_span.sha256) pass += 1;
}

console.log(
  JSON.stringify(
    {
      case_id: oracle.case_id,
      role_oracle_updated: oracle.role_oracle.length,
      hash_verified: pass,
      anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
      anchor_answer_function: oracle.primary_anchor.answer_function,
      anchor_source_function: oracle.primary_anchor.source_function,
      anchor_source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
      anchor_file: oracle.primary_anchor.captured_file,
      duplicate_span_groups: duplicateSpans.length
    },
    null,
    2
  )
);

if (pass !== oracle.role_oracle.length) {
  console.error(JSON.stringify({ error: "post_write_hash_mismatch", pass, total: oracle.role_oracle.length }, null, 2));
  process.exit(1);
}
