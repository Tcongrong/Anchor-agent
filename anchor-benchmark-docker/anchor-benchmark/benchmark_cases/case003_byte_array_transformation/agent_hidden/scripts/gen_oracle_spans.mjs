import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/note.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");

const roleRows = [
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "buildTransform",
    role: "Anchor",
    score: 1,
    why:
      "Factory whose returned transformer body constructs the bx_<hex>:<check> byte_payload value from the normalized byte frame, slot-17 constants, and transit state."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "buildFrame",
    role: "Nested target-specific helper",
    score: 0.7,
    why: "Serializes the normalized tuple into the byte-frame array consumed by the anchor transformer."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "normalizeTuple",
    role: "Nested target-specific helper",
    score: 0.7,
    why: "Sorts and normalizes tuple fields before byte-frame serialization on the target path."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "toHex",
    role: "Core utility",
    score: 0.5,
    why: "Formats accumulator words into the hex body segment of the target bx_ value."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "verifyPair",
    role: "Core utility",
    score: 0.5,
    why: "Builds the two-character check suffix of the target bx_ value."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "shiftLeft",
    role: "Core utility",
    score: 0.5,
    why: "Circular-left-shift utility used inside the transformer accumulator loop."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "u",
    role: "Path/Wrapper",
    score: 0.2,
    why: "Exported wrapper that forwards to the selected slot-17 transformer without itself constructing the value."
  },
  {
    source_file: "src/z0/t0.js",
    source_function: "t0",
    role: "Path/Wrapper",
    score: 0.2,
    why: "Selects the active transformer, calls it, then forwards the constructed value to the output wrapper."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "makeSlotConfig",
    role: "Path-critical",
    score: 0.2,
    why: "Produces the mask, step, and offset constants captured by the active transformer closure."
  },
  {
    source_file: "src/z0/t0.js",
    source_function: "choose",
    role: "Path-critical",
    score: 0.2,
    why: "Returns the active slot-17 transformer from the registry."
  },
  {
    source_file: "src/z0/l0.js",
    source_function: "trampoline",
    role: "Path-critical",
    score: 0.2,
    why: "Runs the 3104-step state-machine transit consumed by the anchor transformer."
  },
  {
    source_file: "src/z0/l0.js",
    source_function: "stepState",
    role: "Path-critical",
    score: 0.2,
    why: "Per-step mixing function for the transit state that feeds the anchor."
  },
  {
    source_file: "src/z0/l0.js",
    source_function: "l0",
    role: "Path-critical",
    score: 0.2,
    why: "Async wrapper that runs the trampoline and forwards the result to transformer selection."
  },
  {
    source_file: "src/z0/f5.js",
    source_function: "f5",
    role: "Path-critical",
    score: 0.2,
    why: "Carries the envelope through Promise, setTimeout, and animation-frame async stages before middleware compose."
  },
  {
    source_file: "src/z0/r0.js",
    source_function: "r0",
    role: "Path-critical",
    score: 0.2,
    why: "Runs the middleware compose chain that forwards the envelope to the state machine and anchor path."
  },
  {
    source_file: "src/z0/c2.js",
    source_function: "c2",
    role: "Path-critical",
    score: 0.2,
    why: "Builds the direct dispatch table; the stream.push entry is the live path into tuple construction."
  },
  {
    source_file: "src/z0/e4.js",
    source_function: "e4",
    role: "Path-critical",
    score: 0.2,
    why: "Collects current form state, builds the tuple, and forwards it toward the target transformer."
  },
  {
    source_file: "src/z0/b1.js",
    source_function: "b1",
    role: "Path-critical",
    score: 0.2,
    why: "Installs the delegated click handler and dispatches captured click state into the stream router."
  },
  {
    source_file: "src/z0/e4.js",
    source_function: "readInputs",
    role: "Path-generic-helper",
    score: 0.1,
    why: "Generic DOM value reader for upstream form-state collection."
  },
  {
    source_file: "src/z0/n0.js",
    source_function: "n0",
    role: "Wrapper",
    score: 0.2,
    why: "Emits an already constructed byte_payload value through fetch and console.log."
  },
  {
    source_file: "src/z0/n0.js",
    source_function: "makeOutput",
    role: "Wrapper",
    score: 0.2,
    why: "Packages an already constructed value into the target console object."
  },
  {
    source_file: "src/z0/n0.js",
    source_function: "renderItem",
    role: "Off-chain",
    score: 0,
    why: "DOM rendering function that does not construct or route the target byte_payload value."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "y",
    role: "Off-chain",
    score: 0,
    why: "Alternative arbitrary-slot transformer selector used by inactive decoys, not by the live stream.push path."
  },
  {
    source_file: "src/z0/k7/q3/t9.js",
    source_function: "z",
    role: "Off-chain",
    score: 0,
    why: "Exports transformer slot metadata and is not in the value-construction path."
  },
  {
    source_file: "src/z0/x/x00.js",
    source_function: "x00",
    role: "Off-chain",
    score: 0,
    why: "Representative structural decoy module; it does not feed the target byte_payload field."
  },
  {
    source_file: "src/z0/v/v00.js",
    source_function: "v00",
    role: "Off-chain",
    score: 0,
    why: "Representative vendor-noise module; it does not feed the target byte_payload field."
  }
];

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function nsha(text) {
  return createHash("sha256").update(text.replace(/\s+/g, " ").trim()).digest("hex");
}

