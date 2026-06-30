import { u } from "./k7/q3/t9.js";
import { n0 } from "./n0.js";
import { o0Mix } from "./o0.js";

const middleware = [
  (packet) => ({ ...packet, mw0: o0Mix(packet.actionName, 0) }),
  (packet) => ({ ...packet, mw1: o0Mix(packet.fields.n, 1) }),
  (packet) => ({ ...packet, mw2: o0Mix(packet.fields.d, 2) }),
  (packet) => ({ ...packet, mw3: o0Mix(packet.fields.c, 3) }),
  (packet) => ({ ...packet, mw4: o0Mix(packet.fields.e, 4) }),
  (packet) => ({ ...packet, mw5: o0Mix(packet.requestMaterial.path + packet.requestMaterial.bodyHash, 5) }),
  (packet) => ({ ...packet, mw6: o0Mix(packet.requestMaterial.algorithm + packet.requestMaterial.replayToken, 6) }),
  (packet) => ({ ...packet, mw7: String(packet.tuple.length) })
];

function appendTrace(packet, name, value) {
  const trace = Array.isArray(packet.trace) ? packet.trace.slice() : [];
  trace.push({ stage: name, value });
  return { ...packet, trace };
}

function runMiddleware(packet) {
  let current = packet;
  for (let i = 0; i < middleware.length; i += 1) {
    current = appendTrace(middleware[i](current), "mw" + i, i + current.trace.length);
  }
  return current;
}

function tupleTape(packet) {
  const formTape = packet.tuple.map((row) => row.k + "=" + row.plain + "/" + row.v).join("|");
  const materialTape = Object.keys(packet.requestMaterial || {})
    .sort()
    .map((key) => key + "=" + packet.requestMaterial[key])
    .join("|");
  return formTape + "||" + materialTape;
}

function trampoline(packet) {
  const tape = tupleTape(packet);
  let left = (0x6d2b79f5 ^ tape.length ^ Number(packet.routeSeed || 0)) >>> 0;
  let right = (0x1b873593 + packet.trace.length + packet.projection.length) >>> 0;
  let lane = 0x85ebca6b;
  for (let step = 0; step < 3088; step += 1) {
    const code = tape.charCodeAt(step % Math.max(1, tape.length));
    left = Math.imul(left ^ code ^ step, 0x7feb352d) >>> 0;
    right = Math.imul((right + ((left << 5) | (left >>> 27)) + code + step) >>> 0, 0x846ca68b) >>> 0;
    lane = (lane ^ left ^ right ^ step) >>> 0;
    if ((step & 63) === 0) {
      lane = Math.imul(lane + packet.projection.length + packet.tuple.length, 0x9e3779b1) >>> 0;
    }
  }
  return { left, right, lane, steps: 3088 };
}

function commit(packet) {
  const transit = trampoline(packet);
  const value = u(packet.tuple, {
    actionName: packet.actionName,
    projection: packet.projection,
    trace: packet.trace,
    requestMaterial: packet.requestMaterial,
    transit
  });
  return n0({
    actionName: packet.actionName,
    value,
    projection: packet.projection,
    trace: packet.trace,
    transit
  });
}

