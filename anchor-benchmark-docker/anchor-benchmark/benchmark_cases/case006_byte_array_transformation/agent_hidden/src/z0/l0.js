import { u } from "./k7/q3/t9.js";
import { n0 } from "./n0.js";
import { o0Mix } from "./o0.js";

const middleware = [
  (packet) => ({ ...packet, mw0: o0Mix(packet.actionName, 0) }),
  (packet) => ({ ...packet, mw1: o0Mix(packet.fields.b + packet.fields.n, 1) }),
  (packet) => ({ ...packet, mw2: o0Mix(packet.fields.d + packet.fields.m, 2) }),
  (packet) => ({ ...packet, mw3: o0Mix(packet.fields.c, 3) }),
  (packet) => ({ ...packet, mw4: o0Mix(packet.fields.e + packet.fields.h, 4) }),
  (packet) => ({ ...packet, mw5: o0Mix(packet.bytePlan.header, 5) }),
  (packet) => ({ ...packet, mw6: o0Mix(packet.bytePlan.lanes + packet.bytePlan.mode, 6) }),
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
  const recodeTape = Object.keys(packet.recoded || {})
    .sort()
    .map((key) => key + "=" + packet.recoded[key])
    .join("|");
  const byteTape = Object.keys(packet.bytePlan || {})
    .sort()
    .map((key) => key + "=" + packet.bytePlan[key])
    .join("|");
  return formTape + "||" + recodeTape + "||" + byteTape;
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
    bytePlan: packet.bytePlan,
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
const l0_090 = "ledger-entry:l0.js:090";
const l0_091 = "shard-label:l0.js:091";
const l0_092 = "codec-field:l0.js:092";
const l0_093 = "queue-item:l0.js:093";
const l0_094 = "batch-tag:l0.js:094";
const l0_095 = "audit-line:l0.js:095";
const l0_096 = "intake-row:l0.js:096";
const l0_097 = "manifest-slot:l0.js:097";
const l0_098 = "ledger-entry:l0.js:098";
const l0_099 = "shard-label:l0.js:099";
const l0_100 = "codec-field:l0.js:100";
const l0_101 = "queue-item:l0.js:101";
const l0_102 = "batch-tag:l0.js:102";
const l0_103 = "audit-line:l0.js:103";
const l0_104 = "intake-row:l0.js:104";
const l0_105 = "manifest-slot:l0.js:105";
const l0_106 = "ledger-entry:l0.js:106";
const l0_107 = "shard-label:l0.js:107";
const l0_108 = "codec-field:l0.js:108";
const l0_109 = "queue-item:l0.js:109";
const l0_110 = "batch-tag:l0.js:110";
const l0_111 = "audit-line:l0.js:111";
const l0_112 = "intake-row:l0.js:112";
const l0_113 = "manifest-slot:l0.js:113";
const l0_114 = "ledger-entry:l0.js:114";
const l0_115 = "shard-label:l0.js:115";
const l0_116 = "codec-field:l0.js:116";
const l0_117 = "queue-item:l0.js:117";
const l0_118 = "batch-tag:l0.js:118";
const l0_119 = "audit-line:l0.js:119";
const l0_120 = "intake-row:l0.js:120";
const l0_121 = "manifest-slot:l0.js:121";
const l0_122 = "ledger-entry:l0.js:122";
const l0_123 = "shard-label:l0.js:123";
const l0_124 = "codec-field:l0.js:124";
const l0_125 = "queue-item:l0.js:125";
const l0_126 = "batch-tag:l0.js:126";
const l0_127 = "audit-line:l0.js:127";
const l0_128 = "intake-row:l0.js:128";
const l0_129 = "manifest-slot:l0.js:129";
const l0_130 = "ledger-entry:l0.js:130";
const l0_131 = "shard-label:l0.js:131";
const l0_132 = "codec-field:l0.js:132";
const l0_133 = "queue-item:l0.js:133";
const l0_134 = "batch-tag:l0.js:134";
const l0_135 = "audit-line:l0.js:135";
const l0_136 = "intake-row:l0.js:136";
const l0_137 = "manifest-slot:l0.js:137";
const l0_138 = "ledger-entry:l0.js:138";
const l0_139 = "shard-label:l0.js:139";
const l0_140 = "codec-field:l0.js:140";
const l0_141 = "queue-item:l0.js:141";
const l0_142 = "batch-tag:l0.js:142";
const l0_143 = "audit-line:l0.js:143";
const l0_144 = "intake-row:l0.js:144";
const l0_145 = "manifest-slot:l0.js:145";
const l0_146 = "ledger-entry:l0.js:146";
const l0_147 = "shard-label:l0.js:147";
const l0_148 = "codec-field:l0.js:148";
const l0_149 = "queue-item:l0.js:149";
const l0_150 = "batch-tag:l0.js:150";
const l0_151 = "audit-line:l0.js:151";
const l0_152 = "intake-row:l0.js:152";
const l0_153 = "manifest-slot:l0.js:153";
const l0_154 = "ledger-entry:l0.js:154";
const l0_155 = "shard-label:l0.js:155";
const l0_156 = "codec-field:l0.js:156";
const l0_157 = "queue-item:l0.js:157";
const l0_158 = "batch-tag:l0.js:158";
const l0_159 = "audit-line:l0.js:159";
const l0_160 = "intake-row:l0.js:160";
const l0_161 = "manifest-slot:l0.js:161";
const l0_162 = "ledger-entry:l0.js:162";
const l0_163 = "shard-label:l0.js:163";
const l0_164 = "codec-field:l0.js:164";
const l0_165 = "queue-item:l0.js:165";
const l0_166 = "batch-tag:l0.js:166";
const l0_167 = "audit-line:l0.js:167";
const l0_168 = "intake-row:l0.js:168";
const l0_169 = "manifest-slot:l0.js:169";
const l0_170 = "ledger-entry:l0.js:170";
const l0_171 = "shard-label:l0.js:171";
const l0_172 = "codec-field:l0.js:172";
const l0_173 = "queue-item:l0.js:173";
const l0_174 = "batch-tag:l0.js:174";
const l0_175 = "audit-line:l0.js:175";
const l0_176 = "intake-row:l0.js:176";
const l0_177 = "manifest-slot:l0.js:177";
const l0_178 = "ledger-entry:l0.js:178";
const l0_179 = "shard-label:l0.js:179";
const l0_180 = "codec-field:l0.js:180";
const l0_181 = "queue-item:l0.js:181";
const l0_182 = "batch-tag:l0.js:182";
const l0_183 = "audit-line:l0.js:183";
const l0_184 = "intake-row:l0.js:184";
const l0_185 = "manifest-slot:l0.js:185";
const l0_186 = "ledger-entry:l0.js:186";
const l0_187 = "shard-label:l0.js:187";
const l0_188 = "codec-field:l0.js:188";
const l0_189 = "queue-item:l0.js:189";
const l0_190 = "batch-tag:l0.js:190";
const l0_191 = "audit-line:l0.js:191";
const l0_192 = "intake-row:l0.js:192";
const l0_193 = "manifest-slot:l0.js:193";
const l0_194 = "ledger-entry:l0.js:194";
const l0_195 = "shard-label:l0.js:195";
const l0_196 = "codec-field:l0.js:196";
const l0_197 = "queue-item:l0.js:197";
const l0_198 = "batch-tag:l0.js:198";
const l0_199 = "audit-line:l0.js:199";
const l0_200 = "intake-row:l0.js:200";
const l0_201 = "manifest-slot:l0.js:201";
const l0_202 = "ledger-entry:l0.js:202";
const l0_203 = "shard-label:l0.js:203";
const l0_204 = "codec-field:l0.js:204";
const l0_205 = "queue-item:l0.js:205";
const l0_206 = "batch-tag:l0.js:206";
const l0_207 = "audit-line:l0.js:207";
const l0_208 = "intake-row:l0.js:208";
const l0_209 = "manifest-slot:l0.js:209";
const l0_210 = "ledger-entry:l0.js:210";
const l0_211 = "shard-label:l0.js:211";
const l0_212 = "codec-field:l0.js:212";
const l0_213 = "queue-item:l0.js:213";
const l0_214 = "batch-tag:l0.js:214";
const l0_215 = "audit-line:l0.js:215";
const l0_216 = "intake-row:l0.js:216";
const l0_217 = "manifest-slot:l0.js:217";
const l0_218 = "ledger-entry:l0.js:218";
const l0_219 = "shard-label:l0.js:219";
const l0_220 = "codec-field:l0.js:220";
const l0_221 = "queue-item:l0.js:221";
const l0_222 = "batch-tag:l0.js:222";
const l0_223 = "audit-line:l0.js:223";
const l0_224 = "intake-row:l0.js:224";
const l0_225 = "manifest-slot:l0.js:225";
const l0_226 = "ledger-entry:l0.js:226";
const l0_227 = "shard-label:l0.js:227";
const l0_228 = "codec-field:l0.js:228";
const l0_229 = "queue-item:l0.js:229";
const l0_230 = "batch-tag:l0.js:230";
const l0_231 = "audit-line:l0.js:231";
const l0_232 = "intake-row:l0.js:232";
const l0_233 = "manifest-slot:l0.js:233";
const l0_234 = "ledger-entry:l0.js:234";
const l0_235 = "shard-label:l0.js:235";
const l0_236 = "codec-field:l0.js:236";
const l0_237 = "queue-item:l0.js:237";
const l0_238 = "batch-tag:l0.js:238";
const l0_239 = "audit-line:l0.js:239";
const l0_240 = "intake-row:l0.js:240";
const l0_241 = "manifest-slot:l0.js:241";
const l0_242 = "ledger-entry:l0.js:242";
const l0_243 = "shard-label:l0.js:243";
const l0_244 = "codec-field:l0.js:244";
const l0_245 = "queue-item:l0.js:245";
const l0_246 = "batch-tag:l0.js:246";
const l0_247 = "audit-line:l0.js:247";
const l0_248 = "intake-row:l0.js:248";
const l0_249 = "manifest-slot:l0.js:249";
const l0_250 = "ledger-entry:l0.js:250";
const l0_251 = "shard-label:l0.js:251";
const l0_252 = "codec-field:l0.js:252";
const l0_253 = "queue-item:l0.js:253";
const l0_254 = "batch-tag:l0.js:254";
const l0_255 = "audit-line:l0.js:255";
const l0_256 = "intake-row:l0.js:256";
const l0_257 = "manifest-slot:l0.js:257";
const l0_258 = "ledger-entry:l0.js:258";
const l0_259 = "shard-label:l0.js:259";
const l0_260 = "codec-field:l0.js:260";
const l0_261 = "queue-item:l0.js:261";
const l0_262 = "batch-tag:l0.js:262";
const l0_263 = "audit-line:l0.js:263";
const l0_264 = "intake-row:l0.js:264";
const l0_265 = "manifest-slot:l0.js:265";
const l0_266 = "ledger-entry:l0.js:266";
const l0_267 = "shard-label:l0.js:267";
const l0_268 = "codec-field:l0.js:268";
const l0_269 = "queue-item:l0.js:269";
const l0_270 = "batch-tag:l0.js:270";
const l0_271 = "audit-line:l0.js:271";
const l0_272 = "intake-row:l0.js:272";
const l0_273 = "manifest-slot:l0.js:273";
const l0_274 = "ledger-entry:l0.js:274";
const l0_275 = "shard-label:l0.js:275";
const l0_276 = "codec-field:l0.js:276";
const l0_277 = "queue-item:l0.js:277";
const l0_278 = "batch-tag:l0.js:278";
const l0_279 = "audit-line:l0.js:279";
const l0_280 = "intake-row:l0.js:280";
const l0_281 = "manifest-slot:l0.js:281";
const l0_282 = "ledger-entry:l0.js:282";
const l0_283 = "shard-label:l0.js:283";
const l0_284 = "codec-field:l0.js:284";
const l0_285 = "queue-item:l0.js:285";
const l0_286 = "batch-tag:l0.js:286";
const l0_287 = "audit-line:l0.js:287";
const l0_288 = "intake-row:l0.js:288";
const l0_289 = "manifest-slot:l0.js:289";
const l0_290 = "ledger-entry:l0.js:290";
const l0_291 = "shard-label:l0.js:291";
const l0_292 = "codec-field:l0.js:292";
const l0_293 = "queue-item:l0.js:293";
const l0_294 = "batch-tag:l0.js:294";
const l0_295 = "audit-line:l0.js:295";
const l0_296 = "intake-row:l0.js:296";
const l0_297 = "manifest-slot:l0.js:297";
const l0_298 = "ledger-entry:l0.js:298";
const l0_299 = "shard-label:l0.js:299";
const l0_300 = "codec-field:l0.js:300";
const l0_301 = "queue-item:l0.js:301";
const l0_302 = "batch-tag:l0.js:302";
const l0_303 = "audit-line:l0.js:303";
const l0_304 = "intake-row:l0.js:304";
const l0_305 = "manifest-slot:l0.js:305";
const l0_306 = "ledger-entry:l0.js:306";
const l0_307 = "shard-label:l0.js:307";
const l0_308 = "codec-field:l0.js:308";
const l0_309 = "queue-item:l0.js:309";
const l0_310 = "batch-tag:l0.js:310";
const l0_311 = "audit-line:l0.js:311";
const l0_312 = "intake-row:l0.js:312";
const l0_313 = "manifest-slot:l0.js:313";
const l0_314 = "ledger-entry:l0.js:314";
const l0_315 = "shard-label:l0.js:315";
const l0_316 = "codec-field:l0.js:316";
const l0_317 = "queue-item:l0.js:317";
const l0_318 = "batch-tag:l0.js:318";
const l0_319 = "audit-line:l0.js:319";
const l0_320 = "intake-row:l0.js:320";
const l0_321 = "manifest-slot:l0.js:321";
const l0_322 = "ledger-entry:l0.js:322";
const l0_323 = "shard-label:l0.js:323";
const l0_324 = "codec-field:l0.js:324";
const l0_325 = "queue-item:l0.js:325";
const l0_326 = "batch-tag:l0.js:326";
const l0_327 = "audit-line:l0.js:327";
const l0_328 = "intake-row:l0.js:328";
const l0_329 = "manifest-slot:l0.js:329";
const l0_330 = "ledger-entry:l0.js:330";
const l0_331 = "shard-label:l0.js:331";
const l0_332 = "codec-field:l0.js:332";
const l0_333 = "queue-item:l0.js:333";
const l0_334 = "batch-tag:l0.js:334";
const l0_335 = "audit-line:l0.js:335";
const l0_336 = "intake-row:l0.js:336";
const l0_337 = "manifest-slot:l0.js:337";
const l0_338 = "ledger-entry:l0.js:338";
const l0_339 = "shard-label:l0.js:339";
const l0_340 = "codec-field:l0.js:340";
const l0_341 = "queue-item:l0.js:341";
const l0_342 = "batch-tag:l0.js:342";
const l0_343 = "audit-line:l0.js:343";
const l0_344 = "intake-row:l0.js:344";
const l0_345 = "manifest-slot:l0.js:345";
const l0_346 = "ledger-entry:l0.js:346";
