import { r as m0 } from "./m0.js";
import { p as p0 } from "./p0.js";

function a(ctx, name, index) {
  const score = Math.imul((ctx.routeHash || 0) ^ index ^ name.length, 2246822507) >>> 0;
  return {
    ...ctx,
    middlewareTrace: [...(ctx.middlewareTrace || []), name],
    runtimeTicket: ((ctx.runtimeTicket || 0) ^ score ^ ((ctx.tupleTape || "").length + index)) >>> 0
  };
}

const b = [
  (ctx) => a(ctx, "normalize-intent", 0),
  (ctx) => a(ctx, "attach-board", 1),
  (ctx) => a(ctx, "bind-selection", 2),
  (ctx) => a(ctx, "shadow-ledger", 3),
  (ctx) => a(ctx, "hold-gate", 4),
  (ctx) => a(ctx, "window-contract", 5),
  (ctx) => a(ctx, "tuple-snapshot", 6),
  (ctx) => a(ctx, "sink-ledger", 7)
];

function c(ctx, index) {
  if (index !== 3) return ctx;
  const vendorScore = p0({
    ...ctx,
    boost: true,
    phase: "snapshot",
    state: ctx.state
  });
  return {
    ...ctx,
    vendorScore,
    runtimeTicket: ((ctx.runtimeTicket || 0) ^ vendorScore) >>> 0
  };
}

