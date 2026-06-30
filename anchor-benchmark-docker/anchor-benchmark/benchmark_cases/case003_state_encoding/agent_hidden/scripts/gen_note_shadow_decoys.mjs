// Generates note-themed shadow state encoders (semantic decoys producing sc_* values off the note.add path).
import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const shadowRoot = path.resolve(__dirname, "..", "src", "noteBench", "shadow");
const SHADOW_COUNT = 12;
const alphabet = "0123456789abcdefghjkmnpqrstvwxyz";

function shadowModule(slot) {
  const id = String(slot).padStart(2, "0");
  const rows = [];
  for (let i = 0; i < 32; i += 1) {
    rows.push(`const s${id}_row_${String(i).padStart(3, "0")} = Object.freeze({ id: ${i}, left: ${17 + i}, right: ${11 + i * 3}, tag: "s${id}_row:${String(i).padStart(3, "0")}" });`);
  }
  return `// s${id}: shadow note state encoder (off-chain decoy; not on note.add state_code path).

const shadowSlot = ${slot};
const shadowAlphabet = "${alphabet}";

function rotateShadow(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function shadowBody(left, right) {
  let a = left >>> 0;
  let b = right >>> 0;
  let out = "";
  for (let i = 0; i < 10; i += 1) {
    a = Math.imul(a ^ b ^ i ^ shadowSlot, 0x9e3779b1) >>> 0;
    b = Math.imul(b + rotateShadow(a, (i % 9) + 4), 0x85ebca77) >>> 0;
    out += shadowAlphabet[(a ^ b ^ shadowSlot) & 31];
  }
  return out;
}

function shadowTape(frame) {
  const fields = frame?.fields || {};
  return [
    fields.body || "",
    fields.tag || "",
    fields.priority || "",
    String(fields.summaryLength || 0),
    String(shadowSlot),
  ].join("|");
}

export function encodeShadowNoteState${id}(frame = {}) {
  const text = shadowTape(frame);
  let left = (0x811c9dc5 ^ shadowSlot) >>> 0;
  let right = (0x45d9f3b + shadowSlot * 97) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    left = Math.imul(left ^ text.charCodeAt(i) ^ i, 0x01000193) >>> 0;
    left = rotateShadow(left, (i % 11) + 3);
    right = Math.imul(right + left + i + shadowSlot, 0x27d4eb2d) >>> 0;
  }
  return {
    slot: shadowSlot,
    branch: "shadow-" + String(shadowSlot).padStart(2, "0"),
    state_code: "sc_" + shadowBody(left, right),
    weight: (left ^ right) >>> 0,
  };
}

${rows.join("\n")}
`;
}

await rm(shadowRoot, { recursive: true, force: true });
await mkdir(shadowRoot, { recursive: true });

const names = [];
for (let i = 0; i < SHADOW_COUNT; i += 1) {
  const id = `s${String(i).padStart(2, "0")}`;
  await writeFile(path.join(shadowRoot, `${id}.js`), shadowModule(i), "utf8");
  names.push(id);
}

const imports = names.map((id) => `import { encodeShadowNoteState${id.slice(1)} } from "./shadow/${id}.js";`);
const registry = names.map((id) => `  encodeShadowNoteState${id.slice(1)},`).join("\n");

const boot = `// Shadow note state encoders: semantic decoys kept in bundle but not on the note.add path.
${imports.join("\n")}

const shadowEncoders = [
${registry}
];

export function initShadowNoteEncoders() {
  globalThis.__noteShadowEncoders = shadowEncoders;
  return shadowEncoders.length;
}
`;

await writeFile(path.join(shadowRoot, "..", "shadowBoot.js"), `${boot}\n`, "utf8");
console.log(JSON.stringify({ shadow_modules: names.length }, null, 2));
