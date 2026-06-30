// Independent oracle audit: re-hash ALL role_oracle entries from captures bundle text (track A + track B).
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultHiddenRoot = path.resolve(__dirname, "..");

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

function nsha(text) {
  return createHash("sha256").update(text.replace(/\s+/g, " ").trim()).digest("hex");
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
      mask[i] = 1;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      mask[i] = 1;
      continue;
    }
    if (!inDouble && !inTemplate && ch === "'") inSingle = !inSingle;
    else if (!inSingle && !inTemplate && ch === '"') inDouble = !inDouble;
    else if (!inSingle && !inDouble && ch === "`") inTemplate = !inTemplate;
    if (inSingle || inDouble || inTemplate) mask[i] = 1;
  }
  return mask;
}

function isBalancedBraces(text) {
  const inString = buildStringMask(text);
  let depth = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (inString[i]) continue;
    if (text[i] === "{") depth += 1;
    else if (text[i] === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function checkComplete(slice, minBytes) {
  const trimmed = slice.trim();
  const nameMatch = trimmed.match(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/);
  return {
    bytes: trimmed.length,
    startsOk: /^(?:async\s+)?function\s+[A-Za-z_$][\w$]*\s*\(/.test(trimmed),
    endsOk: trimmed.endsWith("}"),
    balanced: isBalancedBraces(trimmed),
    minBytesOk: trimmed.length >= minBytes,
    name: nameMatch ? nameMatch[1] : null,
    head: trimmed.slice(0, 80),
    tail: trimmed.slice(-40),
  };
}

export function auditOracleSpans(options = {}) {
  const hiddenRoot = options.hiddenRoot || defaultHiddenRoot;
  const caseRoot = path.resolve(hiddenRoot, "..");
  const visibleRoot = options.visibleRoot || path.join(caseRoot, "agent_visible");
  const oraclePath = options.oraclePath || path.join(hiddenRoot, "oracle.hidden.json");
  const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
  const fileCache = new Map();

  function load(relPath) {
    if (!fileCache.has(relPath)) {
      fileCache.set(relPath, readFileSync(path.join(visibleRoot, relPath), "utf8"));
    }
    return fileCache.get(relPath);
  }

  const failures = [];
  const spanKeys = new Map();
  const results = [];

  for (const entry of oracle.role_oracle) {
    const rel = entry.captured_span.file;
    const { start_offset: s, end_offset: e } = entry.captured_span;
    const spanId = `${rel}#${s}-${e}`;
    const name = entry.answer_function || entry.function;
    const role = entry.role;
    const minBytes = role === "Anchor" ? 100 : 40;
    const row = { name, role, source_file: entry.source_file, spanId, s, e };

    try {
      load(rel);
    } catch {
      failures.push({ ...row, error: "file_missing" });
      continue;
    }

    const text = load(rel);
    const slice = text.slice(s, e);
    const hashOk =
      sha(slice) === entry.captured_span.sha256 &&
      nsha(slice) === entry.captured_span.normalized_sha256;
    const complete = checkComplete(slice, minBytes);
    const nameOk = complete.name === (entry.answer_function || entry.function);

    if (!spanKeys.has(spanId)) spanKeys.set(spanId, []);
    spanKeys.get(spanId).push(name);

    if (!hashOk) failures.push({ ...row, error: "hash_mismatch" });
    if (!complete.startsOk || !complete.endsOk || !complete.balanced || !complete.minBytesOk) {
      failures.push({ ...row, error: "incomplete_slice", complete });
    }
    if (!nameOk) failures.push({ ...row, error: "name_mismatch", sliceName: complete.name, expected: entry.answer_function });

    results.push({ ...row, hashOk, bytes: complete.bytes, nameOk });
  }

  const duplicateSpans = [...spanKeys.entries()].filter(([, names]) => new Set(names).size > 1);
  const anchor = oracle.primary_anchor;
  const anchorEntry = oracle.role_oracle.find((r) => r.role === "Anchor");
  const anchorSpansMatch =
    anchor.captured_span.start_offset === anchorEntry?.captured_span.start_offset &&
    anchor.captured_span.end_offset === anchorEntry?.captured_span.end_offset;

  return {
    case_id: oracle.case_id,
    total_entries: oracle.role_oracle.length,
    hash_pass: results.filter((r) => r.hashOk).length,
    failures_count: failures.length,
    duplicate_span_groups: duplicateSpans.length,
    duplicate_span_details: duplicateSpans.map(([id, names]) => ({ id, names })),
    anchor_bytes: anchor.captured_span.end_offset - anchor.captured_span.start_offset,
    anchor_answer_function: anchor.answer_function,
    anchor_role_oracle_match: anchorSpansMatch,
    anchor_role_count: oracle.role_oracle.filter((r) => r.role === "Anchor").length,
    failures: failures.slice(0, 20),
    ok: failures.length === 0 && duplicateSpans.length === 0,
  };
}

function isCli() {
  const invoked = process.argv[1];
  if (!invoked) return false;
  return path.resolve(invoked) === path.resolve(fileURLToPath(import.meta.url));
}

if (isCli()) {
  const report = auditOracleSpans();
  console.log(JSON.stringify(report, null, 2));
  if (!report.ok) process.exit(1);
}
