import { y } from "../k7/q3/t9.js";
function from19(codes) {
  return codes.map((value) => String.fromCharCode(value)).join("");
}
function rot19(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}
function rows19(ctx) {
  const tuple = Array.isArray(ctx && ctx.tuple) ? ctx.tuple : [];
  return tuple.map((row, idx) => ({
    ix: Number(row.ix || idx),
    k: String(row.k || ""),
    v: String(row.v || ""),
    plain: String(row.plain || "")
  }));
}
function source19(ctx) {
  const tuple = rows19(ctx);
  const ordered = tuple.slice().sort((left, right) => (left.ix + 4) - right.ix);
  const parts = [];
  for (let i = 0; i < ordered.length; i += 1) {
    const row = ordered[i];
    const plain = row.plain.toLowerCase();
    parts.push(row.k + ":" + plain.length + ":" + plain);
  }
  const stats = ctx && ctx.stats ? ctx.stats : {};
  parts.push("s:" + String((Number(stats.words || 0) + 19) % 997));
  parts.push("l:" + String((Number(stats.lines || 0) + 57) % 997));
  return parts.join("~");
}
function local19(ctx) {
  const text = source19(ctx);
  let a = (0x6d2b79f5 ^ text.length ^ 19) >>> 0;
  let b = (0x1b873593 + 1856) >>> 0;
  let c = (0x85ebca6b ^ 786) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul((a ^ ch ^ (i << 1)) >>> 0, 0x7feb352d) >>> 0;
    a = rot19(a, ((i + 19) % 13) + 3);
    b = Math.imul((b + a + ch + i) >>> 0, 0x846ca68b) >>> 0;
    c = (c ^ rot19((a + b + ch) >>> 0, (i % 7) + 2)) >>> 0;
  }
  const prefix = from19([100, 115, 95]);
  const tail = (a.toString(36).padStart(6, "0") + b.toString(36).padStart(6, "0") + c.toString(36).padStart(6, "0")).slice(-12);
  return prefix + tail;
}
function alter19(ctx) {
  const copy = { ...ctx };
  copy.tuple = rows19(ctx).map((row, idx) => ({
    ...row,
    plain: idx === 1 ? row.plain + "|shadow-19" : row.plain
  }));
  return copy;
}
export function x19(ctx = {}) {
  const altered = alter19(ctx);
  const viaFactory = y(17, altered.tuple, { transit: altered.transit, stats: altered.stats, shadow: 19 });
  const localValue = local19(altered);
  const value = viaFactory;
  return {
    shadow_key: "shadow_19",
    value,
    localValue,
    viaFactory,
    channel: "info",
    weight: (value.length + localValue.length + 19) % 997
  };
}
const x19_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "x19:000" });
const x19_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "x19:001" });
const x19_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "x19:002" });
const x19_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "x19:003" });
const x19_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "x19:004" });
const x19_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "x19:005" });
const x19_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "x19:006" });
const x19_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "x19:007" });
const x19_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "x19:008" });
const x19_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "x19:009" });
const x19_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "x19:010" });
const x19_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "x19:011" });
const x19_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "x19:012" });
const x19_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "x19:013" });
const x19_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "x19:014" });
const x19_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "x19:015" });
const x19_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "x19:016" });
const x19_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "x19:017" });
const x19_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "x19:018" });
const x19_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "x19:019" });
const x19_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "x19:020" });
const x19_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "x19:021" });
const x19_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "x19:022" });
const x19_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "x19:023" });
const x19_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "x19:024" });
const x19_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "x19:025" });
const x19_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "x19:026" });
const x19_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "x19:027" });
const x19_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "x19:028" });
const x19_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "x19:029" });
const x19_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "x19:030" });
const x19_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "x19:031" });
const x19_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "x19:032" });
const x19_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "x19:033" });
const x19_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "x19:034" });
const x19_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "x19:035" });
const x19_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "x19:036" });
const x19_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "x19:037" });
const x19_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "x19:038" });
const x19_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "x19:039" });
const x19_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "x19:040" });
const x19_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "x19:041" });
const x19_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "x19:042" });
const x19_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "x19:043" });
const x19_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "x19:044" });
const x19_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "x19:045" });
const x19_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "x19:046" });
const x19_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "x19:047" });
const x19_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "x19:048" });
const x19_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "x19:049" });
const x19_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "x19:050" });
const x19_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "x19:051" });
const x19_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "x19:052" });
const x19_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "x19:053" });
const x19_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "x19:054" });
const x19_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "x19:055" });
const x19_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "x19:056" });
const x19_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "x19:057" });
const x19_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "x19:058" });
const x19_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "x19:059" });
const x19_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "x19:060" });
const x19_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "x19:061" });
const x19_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "x19:062" });
const x19_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "x19:063" });
const x19_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "x19:064" });
const x19_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "x19:065" });
const x19_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "x19:066" });
const x19_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "x19:067" });
const x19_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "x19:068" });
const x19_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "x19:069" });
const x19_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "x19:070" });
const x19_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "x19:071" });
const x19_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "x19:072" });
const x19_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "x19:073" });
const x19_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "x19:074" });
const x19_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "x19:075" });
const x19_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "x19:076" });
const x19_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "x19:077" });
const x19_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "x19:078" });
const x19_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "x19:079" });
const x19_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "x19:080" });
const x19_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "x19:081" });
const x19_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "x19:082" });
const x19_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "x19:083" });
const x19_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "x19:084" });
const x19_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "x19:085" });
const x19_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "x19:086" });
const x19_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "x19:087" });
const x19_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "x19:088" });
const x19_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "x19:089" });
const x19_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "x19:090" });
const x19_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "x19:091" });
const x19_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "x19:092" });
const x19_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "x19:093" });
const x19_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "x19:094" });
const x19_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "x19:095" });
const x19_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "x19:096" });
const x19_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "x19:097" });
const x19_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "x19:098" });
const x19_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "x19:099" });
const x19_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "x19:100" });
const x19_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "x19:101" });
const x19_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "x19:102" });
const x19_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "x19:103" });
const x19_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "x19:104" });
const x19_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "x19:105" });
const x19_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "x19:106" });
const x19_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "x19:107" });
const x19_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "x19:108" });
const x19_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "x19:109" });
const x19_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "x19:110" });
const x19_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "x19:111" });
