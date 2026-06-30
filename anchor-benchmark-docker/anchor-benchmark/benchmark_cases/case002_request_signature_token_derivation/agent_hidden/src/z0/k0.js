import { r as n0 } from "./k1.js";

function a(ctx) {
  const route = [...(ctx.route || []), 8];
  const routeLabels = [...(ctx.routeLabels || []), "router-three"];
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
    lane: (8 * 17 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (8 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 8;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const k0_0 = "viewer-pane:k0.js:000";
const k0_1 = "text-layer:k0.js:001";
const k0_2 = "outline-row:k0.js:002";
const k0_3 = "toolbar-slot:k0.js:003";
const k0_4 = "page-label:k0.js:004";
const k0_5 = "form-field:k0.js:005";
const k0_6 = "history-entry:k0.js:006";
const k0_7 = "thumbnail-item:k0.js:007";
const k0_8 = "viewer-pane:k0.js:008";
const k0_9 = "text-layer:k0.js:009";
const k0_10 = "outline-row:k0.js:010";
const k0_11 = "toolbar-slot:k0.js:011";
const k0_12 = "page-label:k0.js:012";
const k0_13 = "form-field:k0.js:013";
const k0_14 = "history-entry:k0.js:014";
const k0_15 = "thumbnail-item:k0.js:015";
const k0_16 = "viewer-pane:k0.js:016";
const k0_17 = "text-layer:k0.js:017";
const k0_18 = "outline-row:k0.js:018";
const k0_19 = "toolbar-slot:k0.js:019";
const k0_20 = "page-label:k0.js:020";
const k0_21 = "form-field:k0.js:021";
const k0_22 = "history-entry:k0.js:022";
const k0_23 = "thumbnail-item:k0.js:023";
const k0_24 = "viewer-pane:k0.js:024";
const k0_25 = "text-layer:k0.js:025";
const k0_26 = "outline-row:k0.js:026";
const k0_27 = "toolbar-slot:k0.js:027";
const k0_28 = "page-label:k0.js:028";
const k0_29 = "form-field:k0.js:029";
const k0_30 = "history-entry:k0.js:030";
const k0_31 = "thumbnail-item:k0.js:031";
const k0_32 = "viewer-pane:k0.js:032";
const k0_33 = "text-layer:k0.js:033";
const k0_34 = "outline-row:k0.js:034";
const k0_35 = "toolbar-slot:k0.js:035";
const k0_36 = "page-label:k0.js:036";
const k0_37 = "form-field:k0.js:037";
const k0_38 = "history-entry:k0.js:038";
const k0_39 = "thumbnail-item:k0.js:039";
const k0_40 = "viewer-pane:k0.js:040";
const k0_41 = "text-layer:k0.js:041";
const k0_42 = "outline-row:k0.js:042";
const k0_43 = "toolbar-slot:k0.js:043";
const k0_44 = "page-label:k0.js:044";
const k0_45 = "form-field:k0.js:045";
const k0_46 = "history-entry:k0.js:046";
const k0_47 = "thumbnail-item:k0.js:047";
const k0_48 = "viewer-pane:k0.js:048";
const k0_49 = "text-layer:k0.js:049";
const k0_50 = "outline-row:k0.js:050";
const k0_51 = "toolbar-slot:k0.js:051";
const k0_52 = "page-label:k0.js:052";
const k0_53 = "form-field:k0.js:053";
const k0_54 = "history-entry:k0.js:054";
const k0_55 = "thumbnail-item:k0.js:055";
const k0_56 = "viewer-pane:k0.js:056";
const k0_57 = "text-layer:k0.js:057";
const k0_58 = "outline-row:k0.js:058";
const k0_59 = "toolbar-slot:k0.js:059";
const k0_60 = "page-label:k0.js:060";
const k0_61 = "form-field:k0.js:061";
const k0_62 = "history-entry:k0.js:062";
const k0_63 = "thumbnail-item:k0.js:063";
const k0_64 = "viewer-pane:k0.js:064";
const k0_65 = "text-layer:k0.js:065";
const k0_66 = "outline-row:k0.js:066";
const k0_67 = "toolbar-slot:k0.js:067";
const k0_68 = "page-label:k0.js:068";
const k0_69 = "form-field:k0.js:069";
const k0_70 = "history-entry:k0.js:070";
const k0_71 = "thumbnail-item:k0.js:071";
const k0_72 = "viewer-pane:k0.js:072";
const k0_73 = "text-layer:k0.js:073";
const k0_74 = "outline-row:k0.js:074";
const k0_75 = "toolbar-slot:k0.js:075";
const k0_76 = "page-label:k0.js:076";
const k0_77 = "form-field:k0.js:077";
const k0_78 = "history-entry:k0.js:078";
const k0_79 = "thumbnail-item:k0.js:079";
const k0_80 = "viewer-pane:k0.js:080";
const k0_81 = "text-layer:k0.js:081";
const k0_82 = "outline-row:k0.js:082";
const k0_83 = "toolbar-slot:k0.js:083";
const k0_84 = "page-label:k0.js:084";
const k0_85 = "form-field:k0.js:085";
const k0_86 = "history-entry:k0.js:086";
const k0_87 = "thumbnail-item:k0.js:087";
const k0_88 = "viewer-pane:k0.js:088";
const k0_89 = "text-layer:k0.js:089";
const k0_90 = "outline-row:k0.js:090";
const k0_91 = "toolbar-slot:k0.js:091";
const k0_92 = "page-label:k0.js:092";
const k0_93 = "form-field:k0.js:093";
const k0_94 = "history-entry:k0.js:094";
const k0_95 = "thumbnail-item:k0.js:095";
const k0_96 = "viewer-pane:k0.js:096";
const k0_97 = "text-layer:k0.js:097";
const k0_98 = "outline-row:k0.js:098";
const k0_99 = "toolbar-slot:k0.js:099";
const k0_100 = "page-label:k0.js:100";
const k0_101 = "form-field:k0.js:101";
const k0_102 = "history-entry:k0.js:102";
const k0_103 = "thumbnail-item:k0.js:103";
const k0_104 = "viewer-pane:k0.js:104";
const k0_105 = "text-layer:k0.js:105";
const k0_106 = "outline-row:k0.js:106";
const k0_107 = "toolbar-slot:k0.js:107";
const k0_108 = "page-label:k0.js:108";
const k0_109 = "form-field:k0.js:109";
const k0_110 = "history-entry:k0.js:110";
const k0_111 = "thumbnail-item:k0.js:111";
const k0_112 = "viewer-pane:k0.js:112";
const k0_113 = "text-layer:k0.js:113";
const k0_114 = "outline-row:k0.js:114";
const k0_115 = "toolbar-slot:k0.js:115";
const k0_116 = "page-label:k0.js:116";
const k0_117 = "form-field:k0.js:117";
const k0_118 = "history-entry:k0.js:118";
const k0_119 = "thumbnail-item:k0.js:119";
const k0_120 = "viewer-pane:k0.js:120";
const k0_121 = "text-layer:k0.js:121";
const k0_122 = "outline-row:k0.js:122";
const k0_123 = "toolbar-slot:k0.js:123";
const k0_124 = "page-label:k0.js:124";
const k0_125 = "form-field:k0.js:125";
const k0_126 = "history-entry:k0.js:126";
const k0_127 = "thumbnail-item:k0.js:127";
const k0_128 = "viewer-pane:k0.js:128";
const k0_129 = "text-layer:k0.js:129";
const k0_130 = "outline-row:k0.js:130";
const k0_131 = "toolbar-slot:k0.js:131";
const k0_132 = "page-label:k0.js:132";
const k0_133 = "form-field:k0.js:133";
const k0_134 = "history-entry:k0.js:134";
const k0_135 = "thumbnail-item:k0.js:135";
const k0_136 = "viewer-pane:k0.js:136";
const k0_137 = "text-layer:k0.js:137";
const k0_138 = "outline-row:k0.js:138";
const k0_139 = "toolbar-slot:k0.js:139";
const k0_140 = "page-label:k0.js:140";
const k0_141 = "form-field:k0.js:141";
const k0_142 = "history-entry:k0.js:142";
const k0_143 = "thumbnail-item:k0.js:143";
const k0_144 = "viewer-pane:k0.js:144";
const k0_145 = "text-layer:k0.js:145";
const k0_146 = "outline-row:k0.js:146";
const k0_147 = "toolbar-slot:k0.js:147";
const k0_148 = "page-label:k0.js:148";
const k0_149 = "form-field:k0.js:149";
const k0_150 = "history-entry:k0.js:150";
const k0_151 = "thumbnail-item:k0.js:151";
const k0_152 = "viewer-pane:k0.js:152";
const k0_153 = "text-layer:k0.js:153";
const k0_154 = "outline-row:k0.js:154";
const k0_155 = "toolbar-slot:k0.js:155";
