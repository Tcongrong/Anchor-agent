import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function validCompleteFunction(text) {
  const trimmed = String(text || "").trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return false;
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
    if (quote) {
      if (ch === "\\") escape = true;
      else if (ch === quote) quote = "";
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      continue;
    }
    if (ch === "{") depth += 1;
    if (ch === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function contains(a, b) {
  return a.start_offset <= b.start_offset && a.end_offset >= b.end_offset;
}

function overlap(a, b) {
  return a.start_offset < b.end_offset && b.start_offset < a.end_offset;
}

async function gradeAnswer(submission, oracle, capturesRoot) {
  if (!submission || typeof submission !== "object") {
    return { score: 0, reason: "submission_not_object" };
  }
  const slice = submission.slice || {};
  const submittedSpan = {
    file: submission.file,
    start_offset: Number(slice.start_offset),
    end_offset: Number(slice.end_offset)
  };
  if (!submission.function_name || !submittedSpan.file || !Number.isInteger(submittedSpan.start_offset) || !Number.isInteger(submittedSpan.end_offset)) {
    return { score: 0, reason: "invalid_submission_schema" };
  }
  if (submittedSpan.end_offset <= submittedSpan.start_offset) {
    return { score: 0, reason: "invalid_offsets" };
  }
  if (!validCompleteFunction(slice.code)) {
    return { score: 0, reason: "slice_is_not_complete_function" };
  }

  const bundle = await readFile(path.join(capturesRoot, submittedSpan.file.replace(/^agent_visible[\\/]/, "")), "utf8");
  const recut = bundle.slice(submittedSpan.start_offset, submittedSpan.end_offset);
  if (recut !== slice.code) {
    return { score: 0, reason: "submitted_code_does_not_match_captures" };
  }

  const rows = oracle.role_oracle.filter((row) => row.captured_span.file === submittedSpan.file);
  const exact = rows.filter((row) =>
    row.captured_span.start_offset === submittedSpan.start_offset &&
    row.captured_span.end_offset === submittedSpan.end_offset
  );
  const containing = exact.length === 1
    ? exact
    : rows.filter((row) => contains(row.captured_span, submittedSpan) || contains(submittedSpan, row.captured_span));
  const overlapping = rows.filter((row) => overlap(row.captured_span, submittedSpan));
  if (exact.length !== 1 && overlapping.length > containing.length) {
    return { score: 0, reason: "ambiguous_partial_overlap" };
  }
  if (containing.length !== 1) {
    return { score: 0, reason: containing.length > 1 ? "ambiguous_oversized_span" : "no_matching_oracle_span" };
  }

  const hit = containing[0];
  if (submission.function_name !== hit.answer_function) {
    return {
      score: 0,
      role: hit.role,
      answer_function: hit.answer_function,
      reason: "function_name_mismatch"
    };
  }
  const expectedText = bundle.slice(hit.captured_span.start_offset, hit.captured_span.end_offset);
  if (sha(expectedText) !== hit.captured_span.sha256) {
    return { score: 0, reason: "oracle_hash_mismatch" };
  }
  return {
    score: hit.score,
    role: hit.role,
    answer_function: hit.answer_function,
    source_function: hit.source_function,
    matched_span: hit.captured_span,
    reason: "unique_span_and_function_name_match"
  };
}

async function main() {
  const answerPath = process.argv[2];
  if (!answerPath) {
    console.error("Usage: node scripts/grade_submission.mjs <answer.json>");
    process.exit(2);
  }
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const submission = JSON.parse(await readFile(path.resolve(process.cwd(), answerPath), "utf8"));
  const result = await gradeAnswer(submission, oracle, visibleRoot);
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(JSON.stringify({ score: 0, reason: "grader_exception", message: error && error.stack || String(error) }, null, 2));
    process.exit(1);
  });
}

export { gradeAnswer };
