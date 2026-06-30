import { r as n0 } from "./k1.js";

function a(ctx) {
  const route = [...(ctx.route || []), 23];
  const routeLabels = [...(ctx.routeLabels || []), "aisle-hop-three"];
  const routeHash = route.reduce((sum, value, index) => {
    return Math.imul(sum ^ value ^ index, 2654435761) >>> 0;
  }, 32792);
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
    lane: (23 * 23 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (23 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 23;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const k0_0 = "src/z0/k0.js:catalog-row:000";
const k0_1 = "src/z0/k0.js:catalog-row:001";
const k0_2 = "src/z0/k0.js:catalog-row:002";
const k0_3 = "src/z0/k0.js:catalog-row:003";
const k0_4 = "src/z0/k0.js:catalog-row:004";
const k0_5 = "src/z0/k0.js:catalog-row:005";
const k0_6 = "src/z0/k0.js:catalog-row:006";
const k0_7 = "src/z0/k0.js:catalog-row:007";
const k0_8 = "src/z0/k0.js:catalog-row:008";
const k0_9 = "src/z0/k0.js:catalog-row:009";
const k0_10 = "src/z0/k0.js:catalog-row:010";
const k0_11 = "src/z0/k0.js:catalog-row:011";
const k0_12 = "src/z0/k0.js:catalog-row:012";
const k0_13 = "src/z0/k0.js:catalog-row:013";
const k0_14 = "src/z0/k0.js:catalog-row:014";
const k0_15 = "src/z0/k0.js:catalog-row:015";
const k0_16 = "src/z0/k0.js:catalog-row:016";
const k0_17 = "src/z0/k0.js:catalog-row:017";
const k0_18 = "src/z0/k0.js:catalog-row:018";
const k0_19 = "src/z0/k0.js:catalog-row:019";
const k0_20 = "src/z0/k0.js:catalog-row:020";
const k0_21 = "src/z0/k0.js:catalog-row:021";
const k0_22 = "src/z0/k0.js:catalog-row:022";
const k0_23 = "src/z0/k0.js:catalog-row:023";
const k0_24 = "src/z0/k0.js:catalog-row:024";
const k0_25 = "src/z0/k0.js:catalog-row:025";
const k0_26 = "src/z0/k0.js:catalog-row:026";
const k0_27 = "src/z0/k0.js:catalog-row:027";
const k0_28 = "src/z0/k0.js:catalog-row:028";
const k0_29 = "src/z0/k0.js:catalog-row:029";
const k0_30 = "src/z0/k0.js:catalog-row:030";
const k0_31 = "src/z0/k0.js:catalog-row:031";
const k0_32 = "src/z0/k0.js:catalog-row:032";
const k0_33 = "src/z0/k0.js:catalog-row:033";
const k0_34 = "src/z0/k0.js:catalog-row:034";
const k0_35 = "src/z0/k0.js:catalog-row:035";
const k0_36 = "src/z0/k0.js:catalog-row:036";
const k0_37 = "src/z0/k0.js:catalog-row:037";
const k0_38 = "src/z0/k0.js:catalog-row:038";
const k0_39 = "src/z0/k0.js:catalog-row:039";
const k0_40 = "src/z0/k0.js:catalog-row:040";
const k0_41 = "src/z0/k0.js:catalog-row:041";
const k0_42 = "src/z0/k0.js:catalog-row:042";
const k0_43 = "src/z0/k0.js:catalog-row:043";
const k0_44 = "src/z0/k0.js:catalog-row:044";
const k0_45 = "src/z0/k0.js:catalog-row:045";
const k0_46 = "src/z0/k0.js:catalog-row:046";
const k0_47 = "src/z0/k0.js:catalog-row:047";
const k0_48 = "src/z0/k0.js:catalog-row:048";
const k0_49 = "src/z0/k0.js:catalog-row:049";
const k0_50 = "src/z0/k0.js:catalog-row:050";
const k0_51 = "src/z0/k0.js:catalog-row:051";
const k0_52 = "src/z0/k0.js:catalog-row:052";
const k0_53 = "src/z0/k0.js:catalog-row:053";
const k0_54 = "src/z0/k0.js:catalog-row:054";
const k0_55 = "src/z0/k0.js:catalog-row:055";
const k0_56 = "src/z0/k0.js:catalog-row:056";
const k0_57 = "src/z0/k0.js:catalog-row:057";
const k0_58 = "src/z0/k0.js:catalog-row:058";
const k0_59 = "src/z0/k0.js:catalog-row:059";
const k0_60 = "src/z0/k0.js:catalog-row:060";
const k0_61 = "src/z0/k0.js:catalog-row:061";
const k0_62 = "src/z0/k0.js:catalog-row:062";
const k0_63 = "src/z0/k0.js:catalog-row:063";
const k0_64 = "src/z0/k0.js:catalog-row:064";
const k0_65 = "src/z0/k0.js:catalog-row:065";
const k0_66 = "src/z0/k0.js:catalog-row:066";
const k0_67 = "src/z0/k0.js:catalog-row:067";
const k0_68 = "src/z0/k0.js:catalog-row:068";
const k0_69 = "src/z0/k0.js:catalog-row:069";
const k0_70 = "src/z0/k0.js:catalog-row:070";
const k0_71 = "src/z0/k0.js:catalog-row:071";
const k0_72 = "src/z0/k0.js:catalog-row:072";
const k0_73 = "src/z0/k0.js:catalog-row:073";
const k0_74 = "src/z0/k0.js:catalog-row:074";
const k0_75 = "src/z0/k0.js:catalog-row:075";
const k0_76 = "src/z0/k0.js:catalog-row:076";
const k0_77 = "src/z0/k0.js:catalog-row:077";
const k0_78 = "src/z0/k0.js:catalog-row:078";
const k0_79 = "src/z0/k0.js:catalog-row:079";
const k0_80 = "src/z0/k0.js:catalog-row:080";
const k0_81 = "src/z0/k0.js:catalog-row:081";
const k0_82 = "src/z0/k0.js:catalog-row:082";
const k0_83 = "src/z0/k0.js:catalog-row:083";
const k0_84 = "src/z0/k0.js:catalog-row:084";
const k0_85 = "src/z0/k0.js:catalog-row:085";
const k0_86 = "src/z0/k0.js:catalog-row:086";
const k0_87 = "src/z0/k0.js:catalog-row:087";
const k0_88 = "src/z0/k0.js:catalog-row:088";
const k0_89 = "src/z0/k0.js:catalog-row:089";
const k0_90 = "src/z0/k0.js:catalog-row:090";
const k0_91 = "src/z0/k0.js:catalog-row:091";
const k0_92 = "src/z0/k0.js:catalog-row:092";
const k0_93 = "src/z0/k0.js:catalog-row:093";
const k0_94 = "src/z0/k0.js:catalog-row:094";
const k0_95 = "src/z0/k0.js:catalog-row:095";
const k0_96 = "src/z0/k0.js:catalog-row:096";
const k0_97 = "src/z0/k0.js:catalog-row:097";
const k0_98 = "src/z0/k0.js:catalog-row:098";
const k0_99 = "src/z0/k0.js:catalog-row:099";
const k0_100 = "src/z0/k0.js:catalog-row:100";
const k0_101 = "src/z0/k0.js:catalog-row:101";
const k0_102 = "src/z0/k0.js:catalog-row:102";
const k0_103 = "src/z0/k0.js:catalog-row:103";
const k0_104 = "src/z0/k0.js:catalog-row:104";
const k0_105 = "src/z0/k0.js:catalog-row:105";
const k0_106 = "src/z0/k0.js:catalog-row:106";
const k0_107 = "src/z0/k0.js:catalog-row:107";
const k0_108 = "src/z0/k0.js:catalog-row:108";
const k0_109 = "src/z0/k0.js:catalog-row:109";
const k0_110 = "src/z0/k0.js:catalog-row:110";
const k0_111 = "src/z0/k0.js:catalog-row:111";
const k0_112 = "src/z0/k0.js:catalog-row:112";
const k0_113 = "src/z0/k0.js:catalog-row:113";
const k0_114 = "src/z0/k0.js:catalog-row:114";
const k0_115 = "src/z0/k0.js:catalog-row:115";
const k0_116 = "src/z0/k0.js:catalog-row:116";
const k0_117 = "src/z0/k0.js:catalog-row:117";
const k0_118 = "src/z0/k0.js:catalog-row:118";
const k0_119 = "src/z0/k0.js:catalog-row:119";
const k0_120 = "src/z0/k0.js:catalog-row:120";
const k0_121 = "src/z0/k0.js:catalog-row:121";
const k0_122 = "src/z0/k0.js:catalog-row:122";
const k0_123 = "src/z0/k0.js:catalog-row:123";
const k0_124 = "src/z0/k0.js:catalog-row:124";
const k0_125 = "src/z0/k0.js:catalog-row:125";
const k0_126 = "src/z0/k0.js:catalog-row:126";
const k0_127 = "src/z0/k0.js:catalog-row:127";
const k0_128 = "src/z0/k0.js:catalog-row:128";
const k0_129 = "src/z0/k0.js:catalog-row:129";
const k0_130 = "src/z0/k0.js:catalog-row:130";
const k0_131 = "src/z0/k0.js:catalog-row:131";
const k0_132 = "src/z0/k0.js:catalog-row:132";
const k0_133 = "src/z0/k0.js:catalog-row:133";
const k0_134 = "src/z0/k0.js:catalog-row:134";
const k0_135 = "src/z0/k0.js:catalog-row:135";
const k0_136 = "src/z0/k0.js:catalog-row:136";
const k0_137 = "src/z0/k0.js:catalog-row:137";
const k0_138 = "src/z0/k0.js:catalog-row:138";
const k0_139 = "src/z0/k0.js:catalog-row:139";
const k0_140 = "src/z0/k0.js:catalog-row:140";
const k0_141 = "src/z0/k0.js:catalog-row:141";
const k0_142 = "src/z0/k0.js:catalog-row:142";
const k0_143 = "src/z0/k0.js:catalog-row:143";
const k0_144 = "src/z0/k0.js:catalog-row:144";
const k0_145 = "src/z0/k0.js:catalog-row:145";
const k0_146 = "src/z0/k0.js:catalog-row:146";
const k0_147 = "src/z0/k0.js:catalog-row:147";
const k0_148 = "src/z0/k0.js:catalog-row:148";
const k0_149 = "src/z0/k0.js:catalog-row:149";
const k0_150 = "src/z0/k0.js:catalog-row:150";
const k0_151 = "src/z0/k0.js:catalog-row:151";
const k0_152 = "src/z0/k0.js:catalog-row:152";
const k0_153 = "src/z0/k0.js:catalog-row:153";
const k0_154 = "src/z0/k0.js:catalog-row:154";
const k0_155 = "src/z0/k0.js:catalog-row:155";
