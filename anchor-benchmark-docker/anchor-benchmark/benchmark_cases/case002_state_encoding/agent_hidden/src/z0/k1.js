import { r as n0 } from "./k2.js";

function a(ctx) {
  const route = [...(ctx.route || []), 24];
  const routeLabels = [...(ctx.routeLabels || []), "aisle-hop-four"];
  const routeHash = route.reduce((sum, value, index) => {
    return Math.imul(sum ^ value ^ index, 2654435761) >>> 0;
  }, 36891);
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
    lane: (24 * 23 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (24 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 24;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const k1_0 = "src/z0/k1.js:catalog-row:000";
const k1_1 = "src/z0/k1.js:catalog-row:001";
const k1_2 = "src/z0/k1.js:catalog-row:002";
const k1_3 = "src/z0/k1.js:catalog-row:003";
const k1_4 = "src/z0/k1.js:catalog-row:004";
const k1_5 = "src/z0/k1.js:catalog-row:005";
const k1_6 = "src/z0/k1.js:catalog-row:006";
const k1_7 = "src/z0/k1.js:catalog-row:007";
const k1_8 = "src/z0/k1.js:catalog-row:008";
const k1_9 = "src/z0/k1.js:catalog-row:009";
const k1_10 = "src/z0/k1.js:catalog-row:010";
const k1_11 = "src/z0/k1.js:catalog-row:011";
const k1_12 = "src/z0/k1.js:catalog-row:012";
const k1_13 = "src/z0/k1.js:catalog-row:013";
const k1_14 = "src/z0/k1.js:catalog-row:014";
const k1_15 = "src/z0/k1.js:catalog-row:015";
const k1_16 = "src/z0/k1.js:catalog-row:016";
const k1_17 = "src/z0/k1.js:catalog-row:017";
const k1_18 = "src/z0/k1.js:catalog-row:018";
const k1_19 = "src/z0/k1.js:catalog-row:019";
const k1_20 = "src/z0/k1.js:catalog-row:020";
const k1_21 = "src/z0/k1.js:catalog-row:021";
const k1_22 = "src/z0/k1.js:catalog-row:022";
const k1_23 = "src/z0/k1.js:catalog-row:023";
const k1_24 = "src/z0/k1.js:catalog-row:024";
const k1_25 = "src/z0/k1.js:catalog-row:025";
const k1_26 = "src/z0/k1.js:catalog-row:026";
const k1_27 = "src/z0/k1.js:catalog-row:027";
const k1_28 = "src/z0/k1.js:catalog-row:028";
const k1_29 = "src/z0/k1.js:catalog-row:029";
const k1_30 = "src/z0/k1.js:catalog-row:030";
const k1_31 = "src/z0/k1.js:catalog-row:031";
const k1_32 = "src/z0/k1.js:catalog-row:032";
const k1_33 = "src/z0/k1.js:catalog-row:033";
const k1_34 = "src/z0/k1.js:catalog-row:034";
const k1_35 = "src/z0/k1.js:catalog-row:035";
const k1_36 = "src/z0/k1.js:catalog-row:036";
const k1_37 = "src/z0/k1.js:catalog-row:037";
const k1_38 = "src/z0/k1.js:catalog-row:038";
const k1_39 = "src/z0/k1.js:catalog-row:039";
const k1_40 = "src/z0/k1.js:catalog-row:040";
const k1_41 = "src/z0/k1.js:catalog-row:041";
const k1_42 = "src/z0/k1.js:catalog-row:042";
const k1_43 = "src/z0/k1.js:catalog-row:043";
const k1_44 = "src/z0/k1.js:catalog-row:044";
const k1_45 = "src/z0/k1.js:catalog-row:045";
const k1_46 = "src/z0/k1.js:catalog-row:046";
const k1_47 = "src/z0/k1.js:catalog-row:047";
const k1_48 = "src/z0/k1.js:catalog-row:048";
const k1_49 = "src/z0/k1.js:catalog-row:049";
const k1_50 = "src/z0/k1.js:catalog-row:050";
const k1_51 = "src/z0/k1.js:catalog-row:051";
const k1_52 = "src/z0/k1.js:catalog-row:052";
const k1_53 = "src/z0/k1.js:catalog-row:053";
const k1_54 = "src/z0/k1.js:catalog-row:054";
const k1_55 = "src/z0/k1.js:catalog-row:055";
const k1_56 = "src/z0/k1.js:catalog-row:056";
const k1_57 = "src/z0/k1.js:catalog-row:057";
const k1_58 = "src/z0/k1.js:catalog-row:058";
const k1_59 = "src/z0/k1.js:catalog-row:059";
const k1_60 = "src/z0/k1.js:catalog-row:060";
const k1_61 = "src/z0/k1.js:catalog-row:061";
const k1_62 = "src/z0/k1.js:catalog-row:062";
const k1_63 = "src/z0/k1.js:catalog-row:063";
const k1_64 = "src/z0/k1.js:catalog-row:064";
const k1_65 = "src/z0/k1.js:catalog-row:065";
const k1_66 = "src/z0/k1.js:catalog-row:066";
const k1_67 = "src/z0/k1.js:catalog-row:067";
const k1_68 = "src/z0/k1.js:catalog-row:068";
const k1_69 = "src/z0/k1.js:catalog-row:069";
const k1_70 = "src/z0/k1.js:catalog-row:070";
const k1_71 = "src/z0/k1.js:catalog-row:071";
const k1_72 = "src/z0/k1.js:catalog-row:072";
const k1_73 = "src/z0/k1.js:catalog-row:073";
const k1_74 = "src/z0/k1.js:catalog-row:074";
const k1_75 = "src/z0/k1.js:catalog-row:075";
const k1_76 = "src/z0/k1.js:catalog-row:076";
const k1_77 = "src/z0/k1.js:catalog-row:077";
const k1_78 = "src/z0/k1.js:catalog-row:078";
const k1_79 = "src/z0/k1.js:catalog-row:079";
const k1_80 = "src/z0/k1.js:catalog-row:080";
const k1_81 = "src/z0/k1.js:catalog-row:081";
const k1_82 = "src/z0/k1.js:catalog-row:082";
const k1_83 = "src/z0/k1.js:catalog-row:083";
const k1_84 = "src/z0/k1.js:catalog-row:084";
const k1_85 = "src/z0/k1.js:catalog-row:085";
const k1_86 = "src/z0/k1.js:catalog-row:086";
const k1_87 = "src/z0/k1.js:catalog-row:087";
const k1_88 = "src/z0/k1.js:catalog-row:088";
const k1_89 = "src/z0/k1.js:catalog-row:089";
const k1_90 = "src/z0/k1.js:catalog-row:090";
const k1_91 = "src/z0/k1.js:catalog-row:091";
const k1_92 = "src/z0/k1.js:catalog-row:092";
const k1_93 = "src/z0/k1.js:catalog-row:093";
const k1_94 = "src/z0/k1.js:catalog-row:094";
const k1_95 = "src/z0/k1.js:catalog-row:095";
const k1_96 = "src/z0/k1.js:catalog-row:096";
const k1_97 = "src/z0/k1.js:catalog-row:097";
const k1_98 = "src/z0/k1.js:catalog-row:098";
const k1_99 = "src/z0/k1.js:catalog-row:099";
const k1_100 = "src/z0/k1.js:catalog-row:100";
const k1_101 = "src/z0/k1.js:catalog-row:101";
const k1_102 = "src/z0/k1.js:catalog-row:102";
const k1_103 = "src/z0/k1.js:catalog-row:103";
const k1_104 = "src/z0/k1.js:catalog-row:104";
const k1_105 = "src/z0/k1.js:catalog-row:105";
const k1_106 = "src/z0/k1.js:catalog-row:106";
const k1_107 = "src/z0/k1.js:catalog-row:107";
const k1_108 = "src/z0/k1.js:catalog-row:108";
const k1_109 = "src/z0/k1.js:catalog-row:109";
const k1_110 = "src/z0/k1.js:catalog-row:110";
const k1_111 = "src/z0/k1.js:catalog-row:111";
const k1_112 = "src/z0/k1.js:catalog-row:112";
const k1_113 = "src/z0/k1.js:catalog-row:113";
const k1_114 = "src/z0/k1.js:catalog-row:114";
const k1_115 = "src/z0/k1.js:catalog-row:115";
const k1_116 = "src/z0/k1.js:catalog-row:116";
const k1_117 = "src/z0/k1.js:catalog-row:117";
const k1_118 = "src/z0/k1.js:catalog-row:118";
const k1_119 = "src/z0/k1.js:catalog-row:119";
const k1_120 = "src/z0/k1.js:catalog-row:120";
const k1_121 = "src/z0/k1.js:catalog-row:121";
const k1_122 = "src/z0/k1.js:catalog-row:122";
const k1_123 = "src/z0/k1.js:catalog-row:123";
const k1_124 = "src/z0/k1.js:catalog-row:124";
const k1_125 = "src/z0/k1.js:catalog-row:125";
const k1_126 = "src/z0/k1.js:catalog-row:126";
const k1_127 = "src/z0/k1.js:catalog-row:127";
const k1_128 = "src/z0/k1.js:catalog-row:128";
const k1_129 = "src/z0/k1.js:catalog-row:129";
const k1_130 = "src/z0/k1.js:catalog-row:130";
const k1_131 = "src/z0/k1.js:catalog-row:131";
const k1_132 = "src/z0/k1.js:catalog-row:132";
const k1_133 = "src/z0/k1.js:catalog-row:133";
const k1_134 = "src/z0/k1.js:catalog-row:134";
const k1_135 = "src/z0/k1.js:catalog-row:135";
const k1_136 = "src/z0/k1.js:catalog-row:136";
const k1_137 = "src/z0/k1.js:catalog-row:137";
const k1_138 = "src/z0/k1.js:catalog-row:138";
const k1_139 = "src/z0/k1.js:catalog-row:139";
const k1_140 = "src/z0/k1.js:catalog-row:140";
const k1_141 = "src/z0/k1.js:catalog-row:141";
const k1_142 = "src/z0/k1.js:catalog-row:142";
const k1_143 = "src/z0/k1.js:catalog-row:143";
const k1_144 = "src/z0/k1.js:catalog-row:144";
const k1_145 = "src/z0/k1.js:catalog-row:145";
const k1_146 = "src/z0/k1.js:catalog-row:146";
const k1_147 = "src/z0/k1.js:catalog-row:147";
const k1_148 = "src/z0/k1.js:catalog-row:148";
const k1_149 = "src/z0/k1.js:catalog-row:149";
const k1_150 = "src/z0/k1.js:catalog-row:150";
const k1_151 = "src/z0/k1.js:catalog-row:151";
const k1_152 = "src/z0/k1.js:catalog-row:152";
const k1_153 = "src/z0/k1.js:catalog-row:153";
const k1_154 = "src/z0/k1.js:catalog-row:154";
const k1_155 = "src/z0/k1.js:catalog-row:155";
