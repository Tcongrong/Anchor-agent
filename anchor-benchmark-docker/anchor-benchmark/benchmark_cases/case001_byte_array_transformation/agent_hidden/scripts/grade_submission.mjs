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

function validFunctionSlice(code, functionName) {
  if (typeof code !== "string" || !code.startsWith(`function ${functionName}(`)) return false;
  let depth = 0;
  let quote = null;
  let escape = false;
  for (let i = 0; i < code.length; i += 1) {
    const ch = code[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (quote) {
      if (ch === quote) quote = null;
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
  return depth === 0 && code.trimEnd().endsWith("}");
}

export function gradeAnswer(submission, oracle, capturesRoot) {
  if (!submission || typeof submission !== "object") return { score: 0, reason: "submission_not_object" };
  const { function_name: functionName, file, slice } = submission;
  if (!functionName || !file || !slice) return { score: 0, reason: "missing_required_fields" };
  if (!file.startsWith("captures/") || !file.endsWith(".js")) return { score: 0, reason: "file_outside_visible_corpus" };
  const bundlePath = path.join(capturesRoot, path.relative("captures", file));
  const bundle = readFileSync(bundlePath, "utf8");
  const cut = bundle.slice(slice.start_offset, slice.end_offset);
  if (cut !== slice.code) return { score: 0, reason: "slice_code_does_not_match_offsets" };
  if (!validFunctionSlice(cut, functionName)) return { score: 0, reason: "slice_is_not_complete_named_function" };

  const maxSpan = Math.max(...oracle.role_oracle.map((row) => row.captured_span.end_offset - row.captured_span.start_offset));
  if (cut.length > maxSpan * 2) return { score: 0, reason: "submitted_span_too_large" };

  const matches = oracle.role_oracle.filter((row) => {
    const span = row.captured_span;
    const submittedContainsOracle = slice.start_offset <= span.start_offset && slice.end_offset >= span.end_offset;
    const oracleContainsSubmitted = span.start_offset <= slice.start_offset && span.end_offset >= slice.end_offset;
    return file === span.file && (submittedContainsOracle || oracleContainsSubmitted);
  });
  if (matches.length !== 1) return { score: 0, reason: "no_unique_oracle_span_match", match_count: matches.length };
  const match = matches[0];
  if (functionName !== match.answer_function) {
    return {
      score: 0,
      role: match.role,
      answer_function: match.answer_function,
      reason: "function_name_does_not_match_answer_function",
    };
  }
  return {
    score: match.score,
    role: match.role,
    answer_function: match.answer_function,
    source_function: match.source_function,
    matched_sha256: sha(cut),
    reason: `matched_${match.role}`,
  };
}

function main() {
  const submissionPath = process.argv[2];
  if (!submissionPath) {
    console.error("Usage: node scripts/grade_submission.mjs <submission.json>");
    process.exit(2);
  }
  const submission = JSON.parse(readFileSync(submissionPath, "utf8"));
  const oracle = JSON.parse(readFileSync(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const result = gradeAnswer(submission, oracle, path.join(visibleRoot, "captures"));
  console.log(JSON.stringify(result, null, 2));
  if (result.score === 0) process.exitCode = 1;
}

if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) main();
