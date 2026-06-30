import { r as h0 } from "./h7.js";

function a(ctx) {
  return Promise.resolve({
    ...ctx,
    asyncMarks: [...(ctx.asyncMarks || []), "settle"]
  });
}

function b(ctx) {
  return new Promise((resolve) => {
    queueMicrotask(() => resolve({
      ...ctx,
      asyncMarks: [...(ctx.asyncMarks || []), "micro-ledger"]
    }));
  });
}

function c(ctx) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      ...ctx,
      asyncMarks: [...(ctx.asyncMarks || []), "timer-slice"]
    }), 0);
  });
}

function d(ctx) {
  return new Promise((resolve) => {
    const run = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (fn) => setTimeout(fn, 0);
    run(() => resolve({
      ...ctx,
      asyncMarks: [...(ctx.asyncMarks || []), "visual-frame"]
    }));
  });
}

function e(ctx) {
  return new Promise((resolve) => {
    if (typeof MutationObserver !== "function") {
      resolve({ ...ctx, asyncMarks: [...(ctx.asyncMarks || []), "observer-fallback"] });
      return;
    }
    const node = document.createTextNode("a");
    const observer = new MutationObserver(() => {
      observer.disconnect();
      resolve({
        ...ctx,
        asyncMarks: [...(ctx.asyncMarks || []), "observer-flush"]
      });
    });
    observer.observe(node, { characterData: true });
    node.data = "b";
  });
}

