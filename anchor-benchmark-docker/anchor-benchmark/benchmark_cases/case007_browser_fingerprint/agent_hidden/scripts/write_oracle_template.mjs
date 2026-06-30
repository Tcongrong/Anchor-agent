import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const hiddenRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const capRel = "captures/devtools-source-dump/127.0.0.1_8477/assets/fingerprint.app.bundle.js";
const spanStub = {
  file: capRel,
  start_line: null,
  end_line: null,
  start_column: null,
  end_column: null,
  start_offset: null,
  end_offset: null,
  sha256: null,
  normalized_sha256: null,
};

const pathRows = [
  ["slot-23 fingerprint reducer", "r", "src/z0/k7/q3/t9.js", "Anchor", 1, "Constructs browser_fp by hashing browser capability signals through slot-23 config with fp_ prefix."],
  ["u reducer factory", "u", "src/z0/k7/q3/t9.js", "Path/Wrapper", 0.2, "Factory returning the anchor reducer; does not itself construct browser_fp."],
  ["y slot dispatcher", "y", "src/z0/k7/q3/t9.js", "Path/Wrapper", 0.2, "Dispatches to the selected slot reducer without constructing the fingerprint value."],
  ["produce orchestrator", "produce", "src/z0/m0.js", "Path/Wrapper", 0.2, "Orchestrates config lookup, reducer selection and invocation with the browser signal tuple."],
  ["m0 middleware orchestrator", "m0", "src/z0/m0.js", "Path/Wrapper", 0.2, "Applies middleware layers and forwards to produce/anchor."],
  ["l0 state machine", "l0", "src/z0/l0.js", "Path-critical", 0.2, "Runs the 3112-step state machine seeded from browser signal stats."],
  ["e4 browser signal collector", "e4", "src/z0/e4.js", "Path-critical", 0.2, "Collects browser capability signals as encoder input."],
  ["f5 tuple builder", "f5", "src/z0/f5.js", "Path-critical", 0.2, "Builds the browser signal tuple passed to the anchor encoder."],
  ["g6 async pipeline", "g6", "src/z0/g6.js", "Path-critical", 0.2, "Carries prepared state through Promise/microtask/timer/rAF/MutationObserver boundaries."],
  ["h7 local event plane", "h7", "src/z0/h7.js", "Path-critical", 0.2, "Transfers fingerprint state through a local DOM event plane."],
  ["d3 signal selector", "d3", "src/z0/d3.js", "Path-critical", 0.2, "Selects signal groups based on scan depth from the profile."],
  ["c2 scan profile normalizer", "c2", "src/z0/c2.js", "Path-critical", 0.2, "Normalises scanMode into a profile object and routes to d3."],
  ["b1 scan button listener", "b1", "src/z0/b1.js", "Path-critical", 0.2, "Installs direct click listener on #scanButton and reads form state."],
  ["n0 sink wrapper", "n0", "src/z0/n0.js", "Wrapper", 0.2, "Packages and emits an already constructed browser_fp under fingerprint.collect."],
];

const role_oracle = pathRows.map(([label, source_function, source_file, role, score, why]) => ({
  function: label,
  source_function,
  source_file,
  role,
  score,
  why,
  captured_span: { ...spanStub },
}));

for (let i = 0; i < 44; i += 1) {
  const name = `x${String(i).padStart(2, "0")}`;
  role_oracle.push({
    function: `${name} shadow reducer`,
    source_function: name,
    source_file: `src/z0/x/${name}.js`,
    role: "Off-chain",
    score: 0,
    why: "Shadow reducer that emits via console.debug/info; does not feed target browser_fp.",
    captured_span: { ...spanStub },
  });
}

