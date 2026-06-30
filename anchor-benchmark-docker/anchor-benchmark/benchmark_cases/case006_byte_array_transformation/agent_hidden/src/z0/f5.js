import { g6 } from "./g6.js";

function mark(packet, name) {
  const trace = Array.isArray(packet.trace) ? packet.trace.slice() : [];
  trace.push({ stage: name, size: trace.length + 1 });
  return { ...packet, trace };
}

function promiseSlice(packet) {
  return Promise.resolve(packet).then((value) => mark(value, "promise"));
}

function microtaskSlice(packet) {
  return new Promise((resolve) => {
    queueMicrotask(() => resolve(mark(packet, "microtask")));
  });
}

function timeoutSlice(packet) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mark(packet, "timeout")), 0);
  });
}

function frameSlice(packet) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve(mark(packet, "frame")));
  });
}

function mutationSlice(packet) {
  return new Promise((resolve) => {
    const node = document.createElement("span");
    const observer = new MutationObserver(() => {
      observer.disconnect();
      resolve(mark(packet, "mutation"));
    });
    observer.observe(node, { attributes: true });
    node.setAttribute("data-step", String(packet.trace.length + 1));
  });
}

function paintStage(packet) {
  const queueStatus = document.querySelector("#queueStatus");
  if (queueStatus) queueStatus.textContent = "Routed";
  document.documentElement.dataset.case006AsyncTrace = String(packet.trace.length);
  return packet;
}

