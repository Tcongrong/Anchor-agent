import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 41,
  salt: 'm:15:lane',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2061',
  shift: 8,
  mask: 4112119659
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row41@metrics.dev', y: 'shadow', n: 17 },
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
const x41_0 = "metric-grid:x\\x41.js:000";
const x41_1 = "event-row:x\\x41.js:001";
const x41_2 = "panel-dim:x\\x41.js:002";
const x41_3 = "signal-dot:x\\x41.js:003";
const x41_4 = "cohort-bar:x\\x41.js:004";
const x41_5 = "chart-axis:x\\x41.js:005";
const x41_6 = "stream-cell:x\\x41.js:006";
const x41_7 = "pulse-track:x\\x41.js:007";
const x41_8 = "metric-grid:x\\x41.js:008";
const x41_9 = "event-row:x\\x41.js:009";
const x41_10 = "panel-dim:x\\x41.js:010";
const x41_11 = "signal-dot:x\\x41.js:011";
const x41_12 = "cohort-bar:x\\x41.js:012";
const x41_13 = "chart-axis:x\\x41.js:013";
const x41_14 = "stream-cell:x\\x41.js:014";
const x41_15 = "pulse-track:x\\x41.js:015";
const x41_16 = "metric-grid:x\\x41.js:016";
const x41_17 = "event-row:x\\x41.js:017";
const x41_18 = "panel-dim:x\\x41.js:018";
const x41_19 = "signal-dot:x\\x41.js:019";
const x41_20 = "cohort-bar:x\\x41.js:020";
const x41_21 = "chart-axis:x\\x41.js:021";
const x41_22 = "stream-cell:x\\x41.js:022";
const x41_23 = "pulse-track:x\\x41.js:023";
const x41_24 = "metric-grid:x\\x41.js:024";
const x41_25 = "event-row:x\\x41.js:025";
const x41_26 = "panel-dim:x\\x41.js:026";
const x41_27 = "signal-dot:x\\x41.js:027";
const x41_28 = "cohort-bar:x\\x41.js:028";
const x41_29 = "chart-axis:x\\x41.js:029";
const x41_30 = "stream-cell:x\\x41.js:030";
const x41_31 = "pulse-track:x\\x41.js:031";
const x41_32 = "metric-grid:x\\x41.js:032";
const x41_33 = "event-row:x\\x41.js:033";
const x41_34 = "panel-dim:x\\x41.js:034";
const x41_35 = "signal-dot:x\\x41.js:035";
const x41_36 = "cohort-bar:x\\x41.js:036";
const x41_37 = "chart-axis:x\\x41.js:037";
const x41_38 = "stream-cell:x\\x41.js:038";
const x41_39 = "pulse-track:x\\x41.js:039";
const x41_40 = "metric-grid:x\\x41.js:040";
const x41_41 = "event-row:x\\x41.js:041";
const x41_42 = "panel-dim:x\\x41.js:042";
const x41_43 = "signal-dot:x\\x41.js:043";
const x41_44 = "cohort-bar:x\\x41.js:044";
const x41_45 = "chart-axis:x\\x41.js:045";
const x41_46 = "stream-cell:x\\x41.js:046";
const x41_47 = "pulse-track:x\\x41.js:047";
const x41_48 = "metric-grid:x\\x41.js:048";
const x41_49 = "event-row:x\\x41.js:049";
const x41_50 = "panel-dim:x\\x41.js:050";
const x41_51 = "signal-dot:x\\x41.js:051";
const x41_52 = "cohort-bar:x\\x41.js:052";
const x41_53 = "chart-axis:x\\x41.js:053";
const x41_54 = "stream-cell:x\\x41.js:054";
const x41_55 = "pulse-track:x\\x41.js:055";
const x41_56 = "metric-grid:x\\x41.js:056";
const x41_57 = "event-row:x\\x41.js:057";
const x41_58 = "panel-dim:x\\x41.js:058";
const x41_59 = "signal-dot:x\\x41.js:059";
const x41_60 = "cohort-bar:x\\x41.js:060";
const x41_61 = "chart-axis:x\\x41.js:061";
const x41_62 = "stream-cell:x\\x41.js:062";
const x41_63 = "pulse-track:x\\x41.js:063";
const x41_64 = "metric-grid:x\\x41.js:064";
const x41_65 = "event-row:x\\x41.js:065";
const x41_66 = "panel-dim:x\\x41.js:066";
const x41_67 = "signal-dot:x\\x41.js:067";
const x41_68 = "cohort-bar:x\\x41.js:068";
const x41_69 = "chart-axis:x\\x41.js:069";
const x41_70 = "stream-cell:x\\x41.js:070";
const x41_71 = "pulse-track:x\\x41.js:071";
const x41_72 = "metric-grid:x\\x41.js:072";
const x41_73 = "event-row:x\\x41.js:073";
const x41_74 = "panel-dim:x\\x41.js:074";
const x41_75 = "signal-dot:x\\x41.js:075";
const x41_76 = "cohort-bar:x\\x41.js:076";
const x41_77 = "chart-axis:x\\x41.js:077";
const x41_78 = "stream-cell:x\\x41.js:078";
const x41_79 = "pulse-track:x\\x41.js:079";
const x41_80 = "metric-grid:x\\x41.js:080";
const x41_81 = "event-row:x\\x41.js:081";
const x41_82 = "panel-dim:x\\x41.js:082";
const x41_83 = "signal-dot:x\\x41.js:083";
const x41_84 = "cohort-bar:x\\x41.js:084";
const x41_85 = "chart-axis:x\\x41.js:085";
const x41_86 = "stream-cell:x\\x41.js:086";
const x41_87 = "pulse-track:x\\x41.js:087";
const x41_88 = "metric-grid:x\\x41.js:088";
const x41_89 = "event-row:x\\x41.js:089";
const x41_90 = "panel-dim:x\\x41.js:090";
const x41_91 = "signal-dot:x\\x41.js:091";
const x41_92 = "cohort-bar:x\\x41.js:092";
const x41_93 = "chart-axis:x\\x41.js:093";
const x41_94 = "stream-cell:x\\x41.js:094";
const x41_95 = "pulse-track:x\\x41.js:095";
const x41_96 = "metric-grid:x\\x41.js:096";
const x41_97 = "event-row:x\\x41.js:097";
const x41_98 = "panel-dim:x\\x41.js:098";
const x41_99 = "signal-dot:x\\x41.js:099";
const x41_100 = "cohort-bar:x\\x41.js:100";
const x41_101 = "chart-axis:x\\x41.js:101";
const x41_102 = "stream-cell:x\\x41.js:102";
const x41_103 = "pulse-track:x\\x41.js:103";
const x41_104 = "metric-grid:x\\x41.js:104";
const x41_105 = "event-row:x\\x41.js:105";
const x41_106 = "panel-dim:x\\x41.js:106";
const x41_107 = "signal-dot:x\\x41.js:107";
const x41_108 = "cohort-bar:x\\x41.js:108";
const x41_109 = "chart-axis:x\\x41.js:109";
const x41_110 = "stream-cell:x\\x41.js:110";
const x41_111 = "pulse-track:x\\x41.js:111";
const x41_112 = "metric-grid:x\\x41.js:112";
const x41_113 = "event-row:x\\x41.js:113";
const x41_114 = "panel-dim:x\\x41.js:114";
const x41_115 = "signal-dot:x\\x41.js:115";
const x41_116 = "cohort-bar:x\\x41.js:116";
const x41_117 = "chart-axis:x\\x41.js:117";
const x41_118 = "stream-cell:x\\x41.js:118";
const x41_119 = "pulse-track:x\\x41.js:119";
const x41_120 = "metric-grid:x\\x41.js:120";
const x41_121 = "event-row:x\\x41.js:121";
const x41_122 = "panel-dim:x\\x41.js:122";
const x41_123 = "signal-dot:x\\x41.js:123";
const x41_124 = "cohort-bar:x\\x41.js:124";
const x41_125 = "chart-axis:x\\x41.js:125";
const x41_126 = "stream-cell:x\\x41.js:126";
const x41_127 = "pulse-track:x\\x41.js:127";
const x41_128 = "metric-grid:x\\x41.js:128";
const x41_129 = "event-row:x\\x41.js:129";
const x41_130 = "panel-dim:x\\x41.js:130";
const x41_131 = "signal-dot:x\\x41.js:131";
const x41_132 = "cohort-bar:x\\x41.js:132";
const x41_133 = "chart-axis:x\\x41.js:133";
const x41_134 = "stream-cell:x\\x41.js:134";
const x41_135 = "pulse-track:x\\x41.js:135";
const x41_136 = "metric-grid:x\\x41.js:136";
const x41_137 = "event-row:x\\x41.js:137";
const x41_138 = "panel-dim:x\\x41.js:138";
const x41_139 = "signal-dot:x\\x41.js:139";
const x41_140 = "cohort-bar:x\\x41.js:140";
const x41_141 = "chart-axis:x\\x41.js:141";
const x41_142 = "stream-cell:x\\x41.js:142";
const x41_143 = "pulse-track:x\\x41.js:143";
const x41_144 = "metric-grid:x\\x41.js:144";
const x41_145 = "event-row:x\\x41.js:145";
const x41_146 = "panel-dim:x\\x41.js:146";
