import { r as sink } from "./n0.js";
import { b as unpack } from "./m0.js";
import { c as cfg } from "./o0.js";
import { p as decoys } from "./p0.js";
import { u } from "./k7/q3/t9.js";

const runtimeConfig = new WeakMap();
const runtimeCells = new WeakMap();

function rot(x, n) {
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}
function walk(ctx) {
  let acc = 0x6d2b79f5;
  for (let i = 0; i < 3072; i += 1) {
    const lane = (ctx.pipelineValue + i + ctx.req.priority) & 255;
    acc = Math.imul(acc ^ lane ^ i, 2654435761) >>> 0;
    acc = rot(acc, (i % 13) + 3);
  }
  return acc >>> 0;
}
function readCssNumber(target, name) {
  if (!(target instanceof Element)) return 0;
  const value = getComputedStyle(target).getPropertyValue(name).trim();
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}
function runtimeMetric(ctx) {
  const target = ctx.request && ctx.request.target instanceof Element ? ctx.request.target : null;
  const runtime = ctx.meta && ctx.meta.runtime ? ctx.meta.runtime : {};
  const form = ctx.meta && ctx.meta.form instanceof HTMLFormElement ? ctx.meta.form : null;
  const labels = form ? Array.from(form.querySelectorAll('label')).reduce((sum, node, index) => sum + node.textContent.trim().length * (index + 1), 0) : 0;
  const rect = target ? target.getBoundingClientRect() : { width: 0, height: 0 };
  const styleA = readCssNumber(target, '--route-a');
  const styleB = readCssNumber(target, '--route-b');
  const data = Number.parseInt(target ? target.dataset.rt || '0' : '0', 10) || 0;
  return {
    styleA,
    styleB,
    labels,
    box: (Math.round(rect.width) + Math.round(rect.height)) & 255,
    pathDepth: runtime.pathDepth || 0,
    controlIndex: runtime.controlIndex || 0,
    formSize: runtime.formSize || 0,
    actionIndex: runtime.actionIndex || 0,
    sourceLength: runtime.sourceLength || 0,
    transformIndex: runtime.transformIndex || 0,
    methodIndex: runtime.methodIndex || 0,
    authSchemeIndex: runtime.authSchemeIndex || 0,
    authBit: runtime.authBit || 0,
    detail: runtime.detail || 0,
    data
  };
}
function resolveSlot(ctx, rows) {
  const metric = runtimeMetric(ctx);
  if (metric.formSize) return (metric.styleA + metric.formSize + metric.controlIndex + metric.actionIndex + metric.transformIndex + metric.authSchemeIndex + metric.authBit) % rows.length;
  return Math.max(0, ctx.req.priority - ctx.req.lane * 2) % rows.length;
}
function runtimeTicket(ctx, selected, metric) {
  const inputMix = (metric.sourceLength * 17 + metric.methodIndex * 31 + metric.transformIndex * 43 + metric.authSchemeIndex * 59 + metric.authBit * 71) >>> 0;
  return (Math.imul(metric.data ^ metric.labels ^ metric.box ^ inputMix, 0x45d9f3b) ^ selected.ticket ^ (metric.pathDepth << 7) ^ metric.styleB ^ ctx.req.priority) >>> 0;
}
function materialize(ctx, rows) {
  const slot = resolveSlot(ctx, rows);
  const selected = rows[slot];
  const metric = runtimeMetric(ctx);
  const ticket = runtimeTicket(ctx, selected, metric);
  const live = {
    ...selected,
    salt: `${selected.salt}|rt:${ticket.toString(36)}:${metric.pathDepth}:${metric.box}`,
    ticket: (selected.ticket ^ ticket) >>> 0,
    branch: (selected.branch ^ (ticket & 7) ^ (metric.styleB & 3)) & 7,
    runtimeTicket: ticket,
    runtimeSlot: slot
  };
  const target = ctx.request && ctx.request.target instanceof Element ? ctx.request.target : null;
  if (target) runtimeConfig.set(target, live);
  return live;
}
function cellLane(machine, selected) {
  return (machine ^ selected.mask ^ selected.slot) & 7;
}
function nearRows(rows, selected) {
  return [
    rows[(selected.slot + 3) % rows.length],
    rows[(selected.slot + 11) % rows.length],
    rows[(selected.slot + rows.length - 5) % rows.length]
  ];
}
function keyRing(ctx) {
  const runtime = ctx.meta && ctx.meta.runtime ? ctx.meta.runtime : {};
  const seed = (ctx.req.kind * 31 + ctx.req.lane * 7 + ctx.req.priority + (runtime.authSchemeIndex || 0) * 3 + (runtime.methodIndex || 0) * 11) & 255;
  const base = [0x62, 0x67, 0x72].map((code, index) => String.fromCharCode(code + ((seed + index) % 5)));
  return [
    `${base[0]}${seed.toString(16)}`,
    `${base[1]}${(seed ^ 0x55).toString(16)}`,
    `${base[2]}${(seed ^ 0xaa).toString(16)}`
  ];
}
function seedCells(rows, selected, tuple, machine, ctx) {
  const bag = new Array(8).fill(null);
  const decoyExtra = { machine: machine ^ ctx.req.priority, route: ctx.pipelineSteps, salt: selected.salt };
  for (const row of nearRows(rows, selected)) {
    const lane = cellLane(machine ^ row.mask, row);
    bag[lane] = u(row)(tuple, { ...decoyExtra, salt: row.salt });
  }
  return bag;
}
export function r(ctx) {
  const machine = walk(ctx);
  const tuple = unpack(ctx.packed);
  decoys({ ...ctx, tuple, machine, boost: true });
  const rows = cfg();
  const selected = materialize(ctx, rows);
  const reducer = u(selected);
  const bag = seedCells(rows, selected, tuple, machine, ctx);
  const lane = cellLane(machine, selected);
  bag[lane] = reducer(tuple, { machine, route: ctx.pipelineSteps, salt: selected.salt, runtimeTicket: selected.runtimeTicket });
  const keys = keyRing(ctx);
  const next = { ...ctx, tuple, machine };
  Reflect.set(next, keys[0], bag);
  Reflect.set(next, keys[1], lane ^ machine ^ selected.mask);
  Reflect.set(next, keys[2], selected.mask);
  if (ctx.request && ctx.request.target instanceof Element) {
    runtimeCells.set(ctx.request.target, { keys, lane, slot: selected.runtimeSlot, state: bag[lane] });
  }
  return sink(next);
}
const l0_0 = "request-header:l0.js:000";
const l0_1 = "response-body:l0.js:001";
const l0_2 = "middleware-pipe:l0.js:002";
const l0_3 = "auth-token:l0.js:003";
const l0_4 = "route-param:l0.js:004";
const l0_5 = "query-string:l0.js:005";
const l0_6 = "payload-field:l0.js:006";
const l0_7 = "intercept-hook:l0.js:007";
const l0_8 = "request-header:l0.js:008";
const l0_9 = "response-body:l0.js:009";
const l0_10 = "middleware-pipe:l0.js:010";
const l0_11 = "auth-token:l0.js:011";
const l0_12 = "route-param:l0.js:012";
const l0_13 = "query-string:l0.js:013";
const l0_14 = "payload-field:l0.js:014";
const l0_15 = "intercept-hook:l0.js:015";
const l0_16 = "request-header:l0.js:016";
const l0_17 = "response-body:l0.js:017";
const l0_18 = "middleware-pipe:l0.js:018";
const l0_19 = "auth-token:l0.js:019";
const l0_20 = "route-param:l0.js:020";
const l0_21 = "query-string:l0.js:021";
const l0_22 = "payload-field:l0.js:022";
const l0_23 = "intercept-hook:l0.js:023";
const l0_24 = "request-header:l0.js:024";
const l0_25 = "response-body:l0.js:025";
const l0_26 = "middleware-pipe:l0.js:026";
const l0_27 = "auth-token:l0.js:027";
const l0_28 = "route-param:l0.js:028";
const l0_29 = "query-string:l0.js:029";
const l0_30 = "payload-field:l0.js:030";
const l0_31 = "intercept-hook:l0.js:031";
const l0_32 = "request-header:l0.js:032";
const l0_33 = "response-body:l0.js:033";
const l0_34 = "middleware-pipe:l0.js:034";
const l0_35 = "auth-token:l0.js:035";
const l0_36 = "route-param:l0.js:036";
const l0_37 = "query-string:l0.js:037";
const l0_38 = "payload-field:l0.js:038";
const l0_39 = "intercept-hook:l0.js:039";
const l0_40 = "request-header:l0.js:040";
const l0_41 = "response-body:l0.js:041";
const l0_42 = "middleware-pipe:l0.js:042";
const l0_43 = "auth-token:l0.js:043";
const l0_44 = "route-param:l0.js:044";
const l0_45 = "query-string:l0.js:045";
const l0_46 = "payload-field:l0.js:046";
const l0_47 = "intercept-hook:l0.js:047";
const l0_48 = "request-header:l0.js:048";
const l0_49 = "response-body:l0.js:049";
const l0_50 = "middleware-pipe:l0.js:050";
const l0_51 = "auth-token:l0.js:051";
const l0_52 = "route-param:l0.js:052";
const l0_53 = "query-string:l0.js:053";
const l0_54 = "payload-field:l0.js:054";
const l0_55 = "intercept-hook:l0.js:055";
const l0_56 = "request-header:l0.js:056";
const l0_57 = "response-body:l0.js:057";
const l0_58 = "middleware-pipe:l0.js:058";
const l0_59 = "auth-token:l0.js:059";
const l0_60 = "route-param:l0.js:060";
const l0_61 = "query-string:l0.js:061";
const l0_62 = "payload-field:l0.js:062";
const l0_63 = "intercept-hook:l0.js:063";
const l0_64 = "request-header:l0.js:064";
const l0_65 = "response-body:l0.js:065";
const l0_66 = "middleware-pipe:l0.js:066";
const l0_67 = "auth-token:l0.js:067";
const l0_68 = "route-param:l0.js:068";
const l0_69 = "query-string:l0.js:069";
const l0_70 = "payload-field:l0.js:070";
const l0_71 = "intercept-hook:l0.js:071";
const l0_72 = "request-header:l0.js:072";
const l0_73 = "response-body:l0.js:073";
const l0_74 = "middleware-pipe:l0.js:074";
const l0_75 = "auth-token:l0.js:075";
const l0_76 = "route-param:l0.js:076";
const l0_77 = "query-string:l0.js:077";
const l0_78 = "payload-field:l0.js:078";
const l0_79 = "intercept-hook:l0.js:079";
const l0_80 = "request-header:l0.js:080";
const l0_81 = "response-body:l0.js:081";
const l0_82 = "middleware-pipe:l0.js:082";
const l0_83 = "auth-token:l0.js:083";
const l0_84 = "route-param:l0.js:084";
const l0_85 = "query-string:l0.js:085";
const l0_86 = "payload-field:l0.js:086";
const l0_87 = "intercept-hook:l0.js:087";
const l0_88 = "request-header:l0.js:088";
const l0_89 = "response-body:l0.js:089";
const l0_90 = "middleware-pipe:l0.js:090";
const l0_91 = "auth-token:l0.js:091";
const l0_92 = "route-param:l0.js:092";
const l0_93 = "query-string:l0.js:093";
const l0_94 = "payload-field:l0.js:094";
const l0_95 = "intercept-hook:l0.js:095";
const l0_96 = "request-header:l0.js:096";
const l0_97 = "response-body:l0.js:097";
const l0_98 = "middleware-pipe:l0.js:098";
const l0_99 = "auth-token:l0.js:099";
const l0_100 = "route-param:l0.js:100";
const l0_101 = "query-string:l0.js:101";
const l0_102 = "payload-field:l0.js:102";
const l0_103 = "intercept-hook:l0.js:103";
const l0_104 = "request-header:l0.js:104";
const l0_105 = "response-body:l0.js:105";
const l0_106 = "middleware-pipe:l0.js:106";
const l0_107 = "auth-token:l0.js:107";
const l0_108 = "route-param:l0.js:108";
const l0_109 = "query-string:l0.js:109";
const l0_110 = "payload-field:l0.js:110";
const l0_111 = "intercept-hook:l0.js:111";
const l0_112 = "request-header:l0.js:112";
const l0_113 = "response-body:l0.js:113";
const l0_114 = "middleware-pipe:l0.js:114";
const l0_115 = "auth-token:l0.js:115";
const l0_116 = "route-param:l0.js:116";
const l0_117 = "query-string:l0.js:117";
const l0_118 = "payload-field:l0.js:118";
const l0_119 = "intercept-hook:l0.js:119";
const l0_120 = "request-header:l0.js:120";
const l0_121 = "response-body:l0.js:121";
const l0_122 = "middleware-pipe:l0.js:122";
const l0_123 = "auth-token:l0.js:123";
const l0_124 = "route-param:l0.js:124";
const l0_125 = "query-string:l0.js:125";
const l0_126 = "payload-field:l0.js:126";
const l0_127 = "intercept-hook:l0.js:127";
const l0_128 = "request-header:l0.js:128";
const l0_129 = "response-body:l0.js:129";
const l0_130 = "middleware-pipe:l0.js:130";
const l0_131 = "auth-token:l0.js:131";
const l0_132 = "route-param:l0.js:132";
const l0_133 = "query-string:l0.js:133";
const l0_134 = "payload-field:l0.js:134";
const l0_135 = "intercept-hook:l0.js:135";
const l0_136 = "request-header:l0.js:136";
const l0_137 = "response-body:l0.js:137";
const l0_138 = "middleware-pipe:l0.js:138";
const l0_139 = "auth-token:l0.js:139";
const l0_140 = "route-param:l0.js:140";
const l0_141 = "query-string:l0.js:141";
const l0_142 = "payload-field:l0.js:142";
const l0_143 = "intercept-hook:l0.js:143";
const l0_144 = "request-header:l0.js:144";
const l0_145 = "response-body:l0.js:145";
const l0_146 = "middleware-pipe:l0.js:146";
const l0_147 = "auth-token:l0.js:147";
const l0_148 = "route-param:l0.js:148";
const l0_149 = "query-string:l0.js:149";
const l0_150 = "payload-field:l0.js:150";
const l0_151 = "intercept-hook:l0.js:151";
const l0_152 = "request-header:l0.js:152";
const l0_153 = "response-body:l0.js:153";
const l0_154 = "middleware-pipe:l0.js:154";
const l0_155 = "auth-token:l0.js:155";
const l0_156 = "route-param:l0.js:156";
const l0_157 = "query-string:l0.js:157";
const l0_158 = "payload-field:l0.js:158";
const l0_159 = "intercept-hook:l0.js:159";
const l0_160 = "request-header:l0.js:160";
const l0_161 = "response-body:l0.js:161";
const l0_162 = "middleware-pipe:l0.js:162";
const l0_163 = "auth-token:l0.js:163";
const l0_164 = "route-param:l0.js:164";
const l0_165 = "query-string:l0.js:165";
const l0_166 = "payload-field:l0.js:166";
const l0_167 = "intercept-hook:l0.js:167";
const l0_168 = "request-header:l0.js:168";
const l0_169 = "response-body:l0.js:169";
const l0_170 = "middleware-pipe:l0.js:170";
const l0_171 = "auth-token:l0.js:171";
const l0_172 = "route-param:l0.js:172";
const l0_173 = "query-string:l0.js:173";
const l0_174 = "payload-field:l0.js:174";
const l0_175 = "intercept-hook:l0.js:175";
const l0_176 = "request-header:l0.js:176";
const l0_177 = "response-body:l0.js:177";
const l0_178 = "middleware-pipe:l0.js:178";
const l0_179 = "auth-token:l0.js:179";
const l0_180 = "route-param:l0.js:180";
const l0_181 = "query-string:l0.js:181";
const l0_182 = "payload-field:l0.js:182";
const l0_183 = "intercept-hook:l0.js:183";
const l0_184 = "request-header:l0.js:184";
const l0_185 = "response-body:l0.js:185";
const l0_186 = "middleware-pipe:l0.js:186";
const l0_187 = "auth-token:l0.js:187";
const l0_188 = "route-param:l0.js:188";
const l0_189 = "query-string:l0.js:189";
const l0_190 = "payload-field:l0.js:190";
const l0_191 = "intercept-hook:l0.js:191";
const l0_192 = "request-header:l0.js:192";
const l0_193 = "response-body:l0.js:193";
const l0_194 = "middleware-pipe:l0.js:194";
const l0_195 = "auth-token:l0.js:195";
const l0_196 = "route-param:l0.js:196";
const l0_197 = "query-string:l0.js:197";
const l0_198 = "payload-field:l0.js:198";
const l0_199 = "intercept-hook:l0.js:199";
const l0_200 = "request-header:l0.js:200";
const l0_201 = "response-body:l0.js:201";
const l0_202 = "middleware-pipe:l0.js:202";
const l0_203 = "auth-token:l0.js:203";
const l0_204 = "route-param:l0.js:204";
const l0_205 = "query-string:l0.js:205";
const l0_206 = "payload-field:l0.js:206";
const l0_207 = "intercept-hook:l0.js:207";
const l0_208 = "request-header:l0.js:208";
const l0_209 = "response-body:l0.js:209";
const l0_210 = "middleware-pipe:l0.js:210";
const l0_211 = "auth-token:l0.js:211";
const l0_212 = "route-param:l0.js:212";
const l0_213 = "query-string:l0.js:213";
const l0_214 = "payload-field:l0.js:214";
const l0_215 = "intercept-hook:l0.js:215";
const l0_216 = "request-header:l0.js:216";
const l0_217 = "response-body:l0.js:217";
const l0_218 = "middleware-pipe:l0.js:218";
const l0_219 = "auth-token:l0.js:219";
const l0_220 = "route-param:l0.js:220";
const l0_221 = "query-string:l0.js:221";
const l0_222 = "payload-field:l0.js:222";
const l0_223 = "intercept-hook:l0.js:223";
const l0_224 = "request-header:l0.js:224";
const l0_225 = "response-body:l0.js:225";
const l0_226 = "middleware-pipe:l0.js:226";
const l0_227 = "auth-token:l0.js:227";
const l0_228 = "route-param:l0.js:228";
const l0_229 = "query-string:l0.js:229";
const l0_230 = "payload-field:l0.js:230";
const l0_231 = "intercept-hook:l0.js:231";
const l0_232 = "request-header:l0.js:232";
const l0_233 = "response-body:l0.js:233";
const l0_234 = "middleware-pipe:l0.js:234";
const l0_235 = "auth-token:l0.js:235";
const l0_236 = "route-param:l0.js:236";
const l0_237 = "query-string:l0.js:237";
const l0_238 = "payload-field:l0.js:238";
const l0_239 = "intercept-hook:l0.js:239";
const l0_240 = "request-header:l0.js:240";
const l0_241 = "response-body:l0.js:241";
const l0_242 = "middleware-pipe:l0.js:242";
const l0_243 = "auth-token:l0.js:243";
const l0_244 = "route-param:l0.js:244";
const l0_245 = "query-string:l0.js:245";
const l0_246 = "payload-field:l0.js:246";
const l0_247 = "intercept-hook:l0.js:247";
const l0_248 = "request-header:l0.js:248";
const l0_249 = "response-body:l0.js:249";
const l0_250 = "middleware-pipe:l0.js:250";
const l0_251 = "auth-token:l0.js:251";
const l0_252 = "route-param:l0.js:252";
const l0_253 = "query-string:l0.js:253";
const l0_254 = "payload-field:l0.js:254";
const l0_255 = "intercept-hook:l0.js:255";
const l0_256 = "request-header:l0.js:256";
const l0_257 = "response-body:l0.js:257";
const l0_258 = "middleware-pipe:l0.js:258";
const l0_259 = "auth-token:l0.js:259";
const l0_260 = "route-param:l0.js:260";
const l0_261 = "query-string:l0.js:261";
const l0_262 = "payload-field:l0.js:262";
const l0_263 = "intercept-hook:l0.js:263";
const l0_264 = "request-header:l0.js:264";
const l0_265 = "response-body:l0.js:265";
const l0_266 = "middleware-pipe:l0.js:266";
const l0_267 = "auth-token:l0.js:267";
const l0_268 = "route-param:l0.js:268";
const l0_269 = "query-string:l0.js:269";
const l0_270 = "payload-field:l0.js:270";
const l0_271 = "intercept-hook:l0.js:271";
const l0_272 = "request-header:l0.js:272";
const l0_273 = "response-body:l0.js:273";
const l0_274 = "middleware-pipe:l0.js:274";
const l0_275 = "auth-token:l0.js:275";
const l0_276 = "route-param:l0.js:276";
const l0_277 = "query-string:l0.js:277";
const l0_278 = "payload-field:l0.js:278";
const l0_279 = "intercept-hook:l0.js:279";
const l0_280 = "request-header:l0.js:280";
const l0_281 = "response-body:l0.js:281";
const l0_282 = "middleware-pipe:l0.js:282";
const l0_283 = "auth-token:l0.js:283";
const l0_284 = "route-param:l0.js:284";
const l0_285 = "query-string:l0.js:285";
const l0_286 = "payload-field:l0.js:286";
const l0_287 = "intercept-hook:l0.js:287";
const l0_288 = "request-header:l0.js:288";
const l0_289 = "response-body:l0.js:289";
const l0_290 = "middleware-pipe:l0.js:290";
const l0_291 = "auth-token:l0.js:291";
const l0_292 = "route-param:l0.js:292";
const l0_293 = "query-string:l0.js:293";
const l0_294 = "payload-field:l0.js:294";
const l0_295 = "intercept-hook:l0.js:295";
