// Regenerate oracle.hidden.json captured_span coordinates against the current captured bundle.
//
// The bundle is rollup -> javascript-obfuscator with NO fixed seed, so every `npm run build`
// reshuffles identifier names, string-array contents and offsets. Run this AFTER each rebuild
// (and after copying dist/* into captures/) to re-derive the 21 role_oracle spans, then never
// rebuild again until the next regeneration. Method: locate the anchor reducer by the surviving
// numeric literal 0x27d4eb2d (disambiguating the dead-code-injected clone by t9-module position),
// then resolve the rest by AST identifier-reference call graph (robust to control-flow-flattened
// calls where a function is passed as an argument to a dispatch wrapper, and to string-array'd
// member names). Char-code sink helpers are split by caller-set membership + byte-size order
// (which scales with the source char-code array length).
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const caseRoot = path.resolve(__dirname, "..");            // agent_hidden
const visibleRoot = path.resolve(caseRoot, "../agent_visible");
// capRel is stored verbatim in oracle.captured_span.file and is resolved relative to agent_visible/.
const capRel = "captures/devtools-source-dump/127.0.0.1_4193/assets/calendar.app.bundle.js";
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

// anchor + factory
const r = funcs.filter(f=>f.type==="FunctionExpression" && txt(f).includes("0x27d4eb2d") && size(f)>1200 && size(f)<6000).sort((a,b)=>a.start-b.start).pop();
const u = smallestEnclosing(r);
// produce / m0 / o0 / chooseConfig
const produce = usersOf(nameOf(u)).filter(f=>f!==u && f!==r)[0];
const m0 = usersOf(nameOf(produce)).filter(f=>f!==produce)[0];
const produceRefs = refFuncNodes(produce).filter(n=>n!==u);
const o0 = produceRefs.find(c=>/fragment|salt|batch|lane/.test(txt(c)));
const chooseConfig = produceRefs.find(c=>c!==o0);
// t9 helpers from r
const rRefs = refFuncNodes(r);
const createSource = rRefs.slice().sort((a,b)=>size(b)-size(a))[0];
const rSmall = rRefs.filter(c=>c!==createSource);
const r32 = rSmall.find(c=>/0x20/.test(txt(c)) && /<<|>>>/.test(txt(c)));
const segment = rSmall.find(c=>c!==r32 && /0x24/.test(txt(c)));
const makePlainMap = rSmall.find(c=>/Map\b/.test(txt(c)) && c!==r32 && c!==segment);
const t9conf = [createSource,r32,segment,makePlainMap].filter(Boolean);
const t9lo = Math.min(...t9conf.map(c=>c.start)) - 5000, t9hi = r.end + 1000;
const fromCodes = rSmall.find(c=>![r32,segment,makePlainMap].includes(c) && c.start>=t9lo && c.start<=t9hi);
let normalizeTuple = null;
if(makePlainMap){ const mc = refFuncNodes(makePlainMap).filter(c=>c!==makePlainMap); normalizeTuple = mc.find(c=>/\.sort\(/.test(txt(c))) || mc[0]; }
// n0 cluster
const dispatchRequest = funcs.find(f=>/fetch\s*\(/.test(txt(f)) && size(f)<2500);
const n0 = usersOf(nameOf(dispatchRequest)).filter(f=>f!==dispatchRequest && size(f)<1500).sort((a,b)=>a.start-b.start)[0]
  || usersOf(nameOf(dispatchRequest)).filter(f=>f!==dispatchRequest)[0];
const n0Refs = refFuncNodes(n0);
const buildPayload = n0Refs.slice().sort((a,b)=>size(b)-size(a))[0];
const paint = n0Refs.find(c=>c!==buildPayload && c!==dispatchRequest);
const bp = buildPayload?refFuncNodes(buildPayload):[];
const dr = dispatchRequest?refFuncNodes(dispatchRequest):[];
const pa = paint?refFuncNodes(paint):[];
const targetField = pa.find(c=>bp.includes(c)) || pa[0];
const endpointName = bp.filter(c=>dr.includes(c)).sort((a,b)=>size(b)-size(a))[0];
const contentTypeValue = dr.filter(c=>!bp.includes(c)).sort((a,b)=>size(b)-size(a))[0];
const actionValue = bp.filter(c=>c!==targetField && !dr.includes(c)).sort((a,b)=>size(b)-size(a))[0];
// p0 (largest m0 callee that is not produce/n0)
const p0 = refFuncNodes(m0).filter(c=>c!==produce&&c!==n0).sort((a,b)=>size(b)-size(a))[0];

const resolved = { r,createSource,makePlainMap,segment,r32,normalizeTuple,fromCodes,u,produce,m0,o0,chooseConfig,n0,dispatchRequest,buildPayload,paint,targetField,actionValue,endpointName,contentTypeValue,p0 };
const missing = Object.entries(resolved).filter(([,v])=>!v).map(([k])=>k);
if(missing.length){ console.error("FAILED to resolve:", missing.join(", ")); process.exit(1); }

const sha = t=>createHash("sha256").update(t).digest("hex");
const nsha = t=>createHash("sha256").update(t.replace(/\s+/g," ").trim()).digest("hex");
function offLC(off){ let line=1,ls=0; for(let i=0;i<off&&i<bundle.length;i++){ if(bundle[i]==="\n"){line++;ls=i+1;} } return {line,col:off-ls}; }
function span(node){ const a=offLC(node.start), b=offLC(node.end);
  return { file: capRel, start_line:a.line,end_line:b.line,start_column:a.col,end_column:b.col,start_offset:node.start,end_offset:node.end,sha256:sha(txt(node)),normalized_sha256:nsha(txt(node)) }; }
const spans = Object.fromEntries(Object.entries(resolved).map(([k,n])=>[k,span(n)]));
// answer_function = the obfuscated identifier at the head of the captured slice (what the agent sees).
const leadName = sp => { const s = bundle.slice(sp.start_offset, sp.end_offset); const m = s.match(/^\s*(?:async\s+)?function\s*([A-Za-z0-9_$]+)\s*\(/); return m ? m[1] : null; };

// patch oracle.hidden.json (dual-track: answer_function = bundle slice head name; source_function = src map key)
const oraclePath = path.join(caseRoot, "oracle.hidden.json");
const oracle = JSON.parse(readFileSync(oraclePath, "utf8"));
oracle.primary_anchor.captured_span = spans.r;
oracle.primary_anchor.answer_function = leadName(spans.r);
oracle.primary_anchor.source_function = "r";
let updated = 0; const unmatched = [];
for(const entry of oracle.role_oracle){
  const key = entry.source_function;           // resolved-map key == src function name
  if(key && spans[key]){ entry.captured_span = spans[key]; entry.answer_function = leadName(spans[key]); updated++; } else unmatched.push(key || JSON.stringify(entry).slice(0,40)); }
if(unmatched.length){ console.error("unmatched role_oracle entries (by source_function):", unmatched); process.exit(1); }
writeFileSync(oraclePath, JSON.stringify(oracle, null, 2) + "\n");

// mirror primary_anchor into build_meta (build.mjs::writeBuildMeta reconstructs build_meta from scratch
// and cannot know the obfuscated answer_function until after this step, so refresh the mirror here).
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

// post-generation self-audit (track-A hash + track-B uniqueness)
const allSpans = [spans.r, ...oracle.role_oracle.map(e=>e.captured_span)];
const seen = new Map(); let dupGroups = 0;
for(const sp of allSpans){ const k = sp.start_offset+"-"+sp.end_offset; seen.set(k, (seen.get(k)||0)+1); }
for(const [,c] of seen) if(c>2) dupGroups++;   // r appears twice (primary+Anchor row) → 2 is expected; >2 is a real dup
console.log(JSON.stringify({
  resolved: Object.keys(resolved).length,
  role_oracle_updated: updated,
  anchor_offset: [spans.r.start_offset, spans.r.end_offset],
  anchor_bytes: spans.r.end_offset - spans.r.start_offset,
  anchor_answer_function: oracle.primary_anchor.answer_function,
  anchor_source_function: oracle.primary_anchor.source_function,
  anchor_fingerprint: txt(r).includes("0x27d4eb2d"),
  duplicate_span_groups: dupGroups
}, null, 2));
