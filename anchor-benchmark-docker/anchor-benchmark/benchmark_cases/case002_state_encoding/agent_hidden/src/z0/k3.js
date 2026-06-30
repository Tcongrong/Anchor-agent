import { r as n0 } from "./l0.js";

function a(ctx) {
  const route = [...(ctx.route || []), 26];
  const routeLabels = [...(ctx.routeLabels || []), "aisle-hop-six"];
  const routeHash = route.reduce((sum, value, index) => {
    return Math.imul(sum ^ value ^ index, 2654435761) >>> 0;
  }, 45089);
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
    lane: (26 * 23 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (26 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 26;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const k3_0 = "src/z0/k3.js:catalog-row:000";
const k3_1 = "src/z0/k3.js:catalog-row:001";
const k3_2 = "src/z0/k3.js:catalog-row:002";
const k3_3 = "src/z0/k3.js:catalog-row:003";
const k3_4 = "src/z0/k3.js:catalog-row:004";
const k3_5 = "src/z0/k3.js:catalog-row:005";
const k3_6 = "src/z0/k3.js:catalog-row:006";
const k3_7 = "src/z0/k3.js:catalog-row:007";
const k3_8 = "src/z0/k3.js:catalog-row:008";
const k3_9 = "src/z0/k3.js:catalog-row:009";
const k3_10 = "src/z0/k3.js:catalog-row:010";
const k3_11 = "src/z0/k3.js:catalog-row:011";
const k3_12 = "src/z0/k3.js:catalog-row:012";
const k3_13 = "src/z0/k3.js:catalog-row:013";
const k3_14 = "src/z0/k3.js:catalog-row:014";
const k3_15 = "src/z0/k3.js:catalog-row:015";
const k3_16 = "src/z0/k3.js:catalog-row:016";
const k3_17 = "src/z0/k3.js:catalog-row:017";
const k3_18 = "src/z0/k3.js:catalog-row:018";
const k3_19 = "src/z0/k3.js:catalog-row:019";
const k3_20 = "src/z0/k3.js:catalog-row:020";
const k3_21 = "src/z0/k3.js:catalog-row:021";
const k3_22 = "src/z0/k3.js:catalog-row:022";
const k3_23 = "src/z0/k3.js:catalog-row:023";
const k3_24 = "src/z0/k3.js:catalog-row:024";
const k3_25 = "src/z0/k3.js:catalog-row:025";
const k3_26 = "src/z0/k3.js:catalog-row:026";
const k3_27 = "src/z0/k3.js:catalog-row:027";
const k3_28 = "src/z0/k3.js:catalog-row:028";
const k3_29 = "src/z0/k3.js:catalog-row:029";
const k3_30 = "src/z0/k3.js:catalog-row:030";
const k3_31 = "src/z0/k3.js:catalog-row:031";
const k3_32 = "src/z0/k3.js:catalog-row:032";
const k3_33 = "src/z0/k3.js:catalog-row:033";
const k3_34 = "src/z0/k3.js:catalog-row:034";
const k3_35 = "src/z0/k3.js:catalog-row:035";
const k3_36 = "src/z0/k3.js:catalog-row:036";
const k3_37 = "src/z0/k3.js:catalog-row:037";
const k3_38 = "src/z0/k3.js:catalog-row:038";
const k3_39 = "src/z0/k3.js:catalog-row:039";
const k3_40 = "src/z0/k3.js:catalog-row:040";
const k3_41 = "src/z0/k3.js:catalog-row:041";
const k3_42 = "src/z0/k3.js:catalog-row:042";
const k3_43 = "src/z0/k3.js:catalog-row:043";
const k3_44 = "src/z0/k3.js:catalog-row:044";
const k3_45 = "src/z0/k3.js:catalog-row:045";
const k3_46 = "src/z0/k3.js:catalog-row:046";
const k3_47 = "src/z0/k3.js:catalog-row:047";
const k3_48 = "src/z0/k3.js:catalog-row:048";
const k3_49 = "src/z0/k3.js:catalog-row:049";
const k3_50 = "src/z0/k3.js:catalog-row:050";
const k3_51 = "src/z0/k3.js:catalog-row:051";
const k3_52 = "src/z0/k3.js:catalog-row:052";
const k3_53 = "src/z0/k3.js:catalog-row:053";
const k3_54 = "src/z0/k3.js:catalog-row:054";
const k3_55 = "src/z0/k3.js:catalog-row:055";
const k3_56 = "src/z0/k3.js:catalog-row:056";
const k3_57 = "src/z0/k3.js:catalog-row:057";
const k3_58 = "src/z0/k3.js:catalog-row:058";
const k3_59 = "src/z0/k3.js:catalog-row:059";
const k3_60 = "src/z0/k3.js:catalog-row:060";
const k3_61 = "src/z0/k3.js:catalog-row:061";
const k3_62 = "src/z0/k3.js:catalog-row:062";
const k3_63 = "src/z0/k3.js:catalog-row:063";
const k3_64 = "src/z0/k3.js:catalog-row:064";
const k3_65 = "src/z0/k3.js:catalog-row:065";
const k3_66 = "src/z0/k3.js:catalog-row:066";
const k3_67 = "src/z0/k3.js:catalog-row:067";
const k3_68 = "src/z0/k3.js:catalog-row:068";
const k3_69 = "src/z0/k3.js:catalog-row:069";
const k3_70 = "src/z0/k3.js:catalog-row:070";
const k3_71 = "src/z0/k3.js:catalog-row:071";
const k3_72 = "src/z0/k3.js:catalog-row:072";
const k3_73 = "src/z0/k3.js:catalog-row:073";
const k3_74 = "src/z0/k3.js:catalog-row:074";
const k3_75 = "src/z0/k3.js:catalog-row:075";
const k3_76 = "src/z0/k3.js:catalog-row:076";
const k3_77 = "src/z0/k3.js:catalog-row:077";
const k3_78 = "src/z0/k3.js:catalog-row:078";
const k3_79 = "src/z0/k3.js:catalog-row:079";
const k3_80 = "src/z0/k3.js:catalog-row:080";
const k3_81 = "src/z0/k3.js:catalog-row:081";
const k3_82 = "src/z0/k3.js:catalog-row:082";
const k3_83 = "src/z0/k3.js:catalog-row:083";
const k3_84 = "src/z0/k3.js:catalog-row:084";
const k3_85 = "src/z0/k3.js:catalog-row:085";
const k3_86 = "src/z0/k3.js:catalog-row:086";
const k3_87 = "src/z0/k3.js:catalog-row:087";
const k3_88 = "src/z0/k3.js:catalog-row:088";
const k3_89 = "src/z0/k3.js:catalog-row:089";
const k3_90 = "src/z0/k3.js:catalog-row:090";
const k3_91 = "src/z0/k3.js:catalog-row:091";
const k3_92 = "src/z0/k3.js:catalog-row:092";
const k3_93 = "src/z0/k3.js:catalog-row:093";
const k3_94 = "src/z0/k3.js:catalog-row:094";
const k3_95 = "src/z0/k3.js:catalog-row:095";
const k3_96 = "src/z0/k3.js:catalog-row:096";
const k3_97 = "src/z0/k3.js:catalog-row:097";
const k3_98 = "src/z0/k3.js:catalog-row:098";
const k3_99 = "src/z0/k3.js:catalog-row:099";
const k3_100 = "src/z0/k3.js:catalog-row:100";
const k3_101 = "src/z0/k3.js:catalog-row:101";
const k3_102 = "src/z0/k3.js:catalog-row:102";
const k3_103 = "src/z0/k3.js:catalog-row:103";
const k3_104 = "src/z0/k3.js:catalog-row:104";
const k3_105 = "src/z0/k3.js:catalog-row:105";
const k3_106 = "src/z0/k3.js:catalog-row:106";
const k3_107 = "src/z0/k3.js:catalog-row:107";
const k3_108 = "src/z0/k3.js:catalog-row:108";
const k3_109 = "src/z0/k3.js:catalog-row:109";
const k3_110 = "src/z0/k3.js:catalog-row:110";
const k3_111 = "src/z0/k3.js:catalog-row:111";
const k3_112 = "src/z0/k3.js:catalog-row:112";
const k3_113 = "src/z0/k3.js:catalog-row:113";
const k3_114 = "src/z0/k3.js:catalog-row:114";
const k3_115 = "src/z0/k3.js:catalog-row:115";
const k3_116 = "src/z0/k3.js:catalog-row:116";
const k3_117 = "src/z0/k3.js:catalog-row:117";
const k3_118 = "src/z0/k3.js:catalog-row:118";
const k3_119 = "src/z0/k3.js:catalog-row:119";
const k3_120 = "src/z0/k3.js:catalog-row:120";
const k3_121 = "src/z0/k3.js:catalog-row:121";
const k3_122 = "src/z0/k3.js:catalog-row:122";
const k3_123 = "src/z0/k3.js:catalog-row:123";
const k3_124 = "src/z0/k3.js:catalog-row:124";
const k3_125 = "src/z0/k3.js:catalog-row:125";
const k3_126 = "src/z0/k3.js:catalog-row:126";
const k3_127 = "src/z0/k3.js:catalog-row:127";
const k3_128 = "src/z0/k3.js:catalog-row:128";
const k3_129 = "src/z0/k3.js:catalog-row:129";
const k3_130 = "src/z0/k3.js:catalog-row:130";
const k3_131 = "src/z0/k3.js:catalog-row:131";
const k3_132 = "src/z0/k3.js:catalog-row:132";
const k3_133 = "src/z0/k3.js:catalog-row:133";
const k3_134 = "src/z0/k3.js:catalog-row:134";
const k3_135 = "src/z0/k3.js:catalog-row:135";
const k3_136 = "src/z0/k3.js:catalog-row:136";
const k3_137 = "src/z0/k3.js:catalog-row:137";
const k3_138 = "src/z0/k3.js:catalog-row:138";
const k3_139 = "src/z0/k3.js:catalog-row:139";
const k3_140 = "src/z0/k3.js:catalog-row:140";
const k3_141 = "src/z0/k3.js:catalog-row:141";
const k3_142 = "src/z0/k3.js:catalog-row:142";
const k3_143 = "src/z0/k3.js:catalog-row:143";
const k3_144 = "src/z0/k3.js:catalog-row:144";
const k3_145 = "src/z0/k3.js:catalog-row:145";
const k3_146 = "src/z0/k3.js:catalog-row:146";
const k3_147 = "src/z0/k3.js:catalog-row:147";
const k3_148 = "src/z0/k3.js:catalog-row:148";
const k3_149 = "src/z0/k3.js:catalog-row:149";
const k3_150 = "src/z0/k3.js:catalog-row:150";
const k3_151 = "src/z0/k3.js:catalog-row:151";
const k3_152 = "src/z0/k3.js:catalog-row:152";
const k3_153 = "src/z0/k3.js:catalog-row:153";
const k3_154 = "src/z0/k3.js:catalog-row:154";
const k3_155 = "src/z0/k3.js:catalog-row:155";
