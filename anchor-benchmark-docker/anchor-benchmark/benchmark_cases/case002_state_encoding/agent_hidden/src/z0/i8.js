import { r as n0 } from "./j9.js";

function a(ctx) {
  const route = [...(ctx.route || []), 21];
  const routeLabels = [...(ctx.routeLabels || []), "aisle-hop-one"];
  const routeHash = route.reduce((sum, value, index) => {
    return Math.imul(sum ^ value ^ index, 2654435761) >>> 0;
  }, 24594);
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
    lane: (21 * 23 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (21 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 21;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const i8_0 = "src/z0/i8.js:catalog-row:000";
const i8_1 = "src/z0/i8.js:catalog-row:001";
const i8_2 = "src/z0/i8.js:catalog-row:002";
const i8_3 = "src/z0/i8.js:catalog-row:003";
const i8_4 = "src/z0/i8.js:catalog-row:004";
const i8_5 = "src/z0/i8.js:catalog-row:005";
const i8_6 = "src/z0/i8.js:catalog-row:006";
const i8_7 = "src/z0/i8.js:catalog-row:007";
const i8_8 = "src/z0/i8.js:catalog-row:008";
const i8_9 = "src/z0/i8.js:catalog-row:009";
const i8_10 = "src/z0/i8.js:catalog-row:010";
const i8_11 = "src/z0/i8.js:catalog-row:011";
const i8_12 = "src/z0/i8.js:catalog-row:012";
const i8_13 = "src/z0/i8.js:catalog-row:013";
const i8_14 = "src/z0/i8.js:catalog-row:014";
const i8_15 = "src/z0/i8.js:catalog-row:015";
const i8_16 = "src/z0/i8.js:catalog-row:016";
const i8_17 = "src/z0/i8.js:catalog-row:017";
const i8_18 = "src/z0/i8.js:catalog-row:018";
const i8_19 = "src/z0/i8.js:catalog-row:019";
const i8_20 = "src/z0/i8.js:catalog-row:020";
const i8_21 = "src/z0/i8.js:catalog-row:021";
const i8_22 = "src/z0/i8.js:catalog-row:022";
const i8_23 = "src/z0/i8.js:catalog-row:023";
const i8_24 = "src/z0/i8.js:catalog-row:024";
const i8_25 = "src/z0/i8.js:catalog-row:025";
const i8_26 = "src/z0/i8.js:catalog-row:026";
const i8_27 = "src/z0/i8.js:catalog-row:027";
const i8_28 = "src/z0/i8.js:catalog-row:028";
const i8_29 = "src/z0/i8.js:catalog-row:029";
const i8_30 = "src/z0/i8.js:catalog-row:030";
const i8_31 = "src/z0/i8.js:catalog-row:031";
const i8_32 = "src/z0/i8.js:catalog-row:032";
const i8_33 = "src/z0/i8.js:catalog-row:033";
const i8_34 = "src/z0/i8.js:catalog-row:034";
const i8_35 = "src/z0/i8.js:catalog-row:035";
const i8_36 = "src/z0/i8.js:catalog-row:036";
const i8_37 = "src/z0/i8.js:catalog-row:037";
const i8_38 = "src/z0/i8.js:catalog-row:038";
const i8_39 = "src/z0/i8.js:catalog-row:039";
const i8_40 = "src/z0/i8.js:catalog-row:040";
const i8_41 = "src/z0/i8.js:catalog-row:041";
const i8_42 = "src/z0/i8.js:catalog-row:042";
const i8_43 = "src/z0/i8.js:catalog-row:043";
const i8_44 = "src/z0/i8.js:catalog-row:044";
const i8_45 = "src/z0/i8.js:catalog-row:045";
const i8_46 = "src/z0/i8.js:catalog-row:046";
const i8_47 = "src/z0/i8.js:catalog-row:047";
const i8_48 = "src/z0/i8.js:catalog-row:048";
const i8_49 = "src/z0/i8.js:catalog-row:049";
const i8_50 = "src/z0/i8.js:catalog-row:050";
const i8_51 = "src/z0/i8.js:catalog-row:051";
const i8_52 = "src/z0/i8.js:catalog-row:052";
const i8_53 = "src/z0/i8.js:catalog-row:053";
const i8_54 = "src/z0/i8.js:catalog-row:054";
const i8_55 = "src/z0/i8.js:catalog-row:055";
const i8_56 = "src/z0/i8.js:catalog-row:056";
const i8_57 = "src/z0/i8.js:catalog-row:057";
const i8_58 = "src/z0/i8.js:catalog-row:058";
const i8_59 = "src/z0/i8.js:catalog-row:059";
const i8_60 = "src/z0/i8.js:catalog-row:060";
const i8_61 = "src/z0/i8.js:catalog-row:061";
const i8_62 = "src/z0/i8.js:catalog-row:062";
const i8_63 = "src/z0/i8.js:catalog-row:063";
const i8_64 = "src/z0/i8.js:catalog-row:064";
const i8_65 = "src/z0/i8.js:catalog-row:065";
const i8_66 = "src/z0/i8.js:catalog-row:066";
const i8_67 = "src/z0/i8.js:catalog-row:067";
const i8_68 = "src/z0/i8.js:catalog-row:068";
const i8_69 = "src/z0/i8.js:catalog-row:069";
const i8_70 = "src/z0/i8.js:catalog-row:070";
const i8_71 = "src/z0/i8.js:catalog-row:071";
const i8_72 = "src/z0/i8.js:catalog-row:072";
const i8_73 = "src/z0/i8.js:catalog-row:073";
const i8_74 = "src/z0/i8.js:catalog-row:074";
const i8_75 = "src/z0/i8.js:catalog-row:075";
const i8_76 = "src/z0/i8.js:catalog-row:076";
const i8_77 = "src/z0/i8.js:catalog-row:077";
const i8_78 = "src/z0/i8.js:catalog-row:078";
const i8_79 = "src/z0/i8.js:catalog-row:079";
const i8_80 = "src/z0/i8.js:catalog-row:080";
const i8_81 = "src/z0/i8.js:catalog-row:081";
const i8_82 = "src/z0/i8.js:catalog-row:082";
const i8_83 = "src/z0/i8.js:catalog-row:083";
const i8_84 = "src/z0/i8.js:catalog-row:084";
const i8_85 = "src/z0/i8.js:catalog-row:085";
const i8_86 = "src/z0/i8.js:catalog-row:086";
const i8_87 = "src/z0/i8.js:catalog-row:087";
const i8_88 = "src/z0/i8.js:catalog-row:088";
const i8_89 = "src/z0/i8.js:catalog-row:089";
const i8_90 = "src/z0/i8.js:catalog-row:090";
const i8_91 = "src/z0/i8.js:catalog-row:091";
const i8_92 = "src/z0/i8.js:catalog-row:092";
const i8_93 = "src/z0/i8.js:catalog-row:093";
const i8_94 = "src/z0/i8.js:catalog-row:094";
const i8_95 = "src/z0/i8.js:catalog-row:095";
const i8_96 = "src/z0/i8.js:catalog-row:096";
const i8_97 = "src/z0/i8.js:catalog-row:097";
const i8_98 = "src/z0/i8.js:catalog-row:098";
const i8_99 = "src/z0/i8.js:catalog-row:099";
const i8_100 = "src/z0/i8.js:catalog-row:100";
const i8_101 = "src/z0/i8.js:catalog-row:101";
const i8_102 = "src/z0/i8.js:catalog-row:102";
const i8_103 = "src/z0/i8.js:catalog-row:103";
const i8_104 = "src/z0/i8.js:catalog-row:104";
const i8_105 = "src/z0/i8.js:catalog-row:105";
const i8_106 = "src/z0/i8.js:catalog-row:106";
const i8_107 = "src/z0/i8.js:catalog-row:107";
const i8_108 = "src/z0/i8.js:catalog-row:108";
const i8_109 = "src/z0/i8.js:catalog-row:109";
const i8_110 = "src/z0/i8.js:catalog-row:110";
const i8_111 = "src/z0/i8.js:catalog-row:111";
const i8_112 = "src/z0/i8.js:catalog-row:112";
const i8_113 = "src/z0/i8.js:catalog-row:113";
const i8_114 = "src/z0/i8.js:catalog-row:114";
const i8_115 = "src/z0/i8.js:catalog-row:115";
const i8_116 = "src/z0/i8.js:catalog-row:116";
const i8_117 = "src/z0/i8.js:catalog-row:117";
const i8_118 = "src/z0/i8.js:catalog-row:118";
const i8_119 = "src/z0/i8.js:catalog-row:119";
const i8_120 = "src/z0/i8.js:catalog-row:120";
const i8_121 = "src/z0/i8.js:catalog-row:121";
const i8_122 = "src/z0/i8.js:catalog-row:122";
const i8_123 = "src/z0/i8.js:catalog-row:123";
const i8_124 = "src/z0/i8.js:catalog-row:124";
const i8_125 = "src/z0/i8.js:catalog-row:125";
const i8_126 = "src/z0/i8.js:catalog-row:126";
const i8_127 = "src/z0/i8.js:catalog-row:127";
const i8_128 = "src/z0/i8.js:catalog-row:128";
const i8_129 = "src/z0/i8.js:catalog-row:129";
const i8_130 = "src/z0/i8.js:catalog-row:130";
const i8_131 = "src/z0/i8.js:catalog-row:131";
const i8_132 = "src/z0/i8.js:catalog-row:132";
const i8_133 = "src/z0/i8.js:catalog-row:133";
const i8_134 = "src/z0/i8.js:catalog-row:134";
const i8_135 = "src/z0/i8.js:catalog-row:135";
const i8_136 = "src/z0/i8.js:catalog-row:136";
const i8_137 = "src/z0/i8.js:catalog-row:137";
const i8_138 = "src/z0/i8.js:catalog-row:138";
const i8_139 = "src/z0/i8.js:catalog-row:139";
const i8_140 = "src/z0/i8.js:catalog-row:140";
const i8_141 = "src/z0/i8.js:catalog-row:141";
const i8_142 = "src/z0/i8.js:catalog-row:142";
const i8_143 = "src/z0/i8.js:catalog-row:143";
const i8_144 = "src/z0/i8.js:catalog-row:144";
const i8_145 = "src/z0/i8.js:catalog-row:145";
const i8_146 = "src/z0/i8.js:catalog-row:146";
const i8_147 = "src/z0/i8.js:catalog-row:147";
const i8_148 = "src/z0/i8.js:catalog-row:148";
const i8_149 = "src/z0/i8.js:catalog-row:149";
const i8_150 = "src/z0/i8.js:catalog-row:150";
const i8_151 = "src/z0/i8.js:catalog-row:151";
const i8_152 = "src/z0/i8.js:catalog-row:152";
const i8_153 = "src/z0/i8.js:catalog-row:153";
const i8_154 = "src/z0/i8.js:catalog-row:154";
const i8_155 = "src/z0/i8.js:catalog-row:155";
