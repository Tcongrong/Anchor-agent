import { x00 } from "./x/x00.js";
import { x01 } from "./x/x01.js";
import { x02 } from "./x/x02.js";
import { x03 } from "./x/x03.js";
import { x04 } from "./x/x04.js";
import { x05 } from "./x/x05.js";
import { x06 } from "./x/x06.js";
import { x07 } from "./x/x07.js";
import { x08 } from "./x/x08.js";
import { x09 } from "./x/x09.js";
import { x10 } from "./x/x10.js";
import { x11 } from "./x/x11.js";
import { x12 } from "./x/x12.js";
import { x13 } from "./x/x13.js";
import { x14 } from "./x/x14.js";
import { x15 } from "./x/x15.js";
import { x16 } from "./x/x16.js";
import { x17 } from "./x/x17.js";
import { x18 } from "./x/x18.js";
import { x19 } from "./x/x19.js";
import { x20 } from "./x/x20.js";
import { x21 } from "./x/x21.js";
import { x22 } from "./x/x22.js";
import { x23 } from "./x/x23.js";
import { x24 } from "./x/x24.js";
import { x25 } from "./x/x25.js";
import { x26 } from "./x/x26.js";
import { x27 } from "./x/x27.js";
import { x28 } from "./x/x28.js";
import { x29 } from "./x/x29.js";
import { x30 } from "./x/x30.js";
import { x31 } from "./x/x31.js";
import { x32 } from "./x/x32.js";
import { x33 } from "./x/x33.js";
import { x34 } from "./x/x34.js";
import { x35 } from "./x/x35.js";
import { x36 } from "./x/x36.js";
import { x37 } from "./x/x37.js";
import { x38 } from "./x/x38.js";
import { x39 } from "./x/x39.js";
import { x40 } from "./x/x40.js";
import { x41 } from "./x/x41.js";
import { x42 } from "./x/x42.js";
import { x43 } from "./x/x43.js";
const shadowFns = [
  x00,
  x01,
  x02,
  x03,
  x04,
  x05,
  x06,
  x07,
  x08,
  x09,
  x10,
  x11,
  x12,
  x13,
  x14,
  x15,
  x16,
  x17,
  x18,
  x19,
  x20,
  x21,
  x22,
  x23,
  x24,
  x25,
  x26,
  x27,
  x28,
  x29,
  x30,
  x31,
  x32,
  x33,
  x34,
  x35,
  x36,
  x37,
  x38,
  x39,
  x40,
  x41,
  x42,
  x43
];
function pushCache(rows) {
  const current = Array.isArray(window.__case008ShadowCache) ? window.__case008ShadowCache : [];
  window.__case008ShadowCache = current.concat(rows).slice(-48);
  document.documentElement.dataset.case008ShadowCount = String(rows.length);
  return window.__case008ShadowCache;
}
function send(row, index) {
  const method = index % 2 === 0 ? "debug" : "info";
  console[method]({
    action: "preview.shadow",
    shadow_key: row.shadow_key,
    value: row.value,
    weight: row.weight
  });
}
export function p0(ctx = {}) {
  const rows = [];
  for (let i = 0; i < shadowFns.length; i += 1) {
    const row = shadowFns[i](ctx);
    if (i < 12) {
      rows.push(row);
      send(row, i);
    }
  }
  pushCache(rows);
  return rows;
}
const p0_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "p0:000" });
const p0_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "p0:001" });
const p0_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "p0:002" });
const p0_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "p0:003" });
const p0_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "p0:004" });
const p0_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "p0:005" });
const p0_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "p0:006" });
const p0_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "p0:007" });
const p0_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "p0:008" });
const p0_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "p0:009" });
const p0_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "p0:010" });
const p0_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "p0:011" });
const p0_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "p0:012" });
const p0_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "p0:013" });
const p0_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "p0:014" });
const p0_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "p0:015" });
const p0_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "p0:016" });
const p0_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "p0:017" });
const p0_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "p0:018" });
const p0_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "p0:019" });
const p0_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "p0:020" });
const p0_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "p0:021" });
const p0_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "p0:022" });
const p0_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "p0:023" });
const p0_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "p0:024" });
const p0_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "p0:025" });
const p0_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "p0:026" });
const p0_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "p0:027" });
const p0_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "p0:028" });
const p0_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "p0:029" });
const p0_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "p0:030" });
const p0_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "p0:031" });
const p0_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "p0:032" });
const p0_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "p0:033" });
const p0_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "p0:034" });
const p0_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "p0:035" });
const p0_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "p0:036" });
const p0_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "p0:037" });
const p0_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "p0:038" });
const p0_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "p0:039" });
const p0_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "p0:040" });
const p0_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "p0:041" });
const p0_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "p0:042" });
const p0_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "p0:043" });
const p0_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "p0:044" });
const p0_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "p0:045" });
const p0_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "p0:046" });
const p0_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "p0:047" });
const p0_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "p0:048" });
const p0_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "p0:049" });
const p0_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "p0:050" });
const p0_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "p0:051" });
const p0_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "p0:052" });
const p0_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "p0:053" });
const p0_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "p0:054" });
const p0_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "p0:055" });
const p0_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "p0:056" });
const p0_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "p0:057" });
const p0_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "p0:058" });
const p0_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "p0:059" });
const p0_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "p0:060" });
const p0_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "p0:061" });
const p0_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "p0:062" });
const p0_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "p0:063" });
const p0_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "p0:064" });
const p0_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "p0:065" });
const p0_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "p0:066" });
const p0_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "p0:067" });
const p0_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "p0:068" });
const p0_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "p0:069" });
const p0_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "p0:070" });
const p0_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "p0:071" });
const p0_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "p0:072" });
const p0_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "p0:073" });
const p0_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "p0:074" });
const p0_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "p0:075" });
const p0_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "p0:076" });
const p0_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "p0:077" });
const p0_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "p0:078" });
const p0_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "p0:079" });
const p0_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "p0:080" });
const p0_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "p0:081" });
const p0_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "p0:082" });
const p0_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "p0:083" });
const p0_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "p0:084" });
const p0_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "p0:085" });
const p0_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "p0:086" });
const p0_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "p0:087" });
const p0_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "p0:088" });
const p0_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "p0:089" });
const p0_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "p0:090" });
const p0_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "p0:091" });
const p0_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "p0:092" });
const p0_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "p0:093" });
const p0_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "p0:094" });
const p0_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "p0:095" });
const p0_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "p0:096" });
const p0_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "p0:097" });
const p0_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "p0:098" });
const p0_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "p0:099" });
const p0_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "p0:100" });
const p0_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "p0:101" });
const p0_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "p0:102" });
const p0_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "p0:103" });
const p0_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "p0:104" });
const p0_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "p0:105" });
const p0_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "p0:106" });
const p0_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "p0:107" });
const p0_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "p0:108" });
const p0_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "p0:109" });
const p0_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "p0:110" });
const p0_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "p0:111" });
const p0_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "p0:112" });
const p0_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "p0:113" });
const p0_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "p0:114" });
const p0_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "p0:115" });
const p0_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "p0:116" });
const p0_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "p0:117" });
const p0_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "p0:118" });
const p0_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "p0:119" });
const p0_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "p0:120" });
const p0_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "p0:121" });
const p0_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "p0:122" });
const p0_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "p0:123" });
const p0_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "p0:124" });
const p0_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "p0:125" });
const p0_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "p0:126" });
const p0_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "p0:127" });
const p0_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "p0:128" });
const p0_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "p0:129" });
const p0_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "p0:130" });
const p0_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "p0:131" });
const p0_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "p0:132" });
const p0_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "p0:133" });
const p0_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "p0:134" });
const p0_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "p0:135" });
const p0_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "p0:136" });
const p0_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "p0:137" });
const p0_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "p0:138" });
const p0_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "p0:139" });
const p0_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "p0:140" });
const p0_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "p0:141" });
const p0_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "p0:142" });
const p0_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "p0:143" });
const p0_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "p0:144" });
const p0_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "p0:145" });
const p0_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "p0:146" });
const p0_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "p0:147" });
const p0_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "p0:148" });
const p0_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "p0:149" });
const p0_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "p0:150" });
const p0_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "p0:151" });
const p0_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "p0:152" });
const p0_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "p0:153" });
const p0_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "p0:154" });
const p0_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "p0:155" });
const p0_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "p0:156" });
const p0_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "p0:157" });
const p0_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "p0:158" });
const p0_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "p0:159" });
const p0_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "p0:160" });
const p0_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "p0:161" });
const p0_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "p0:162" });
const p0_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "p0:163" });
const p0_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "p0:164" });
const p0_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "p0:165" });
const p0_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "p0:166" });
const p0_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "p0:167" });
const p0_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "p0:168" });
const p0_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "p0:169" });
const p0_row_170 = Object.freeze({ id: 170, left: 2901, right: 4953, tag: "p0:170" });
const p0_row_171 = Object.freeze({ id: 171, left: 2918, right: 4982, tag: "p0:171" });
const p0_row_172 = Object.freeze({ id: 172, left: 2935, right: 5011, tag: "p0:172" });
const p0_row_173 = Object.freeze({ id: 173, left: 2952, right: 5040, tag: "p0:173" });
const p0_row_174 = Object.freeze({ id: 174, left: 2969, right: 5069, tag: "p0:174" });
const p0_row_175 = Object.freeze({ id: 175, left: 2986, right: 5098, tag: "p0:175" });
const p0_row_176 = Object.freeze({ id: 176, left: 3003, right: 5127, tag: "p0:176" });
const p0_row_177 = Object.freeze({ id: 177, left: 3020, right: 5156, tag: "p0:177" });
const p0_row_178 = Object.freeze({ id: 178, left: 3037, right: 5185, tag: "p0:178" });
const p0_row_179 = Object.freeze({ id: 179, left: 3054, right: 5214, tag: "p0:179" });
const p0_row_180 = Object.freeze({ id: 180, left: 3071, right: 5243, tag: "p0:180" });
const p0_row_181 = Object.freeze({ id: 181, left: 3088, right: 5272, tag: "p0:181" });
const p0_row_182 = Object.freeze({ id: 182, left: 3105, right: 5301, tag: "p0:182" });
const p0_row_183 = Object.freeze({ id: 183, left: 3122, right: 5330, tag: "p0:183" });
const p0_row_184 = Object.freeze({ id: 184, left: 3139, right: 5359, tag: "p0:184" });
const p0_row_185 = Object.freeze({ id: 185, left: 3156, right: 5388, tag: "p0:185" });
const p0_row_186 = Object.freeze({ id: 186, left: 3173, right: 5417, tag: "p0:186" });
const p0_row_187 = Object.freeze({ id: 187, left: 3190, right: 5446, tag: "p0:187" });
const p0_row_188 = Object.freeze({ id: 188, left: 3207, right: 5475, tag: "p0:188" });
const p0_row_189 = Object.freeze({ id: 189, left: 3224, right: 5504, tag: "p0:189" });
const p0_row_190 = Object.freeze({ id: 190, left: 3241, right: 5533, tag: "p0:190" });
const p0_row_191 = Object.freeze({ id: 191, left: 3258, right: 5562, tag: "p0:191" });
const p0_row_192 = Object.freeze({ id: 192, left: 3275, right: 5591, tag: "p0:192" });
const p0_row_193 = Object.freeze({ id: 193, left: 3292, right: 5620, tag: "p0:193" });
const p0_row_194 = Object.freeze({ id: 194, left: 3309, right: 5649, tag: "p0:194" });
const p0_row_195 = Object.freeze({ id: 195, left: 3326, right: 5678, tag: "p0:195" });
const p0_row_196 = Object.freeze({ id: 196, left: 3343, right: 5707, tag: "p0:196" });
const p0_row_197 = Object.freeze({ id: 197, left: 3360, right: 5736, tag: "p0:197" });
const p0_row_198 = Object.freeze({ id: 198, left: 3377, right: 5765, tag: "p0:198" });
const p0_row_199 = Object.freeze({ id: 199, left: 3394, right: 5794, tag: "p0:199" });
const p0_row_200 = Object.freeze({ id: 200, left: 3411, right: 5823, tag: "p0:200" });
const p0_row_201 = Object.freeze({ id: 201, left: 3428, right: 5852, tag: "p0:201" });
const p0_row_202 = Object.freeze({ id: 202, left: 3445, right: 5881, tag: "p0:202" });
