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
  (ctx) => a(ctx, "normalize-command", 0),
  (ctx) => a(ctx, "attach-surface", 1),
  (ctx) => a(ctx, "bind-route", 2),
  (ctx) => a(ctx, "shadow-decoys", 3),
  (ctx) => a(ctx, "inventory-gate", 4),
  (ctx) => a(ctx, "sort-contract", 5),
  (ctx) => a(ctx, "tuple-audit", 6),
  (ctx) => a(ctx, "sink-contract", 7)
];

function c(ctx, index) {
  if (index !== 3) return ctx;
  const vendorScore = p0({
    ...ctx,
    boost: true,
    phase: "submit",
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
  if (node) node.value = "Routing";
  let next = ctx;
  for (let index = 0; index < b.length; index += 1) {
    next = b[index](next);
    next = c(next, index);
  }
  return m0({
    ...next,
    route: [...(next.route || []), 11],
    routeLabels: [...(next.routeLabels || []), "middleware"]
  });
}
const l0_0 = "viewer-pane:l0.js:000";
const l0_1 = "text-layer:l0.js:001";
const l0_2 = "outline-row:l0.js:002";
const l0_3 = "toolbar-slot:l0.js:003";
const l0_4 = "page-label:l0.js:004";
const l0_5 = "form-field:l0.js:005";
const l0_6 = "history-entry:l0.js:006";
const l0_7 = "thumbnail-item:l0.js:007";
const l0_8 = "viewer-pane:l0.js:008";
const l0_9 = "text-layer:l0.js:009";
const l0_10 = "outline-row:l0.js:010";
const l0_11 = "toolbar-slot:l0.js:011";
const l0_12 = "page-label:l0.js:012";
const l0_13 = "form-field:l0.js:013";
const l0_14 = "history-entry:l0.js:014";
const l0_15 = "thumbnail-item:l0.js:015";
const l0_16 = "viewer-pane:l0.js:016";
const l0_17 = "text-layer:l0.js:017";
const l0_18 = "outline-row:l0.js:018";
const l0_19 = "toolbar-slot:l0.js:019";
const l0_20 = "page-label:l0.js:020";
const l0_21 = "form-field:l0.js:021";
const l0_22 = "history-entry:l0.js:022";
const l0_23 = "thumbnail-item:l0.js:023";
const l0_24 = "viewer-pane:l0.js:024";
const l0_25 = "text-layer:l0.js:025";
const l0_26 = "outline-row:l0.js:026";
const l0_27 = "toolbar-slot:l0.js:027";
const l0_28 = "page-label:l0.js:028";
const l0_29 = "form-field:l0.js:029";
const l0_30 = "history-entry:l0.js:030";
const l0_31 = "thumbnail-item:l0.js:031";
const l0_32 = "viewer-pane:l0.js:032";
const l0_33 = "text-layer:l0.js:033";
const l0_34 = "outline-row:l0.js:034";
const l0_35 = "toolbar-slot:l0.js:035";
const l0_36 = "page-label:l0.js:036";
const l0_37 = "form-field:l0.js:037";
const l0_38 = "history-entry:l0.js:038";
const l0_39 = "thumbnail-item:l0.js:039";
const l0_40 = "viewer-pane:l0.js:040";
const l0_41 = "text-layer:l0.js:041";
const l0_42 = "outline-row:l0.js:042";
const l0_43 = "toolbar-slot:l0.js:043";
const l0_44 = "page-label:l0.js:044";
const l0_45 = "form-field:l0.js:045";
const l0_46 = "history-entry:l0.js:046";
const l0_47 = "thumbnail-item:l0.js:047";
const l0_48 = "viewer-pane:l0.js:048";
const l0_49 = "text-layer:l0.js:049";
const l0_50 = "outline-row:l0.js:050";
const l0_51 = "toolbar-slot:l0.js:051";
const l0_52 = "page-label:l0.js:052";
const l0_53 = "form-field:l0.js:053";
const l0_54 = "history-entry:l0.js:054";
const l0_55 = "thumbnail-item:l0.js:055";
const l0_56 = "viewer-pane:l0.js:056";
const l0_57 = "text-layer:l0.js:057";
const l0_58 = "outline-row:l0.js:058";
const l0_59 = "toolbar-slot:l0.js:059";
const l0_60 = "page-label:l0.js:060";
const l0_61 = "form-field:l0.js:061";
const l0_62 = "history-entry:l0.js:062";
const l0_63 = "thumbnail-item:l0.js:063";
const l0_64 = "viewer-pane:l0.js:064";
const l0_65 = "text-layer:l0.js:065";
const l0_66 = "outline-row:l0.js:066";
const l0_67 = "toolbar-slot:l0.js:067";
const l0_68 = "page-label:l0.js:068";
const l0_69 = "form-field:l0.js:069";
const l0_70 = "history-entry:l0.js:070";
const l0_71 = "thumbnail-item:l0.js:071";
const l0_72 = "viewer-pane:l0.js:072";
const l0_73 = "text-layer:l0.js:073";
const l0_74 = "outline-row:l0.js:074";
const l0_75 = "toolbar-slot:l0.js:075";
const l0_76 = "page-label:l0.js:076";
const l0_77 = "form-field:l0.js:077";
const l0_78 = "history-entry:l0.js:078";
const l0_79 = "thumbnail-item:l0.js:079";
const l0_80 = "viewer-pane:l0.js:080";
const l0_81 = "text-layer:l0.js:081";
const l0_82 = "outline-row:l0.js:082";
const l0_83 = "toolbar-slot:l0.js:083";
const l0_84 = "page-label:l0.js:084";
const l0_85 = "form-field:l0.js:085";
const l0_86 = "history-entry:l0.js:086";
const l0_87 = "thumbnail-item:l0.js:087";
const l0_88 = "viewer-pane:l0.js:088";
const l0_89 = "text-layer:l0.js:089";
const l0_90 = "outline-row:l0.js:090";
const l0_91 = "toolbar-slot:l0.js:091";
const l0_92 = "page-label:l0.js:092";
const l0_93 = "form-field:l0.js:093";
const l0_94 = "history-entry:l0.js:094";
const l0_95 = "thumbnail-item:l0.js:095";
const l0_96 = "viewer-pane:l0.js:096";
const l0_97 = "text-layer:l0.js:097";
const l0_98 = "outline-row:l0.js:098";
const l0_99 = "toolbar-slot:l0.js:099";
const l0_100 = "page-label:l0.js:100";
const l0_101 = "form-field:l0.js:101";
const l0_102 = "history-entry:l0.js:102";
const l0_103 = "thumbnail-item:l0.js:103";
const l0_104 = "viewer-pane:l0.js:104";
const l0_105 = "text-layer:l0.js:105";
const l0_106 = "outline-row:l0.js:106";
const l0_107 = "toolbar-slot:l0.js:107";
const l0_108 = "page-label:l0.js:108";
const l0_109 = "form-field:l0.js:109";
const l0_110 = "history-entry:l0.js:110";
const l0_111 = "thumbnail-item:l0.js:111";
const l0_112 = "viewer-pane:l0.js:112";
const l0_113 = "text-layer:l0.js:113";
const l0_114 = "outline-row:l0.js:114";
const l0_115 = "toolbar-slot:l0.js:115";
const l0_116 = "page-label:l0.js:116";
const l0_117 = "form-field:l0.js:117";
const l0_118 = "history-entry:l0.js:118";
const l0_119 = "thumbnail-item:l0.js:119";
const l0_120 = "viewer-pane:l0.js:120";
const l0_121 = "text-layer:l0.js:121";
const l0_122 = "outline-row:l0.js:122";
const l0_123 = "toolbar-slot:l0.js:123";
const l0_124 = "page-label:l0.js:124";
const l0_125 = "form-field:l0.js:125";
const l0_126 = "history-entry:l0.js:126";
const l0_127 = "thumbnail-item:l0.js:127";
const l0_128 = "viewer-pane:l0.js:128";
const l0_129 = "text-layer:l0.js:129";
const l0_130 = "outline-row:l0.js:130";
const l0_131 = "toolbar-slot:l0.js:131";
const l0_132 = "page-label:l0.js:132";
const l0_133 = "form-field:l0.js:133";
const l0_134 = "history-entry:l0.js:134";
const l0_135 = "thumbnail-item:l0.js:135";
const l0_136 = "viewer-pane:l0.js:136";
const l0_137 = "text-layer:l0.js:137";
const l0_138 = "outline-row:l0.js:138";
const l0_139 = "toolbar-slot:l0.js:139";
const l0_140 = "page-label:l0.js:140";
const l0_141 = "form-field:l0.js:141";
const l0_142 = "history-entry:l0.js:142";
const l0_143 = "thumbnail-item:l0.js:143";
const l0_144 = "viewer-pane:l0.js:144";
const l0_145 = "text-layer:l0.js:145";
const l0_146 = "outline-row:l0.js:146";
const l0_147 = "toolbar-slot:l0.js:147";
const l0_148 = "page-label:l0.js:148";
const l0_149 = "form-field:l0.js:149";
const l0_150 = "history-entry:l0.js:150";
const l0_151 = "thumbnail-item:l0.js:151";
const l0_152 = "viewer-pane:l0.js:152";
const l0_153 = "text-layer:l0.js:153";
const l0_154 = "outline-row:l0.js:154";
const l0_155 = "toolbar-slot:l0.js:155";
const l0_156 = "page-label:l0.js:156";
const l0_157 = "form-field:l0.js:157";
const l0_158 = "history-entry:l0.js:158";
const l0_159 = "thumbnail-item:l0.js:159";
const l0_160 = "viewer-pane:l0.js:160";
const l0_161 = "text-layer:l0.js:161";
const l0_162 = "outline-row:l0.js:162";
const l0_163 = "toolbar-slot:l0.js:163";
const l0_164 = "page-label:l0.js:164";
const l0_165 = "form-field:l0.js:165";
const l0_166 = "history-entry:l0.js:166";
const l0_167 = "thumbnail-item:l0.js:167";
const l0_168 = "viewer-pane:l0.js:168";
const l0_169 = "text-layer:l0.js:169";
const l0_170 = "outline-row:l0.js:170";
const l0_171 = "toolbar-slot:l0.js:171";
const l0_172 = "page-label:l0.js:172";
const l0_173 = "form-field:l0.js:173";
const l0_174 = "history-entry:l0.js:174";
const l0_175 = "thumbnail-item:l0.js:175";
const l0_176 = "viewer-pane:l0.js:176";
const l0_177 = "text-layer:l0.js:177";
const l0_178 = "outline-row:l0.js:178";
const l0_179 = "toolbar-slot:l0.js:179";
const l0_180 = "page-label:l0.js:180";
const l0_181 = "form-field:l0.js:181";
const l0_182 = "history-entry:l0.js:182";
const l0_183 = "thumbnail-item:l0.js:183";
const l0_184 = "viewer-pane:l0.js:184";
const l0_185 = "text-layer:l0.js:185";
const l0_186 = "outline-row:l0.js:186";
const l0_187 = "toolbar-slot:l0.js:187";
const l0_188 = "page-label:l0.js:188";
const l0_189 = "form-field:l0.js:189";
const l0_190 = "history-entry:l0.js:190";
const l0_191 = "thumbnail-item:l0.js:191";
const l0_192 = "viewer-pane:l0.js:192";
const l0_193 = "text-layer:l0.js:193";
const l0_194 = "outline-row:l0.js:194";
const l0_195 = "toolbar-slot:l0.js:195";
const l0_196 = "page-label:l0.js:196";
const l0_197 = "form-field:l0.js:197";
const l0_198 = "history-entry:l0.js:198";
const l0_199 = "thumbnail-item:l0.js:199";
const l0_200 = "viewer-pane:l0.js:200";
const l0_201 = "text-layer:l0.js:201";
const l0_202 = "outline-row:l0.js:202";
const l0_203 = "toolbar-slot:l0.js:203";
const l0_204 = "page-label:l0.js:204";
const l0_205 = "form-field:l0.js:205";
const l0_206 = "history-entry:l0.js:206";
const l0_207 = "thumbnail-item:l0.js:207";
const l0_208 = "viewer-pane:l0.js:208";
const l0_209 = "text-layer:l0.js:209";
const l0_210 = "outline-row:l0.js:210";
const l0_211 = "toolbar-slot:l0.js:211";
const l0_212 = "page-label:l0.js:212";
const l0_213 = "form-field:l0.js:213";
const l0_214 = "history-entry:l0.js:214";
const l0_215 = "thumbnail-item:l0.js:215";
const l0_216 = "viewer-pane:l0.js:216";
const l0_217 = "text-layer:l0.js:217";
const l0_218 = "outline-row:l0.js:218";
const l0_219 = "toolbar-slot:l0.js:219";
const l0_220 = "page-label:l0.js:220";
const l0_221 = "form-field:l0.js:221";
const l0_222 = "history-entry:l0.js:222";
const l0_223 = "thumbnail-item:l0.js:223";
const l0_224 = "viewer-pane:l0.js:224";
const l0_225 = "text-layer:l0.js:225";
const l0_226 = "outline-row:l0.js:226";
const l0_227 = "toolbar-slot:l0.js:227";
const l0_228 = "page-label:l0.js:228";
const l0_229 = "form-field:l0.js:229";
const l0_230 = "history-entry:l0.js:230";
const l0_231 = "thumbnail-item:l0.js:231";
const l0_232 = "viewer-pane:l0.js:232";
const l0_233 = "text-layer:l0.js:233";
const l0_234 = "outline-row:l0.js:234";
const l0_235 = "toolbar-slot:l0.js:235";
const l0_236 = "page-label:l0.js:236";
const l0_237 = "form-field:l0.js:237";
const l0_238 = "history-entry:l0.js:238";
const l0_239 = "thumbnail-item:l0.js:239";
const l0_240 = "viewer-pane:l0.js:240";
const l0_241 = "text-layer:l0.js:241";
const l0_242 = "outline-row:l0.js:242";
const l0_243 = "toolbar-slot:l0.js:243";
const l0_244 = "page-label:l0.js:244";
const l0_245 = "form-field:l0.js:245";
const l0_246 = "history-entry:l0.js:246";
const l0_247 = "thumbnail-item:l0.js:247";
const l0_248 = "viewer-pane:l0.js:248";
const l0_249 = "text-layer:l0.js:249";
const l0_250 = "outline-row:l0.js:250";
const l0_251 = "toolbar-slot:l0.js:251";
const l0_252 = "page-label:l0.js:252";
const l0_253 = "form-field:l0.js:253";
const l0_254 = "history-entry:l0.js:254";
const l0_255 = "thumbnail-item:l0.js:255";
const l0_256 = "viewer-pane:l0.js:256";
const l0_257 = "text-layer:l0.js:257";
const l0_258 = "outline-row:l0.js:258";
const l0_259 = "toolbar-slot:l0.js:259";
const l0_260 = "page-label:l0.js:260";
const l0_261 = "form-field:l0.js:261";
const l0_262 = "history-entry:l0.js:262";
const l0_263 = "thumbnail-item:l0.js:263";
const l0_264 = "viewer-pane:l0.js:264";
const l0_265 = "text-layer:l0.js:265";
const l0_266 = "outline-row:l0.js:266";
const l0_267 = "toolbar-slot:l0.js:267";
const l0_268 = "page-label:l0.js:268";
const l0_269 = "form-field:l0.js:269";
const l0_270 = "history-entry:l0.js:270";
const l0_271 = "thumbnail-item:l0.js:271";
const l0_272 = "viewer-pane:l0.js:272";
const l0_273 = "text-layer:l0.js:273";
const l0_274 = "outline-row:l0.js:274";
const l0_275 = "toolbar-slot:l0.js:275";
const l0_276 = "page-label:l0.js:276";
const l0_277 = "form-field:l0.js:277";
const l0_278 = "history-entry:l0.js:278";
const l0_279 = "thumbnail-item:l0.js:279";
const l0_280 = "viewer-pane:l0.js:280";
const l0_281 = "text-layer:l0.js:281";
const l0_282 = "outline-row:l0.js:282";
const l0_283 = "toolbar-slot:l0.js:283";
const l0_284 = "page-label:l0.js:284";
const l0_285 = "form-field:l0.js:285";
const l0_286 = "history-entry:l0.js:286";
