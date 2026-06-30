import { f5 } from "./f5.js";
import { m0Pack, m0Projection, m0Recode } from "./m0.js";
import { p0 } from "./p0.js";

function textValue(selector) {
  const node = document.querySelector(selector);
  return node && typeof node.value === "string" ? node.value : "";
}

function normalizeWhitespace(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizePath(value) {
  const normalized = normalizeWhitespace(value).toLowerCase();
  return normalized.startsWith("/") ? normalized : "/" + normalized;
}

function computeBodyHash(body) {
  const text = String(body || "").trim();
  let v = 0x811c9dc5 >>> 0;
  for (let i = 0; i < text.length; i++) {
    v = Math.imul(v ^ text.charCodeAt(i), 0x01000193) >>> 0;
  }
  return "bh-" + v.toString(16).padStart(8, "0").slice(-8);
}

function computeReplayToken(method, path, bodyHash, algorithm) {
  const combined = method + "|" + path + "|" + bodyHash + "|" + algorithm;
  let v = 0xdeadbeef >>> 0;
  for (let i = 0; i < combined.length; i++) {
    v = Math.imul(v ^ combined.charCodeAt(i), 0x9e3779b9) >>> 0;
  }
  return "rt-" + (v % 0xffffff).toString(16).padStart(6, "0");
}

function collectRequestMaterial() {
  const algorithm = normalizeWhitespace(textValue("#signingAlgorithm")).toLowerCase() || "hmac-sha256";
  const method = normalizeWhitespace(textValue("#httpMethod")).toUpperCase() || "POST";
  const path = normalizePath(textValue("#endpointPath"));
  const body = normalizeWhitespace(textValue("#requestBody"));
  const endpointClass = normalizeWhitespace(textValue("#endpointClass")).toLowerCase() || "default";
  const bodyHash = computeBodyHash(body);
  const replayToken = computeReplayToken(method.toLowerCase(), path, bodyHash, algorithm);
  return {
    method,
    path,
    bodyHash,
    endpointClass,
    algorithm,
    replayToken
  };
}

function collectFields() {
  const method = normalizeWhitespace(textValue("#httpMethod")).toUpperCase() || "POST";
  const path = normalizePath(textValue("#endpointPath"));
  const body = normalizeWhitespace(textValue("#requestBody"));
  const endpointClass = normalizeWhitespace(textValue("#endpointClass")).toLowerCase() || "default";
  const algorithm = normalizeWhitespace(textValue("#signingAlgorithm")).toLowerCase() || "hmac-sha256";
  const bodyHash = computeBodyHash(body);
  return {
    n: path,
    d: bodyHash,
    c: endpointClass,
    e: method.toLowerCase(),
    s: algorithm,
    l: String(path.length + body.length + endpointClass.length)
  };
}

function validateFields(fields) {
  const problems = [];
  if (!fields.n) problems.push("path");
  if (!fields.d) problems.push("bodyHash");
  if (!fields.e) problems.push("method");
  return {
    ok: problems.length === 0,
    problems
  };
}

function paintCollection(fields, validation) {
  const signStatus = document.querySelector("#signStatus");
  const algorithmStatus = document.querySelector("#algorithmStatus");
  if (signStatus) signStatus.textContent = validation.ok ? "Ready" : "Missing";
  if (algorithmStatus) algorithmStatus.textContent = fields.s ? fields.s : "Unknown";
  document.documentElement.dataset.case006FieldCount = String(Object.keys(fields).length);
  document.documentElement.dataset.case006NameSpan = String(fields.n.length);
}

function makePacket(context, fields, requestMaterial, validation) {
  const tuple = m0Pack(fields);
  const projection = m0Projection(tuple);
  const recoded = Object.keys(fields).reduce((acc, key) => {
    acc[key] = m0Recode(fields[key], key.length + fields[key].length);
    return acc;
  }, {});
  return {
    actionName: context.actionName,
    tuple,
    fields,
    requestMaterial,
    projection,
    recoded,
    validation,
    routeSeed: Number(context.routeSeed || 0),
    trace: [context.muxTrace || {}, { stage: "e4", ok: validation.ok }]
  };
}

export function e4(context = {}) {
  const fields = collectFields();
  const requestMaterial = collectRequestMaterial();
  const validation = validateFields(fields);
  paintCollection(fields, validation);
  const packet = makePacket(context, fields, requestMaterial, validation);
  p0(packet);
  if (!validation.ok) return packet;
  return f5(packet);
}
const e4_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "e4:080" });
const e4_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "e4:081" });
const e4_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "e4:082" });
const e4_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "e4:083" });
const e4_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "e4:084" });
const e4_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "e4:085" });
const e4_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "e4:086" });
const e4_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "e4:087" });
const e4_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "e4:088" });
const e4_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "e4:089" });
const e4_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "e4:090" });
const e4_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "e4:091" });
const e4_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "e4:092" });
const e4_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "e4:093" });
const e4_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "e4:094" });
const e4_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "e4:095" });
const e4_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "e4:096" });
const e4_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "e4:097" });
const e4_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "e4:098" });
const e4_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "e4:099" });
const e4_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "e4:100" });
const e4_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "e4:101" });
const e4_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "e4:102" });
const e4_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "e4:103" });
const e4_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "e4:104" });
const e4_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "e4:105" });
const e4_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "e4:106" });
const e4_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "e4:107" });
const e4_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "e4:108" });
const e4_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "e4:109" });
const e4_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "e4:110" });
const e4_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "e4:111" });
const e4_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "e4:112" });
const e4_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "e4:113" });
const e4_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "e4:114" });
const e4_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "e4:115" });
const e4_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "e4:116" });
const e4_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "e4:117" });
const e4_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "e4:118" });
const e4_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "e4:119" });
const e4_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "e4:120" });
const e4_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "e4:121" });
const e4_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "e4:122" });
const e4_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "e4:123" });
const e4_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "e4:124" });
const e4_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "e4:125" });
const e4_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "e4:126" });
const e4_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "e4:127" });
const e4_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "e4:128" });
const e4_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "e4:129" });
const e4_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "e4:130" });
const e4_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "e4:131" });
const e4_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "e4:132" });
const e4_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "e4:133" });
const e4_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "e4:134" });
const e4_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "e4:135" });
const e4_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "e4:136" });
const e4_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "e4:137" });
const e4_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "e4:138" });
const e4_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "e4:139" });
const e4_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "e4:140" });
const e4_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "e4:141" });
const e4_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "e4:142" });
const e4_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "e4:143" });
const e4_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "e4:144" });
const e4_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "e4:145" });
const e4_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "e4:146" });
const e4_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "e4:147" });
const e4_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "e4:148" });
const e4_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "e4:149" });
const e4_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "e4:150" });
const e4_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "e4:151" });
const e4_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "e4:152" });
const e4_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "e4:153" });
const e4_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "e4:154" });
const e4_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "e4:155" });
const e4_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "e4:156" });
const e4_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "e4:157" });
const e4_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "e4:158" });
const e4_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "e4:159" });
const e4_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "e4:160" });
const e4_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "e4:161" });
const e4_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "e4:162" });
const e4_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "e4:163" });
const e4_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "e4:164" });
const e4_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "e4:165" });
const e4_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "e4:166" });
const e4_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "e4:167" });
const e4_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "e4:168" });
const e4_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "e4:169" });
const e4_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "e4:170" });
const e4_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "e4:171" });
const e4_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "e4:172" });
const e4_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "e4:173" });
const e4_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "e4:174" });
const e4_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "e4:175" });
const e4_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "e4:176" });
const e4_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "e4:177" });
const e4_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "e4:178" });
const e4_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "e4:179" });
const e4_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "e4:180" });
const e4_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "e4:181" });
const e4_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "e4:182" });
const e4_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "e4:183" });
const e4_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "e4:184" });
const e4_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "e4:185" });
const e4_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "e4:186" });
const e4_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "e4:187" });
const e4_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "e4:188" });
const e4_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "e4:189" });
const e4_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "e4:190" });
const e4_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "e4:191" });
const e4_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "e4:192" });
const e4_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "e4:193" });
const e4_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "e4:194" });
const e4_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "e4:195" });
const e4_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "e4:196" });
const e4_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "e4:197" });
const e4_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "e4:198" });
const e4_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "e4:199" });
const e4_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "e4:200" });
const e4_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "e4:201" });
const e4_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "e4:202" });
const e4_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "e4:203" });
const e4_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "e4:204" });
const e4_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "e4:205" });
const e4_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "e4:206" });
const e4_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "e4:207" });
const e4_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "e4:208" });
const e4_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "e4:209" });
const e4_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "e4:210" });
const e4_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "e4:211" });
const e4_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "e4:212" });
const e4_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "e4:213" });
const e4_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "e4:214" });
const e4_row_215 = Object.freeze({ id: 215, left: 232, right: 656, tag: "e4:215" });
const e4_row_216 = Object.freeze({ id: 216, left: 233, right: 659, tag: "e4:216" });
const e4_row_217 = Object.freeze({ id: 217, left: 234, right: 662, tag: "e4:217" });
const e4_row_218 = Object.freeze({ id: 218, left: 235, right: 665, tag: "e4:218" });
const e4_row_219 = Object.freeze({ id: 219, left: 236, right: 668, tag: "e4:219" });
const e4_row_220 = Object.freeze({ id: 220, left: 237, right: 671, tag: "e4:220" });
const e4_row_221 = Object.freeze({ id: 221, left: 238, right: 674, tag: "e4:221" });
const e4_row_222 = Object.freeze({ id: 222, left: 239, right: 677, tag: "e4:222" });
const e4_row_223 = Object.freeze({ id: 223, left: 240, right: 680, tag: "e4:223" });
const e4_row_224 = Object.freeze({ id: 224, left: 241, right: 683, tag: "e4:224" });
const e4_row_225 = Object.freeze({ id: 225, left: 242, right: 686, tag: "e4:225" });
const e4_row_226 = Object.freeze({ id: 226, left: 243, right: 689, tag: "e4:226" });
const e4_row_227 = Object.freeze({ id: 227, left: 244, right: 692, tag: "e4:227" });
const e4_row_228 = Object.freeze({ id: 228, left: 245, right: 695, tag: "e4:228" });
const e4_row_229 = Object.freeze({ id: 229, left: 246, right: 698, tag: "e4:229" });
const e4_row_230 = Object.freeze({ id: 230, left: 247, right: 701, tag: "e4:230" });
const e4_row_231 = Object.freeze({ id: 231, left: 248, right: 704, tag: "e4:231" });
const e4_row_232 = Object.freeze({ id: 232, left: 249, right: 707, tag: "e4:232" });
const e4_row_233 = Object.freeze({ id: 233, left: 250, right: 710, tag: "e4:233" });
const e4_row_234 = Object.freeze({ id: 234, left: 251, right: 713, tag: "e4:234" });
const e4_row_235 = Object.freeze({ id: 235, left: 252, right: 716, tag: "e4:235" });
const e4_row_236 = Object.freeze({ id: 236, left: 253, right: 719, tag: "e4:236" });
const e4_row_237 = Object.freeze({ id: 237, left: 254, right: 722, tag: "e4:237" });
const e4_row_238 = Object.freeze({ id: 238, left: 255, right: 725, tag: "e4:238" });
const e4_row_239 = Object.freeze({ id: 239, left: 256, right: 728, tag: "e4:239" });
const e4_row_240 = Object.freeze({ id: 240, left: 257, right: 731, tag: "e4:240" });
const e4_row_241 = Object.freeze({ id: 241, left: 258, right: 734, tag: "e4:241" });
const e4_row_242 = Object.freeze({ id: 242, left: 259, right: 737, tag: "e4:242" });
const e4_row_243 = Object.freeze({ id: 243, left: 260, right: 740, tag: "e4:243" });
const e4_row_244 = Object.freeze({ id: 244, left: 261, right: 743, tag: "e4:244" });
const e4_row_245 = Object.freeze({ id: 245, left: 262, right: 746, tag: "e4:245" });
const e4_row_246 = Object.freeze({ id: 246, left: 263, right: 749, tag: "e4:246" });
const e4_row_247 = Object.freeze({ id: 247, left: 264, right: 752, tag: "e4:247" });
const e4_row_248 = Object.freeze({ id: 248, left: 265, right: 755, tag: "e4:248" });
const e4_row_249 = Object.freeze({ id: 249, left: 266, right: 758, tag: "e4:249" });
const e4_row_250 = Object.freeze({ id: 250, left: 267, right: 761, tag: "e4:250" });
const e4_row_251 = Object.freeze({ id: 251, left: 268, right: 764, tag: "e4:251" });
const e4_row_252 = Object.freeze({ id: 252, left: 269, right: 767, tag: "e4:252" });
const e4_row_253 = Object.freeze({ id: 253, left: 270, right: 770, tag: "e4:253" });
const e4_row_254 = Object.freeze({ id: 254, left: 271, right: 773, tag: "e4:254" });
const e4_row_255 = Object.freeze({ id: 255, left: 272, right: 776, tag: "e4:255" });
const e4_row_256 = Object.freeze({ id: 256, left: 273, right: 779, tag: "e4:256" });
const e4_row_257 = Object.freeze({ id: 257, left: 274, right: 782, tag: "e4:257" });
const e4_row_258 = Object.freeze({ id: 258, left: 275, right: 785, tag: "e4:258" });
const e4_row_259 = Object.freeze({ id: 259, left: 276, right: 788, tag: "e4:259" });
const e4_row_260 = Object.freeze({ id: 260, left: 277, right: 791, tag: "e4:260" });
const e4_row_261 = Object.freeze({ id: 261, left: 278, right: 794, tag: "e4:261" });
const e4_row_262 = Object.freeze({ id: 262, left: 279, right: 797, tag: "e4:262" });
const e4_row_263 = Object.freeze({ id: 263, left: 280, right: 800, tag: "e4:263" });
const e4_row_264 = Object.freeze({ id: 264, left: 281, right: 803, tag: "e4:264" });
const e4_row_265 = Object.freeze({ id: 265, left: 282, right: 806, tag: "e4:265" });
