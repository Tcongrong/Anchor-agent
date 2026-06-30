// Syncs off-chain oracle rows: shadow encoders, name-confusion decoys, and haystack distractor modules.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src", "noteBench");
const capRel = "captures/devtools-source-dump/127.0.0.1_7599/assets/note.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const bundle = readFileSync(bundlePath, "utf8");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));

const SHADOW_COUNT = 12;
const NOISE_COUNT = 44;
const VENDOR_COUNT = 25;

const OFFCHAIN_PREFIXES = [
  "encodeShadowNoteState",
  "composeDraftStateCode",
  "composeDraftStateCodec",
  "composeDraftStatePreview",
  "haystack:",
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
    normalized_sha256: nsha(text),
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

function findMatchingParen(source, openIndex, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    const ch = source[i];
    if (ch === "(") depth += 1;
    else if (ch === ")") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function findMatchingBrace(source, openIndex, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    const ch = source[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }
  return -1;
}

function extractFunctionSpan(source, keywordIndex, inString) {
  const parenOpen = source.indexOf("(", keywordIndex);
  if (parenOpen === -1) return null;
  const parenClose = findMatchingParen(source, parenOpen, inString);
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
  const end = findMatchingBrace(source, bodyOpen, inString);
  if (end === -1) return null;
  return { start: keywordIndex, end, body: source.slice(keywordIndex, end) };
}

function findBundleFunction(name) {
  const inString = buildStringMask(bundle);
  const re = new RegExp(`\\bfunction\\s+${name.replace(/\$/g, "\\$")}\\s*\\(`);
  const match = re.exec(bundle);
  if (!match) return null;
  const keywordIndex = match.index + match[0].indexOf("function");
  return extractFunctionSpan(bundle, keywordIndex, inString);
}

function firstExportName(sourceText) {
  const match = sourceText.match(/export function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return match ? match[1] : null;
}

function makeOffchainEntry({ label, sourceName, sourceFile, why }) {
  const node = findBundleFunction(sourceName);
  if (!node) {
    return { error: "function_not_found", label, sourceName, sourceFile };
  }
  const captured = span(node);
  const slice = bundle.slice(node.start, node.end);
  const answerMatch = slice.trim().match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return {
    function: label,
    role: "Off-chain",
    score: 0,
    source_file: sourceFile,
    captured_span: captured,
    why,
    answer_function: answerMatch ? answerMatch[1] : sourceName,
    source_function: sourceName,
  };
}

oracle.role_oracle = oracle.role_oracle.filter(
  (entry) => !OFFCHAIN_PREFIXES.some((prefix) => entry.function?.startsWith(prefix)),
);

const added = [];
const failures = [];

for (let i = 0; i < SHADOW_COUNT; i += 1) {
  const sourceName = `encodeShadowNoteState${String(i).padStart(2, "0")}`;
  const sourceFile = `src/noteBench/shadow/s${String(i).padStart(2, "0")}.js`;
  const entry = makeOffchainEntry({
    label: sourceName,
    sourceName,
    sourceFile,
    why: `Shadow note state encoder slot ${i} produces sc_* values but is not on the note.add keyboard path.`,
  });
  if (entry.error) failures.push(entry);
  else added.push(entry);
}

for (const sourceName of ["composeDraftStateCode", "composeDraftStateCodec", "composeDraftStatePreview"]) {
  const entry = makeOffchainEntry({
    label: sourceName,
    sourceName,
    sourceFile: "src/noteBench/decoys/nameConfusionDecoys.js",
    why: "Name-confusion decoy with anchor-like identifier; emits sc_* off the note.add path and must not be graded as the anchor.",
  });
  if (entry.error) failures.push(entry);
  else added.push(entry);
}

for (let i = 0; i < NOISE_COUNT; i += 1) {
  const id = `n${String(i).padStart(2, "0")}`;
  const sourceFile = `src/noteBench/noise/${id}.js`;
  const sourceText = readFileSync(path.join(srcRoot, "noise", `${id}.js`), "utf8");
  const sourceName = firstExportName(sourceText);
  if (!sourceName) {
    failures.push({ error: "no_export", sourceFile });
    continue;
  }
  const entry = makeOffchainEntry({
    label: `haystack:${id}`,
    sourceName,
    sourceFile,
    why: `Haystack noise module ${id}; bundled for volume but not on the note.add state_code path.`,
  });
  if (entry.error) failures.push(entry);
  else added.push(entry);
}

for (let i = 0; i < VENDOR_COUNT; i += 1) {
  const id = `v${String(i).padStart(2, "0")}`;
  const sourceFile = `src/noteBench/vendor/${id}.js`;
  const sourceText = readFileSync(path.join(srcRoot, "vendor", `${id}.js`), "utf8");
  const sourceName = firstExportName(sourceText);
  if (!sourceName) {
    failures.push({ error: "no_export", sourceFile });
    continue;
  }
  const entry = makeOffchainEntry({
    label: `haystack:${id}`,
    sourceName,
    sourceFile,
    why: `Haystack vendor module ${id}; bundled for volume but not on the note.add state_code path.`,
  });
  if (entry.error) failures.push(entry);
  else added.push(entry);
}

if (failures.length) {
  console.error(JSON.stringify({ error: "offchain_sync_failed", failures }, null, 2));
  process.exit(1);
}

oracle.role_oracle.push(...added);

oracle.oracle_notes.debug_hints_private = [
  "The primary anchor is visible in the captured bundle as function sealDraftFrameCode(...).",
  "Functions named composeDraftStateCode/Codec/Preview in the bundle are off-chain name decoys, not the anchor.",
  "The target field name is assembled at the sink from string fragments.",
  "Source paths are private evaluator mapping aids, not the default answer space.",
];

oracle.scoring_examples = oracle.scoring_examples.map((example) => {
  if (example.score === 1) {
    return {
      ...example,
      matched_reason: "Returned span maps uniquely to the captured sealDraftFrameCode function.",
    };
  }
  if (example.score === 0 && example.matched_reason.includes("off-chain")) {
    return example;
  }
  if (example.score === 0) {
    return {
      ...example,
      matched_reason:
        "Returned span maps to an off-chain decoy (sidecar, shadow encoder, name-confusion helper, or haystack module) or cannot be uniquely mapped to a captured function.",
    };
  }
  return example;
});

writeFileSync(oraclePath, `${JSON.stringify(oracle, null, 2)}\n`, "utf8");

console.log(
  JSON.stringify(
    {
      case_id: oracle.case_id,
      offchain_added: added.length,
      shadow: SHADOW_COUNT,
      name_decoys: 3,
      haystack_modules: NOISE_COUNT + VENDOR_COUNT,
      role_oracle_total: oracle.role_oracle.length,
    },
    null,
    2,
  ),
);
