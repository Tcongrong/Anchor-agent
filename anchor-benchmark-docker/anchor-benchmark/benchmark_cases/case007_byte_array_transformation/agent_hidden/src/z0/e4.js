import { f5 } from "./f5.js";
import { rf } from "./rf.js";
import { s0 } from "./s0.js";
function valueOf(selector, fallback = "") {
  const node = document.querySelector(selector);
  return node && "value" in node ? String(node.value) : fallback;
}
function checkedOf(selector) {
  const node = document.querySelector(selector);
  return Boolean(node && node.checked);
}
function normalizeMode(value) {
  const text = String(value || "split").trim().toLowerCase();
  return ["split", "compact", "reader"].includes(text) ? text : "split";
}
function normalizeProfile(value) {
  const text = String(value || "dense").trim().toLowerCase();
  return ["dense", "sparse", "header-biased"].includes(text) ? text : "dense";
}
function normalizeByteWindow(value) {
  const number = Number(String(value || "18").replace(/[^0-9.]/g, ""));
  return Number.isFinite(number) && number >= 12 && number <= 28 ? Math.floor(number) : 18;
}
function markdownStats(text, autoToc, scrambleWhitespace) {
  const lines = String(text || "").split(/\r?\n/);
  const words = String(text || "").trim() ? String(text || "").trim().split(/\s+/).length : 0;
  const headings = lines.filter((line) => /^#{1,6}\s/.test(line)).length;
  const lists = lines.filter((line) => /^\s*[-*+]\s/.test(line)).length;
  const fences = (String(text || "").match(/```/g) || []).length / 2;
  const tocWeight = autoToc ? 3 : 0;
  const whitespaceWeight = scrambleWhitespace ? 5 : 0;
  return {
    chars: String(text || "").length,
    words,
    lines: lines.length,
    headings: headings + tocWeight,
    lists: lists + whitespaceWeight,
    fences: Math.max(0, Math.floor(fences))
  };
}
function paintMarkdownLabels(mode, profile, byteWindow, stats) {
  const wordBadge = document.querySelector("#wordBadge");
  const previewPane = document.querySelector("#previewPane");
  const tocPane = document.querySelector("#tocPane");
  if (wordBadge) wordBadge.textContent = String(stats.words) + " words";
  if (previewPane) previewPane.dataset.mode = mode;
  if (tocPane) tocPane.dataset.profile = profile;
  document.documentElement.dataset.case007ByteWindow = String(byteWindow);
}
export function e4(ctx = {}) {
  const text = valueOf("#markdownInput", "");
  const mode = normalizeMode(valueOf("#previewMode", "split"));
  const profile = normalizeProfile(valueOf("#arrayProfile", "dense"));
  const byteWindow = normalizeByteWindow(valueOf("#byteWindow", "18"));
  const autoToc = checkedOf("#autoToc");
  const scrambleWhitespace = checkedOf("#scrambleWhitespace");
  const stats = markdownStats(text, autoToc, scrambleWhitespace);
  paintMarkdownLabels(mode, profile, byteWindow, stats);
  document.documentElement.dataset.case007PreviewMode = mode;
  return f5({
    ...ctx,
    text,
    mode,
    profile,
    byteWindow,
    autoToc,
    scrambleWhitespace,
    stats,
    fields: { mode, profile, byteWindow, autoToc, scrambleWhitespace },
    trace: (ctx.trace || []).concat("e4")
  });
}
const e4_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "e4:000" });
const e4_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "e4:001" });
const e4_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "e4:002" });
const e4_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "e4:003" });
const e4_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "e4:004" });
const e4_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "e4:005" });
const e4_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "e4:006" });
const e4_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "e4:007" });
const e4_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "e4:008" });
const e4_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "e4:009" });
const e4_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "e4:010" });
const e4_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "e4:011" });
const e4_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "e4:012" });
const e4_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "e4:013" });
const e4_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "e4:014" });
const e4_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "e4:015" });
const e4_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "e4:016" });
const e4_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "e4:017" });
const e4_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "e4:018" });
const e4_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "e4:019" });
const e4_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "e4:020" });
const e4_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "e4:021" });
const e4_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "e4:022" });
const e4_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "e4:023" });
const e4_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "e4:024" });
const e4_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "e4:025" });
const e4_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "e4:026" });
const e4_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "e4:027" });
const e4_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "e4:028" });
const e4_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "e4:029" });
const e4_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "e4:030" });
const e4_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "e4:031" });
const e4_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "e4:032" });
const e4_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "e4:033" });
const e4_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "e4:034" });
const e4_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "e4:035" });
const e4_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "e4:036" });
const e4_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "e4:037" });
const e4_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "e4:038" });
const e4_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "e4:039" });
const e4_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "e4:040" });
const e4_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "e4:041" });
const e4_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "e4:042" });
const e4_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "e4:043" });
const e4_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "e4:044" });
const e4_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "e4:045" });
const e4_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "e4:046" });
const e4_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "e4:047" });
const e4_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "e4:048" });
const e4_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "e4:049" });
const e4_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "e4:050" });
const e4_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "e4:051" });
const e4_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "e4:052" });
const e4_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "e4:053" });
const e4_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "e4:054" });
const e4_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "e4:055" });
const e4_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "e4:056" });
const e4_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "e4:057" });
const e4_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "e4:058" });
const e4_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "e4:059" });
const e4_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "e4:060" });
const e4_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "e4:061" });
const e4_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "e4:062" });
const e4_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "e4:063" });
const e4_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "e4:064" });
const e4_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "e4:065" });
const e4_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "e4:066" });
const e4_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "e4:067" });
const e4_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "e4:068" });
const e4_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "e4:069" });
const e4_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "e4:070" });
const e4_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "e4:071" });
const e4_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "e4:072" });
const e4_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "e4:073" });
const e4_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "e4:074" });
const e4_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "e4:075" });
const e4_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "e4:076" });
const e4_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "e4:077" });
const e4_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "e4:078" });
const e4_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "e4:079" });
const e4_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "e4:080" });
const e4_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "e4:081" });
const e4_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "e4:082" });
const e4_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "e4:083" });
const e4_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "e4:084" });
const e4_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "e4:085" });
const e4_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "e4:086" });
const e4_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "e4:087" });
const e4_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "e4:088" });
const e4_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "e4:089" });
const e4_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "e4:090" });
const e4_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "e4:091" });
const e4_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "e4:092" });
const e4_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "e4:093" });
const e4_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "e4:094" });
const e4_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "e4:095" });
const e4_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "e4:096" });
const e4_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "e4:097" });
const e4_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "e4:098" });
const e4_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "e4:099" });
const e4_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "e4:100" });
const e4_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "e4:101" });
const e4_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "e4:102" });
const e4_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "e4:103" });
const e4_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "e4:104" });
const e4_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "e4:105" });
const e4_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "e4:106" });
const e4_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "e4:107" });
const e4_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "e4:108" });
const e4_row_109 = Object.freeze({ id: 109, left: 1864, right: 3152, tag: "e4:109" });
const e4_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "e4:110" });
const e4_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "e4:111" });
const e4_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "e4:112" });
const e4_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "e4:113" });
const e4_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "e4:114" });
const e4_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "e4:115" });
const e4_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "e4:116" });
const e4_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "e4:117" });
const e4_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "e4:118" });
const e4_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "e4:119" });
const e4_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "e4:120" });
const e4_row_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "e4:121" });
const e4_row_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "e4:122" });
const e4_row_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "e4:123" });
const e4_row_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "e4:124" });
const e4_row_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "e4:125" });
const e4_row_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "e4:126" });
const e4_row_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "e4:127" });
const e4_row_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "e4:128" });
const e4_row_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "e4:129" });
const e4_row_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "e4:130" });
const e4_row_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "e4:131" });
const e4_row_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "e4:132" });
const e4_row_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "e4:133" });
const e4_row_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "e4:134" });
const e4_row_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "e4:135" });
const e4_row_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "e4:136" });
const e4_row_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "e4:137" });
const e4_row_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "e4:138" });
const e4_row_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "e4:139" });
const e4_row_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "e4:140" });
const e4_row_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "e4:141" });
const e4_row_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "e4:142" });
const e4_row_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "e4:143" });
const e4_row_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "e4:144" });
const e4_row_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "e4:145" });
const e4_row_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "e4:146" });
const e4_row_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "e4:147" });
const e4_row_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "e4:148" });
const e4_row_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "e4:149" });
const e4_row_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "e4:150" });
const e4_row_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "e4:151" });
const e4_row_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "e4:152" });
const e4_row_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "e4:153" });
const e4_row_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "e4:154" });
const e4_row_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "e4:155" });
const e4_row_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "e4:156" });
const e4_row_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "e4:157" });
const e4_row_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "e4:158" });
const e4_row_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "e4:159" });
const e4_row_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "e4:160" });
const e4_row_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "e4:161" });
const e4_row_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "e4:162" });
const e4_row_163 = Object.freeze({ id: 163, left: 2782, right: 4750, tag: "e4:163" });
const e4_row_164 = Object.freeze({ id: 164, left: 2799, right: 4779, tag: "e4:164" });
const e4_row_165 = Object.freeze({ id: 165, left: 2816, right: 4808, tag: "e4:165" });
const e4_row_166 = Object.freeze({ id: 166, left: 2833, right: 4837, tag: "e4:166" });
const e4_row_167 = Object.freeze({ id: 167, left: 2850, right: 4866, tag: "e4:167" });
const e4_row_168 = Object.freeze({ id: 168, left: 2867, right: 4895, tag: "e4:168" });
const e4_row_169 = Object.freeze({ id: 169, left: 2884, right: 4924, tag: "e4:169" });
const e4_row_170 = Object.freeze({ id: 170, left: 2901, right: 4953, tag: "e4:170" });
const e4_row_171 = Object.freeze({ id: 171, left: 2918, right: 4982, tag: "e4:171" });
const e4_row_172 = Object.freeze({ id: 172, left: 2935, right: 5011, tag: "e4:172" });
const e4_row_173 = Object.freeze({ id: 173, left: 2952, right: 5040, tag: "e4:173" });
const e4_js_media_pad_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "e4_js:media:000" });
const e4_js_media_pad_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "e4_js:media:001" });
const e4_js_media_pad_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "e4_js:media:002" });
const e4_js_media_pad_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "e4_js:media:003" });
const e4_js_media_pad_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "e4_js:media:004" });
const e4_js_media_pad_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "e4_js:media:005" });
const e4_js_media_pad_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "e4_js:media:006" });
const e4_js_media_pad_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "e4_js:media:007" });
const e4_js_media_pad_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "e4_js:media:008" });
const e4_js_media_pad_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "e4_js:media:009" });
const e4_js_media_pad_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "e4_js:media:010" });
const e4_js_media_pad_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "e4_js:media:011" });
const e4_js_media_pad_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "e4_js:media:012" });
const e4_js_media_pad_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "e4_js:media:013" });
const e4_js_media_pad_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "e4_js:media:014" });
const e4_js_media_pad_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "e4_js:media:015" });
const e4_js_media_pad_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "e4_js:media:016" });
const e4_js_media_pad_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "e4_js:media:017" });
const e4_js_media_pad_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "e4_js:media:018" });
const e4_js_media_pad_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "e4_js:media:019" });
const e4_js_media_pad_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "e4_js:media:020" });
const e4_js_media_pad_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "e4_js:media:021" });
const e4_js_media_pad_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "e4_js:media:022" });
const e4_js_media_pad_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "e4_js:media:023" });
const e4_js_media_pad_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "e4_js:media:024" });
const e4_js_media_pad_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "e4_js:media:025" });
const e4_js_media_pad_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "e4_js:media:026" });
const e4_js_media_pad_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "e4_js:media:027" });
const e4_js_media_pad_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "e4_js:media:028" });
const e4_js_media_pad_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "e4_js:media:029" });
const e4_js_media_pad_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "e4_js:media:030" });
const e4_js_media_pad_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "e4_js:media:031" });
const e4_js_media_pad_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "e4_js:media:032" });
const e4_js_media_pad_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "e4_js:media:033" });
const e4_js_media_pad_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "e4_js:media:034" });
const e4_js_media_pad_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "e4_js:media:035" });
const e4_js_media_pad_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "e4_js:media:036" });
const e4_js_media_pad_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "e4_js:media:037" });
const e4_js_media_pad_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "e4_js:media:038" });
const e4_js_media_pad_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "e4_js:media:039" });
const e4_js_media_pad_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "e4_js:media:040" });
const e4_js_media_pad_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "e4_js:media:041" });
const e4_js_media_pad_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "e4_js:media:042" });
const e4_js_media_pad_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "e4_js:media:043" });
const e4_js_media_pad_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "e4_js:media:044" });
const e4_js_media_pad_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "e4_js:media:045" });
const e4_js_media_pad_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "e4_js:media:046" });
const e4_js_media_pad_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "e4_js:media:047" });
const e4_js_media_pad_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "e4_js:media:048" });
const e4_js_media_pad_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "e4_js:media:049" });
const e4_js_media_pad_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "e4_js:media:050" });
const e4_js_media_pad_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "e4_js:media:051" });
const e4_js_media_pad_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "e4_js:media:052" });
const e4_js_media_pad_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "e4_js:media:053" });
const e4_js_media_pad_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "e4_js:media:054" });
const e4_js_media_pad_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "e4_js:media:055" });
const e4_js_media_pad_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "e4_js:media:056" });
const e4_js_media_pad_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "e4_js:media:057" });
const e4_js_media_pad_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "e4_js:media:058" });
const e4_js_media_pad_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "e4_js:media:059" });
const e4_js_media_pad_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "e4_js:media:060" });
const e4_js_media_pad_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "e4_js:media:061" });
const e4_js_media_pad_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "e4_js:media:062" });
const e4_js_media_pad_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "e4_js:media:063" });
const e4_js_media_pad_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "e4_js:media:064" });
const e4_js_media_pad_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "e4_js:media:065" });
const e4_js_media_pad_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "e4_js:media:066" });
const e4_js_media_pad_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "e4_js:media:067" });
const e4_js_media_pad_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "e4_js:media:068" });
const e4_js_media_pad_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "e4_js:media:069" });
const e4_js_media_pad_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "e4_js:media:070" });
const e4_js_media_pad_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "e4_js:media:071" });
