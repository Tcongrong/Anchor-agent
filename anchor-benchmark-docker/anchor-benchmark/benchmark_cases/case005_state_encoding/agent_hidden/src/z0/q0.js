function clear(node) {
  while (node && node.firstChild) node.removeChild(node.firstChild);
}
function addText(node, tag, text) {
  const child = document.createElement(tag);
  child.textContent = text;
  node.appendChild(child);
  return child;
}
function labelFor(key) {
  const labels = {
    key_len: "Key Length",
    host_len: "Host Length",
    port: "Port",
    interval_weight: "Format Weight",
    offline_depth: "Digest Depth",
    key_segments: "Frequency Segments"
  };
  return labels[key] || key;
}
function renderNotifyInfo(output, stats) {
  clear(output);
  const items = [
    ["key_len", String(stats.chars || 0)],
    ["host_len", String(stats.words || 0)],
    ["interval", String(stats.lines || 0)],
    ["interval_weight", String(stats.headings || 0)],
    ["offline_depth", String(stats.lists || 0)],
    ["key_segments", String(stats.fences || 0)]
  ];
  for (const [key, val] of items) {
    addText(output, "p", labelFor(key) + ": " + val);
  }
}
function renderScopeInfo(node, stats, enableDigest) {
  clear(node);
  if (!enableDigest) {
    node.textContent = "Digest roll-up: off";
    return;
  }
  node.textContent = "Digest roll-up: active";
}
export function q0(ctx = {}) {
  const output = document.querySelector("#workspacePanel");
  const scopePanel = document.querySelector("#scopePanel");
  const stats = ctx.stats || {};
  if (output) renderNotifyInfo(output, stats);
  if (scopePanel) renderScopeInfo(scopePanel, stats, Boolean(ctx.enableDigest));
  return ctx;
}
const q0_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "q0:000" });
const q0_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "q0:001" });
const q0_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "q0:002" });
const q0_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "q0:003" });
const q0_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "q0:004" });
const q0_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "q0:005" });
const q0_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "q0:006" });
const q0_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "q0:007" });
const q0_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "q0:008" });
const q0_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "q0:009" });
const q0_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "q0:010" });
const q0_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "q0:011" });
const q0_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "q0:012" });
const q0_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "q0:013" });
const q0_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "q0:014" });
const q0_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "q0:015" });
const q0_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "q0:016" });
const q0_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "q0:017" });
const q0_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "q0:018" });
const q0_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "q0:019" });
const q0_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "q0:020" });
const q0_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "q0:021" });
const q0_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "q0:022" });
const q0_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "q0:023" });
const q0_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "q0:024" });
const q0_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "q0:025" });
const q0_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "q0:026" });
const q0_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "q0:027" });
const q0_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "q0:028" });
const q0_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "q0:029" });
const q0_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "q0:030" });
const q0_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "q0:031" });
const q0_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "q0:032" });
const q0_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "q0:033" });
const q0_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "q0:034" });
const q0_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "q0:035" });
const q0_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "q0:036" });
const q0_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "q0:037" });
const q0_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "q0:038" });
const q0_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "q0:039" });
const q0_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "q0:040" });
const q0_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "q0:041" });
const q0_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "q0:042" });
const q0_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "q0:043" });
const q0_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "q0:044" });
const q0_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "q0:045" });
const q0_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "q0:046" });
const q0_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "q0:047" });
const q0_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "q0:048" });
const q0_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "q0:049" });
const q0_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "q0:050" });
const q0_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "q0:051" });
const q0_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "q0:052" });
const q0_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "q0:053" });
const q0_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "q0:054" });
const q0_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "q0:055" });
const q0_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "q0:056" });
const q0_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "q0:057" });
const q0_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "q0:058" });
const q0_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "q0:059" });
const q0_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "q0:060" });
const q0_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "q0:061" });
const q0_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "q0:062" });
const q0_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "q0:063" });
const q0_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "q0:064" });
const q0_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "q0:065" });
const q0_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "q0:066" });
const q0_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "q0:067" });
const q0_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "q0:068" });
const q0_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "q0:069" });
const q0_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "q0:070" });
const q0_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "q0:071" });
const q0_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "q0:072" });
const q0_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "q0:073" });
const q0_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "q0:074" });
const q0_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "q0:075" });
const q0_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "q0:076" });
const q0_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "q0:077" });
const q0_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "q0:078" });
const q0_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "q0:079" });
const q0_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "q0:080" });
const q0_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "q0:081" });
const q0_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "q0:082" });
const q0_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "q0:083" });
const q0_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "q0:084" });
const q0_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "q0:085" });
const q0_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "q0:086" });
const q0_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "q0:087" });
const q0_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "q0:088" });
const q0_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "q0:089" });
const q0_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "q0:090" });
const q0_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "q0:091" });
const q0_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "q0:092" });
const q0_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "q0:093" });
const q0_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "q0:094" });
const q0_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "q0:095" });
const q0_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "q0:096" });
const q0_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "q0:097" });
const q0_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "q0:098" });
const q0_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "q0:099" });
const q0_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "q0:100" });
const q0_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "q0:101" });
const q0_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "q0:102" });
const q0_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "q0:103" });
const q0_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "q0:104" });
const q0_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "q0:105" });
const q0_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "q0:106" });
const q0_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "q0:107" });
const q0_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "q0:108" });
const q0_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "q0:109" });
const q0_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "q0:110" });
const q0_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "q0:111" });
const q0_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "q0:112" });
const q0_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "q0:113" });
const q0_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "q0:114" });
const q0_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "q0:115" });
const q0_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "q0:116" });
const q0_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "q0:117" });
const q0_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "q0:118" });
const q0_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "q0:119" });
const q0_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "q0:120" });
const q0_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "q0:121" });
const q0_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "q0:122" });
const q0_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "q0:123" });
const q0_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "q0:124" });
const q0_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "q0:125" });
const q0_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "q0:126" });
const q0_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "q0:127" });
const q0_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "q0:128" });
const q0_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "q0:129" });
const q0_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "q0:130" });
const q0_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "q0:131" });
const q0_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "q0:132" });
const q0_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "q0:133" });
const q0_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "q0:134" });
const q0_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "q0:135" });
const q0_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "q0:136" });
const q0_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "q0:137" });
const q0_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "q0:138" });
const q0_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "q0:139" });
const q0_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "q0:140" });
const q0_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "q0:141" });
const q0_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "q0:142" });
const q0_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "q0:143" });
const q0_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "q0:144" });
const q0_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "q0:145" });
const q0_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "q0:146" });
const q0_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "q0:147" });
const q0_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "q0:148" });
const q0_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "q0:149" });
const q0_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "q0:150" });
const q0_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "q0:151" });
const q0_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "q0:152" });
const q0_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "q0:153" });
const q0_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "q0:154" });
const q0_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "q0:155" });
const q0_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "q0:156" });
const q0_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "q0:157" });
const q0_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "q0:158" });
const q0_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "q0:159" });
const q0_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "q0:160" });
const q0_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "q0:161" });
const q0_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "q0:162" });
const q0_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "q0:163" });
const q0_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "q0:164" });
const q0_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "q0:165" });
const q0_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "q0:166" });
const q0_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "q0:167" });
const q0_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "q0:168" });
const q0_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "q0:169" });
