// grade_submission.mjs - reference grader for case006_request_signature_token_derivation.
//
// Three-track model (审查.md §10.14 / §13):
//  - Agent track  : submits { function_name, file, slice:{start_offset,end_offset,code,...} }
//                   from the agent-visible captures corpus only.
//  - Grader track : maps the submission to a role_oracle row and awards its score.
//  - Maintainer   : source_function / build_meta are private and never graded.
//
// Grading priority (oracle.scoring_policy):
//  1. captured_span byte offsets + sha256 over the captures bundle (primary).
//  2. function_name == matched row answer_function (secondary alignment, reported).
//  source_function does not participate.
//
// Usage: node scripts/grade_submission.mjs <submission.json>
//    or: import { gradeAnswer } and call it directly.
import { readFile } from "node:fs/promises";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");

function isBalancedFunction(text) {
  if (!/^\s*(?:async\s+)?function\s+[A-Za-z0-9_$]+\s*\(/.test(text)) return false;
  let depth = 0, inStr = null, started = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === "'" || c === '"' || c === "`") { inStr = c; continue; }
    if (c === "{") { depth++; started = true; }
    else if (c === "}") { depth--; }
  }
  return started && depth === 0 && text.trimEnd().endsWith("}");
}

/**
 * Grade one agent submission against the oracle.
 * @returns {{score:number, role:string|null, answer_function:string|null, matched_span:string|null, function_name_match:boolean, reason:string}}
 */
export function gradeAnswer(submission, oracle, bundleBuffer) {
  const rows = oracle.role_oracle;
  const slice = submission && submission.slice ? submission.slice : {};
  let start = Number.isInteger(slice.start_offset) ? slice.start_offset : null;
  let end = Number.isInteger(slice.end_offset) ? slice.end_offset : null;

  // If code text is supplied, prefer authoritative offsets located from the bundle.
  if (typeof slice.code === "string" && slice.code.length > 0) {
    const idx = bundleBuffer.indexOf(Buffer.from(slice.code, "utf8"));
    if (idx >= 0) { start = idx; end = idx + Buffer.byteLength(slice.code, "utf8"); }
  }
  if (start === null || end === null || end <= start) {
    return { score: 0, role: null, answer_function: null, matched_span: null, function_name_match: false, reason: "submission has no resolvable byte span" };
  }

  const subBuf = bundleBuffer.slice(start, end);
  const subText = subBuf.toString("utf8");
  if (!isBalancedFunction(subText)) {
    return { score: 0, role: null, answer_function: null, matched_span: `${start}-${end}`, function_name_match: false, reason: "submitted slice is not a brace-balanced complete function" };
  }

  // 1) exact span / exact function sha match
  const subSha = sha256(subBuf);
  let hit = rows.find((r) => r.captured_span.start_offset === start && r.captured_span.end_offset === end);
  if (!hit) hit = rows.find((r) => r.captured_span.sha256 === subSha);

  // 2) submission fully contains exactly one role span (enclosing-function answer)
  if (!hit) {
    const contained = rows.filter((r) => start <= r.captured_span.start_offset && r.captured_span.end_offset <= end);
    const largestRole = Math.max(...rows.map((r) => r.captured_span.end_offset - r.captured_span.start_offset));
    if (contained.length === 1) hit = contained[0];
    else if (contained.length > 1 && (end - start) > largestRole) {
      return { score: 0, role: null, answer_function: null, matched_span: `${start}-${end}`, function_name_match: false, reason: "oversized span contains multiple role functions (ambiguous)" };
    }
  }

  // 3) submission fully contained by exactly one role span (sub-slice answer)
  if (!hit) {
    const enclosing = rows.filter((r) => r.captured_span.start_offset <= start && end <= r.captured_span.end_offset);
    if (enclosing.length === 1) hit = enclosing[0];
    else if (enclosing.length > 1) {
      return { score: 0, role: null, answer_function: null, matched_span: `${start}-${end}`, function_name_match: false, reason: "submission maps ambiguously to multiple role spans" };
    }
  }

  if (!hit) {
    return { score: 0, role: null, answer_function: null, matched_span: `${start}-${end}`, function_name_match: false, reason: "no unique role_oracle row matches the submitted span" };
  }

  const fnMatch = typeof submission.function_name === "string" && submission.function_name === hit.answer_function;
  const exampleRow = (oracle.scoring_examples || []).find((e) => e.expected_score === hit.score || e.score === hit.score);
  return {
    score: hit.score,
    role: hit.role,
    answer_function: hit.answer_function,
    matched_span: `${hit.captured_span.start_offset}-${hit.captured_span.end_offset}`,
    function_name_match: fnMatch,
    reason: exampleRow ? (exampleRow.matched_reason || exampleRow.reason) : `matched ${hit.role}`,
  };
}

async function main() {
  const submissionPath = process.argv[2];
  if (!submissionPath) { console.error("usage: node scripts/grade_submission.mjs <submission.json>"); process.exit(2); }
  const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
  const submission = JSON.parse(await readFile(submissionPath, "utf8"));
  const bundlePath = path.join(visibleRoot, oracle.primary_anchor.captured_span.file);
  const bundleBuffer = await readFile(bundlePath);
  const result = gradeAnswer(submission, oracle, bundleBuffer);
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => { console.error(error); process.exit(1); });
}
