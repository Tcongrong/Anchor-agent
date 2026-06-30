// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
// Run after `npm run build` whenever src/ or obfuscation output changes.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "acorn";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/note.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function nsha(text) {
  return sha(text.replace(/\s+/g, " ").trim());
}

function walkAst(node, visit) {
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const [key, value] of Object.entries(node)) {
    if (key === "loc") continue;
    if (Array.isArray(value)) value.forEach((item) => walkAst(item, visit));
    else walkAst(value, visit);
  }
}

function capturedSpan(node) {
  const snippet = bundle.slice(node.start, node.end);
  return {
    file: capRel,
    start_line: node.loc.start.line,
    end_line: node.loc.end.line,
    start_column: node.loc.start.column,
    end_column: node.loc.end.column,
    start_offset: node.start,
    end_offset: node.end,
    sha256: sha(snippet),
    normalized_sha256: nsha(snippet)
  };
}

function functionName(slice) {
  return slice.trim().match(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/)?.[1] || null;
}

function isBalancedFunction(text) {
  const trimmed = text.trim();
  if (!/^(?:async\s+)?function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return false;
  if (!trimmed.endsWith("}")) return false;
  let depth = 0;
  let quote = "";
  let escape = false;
  for (let i = 0; i < trimmed.length; i += 1) {
    const ch = trimmed[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (quote) {
      if (ch === quote) quote = "";
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      continue;
    }
    if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

const ast = parse(bundle, { ecmaVersion: "latest", sourceType: "module", locations: true });
const declarations = new Map();
walkAst(ast, (node) => {
  if (node.type === "FunctionDeclaration" && node.id?.name && !declarations.has(node.id.name)) {
    declarations.set(node.id.name, node);
  }
});

const factory = declarations.get("createFingerprintReducer");
if (!factory) {
  console.error(JSON.stringify({ error: "anchor_factory_missing_from_bundle" }, null, 2));
  process.exit(1);
}

let anchorNode = null;
walkAst(factory.body, (node) => {
  if (!anchorNode && node.type === "FunctionExpression") {
    const body = bundle.slice(node.start, node.end);
    if (body.includes("'fp_'") || body.includes('"fp_"')) anchorNode = node;
  }
});
if (!anchorNode) {
  console.error(JSON.stringify({ error: "anchor_inner_reducer_missing_from_bundle" }, null, 2));
  process.exit(1);
}

const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
const failures = [];
const spanGroups = new Map();

function resolveNode(row) {
  if (row.role === "Anchor" && row.source_function === "fingerprintReducer") return anchorNode;
  return declarations.get(row.source_function);
}

for (const row of oracle.role_oracle) {
  const node = resolveNode(row);
  if (!node) {
    failures.push({ source_function: row.source_function, reason: "bundle_function_missing" });
    continue;
  }
  row.captured_span = capturedSpan(node);
  const slice = bundle.slice(row.captured_span.start_offset, row.captured_span.end_offset);
  row.answer_function = functionName(slice);
  const checkLabel = `${row.source_file}::${row.source_function}`;
  if (!row.answer_function || !isBalancedFunction(slice)) failures.push({ source_function: row.source_function, reason: "incomplete_function_slice", checkLabel });
  const spanId = `${row.captured_span.start_offset}-${row.captured_span.end_offset}`;
  if (!spanGroups.has(spanId)) spanGroups.set(spanId, []);
  spanGroups.get(spanId).push(checkLabel);
}

const anchorRow = oracle.role_oracle.find((row) => row.role === "Anchor");
if (!anchorRow) failures.push({ reason: "missing_anchor_row" });
oracle.primary_anchor.source_function = "fingerprintReducer";
oracle.primary_anchor.answer_function = anchorRow?.answer_function;
oracle.primary_anchor.captured_file = capRel;
oracle.primary_anchor.captured_span = capturedSpan(anchorNode);
oracle.primary_anchor.source_bundle_name_aligned = oracle.primary_anchor.answer_function === oracle.primary_anchor.source_function;
oracle.primary_anchor.answer_basis =
  "Agent-visible corpus only: the canonical anchor answer is captured_span plus answer_function as declared in the captured bundle slice. source_function is a private maintainer mapping into src/.";
if (!oracle.primary_anchor.source_bundle_name_aligned) {
  oracle.primary_anchor.naming_note =
    "source_function differs from answer_function after obfuscation; graders must match captured_span (hash/offset), not the source-side identifier string.";
}

const duplicateSpans = [...spanGroups.entries()].filter(([, keys]) => keys.length > 1);
if (duplicateSpans.length) {
  failures.push({ reason: "duplicate_span_groups", duplicateSpans });
}

const anchorSlice = bundle.slice(oracle.primary_anchor.captured_span.start_offset, oracle.primary_anchor.captured_span.end_offset);
if (!isBalancedFunction(anchorSlice) || anchorSlice.length < 100) {
  failures.push({ reason: "primary_anchor_incomplete", length: anchorSlice.length, preview: anchorSlice.slice(0, 120) });
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

let pass = 0;
for (const row of oracle.role_oracle) {
  const slice = bundle.slice(row.captured_span.start_offset, row.captured_span.end_offset);
  if (sha(slice) === row.captured_span.sha256) pass += 1;
}

console.log(JSON.stringify({
  case_id: oracle.case_id,
  bundle_function_count: declarations.size,
  role_oracle_updated: oracle.role_oracle.length,
  hash_verified: pass,
  anchor_bytes: oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
  anchor_lines: oracle.primary_anchor.captured_span.end_line - oracle.primary_anchor.captured_span.start_line + 1,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
  duplicate_span_groups: duplicateSpans.length
}, null, 2));

if (pass !== oracle.role_oracle.length) {
  console.error(JSON.stringify({ error: "post_write_hash_mismatch", pass, total: oracle.role_oracle.length }, null, 2));
  process.exit(1);
}