function offLC(offset) {
  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset && i < bundle.length; i += 1) {
    if (bundle[i] === "\n") {
      line += 1;
      lineStart = i + 1;
    }
  }
  return { line, col: offset - lineStart };
}

function span(node) {
  const start = offLC(node.start);
  const end = offLC(node.end);
  const text = bundle.slice(node.start, node.end);
  return {
    file: capRel,
    start_line: start.line,
    end_line: end.line,
    start_column: start.col,
    end_column: end.col,
    start_offset: node.start,
    end_offset: node.end,
    sha256: sha(text),
    normalized_sha256: nsha(text)
  };
}

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

function findMatching(source, openIndex, openChar, closeChar, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === openChar) depth += 1;
    else if (source[i] === closeChar) {
      depth -= 1;
      if (depth === 0) return closeChar === "}" ? i + 1 : i;
    }
  }
  return -1;
}

function extractFunctionSpan(source, keywordIndex, inString) {
  const parenOpen = source.indexOf("(", keywordIndex);
  if (parenOpen === -1) return null;
  const parenClose = findMatching(source, parenOpen, "(", ")", inString);
  if (parenClose === -1) return null;
  let bodyOpen = -1;
  for (let i = parenClose + 1; i < source.length; i += 1) {
    if (inString[i]) continue;
    if (source[i] === "{") {
      bodyOpen = i;
      break;
    }
    if (!/\s/.test(source[i])) return null;
  }
  if (bodyOpen === -1) return null;
  const end = findMatching(source, bodyOpen, "{", "}", inString);
  if (end === -1) return null;
  return { start: keywordIndex, end, body: source.slice(keywordIndex, end) };
}

function collectDeclaredFunctions(source) {
  const inString = buildStringMask(source);
  const funcs = [];
  const re = /\b(?:export\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    const keywordIndex = match.index + match[0].indexOf("function");
    const extracted = extractFunctionSpan(source, keywordIndex, inString);
    if (extracted) funcs.push({ name: match[1], ...extracted });
  }
  return funcs;
}

function parseBundleFunctions(source) {
  const byStart = new Map();
  for (const fn of collectDeclaredFunctions(source)) {
    if (!byStart.has(fn.start)) byStart.set(fn.start, fn);
  }
  return [...byStart.values()];
}

function sourceFunctions(relativePath) {
  const text = readFileSync(path.join(hiddenRoot, relativePath), "utf8");
  const out = new Map();
  for (const fn of collectDeclaredFunctions(text)) {
    if (!out.has(fn.name)) out.set(fn.name, fn);
  }
  return out;
}

