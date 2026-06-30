const localOrder = [2, 5, 3, 1, 0, 4];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "ut_";

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
    parts.push(key + "." + value + "~" + String(value.length + 3));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x03(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b78da ^ text.length) >>> 0;
  let b = (0x1b87380c + 3) >>> 0;
  let d = (0x85ebc9f2 ^ 48) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 3) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x03_row_060 = Object.freeze({ id: 60, left: 77, right: 191, tag: "x03:060" });
const x03_row_061 = Object.freeze({ id: 61, left: 78, right: 194, tag: "x03:061" });
const x03_row_062 = Object.freeze({ id: 62, left: 79, right: 197, tag: "x03:062" });
const x03_row_063 = Object.freeze({ id: 63, left: 80, right: 200, tag: "x03:063" });
const x03_row_064 = Object.freeze({ id: 64, left: 81, right: 203, tag: "x03:064" });
const x03_row_065 = Object.freeze({ id: 65, left: 82, right: 206, tag: "x03:065" });
const x03_row_066 = Object.freeze({ id: 66, left: 83, right: 209, tag: "x03:066" });
const x03_row_067 = Object.freeze({ id: 67, left: 84, right: 212, tag: "x03:067" });
const x03_row_068 = Object.freeze({ id: 68, left: 85, right: 215, tag: "x03:068" });
const x03_row_069 = Object.freeze({ id: 69, left: 86, right: 218, tag: "x03:069" });
const x03_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "x03:070" });
const x03_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "x03:071" });
const x03_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "x03:072" });
const x03_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "x03:073" });
const x03_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "x03:074" });
const x03_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "x03:075" });
const x03_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "x03:076" });
const x03_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "x03:077" });
const x03_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "x03:078" });
const x03_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "x03:079" });
const x03_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "x03:080" });
const x03_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "x03:081" });
const x03_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "x03:082" });
const x03_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "x03:083" });
const x03_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "x03:084" });
const x03_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "x03:085" });
const x03_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "x03:086" });
const x03_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "x03:087" });
const x03_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "x03:088" });
const x03_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "x03:089" });
const x03_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "x03:090" });
const x03_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "x03:091" });
const x03_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "x03:092" });
const x03_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "x03:093" });
const x03_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "x03:094" });
const x03_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "x03:095" });
const x03_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "x03:096" });
const x03_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "x03:097" });
const x03_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "x03:098" });
const x03_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "x03:099" });
const x03_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "x03:100" });
const x03_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "x03:101" });
const x03_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "x03:102" });
const x03_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "x03:103" });
const x03_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "x03:104" });
const x03_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "x03:105" });
const x03_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "x03:106" });
const x03_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "x03:107" });
const x03_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "x03:108" });
const x03_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "x03:109" });
const x03_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "x03:110" });
const x03_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "x03:111" });
const x03_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "x03:112" });
const x03_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "x03:113" });
const x03_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "x03:114" });
const x03_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "x03:115" });
const x03_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "x03:116" });
const x03_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "x03:117" });
const x03_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "x03:118" });
const x03_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "x03:119" });
const x03_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "x03:120" });
const x03_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "x03:121" });
const x03_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "x03:122" });
const x03_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "x03:123" });
const x03_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "x03:124" });
const x03_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "x03:125" });
const x03_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "x03:126" });
const x03_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "x03:127" });
const x03_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "x03:128" });
const x03_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "x03:129" });
const x03_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "x03:130" });
const x03_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "x03:131" });
const x03_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "x03:132" });
const x03_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "x03:133" });
const x03_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "x03:134" });
const x03_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "x03:135" });
const x03_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "x03:136" });
const x03_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "x03:137" });
const x03_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "x03:138" });
const x03_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "x03:139" });
const x03_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "x03:140" });
const x03_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "x03:141" });
const x03_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "x03:142" });
const x03_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "x03:143" });
const x03_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "x03:144" });
const x03_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "x03:145" });
const x03_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "x03:146" });
const x03_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "x03:147" });
const x03_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "x03:148" });
const x03_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "x03:149" });
const x03_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "x03:150" });
const x03_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "x03:151" });
const x03_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "x03:152" });
const x03_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "x03:153" });
const x03_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "x03:154" });
const x03_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "x03:155" });
const x03_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "x03:156" });
const x03_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "x03:157" });
const x03_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "x03:158" });
const x03_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "x03:159" });
const x03_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "x03:160" });
const x03_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "x03:161" });
const x03_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "x03:162" });
const x03_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "x03:163" });
const x03_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "x03:164" });
const x03_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "x03:165" });
const x03_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "x03:166" });
const x03_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "x03:167" });
const x03_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "x03:168" });
const x03_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "x03:169" });
const x03_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "x03:170" });
const x03_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "x03:171" });
const x03_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "x03:172" });
const x03_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "x03:173" });
const x03_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "x03:174" });
const x03_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "x03:175" });
const x03_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "x03:176" });
const x03_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "x03:177" });
const x03_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "x03:178" });
const x03_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "x03:179" });
const x03_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "x03:180" });
const x03_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "x03:181" });
const x03_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "x03:182" });
const x03_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "x03:183" });
const x03_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "x03:184" });
const x03_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "x03:185" });
const x03_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "x03:186" });
const x03_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "x03:187" });
const x03_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "x03:188" });
const x03_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "x03:189" });
const x03_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "x03:190" });
const x03_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "x03:191" });
const x03_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "x03:192" });
const x03_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "x03:193" });
const x03_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "x03:194" });
const x03_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "x03:195" });
const x03_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "x03:196" });
const x03_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "x03:197" });