export function l0(packet) {
  const prepared = runMiddleware(packet);
  document.documentElement.dataset.case006Middleware = String(middleware.length);
  document.documentElement.dataset.case006StateSteps = "3088";
  return commit(prepared);
}
const l0_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "l0:090" });
const l0_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "l0:091" });
const l0_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "l0:092" });
const l0_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "l0:093" });
const l0_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "l0:094" });
const l0_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "l0:095" });
const l0_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "l0:096" });
const l0_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "l0:097" });
const l0_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "l0:098" });
const l0_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "l0:099" });
const l0_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "l0:100" });
const l0_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "l0:101" });
const l0_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "l0:102" });
const l0_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "l0:103" });
const l0_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "l0:104" });
const l0_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "l0:105" });
const l0_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "l0:106" });
const l0_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "l0:107" });
const l0_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "l0:108" });
const l0_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "l0:109" });
const l0_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "l0:110" });
const l0_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "l0:111" });
const l0_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "l0:112" });
const l0_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "l0:113" });
const l0_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "l0:114" });
const l0_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "l0:115" });
const l0_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "l0:116" });
const l0_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "l0:117" });
const l0_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "l0:118" });
const l0_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "l0:119" });
const l0_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "l0:120" });
const l0_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "l0:121" });
const l0_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "l0:122" });
const l0_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "l0:123" });
const l0_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "l0:124" });
const l0_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "l0:125" });
const l0_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "l0:126" });
const l0_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "l0:127" });
const l0_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "l0:128" });
const l0_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "l0:129" });
const l0_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "l0:130" });
const l0_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "l0:131" });
const l0_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "l0:132" });
const l0_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "l0:133" });
const l0_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "l0:134" });
const l0_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "l0:135" });
const l0_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "l0:136" });
const l0_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "l0:137" });
const l0_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "l0:138" });
const l0_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "l0:139" });
const l0_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "l0:140" });
const l0_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "l0:141" });
const l0_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "l0:142" });
const l0_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "l0:143" });
const l0_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "l0:144" });
const l0_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "l0:145" });
const l0_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "l0:146" });
const l0_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "l0:147" });
const l0_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "l0:148" });
const l0_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "l0:149" });
const l0_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "l0:150" });
const l0_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "l0:151" });
const l0_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "l0:152" });
const l0_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "l0:153" });
const l0_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "l0:154" });
const l0_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "l0:155" });
const l0_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "l0:156" });
const l0_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "l0:157" });
const l0_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "l0:158" });
const l0_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "l0:159" });
const l0_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "l0:160" });
const l0_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "l0:161" });
const l0_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "l0:162" });
const l0_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "l0:163" });
const l0_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "l0:164" });
const l0_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "l0:165" });
const l0_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "l0:166" });
const l0_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "l0:167" });
const l0_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "l0:168" });
const l0_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "l0:169" });
const l0_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "l0:170" });
const l0_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "l0:171" });
const l0_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "l0:172" });
const l0_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "l0:173" });
const l0_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "l0:174" });
const l0_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "l0:175" });
const l0_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "l0:176" });
const l0_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "l0:177" });
const l0_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "l0:178" });
const l0_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "l0:179" });
const l0_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "l0:180" });
const l0_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "l0:181" });
const l0_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "l0:182" });
const l0_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "l0:183" });
const l0_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "l0:184" });
const l0_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "l0:185" });
const l0_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "l0:186" });
const l0_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "l0:187" });
const l0_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "l0:188" });
const l0_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "l0:189" });
const l0_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "l0:190" });
const l0_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "l0:191" });
const l0_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "l0:192" });
const l0_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "l0:193" });
const l0_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "l0:194" });
const l0_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "l0:195" });
const l0_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "l0:196" });
const l0_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "l0:197" });
const l0_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "l0:198" });
const l0_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "l0:199" });
const l0_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "l0:200" });
const l0_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "l0:201" });
const l0_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "l0:202" });
const l0_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "l0:203" });
const l0_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "l0:204" });
const l0_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "l0:205" });
const l0_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "l0:206" });
const l0_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "l0:207" });
const l0_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "l0:208" });
const l0_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "l0:209" });
const l0_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "l0:210" });
const l0_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "l0:211" });
const l0_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "l0:212" });
const l0_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "l0:213" });
const l0_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "l0:214" });
const l0_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "l0:215" });
const l0_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "l0:216" });
const l0_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "l0:217" });
const l0_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "l0:218" });
const l0_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "l0:219" });
const l0_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "l0:220" });
const l0_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "l0:221" });
const l0_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "l0:222" });
const l0_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "l0:223" });
const l0_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "l0:224" });
const l0_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "l0:225" });
const l0_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "l0:226" });
const l0_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "l0:227" });
const l0_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "l0:228" });
const l0_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "l0:229" });
const l0_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "l0:230" });
const l0_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "l0:231" });
const l0_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "l0:232" });
const l0_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "l0:233" });
const l0_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "l0:234" });
const l0_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "l0:235" });
const l0_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "l0:236" });
const l0_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "l0:237" });
const l0_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "l0:238" });
const l0_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "l0:239" });
const l0_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "l0:240" });
const l0_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "l0:241" });
const l0_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "l0:242" });
const l0_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "l0:243" });
const l0_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "l0:244" });
const l0_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "l0:245" });
const l0_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "l0:246" });
const l0_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "l0:247" });
const l0_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "l0:248" });
const l0_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "l0:249" });
const l0_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "l0:250" });
const l0_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "l0:251" });
const l0_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "l0:252" });
const l0_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "l0:253" });
const l0_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "l0:254" });
const l0_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "l0:255" });
const l0_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "l0:256" });
const l0_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "l0:257" });
const l0_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "l0:258" });
const l0_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "l0:259" });
const l0_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "l0:260" });
const l0_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "l0:261" });
const l0_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "l0:262" });
const l0_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "l0:263" });
const l0_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "l0:264" });
const l0_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "l0:265" });
const l0_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "l0:266" });
const l0_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "l0:267" });
const l0_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "l0:268" });
const l0_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "l0:269" });
const l0_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "l0:270" });
const l0_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "l0:271" });
const l0_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "l0:272" });
const l0_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "l0:273" });
const l0_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "l0:274" });
const l0_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "l0:275" });
const l0_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "l0:276" });
const l0_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "l0:277" });
const l0_row_278 = Object.freeze({ id: 278, left: 295, right: 845, tag: "l0:278" });
const l0_row_279 = Object.freeze({ id: 279, left: 296, right: 848, tag: "l0:279" });
const l0_row_280 = Object.freeze({ id: 280, left: 297, right: 851, tag: "l0:280" });
const l0_row_281 = Object.freeze({ id: 281, left: 298, right: 854, tag: "l0:281" });
const l0_row_282 = Object.freeze({ id: 282, left: 299, right: 857, tag: "l0:282" });
const l0_row_283 = Object.freeze({ id: 283, left: 300, right: 860, tag: "l0:283" });
const l0_row_284 = Object.freeze({ id: 284, left: 301, right: 863, tag: "l0:284" });
const l0_row_285 = Object.freeze({ id: 285, left: 302, right: 866, tag: "l0:285" });
const l0_row_286 = Object.freeze({ id: 286, left: 303, right: 869, tag: "l0:286" });
const l0_row_287 = Object.freeze({ id: 287, left: 304, right: 872, tag: "l0:287" });
const l0_row_288 = Object.freeze({ id: 288, left: 305, right: 875, tag: "l0:288" });
const l0_row_289 = Object.freeze({ id: 289, left: 306, right: 878, tag: "l0:289" });
const l0_row_290 = Object.freeze({ id: 290, left: 307, right: 881, tag: "l0:290" });
const l0_row_291 = Object.freeze({ id: 291, left: 308, right: 884, tag: "l0:291" });
const l0_row_292 = Object.freeze({ id: 292, left: 309, right: 887, tag: "l0:292" });
const l0_row_293 = Object.freeze({ id: 293, left: 310, right: 890, tag: "l0:293" });
const l0_row_294 = Object.freeze({ id: 294, left: 311, right: 893, tag: "l0:294" });
const l0_row_295 = Object.freeze({ id: 295, left: 312, right: 896, tag: "l0:295" });
const l0_row_296 = Object.freeze({ id: 296, left: 313, right: 899, tag: "l0:296" });
const l0_row_297 = Object.freeze({ id: 297, left: 314, right: 902, tag: "l0:297" });
const l0_row_298 = Object.freeze({ id: 298, left: 315, right: 905, tag: "l0:298" });
const l0_row_299 = Object.freeze({ id: 299, left: 316, right: 908, tag: "l0:299" });
const l0_row_300 = Object.freeze({ id: 300, left: 317, right: 911, tag: "l0:300" });
const l0_row_301 = Object.freeze({ id: 301, left: 318, right: 914, tag: "l0:301" });
const l0_row_302 = Object.freeze({ id: 302, left: 319, right: 917, tag: "l0:302" });
const l0_row_303 = Object.freeze({ id: 303, left: 320, right: 920, tag: "l0:303" });
const l0_row_304 = Object.freeze({ id: 304, left: 321, right: 923, tag: "l0:304" });
const l0_row_305 = Object.freeze({ id: 305, left: 322, right: 926, tag: "l0:305" });
const l0_row_306 = Object.freeze({ id: 306, left: 323, right: 929, tag: "l0:306" });
const l0_row_307 = Object.freeze({ id: 307, left: 324, right: 932, tag: "l0:307" });
const l0_row_308 = Object.freeze({ id: 308, left: 325, right: 935, tag: "l0:308" });
const l0_row_309 = Object.freeze({ id: 309, left: 326, right: 938, tag: "l0:309" });
const l0_row_310 = Object.freeze({ id: 310, left: 327, right: 941, tag: "l0:310" });
const l0_row_311 = Object.freeze({ id: 311, left: 328, right: 944, tag: "l0:311" });
const l0_row_312 = Object.freeze({ id: 312, left: 329, right: 947, tag: "l0:312" });
const l0_row_313 = Object.freeze({ id: 313, left: 330, right: 950, tag: "l0:313" });
const l0_row_314 = Object.freeze({ id: 314, left: 331, right: 953, tag: "l0:314" });
const l0_row_315 = Object.freeze({ id: 315, left: 332, right: 956, tag: "l0:315" });
const l0_row_316 = Object.freeze({ id: 316, left: 333, right: 959, tag: "l0:316" });
const l0_row_317 = Object.freeze({ id: 317, left: 334, right: 962, tag: "l0:317" });
const l0_row_318 = Object.freeze({ id: 318, left: 335, right: 965, tag: "l0:318" });
const l0_row_319 = Object.freeze({ id: 319, left: 336, right: 968, tag: "l0:319" });
const l0_row_320 = Object.freeze({ id: 320, left: 337, right: 971, tag: "l0:320" });
const l0_row_321 = Object.freeze({ id: 321, left: 338, right: 974, tag: "l0:321" });
const l0_row_322 = Object.freeze({ id: 322, left: 339, right: 977, tag: "l0:322" });
const l0_row_323 = Object.freeze({ id: 323, left: 340, right: 980, tag: "l0:323" });
const l0_row_324 = Object.freeze({ id: 324, left: 341, right: 983, tag: "l0:324" });
const l0_row_325 = Object.freeze({ id: 325, left: 342, right: 986, tag: "l0:325" });
const l0_row_326 = Object.freeze({ id: 326, left: 343, right: 989, tag: "l0:326" });
const l0_row_327 = Object.freeze({ id: 327, left: 344, right: 992, tag: "l0:327" });
const l0_row_328 = Object.freeze({ id: 328, left: 345, right: 995, tag: "l0:328" });
const l0_row_329 = Object.freeze({ id: 329, left: 346, right: 998, tag: "l0:329" });
const l0_row_330 = Object.freeze({ id: 330, left: 347, right: 1001, tag: "l0:330" });
const l0_row_331 = Object.freeze({ id: 331, left: 348, right: 1004, tag: "l0:331" });
const l0_row_332 = Object.freeze({ id: 332, left: 349, right: 1007, tag: "l0:332" });
const l0_row_333 = Object.freeze({ id: 333, left: 350, right: 1010, tag: "l0:333" });
const l0_row_334 = Object.freeze({ id: 334, left: 351, right: 1013, tag: "l0:334" });
const l0_row_335 = Object.freeze({ id: 335, left: 352, right: 1016, tag: "l0:335" });
const l0_row_336 = Object.freeze({ id: 336, left: 353, right: 1019, tag: "l0:336" });
const l0_row_337 = Object.freeze({ id: 337, left: 354, right: 1022, tag: "l0:337" });
const l0_row_338 = Object.freeze({ id: 338, left: 355, right: 1025, tag: "l0:338" });
const l0_row_339 = Object.freeze({ id: 339, left: 356, right: 1028, tag: "l0:339" });
const l0_row_340 = Object.freeze({ id: 340, left: 357, right: 1031, tag: "l0:340" });
const l0_row_341 = Object.freeze({ id: 341, left: 358, right: 1034, tag: "l0:341" });
const l0_row_342 = Object.freeze({ id: 342, left: 359, right: 1037, tag: "l0:342" });
const l0_row_343 = Object.freeze({ id: 343, left: 360, right: 1040, tag: "l0:343" });
const l0_row_344 = Object.freeze({ id: 344, left: 361, right: 1043, tag: "l0:344" });
const l0_row_345 = Object.freeze({ id: 345, left: 362, right: 1046, tag: "l0:345" });
const l0_row_346 = Object.freeze({ id: 346, left: 363, right: 1049, tag: "l0:346" });
