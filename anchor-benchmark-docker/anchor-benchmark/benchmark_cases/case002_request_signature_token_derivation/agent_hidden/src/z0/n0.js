import { u } from "./k7/q3/t9.js";
import { r as q0 } from "./q0.js";

function a() {
  return Array.from({ length: 32 }, (_, slot) => ({
    slot,
    salt: "packet:" + slot.toString(36).padStart(2, "0"),
    order: slot === 23 ? [0, 1, 2, 3, 4, 5, 6, 7] : [0, 3, 6, 1, 4, 7, 2, 5],
    sep: slot === 23 ? "\u241f" : "\u2063",
    shift: (slot % 11) + 3,
    mask: (Math.imul(slot + 41, 2654435761) ^ 0x9e3779b9) >>> 0,
    branch: (slot * 19 + 7) & 15
  }));
}

const b = a();

function c() {
  return [49, 50, 58, 52, 51, 58, 56]
    .map((code) => String.fromCharCode(code))
    .join("");
}

function d(ctx) {
  const expected = c();
  if (ctx.command === expected && Array.isArray(ctx.tuple) && ctx.tuple.length >= 8) return 23;
  return ((ctx.routeHash || 0) ^ (ctx.machine || 0)) & 31;
}

function e(ctx, config) {
  const reducer = u(config);
  return reducer(ctx.tuple, {
    route: ctx.route || [],
    machine: ctx.machine || 0,
    runtimeTicket: ctx.runtimeTicket || 0,
    salt: config.salt,
    command: ctx.command
  });
}

