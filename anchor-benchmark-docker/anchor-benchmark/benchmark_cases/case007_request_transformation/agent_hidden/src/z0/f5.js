import { g6 } from "./g6.js";
function encodeValue(value, salt) {
  const text = String(value || "");
  const out = [];
  for (let i = 0; i < text.length; i += 1) {
    out.push(((text.charCodeAt(i) + salt + i) % 91 + 35).toString(36));
  }
  return out.join(".");
}
function row(ix, k, plain, salt) {
  return {
    ix,
    k,
    plain: String(plain),
    v: encodeValue(plain, salt)
  };
}
function makeTuple(ctx) {
  const stats = ctx.stats || {};
  const request = ctx.request || {};
  return [
    row(0, "t", request.file || ctx.text, 17),
    row(1, "m", ctx.mode, 19),
    row(2, "g", ctx.toc ? "1" : "0", 23),
    row(3, "h", ctx.priority || String(stats.headings || 0), 29),
    row(4, "l", request.category || String(stats.lists || 0), 31),
    row(5, "f", String(request.amountCents ?? stats.fences ?? 0), 37),
    row(6, "w", request.customer || String(stats.words || 0), 41),
    row(7, "c", request.note || String(stats.chars || 0), 43),
    row(8, "r", String(stats.lines || 0), 47)
  ];
}
/* tuple key mapping for request transformation context:
   t = file name, m = policy profile, g = sealed flag (0|1),
   h = priority lane, l = normalized category, f = amount cents,
   w = customer/account, c = note fragment, r = file part count */
