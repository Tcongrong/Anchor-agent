import { r as f0 } from "./f5.js";

function a(doc, selector) {
  return doc.querySelector(selector);
}

function b(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function c(value) {
  const allowed = new Set(["now", "hold", "replenish", "audit"]);
  const text = String(value || "now");
  return allowed.has(text) ? text : "now";
}

function d(value) {
  const number = Number.parseInt(String(value || "0"), 10);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(99, number));
}

function e(doc) {
  const root = doc.documentElement.dataset;
  const sku = root.selectedSku || "bin-104";
  const lane = root.selectedLane || "ambient";
  return { sku, lane };
}

function f(doc) {
  const zoneNode = a(doc, "#zoneInput");
  const windowNode = a(doc, "#windowSelect");
  const batchNode = a(doc, "#batchCount");
  const holdNode = a(doc, "#sealHold");
  const rawZone = zoneNode ? zoneNode.value : "";
  const rawWindow = windowNode ? windowNode.value : "now";
  const batchCount = d(batchNode ? batchNode.value : "0");
  const holdEnabled = holdNode ? Boolean(holdNode.checked) : false;
  const picked = e(doc);
  return {
    rawZone,
    zone: b(rawZone),
    windowMode: c(rawWindow),
    batchCount,
    holdEnabled,
    holdFlag: holdEnabled ? "1" : "0",
    selectedSku: picked.sku,
    selectedLane: picked.lane,
    namespace: "northline.inventory.snapshot",
    version: "v3",
    formId: "inventory-board"
  };
}

function g(surface) {
  const tokens = (surface.zone + " " + surface.selectedSku).split(" ").filter(Boolean);
  const priority = (surface.batchCount + tokens.length + (surface.holdEnabled ? 5 : 0)).toString(36);
  return {
    ...surface,
    tokens,
    priority,
    tokenCount: tokens.length,
    zoneLength: surface.zone.length,
    windowLength: surface.windowMode.length,
    holdLength: surface.holdFlag.length,
    skuLength: surface.selectedSku.length,
    laneLength: surface.selectedLane.length
  };
}

