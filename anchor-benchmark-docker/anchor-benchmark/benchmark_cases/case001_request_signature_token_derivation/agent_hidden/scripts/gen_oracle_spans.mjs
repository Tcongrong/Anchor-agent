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
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));

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

function buildStringMask(source) {
  const mask = new Uint8Array(source.length);
  let quote = null;
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
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      mask[i] = 1;
    }
  }
  return mask;
}

const stringMask = buildStringMask(bundle);

function findMatchingParen(openIndex) {
  let depth = 0;
  for (let i = openIndex; i < bundle.length; i += 1) {
    if (stringMask[i]) continue;
    if (bundle[i] === "(") depth += 1;
    else if (bundle[i] === ")") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function findMatchingBrace(openIndex) {
  let depth = 0;
  for (let i = openIndex; i < bundle.length; i += 1) {
    if (stringMask[i]) continue;
    if (bundle[i] === "{") depth += 1;
    else if (bundle[i] === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function functionNodeByName(name) {
  const pattern = new RegExp(`(^|\\n)function\\s+${escapeRegExp(name)}\\s*\\(`, "g");
  const hits = [];
  let match;
  while ((match = pattern.exec(bundle))) {
    const start = match.index + (match[1] ? match[1].length : 0);
    const openParen = bundle.indexOf("(", start);
    const closeParen = findMatchingParen(openParen);
    const openBrace = bundle.indexOf("{", closeParen);
    const closeBrace = findMatchingBrace(openBrace);
    if (openParen > -1 && closeParen > -1 && openBrace > -1 && closeBrace > -1) {
      hits.push({ start, end: closeBrace + 1 });
    }
  }
  if (hits.length !== 1) throw new Error(`Expected exactly one function named ${name}, found ${hits.length}.`);
  return hits[0];
}

function spanFor(node) {
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

function assertBalancedBraces(text) {
  let depth = 0;
  for (const ch of text) {
    if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function refresh(row) {
  if (!row.answer_function || !row.source_function) {
    throw new Error(`Missing answer_function/source_function for ${row.role || "unknown role"}.`);
  }
  const node = functionNodeByName(row.answer_function);
  row.captured_span = spanFor(node);
  row.source_bundle_name_aligned = row.answer_function === row.source_function;
  const slice = bundle.slice(row.captured_span.start_offset, row.captured_span.end_offset);
  if (!slice.trimStart().startsWith(`function ${row.answer_function}(`)) {
    throw new Error(`Slice for ${row.answer_function} does not start with its function declaration.`);
  }
  if (!assertBalancedBraces(slice)) {
    throw new Error(`Slice for ${row.answer_function} has unbalanced braces.`);
  }
  return row;
}

oracle.primary_anchor = refresh(oracle.primary_anchor);
oracle.role_oracle = oracle.role_oracle.map(refresh);
const anchorRows = oracle.role_oracle.filter((row) => row.role === "Anchor");
if (anchorRows.length !== 1) throw new Error(`Expected exactly one Anchor row, found ${anchorRows.length}.`);
if (anchorRows[0].answer_function !== oracle.primary_anchor.answer_function) {
  throw new Error("Anchor row answer_function does not match primary_anchor.");
}
if (anchorRows[0].captured_span.start_offset !== oracle.primary_anchor.captured_span.start_offset) {
  throw new Error("Anchor row span does not match primary_anchor.");
}

const anchorBytes =
  oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset;
if (anchorBytes < 100) {
  throw new Error(`Anchor span too short (${anchorBytes} bytes); likely truncated.`);
}

const spanKeys = new Set();
for (const row of oracle.role_oracle) {
  const key = `${row.captured_span.start_offset}-${row.captured_span.end_offset}`;
  if (spanKeys.has(key)) {
    throw new Error(`Duplicate captured_span offsets for ${row.answer_function}: ${key}`);
  }
  spanKeys.add(key);
}

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n", "utf8");
console.log(JSON.stringify({
  case_id: oracle.case_id,
  updated: true,
  role_count: oracle.role_oracle.length,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_bytes: anchorBytes,
  span_integrity_checks: {
    anchor_minimum_bytes: anchorBytes >= 100,
    unique_spans: spanKeys.size,
    balanced_braces: true,
  },
}, null, 2));