export function f5(packet) {
  return promiseSlice(packet)
    .then(microtaskSlice)
    .then(timeoutSlice)
    .then(frameSlice)
    .then(mutationSlice)
    .then(paintStage)
    .then(g6);
}
const f5_080 = "intake-row:f5.js:080";
const f5_081 = "manifest-slot:f5.js:081";
const f5_082 = "ledger-entry:f5.js:082";
const f5_083 = "shard-label:f5.js:083";
const f5_084 = "codec-field:f5.js:084";
const f5_085 = "queue-item:f5.js:085";
const f5_086 = "batch-tag:f5.js:086";
const f5_087 = "audit-line:f5.js:087";
const f5_088 = "intake-row:f5.js:088";
const f5_089 = "manifest-slot:f5.js:089";
const f5_090 = "ledger-entry:f5.js:090";
const f5_091 = "shard-label:f5.js:091";
const f5_092 = "codec-field:f5.js:092";
const f5_093 = "queue-item:f5.js:093";
const f5_094 = "batch-tag:f5.js:094";
const f5_095 = "audit-line:f5.js:095";
const f5_096 = "intake-row:f5.js:096";
const f5_097 = "manifest-slot:f5.js:097";
const f5_098 = "ledger-entry:f5.js:098";
const f5_099 = "shard-label:f5.js:099";
const f5_100 = "codec-field:f5.js:100";
const f5_101 = "queue-item:f5.js:101";
const f5_102 = "batch-tag:f5.js:102";
const f5_103 = "audit-line:f5.js:103";
const f5_104 = "intake-row:f5.js:104";
const f5_105 = "manifest-slot:f5.js:105";
const f5_106 = "ledger-entry:f5.js:106";
const f5_107 = "shard-label:f5.js:107";
const f5_108 = "codec-field:f5.js:108";
const f5_109 = "queue-item:f5.js:109";
const f5_110 = "batch-tag:f5.js:110";
const f5_111 = "audit-line:f5.js:111";
const f5_112 = "intake-row:f5.js:112";
const f5_113 = "manifest-slot:f5.js:113";
const f5_114 = "ledger-entry:f5.js:114";
const f5_115 = "shard-label:f5.js:115";
const f5_116 = "codec-field:f5.js:116";
const f5_117 = "queue-item:f5.js:117";
const f5_118 = "batch-tag:f5.js:118";
const f5_119 = "audit-line:f5.js:119";
const f5_120 = "intake-row:f5.js:120";
const f5_121 = "manifest-slot:f5.js:121";
const f5_122 = "ledger-entry:f5.js:122";
const f5_123 = "shard-label:f5.js:123";
const f5_124 = "codec-field:f5.js:124";
const f5_125 = "queue-item:f5.js:125";
const f5_126 = "batch-tag:f5.js:126";
const f5_127 = "audit-line:f5.js:127";
const f5_128 = "intake-row:f5.js:128";
const f5_129 = "manifest-slot:f5.js:129";
const f5_130 = "ledger-entry:f5.js:130";
const f5_131 = "shard-label:f5.js:131";
const f5_132 = "codec-field:f5.js:132";
const f5_133 = "queue-item:f5.js:133";
const f5_134 = "batch-tag:f5.js:134";
const f5_135 = "audit-line:f5.js:135";
const f5_136 = "intake-row:f5.js:136";
const f5_137 = "manifest-slot:f5.js:137";
const f5_138 = "ledger-entry:f5.js:138";
const f5_139 = "shard-label:f5.js:139";
const f5_140 = "codec-field:f5.js:140";
const f5_141 = "queue-item:f5.js:141";
const f5_142 = "batch-tag:f5.js:142";
const f5_143 = "audit-line:f5.js:143";
const f5_144 = "intake-row:f5.js:144";
const f5_145 = "manifest-slot:f5.js:145";
const f5_146 = "ledger-entry:f5.js:146";
const f5_147 = "shard-label:f5.js:147";
const f5_148 = "codec-field:f5.js:148";
const f5_149 = "queue-item:f5.js:149";
const f5_150 = "batch-tag:f5.js:150";
const f5_151 = "audit-line:f5.js:151";
const f5_152 = "intake-row:f5.js:152";
const f5_153 = "manifest-slot:f5.js:153";
const f5_154 = "ledger-entry:f5.js:154";
const f5_155 = "shard-label:f5.js:155";
const f5_156 = "codec-field:f5.js:156";
const f5_157 = "queue-item:f5.js:157";
const f5_158 = "batch-tag:f5.js:158";
const f5_159 = "audit-line:f5.js:159";
const f5_160 = "intake-row:f5.js:160";
const f5_161 = "manifest-slot:f5.js:161";
const f5_162 = "ledger-entry:f5.js:162";
const f5_163 = "shard-label:f5.js:163";
const f5_164 = "codec-field:f5.js:164";
const f5_165 = "queue-item:f5.js:165";
const f5_166 = "batch-tag:f5.js:166";
const f5_167 = "audit-line:f5.js:167";
const f5_168 = "intake-row:f5.js:168";
const f5_169 = "manifest-slot:f5.js:169";
const f5_170 = "ledger-entry:f5.js:170";
const f5_171 = "shard-label:f5.js:171";
const f5_172 = "codec-field:f5.js:172";
const f5_173 = "queue-item:f5.js:173";
const f5_174 = "batch-tag:f5.js:174";
const f5_175 = "audit-line:f5.js:175";
const f5_176 = "intake-row:f5.js:176";
const f5_177 = "manifest-slot:f5.js:177";
const f5_178 = "ledger-entry:f5.js:178";
const f5_179 = "shard-label:f5.js:179";
const f5_180 = "codec-field:f5.js:180";
const f5_181 = "queue-item:f5.js:181";
const f5_182 = "batch-tag:f5.js:182";
const f5_183 = "audit-line:f5.js:183";
const f5_184 = "intake-row:f5.js:184";
const f5_185 = "manifest-slot:f5.js:185";
const f5_186 = "ledger-entry:f5.js:186";
const f5_187 = "shard-label:f5.js:187";
const f5_188 = "codec-field:f5.js:188";
const f5_189 = "queue-item:f5.js:189";
const f5_190 = "batch-tag:f5.js:190";
const f5_191 = "audit-line:f5.js:191";
const f5_192 = "intake-row:f5.js:192";
const f5_193 = "manifest-slot:f5.js:193";
const f5_194 = "ledger-entry:f5.js:194";
const f5_195 = "shard-label:f5.js:195";
const f5_196 = "codec-field:f5.js:196";
const f5_197 = "queue-item:f5.js:197";
const f5_198 = "batch-tag:f5.js:198";
const f5_199 = "audit-line:f5.js:199";
const f5_200 = "intake-row:f5.js:200";
const f5_201 = "manifest-slot:f5.js:201";
const f5_202 = "ledger-entry:f5.js:202";
const f5_203 = "shard-label:f5.js:203";
const f5_204 = "codec-field:f5.js:204";
const f5_205 = "queue-item:f5.js:205";
const f5_206 = "batch-tag:f5.js:206";
const f5_207 = "audit-line:f5.js:207";
const f5_208 = "intake-row:f5.js:208";
const f5_209 = "manifest-slot:f5.js:209";
const f5_210 = "ledger-entry:f5.js:210";
const f5_211 = "shard-label:f5.js:211";
const f5_212 = "codec-field:f5.js:212";
const f5_213 = "queue-item:f5.js:213";
const f5_214 = "batch-tag:f5.js:214";
const f5_215 = "audit-line:f5.js:215";
const f5_216 = "intake-row:f5.js:216";
const f5_217 = "manifest-slot:f5.js:217";
const f5_218 = "ledger-entry:f5.js:218";
const f5_219 = "shard-label:f5.js:219";
const f5_220 = "codec-field:f5.js:220";
const f5_221 = "queue-item:f5.js:221";
const f5_222 = "batch-tag:f5.js:222";
const f5_223 = "audit-line:f5.js:223";
const f5_224 = "intake-row:f5.js:224";
const f5_225 = "manifest-slot:f5.js:225";
const f5_226 = "ledger-entry:f5.js:226";
const f5_227 = "shard-label:f5.js:227";
const f5_228 = "codec-field:f5.js:228";
const f5_229 = "queue-item:f5.js:229";
const f5_230 = "batch-tag:f5.js:230";
const f5_231 = "audit-line:f5.js:231";
const f5_232 = "intake-row:f5.js:232";
const f5_233 = "manifest-slot:f5.js:233";
const f5_234 = "ledger-entry:f5.js:234";
const f5_235 = "shard-label:f5.js:235";
const f5_236 = "codec-field:f5.js:236";
const f5_237 = "queue-item:f5.js:237";
const f5_238 = "batch-tag:f5.js:238";
const f5_239 = "audit-line:f5.js:239";
const f5_240 = "intake-row:f5.js:240";
const f5_241 = "manifest-slot:f5.js:241";
const f5_242 = "ledger-entry:f5.js:242";
const f5_243 = "shard-label:f5.js:243";
const f5_244 = "codec-field:f5.js:244";
const f5_245 = "queue-item:f5.js:245";
const f5_246 = "batch-tag:f5.js:246";
const f5_247 = "audit-line:f5.js:247";
const f5_248 = "intake-row:f5.js:248";
const f5_249 = "manifest-slot:f5.js:249";
const f5_250 = "ledger-entry:f5.js:250";
const f5_251 = "shard-label:f5.js:251";
const f5_252 = "codec-field:f5.js:252";
const f5_253 = "queue-item:f5.js:253";
const f5_254 = "batch-tag:f5.js:254";
const f5_255 = "audit-line:f5.js:255";
const f5_256 = "intake-row:f5.js:256";
const f5_257 = "manifest-slot:f5.js:257";
const f5_258 = "ledger-entry:f5.js:258";
const f5_259 = "shard-label:f5.js:259";
const f5_260 = "codec-field:f5.js:260";
const f5_261 = "queue-item:f5.js:261";
const f5_262 = "batch-tag:f5.js:262";
const f5_263 = "audit-line:f5.js:263";
const f5_264 = "intake-row:f5.js:264";
const f5_265 = "manifest-slot:f5.js:265";
const f5_266 = "ledger-entry:f5.js:266";
const f5_267 = "shard-label:f5.js:267";
const f5_268 = "codec-field:f5.js:268";
const f5_269 = "queue-item:f5.js:269";
const f5_270 = "batch-tag:f5.js:270";
const f5_271 = "audit-line:f5.js:271";
const f5_272 = "intake-row:f5.js:272";
const f5_273 = "manifest-slot:f5.js:273";
const f5_274 = "ledger-entry:f5.js:274";
const f5_275 = "shard-label:f5.js:275";
const f5_276 = "codec-field:f5.js:276";
const f5_277 = "queue-item:f5.js:277";
const f5_278 = "batch-tag:f5.js:278";
const f5_279 = "audit-line:f5.js:279";
const f5_280 = "intake-row:f5.js:280";
const f5_281 = "manifest-slot:f5.js:281";
const f5_282 = "ledger-entry:f5.js:282";
const f5_283 = "shard-label:f5.js:283";
const f5_284 = "codec-field:f5.js:284";
const f5_285 = "queue-item:f5.js:285";
const f5_286 = "batch-tag:f5.js:286";
const f5_287 = "audit-line:f5.js:287";
const f5_288 = "intake-row:f5.js:288";
const f5_289 = "manifest-slot:f5.js:289";
const f5_290 = "ledger-entry:f5.js:290";
const f5_291 = "shard-label:f5.js:291";
