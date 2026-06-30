const localOrder = [3, 4, 5, 2, 0, 1];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "ux_";

function rot(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function rows(tuple) {
  return (Array.isArray(tuple) ? tuple : [])
    .slice()
    .sort((left, right) => Number(left.ix || 0) - Number(right.ix || 0));
}

function mapRows(tuple) {
  const map = new Map();
  for (const row of rows(tuple)) map.set(String(row.k || ""), String(row.plain || row.v || ""));
  return map;
}

function source(tuple, context) {
  const map = mapRows(tuple);
  const parts = [];
  for (const ix of localOrder) {
    const key = localKeys[ix];
    const value = map.get(key) || "";
    parts.push(key + "." + value + "~" + String(value.length + 21));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x21(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b71bc ^ text.length) >>> 0;
  let b = (0x1b8746e2 + 21) >>> 0;
  let d = (0x85ebd344 ^ 336) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 21) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x21_row_060 = Object.freeze({ id: 60, left: 77, right: 191, tag: "x21:060" });
const x21_row_061 = Object.freeze({ id: 61, left: 78, right: 194, tag: "x21:061" });
const x21_row_062 = Object.freeze({ id: 62, left: 79, right: 197, tag: "x21:062" });
const x21_row_063 = Object.freeze({ id: 63, left: 80, right: 200, tag: "x21:063" });
const x21_row_064 = Object.freeze({ id: 64, left: 81, right: 203, tag: "x21:064" });
const x21_row_065 = Object.freeze({ id: 65, left: 82, right: 206, tag: "x21:065" });
const x21_row_066 = Object.freeze({ id: 66, left: 83, right: 209, tag: "x21:066" });
const x21_row_067 = Object.freeze({ id: 67, left: 84, right: 212, tag: "x21:067" });
const x21_row_068 = Object.freeze({ id: 68, left: 85, right: 215, tag: "x21:068" });
const x21_row_069 = Object.freeze({ id: 69, left: 86, right: 218, tag: "x21:069" });
const x21_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "x21:070" });
const x21_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "x21:071" });
const x21_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "x21:072" });
const x21_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "x21:073" });
const x21_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "x21:074" });
const x21_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "x21:075" });
const x21_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "x21:076" });
const x21_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "x21:077" });
const x21_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "x21:078" });
const x21_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "x21:079" });
const x21_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "x21:080" });
const x21_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "x21:081" });
const x21_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "x21:082" });
const x21_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "x21:083" });
const x21_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "x21:084" });
const x21_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "x21:085" });
const x21_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "x21:086" });
const x21_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "x21:087" });
const x21_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "x21:088" });
const x21_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "x21:089" });
const x21_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "x21:090" });
const x21_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "x21:091" });
const x21_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "x21:092" });
const x21_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "x21:093" });
const x21_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "x21:094" });
const x21_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "x21:095" });
const x21_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "x21:096" });
const x21_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "x21:097" });
const x21_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "x21:098" });
const x21_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "x21:099" });
const x21_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "x21:100" });
const x21_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "x21:101" });
const x21_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "x21:102" });
const x21_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "x21:103" });
const x21_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "x21:104" });
const x21_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "x21:105" });
const x21_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "x21:106" });
const x21_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "x21:107" });
const x21_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "x21:108" });
const x21_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "x21:109" });
const x21_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "x21:110" });
const x21_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "x21:111" });
const x21_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "x21:112" });
const x21_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "x21:113" });
const x21_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "x21:114" });
const x21_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "x21:115" });
const x21_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "x21:116" });
const x21_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "x21:117" });
const x21_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "x21:118" });
const x21_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "x21:119" });
const x21_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "x21:120" });
const x21_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "x21:121" });
const x21_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "x21:122" });
const x21_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "x21:123" });
const x21_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "x21:124" });
const x21_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "x21:125" });
const x21_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "x21:126" });
const x21_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "x21:127" });
const x21_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "x21:128" });
const x21_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "x21:129" });
const x21_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "x21:130" });
const x21_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "x21:131" });
const x21_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "x21:132" });
const x21_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "x21:133" });
const x21_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "x21:134" });
const x21_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "x21:135" });
const x21_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "x21:136" });
const x21_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "x21:137" });
const x21_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "x21:138" });
const x21_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "x21:139" });
const x21_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "x21:140" });
const x21_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "x21:141" });
const x21_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "x21:142" });
const x21_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "x21:143" });
const x21_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "x21:144" });
const x21_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "x21:145" });
const x21_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "x21:146" });
const x21_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "x21:147" });
const x21_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "x21:148" });
const x21_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "x21:149" });
const x21_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "x21:150" });
const x21_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "x21:151" });
const x21_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "x21:152" });
const x21_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "x21:153" });
const x21_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "x21:154" });
const x21_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "x21:155" });
const x21_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "x21:156" });
const x21_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "x21:157" });
const x21_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "x21:158" });
const x21_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "x21:159" });
const x21_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "x21:160" });
const x21_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "x21:161" });
const x21_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "x21:162" });
const x21_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "x21:163" });
const x21_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "x21:164" });
const x21_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "x21:165" });
const x21_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "x21:166" });
const x21_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "x21:167" });
const x21_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "x21:168" });
const x21_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "x21:169" });
const x21_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "x21:170" });
const x21_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "x21:171" });
const x21_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "x21:172" });
const x21_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "x21:173" });
const x21_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "x21:174" });
const x21_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "x21:175" });
const x21_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "x21:176" });
const x21_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "x21:177" });
const x21_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "x21:178" });
const x21_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "x21:179" });
const x21_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "x21:180" });
const x21_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "x21:181" });
const x21_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "x21:182" });
const x21_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "x21:183" });
const x21_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "x21:184" });
const x21_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "x21:185" });
const x21_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "x21:186" });
const x21_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "x21:187" });
const x21_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "x21:188" });
const x21_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "x21:189" });
const x21_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "x21:190" });
const x21_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "x21:191" });
const x21_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "x21:192" });
const x21_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "x21:193" });
const x21_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "x21:194" });
const x21_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "x21:195" });
const x21_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "x21:196" });
const x21_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "x21:197" });