function tupleDigest(tuple) {
  let lane = 0x811c9dc5;
  for (const item of tuple) {
    const text = item.k + ":" + item.v + ":" + item.plain.length;
    for (let i = 0; i < text.length; i += 1) {
      lane = Math.imul((lane ^ text.charCodeAt(i)) >>> 0, 0x01000193) >>> 0;
    }
  }
  return lane.toString(36);
}
export function f5(ctx = {}) {
  const tuple = makeTuple(ctx);
  const marker = tupleDigest(tuple);
  return g6({ ...ctx, tuple, marker, trace: (ctx.trace || []).concat("f5") });
}
const f5_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "f5:000" });
const f5_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "f5:001" });
const f5_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "f5:002" });
const f5_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "f5:003" });
const f5_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "f5:004" });
const f5_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "f5:005" });
const f5_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "f5:006" });
const f5_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "f5:007" });
const f5_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "f5:008" });
const f5_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "f5:009" });
const f5_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "f5:010" });
const f5_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "f5:011" });
const f5_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "f5:012" });
const f5_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "f5:013" });
const f5_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "f5:014" });
const f5_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "f5:015" });
const f5_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "f5:016" });
const f5_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "f5:017" });
const f5_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "f5:018" });
const f5_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "f5:019" });
const f5_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "f5:020" });
const f5_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "f5:021" });
const f5_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "f5:022" });
const f5_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "f5:023" });
const f5_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "f5:024" });
const f5_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "f5:025" });
const f5_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "f5:026" });
const f5_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "f5:027" });
const f5_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "f5:028" });
const f5_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "f5:029" });
const f5_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "f5:030" });
const f5_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "f5:031" });
const f5_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "f5:032" });
const f5_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "f5:033" });
const f5_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "f5:034" });
const f5_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "f5:035" });
const f5_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "f5:036" });
const f5_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "f5:037" });
const f5_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "f5:038" });
const f5_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "f5:039" });
const f5_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "f5:040" });
const f5_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "f5:041" });
const f5_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "f5:042" });
const f5_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "f5:043" });
const f5_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "f5:044" });
const f5_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "f5:045" });
const f5_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "f5:046" });
const f5_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "f5:047" });
const f5_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "f5:048" });
const f5_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "f5:049" });
const f5_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "f5:050" });
const f5_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "f5:051" });
const f5_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "f5:052" });
const f5_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "f5:053" });
const f5_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "f5:054" });
const f5_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "f5:055" });
const f5_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "f5:056" });
const f5_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "f5:057" });
const f5_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "f5:058" });
const f5_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "f5:059" });
const f5_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "f5:060" });
const f5_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "f5:061" });
const f5_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "f5:062" });
const f5_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "f5:063" });
const f5_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "f5:064" });
const f5_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "f5:065" });
const f5_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "f5:066" });
const f5_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "f5:067" });
const f5_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "f5:068" });
const f5_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "f5:069" });
const f5_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "f5:070" });
const f5_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "f5:071" });
const f5_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "f5:072" });
const f5_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "f5:073" });
const f5_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "f5:074" });
const f5_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "f5:075" });
const f5_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "f5:076" });
const f5_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "f5:077" });
const f5_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "f5:078" });
const f5_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "f5:079" });
const f5_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "f5:080" });
const f5_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "f5:081" });
const f5_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "f5:082" });
const f5_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "f5:083" });
const f5_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "f5:084" });
const f5_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "f5:085" });
const f5_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "f5:086" });
const f5_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "f5:087" });
const f5_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "f5:088" });
const f5_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "f5:089" });
const f5_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "f5:090" });
const f5_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "f5:091" });
const f5_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "f5:092" });
const f5_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "f5:093" });
const f5_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "f5:094" });
const f5_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "f5:095" });
const f5_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "f5:096" });
const f5_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "f5:097" });
const f5_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "f5:098" });
const f5_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "f5:099" });
const f5_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "f5:100" });
const f5_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "f5:101" });
const f5_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "f5:102" });
const f5_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "f5:103" });
const f5_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "f5:104" });
const f5_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "f5:105" });
const f5_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "f5:106" });
const f5_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "f5:107" });
const f5_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "f5:108" });
const f5_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "f5:109" });
const f5_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "f5:110" });
const f5_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "f5:111" });
const f5_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "f5:112" });
const f5_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "f5:113" });
const f5_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "f5:114" });
const f5_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "f5:115" });
const f5_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "f5:116" });
const f5_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "f5:117" });
const f5_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "f5:118" });
const f5_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "f5:119" });
const f5_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "f5:120" });
const f5_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "f5:121" });
const f5_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "f5:122" });
const f5_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "f5:123" });
const f5_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "f5:124" });
const f5_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "f5:125" });
const f5_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "f5:126" });
const f5_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "f5:127" });
const f5_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "f5:128" });
const f5_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "f5:129" });
const f5_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "f5:130" });
const f5_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "f5:131" });
const f5_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "f5:132" });
const f5_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "f5:133" });
const f5_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "f5:134" });
const f5_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "f5:135" });
const f5_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "f5:136" });
const f5_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "f5:137" });
const f5_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "f5:138" });
const f5_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "f5:139" });
const f5_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "f5:140" });
const f5_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "f5:141" });
const f5_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "f5:142" });
const f5_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "f5:143" });
const f5_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "f5:144" });
const f5_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "f5:145" });
const f5_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "f5:146" });
const f5_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "f5:147" });
const f5_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "f5:148" });
const f5_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "f5:149" });
const f5_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "f5:150" });
const f5_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "f5:151" });
const f5_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "f5:152" });
const f5_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "f5:153" });
const f5_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "f5:154" });
const f5_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "f5:155" });
const f5_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "f5:156" });
const f5_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "f5:157" });
const f5_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "f5:158" });
const f5_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "f5:159" });
const f5_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "f5:160" });
const f5_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "f5:161" });
const f5_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "f5:162" });
const f5_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "f5:163" });
const f5_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "f5:164" });
const f5_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "f5:165" });
const f5_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "f5:166" });
const f5_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "f5:167" });
const f5_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "f5:168" });
const f5_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "f5:169" });
const f5_row_170 = Object.freeze({ id: 170, left: 2901, right: 4953, tag: "f5:170" });
const f5_row_171 = Object.freeze({ id: 171, left: 2918, right: 4982, tag: "f5:171" });
const f5_row_172 = Object.freeze({ id: 172, left: 2935, right: 5011, tag: "f5:172" });
const f5_row_173 = Object.freeze({ id: 173, left: 2952, right: 5040, tag: "f5:173" });
const f5_row_174 = Object.freeze({ id: 174, left: 2969, right: 5069, tag: "f5:174" });
const f5_row_175 = Object.freeze({ id: 175, left: 2986, right: 5098, tag: "f5:175" });
const f5_row_176 = Object.freeze({ id: 176, left: 3003, right: 5127, tag: "f5:176" });
const f5_row_177 = Object.freeze({ id: 177, left: 3020, right: 5156, tag: "f5:177" });
const f5_row_178 = Object.freeze({ id: 178, left: 3037, right: 5185, tag: "f5:178" });
const f5_row_179 = Object.freeze({ id: 179, left: 3054, right: 5214, tag: "f5:179" });
const f5_row_180 = Object.freeze({ id: 180, left: 3071, right: 5243, tag: "f5:180" });
const f5_row_181 = Object.freeze({ id: 181, left: 3088, right: 5272, tag: "f5:181" });
const f5_row_182 = Object.freeze({ id: 182, left: 3105, right: 5301, tag: "f5:182" });
const f5_row_183 = Object.freeze({ id: 183, left: 3122, right: 5330, tag: "f5:183" });
const f5_row_184 = Object.freeze({ id: 184, left: 3139, right: 5359, tag: "f5:184" });
const f5_row_185 = Object.freeze({ id: 185, left: 3156, right: 5388, tag: "f5:185" });
const f5_row_186 = Object.freeze({ id: 186, left: 3173, right: 5417, tag: "f5:186" });
const f5_row_187 = Object.freeze({ id: 187, left: 3190, right: 5446, tag: "f5:187" });
const f5_row_188 = Object.freeze({ id: 188, left: 3207, right: 5475, tag: "f5:188" });
const f5_row_189 = Object.freeze({ id: 189, left: 3224, right: 5504, tag: "f5:189" });
const f5_row_190 = Object.freeze({ id: 190, left: 3241, right: 5533, tag: "f5:190" });
const f5_row_191 = Object.freeze({ id: 191, left: 3258, right: 5562, tag: "f5:191" });
const f5_row_192 = Object.freeze({ id: 192, left: 3275, right: 5591, tag: "f5:192" });
const f5_row_193 = Object.freeze({ id: 193, left: 3292, right: 5620, tag: "f5:193" });
const f5_row_194 = Object.freeze({ id: 194, left: 3309, right: 5649, tag: "f5:194" });
const f5_row_195 = Object.freeze({ id: 195, left: 3326, right: 5678, tag: "f5:195" });
const f5_row_196 = Object.freeze({ id: 196, left: 3343, right: 5707, tag: "f5:196" });
const f5_row_197 = Object.freeze({ id: 197, left: 3360, right: 5736, tag: "f5:197" });
const f5_row_198 = Object.freeze({ id: 198, left: 3377, right: 5765, tag: "f5:198" });
const f5_row_199 = Object.freeze({ id: 199, left: 3394, right: 5794, tag: "f5:199" });
const f5_row_200 = Object.freeze({ id: 200, left: 3411, right: 5823, tag: "f5:200" });
const f5_row_201 = Object.freeze({ id: 201, left: 3428, right: 5852, tag: "f5:201" });
const f5_row_202 = Object.freeze({ id: 202, left: 3445, right: 5881, tag: "f5:202" });
const f5_row_203 = Object.freeze({ id: 203, left: 3462, right: 5910, tag: "f5:203" });
const f5_row_204 = Object.freeze({ id: 204, left: 3479, right: 5939, tag: "f5:204" });
const f5_row_205 = Object.freeze({ id: 205, left: 3496, right: 5968, tag: "f5:205" });
const f5_row_206 = Object.freeze({ id: 206, left: 3513, right: 5997, tag: "f5:206" });
const f5_row_207 = Object.freeze({ id: 207, left: 3530, right: 6026, tag: "f5:207" });
const f5_row_208 = Object.freeze({ id: 208, left: 3547, right: 6055, tag: "f5:208" });
const f5_row_209 = Object.freeze({ id: 209, left: 3564, right: 6084, tag: "f5:209" });
const f5_row_210 = Object.freeze({ id: 210, left: 3581, right: 6113, tag: "f5:210" });
const f5_row_211 = Object.freeze({ id: 211, left: 3598, right: 6142, tag: "f5:211" });
const f5_row_212 = Object.freeze({ id: 212, left: 3615, right: 6171, tag: "f5:212" });
const f5_row_213 = Object.freeze({ id: 213, left: 3632, right: 6200, tag: "f5:213" });
