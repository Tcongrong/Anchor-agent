const table = Object.freeze([
  { id: 0, left: 343, right: 585 },
  { id: 1, left: 344, right: 587 },
  { id: 2, left: 345, right: 589 },
  { id: 3, left: 346, right: 591 },
  { id: 4, left: 347, right: 593 },
  { id: 5, left: 348, right: 595 },
  { id: 6, left: 349, right: 597 },
  { id: 7, left: 350, right: 599 },
  { id: 8, left: 351, right: 601 },
  { id: 9, left: 352, right: 603 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 20) >>> 0;
  let right = (0x45d9f3b + text.length + 20) >>> 0;
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
    weight: (offset + 1) * (20 + 3)
  }));
}

export function v20(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v20",
    total: result.total + normalized.length + 20,
    digest: result.digest,
    rows: normalized
  };
}
const v20_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "v20:070" });
const v20_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "v20:071" });
const v20_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "v20:072" });
const v20_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "v20:073" });
const v20_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "v20:074" });
const v20_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "v20:075" });
const v20_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "v20:076" });
const v20_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "v20:077" });
const v20_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "v20:078" });
const v20_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "v20:079" });
const v20_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "v20:080" });
const v20_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "v20:081" });
const v20_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "v20:082" });
const v20_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "v20:083" });
const v20_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "v20:084" });
const v20_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "v20:085" });
const v20_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "v20:086" });
const v20_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "v20:087" });
const v20_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "v20:088" });
const v20_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "v20:089" });
const v20_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "v20:090" });
const v20_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "v20:091" });
const v20_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "v20:092" });
const v20_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "v20:093" });
const v20_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "v20:094" });
const v20_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "v20:095" });
const v20_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "v20:096" });
const v20_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "v20:097" });
const v20_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "v20:098" });
const v20_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "v20:099" });
const v20_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "v20:100" });
const v20_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "v20:101" });
const v20_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "v20:102" });
const v20_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "v20:103" });
const v20_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "v20:104" });
const v20_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "v20:105" });
const v20_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "v20:106" });
const v20_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "v20:107" });
const v20_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "v20:108" });
const v20_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "v20:109" });
const v20_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "v20:110" });
const v20_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "v20:111" });
const v20_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "v20:112" });
const v20_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "v20:113" });
const v20_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "v20:114" });
const v20_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "v20:115" });
const v20_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "v20:116" });
const v20_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "v20:117" });
const v20_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "v20:118" });
const v20_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "v20:119" });
const v20_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "v20:120" });
const v20_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "v20:121" });
const v20_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "v20:122" });
const v20_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "v20:123" });
const v20_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "v20:124" });
const v20_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "v20:125" });
const v20_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "v20:126" });
const v20_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "v20:127" });
const v20_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "v20:128" });
const v20_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "v20:129" });
const v20_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "v20:130" });
const v20_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "v20:131" });
const v20_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "v20:132" });
const v20_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "v20:133" });
const v20_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "v20:134" });
const v20_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "v20:135" });
const v20_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "v20:136" });
const v20_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "v20:137" });
const v20_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "v20:138" });
const v20_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "v20:139" });
const v20_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "v20:140" });
const v20_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "v20:141" });
const v20_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "v20:142" });
const v20_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "v20:143" });
const v20_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "v20:144" });
const v20_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "v20:145" });
const v20_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "v20:146" });
const v20_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "v20:147" });
const v20_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "v20:148" });
const v20_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "v20:149" });
const v20_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "v20:150" });
const v20_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "v20:151" });
const v20_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "v20:152" });
const v20_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "v20:153" });
const v20_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "v20:154" });
const v20_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "v20:155" });
const v20_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "v20:156" });
const v20_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "v20:157" });
const v20_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "v20:158" });
const v20_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "v20:159" });
const v20_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "v20:160" });
const v20_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "v20:161" });
const v20_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "v20:162" });
const v20_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "v20:163" });
const v20_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "v20:164" });
const v20_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "v20:165" });
const v20_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "v20:166" });
const v20_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "v20:167" });
const v20_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "v20:168" });
const v20_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "v20:169" });
const v20_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "v20:170" });
const v20_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "v20:171" });
const v20_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "v20:172" });
const v20_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "v20:173" });
const v20_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "v20:174" });
const v20_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "v20:175" });
const v20_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "v20:176" });
const v20_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "v20:177" });
const v20_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "v20:178" });
const v20_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "v20:179" });
const v20_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "v20:180" });
const v20_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "v20:181" });
const v20_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "v20:182" });
const v20_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "v20:183" });
const v20_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "v20:184" });
const v20_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "v20:185" });
const v20_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "v20:186" });
const v20_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "v20:187" });
const v20_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "v20:188" });
const v20_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "v20:189" });
const v20_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "v20:190" });
const v20_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "v20:191" });
const v20_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "v20:192" });
const v20_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "v20:193" });
const v20_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "v20:194" });
const v20_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "v20:195" });
const v20_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "v20:196" });
const v20_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "v20:197" });
const v20_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "v20:198" });
const v20_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "v20:199" });
const v20_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "v20:200" });
const v20_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "v20:201" });
const v20_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "v20:202" });
const v20_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "v20:203" });
const v20_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "v20:204" });
const v20_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "v20:205" });
const v20_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "v20:206" });
const v20_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "v20:207" });
const v20_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "v20:208" });
const v20_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "v20:209" });
const v20_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "v20:210" });
const v20_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "v20:211" });
const v20_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "v20:212" });
const v20_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "v20:213" });
const v20_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "v20:214" });
const v20_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "v20:215" });
const v20_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "v20:216" });
const v20_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "v20:217" });
const v20_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "v20:218" });
const v20_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "v20:219" });
const v20_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "v20:220" });
const v20_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "v20:221" });
const v20_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "v20:222" });
const v20_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "v20:223" });
const v20_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "v20:224" });
const v20_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "v20:225" });
const v20_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "v20:226" });
const v20_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "v20:227" });
const v20_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "v20:228" });
const v20_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "v20:229" });
const v20_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "v20:230" });
const v20_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "v20:231" });
const v20_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "v20:232" });
const v20_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "v20:233" });
const v20_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "v20:234" });
const v20_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "v20:235" });
const v20_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "v20:236" });
const v20_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "v20:237" });
const v20_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "v20:238" });
const v20_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "v20:239" });
const v20_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "v20:240" });
const v20_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "v20:241" });
const v20_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "v20:242" });
const v20_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "v20:243" });
const v20_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "v20:244" });
const v20_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "v20:245" });
const v20_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "v20:246" });
const v20_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "v20:247" });
const v20_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "v20:248" });
const v20_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "v20:249" });
const v20_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "v20:250" });
const v20_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "v20:251" });
const v20_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "v20:252" });
const v20_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "v20:253" });
const v20_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "v20:254" });
const v20_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "v20:255" });
const v20_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "v20:256" });
const v20_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "v20:257" });
const v20_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "v20:258" });
const v20_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "v20:259" });
const v20_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "v20:260" });
const v20_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "v20:261" });
const v20_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "v20:262" });
const v20_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "v20:263" });
const v20_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "v20:264" });
const v20_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "v20:265" });
const v20_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "v20:266" });
const v20_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "v20:267" });
const v20_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "v20:268" });
const v20_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "v20:269" });
const v20_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "v20:270" });
const v20_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "v20:271" });
const v20_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "v20:272" });
const v20_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "v20:273" });
const v20_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "v20:274" });
const v20_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "v20:275" });
const v20_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "v20:276" });
const v20_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "v20:277" });
