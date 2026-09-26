import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 23,
  salt: 'm:0n:lane',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2063',
  shift: 8,
  mask: 3576916217
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row23@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
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
const x23_0 = "metric-grid:x\\x23.js:000";
const x23_1 = "event-row:x\\x23.js:001";
const x23_2 = "panel-dim:x\\x23.js:002";
const x23_3 = "signal-dot:x\\x23.js:003";
const x23_4 = "cohort-bar:x\\x23.js:004";
const x23_5 = "chart-axis:x\\x23.js:005";
const x23_6 = "stream-cell:x\\x23.js:006";
const x23_7 = "pulse-track:x\\x23.js:007";
const x23_8 = "metric-grid:x\\x23.js:008";
const x23_9 = "event-row:x\\x23.js:009";
const x23_10 = "panel-dim:x\\x23.js:010";
const x23_11 = "signal-dot:x\\x23.js:011";
const x23_12 = "cohort-bar:x\\x23.js:012";
const x23_13 = "chart-axis:x\\x23.js:013";
const x23_14 = "stream-cell:x\\x23.js:014";
const x23_15 = "pulse-track:x\\x23.js:015";
const x23_16 = "metric-grid:x\\x23.js:016";
const x23_17 = "event-row:x\\x23.js:017";
const x23_18 = "panel-dim:x\\x23.js:018";
const x23_19 = "signal-dot:x\\x23.js:019";
const x23_20 = "cohort-bar:x\\x23.js:020";
const x23_21 = "chart-axis:x\\x23.js:021";
const x23_22 = "stream-cell:x\\x23.js:022";
const x23_23 = "pulse-track:x\\x23.js:023";
const x23_24 = "metric-grid:x\\x23.js:024";
const x23_25 = "event-row:x\\x23.js:025";
const x23_26 = "panel-dim:x\\x23.js:026";
const x23_27 = "signal-dot:x\\x23.js:027";
const x23_28 = "cohort-bar:x\\x23.js:028";
const x23_29 = "chart-axis:x\\x23.js:029";
const x23_30 = "stream-cell:x\\x23.js:030";
const x23_31 = "pulse-track:x\\x23.js:031";
const x23_32 = "metric-grid:x\\x23.js:032";
const x23_33 = "event-row:x\\x23.js:033";
const x23_34 = "panel-dim:x\\x23.js:034";
const x23_35 = "signal-dot:x\\x23.js:035";
const x23_36 = "cohort-bar:x\\x23.js:036";
const x23_37 = "chart-axis:x\\x23.js:037";
const x23_38 = "stream-cell:x\\x23.js:038";
const x23_39 = "pulse-track:x\\x23.js:039";
const x23_40 = "metric-grid:x\\x23.js:040";
const x23_41 = "event-row:x\\x23.js:041";
const x23_42 = "panel-dim:x\\x23.js:042";
const x23_43 = "signal-dot:x\\x23.js:043";
const x23_44 = "cohort-bar:x\\x23.js:044";
const x23_45 = "chart-axis:x\\x23.js:045";
const x23_46 = "stream-cell:x\\x23.js:046";
const x23_47 = "pulse-track:x\\x23.js:047";
const x23_48 = "metric-grid:x\\x23.js:048";
const x23_49 = "event-row:x\\x23.js:049";
const x23_50 = "panel-dim:x\\x23.js:050";
const x23_51 = "signal-dot:x\\x23.js:051";
const x23_52 = "cohort-bar:x\\x23.js:052";
const x23_53 = "chart-axis:x\\x23.js:053";
const x23_54 = "stream-cell:x\\x23.js:054";
const x23_55 = "pulse-track:x\\x23.js:055";
const x23_56 = "metric-grid:x\\x23.js:056";
const x23_57 = "event-row:x\\x23.js:057";
const x23_58 = "panel-dim:x\\x23.js:058";
const x23_59 = "signal-dot:x\\x23.js:059";
const x23_60 = "cohort-bar:x\\x23.js:060";
const x23_61 = "chart-axis:x\\x23.js:061";
const x23_62 = "stream-cell:x\\x23.js:062";
const x23_63 = "pulse-track:x\\x23.js:063";
const x23_64 = "metric-grid:x\\x23.js:064";
const x23_65 = "event-row:x\\x23.js:065";
const x23_66 = "panel-dim:x\\x23.js:066";
const x23_67 = "signal-dot:x\\x23.js:067";
const x23_68 = "cohort-bar:x\\x23.js:068";
const x23_69 = "chart-axis:x\\x23.js:069";
const x23_70 = "stream-cell:x\\x23.js:070";
const x23_71 = "pulse-track:x\\x23.js:071";
const x23_72 = "metric-grid:x\\x23.js:072";
const x23_73 = "event-row:x\\x23.js:073";
const x23_74 = "panel-dim:x\\x23.js:074";
const x23_75 = "signal-dot:x\\x23.js:075";
const x23_76 = "cohort-bar:x\\x23.js:076";
const x23_77 = "chart-axis:x\\x23.js:077";
const x23_78 = "stream-cell:x\\x23.js:078";
const x23_79 = "pulse-track:x\\x23.js:079";
const x23_80 = "metric-grid:x\\x23.js:080";
const x23_81 = "event-row:x\\x23.js:081";
const x23_82 = "panel-dim:x\\x23.js:082";
const x23_83 = "signal-dot:x\\x23.js:083";
const x23_84 = "cohort-bar:x\\x23.js:084";
const x23_85 = "chart-axis:x\\x23.js:085";
const x23_86 = "stream-cell:x\\x23.js:086";
const x23_87 = "pulse-track:x\\x23.js:087";
const x23_88 = "metric-grid:x\\x23.js:088";
const x23_89 = "event-row:x\\x23.js:089";
const x23_90 = "panel-dim:x\\x23.js:090";
const x23_91 = "signal-dot:x\\x23.js:091";
const x23_92 = "cohort-bar:x\\x23.js:092";
const x23_93 = "chart-axis:x\\x23.js:093";
const x23_94 = "stream-cell:x\\x23.js:094";
const x23_95 = "pulse-track:x\\x23.js:095";
const x23_96 = "metric-grid:x\\x23.js:096";
const x23_97 = "event-row:x\\x23.js:097";
const x23_98 = "panel-dim:x\\x23.js:098";
const x23_99 = "signal-dot:x\\x23.js:099";
const x23_100 = "cohort-bar:x\\x23.js:100";
const x23_101 = "chart-axis:x\\x23.js:101";
const x23_102 = "stream-cell:x\\x23.js:102";
const x23_103 = "pulse-track:x\\x23.js:103";
const x23_104 = "metric-grid:x\\x23.js:104";
const x23_105 = "event-row:x\\x23.js:105";
const x23_106 = "panel-dim:x\\x23.js:106";
const x23_107 = "signal-dot:x\\x23.js:107";
const x23_108 = "cohort-bar:x\\x23.js:108";
const x23_109 = "chart-axis:x\\x23.js:109";
const x23_110 = "stream-cell:x\\x23.js:110";
const x23_111 = "pulse-track:x\\x23.js:111";
const x23_112 = "metric-grid:x\\x23.js:112";
const x23_113 = "event-row:x\\x23.js:113";
const x23_114 = "panel-dim:x\\x23.js:114";
const x23_115 = "signal-dot:x\\x23.js:115";
const x23_116 = "cohort-bar:x\\x23.js:116";
const x23_117 = "chart-axis:x\\x23.js:117";
const x23_118 = "stream-cell:x\\x23.js:118";
const x23_119 = "pulse-track:x\\x23.js:119";
const x23_120 = "metric-grid:x\\x23.js:120";
const x23_121 = "event-row:x\\x23.js:121";
const x23_122 = "panel-dim:x\\x23.js:122";
const x23_123 = "signal-dot:x\\x23.js:123";
const x23_124 = "cohort-bar:x\\x23.js:124";
const x23_125 = "chart-axis:x\\x23.js:125";
const x23_126 = "stream-cell:x\\x23.js:126";
const x23_127 = "pulse-track:x\\x23.js:127";
const x23_128 = "metric-grid:x\\x23.js:128";
const x23_129 = "event-row:x\\x23.js:129";
const x23_130 = "panel-dim:x\\x23.js:130";
const x23_131 = "signal-dot:x\\x23.js:131";
const x23_132 = "cohort-bar:x\\x23.js:132";
const x23_133 = "chart-axis:x\\x23.js:133";
const x23_134 = "stream-cell:x\\x23.js:134";
const x23_135 = "pulse-track:x\\x23.js:135";
const x23_136 = "metric-grid:x\\x23.js:136";
const x23_137 = "event-row:x\\x23.js:137";
const x23_138 = "panel-dim:x\\x23.js:138";
const x23_139 = "signal-dot:x\\x23.js:139";
const x23_140 = "cohort-bar:x\\x23.js:140";
const x23_141 = "chart-axis:x\\x23.js:141";
const x23_142 = "stream-cell:x\\x23.js:142";
const x23_143 = "pulse-track:x\\x23.js:143";
const x23_144 = "metric-grid:x\\x23.js:144";
const x23_145 = "event-row:x\\x23.js:145";
const x23_146 = "panel-dim:x\\x23.js:146";
