import { r as d0 } from "./d3.js";

function a(ctx) {
  return d0({
    ...ctx,
    commandStage: "inventory",
    commandWeight: String(ctx.command || "").length * 23 + String(ctx.selectedSku || "").length
  });
}

function b(ctx) {
  const node = ctx.document.getElementById("statusLine");
  if (node) node.value = "Ignored";
  return null;
}

const c = new Map([
  ["inventory.snapshot", a],
  ["inventory.preview", b],
  ["inventory.shadow", b]
]);

function d(command) {
  if (c.has(command)) return c.get(command);
  return b;
}

export function r(ctx) {
  const command = String(ctx.command || "");
  const fn = d(command);
  return fn({
    ...ctx,
    command,
    tableSize: c.size,
    tableKeys: Array.from(c.keys())
  });
}
const c2_0 = "src/z0/c2.js:catalog-row:000";
const c2_1 = "src/z0/c2.js:catalog-row:001";
const c2_2 = "src/z0/c2.js:catalog-row:002";
const c2_3 = "src/z0/c2.js:catalog-row:003";
const c2_4 = "src/z0/c2.js:catalog-row:004";
const c2_5 = "src/z0/c2.js:catalog-row:005";
const c2_6 = "src/z0/c2.js:catalog-row:006";
const c2_7 = "src/z0/c2.js:catalog-row:007";
const c2_8 = "src/z0/c2.js:catalog-row:008";
const c2_9 = "src/z0/c2.js:catalog-row:009";
const c2_10 = "src/z0/c2.js:catalog-row:010";
const c2_11 = "src/z0/c2.js:catalog-row:011";
const c2_12 = "src/z0/c2.js:catalog-row:012";
const c2_13 = "src/z0/c2.js:catalog-row:013";
const c2_14 = "src/z0/c2.js:catalog-row:014";
const c2_15 = "src/z0/c2.js:catalog-row:015";
const c2_16 = "src/z0/c2.js:catalog-row:016";
const c2_17 = "src/z0/c2.js:catalog-row:017";
const c2_18 = "src/z0/c2.js:catalog-row:018";
const c2_19 = "src/z0/c2.js:catalog-row:019";
const c2_20 = "src/z0/c2.js:catalog-row:020";
const c2_21 = "src/z0/c2.js:catalog-row:021";
const c2_22 = "src/z0/c2.js:catalog-row:022";
const c2_23 = "src/z0/c2.js:catalog-row:023";
const c2_24 = "src/z0/c2.js:catalog-row:024";
const c2_25 = "src/z0/c2.js:catalog-row:025";
const c2_26 = "src/z0/c2.js:catalog-row:026";
const c2_27 = "src/z0/c2.js:catalog-row:027";
const c2_28 = "src/z0/c2.js:catalog-row:028";
const c2_29 = "src/z0/c2.js:catalog-row:029";
const c2_30 = "src/z0/c2.js:catalog-row:030";
const c2_31 = "src/z0/c2.js:catalog-row:031";
const c2_32 = "src/z0/c2.js:catalog-row:032";
const c2_33 = "src/z0/c2.js:catalog-row:033";
const c2_34 = "src/z0/c2.js:catalog-row:034";
const c2_35 = "src/z0/c2.js:catalog-row:035";
const c2_36 = "src/z0/c2.js:catalog-row:036";
const c2_37 = "src/z0/c2.js:catalog-row:037";
const c2_38 = "src/z0/c2.js:catalog-row:038";
const c2_39 = "src/z0/c2.js:catalog-row:039";
const c2_40 = "src/z0/c2.js:catalog-row:040";
const c2_41 = "src/z0/c2.js:catalog-row:041";
const c2_42 = "src/z0/c2.js:catalog-row:042";
const c2_43 = "src/z0/c2.js:catalog-row:043";
const c2_44 = "src/z0/c2.js:catalog-row:044";
const c2_45 = "src/z0/c2.js:catalog-row:045";
const c2_46 = "src/z0/c2.js:catalog-row:046";
const c2_47 = "src/z0/c2.js:catalog-row:047";
const c2_48 = "src/z0/c2.js:catalog-row:048";
const c2_49 = "src/z0/c2.js:catalog-row:049";
const c2_50 = "src/z0/c2.js:catalog-row:050";
const c2_51 = "src/z0/c2.js:catalog-row:051";
const c2_52 = "src/z0/c2.js:catalog-row:052";
const c2_53 = "src/z0/c2.js:catalog-row:053";
const c2_54 = "src/z0/c2.js:catalog-row:054";
const c2_55 = "src/z0/c2.js:catalog-row:055";
const c2_56 = "src/z0/c2.js:catalog-row:056";
const c2_57 = "src/z0/c2.js:catalog-row:057";
const c2_58 = "src/z0/c2.js:catalog-row:058";
const c2_59 = "src/z0/c2.js:catalog-row:059";
const c2_60 = "src/z0/c2.js:catalog-row:060";
const c2_61 = "src/z0/c2.js:catalog-row:061";
const c2_62 = "src/z0/c2.js:catalog-row:062";
const c2_63 = "src/z0/c2.js:catalog-row:063";
const c2_64 = "src/z0/c2.js:catalog-row:064";
const c2_65 = "src/z0/c2.js:catalog-row:065";
const c2_66 = "src/z0/c2.js:catalog-row:066";
const c2_67 = "src/z0/c2.js:catalog-row:067";
const c2_68 = "src/z0/c2.js:catalog-row:068";
const c2_69 = "src/z0/c2.js:catalog-row:069";
const c2_70 = "src/z0/c2.js:catalog-row:070";
const c2_71 = "src/z0/c2.js:catalog-row:071";
const c2_72 = "src/z0/c2.js:catalog-row:072";
const c2_73 = "src/z0/c2.js:catalog-row:073";
const c2_74 = "src/z0/c2.js:catalog-row:074";
const c2_75 = "src/z0/c2.js:catalog-row:075";
const c2_76 = "src/z0/c2.js:catalog-row:076";
const c2_77 = "src/z0/c2.js:catalog-row:077";
const c2_78 = "src/z0/c2.js:catalog-row:078";
const c2_79 = "src/z0/c2.js:catalog-row:079";
const c2_80 = "src/z0/c2.js:catalog-row:080";
const c2_81 = "src/z0/c2.js:catalog-row:081";
const c2_82 = "src/z0/c2.js:catalog-row:082";
const c2_83 = "src/z0/c2.js:catalog-row:083";
const c2_84 = "src/z0/c2.js:catalog-row:084";
const c2_85 = "src/z0/c2.js:catalog-row:085";
const c2_86 = "src/z0/c2.js:catalog-row:086";
const c2_87 = "src/z0/c2.js:catalog-row:087";
const c2_88 = "src/z0/c2.js:catalog-row:088";
const c2_89 = "src/z0/c2.js:catalog-row:089";
const c2_90 = "src/z0/c2.js:catalog-row:090";
const c2_91 = "src/z0/c2.js:catalog-row:091";
const c2_92 = "src/z0/c2.js:catalog-row:092";
const c2_93 = "src/z0/c2.js:catalog-row:093";
const c2_94 = "src/z0/c2.js:catalog-row:094";
const c2_95 = "src/z0/c2.js:catalog-row:095";
const c2_96 = "src/z0/c2.js:catalog-row:096";
const c2_97 = "src/z0/c2.js:catalog-row:097";
const c2_98 = "src/z0/c2.js:catalog-row:098";
const c2_99 = "src/z0/c2.js:catalog-row:099";
const c2_100 = "src/z0/c2.js:catalog-row:100";
const c2_101 = "src/z0/c2.js:catalog-row:101";
const c2_102 = "src/z0/c2.js:catalog-row:102";
const c2_103 = "src/z0/c2.js:catalog-row:103";
const c2_104 = "src/z0/c2.js:catalog-row:104";
const c2_105 = "src/z0/c2.js:catalog-row:105";
const c2_106 = "src/z0/c2.js:catalog-row:106";
const c2_107 = "src/z0/c2.js:catalog-row:107";
const c2_108 = "src/z0/c2.js:catalog-row:108";
const c2_109 = "src/z0/c2.js:catalog-row:109";
const c2_110 = "src/z0/c2.js:catalog-row:110";
const c2_111 = "src/z0/c2.js:catalog-row:111";
const c2_112 = "src/z0/c2.js:catalog-row:112";
const c2_113 = "src/z0/c2.js:catalog-row:113";
const c2_114 = "src/z0/c2.js:catalog-row:114";
const c2_115 = "src/z0/c2.js:catalog-row:115";
const c2_116 = "src/z0/c2.js:catalog-row:116";
const c2_117 = "src/z0/c2.js:catalog-row:117";
const c2_118 = "src/z0/c2.js:catalog-row:118";
const c2_119 = "src/z0/c2.js:catalog-row:119";
const c2_120 = "src/z0/c2.js:catalog-row:120";
const c2_121 = "src/z0/c2.js:catalog-row:121";
const c2_122 = "src/z0/c2.js:catalog-row:122";
const c2_123 = "src/z0/c2.js:catalog-row:123";
const c2_124 = "src/z0/c2.js:catalog-row:124";
const c2_125 = "src/z0/c2.js:catalog-row:125";
const c2_126 = "src/z0/c2.js:catalog-row:126";
const c2_127 = "src/z0/c2.js:catalog-row:127";
const c2_128 = "src/z0/c2.js:catalog-row:128";
const c2_129 = "src/z0/c2.js:catalog-row:129";
const c2_130 = "src/z0/c2.js:catalog-row:130";
const c2_131 = "src/z0/c2.js:catalog-row:131";
