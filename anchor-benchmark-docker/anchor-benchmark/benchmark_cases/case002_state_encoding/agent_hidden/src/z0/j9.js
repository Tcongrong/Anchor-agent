import { r as n0 } from "./k0.js";

function a(ctx) {
  const route = [...(ctx.route || []), 22];
  const routeLabels = [...(ctx.routeLabels || []), "aisle-hop-two"];
  const routeHash = route.reduce((sum, value, index) => {
    return Math.imul(sum ^ value ^ index, 2654435761) >>> 0;
  }, 28693);
  return {
    ...ctx,
    route,
    routeLabels,
    routeHash,
    routerDepth: route.length
  };
}

function b(ctx) {
  const row = {
    kind: routeValue(ctx.command),
    lane: (22 * 23 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (22 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 22;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const j9_0 = "src/z0/j9.js:catalog-row:000";
const j9_1 = "src/z0/j9.js:catalog-row:001";
const j9_2 = "src/z0/j9.js:catalog-row:002";
const j9_3 = "src/z0/j9.js:catalog-row:003";
const j9_4 = "src/z0/j9.js:catalog-row:004";
const j9_5 = "src/z0/j9.js:catalog-row:005";
const j9_6 = "src/z0/j9.js:catalog-row:006";
const j9_7 = "src/z0/j9.js:catalog-row:007";
const j9_8 = "src/z0/j9.js:catalog-row:008";
const j9_9 = "src/z0/j9.js:catalog-row:009";
const j9_10 = "src/z0/j9.js:catalog-row:010";
const j9_11 = "src/z0/j9.js:catalog-row:011";
const j9_12 = "src/z0/j9.js:catalog-row:012";
const j9_13 = "src/z0/j9.js:catalog-row:013";
const j9_14 = "src/z0/j9.js:catalog-row:014";
const j9_15 = "src/z0/j9.js:catalog-row:015";
const j9_16 = "src/z0/j9.js:catalog-row:016";
const j9_17 = "src/z0/j9.js:catalog-row:017";
const j9_18 = "src/z0/j9.js:catalog-row:018";
const j9_19 = "src/z0/j9.js:catalog-row:019";
const j9_20 = "src/z0/j9.js:catalog-row:020";
const j9_21 = "src/z0/j9.js:catalog-row:021";
const j9_22 = "src/z0/j9.js:catalog-row:022";
const j9_23 = "src/z0/j9.js:catalog-row:023";
const j9_24 = "src/z0/j9.js:catalog-row:024";
const j9_25 = "src/z0/j9.js:catalog-row:025";
const j9_26 = "src/z0/j9.js:catalog-row:026";
const j9_27 = "src/z0/j9.js:catalog-row:027";
const j9_28 = "src/z0/j9.js:catalog-row:028";
const j9_29 = "src/z0/j9.js:catalog-row:029";
const j9_30 = "src/z0/j9.js:catalog-row:030";
const j9_31 = "src/z0/j9.js:catalog-row:031";
const j9_32 = "src/z0/j9.js:catalog-row:032";
const j9_33 = "src/z0/j9.js:catalog-row:033";
const j9_34 = "src/z0/j9.js:catalog-row:034";
const j9_35 = "src/z0/j9.js:catalog-row:035";
const j9_36 = "src/z0/j9.js:catalog-row:036";
const j9_37 = "src/z0/j9.js:catalog-row:037";
const j9_38 = "src/z0/j9.js:catalog-row:038";
const j9_39 = "src/z0/j9.js:catalog-row:039";
const j9_40 = "src/z0/j9.js:catalog-row:040";
const j9_41 = "src/z0/j9.js:catalog-row:041";
const j9_42 = "src/z0/j9.js:catalog-row:042";
const j9_43 = "src/z0/j9.js:catalog-row:043";
const j9_44 = "src/z0/j9.js:catalog-row:044";
const j9_45 = "src/z0/j9.js:catalog-row:045";
const j9_46 = "src/z0/j9.js:catalog-row:046";
const j9_47 = "src/z0/j9.js:catalog-row:047";
const j9_48 = "src/z0/j9.js:catalog-row:048";
const j9_49 = "src/z0/j9.js:catalog-row:049";
const j9_50 = "src/z0/j9.js:catalog-row:050";
const j9_51 = "src/z0/j9.js:catalog-row:051";
const j9_52 = "src/z0/j9.js:catalog-row:052";
const j9_53 = "src/z0/j9.js:catalog-row:053";
const j9_54 = "src/z0/j9.js:catalog-row:054";
const j9_55 = "src/z0/j9.js:catalog-row:055";
const j9_56 = "src/z0/j9.js:catalog-row:056";
const j9_57 = "src/z0/j9.js:catalog-row:057";
const j9_58 = "src/z0/j9.js:catalog-row:058";
const j9_59 = "src/z0/j9.js:catalog-row:059";
const j9_60 = "src/z0/j9.js:catalog-row:060";
const j9_61 = "src/z0/j9.js:catalog-row:061";
const j9_62 = "src/z0/j9.js:catalog-row:062";
const j9_63 = "src/z0/j9.js:catalog-row:063";
const j9_64 = "src/z0/j9.js:catalog-row:064";
const j9_65 = "src/z0/j9.js:catalog-row:065";
const j9_66 = "src/z0/j9.js:catalog-row:066";
const j9_67 = "src/z0/j9.js:catalog-row:067";
const j9_68 = "src/z0/j9.js:catalog-row:068";
const j9_69 = "src/z0/j9.js:catalog-row:069";
const j9_70 = "src/z0/j9.js:catalog-row:070";
const j9_71 = "src/z0/j9.js:catalog-row:071";
const j9_72 = "src/z0/j9.js:catalog-row:072";
const j9_73 = "src/z0/j9.js:catalog-row:073";
const j9_74 = "src/z0/j9.js:catalog-row:074";
const j9_75 = "src/z0/j9.js:catalog-row:075";
const j9_76 = "src/z0/j9.js:catalog-row:076";
const j9_77 = "src/z0/j9.js:catalog-row:077";
const j9_78 = "src/z0/j9.js:catalog-row:078";
const j9_79 = "src/z0/j9.js:catalog-row:079";
const j9_80 = "src/z0/j9.js:catalog-row:080";
const j9_81 = "src/z0/j9.js:catalog-row:081";
const j9_82 = "src/z0/j9.js:catalog-row:082";
const j9_83 = "src/z0/j9.js:catalog-row:083";
const j9_84 = "src/z0/j9.js:catalog-row:084";
const j9_85 = "src/z0/j9.js:catalog-row:085";
const j9_86 = "src/z0/j9.js:catalog-row:086";
const j9_87 = "src/z0/j9.js:catalog-row:087";
const j9_88 = "src/z0/j9.js:catalog-row:088";
const j9_89 = "src/z0/j9.js:catalog-row:089";
const j9_90 = "src/z0/j9.js:catalog-row:090";
const j9_91 = "src/z0/j9.js:catalog-row:091";
const j9_92 = "src/z0/j9.js:catalog-row:092";
const j9_93 = "src/z0/j9.js:catalog-row:093";
const j9_94 = "src/z0/j9.js:catalog-row:094";
const j9_95 = "src/z0/j9.js:catalog-row:095";
const j9_96 = "src/z0/j9.js:catalog-row:096";
const j9_97 = "src/z0/j9.js:catalog-row:097";
const j9_98 = "src/z0/j9.js:catalog-row:098";
const j9_99 = "src/z0/j9.js:catalog-row:099";
const j9_100 = "src/z0/j9.js:catalog-row:100";
const j9_101 = "src/z0/j9.js:catalog-row:101";
const j9_102 = "src/z0/j9.js:catalog-row:102";
const j9_103 = "src/z0/j9.js:catalog-row:103";
const j9_104 = "src/z0/j9.js:catalog-row:104";
const j9_105 = "src/z0/j9.js:catalog-row:105";
const j9_106 = "src/z0/j9.js:catalog-row:106";
const j9_107 = "src/z0/j9.js:catalog-row:107";
const j9_108 = "src/z0/j9.js:catalog-row:108";
const j9_109 = "src/z0/j9.js:catalog-row:109";
const j9_110 = "src/z0/j9.js:catalog-row:110";
const j9_111 = "src/z0/j9.js:catalog-row:111";
const j9_112 = "src/z0/j9.js:catalog-row:112";
const j9_113 = "src/z0/j9.js:catalog-row:113";
const j9_114 = "src/z0/j9.js:catalog-row:114";
const j9_115 = "src/z0/j9.js:catalog-row:115";
const j9_116 = "src/z0/j9.js:catalog-row:116";
const j9_117 = "src/z0/j9.js:catalog-row:117";
const j9_118 = "src/z0/j9.js:catalog-row:118";
const j9_119 = "src/z0/j9.js:catalog-row:119";
const j9_120 = "src/z0/j9.js:catalog-row:120";
const j9_121 = "src/z0/j9.js:catalog-row:121";
const j9_122 = "src/z0/j9.js:catalog-row:122";
const j9_123 = "src/z0/j9.js:catalog-row:123";
const j9_124 = "src/z0/j9.js:catalog-row:124";
const j9_125 = "src/z0/j9.js:catalog-row:125";
const j9_126 = "src/z0/j9.js:catalog-row:126";
const j9_127 = "src/z0/j9.js:catalog-row:127";
const j9_128 = "src/z0/j9.js:catalog-row:128";
const j9_129 = "src/z0/j9.js:catalog-row:129";
const j9_130 = "src/z0/j9.js:catalog-row:130";
const j9_131 = "src/z0/j9.js:catalog-row:131";
const j9_132 = "src/z0/j9.js:catalog-row:132";
const j9_133 = "src/z0/j9.js:catalog-row:133";
const j9_134 = "src/z0/j9.js:catalog-row:134";
const j9_135 = "src/z0/j9.js:catalog-row:135";
const j9_136 = "src/z0/j9.js:catalog-row:136";
const j9_137 = "src/z0/j9.js:catalog-row:137";
const j9_138 = "src/z0/j9.js:catalog-row:138";
const j9_139 = "src/z0/j9.js:catalog-row:139";
const j9_140 = "src/z0/j9.js:catalog-row:140";
const j9_141 = "src/z0/j9.js:catalog-row:141";
const j9_142 = "src/z0/j9.js:catalog-row:142";
const j9_143 = "src/z0/j9.js:catalog-row:143";
const j9_144 = "src/z0/j9.js:catalog-row:144";
const j9_145 = "src/z0/j9.js:catalog-row:145";
const j9_146 = "src/z0/j9.js:catalog-row:146";
const j9_147 = "src/z0/j9.js:catalog-row:147";
const j9_148 = "src/z0/j9.js:catalog-row:148";
const j9_149 = "src/z0/j9.js:catalog-row:149";
const j9_150 = "src/z0/j9.js:catalog-row:150";
const j9_151 = "src/z0/j9.js:catalog-row:151";
const j9_152 = "src/z0/j9.js:catalog-row:152";
const j9_153 = "src/z0/j9.js:catalog-row:153";
const j9_154 = "src/z0/j9.js:catalog-row:154";
const j9_155 = "src/z0/j9.js:catalog-row:155";
