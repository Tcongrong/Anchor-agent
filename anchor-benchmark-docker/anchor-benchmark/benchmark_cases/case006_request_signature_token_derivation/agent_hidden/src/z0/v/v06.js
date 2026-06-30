const table = Object.freeze([
  { id: 0, left: 105, right: 179 },
  { id: 1, left: 106, right: 181 },
  { id: 2, left: 107, right: 183 },
  { id: 3, left: 108, right: 185 },
  { id: 4, left: 109, right: 187 },
  { id: 5, left: 110, right: 189 },
  { id: 6, left: 111, right: 191 },
  { id: 7, left: 112, right: 193 },
  { id: 8, left: 113, right: 195 },
  { id: 9, left: 114, right: 197 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 6) >>> 0;
  let right = (0x45d9f3b + text.length + 6) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    const row = table[i % table.length];
    left = Math.imul(left ^ code ^ row.left ^ i, 0x27d4eb2d) >>> 0;
    right = Math.imul((right + rotate(left, (i % 9) + 3) + row.right) >>> 0, 0x165667b1) >>> 0;
  }
  return {
    total: (left ^ right ^ text.length) >>> 0,
    digest: (left ^ right).toString(36).padStart(9, "0").slice(-9)
  };
}

function normalizeRows(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return rows.map((value, offset) => ({
    offset,
    value: Number(value || 0),
    weight: (offset + 1) * (6 + 3)
  }));
}

