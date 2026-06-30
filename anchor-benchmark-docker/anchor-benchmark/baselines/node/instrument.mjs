// Source instrumentation for Uniform-Tracer (plan v2 §3.4 / §4.6).
// Inserts a function-entry trace call at the body-open brace of every block-bodied
// function, keyed by the function node's start offset (== candidate id). Emits the
// instrumented bundle text on stdout. NO CDP breakpoints are used (the plan forbids
// replacing instrumentation with full-function CDP breakpoints).
//
//   node instrument.mjs <absBundlePath> <budget>   -> instrumented JS on stdout
import { readFileSync } from "node:fs";
import * as acorn from "acorn";

const file = process.argv[2];
const budget = parseInt(process.argv[3] || "50000", 10);
const src = readFileSync(file, "utf8");

function parse(s) {
  for (const t of ["script", "module"]) {
    try { return acorn.parse(s, { ecmaVersion: "latest", sourceType: t, allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true, allowHashBang: true }); }
    catch (e) {}
  }
  return null;
}

const ast = parse(src);
const inserts = [];  // {at, off} insert `;__T(off);` right after body-open brace
if (ast) {
  const visit = (node) => {
    if (!node || typeof node.type !== "string") return;
    if ((node.type === "FunctionDeclaration" || node.type === "FunctionExpression" ||
         node.type === "ArrowFunctionExpression") && node.body && node.body.type === "BlockStatement") {
      inserts.push({ at: node.body.start + 1, off: node.start });
    }
    for (const k in node) {
      if (k === "type" || k === "start" || k === "end") continue;
      const v = node[k];
      if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === "string") visit(c); }
      else if (v && typeof v.type === "string") visit(v);
    }
  };
  visit(ast);
}
// apply descending so offsets remain valid
inserts.sort((a, b) => b.at - a.at);
let out = src;
for (const ins of inserts) {
  out = out.slice(0, ins.at) + `try{__T(${ins.off})}catch(e){};` + out.slice(ins.at);
}
const prelude = `globalThis.__TRACE=globalThis.__TRACE||[];globalThis.__T=function(o){var A=globalThis.__TRACE;if(A.length<${budget})A.push([o,(globalThis.performance&&performance.now())||Date.now()]);};`;
process.stdout.write(prelude + "\n" + out);