const oracle = {
  case_id: "case007_browser_fingerprint",
  oracle_schema_version: "1.0",
  answer_type: "top_1_weighted_function_anchor",
  metric: "top_1_weighted_anchor_score",
  task_type: "top_1_function_level_runtime_behavior_localization",
  answer_unit: "complete_javascript_function",
  target_reference: {
    task_file: "agent_visible/task.json",
    metadata_file: "agent_hidden/build_meta.hidden.json",
    observable_action: "fingerprint.collect",
    observable_field: "browser_fp",
  },
  score_values: {
    Anchor: 1,
    "Nested target-specific helper": 0.7,
    "Core utility": 0.5,
    "Path-critical": 0.2,
    "Path-generic-helper": 0.1,
    "Path/Wrapper": 0.2,
    Wrapper: 0.2,
    "Off-chain": 0,
  },
  anchor_definition:
    "The anchor is the first target-specific value-construction function on the dynamic behavior chain: the earliest function, after routing and input preparation, whose own body constructs the target observable value rather than merely collecting inputs, dispatching control, packaging the result, or emitting it to the sink.",
  primary_anchor: {
    source_function: "r",
    source_file: "src/z0/k7/q3/t9.js",
    source_export: "inner reducer returned by exported u(config) at slot 23",
    captured_file: capRel,
    captured_span: { ...spanStub, note: "Filled by gen_oracle_spans.mjs" },
    semantic_role: "Anchor",
    score: 1,
    why: "Constructs browser_fp by hashing browser capability signals through slot-23 config, producing fp_[a-z0-9]{12}.",
    answer_basis: "Agent-visible corpus only; grade by span + answer_function.",
  },
  acceptable_hit_conditions: [
    "Canonical match is primary_anchor.captured_span in the captured bundle (hash/offset/complete function body). Agents only see captures, so the standard answer identifier is primary_anchor.answer_function, not source_function.",
    "A returned function name is scored against answer_function in the captured corpus. source_function is a private maintainer label.",
    "Agent explanation distinguishes the anchor from routing, browser signal collection, wrapper, sink, core utility and off-chain decoy functions.",
    "A snippet answer is accepted only when it maps uniquely to one complete enclosing function in the captured corpus.",
  ],
  role_oracle,
  empty_roles: ["Nested target-specific helper"],
  scoring_policy: {
    top_1_only: true,
    multiple_answers: "use_first_clearly_selected_function",
    snippet_answer: "map_to_enclosing_function_if_unique",
    source_level_answer: "invalid_for_agent_visible_corpus",
    ambiguous_name: "score_zero_unless_file_or_span_disambiguates",
    span_overlap_policy:
      "score by the unique role_oracle row whose captured_span fully contains the submitted span, or whose captured_span is fully contained by a uniquely submitted enclosing function span",
    unmapped_source_path: "score_zero",
  },
  oracle_notes: {
    do_not_promote: [
      "The final console sink emits an already encoded browser_fp value.",
      "The exported factory u() only wraps the private fingerprint anchor and should not outrank the anchor itself.",
      "Browser signal collection, tuple building, state machine and async transport are path-critical preparation, not the target value constructor.",
      "Shadow reducer outputs emitted via console.debug/info are not the requested observable action.",
    ],
    debug_hints_private: [
      "The primary anchor is the inner function r returned by u(slotConfigs[23]) in src/z0/k7/q3/t9.js.",
      "The prefixCodes [102, 112, 95] in slot 23 decode to fp_.",
      "The target field name browser_fp is assembled at the sink from character codes.",
    ],
  },
  scoring_examples: [
    { score: 1, matched_reason: "Returned span maps uniquely to the slot-23 fingerprint reducer in the captured bundle." },
    { score: 0.5, matched_reason: "Returned span maps to a generic utility (rot, fromCodes) directly used by the fingerprint construction path." },
    { score: 0.2, matched_reason: "Returned span maps to a path-critical routing/materialization/wrapper function on the collect path." },
    { score: 0.1, matched_reason: "Returned span maps to a generic DOM or tuple helper used in upstream browser signal preparation." },
    { score: 0, matched_reason: "Returned span maps to an off-chain decoy reducer or cannot be uniquely mapped to a captured function." },
  ],
};

writeFileSync(path.join(hiddenRoot, "oracle.hidden.json"), `${JSON.stringify(oracle, null, 2)}\n`);
console.log(JSON.stringify({ role_oracle_entries: role_oracle.length }, null, 2));
