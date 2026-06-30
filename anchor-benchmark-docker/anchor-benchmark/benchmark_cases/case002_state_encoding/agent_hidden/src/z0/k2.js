import { r as n0 } from "./k3.js";

function a(ctx) {
  const route = [...(ctx.route || []), 25];
  const routeLabels = [...(ctx.routeLabels || []), "aisle-hop-five"];
  const routeHash = route.reduce((sum, value, index) => {
    return Math.imul(sum ^ value ^ index, 2654435761) >>> 0;
  }, 40990);
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
    lane: (25 * 23 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (25 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 25;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const k2_0 = "src/z0/k2.js:catalog-row:000";
const k2_1 = "src/z0/k2.js:catalog-row:001";
const k2_2 = "src/z0/k2.js:catalog-row:002";
const k2_3 = "src/z0/k2.js:catalog-row:003";
const k2_4 = "src/z0/k2.js:catalog-row:004";
const k2_5 = "src/z0/k2.js:catalog-row:005";
const k2_6 = "src/z0/k2.js:catalog-row:006";
const k2_7 = "src/z0/k2.js:catalog-row:007";
const k2_8 = "src/z0/k2.js:catalog-row:008";
const k2_9 = "src/z0/k2.js:catalog-row:009";
const k2_10 = "src/z0/k2.js:catalog-row:010";
const k2_11 = "src/z0/k2.js:catalog-row:011";
const k2_12 = "src/z0/k2.js:catalog-row:012";
const k2_13 = "src/z0/k2.js:catalog-row:013";
const k2_14 = "src/z0/k2.js:catalog-row:014";
const k2_15 = "src/z0/k2.js:catalog-row:015";
const k2_16 = "src/z0/k2.js:catalog-row:016";
const k2_17 = "src/z0/k2.js:catalog-row:017";
const k2_18 = "src/z0/k2.js:catalog-row:018";
const k2_19 = "src/z0/k2.js:catalog-row:019";
const k2_20 = "src/z0/k2.js:catalog-row:020";
const k2_21 = "src/z0/k2.js:catalog-row:021";
const k2_22 = "src/z0/k2.js:catalog-row:022";
const k2_23 = "src/z0/k2.js:catalog-row:023";
const k2_24 = "src/z0/k2.js:catalog-row:024";
const k2_25 = "src/z0/k2.js:catalog-row:025";
const k2_26 = "src/z0/k2.js:catalog-row:026";
const k2_27 = "src/z0/k2.js:catalog-row:027";
const k2_28 = "src/z0/k2.js:catalog-row:028";
const k2_29 = "src/z0/k2.js:catalog-row:029";
const k2_30 = "src/z0/k2.js:catalog-row:030";
const k2_31 = "src/z0/k2.js:catalog-row:031";
const k2_32 = "src/z0/k2.js:catalog-row:032";
const k2_33 = "src/z0/k2.js:catalog-row:033";
const k2_34 = "src/z0/k2.js:catalog-row:034";
const k2_35 = "src/z0/k2.js:catalog-row:035";
const k2_36 = "src/z0/k2.js:catalog-row:036";
const k2_37 = "src/z0/k2.js:catalog-row:037";
const k2_38 = "src/z0/k2.js:catalog-row:038";
const k2_39 = "src/z0/k2.js:catalog-row:039";
const k2_40 = "src/z0/k2.js:catalog-row:040";
const k2_41 = "src/z0/k2.js:catalog-row:041";
const k2_42 = "src/z0/k2.js:catalog-row:042";
const k2_43 = "src/z0/k2.js:catalog-row:043";
const k2_44 = "src/z0/k2.js:catalog-row:044";
const k2_45 = "src/z0/k2.js:catalog-row:045";
const k2_46 = "src/z0/k2.js:catalog-row:046";
const k2_47 = "src/z0/k2.js:catalog-row:047";
const k2_48 = "src/z0/k2.js:catalog-row:048";
const k2_49 = "src/z0/k2.js:catalog-row:049";
const k2_50 = "src/z0/k2.js:catalog-row:050";
const k2_51 = "src/z0/k2.js:catalog-row:051";
const k2_52 = "src/z0/k2.js:catalog-row:052";
const k2_53 = "src/z0/k2.js:catalog-row:053";
const k2_54 = "src/z0/k2.js:catalog-row:054";
const k2_55 = "src/z0/k2.js:catalog-row:055";
const k2_56 = "src/z0/k2.js:catalog-row:056";
const k2_57 = "src/z0/k2.js:catalog-row:057";
const k2_58 = "src/z0/k2.js:catalog-row:058";
const k2_59 = "src/z0/k2.js:catalog-row:059";
const k2_60 = "src/z0/k2.js:catalog-row:060";
const k2_61 = "src/z0/k2.js:catalog-row:061";
const k2_62 = "src/z0/k2.js:catalog-row:062";
const k2_63 = "src/z0/k2.js:catalog-row:063";
const k2_64 = "src/z0/k2.js:catalog-row:064";
const k2_65 = "src/z0/k2.js:catalog-row:065";
const k2_66 = "src/z0/k2.js:catalog-row:066";
const k2_67 = "src/z0/k2.js:catalog-row:067";
const k2_68 = "src/z0/k2.js:catalog-row:068";
const k2_69 = "src/z0/k2.js:catalog-row:069";
const k2_70 = "src/z0/k2.js:catalog-row:070";
const k2_71 = "src/z0/k2.js:catalog-row:071";
const k2_72 = "src/z0/k2.js:catalog-row:072";
const k2_73 = "src/z0/k2.js:catalog-row:073";
const k2_74 = "src/z0/k2.js:catalog-row:074";
const k2_75 = "src/z0/k2.js:catalog-row:075";
const k2_76 = "src/z0/k2.js:catalog-row:076";
const k2_77 = "src/z0/k2.js:catalog-row:077";
const k2_78 = "src/z0/k2.js:catalog-row:078";
const k2_79 = "src/z0/k2.js:catalog-row:079";
const k2_80 = "src/z0/k2.js:catalog-row:080";
const k2_81 = "src/z0/k2.js:catalog-row:081";
const k2_82 = "src/z0/k2.js:catalog-row:082";
const k2_83 = "src/z0/k2.js:catalog-row:083";
const k2_84 = "src/z0/k2.js:catalog-row:084";
const k2_85 = "src/z0/k2.js:catalog-row:085";
const k2_86 = "src/z0/k2.js:catalog-row:086";
const k2_87 = "src/z0/k2.js:catalog-row:087";
const k2_88 = "src/z0/k2.js:catalog-row:088";
const k2_89 = "src/z0/k2.js:catalog-row:089";
const k2_90 = "src/z0/k2.js:catalog-row:090";
const k2_91 = "src/z0/k2.js:catalog-row:091";
const k2_92 = "src/z0/k2.js:catalog-row:092";
const k2_93 = "src/z0/k2.js:catalog-row:093";
const k2_94 = "src/z0/k2.js:catalog-row:094";
const k2_95 = "src/z0/k2.js:catalog-row:095";
const k2_96 = "src/z0/k2.js:catalog-row:096";
const k2_97 = "src/z0/k2.js:catalog-row:097";
const k2_98 = "src/z0/k2.js:catalog-row:098";
const k2_99 = "src/z0/k2.js:catalog-row:099";
const k2_100 = "src/z0/k2.js:catalog-row:100";
const k2_101 = "src/z0/k2.js:catalog-row:101";
const k2_102 = "src/z0/k2.js:catalog-row:102";
const k2_103 = "src/z0/k2.js:catalog-row:103";
const k2_104 = "src/z0/k2.js:catalog-row:104";
const k2_105 = "src/z0/k2.js:catalog-row:105";
const k2_106 = "src/z0/k2.js:catalog-row:106";
const k2_107 = "src/z0/k2.js:catalog-row:107";
const k2_108 = "src/z0/k2.js:catalog-row:108";
const k2_109 = "src/z0/k2.js:catalog-row:109";
const k2_110 = "src/z0/k2.js:catalog-row:110";
const k2_111 = "src/z0/k2.js:catalog-row:111";
const k2_112 = "src/z0/k2.js:catalog-row:112";
const k2_113 = "src/z0/k2.js:catalog-row:113";
const k2_114 = "src/z0/k2.js:catalog-row:114";
const k2_115 = "src/z0/k2.js:catalog-row:115";
const k2_116 = "src/z0/k2.js:catalog-row:116";
const k2_117 = "src/z0/k2.js:catalog-row:117";
const k2_118 = "src/z0/k2.js:catalog-row:118";
const k2_119 = "src/z0/k2.js:catalog-row:119";
const k2_120 = "src/z0/k2.js:catalog-row:120";
const k2_121 = "src/z0/k2.js:catalog-row:121";
const k2_122 = "src/z0/k2.js:catalog-row:122";
const k2_123 = "src/z0/k2.js:catalog-row:123";
const k2_124 = "src/z0/k2.js:catalog-row:124";
const k2_125 = "src/z0/k2.js:catalog-row:125";
const k2_126 = "src/z0/k2.js:catalog-row:126";
const k2_127 = "src/z0/k2.js:catalog-row:127";
const k2_128 = "src/z0/k2.js:catalog-row:128";
const k2_129 = "src/z0/k2.js:catalog-row:129";
const k2_130 = "src/z0/k2.js:catalog-row:130";
const k2_131 = "src/z0/k2.js:catalog-row:131";
const k2_132 = "src/z0/k2.js:catalog-row:132";
const k2_133 = "src/z0/k2.js:catalog-row:133";
const k2_134 = "src/z0/k2.js:catalog-row:134";
const k2_135 = "src/z0/k2.js:catalog-row:135";
const k2_136 = "src/z0/k2.js:catalog-row:136";
const k2_137 = "src/z0/k2.js:catalog-row:137";
const k2_138 = "src/z0/k2.js:catalog-row:138";
const k2_139 = "src/z0/k2.js:catalog-row:139";
const k2_140 = "src/z0/k2.js:catalog-row:140";
const k2_141 = "src/z0/k2.js:catalog-row:141";
const k2_142 = "src/z0/k2.js:catalog-row:142";
const k2_143 = "src/z0/k2.js:catalog-row:143";
const k2_144 = "src/z0/k2.js:catalog-row:144";
const k2_145 = "src/z0/k2.js:catalog-row:145";
const k2_146 = "src/z0/k2.js:catalog-row:146";
const k2_147 = "src/z0/k2.js:catalog-row:147";
const k2_148 = "src/z0/k2.js:catalog-row:148";
const k2_149 = "src/z0/k2.js:catalog-row:149";
const k2_150 = "src/z0/k2.js:catalog-row:150";
const k2_151 = "src/z0/k2.js:catalog-row:151";
const k2_152 = "src/z0/k2.js:catalog-row:152";
const k2_153 = "src/z0/k2.js:catalog-row:153";
const k2_154 = "src/z0/k2.js:catalog-row:154";
const k2_155 = "src/z0/k2.js:catalog-row:155";
