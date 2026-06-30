const table = Object.freeze([
  { id: 0, left: 411, right: 701 },
  { id: 1, left: 412, right: 703 },
  { id: 2, left: 413, right: 705 },
  { id: 3, left: 414, right: 707 },
  { id: 4, left: 415, right: 709 },
  { id: 5, left: 416, right: 711 },
  { id: 6, left: 417, right: 713 },
  { id: 7, left: 418, right: 715 },
  { id: 8, left: 419, right: 717 },
  { id: 9, left: 420, right: 719 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 24) >>> 0;
  let right = (0x45d9f3b + text.length + 24) >>> 0;
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
    weight: (offset + 1) * (24 + 3)
  }));
}

export function v24(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v24",
    total: result.total + normalized.length + 24,
    digest: result.digest,
    rows: normalized
  };
}
const v24_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "v24:070" });
const v24_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "v24:071" });
const v24_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "v24:072" });
const v24_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "v24:073" });
const v24_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "v24:074" });
const v24_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "v24:075" });
const v24_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "v24:076" });
const v24_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "v24:077" });
const v24_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "v24:078" });
const v24_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "v24:079" });
const v24_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "v24:080" });
const v24_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "v24:081" });
const v24_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "v24:082" });
const v24_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "v24:083" });
const v24_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "v24:084" });
const v24_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "v24:085" });
const v24_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "v24:086" });
const v24_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "v24:087" });
const v24_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "v24:088" });
const v24_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "v24:089" });
const v24_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "v24:090" });
const v24_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "v24:091" });
const v24_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "v24:092" });
const v24_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "v24:093" });
const v24_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "v24:094" });
const v24_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "v24:095" });
const v24_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "v24:096" });
const v24_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "v24:097" });
const v24_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "v24:098" });
const v24_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "v24:099" });
const v24_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "v24:100" });
const v24_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "v24:101" });
const v24_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "v24:102" });
const v24_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "v24:103" });
const v24_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "v24:104" });
const v24_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "v24:105" });
const v24_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "v24:106" });
const v24_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "v24:107" });
const v24_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "v24:108" });
const v24_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "v24:109" });
const v24_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "v24:110" });
const v24_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "v24:111" });
const v24_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "v24:112" });
const v24_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "v24:113" });
const v24_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "v24:114" });
const v24_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "v24:115" });
const v24_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "v24:116" });
const v24_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "v24:117" });
const v24_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "v24:118" });
const v24_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "v24:119" });
const v24_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "v24:120" });
const v24_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "v24:121" });
const v24_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "v24:122" });
const v24_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "v24:123" });
const v24_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "v24:124" });
const v24_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "v24:125" });
const v24_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "v24:126" });
const v24_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "v24:127" });
const v24_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "v24:128" });
const v24_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "v24:129" });
const v24_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "v24:130" });
const v24_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "v24:131" });
const v24_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "v24:132" });
const v24_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "v24:133" });
const v24_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "v24:134" });
const v24_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "v24:135" });
const v24_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "v24:136" });
const v24_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "v24:137" });
const v24_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "v24:138" });
const v24_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "v24:139" });
const v24_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "v24:140" });
const v24_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "v24:141" });
const v24_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "v24:142" });
const v24_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "v24:143" });
const v24_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "v24:144" });
const v24_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "v24:145" });
const v24_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "v24:146" });
const v24_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "v24:147" });
const v24_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "v24:148" });
const v24_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "v24:149" });
const v24_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "v24:150" });
const v24_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "v24:151" });
const v24_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "v24:152" });
const v24_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "v24:153" });
const v24_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "v24:154" });
const v24_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "v24:155" });
const v24_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "v24:156" });
const v24_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "v24:157" });
const v24_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "v24:158" });
const v24_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "v24:159" });
const v24_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "v24:160" });
const v24_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "v24:161" });
const v24_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "v24:162" });
const v24_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "v24:163" });
const v24_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "v24:164" });
const v24_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "v24:165" });
const v24_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "v24:166" });
const v24_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "v24:167" });
const v24_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "v24:168" });
const v24_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "v24:169" });
const v24_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "v24:170" });
const v24_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "v24:171" });
const v24_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "v24:172" });
const v24_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "v24:173" });
const v24_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "v24:174" });
const v24_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "v24:175" });
const v24_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "v24:176" });
const v24_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "v24:177" });
const v24_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "v24:178" });
const v24_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "v24:179" });
const v24_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "v24:180" });
const v24_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "v24:181" });
const v24_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "v24:182" });
const v24_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "v24:183" });
const v24_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "v24:184" });
const v24_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "v24:185" });
const v24_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "v24:186" });
const v24_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "v24:187" });
const v24_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "v24:188" });
const v24_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "v24:189" });
const v24_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "v24:190" });
const v24_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "v24:191" });
const v24_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "v24:192" });
const v24_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "v24:193" });
const v24_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "v24:194" });
const v24_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "v24:195" });
const v24_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "v24:196" });
const v24_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "v24:197" });
const v24_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "v24:198" });
const v24_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "v24:199" });
const v24_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "v24:200" });
const v24_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "v24:201" });
const v24_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "v24:202" });
const v24_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "v24:203" });
const v24_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "v24:204" });
const v24_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "v24:205" });
const v24_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "v24:206" });
const v24_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "v24:207" });
const v24_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "v24:208" });
const v24_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "v24:209" });
const v24_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "v24:210" });
const v24_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "v24:211" });
const v24_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "v24:212" });
const v24_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "v24:213" });
const v24_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "v24:214" });
const v24_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "v24:215" });
const v24_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "v24:216" });
const v24_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "v24:217" });
const v24_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "v24:218" });
const v24_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "v24:219" });
const v24_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "v24:220" });
const v24_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "v24:221" });
const v24_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "v24:222" });
const v24_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "v24:223" });
const v24_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "v24:224" });
const v24_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "v24:225" });
const v24_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "v24:226" });
const v24_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "v24:227" });
const v24_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "v24:228" });
const v24_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "v24:229" });
const v24_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "v24:230" });
const v24_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "v24:231" });
const v24_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "v24:232" });
const v24_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "v24:233" });
const v24_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "v24:234" });
const v24_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "v24:235" });
const v24_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "v24:236" });
const v24_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "v24:237" });
const v24_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "v24:238" });
const v24_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "v24:239" });
const v24_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "v24:240" });
const v24_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "v24:241" });
const v24_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "v24:242" });
const v24_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "v24:243" });
const v24_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "v24:244" });
const v24_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "v24:245" });
const v24_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "v24:246" });
const v24_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "v24:247" });
const v24_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "v24:248" });
const v24_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "v24:249" });
const v24_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "v24:250" });
const v24_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "v24:251" });
const v24_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "v24:252" });
const v24_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "v24:253" });
const v24_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "v24:254" });
const v24_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "v24:255" });
const v24_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "v24:256" });
const v24_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "v24:257" });
const v24_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "v24:258" });
const v24_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "v24:259" });
const v24_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "v24:260" });
const v24_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "v24:261" });
const v24_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "v24:262" });
const v24_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "v24:263" });
const v24_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "v24:264" });
const v24_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "v24:265" });
const v24_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "v24:266" });
const v24_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "v24:267" });
const v24_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "v24:268" });
const v24_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "v24:269" });
const v24_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "v24:270" });
const v24_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "v24:271" });
const v24_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "v24:272" });
const v24_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "v24:273" });
const v24_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "v24:274" });
const v24_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "v24:275" });
const v24_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "v24:276" });
const v24_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "v24:277" });
