// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
//
// The bundle is rollup -> javascript-obfuscator with a FIXED seed, but every change to src / deps still
// reshuffles identifier names, string-array contents and offsets. Run this AFTER each rebuild (and after
// copying dist/* into captures/) to re-derive the role_oracle spans. Method: locate the anchor signing
// closure by the surviving numeric literal 0x27d4eb2d (disambiguating the dead-code-injected clone by
// module position), then resolve the rest by AST identifier-reference call graph (robust to
// control-flow-flattened calls where a function is passed as an argument to a dispatch wrapper, and to
// string-array'd member names). Every resolved function is verified against its expected source signature
// (param count + fingerprint) and the script FAILS LOUDLY on any mismatch rather than writing a wrong span.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const caseRoot = path.resolve(__dirname, "..");            // agent_hidden
const visibleRoot = path.resolve(caseRoot, "../agent_visible");
// capRel is stored verbatim in oracle.captured_span.file and is resolved relative to agent_visible/.
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/calendar.app.bundle.js";
const bundle = readFileSync(path.join(visibleRoot, capRel), "utf8");
const ast = acorn.parse(bundle, { ecmaVersion: 2022 });

const funcs = [];
const nameToNode = new Map();
const declNameOffset = new Map();
(function walk(node){
  if(!node||typeof node.type!=="string") return;
  if(/Function/.test(node.type)){
    funcs.push(node);
    if(node.type==="FunctionDeclaration" && node.id){ nameToNode.set(node.id.name, node); declNameOffset.set(node.id.name, node.id.start); }
  }
  if(node.type==="VariableDeclarator" && node.id?.type==="Identifier" && node.init && typeof node.init.type==="string" && /Function/.test(node.init.type)){
    nameToNode.set(node.id.name, node.init); declNameOffset.set(node.id.name, node.id.start);
  }
  for(const k in node){ if(k==="type"||k==="start"||k==="end") continue; const v=node[k];
    if(Array.isArray(v)) v.forEach(c=>c&&typeof c.type==="string"&&walk(c));
    else if(v&&typeof v.type==="string") walk(v); }
})(ast);

const txt = n => bundle.slice(n.start, n.end);
const size = n => n.end - n.start;
const nargs = n => (n.params ? n.params.length : -1);
const nameOf = node => { for(const [n,nd] of nameToNode) if(nd===node) return n; return "(anon)"; };
const refCountText = name => (bundle.match(new RegExp("\\b"+name+"\\b","g"))||[]).length;
function refFuncsIn(fn){
  const own = nameOf(fn); const out = new Set();
  (function w(node){
    if(!node||typeof node.type!=="string") return;
    if(node!==fn && /Function/.test(node.type)) return;
    if(node.type==="Identifier" && nameToNode.has(node.name) && node.name!==own && node.start!==declNameOffset.get(node.name)) out.add(node.name);
    for(const k in node){ if(k==="type"||k==="start"||k==="end") continue; const v=node[k];
      if(Array.isArray(v)) v.forEach(c=>c&&typeof c.type==="string"&&w(c));
      else if(v&&typeof v.type==="string") w(v); }
  })(fn);
  return [...out];
}
const refFuncNodes = fn => refFuncsIn(fn).filter(n=>refCountText(n)<200).map(n=>nameToNode.get(n));
const smallestFuncAt = off => { let best=null; for(const f of funcs){ if(f.start<=off&&off<f.end){ if(!best||size(f)<size(best)) best=f; } } return best; };
function usersOf(name){
  const decl = nameToNode.get(name); const re=new RegExp("\\b"+name+"\\b","g"); const set=new Set(); let m;
  while((m=re.exec(bundle))){ if(m.index===declNameOffset.get(name)) continue; const f=smallestFuncAt(m.index); if(f&&f!==decl) set.add(f); }
  return [...set];
}
const smallestEnclosing = node => { let best=null; for(const f of funcs){ if(f!==node && f.start<=node.start && node.end<=f.end){ if(!best||size(f)<size(best)) best=f; } } return best; };
const bySizeDesc = (a,b)=>size(b)-size(a);

