import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");

function buildStringMask(source) {
  const mask = new Uint8Array(source.length);
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escape = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (!inDouble && !inTemplate && ch === "'") inSingle = !inSingle;
    else if (!inSingle && !inTemplate && ch === '"') inDouble = !inDouble;
    else if (!inSingle && !inDouble && ch === "`") inTemplate = !inTemplate;
    if (inSingle || inDouble || inTemplate) mask[i] = 1;
  }
  return mask;
}

function isBalancedFunction(text) {
  const trimmed = String(text || "").trim();
  if (!/^(?:async\s+)?function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return false;
  if (!trimmed.endsWith("}")) return false;
  const mask = buildStringMask(trimmed);
  let depth = 0;
  for (let i = 0; i < trimmed.length; i += 1) {
    if (mask[i]) continue;
    if (trimmed[i] === "{") depth += 1;
    else if (trimmed[i] === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function contains(outer, inner) {
  return outer.start_offset <= inner.start_offset && outer.end_offset >= inner.end_offset;
}

function overlaps(a, b) {
  return a.start_offset < b.end_offset && b.start_offset < a.end_offset;
}

function zero(reason, extra = {}) {
  return { score: 0, role: "No unique match", answer_function: null, reason, ...extra };
}

export async function gradeAnswer(submission, oracle, capturesRoot = visibleRoot) {
  if (!submission || typeof submission !== "object") return zero("submission_not_object");
  if (typeof submission.function_name !== "string") return zero("missing_function_name");
  if (typeof submission.file !== "string" || !submission.file.startsWith("captures/")) return zero("invalid_file");
  const slice = submission.slice || {};
  const start = Number(slice.start_offset);
  const end = Number(slice.end_offset);
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end <= start) {
    return zero("invalid_offsets");
  }

  const filePath = path.join(capturesRoot, submission.file);
  const bundle = await readFile(filePath, "utf8").catch(() => null);
  if (bundle === null) return zero("capture_file_not_found");
  const actualCode = bundle.slice(start, end);
  if (typeof slice.code === "string" && slice.code !== actualCode) return zero("slice_code_mismatch");
  if (!isBalancedFunction(actualCode)) return zero("slice_not_complete_function");

  const submittedSpan = { file: submission.file, start_offset: start, end_offset: end };
  const roleRows = oracle.role_oracle.filter((row) => row.captured_span?.file === submission.file);
  const maxRoleBytes = Math.max(...roleRows.map((row) => row.captured_span.end_offset - row.captured_span.start_offset));
  if (end - start > Math.ceil(maxRoleBytes * 1.2)) return zero("oversized_span");

  const containing = roleRows.filter((row) => contains(row.captured_span, submittedSpan));
  const enclosed = roleRows.filter((row) => contains(submittedSpan, row.captured_span));
  const candidates = [...new Set([...containing, ...enclosed])];
  const partials = roleRows.filter((row) => overlaps(row.captured_span, submittedSpan) && !candidates.includes(row));
  if (partials.length) return zero("partial_overlap_ambiguous");
  if (candidates.length !== 1) return zero("no_unique_role_match", { candidate_count: candidates.length });

  const match = candidates[0];
  const nameMatches = submission.function_name === match.answer_function;
  return {
    score: nameMatches ? match.score : Math.min(match.score, 0.5),
    role: match.role,
    answer_function: match.answer_function,
    source_function: match.source_function,
    matched_span: match.captured_span,
    reason: nameMatches ? "unique_span_and_function_name_match" : "unique_span_but_function_name_mismatch"
  };
}

async function main() {
  const submissionPath = process.argv[2];
  if (!submissionPath) {
    console.error("Usage: npm run grade -- path/to/submission.json");
    process.exit(2);
  }
  const [submission, oracle] = await Promise.all([
    readFile(path.resolve(submissionPath), "utf8").then(JSON.parse),
    readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8").then(JSON.parse)
  ]);
  const result = await gradeAnswer(submission, oracle, visibleRoot);
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
