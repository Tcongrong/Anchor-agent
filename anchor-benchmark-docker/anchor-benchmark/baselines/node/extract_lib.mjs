// Shared candidate-function extractor for ALL baselines (fairness requirement:
// every method consumes the same FC, the same corpus text and the same `d`).
//
// Reproduces the EXACT offset convention used by each case's
// agent_hidden/scripts/gen_oracle_spans.mjs: candidate spans are JS string
// (UTF-16 code-unit) slice indices found by the same `function NAME(` regex +
// string-mask + brace-matcher. Because the oracle captured_span offsets are
// produced by the same routine, every oracle span appears in this FC as a
// span whose function text hashes identically, so grading is exact.
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

function buildStringMask(source) {
  const mask = new Uint8Array(source.length);
  let inSingle = false, inDouble = false, inTemplate = false, escape = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (escape) { escape = false; continue; }
    if (ch === "\\") { escape = true; continue; }
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
    else if (ch === ")") { depth -= 1; if (depth === 0) return i; }
  }
  return -1;
}
function findMatchingBrace(source, openIndex, inString) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (inString[i]) continue;
    const ch = source[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") { depth -= 1; if (depth === 0) return i + 1; }
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
    if (source[i] === "{") { bodyOpen = i; break; }
    if (!/\s/.test(source[i])) return null;
  }
  if (bodyOpen === -1) return null;
  const end = findMatchingBrace(source, bodyOpen, inString);
  if (end === -1) return null;
  return { start: keywordIndex, end };
}
function computeLineStarts(source) {
  const starts = [0];
  for (let i = 0; i < source.length; i += 1) if (source[i] === "\n") starts.push(i + 1);
  return starts;
}
function lineOf(offset, lineStarts) {
  let lo = 0, hi = lineStarts.length - 1, ans = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (lineStarts[mid] <= offset) { ans = mid; lo = mid + 1; } else hi = mid - 1;
  }
  return ans + 1;
}
function parseFunctions(source, relFile) {
  const inString = buildStringMask(source);
  const lineStarts = computeLineStarts(source);
  const out = [];
  const seenStart = new Set();
  const re = /(?:\basync\s+)?\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = re.exec(source))) {
    const keywordIndex = match.index + match[0].indexOf("function");
    if (inString[keywordIndex]) continue;
    const ex = extractFunctionSpan(source, keywordIndex, inString);
    if (!ex) continue;
    if (seenStart.has(ex.start)) continue;
    seenStart.add(ex.start);
    out.push({
      name: match[1], file: relFile,
      start_offset: ex.start, end_offset: ex.end,
      start_line: lineOf(ex.start, lineStarts), end_line: lineOf(ex.end, lineStarts),
      code: source.slice(ex.start, ex.end),
    });
  }
  return out;
}
function walk(dir, acc) {
  for (const e of readdirSync(dir)) {
    const p = path.join(dir, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (e.endsWith(".js")) acc.push(p);
  }
  return acc;
}

export function extractCandidates(caseDir) {
  const visibleRoot = path.join(caseDir, "agent_visible");
  const capturesRoot = path.join(visibleRoot, "captures");
  const jsFiles = walk(capturesRoot, []);
  const files = [];
  let candidates = [];
  for (const abs of jsFiles) {
    const rel = path.relative(visibleRoot, abs).split(path.sep).join("/");
    const text = readFileSync(abs, "utf8");
    files.push({ file: rel, text });
    candidates = candidates.concat(parseFunctions(text, rel));
  }
  let task = null;
  try { task = JSON.parse(readFileSync(path.join(visibleRoot, "task.json"), "utf8").replace(/^﻿/, "")); } catch { task = null; }
  return { case_id: path.basename(caseDir), files, candidates, task };
}
