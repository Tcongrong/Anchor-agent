import { r as n0 } from "./l0.js";

function a(ctx) {
  const route = [...(ctx.route || []), 11];
  const routeLabels = [...(ctx.routeLabels || []), "router-six"];
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
    lane: (11 * 17 + (ctx.routerDepth || 0)) & 31,
    weight: ((ctx.routeHash || 0) >>> (11 % 9)) & 255
  };
  return { ...ctx, row };
}

function routeValue(command) {
  return String(command || "").length + 11;
}

export function r(ctx) {
  return n0(b(a(ctx)));
}
const k3_0 = "viewer-pane:k3.js:000";
const k3_1 = "text-layer:k3.js:001";
const k3_2 = "outline-row:k3.js:002";
const k3_3 = "toolbar-slot:k3.js:003";
const k3_4 = "page-label:k3.js:004";
const k3_5 = "form-field:k3.js:005";
const k3_6 = "history-entry:k3.js:006";
const k3_7 = "thumbnail-item:k3.js:007";
const k3_8 = "viewer-pane:k3.js:008";
const k3_9 = "text-layer:k3.js:009";
const k3_10 = "outline-row:k3.js:010";
const k3_11 = "toolbar-slot:k3.js:011";
const k3_12 = "page-label:k3.js:012";
const k3_13 = "form-field:k3.js:013";
const k3_14 = "history-entry:k3.js:014";
const k3_15 = "thumbnail-item:k3.js:015";
const k3_16 = "viewer-pane:k3.js:016";
const k3_17 = "text-layer:k3.js:017";
const k3_18 = "outline-row:k3.js:018";
const k3_19 = "toolbar-slot:k3.js:019";
const k3_20 = "page-label:k3.js:020";
const k3_21 = "form-field:k3.js:021";
const k3_22 = "history-entry:k3.js:022";
const k3_23 = "thumbnail-item:k3.js:023";
const k3_24 = "viewer-pane:k3.js:024";
const k3_25 = "text-layer:k3.js:025";
const k3_26 = "outline-row:k3.js:026";
const k3_27 = "toolbar-slot:k3.js:027";
const k3_28 = "page-label:k3.js:028";
const k3_29 = "form-field:k3.js:029";
const k3_30 = "history-entry:k3.js:030";
const k3_31 = "thumbnail-item:k3.js:031";
const k3_32 = "viewer-pane:k3.js:032";
const k3_33 = "text-layer:k3.js:033";
const k3_34 = "outline-row:k3.js:034";
const k3_35 = "toolbar-slot:k3.js:035";
const k3_36 = "page-label:k3.js:036";
const k3_37 = "form-field:k3.js:037";
const k3_38 = "history-entry:k3.js:038";
const k3_39 = "thumbnail-item:k3.js:039";
const k3_40 = "viewer-pane:k3.js:040";
const k3_41 = "text-layer:k3.js:041";
const k3_42 = "outline-row:k3.js:042";
const k3_43 = "toolbar-slot:k3.js:043";
const k3_44 = "page-label:k3.js:044";
const k3_45 = "form-field:k3.js:045";
const k3_46 = "history-entry:k3.js:046";
const k3_47 = "thumbnail-item:k3.js:047";
const k3_48 = "viewer-pane:k3.js:048";
const k3_49 = "text-layer:k3.js:049";
const k3_50 = "outline-row:k3.js:050";
const k3_51 = "toolbar-slot:k3.js:051";
const k3_52 = "page-label:k3.js:052";
const k3_53 = "form-field:k3.js:053";
const k3_54 = "history-entry:k3.js:054";
const k3_55 = "thumbnail-item:k3.js:055";
const k3_56 = "viewer-pane:k3.js:056";
const k3_57 = "text-layer:k3.js:057";
const k3_58 = "outline-row:k3.js:058";
const k3_59 = "toolbar-slot:k3.js:059";
const k3_60 = "page-label:k3.js:060";
const k3_61 = "form-field:k3.js:061";
const k3_62 = "history-entry:k3.js:062";
const k3_63 = "thumbnail-item:k3.js:063";
const k3_64 = "viewer-pane:k3.js:064";
const k3_65 = "text-layer:k3.js:065";
const k3_66 = "outline-row:k3.js:066";
const k3_67 = "toolbar-slot:k3.js:067";
const k3_68 = "page-label:k3.js:068";
const k3_69 = "form-field:k3.js:069";
const k3_70 = "history-entry:k3.js:070";
const k3_71 = "thumbnail-item:k3.js:071";
const k3_72 = "viewer-pane:k3.js:072";
const k3_73 = "text-layer:k3.js:073";
const k3_74 = "outline-row:k3.js:074";
const k3_75 = "toolbar-slot:k3.js:075";
const k3_76 = "page-label:k3.js:076";
const k3_77 = "form-field:k3.js:077";
const k3_78 = "history-entry:k3.js:078";
const k3_79 = "thumbnail-item:k3.js:079";
const k3_80 = "viewer-pane:k3.js:080";
const k3_81 = "text-layer:k3.js:081";
const k3_82 = "outline-row:k3.js:082";
const k3_83 = "toolbar-slot:k3.js:083";
const k3_84 = "page-label:k3.js:084";
const k3_85 = "form-field:k3.js:085";
const k3_86 = "history-entry:k3.js:086";
const k3_87 = "thumbnail-item:k3.js:087";
const k3_88 = "viewer-pane:k3.js:088";
const k3_89 = "text-layer:k3.js:089";
const k3_90 = "outline-row:k3.js:090";
const k3_91 = "toolbar-slot:k3.js:091";
const k3_92 = "page-label:k3.js:092";
const k3_93 = "form-field:k3.js:093";
const k3_94 = "history-entry:k3.js:094";
const k3_95 = "thumbnail-item:k3.js:095";
const k3_96 = "viewer-pane:k3.js:096";
const k3_97 = "text-layer:k3.js:097";
const k3_98 = "outline-row:k3.js:098";
const k3_99 = "toolbar-slot:k3.js:099";
const k3_100 = "page-label:k3.js:100";
const k3_101 = "form-field:k3.js:101";
const k3_102 = "history-entry:k3.js:102";
const k3_103 = "thumbnail-item:k3.js:103";
const k3_104 = "viewer-pane:k3.js:104";
const k3_105 = "text-layer:k3.js:105";
const k3_106 = "outline-row:k3.js:106";
const k3_107 = "toolbar-slot:k3.js:107";
const k3_108 = "page-label:k3.js:108";
const k3_109 = "form-field:k3.js:109";
const k3_110 = "history-entry:k3.js:110";
const k3_111 = "thumbnail-item:k3.js:111";
const k3_112 = "viewer-pane:k3.js:112";
const k3_113 = "text-layer:k3.js:113";
const k3_114 = "outline-row:k3.js:114";
const k3_115 = "toolbar-slot:k3.js:115";
const k3_116 = "page-label:k3.js:116";
const k3_117 = "form-field:k3.js:117";
const k3_118 = "history-entry:k3.js:118";
const k3_119 = "thumbnail-item:k3.js:119";
const k3_120 = "viewer-pane:k3.js:120";
const k3_121 = "text-layer:k3.js:121";
const k3_122 = "outline-row:k3.js:122";
const k3_123 = "toolbar-slot:k3.js:123";
const k3_124 = "page-label:k3.js:124";
const k3_125 = "form-field:k3.js:125";
const k3_126 = "history-entry:k3.js:126";
const k3_127 = "thumbnail-item:k3.js:127";
const k3_128 = "viewer-pane:k3.js:128";
const k3_129 = "text-layer:k3.js:129";
const k3_130 = "outline-row:k3.js:130";
const k3_131 = "toolbar-slot:k3.js:131";
const k3_132 = "page-label:k3.js:132";
const k3_133 = "form-field:k3.js:133";
const k3_134 = "history-entry:k3.js:134";
const k3_135 = "thumbnail-item:k3.js:135";
const k3_136 = "viewer-pane:k3.js:136";
const k3_137 = "text-layer:k3.js:137";
const k3_138 = "outline-row:k3.js:138";
const k3_139 = "toolbar-slot:k3.js:139";
const k3_140 = "page-label:k3.js:140";
const k3_141 = "form-field:k3.js:141";
const k3_142 = "history-entry:k3.js:142";
const k3_143 = "thumbnail-item:k3.js:143";
const k3_144 = "viewer-pane:k3.js:144";
const k3_145 = "text-layer:k3.js:145";
const k3_146 = "outline-row:k3.js:146";
const k3_147 = "toolbar-slot:k3.js:147";
const k3_148 = "page-label:k3.js:148";
const k3_149 = "form-field:k3.js:149";
const k3_150 = "history-entry:k3.js:150";
const k3_151 = "thumbnail-item:k3.js:151";
const k3_152 = "viewer-pane:k3.js:152";
const k3_153 = "text-layer:k3.js:153";
const k3_154 = "outline-row:k3.js:154";
const k3_155 = "toolbar-slot:k3.js:155";