export function v06(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v06",
    total: result.total + normalized.length + 6,
    digest: result.digest,
    rows: normalized
  };
}
const v06_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "v06:070" });
const v06_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "v06:071" });
const v06_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "v06:072" });
const v06_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "v06:073" });
const v06_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "v06:074" });
const v06_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "v06:075" });
const v06_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "v06:076" });
const v06_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "v06:077" });
const v06_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "v06:078" });
const v06_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "v06:079" });
const v06_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "v06:080" });
const v06_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "v06:081" });
const v06_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "v06:082" });
const v06_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "v06:083" });
const v06_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "v06:084" });
const v06_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "v06:085" });
const v06_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "v06:086" });
const v06_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "v06:087" });
const v06_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "v06:088" });
const v06_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "v06:089" });
const v06_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "v06:090" });
const v06_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "v06:091" });
const v06_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "v06:092" });
const v06_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "v06:093" });
const v06_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "v06:094" });
const v06_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "v06:095" });
const v06_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "v06:096" });
const v06_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "v06:097" });
const v06_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "v06:098" });
const v06_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "v06:099" });
const v06_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "v06:100" });
const v06_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "v06:101" });
const v06_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "v06:102" });
const v06_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "v06:103" });
const v06_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "v06:104" });
const v06_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "v06:105" });
const v06_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "v06:106" });
const v06_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "v06:107" });
const v06_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "v06:108" });
const v06_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "v06:109" });
const v06_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "v06:110" });
const v06_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "v06:111" });
const v06_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "v06:112" });
const v06_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "v06:113" });
const v06_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "v06:114" });
const v06_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "v06:115" });
const v06_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "v06:116" });
const v06_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "v06:117" });
const v06_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "v06:118" });
const v06_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "v06:119" });
const v06_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "v06:120" });
const v06_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "v06:121" });
const v06_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "v06:122" });
const v06_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "v06:123" });
const v06_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "v06:124" });
const v06_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "v06:125" });
const v06_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "v06:126" });
const v06_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "v06:127" });
const v06_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "v06:128" });
const v06_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "v06:129" });
const v06_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "v06:130" });
const v06_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "v06:131" });
const v06_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "v06:132" });
const v06_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "v06:133" });
const v06_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "v06:134" });
const v06_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "v06:135" });
const v06_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "v06:136" });
const v06_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "v06:137" });
const v06_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "v06:138" });
const v06_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "v06:139" });
const v06_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "v06:140" });
const v06_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "v06:141" });
const v06_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "v06:142" });
const v06_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "v06:143" });
const v06_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "v06:144" });
const v06_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "v06:145" });
const v06_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "v06:146" });
const v06_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "v06:147" });
const v06_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "v06:148" });
const v06_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "v06:149" });
const v06_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "v06:150" });
const v06_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "v06:151" });
const v06_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "v06:152" });
const v06_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "v06:153" });
const v06_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "v06:154" });
const v06_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "v06:155" });
const v06_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "v06:156" });
const v06_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "v06:157" });
const v06_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "v06:158" });
const v06_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "v06:159" });
const v06_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "v06:160" });
const v06_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "v06:161" });
const v06_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "v06:162" });
const v06_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "v06:163" });
const v06_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "v06:164" });
const v06_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "v06:165" });
const v06_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "v06:166" });
const v06_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "v06:167" });
const v06_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "v06:168" });
const v06_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "v06:169" });
const v06_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "v06:170" });
const v06_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "v06:171" });
const v06_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "v06:172" });
const v06_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "v06:173" });
const v06_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "v06:174" });
const v06_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "v06:175" });
const v06_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "v06:176" });
const v06_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "v06:177" });
const v06_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "v06:178" });
const v06_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "v06:179" });
const v06_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "v06:180" });
const v06_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "v06:181" });
const v06_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "v06:182" });
const v06_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "v06:183" });
const v06_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "v06:184" });
const v06_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "v06:185" });
const v06_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "v06:186" });
const v06_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "v06:187" });
const v06_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "v06:188" });
const v06_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "v06:189" });
const v06_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "v06:190" });
const v06_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "v06:191" });
const v06_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "v06:192" });
const v06_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "v06:193" });
const v06_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "v06:194" });
const v06_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "v06:195" });
const v06_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "v06:196" });
const v06_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "v06:197" });
const v06_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "v06:198" });
const v06_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "v06:199" });
const v06_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "v06:200" });
const v06_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "v06:201" });
const v06_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "v06:202" });
const v06_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "v06:203" });
const v06_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "v06:204" });
const v06_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "v06:205" });
const v06_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "v06:206" });
const v06_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "v06:207" });
const v06_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "v06:208" });
const v06_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "v06:209" });
const v06_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "v06:210" });
const v06_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "v06:211" });
const v06_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "v06:212" });
const v06_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "v06:213" });
const v06_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "v06:214" });
const v06_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "v06:215" });
const v06_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "v06:216" });
const v06_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "v06:217" });
const v06_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "v06:218" });
const v06_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "v06:219" });
const v06_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "v06:220" });
const v06_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "v06:221" });
const v06_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "v06:222" });
const v06_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "v06:223" });
const v06_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "v06:224" });
const v06_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "v06:225" });
const v06_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "v06:226" });
const v06_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "v06:227" });
const v06_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "v06:228" });
const v06_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "v06:229" });
const v06_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "v06:230" });
const v06_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "v06:231" });
const v06_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "v06:232" });
const v06_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "v06:233" });
const v06_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "v06:234" });
const v06_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "v06:235" });
const v06_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "v06:236" });
const v06_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "v06:237" });
const v06_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "v06:238" });
const v06_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "v06:239" });
const v06_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "v06:240" });
const v06_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "v06:241" });
const v06_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "v06:242" });
const v06_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "v06:243" });
const v06_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "v06:244" });
const v06_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "v06:245" });
const v06_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "v06:246" });
const v06_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "v06:247" });
const v06_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "v06:248" });
const v06_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "v06:249" });
const v06_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "v06:250" });
const v06_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "v06:251" });
const v06_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "v06:252" });
const v06_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "v06:253" });
const v06_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "v06:254" });
const v06_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "v06:255" });
const v06_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "v06:256" });
const v06_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "v06:257" });
const v06_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "v06:258" });
const v06_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "v06:259" });
const v06_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "v06:260" });
const v06_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "v06:261" });
const v06_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "v06:262" });
const v06_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "v06:263" });
const v06_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "v06:264" });
const v06_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "v06:265" });
const v06_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "v06:266" });
const v06_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "v06:267" });
const v06_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "v06:268" });
const v06_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "v06:269" });
const v06_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "v06:270" });
const v06_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "v06:271" });
const v06_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "v06:272" });
const v06_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "v06:273" });
const v06_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "v06:274" });
const v06_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "v06:275" });
const v06_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "v06:276" });
const v06_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "v06:277" });
