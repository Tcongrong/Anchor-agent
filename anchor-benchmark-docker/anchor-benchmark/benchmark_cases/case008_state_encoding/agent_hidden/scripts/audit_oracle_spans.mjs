import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");

const bundlePath = path.join(visibleRoot, "captures/devtools-source-dump/127.0.0.1_4218/assets/prefs.app.bundle.js");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const buildMetaPath = path.join(hiddenRoot, "build_meta.hidden.json");
const taskPath = path.join(visibleRoot, "task.json");
const manifestPath = path.join(visibleRoot, "captures/devtools-source-dump/manifest.json");

const code = readFileSync(bundlePath, "utf8");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
const buildMeta = JSON.parse(readFileSync(buildMetaPath, "utf8"));
const task = JSON.parse(readFileSync(taskPath, "utf8"));
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

const sha = (t) => createHash("sha256").update(t).digest("hex");
const norm = (t) => sha(t.replace(/\s+/g, " ").trim());

function braceBalanced(text) {
  let depth = 0;
  let inStr = false;
  let esc = false;
  let quote = "";
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === quote) inStr = false;
      continue;
    }
    if (ch === "\"" || ch === "'" || ch === "`") {
      inStr = true;
      quote = ch;
      continue;
    }
    if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function leadingName(text) {
  const m = text.trim().match(/^(?:async\s+)?function\s*\*?\s*([A-Za-z0-9_$]+)\s*\(/);
  return m ? m[1] : null;
}

const failures = [];
const spanGroups = new Map();

for (const row of oracle.role_oracle) {
  const span = row.captured_span;
  const slice = code.slice(span.start_offset, span.end_offset);
  const bytes = span.end_offset - span.start_offset;
  const hashOk = sha(slice) === span.sha256;
  const normOk = norm(slice) === span.normalized_sha256;
  const name = leadingName(slice);
  const nameOk = name === row.answer_function;
  const complete = (/^(?:async\s+)?function\b/.test(slice.trim()) || /^function\s*\*/.test(slice.trim())) && slice.trim().endsWith("}") && braceBalanced(slice) && bytes > 20;
  const fileOk = existsSync(path.join(visibleRoot, span.file));

  const key = `${span.start_offset}-${span.end_offset}`;
  if (!spanGroups.has(key)) spanGroups.set(key, []);
  spanGroups.get(key).push(row.source_function);

  if (!hashOk || !normOk || !nameOk || !complete || !fileOk) {
    failures.push({
      source_function: row.source_function,
      role: row.role,
      hashOk,
      normOk,
      nameOk,
      complete,
      fileOk,
      bytes,
      name,
      expected: row.answer_function,
      head: slice.trim().slice(0, 80),
    });
  }
}

const duplicateSpanGroups = [...spanGroups.entries()].filter(([, v]) => v.length > 1);
const anchor = oracle.primary_anchor;
const anchorSlice = code.slice(anchor.captured_span.start_offset, anchor.captured_span.end_offset);
const anchorRows = oracle.role_oracle.filter((r) => r.role === "Anchor");
const offchain = oracle.role_oracle.filter((r) => r.role === "Off-chain");
const scoreRoles = new Set(oracle.role_oracle.map((r) => r.role));
const missingRoles = [...scoreRoles].filter((r) => !(r in oracle.score_values));
const bundleEntry = manifest.resources.find((r) => r.savedAs.includes("prefs.app.bundle.js"));

const scoreValues = Object.values(oracle.score_values);
const scoreExamples = oracle.scoring_examples.map((e) => e.score);
const missingScoreExamples = [...new Set(scoreValues)].filter((s) => !scoreExamples.includes(s));

const result = {
  role_oracle_count: oracle.role_oracle.length,
  hash_failures: failures.length,
  failures,
  duplicate_span_groups: duplicateSpanGroups.length,
  duplicate_span_details: duplicateSpanGroups.map(([k, v]) => ({ span: k, functions: v })),
  anchor_bytes: anchor.captured_span.end_offset - anchor.captured_span.start_offset,
  anchor_answer_function: anchor.answer_function,
  anchor_name_in_slice: leadingName(anchorSlice),
  anchor_head: anchorSlice.trim().slice(0, 100),
  anchor_tail: anchorSlice.trim().slice(-60),
  anchor_rows_count: anchorRows.length,
  anchor_span_match_primary: anchorRows.every(
    (r) => r.captured_span.start_offset === anchor.captured_span.start_offset
      && r.captured_span.end_offset === anchor.captured_span.end_offset,
  ),
  offchain_count: offchain.length,
  build_meta_distractor_count: buildMeta.difficulty.distractor_count,
  build_meta_semantic_decoy: buildMeta.difficulty.semantic_decoy_count,
  bundle_bytes_manifest: bundleEntry?.bytes,
  bundle_bytes_meta: buildMeta.build_artifacts.bundle_bytes,
  bundle_lines_meta: buildMeta.build_artifacts.bundle_lines,
  bundle_lines_actual: code.split(/\r?\n/).length,
  missing_score_roles: missingRoles,
  missing_score_example_values: missingScoreExamples,
  task_observable: task.observable,
  build_meta_sink: buildMeta.task_contract?.target_observable?.sink,
  task_leaks_sensitive: /encodeWorkspaceState|workspaceStateReducer|oracle\.hidden/i.test(JSON.stringify(task)),
};

console.log(JSON.stringify(result, null, 2));
process.exit(failures.length > 0 ? 1 : 0);
