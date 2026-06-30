// Executable grader for case010_request_signature_token_derivation (audit-spec section 13 / fix-plan M7).
//
// Maps an agent submission (the JSON shape declared in agent_visible/task.json:
//   { function_name, file, slice: { start_offset, end_offset, code, ... } })
// to a score using the private oracle.hidden.json. verify.mjs validates the case; this grader scores answers.
//
// Algorithm (audit-spec section 13.2):
//   1. Read the submitted slice offsets; re-slice the captured bundle and require a complete balanced function.
//   2. Find the unique role_oracle row to score:
//        - exact offset match wins (the Anchor row + primary_anchor share a span -> highest score);
//        - else the row whose captured_span is fully contained by the submitted span, choosing the unique
//          top-level scored function (so submitting the factory u that encloses the closure r / anchor does
//          not silently score a nested row, and an oversized whole-module span wrapping >1 row -> 0);
//        - else the row that fully contains the submitted span (snippet -> unique innermost enclosing fn).
//   3. Score = matched row.score; role = matched row.role; secondary key: function_name === answer_function.
//   4. No unique mapping -> score 0.
//
// Usage: node scripts/grade_submission.mjs <submission.json>
//        or import { gradeAnswer } from "./grade_submission.mjs".
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const caseRoot = path.resolve(__dirname, "..");
const visibleRoot = path.resolve(caseRoot, "../agent_visible");

function braceBalanced(text) {
  let d = 0, inStr = false, q = "", esc = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (esc) { esc = false; continue; }
    if (c === "\\") { esc = true; continue; }
    if (inStr) { if (c === q) inStr = false; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = true; q = c; continue; }
    if (c === "{") d++; else if (c === "}") d--;
  }
  return d === 0 && /\{/.test(text);
}

export function gradeAnswer(submission, oracle, capturesRoot) {
  const rows = oracle.role_oracle;
  const sub = submission && submission.slice ? submission.slice : submission;
  const s = Number(sub?.start_offset), e = Number(sub?.end_offset);
  if (!Number.isInteger(s) || !Number.isInteger(e) || e <= s) {
    return { score: 0, role: null, answer_function: null, reason: "submission has no valid integer slice offsets" };
  }
  const file = rows[0].captured_span.file;
  const bundle = readFileSync(path.join(capturesRoot, file), "utf8");
  const sliceText = bundle.slice(s, e);
  if (!braceBalanced(sliceText)) {
    return { score: 0, role: null, answer_function: null, reason: "submitted slice is not a complete balanced function body" };
  }
  const span = (r) => r.captured_span;
  const sz = (r) => span(r).end_offset - span(r).start_offset;
  const exact = rows.filter((r) => span(r).start_offset === s && span(r).end_offset === e);
  let matched = null, basis = null;
  if (exact.length >= 1) {
    matched = exact.sort((a, b) => b.score - a.score)[0]; basis = "exact_span";
  } else {
    const contained = rows.filter((r) => s <= span(r).start_offset && span(r).end_offset <= e);
    if (contained.length) {
      const topLevel = contained.filter((r) => !contained.some((o) => o !== r && span(o).start_offset <= span(r).start_offset && span(r).end_offset <= span(o).end_offset));
      if (topLevel.length === 1) { matched = topLevel[0]; basis = "submitted_span_encloses_oracle_row"; }
    } else {
      const enclosing = rows.filter((r) => span(r).start_offset <= s && e <= span(r).end_offset);
      if (enclosing.length) {
        enclosing.sort((a, b) => sz(a) - sz(b));
        const innermost = enclosing[0];
        const tie = enclosing.filter((r) => sz(r) === sz(innermost));
        if (tie.length === 1) { matched = innermost; basis = "oracle_row_encloses_submitted_span"; }
      }
    }
  }
  if (!matched) return { score: 0, role: null, answer_function: null, reason: "submitted span maps to no unique role_oracle row (off-chain, oversized or ambiguous)" };
  const nameOk = submission && submission.function_name ? submission.function_name === matched.answer_function : null;
  const sha = createHash("sha256").update(bundle.slice(matched.captured_span.start_offset, matched.captured_span.end_offset)).digest("hex");
  return {
    score: matched.score,
    role: matched.role,
    answer_function: matched.answer_function,
    source_function: matched.source_function,
    match_basis: basis,
    function_name_matches_answer_function: nameOk,
    matched_span: { start_offset: matched.captured_span.start_offset, end_offset: matched.captured_span.end_offset, sha256: sha },
    reason: oracle.scoring_examples.find((x) => x.score === matched.score)?.matched_reason || ""
  };
}

const invokedDirect = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirect) {
  const file = process.argv[2];
  if (!file) { console.error("usage: node scripts/grade_submission.mjs <submission.json>"); process.exit(2); }
  const submission = JSON.parse(readFileSync(file, "utf8"));
  const oracle = JSON.parse(readFileSync(path.join(caseRoot, "oracle.hidden.json"), "utf8"));
  console.log(JSON.stringify(gradeAnswer(submission, oracle, visibleRoot), null, 2));
}
