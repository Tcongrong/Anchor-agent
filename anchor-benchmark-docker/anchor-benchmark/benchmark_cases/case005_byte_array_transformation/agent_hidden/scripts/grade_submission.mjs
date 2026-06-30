import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function isCompleteFunction(text, functionName) {
  const trimmed = String(text || "").trim();
  if (!trimmed.startsWith(`function ${functionName}(`)) return false;
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
    else if (ch === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function contains(a, b) {
  return a.file === b.file && a.start_offset <= b.start_offset && a.end_offset >= b.end_offset;
}

export function gradeAnswer(submission, oracle, capturesRoot = visibleRoot) {
  if (!submission || typeof submission !== "object") return { score: 0, reason: "invalid_submission" };
  const { function_name: functionName, file, slice } = submission;
  if (!functionName || !file || !slice) return { score: 0, reason: "missing_required_fields" };
  if (!Number.isInteger(slice.start_offset) || !Number.isInteger(slice.end_offset) || slice.end_offset <= slice.start_offset) {
    return { score: 0, reason: "invalid_offsets" };
  }

  const fullPath = path.join(capturesRoot, file);
  let cut;
  try {
    const text = readFileSync(fullPath, "utf8");
    cut = text.slice(slice.start_offset, slice.end_offset);
  } catch {
    return { score: 0, reason: "file_not_found" };
  }

  if (cut !== slice.code) return { score: 0, reason: "slice_code_mismatch" };
  if (!isCompleteFunction(cut, functionName)) return { score: 0, reason: "incomplete_or_wrong_function" };

  const submittedSpan = { file, start_offset: slice.start_offset, end_offset: slice.end_offset };
  const maxOracleBytes = Math.max(...oracle.role_oracle.map((row) => row.captured_span.end_offset - row.captured_span.start_offset));
  if (slice.end_offset - slice.start_offset > maxOracleBytes * 1.5) return { score: 0, reason: "ambiguous_oversized_span" };

  const hits = oracle.role_oracle.filter((row) => contains(row.captured_span, submittedSpan) || contains(submittedSpan, row.captured_span));
  if (hits.length !== 1) return { score: 0, reason: hits.length ? "ambiguous_span_overlap" : "no_oracle_match" };

  const hit = hits[0];
  if (functionName !== hit.answer_function) {
    return { score: 0, reason: "function_name_mismatch", expected_answer_function: hit.answer_function };
  }

  return {
    score: hit.score,
    role: hit.role,
    answer_function: hit.answer_function,
    source_function: hit.source_function,
    hash_ok: sha(cut) === hit.captured_span.sha256,
    reason: "unique_oracle_match",
  };
}

if (path.resolve(process.argv[1] || "") === __filename) {
  const submissionPath = process.argv[2];
  if (!submissionPath) {
    console.error("Usage: node scripts/grade_submission.mjs <submission.json>");
    process.exit(2);
  }
  const submission = JSON.parse(readFileSync(submissionPath, "utf8"));
  const oracle = JSON.parse(readFileSync(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  console.log(JSON.stringify(gradeAnswer(submission, oracle), null, 2));
}