// ---- anchor + factory ----
const r = funcs.filter(f=>f.type==="FunctionExpression" && txt(f).includes("0x27d4eb2d") && size(f)>1200 && size(f)<6000).sort((a,b)=>a.start-b.start).pop();
if(!r){ console.error("FAILED: anchor (0x27d4eb2d signing closure) not found"); process.exit(1); }
const u = smallestEnclosing(r);
// ---- t9 helpers reachable from the anchor ----
const rRefs = refFuncNodes(r);
const createSource = rRefs.slice().sort(bySizeDesc)[0];
const rSmall = rRefs.filter(c=>c!==createSource);
// The anchor may also reference an obfuscator-injected control-flow helper, so pick each t9 helper by its
// own surviving signature rather than by elimination: r32 = 32-bit rotate (0x20 + shift), segment = base36
// formatter (0x24), fromCodes = the single-parameter char-code joiner.
const r32 = rSmall.find(c=>/0x20\b/.test(txt(c)) && /<<|>>>/.test(txt(c)));
const segment = rSmall.find(c=>c!==r32 && /0x24\b/.test(txt(c)));
const fromCodes = rSmall.find(c=>c!==r32 && c!==segment && nargs(c)===1);
const csRefs = createSource ? refFuncNodes(createSource).filter(c=>c!==r32&&c!==segment&&c!==fromCodes) : [];
const makePlainMap = csRefs.find(c=>/\bMap\b/.test(txt(c))) || csRefs.sort(bySizeDesc)[0];
const mpRefs = makePlainMap ? refFuncNodes(makePlainMap) : [];
const normalizeTuple = mpRefs.find(c=>/\.sort\(|\[[^\]]*sort/.test(txt(c))) || mpRefs.sort(bySizeDesc)[0];
// ---- m0 cluster ----
const produce = usersOf(nameOf(u)).filter(f=>f!==u && f!==r).sort((a,b)=>size(a)-size(b))[0];
const m0 = usersOf(nameOf(produce)).filter(f=>f!==produce)[0];
const prodRefs = refFuncNodes(produce).filter(c=>c!==u);
const o0 = prodRefs.find(c=>/fragment|lane|salt|batch/i.test(txt(c)));
const chooseConfig = prodRefs.find(c=>c!==o0);
// ---- sink cluster (console-only) ----
const m0Refs = refFuncNodes(m0);
const n0 = m0Refs.find(c=>/\bconsole\b/.test(txt(c)));
const p0 = m0Refs.filter(c=>c!==produce&&c!==n0).sort(bySizeDesc)[0];
const n0Refs = refFuncNodes(n0);
// paint touches the DOM via document.querySelector / document.documentElement; the member name strings
// ("querySelector"/"textContent") are moved into the obfuscator string array, but the `document` global
// identifier survives, so match on it.
const paint = n0Refs.find(c=>/\bdocument\b/.test(txt(c)));
const buildPayload = n0Refs.filter(c=>c!==paint).map(c=>[c,refFuncNodes(c).length]).sort((a,b)=>b[1]-a[1]||size(b[0])-size(a[0]))[0]?.[0];
const bpRefs = buildPayload ? refFuncNodes(buildPayload) : [];
const paintRefs = paint ? refFuncNodes(paint) : [];
const targetField = paintRefs.find(c=>bpRefs.includes(c)) || bpRefs.sort((a,b)=>size(a)-size(b))[0];
const actionValue = bpRefs.filter(c=>c!==targetField).sort(bySizeDesc)[0];

const resolved = { r, createSource, makePlainMap, segment, r32, normalizeTuple, fromCodes, u, produce, m0, o0, chooseConfig, n0, buildPayload, paint, targetField, actionValue, p0 };
const missing = Object.entries(resolved).filter(([,v])=>!v).map(([k])=>k);
if(missing.length){ console.error("FAILED to resolve:", missing.join(", ")); process.exit(1); }

// ---- track-B verification: each resolved node must match its expected source signature ----
const expect = [
  ["r", 2, t=>/0x27d4eb2d/.test(t) && /Math\b|imul/.test(t)],
  ["createSource", 3, null],
  ["makePlainMap", 1, t=>/\bMap\b/.test(t)],
  ["segment", 2, t=>/0x24\b|toString/.test(t)],
  ["r32", 2, t=>/<<|>>>/.test(t)],
  ["normalizeTuple", 1, null],
  ["fromCodes", 1, null],
  ["u", 1, t=>t.includes("0x27d4eb2d")],
  ["produce", 1, null],
  ["m0", 1, null],
  ["o0", 0, t=>/fragment|lane/i.test(t)],
  ["chooseConfig", 1, null],
  ["n0", 1, t=>/\bconsole\b/.test(t)],
  ["buildPayload", 1, null],
  ["paint", 1, t=>/\bdocument\b/.test(t)],
  ["targetField", 0, null],
  ["actionValue", 0, null],
  ["p0", 1, null]
];
const vfail = [];
for(const [key, wantArgs, fp] of expect){
  const node = resolved[key];
  const a = nargs(node);
  if(wantArgs>=0 && a!==wantArgs) vfail.push(`${key}: arg count ${a} != expected ${wantArgs}`);
  if(fp && !fp(txt(node))) vfail.push(`${key}: fingerprint mismatch`);
  if(!/^\s*(?:async\s+)?function\b/.test(txt(node)) && node.type!=="FunctionExpression") vfail.push(`${key}: not a function-decl head`);
}
// uniqueness: no two distinct roles may share a start offset (anchor==Anchor handled in oracle, not here)
const byStart = new Map();
for(const [k,n] of Object.entries(resolved)){ const s=n.start; if(byStart.has(s)) vfail.push(`duplicate span: ${k} and ${byStart.get(s)} share offset ${s}`); else byStart.set(s,k); }
if(vfail.length){ console.error("VERIFICATION FAILED:\n  "+vfail.join("\n  ")); process.exit(1); }

const sha = t=>createHash("sha256").update(t).digest("hex");
const nsha = t=>createHash("sha256").update(t.replace(/\s+/g," ").trim()).digest("hex");
function offLC(off){ let line=1,ls=0; for(let i=0;i<off&&i<bundle.length;i++){ if(bundle[i]==="\n"){line++;ls=i+1;} } return {line,col:off-ls}; }
function span(node){ const a=offLC(node.start), b=offLC(node.end);
  return { file: capRel, start_line:a.line,end_line:b.line,start_column:a.col,end_column:b.col,start_offset:node.start,end_offset:node.end,sha256:sha(txt(node)),normalized_sha256:nsha(txt(node)) }; }
const spans = Object.fromEntries(Object.entries(resolved).map(([k,n])=>[k,span(n)]));
// answer_function = the obfuscated identifier at the head of the captured slice (what the agent sees).
const leadName = sp => { const s = bundle.slice(sp.start_offset, sp.end_offset); const m = s.match(/^\s*(?:async\s+)?function\s*([A-Za-z0-9_$]+)\s*\(/); return m ? m[1] : null; };

// ---- patch oracle.hidden.json (dual-track: answer_function = bundle slice head name; source_function = src name) ----
const oraclePath = path.join(caseRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
oracle.primary_anchor.captured_span = spans.r;
oracle.primary_anchor.answer_function = leadName(spans.r);
oracle.primary_anchor.source_function = "r";
let updated = 0; const unmatched = [];
for(const entry of oracle.role_oracle){
  const key = entry.source_function;
  if(key && spans[key]){ entry.captured_span = spans[key]; entry.answer_function = leadName(spans[key]); updated++; } else unmatched.push(key || JSON.stringify(entry).slice(0,40)); }
if(unmatched.length){ console.error("unmatched role_oracle entries (by source_function):", unmatched); process.exit(1); }
writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

// ---- mirror primary_anchor into build_meta ----
try {
  const metaPath = path.join(caseRoot, "build_meta.hidden.json");
  const meta = JSON.parse(readFileSync(metaPath, "utf8"));
  meta.primary_anchor = {
    answer_function: oracle.primary_anchor.answer_function,
    source_function: oracle.primary_anchor.source_function,
    source_file: oracle.primary_anchor.source_file,
    captured_span: { start_offset: spans.r.start_offset, end_offset: spans.r.end_offset, start_line: spans.r.start_line, end_line: spans.r.end_line, sha256: spans.r.sha256 },
    note: "Mirror of oracle.primary_anchor; answer_function is the obfuscated bundle id as it appears in captures (regenerated each build), source_function is the private src name."
  };
  writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n");
} catch (e) { console.error("warn: could not refresh build_meta.primary_anchor:", e.message); }

// ---- post-generation self-audit (track-A hash uniqueness + track-B anchor body) ----
const allSpans = [spans.r, ...oracle.role_oracle.map(e=>e.captured_span)];
const seen = new Map(); let dupGroups = 0;
for(const sp of allSpans){ const k = sp.start_offset+"-"+sp.end_offset; seen.set(k, (seen.get(k)||0)+1); }
for(const [,c] of seen) if(c>2) dupGroups++;   // r appears twice (primary + Anchor row) -> 2 expected; >2 is a real dup
console.log(JSON.stringify({
  resolved: Object.keys(resolved).length,
  role_oracle_updated: updated,
  anchor_offset: [spans.r.start_offset, spans.r.end_offset],
  anchor_bytes: spans.r.end_offset - spans.r.start_offset,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_fingerprint: txt(r).includes("0x27d4eb2d"),
  u_contains_r: u.start<=r.start && r.end<=u.end,
  duplicate_span_groups: dupGroups
}, null, 2));
