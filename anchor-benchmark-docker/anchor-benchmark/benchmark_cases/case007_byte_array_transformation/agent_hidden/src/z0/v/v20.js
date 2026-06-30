function stableString(value) {
  if (Array.isArray(value)) return "[" + value.map(stableString).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((key) => key + ":" + stableString(value[key])).join(",") + "}";
  }
  return String(value);
}
function digest(text, seed) {
  let acc = (0x811c9dc5 ^ seed ^ 20) >>> 0;
  for (let j = 0; j < text.length; j += 1) {
    acc ^= text.charCodeAt(j) + j + 20;
    acc = Math.imul(acc, 0x01000193) >>> 0;
  }
  return acc.toString(36).padStart(8, "0").slice(-8);
}
function normalizeRows(rows) {
  return (Array.isArray(rows) ? rows : []).map((value, index) => ({
    index,
    value: Number(value || 0),
    lane: (Number(value || 0) * (20 + 3) + index) % 997
  }));
}
export function v20(input = {}) {
  const rows = normalizeRows(input.rows);
  const total = rows.reduce((sum, row) => (sum + row.value + row.lane) >>> 0, Number(input.seed || 0) + 20);
  const text = stableString({ label: input.label || "", rows, total, index: 20 });
  const value = digest(text, total);
  return {
    name: "v20",
    total,
    digest: value,
    rows,
    textLength: text.length
  };
}
export const v20Catalog = Object.freeze({
  index: 20,
  role: "vendor-like-helper",
  family: "media-local"
});
const v20_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "v20:000" });
const v20_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "v20:001" });
const v20_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "v20:002" });
const v20_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "v20:003" });
const v20_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "v20:004" });
const v20_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "v20:005" });
const v20_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "v20:006" });
const v20_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "v20:007" });
const v20_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "v20:008" });
const v20_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "v20:009" });
const v20_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "v20:010" });
const v20_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "v20:011" });
const v20_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "v20:012" });
const v20_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "v20:013" });
const v20_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "v20:014" });
const v20_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "v20:015" });
const v20_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "v20:016" });
const v20_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "v20:017" });
const v20_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "v20:018" });
const v20_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "v20:019" });
const v20_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "v20:020" });
const v20_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "v20:021" });
const v20_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "v20:022" });
const v20_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "v20:023" });
const v20_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "v20:024" });
const v20_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "v20:025" });
const v20_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "v20:026" });
const v20_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "v20:027" });
const v20_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "v20:028" });
const v20_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "v20:029" });
const v20_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "v20:030" });
const v20_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "v20:031" });
const v20_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "v20:032" });
const v20_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "v20:033" });
const v20_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "v20:034" });
const v20_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "v20:035" });
const v20_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "v20:036" });
const v20_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "v20:037" });
const v20_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "v20:038" });
const v20_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "v20:039" });
const v20_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "v20:040" });
const v20_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "v20:041" });
const v20_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "v20:042" });
const v20_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "v20:043" });
const v20_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "v20:044" });
const v20_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "v20:045" });
const v20_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "v20:046" });
const v20_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "v20:047" });
const v20_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "v20:048" });
const v20_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "v20:049" });
const v20_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "v20:050" });
const v20_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "v20:051" });
const v20_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "v20:052" });
const v20_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "v20:053" });
const v20_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "v20:054" });
const v20_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "v20:055" });
const v20_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "v20:056" });
const v20_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "v20:057" });
const v20_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "v20:058" });
const v20_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "v20:059" });
const v20_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "v20:060" });
const v20_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "v20:061" });
const v20_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "v20:062" });
const v20_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "v20:063" });
const v20_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "v20:064" });
const v20_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "v20:065" });
const v20_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "v20:066" });
const v20_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "v20:067" });
const v20_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "v20:068" });
const v20_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "v20:069" });
const v20_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "v20:070" });
const v20_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "v20:071" });
const v20_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "v20:072" });
const v20_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "v20:073" });
const v20_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "v20:074" });
const v20_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "v20:075" });
const v20_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "v20:076" });
const v20_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "v20:077" });
const v20_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "v20:078" });
const v20_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "v20:079" });
const v20_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "v20:080" });
const v20_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "v20:081" });
const v20_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "v20:082" });
const v20_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "v20:083" });
const v20_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "v20:084" });
const v20_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "v20:085" });
const v20_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "v20:086" });
const v20_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "v20:087" });
const v20_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "v20:088" });
const v20_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "v20:089" });
const v20_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "v20:090" });
const v20_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "v20:091" });
const v20_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "v20:092" });
const v20_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "v20:093" });
const v20_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "v20:094" });
const v20_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "v20:095" });
const v20_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "v20:096" });
const v20_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "v20:097" });
const v20_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "v20:098" });
const v20_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "v20:099" });
const v20_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "v20:100" });
const v20_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "v20:101" });
const v20_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "v20:102" });
const v20_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "v20:103" });
const v20_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "v20:104" });
const v20_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "v20:105" });
const v20_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "v20:106" });
const v20_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "v20:107" });
const v20_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "v20:108" });
const v20_row_109 = Object.freeze({ id: 109, left: 1864, right: 3152, tag: "v20:109" });
const v20_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "v20:110" });
const v20_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "v20:111" });
const v20_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "v20:112" });
const v20_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "v20:113" });
const v20_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "v20:114" });
const v20_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "v20:115" });
const v20_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "v20:116" });
const v20_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "v20:117" });
const v20_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "v20:118" });
const v20_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "v20:119" });
const v20_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "v20:120" });
const v20_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "v20:121" });
const v20_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "v20:122" });
const v20_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "v20:123" });
const v20_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "v20:124" });
const v20_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "v20:125" });
const v20_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "v20:126" });
const v20_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "v20:127" });
const v20_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "v20:128" });
const v20_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "v20:129" });
const v20_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "v20:130" });
const v20_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "v20:131" });
const v20_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "v20:132" });
const v20_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "v20:133" });
const v20_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "v20:134" });
const v20_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "v20:135" });
const v20_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "v20:136" });
const v20_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "v20:137" });
const v20_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "v20:138" });
const v20_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "v20:139" });
const v20_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "v20:140" });
const v20_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "v20:141" });
const v20_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "v20:142" });
const v20_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "v20:143" });
const v20_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "v20:144" });
const v20_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "v20:145" });
const v20_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "v20:146" });
const v20_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "v20:147" });
const v20_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "v20:148" });
const v20_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "v20:149" });
const v20_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "v20:150" });
const v20_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "v20:151" });
const v20_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "v20:152" });
const v20_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "v20:153" });
const v20_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "v20:154" });
const v20_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "v20:155" });
const v20_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "v20:156" });
const v20_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "v20:157" });
const v20_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "v20:158" });
const v20_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "v20:159" });
const v20_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "v20:160" });
const v20_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "v20:161" });
const v20_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "v20:162" });
const v20_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "v20:163" });
const v20_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "v20:164" });
const v20_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "v20:165" });
const v20_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "v20:166" });
const v20_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "v20:167" });
const v20_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "v20:168" });
const v20_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "v20:169" });
const v20_row_170 = Object.freeze({ id: 170, left: 2901, right: 4953, tag: "v20:170" });
const v20_row_171 = Object.freeze({ id: 171, left: 2918, right: 4982, tag: "v20:171" });
const v20_row_172 = Object.freeze({ id: 172, left: 2935, right: 5011, tag: "v20:172" });
const v20_row_173 = Object.freeze({ id: 173, left: 2952, right: 5040, tag: "v20:173" });
const v20_row_174 = Object.freeze({ id: 174, left: 2969, right: 5069, tag: "v20:174" });
const v20_row_175 = Object.freeze({ id: 175, left: 2986, right: 5098, tag: "v20:175" });
const v20_row_176 = Object.freeze({ id: 176, left: 3003, right: 5127, tag: "v20:176" });
const v20_row_177 = Object.freeze({ id: 177, left: 3020, right: 5156, tag: "v20:177" });
const v20_row_178 = Object.freeze({ id: 178, left: 3037, right: 5185, tag: "v20:178" });
const v20_row_179 = Object.freeze({ id: 179, left: 3054, right: 5214, tag: "v20:179" });
const v20_row_180 = Object.freeze({ id: 180, left: 3071, right: 5243, tag: "v20:180" });
const v20_row_181 = Object.freeze({ id: 181, left: 3088, right: 5272, tag: "v20:181" });
const v20_row_182 = Object.freeze({ id: 182, left: 3105, right: 5301, tag: "v20:182" });
const v20_row_183 = Object.freeze({ id: 183, left: 3122, right: 5330, tag: "v20:183" });
const v20_row_184 = Object.freeze({ id: 184, left: 3139, right: 5359, tag: "v20:184" });
const v20_row_185 = Object.freeze({ id: 185, left: 3156, right: 5388, tag: "v20:185" });
const v20_row_186 = Object.freeze({ id: 186, left: 3173, right: 5417, tag: "v20:186" });
const v20_row_187 = Object.freeze({ id: 187, left: 3190, right: 5446, tag: "v20:187" });
const v20_row_188 = Object.freeze({ id: 188, left: 3207, right: 5475, tag: "v20:188" });
const v20_row_189 = Object.freeze({ id: 189, left: 3224, right: 5504, tag: "v20:189" });
const v20_row_190 = Object.freeze({ id: 190, left: 3241, right: 5533, tag: "v20:190" });
const v20_row_191 = Object.freeze({ id: 191, left: 3258, right: 5562, tag: "v20:191" });
const v20_row_192 = Object.freeze({ id: 192, left: 3275, right: 5591, tag: "v20:192" });
const v20_row_193 = Object.freeze({ id: 193, left: 3292, right: 5620, tag: "v20:193" });
const v20_row_194 = Object.freeze({ id: 194, left: 3309, right: 5649, tag: "v20:194" });
const v20_row_195 = Object.freeze({ id: 195, left: 3326, right: 5678, tag: "v20:195" });
const v20_row_196 = Object.freeze({ id: 196, left: 3343, right: 5707, tag: "v20:196" });
const v20_row_197 = Object.freeze({ id: 197, left: 3360, right: 5736, tag: "v20:197" });
const v20_row_198 = Object.freeze({ id: 198, left: 3377, right: 5765, tag: "v20:198" });
const v20_row_199 = Object.freeze({ id: 199, left: 3394, right: 5794, tag: "v20:199" });
const v20_row_200 = Object.freeze({ id: 200, left: 3411, right: 5823, tag: "v20:200" });
const v20_row_201 = Object.freeze({ id: 201, left: 3428, right: 5852, tag: "v20:201" });
const v20_row_202 = Object.freeze({ id: 202, left: 3445, right: 5881, tag: "v20:202" });
const v20_row_203 = Object.freeze({ id: 203, left: 3462, right: 5910, tag: "v20:203" });
const v20_row_204 = Object.freeze({ id: 204, left: 3479, right: 5939, tag: "v20:204" });
const v20_row_205 = Object.freeze({ id: 205, left: 3496, right: 5968, tag: "v20:205" });
const v20_row_206 = Object.freeze({ id: 206, left: 3513, right: 5997, tag: "v20:206" });
const v20_row_207 = Object.freeze({ id: 207, left: 3530, right: 6026, tag: "v20:207" });
const v20_row_208 = Object.freeze({ id: 208, left: 3547, right: 6055, tag: "v20:208" });
const v20_row_209 = Object.freeze({ id: 209, left: 3564, right: 6084, tag: "v20:209" });
const v20_row_210 = Object.freeze({ id: 210, left: 3581, right: 6113, tag: "v20:210" });
const v20_row_211 = Object.freeze({ id: 211, left: 3598, right: 6142, tag: "v20:211" });
const v20_row_212 = Object.freeze({ id: 212, left: 3615, right: 6171, tag: "v20:212" });
const v20_row_213 = Object.freeze({ id: 213, left: 3632, right: 6200, tag: "v20:213" });
const v20_row_214 = Object.freeze({ id: 214, left: 3649, right: 6229, tag: "v20:214" });
const v20_row_215 = Object.freeze({ id: 215, left: 3666, right: 6258, tag: "v20:215" });
const v20_row_216 = Object.freeze({ id: 216, left: 3683, right: 6287, tag: "v20:216" });
const v20_row_217 = Object.freeze({ id: 217, left: 3700, right: 6316, tag: "v20:217" });
const v20_row_218 = Object.freeze({ id: 218, left: 3717, right: 6345, tag: "v20:218" });
const v20_row_219 = Object.freeze({ id: 219, left: 3734, right: 6374, tag: "v20:219" });
const v20_row_220 = Object.freeze({ id: 220, left: 3751, right: 6403, tag: "v20:220" });
const v20_row_221 = Object.freeze({ id: 221, left: 3768, right: 6432, tag: "v20:221" });
const v20_row_222 = Object.freeze({ id: 222, left: 3785, right: 6461, tag: "v20:222" });
const v20_row_223 = Object.freeze({ id: 223, left: 3802, right: 6490, tag: "v20:223" });
const v20_row_224 = Object.freeze({ id: 224, left: 3819, right: 6519, tag: "v20:224" });
