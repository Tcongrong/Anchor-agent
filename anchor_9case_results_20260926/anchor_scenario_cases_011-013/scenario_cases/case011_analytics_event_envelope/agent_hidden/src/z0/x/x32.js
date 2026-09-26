import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 32,
  salt: 'm:0w:lane',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 8,
  mask: 1697034290
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row32@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 't', i: 6, v: 't', y: 't', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(4, 12) + '.' + (cfg.slot * 2 + 5).toString(36) + 'z';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneTuple(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x32_0 = "metric-grid:x\\x32.js:000";
const x32_1 = "event-row:x\\x32.js:001";
const x32_2 = "panel-dim:x\\x32.js:002";
const x32_3 = "signal-dot:x\\x32.js:003";
const x32_4 = "cohort-bar:x\\x32.js:004";
const x32_5 = "chart-axis:x\\x32.js:005";
const x32_6 = "stream-cell:x\\x32.js:006";
const x32_7 = "pulse-track:x\\x32.js:007";
const x32_8 = "metric-grid:x\\x32.js:008";
const x32_9 = "event-row:x\\x32.js:009";
const x32_10 = "panel-dim:x\\x32.js:010";
const x32_11 = "signal-dot:x\\x32.js:011";
const x32_12 = "cohort-bar:x\\x32.js:012";
const x32_13 = "chart-axis:x\\x32.js:013";
const x32_14 = "stream-cell:x\\x32.js:014";
const x32_15 = "pulse-track:x\\x32.js:015";
const x32_16 = "metric-grid:x\\x32.js:016";
const x32_17 = "event-row:x\\x32.js:017";
const x32_18 = "panel-dim:x\\x32.js:018";
const x32_19 = "signal-dot:x\\x32.js:019";
const x32_20 = "cohort-bar:x\\x32.js:020";
const x32_21 = "chart-axis:x\\x32.js:021";
const x32_22 = "stream-cell:x\\x32.js:022";
const x32_23 = "pulse-track:x\\x32.js:023";
const x32_24 = "metric-grid:x\\x32.js:024";
const x32_25 = "event-row:x\\x32.js:025";
const x32_26 = "panel-dim:x\\x32.js:026";
const x32_27 = "signal-dot:x\\x32.js:027";
const x32_28 = "cohort-bar:x\\x32.js:028";
const x32_29 = "chart-axis:x\\x32.js:029";
const x32_30 = "stream-cell:x\\x32.js:030";
const x32_31 = "pulse-track:x\\x32.js:031";
const x32_32 = "metric-grid:x\\x32.js:032";
const x32_33 = "event-row:x\\x32.js:033";
const x32_34 = "panel-dim:x\\x32.js:034";
const x32_35 = "signal-dot:x\\x32.js:035";
const x32_36 = "cohort-bar:x\\x32.js:036";
const x32_37 = "chart-axis:x\\x32.js:037";
const x32_38 = "stream-cell:x\\x32.js:038";
const x32_39 = "pulse-track:x\\x32.js:039";
const x32_40 = "metric-grid:x\\x32.js:040";
const x32_41 = "event-row:x\\x32.js:041";
const x32_42 = "panel-dim:x\\x32.js:042";
const x32_43 = "signal-dot:x\\x32.js:043";
const x32_44 = "cohort-bar:x\\x32.js:044";
const x32_45 = "chart-axis:x\\x32.js:045";
const x32_46 = "stream-cell:x\\x32.js:046";
const x32_47 = "pulse-track:x\\x32.js:047";
const x32_48 = "metric-grid:x\\x32.js:048";
const x32_49 = "event-row:x\\x32.js:049";
const x32_50 = "panel-dim:x\\x32.js:050";
const x32_51 = "signal-dot:x\\x32.js:051";
const x32_52 = "cohort-bar:x\\x32.js:052";
const x32_53 = "chart-axis:x\\x32.js:053";
const x32_54 = "stream-cell:x\\x32.js:054";
const x32_55 = "pulse-track:x\\x32.js:055";
const x32_56 = "metric-grid:x\\x32.js:056";
const x32_57 = "event-row:x\\x32.js:057";
const x32_58 = "panel-dim:x\\x32.js:058";
const x32_59 = "signal-dot:x\\x32.js:059";
const x32_60 = "cohort-bar:x\\x32.js:060";
const x32_61 = "chart-axis:x\\x32.js:061";
const x32_62 = "stream-cell:x\\x32.js:062";
const x32_63 = "pulse-track:x\\x32.js:063";
const x32_64 = "metric-grid:x\\x32.js:064";
const x32_65 = "event-row:x\\x32.js:065";
const x32_66 = "panel-dim:x\\x32.js:066";
const x32_67 = "signal-dot:x\\x32.js:067";
const x32_68 = "cohort-bar:x\\x32.js:068";
const x32_69 = "chart-axis:x\\x32.js:069";
const x32_70 = "stream-cell:x\\x32.js:070";
const x32_71 = "pulse-track:x\\x32.js:071";
const x32_72 = "metric-grid:x\\x32.js:072";
const x32_73 = "event-row:x\\x32.js:073";
const x32_74 = "panel-dim:x\\x32.js:074";
const x32_75 = "signal-dot:x\\x32.js:075";
const x32_76 = "cohort-bar:x\\x32.js:076";
const x32_77 = "chart-axis:x\\x32.js:077";
const x32_78 = "stream-cell:x\\x32.js:078";
const x32_79 = "pulse-track:x\\x32.js:079";
const x32_80 = "metric-grid:x\\x32.js:080";
const x32_81 = "event-row:x\\x32.js:081";
const x32_82 = "panel-dim:x\\x32.js:082";
const x32_83 = "signal-dot:x\\x32.js:083";
const x32_84 = "cohort-bar:x\\x32.js:084";
const x32_85 = "chart-axis:x\\x32.js:085";
const x32_86 = "stream-cell:x\\x32.js:086";
const x32_87 = "pulse-track:x\\x32.js:087";
const x32_88 = "metric-grid:x\\x32.js:088";
const x32_89 = "event-row:x\\x32.js:089";
const x32_90 = "panel-dim:x\\x32.js:090";
const x32_91 = "signal-dot:x\\x32.js:091";
const x32_92 = "cohort-bar:x\\x32.js:092";
const x32_93 = "chart-axis:x\\x32.js:093";
const x32_94 = "stream-cell:x\\x32.js:094";
const x32_95 = "pulse-track:x\\x32.js:095";
const x32_96 = "metric-grid:x\\x32.js:096";
const x32_97 = "event-row:x\\x32.js:097";
const x32_98 = "panel-dim:x\\x32.js:098";
const x32_99 = "signal-dot:x\\x32.js:099";
const x32_100 = "cohort-bar:x\\x32.js:100";
const x32_101 = "chart-axis:x\\x32.js:101";
const x32_102 = "stream-cell:x\\x32.js:102";
const x32_103 = "pulse-track:x\\x32.js:103";
const x32_104 = "metric-grid:x\\x32.js:104";
const x32_105 = "event-row:x\\x32.js:105";
const x32_106 = "panel-dim:x\\x32.js:106";
const x32_107 = "signal-dot:x\\x32.js:107";
const x32_108 = "cohort-bar:x\\x32.js:108";
const x32_109 = "chart-axis:x\\x32.js:109";
const x32_110 = "stream-cell:x\\x32.js:110";
const x32_111 = "pulse-track:x\\x32.js:111";
const x32_112 = "metric-grid:x\\x32.js:112";
const x32_113 = "event-row:x\\x32.js:113";
const x32_114 = "panel-dim:x\\x32.js:114";
const x32_115 = "signal-dot:x\\x32.js:115";
const x32_116 = "cohort-bar:x\\x32.js:116";
const x32_117 = "chart-axis:x\\x32.js:117";
const x32_118 = "stream-cell:x\\x32.js:118";
const x32_119 = "pulse-track:x\\x32.js:119";
const x32_120 = "metric-grid:x\\x32.js:120";
const x32_121 = "event-row:x\\x32.js:121";
const x32_122 = "panel-dim:x\\x32.js:122";
const x32_123 = "signal-dot:x\\x32.js:123";
const x32_124 = "cohort-bar:x\\x32.js:124";
const x32_125 = "chart-axis:x\\x32.js:125";
const x32_126 = "stream-cell:x\\x32.js:126";
const x32_127 = "pulse-track:x\\x32.js:127";
const x32_128 = "metric-grid:x\\x32.js:128";
const x32_129 = "event-row:x\\x32.js:129";
const x32_130 = "panel-dim:x\\x32.js:130";
const x32_131 = "signal-dot:x\\x32.js:131";
const x32_132 = "cohort-bar:x\\x32.js:132";
const x32_133 = "chart-axis:x\\x32.js:133";
const x32_134 = "stream-cell:x\\x32.js:134";
const x32_135 = "pulse-track:x\\x32.js:135";
const x32_136 = "metric-grid:x\\x32.js:136";
const x32_137 = "event-row:x\\x32.js:137";
const x32_138 = "panel-dim:x\\x32.js:138";
const x32_139 = "signal-dot:x\\x32.js:139";
const x32_140 = "cohort-bar:x\\x32.js:140";
const x32_141 = "chart-axis:x\\x32.js:141";
const x32_142 = "stream-cell:x\\x32.js:142";
const x32_143 = "pulse-track:x\\x32.js:143";
const x32_144 = "metric-grid:x\\x32.js:144";
const x32_145 = "event-row:x\\x32.js:145";
const x32_146 = "panel-dim:x\\x32.js:146";
