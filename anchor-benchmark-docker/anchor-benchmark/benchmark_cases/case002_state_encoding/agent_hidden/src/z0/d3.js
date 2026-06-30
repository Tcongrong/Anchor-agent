import { r as e0 } from "./e4.js";

function a(ctx) {
  const sequence = [
    { lane: 0, key: "zone" },
    { lane: 1, key: "window" },
    { lane: 2, key: "batch" },
    { lane: 3, key: "hold" },
    { lane: 4, key: "item" },
    { lane: 5, key: "snapshot" }
  ];
  return sequence.map((item, index) => ({
    ...item,
    weight: (ctx.commandWeight || 0) + index * 19 + String(ctx.selectedSku || "").length
  }));
}

function b(ctx) {
  const lanes = a(ctx);
  const chosen = lanes.find((item) => item.key === "snapshot") || lanes[0];
  return {
    ...ctx,
    lanes,
    chosenLane: chosen,
    laneMatrixTicket: lanes.reduce((sum, item) => sum ^ item.weight ^ item.lane, 0),
    multiplexTicket: lanes.reduce((sum, item) => sum ^ item.weight ^ (item.lane << 2), 0)
  };
}

export function r(ctx) {
  return e0(b({
    ...ctx,
    route: [...(ctx.route || []), 7],
    routeLabels: [...(ctx.routeLabels || []), "lane-matrix"]
  }));
}
const d3_0 = "src/z0/d3.js:catalog-row:000";
const d3_1 = "src/z0/d3.js:catalog-row:001";
const d3_2 = "src/z0/d3.js:catalog-row:002";
const d3_3 = "src/z0/d3.js:catalog-row:003";
const d3_4 = "src/z0/d3.js:catalog-row:004";
const d3_5 = "src/z0/d3.js:catalog-row:005";
const d3_6 = "src/z0/d3.js:catalog-row:006";
const d3_7 = "src/z0/d3.js:catalog-row:007";
const d3_8 = "src/z0/d3.js:catalog-row:008";
const d3_9 = "src/z0/d3.js:catalog-row:009";
const d3_10 = "src/z0/d3.js:catalog-row:010";
const d3_11 = "src/z0/d3.js:catalog-row:011";
const d3_12 = "src/z0/d3.js:catalog-row:012";
const d3_13 = "src/z0/d3.js:catalog-row:013";
const d3_14 = "src/z0/d3.js:catalog-row:014";
const d3_15 = "src/z0/d3.js:catalog-row:015";
const d3_16 = "src/z0/d3.js:catalog-row:016";
const d3_17 = "src/z0/d3.js:catalog-row:017";
const d3_18 = "src/z0/d3.js:catalog-row:018";
const d3_19 = "src/z0/d3.js:catalog-row:019";
const d3_20 = "src/z0/d3.js:catalog-row:020";
const d3_21 = "src/z0/d3.js:catalog-row:021";
const d3_22 = "src/z0/d3.js:catalog-row:022";
const d3_23 = "src/z0/d3.js:catalog-row:023";
const d3_24 = "src/z0/d3.js:catalog-row:024";
const d3_25 = "src/z0/d3.js:catalog-row:025";
const d3_26 = "src/z0/d3.js:catalog-row:026";
const d3_27 = "src/z0/d3.js:catalog-row:027";
const d3_28 = "src/z0/d3.js:catalog-row:028";
const d3_29 = "src/z0/d3.js:catalog-row:029";
const d3_30 = "src/z0/d3.js:catalog-row:030";
const d3_31 = "src/z0/d3.js:catalog-row:031";
const d3_32 = "src/z0/d3.js:catalog-row:032";
const d3_33 = "src/z0/d3.js:catalog-row:033";
const d3_34 = "src/z0/d3.js:catalog-row:034";
const d3_35 = "src/z0/d3.js:catalog-row:035";
const d3_36 = "src/z0/d3.js:catalog-row:036";
const d3_37 = "src/z0/d3.js:catalog-row:037";
const d3_38 = "src/z0/d3.js:catalog-row:038";
const d3_39 = "src/z0/d3.js:catalog-row:039";
const d3_40 = "src/z0/d3.js:catalog-row:040";
const d3_41 = "src/z0/d3.js:catalog-row:041";
const d3_42 = "src/z0/d3.js:catalog-row:042";
const d3_43 = "src/z0/d3.js:catalog-row:043";
const d3_44 = "src/z0/d3.js:catalog-row:044";
const d3_45 = "src/z0/d3.js:catalog-row:045";
const d3_46 = "src/z0/d3.js:catalog-row:046";
const d3_47 = "src/z0/d3.js:catalog-row:047";
const d3_48 = "src/z0/d3.js:catalog-row:048";
const d3_49 = "src/z0/d3.js:catalog-row:049";
const d3_50 = "src/z0/d3.js:catalog-row:050";
const d3_51 = "src/z0/d3.js:catalog-row:051";
const d3_52 = "src/z0/d3.js:catalog-row:052";
const d3_53 = "src/z0/d3.js:catalog-row:053";
const d3_54 = "src/z0/d3.js:catalog-row:054";
const d3_55 = "src/z0/d3.js:catalog-row:055";
const d3_56 = "src/z0/d3.js:catalog-row:056";
const d3_57 = "src/z0/d3.js:catalog-row:057";
const d3_58 = "src/z0/d3.js:catalog-row:058";
const d3_59 = "src/z0/d3.js:catalog-row:059";
const d3_60 = "src/z0/d3.js:catalog-row:060";
const d3_61 = "src/z0/d3.js:catalog-row:061";
const d3_62 = "src/z0/d3.js:catalog-row:062";
const d3_63 = "src/z0/d3.js:catalog-row:063";
const d3_64 = "src/z0/d3.js:catalog-row:064";
const d3_65 = "src/z0/d3.js:catalog-row:065";
const d3_66 = "src/z0/d3.js:catalog-row:066";
const d3_67 = "src/z0/d3.js:catalog-row:067";
const d3_68 = "src/z0/d3.js:catalog-row:068";
const d3_69 = "src/z0/d3.js:catalog-row:069";
const d3_70 = "src/z0/d3.js:catalog-row:070";
const d3_71 = "src/z0/d3.js:catalog-row:071";
const d3_72 = "src/z0/d3.js:catalog-row:072";
const d3_73 = "src/z0/d3.js:catalog-row:073";
const d3_74 = "src/z0/d3.js:catalog-row:074";
const d3_75 = "src/z0/d3.js:catalog-row:075";
const d3_76 = "src/z0/d3.js:catalog-row:076";
const d3_77 = "src/z0/d3.js:catalog-row:077";
const d3_78 = "src/z0/d3.js:catalog-row:078";
const d3_79 = "src/z0/d3.js:catalog-row:079";
const d3_80 = "src/z0/d3.js:catalog-row:080";
const d3_81 = "src/z0/d3.js:catalog-row:081";
const d3_82 = "src/z0/d3.js:catalog-row:082";
const d3_83 = "src/z0/d3.js:catalog-row:083";
const d3_84 = "src/z0/d3.js:catalog-row:084";
const d3_85 = "src/z0/d3.js:catalog-row:085";
const d3_86 = "src/z0/d3.js:catalog-row:086";
const d3_87 = "src/z0/d3.js:catalog-row:087";
const d3_88 = "src/z0/d3.js:catalog-row:088";
const d3_89 = "src/z0/d3.js:catalog-row:089";
const d3_90 = "src/z0/d3.js:catalog-row:090";
const d3_91 = "src/z0/d3.js:catalog-row:091";
const d3_92 = "src/z0/d3.js:catalog-row:092";
const d3_93 = "src/z0/d3.js:catalog-row:093";
const d3_94 = "src/z0/d3.js:catalog-row:094";
const d3_95 = "src/z0/d3.js:catalog-row:095";
const d3_96 = "src/z0/d3.js:catalog-row:096";
const d3_97 = "src/z0/d3.js:catalog-row:097";
const d3_98 = "src/z0/d3.js:catalog-row:098";
const d3_99 = "src/z0/d3.js:catalog-row:099";
const d3_100 = "src/z0/d3.js:catalog-row:100";
const d3_101 = "src/z0/d3.js:catalog-row:101";
const d3_102 = "src/z0/d3.js:catalog-row:102";
const d3_103 = "src/z0/d3.js:catalog-row:103";
const d3_104 = "src/z0/d3.js:catalog-row:104";
const d3_105 = "src/z0/d3.js:catalog-row:105";
const d3_106 = "src/z0/d3.js:catalog-row:106";
const d3_107 = "src/z0/d3.js:catalog-row:107";
const d3_108 = "src/z0/d3.js:catalog-row:108";
const d3_109 = "src/z0/d3.js:catalog-row:109";
const d3_110 = "src/z0/d3.js:catalog-row:110";
const d3_111 = "src/z0/d3.js:catalog-row:111";
const d3_112 = "src/z0/d3.js:catalog-row:112";
const d3_113 = "src/z0/d3.js:catalog-row:113";
const d3_114 = "src/z0/d3.js:catalog-row:114";
const d3_115 = "src/z0/d3.js:catalog-row:115";
const d3_116 = "src/z0/d3.js:catalog-row:116";
const d3_117 = "src/z0/d3.js:catalog-row:117";
const d3_118 = "src/z0/d3.js:catalog-row:118";
const d3_119 = "src/z0/d3.js:catalog-row:119";
const d3_120 = "src/z0/d3.js:catalog-row:120";
const d3_121 = "src/z0/d3.js:catalog-row:121";
const d3_122 = "src/z0/d3.js:catalog-row:122";
const d3_123 = "src/z0/d3.js:catalog-row:123";
const d3_124 = "src/z0/d3.js:catalog-row:124";
const d3_125 = "src/z0/d3.js:catalog-row:125";
const d3_126 = "src/z0/d3.js:catalog-row:126";
const d3_127 = "src/z0/d3.js:catalog-row:127";
const d3_128 = "src/z0/d3.js:catalog-row:128";
const d3_129 = "src/z0/d3.js:catalog-row:129";
const d3_130 = "src/z0/d3.js:catalog-row:130";
const d3_131 = "src/z0/d3.js:catalog-row:131";
const d3_132 = "src/z0/d3.js:catalog-row:132";
const d3_133 = "src/z0/d3.js:catalog-row:133";
const d3_134 = "src/z0/d3.js:catalog-row:134";
const d3_135 = "src/z0/d3.js:catalog-row:135";
const d3_136 = "src/z0/d3.js:catalog-row:136";
const d3_137 = "src/z0/d3.js:catalog-row:137";
const d3_138 = "src/z0/d3.js:catalog-row:138";
const d3_139 = "src/z0/d3.js:catalog-row:139";
const d3_140 = "src/z0/d3.js:catalog-row:140";
const d3_141 = "src/z0/d3.js:catalog-row:141";
const d3_142 = "src/z0/d3.js:catalog-row:142";
const d3_143 = "src/z0/d3.js:catalog-row:143";
const d3_144 = "src/z0/d3.js:catalog-row:144";
const d3_145 = "src/z0/d3.js:catalog-row:145";
const d3_146 = "src/z0/d3.js:catalog-row:146";
const d3_147 = "src/z0/d3.js:catalog-row:147";
const d3_148 = "src/z0/d3.js:catalog-row:148";
const d3_149 = "src/z0/d3.js:catalog-row:149";
const d3_150 = "src/z0/d3.js:catalog-row:150";
const d3_151 = "src/z0/d3.js:catalog-row:151";
const d3_152 = "src/z0/d3.js:catalog-row:152";
const d3_153 = "src/z0/d3.js:catalog-row:153";
const d3_154 = "src/z0/d3.js:catalog-row:154";
const d3_155 = "src/z0/d3.js:catalog-row:155";