function needlesFromSource(body) {
  const needles = [];
  for (const match of body.matchAll(/'([^'\\]{2,})'/g)) needles.push(match[1]);
  for (const match of body.matchAll(/"([^"\\]{2,})"/g)) needles.push(match[1]);
  for (const match of body.matchAll(/0x[0-9a-fA-F]{2,}/g)) needles.push(match[0]);
  for (const match of body.matchAll(/\b\d{5,}\b/g)) needles.push(match[0]);
  return [...new Set(needles)];
}

function scoreMatch(sourceBody, bundleBody) {
  const needles = needlesFromSource(sourceBody);
  let hits = 0;
  for (const needle of needles) {
    if (bundleBody.includes(needle)) hits += 1;
  }
  const needleScore = needles.length ? hits / needles.length : 0;
  const sizeRatio = Math.min(sourceBody.length, bundleBody.length) / Math.max(sourceBody.length, bundleBody.length);
  return needleScore * 0.8 + sizeRatio * 0.2;
}

function bundleFunctionName(slice) {
  const match = slice.trim().match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : null;
}

function isBalancedFunction(text) {
  const trimmed = text.trim();
  if (!/^function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return false;
  if (!trimmed.endsWith("}")) return false;
  const inString = buildStringMask(trimmed);
  let depth = 0;
  for (let i = 0; i < trimmed.length; i += 1) {
    if (inString[i]) continue;
    if (trimmed[i] === "{") depth += 1;
    else if (trimmed[i] === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

const bundleFuncs = parseBundleFunctions(bundle);
const usedStarts = new Set();
const failures = [];

function resolveBundleFunction(row) {
  const sourceFn = sourceFunctions(row.source_file).get(row.source_function);
  if (!sourceFn) {
    failures.push({ row, reason: "source_function_missing" });
    return null;
  }

  const exact = bundleFuncs.filter((fn) => fn.name === row.source_function);
  if (exact.length === 1 && !usedStarts.has(exact[0].start)) return exact[0];

  const scored = bundleFuncs
    .filter((fn) => !usedStarts.has(fn.start))
    .map((fn) => ({ fn, score: scoreMatch(sourceFn.body, fn.body) }))
    .filter((item) => item.score >= 0.22)
    .sort((a, b) => b.score - a.score);
  if (!scored.length) {
    failures.push({ row, reason: "bundle_function_unresolved" });
    return null;
  }
  const top = scored[0];
  const second = scored[1];
  if (second && top.score - second.score < 0.03 && top.fn.name !== row.source_function) {
    failures.push({
      row,
      reason: "bundle_function_ambiguous",
      candidates: scored.slice(0, 3).map((item) => ({ name: item.fn.name, score: item.score, start: item.fn.start }))
    });
    return null;
  }
  return top.fn;
}

const resolvedRows = [];
for (const row of roleRows) {
  const node = resolveBundleFunction(row);
  if (!node) continue;
  usedStarts.add(node.start);
  const captured_span = span(node);
  const slice = bundle.slice(captured_span.start_offset, captured_span.end_offset);
  if (!isBalancedFunction(slice)) failures.push({ row, reason: "incomplete_function_slice" });
  resolvedRows.push({
    answer_function: bundleFunctionName(slice),
    source_function: row.source_function,
    source_file: row.source_file,
    role: row.role,
    score: row.score,
    captured_span,
    why: row.why
  });
}

if (failures.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", failures }, null, 2));
  process.exit(1);
}

const anchor = resolvedRows.find((row) => row.role === "Anchor");
const oracle = {
  case_id: "case003_byte_array_transformation",
  oracle_schema_version: "1.0",
  answer_type: "top_1_weighted_function_anchor",
  metric: "top_1_weighted_anchor_score",
  task_type: "top_1_function_level_runtime_behavior_localization",
  answer_unit: "complete_javascript_function",
  target_reference: {
    task_file: "agent_visible/task.json",
    metadata_file: "agent_hidden/build_meta.hidden.json",
    observable_action: "stream.push",
    observable_field: "byte_payload"
  },
  score_values: {
    Anchor: 1,
    "Nested target-specific helper": 0.7,
    "Core utility": 0.5,
    "Path-critical": 0.2,
    "Path-generic-helper": 0.1,
    "Path/Wrapper": 0.2,
    Wrapper: 0.2,
    "Off-chain": 0
  },
  anchor_definition:
    "The anchor is the first target-specific byte payload value-construction function on the dynamic behavior chain: after routing and input preparation, its own body constructs the bx_<hex>:<check> observable value rather than merely collecting inputs, dispatching control, packaging a result, or emitting to console/fetch.",
  primary_anchor: {
    answer_function: anchor.answer_function,
    source_function: anchor.source_function,
    source_file: anchor.source_file,
    captured_span: anchor.captured_span,
    semantic_role: "Anchor",
    score: 1,
    answer_basis:
      "Agent-visible corpus only: graders match the captured_span and answer_function in captures. source_function is a private maintainer mapping into src/.",
    why: anchor.why
  },
  acceptable_hit_conditions: [
    "Agent submits one JSON object with function_name equal to the function declaration name as it appears in captures.",
    "The submitted slice maps uniquely to primary_anchor.captured_span or to exactly one role_oracle row under span_overlap_policy.",
    "Source-level names are private maintainer mappings and are not accepted unless the submitted captured span is also uniquely identified.",
    "The answer distinguishes the value constructor from routing, input preparation, output wrapping, console logging, fetch, and off-chain decoys."
  ],
  role_oracle: resolvedRows,
  empty_roles: [],
  scoring_policy: {
    top_1_only: true,
    multiple_answers: "use_first_clearly_selected_function",
    snippet_answer: "map_to_enclosing_function_if_unique",
    source_level_answer: "accepted_only_if_uniquely_mappable_to_captured_span",
    ambiguous_name: "score_zero_unless_file_or_span_disambiguates",
    span_overlap_policy:
      "score by the unique role_oracle row whose captured_span fully contains the submitted span, or whose captured_span is fully contained by a uniquely submitted enclosing function span",
    unmapped_source_path: "score_zero",
    oversized_span: "score_zero_when_span_is_larger_than_the_largest_role_span_by_more_than_20_percent"
  },
  oracle_notes: {
    do_not_promote: [
      "The final console sink and fetch call site emit an already constructed byte_payload value.",
      "The exported u() wrapper only calls the pre-selected slot-17 transformer.",
      "The tuple builder, trampoline, async relay, and middleware compose are path-critical preparation, not the target value constructor.",
      "Off-chain decoys may produce similar byte-looking values but do not feed stream.push.byte_payload."
    ],
    generator_summary: {
      bundle_function_count: bundleFuncs.length,
      role_oracle_updated: resolvedRows.length,
      duplicate_span_groups: 0
    }
  },
  scoring_examples: [
    { score: 1, matched_reason: "Returned span maps uniquely to the captured anchor value-construction function." },
    { score: 0.7, matched_reason: "Returned span maps to a target-specific helper below the anchor." },
    { score: 0.5, matched_reason: "Returned span maps to a generic utility directly used by byte_payload construction." },
    { score: 0.2, matched_reason: "Returned span maps to path-critical routing, state, or wrapper code." },
    { score: 0.1, matched_reason: "Returned span maps to generic DOM or upstream preparation code." },
    { score: 0, matched_reason: "Returned span maps to an off-chain decoy or cannot be uniquely mapped." }
  ]
};

writeFileSync(path.join(hiddenRoot, "oracle.hidden.json"), JSON.stringify(oracle, null, 2) + "\n");

let pass = 0;
for (const row of resolvedRows) {
  const slice = bundle.slice(row.captured_span.start_offset, row.captured_span.end_offset);
  if (sha(slice) === row.captured_span.sha256) pass += 1;
}
console.log(
  JSON.stringify(
    {
      case_id: oracle.case_id,
      bundle_function_count: bundleFuncs.length,
      role_oracle_updated: resolvedRows.length,
      hash_verified: pass,
      anchor_bytes: anchor.captured_span.end_offset - anchor.captured_span.start_offset,
      anchor_answer_function: anchor.answer_function,
      anchor_source_function: anchor.source_function,
      duplicate_span_groups: 0
    },
    null,
    2,
  ),
);
if (pass !== resolvedRows.length) process.exit(1);
