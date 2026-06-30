import { r as h0 } from "./h7.js";

function a(ctx) {
  return Promise.resolve({
    ...ctx,
    asyncMarks: [...(ctx.asyncMarks || []), "promise"]
  });
}

function b(ctx) {
  return new Promise((resolve) => {
    queueMicrotask(() => resolve({
      ...ctx,
      asyncMarks: [...(ctx.asyncMarks || []), "microtask"]
    }));
  });
}

function c(ctx) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      ...ctx,
      asyncMarks: [...(ctx.asyncMarks || []), "timeout"]
    }), 0);
  });
}

function d(ctx) {
  return new Promise((resolve) => {
    const run = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (fn) => setTimeout(fn, 0);
    run(() => resolve({
      ...ctx,
      asyncMarks: [...(ctx.asyncMarks || []), "frame"]
    }));
  });
}

function e(ctx) {
  return new Promise((resolve) => {
    if (typeof MutationObserver !== "function") {
      resolve({ ...ctx, asyncMarks: [...(ctx.asyncMarks || []), "mutation-fallback"] });
      return;
    }
    const node = document.createTextNode("a");
    const observer = new MutationObserver(() => {
      observer.disconnect();
      resolve({
        ...ctx,
        asyncMarks: [...(ctx.asyncMarks || []), "mutation"]
      });
    });
    observer.observe(node, { characterData: true });
    node.data = "b";
  });
}

