import { y } from "../k7/q3/t9.js";
function from38(codes) {
  return codes.map((value) => String.fromCharCode(value)).join("");
}
function rot38(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}
function rows38(ctx) {
  const tuple = Array.isArray(ctx && ctx.tuple) ? ctx.tuple : [];
  return tuple.map((row, idx) => ({
    ix: Number(row.ix || idx),
    k: String(row.k || ""),
    v: String(row.v || ""),
    plain: String(row.plain || "")
  }));
}
function source38(ctx) {
  const tuple = rows38(ctx);
  const ordered = tuple.slice().sort((left, right) => (left.ix + 3) - right.ix);
  const parts = [];
  for (let i = 0; i < ordered.length; i += 1) {
    const row = ordered[i];
    const plain = row.plain;
    parts.push(row.k + ":" + plain.length + ":" + plain);
  }
  const stats = ctx && ctx.stats ? ctx.stats : {};
  parts.push("s:" + String((Number(stats.matches || 0) + 38) % 997));
  parts.push("l:" + String((Number(stats.totalRows || 0) + 114) % 997));
  return parts.join("|");
}
function local38(ctx) {
  const text = source38(ctx);
  let a = (0x6d2b79f5 ^ text.length ^ 38) >>> 0;
  let b = (0x1b873593 + 3699) >>> 0;
  let c = (0x85ebca6b ^ 1565) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul((a ^ ch ^ (i << 1)) >>> 0, 0x7feb352d) >>> 0;
    a = rot38(a, ((i + 38) % 13) + 3);
    b = Math.imul((b + a + ch + i) >>> 0, 0x846ca68b) >>> 0;
    c = (c ^ rot38((a + b + ch) >>> 0, (i % 7) + 2)) >>> 0;
  }
  const prefix = from38([102, 115, 95]);
  const tail = (a.toString(36).padStart(6, "0") + b.toString(36).padStart(6, "0") + c.toString(36).padStart(6, "0")).slice(-12);
  return prefix + tail;
}
function alter38(ctx) {
  const copy = { ...ctx };
  copy.tuple = rows38(ctx).map((row, idx) => ({
    ...row,
    plain: idx === 2 ? row.plain + "|shadow-38" : row.plain
  }));
  return copy;
}
export function x38(ctx = {}) {
  const altered = alter38(ctx);
  const viaFactory = y(0, altered.tuple, { transit: altered.transit, stats: altered.stats, shadow: 38 });
  const localValue = local38(altered);
  const value = localValue;
  return {
    shadow_key: "shadow_38",
    value,
    localValue,
    viaFactory,
    channel: "debug",
    weight: (value.length + localValue.length + 38) % 997
  };
}
const x38_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "x38:000" });
const x38_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "x38:001" });
const x38_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "x38:002" });
const x38_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "x38:003" });
const x38_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "x38:004" });
const x38_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "x38:005" });
const x38_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "x38:006" });
const x38_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "x38:007" });
const x38_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "x38:008" });
const x38_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "x38:009" });
const x38_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "x38:010" });
const x38_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "x38:011" });
const x38_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "x38:012" });
const x38_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "x38:013" });
const x38_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "x38:014" });
const x38_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "x38:015" });
const x38_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "x38:016" });
const x38_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "x38:017" });
const x38_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "x38:018" });
const x38_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "x38:019" });
const x38_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "x38:020" });
const x38_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "x38:021" });
const x38_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "x38:022" });
const x38_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "x38:023" });
const x38_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "x38:024" });
const x38_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "x38:025" });
const x38_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "x38:026" });
const x38_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "x38:027" });
const x38_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "x38:028" });
const x38_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "x38:029" });
const x38_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "x38:030" });
const x38_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "x38:031" });
const x38_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "x38:032" });
const x38_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "x38:033" });
const x38_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "x38:034" });
const x38_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "x38:035" });
const x38_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "x38:036" });
const x38_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "x38:037" });
const x38_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "x38:038" });
const x38_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "x38:039" });
const x38_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "x38:040" });
const x38_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "x38:041" });
const x38_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "x38:042" });
const x38_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "x38:043" });
const x38_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "x38:044" });
const x38_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "x38:045" });
const x38_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "x38:046" });
const x38_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "x38:047" });
const x38_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "x38:048" });
const x38_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "x38:049" });
const x38_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "x38:050" });
const x38_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "x38:051" });
const x38_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "x38:052" });
const x38_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "x38:053" });
const x38_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "x38:054" });
const x38_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "x38:055" });
const x38_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "x38:056" });
const x38_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "x38:057" });
const x38_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "x38:058" });
const x38_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "x38:059" });
const x38_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "x38:060" });
const x38_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "x38:061" });
const x38_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "x38:062" });
const x38_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "x38:063" });
const x38_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "x38:064" });
const x38_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "x38:065" });
const x38_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "x38:066" });
const x38_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "x38:067" });
const x38_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "x38:068" });
const x38_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "x38:069" });
const x38_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "x38:070" });
const x38_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "x38:071" });
const x38_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "x38:072" });
const x38_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "x38:073" });
const x38_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "x38:074" });
const x38_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "x38:075" });
const x38_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "x38:076" });
const x38_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "x38:077" });
const x38_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "x38:078" });
const x38_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "x38:079" });
const x38_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "x38:080" });
const x38_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "x38:081" });
const x38_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "x38:082" });
const x38_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "x38:083" });
const x38_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "x38:084" });
const x38_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "x38:085" });
const x38_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "x38:086" });
const x38_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "x38:087" });
const x38_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "x38:088" });
const x38_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "x38:089" });
const x38_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "x38:090" });
const x38_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "x38:091" });
const x38_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "x38:092" });
const x38_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "x38:093" });
const x38_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "x38:094" });
const x38_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "x38:095" });
const x38_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "x38:096" });
const x38_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "x38:097" });
const x38_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "x38:098" });
const x38_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "x38:099" });
const x38_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "x38:100" });
const x38_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "x38:101" });
const x38_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "x38:102" });
const x38_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "x38:103" });
const x38_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "x38:104" });
const x38_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "x38:105" });
const x38_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "x38:106" });
const x38_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "x38:107" });
const x38_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "x38:108" });
const x38_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "x38:109" });
const x38_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "x38:110" });
const x38_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "x38:111" });
