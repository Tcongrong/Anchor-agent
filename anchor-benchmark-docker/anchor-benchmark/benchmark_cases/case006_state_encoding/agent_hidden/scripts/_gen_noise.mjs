// One-shot generator for the annotation-themed decoy ("noise") and vendor module trees.
// These modules are inert distractors: imported so they bundle into the haystack, never called on
// the annotation_state_code path. Deterministic output (index-seeded) so re-running is stable.
import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcRoot = path.resolve(__dirname, "..", "src", "annotationCase");
const noiseRoot = path.join(srcRoot, "noise");
const vendorRoot = path.join(srcRoot, "vendor");

const NOISE_COUNT = 44;
const VENDOR_COUNT = 25;

const CATS = ["draft", "review", "audit", "session", "preview", "badge", "retry", "stamp", "feed", "lane", "tag", "ref", "seed", "salt", "trace", "scope", "shard", "ledger", "cursor", "token"];
const VERBS = ["build", "format", "normalize", "score", "fold", "mix", "tokenize", "validate", "collect", "merge", "derive", "compose", "stamp", "rank", "filter", "expand"];
const NOUNS = ["Note", "Annotation", "Tag", "Lane", "Draft", "Badge", "Session", "Audit", "Preview", "Feed", "Cursor", "Shard", "Ledger", "Scope", "Token", "Stamp"];

// Tiny deterministic PRNG so every module is varied but reproducible.
function rng(seed) {
  let s = (seed * 2654435761) >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
const pick = (rand, arr) => arr[Math.floor(rand() * arr.length)];
const cap = (w) => w[0].toUpperCase() + w.slice(1);

function dataTable(rand, prefix, rows) {
  const lines = [`const ${prefix}Table = [`];
  for (let i = 0; i < rows; i += 1) {
    const cat = pick(rand, CATS);
    const n = Math.floor(rand() * 90000) + 1000;
    lines.push(`  { id: '${prefix}_${cat}_${i}', kind: '${cat}', weight: ${n}, label: 'row ${i} ${cat}' },`);
  }
  lines.push("];");
  return lines.join("\n");
}

function helperFn(rand, name, prefix) {
  const local = pick(rand, CATS);
  const k = Math.floor(rand() * 31) + 1;
  return [
    `export function ${name}(input = {}) {`,
    `  const rows = ${prefix}Table.filter((row) => row.weight % ${k + 1} !== 0);`,
    `  const acc = [];`,
    `  for (const row of rows) {`,
    `    const text = String(input['${local}'] || row.label).slice(0, 64);`,
    `    let h = ${0x100 + Math.floor(rand() * 0x7000)} >>> 0;`,
    `    for (let i = 0; i < text.length; i += 1) {`,
    `      h = (h * 31 + text.charCodeAt(i)) >>> 0;`,
    `    }`,
    `    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });`,
    `  }`,
    `  return acc.sort((a, b) => a.hash - b.hash).slice(0, ${k});`,
    `}`,
  ].join("\n");
}

function buildModule(seed, prefix, targetLines) {
  const rand = rng(seed);
  const parts = [];
  parts.push(`// ${prefix}: annotation distractor module (inert; not on the annotation_state_code path).`);
  parts.push(dataTable(rand, prefix, 28));
  const used = new Set();
  let fnIndex = 0;
  while (parts.join("\n").split("\n").length < targetLines) {
    const verb = pick(rand, VERBS);
    const noun = pick(rand, NOUNS);
    let name = `${verb}${noun}${cap(prefix)}${fnIndex}`;
    while (used.has(name)) {
      fnIndex += 1;
      name = `${verb}${noun}${cap(prefix)}${fnIndex}`;
    }
    used.add(name);
    parts.push(helperFn(rand, name, prefix));
    fnIndex += 1;
  }
  return parts.join("\n\n") + "\n";
}

await rm(noiseRoot, { recursive: true, force: true });
await rm(vendorRoot, { recursive: true, force: true });
await mkdir(noiseRoot, { recursive: true });
await mkdir(vendorRoot, { recursive: true });

const noiseNames = [];
for (let i = 0; i < NOISE_COUNT; i += 1) {
  const id = `n${String(i).padStart(2, "0")}`;
  await writeFile(path.join(noiseRoot, `${id}.js`), buildModule(1000 + i, id, 420), "utf8");
  noiseNames.push(id);
}
const vendorNames = [];
for (let i = 0; i < VENDOR_COUNT; i += 1) {
  const id = `v${String(i).padStart(2, "0")}`;
  await writeFile(path.join(vendorRoot, `${id}.js`), buildModule(5000 + i, id, 540), "utf8");
  vendorNames.push(id);
}

// Index that imports every distractor module so rollup keeps them in the bundle.
const indexLines = [
  "// Aggregates all annotation distractor modules so they are present in the captured bundle.",
];
const allRefs = [];
for (const id of noiseNames) {
  indexLines.push(`import * as ${id} from "./noise/${id}.js";`);
  allRefs.push(id);
}
for (const id of vendorNames) {
  indexLines.push(`import * as ${id} from "./vendor/${id}.js";`);
  allRefs.push(id);
}
indexLines.push("");
indexLines.push(`export const annotationDistractors = { ${allRefs.join(", ")} };`);
await writeFile(path.join(srcRoot, "annotationDistractors.js"), indexLines.join("\n") + "\n", "utf8");

console.log(JSON.stringify({ noise: noiseNames.length, vendor: vendorNames.length }, null, 2));
