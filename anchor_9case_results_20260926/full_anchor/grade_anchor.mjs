// Grade Full ANCHOR results (9 tasks × 3 repeats) against each case's oracle.
// Uses each case's own grade_submission.mjs for sha256 span matching.
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packRoot = path.resolve(here, "..");
const casesRoot = path.resolve(packRoot, "..", "anchor_scenario_cases_011-013", "scenario_cases");
const resultsRoot = path.join(here, "results");
const repeats = ["repeat1", "repeat2", "repeat3"];
const cases = [
  "case011_analytics_event_envelope", "case011_analytics_property_encoding", "case011_analytics_batch_flush",
  "case012_flag_variant_hashing", "case012_flag_persistence_encoding", "case012_flag_exposure_event",
  "case013_query_state_serialization", "case013_cache_key_digest", "case013_route_state_rewrite",
];

function sliceFunction(bundle, name, lineHint) {
  const cands = [];
  let idx = 0;
  const needle = `function ${name}(`;
  while ((idx = bundle.indexOf(needle, idx)) !== -1) {
    cands.push(idx);
    idx += 1;
  }
  if (!cands.length) return null;
  let start = cands[0];
  if (cands.length > 1 && lineHint) {
    for (const c of cands) {
      const line = bundle.slice(0, c).split("\n").length;
      if (Math.abs(line - lineHint) <= 2) { start = c; break; }
    }
  }
  const pOpen = bundle.indexOf("(", start);
  let d = 0, i = pOpen;
  for (; i < bundle.length; i++) {
    if (bundle[i] === "(") d++;
    else if (bundle[i] === ")") { d--; if (d === 0) break; }
  }
  const bOpen = bundle.indexOf("{", i);
  d = 0;
  let j = bOpen;
  for (; j < bundle.length; j++) {
    if (bundle[j] === "{") d++;
    else if (bundle[j] === "}") { d--; if (d === 0) break; }
  }
  const code = bundle.slice(start, j + 1);
  const startLine = bundle.slice(0, start).split("\n").length;
  return { code, startLine, endLine: startLine + code.split("\n").length - 1, startOffset: start, endOffset: j + 1 };
}

const rows = [];
for (const repeat of repeats) {
  for (const c of cases) {
    const caseDir = path.join(casesRoot, c);
    const resultPath = path.join(resultsRoot, repeat, c + ".json");
    const result = JSON.parse(readFileSync(resultPath, "utf8"));
    const oracle = JSON.parse(readFileSync(path.join(caseDir, "agent_hidden", "oracle.hidden.json"), "utf8"));
    const spanRel = oracle.primary_anchor.captured_span.file.replace(/^captures\/devtools-source-dump\//, "");
    const bundlePath = path.join(caseDir, "agent_visible", "captures", "devtools-source-dump", spanRel);
    const bundle = readFileSync(bundlePath, "utf8");

    const anchor = result.anchor || {};
    const fn = anchor.functionName || (anchor.tag ? anchor.tag.split("::")[1]?.split("@")[0] : null);
    const lineHint = anchor.runtimeLoc ? anchor.runtimeLoc.line : (anchor.tag ? Number(anchor.tag.split("@")[1]) : null);

    let submission = null, note = "ok";
    if (!fn) {
      note = "no_function_name";
    } else {
      const sl = sliceFunction(bundle, fn, lineHint);
      if (!sl) { note = "function_not_in_bundle"; }
      else {
        submission = {
          function_name: fn,
          file: oracle.primary_anchor.captured_span.file,
          slice: { start_line: sl.startLine, end_line: sl.endLine, start_offset: sl.startOffset, end_offset: sl.endOffset, code: sl.code },
        };
      }
    }

    let grade = { score: 0, role: "No match", answer_function: null, reason: note };
    if (submission) {
      const mod = await import(pathToFileURL(path.join(caseDir, "agent_hidden", "scripts", "grade_submission.mjs")).href);
      grade = mod.gradeAnswer(submission, oracle, bundle);
    }
    rows.push({
      repeat,
      case: c,
      group: c.slice(0, 7),
      status: result.status,
      turns: result.turn,
      confidence: anchor.confidence ?? null,
      returned_fn: fn,
      grade_score: grade.score,
      grade_role: grade.role,
      matched_fn: grade.answer_function,
      match_basis: grade.match_basis || note,
      reason: grade.reason || note,
      generatedAt: result.generatedAt || null,
    });
  }
}

writeFileSync(path.join(here, "graded.json"), JSON.stringify(rows, null, 1));

function mean(xs) { return xs.reduce((a, b) => a + b, 0) / xs.length; }
function std(xs) {
  const m = mean(xs);
  return Math.sqrt(xs.reduce((a, b) => a + (b - m) ** 2, 0) / xs.length);
}

const scores = rows.map((r) => r.grade_score);
const byRepeat = {};
for (const repeat of repeats) {
  const rs = rows.filter((r) => r.repeat === repeat);
  byRepeat[repeat] = {
    n: rs.length,
    mean: mean(rs.map((r) => r.grade_score)),
    strict: rs.filter((r) => r.grade_score === 1).length / rs.length,
  };
}
const byCase = {};
for (const c of cases) {
  const rs = rows.filter((r) => r.case === c);
  byCase[c] = {
    scores: rs.map((r) => r.grade_score),
    roles: rs.map((r) => r.grade_role),
    fns: rs.map((r) => r.returned_fn),
    statuses: rs.map((r) => r.status),
    turns: rs.map((r) => r.turns),
    conf: rs.map((r) => r.confidence),
    mean: mean(rs.map((r) => r.grade_score)),
    strict: rs.filter((r) => r.grade_score === 1).length / rs.length,
  };
}
const byGroup = {};
for (const g of ["case011", "case012", "case013"]) {
  const rs = rows.filter((r) => r.group === g);
  byGroup[g] = {
    n: rs.length,
    mean: mean(rs.map((r) => r.grade_score)),
    strict: rs.filter((r) => r.grade_score === 1).length / rs.length,
  };
}

const summary = {
  n: rows.length,
  mean: mean(scores),
  std: std(scores),
  strict: rows.filter((r) => r.grade_score === 1).length / rows.length,
  byRepeat,
  byGroup,
  byCase,
  misses: rows.filter((r) => r.grade_score < 1).map((r) => ({
    repeat: r.repeat, case: r.case, score: r.grade_score, role: r.grade_role, fn: r.returned_fn,
  })),
};
writeFileSync(path.join(here, "graded_summary.json"), JSON.stringify(summary, null, 1));
console.log(JSON.stringify(summary, null, 1));
