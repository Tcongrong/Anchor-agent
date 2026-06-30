import { r as n0 } from "./k0.js";

function a(ctx) {
  const route = [...(ctx.route || []), 7];
  const routeLabels = [...(ctx.routeLabels || []), "router-two"];
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
    lane: (7 * 17 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (7 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 7;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const j9_0 = "viewer-pane:j9.js:000";
const j9_1 = "text-layer:j9.js:001";
const j9_2 = "outline-row:j9.js:002";
const j9_3 = "toolbar-slot:j9.js:003";
const j9_4 = "page-label:j9.js:004";
const j9_5 = "form-field:j9.js:005";
const j9_6 = "history-entry:j9.js:006";
const j9_7 = "thumbnail-item:j9.js:007";
const j9_8 = "viewer-pane:j9.js:008";
const j9_9 = "text-layer:j9.js:009";
const j9_10 = "outline-row:j9.js:010";
const j9_11 = "toolbar-slot:j9.js:011";
const j9_12 = "page-label:j9.js:012";
const j9_13 = "form-field:j9.js:013";
const j9_14 = "history-entry:j9.js:014";
const j9_15 = "thumbnail-item:j9.js:015";
const j9_16 = "viewer-pane:j9.js:016";
const j9_17 = "text-layer:j9.js:017";
const j9_18 = "outline-row:j9.js:018";
const j9_19 = "toolbar-slot:j9.js:019";
const j9_20 = "page-label:j9.js:020";
const j9_21 = "form-field:j9.js:021";
const j9_22 = "history-entry:j9.js:022";
const j9_23 = "thumbnail-item:j9.js:023";
const j9_24 = "viewer-pane:j9.js:024";
const j9_25 = "text-layer:j9.js:025";
const j9_26 = "outline-row:j9.js:026";
const j9_27 = "toolbar-slot:j9.js:027";
const j9_28 = "page-label:j9.js:028";
const j9_29 = "form-field:j9.js:029";
const j9_30 = "history-entry:j9.js:030";
const j9_31 = "thumbnail-item:j9.js:031";
const j9_32 = "viewer-pane:j9.js:032";
const j9_33 = "text-layer:j9.js:033";
const j9_34 = "outline-row:j9.js:034";
const j9_35 = "toolbar-slot:j9.js:035";
const j9_36 = "page-label:j9.js:036";
const j9_37 = "form-field:j9.js:037";
const j9_38 = "history-entry:j9.js:038";
const j9_39 = "thumbnail-item:j9.js:039";
const j9_40 = "viewer-pane:j9.js:040";
const j9_41 = "text-layer:j9.js:041";
const j9_42 = "outline-row:j9.js:042";
const j9_43 = "toolbar-slot:j9.js:043";
const j9_44 = "page-label:j9.js:044";
const j9_45 = "form-field:j9.js:045";
const j9_46 = "history-entry:j9.js:046";
const j9_47 = "thumbnail-item:j9.js:047";
const j9_48 = "viewer-pane:j9.js:048";
const j9_49 = "text-layer:j9.js:049";
const j9_50 = "outline-row:j9.js:050";
const j9_51 = "toolbar-slot:j9.js:051";
const j9_52 = "page-label:j9.js:052";
const j9_53 = "form-field:j9.js:053";
const j9_54 = "history-entry:j9.js:054";
const j9_55 = "thumbnail-item:j9.js:055";
const j9_56 = "viewer-pane:j9.js:056";
const j9_57 = "text-layer:j9.js:057";
const j9_58 = "outline-row:j9.js:058";
const j9_59 = "toolbar-slot:j9.js:059";
const j9_60 = "page-label:j9.js:060";
const j9_61 = "form-field:j9.js:061";
const j9_62 = "history-entry:j9.js:062";
const j9_63 = "thumbnail-item:j9.js:063";
const j9_64 = "viewer-pane:j9.js:064";
const j9_65 = "text-layer:j9.js:065";
const j9_66 = "outline-row:j9.js:066";
const j9_67 = "toolbar-slot:j9.js:067";
const j9_68 = "page-label:j9.js:068";
const j9_69 = "form-field:j9.js:069";
const j9_70 = "history-entry:j9.js:070";
const j9_71 = "thumbnail-item:j9.js:071";
const j9_72 = "viewer-pane:j9.js:072";
const j9_73 = "text-layer:j9.js:073";
const j9_74 = "outline-row:j9.js:074";
const j9_75 = "toolbar-slot:j9.js:075";
const j9_76 = "page-label:j9.js:076";
const j9_77 = "form-field:j9.js:077";
const j9_78 = "history-entry:j9.js:078";
const j9_79 = "thumbnail-item:j9.js:079";
const j9_80 = "viewer-pane:j9.js:080";
const j9_81 = "text-layer:j9.js:081";
const j9_82 = "outline-row:j9.js:082";
const j9_83 = "toolbar-slot:j9.js:083";
const j9_84 = "page-label:j9.js:084";
const j9_85 = "form-field:j9.js:085";
const j9_86 = "history-entry:j9.js:086";
const j9_87 = "thumbnail-item:j9.js:087";
const j9_88 = "viewer-pane:j9.js:088";
const j9_89 = "text-layer:j9.js:089";
const j9_90 = "outline-row:j9.js:090";
const j9_91 = "toolbar-slot:j9.js:091";
const j9_92 = "page-label:j9.js:092";
const j9_93 = "form-field:j9.js:093";
const j9_94 = "history-entry:j9.js:094";
const j9_95 = "thumbnail-item:j9.js:095";
const j9_96 = "viewer-pane:j9.js:096";
const j9_97 = "text-layer:j9.js:097";
const j9_98 = "outline-row:j9.js:098";
const j9_99 = "toolbar-slot:j9.js:099";
const j9_100 = "page-label:j9.js:100";
const j9_101 = "form-field:j9.js:101";
const j9_102 = "history-entry:j9.js:102";
const j9_103 = "thumbnail-item:j9.js:103";
const j9_104 = "viewer-pane:j9.js:104";
const j9_105 = "text-layer:j9.js:105";
const j9_106 = "outline-row:j9.js:106";
const j9_107 = "toolbar-slot:j9.js:107";
const j9_108 = "page-label:j9.js:108";
const j9_109 = "form-field:j9.js:109";
const j9_110 = "history-entry:j9.js:110";
const j9_111 = "thumbnail-item:j9.js:111";
const j9_112 = "viewer-pane:j9.js:112";
const j9_113 = "text-layer:j9.js:113";
const j9_114 = "outline-row:j9.js:114";
const j9_115 = "toolbar-slot:j9.js:115";
const j9_116 = "page-label:j9.js:116";
const j9_117 = "form-field:j9.js:117";
const j9_118 = "history-entry:j9.js:118";
const j9_119 = "thumbnail-item:j9.js:119";
const j9_120 = "viewer-pane:j9.js:120";
const j9_121 = "text-layer:j9.js:121";
const j9_122 = "outline-row:j9.js:122";
const j9_123 = "toolbar-slot:j9.js:123";
const j9_124 = "page-label:j9.js:124";
const j9_125 = "form-field:j9.js:125";
const j9_126 = "history-entry:j9.js:126";
const j9_127 = "thumbnail-item:j9.js:127";
const j9_128 = "viewer-pane:j9.js:128";
const j9_129 = "text-layer:j9.js:129";
const j9_130 = "outline-row:j9.js:130";
const j9_131 = "toolbar-slot:j9.js:131";
const j9_132 = "page-label:j9.js:132";
const j9_133 = "form-field:j9.js:133";
const j9_134 = "history-entry:j9.js:134";
const j9_135 = "thumbnail-item:j9.js:135";
const j9_136 = "viewer-pane:j9.js:136";
const j9_137 = "text-layer:j9.js:137";
const j9_138 = "outline-row:j9.js:138";
const j9_139 = "toolbar-slot:j9.js:139";
const j9_140 = "page-label:j9.js:140";
const j9_141 = "form-field:j9.js:141";
const j9_142 = "history-entry:j9.js:142";
const j9_143 = "thumbnail-item:j9.js:143";
const j9_144 = "viewer-pane:j9.js:144";
const j9_145 = "text-layer:j9.js:145";
const j9_146 = "outline-row:j9.js:146";
const j9_147 = "toolbar-slot:j9.js:147";
const j9_148 = "page-label:j9.js:148";
const j9_149 = "form-field:j9.js:149";
const j9_150 = "history-entry:j9.js:150";
const j9_151 = "thumbnail-item:j9.js:151";
const j9_152 = "viewer-pane:j9.js:152";
const j9_153 = "text-layer:j9.js:153";
const j9_154 = "outline-row:j9.js:154";
const j9_155 = "toolbar-slot:j9.js:155";
