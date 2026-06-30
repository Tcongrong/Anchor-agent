import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");

function stripBom(text) {
  return text.replace(/^\uFEFF/, "");
}

function balancedBraces(text) {
  let depth = 0;
  let quote = null;
  let escape = false;
  for (const ch of text) {
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
  return depth === 0;
}

function answerFunction(row) {
  return row.answer_function || row.function;
}

function resolveBundlePath(capturesRoot, file) {
  if (path.isAbsolute(file)) return file;
  if (file.startsWith("captures/")) {
    const root = capturesRoot.endsWith(`${path.sep}captures`) ? path.dirname(capturesRoot) : capturesRoot;
    return path.join(root, file);
  }
  return path.join(capturesRoot, file);
}

function reasonFor(oracle, score) {
  const example = (oracle.scoring_examples || []).find((entry) => entry.score === score);
  return example ? example.matched_reason : `Matched a role_oracle row with score ${score}.`;
}

function spanContains(outerStart, outerEnd, innerStart, innerEnd) {
  return outerStart <= innerStart && outerEnd >= innerEnd;
}

function maxOracleSpanBytes(oracle) {
  const spans = oracle.role_oracle.map((row) => row.captured_span);
  if (oracle.primary_anchor?.captured_span) spans.push(oracle.primary_anchor.captured_span);
  return Math.max(...spans.map((span) => span.end_offset - span.start_offset), 1);
}

function findUniqueRoleMatch(submissionSlice, oracleRows, bundleFile) {
  const { start_offset: s, end_offset: e } = submissionSlice;
  const sameFileRows = oracleRows.filter((row) => row.captured_span.file === bundleFile);

  const exact = sameFileRows.filter(
    (row) => row.captured_span.start_offset === s && row.captured_span.end_offset === e,
  );
  if (exact.length === 1) return { row: exact[0], basis: "exact_span" };

  const oracleContainsSubmission = sameFileRows
    .filter((row) => spanContains(row.captured_span.start_offset, row.captured_span.end_offset, s, e))
    .sort(
      (a, b) =>
        a.captured_span.end_offset -
        a.captured_span.start_offset -
        (b.captured_span.end_offset - b.captured_span.start_offset),
    );
  if (oracleContainsSubmission.length === 1) {
    return { row: oracleContainsSubmission[0], basis: "oracle_contains_submission" };
  }
  if (oracleContainsSubmission.length > 1) {
    return { ambiguous: true, reason: "Multiple oracle spans contain the submitted span." };
  }

  const submissionContainsOracle = sameFileRows.filter((row) =>
    spanContains(s, e, row.captured_span.start_offset, row.captured_span.end_offset),
  );
  if (submissionContainsOracle.length === 1) {
    return { row: submissionContainsOracle[0], basis: "submission_contains_oracle" };
  }
  if (submissionContainsOracle.length > 1) {
    return {
      ambiguous: true,
      reason: "Submitted span encloses multiple oracle functions; not one complete function.",
    };
  }

  return { ambiguous: true, reason: "Submitted span does not map to any captured oracle function." };
}

export function gradeAnswer(submission, oracle, capturesRoot = visibleRoot) {
  if (!submission || typeof submission !== "object") {
    return { score: 0, role: null, answer_function: null, matched_span: null, reason: "Submission is missing or not an object." };
  }

  const { function_name: functionName, file, slice } = submission;
  if (!file || !slice) {
    return { score: 0, role: null, answer_function: null, matched_span: null, reason: "Submission is missing required file or slice." };
  }
  if (!file.startsWith("captures/") || !file.endsWith(".js")) {
    return { score: 0, role: null, answer_function: null, matched_span: null, reason: "File path is outside the visible captures corpus." };
  }

  const startOffset = Number(slice.start_offset);
  const endOffset = Number(slice.end_offset);
  if (!Number.isInteger(startOffset) || !Number.isInteger(endOffset) || endOffset <= startOffset) {
    return {
      score: 0,
      role: null,
      answer_function: null,
      matched_span: null,
      reason: "Submission slice offsets are missing or invalid.",
    };
  }

  const bundlePath = resolveBundlePath(capturesRoot, file);
  const bundleText = readFileSync(bundlePath, "utf8");
  const submittedText = bundleText.slice(startOffset, endOffset);

  if (typeof slice.code === "string" && slice.code.length && slice.code !== submittedText) {
    return {
      score: 0,
      role: null,
      answer_function: null,
      matched_span: null,
      reason: "Submitted slice.code does not match the bundle at the given offsets.",
    };
  }

  if (!balancedBraces(submittedText)) {
    return {
      score: 0,
      role: null,
      answer_function: null,
      matched_span: null,
      reason: "Submitted slice is not one balanced complete function body.",
    };
  }

  const maxSpanBytes = maxOracleSpanBytes(oracle);
  if (submittedText.length > maxSpanBytes * 1.5) {
    return {
      score: 0,
      role: null,
      answer_function: null,
      matched_span: null,
      reason: "Submitted span is much larger than any oracle function (oversized span).",
    };
  }

  const match = findUniqueRoleMatch(slice, oracle.role_oracle, file);
  if (match.ambiguous) {
    return { score: 0, role: null, answer_function: null, matched_span: null, reason: match.reason };
  }

  const row = match.row;
  const matchedSpan = {
    file: row.captured_span.file,
    start_line: row.captured_span.start_line,
    end_line: row.captured_span.end_line,
    start_offset: row.captured_span.start_offset,
    end_offset: row.captured_span.end_offset,
  };
  const expectedName = answerFunction(row);
  const nameOk = !functionName || functionName === expectedName;

  if (!nameOk) {
    return {
      score: 0,
      role: row.role,
      answer_function: expectedName,
      matched_span: matchedSpan,
      reason: "Span matched an oracle row but function_name does not match the captured function identifier.",
    };
  }

  const matchedBody = bundleText.slice(row.captured_span.start_offset, row.captured_span.end_offset);
  const hashOk = createHash("sha256").update(matchedBody).digest("hex") === row.captured_span.sha256;
  if (!hashOk) {
    return {
      score: 0,
      role: row.role,
      answer_function: expectedName,
      matched_span: matchedSpan,
      reason: "Matched span hash does not match the oracle captured bundle slice.",
    };
  }

  return {
    score: row.score,
    role: row.role,
    answer_function: expectedName,
    matched_span: matchedSpan,
    reason: reasonFor(oracle, row.score),
  };
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function main() {
  const submissionPath = process.argv[2];
  const raw = submissionPath ? readFileSync(submissionPath, "utf8") : await readStdin();
  if (!raw.trim()) {
    console.error("Usage: node scripts/grade_submission.mjs <submission.json>  (or pipe JSON via stdin)");
    process.exit(2);
  }

  const submission = JSON.parse(stripBom(raw));
  const oracle = JSON.parse(stripBom(readFileSync(path.join(hiddenRoot, "oracle.hidden.json"), "utf8")));
  const result = gradeAnswer(submission, oracle, visibleRoot);
  console.log(JSON.stringify({ case_id: oracle.case_id, ...result }, null, 2));
  if (result.score === 0) process.exitCode = 1;
}

if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
