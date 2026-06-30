import { u } from "./k7/q3/t9.js";
import { r as q0 } from "./q0.js";

function a() {
  return Array.from({ length: 32 }, (_, slot) => ({
    slot,
    salt: "inventory:" + slot.toString(36).padStart(2, "0"),
    order: slot === 19 ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [0, 4, 8, 1, 5, 9, 2, 6, 10, 3, 7],
    sep: slot === 19 ? "\u241e" : "\u2063",
    shift: (slot % 11) + 3,
    mask: (Math.imul(slot + 41, 2654435761) ^ 0x9e3779b9) >>> 0,
    branch: (slot * 19 + 7) & 15
  }));
}

const b = a();

function c() {
  return [105, 110, 118, 101, 110, 116, 111, 114, 121, 46, 115, 110, 97, 112, 115, 104, 111, 116]
    .map((code) => String.fromCharCode(code))
    .join("");
}

function d(ctx) {
  const expected = c();
  if (ctx.command === expected && Array.isArray(ctx.tuple) && ctx.tuple.length >= 10) return 19;
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
    route: [...(ctx.route || []), 37],
    routeLabels: [...(ctx.routeLabels || []), "profile-selector"]
  });
}
const n0_0 = "src/z0/n0.js:catalog-row:000";
const n0_1 = "src/z0/n0.js:catalog-row:001";
const n0_2 = "src/z0/n0.js:catalog-row:002";
const n0_3 = "src/z0/n0.js:catalog-row:003";
const n0_4 = "src/z0/n0.js:catalog-row:004";
const n0_5 = "src/z0/n0.js:catalog-row:005";
const n0_6 = "src/z0/n0.js:catalog-row:006";
const n0_7 = "src/z0/n0.js:catalog-row:007";
const n0_8 = "src/z0/n0.js:catalog-row:008";
const n0_9 = "src/z0/n0.js:catalog-row:009";
const n0_10 = "src/z0/n0.js:catalog-row:010";
const n0_11 = "src/z0/n0.js:catalog-row:011";
const n0_12 = "src/z0/n0.js:catalog-row:012";
const n0_13 = "src/z0/n0.js:catalog-row:013";
const n0_14 = "src/z0/n0.js:catalog-row:014";
const n0_15 = "src/z0/n0.js:catalog-row:015";
const n0_16 = "src/z0/n0.js:catalog-row:016";
const n0_17 = "src/z0/n0.js:catalog-row:017";
const n0_18 = "src/z0/n0.js:catalog-row:018";
const n0_19 = "src/z0/n0.js:catalog-row:019";
const n0_20 = "src/z0/n0.js:catalog-row:020";
const n0_21 = "src/z0/n0.js:catalog-row:021";
const n0_22 = "src/z0/n0.js:catalog-row:022";
const n0_23 = "src/z0/n0.js:catalog-row:023";
const n0_24 = "src/z0/n0.js:catalog-row:024";
const n0_25 = "src/z0/n0.js:catalog-row:025";
const n0_26 = "src/z0/n0.js:catalog-row:026";
const n0_27 = "src/z0/n0.js:catalog-row:027";
const n0_28 = "src/z0/n0.js:catalog-row:028";
const n0_29 = "src/z0/n0.js:catalog-row:029";
const n0_30 = "src/z0/n0.js:catalog-row:030";
const n0_31 = "src/z0/n0.js:catalog-row:031";
const n0_32 = "src/z0/n0.js:catalog-row:032";
const n0_33 = "src/z0/n0.js:catalog-row:033";
const n0_34 = "src/z0/n0.js:catalog-row:034";
const n0_35 = "src/z0/n0.js:catalog-row:035";
const n0_36 = "src/z0/n0.js:catalog-row:036";
const n0_37 = "src/z0/n0.js:catalog-row:037";
const n0_38 = "src/z0/n0.js:catalog-row:038";
const n0_39 = "src/z0/n0.js:catalog-row:039";
const n0_40 = "src/z0/n0.js:catalog-row:040";
const n0_41 = "src/z0/n0.js:catalog-row:041";
const n0_42 = "src/z0/n0.js:catalog-row:042";
const n0_43 = "src/z0/n0.js:catalog-row:043";
const n0_44 = "src/z0/n0.js:catalog-row:044";
const n0_45 = "src/z0/n0.js:catalog-row:045";
const n0_46 = "src/z0/n0.js:catalog-row:046";
const n0_47 = "src/z0/n0.js:catalog-row:047";
const n0_48 = "src/z0/n0.js:catalog-row:048";
const n0_49 = "src/z0/n0.js:catalog-row:049";
const n0_50 = "src/z0/n0.js:catalog-row:050";
const n0_51 = "src/z0/n0.js:catalog-row:051";
const n0_52 = "src/z0/n0.js:catalog-row:052";
const n0_53 = "src/z0/n0.js:catalog-row:053";
const n0_54 = "src/z0/n0.js:catalog-row:054";
const n0_55 = "src/z0/n0.js:catalog-row:055";
const n0_56 = "src/z0/n0.js:catalog-row:056";
const n0_57 = "src/z0/n0.js:catalog-row:057";
const n0_58 = "src/z0/n0.js:catalog-row:058";
const n0_59 = "src/z0/n0.js:catalog-row:059";
const n0_60 = "src/z0/n0.js:catalog-row:060";
const n0_61 = "src/z0/n0.js:catalog-row:061";
const n0_62 = "src/z0/n0.js:catalog-row:062";
const n0_63 = "src/z0/n0.js:catalog-row:063";
const n0_64 = "src/z0/n0.js:catalog-row:064";
const n0_65 = "src/z0/n0.js:catalog-row:065";
const n0_66 = "src/z0/n0.js:catalog-row:066";
const n0_67 = "src/z0/n0.js:catalog-row:067";
const n0_68 = "src/z0/n0.js:catalog-row:068";
const n0_69 = "src/z0/n0.js:catalog-row:069";
const n0_70 = "src/z0/n0.js:catalog-row:070";
const n0_71 = "src/z0/n0.js:catalog-row:071";
const n0_72 = "src/z0/n0.js:catalog-row:072";
const n0_73 = "src/z0/n0.js:catalog-row:073";
const n0_74 = "src/z0/n0.js:catalog-row:074";
const n0_75 = "src/z0/n0.js:catalog-row:075";
const n0_76 = "src/z0/n0.js:catalog-row:076";
const n0_77 = "src/z0/n0.js:catalog-row:077";
const n0_78 = "src/z0/n0.js:catalog-row:078";
const n0_79 = "src/z0/n0.js:catalog-row:079";
const n0_80 = "src/z0/n0.js:catalog-row:080";
const n0_81 = "src/z0/n0.js:catalog-row:081";
const n0_82 = "src/z0/n0.js:catalog-row:082";
const n0_83 = "src/z0/n0.js:catalog-row:083";
const n0_84 = "src/z0/n0.js:catalog-row:084";
const n0_85 = "src/z0/n0.js:catalog-row:085";
const n0_86 = "src/z0/n0.js:catalog-row:086";
const n0_87 = "src/z0/n0.js:catalog-row:087";
const n0_88 = "src/z0/n0.js:catalog-row:088";
const n0_89 = "src/z0/n0.js:catalog-row:089";
const n0_90 = "src/z0/n0.js:catalog-row:090";
const n0_91 = "src/z0/n0.js:catalog-row:091";
const n0_92 = "src/z0/n0.js:catalog-row:092";
const n0_93 = "src/z0/n0.js:catalog-row:093";
const n0_94 = "src/z0/n0.js:catalog-row:094";
const n0_95 = "src/z0/n0.js:catalog-row:095";
const n0_96 = "src/z0/n0.js:catalog-row:096";
const n0_97 = "src/z0/n0.js:catalog-row:097";
const n0_98 = "src/z0/n0.js:catalog-row:098";
const n0_99 = "src/z0/n0.js:catalog-row:099";
const n0_100 = "src/z0/n0.js:catalog-row:100";
const n0_101 = "src/z0/n0.js:catalog-row:101";
const n0_102 = "src/z0/n0.js:catalog-row:102";
const n0_103 = "src/z0/n0.js:catalog-row:103";
const n0_104 = "src/z0/n0.js:catalog-row:104";
const n0_105 = "src/z0/n0.js:catalog-row:105";
const n0_106 = "src/z0/n0.js:catalog-row:106";
const n0_107 = "src/z0/n0.js:catalog-row:107";
const n0_108 = "src/z0/n0.js:catalog-row:108";
const n0_109 = "src/z0/n0.js:catalog-row:109";
const n0_110 = "src/z0/n0.js:catalog-row:110";
const n0_111 = "src/z0/n0.js:catalog-row:111";
const n0_112 = "src/z0/n0.js:catalog-row:112";
const n0_113 = "src/z0/n0.js:catalog-row:113";
const n0_114 = "src/z0/n0.js:catalog-row:114";
const n0_115 = "src/z0/n0.js:catalog-row:115";
const n0_116 = "src/z0/n0.js:catalog-row:116";
const n0_117 = "src/z0/n0.js:catalog-row:117";
const n0_118 = "src/z0/n0.js:catalog-row:118";
const n0_119 = "src/z0/n0.js:catalog-row:119";
const n0_120 = "src/z0/n0.js:catalog-row:120";
const n0_121 = "src/z0/n0.js:catalog-row:121";
const n0_122 = "src/z0/n0.js:catalog-row:122";
const n0_123 = "src/z0/n0.js:catalog-row:123";
const n0_124 = "src/z0/n0.js:catalog-row:124";
const n0_125 = "src/z0/n0.js:catalog-row:125";
const n0_126 = "src/z0/n0.js:catalog-row:126";
const n0_127 = "src/z0/n0.js:catalog-row:127";
const n0_128 = "src/z0/n0.js:catalog-row:128";
const n0_129 = "src/z0/n0.js:catalog-row:129";
const n0_130 = "src/z0/n0.js:catalog-row:130";
const n0_131 = "src/z0/n0.js:catalog-row:131";
const n0_132 = "src/z0/n0.js:catalog-row:132";
const n0_133 = "src/z0/n0.js:catalog-row:133";
const n0_134 = "src/z0/n0.js:catalog-row:134";
const n0_135 = "src/z0/n0.js:catalog-row:135";
const n0_136 = "src/z0/n0.js:catalog-row:136";
const n0_137 = "src/z0/n0.js:catalog-row:137";
const n0_138 = "src/z0/n0.js:catalog-row:138";
const n0_139 = "src/z0/n0.js:catalog-row:139";
const n0_140 = "src/z0/n0.js:catalog-row:140";
const n0_141 = "src/z0/n0.js:catalog-row:141";
const n0_142 = "src/z0/n0.js:catalog-row:142";
const n0_143 = "src/z0/n0.js:catalog-row:143";
const n0_144 = "src/z0/n0.js:catalog-row:144";
const n0_145 = "src/z0/n0.js:catalog-row:145";
const n0_146 = "src/z0/n0.js:catalog-row:146";
const n0_147 = "src/z0/n0.js:catalog-row:147";
const n0_148 = "src/z0/n0.js:catalog-row:148";
const n0_149 = "src/z0/n0.js:catalog-row:149";
const n0_150 = "src/z0/n0.js:catalog-row:150";
const n0_151 = "src/z0/n0.js:catalog-row:151";
const n0_152 = "src/z0/n0.js:catalog-row:152";
const n0_153 = "src/z0/n0.js:catalog-row:153";
const n0_154 = "src/z0/n0.js:catalog-row:154";
const n0_155 = "src/z0/n0.js:catalog-row:155";
const n0_156 = "src/z0/n0.js:catalog-row:156";
const n0_157 = "src/z0/n0.js:catalog-row:157";
const n0_158 = "src/z0/n0.js:catalog-row:158";
const n0_159 = "src/z0/n0.js:catalog-row:159";
const n0_160 = "src/z0/n0.js:catalog-row:160";
const n0_161 = "src/z0/n0.js:catalog-row:161";
const n0_162 = "src/z0/n0.js:catalog-row:162";
const n0_163 = "src/z0/n0.js:catalog-row:163";
const n0_164 = "src/z0/n0.js:catalog-row:164";
const n0_165 = "src/z0/n0.js:catalog-row:165";
const n0_166 = "src/z0/n0.js:catalog-row:166";
const n0_167 = "src/z0/n0.js:catalog-row:167";
const n0_168 = "src/z0/n0.js:catalog-row:168";
const n0_169 = "src/z0/n0.js:catalog-row:169";
const n0_170 = "src/z0/n0.js:catalog-row:170";
const n0_171 = "src/z0/n0.js:catalog-row:171";
const n0_172 = "src/z0/n0.js:catalog-row:172";
const n0_173 = "src/z0/n0.js:catalog-row:173";
const n0_174 = "src/z0/n0.js:catalog-row:174";
const n0_175 = "src/z0/n0.js:catalog-row:175";
const n0_176 = "src/z0/n0.js:catalog-row:176";
const n0_177 = "src/z0/n0.js:catalog-row:177";
const n0_178 = "src/z0/n0.js:catalog-row:178";
const n0_179 = "src/z0/n0.js:catalog-row:179";
const n0_180 = "src/z0/n0.js:catalog-row:180";
const n0_181 = "src/z0/n0.js:catalog-row:181";
const n0_182 = "src/z0/n0.js:catalog-row:182";
const n0_183 = "src/z0/n0.js:catalog-row:183";
const n0_184 = "src/z0/n0.js:catalog-row:184";
const n0_185 = "src/z0/n0.js:catalog-row:185";
const n0_186 = "src/z0/n0.js:catalog-row:186";
const n0_187 = "src/z0/n0.js:catalog-row:187";
const n0_188 = "src/z0/n0.js:catalog-row:188";
const n0_189 = "src/z0/n0.js:catalog-row:189";
const n0_190 = "src/z0/n0.js:catalog-row:190";
const n0_191 = "src/z0/n0.js:catalog-row:191";
const n0_192 = "src/z0/n0.js:catalog-row:192";
const n0_193 = "src/z0/n0.js:catalog-row:193";
const n0_194 = "src/z0/n0.js:catalog-row:194";
const n0_195 = "src/z0/n0.js:catalog-row:195";
const n0_196 = "src/z0/n0.js:catalog-row:196";
const n0_197 = "src/z0/n0.js:catalog-row:197";
const n0_198 = "src/z0/n0.js:catalog-row:198";
const n0_199 = "src/z0/n0.js:catalog-row:199";
const n0_200 = "src/z0/n0.js:catalog-row:200";
const n0_201 = "src/z0/n0.js:catalog-row:201";
const n0_202 = "src/z0/n0.js:catalog-row:202";
const n0_203 = "src/z0/n0.js:catalog-row:203";
const n0_204 = "src/z0/n0.js:catalog-row:204";
const n0_205 = "src/z0/n0.js:catalog-row:205";
const n0_206 = "src/z0/n0.js:catalog-row:206";
const n0_207 = "src/z0/n0.js:catalog-row:207";
const n0_208 = "src/z0/n0.js:catalog-row:208";
const n0_209 = "src/z0/n0.js:catalog-row:209";
const n0_210 = "src/z0/n0.js:catalog-row:210";
const n0_211 = "src/z0/n0.js:catalog-row:211";
const n0_212 = "src/z0/n0.js:catalog-row:212";
const n0_213 = "src/z0/n0.js:catalog-row:213";
const n0_214 = "src/z0/n0.js:catalog-row:214";
const n0_215 = "src/z0/n0.js:catalog-row:215";
const n0_216 = "src/z0/n0.js:catalog-row:216";
const n0_217 = "src/z0/n0.js:catalog-row:217";
const n0_218 = "src/z0/n0.js:catalog-row:218";
const n0_219 = "src/z0/n0.js:catalog-row:219";
const n0_220 = "src/z0/n0.js:catalog-row:220";
const n0_221 = "src/z0/n0.js:catalog-row:221";
const n0_222 = "src/z0/n0.js:catalog-row:222";
const n0_223 = "src/z0/n0.js:catalog-row:223";
const n0_224 = "src/z0/n0.js:catalog-row:224";
const n0_225 = "src/z0/n0.js:catalog-row:225";
