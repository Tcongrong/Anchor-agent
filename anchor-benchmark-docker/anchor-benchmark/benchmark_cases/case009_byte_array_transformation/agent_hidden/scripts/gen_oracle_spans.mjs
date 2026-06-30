import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Regenerates oracle.hidden.json captured_span + answer_function for every role.
//
// case009 obfuscates with identifierNamesGenerator:"hexadecimal" inside an IIFE
// bundle, so every function name in the captured bundle is mangled (_0x...) and
// the observable nouns (typed_array_payload, table.segment.commit, ta_) are
// reconstructed from hex char-code arrays. We therefore cannot look a function
// up by its source name. Each source_function is resolved STRUCTURALLY against
// the captured bundle (call graph + parameter arity + surviving numeric / hex
// char-code literals + member access), and the resulting mangled bundle name is
// written back as answer_function (the identifier an agent can actually submit).

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const capRel = "captures/devtools-source-dump/127.0.0.1_4009/assets/calendar.app.bundle.js";
const bundlePath = path.join(visibleRoot, capRel);
const bundle = readFileSync(bundlePath, "utf8");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));

// ---------------------------------------------------------------- AST + index
const ast = require("acorn").parse(bundle, { ecmaVersion: 2022 });
const funcs = [];
const nameToNode = new Map();
const declNameOffset = new Map();
(function walk(node) {
  if (!node || typeof node.type !== "string") return;
  if (/Function/.test(node.type)) {
    funcs.push(node);
    if (node.type === "FunctionDeclaration" && node.id) {
      nameToNode.set(node.id.name, node);
      declNameOffset.set(node.id.name, node.id.start);
    }
  }
  if (node.type === "VariableDeclarator" && node.id?.type === "Identifier" && node.init && /Function/.test(node.init.type || "")) {
    nameToNode.set(node.id.name, node.init);
    declNameOffset.set(node.id.name, node.id.start);
  }
  for (const key in node) {
    if (key === "type" || key === "start" || key === "end") continue;
    const value = node[key];
    if (Array.isArray(value)) value.forEach((child) => child && typeof child.type === "string" && walk(child));
    else if (value && typeof value.type === "string") walk(value);
  }
})(ast);

const txt = (node) => bundle.slice(node.start, node.end);
const size = (node) => node.end - node.start;
const np = (node) => (node && node.params ? node.params.length : -1);
const nameOf = (node) => {
  if (node.id && node.id.name) return node.id.name;
  for (const [name, fn] of nameToNode) if (fn === node) return name;
  return "(anon)";
};
const refCountText = (name) => (bundle.match(new RegExp("\\b" + name + "\\b", "g")) || []).length;
// References made directly in fn's own body (stops at nested function boundaries).
function refFuncsIn(fn) {
  const own = nameOf(fn);
  const out = new Set();
  (function w(node) {
    if (!node || typeof node.type !== "string") return;
    if (node !== fn && /Function/.test(node.type)) return;
    if (node.type === "Identifier" && nameToNode.has(node.name) && node.name !== own && node.start !== declNameOffset.get(node.name)) out.add(node.name);
    for (const key in node) {
      if (key === "type" || key === "start" || key === "end") continue;
      const value = node[key];
      if (Array.isArray(value)) value.forEach((child) => child && typeof child.type === "string" && w(child));
      else if (value && typeof value.type === "string") w(value);
    }
  })(fn);
  return [...out];
}
const refFuncNodes = (fn) => (fn ? refFuncsIn(fn).filter((name) => refCountText(name) < 200).map((name) => nameToNode.get(name)).filter(Boolean) : []);
const refs = (fn, target) => Boolean(fn && target && refFuncNodes(fn).includes(target));
const directUsers = (target) => (target ? funcs.filter((fn) => fn !== target && refFuncNodes(fn).includes(target)) : []);
const smallestEnclosing = (node) => {
  if (!node) return null;
  let best = null;
  for (const fn of funcs) if (fn !== node && fn.start <= node.start && node.end <= fn.end && (!best || size(fn) < size(best))) best = fn;
  return best;
};
const CAP = 2_000_000; // exclude the top-level module IIFE from structural matches
const matchAll = (re, extra) => funcs.filter((fn) => size(fn) < CAP && re.test(txt(fn)) && (!extra || extra.test(txt(fn)))).sort((a, b) => size(a) - size(b));

// ----------------------------------------------------------- structural resolvers
// Anchor family (src/z0/k7/q3/t9.js) — rooted at unique hex fingerprints.
const materializeLaneBytes = matchAll(/new\s+Uint8Array\s*\(\s*(?:18|0x12)\s*\)/)[0]; // new Uint8Array(18)
const encodeTypedArrayPayload = matchAll(/0x74\s*,\s*0x61\s*,\s*0x5f/)[0]; // "ta_" char codes
const transformTableTypedArray = funcs
  .filter((fn) => refs(fn, materializeLaneBytes) && refs(fn, encodeTypedArrayPayload))
  .sort((a, b) => size(a) - size(b))[0];
const laneWord = refFuncNodes(materializeLaneBytes).filter((fn) => np(fn) === 4).sort((a, b) => size(a) - size(b))[0]; // (text,config,index,salt)
const rot = refFuncNodes(materializeLaneBytes).filter((fn) => fn !== laneWord && np(fn) === 2).sort((a, b) => size(a) - size(b))[0]; // (value,amount)
const fmix = refFuncNodes(laneWord).filter((fn) => fn !== rot && np(fn) === 1).sort((a, b) => size(a) - size(b))[0]; // (value)
const createSource = refFuncNodes(transformTableTypedArray)
  .filter((fn) => fn !== materializeLaneBytes && fn !== encodeTypedArrayPayload)
  .sort((a, b) => size(b) - size(a))[0];