export function r(ctx) {
  const surface = g(f(ctx.document));
  const node = ctx.document.getElementById("statusLine");
  if (node) node.value = "Reading board";
  return f0({
    ...ctx,
    surface,
    route: [...(ctx.route || []), 14],
    routeLabels: [...(ctx.routeLabels || []), "board-surface"]
  });
}
const e4_0 = "src/z0/e4.js:catalog-row:000";
const e4_1 = "src/z0/e4.js:catalog-row:001";
const e4_2 = "src/z0/e4.js:catalog-row:002";
const e4_3 = "src/z0/e4.js:catalog-row:003";
const e4_4 = "src/z0/e4.js:catalog-row:004";
const e4_5 = "src/z0/e4.js:catalog-row:005";
const e4_6 = "src/z0/e4.js:catalog-row:006";
const e4_7 = "src/z0/e4.js:catalog-row:007";
const e4_8 = "src/z0/e4.js:catalog-row:008";
const e4_9 = "src/z0/e4.js:catalog-row:009";
const e4_10 = "src/z0/e4.js:catalog-row:010";
const e4_11 = "src/z0/e4.js:catalog-row:011";
const e4_12 = "src/z0/e4.js:catalog-row:012";
const e4_13 = "src/z0/e4.js:catalog-row:013";
const e4_14 = "src/z0/e4.js:catalog-row:014";
const e4_15 = "src/z0/e4.js:catalog-row:015";
const e4_16 = "src/z0/e4.js:catalog-row:016";
const e4_17 = "src/z0/e4.js:catalog-row:017";
const e4_18 = "src/z0/e4.js:catalog-row:018";
const e4_19 = "src/z0/e4.js:catalog-row:019";
const e4_20 = "src/z0/e4.js:catalog-row:020";
const e4_21 = "src/z0/e4.js:catalog-row:021";
const e4_22 = "src/z0/e4.js:catalog-row:022";
const e4_23 = "src/z0/e4.js:catalog-row:023";
const e4_24 = "src/z0/e4.js:catalog-row:024";
const e4_25 = "src/z0/e4.js:catalog-row:025";
const e4_26 = "src/z0/e4.js:catalog-row:026";
const e4_27 = "src/z0/e4.js:catalog-row:027";
const e4_28 = "src/z0/e4.js:catalog-row:028";
const e4_29 = "src/z0/e4.js:catalog-row:029";
const e4_30 = "src/z0/e4.js:catalog-row:030";
const e4_31 = "src/z0/e4.js:catalog-row:031";
const e4_32 = "src/z0/e4.js:catalog-row:032";
const e4_33 = "src/z0/e4.js:catalog-row:033";
const e4_34 = "src/z0/e4.js:catalog-row:034";
const e4_35 = "src/z0/e4.js:catalog-row:035";
const e4_36 = "src/z0/e4.js:catalog-row:036";
const e4_37 = "src/z0/e4.js:catalog-row:037";
const e4_38 = "src/z0/e4.js:catalog-row:038";
const e4_39 = "src/z0/e4.js:catalog-row:039";
const e4_40 = "src/z0/e4.js:catalog-row:040";
const e4_41 = "src/z0/e4.js:catalog-row:041";
const e4_42 = "src/z0/e4.js:catalog-row:042";
const e4_43 = "src/z0/e4.js:catalog-row:043";
const e4_44 = "src/z0/e4.js:catalog-row:044";
const e4_45 = "src/z0/e4.js:catalog-row:045";
const e4_46 = "src/z0/e4.js:catalog-row:046";
const e4_47 = "src/z0/e4.js:catalog-row:047";
const e4_48 = "src/z0/e4.js:catalog-row:048";
const e4_49 = "src/z0/e4.js:catalog-row:049";
const e4_50 = "src/z0/e4.js:catalog-row:050";
const e4_51 = "src/z0/e4.js:catalog-row:051";
const e4_52 = "src/z0/e4.js:catalog-row:052";
const e4_53 = "src/z0/e4.js:catalog-row:053";
const e4_54 = "src/z0/e4.js:catalog-row:054";
const e4_55 = "src/z0/e4.js:catalog-row:055";
const e4_56 = "src/z0/e4.js:catalog-row:056";
const e4_57 = "src/z0/e4.js:catalog-row:057";
const e4_58 = "src/z0/e4.js:catalog-row:058";
const e4_59 = "src/z0/e4.js:catalog-row:059";
const e4_60 = "src/z0/e4.js:catalog-row:060";
const e4_61 = "src/z0/e4.js:catalog-row:061";
const e4_62 = "src/z0/e4.js:catalog-row:062";
const e4_63 = "src/z0/e4.js:catalog-row:063";
const e4_64 = "src/z0/e4.js:catalog-row:064";
const e4_65 = "src/z0/e4.js:catalog-row:065";
const e4_66 = "src/z0/e4.js:catalog-row:066";
const e4_67 = "src/z0/e4.js:catalog-row:067";
const e4_68 = "src/z0/e4.js:catalog-row:068";
const e4_69 = "src/z0/e4.js:catalog-row:069";
const e4_70 = "src/z0/e4.js:catalog-row:070";
const e4_71 = "src/z0/e4.js:catalog-row:071";
const e4_72 = "src/z0/e4.js:catalog-row:072";
const e4_73 = "src/z0/e4.js:catalog-row:073";
const e4_74 = "src/z0/e4.js:catalog-row:074";
const e4_75 = "src/z0/e4.js:catalog-row:075";
const e4_76 = "src/z0/e4.js:catalog-row:076";
const e4_77 = "src/z0/e4.js:catalog-row:077";
const e4_78 = "src/z0/e4.js:catalog-row:078";
const e4_79 = "src/z0/e4.js:catalog-row:079";
const e4_80 = "src/z0/e4.js:catalog-row:080";
const e4_81 = "src/z0/e4.js:catalog-row:081";
const e4_82 = "src/z0/e4.js:catalog-row:082";
const e4_83 = "src/z0/e4.js:catalog-row:083";
const e4_84 = "src/z0/e4.js:catalog-row:084";
const e4_85 = "src/z0/e4.js:catalog-row:085";
const e4_86 = "src/z0/e4.js:catalog-row:086";
const e4_87 = "src/z0/e4.js:catalog-row:087";
const e4_88 = "src/z0/e4.js:catalog-row:088";
const e4_89 = "src/z0/e4.js:catalog-row:089";
const e4_90 = "src/z0/e4.js:catalog-row:090";
const e4_91 = "src/z0/e4.js:catalog-row:091";
const e4_92 = "src/z0/e4.js:catalog-row:092";
const e4_93 = "src/z0/e4.js:catalog-row:093";
const e4_94 = "src/z0/e4.js:catalog-row:094";
const e4_95 = "src/z0/e4.js:catalog-row:095";
const e4_96 = "src/z0/e4.js:catalog-row:096";
const e4_97 = "src/z0/e4.js:catalog-row:097";
const e4_98 = "src/z0/e4.js:catalog-row:098";
const e4_99 = "src/z0/e4.js:catalog-row:099";
const e4_100 = "src/z0/e4.js:catalog-row:100";
const e4_101 = "src/z0/e4.js:catalog-row:101";
const e4_102 = "src/z0/e4.js:catalog-row:102";
const e4_103 = "src/z0/e4.js:catalog-row:103";
const e4_104 = "src/z0/e4.js:catalog-row:104";
const e4_105 = "src/z0/e4.js:catalog-row:105";
const e4_106 = "src/z0/e4.js:catalog-row:106";
const e4_107 = "src/z0/e4.js:catalog-row:107";
const e4_108 = "src/z0/e4.js:catalog-row:108";
const e4_109 = "src/z0/e4.js:catalog-row:109";
const e4_110 = "src/z0/e4.js:catalog-row:110";
const e4_111 = "src/z0/e4.js:catalog-row:111";
const e4_112 = "src/z0/e4.js:catalog-row:112";
const e4_113 = "src/z0/e4.js:catalog-row:113";
const e4_114 = "src/z0/e4.js:catalog-row:114";
const e4_115 = "src/z0/e4.js:catalog-row:115";
const e4_116 = "src/z0/e4.js:catalog-row:116";
const e4_117 = "src/z0/e4.js:catalog-row:117";
const e4_118 = "src/z0/e4.js:catalog-row:118";
const e4_119 = "src/z0/e4.js:catalog-row:119";
const e4_120 = "src/z0/e4.js:catalog-row:120";
const e4_121 = "src/z0/e4.js:catalog-row:121";
const e4_122 = "src/z0/e4.js:catalog-row:122";
const e4_123 = "src/z0/e4.js:catalog-row:123";
const e4_124 = "src/z0/e4.js:catalog-row:124";
const e4_125 = "src/z0/e4.js:catalog-row:125";
const e4_126 = "src/z0/e4.js:catalog-row:126";
const e4_127 = "src/z0/e4.js:catalog-row:127";
const e4_128 = "src/z0/e4.js:catalog-row:128";
const e4_129 = "src/z0/e4.js:catalog-row:129";
const e4_130 = "src/z0/e4.js:catalog-row:130";
const e4_131 = "src/z0/e4.js:catalog-row:131";
const e4_132 = "src/z0/e4.js:catalog-row:132";
const e4_133 = "src/z0/e4.js:catalog-row:133";
const e4_134 = "src/z0/e4.js:catalog-row:134";
const e4_135 = "src/z0/e4.js:catalog-row:135";
const e4_136 = "src/z0/e4.js:catalog-row:136";
const e4_137 = "src/z0/e4.js:catalog-row:137";
const e4_138 = "src/z0/e4.js:catalog-row:138";
const e4_139 = "src/z0/e4.js:catalog-row:139";
const e4_140 = "src/z0/e4.js:catalog-row:140";
const e4_141 = "src/z0/e4.js:catalog-row:141";
const e4_142 = "src/z0/e4.js:catalog-row:142";
const e4_143 = "src/z0/e4.js:catalog-row:143";
const e4_144 = "src/z0/e4.js:catalog-row:144";
const e4_145 = "src/z0/e4.js:catalog-row:145";
const e4_146 = "src/z0/e4.js:catalog-row:146";
const e4_147 = "src/z0/e4.js:catalog-row:147";
const e4_148 = "src/z0/e4.js:catalog-row:148";
const e4_149 = "src/z0/e4.js:catalog-row:149";
const e4_150 = "src/z0/e4.js:catalog-row:150";
const e4_151 = "src/z0/e4.js:catalog-row:151";
const e4_152 = "src/z0/e4.js:catalog-row:152";
const e4_153 = "src/z0/e4.js:catalog-row:153";
const e4_154 = "src/z0/e4.js:catalog-row:154";
const e4_155 = "src/z0/e4.js:catalog-row:155";
const e4_156 = "src/z0/e4.js:catalog-row:156";
const e4_157 = "src/z0/e4.js:catalog-row:157";
const e4_158 = "src/z0/e4.js:catalog-row:158";
const e4_159 = "src/z0/e4.js:catalog-row:159";
const e4_160 = "src/z0/e4.js:catalog-row:160";
const e4_161 = "src/z0/e4.js:catalog-row:161";
const e4_162 = "src/z0/e4.js:catalog-row:162";
const e4_163 = "src/z0/e4.js:catalog-row:163";
const e4_164 = "src/z0/e4.js:catalog-row:164";
const e4_165 = "src/z0/e4.js:catalog-row:165";
const e4_166 = "src/z0/e4.js:catalog-row:166";
const e4_167 = "src/z0/e4.js:catalog-row:167";
const e4_168 = "src/z0/e4.js:catalog-row:168";
const e4_169 = "src/z0/e4.js:catalog-row:169";
const e4_170 = "src/z0/e4.js:catalog-row:170";
const e4_171 = "src/z0/e4.js:catalog-row:171";
const e4_172 = "src/z0/e4.js:catalog-row:172";
const e4_173 = "src/z0/e4.js:catalog-row:173";
const e4_174 = "src/z0/e4.js:catalog-row:174";
const e4_175 = "src/z0/e4.js:catalog-row:175";
const e4_176 = "src/z0/e4.js:catalog-row:176";
const e4_177 = "src/z0/e4.js:catalog-row:177";
const e4_178 = "src/z0/e4.js:catalog-row:178";
const e4_179 = "src/z0/e4.js:catalog-row:179";
const e4_180 = "src/z0/e4.js:catalog-row:180";
const e4_181 = "src/z0/e4.js:catalog-row:181";
const e4_182 = "src/z0/e4.js:catalog-row:182";
const e4_183 = "src/z0/e4.js:catalog-row:183";
const e4_184 = "src/z0/e4.js:catalog-row:184";
const e4_185 = "src/z0/e4.js:catalog-row:185";
const e4_186 = "src/z0/e4.js:catalog-row:186";
const e4_187 = "src/z0/e4.js:catalog-row:187";
const e4_188 = "src/z0/e4.js:catalog-row:188";
const e4_189 = "src/z0/e4.js:catalog-row:189";
const e4_190 = "src/z0/e4.js:catalog-row:190";
const e4_191 = "src/z0/e4.js:catalog-row:191";
const e4_192 = "src/z0/e4.js:catalog-row:192";
const e4_193 = "src/z0/e4.js:catalog-row:193";
const e4_194 = "src/z0/e4.js:catalog-row:194";
const e4_195 = "src/z0/e4.js:catalog-row:195";
const e4_196 = "src/z0/e4.js:catalog-row:196";
const e4_197 = "src/z0/e4.js:catalog-row:197";