export async function r(ctx) {
  const node = ctx.document.getElementById("statusLine");
  if (node) node.value = "Deferring";
  const p = await a(ctx);
  const q = await b(p);
  const t = await c(q);
  const f = await d(t);
  const m = await e(f);
  return h0({
    ...m,
    route: [...(m.route || []), 16],
    routeLabels: [...(m.routeLabels || []), "deferred-queue"]
  });
}
const g6_0 = "src/z0/g6.js:catalog-row:000";
const g6_1 = "src/z0/g6.js:catalog-row:001";
const g6_2 = "src/z0/g6.js:catalog-row:002";
const g6_3 = "src/z0/g6.js:catalog-row:003";
const g6_4 = "src/z0/g6.js:catalog-row:004";
const g6_5 = "src/z0/g6.js:catalog-row:005";
const g6_6 = "src/z0/g6.js:catalog-row:006";
const g6_7 = "src/z0/g6.js:catalog-row:007";
const g6_8 = "src/z0/g6.js:catalog-row:008";
const g6_9 = "src/z0/g6.js:catalog-row:009";
const g6_10 = "src/z0/g6.js:catalog-row:010";
const g6_11 = "src/z0/g6.js:catalog-row:011";
const g6_12 = "src/z0/g6.js:catalog-row:012";
const g6_13 = "src/z0/g6.js:catalog-row:013";
const g6_14 = "src/z0/g6.js:catalog-row:014";
const g6_15 = "src/z0/g6.js:catalog-row:015";
const g6_16 = "src/z0/g6.js:catalog-row:016";
const g6_17 = "src/z0/g6.js:catalog-row:017";
const g6_18 = "src/z0/g6.js:catalog-row:018";
const g6_19 = "src/z0/g6.js:catalog-row:019";
const g6_20 = "src/z0/g6.js:catalog-row:020";
const g6_21 = "src/z0/g6.js:catalog-row:021";
const g6_22 = "src/z0/g6.js:catalog-row:022";
const g6_23 = "src/z0/g6.js:catalog-row:023";
const g6_24 = "src/z0/g6.js:catalog-row:024";
const g6_25 = "src/z0/g6.js:catalog-row:025";
const g6_26 = "src/z0/g6.js:catalog-row:026";
const g6_27 = "src/z0/g6.js:catalog-row:027";
const g6_28 = "src/z0/g6.js:catalog-row:028";
const g6_29 = "src/z0/g6.js:catalog-row:029";
const g6_30 = "src/z0/g6.js:catalog-row:030";
const g6_31 = "src/z0/g6.js:catalog-row:031";
const g6_32 = "src/z0/g6.js:catalog-row:032";
const g6_33 = "src/z0/g6.js:catalog-row:033";
const g6_34 = "src/z0/g6.js:catalog-row:034";
const g6_35 = "src/z0/g6.js:catalog-row:035";
const g6_36 = "src/z0/g6.js:catalog-row:036";
const g6_37 = "src/z0/g6.js:catalog-row:037";
const g6_38 = "src/z0/g6.js:catalog-row:038";
const g6_39 = "src/z0/g6.js:catalog-row:039";
const g6_40 = "src/z0/g6.js:catalog-row:040";
const g6_41 = "src/z0/g6.js:catalog-row:041";
const g6_42 = "src/z0/g6.js:catalog-row:042";
const g6_43 = "src/z0/g6.js:catalog-row:043";
const g6_44 = "src/z0/g6.js:catalog-row:044";
const g6_45 = "src/z0/g6.js:catalog-row:045";
const g6_46 = "src/z0/g6.js:catalog-row:046";
const g6_47 = "src/z0/g6.js:catalog-row:047";
const g6_48 = "src/z0/g6.js:catalog-row:048";
const g6_49 = "src/z0/g6.js:catalog-row:049";
const g6_50 = "src/z0/g6.js:catalog-row:050";
const g6_51 = "src/z0/g6.js:catalog-row:051";
const g6_52 = "src/z0/g6.js:catalog-row:052";
const g6_53 = "src/z0/g6.js:catalog-row:053";
const g6_54 = "src/z0/g6.js:catalog-row:054";
const g6_55 = "src/z0/g6.js:catalog-row:055";
const g6_56 = "src/z0/g6.js:catalog-row:056";
const g6_57 = "src/z0/g6.js:catalog-row:057";
const g6_58 = "src/z0/g6.js:catalog-row:058";
const g6_59 = "src/z0/g6.js:catalog-row:059";
const g6_60 = "src/z0/g6.js:catalog-row:060";
const g6_61 = "src/z0/g6.js:catalog-row:061";
const g6_62 = "src/z0/g6.js:catalog-row:062";
const g6_63 = "src/z0/g6.js:catalog-row:063";
const g6_64 = "src/z0/g6.js:catalog-row:064";
const g6_65 = "src/z0/g6.js:catalog-row:065";
const g6_66 = "src/z0/g6.js:catalog-row:066";
const g6_67 = "src/z0/g6.js:catalog-row:067";
const g6_68 = "src/z0/g6.js:catalog-row:068";
const g6_69 = "src/z0/g6.js:catalog-row:069";
const g6_70 = "src/z0/g6.js:catalog-row:070";
const g6_71 = "src/z0/g6.js:catalog-row:071";
const g6_72 = "src/z0/g6.js:catalog-row:072";
const g6_73 = "src/z0/g6.js:catalog-row:073";
const g6_74 = "src/z0/g6.js:catalog-row:074";
const g6_75 = "src/z0/g6.js:catalog-row:075";
const g6_76 = "src/z0/g6.js:catalog-row:076";
const g6_77 = "src/z0/g6.js:catalog-row:077";
const g6_78 = "src/z0/g6.js:catalog-row:078";
const g6_79 = "src/z0/g6.js:catalog-row:079";
const g6_80 = "src/z0/g6.js:catalog-row:080";
const g6_81 = "src/z0/g6.js:catalog-row:081";
const g6_82 = "src/z0/g6.js:catalog-row:082";
const g6_83 = "src/z0/g6.js:catalog-row:083";
const g6_84 = "src/z0/g6.js:catalog-row:084";
const g6_85 = "src/z0/g6.js:catalog-row:085";
const g6_86 = "src/z0/g6.js:catalog-row:086";
const g6_87 = "src/z0/g6.js:catalog-row:087";
const g6_88 = "src/z0/g6.js:catalog-row:088";
const g6_89 = "src/z0/g6.js:catalog-row:089";
const g6_90 = "src/z0/g6.js:catalog-row:090";
const g6_91 = "src/z0/g6.js:catalog-row:091";
const g6_92 = "src/z0/g6.js:catalog-row:092";
const g6_93 = "src/z0/g6.js:catalog-row:093";
const g6_94 = "src/z0/g6.js:catalog-row:094";
const g6_95 = "src/z0/g6.js:catalog-row:095";
const g6_96 = "src/z0/g6.js:catalog-row:096";
const g6_97 = "src/z0/g6.js:catalog-row:097";
const g6_98 = "src/z0/g6.js:catalog-row:098";
const g6_99 = "src/z0/g6.js:catalog-row:099";
const g6_100 = "src/z0/g6.js:catalog-row:100";
const g6_101 = "src/z0/g6.js:catalog-row:101";
const g6_102 = "src/z0/g6.js:catalog-row:102";
const g6_103 = "src/z0/g6.js:catalog-row:103";
const g6_104 = "src/z0/g6.js:catalog-row:104";
const g6_105 = "src/z0/g6.js:catalog-row:105";
const g6_106 = "src/z0/g6.js:catalog-row:106";
const g6_107 = "src/z0/g6.js:catalog-row:107";
const g6_108 = "src/z0/g6.js:catalog-row:108";
const g6_109 = "src/z0/g6.js:catalog-row:109";
const g6_110 = "src/z0/g6.js:catalog-row:110";
const g6_111 = "src/z0/g6.js:catalog-row:111";
const g6_112 = "src/z0/g6.js:catalog-row:112";
const g6_113 = "src/z0/g6.js:catalog-row:113";
const g6_114 = "src/z0/g6.js:catalog-row:114";
const g6_115 = "src/z0/g6.js:catalog-row:115";
const g6_116 = "src/z0/g6.js:catalog-row:116";
const g6_117 = "src/z0/g6.js:catalog-row:117";
const g6_118 = "src/z0/g6.js:catalog-row:118";
const g6_119 = "src/z0/g6.js:catalog-row:119";
const g6_120 = "src/z0/g6.js:catalog-row:120";
const g6_121 = "src/z0/g6.js:catalog-row:121";
const g6_122 = "src/z0/g6.js:catalog-row:122";
const g6_123 = "src/z0/g6.js:catalog-row:123";
const g6_124 = "src/z0/g6.js:catalog-row:124";
const g6_125 = "src/z0/g6.js:catalog-row:125";
const g6_126 = "src/z0/g6.js:catalog-row:126";
const g6_127 = "src/z0/g6.js:catalog-row:127";
const g6_128 = "src/z0/g6.js:catalog-row:128";
const g6_129 = "src/z0/g6.js:catalog-row:129";
const g6_130 = "src/z0/g6.js:catalog-row:130";
const g6_131 = "src/z0/g6.js:catalog-row:131";
const g6_132 = "src/z0/g6.js:catalog-row:132";
const g6_133 = "src/z0/g6.js:catalog-row:133";
const g6_134 = "src/z0/g6.js:catalog-row:134";
const g6_135 = "src/z0/g6.js:catalog-row:135";
const g6_136 = "src/z0/g6.js:catalog-row:136";
const g6_137 = "src/z0/g6.js:catalog-row:137";
const g6_138 = "src/z0/g6.js:catalog-row:138";
const g6_139 = "src/z0/g6.js:catalog-row:139";
const g6_140 = "src/z0/g6.js:catalog-row:140";
const g6_141 = "src/z0/g6.js:catalog-row:141";
const g6_142 = "src/z0/g6.js:catalog-row:142";
const g6_143 = "src/z0/g6.js:catalog-row:143";
const g6_144 = "src/z0/g6.js:catalog-row:144";
const g6_145 = "src/z0/g6.js:catalog-row:145";
const g6_146 = "src/z0/g6.js:catalog-row:146";
const g6_147 = "src/z0/g6.js:catalog-row:147";
const g6_148 = "src/z0/g6.js:catalog-row:148";
const g6_149 = "src/z0/g6.js:catalog-row:149";
const g6_150 = "src/z0/g6.js:catalog-row:150";
const g6_151 = "src/z0/g6.js:catalog-row:151";
const g6_152 = "src/z0/g6.js:catalog-row:152";
const g6_153 = "src/z0/g6.js:catalog-row:153";
const g6_154 = "src/z0/g6.js:catalog-row:154";
const g6_155 = "src/z0/g6.js:catalog-row:155";
const g6_156 = "src/z0/g6.js:catalog-row:156";
const g6_157 = "src/z0/g6.js:catalog-row:157";
const g6_158 = "src/z0/g6.js:catalog-row:158";
const g6_159 = "src/z0/g6.js:catalog-row:159";
const g6_160 = "src/z0/g6.js:catalog-row:160";
const g6_161 = "src/z0/g6.js:catalog-row:161";
const g6_162 = "src/z0/g6.js:catalog-row:162";
const g6_163 = "src/z0/g6.js:catalog-row:163";
const g6_164 = "src/z0/g6.js:catalog-row:164";
const g6_165 = "src/z0/g6.js:catalog-row:165";
const g6_166 = "src/z0/g6.js:catalog-row:166";
const g6_167 = "src/z0/g6.js:catalog-row:167";
const g6_168 = "src/z0/g6.js:catalog-row:168";
const g6_169 = "src/z0/g6.js:catalog-row:169";
const g6_170 = "src/z0/g6.js:catalog-row:170";
const g6_171 = "src/z0/g6.js:catalog-row:171";
const g6_172 = "src/z0/g6.js:catalog-row:172";
const g6_173 = "src/z0/g6.js:catalog-row:173";
const g6_174 = "src/z0/g6.js:catalog-row:174";
const g6_175 = "src/z0/g6.js:catalog-row:175";
const g6_176 = "src/z0/g6.js:catalog-row:176";
const g6_177 = "src/z0/g6.js:catalog-row:177";
const g6_178 = "src/z0/g6.js:catalog-row:178";
const g6_179 = "src/z0/g6.js:catalog-row:179";
const g6_180 = "src/z0/g6.js:catalog-row:180";
const g6_181 = "src/z0/g6.js:catalog-row:181";
const g6_182 = "src/z0/g6.js:catalog-row:182";
const g6_183 = "src/z0/g6.js:catalog-row:183";
const g6_184 = "src/z0/g6.js:catalog-row:184";
const g6_185 = "src/z0/g6.js:catalog-row:185";
const g6_186 = "src/z0/g6.js:catalog-row:186";
const g6_187 = "src/z0/g6.js:catalog-row:187";
const g6_188 = "src/z0/g6.js:catalog-row:188";
const g6_189 = "src/z0/g6.js:catalog-row:189";
const g6_190 = "src/z0/g6.js:catalog-row:190";
const g6_191 = "src/z0/g6.js:catalog-row:191";
const g6_192 = "src/z0/g6.js:catalog-row:192";
const g6_193 = "src/z0/g6.js:catalog-row:193";
const g6_194 = "src/z0/g6.js:catalog-row:194";
const g6_195 = "src/z0/g6.js:catalog-row:195";
const g6_196 = "src/z0/g6.js:catalog-row:196";
const g6_197 = "src/z0/g6.js:catalog-row:197";
const g6_198 = "src/z0/g6.js:catalog-row:198";
