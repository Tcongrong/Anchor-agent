import { c2 } from "./c2.js";
function readNotifyFrequency() {
  const node = document.querySelector("#notifyFrequency");
  return node && "value" in node ? String(node.value || "daily") : "daily";
}
function readNotifyFormat() {
  const node = document.querySelector("#notifyFormat");
  return node && "value" in node ? String(node.value || "digest") : "digest";
}
function readEnableDigest() {
  const node = document.querySelector("#enableDigest");
  return node && "checked" in node ? Boolean(node.checked) : false;
}
function buildNotifyParams(ctx) {
  return {
    ...ctx,
    notifyFrequency: readNotifyFrequency(),
    notifyFormat: readNotifyFormat(),
    enableDigest: readEnableDigest(),
    clickCount: Number(ctx.clickCount || 0) + 1,
    trace: Array.isArray(ctx.trace) ? ctx.trace.concat("b1") : ["b1"]
  };
}
export function b1(ctx = {}) {
  const button = document.querySelector("#saveSettingsBtn");
  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const next = buildNotifyParams(ctx);
      Promise.resolve(c2(next)).catch((error) => {
        console.info({ action: "notify.save.error", message: String(error && error.message || error) });
      });
    });
  }
  return ctx;
}
const b1_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "b1:000" });
const b1_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "b1:001" });
const b1_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "b1:002" });
const b1_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "b1:003" });
const b1_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "b1:004" });
const b1_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "b1:005" });
const b1_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "b1:006" });
const b1_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "b1:007" });
const b1_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "b1:008" });
const b1_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "b1:009" });
const b1_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "b1:010" });
const b1_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "b1:011" });
const b1_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "b1:012" });
const b1_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "b1:013" });
const b1_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "b1:014" });
const b1_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "b1:015" });
const b1_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "b1:016" });
const b1_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "b1:017" });
const b1_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "b1:018" });
const b1_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "b1:019" });
const b1_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "b1:020" });
const b1_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "b1:021" });
const b1_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "b1:022" });
const b1_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "b1:023" });
const b1_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "b1:024" });
const b1_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "b1:025" });
const b1_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "b1:026" });
const b1_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "b1:027" });
const b1_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "b1:028" });
const b1_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "b1:029" });
const b1_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "b1:030" });
const b1_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "b1:031" });
const b1_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "b1:032" });
const b1_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "b1:033" });
const b1_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "b1:034" });
const b1_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "b1:035" });
const b1_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "b1:036" });
const b1_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "b1:037" });
const b1_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "b1:038" });
const b1_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "b1:039" });
const b1_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "b1:040" });
const b1_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "b1:041" });
const b1_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "b1:042" });
const b1_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "b1:043" });
const b1_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "b1:044" });
const b1_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "b1:045" });
const b1_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "b1:046" });
const b1_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "b1:047" });
const b1_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "b1:048" });
const b1_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "b1:049" });
const b1_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "b1:050" });
const b1_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "b1:051" });
const b1_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "b1:052" });
const b1_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "b1:053" });
const b1_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "b1:054" });
const b1_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "b1:055" });
const b1_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "b1:056" });
const b1_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "b1:057" });
const b1_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "b1:058" });
const b1_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "b1:059" });
const b1_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "b1:060" });
const b1_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "b1:061" });
const b1_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "b1:062" });
const b1_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "b1:063" });
const b1_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "b1:064" });
const b1_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "b1:065" });
const b1_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "b1:066" });
const b1_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "b1:067" });
const b1_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "b1:068" });
const b1_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "b1:069" });
const b1_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "b1:070" });
const b1_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "b1:071" });
const b1_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "b1:072" });
const b1_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "b1:073" });
const b1_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "b1:074" });
const b1_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "b1:075" });
const b1_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "b1:076" });
const b1_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "b1:077" });
const b1_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "b1:078" });
const b1_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "b1:079" });
const b1_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "b1:080" });
const b1_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "b1:081" });
const b1_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "b1:082" });
const b1_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "b1:083" });
const b1_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "b1:084" });
const b1_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "b1:085" });
const b1_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "b1:086" });
const b1_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "b1:087" });
const b1_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "b1:088" });
const b1_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "b1:089" });
const b1_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "b1:090" });
const b1_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "b1:091" });
const b1_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "b1:092" });
const b1_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "b1:093" });
const b1_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "b1:094" });
const b1_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "b1:095" });
const b1_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "b1:096" });
const b1_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "b1:097" });
const b1_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "b1:098" });
const b1_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "b1:099" });
const b1_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "b1:100" });
const b1_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "b1:101" });
const b1_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "b1:102" });
const b1_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "b1:103" });
const b1_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "b1:104" });
const b1_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "b1:105" });
const b1_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "b1:106" });
const b1_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "b1:107" });
const b1_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "b1:108" });
const b1_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "b1:109" });
const b1_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "b1:110" });
const b1_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "b1:111" });
const b1_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "b1:112" });
const b1_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "b1:113" });
const b1_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "b1:114" });
const b1_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "b1:115" });
const b1_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "b1:116" });
const b1_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "b1:117" });
const b1_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "b1:118" });
const b1_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "b1:119" });
const b1_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "b1:120" });
const b1_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "b1:121" });
const b1_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "b1:122" });
const b1_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "b1:123" });
const b1_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "b1:124" });
const b1_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "b1:125" });
const b1_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "b1:126" });
const b1_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "b1:127" });
const b1_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "b1:128" });
const b1_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "b1:129" });
const b1_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "b1:130" });
const b1_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "b1:131" });
const b1_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "b1:132" });
const b1_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "b1:133" });
