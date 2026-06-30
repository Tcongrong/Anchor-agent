// Regenerate oracle.hidden.json captured_span + answer_function from the frozen agent_visible
// captures bundle.
//
// The bundle is obfuscated with identifierNamesGenerator:"mangled" + renameGlobals:false and emitted
// as a single ES module (format "es"), so every module-level function keeps its descriptive name.
// Each role_oracle row declares a private `source_function` (the name in agent_hidden/src/**); gen maps
// that name to the captured-bundle function span via acorn (parameter-list aware, brace balanced) and
// writes back captured_span (line/col/offset + sha256 + normalized_sha256) and answer_function (the
// identifier on the captured `function <name>(` line). For module-level names answer_function ===
// source_function; the dual track is written explicitly so the schema stays correct if a future
// build profile renames a function.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { parse } from "acorn";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const visibleRoot = path.resolve(hiddenRoot, "..", "agent_visible");
const captureHost = "127.0.0.1_4191";
const bundleName = "upload.app.bundle.js";
const BUNDLE_REL = `captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
const bundlePath = path.join(visibleRoot, BUNDLE_REL);
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");

const code = await readFile(bundlePath, "utf8");

function lineColFromOffset(offset) {
  let line = 1;
  let col = 0;
  for (let i = 0; i < offset; i += 1) {
    if (code[i] === "\n") { line += 1; col = 0; } else { col += 1; }
  }
  return { line, col };
}

function sha256(text) {
  return createHash("sha256").update(text).digest("hex");
}

function normalizeWs(text) {
  return text.replace(/\s+/g, " ").trim();
}

function spanFor(node) {
  const start = node.start;
  const end = node.end;
  const startPos = lineColFromOffset(start);
  const endPos = lineColFromOffset(end);
  const text = code.slice(start, end);
  return {
    file: BUNDLE_REL,
    start_line: startPos.line,
    end_line: endPos.line,
    start_column: startPos.col,
    end_column: endPos.col,
    start_offset: start,
    end_offset: end,
    sha256: sha256(text),
    normalized_sha256: sha256(normalizeWs(text)),
    _text: text,
  };
}

const ast = parse(code, { ecmaVersion: 2022, sourceType: "module", locations: false });

// name -> list of named-function spans (declarations + named function expressions)
const byName = new Map();
function record(name, node) {
  if (!name) return;
  if (!byName.has(name)) byName.set(name, []);
  const span = spanFor(node);
  span._name = name;
  byName.get(name).push(span);
}
function visit(node) {
  if (!node || typeof node !== "object") return;
  if (node.type === "FunctionDeclaration" && node.id) record(node.id.name, node);
  else if (node.type === "FunctionExpression" && node.id) record(node.id.name, node);
  for (const key of Object.keys(node)) {
    if (key === "type" || key === "start" || key === "end") continue;
    const child = node[key];
    if (Array.isArray(child)) {
      for (const c of child) if (c && typeof c.type === "string") visit(c);
    } else if (child && typeof child.type === "string") {
      visit(child);
    }
  }
}
visit(ast);

const failures = [];
function resolve(name) {
  const list = byName.get(name);
  if (!list || list.length === 0) {
    failures.push({ name, error: "not_found_in_bundle" });
    return null;
  }
  if (list.length > 1) {
    failures.push({ name, error: "ambiguous_same_name", count: list.length });
    return null;
  }
  return list[0];
}

function leadingName(text) {
  const match = text.trim().match(/^(?:async\s+)?function\s*\*?\s*([A-Za-z0-9_$]+)\s*\(/);
  return match ? match[1] : null;
}

function applySpan(target, span) {
  const answerFunction = span._name || leadingName(span._text);
  target.captured_span = {
    file: span.file,
    start_line: span.start_line,
    end_line: span.end_line,
    start_column: span.start_column,
    end_column: span.end_column,
    start_offset: span.start_offset,
    end_offset: span.end_offset,
    sha256: span.sha256,
    normalized_sha256: span.normalized_sha256,
  };
  target.answer_function = answerFunction;
  return answerFunction;
}

const oracle = JSON.parse(await readFile(oraclePath, "utf8"));

// primary_anchor
const anchorSpan = resolve(oracle.primary_anchor.source_function);
if (anchorSpan) {
  const af = applySpan(oracle.primary_anchor, anchorSpan);
  oracle.primary_anchor.captured_file = BUNDLE_REL;
  oracle.primary_anchor.source_bundle_name_aligned = af === oracle.primary_anchor.source_function;
  if (!oracle.primary_anchor.source_bundle_name_aligned) {
    oracle.primary_anchor.naming_note =
      "source_function differs from answer_function after obfuscation; graders must match captured_span (hash/offset), not the source-side identifier string.";
  } else {
    delete oracle.primary_anchor.naming_note;
  }
}

// role_oracle rows
let hashVerified = 0;
for (const row of oracle.role_oracle) {
  const span = resolve(row.source_function);
  if (!span) continue;
  applySpan(row, span);
  const recut = code.slice(row.captured_span.start_offset, row.captured_span.end_offset);
  if (sha256(recut) === row.captured_span.sha256) hashVerified += 1;
  if (row.role === "Anchor") {
    if (row.captured_span.start_offset !== oracle.primary_anchor.captured_span.start_offset ||
        row.captured_span.end_offset !== oracle.primary_anchor.captured_span.end_offset) {
      failures.push({ name: row.source_function, error: "anchor_row_span_mismatch" });
    }
  }
}

// duplicate span detection: distinct source_function rows must not share an identical span
const spanGroups = new Map();
for (const row of oracle.role_oracle) {
  if (!row.captured_span) continue;
  const key = `${row.captured_span.start_offset}-${row.captured_span.end_offset}`;
  if (!spanGroups.has(key)) spanGroups.set(key, new Set());
  spanGroups.get(key).add(row.source_function);
}
const duplicateSpanGroups = [...spanGroups.values()].filter((set) => set.size > 1).length;
if (duplicateSpanGroups > 0) {
  failures.push({ error: "duplicate_span_across_source_functions", groups: duplicateSpanGroups });
}

const anchorBytes = oracle.primary_anchor.captured_span
  ? oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset
  : 0;
if (anchorBytes <= 100) failures.push({ name: oracle.primary_anchor.source_function, error: "anchor_too_small", bytes: anchorBytes });

if (failures.length > 0) {
  console.error(JSON.stringify({ ok: false, failures }, null, 2));
  process.exit(1);
}

await writeFile(oraclePath, `${JSON.stringify(oracle, null, 2)}\n`, "utf8");

console.log(JSON.stringify({
  ok: true,
  role_oracle_updated: oracle.role_oracle.length,
  hash_verified: `${hashVerified}/${oracle.role_oracle.length}`,
  anchor_bytes: anchorBytes,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
  duplicate_span_groups: duplicateSpanGroups,
}));
