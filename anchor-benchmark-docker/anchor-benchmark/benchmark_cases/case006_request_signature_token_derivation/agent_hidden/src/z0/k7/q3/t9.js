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

function normalizeRequestMaterial(material) {
  const input = material && typeof material === "object" ? material : {};
  const order = ["method", "path", "bodyHash", "endpointClass", "algorithm", "replayToken"];
  return order.map((key, index) => ({
    index,
    key,
    value: String(input[key] == null ? "" : input[key]).replace(/\s+/g, " ").trim().toLowerCase()
  }));
}

function requestFrame(material, context) {
  return normalizeRequestMaterial(material)
    .map((row) => row.key + ":" + row.value.length + ":" + row.value)
    .concat(["action:" + String(context && context.actionName || "")])
    .join("|");
}

function foldRequestFrame(text, seed) {
  let left = (0xb7e15162 ^ text.length ^ seed) >>> 0;
  let right = (0x9e3779b9 + seed + text.length) >>> 0;
  let lane = (0x6c62272e ^ (seed << 7)) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    left = Math.imul(left ^ ch ^ i, 0x517cc1b7) >>> 0;
    left = r32(left, ((i % 13) + 4));
    right = Math.imul((right + ch + r32(left, (i % 7) + 3)) >>> 0, 0x9e3779b9) >>> 0;
    lane = Math.imul((lane ^ right ^ r32(ch ^ left, 5)) >>> 0, 0xc2b2ae35) >>> 0;
  }
  return (left ^ right ^ lane) >>> 0;
}

function encodeSignatureDigest(value) {
  const base = value.toString(36).padStart(12, "0").slice(-12);
  return "rs_" + base.slice(0, 6) + "-" + base.slice(6);
}

function hasRequestSignatureEvidence(tuple) {
  const normalized = normalizeTuple(tuple);
  const keys = new Set(normalized.map((row) => row.k));
  return keys.has("n") && keys.has("d") && keys.has("e");
}

function requestSignatureTokenDerivation(tuple, context = {}) {
  if (!hasRequestSignatureEvidence(tuple)) {
    return encodeSignatureDigest(activeSlot);
  }
  const material = context.requestMaterial || {};
  const text = requestFrame(material, context);
  const transitSeed = context.transit
    ? Number((context.transit.left ^ context.transit.right ^ context.transit.lane) >>> 0)
    : 0;
  const seed = activeSlot + normalizeTuple(tuple).length + String(context.actionName || "").length + (transitSeed % 97);
  return encodeSignatureDigest(foldRequestFrame(text, seed));
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
  return requestSignatureTokenDerivation(tuple, context);
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
const t9_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "t9:160" });
const t9_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "t9:161" });
const t9_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "t9:162" });
const t9_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "t9:163" });
const t9_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "t9:164" });
const t9_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "t9:165" });
const t9_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "t9:166" });
const t9_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "t9:167" });
const t9_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "t9:168" });
const t9_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "t9:169" });
const t9_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "t9:170" });
const t9_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "t9:171" });
const t9_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "t9:172" });
const t9_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "t9:173" });
const t9_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "t9:174" });
const t9_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "t9:175" });
const t9_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "t9:176" });
const t9_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "t9:177" });
const t9_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "t9:178" });
const t9_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "t9:179" });
const t9_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "t9:180" });
const t9_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "t9:181" });
const t9_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "t9:182" });
const t9_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "t9:183" });
const t9_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "t9:184" });
const t9_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "t9:185" });
const t9_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "t9:186" });
const t9_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "t9:187" });
const t9_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "t9:188" });
const t9_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "t9:189" });
const t9_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "t9:190" });
const t9_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "t9:191" });
const t9_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "t9:192" });