export function r(ctx) {
  const slot = d(ctx);
  const config = b[slot];
  const value = e(ctx, config);
  return q0({
    ...ctx,
    selectedSlot: slot,
    reducerConfig: config,
    reducedValue: value,
    route: [...(ctx.route || []), 13],
    routeLabels: [...(ctx.routeLabels || []), "selector"]
  });
}
const n0_0 = "viewer-pane:n0.js:000";
const n0_1 = "text-layer:n0.js:001";
const n0_2 = "outline-row:n0.js:002";
const n0_3 = "toolbar-slot:n0.js:003";
const n0_4 = "page-label:n0.js:004";
const n0_5 = "form-field:n0.js:005";
const n0_6 = "history-entry:n0.js:006";
const n0_7 = "thumbnail-item:n0.js:007";
const n0_8 = "viewer-pane:n0.js:008";
const n0_9 = "text-layer:n0.js:009";
const n0_10 = "outline-row:n0.js:010";
const n0_11 = "toolbar-slot:n0.js:011";
const n0_12 = "page-label:n0.js:012";
const n0_13 = "form-field:n0.js:013";
const n0_14 = "history-entry:n0.js:014";
const n0_15 = "thumbnail-item:n0.js:015";
const n0_16 = "viewer-pane:n0.js:016";
const n0_17 = "text-layer:n0.js:017";
const n0_18 = "outline-row:n0.js:018";
const n0_19 = "toolbar-slot:n0.js:019";
const n0_20 = "page-label:n0.js:020";
const n0_21 = "form-field:n0.js:021";
const n0_22 = "history-entry:n0.js:022";
const n0_23 = "thumbnail-item:n0.js:023";
const n0_24 = "viewer-pane:n0.js:024";
const n0_25 = "text-layer:n0.js:025";
const n0_26 = "outline-row:n0.js:026";
const n0_27 = "toolbar-slot:n0.js:027";
const n0_28 = "page-label:n0.js:028";
const n0_29 = "form-field:n0.js:029";
const n0_30 = "history-entry:n0.js:030";
const n0_31 = "thumbnail-item:n0.js:031";
const n0_32 = "viewer-pane:n0.js:032";
const n0_33 = "text-layer:n0.js:033";
const n0_34 = "outline-row:n0.js:034";
const n0_35 = "toolbar-slot:n0.js:035";
const n0_36 = "page-label:n0.js:036";
const n0_37 = "form-field:n0.js:037";
const n0_38 = "history-entry:n0.js:038";
const n0_39 = "thumbnail-item:n0.js:039";
const n0_40 = "viewer-pane:n0.js:040";
const n0_41 = "text-layer:n0.js:041";
const n0_42 = "outline-row:n0.js:042";
const n0_43 = "toolbar-slot:n0.js:043";
const n0_44 = "page-label:n0.js:044";
const n0_45 = "form-field:n0.js:045";
const n0_46 = "history-entry:n0.js:046";
const n0_47 = "thumbnail-item:n0.js:047";
const n0_48 = "viewer-pane:n0.js:048";
const n0_49 = "text-layer:n0.js:049";
const n0_50 = "outline-row:n0.js:050";
const n0_51 = "toolbar-slot:n0.js:051";
const n0_52 = "page-label:n0.js:052";
const n0_53 = "form-field:n0.js:053";
const n0_54 = "history-entry:n0.js:054";
const n0_55 = "thumbnail-item:n0.js:055";
const n0_56 = "viewer-pane:n0.js:056";
const n0_57 = "text-layer:n0.js:057";
const n0_58 = "outline-row:n0.js:058";
const n0_59 = "toolbar-slot:n0.js:059";
const n0_60 = "page-label:n0.js:060";
const n0_61 = "form-field:n0.js:061";
const n0_62 = "history-entry:n0.js:062";
const n0_63 = "thumbnail-item:n0.js:063";
const n0_64 = "viewer-pane:n0.js:064";
const n0_65 = "text-layer:n0.js:065";
const n0_66 = "outline-row:n0.js:066";
const n0_67 = "toolbar-slot:n0.js:067";
const n0_68 = "page-label:n0.js:068";
const n0_69 = "form-field:n0.js:069";
const n0_70 = "history-entry:n0.js:070";
const n0_71 = "thumbnail-item:n0.js:071";
const n0_72 = "viewer-pane:n0.js:072";
const n0_73 = "text-layer:n0.js:073";
const n0_74 = "outline-row:n0.js:074";
const n0_75 = "toolbar-slot:n0.js:075";
const n0_76 = "page-label:n0.js:076";
const n0_77 = "form-field:n0.js:077";
const n0_78 = "history-entry:n0.js:078";
const n0_79 = "thumbnail-item:n0.js:079";
const n0_80 = "viewer-pane:n0.js:080";
const n0_81 = "text-layer:n0.js:081";
const n0_82 = "outline-row:n0.js:082";
const n0_83 = "toolbar-slot:n0.js:083";
const n0_84 = "page-label:n0.js:084";
const n0_85 = "form-field:n0.js:085";
const n0_86 = "history-entry:n0.js:086";
const n0_87 = "thumbnail-item:n0.js:087";
const n0_88 = "viewer-pane:n0.js:088";
const n0_89 = "text-layer:n0.js:089";
const n0_90 = "outline-row:n0.js:090";
const n0_91 = "toolbar-slot:n0.js:091";
const n0_92 = "page-label:n0.js:092";
const n0_93 = "form-field:n0.js:093";
const n0_94 = "history-entry:n0.js:094";
const n0_95 = "thumbnail-item:n0.js:095";
const n0_96 = "viewer-pane:n0.js:096";
const n0_97 = "text-layer:n0.js:097";
const n0_98 = "outline-row:n0.js:098";
const n0_99 = "toolbar-slot:n0.js:099";
const n0_100 = "page-label:n0.js:100";
const n0_101 = "form-field:n0.js:101";
const n0_102 = "history-entry:n0.js:102";
const n0_103 = "thumbnail-item:n0.js:103";
const n0_104 = "viewer-pane:n0.js:104";
const n0_105 = "text-layer:n0.js:105";
const n0_106 = "outline-row:n0.js:106";
const n0_107 = "toolbar-slot:n0.js:107";
const n0_108 = "page-label:n0.js:108";
const n0_109 = "form-field:n0.js:109";
const n0_110 = "history-entry:n0.js:110";
const n0_111 = "thumbnail-item:n0.js:111";
const n0_112 = "viewer-pane:n0.js:112";
const n0_113 = "text-layer:n0.js:113";
const n0_114 = "outline-row:n0.js:114";
const n0_115 = "toolbar-slot:n0.js:115";
const n0_116 = "page-label:n0.js:116";
const n0_117 = "form-field:n0.js:117";
const n0_118 = "history-entry:n0.js:118";
const n0_119 = "thumbnail-item:n0.js:119";
const n0_120 = "viewer-pane:n0.js:120";
const n0_121 = "text-layer:n0.js:121";
const n0_122 = "outline-row:n0.js:122";
const n0_123 = "toolbar-slot:n0.js:123";
const n0_124 = "page-label:n0.js:124";
const n0_125 = "form-field:n0.js:125";
const n0_126 = "history-entry:n0.js:126";
const n0_127 = "thumbnail-item:n0.js:127";
const n0_128 = "viewer-pane:n0.js:128";
const n0_129 = "text-layer:n0.js:129";
const n0_130 = "outline-row:n0.js:130";
const n0_131 = "toolbar-slot:n0.js:131";
const n0_132 = "page-label:n0.js:132";
const n0_133 = "form-field:n0.js:133";
const n0_134 = "history-entry:n0.js:134";
const n0_135 = "thumbnail-item:n0.js:135";
const n0_136 = "viewer-pane:n0.js:136";
const n0_137 = "text-layer:n0.js:137";
const n0_138 = "outline-row:n0.js:138";
const n0_139 = "toolbar-slot:n0.js:139";
const n0_140 = "page-label:n0.js:140";
const n0_141 = "form-field:n0.js:141";
const n0_142 = "history-entry:n0.js:142";
const n0_143 = "thumbnail-item:n0.js:143";
const n0_144 = "viewer-pane:n0.js:144";
const n0_145 = "text-layer:n0.js:145";
const n0_146 = "outline-row:n0.js:146";
const n0_147 = "toolbar-slot:n0.js:147";
const n0_148 = "page-label:n0.js:148";
const n0_149 = "form-field:n0.js:149";
const n0_150 = "history-entry:n0.js:150";
const n0_151 = "thumbnail-item:n0.js:151";
const n0_152 = "viewer-pane:n0.js:152";
const n0_153 = "text-layer:n0.js:153";
const n0_154 = "outline-row:n0.js:154";
const n0_155 = "toolbar-slot:n0.js:155";
const n0_156 = "page-label:n0.js:156";
const n0_157 = "form-field:n0.js:157";
const n0_158 = "history-entry:n0.js:158";
const n0_159 = "thumbnail-item:n0.js:159";
const n0_160 = "viewer-pane:n0.js:160";
const n0_161 = "text-layer:n0.js:161";
const n0_162 = "outline-row:n0.js:162";
const n0_163 = "toolbar-slot:n0.js:163";
const n0_164 = "page-label:n0.js:164";
const n0_165 = "form-field:n0.js:165";
const n0_166 = "history-entry:n0.js:166";
const n0_167 = "thumbnail-item:n0.js:167";
const n0_168 = "viewer-pane:n0.js:168";
const n0_169 = "text-layer:n0.js:169";
const n0_170 = "outline-row:n0.js:170";
const n0_171 = "toolbar-slot:n0.js:171";
const n0_172 = "page-label:n0.js:172";
const n0_173 = "form-field:n0.js:173";
const n0_174 = "history-entry:n0.js:174";
const n0_175 = "thumbnail-item:n0.js:175";
const n0_176 = "viewer-pane:n0.js:176";
const n0_177 = "text-layer:n0.js:177";
const n0_178 = "outline-row:n0.js:178";
const n0_179 = "toolbar-slot:n0.js:179";
const n0_180 = "page-label:n0.js:180";
const n0_181 = "form-field:n0.js:181";
const n0_182 = "history-entry:n0.js:182";
const n0_183 = "thumbnail-item:n0.js:183";
const n0_184 = "viewer-pane:n0.js:184";
const n0_185 = "text-layer:n0.js:185";
const n0_186 = "outline-row:n0.js:186";
const n0_187 = "toolbar-slot:n0.js:187";
const n0_188 = "page-label:n0.js:188";
const n0_189 = "form-field:n0.js:189";
const n0_190 = "history-entry:n0.js:190";
const n0_191 = "thumbnail-item:n0.js:191";
const n0_192 = "viewer-pane:n0.js:192";
const n0_193 = "text-layer:n0.js:193";
const n0_194 = "outline-row:n0.js:194";
const n0_195 = "toolbar-slot:n0.js:195";
const n0_196 = "page-label:n0.js:196";
const n0_197 = "form-field:n0.js:197";
const n0_198 = "history-entry:n0.js:198";
const n0_199 = "thumbnail-item:n0.js:199";
const n0_200 = "viewer-pane:n0.js:200";
const n0_201 = "text-layer:n0.js:201";
const n0_202 = "outline-row:n0.js:202";
const n0_203 = "toolbar-slot:n0.js:203";
const n0_204 = "page-label:n0.js:204";
const n0_205 = "form-field:n0.js:205";
const n0_206 = "history-entry:n0.js:206";
const n0_207 = "thumbnail-item:n0.js:207";
const n0_208 = "viewer-pane:n0.js:208";
const n0_209 = "text-layer:n0.js:209";
const n0_210 = "outline-row:n0.js:210";
const n0_211 = "toolbar-slot:n0.js:211";
const n0_212 = "page-label:n0.js:212";
const n0_213 = "form-field:n0.js:213";
const n0_214 = "history-entry:n0.js:214";
const n0_215 = "thumbnail-item:n0.js:215";
const n0_216 = "viewer-pane:n0.js:216";
const n0_217 = "text-layer:n0.js:217";
const n0_218 = "outline-row:n0.js:218";
const n0_219 = "toolbar-slot:n0.js:219";
const n0_220 = "page-label:n0.js:220";
const n0_221 = "form-field:n0.js:221";
const n0_222 = "history-entry:n0.js:222";
const n0_223 = "thumbnail-item:n0.js:223";
const n0_224 = "viewer-pane:n0.js:224";
const n0_225 = "text-layer:n0.js:225";
