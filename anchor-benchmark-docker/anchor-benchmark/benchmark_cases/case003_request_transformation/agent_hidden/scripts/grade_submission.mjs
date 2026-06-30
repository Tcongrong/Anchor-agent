// Score an agent submission against oracle.hidden.json.
//
// Submission JSON (matches agent_visible/task.json: answer_format.response_schema):
//   { "function_name": string, "file": string,
//     "slice": { start_line, end_line, start_offset, end_offset, code } }
//
// Offsets follow the same convention gen_oracle_spans.mjs uses: indices into the captured
// bundle read as a UTF-8 string. Grading is primarily by captured_span containment; the
// returned function_name is corroborated against the matched row's answer_function.
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const visibleRoot = path.resolve(hiddenRoot, "..", "agent_visible");

function stripBom(text) {
  return text.replace(/^﻿/, "");
}

function balancedBraces(text) {
  let depth = 0;
  for (const ch of text) {
    if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function reasonFor(oracle, score) {
  const example = (oracle.scoring_examples || []).find((e) => e.score === score);
  return example ? example.matched_reason : `Matched a role_oracle row with score ${score}.`;
}

// Pure, reusable: submission + parsed oracle + captured bundle text -> grade result.
export function gradeAnswer(submission, oracle, bundleText) {
  if (!submission || !submission.slice) {
    return { score: 0, role: null, answer_function: null, reason: "Submission is missing the required slice object." };
  }
  const s = Number(submission.slice.start_offset);
  const e = Number(submission.slice.end_offset);
  if (!Number.isInteger(s) || !Number.isInteger(e) || e <= s) {
    return { score: 0, role: null, answer_function: null, reason: "Submission slice offsets are missing or non-positive." };
  }
  if (typeof submission.slice.code === "string" && submission.slice.code.length && !balancedBraces(submission.slice.code)) {
    return { score: 0, role: null, answer_function: null, reason: "Submission slice.code does not have balanced braces (not one complete function)." };
  }

  const rows = oracle.role_oracle.map((r) => ({
    r,
    rs: r.captured_span.start_offset,
    re: r.captured_span.end_offset,
  }));

  let hit = null;
  let basis = null;
  const exact = rows.find((x) => x.rs === s && x.re === e);
  if (exact) {
    hit = exact;
    basis = "exact_span";
  } else {
    const containing = rows.filter((x) => x.rs <= s && e <= x.re).sort((a, b) => a.re - a.rs - (b.re - b.rs));
    const contained = rows.filter((x) => s <= x.rs && x.re <= e).sort((a, b) => b.re - b.rs - (a.re - a.rs));
    if (containing.length) {
      hit = containing[0];
      basis = "submission_within_oracle_function";
    } else if (contained.length === 1) {
      hit = contained[0];
      basis = "oracle_function_within_submission";
    } else if (contained.length > 1) {
      return { score: 0, role: null, answer_function: null, reason: "Submitted span encloses multiple oracle functions; not a single complete function (ambiguous)." };
    }
  }

  if (!hit) {
    return { score: 0, role: null, answer_function: null, reason: "Submitted span does not map to any captured oracle function." };
  }

  const sha = createHash("sha256").update(bundleText.slice(hit.rs, hit.re)).digest("hex");
  const spanHashOk = sha === hit.r.captured_span.sha256;
  const functionNameMatch = submission.function_name == null || submission.function_name === hit.r.answer_function;

  return {
    score: hit.r.score,
    role: hit.r.role,
    answer_function: hit.r.answer_function,
    source_function: hit.r.source_function,
    matched_span: { start_offset: hit.rs, end_offset: hit.re },
    match_basis: basis,
    span_hash_ok: spanHashOk,
    function_name_match: functionNameMatch,
    reason: reasonFor(oracle, hit.r.score),
  };
}

function loadOracle() {
  return JSON.parse(stripBom(readFileSync(path.join(hiddenRoot, "oracle.hidden.json"), "utf8")));
}

function loadBundle(oracle) {
  const rel = oracle.primary_anchor.captured_span.file;
  return readFileSync(path.join(visibleRoot, rel), "utf8");
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function main() {
  const file = process.argv[2];
  const raw = file ? readFileSync(file, "utf8") : await readStdin();
  if (!raw.trim()) {
    console.error("Usage: node scripts/grade_submission.mjs <submission.json>  (or pipe JSON via stdin)");
    process.exit(2);
  }
  const submission = JSON.parse(stripBom(raw));
  const oracle = loadOracle();
  const bundleText = loadBundle(oracle);
  const result = gradeAnswer(submission, oracle, bundleText);
  console.log(JSON.stringify(result, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}` || import.meta.url === `file:///${process.argv[1]?.replace(/\\/g, "/")}`) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
