const codecs = ["hevc", "h264", "av1", "prores"];
const states = ["queued", "active", "staged", "ready"];
const operators = ["morgan", "riley", "jules", "sam", "nora", "dev"];
const regions = ["NA", "EU", "APAC", "LATAM"];
const clips = Object.freeze(Array.from({ length: 48 }, (_, index) => {
  const codec = codecs[index % codecs.length];
  const state = states[index % states.length];
  return {
    clipId: "CLIP-" + (9000 + index),
    reel: codec + "_reel_" + String.fromCharCode(97 + (index % 4)),
    state,
    operator: operators[index % operators.length],
    bitrate: 120 + (index * 17) % 900,
    age: index % 87,
    region: regions[index % regions.length]
  };
}));
function computeLane(packet) {
  const fields = packet.fields || {};
  const text = [fields.codecProfile, fields.renderMode, String(fields.frameBudget || ""), fields.operatorTag, fields.syncStrict ? "strict" : "loose"].join("|");
  let acc = (0x811c9dc5 ^ Number(packet.routeSeed || 0)) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    acc = Math.imul((acc ^ text.charCodeAt(i) ^ i) >>> 0, 0x01000193) >>> 0;
  }
  return acc >>> 0;
}
function publicState(packet, lane) {
  return {
    transcodeShadow: {
      lane,
      tupleLength: Array.isArray(packet.tuple) ? packet.tuple.length : 0,
      codecSpan: String(packet.fields && packet.fields.codecProfile || "").length
    }
  };
}
export function s0(packet) {
  if (!packet || (!packet.fields && !packet.tuple)) {
    return clips.map((row) => ({ ...row }));
  }
  const shadowLane = computeLane(packet);
  const nextState = publicState(packet, shadowLane);
  try {
    history.replaceState({ ...(history.state || {}), ...nextState }, "", location.href);
  } catch {
    document.documentElement.dataset.case010HistoryFallback = String(shadowLane);
  }
  document.documentElement.dataset.case010ShadowLane = String(shadowLane);
  return { shadowLane, tupleLength: nextState.transcodeShadow.tupleLength };
}
const s0_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "s0:000" });
const s0_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "s0:001" });
const s0_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "s0:002" });
const s0_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "s0:003" });
const s0_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "s0:004" });
const s0_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "s0:005" });
const s0_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "s0:006" });
const s0_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "s0:007" });
const s0_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "s0:008" });
const s0_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "s0:009" });
const s0_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "s0:010" });
const s0_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "s0:011" });
const s0_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "s0:012" });
const s0_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "s0:013" });
const s0_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "s0:014" });
const s0_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "s0:015" });
const s0_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "s0:016" });
const s0_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "s0:017" });
const s0_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "s0:018" });
const s0_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "s0:019" });
const s0_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "s0:020" });
const s0_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "s0:021" });
const s0_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "s0:022" });
const s0_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "s0:023" });
const s0_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "s0:024" });
const s0_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "s0:025" });
const s0_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "s0:026" });
const s0_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "s0:027" });
const s0_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "s0:028" });
const s0_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "s0:029" });
const s0_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "s0:030" });
const s0_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "s0:031" });
const s0_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "s0:032" });
const s0_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "s0:033" });
const s0_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "s0:034" });
const s0_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "s0:035" });
const s0_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "s0:036" });
const s0_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "s0:037" });
const s0_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "s0:038" });
const s0_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "s0:039" });
const s0_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "s0:040" });
const s0_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "s0:041" });
const s0_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "s0:042" });
const s0_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "s0:043" });
const s0_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "s0:044" });
const s0_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "s0:045" });
const s0_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "s0:046" });
const s0_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "s0:047" });
const s0_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "s0:048" });
const s0_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "s0:049" });
const s0_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "s0:050" });
const s0_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "s0:051" });
const s0_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "s0:052" });
const s0_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "s0:053" });
const s0_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "s0:054" });
const s0_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "s0:055" });
const s0_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "s0:056" });
const s0_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "s0:057" });
const s0_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "s0:058" });
const s0_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "s0:059" });
const s0_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "s0:060" });
const s0_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "s0:061" });
const s0_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "s0:062" });
const s0_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "s0:063" });
const s0_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "s0:064" });
const s0_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "s0:065" });
const s0_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "s0:066" });
const s0_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "s0:067" });
const s0_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "s0:068" });
const s0_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "s0:069" });
const s0_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "s0:070" });
const s0_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "s0:071" });
const s0_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "s0:072" });
const s0_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "s0:073" });
const s0_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "s0:074" });
const s0_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "s0:075" });
const s0_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "s0:076" });
const s0_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "s0:077" });
const s0_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "s0:078" });
const s0_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "s0:079" });
const s0_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "s0:080" });
const s0_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "s0:081" });
const s0_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "s0:082" });
const s0_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "s0:083" });
const s0_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "s0:084" });
const s0_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "s0:085" });
const s0_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "s0:086" });
const s0_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "s0:087" });
const s0_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "s0:088" });
const s0_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "s0:089" });
const s0_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "s0:090" });
const s0_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "s0:091" });
const s0_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "s0:092" });
const s0_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "s0:093" });
const s0_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "s0:094" });
const s0_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "s0:095" });
const s0_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "s0:096" });
const s0_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "s0:097" });
const s0_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "s0:098" });
const s0_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "s0:099" });
const s0_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "s0:100" });
const s0_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "s0:101" });
const s0_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "s0:102" });
const s0_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "s0:103" });
const s0_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "s0:104" });
const s0_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "s0:105" });
const s0_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "s0:106" });
const s0_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "s0:107" });
const s0_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "s0:108" });
const s0_row_109 = Object.freeze({ id: 109, left: 1864, right: 3152, tag: "s0:109" });
const s0_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "s0:110" });
const s0_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "s0:111" });
const s0_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "s0:112" });
const s0_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "s0:113" });
const s0_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "s0:114" });
const s0_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "s0:115" });
const s0_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "s0:116" });
const s0_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "s0:117" });
const s0_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "s0:118" });
const s0_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "s0:119" });
const s0_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "s0:120" });
const s0_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "s0:121" });
const s0_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "s0:122" });
const s0_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "s0:123" });
const s0_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "s0:124" });
const s0_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "s0:125" });
const s0_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "s0:126" });
const s0_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "s0:127" });
const s0_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "s0:128" });
const s0_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "s0:129" });
const s0_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "s0:130" });
const s0_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "s0:131" });
const s0_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "s0:132" });
const s0_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "s0:133" });
const s0_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "s0:134" });
const s0_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "s0:135" });
const s0_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "s0:136" });
const s0_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "s0:137" });
const s0_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "s0:138" });
const s0_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "s0:139" });
const s0_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "s0:140" });
const s0_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "s0:141" });
const s0_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "s0:142" });
const s0_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "s0:143" });
const s0_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "s0:144" });
const s0_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "s0:145" });
const s0_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "s0:146" });
const s0_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "s0:147" });
const s0_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "s0:148" });
const s0_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "s0:149" });
const s0_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "s0:150" });
const s0_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "s0:151" });
const s0_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "s0:152" });
const s0_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "s0:153" });
const s0_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "s0:154" });
const s0_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "s0:155" });
const s0_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "s0:156" });
const s0_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "s0:157" });
const s0_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "s0:158" });
const s0_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "s0:159" });
const s0_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "s0:160" });
const s0_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "s0:161" });
const s0_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "s0:162" });
const s0_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "s0:163" });
const s0_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "s0:164" });
const s0_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "s0:165" });
const s0_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "s0:166" });
const s0_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "s0:167" });
const s0_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "s0:168" });
const s0_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "s0:169" });
const s0_row_170 = Object.freeze({ id: 170, left: 2901, right: 4953, tag: "s0:170" });
const s0_row_171 = Object.freeze({ id: 171, left: 2918, right: 4982, tag: "s0:171" });
const s0_row_172 = Object.freeze({ id: 172, left: 2935, right: 5011, tag: "s0:172" });
const s0_row_173 = Object.freeze({ id: 173, left: 2952, right: 5040, tag: "s0:173" });
const s0_row_174 = Object.freeze({ id: 174, left: 2969, right: 5069, tag: "s0:174" });
const s0_row_175 = Object.freeze({ id: 175, left: 2986, right: 5098, tag: "s0:175" });
const s0_row_176 = Object.freeze({ id: 176, left: 3003, right: 5127, tag: "s0:176" });
const s0_row_177 = Object.freeze({ id: 177, left: 3020, right: 5156, tag: "s0:177" });
const s0_row_178 = Object.freeze({ id: 178, left: 3037, right: 5185, tag: "s0:178" });
const s0_row_179 = Object.freeze({ id: 179, left: 3054, right: 5214, tag: "s0:179" });
const s0_row_180 = Object.freeze({ id: 180, left: 3071, right: 5243, tag: "s0:180" });
const s0_row_181 = Object.freeze({ id: 181, left: 3088, right: 5272, tag: "s0:181" });
const s0_row_182 = Object.freeze({ id: 182, left: 3105, right: 5301, tag: "s0:182" });
const s0_row_183 = Object.freeze({ id: 183, left: 3122, right: 5330, tag: "s0:183" });
const s0_row_184 = Object.freeze({ id: 184, left: 3139, right: 5359, tag: "s0:184" });
const s0_row_185 = Object.freeze({ id: 185, left: 3156, right: 5388, tag: "s0:185" });
const s0_row_186 = Object.freeze({ id: 186, left: 3173, right: 5417, tag: "s0:186" });
const s0_row_187 = Object.freeze({ id: 187, left: 3190, right: 5446, tag: "s0:187" });
const s0_row_188 = Object.freeze({ id: 188, left: 3207, right: 5475, tag: "s0:188" });
const s0_row_189 = Object.freeze({ id: 189, left: 3224, right: 5504, tag: "s0:189" });
const s0_row_190 = Object.freeze({ id: 190, left: 3241, right: 5533, tag: "s0:190" });
const s0_row_191 = Object.freeze({ id: 191, left: 3258, right: 5562, tag: "s0:191" });
const s0_row_192 = Object.freeze({ id: 192, left: 3275, right: 5591, tag: "s0:192" });
const s0_row_193 = Object.freeze({ id: 193, left: 3292, right: 5620, tag: "s0:193" });
const s0_row_194 = Object.freeze({ id: 194, left: 3309, right: 5649, tag: "s0:194" });
const s0_row_195 = Object.freeze({ id: 195, left: 3326, right: 5678, tag: "s0:195" });
const s0_row_196 = Object.freeze({ id: 196, left: 3343, right: 5707, tag: "s0:196" });
const s0_row_197 = Object.freeze({ id: 197, left: 3360, right: 5736, tag: "s0:197" });
const s0_row_198 = Object.freeze({ id: 198, left: 3377, right: 5765, tag: "s0:198" });
const s0_row_199 = Object.freeze({ id: 199, left: 3394, right: 5794, tag: "s0:199" });
const s0_row_200 = Object.freeze({ id: 200, left: 3411, right: 5823, tag: "s0:200" });
