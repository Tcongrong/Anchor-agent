// Generates upload-case distractor haystack modules (noise + vendor) for case006_request_transformation.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadRoot = path.resolve(__dirname, "..", "src", "uploadCase");
const noiseRoot = path.join(uploadRoot, "noise");
const vendorRoot = path.join(uploadRoot, "vendor");

const KINDS = [
  "manifest", "upload", "ticket", "lane", "policy", "seal", "queue", "release",
  "intake", "vault", "archive", "checksum", "preview", "retry", "quota", "mime",
  "dropzone", "history", "segment", "feed", "sheet", "descriptor", "draft",
  "review", "expedite", "restricted", "batch", "cursor", "stamp", "digest",
  "token", "badge", "ledger", "scope", "shard", "session", "seed", "audit"
];

const VERBS = [
  "filter", "normalize", "stamp", "build", "expand", "rank", "collect",
  "compose", "derive", "merge", "fold", "score", "validate", "encode",
  "decode", "rotate", "digest", "hash", "mix", "spin", "describe", "resolve",
  "route", "queue", "bind", "mount", "hydrate", "publish", "probe", "prime",
  "rewrite", "clamp", "compact", "seal", "release", "stage"
];

const INPUT_KEYS = [
  "manifest", "upload", "ticket", "lane", "policy", "seal", "queue", "release",
  "file", "summary", "category", "preview", "retry", "quota", "mime", "archive",
  "checksum", "dropzone", "history", "segment", "feed", "sheet", "descriptor"
];

function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s;
  };
}

function makeTable(prefix, moduleIndex, rowCount = 28) {
  const next = seeded(6006 + moduleIndex * 97);
  const rows = [];
  for (let i = 0; i < rowCount; i += 1) {
    const kind = KINDS[next() % KINDS.length];
    rows.push({
      id: `${prefix}_${kind}_${i}`,
      kind,
      weight: (next() % 90000) + 1000,
      label: `row ${i} ${kind}`,
    });
  }
  return rows;
}

function makeFunctionBody(prefix, fnIndex, tableName) {
  const verb = VERBS[fnIndex % VERBS.length];
  const noun = KINDS[(fnIndex * 3 + 7) % KINDS.length];
  const capNoun = noun.charAt(0).toUpperCase() + noun.slice(1);
  const inputKey = INPUT_KEYS[fnIndex % INPUT_KEYS.length];
  const mod = (fnIndex % 29) + 2;
  const take = (fnIndex % 27) + 2;
  const seed = (fnIndex * 131 + 6006) >>> 0;

  return `export function ${verb}${capNoun}${prefix}${String(fnIndex).padStart(3, "0")}(input = {}) {
  const rows = ${tableName}.filter((row) => row.weight % ${mod} !== 0);
  const acc = [];
  for (const row of rows) {
    const text = String(input['${inputKey}'] || row.label).slice(0, 64);
    let h = ${seed} >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      h = (h * 31 + text.charCodeAt(i)) >>> 0;
    }
    acc.push({ key: row.id, hash: (h ^ row.weight) >>> 0, kind: row.kind });
  }
  return acc.sort((a, b) => a.hash - b.hash).slice(0, ${take});
}
`;
}

function makeModule(prefix, moduleIndex, fnCount = 30) {
  const tableName = `${prefix}Table`;
  const rows = makeTable(prefix, moduleIndex);
  const tableLines = rows.map((row) =>
    `  { id: '${row.id}', kind: '${row.kind}', weight: ${row.weight}, label: '${row.label}' },`
  ).join("\n");

  let body = `// ${prefix}: upload distractor module (inert; not on the upload.request request_payload path).\n\n`;
  body += `const ${tableName} = [\n${tableLines}\n];\n\n`;
  for (let i = 0; i < fnCount; i += 1) {
    body += makeFunctionBody(prefix, i, tableName);
    if (i < fnCount - 1) body += "\n";
  }
  return body;
}

async function writeModules(dir, prefix, count) {
  await mkdir(dir, { recursive: true });
  for (let i = 0; i < count; i += 1) {
    const name = `${prefix}${String(i).padStart(2, "0")}.js`;
    await writeFile(path.join(dir, name), `${makeModule(`${prefix}${String(i).padStart(2, "0")}`, i)}\n`, "utf8");
  }
}

await writeModules(noiseRoot, "n", 44);
await writeModules(vendorRoot, "v", 25);

const imports = [];
const exports = [];
for (let i = 0; i < 44; i += 1) {
  const id = `n${String(i).padStart(2, "0")}`;
  imports.push(`import * as ${id} from "./noise/${id}.js";`);
  exports.push(id);
}
for (let i = 0; i < 25; i += 1) {
  const id = `v${String(i).padStart(2, "0")}`;
  imports.push(`import * as ${id} from "./vendor/${id}.js";`);
  exports.push(id);
}

const aggregator = `// Aggregates all upload distractor modules so they are present in the captured bundle.
${imports.join("\n")}

export const uploadDistractors = { ${exports.join(", ")} };
`;

await writeFile(path.join(uploadRoot, "uploadDistractors.js"), `${aggregator}\n`, "utf8");

console.log(JSON.stringify({
  ok: true,
  noise_modules: 44,
  vendor_modules: 25,
  aggregator: "src/uploadCase/uploadDistractors.js",
}, null, 2));
