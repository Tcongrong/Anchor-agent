const table = Object.freeze([
  { id: 0, left: 241, right: 411 },
  { id: 1, left: 242, right: 413 },
  { id: 2, left: 243, right: 415 },
  { id: 3, left: 244, right: 417 },
  { id: 4, left: 245, right: 419 },
  { id: 5, left: 246, right: 421 },
  { id: 6, left: 247, right: 423 },
  { id: 7, left: 248, right: 425 },
  { id: 8, left: 249, right: 427 },
  { id: 9, left: 250, right: 429 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 14) >>> 0;
  let right = (0x45d9f3b + text.length + 14) >>> 0;
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
    weight: (offset + 1) * (14 + 3)
  }));
}

export function v14(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v14",
    total: result.total + normalized.length + 14,
    digest: result.digest,
    rows: normalized
  };
}
const v14_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "v14:070" });
const v14_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "v14:071" });
const v14_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "v14:072" });
const v14_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "v14:073" });
const v14_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "v14:074" });
const v14_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "v14:075" });
const v14_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "v14:076" });
const v14_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "v14:077" });
const v14_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "v14:078" });
const v14_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "v14:079" });
const v14_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "v14:080" });
const v14_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "v14:081" });
const v14_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "v14:082" });
const v14_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "v14:083" });
const v14_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "v14:084" });
const v14_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "v14:085" });
const v14_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "v14:086" });
const v14_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "v14:087" });
const v14_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "v14:088" });
const v14_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "v14:089" });
const v14_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "v14:090" });
const v14_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "v14:091" });
const v14_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "v14:092" });
const v14_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "v14:093" });
const v14_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "v14:094" });
const v14_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "v14:095" });
const v14_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "v14:096" });
const v14_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "v14:097" });
const v14_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "v14:098" });
const v14_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "v14:099" });
const v14_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "v14:100" });
const v14_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "v14:101" });
const v14_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "v14:102" });
const v14_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "v14:103" });
const v14_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "v14:104" });
const v14_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "v14:105" });
const v14_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "v14:106" });
const v14_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "v14:107" });
const v14_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "v14:108" });
const v14_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "v14:109" });
const v14_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "v14:110" });
const v14_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "v14:111" });
const v14_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "v14:112" });
const v14_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "v14:113" });
const v14_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "v14:114" });
const v14_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "v14:115" });
const v14_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "v14:116" });
const v14_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "v14:117" });
const v14_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "v14:118" });
const v14_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "v14:119" });
const v14_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "v14:120" });
const v14_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "v14:121" });
const v14_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "v14:122" });
const v14_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "v14:123" });
const v14_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "v14:124" });
const v14_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "v14:125" });
const v14_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "v14:126" });
const v14_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "v14:127" });
const v14_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "v14:128" });
const v14_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "v14:129" });
const v14_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "v14:130" });
const v14_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "v14:131" });
const v14_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "v14:132" });
const v14_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "v14:133" });
const v14_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "v14:134" });
const v14_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "v14:135" });
const v14_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "v14:136" });
const v14_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "v14:137" });
const v14_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "v14:138" });
const v14_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "v14:139" });
const v14_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "v14:140" });
const v14_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "v14:141" });
const v14_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "v14:142" });
const v14_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "v14:143" });
const v14_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "v14:144" });
const v14_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "v14:145" });
const v14_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "v14:146" });
const v14_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "v14:147" });
const v14_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "v14:148" });
const v14_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "v14:149" });
const v14_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "v14:150" });
const v14_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "v14:151" });
const v14_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "v14:152" });
const v14_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "v14:153" });
const v14_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "v14:154" });
const v14_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "v14:155" });
const v14_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "v14:156" });
const v14_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "v14:157" });
const v14_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "v14:158" });
const v14_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "v14:159" });
const v14_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "v14:160" });
const v14_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "v14:161" });
const v14_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "v14:162" });
const v14_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "v14:163" });
const v14_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "v14:164" });
const v14_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "v14:165" });
const v14_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "v14:166" });
const v14_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "v14:167" });
const v14_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "v14:168" });
const v14_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "v14:169" });
const v14_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "v14:170" });
const v14_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "v14:171" });
const v14_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "v14:172" });
const v14_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "v14:173" });
const v14_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "v14:174" });
const v14_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "v14:175" });
const v14_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "v14:176" });
const v14_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "v14:177" });
const v14_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "v14:178" });
const v14_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "v14:179" });
const v14_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "v14:180" });
const v14_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "v14:181" });
const v14_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "v14:182" });
const v14_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "v14:183" });
const v14_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "v14:184" });
const v14_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "v14:185" });
const v14_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "v14:186" });
const v14_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "v14:187" });
const v14_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "v14:188" });
const v14_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "v14:189" });
const v14_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "v14:190" });
const v14_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "v14:191" });
const v14_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "v14:192" });
const v14_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "v14:193" });
const v14_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "v14:194" });
const v14_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "v14:195" });
const v14_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "v14:196" });
const v14_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "v14:197" });
const v14_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "v14:198" });
const v14_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "v14:199" });
const v14_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "v14:200" });
const v14_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "v14:201" });
const v14_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "v14:202" });
const v14_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "v14:203" });
const v14_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "v14:204" });
const v14_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "v14:205" });
const v14_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "v14:206" });
const v14_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "v14:207" });
const v14_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "v14:208" });
const v14_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "v14:209" });
const v14_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "v14:210" });
const v14_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "v14:211" });
const v14_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "v14:212" });
const v14_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "v14:213" });
const v14_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "v14:214" });
const v14_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "v14:215" });
const v14_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "v14:216" });
const v14_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "v14:217" });
const v14_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "v14:218" });
const v14_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "v14:219" });
const v14_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "v14:220" });
const v14_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "v14:221" });
const v14_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "v14:222" });
const v14_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "v14:223" });
const v14_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "v14:224" });
const v14_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "v14:225" });
const v14_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "v14:226" });
const v14_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "v14:227" });
const v14_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "v14:228" });
const v14_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "v14:229" });
const v14_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "v14:230" });
const v14_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "v14:231" });
const v14_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "v14:232" });
const v14_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "v14:233" });
const v14_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "v14:234" });
const v14_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "v14:235" });
const v14_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "v14:236" });
const v14_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "v14:237" });
const v14_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "v14:238" });
const v14_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "v14:239" });
const v14_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "v14:240" });
const v14_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "v14:241" });
const v14_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "v14:242" });
const v14_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "v14:243" });
const v14_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "v14:244" });
const v14_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "v14:245" });
const v14_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "v14:246" });
const v14_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "v14:247" });
const v14_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "v14:248" });
const v14_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "v14:249" });
const v14_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "v14:250" });
const v14_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "v14:251" });
const v14_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "v14:252" });
const v14_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "v14:253" });
const v14_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "v14:254" });
const v14_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "v14:255" });
const v14_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "v14:256" });
const v14_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "v14:257" });
const v14_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "v14:258" });
const v14_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "v14:259" });
const v14_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "v14:260" });
const v14_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "v14:261" });
const v14_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "v14:262" });
const v14_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "v14:263" });
const v14_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "v14:264" });
const v14_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "v14:265" });
const v14_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "v14:266" });
const v14_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "v14:267" });
const v14_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "v14:268" });
const v14_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "v14:269" });
const v14_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "v14:270" });
const v14_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "v14:271" });
const v14_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "v14:272" });
const v14_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "v14:273" });
const v14_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "v14:274" });
const v14_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "v14:275" });
const v14_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "v14:276" });
const v14_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "v14:277" });
