import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/batch.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundleBuffer = readFileSync(bundlePath);
const bundle = bundleBuffer.toString("utf8");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const buildMetaPath = path.join(hiddenRoot, "build_meta.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));

function sha(value) {
  return createHash("sha256").update(value).digest("hex");
}

function nsha(text) {
  return sha(Buffer.from(text.replace(/\s+/g, " ").trim(), "utf8"));
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

function findMatching(source, openIndex, openChar, closeChar, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === openChar) depth += 1;
    else if (source[i] === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function lineCol(source, offset) {
  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset; i += 1) {
    if (source[i] === "\n") {
      line += 1;
      lineStart = i + 1;
    }
  }
  return { line, col: offset - lineStart };
}

function byteOffsetOfChar(charOffset) {
  return Buffer.byteLength(bundle.slice(0, charOffset), "utf8");
}

function parseBundleFunctions(source) {
  const inString = buildStringMask(source);
  const funcs = [];
  const re = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    const start = match.index;
    const openParen = source.indexOf("(", start);
    const closeParen = findMatching(source, openParen, "(", ")", inString);
    if (closeParen === -1) continue;
    let openBrace = -1;
    for (let i = closeParen + 1; i < source.length; i += 1) {
      if (inString[i]) continue;
      if (source[i] === "{") {
        openBrace = i;
        break;
      }
      if (!/\s/.test(source[i])) break;
    }
    if (openBrace === -1) continue;
    const closeBrace = findMatching(source, openBrace, "{", "}", inString);
    if (closeBrace === -1) continue;
    funcs.push({ name: match[1], start, end: closeBrace + 1 });
  }
  return funcs;
}

function isCompleteFunction(text) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return false;
  if (!trimmed.endsWith("}")) return false;
  const inString = buildStringMask(trimmed);
  let depth = 0;
  for (let i = 0; i < trimmed.length; i += 1) {
    if (inString[i]) continue;
    if (trimmed[i] === "{") depth += 1;
    else if (trimmed[i] === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

const funcs = parseBundleFunctions(bundle);
const byName = new Map();
for (const fn of funcs) {
  if (!byName.has(fn.name)) byName.set(fn.name, []);
  byName.get(fn.name).push(fn);
}

function spanForAnswerFunction(answerFunction) {
  const matches = byName.get(answerFunction) || [];
  if (matches.length !== 1) {
    throw new Error(`Expected one bundle function named ${answerFunction}, found ${matches.length}`);
  }
  const fn = matches[0];
  const text = bundle.slice(fn.start, fn.end);
  if (!isCompleteFunction(text)) throw new Error(`Incomplete function slice for ${answerFunction}`);
  const start = lineCol(bundle, fn.start);
  const end = lineCol(bundle, fn.end);
  const byteStart = byteOffsetOfChar(fn.start);
  const byteEnd = byteStart + Buffer.byteLength(text, "utf8");
  const sliceBuffer = bundleBuffer.slice(byteStart, byteEnd);
  if (sliceBuffer.toString("utf8") !== text) {
    throw new Error(`Byte/char slice mismatch for ${answerFunction}`);
  }
  return {
    file: capRel,
    start_line: start.line,
    end_line: end.line,
    start_column: start.col,
    end_column: end.col,
    start_offset: byteStart,
    end_offset: byteEnd,
    sha256: sha(sliceBuffer),
    normalized_sha256: nsha(text),
  };
}

oracle.primary_anchor.captured_span = spanForAnswerFunction(oracle.primary_anchor.answer_function);
oracle.primary_anchor.captured_file = capRel;
oracle.primary_anchor.source_bundle_name_aligned =
  oracle.primary_anchor.answer_function === oracle.primary_anchor.source_function;

for (const row of oracle.role_oracle) {
  row.captured_span = spanForAnswerFunction(row.answer_function);
}

const spanGroups = new Map();
for (const row of oracle.role_oracle) {
  const key = `${row.captured_span.file}:${row.captured_span.start_offset}-${row.captured_span.end_offset}`;
  if (!spanGroups.has(key)) spanGroups.set(key, []);
  spanGroups.get(key).push(`${row.source_file}::${row.source_function}`);
}
const duplicateSpanGroups = [...spanGroups.values()].filter((items) => new Set(items).size > 1).length;
if (duplicateSpanGroups) throw new Error(`Found ${duplicateSpanGroups} duplicate span groups`);

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n", "utf8");

const buildMeta = JSON.parse(readFileSync(buildMetaPath, "utf8"));
buildMeta.primary_anchor = {
  ...buildMeta.primary_anchor,
  answer_function: oracle.primary_anchor.answer_function,
  source_function: oracle.primary_anchor.source_function,
  source_file: oracle.primary_anchor.source_file,
  source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
  captured_span: oracle.primary_anchor.captured_span,
};
writeFileSync(buildMetaPath, JSON.stringify(buildMeta, null, 2) + "\n", "utf8");

console.log(JSON.stringify({
  case_id: oracle.case_id,
  bundle_function_count: funcs.length,
  role_oracle_updated: oracle.role_oracle.length,
  hash_verified: oracle.role_oracle.length,
  anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  duplicate_span_groups: duplicateSpanGroups,
  offset_unit: "utf8_bytes",
}, null, 2));
