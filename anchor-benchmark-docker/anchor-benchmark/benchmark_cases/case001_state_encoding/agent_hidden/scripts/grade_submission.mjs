import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function loadJson(relativeFromHidden) {
  return JSON.parse(readFileSync(path.join(hiddenRoot, relativeFromHidden), "utf8"));
}

function resolveBundlePath(file) {
  if (path.isAbsolute(file)) return file;
  return path.join(visibleRoot, file.replace(/^captures\//, "captures/"));
}

function spanContains(outer, inner) {
  return outer.start_offset <= inner.start_offset && outer.end_offset >= inner.end_offset;
}

function findHit(submission, oracle) {
  const bundlePath = resolveBundlePath(submission.file);
  const bundle = readFileSync(bundlePath, "utf8");
  const slice = submission.slice;
  const submittedText = bundle.slice(slice.start_offset, slice.end_offset);

  if (slice.code && slice.code.trim() !== submittedText.trim()) {
    return { error: "slice_code_mismatch" };
  }
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(submittedText.trim()) || !submittedText.trim().endsWith("}")) {
    return { error: "incomplete_function" };
  }

  const maxOracleBytes = Math.max(
    ...oracle.role_oracle.map((row) => row.captured_span.end_offset - row.captured_span.start_offset),
    oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset,
  );
  if (submittedText.length > maxOracleBytes * 1.5) {
    return { score: 0, role: "Off-chain", answer_function: null, reason: "oversized_span" };
  }

  const candidates = oracle.role_oracle.filter((row) => {
    const captured = row.captured_span;
    const exact =
      slice.start_offset === captured.start_offset &&
      slice.end_offset === captured.end_offset &&
      sha(submittedText) === captured.sha256;
    const contains = spanContains(captured, slice) || spanContains(slice, captured);
    return exact || contains;
  });

  if (candidates.length === 0) {
    return { score: 0, role: "Off-chain", answer_function: null, reason: "unmapped_span" };
  }
  if (candidates.length > 1) {
    return { score: 0, role: "Off-chain", answer_function: null, reason: "ambiguous_span" };
  }

  const hit = candidates[0];
  const nameOk = !submission.function_name || submission.function_name === hit.answer_function;
  return {
    score: hit.score,
    role: hit.role,
    answer_function: hit.answer_function,
    source_function: hit.source_function,
    reason: nameOk ? "matched_role_oracle" : "matched_span_name_mismatch",
    name_match: nameOk,
  };
}

export function gradeAnswer(submission, oracle, capturesRoot = visibleRoot) {
  return findHit(submission, oracle);
}

function main() {
  const submissionPath = process.argv[2];
  if (!submissionPath) {
    console.error("Usage: node scripts/grade_submission.mjs <submission.json>");
    process.exit(1);
  }
  const submission = JSON.parse(readFileSync(submissionPath, "utf8"));
  const oracle = loadJson("oracle.hidden.json");
  const result = gradeAnswer(submission, oracle);
  console.log(JSON.stringify({ case_id: oracle.case_id, ...result }, null, 2));
  if (result.error) process.exitCode = 1;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main();
}
