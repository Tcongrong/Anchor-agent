const activeSlot = 20 + 3;

function r32(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function normalizeTuple(tuple) {
  return (Array.isArray(tuple) ? tuple : [])
    .slice()
    .sort((left, right) => Number(left.ix || 0) - Number(right.ix || 0))
    .map((row, index) => ({
      ix: Number.isFinite(row.ix) ? row.ix : index,
      k: String(row.k || ""),
      v: String(row.v || ""),
      plain: String(row.plain || "")
    }));
}

function makePlainMap(tuple) {
  const map = new Map();
  for (const row of normalizeTuple(tuple)) {
    map.set(row.k, row.plain);
  }
  return map;
}

function byteSourceRows(tuple, context = {}) {
  const plan = context.bytePlan && typeof context.bytePlan === "object" ? context.bytePlan : {};
  const projection = Array.isArray(context.projection) ? context.projection : [];
  return normalizeTuple(tuple)
    .map((row, index) => ({
      index,
      label: row.k,
      text: row.plain,
      mask: (String(row.v).length + index + activeSlot) & 255
    }))
    .concat(projection.slice(0, 3).map((value, index) => ({
      index: index + 16,
      label: "p" + index,
      text: String(value),
      mask: (String(plan.mode || "").length + index + activeSlot) & 255
    })))
    .concat([{
      index: 31,
      label: "mode",
      text: String(plan.mode || "hardened"),
      mask: Number(plan.length || 0) & 255
    }]);
}

function textToBytes(text, salt) {
  const out = [];
  const normalized = String(text == null ? "" : text).replace(/\s+/g, " ").trim().toLowerCase();
  for (let i = 0; i < normalized.length; i += 1) {
    const code = normalized.charCodeAt(i);
    out.push((code ^ salt ^ i) & 255);
    out.push(((code >>> 3) + salt + i * 17) & 255);
  }
  return out.length ? out : [salt & 255, (salt ^ 0xa5) & 255];
}

function transformByteArray(rows, seed) {
  const source = [];
  for (const row of rows) {
    const salt = (seed + row.index * 29 + row.mask) & 255;
    const bytes = textToBytes(row.label + "=" + row.text, salt);
    for (let i = 0; i < bytes.length; i += 1) {
      const mixed = bytes[i] ^ r32(seed + row.index + i, (i % 5) + 3);
      source.push((mixed + row.mask + i * 11) & 255);
    }
  }
  const output = new Array(12).fill(0);
  for (let i = 0; i < source.length; i += 1) {
    const lane = i % output.length;
    const prev = output[(lane + output.length - 1) % output.length];
    output[lane] = (output[lane] ^ source[i] ^ prev ^ ((seed + i * 13) & 255)) & 255;
    output[lane] = ((output[lane] << 3) | (output[lane] >>> 5)) & 255;
  }
  return output.map((value, index) => (value ^ ((seed >>> (index % 4)) & 255) ^ (index * 19)) & 255);
}

function encodeBytePayload(bytes) {
  return "ba_" + bytes.map((value) => value.toString(16).padStart(2, "0")).join("");
}

function constructByteArrayPayload(tuple, context = {}) {
  const transit = context.transit || {};
  const seed = (activeSlot + normalizeTuple(tuple).length + String(context.actionName || "").length + Number(transit.lane || 0)) & 255;
  const rows = byteSourceRows(tuple, context);
  return encodeBytePayload(transformByteArray(rows, seed));
}

function createSource(tuple, c, context) {
  const map = makePlainMap(tuple);
  const parts = [];
  for (const item of c.order) {
    const key = c.keys[item];
    const value = map.has(key) ? map.get(key) : "";
    parts.push(key + c.sep + value.length + c.sep + value);
  }
  const transit = context && context.transit
    ? String((context.transit.left ^ context.transit.right ^ context.transit.lane) >>> 0)
    : "0";
  parts.push("x" + c.sep + String(parts.length));
  parts.push("r" + c.sep + transit.length);
  return parts.join(c.joiner);
}

function createReducer(c) {
  return function slotReducer(tuple, context = {}) {
    const text = createSource(tuple, c, context);
    let a = (c.a ^ text.length ^ c.slot) >>> 0;
    let b = (c.b + c.slot + text.length) >>> 0;
    let d = (c.d ^ (c.slot << 7)) >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      const ch = text.charCodeAt(i);
      a = Math.imul(a ^ ch ^ i, c.m1) >>> 0;
      a = r32(a, ((i + c.slot) % 13) + 5);
      b = Math.imul((b + ch + r32(a, (i % 7) + 3)) >>> 0, c.m2) >>> 0;
      d = Math.imul((d + b + r32(ch ^ a, 3)) >>> 0, c.m3) >>> 0;
    }
    const out = ((a ^ b ^ d) >>> 0)
      .toString(36)
      .padStart(8, "0")
      .slice(-8);
    return c.prefix + out;
  };
}

