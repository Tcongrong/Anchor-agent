const activeSlot = 20 + 3;
function fromCodes(codes) {
  return codes.map((value) => String.fromCharCode(value)).join("");
}
function rot(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}
function normalizeTuple(tuple) {
  return (Array.isArray(tuple) ? tuple : []).slice().sort((left, right) => Number(left.ix || 0) - Number(right.ix || 0)).map((row, index) => ({
    ix: Number.isFinite(row.ix) ? row.ix : index,
    k: String(row.k || ""),
    v: String(row.v || ""),
    plain: String(row.plain || "")
  }));
}
function mapRows(tuple) {
  const map = new Map();
  for (const row of normalizeTuple(tuple)) {
    map.set(row.k, row.plain);
  }
  return map;
}
function createSource(input, config, context) {
  const map = mapRows(input);
  const parts = [];
  for (let i = 0; i < config.order.length; i += 1) {
    const idx = config.order[i];
    const key = config.keys[idx] || String(idx);
    const value = map.has(key) ? String(map.get(key)) : "";
    parts.push(i + config.sep + key + config.sep + value.length + config.sep + value);
  }
  const transit = context && context.transit ? context.transit : { left: 0, right: 0, lane: 0 };
  const stats = context && context.stats ? context.stats : {};
  parts.push("x" + config.sep + String((Number(transit.left || 0) ^ Number(transit.right || 0) ^ Number(transit.lane || 0)) >>> 0));
  parts.push("y" + config.sep + String(Number(stats.headings || 0) + Number(stats.lists || 0) + Number(stats.fences || 0)));
  parts.push("q" + config.sep + String(context && context.routeSalt || ""));
  parts.push("z" + config.sep + String(context && context.queueLane || ""));
  return parts.join(config.joiner);
}
function valueOf(map, key, fallback = "") {
  return map.has(key) ? String(map.get(key)) : fallback;
}
function requestEndpoint(policy, context) {
  if (context && context.requestSpec && context.requestSpec.endpoint) return String(context.requestSpec.endpoint);
  if (policy === "restricted") return "/archive/intake";
  if (policy === "partner") return "/partner/dispatch";
  return "/ledger/intake";
}
function requestMethod(policy, context) {
  if (context && context.requestSpec && context.requestSpec.method) return String(context.requestSpec.method);
  return policy === "partner" ? "PUT" : "POST";
}
export function u(config) {
  return function r(input, context = {}) {
    const map = mapRows(input);
    const text = createSource(input, config, context);
    let a = (config.a ^ text.length ^ config.slot) >>> 0;
    let b = (config.b + config.slot + text.length + config.bias) >>> 0;
    let c = (config.c ^ (config.slot << 7) ^ config.bias) >>> 0;
    for (let i = 0; i < text.length; i += 1) {
      const n = text.charCodeAt(i);
      const k = (n + i + config.bias) >>> 0;
      a = Math.imul((a ^ k ^ (i << 1)) >>> 0, config.m1) >>> 0;
      a = rot(a, ((i + config.slot) % 13) + 5);
      b = rot(b, 7);
      b = Math.imul((b + a + n + k) >>> 0, config.m2) >>> 0;
      c = (c ^ ((a >>> 3) + (b << 5) + n + rot(k, (i % 9) + 1))) >>> 0;
    }
    const tail = (a.toString(36).padStart(6, "0") + b.toString(36).padStart(6, "0") + c.toString(36).padStart(6, "0")).slice(-12);
    const policy = valueOf(map, "m", "standard");
    const sealed = valueOf(map, "g", "0") === "1";
    const priority = valueOf(map, "h", "normal");
    const amountCents = Math.max(0, Number.parseInt(valueOf(map, "f", "0"), 10) || 0);
    const requestId = fromCodes([114, 113, 95]) + tail;
    const headers = {
      "content-type": "application/json",
      "x-request-ticket": requestId,
      "x-review-priority": priority,
      "x-policy-profile": policy,
      "x-transform-stage": String(context.queueGate || "queued")
    };
    if (sealed) headers["x-request-seal"] = fromCodes([115, 101, 97, 108, 101, 100]);
    return {
      method: requestMethod(policy, context),
      endpoint: requestEndpoint(policy, context),
      headers,
      body: {
        file_name: valueOf(map, "t", "request.bin"),
        customer: valueOf(map, "w", "northwind"),
        category: valueOf(map, "l", "general"),
        amount_cents: amountCents,
        note: valueOf(map, "c", ""),
        sealed
      }
    };
  };
}
const slotConfigs = [
  { slot: 0, order: [0, 1, 2, 3, 4, 5, 6, 7, 8], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b79fe, b: 0x1b873582, c: 0x85ebca7c, m1: 0x7feb352d, m2: 0x846ca68b, bias: 37 },
  { slot: 1, order: [1, 2, 3, 4, 5, 6, 7, 8, 0], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 120, 95], a: 0x6d2b7999, b: 0x1b873541, c: 0x85ebcbf7, m1: 0x7feb352d, m2: 0x846ca68b, bias: 40 },
  { slot: 2, order: [2, 3, 4, 5, 6, 7, 8, 0, 1], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7938, b: 0x1b873400, c: 0x85ebc94a, m1: 0x7feb352d, m2: 0x846ca68b, bias: 43 },
  { slot: 3, order: [3, 4, 5, 6, 7, 8, 0, 1, 2], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b78db, b: 0x1b8737c7, c: 0x85ebcecd, m1: 0x7feb352d, m2: 0x846ca68b, bias: 46 },
  { slot: 4, order: [4, 5, 6, 7, 8, 0, 1, 2, 3], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b787a, b: 0x1b873686, c: 0x85ebcc40, m1: 0x7feb352d, m2: 0x846ca68b, bias: 49 },
  { slot: 5, order: [5, 6, 7, 8, 0, 1, 2, 3, 4], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 120, 95], a: 0x6d2b7805, b: 0x1b873645, c: 0x85ebcddb, m1: 0x7feb352d, m2: 0x846ca68b, bias: 52 },
  { slot: 6, order: [6, 7, 8, 0, 1, 2, 3, 4, 5], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b7ba4, b: 0x1b873104, c: 0x85ebc35e, m1: 0x7feb352d, m2: 0x846ca68b, bias: 55 },
  { slot: 7, order: [7, 8, 0, 1, 2, 3, 4, 5, 6], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7b47, b: 0x1b8730cb, c: 0x85ebc0d1, m1: 0x7feb352d, m2: 0x846ca68b, bias: 58 },
  { slot: 8, order: [8, 0, 1, 2, 3, 4, 5, 6, 7], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7ae6, b: 0x1b87338a, c: 0x85ebc654, m1: 0x7feb352d, m2: 0x846ca68b, bias: 61 },
  { slot: 9, order: [0, 1, 2, 3, 4, 5, 6, 7, 8], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "~", prefixCodes: [100, 120, 95], a: 0x6d2b7a81, b: 0x1b873349, c: 0x85ebc7af, m1: 0x7feb352d, m2: 0x846ca68b, bias: 64 },
  { slot: 10, order: [1, 2, 3, 4, 5, 6, 7, 8, 0], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7a20, b: 0x1b873208, c: 0x85ebc522, m1: 0x7feb352d, m2: 0x846ca68b, bias: 67 },
  { slot: 11, order: [2, 3, 4, 5, 6, 7, 8, 0, 1], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7dc3, b: 0x1b873dcf, c: 0x85ebdaa5, m1: 0x7feb352d, m2: 0x846ca68b, bias: 70 },
  { slot: 12, order: [3, 4, 5, 6, 7, 8, 0, 1, 2], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b7d62, b: 0x1b873c8e, c: 0x85ebd838, m1: 0x7feb352d, m2: 0x846ca68b, bias: 73 },
  { slot: 13, order: [4, 5, 6, 7, 8, 0, 1, 2, 3], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 120, 95], a: 0x6d2b7d0d, b: 0x1b873c4d, c: 0x85ebd9b3, m1: 0x7feb352d, m2: 0x846ca68b, bias: 76 },
  { slot: 14, order: [5, 6, 7, 8, 0, 1, 2, 3, 4], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7cac, b: 0x1b873f0c, c: 0x85ebdf36, m1: 0x7feb352d, m2: 0x846ca68b, bias: 79 },
  { slot: 15, order: [6, 7, 8, 0, 1, 2, 3, 4, 5], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b7c4f, b: 0x1b873ef3, c: 0x85ebdc89, m1: 0x7feb352d, m2: 0x846ca68b, bias: 82 },
  { slot: 16, order: [7, 8, 0, 1, 2, 3, 4, 5, 6], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7fee, b: 0x1b8739b2, c: 0x85ebd20c, m1: 0x7feb352d, m2: 0x846ca68b, bias: 85 },
  { slot: 17, order: [8, 0, 1, 2, 3, 4, 5, 6, 7], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 120, 95], a: 0x6d2b7f89, b: 0x1b873971, c: 0x85ebd387, m1: 0x7feb352d, m2: 0x846ca68b, bias: 88 },
  { slot: 18, order: [0, 1, 2, 3, 4, 5, 6, 7, 8], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b7f28, b: 0x1b873830, c: 0x85ebd11a, m1: 0x7feb352d, m2: 0x846ca68b, bias: 91 },
  { slot: 19, order: [1, 2, 3, 4, 5, 6, 7, 8, 0], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7ecb, b: 0x1b873bf7, c: 0x85ebd69d, m1: 0x7feb352d, m2: 0x846ca68b, bias: 94 },
  { slot: 20, order: [2, 3, 4, 5, 6, 7, 8, 0, 1], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7e6a, b: 0x1b873ab6, c: 0x85ebd410, m1: 0x7feb352d, m2: 0x846ca68b, bias: 97 },
  { slot: 21, order: [3, 4, 5, 6, 7, 8, 0, 1, 2], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "~", prefixCodes: [100, 120, 95], a: 0x6d2b71f5, b: 0x1b873a75, c: 0x85ebea6b, m1: 0x7feb352d, m2: 0x846ca68b, bias: 100 },
  { slot: 22, order: [4, 5, 6, 7, 8, 0, 1, 2, 3], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7194, b: 0x1b872534, c: 0x85ebebee, m1: 0x7feb352d, m2: 0x846ca68b, bias: 103 },
  { slot: 23, order: [0, 2, 3, 1, 4, 5, 6, 7, 8], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [102, 112, 95], a: 0x6d2b7137, b: 0x1b8724fb, c: 0x85ebe961, m1: 0x7feb352d, m2: 0x846ca68b, bias: 106 },
  { slot: 24, order: [6, 7, 8, 0, 1, 2, 3, 4, 5], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b70d6, b: 0x1b8727ba, c: 0x85ebeee4, m1: 0x7feb352d, m2: 0x846ca68b, bias: 109 },
  { slot: 25, order: [7, 8, 0, 1, 2, 3, 4, 5, 6], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 120, 95], a: 0x6d2b7071, b: 0x1b872779, c: 0x85ebec7f, m1: 0x7feb352d, m2: 0x846ca68b, bias: 112 },
  { slot: 26, order: [8, 0, 1, 2, 3, 4, 5, 6, 7], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7010, b: 0x1b872638, c: 0x85ebedf2, m1: 0x7feb352d, m2: 0x846ca68b, bias: 115 },
  { slot: 27, order: [0, 1, 2, 3, 4, 5, 6, 7, 8], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b73b3, b: 0x1b8721ff, c: 0x85ebe375, m1: 0x7feb352d, m2: 0x846ca68b, bias: 118 },
  { slot: 28, order: [1, 2, 3, 4, 5, 6, 7, 8, 0], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b7352, b: 0x1b8720be, c: 0x85ebe0c8, m1: 0x7feb352d, m2: 0x846ca68b, bias: 121 },
  { slot: 29, order: [2, 3, 4, 5, 6, 7, 8, 0, 1], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 120, 95], a: 0x6d2b72fd, b: 0x1b87207d, c: 0x85ebe643, m1: 0x7feb352d, m2: 0x846ca68b, bias: 124 },
  { slot: 30, order: [3, 4, 5, 6, 7, 8, 0, 1, 2], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ".", joiner: "~", prefixCodes: [100, 115, 95], a: 0x6d2b729c, b: 0x1b87233c, c: 0x85ebe7c6, m1: 0x7feb352d, m2: 0x846ca68b, bias: 127 },
  { slot: 31, order: [4, 5, 6, 7, 8, 0, 1, 2, 3], keys: ["t", "m", "g", "h", "l", "f", "w", "c", "r"], sep: ":", joiner: "|", prefixCodes: [100, 115, 95], a: 0x6d2b723f, b: 0x1b8722e3, c: 0x85ebe559, m1: 0x7feb352d, m2: 0x846ca68b, bias: 130 },
];
const reducers = new Map();
for (const config of slotConfigs) {
  reducers.set(config.slot, u(config));
}
export const g = slotConfigs;
export function y(slot, input, context = {}) {
  const chosen = reducers.get(slot) || reducers.get(0);
  const payload = chosen(input, context);
  return payload && payload.headers ? payload.headers["x-request-ticket"] : String(payload);
}
export function z() {
  return { activeSlot, count: reducers.size, slots: slotConfigs.map((config) => config.slot) };
}
const t9_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "t9:000" });
const t9_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "t9:001" });
const t9_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "t9:002" });
const t9_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "t9:003" });
const t9_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "t9:004" });
const t9_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "t9:005" });
const t9_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "t9:006" });
const t9_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "t9:007" });
const t9_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "t9:008" });
const t9_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "t9:009" });
const t9_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "t9:010" });
const t9_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "t9:011" });
const t9_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "t9:012" });
const t9_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "t9:013" });
const t9_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "t9:014" });
const t9_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "t9:015" });
const t9_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "t9:016" });
const t9_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "t9:017" });
const t9_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "t9:018" });
const t9_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "t9:019" });
const t9_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "t9:020" });
const t9_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "t9:021" });
const t9_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "t9:022" });
const t9_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "t9:023" });
const t9_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "t9:024" });
const t9_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "t9:025" });
const t9_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "t9:026" });
const t9_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "t9:027" });
const t9_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "t9:028" });
const t9_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "t9:029" });
const t9_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "t9:030" });
const t9_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "t9:031" });
const t9_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "t9:032" });
const t9_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "t9:033" });
const t9_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "t9:034" });
const t9_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "t9:035" });
const t9_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "t9:036" });
const t9_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "t9:037" });
const t9_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "t9:038" });
const t9_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "t9:039" });
const t9_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "t9:040" });
const t9_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "t9:041" });
const t9_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "t9:042" });
const t9_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "t9:043" });
const t9_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "t9:044" });
const t9_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "t9:045" });
const t9_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "t9:046" });
const t9_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "t9:047" });
const t9_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "t9:048" });
const t9_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "t9:049" });
const t9_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "t9:050" });
const t9_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "t9:051" });
const t9_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "t9:052" });
const t9_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "t9:053" });
const t9_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "t9:054" });
const t9_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "t9:055" });
const t9_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "t9:056" });
const t9_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "t9:057" });
const t9_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "t9:058" });
const t9_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "t9:059" });
const t9_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "t9:060" });
const t9_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "t9:061" });
const t9_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "t9:062" });
const t9_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "t9:063" });
const t9_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "t9:064" });
const t9_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "t9:065" });
const t9_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "t9:066" });
const t9_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "t9:067" });
const t9_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "t9:068" });
const t9_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "t9:069" });
const t9_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "t9:070" });
const t9_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "t9:071" });
const t9_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "t9:072" });
const t9_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "t9:073" });
const t9_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "t9:074" });
const t9_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "t9:075" });
const t9_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "t9:076" });
const t9_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "t9:077" });
const t9_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "t9:078" });
const t9_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "t9:079" });
const t9_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "t9:080" });
const t9_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "t9:081" });
const t9_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "t9:082" });
const t9_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "t9:083" });
const t9_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "t9:084" });
const t9_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "t9:085" });
const t9_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "t9:086" });
const t9_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "t9:087" });
const t9_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "t9:088" });
const t9_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "t9:089" });
const t9_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "t9:090" });
const t9_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "t9:091" });
const t9_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "t9:092" });
const t9_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "t9:093" });
const t9_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "t9:094" });
const t9_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "t9:095" });
const t9_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "t9:096" });
const t9_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "t9:097" });
const t9_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "t9:098" });
const t9_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "t9:099" });
const t9_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "t9:100" });
const t9_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "t9:101" });
const t9_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "t9:102" });
const t9_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "t9:103" });
const t9_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "t9:104" });
const t9_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "t9:105" });
const t9_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "t9:106" });
const t9_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "t9:107" });
const t9_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "t9:108" });
const t9_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "t9:109" });
const t9_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "t9:110" });
const t9_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "t9:111" });
const t9_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "t9:112" });
const t9_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "t9:113" });
const t9_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "t9:114" });
const t9_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "t9:115" });
const t9_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "t9:116" });
const t9_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "t9:117" });
const t9_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "t9:118" });
const t9_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "t9:119" });
const t9_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "t9:120" });
const t9_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "t9:121" });
const t9_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "t9:122" });
const t9_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "t9:123" });
const t9_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "t9:124" });
const t9_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "t9:125" });
const t9_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "t9:126" });
const t9_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "t9:127" });
const t9_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "t9:128" });
const t9_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "t9:129" });
const t9_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "t9:130" });
const t9_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "t9:131" });
const t9_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "t9:132" });
const t9_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "t9:133" });
const t9_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "t9:134" });
const t9_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "t9:135" });
const t9_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "t9:136" });
const t9_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "t9:137" });
const t9_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "t9:138" });
const t9_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "t9:139" });
const t9_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "t9:140" });
const t9_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "t9:141" });
const t9_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "t9:142" });
const t9_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "t9:143" });
const t9_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "t9:144" });
const t9_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "t9:145" });
const t9_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "t9:146" });
const t9_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "t9:147" });
const t9_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "t9:148" });
const t9_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "t9:149" });
const t9_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "t9:150" });
const t9_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "t9:151" });
const t9_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "t9:152" });
const t9_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "t9:153" });
const t9_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "t9:154" });
const t9_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "t9:155" });
const t9_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "t9:156" });
const t9_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "t9:157" });
const t9_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "t9:158" });
const t9_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "t9:159" });
const t9_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "t9:160" });
const t9_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "t9:161" });
const t9_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "t9:162" });
const t9_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "t9:163" });
const t9_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "t9:164" });
const t9_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "t9:165" });
const t9_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "t9:166" });
const t9_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "t9:167" });
const t9_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "t9:168" });
const t9_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "t9:169" });
const t9_row_170 = Object.freeze({ id: 170, left: 2901, right: 4953, tag: "t9:170" });
const t9_row_171 = Object.freeze({ id: 171, left: 2918, right: 4982, tag: "t9:171" });
const t9_row_172 = Object.freeze({ id: 172, left: 2935, right: 5011, tag: "t9:172" });
const t9_row_173 = Object.freeze({ id: 173, left: 2952, right: 5040, tag: "t9:173" });
const t9_row_174 = Object.freeze({ id: 174, left: 2969, right: 5069, tag: "t9:174" });
const t9_row_175 = Object.freeze({ id: 175, left: 2986, right: 5098, tag: "t9:175" });
const t9_row_176 = Object.freeze({ id: 176, left: 3003, right: 5127, tag: "t9:176" });
const t9_row_177 = Object.freeze({ id: 177, left: 3020, right: 5156, tag: "t9:177" });
const t9_row_178 = Object.freeze({ id: 178, left: 3037, right: 5185, tag: "t9:178" });
const t9_row_179 = Object.freeze({ id: 179, left: 3054, right: 5214, tag: "t9:179" });
const t9_row_180 = Object.freeze({ id: 180, left: 3071, right: 5243, tag: "t9:180" });
const t9_row_181 = Object.freeze({ id: 181, left: 3088, right: 5272, tag: "t9:181" });
const t9_row_182 = Object.freeze({ id: 182, left: 3105, right: 5301, tag: "t9:182" });
const t9_row_183 = Object.freeze({ id: 183, left: 3122, right: 5330, tag: "t9:183" });
const t9_row_184 = Object.freeze({ id: 184, left: 3139, right: 5359, tag: "t9:184" });
const t9_row_185 = Object.freeze({ id: 185, left: 3156, right: 5388, tag: "t9:185" });
const t9_row_186 = Object.freeze({ id: 186, left: 3173, right: 5417, tag: "t9:186" });
const t9_row_187 = Object.freeze({ id: 187, left: 3190, right: 5446, tag: "t9:187" });
const t9_row_188 = Object.freeze({ id: 188, left: 3207, right: 5475, tag: "t9:188" });
const t9_row_189 = Object.freeze({ id: 189, left: 3224, right: 5504, tag: "t9:189" });
const t9_row_190 = Object.freeze({ id: 190, left: 3241, right: 5533, tag: "t9:190" });
const t9_row_191 = Object.freeze({ id: 191, left: 3258, right: 5562, tag: "t9:191" });
const t9_row_192 = Object.freeze({ id: 192, left: 3275, right: 5591, tag: "t9:192" });
const t9_row_193 = Object.freeze({ id: 193, left: 3292, right: 5620, tag: "t9:193" });
const t9_row_194 = Object.freeze({ id: 194, left: 3309, right: 5649, tag: "t9:194" });
const t9_row_195 = Object.freeze({ id: 195, left: 3326, right: 5678, tag: "t9:195" });
const t9_row_196 = Object.freeze({ id: 196, left: 3343, right: 5707, tag: "t9:196" });
const t9_row_197 = Object.freeze({ id: 197, left: 3360, right: 5736, tag: "t9:197" });
const t9_row_198 = Object.freeze({ id: 198, left: 3377, right: 5765, tag: "t9:198" });
const t9_row_199 = Object.freeze({ id: 199, left: 3394, right: 5794, tag: "t9:199" });
const t9_row_200 = Object.freeze({ id: 200, left: 3411, right: 5823, tag: "t9:200" });
const t9_row_201 = Object.freeze({ id: 201, left: 3428, right: 5852, tag: "t9:201" });
const t9_row_202 = Object.freeze({ id: 202, left: 3445, right: 5881, tag: "t9:202" });
const t9_row_203 = Object.freeze({ id: 203, left: 3462, right: 5910, tag: "t9:203" });
const t9_row_204 = Object.freeze({ id: 204, left: 3479, right: 5939, tag: "t9:204" });
const t9_row_205 = Object.freeze({ id: 205, left: 3496, right: 5968, tag: "t9:205" });
const t9_row_206 = Object.freeze({ id: 206, left: 3513, right: 5997, tag: "t9:206" });
const t9_row_207 = Object.freeze({ id: 207, left: 3530, right: 6026, tag: "t9:207" });
const t9_row_208 = Object.freeze({ id: 208, left: 3547, right: 6055, tag: "t9:208" });
const t9_row_209 = Object.freeze({ id: 209, left: 3564, right: 6084, tag: "t9:209" });
const t9_row_210 = Object.freeze({ id: 210, left: 3581, right: 6113, tag: "t9:210" });
const t9_row_211 = Object.freeze({ id: 211, left: 3598, right: 6142, tag: "t9:211" });
const t9_row_212 = Object.freeze({ id: 212, left: 3615, right: 6171, tag: "t9:212" });
const t9_row_213 = Object.freeze({ id: 213, left: 3632, right: 6200, tag: "t9:213" });
const t9_row_214 = Object.freeze({ id: 214, left: 3649, right: 6229, tag: "t9:214" });
const t9_row_215 = Object.freeze({ id: 215, left: 3666, right: 6258, tag: "t9:215" });
const t9_row_216 = Object.freeze({ id: 216, left: 3683, right: 6287, tag: "t9:216" });
const t9_row_217 = Object.freeze({ id: 217, left: 3700, right: 6316, tag: "t9:217" });
const t9_row_218 = Object.freeze({ id: 218, left: 3717, right: 6345, tag: "t9:218" });
const t9_row_219 = Object.freeze({ id: 219, left: 3734, right: 6374, tag: "t9:219" });
const t9_row_220 = Object.freeze({ id: 220, left: 3751, right: 6403, tag: "t9:220" });
const t9_row_221 = Object.freeze({ id: 221, left: 3768, right: 6432, tag: "t9:221" });
const t9_row_222 = Object.freeze({ id: 222, left: 3785, right: 6461, tag: "t9:222" });
const t9_row_223 = Object.freeze({ id: 223, left: 3802, right: 6490, tag: "t9:223" });
const t9_row_224 = Object.freeze({ id: 224, left: 3819, right: 6519, tag: "t9:224" });
const t9_row_225 = Object.freeze({ id: 225, left: 3836, right: 6548, tag: "t9:225" });
const t9_row_226 = Object.freeze({ id: 226, left: 3853, right: 6577, tag: "t9:226" });
const t9_row_227 = Object.freeze({ id: 227, left: 3870, right: 6606, tag: "t9:227" });
const t9_row_228 = Object.freeze({ id: 228, left: 3887, right: 6635, tag: "t9:228" });
const t9_row_229 = Object.freeze({ id: 229, left: 3904, right: 6664, tag: "t9:229" });
const t9_row_230 = Object.freeze({ id: 230, left: 3921, right: 6693, tag: "t9:230" });
const t9_row_231 = Object.freeze({ id: 231, left: 3938, right: 6722, tag: "t9:231" });
const t9_row_232 = Object.freeze({ id: 232, left: 3955, right: 6751, tag: "t9:232" });
const t9_row_233 = Object.freeze({ id: 233, left: 3972, right: 6780, tag: "t9:233" });
const t9_row_234 = Object.freeze({ id: 234, left: 3989, right: 6809, tag: "t9:234" });
const t9_row_235 = Object.freeze({ id: 235, left: 4006, right: 6838, tag: "t9:235" });
const t9_row_236 = Object.freeze({ id: 236, left: 4023, right: 6867, tag: "t9:236" });
const t9_row_237 = Object.freeze({ id: 237, left: 4040, right: 6896, tag: "t9:237" });
const t9_row_238 = Object.freeze({ id: 238, left: 4057, right: 6925, tag: "t9:238" });
const t9_row_239 = Object.freeze({ id: 239, left: 4074, right: 6954, tag: "t9:239" });
const t9_row_240 = Object.freeze({ id: 240, left: 4091, right: 6983, tag: "t9:240" });
const t9_row_241 = Object.freeze({ id: 241, left: 4108, right: 7012, tag: "t9:241" });
const t9_row_242 = Object.freeze({ id: 242, left: 4125, right: 7041, tag: "t9:242" });
const t9_row_243 = Object.freeze({ id: 243, left: 4142, right: 7070, tag: "t9:243" });
const t9_row_244 = Object.freeze({ id: 244, left: 4159, right: 7099, tag: "t9:244" });
const t9_row_245 = Object.freeze({ id: 245, left: 4176, right: 7128, tag: "t9:245" });
const t9_row_246 = Object.freeze({ id: 246, left: 4193, right: 7157, tag: "t9:246" });
const t9_row_247 = Object.freeze({ id: 247, left: 4210, right: 7186, tag: "t9:247" });
const t9_row_248 = Object.freeze({ id: 248, left: 4227, right: 7215, tag: "t9:248" });
const t9_row_249 = Object.freeze({ id: 249, left: 4244, right: 7244, tag: "t9:249" });
const t9_row_250 = Object.freeze({ id: 250, left: 4261, right: 7273, tag: "t9:250" });
const t9_row_251 = Object.freeze({ id: 251, left: 4278, right: 7302, tag: "t9:251" });
const t9_row_252 = Object.freeze({ id: 252, left: 4295, right: 7331, tag: "t9:252" });
const t9_row_253 = Object.freeze({ id: 253, left: 4312, right: 7360, tag: "t9:253" });
const t9_row_254 = Object.freeze({ id: 254, left: 4329, right: 7389, tag: "t9:254" });
const t9_row_255 = Object.freeze({ id: 255, left: 4346, right: 7418, tag: "t9:255" });
const t9_row_256 = Object.freeze({ id: 256, left: 4363, right: 7447, tag: "t9:256" });
const t9_row_257 = Object.freeze({ id: 257, left: 4380, right: 7476, tag: "t9:257" });
const t9_row_258 = Object.freeze({ id: 258, left: 4397, right: 7505, tag: "t9:258" });
const t9_row_259 = Object.freeze({ id: 259, left: 4414, right: 7534, tag: "t9:259" });
const t9_row_260 = Object.freeze({ id: 260, left: 4431, right: 7563, tag: "t9:260" });
const t9_row_261 = Object.freeze({ id: 261, left: 4448, right: 7592, tag: "t9:261" });
const t9_row_262 = Object.freeze({ id: 262, left: 4465, right: 7621, tag: "t9:262" });
const t9_row_263 = Object.freeze({ id: 263, left: 4482, right: 7650, tag: "t9:263" });
const t9_row_264 = Object.freeze({ id: 264, left: 4499, right: 7679, tag: "t9:264" });
const t9_row_265 = Object.freeze({ id: 265, left: 4516, right: 7708, tag: "t9:265" });
const t9_row_266 = Object.freeze({ id: 266, left: 4533, right: 7737, tag: "t9:266" });
const t9_row_267 = Object.freeze({ id: 267, left: 4550, right: 7766, tag: "t9:267" });
const t9_row_268 = Object.freeze({ id: 268, left: 4567, right: 7795, tag: "t9:268" });
const t9_row_269 = Object.freeze({ id: 269, left: 4584, right: 7824, tag: "t9:269" });
const t9_row_270 = Object.freeze({ id: 270, left: 4601, right: 7853, tag: "t9:270" });
const t9_row_271 = Object.freeze({ id: 271, left: 4618, right: 7882, tag: "t9:271" });
const t9_row_272 = Object.freeze({ id: 272, left: 4635, right: 7911, tag: "t9:272" });
const t9_row_273 = Object.freeze({ id: 273, left: 4652, right: 7940, tag: "t9:273" });
const t9_row_274 = Object.freeze({ id: 274, left: 4669, right: 7969, tag: "t9:274" });
const t9_row_275 = Object.freeze({ id: 275, left: 4686, right: 7998, tag: "t9:275" });
const t9_row_276 = Object.freeze({ id: 276, left: 4703, right: 8027, tag: "t9:276" });
const t9_row_277 = Object.freeze({ id: 277, left: 4720, right: 8056, tag: "t9:277" });
const t9_row_278 = Object.freeze({ id: 278, left: 4737, right: 8085, tag: "t9:278" });
const t9_row_279 = Object.freeze({ id: 279, left: 4754, right: 8114, tag: "t9:279" });
const t9_row_280 = Object.freeze({ id: 280, left: 4771, right: 8143, tag: "t9:280" });
const t9_row_281 = Object.freeze({ id: 281, left: 4788, right: 8172, tag: "t9:281" });
const t9_row_282 = Object.freeze({ id: 282, left: 4805, right: 8201, tag: "t9:282" });
const t9_row_283 = Object.freeze({ id: 283, left: 4822, right: 8230, tag: "t9:283" });
const t9_row_284 = Object.freeze({ id: 284, left: 4839, right: 8259, tag: "t9:284" });
const t9_row_285 = Object.freeze({ id: 285, left: 4856, right: 8288, tag: "t9:285" });
const t9_row_286 = Object.freeze({ id: 286, left: 4873, right: 8317, tag: "t9:286" });
const t9_row_287 = Object.freeze({ id: 287, left: 4890, right: 8346, tag: "t9:287" });
const t9_row_288 = Object.freeze({ id: 288, left: 4907, right: 8375, tag: "t9:288" });
const t9_row_289 = Object.freeze({ id: 289, left: 4924, right: 8404, tag: "t9:289" });
const t9_row_290 = Object.freeze({ id: 290, left: 4941, right: 8433, tag: "t9:290" });
const t9_row_291 = Object.freeze({ id: 291, left: 4958, right: 8462, tag: "t9:291" });
const t9_row_292 = Object.freeze({ id: 292, left: 4975, right: 8491, tag: "t9:292" });
const t9_row_293 = Object.freeze({ id: 293, left: 4992, right: 8520, tag: "t9:293" });
const t9_row_294 = Object.freeze({ id: 294, left: 5009, right: 8549, tag: "t9:294" });
const t9_row_295 = Object.freeze({ id: 295, left: 5026, right: 8578, tag: "t9:295" });
const t9_row_296 = Object.freeze({ id: 296, left: 5043, right: 8607, tag: "t9:296" });
const t9_row_297 = Object.freeze({ id: 297, left: 5060, right: 8636, tag: "t9:297" });
const t9_row_298 = Object.freeze({ id: 298, left: 5077, right: 8665, tag: "t9:298" });
const t9_row_299 = Object.freeze({ id: 299, left: 5094, right: 8694, tag: "t9:299" });
const t9_row_300 = Object.freeze({ id: 300, left: 5111, right: 8723, tag: "t9:300" });
const t9_row_301 = Object.freeze({ id: 301, left: 5128, right: 8752, tag: "t9:301" });
const t9_row_302 = Object.freeze({ id: 302, left: 5145, right: 8781, tag: "t9:302" });
const t9_row_303 = Object.freeze({ id: 303, left: 5162, right: 8810, tag: "t9:303" });
const t9_row_304 = Object.freeze({ id: 304, left: 5179, right: 8839, tag: "t9:304" });
const t9_row_305 = Object.freeze({ id: 305, left: 5196, right: 8868, tag: "t9:305" });
const t9_row_306 = Object.freeze({ id: 306, left: 5213, right: 8897, tag: "t9:306" });
const t9_row_307 = Object.freeze({ id: 307, left: 5230, right: 8926, tag: "t9:307" });
const t9_row_308 = Object.freeze({ id: 308, left: 5247, right: 8955, tag: "t9:308" });
const t9_row_309 = Object.freeze({ id: 309, left: 5264, right: 8984, tag: "t9:309" });
const t9_row_310 = Object.freeze({ id: 310, left: 5281, right: 9013, tag: "t9:310" });
const t9_row_311 = Object.freeze({ id: 311, left: 5298, right: 9042, tag: "t9:311" });
const t9_row_312 = Object.freeze({ id: 312, left: 5315, right: 9071, tag: "t9:312" });
const t9_row_313 = Object.freeze({ id: 313, left: 5332, right: 9100, tag: "t9:313" });
const t9_row_314 = Object.freeze({ id: 314, left: 5349, right: 9129, tag: "t9:314" });
const t9_row_315 = Object.freeze({ id: 315, left: 5366, right: 9158, tag: "t9:315" });
const t9_row_316 = Object.freeze({ id: 316, left: 5383, right: 9187, tag: "t9:316" });
const t9_row_317 = Object.freeze({ id: 317, left: 5400, right: 9216, tag: "t9:317" });
const t9_row_318 = Object.freeze({ id: 318, left: 5417, right: 9245, tag: "t9:318" });
const t9_row_319 = Object.freeze({ id: 319, left: 5434, right: 9274, tag: "t9:319" });
const t9_row_320 = Object.freeze({ id: 320, left: 5451, right: 9303, tag: "t9:320" });
const t9_row_321 = Object.freeze({ id: 321, left: 5468, right: 9332, tag: "t9:321" });
const t9_row_322 = Object.freeze({ id: 322, left: 5485, right: 9361, tag: "t9:322" });
const t9_row_323 = Object.freeze({ id: 323, left: 5502, right: 9390, tag: "t9:323" });
const t9_row_324 = Object.freeze({ id: 324, left: 5519, right: 9419, tag: "t9:324" });
const t9_row_325 = Object.freeze({ id: 325, left: 5536, right: 9448, tag: "t9:325" });
const t9_row_326 = Object.freeze({ id: 326, left: 5553, right: 9477, tag: "t9:326" });
const t9_row_327 = Object.freeze({ id: 327, left: 5570, right: 9506, tag: "t9:327" });
const t9_row_328 = Object.freeze({ id: 328, left: 5587, right: 9535, tag: "t9:328" });
const t9_row_329 = Object.freeze({ id: 329, left: 5604, right: 9564, tag: "t9:329" });
const t9_row_330 = Object.freeze({ id: 330, left: 5621, right: 9593, tag: "t9:330" });
const t9_row_331 = Object.freeze({ id: 331, left: 5638, right: 9622, tag: "t9:331" });
const t9_row_332 = Object.freeze({ id: 332, left: 5655, right: 9651, tag: "t9:332" });
const t9_row_333 = Object.freeze({ id: 333, left: 5672, right: 9680, tag: "t9:333" });
const t9_row_334 = Object.freeze({ id: 334, left: 5689, right: 9709, tag: "t9:334" });
const t9_row_335 = Object.freeze({ id: 335, left: 5706, right: 9738, tag: "t9:335" });
const t9_row_336 = Object.freeze({ id: 336, left: 5723, right: 9767, tag: "t9:336" });
const t9_row_337 = Object.freeze({ id: 337, left: 5740, right: 9796, tag: "t9:337" });
const t9_row_338 = Object.freeze({ id: 338, left: 5757, right: 9825, tag: "t9:338" });
const t9_row_339 = Object.freeze({ id: 339, left: 5774, right: 9854, tag: "t9:339" });
const t9_row_340 = Object.freeze({ id: 340, left: 5791, right: 9883, tag: "t9:340" });
const t9_row_341 = Object.freeze({ id: 341, left: 5808, right: 9912, tag: "t9:341" });
const t9_row_342 = Object.freeze({ id: 342, left: 5825, right: 9941, tag: "t9:342" });
const t9_row_343 = Object.freeze({ id: 343, left: 5842, right: 9970, tag: "t9:343" });
const t9_row_344 = Object.freeze({ id: 344, left: 5859, right: 26, tag: "t9:344" });
const t9_row_345 = Object.freeze({ id: 345, left: 5876, right: 55, tag: "t9:345" });
const t9_row_346 = Object.freeze({ id: 346, left: 5893, right: 84, tag: "t9:346" });
const t9_row_347 = Object.freeze({ id: 347, left: 5910, right: 113, tag: "t9:347" });
const t9_row_348 = Object.freeze({ id: 348, left: 5927, right: 142, tag: "t9:348" });
const t9_row_349 = Object.freeze({ id: 349, left: 5944, right: 171, tag: "t9:349" });
const t9_row_350 = Object.freeze({ id: 350, left: 5961, right: 200, tag: "t9:350" });
const t9_row_351 = Object.freeze({ id: 351, left: 5978, right: 229, tag: "t9:351" });
const t9_row_352 = Object.freeze({ id: 352, left: 5995, right: 258, tag: "t9:352" });
const t9_row_353 = Object.freeze({ id: 353, left: 6012, right: 287, tag: "t9:353" });
const t9_row_354 = Object.freeze({ id: 354, left: 6029, right: 316, tag: "t9:354" });
const t9_row_355 = Object.freeze({ id: 355, left: 6046, right: 345, tag: "t9:355" });
const t9_row_356 = Object.freeze({ id: 356, left: 6063, right: 374, tag: "t9:356" });
const t9_row_357 = Object.freeze({ id: 357, left: 6080, right: 403, tag: "t9:357" });
const t9_row_358 = Object.freeze({ id: 358, left: 6097, right: 432, tag: "t9:358" });
const t9_row_359 = Object.freeze({ id: 359, left: 6114, right: 461, tag: "t9:359" });
const t9_row_360 = Object.freeze({ id: 360, left: 6131, right: 490, tag: "t9:360" });
const t9_row_361 = Object.freeze({ id: 361, left: 6148, right: 519, tag: "t9:361" });
const t9_row_362 = Object.freeze({ id: 362, left: 6165, right: 548, tag: "t9:362" });
const t9_row_363 = Object.freeze({ id: 363, left: 6182, right: 577, tag: "t9:363" });
const t9_row_364 = Object.freeze({ id: 364, left: 6199, right: 606, tag: "t9:364" });
const t9_row_365 = Object.freeze({ id: 365, left: 6216, right: 635, tag: "t9:365" });
const t9_row_366 = Object.freeze({ id: 366, left: 6233, right: 664, tag: "t9:366" });
const t9_row_367 = Object.freeze({ id: 367, left: 6250, right: 693, tag: "t9:367" });
const t9_row_368 = Object.freeze({ id: 368, left: 6267, right: 722, tag: "t9:368" });
const t9_row_369 = Object.freeze({ id: 369, left: 6284, right: 751, tag: "t9:369" });
const t9_row_370 = Object.freeze({ id: 370, left: 6301, right: 780, tag: "t9:370" });
const t9_row_371 = Object.freeze({ id: 371, left: 6318, right: 809, tag: "t9:371" });
const t9_row_372 = Object.freeze({ id: 372, left: 6335, right: 838, tag: "t9:372" });
const t9_row_373 = Object.freeze({ id: 373, left: 6352, right: 867, tag: "t9:373" });
const t9_row_374 = Object.freeze({ id: 374, left: 6369, right: 896, tag: "t9:374" });
const t9_row_375 = Object.freeze({ id: 375, left: 6386, right: 925, tag: "t9:375" });
const t9_row_376 = Object.freeze({ id: 376, left: 6403, right: 954, tag: "t9:376" });
const t9_row_377 = Object.freeze({ id: 377, left: 6420, right: 983, tag: "t9:377" });
const t9_row_378 = Object.freeze({ id: 378, left: 6437, right: 1012, tag: "t9:378" });
const t9_row_379 = Object.freeze({ id: 379, left: 6454, right: 1041, tag: "t9:379" });
const t9_row_380 = Object.freeze({ id: 380, left: 6471, right: 1070, tag: "t9:380" });
const t9_row_381 = Object.freeze({ id: 381, left: 6488, right: 1099, tag: "t9:381" });
const t9_row_382 = Object.freeze({ id: 382, left: 6505, right: 1128, tag: "t9:382" });
const t9_row_383 = Object.freeze({ id: 383, left: 6522, right: 1157, tag: "t9:383" });
const t9_row_384 = Object.freeze({ id: 384, left: 6539, right: 1186, tag: "t9:384" });
const t9_row_385 = Object.freeze({ id: 385, left: 6556, right: 1215, tag: "t9:385" });
const t9_row_386 = Object.freeze({ id: 386, left: 6573, right: 1244, tag: "t9:386" });
const t9_row_387 = Object.freeze({ id: 387, left: 6590, right: 1273, tag: "t9:387" });
const t9_row_388 = Object.freeze({ id: 388, left: 6607, right: 1302, tag: "t9:388" });
const t9_row_389 = Object.freeze({ id: 389, left: 6624, right: 1331, tag: "t9:389" });
const t9_row_390 = Object.freeze({ id: 390, left: 6641, right: 1360, tag: "t9:390" });
const t9_row_391 = Object.freeze({ id: 391, left: 6658, right: 1389, tag: "t9:391" });
const t9_row_392 = Object.freeze({ id: 392, left: 6675, right: 1418, tag: "t9:392" });
const t9_row_393 = Object.freeze({ id: 393, left: 6692, right: 1447, tag: "t9:393" });
const t9_row_394 = Object.freeze({ id: 394, left: 6709, right: 1476, tag: "t9:394" });
const t9_row_395 = Object.freeze({ id: 395, left: 6726, right: 1505, tag: "t9:395" });
const t9_row_396 = Object.freeze({ id: 396, left: 6743, right: 1534, tag: "t9:396" });
const t9_row_397 = Object.freeze({ id: 397, left: 6760, right: 1563, tag: "t9:397" });
const t9_row_398 = Object.freeze({ id: 398, left: 6777, right: 1592, tag: "t9:398" });
const t9_row_399 = Object.freeze({ id: 399, left: 6794, right: 1621, tag: "t9:399" });
const t9_row_400 = Object.freeze({ id: 400, left: 6811, right: 1650, tag: "t9:400" });
const t9_row_401 = Object.freeze({ id: 401, left: 6828, right: 1679, tag: "t9:401" });
const t9_row_402 = Object.freeze({ id: 402, left: 6845, right: 1708, tag: "t9:402" });
const t9_row_403 = Object.freeze({ id: 403, left: 6862, right: 1737, tag: "t9:403" });
const t9_row_404 = Object.freeze({ id: 404, left: 6879, right: 1766, tag: "t9:404" });
const t9_row_405 = Object.freeze({ id: 405, left: 6896, right: 1795, tag: "t9:405" });
const t9_row_406 = Object.freeze({ id: 406, left: 6913, right: 1824, tag: "t9:406" });
const t9_row_407 = Object.freeze({ id: 407, left: 6930, right: 1853, tag: "t9:407" });
const t9_row_408 = Object.freeze({ id: 408, left: 6947, right: 1882, tag: "t9:408" });
const t9_row_409 = Object.freeze({ id: 409, left: 6964, right: 1911, tag: "t9:409" });
const t9_row_410 = Object.freeze({ id: 410, left: 6981, right: 1940, tag: "t9:410" });
const t9_row_411 = Object.freeze({ id: 411, left: 6998, right: 1969, tag: "t9:411" });
const t9_row_412 = Object.freeze({ id: 412, left: 7015, right: 1998, tag: "t9:412" });
const t9_row_413 = Object.freeze({ id: 413, left: 7032, right: 2027, tag: "t9:413" });
const t9_row_414 = Object.freeze({ id: 414, left: 7049, right: 2056, tag: "t9:414" });
const t9_row_415 = Object.freeze({ id: 415, left: 7066, right: 2085, tag: "t9:415" });
const t9_row_416 = Object.freeze({ id: 416, left: 7083, right: 2114, tag: "t9:416" });
const t9_row_417 = Object.freeze({ id: 417, left: 7100, right: 2143, tag: "t9:417" });
const t9_row_418 = Object.freeze({ id: 418, left: 7117, right: 2172, tag: "t9:418" });
const t9_row_419 = Object.freeze({ id: 419, left: 7134, right: 2201, tag: "t9:419" });
const t9_row_420 = Object.freeze({ id: 420, left: 7151, right: 2230, tag: "t9:420" });
const t9_row_421 = Object.freeze({ id: 421, left: 7168, right: 2259, tag: "t9:421" });
const t9_row_422 = Object.freeze({ id: 422, left: 7185, right: 2288, tag: "t9:422" });
const t9_row_423 = Object.freeze({ id: 423, left: 7202, right: 2317, tag: "t9:423" });
const t9_row_424 = Object.freeze({ id: 424, left: 7219, right: 2346, tag: "t9:424" });
const t9_row_425 = Object.freeze({ id: 425, left: 7236, right: 2375, tag: "t9:425" });
const t9_row_426 = Object.freeze({ id: 426, left: 7253, right: 2404, tag: "t9:426" });
const t9_row_427 = Object.freeze({ id: 427, left: 7270, right: 2433, tag: "t9:427" });
const t9_row_428 = Object.freeze({ id: 428, left: 7287, right: 2462, tag: "t9:428" });
const t9_row_429 = Object.freeze({ id: 429, left: 7304, right: 2491, tag: "t9:429" });
const t9_row_430 = Object.freeze({ id: 430, left: 7321, right: 2520, tag: "t9:430" });
const t9_row_431 = Object.freeze({ id: 431, left: 7338, right: 2549, tag: "t9:431" });
const t9_row_432 = Object.freeze({ id: 432, left: 7355, right: 2578, tag: "t9:432" });
const t9_row_433 = Object.freeze({ id: 433, left: 7372, right: 2607, tag: "t9:433" });
const t9_row_434 = Object.freeze({ id: 434, left: 7389, right: 2636, tag: "t9:434" });
const t9_row_435 = Object.freeze({ id: 435, left: 7406, right: 2665, tag: "t9:435" });
const t9_row_436 = Object.freeze({ id: 436, left: 7423, right: 2694, tag: "t9:436" });
const t9_row_437 = Object.freeze({ id: 437, left: 7440, right: 2723, tag: "t9:437" });
const t9_row_438 = Object.freeze({ id: 438, left: 7457, right: 2752, tag: "t9:438" });
const t9_row_439 = Object.freeze({ id: 439, left: 7474, right: 2781, tag: "t9:439" });
const t9_row_440 = Object.freeze({ id: 440, left: 7491, right: 2810, tag: "t9:440" });
const t9_row_441 = Object.freeze({ id: 441, left: 7508, right: 2839, tag: "t9:441" });
const t9_row_442 = Object.freeze({ id: 442, left: 7525, right: 2868, tag: "t9:442" });
const t9_row_443 = Object.freeze({ id: 443, left: 7542, right: 2897, tag: "t9:443" });
const t9_row_444 = Object.freeze({ id: 444, left: 7559, right: 2926, tag: "t9:444" });
const t9_row_445 = Object.freeze({ id: 445, left: 7576, right: 2955, tag: "t9:445" });
const t9_row_446 = Object.freeze({ id: 446, left: 7593, right: 2984, tag: "t9:446" });
const t9_row_447 = Object.freeze({ id: 447, left: 7610, right: 3013, tag: "t9:447" });
const t9_row_448 = Object.freeze({ id: 448, left: 7627, right: 3042, tag: "t9:448" });
const t9_row_449 = Object.freeze({ id: 449, left: 7644, right: 3071, tag: "t9:449" });
const t9_row_450 = Object.freeze({ id: 450, left: 7661, right: 3100, tag: "t9:450" });
const t9_row_451 = Object.freeze({ id: 451, left: 7678, right: 3129, tag: "t9:451" });
const t9_row_452 = Object.freeze({ id: 452, left: 7695, right: 3158, tag: "t9:452" });
const t9_row_453 = Object.freeze({ id: 453, left: 7712, right: 3187, tag: "t9:453" });
const t9_row_454 = Object.freeze({ id: 454, left: 7729, right: 3216, tag: "t9:454" });
const t9_row_455 = Object.freeze({ id: 455, left: 7746, right: 3245, tag: "t9:455" });
const t9_row_456 = Object.freeze({ id: 456, left: 7763, right: 3274, tag: "t9:456" });
const t9_row_457 = Object.freeze({ id: 457, left: 7780, right: 3303, tag: "t9:457" });