const mapRows = refFuncNodes(createSource).filter((fn) => /Map\b/.test(txt(fn))).sort((a, b) => size(a) - size(b))[0];
const normalizeTuple = refFuncNodes(mapRows).filter((fn) => np(fn) === 1).sort((a, b) => size(a) - size(b))[0];
const rInner = directUsers(transformTableTypedArray).sort((a, b) => size(a) - size(b))[0]; // closure r returned by u
const u = smallestEnclosing(rInner);

// Staged lane controller (src/z0/b1.js) — the smallest function whose body holds
// the surviving staged-method object keys (bootLane/bindScope/emitBuffer). Method
// shorthand keys survive because transformObjectKeys is disabled.
const b1 = matchAll(/\bbootLane\b/, /\bemitBuffer\b/).filter((fn) => /\bbindScope\b/.test(txt(fn)))[0];

// Sink family (src/z0/n0.js)
const targetField = matchAll(/0x74\s*,\s*0x79\s*,\s*0x70\s*,\s*0x65\s*,\s*0x64/)[0]; // "typed_array_payload" char codes
const actionValue = matchAll(/0x74\s*,\s*0x61\s*,\s*0x62\s*,\s*0x6c\s*,\s*0x65\s*,\s*0x2e/)[0]; // "table.segment.commit" char codes
const buildPayload = funcs.filter((fn) => refs(fn, targetField) && refs(fn, actionValue)).sort((a, b) => size(a) - size(b))[0];
const paintTableState = funcs.filter((fn) => refs(fn, targetField) && /\bdocument\b/.test(txt(fn)) && fn !== buildPayload).sort((a, b) => size(a) - size(b))[0];
const n0 = funcs.filter((fn) => refs(fn, buildPayload) && /console/.test(txt(fn))).sort((a, b) => size(a) - size(b))[0];

// Off-chain decoy (src/z0/p0.js)
const pushCache = matchAll(/__case009ShadowCache/)[0];
const p0 = directUsers(pushCache).sort((a, b) => size(a) - size(b))[0];
const send = refFuncNodes(p0).filter((fn) => fn !== pushCache && np(fn) === 2).sort((a, b) => size(a) - size(b))[0];

const resolved = {
  transformTableTypedArray, materializeLaneBytes, encodeTypedArrayPayload, laneWord,
  createSource, mapRows, normalizeTuple, rot, fmix, u,
  b1, buildPayload, paintTableState, n0, pushCache, send,
};

const missing = Object.entries(resolved).filter(([, node]) => !node).map(([key]) => key);
if (missing.length) {
  console.error(JSON.stringify({ error: "span_resolution_failed", missing }, null, 2));
  process.exit(1);
}

// ------------------------------------------------------------------ span output
const sha = (text) => createHash("sha256").update(text).digest("hex");
const nsha = (text) => createHash("sha256").update(text.replace(/\s+/g, " ").trim()).digest("hex");
function offLC(offset) {
  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset && i < bundle.length; i += 1) if (bundle[i] === "\n") { line += 1; lineStart = i + 1; }
  return { line, col: offset - lineStart };
}
function spanFor(node) {
  const start = offLC(node.start);
  const end = offLC(node.end);
  return {
    file: capRel,
    start_line: start.line,
    end_line: end.line,
    start_column: start.col,
    end_column: end.col,
    start_offset: node.start,
    end_offset: node.end,
    sha256: sha(txt(node)),
    normalized_sha256: nsha(txt(node)),
  };
}

function refresh(row) {
  const key = row.source_function;
  const node = resolved[key];
  if (!node) throw new Error(`No resolver for source_function "${key}".`);
  row.answer_function = nameOf(node);
  row.captured_span = spanFor(node);
  row.source_bundle_name_aligned = row.answer_function === row.source_function;
  return row;
}

oracle.primary_anchor = refresh(oracle.primary_anchor);
oracle.role_oracle = oracle.role_oracle.map(refresh);

// ----------------------------------------------------------------- self-checks
const anchorRows = oracle.role_oracle.filter((row) => row.role === "Anchor");
if (anchorRows.length !== 1) throw new Error(`Expected exactly one Anchor row, found ${anchorRows.length}.`);
if (anchorRows[0].answer_function !== oracle.primary_anchor.answer_function) throw new Error("Anchor row answer_function does not match primary_anchor.");
if (anchorRows[0].captured_span.start_offset !== oracle.primary_anchor.captured_span.start_offset) throw new Error("Anchor row span does not match primary_anchor.");
const anchorBytes = oracle.primary_anchor.captured_span.end_offset - oracle.primary_anchor.captured_span.start_offset;
if (anchorBytes <= 100) throw new Error(`Anchor span looks truncated (${anchorBytes} bytes).`);

const seen = new Map();
for (const row of oracle.role_oracle) {
  const key = `${row.captured_span.start_offset}-${row.captured_span.end_offset}`;
  if (!seen.has(key)) seen.set(key, []);
  seen.get(key).push(row.source_function);
}
const duplicateGroups = [...seen.values()].filter((rows) => rows.length > 1);
if (duplicateGroups.length) throw new Error(`Duplicate span group(s): ${JSON.stringify(duplicateGroups)}`);

writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n", "utf8");
console.log(JSON.stringify({
  case_id: oracle.case_id,
  updated: true,
  role_count: oracle.role_oracle.length,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_bytes: anchorBytes,
  duplicate_span_groups: duplicateGroups.length,
}, null, 2));