const slotConfigs = [
  {
    slot: 0,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "~",
    prefix: "ut_",
    a: 0x6d2b79f5,
    b: 0x1b873593,
    d: 0x85ebca6b,
    m1: 0x7feb352d,
    m2: 0x846ca68b,
    m3: 0x9e3779b1
  },
  {
    slot: 1,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79f4,
    b: 0x1b8735f4,
    d: 0x85ebca7b,
    m1: 0x7feb3520,
    m2: 0x846ca69c,
    m3: 0x9e3779ae
  },
  {
    slot: 2,
    order: [5, 0, 1, 2, 3, 4],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79f7,
    b: 0x1b873655,
    d: 0x85ebca4b,
    m1: 0x7feb3537,
    m2: 0x846ca6ad,
    m3: 0x9e37798f
  },
  {
    slot: 3,
    order: [4, 5, 0, 1, 2, 3],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79f6,
    b: 0x1b8736b6,
    d: 0x85ebca5b,
    m1: 0x7feb350a,
    m2: 0x846ca6be,
    m3: 0x9e3779ec
  },
  {
    slot: 4,
    order: [3, 4, 5, 0, 1, 2],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ut_",
    a: 0x6d2b79f1,
    b: 0x1b873717,
    d: 0x85ebca2b,
    m1: 0x7feb3519,
    m2: 0x846ca6cf,
    m3: 0x9e3779cd
  },
  {
    slot: 5,
    order: [2, 3, 4, 5, 0, 1],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79f0,
    b: 0x1b873778,
    d: 0x85ebca3b,
    m1: 0x7feb356c,
    m2: 0x846ca6e0,
    m3: 0x9e37792a
  },
  {
    slot: 6,
    order: [1, 2, 3, 4, 5, 0],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79f3,
    b: 0x1b8737d9,
    d: 0x85ebca0b,
    m1: 0x7feb3563,
    m2: 0x846ca6f1,
    m3: 0x9e37790b
  },
  {
    slot: 7,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79f2,
    b: 0x1b87383a,
    d: 0x85ebca1b,
    m1: 0x7feb3576,
    m2: 0x846ca702,
    m3: 0x9e377968
  },
  {
    slot: 8,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ut_",
    a: 0x6d2b79fd,
    b: 0x1b87389b,
    d: 0x85ebcaeb,
    m1: 0x7feb3545,
    m2: 0x846ca713,
    m3: 0x9e377949
  },
  {
    slot: 9,
    order: [5, 0, 1, 2, 3, 4],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79fc,
    b: 0x1b8738fc,
    d: 0x85ebcafb,
    m1: 0x7feb3558,
    m2: 0x846ca724,
    m3: 0x9e3778a6
  },
  {
    slot: 10,
    order: [4, 5, 0, 1, 2, 3],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79ff,
    b: 0x1b87395d,
    d: 0x85ebcacb,
    m1: 0x7feb35af,
    m2: 0x846ca735,
    m3: 0x9e377887
  },
  {
    slot: 11,
    order: [3, 4, 5, 0, 1, 2],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79fe,
    b: 0x1b8739be,
    d: 0x85ebcadb,
    m1: 0x7feb35a2,
    m2: 0x846ca746,
    m3: 0x9e3778e4
  },
  {
    slot: 12,
    order: [2, 3, 4, 5, 0, 1],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "~",
    prefix: "ut_",
    a: 0x6d2b79f9,
    b: 0x1b873a1f,
    d: 0x85ebcaab,
    m1: 0x7feb35b1,
    m2: 0x846ca757,
    m3: 0x9e3778c5
  },
  {
    slot: 13,
    order: [1, 2, 3, 4, 5, 0],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79f8,
    b: 0x1b873a80,
    d: 0x85ebcabb,
    m1: 0x7feb3584,
    m2: 0x846ca768,
    m3: 0x9e377822
  },
  {
    slot: 14,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79fb,
    b: 0x1b873ae1,
    d: 0x85ebca8b,
    m1: 0x7feb359b,
    m2: 0x846ca779,
    m3: 0x9e377803
  },
  {
    slot: 15,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79fa,
    b: 0x1b873b42,
    d: 0x85ebca9b,
    m1: 0x7feb35ee,
    m2: 0x846ca78a,
    m3: 0x9e377860
  },
  {
    slot: 16,
    order: [5, 0, 1, 2, 3, 4],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ut_",
    a: 0x6d2b79e5,
    b: 0x1b873ba3,
    d: 0x85ebcb6b,
    m1: 0x7feb35fd,
    m2: 0x846ca79b,
    m3: 0x9e377841
  },
  {
    slot: 17,
    order: [4, 5, 0, 1, 2, 3],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79e4,
    b: 0x1b873c04,
    d: 0x85ebcb7b,
    m1: 0x7feb35f0,
    m2: 0x846ca7ac,
    m3: 0x9e377bbe
  },
  {
    slot: 18,
    order: [3, 4, 5, 0, 1, 2],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79e7,
    b: 0x1b873c65,
    d: 0x85ebcb4b,
    m1: 0x7feb35c7,
    m2: 0x846ca7bd,
    m3: 0x9e377b9f
  },
  {
    slot: 19,
    order: [2, 3, 4, 5, 0, 1],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79e6,
    b: 0x1b873cc6,
    d: 0x85ebcb5b,
    m1: 0x7feb35da,
    m2: 0x846ca7ce,
    m3: 0x9e377bfc
  },
  {
    slot: 20,
    order: [1, 2, 3, 4, 5, 0],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ut_",
    a: 0x6d2b79e1,
    b: 0x1b873d27,
    d: 0x85ebcb2b,
    m1: 0x7feb3429,
    m2: 0x846ca7df,
    m3: 0x9e377bdd
  },
  {
    slot: 21,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79e0,
    b: 0x1b873d88,
    d: 0x85ebcb3b,
    m1: 0x7feb343c,
    m2: 0x846ca7f0,
    m3: 0x9e377b3a
  },
  {
    slot: 22,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79e3,
    b: 0x1b873de9,
    d: 0x85ebcb0b,
    m1: 0x7feb3433,
    m2: 0x846ca801,
    m3: 0x9e377b1b
  },
  {
    slot: 23,
    order: [0, 2, 3, 1, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ut_",
    a: 0x6d2b79e2,
    b: 0x1b873e4a,
    d: 0x85ebcb1b,
    m1: 0x7feb3406,
    m2: 0x846ca812,
    m3: 0x9e377b78
  },
  {
    slot: 24,
    order: [4, 5, 0, 1, 2, 3],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "~",
    prefix: "ut_",
    a: 0x6d2b79ed,
    b: 0x1b873eab,
    d: 0x85ebcbeb,
    m1: 0x7feb3415,
    m2: 0x846ca823,
    m3: 0x9e377b59
  },
  {
    slot: 25,
    order: [3, 4, 5, 0, 1, 2],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79ec,
    b: 0x1b873f0c,
    d: 0x85ebcbfb,
    m1: 0x7feb3468,
    m2: 0x846ca834,
    m3: 0x9e377ab6
  },
  {
    slot: 26,
    order: [2, 3, 4, 5, 0, 1],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79ef,
    b: 0x1b873f6d,
    d: 0x85ebcbcb,
    m1: 0x7feb347f,
    m2: 0x846ca845,
    m3: 0x9e377a97
  },
  {
    slot: 27,
    order: [1, 2, 3, 4, 5, 0],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79ee,
    b: 0x1b873fce,
    d: 0x85ebcbdb,
    m1: 0x7feb3472,
    m2: 0x846ca856,
    m3: 0x9e377af4
  },
  {
    slot: 28,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "|",
    prefix: "ut_",
    a: 0x6d2b79e9,
    b: 0x1b87402f,
    d: 0x85ebcbab,
    m1: 0x7feb3441,
    m2: 0x846ca867,
    m3: 0x9e377ad5
  },
  {
    slot: 29,
    order: [0, 1, 2, 3, 4, 5],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79e8,
    b: 0x1b874090,
    d: 0x85ebcbbb,
    m1: 0x7feb3454,
    m2: 0x846ca878,
    m3: 0x9e377a32
  },
  {
    slot: 30,
    order: [5, 0, 1, 2, 3, 4],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ".",
    joiner: "~",
    prefix: "ux_",
    a: 0x6d2b79eb,
    b: 0x1b8740f1,
    d: 0x85ebcb8b,
    m1: 0x7feb34ab,
    m2: 0x846ca889,
    m3: 0x9e377a13
  },
  {
    slot: 31,
    order: [4, 5, 0, 1, 2, 3],
    keys: ["n", "d", "c", "e", "s", "l"],
    sep: ":",
    joiner: "|",
    prefix: "ux_",
    a: 0x6d2b79ea,
    b: 0x1b874152,
    d: 0x85ebcb9b,
    m1: 0x7feb34be,
    m2: 0x846ca89a,
    m3: 0x9e377a70
  }
];

const reducers = new Map();
for (const config of slotConfigs) {
  reducers.set(config.slot, createReducer(config));
}

const selectedReducer = reducers.get(activeSlot);

export function u(tuple, context = {}) {
  return constructByteArrayPayload(tuple, context);
}

export function y(slot, tuple, context = {}) {
  const chosen = reducers.get(slot) || reducers.get(0);
  return chosen(tuple, context);
}

export function z() {
  return {
    activeSlot,
    slots: slotConfigs.map((config) => config.slot),
    count: reducers.size
  };
}
const t9_160 = "intake-row:k7\q3\t9.js:160";
const t9_161 = "manifest-slot:k7\q3\t9.js:161";
const t9_162 = "ledger-entry:k7\q3\t9.js:162";
const t9_163 = "shard-label:k7\q3\t9.js:163";
const t9_164 = "codec-field:k7\q3\t9.js:164";
const t9_165 = "queue-item:k7\q3\t9.js:165";
const t9_166 = "batch-tag:k7\q3\t9.js:166";
const t9_167 = "audit-line:k7\q3\t9.js:167";
const t9_168 = "intake-row:k7\q3\t9.js:168";
const t9_169 = "manifest-slot:k7\q3\t9.js:169";
const t9_170 = "ledger-entry:k7\q3\t9.js:170";
const t9_171 = "shard-label:k7\q3\t9.js:171";
const t9_172 = "codec-field:k7\q3\t9.js:172";
const t9_173 = "queue-item:k7\q3\t9.js:173";
const t9_174 = "batch-tag:k7\q3\t9.js:174";
const t9_175 = "audit-line:k7\q3\t9.js:175";
const t9_176 = "intake-row:k7\q3\t9.js:176";
const t9_177 = "manifest-slot:k7\q3\t9.js:177";
const t9_178 = "ledger-entry:k7\q3\t9.js:178";
const t9_179 = "shard-label:k7\q3\t9.js:179";
const t9_180 = "codec-field:k7\q3\t9.js:180";
const t9_181 = "queue-item:k7\q3\t9.js:181";
const t9_182 = "batch-tag:k7\q3\t9.js:182";
const t9_183 = "audit-line:k7\q3\t9.js:183";
const t9_184 = "intake-row:k7\q3\t9.js:184";
const t9_185 = "manifest-slot:k7\q3\t9.js:185";
const t9_186 = "ledger-entry:k7\q3\t9.js:186";
const t9_187 = "shard-label:k7\q3\t9.js:187";
const t9_188 = "codec-field:k7\q3\t9.js:188";
const t9_189 = "queue-item:k7\q3\t9.js:189";
const t9_190 = "batch-tag:k7\q3\t9.js:190";
const t9_191 = "audit-line:k7\q3\t9.js:191";
const t9_192 = "intake-row:k7\q3\t9.js:192";
