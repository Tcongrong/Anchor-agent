// s07: shadow note state encoder (off-chain decoy; not on note.add state_code path).

const shadowSlot = 7;
const shadowAlphabet = "0123456789abcdefghjkmnpqrstvwxyz";

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

export function encodeShadowNoteState07(frame = {}) {
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

const s07_row_000 = Object.freeze({ id: 0, left: 17, right: 11, tag: "s07_row:000" });
const s07_row_001 = Object.freeze({ id: 1, left: 18, right: 14, tag: "s07_row:001" });
const s07_row_002 = Object.freeze({ id: 2, left: 19, right: 17, tag: "s07_row:002" });
const s07_row_003 = Object.freeze({ id: 3, left: 20, right: 20, tag: "s07_row:003" });
const s07_row_004 = Object.freeze({ id: 4, left: 21, right: 23, tag: "s07_row:004" });
const s07_row_005 = Object.freeze({ id: 5, left: 22, right: 26, tag: "s07_row:005" });
const s07_row_006 = Object.freeze({ id: 6, left: 23, right: 29, tag: "s07_row:006" });
const s07_row_007 = Object.freeze({ id: 7, left: 24, right: 32, tag: "s07_row:007" });
const s07_row_008 = Object.freeze({ id: 8, left: 25, right: 35, tag: "s07_row:008" });
const s07_row_009 = Object.freeze({ id: 9, left: 26, right: 38, tag: "s07_row:009" });
const s07_row_010 = Object.freeze({ id: 10, left: 27, right: 41, tag: "s07_row:010" });
const s07_row_011 = Object.freeze({ id: 11, left: 28, right: 44, tag: "s07_row:011" });
const s07_row_012 = Object.freeze({ id: 12, left: 29, right: 47, tag: "s07_row:012" });
const s07_row_013 = Object.freeze({ id: 13, left: 30, right: 50, tag: "s07_row:013" });
const s07_row_014 = Object.freeze({ id: 14, left: 31, right: 53, tag: "s07_row:014" });
const s07_row_015 = Object.freeze({ id: 15, left: 32, right: 56, tag: "s07_row:015" });
const s07_row_016 = Object.freeze({ id: 16, left: 33, right: 59, tag: "s07_row:016" });
const s07_row_017 = Object.freeze({ id: 17, left: 34, right: 62, tag: "s07_row:017" });
const s07_row_018 = Object.freeze({ id: 18, left: 35, right: 65, tag: "s07_row:018" });
const s07_row_019 = Object.freeze({ id: 19, left: 36, right: 68, tag: "s07_row:019" });
const s07_row_020 = Object.freeze({ id: 20, left: 37, right: 71, tag: "s07_row:020" });
const s07_row_021 = Object.freeze({ id: 21, left: 38, right: 74, tag: "s07_row:021" });
const s07_row_022 = Object.freeze({ id: 22, left: 39, right: 77, tag: "s07_row:022" });
const s07_row_023 = Object.freeze({ id: 23, left: 40, right: 80, tag: "s07_row:023" });
const s07_row_024 = Object.freeze({ id: 24, left: 41, right: 83, tag: "s07_row:024" });
const s07_row_025 = Object.freeze({ id: 25, left: 42, right: 86, tag: "s07_row:025" });
const s07_row_026 = Object.freeze({ id: 26, left: 43, right: 89, tag: "s07_row:026" });
const s07_row_027 = Object.freeze({ id: 27, left: 44, right: 92, tag: "s07_row:027" });
const s07_row_028 = Object.freeze({ id: 28, left: 45, right: 95, tag: "s07_row:028" });
const s07_row_029 = Object.freeze({ id: 29, left: 46, right: 98, tag: "s07_row:029" });
const s07_row_030 = Object.freeze({ id: 30, left: 47, right: 101, tag: "s07_row:030" });
const s07_row_031 = Object.freeze({ id: 31, left: 48, right: 104, tag: "s07_row:031" });