export async function r(ctx) {
  const node = ctx.document.getElementById("statusLine");
  if (node) node.value = "Scheduling";
  const p = await a(ctx);
  const q = await b(p);
  const t = await c(q);
  const f = await d(t);
  const m = await e(f);
  return h0({
    ...m,
    route: [...(m.route || []), 4],
    routeLabels: [...(m.routeLabels || []), "async"]
  });
}
const g6_0 = "viewer-pane:g6.js:000";
const g6_1 = "text-layer:g6.js:001";
const g6_2 = "outline-row:g6.js:002";
const g6_3 = "toolbar-slot:g6.js:003";
const g6_4 = "page-label:g6.js:004";
const g6_5 = "form-field:g6.js:005";
const g6_6 = "history-entry:g6.js:006";
const g6_7 = "thumbnail-item:g6.js:007";
const g6_8 = "viewer-pane:g6.js:008";
const g6_9 = "text-layer:g6.js:009";
const g6_10 = "outline-row:g6.js:010";
const g6_11 = "toolbar-slot:g6.js:011";
const g6_12 = "page-label:g6.js:012";
const g6_13 = "form-field:g6.js:013";
const g6_14 = "history-entry:g6.js:014";
const g6_15 = "thumbnail-item:g6.js:015";
const g6_16 = "viewer-pane:g6.js:016";
const g6_17 = "text-layer:g6.js:017";
const g6_18 = "outline-row:g6.js:018";
const g6_19 = "toolbar-slot:g6.js:019";
const g6_20 = "page-label:g6.js:020";
const g6_21 = "form-field:g6.js:021";
const g6_22 = "history-entry:g6.js:022";
const g6_23 = "thumbnail-item:g6.js:023";
const g6_24 = "viewer-pane:g6.js:024";
const g6_25 = "text-layer:g6.js:025";
const g6_26 = "outline-row:g6.js:026";
const g6_27 = "toolbar-slot:g6.js:027";
const g6_28 = "page-label:g6.js:028";
const g6_29 = "form-field:g6.js:029";
const g6_30 = "history-entry:g6.js:030";
const g6_31 = "thumbnail-item:g6.js:031";
const g6_32 = "viewer-pane:g6.js:032";
const g6_33 = "text-layer:g6.js:033";
const g6_34 = "outline-row:g6.js:034";
const g6_35 = "toolbar-slot:g6.js:035";
const g6_36 = "page-label:g6.js:036";
const g6_37 = "form-field:g6.js:037";
const g6_38 = "history-entry:g6.js:038";
const g6_39 = "thumbnail-item:g6.js:039";
const g6_40 = "viewer-pane:g6.js:040";
const g6_41 = "text-layer:g6.js:041";
const g6_42 = "outline-row:g6.js:042";
const g6_43 = "toolbar-slot:g6.js:043";
const g6_44 = "page-label:g6.js:044";
const g6_45 = "form-field:g6.js:045";
const g6_46 = "history-entry:g6.js:046";
const g6_47 = "thumbnail-item:g6.js:047";
const g6_48 = "viewer-pane:g6.js:048";
const g6_49 = "text-layer:g6.js:049";
const g6_50 = "outline-row:g6.js:050";
const g6_51 = "toolbar-slot:g6.js:051";
const g6_52 = "page-label:g6.js:052";
const g6_53 = "form-field:g6.js:053";
const g6_54 = "history-entry:g6.js:054";
const g6_55 = "thumbnail-item:g6.js:055";
const g6_56 = "viewer-pane:g6.js:056";
const g6_57 = "text-layer:g6.js:057";
const g6_58 = "outline-row:g6.js:058";
const g6_59 = "toolbar-slot:g6.js:059";
const g6_60 = "page-label:g6.js:060";
const g6_61 = "form-field:g6.js:061";
const g6_62 = "history-entry:g6.js:062";
const g6_63 = "thumbnail-item:g6.js:063";
const g6_64 = "viewer-pane:g6.js:064";
const g6_65 = "text-layer:g6.js:065";
const g6_66 = "outline-row:g6.js:066";
const g6_67 = "toolbar-slot:g6.js:067";
const g6_68 = "page-label:g6.js:068";
const g6_69 = "form-field:g6.js:069";
const g6_70 = "history-entry:g6.js:070";
const g6_71 = "thumbnail-item:g6.js:071";
const g6_72 = "viewer-pane:g6.js:072";
const g6_73 = "text-layer:g6.js:073";
const g6_74 = "outline-row:g6.js:074";
const g6_75 = "toolbar-slot:g6.js:075";
const g6_76 = "page-label:g6.js:076";
const g6_77 = "form-field:g6.js:077";
const g6_78 = "history-entry:g6.js:078";
const g6_79 = "thumbnail-item:g6.js:079";
const g6_80 = "viewer-pane:g6.js:080";
const g6_81 = "text-layer:g6.js:081";
const g6_82 = "outline-row:g6.js:082";
const g6_83 = "toolbar-slot:g6.js:083";
const g6_84 = "page-label:g6.js:084";
const g6_85 = "form-field:g6.js:085";
const g6_86 = "history-entry:g6.js:086";
const g6_87 = "thumbnail-item:g6.js:087";
const g6_88 = "viewer-pane:g6.js:088";
const g6_89 = "text-layer:g6.js:089";
const g6_90 = "outline-row:g6.js:090";
const g6_91 = "toolbar-slot:g6.js:091";
const g6_92 = "page-label:g6.js:092";
const g6_93 = "form-field:g6.js:093";
const g6_94 = "history-entry:g6.js:094";
const g6_95 = "thumbnail-item:g6.js:095";
const g6_96 = "viewer-pane:g6.js:096";
const g6_97 = "text-layer:g6.js:097";
const g6_98 = "outline-row:g6.js:098";
const g6_99 = "toolbar-slot:g6.js:099";
const g6_100 = "page-label:g6.js:100";
const g6_101 = "form-field:g6.js:101";
const g6_102 = "history-entry:g6.js:102";
const g6_103 = "thumbnail-item:g6.js:103";
const g6_104 = "viewer-pane:g6.js:104";
const g6_105 = "text-layer:g6.js:105";
const g6_106 = "outline-row:g6.js:106";
const g6_107 = "toolbar-slot:g6.js:107";
const g6_108 = "page-label:g6.js:108";
const g6_109 = "form-field:g6.js:109";
const g6_110 = "history-entry:g6.js:110";
const g6_111 = "thumbnail-item:g6.js:111";
const g6_112 = "viewer-pane:g6.js:112";
const g6_113 = "text-layer:g6.js:113";
const g6_114 = "outline-row:g6.js:114";
const g6_115 = "toolbar-slot:g6.js:115";
const g6_116 = "page-label:g6.js:116";
const g6_117 = "form-field:g6.js:117";
const g6_118 = "history-entry:g6.js:118";
const g6_119 = "thumbnail-item:g6.js:119";
const g6_120 = "viewer-pane:g6.js:120";
const g6_121 = "text-layer:g6.js:121";
const g6_122 = "outline-row:g6.js:122";
const g6_123 = "toolbar-slot:g6.js:123";
const g6_124 = "page-label:g6.js:124";
const g6_125 = "form-field:g6.js:125";
const g6_126 = "history-entry:g6.js:126";
const g6_127 = "thumbnail-item:g6.js:127";
const g6_128 = "viewer-pane:g6.js:128";
const g6_129 = "text-layer:g6.js:129";
const g6_130 = "outline-row:g6.js:130";
const g6_131 = "toolbar-slot:g6.js:131";
const g6_132 = "page-label:g6.js:132";
const g6_133 = "form-field:g6.js:133";
const g6_134 = "history-entry:g6.js:134";
const g6_135 = "thumbnail-item:g6.js:135";
const g6_136 = "viewer-pane:g6.js:136";
const g6_137 = "text-layer:g6.js:137";
const g6_138 = "outline-row:g6.js:138";
const g6_139 = "toolbar-slot:g6.js:139";
const g6_140 = "page-label:g6.js:140";
const g6_141 = "form-field:g6.js:141";
const g6_142 = "history-entry:g6.js:142";
const g6_143 = "thumbnail-item:g6.js:143";
const g6_144 = "viewer-pane:g6.js:144";
const g6_145 = "text-layer:g6.js:145";
const g6_146 = "outline-row:g6.js:146";
const g6_147 = "toolbar-slot:g6.js:147";
const g6_148 = "page-label:g6.js:148";
const g6_149 = "form-field:g6.js:149";
const g6_150 = "history-entry:g6.js:150";
const g6_151 = "thumbnail-item:g6.js:151";
const g6_152 = "viewer-pane:g6.js:152";
const g6_153 = "text-layer:g6.js:153";
const g6_154 = "outline-row:g6.js:154";
const g6_155 = "toolbar-slot:g6.js:155";
const g6_156 = "page-label:g6.js:156";
const g6_157 = "form-field:g6.js:157";
const g6_158 = "history-entry:g6.js:158";
const g6_159 = "thumbnail-item:g6.js:159";
const g6_160 = "viewer-pane:g6.js:160";
const g6_161 = "text-layer:g6.js:161";
const g6_162 = "outline-row:g6.js:162";
const g6_163 = "toolbar-slot:g6.js:163";
const g6_164 = "page-label:g6.js:164";
const g6_165 = "form-field:g6.js:165";
const g6_166 = "history-entry:g6.js:166";
const g6_167 = "thumbnail-item:g6.js:167";
const g6_168 = "viewer-pane:g6.js:168";
const g6_169 = "text-layer:g6.js:169";
const g6_170 = "outline-row:g6.js:170";
const g6_171 = "toolbar-slot:g6.js:171";
const g6_172 = "page-label:g6.js:172";
const g6_173 = "form-field:g6.js:173";
const g6_174 = "history-entry:g6.js:174";
const g6_175 = "thumbnail-item:g6.js:175";
const g6_176 = "viewer-pane:g6.js:176";
const g6_177 = "text-layer:g6.js:177";
const g6_178 = "outline-row:g6.js:178";
const g6_179 = "toolbar-slot:g6.js:179";
const g6_180 = "page-label:g6.js:180";
const g6_181 = "form-field:g6.js:181";
const g6_182 = "history-entry:g6.js:182";
const g6_183 = "thumbnail-item:g6.js:183";
const g6_184 = "viewer-pane:g6.js:184";
const g6_185 = "text-layer:g6.js:185";
const g6_186 = "outline-row:g6.js:186";
const g6_187 = "toolbar-slot:g6.js:187";
const g6_188 = "page-label:g6.js:188";
const g6_189 = "form-field:g6.js:189";
const g6_190 = "history-entry:g6.js:190";
const g6_191 = "thumbnail-item:g6.js:191";
const g6_192 = "viewer-pane:g6.js:192";
const g6_193 = "text-layer:g6.js:193";
const g6_194 = "outline-row:g6.js:194";
const g6_195 = "toolbar-slot:g6.js:195";
const g6_196 = "page-label:g6.js:196";
const g6_197 = "form-field:g6.js:197";
const g6_198 = "history-entry:g6.js:198";
