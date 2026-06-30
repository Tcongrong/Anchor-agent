
import { x00 } from "./x/x00.js";
import { x01 } from "./x/x01.js";
import { x02 } from "./x/x02.js";
import { x03 } from "./x/x03.js";
import { x04 } from "./x/x04.js";
import { x05 } from "./x/x05.js";
import { x06 } from "./x/x06.js";
import { x07 } from "./x/x07.js";
import { x08 } from "./x/x08.js";
import { x09 } from "./x/x09.js";
import { x10 } from "./x/x10.js";
import { x11 } from "./x/x11.js";
import { x12 } from "./x/x12.js";
import { x13 } from "./x/x13.js";
import { x14 } from "./x/x14.js";
import { x15 } from "./x/x15.js";
import { x16 } from "./x/x16.js";
import { x17 } from "./x/x17.js";
import { x18 } from "./x/x18.js";
import { x19 } from "./x/x19.js";
import { x20 } from "./x/x20.js";
import { x21 } from "./x/x21.js";
import { x22 } from "./x/x22.js";
import { x23 } from "./x/x23.js";
import { x24 } from "./x/x24.js";
import { x25 } from "./x/x25.js";
import { x26 } from "./x/x26.js";
import { x27 } from "./x/x27.js";
import { x28 } from "./x/x28.js";
import { x29 } from "./x/x29.js";
import { x30 } from "./x/x30.js";
import { x31 } from "./x/x31.js";
import { x32 } from "./x/x32.js";
import { x33 } from "./x/x33.js";
import { x34 } from "./x/x34.js";
import { x35 } from "./x/x35.js";
import { x36 } from "./x/x36.js";
import { x37 } from "./x/x37.js";
import { x38 } from "./x/x38.js";
import { x39 } from "./x/x39.js";
import { x40 } from "./x/x40.js";
import { x41 } from "./x/x41.js";
import { x42 } from "./x/x42.js";
import { x43 } from "./x/x43.js";
const decoyFns = [
  x00,
  x01,
  x02,
  x03,
  x04,
  x05,
  x06,
  x07,
  x08,
  x09,
  x10,
  x11,
  x12,
  x13,
  x14,
  x15,
  x16,
  x17,
  x18,
  x19,
  x20,
  x21,
  x22,
  x23,
  x24,
  x25,
  x26,
  x27,
  x28,
  x29,
  x30,
  x31,
  x32,
  x33,
  x34,
  x35,
  x36,
  x37,
  x38,
  x39,
  x40,
  x41,
  x42,
  x43
];
function writeShadows(outputs) {
  const root = document.documentElement;
  outputs.slice(0, 6).forEach((item, index) => { root.dataset["shadowProof" + index] = item.value; });
  window.__signatureShadowCache = outputs.map((item) => ({ slot: item.slot, value: item.value, branch: item.branch }));
}
function emitShadowLogs(outputs) {
  if (outputs[0]) console.debug({ action: "vault.shadow", shadow_sig: outputs[0].value, slot: outputs[0].slot });
  if (outputs[1]) console.info({ action: "vault.preview", preview_sig: outputs[1].value, slot: outputs[1].slot });
}
function runSubmitDecoys(envelope) {
  const outputs = [];
  for (let i = 0; i < 12; i += 1) outputs.push(decoyFns[i](envelope));
  return outputs;
}
export function p0(envelope) {
  const outputs = runSubmitDecoys(envelope);
  writeShadows(outputs);
  emitShadowLogs(outputs);
  return outputs;
}
export function p0All(envelope) {
  return decoyFns.map((fn) => fn(envelope));
}
const p0_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "p0:114" });
const p0_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "p0:115" });
const p0_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "p0:116" });
const p0_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "p0:117" });
const p0_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "p0:118" });
const p0_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "p0:119" });
const p0_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "p0:120" });
const p0_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "p0:121" });
const p0_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "p0:122" });
const p0_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "p0:123" });
const p0_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "p0:124" });
const p0_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "p0:125" });
const p0_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "p0:126" });
const p0_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "p0:127" });
const p0_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "p0:128" });
const p0_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "p0:129" });
const p0_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "p0:130" });
const p0_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "p0:131" });
const p0_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "p0:132" });
const p0_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "p0:133" });
const p0_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "p0:134" });
const p0_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "p0:135" });
const p0_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "p0:136" });
const p0_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "p0:137" });
const p0_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "p0:138" });
const p0_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "p0:139" });
const p0_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "p0:140" });
const p0_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "p0:141" });
const p0_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "p0:142" });
const p0_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "p0:143" });
const p0_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "p0:144" });
const p0_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "p0:145" });
const p0_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "p0:146" });
const p0_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "p0:147" });
const p0_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "p0:148" });
const p0_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "p0:149" });
const p0_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "p0:150" });
const p0_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "p0:151" });
const p0_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "p0:152" });
const p0_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "p0:153" });
const p0_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "p0:154" });
const p0_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "p0:155" });
const p0_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "p0:156" });
const p0_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "p0:157" });
const p0_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "p0:158" });
const p0_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "p0:159" });
const p0_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "p0:160" });
const p0_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "p0:161" });
const p0_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "p0:162" });
const p0_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "p0:163" });
const p0_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "p0:164" });
const p0_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "p0:165" });
const p0_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "p0:166" });
const p0_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "p0:167" });
const p0_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "p0:168" });
const p0_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "p0:169" });
const p0_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "p0:170" });
const p0_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "p0:171" });
const p0_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "p0:172" });
const p0_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "p0:173" });
const p0_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "p0:174" });
const p0_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "p0:175" });
const p0_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "p0:176" });
const p0_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "p0:177" });
const p0_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "p0:178" });
const p0_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "p0:179" });
const p0_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "p0:180" });
const p0_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "p0:181" });
const p0_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "p0:182" });
const p0_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "p0:183" });
const p0_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "p0:184" });
const p0_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "p0:185" });
const p0_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "p0:186" });
const p0_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "p0:187" });
const p0_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "p0:188" });
const p0_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "p0:189" });
const p0_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "p0:190" });
const p0_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "p0:191" });
const p0_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "p0:192" });
const p0_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "p0:193" });
const p0_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "p0:194" });
const p0_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "p0:195" });
const p0_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "p0:196" });
const p0_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "p0:197" });
const p0_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "p0:198" });
const p0_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "p0:199" });
const p0_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "p0:200" });
const p0_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "p0:201" });
const p0_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "p0:202" });
const p0_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "p0:203" });
const p0_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "p0:204" });
const p0_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "p0:205" });
const p0_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "p0:206" });
const p0_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "p0:207" });
const p0_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "p0:208" });
const p0_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "p0:209" });
const p0_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "p0:210" });
const p0_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "p0:211" });
const p0_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "p0:212" });
const p0_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "p0:213" });
const p0_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "p0:214" });
const p0_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "p0:215" });
const p0_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "p0:216" });
const p0_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "p0:217" });
const p0_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "p0:218" });
const p0_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "p0:219" });
const p0_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "p0:220" });
const p0_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "p0:221" });
const p0_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "p0:222" });
const p0_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "p0:223" });
const p0_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "p0:224" });
const p0_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "p0:225" });
const p0_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "p0:226" });
const p0_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "p0:227" });
const p0_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "p0:228" });
const p0_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "p0:229" });
const p0_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "p0:230" });
const p0_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "p0:231" });
const p0_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "p0:232" });
const p0_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "p0:233" });
const p0_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "p0:234" });
const p0_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "p0:235" });
const p0_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "p0:236" });
const p0_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "p0:237" });
const p0_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "p0:238" });
const p0_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "p0:239" });
const p0_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "p0:240" });
const p0_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "p0:241" });
const p0_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "p0:242" });
const p0_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "p0:243" });
const p0_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "p0:244" });
const p0_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "p0:245" });
const p0_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "p0:246" });
const p0_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "p0:247" });
const p0_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "p0:248" });
const p0_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "p0:249" });
const p0_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "p0:250" });
const p0_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "p0:251" });
const p0_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "p0:252" });
const p0_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "p0:253" });
const p0_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "p0:254" });
const p0_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "p0:255" });
const p0_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "p0:256" });
const p0_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "p0:257" });
const p0_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "p0:258" });
const p0_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "p0:259" });
const p0_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "p0:260" });
const p0_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "p0:261" });
const p0_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "p0:262" });
const p0_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "p0:263" });
const p0_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "p0:264" });
const p0_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "p0:265" });
const p0_row_266 = Object.freeze({ id: 266, left: 283, right: 809, tag: "p0:266" });
const p0_row_267 = Object.freeze({ id: 267, left: 284, right: 812, tag: "p0:267" });
const p0_row_268 = Object.freeze({ id: 268, left: 285, right: 815, tag: "p0:268" });
const p0_row_269 = Object.freeze({ id: 269, left: 286, right: 818, tag: "p0:269" });
const p0_row_270 = Object.freeze({ id: 270, left: 287, right: 821, tag: "p0:270" });
const p0_row_271 = Object.freeze({ id: 271, left: 288, right: 824, tag: "p0:271" });
const p0_row_272 = Object.freeze({ id: 272, left: 289, right: 827, tag: "p0:272" });
const p0_row_273 = Object.freeze({ id: 273, left: 290, right: 830, tag: "p0:273" });
const p0_row_274 = Object.freeze({ id: 274, left: 291, right: 833, tag: "p0:274" });
const p0_row_275 = Object.freeze({ id: 275, left: 292, right: 836, tag: "p0:275" });
const p0_row_276 = Object.freeze({ id: 276, left: 293, right: 839, tag: "p0:276" });
const p0_row_277 = Object.freeze({ id: 277, left: 294, right: 842, tag: "p0:277" });
const p0_row_278 = Object.freeze({ id: 278, left: 295, right: 845, tag: "p0:278" });
const p0_row_279 = Object.freeze({ id: 279, left: 296, right: 848, tag: "p0:279" });
const p0_row_280 = Object.freeze({ id: 280, left: 297, right: 851, tag: "p0:280" });
const p0_row_281 = Object.freeze({ id: 281, left: 298, right: 854, tag: "p0:281" });
const p0_row_282 = Object.freeze({ id: 282, left: 299, right: 857, tag: "p0:282" });
const p0_row_283 = Object.freeze({ id: 283, left: 300, right: 860, tag: "p0:283" });
const p0_row_284 = Object.freeze({ id: 284, left: 301, right: 863, tag: "p0:284" });
const p0_row_285 = Object.freeze({ id: 285, left: 302, right: 866, tag: "p0:285" });
const p0_row_286 = Object.freeze({ id: 286, left: 303, right: 869, tag: "p0:286" });
const p0_row_287 = Object.freeze({ id: 287, left: 304, right: 872, tag: "p0:287" });
const p0_row_288 = Object.freeze({ id: 288, left: 305, right: 875, tag: "p0:288" });
const p0_row_289 = Object.freeze({ id: 289, left: 306, right: 878, tag: "p0:289" });
const p0_row_290 = Object.freeze({ id: 290, left: 307, right: 881, tag: "p0:290" });
const p0_row_291 = Object.freeze({ id: 291, left: 308, right: 884, tag: "p0:291" });
const p0_row_292 = Object.freeze({ id: 292, left: 309, right: 887, tag: "p0:292" });
const p0_row_293 = Object.freeze({ id: 293, left: 310, right: 890, tag: "p0:293" });
const p0_row_294 = Object.freeze({ id: 294, left: 311, right: 893, tag: "p0:294" });
const p0_row_295 = Object.freeze({ id: 295, left: 312, right: 896, tag: "p0:295" });
const p0_row_296 = Object.freeze({ id: 296, left: 313, right: 899, tag: "p0:296" });
const p0_row_297 = Object.freeze({ id: 297, left: 314, right: 902, tag: "p0:297" });
const p0_row_298 = Object.freeze({ id: 298, left: 315, right: 905, tag: "p0:298" });
const p0_row_299 = Object.freeze({ id: 299, left: 316, right: 908, tag: "p0:299" });
const p0_row_300 = Object.freeze({ id: 300, left: 317, right: 911, tag: "p0:300" });
const p0_row_301 = Object.freeze({ id: 301, left: 318, right: 914, tag: "p0:301" });
const p0_row_302 = Object.freeze({ id: 302, left: 319, right: 917, tag: "p0:302" });
const p0_row_303 = Object.freeze({ id: 303, left: 320, right: 920, tag: "p0:303" });
const p0_row_304 = Object.freeze({ id: 304, left: 321, right: 923, tag: "p0:304" });
const p0_row_305 = Object.freeze({ id: 305, left: 322, right: 926, tag: "p0:305" });
const p0_row_306 = Object.freeze({ id: 306, left: 323, right: 929, tag: "p0:306" });
const p0_row_307 = Object.freeze({ id: 307, left: 324, right: 932, tag: "p0:307" });
const p0_row_308 = Object.freeze({ id: 308, left: 325, right: 935, tag: "p0:308" });
const p0_row_309 = Object.freeze({ id: 309, left: 326, right: 938, tag: "p0:309" });
const p0_row_310 = Object.freeze({ id: 310, left: 327, right: 941, tag: "p0:310" });
const p0_row_311 = Object.freeze({ id: 311, left: 328, right: 944, tag: "p0:311" });
const p0_row_312 = Object.freeze({ id: 312, left: 329, right: 947, tag: "p0:312" });
const p0_row_313 = Object.freeze({ id: 313, left: 330, right: 950, tag: "p0:313" });
const p0_row_314 = Object.freeze({ id: 314, left: 331, right: 953, tag: "p0:314" });
const p0_row_315 = Object.freeze({ id: 315, left: 332, right: 956, tag: "p0:315" });
const p0_row_316 = Object.freeze({ id: 316, left: 333, right: 959, tag: "p0:316" });
const p0_row_317 = Object.freeze({ id: 317, left: 334, right: 962, tag: "p0:317" });
const p0_row_318 = Object.freeze({ id: 318, left: 335, right: 965, tag: "p0:318" });
const p0_row_319 = Object.freeze({ id: 319, left: 336, right: 968, tag: "p0:319" });

