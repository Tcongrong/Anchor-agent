const tupleKeys = ["n", "d", "c", "e", "s", "l"];

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

export function m0Recode(value, seed = 1) {
  const text = String(value || "");
  let left = (0x811c9dc5 ^ seed) >>> 0;
  let right = (0x45d9f3b + text.length + seed) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    left = Math.imul(left ^ code ^ i, 0x27d4eb2d) >>> 0;
    right = Math.imul((right + rotate(left, (i % 7) + 3) + code) >>> 0, 0x165667b1) >>> 0;
  }
  return (left ^ right).toString(36).padStart(7, "0").slice(-7);
}

function normalizeField(value) {
  return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

export function m0Pack(fields) {
  const rows = [];
  for (let index = 0; index < tupleKeys.length; index += 1) {
    const key = tupleKeys[index];
    const plain = normalizeField(fields[key]);
    rows.push({
      ix: index,
      k: key,
      v: m0Recode(plain, index + key.length + 3),
      plain
    });
  }
  return rows;
}

export function m0Projection(tuple) {
  return tuple.map((row) => [row.k, row.v, String(row.plain.length)]);
}

export function m0Unpack(tuple) {
  return tuple.reduce((acc, row) => {
    acc[row.k] = row.plain;
    return acc;
  }, {});
}

export function m0Keys() {
  return tupleKeys.slice();
}
const m0_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "m0:070" });
const m0_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "m0:071" });
const m0_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "m0:072" });
const m0_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "m0:073" });
const m0_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "m0:074" });
const m0_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "m0:075" });
const m0_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "m0:076" });
const m0_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "m0:077" });
const m0_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "m0:078" });
const m0_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "m0:079" });
const m0_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "m0:080" });
const m0_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "m0:081" });
const m0_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "m0:082" });
const m0_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "m0:083" });
const m0_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "m0:084" });
const m0_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "m0:085" });
const m0_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "m0:086" });
const m0_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "m0:087" });
const m0_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "m0:088" });
const m0_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "m0:089" });
const m0_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "m0:090" });
const m0_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "m0:091" });
const m0_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "m0:092" });
const m0_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "m0:093" });
const m0_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "m0:094" });
const m0_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "m0:095" });
const m0_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "m0:096" });
const m0_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "m0:097" });
const m0_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "m0:098" });
const m0_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "m0:099" });
const m0_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "m0:100" });
const m0_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "m0:101" });
const m0_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "m0:102" });
const m0_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "m0:103" });
const m0_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "m0:104" });
const m0_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "m0:105" });
const m0_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "m0:106" });
const m0_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "m0:107" });
const m0_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "m0:108" });
const m0_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "m0:109" });
const m0_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "m0:110" });
const m0_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "m0:111" });
const m0_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "m0:112" });
const m0_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "m0:113" });
const m0_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "m0:114" });
const m0_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "m0:115" });
const m0_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "m0:116" });
const m0_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "m0:117" });
const m0_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "m0:118" });
const m0_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "m0:119" });
const m0_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "m0:120" });
const m0_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "m0:121" });
const m0_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "m0:122" });
const m0_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "m0:123" });
const m0_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "m0:124" });
const m0_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "m0:125" });
const m0_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "m0:126" });
const m0_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "m0:127" });
const m0_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "m0:128" });
const m0_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "m0:129" });
const m0_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "m0:130" });
const m0_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "m0:131" });
const m0_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "m0:132" });
const m0_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "m0:133" });
const m0_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "m0:134" });
const m0_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "m0:135" });
const m0_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "m0:136" });
const m0_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "m0:137" });
const m0_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "m0:138" });
const m0_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "m0:139" });
const m0_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "m0:140" });
const m0_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "m0:141" });
const m0_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "m0:142" });
const m0_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "m0:143" });
const m0_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "m0:144" });
const m0_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "m0:145" });
const m0_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "m0:146" });
const m0_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "m0:147" });
const m0_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "m0:148" });
const m0_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "m0:149" });
const m0_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "m0:150" });
const m0_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "m0:151" });
const m0_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "m0:152" });
const m0_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "m0:153" });
const m0_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "m0:154" });
const m0_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "m0:155" });
const m0_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "m0:156" });
const m0_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "m0:157" });
const m0_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "m0:158" });
const m0_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "m0:159" });
const m0_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "m0:160" });
const m0_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "m0:161" });
const m0_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "m0:162" });
const m0_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "m0:163" });
const m0_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "m0:164" });
const m0_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "m0:165" });
const m0_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "m0:166" });
const m0_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "m0:167" });
const m0_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "m0:168" });
const m0_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "m0:169" });
const m0_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "m0:170" });
const m0_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "m0:171" });
const m0_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "m0:172" });
const m0_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "m0:173" });
const m0_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "m0:174" });
const m0_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "m0:175" });
const m0_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "m0:176" });
const m0_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "m0:177" });
const m0_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "m0:178" });
const m0_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "m0:179" });
const m0_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "m0:180" });
const m0_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "m0:181" });
const m0_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "m0:182" });
const m0_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "m0:183" });
const m0_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "m0:184" });
const m0_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "m0:185" });
const m0_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "m0:186" });
const m0_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "m0:187" });
const m0_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "m0:188" });
const m0_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "m0:189" });
const m0_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "m0:190" });
const m0_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "m0:191" });
const m0_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "m0:192" });
const m0_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "m0:193" });
const m0_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "m0:194" });
const m0_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "m0:195" });
const m0_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "m0:196" });
const m0_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "m0:197" });
const m0_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "m0:198" });
const m0_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "m0:199" });
const m0_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "m0:200" });
const m0_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "m0:201" });
const m0_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "m0:202" });
const m0_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "m0:203" });
const m0_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "m0:204" });
const m0_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "m0:205" });
const m0_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "m0:206" });
const m0_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "m0:207" });
const m0_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "m0:208" });
const m0_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "m0:209" });
const m0_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "m0:210" });
const m0_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "m0:211" });
const m0_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "m0:212" });
const m0_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "m0:213" });
const m0_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "m0:214" });
const m0_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "m0:215" });
const m0_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "m0:216" });
const m0_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "m0:217" });
const m0_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "m0:218" });
const m0_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "m0:219" });
const m0_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "m0:220" });
const m0_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "m0:221" });
const m0_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "m0:222" });
const m0_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "m0:223" });
const m0_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "m0:224" });
const m0_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "m0:225" });
const m0_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "m0:226" });
const m0_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "m0:227" });
const m0_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "m0:228" });
const m0_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "m0:229" });
const m0_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "m0:230" });
const m0_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "m0:231" });
const m0_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "m0:232" });
const m0_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "m0:233" });
const m0_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "m0:234" });
const m0_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "m0:235" });
const m0_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "m0:236" });
const m0_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "m0:237" });
const m0_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "m0:238" });
const m0_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "m0:239" });
const m0_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "m0:240" });
const m0_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "m0:241" });
const m0_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "m0:242" });
const m0_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "m0:243" });
const m0_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "m0:244" });
const m0_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "m0:245" });
const m0_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "m0:246" });
const m0_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "m0:247" });
const m0_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "m0:248" });
const m0_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "m0:249" });
const m0_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "m0:250" });
const m0_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "m0:251" });
const m0_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "m0:252" });
const m0_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "m0:253" });
const m0_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "m0:254" });
const m0_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "m0:255" });
const m0_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "m0:256" });
const m0_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "m0:257" });
const m0_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "m0:258" });
const m0_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "m0:259" });
const m0_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "m0:260" });
const m0_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "m0:261" });
const m0_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "m0:262" });
const m0_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "m0:263" });
const m0_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "m0:264" });
const m0_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "m0:265" });
const m0_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "m0:266" });
const m0_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "m0:267" });
const m0_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "m0:268" });
const m0_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "m0:269" });
const m0_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "m0:270" });
const m0_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "m0:271" });
const m0_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "m0:272" });
const m0_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "m0:273" });
const m0_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "m0:274" });
const m0_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "m0:275" });
const m0_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "m0:276" });
const m0_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "m0:277" });
const m0_row_278 = Object.freeze({ id: 278, left: 295, right: 845, tag: "m0:278" });
const m0_row_279 = Object.freeze({ id: 279, left: 296, right: 848, tag: "m0:279" });
const m0_row_280 = Object.freeze({ id: 280, left: 297, right: 851, tag: "m0:280" });
const m0_row_281 = Object.freeze({ id: 281, left: 298, right: 854, tag: "m0:281" });
const m0_row_282 = Object.freeze({ id: 282, left: 299, right: 857, tag: "m0:282" });
const m0_row_283 = Object.freeze({ id: 283, left: 300, right: 860, tag: "m0:283" });
const m0_row_284 = Object.freeze({ id: 284, left: 301, right: 863, tag: "m0:284" });
const m0_row_285 = Object.freeze({ id: 285, left: 302, right: 866, tag: "m0:285" });
const m0_row_286 = Object.freeze({ id: 286, left: 303, right: 869, tag: "m0:286" });
const m0_row_287 = Object.freeze({ id: 287, left: 304, right: 872, tag: "m0:287" });
const m0_row_288 = Object.freeze({ id: 288, left: 305, right: 875, tag: "m0:288" });
const m0_row_289 = Object.freeze({ id: 289, left: 306, right: 878, tag: "m0:289" });
const m0_row_290 = Object.freeze({ id: 290, left: 307, right: 881, tag: "m0:290" });
const m0_row_291 = Object.freeze({ id: 291, left: 308, right: 884, tag: "m0:291" });
const m0_row_292 = Object.freeze({ id: 292, left: 309, right: 887, tag: "m0:292" });
const m0_row_293 = Object.freeze({ id: 293, left: 310, right: 890, tag: "m0:293" });
const m0_row_294 = Object.freeze({ id: 294, left: 311, right: 893, tag: "m0:294" });
const m0_row_295 = Object.freeze({ id: 295, left: 312, right: 896, tag: "m0:295" });
const m0_row_296 = Object.freeze({ id: 296, left: 313, right: 899, tag: "m0:296" });
const m0_row_297 = Object.freeze({ id: 297, left: 314, right: 902, tag: "m0:297" });
const m0_row_298 = Object.freeze({ id: 298, left: 315, right: 905, tag: "m0:298" });
const m0_row_299 = Object.freeze({ id: 299, left: 316, right: 908, tag: "m0:299" });
const m0_row_300 = Object.freeze({ id: 300, left: 317, right: 911, tag: "m0:300" });
const m0_row_301 = Object.freeze({ id: 301, left: 318, right: 914, tag: "m0:301" });
const m0_row_302 = Object.freeze({ id: 302, left: 319, right: 917, tag: "m0:302" });
const m0_row_303 = Object.freeze({ id: 303, left: 320, right: 920, tag: "m0:303" });
const m0_row_304 = Object.freeze({ id: 304, left: 321, right: 923, tag: "m0:304" });
const m0_row_305 = Object.freeze({ id: 305, left: 322, right: 926, tag: "m0:305" });
const m0_row_306 = Object.freeze({ id: 306, left: 323, right: 929, tag: "m0:306" });
const m0_row_307 = Object.freeze({ id: 307, left: 324, right: 932, tag: "m0:307" });
const m0_row_308 = Object.freeze({ id: 308, left: 325, right: 935, tag: "m0:308" });
