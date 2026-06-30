// AST-based candidate extractor library (acorn). Shared by ast_extract.mjs (CLI)
// and exec_run.mjs (so breakpoint placement uses the SAME FC the harness grades).
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import * as acorn from "acorn";

function parse(src) {
  for (const sourceType of ["script", "module"]) {
    try {
      return acorn.parse(src, { ecmaVersion: "latest", sourceType,
        allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true,
        allowSuperOutsideMethod: true, allowHashBang: true });
    } catch (e) { /* try next */ }
  }
  return null;
}
const FUNC_TYPES = new Set(["FunctionDeclaration", "FunctionExpression", "ArrowFunctionExpression"]);
function nameFromParent(parent) {
  if (!parent) return null;
  if (parent.type === "VariableDeclarator" && parent.id && parent.id.type === "Identifier") return parent.id.name;
  if (parent.type === "AssignmentExpression" && parent.left) {
    const l = parent.left;
    if (l.type === "Identifier") return l.name;
    if (l.type === "MemberExpression" && l.property) return l.property.name || (l.property.value != null ? String(l.property.value) : null);
  }
  if ((parent.type === "Property" || parent.type === "MethodDefinition" || parent.type === "PropertyDefinition") && parent.key) {
    return parent.key.name || (parent.key.value != null ? String(parent.key.value) : null);
  }
  return null;
}
function computeLineStarts(src) { const s = [0]; for (let i = 0; i < src.length; i++) if (src[i] === "\n") s.push(i + 1); return s; }
function lineOf(off, ls) { let lo = 0, hi = ls.length - 1, ans = 0; while (lo <= hi) { const m = (lo + hi) >> 1; if (ls[m] <= off) { ans = m; lo = m + 1; } else hi = m - 1; } return ans + 1; }

function collect(src, relFile) {
  const ast = parse(src); const out = []; if (!ast) return out;
  const ls = computeLineStarts(src); const seen = new Set();
  const push = (start, end, name, kind) => {
    const k = start + "|" + end; if (seen.has(k)) return; seen.add(k);
    out.push({ name: name || "(anon)", kind, file: relFile, start_offset: start, end_offset: end,
      start_line: lineOf(start, ls), end_line: lineOf(end, ls), code: src.slice(start, end) });
  };
  const visit = (node, parent) => {
    if (!node || typeof node.type !== "string") return;
    if (FUNC_TYPES.has(node.type)) {
      const name = (node.id && node.id.name) || nameFromParent(parent);
      push(node.start, node.end, name, node.type);
      if (parent && (parent.type === "Property" || parent.type === "MethodDefinition"))
        push(parent.start, parent.end, name, parent.type === "MethodDefinition" ? "ClassMethod" : "ObjectMethod");
    }
    for (const k in node) {
      if (k === "type" || k === "start" || k === "end") continue;
      const v = node[k];
      if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === "string") visit(c, node); }
      else if (v && typeof v.type === "string") visit(v, node);
    }
  };
  visit(ast, null);
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
  const files = []; let candidates = [];
  for (const abs of walk(capturesRoot, [])) {
    const rel = path.relative(visibleRoot, abs).split(path.sep).join("/");
    const text = readFileSync(abs, "utf8");
    files.push({ file: rel, text });
    candidates = candidates.concat(collect(text, rel));
  }
  let task = null;
  try { task = JSON.parse(readFileSync(path.join(visibleRoot, "task.json"), "utf8").replace(/^﻿/, "")); } catch { task = null; }
  return { case_id: path.basename(caseDir), files, candidates, task };
}
