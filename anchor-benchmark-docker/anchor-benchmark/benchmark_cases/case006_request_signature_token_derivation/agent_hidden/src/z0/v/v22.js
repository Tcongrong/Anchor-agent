const table = Object.freeze([
  { id: 0, left: 377, right: 643 },
  { id: 1, left: 378, right: 645 },
  { id: 2, left: 379, right: 647 },
  { id: 3, left: 380, right: 649 },
  { id: 4, left: 381, right: 651 },
  { id: 5, left: 382, right: 653 },
  { id: 6, left: 383, right: 655 },
  { id: 7, left: 384, right: 657 },
  { id: 8, left: 385, right: 659 },
  { id: 9, left: 386, right: 661 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 22) >>> 0;
  let right = (0x45d9f3b + text.length + 22) >>> 0;
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
    weight: (offset + 1) * (22 + 3)
  }));
}

export function v22(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v22",
    total: result.total + normalized.length + 22,
    digest: result.digest,
    rows: normalized
  };
}
const v22_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "v22:070" });
const v22_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "v22:071" });
const v22_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "v22:072" });
const v22_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "v22:073" });
const v22_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "v22:074" });
const v22_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "v22:075" });
const v22_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "v22:076" });
const v22_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "v22:077" });
const v22_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "v22:078" });
const v22_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "v22:079" });
const v22_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "v22:080" });
const v22_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "v22:081" });
const v22_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "v22:082" });
const v22_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "v22:083" });
const v22_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "v22:084" });
const v22_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "v22:085" });
const v22_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "v22:086" });
const v22_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "v22:087" });
const v22_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "v22:088" });
const v22_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "v22:089" });
const v22_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "v22:090" });
const v22_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "v22:091" });
const v22_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "v22:092" });
const v22_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "v22:093" });
const v22_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "v22:094" });
const v22_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "v22:095" });
const v22_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "v22:096" });
const v22_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "v22:097" });
const v22_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "v22:098" });
const v22_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "v22:099" });
const v22_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "v22:100" });
const v22_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "v22:101" });
const v22_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "v22:102" });
const v22_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "v22:103" });
const v22_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "v22:104" });
const v22_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "v22:105" });
const v22_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "v22:106" });
const v22_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "v22:107" });
const v22_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "v22:108" });
const v22_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "v22:109" });
const v22_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "v22:110" });
const v22_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "v22:111" });
const v22_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "v22:112" });
const v22_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "v22:113" });
const v22_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "v22:114" });
const v22_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "v22:115" });
const v22_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "v22:116" });
const v22_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "v22:117" });
const v22_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "v22:118" });
const v22_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "v22:119" });
const v22_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "v22:120" });
const v22_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "v22:121" });
const v22_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "v22:122" });
const v22_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "v22:123" });
const v22_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "v22:124" });
const v22_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "v22:125" });
const v22_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "v22:126" });
const v22_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "v22:127" });
const v22_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "v22:128" });
const v22_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "v22:129" });
const v22_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "v22:130" });
const v22_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "v22:131" });
const v22_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "v22:132" });
const v22_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "v22:133" });
const v22_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "v22:134" });
const v22_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "v22:135" });
const v22_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "v22:136" });
const v22_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "v22:137" });
const v22_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "v22:138" });
const v22_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "v22:139" });
const v22_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "v22:140" });
const v22_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "v22:141" });
const v22_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "v22:142" });
const v22_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "v22:143" });
const v22_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "v22:144" });
const v22_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "v22:145" });
const v22_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "v22:146" });
const v22_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "v22:147" });
const v22_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "v22:148" });
const v22_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "v22:149" });
const v22_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "v22:150" });
const v22_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "v22:151" });
const v22_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "v22:152" });
const v22_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "v22:153" });
const v22_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "v22:154" });
const v22_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "v22:155" });
const v22_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "v22:156" });
const v22_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "v22:157" });
const v22_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "v22:158" });
const v22_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "v22:159" });
const v22_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "v22:160" });
const v22_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "v22:161" });
const v22_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "v22:162" });
const v22_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "v22:163" });
const v22_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "v22:164" });
const v22_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "v22:165" });
const v22_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "v22:166" });
const v22_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "v22:167" });
const v22_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "v22:168" });
const v22_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "v22:169" });
const v22_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "v22:170" });
const v22_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "v22:171" });
const v22_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "v22:172" });
const v22_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "v22:173" });
const v22_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "v22:174" });
const v22_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "v22:175" });
const v22_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "v22:176" });
const v22_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "v22:177" });
const v22_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "v22:178" });
const v22_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "v22:179" });
const v22_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "v22:180" });
const v22_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "v22:181" });
const v22_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "v22:182" });
const v22_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "v22:183" });
const v22_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "v22:184" });
const v22_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "v22:185" });
const v22_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "v22:186" });
const v22_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "v22:187" });
const v22_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "v22:188" });
const v22_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "v22:189" });
const v22_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "v22:190" });
const v22_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "v22:191" });
const v22_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "v22:192" });
const v22_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "v22:193" });
const v22_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "v22:194" });
const v22_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "v22:195" });
const v22_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "v22:196" });
const v22_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "v22:197" });
const v22_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "v22:198" });
const v22_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "v22:199" });
const v22_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "v22:200" });
const v22_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "v22:201" });
const v22_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "v22:202" });
const v22_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "v22:203" });
const v22_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "v22:204" });
const v22_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "v22:205" });
const v22_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "v22:206" });
const v22_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "v22:207" });
const v22_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "v22:208" });
const v22_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "v22:209" });
const v22_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "v22:210" });
const v22_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "v22:211" });
const v22_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "v22:212" });
const v22_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "v22:213" });
const v22_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "v22:214" });
const v22_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "v22:215" });
const v22_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "v22:216" });
const v22_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "v22:217" });
const v22_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "v22:218" });
const v22_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "v22:219" });
const v22_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "v22:220" });
const v22_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "v22:221" });
const v22_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "v22:222" });
const v22_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "v22:223" });
const v22_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "v22:224" });
const v22_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "v22:225" });
const v22_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "v22:226" });
const v22_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "v22:227" });
const v22_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "v22:228" });
const v22_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "v22:229" });
const v22_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "v22:230" });
const v22_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "v22:231" });
const v22_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "v22:232" });
const v22_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "v22:233" });
const v22_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "v22:234" });
const v22_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "v22:235" });
const v22_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "v22:236" });
const v22_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "v22:237" });
const v22_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "v22:238" });
const v22_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "v22:239" });
const v22_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "v22:240" });
const v22_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "v22:241" });
const v22_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "v22:242" });
const v22_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "v22:243" });
const v22_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "v22:244" });
const v22_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "v22:245" });
const v22_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "v22:246" });
const v22_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "v22:247" });
const v22_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "v22:248" });
const v22_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "v22:249" });
const v22_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "v22:250" });
const v22_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "v22:251" });
const v22_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "v22:252" });
const v22_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "v22:253" });
const v22_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "v22:254" });
const v22_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "v22:255" });
const v22_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "v22:256" });
const v22_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "v22:257" });
const v22_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "v22:258" });
const v22_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "v22:259" });
const v22_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "v22:260" });
const v22_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "v22:261" });
const v22_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "v22:262" });
const v22_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "v22:263" });
const v22_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "v22:264" });
const v22_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "v22:265" });
const v22_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "v22:266" });
const v22_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "v22:267" });
const v22_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "v22:268" });
const v22_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "v22:269" });
const v22_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "v22:270" });
const v22_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "v22:271" });
const v22_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "v22:272" });
const v22_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "v22:273" });
const v22_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "v22:274" });
const v22_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "v22:275" });
const v22_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "v22:276" });
const v22_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "v22:277" });
