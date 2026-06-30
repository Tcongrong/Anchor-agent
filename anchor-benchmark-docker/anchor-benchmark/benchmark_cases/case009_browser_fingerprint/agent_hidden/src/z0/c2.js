import { d3 } from "./d3.js";
function shadow(action, lane) {
  console.debug({ action: "fingerprint.shadow.action", route: String(action || "unknown"), lane });
}
function annotate(context, lane) {
  const bootLane = context.boot && Number.isFinite(context.boot.lane) ? context.boot.lane : 0;
  const action = context.envelope && context.envelope.action;
  return {
    ...context,
    routeSeed: (bootLane ^ lane ^ String(action || "").length ^ Number(context.sessionStage || 0)) >>> 0,
    trace: [{ stage: "c2", action, lane }]
  };
}
export function c2(context = {}) {
  const action = context.envelope && context.envelope.action;
  switch (action) {
    case "collect":
      if (Number(context.sessionStage || 0) < 2) return null;
      return d3(annotate(context, 29));
    case "warm": {
      const session = document.querySelector("#sessionStatus");
      if (session) session.textContent = "Primed";
      document.documentElement.dataset.case009Phase = "warm";
      return null;
    }
    case "lock": {
      const session = document.querySelector("#sessionStatus");
      if (session) session.textContent = "Ready";
      document.documentElement.dataset.case009Phase = "lock";
      return null;
    }
    default:
      shadow(action, 5);
      return null;
  }
}
export function c2Actions() {
  return ["warm", "lock", "collect"];
}
const c2_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "c2:000" });
const c2_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "c2:001" });
const c2_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "c2:002" });
const c2_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "c2:003" });
const c2_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "c2:004" });
const c2_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "c2:005" });
const c2_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "c2:006" });
const c2_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "c2:007" });
const c2_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "c2:008" });
const c2_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "c2:009" });
const c2_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "c2:010" });
const c2_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "c2:011" });
const c2_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "c2:012" });
const c2_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "c2:013" });
const c2_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "c2:014" });
const c2_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "c2:015" });
const c2_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "c2:016" });
const c2_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "c2:017" });
const c2_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "c2:018" });
const c2_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "c2:019" });
const c2_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "c2:020" });
const c2_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "c2:021" });
const c2_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "c2:022" });
const c2_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "c2:023" });
const c2_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "c2:024" });
const c2_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "c2:025" });
const c2_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "c2:026" });
const c2_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "c2:027" });
const c2_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "c2:028" });
const c2_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "c2:029" });
const c2_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "c2:030" });
const c2_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "c2:031" });
const c2_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "c2:032" });
const c2_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "c2:033" });
const c2_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "c2:034" });
const c2_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "c2:035" });
const c2_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "c2:036" });
const c2_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "c2:037" });
const c2_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "c2:038" });
const c2_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "c2:039" });
const c2_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "c2:040" });
const c2_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "c2:041" });
const c2_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "c2:042" });
const c2_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "c2:043" });
const c2_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "c2:044" });
const c2_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "c2:045" });
const c2_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "c2:046" });
const c2_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "c2:047" });
const c2_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "c2:048" });
const c2_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "c2:049" });
const c2_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "c2:050" });
const c2_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "c2:051" });
const c2_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "c2:052" });
const c2_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "c2:053" });
const c2_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "c2:054" });
const c2_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "c2:055" });
const c2_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "c2:056" });
const c2_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "c2:057" });
const c2_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "c2:058" });
const c2_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "c2:059" });
const c2_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "c2:060" });
const c2_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "c2:061" });
const c2_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "c2:062" });
const c2_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "c2:063" });
const c2_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "c2:064" });
const c2_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "c2:065" });
const c2_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "c2:066" });
const c2_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "c2:067" });
const c2_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "c2:068" });
const c2_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "c2:069" });
const c2_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "c2:070" });
const c2_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "c2:071" });
const c2_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "c2:072" });
const c2_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "c2:073" });
const c2_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "c2:074" });
const c2_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "c2:075" });
const c2_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "c2:076" });
const c2_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "c2:077" });
const c2_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "c2:078" });
const c2_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "c2:079" });
const c2_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "c2:080" });
const c2_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "c2:081" });
const c2_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "c2:082" });
const c2_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "c2:083" });
const c2_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "c2:084" });
const c2_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "c2:085" });
const c2_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "c2:086" });
const c2_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "c2:087" });
const c2_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "c2:088" });
const c2_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "c2:089" });
const c2_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "c2:090" });
const c2_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "c2:091" });
const c2_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "c2:092" });
const c2_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "c2:093" });
const c2_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "c2:094" });
const c2_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "c2:095" });
const c2_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "c2:096" });
const c2_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "c2:097" });
const c2_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "c2:098" });
const c2_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "c2:099" });
const c2_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "c2:100" });
const c2_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "c2:101" });
const c2_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "c2:102" });
const c2_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "c2:103" });
const c2_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "c2:104" });
const c2_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "c2:105" });
const c2_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "c2:106" });
const c2_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "c2:107" });
const c2_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "c2:108" });
const c2_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "c2:109" });
const c2_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "c2:110" });
const c2_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "c2:111" });
const c2_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "c2:112" });
const c2_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "c2:113" });
const c2_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "c2:114" });
const c2_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "c2:115" });
const c2_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "c2:116" });
const c2_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "c2:117" });
const c2_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "c2:118" });
const c2_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "c2:119" });
const c2_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "c2:120" });
const c2_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "c2:121" });
const c2_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "c2:122" });
const c2_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "c2:123" });
const c2_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "c2:124" });
const c2_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "c2:125" });
const c2_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "c2:126" });
const c2_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "c2:127" });
const c2_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "c2:128" });
const c2_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "c2:129" });
const c2_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "c2:130" });
const c2_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "c2:131" });
const c2_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "c2:132" });
const c2_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "c2:133" });
const c2_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "c2:134" });
const c2_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "c2:135" });
const c2_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "c2:136" });
const c2_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "c2:137" });
const c2_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "c2:138" });
const c2_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "c2:139" });
const c2_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "c2:140" });