export function r(ctx) {
  const node = ctx.document.getElementById("statusLine");
  if (node) node.value = "Policy";
  let next = ctx;
  for (let index = 0; index < b.length; index += 1) {
    next = b[index](next);
    next = c(next, index);
  }
  return m0({
    ...next,
    route: [...(next.route || []), 29],
    routeLabels: [...(next.routeLabels || []), "policy-middleware"]
  });
}
const l0_0 = "src/z0/l0.js:catalog-row:000";
const l0_1 = "src/z0/l0.js:catalog-row:001";
const l0_2 = "src/z0/l0.js:catalog-row:002";
const l0_3 = "src/z0/l0.js:catalog-row:003";
const l0_4 = "src/z0/l0.js:catalog-row:004";
const l0_5 = "src/z0/l0.js:catalog-row:005";
const l0_6 = "src/z0/l0.js:catalog-row:006";
const l0_7 = "src/z0/l0.js:catalog-row:007";
const l0_8 = "src/z0/l0.js:catalog-row:008";
const l0_9 = "src/z0/l0.js:catalog-row:009";
const l0_10 = "src/z0/l0.js:catalog-row:010";
const l0_11 = "src/z0/l0.js:catalog-row:011";
const l0_12 = "src/z0/l0.js:catalog-row:012";
const l0_13 = "src/z0/l0.js:catalog-row:013";
const l0_14 = "src/z0/l0.js:catalog-row:014";
const l0_15 = "src/z0/l0.js:catalog-row:015";
const l0_16 = "src/z0/l0.js:catalog-row:016";
const l0_17 = "src/z0/l0.js:catalog-row:017";
const l0_18 = "src/z0/l0.js:catalog-row:018";
const l0_19 = "src/z0/l0.js:catalog-row:019";
const l0_20 = "src/z0/l0.js:catalog-row:020";
const l0_21 = "src/z0/l0.js:catalog-row:021";
const l0_22 = "src/z0/l0.js:catalog-row:022";
const l0_23 = "src/z0/l0.js:catalog-row:023";
const l0_24 = "src/z0/l0.js:catalog-row:024";
const l0_25 = "src/z0/l0.js:catalog-row:025";
const l0_26 = "src/z0/l0.js:catalog-row:026";
const l0_27 = "src/z0/l0.js:catalog-row:027";
const l0_28 = "src/z0/l0.js:catalog-row:028";
const l0_29 = "src/z0/l0.js:catalog-row:029";
const l0_30 = "src/z0/l0.js:catalog-row:030";
const l0_31 = "src/z0/l0.js:catalog-row:031";
const l0_32 = "src/z0/l0.js:catalog-row:032";
const l0_33 = "src/z0/l0.js:catalog-row:033";
const l0_34 = "src/z0/l0.js:catalog-row:034";
const l0_35 = "src/z0/l0.js:catalog-row:035";
const l0_36 = "src/z0/l0.js:catalog-row:036";
const l0_37 = "src/z0/l0.js:catalog-row:037";
const l0_38 = "src/z0/l0.js:catalog-row:038";
const l0_39 = "src/z0/l0.js:catalog-row:039";
const l0_40 = "src/z0/l0.js:catalog-row:040";
const l0_41 = "src/z0/l0.js:catalog-row:041";
const l0_42 = "src/z0/l0.js:catalog-row:042";
const l0_43 = "src/z0/l0.js:catalog-row:043";
const l0_44 = "src/z0/l0.js:catalog-row:044";
const l0_45 = "src/z0/l0.js:catalog-row:045";
const l0_46 = "src/z0/l0.js:catalog-row:046";
const l0_47 = "src/z0/l0.js:catalog-row:047";
const l0_48 = "src/z0/l0.js:catalog-row:048";
const l0_49 = "src/z0/l0.js:catalog-row:049";
const l0_50 = "src/z0/l0.js:catalog-row:050";
const l0_51 = "src/z0/l0.js:catalog-row:051";
const l0_52 = "src/z0/l0.js:catalog-row:052";
const l0_53 = "src/z0/l0.js:catalog-row:053";
const l0_54 = "src/z0/l0.js:catalog-row:054";
const l0_55 = "src/z0/l0.js:catalog-row:055";
const l0_56 = "src/z0/l0.js:catalog-row:056";
const l0_57 = "src/z0/l0.js:catalog-row:057";
const l0_58 = "src/z0/l0.js:catalog-row:058";
const l0_59 = "src/z0/l0.js:catalog-row:059";
const l0_60 = "src/z0/l0.js:catalog-row:060";
const l0_61 = "src/z0/l0.js:catalog-row:061";
const l0_62 = "src/z0/l0.js:catalog-row:062";
const l0_63 = "src/z0/l0.js:catalog-row:063";
const l0_64 = "src/z0/l0.js:catalog-row:064";
const l0_65 = "src/z0/l0.js:catalog-row:065";
const l0_66 = "src/z0/l0.js:catalog-row:066";
const l0_67 = "src/z0/l0.js:catalog-row:067";
const l0_68 = "src/z0/l0.js:catalog-row:068";
const l0_69 = "src/z0/l0.js:catalog-row:069";
const l0_70 = "src/z0/l0.js:catalog-row:070";
const l0_71 = "src/z0/l0.js:catalog-row:071";
const l0_72 = "src/z0/l0.js:catalog-row:072";
const l0_73 = "src/z0/l0.js:catalog-row:073";
const l0_74 = "src/z0/l0.js:catalog-row:074";
const l0_75 = "src/z0/l0.js:catalog-row:075";
const l0_76 = "src/z0/l0.js:catalog-row:076";
const l0_77 = "src/z0/l0.js:catalog-row:077";
const l0_78 = "src/z0/l0.js:catalog-row:078";
const l0_79 = "src/z0/l0.js:catalog-row:079";
const l0_80 = "src/z0/l0.js:catalog-row:080";
const l0_81 = "src/z0/l0.js:catalog-row:081";
const l0_82 = "src/z0/l0.js:catalog-row:082";
const l0_83 = "src/z0/l0.js:catalog-row:083";
const l0_84 = "src/z0/l0.js:catalog-row:084";
const l0_85 = "src/z0/l0.js:catalog-row:085";
const l0_86 = "src/z0/l0.js:catalog-row:086";
const l0_87 = "src/z0/l0.js:catalog-row:087";
const l0_88 = "src/z0/l0.js:catalog-row:088";
const l0_89 = "src/z0/l0.js:catalog-row:089";
const l0_90 = "src/z0/l0.js:catalog-row:090";
const l0_91 = "src/z0/l0.js:catalog-row:091";
const l0_92 = "src/z0/l0.js:catalog-row:092";
const l0_93 = "src/z0/l0.js:catalog-row:093";
const l0_94 = "src/z0/l0.js:catalog-row:094";
const l0_95 = "src/z0/l0.js:catalog-row:095";
const l0_96 = "src/z0/l0.js:catalog-row:096";
const l0_97 = "src/z0/l0.js:catalog-row:097";
const l0_98 = "src/z0/l0.js:catalog-row:098";
const l0_99 = "src/z0/l0.js:catalog-row:099";
const l0_100 = "src/z0/l0.js:catalog-row:100";
const l0_101 = "src/z0/l0.js:catalog-row:101";
const l0_102 = "src/z0/l0.js:catalog-row:102";
const l0_103 = "src/z0/l0.js:catalog-row:103";
const l0_104 = "src/z0/l0.js:catalog-row:104";
const l0_105 = "src/z0/l0.js:catalog-row:105";
const l0_106 = "src/z0/l0.js:catalog-row:106";
const l0_107 = "src/z0/l0.js:catalog-row:107";
const l0_108 = "src/z0/l0.js:catalog-row:108";
const l0_109 = "src/z0/l0.js:catalog-row:109";
const l0_110 = "src/z0/l0.js:catalog-row:110";
const l0_111 = "src/z0/l0.js:catalog-row:111";
const l0_112 = "src/z0/l0.js:catalog-row:112";
const l0_113 = "src/z0/l0.js:catalog-row:113";
const l0_114 = "src/z0/l0.js:catalog-row:114";
const l0_115 = "src/z0/l0.js:catalog-row:115";
const l0_116 = "src/z0/l0.js:catalog-row:116";
const l0_117 = "src/z0/l0.js:catalog-row:117";
const l0_118 = "src/z0/l0.js:catalog-row:118";
const l0_119 = "src/z0/l0.js:catalog-row:119";
const l0_120 = "src/z0/l0.js:catalog-row:120";
const l0_121 = "src/z0/l0.js:catalog-row:121";
const l0_122 = "src/z0/l0.js:catalog-row:122";
const l0_123 = "src/z0/l0.js:catalog-row:123";
const l0_124 = "src/z0/l0.js:catalog-row:124";
const l0_125 = "src/z0/l0.js:catalog-row:125";
const l0_126 = "src/z0/l0.js:catalog-row:126";
const l0_127 = "src/z0/l0.js:catalog-row:127";
const l0_128 = "src/z0/l0.js:catalog-row:128";
const l0_129 = "src/z0/l0.js:catalog-row:129";
const l0_130 = "src/z0/l0.js:catalog-row:130";
const l0_131 = "src/z0/l0.js:catalog-row:131";
const l0_132 = "src/z0/l0.js:catalog-row:132";
const l0_133 = "src/z0/l0.js:catalog-row:133";
const l0_134 = "src/z0/l0.js:catalog-row:134";
const l0_135 = "src/z0/l0.js:catalog-row:135";
const l0_136 = "src/z0/l0.js:catalog-row:136";
const l0_137 = "src/z0/l0.js:catalog-row:137";
const l0_138 = "src/z0/l0.js:catalog-row:138";
const l0_139 = "src/z0/l0.js:catalog-row:139";
const l0_140 = "src/z0/l0.js:catalog-row:140";
const l0_141 = "src/z0/l0.js:catalog-row:141";
const l0_142 = "src/z0/l0.js:catalog-row:142";
const l0_143 = "src/z0/l0.js:catalog-row:143";
const l0_144 = "src/z0/l0.js:catalog-row:144";
const l0_145 = "src/z0/l0.js:catalog-row:145";
const l0_146 = "src/z0/l0.js:catalog-row:146";
const l0_147 = "src/z0/l0.js:catalog-row:147";
const l0_148 = "src/z0/l0.js:catalog-row:148";
const l0_149 = "src/z0/l0.js:catalog-row:149";
const l0_150 = "src/z0/l0.js:catalog-row:150";
const l0_151 = "src/z0/l0.js:catalog-row:151";
const l0_152 = "src/z0/l0.js:catalog-row:152";
const l0_153 = "src/z0/l0.js:catalog-row:153";
const l0_154 = "src/z0/l0.js:catalog-row:154";
const l0_155 = "src/z0/l0.js:catalog-row:155";
const l0_156 = "src/z0/l0.js:catalog-row:156";
const l0_157 = "src/z0/l0.js:catalog-row:157";
const l0_158 = "src/z0/l0.js:catalog-row:158";
const l0_159 = "src/z0/l0.js:catalog-row:159";
const l0_160 = "src/z0/l0.js:catalog-row:160";
const l0_161 = "src/z0/l0.js:catalog-row:161";
const l0_162 = "src/z0/l0.js:catalog-row:162";
const l0_163 = "src/z0/l0.js:catalog-row:163";
const l0_164 = "src/z0/l0.js:catalog-row:164";
const l0_165 = "src/z0/l0.js:catalog-row:165";
const l0_166 = "src/z0/l0.js:catalog-row:166";
const l0_167 = "src/z0/l0.js:catalog-row:167";
const l0_168 = "src/z0/l0.js:catalog-row:168";
const l0_169 = "src/z0/l0.js:catalog-row:169";
const l0_170 = "src/z0/l0.js:catalog-row:170";
const l0_171 = "src/z0/l0.js:catalog-row:171";
const l0_172 = "src/z0/l0.js:catalog-row:172";
const l0_173 = "src/z0/l0.js:catalog-row:173";
const l0_174 = "src/z0/l0.js:catalog-row:174";
const l0_175 = "src/z0/l0.js:catalog-row:175";
const l0_176 = "src/z0/l0.js:catalog-row:176";
const l0_177 = "src/z0/l0.js:catalog-row:177";
const l0_178 = "src/z0/l0.js:catalog-row:178";
const l0_179 = "src/z0/l0.js:catalog-row:179";
const l0_180 = "src/z0/l0.js:catalog-row:180";
const l0_181 = "src/z0/l0.js:catalog-row:181";
const l0_182 = "src/z0/l0.js:catalog-row:182";
const l0_183 = "src/z0/l0.js:catalog-row:183";
const l0_184 = "src/z0/l0.js:catalog-row:184";
const l0_185 = "src/z0/l0.js:catalog-row:185";
const l0_186 = "src/z0/l0.js:catalog-row:186";
const l0_187 = "src/z0/l0.js:catalog-row:187";
const l0_188 = "src/z0/l0.js:catalog-row:188";
const l0_189 = "src/z0/l0.js:catalog-row:189";
const l0_190 = "src/z0/l0.js:catalog-row:190";
const l0_191 = "src/z0/l0.js:catalog-row:191";
const l0_192 = "src/z0/l0.js:catalog-row:192";
const l0_193 = "src/z0/l0.js:catalog-row:193";
const l0_194 = "src/z0/l0.js:catalog-row:194";
const l0_195 = "src/z0/l0.js:catalog-row:195";
const l0_196 = "src/z0/l0.js:catalog-row:196";
const l0_197 = "src/z0/l0.js:catalog-row:197";
const l0_198 = "src/z0/l0.js:catalog-row:198";
const l0_199 = "src/z0/l0.js:catalog-row:199";
const l0_200 = "src/z0/l0.js:catalog-row:200";
const l0_201 = "src/z0/l0.js:catalog-row:201";
const l0_202 = "src/z0/l0.js:catalog-row:202";
const l0_203 = "src/z0/l0.js:catalog-row:203";
const l0_204 = "src/z0/l0.js:catalog-row:204";
const l0_205 = "src/z0/l0.js:catalog-row:205";
const l0_206 = "src/z0/l0.js:catalog-row:206";
const l0_207 = "src/z0/l0.js:catalog-row:207";
const l0_208 = "src/z0/l0.js:catalog-row:208";
const l0_209 = "src/z0/l0.js:catalog-row:209";
const l0_210 = "src/z0/l0.js:catalog-row:210";
const l0_211 = "src/z0/l0.js:catalog-row:211";
const l0_212 = "src/z0/l0.js:catalog-row:212";
const l0_213 = "src/z0/l0.js:catalog-row:213";
const l0_214 = "src/z0/l0.js:catalog-row:214";
const l0_215 = "src/z0/l0.js:catalog-row:215";
const l0_216 = "src/z0/l0.js:catalog-row:216";
const l0_217 = "src/z0/l0.js:catalog-row:217";
const l0_218 = "src/z0/l0.js:catalog-row:218";
const l0_219 = "src/z0/l0.js:catalog-row:219";
const l0_220 = "src/z0/l0.js:catalog-row:220";
const l0_221 = "src/z0/l0.js:catalog-row:221";
const l0_222 = "src/z0/l0.js:catalog-row:222";
const l0_223 = "src/z0/l0.js:catalog-row:223";
const l0_224 = "src/z0/l0.js:catalog-row:224";
const l0_225 = "src/z0/l0.js:catalog-row:225";
const l0_226 = "src/z0/l0.js:catalog-row:226";
const l0_227 = "src/z0/l0.js:catalog-row:227";
const l0_228 = "src/z0/l0.js:catalog-row:228";
const l0_229 = "src/z0/l0.js:catalog-row:229";
const l0_230 = "src/z0/l0.js:catalog-row:230";
const l0_231 = "src/z0/l0.js:catalog-row:231";
const l0_232 = "src/z0/l0.js:catalog-row:232";
const l0_233 = "src/z0/l0.js:catalog-row:233";
const l0_234 = "src/z0/l0.js:catalog-row:234";
const l0_235 = "src/z0/l0.js:catalog-row:235";
const l0_236 = "src/z0/l0.js:catalog-row:236";
const l0_237 = "src/z0/l0.js:catalog-row:237";
const l0_238 = "src/z0/l0.js:catalog-row:238";
const l0_239 = "src/z0/l0.js:catalog-row:239";
const l0_240 = "src/z0/l0.js:catalog-row:240";
const l0_241 = "src/z0/l0.js:catalog-row:241";
const l0_242 = "src/z0/l0.js:catalog-row:242";
const l0_243 = "src/z0/l0.js:catalog-row:243";
const l0_244 = "src/z0/l0.js:catalog-row:244";
const l0_245 = "src/z0/l0.js:catalog-row:245";
const l0_246 = "src/z0/l0.js:catalog-row:246";
const l0_247 = "src/z0/l0.js:catalog-row:247";
const l0_248 = "src/z0/l0.js:catalog-row:248";
const l0_249 = "src/z0/l0.js:catalog-row:249";
const l0_250 = "src/z0/l0.js:catalog-row:250";
const l0_251 = "src/z0/l0.js:catalog-row:251";
const l0_252 = "src/z0/l0.js:catalog-row:252";
const l0_253 = "src/z0/l0.js:catalog-row:253";
const l0_254 = "src/z0/l0.js:catalog-row:254";
const l0_255 = "src/z0/l0.js:catalog-row:255";
const l0_256 = "src/z0/l0.js:catalog-row:256";
const l0_257 = "src/z0/l0.js:catalog-row:257";
const l0_258 = "src/z0/l0.js:catalog-row:258";
const l0_259 = "src/z0/l0.js:catalog-row:259";
const l0_260 = "src/z0/l0.js:catalog-row:260";
const l0_261 = "src/z0/l0.js:catalog-row:261";
const l0_262 = "src/z0/l0.js:catalog-row:262";
const l0_263 = "src/z0/l0.js:catalog-row:263";
const l0_264 = "src/z0/l0.js:catalog-row:264";
const l0_265 = "src/z0/l0.js:catalog-row:265";
const l0_266 = "src/z0/l0.js:catalog-row:266";
const l0_267 = "src/z0/l0.js:catalog-row:267";
const l0_268 = "src/z0/l0.js:catalog-row:268";
const l0_269 = "src/z0/l0.js:catalog-row:269";
const l0_270 = "src/z0/l0.js:catalog-row:270";
const l0_271 = "src/z0/l0.js:catalog-row:271";
const l0_272 = "src/z0/l0.js:catalog-row:272";
const l0_273 = "src/z0/l0.js:catalog-row:273";
const l0_274 = "src/z0/l0.js:catalog-row:274";
const l0_275 = "src/z0/l0.js:catalog-row:275";
const l0_276 = "src/z0/l0.js:catalog-row:276";
const l0_277 = "src/z0/l0.js:catalog-row:277";
const l0_278 = "src/z0/l0.js:catalog-row:278";
const l0_279 = "src/z0/l0.js:catalog-row:279";
const l0_280 = "src/z0/l0.js:catalog-row:280";
const l0_281 = "src/z0/l0.js:catalog-row:281";
const l0_282 = "src/z0/l0.js:catalog-row:282";
const l0_283 = "src/z0/l0.js:catalog-row:283";
const l0_284 = "src/z0/l0.js:catalog-row:284";
const l0_285 = "src/z0/l0.js:catalog-row:285";
const l0_286 = "src/z0/l0.js:catalog-row:286";
