function stableString(value) {
  if (Array.isArray(value)) return "[" + value.map(stableString).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((key) => key + ":" + stableString(value[key])).join(",") + "}";
  }
  return String(value);
}
function digest(text, seed) {
  let acc = (0x811c9dc5 ^ seed ^ 8) >>> 0;
  for (let j = 0; j < text.length; j += 1) {
    acc ^= text.charCodeAt(j) + j + 8;
    acc = Math.imul(acc, 0x01000193) >>> 0;
  }
  return acc.toString(36).padStart(8, "0").slice(-8);
}
function normalizeRows(rows) {
  return (Array.isArray(rows) ? rows : []).map((value, index) => ({
    index,
    value: Number(value || 0),
    lane: (Number(value || 0) * (8 + 3) + index) % 997
  }));
}
export function v08(input = {}) {
  const rows = normalizeRows(input.rows);
  const total = rows.reduce((sum, row) => (sum + row.value + row.lane) >>> 0, Number(input.seed || 0) + 8);
  const text = stableString({ label: input.label || "", rows, total, index: 8 });
  const value = digest(text, total);
  return {
    name: "v08",
    total,
    digest: value,
    rows,
    textLength: text.length
  };
}
export const v08Catalog = Object.freeze({
  index: 8,
  role: "vendor-like-helper",
  family: "calendar-local"
});
const v08_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "v08:000" });
const v08_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "v08:001" });
const v08_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "v08:002" });
const v08_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "v08:003" });
const v08_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "v08:004" });
const v08_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "v08:005" });
const v08_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "v08:006" });
const v08_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "v08:007" });
const v08_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "v08:008" });
const v08_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "v08:009" });
const v08_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "v08:010" });
const v08_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "v08:011" });
const v08_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "v08:012" });
const v08_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "v08:013" });
const v08_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "v08:014" });
const v08_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "v08:015" });
const v08_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "v08:016" });
const v08_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "v08:017" });
const v08_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "v08:018" });
const v08_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "v08:019" });
const v08_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "v08:020" });
const v08_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "v08:021" });
const v08_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "v08:022" });
const v08_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "v08:023" });
const v08_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "v08:024" });
const v08_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "v08:025" });
const v08_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "v08:026" });
const v08_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "v08:027" });
const v08_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "v08:028" });
const v08_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "v08:029" });
const v08_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "v08:030" });
const v08_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "v08:031" });
const v08_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "v08:032" });
const v08_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "v08:033" });
const v08_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "v08:034" });
const v08_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "v08:035" });
const v08_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "v08:036" });
const v08_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "v08:037" });
const v08_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "v08:038" });
const v08_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "v08:039" });
const v08_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "v08:040" });
const v08_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "v08:041" });
const v08_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "v08:042" });
const v08_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "v08:043" });
const v08_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "v08:044" });
const v08_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "v08:045" });
const v08_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "v08:046" });
const v08_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "v08:047" });
const v08_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "v08:048" });
const v08_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "v08:049" });
const v08_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "v08:050" });
const v08_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "v08:051" });
const v08_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "v08:052" });
const v08_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "v08:053" });
const v08_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "v08:054" });
const v08_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "v08:055" });
const v08_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "v08:056" });
const v08_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "v08:057" });
const v08_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "v08:058" });
const v08_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "v08:059" });
const v08_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "v08:060" });
const v08_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "v08:061" });
const v08_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "v08:062" });
const v08_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "v08:063" });
const v08_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "v08:064" });
const v08_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "v08:065" });
const v08_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "v08:066" });
const v08_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "v08:067" });
const v08_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "v08:068" });
const v08_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "v08:069" });
const v08_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "v08:070" });
const v08_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "v08:071" });
const v08_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "v08:072" });
const v08_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "v08:073" });
const v08_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "v08:074" });
const v08_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "v08:075" });
const v08_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "v08:076" });
const v08_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "v08:077" });
const v08_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "v08:078" });
const v08_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "v08:079" });
const v08_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "v08:080" });
const v08_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "v08:081" });
const v08_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "v08:082" });
const v08_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "v08:083" });
const v08_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "v08:084" });
const v08_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "v08:085" });
const v08_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "v08:086" });
const v08_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "v08:087" });
const v08_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "v08:088" });
const v08_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "v08:089" });
const v08_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "v08:090" });
const v08_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "v08:091" });
const v08_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "v08:092" });
const v08_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "v08:093" });
const v08_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "v08:094" });
const v08_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "v08:095" });
const v08_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "v08:096" });
const v08_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "v08:097" });
const v08_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "v08:098" });
const v08_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "v08:099" });
const v08_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "v08:100" });
const v08_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "v08:101" });
const v08_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "v08:102" });
const v08_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "v08:103" });
const v08_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "v08:104" });
const v08_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "v08:105" });
const v08_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "v08:106" });
const v08_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "v08:107" });
const v08_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "v08:108" });
const v08_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "v08:109" });
const v08_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "v08:110" });
const v08_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "v08:111" });
const v08_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "v08:112" });
const v08_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "v08:113" });
const v08_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "v08:114" });
const v08_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "v08:115" });
const v08_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "v08:116" });
const v08_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "v08:117" });
const v08_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "v08:118" });
const v08_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "v08:119" });
const v08_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "v08:120" });
const v08_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "v08:121" });
const v08_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "v08:122" });
const v08_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "v08:123" });
const v08_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "v08:124" });
const v08_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "v08:125" });
const v08_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "v08:126" });
const v08_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "v08:127" });
const v08_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "v08:128" });
const v08_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "v08:129" });
const v08_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "v08:130" });
const v08_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "v08:131" });
const v08_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "v08:132" });
const v08_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "v08:133" });
const v08_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "v08:134" });
const v08_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "v08:135" });
const v08_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "v08:136" });
const v08_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "v08:137" });
const v08_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "v08:138" });
const v08_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "v08:139" });
const v08_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "v08:140" });
const v08_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "v08:141" });
const v08_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "v08:142" });
const v08_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "v08:143" });
const v08_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "v08:144" });
const v08_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "v08:145" });
const v08_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "v08:146" });
const v08_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "v08:147" });
const v08_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "v08:148" });
const v08_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "v08:149" });
const v08_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "v08:150" });
const v08_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "v08:151" });
const v08_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "v08:152" });
const v08_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "v08:153" });
const v08_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "v08:154" });
const v08_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "v08:155" });
const v08_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "v08:156" });
const v08_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "v08:157" });
const v08_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "v08:158" });
const v08_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "v08:159" });
const v08_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "v08:160" });
const v08_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "v08:161" });
const v08_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "v08:162" });
const v08_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "v08:163" });
const v08_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "v08:164" });
const v08_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "v08:165" });
const v08_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "v08:166" });
const v08_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "v08:167" });
const v08_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "v08:168" });
const v08_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "v08:169" });
const v08_row_170 = Object.freeze({ id: 170, left: 2901, right: 4953, tag: "v08:170" });
const v08_row_171 = Object.freeze({ id: 171, left: 2918, right: 4982, tag: "v08:171" });
const v08_row_172 = Object.freeze({ id: 172, left: 2935, right: 5011, tag: "v08:172" });
const v08_row_173 = Object.freeze({ id: 173, left: 2952, right: 5040, tag: "v08:173" });
const v08_row_174 = Object.freeze({ id: 174, left: 2969, right: 5069, tag: "v08:174" });
const v08_row_175 = Object.freeze({ id: 175, left: 2986, right: 5098, tag: "v08:175" });
const v08_row_176 = Object.freeze({ id: 176, left: 3003, right: 5127, tag: "v08:176" });
const v08_row_177 = Object.freeze({ id: 177, left: 3020, right: 5156, tag: "v08:177" });
const v08_row_178 = Object.freeze({ id: 178, left: 3037, right: 5185, tag: "v08:178" });
const v08_row_179 = Object.freeze({ id: 179, left: 3054, right: 5214, tag: "v08:179" });
const v08_row_180 = Object.freeze({ id: 180, left: 3071, right: 5243, tag: "v08:180" });
const v08_row_181 = Object.freeze({ id: 181, left: 3088, right: 5272, tag: "v08:181" });
const v08_row_182 = Object.freeze({ id: 182, left: 3105, right: 5301, tag: "v08:182" });
const v08_row_183 = Object.freeze({ id: 183, left: 3122, right: 5330, tag: "v08:183" });
const v08_row_184 = Object.freeze({ id: 184, left: 3139, right: 5359, tag: "v08:184" });
const v08_row_185 = Object.freeze({ id: 185, left: 3156, right: 5388, tag: "v08:185" });
const v08_row_186 = Object.freeze({ id: 186, left: 3173, right: 5417, tag: "v08:186" });
const v08_row_187 = Object.freeze({ id: 187, left: 3190, right: 5446, tag: "v08:187" });
const v08_row_188 = Object.freeze({ id: 188, left: 3207, right: 5475, tag: "v08:188" });
const v08_row_189 = Object.freeze({ id: 189, left: 3224, right: 5504, tag: "v08:189" });
const v08_row_190 = Object.freeze({ id: 190, left: 3241, right: 5533, tag: "v08:190" });
const v08_row_191 = Object.freeze({ id: 191, left: 3258, right: 5562, tag: "v08:191" });
const v08_row_192 = Object.freeze({ id: 192, left: 3275, right: 5591, tag: "v08:192" });
const v08_row_193 = Object.freeze({ id: 193, left: 3292, right: 5620, tag: "v08:193" });
const v08_row_194 = Object.freeze({ id: 194, left: 3309, right: 5649, tag: "v08:194" });
const v08_row_195 = Object.freeze({ id: 195, left: 3326, right: 5678, tag: "v08:195" });
const v08_row_196 = Object.freeze({ id: 196, left: 3343, right: 5707, tag: "v08:196" });
const v08_row_197 = Object.freeze({ id: 197, left: 3360, right: 5736, tag: "v08:197" });
const v08_row_198 = Object.freeze({ id: 198, left: 3377, right: 5765, tag: "v08:198" });
const v08_row_199 = Object.freeze({ id: 199, left: 3394, right: 5794, tag: "v08:199" });
const v08_row_200 = Object.freeze({ id: 200, left: 3411, right: 5823, tag: "v08:200" });
const v08_row_201 = Object.freeze({ id: 201, left: 3428, right: 5852, tag: "v08:201" });
const v08_row_202 = Object.freeze({ id: 202, left: 3445, right: 5881, tag: "v08:202" });
const v08_row_203 = Object.freeze({ id: 203, left: 3462, right: 5910, tag: "v08:203" });
const v08_row_204 = Object.freeze({ id: 204, left: 3479, right: 5939, tag: "v08:204" });
const v08_row_205 = Object.freeze({ id: 205, left: 3496, right: 5968, tag: "v08:205" });
const v08_row_206 = Object.freeze({ id: 206, left: 3513, right: 5997, tag: "v08:206" });
const v08_row_207 = Object.freeze({ id: 207, left: 3530, right: 6026, tag: "v08:207" });
const v08_row_208 = Object.freeze({ id: 208, left: 3547, right: 6055, tag: "v08:208" });
const v08_row_209 = Object.freeze({ id: 209, left: 3564, right: 6084, tag: "v08:209" });
const v08_row_210 = Object.freeze({ id: 210, left: 3581, right: 6113, tag: "v08:210" });
const v08_row_211 = Object.freeze({ id: 211, left: 3598, right: 6142, tag: "v08:211" });
const v08_row_212 = Object.freeze({ id: 212, left: 3615, right: 6171, tag: "v08:212" });
const v08_row_213 = Object.freeze({ id: 213, left: 3632, right: 6200, tag: "v08:213" });
const v08_row_214 = Object.freeze({ id: 214, left: 3649, right: 6229, tag: "v08:214" });
const v08_row_215 = Object.freeze({ id: 215, left: 3666, right: 6258, tag: "v08:215" });
const v08_row_216 = Object.freeze({ id: 216, left: 3683, right: 6287, tag: "v08:216" });
const v08_row_217 = Object.freeze({ id: 217, left: 3700, right: 6316, tag: "v08:217" });
const v08_row_218 = Object.freeze({ id: 218, left: 3717, right: 6345, tag: "v08:218" });
const v08_row_219 = Object.freeze({ id: 219, left: 3734, right: 6374, tag: "v08:219" });
const v08_row_220 = Object.freeze({ id: 220, left: 3751, right: 6403, tag: "v08:220" });
const v08_row_221 = Object.freeze({ id: 221, left: 3768, right: 6432, tag: "v08:221" });
const v08_row_222 = Object.freeze({ id: 222, left: 3785, right: 6461, tag: "v08:222" });
const v08_row_223 = Object.freeze({ id: 223, left: 3802, right: 6490, tag: "v08:223" });
const v08_row_224 = Object.freeze({ id: 224, left: 3819, right: 6519, tag: "v08:224" });
