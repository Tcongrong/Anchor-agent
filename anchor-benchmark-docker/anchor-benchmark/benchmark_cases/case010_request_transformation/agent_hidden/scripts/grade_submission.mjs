import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");

function isBalancedFunction(text, functionName) {
  const trimmed = String(text || "").trim();
  const header = new RegExp(`^(?:async\\s+)?function\\s+${functionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\(`);
  if (!header.test(trimmed) || !trimmed.endsWith("}")) return false;
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

function contains(a, b) {
  return a.start_offset <= b.start_offset && a.end_offset >= b.end_offset;
}

function overlap(a, b) {
  return Math.max(a.start_offset, b.start_offset) < Math.min(a.end_offset, b.end_offset);
}

export async function gradeAnswer(submission, oracle, capturesRoot = visibleRoot) {
  if (!submission || typeof submission !== "object") {
    return { score: 0, role: "Invalid", reason: "submission_not_object" };
  }
  const { function_name: functionName, file, slice } = submission;
  if (!functionName || !file || !slice || typeof slice !== "object") {
    return { score: 0, role: "Invalid", reason: "missing_required_fields" };
  }
  if (!Number.isInteger(slice.start_offset) || !Number.isInteger(slice.end_offset) || slice.end_offset <= slice.start_offset) {
    return { score: 0, role: "Invalid", reason: "invalid_offsets" };
  }
  const maxRoleBytes = Math.max(...oracle.role_oracle.map((row) => row.captured_span.end_offset - row.captured_span.start_offset));
  const submittedBytes = slice.end_offset - slice.start_offset;
  if (submittedBytes > maxRoleBytes * 2) {
    return { score: 0, role: "Ambiguous", reason: "submitted_span_too_large" };
  }
  const bundlePath = path.join(capturesRoot, file);
  let source;
  try {
    source = await readFile(bundlePath, "utf8");
  } catch {
    return { score: 0, role: "Invalid", reason: "file_not_readable" };
  }
  if (slice.end_offset > source.length) {
    return { score: 0, role: "Invalid", reason: "offset_out_of_range" };
  }
  const actualCode = source.slice(slice.start_offset, slice.end_offset);
  if (slice.code && slice.code !== actualCode) {
    return { score: 0, role: "Invalid", reason: "submitted_code_does_not_match_offsets" };
  }
  if (!isBalancedFunction(actualCode, functionName)) {
    return { score: 0, role: "Invalid", reason: "not_a_complete_balanced_function" };
  }
  const submittedSpan = {
    file,
    start_offset: slice.start_offset,
    end_offset: slice.end_offset
  };
  const exactMatches = oracle.role_oracle.filter(
    (row) =>
      row.captured_span.file === file &&
      row.captured_span.start_offset === submittedSpan.start_offset &&
      row.captured_span.end_offset === submittedSpan.end_offset
  );
  if (exactMatches.length === 1) {
    const exact = exactMatches[0];
    if (functionName !== exact.answer_function) {
      return {
        score: 0,
        role: exact.role,
        answer_function: exact.answer_function,
        reason: "function_name_does_not_match_captured_answer_function"
      };
    }
    return {
      score: exact.score,
      role: exact.role,
      answer_function: exact.answer_function,
      matched_span: exact.captured_span,
      reason: `exact_match:${exact.role}`
    };
  }
  const overlapping = oracle.role_oracle.filter((row) => row.captured_span.file === file && overlap(row.captured_span, submittedSpan));
  const matches = overlapping.filter((row) => contains(row.captured_span, submittedSpan) || contains(submittedSpan, row.captured_span));
  if (matches.length !== 1) {
    return { score: 0, role: "Ambiguous", reason: matches.length ? "multiple_or_no_unique_role_match" : "no_role_match" };
  }
  if (overlapping.length > 1 && matches.length === 1 && !contains(matches[0].captured_span, submittedSpan)) {
    return { score: 0, role: "Ambiguous", reason: "submitted_span_overlaps_multiple_roles" };
  }
  const match = matches[0];
  if (functionName !== match.answer_function) {
    return {
      score: 0,
      role: match.role,
      answer_function: match.answer_function,
      reason: "function_name_does_not_match_captured_answer_function"
    };
  }
  return {
    score: match.score,
    role: match.role,
    answer_function: match.answer_function,
    matched_span: match.captured_span,
    reason: `unique_match:${match.role}`
  };
}

async function main() {
  const submissionPath = process.argv[2];
  if (!submissionPath) {
    console.error("Usage: node scripts/grade_submission.mjs <submission.json>");
    process.exit(2);
  }
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const submission = JSON.parse(await readFile(path.resolve(submissionPath), "utf8"));
  console.log(JSON.stringify(await gradeAnswer(submission, oracle, visibleRoot), null, 2));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
