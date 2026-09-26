import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 1,
  salt: 'm:01:lane',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2061',
  shift: 4,
  mask: 1013904323
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig1@metrics.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 't', i: 6, v: 't', y: 't', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(3, 11) + '~' + (cfg.slot + 1).toString(36) + (0).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneTuple(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x01_0 = "metric-grid:x\\x01.js:000";
const x01_1 = "event-row:x\\x01.js:001";
const x01_2 = "panel-dim:x\\x01.js:002";
const x01_3 = "signal-dot:x\\x01.js:003";
const x01_4 = "cohort-bar:x\\x01.js:004";
const x01_5 = "chart-axis:x\\x01.js:005";
const x01_6 = "stream-cell:x\\x01.js:006";
const x01_7 = "pulse-track:x\\x01.js:007";
const x01_8 = "metric-grid:x\\x01.js:008";
const x01_9 = "event-row:x\\x01.js:009";
const x01_10 = "panel-dim:x\\x01.js:010";
const x01_11 = "signal-dot:x\\x01.js:011";
const x01_12 = "cohort-bar:x\\x01.js:012";
const x01_13 = "chart-axis:x\\x01.js:013";
const x01_14 = "stream-cell:x\\x01.js:014";
const x01_15 = "pulse-track:x\\x01.js:015";
const x01_16 = "metric-grid:x\\x01.js:016";
const x01_17 = "event-row:x\\x01.js:017";
const x01_18 = "panel-dim:x\\x01.js:018";
const x01_19 = "signal-dot:x\\x01.js:019";
const x01_20 = "cohort-bar:x\\x01.js:020";
const x01_21 = "chart-axis:x\\x01.js:021";
const x01_22 = "stream-cell:x\\x01.js:022";
const x01_23 = "pulse-track:x\\x01.js:023";
const x01_24 = "metric-grid:x\\x01.js:024";
const x01_25 = "event-row:x\\x01.js:025";
const x01_26 = "panel-dim:x\\x01.js:026";
const x01_27 = "signal-dot:x\\x01.js:027";
const x01_28 = "cohort-bar:x\\x01.js:028";
const x01_29 = "chart-axis:x\\x01.js:029";
const x01_30 = "stream-cell:x\\x01.js:030";
const x01_31 = "pulse-track:x\\x01.js:031";
const x01_32 = "metric-grid:x\\x01.js:032";
const x01_33 = "event-row:x\\x01.js:033";
const x01_34 = "panel-dim:x\\x01.js:034";
const x01_35 = "signal-dot:x\\x01.js:035";
const x01_36 = "cohort-bar:x\\x01.js:036";
const x01_37 = "chart-axis:x\\x01.js:037";
const x01_38 = "stream-cell:x\\x01.js:038";
const x01_39 = "pulse-track:x\\x01.js:039";
const x01_40 = "metric-grid:x\\x01.js:040";
const x01_41 = "event-row:x\\x01.js:041";
const x01_42 = "panel-dim:x\\x01.js:042";
const x01_43 = "signal-dot:x\\x01.js:043";
const x01_44 = "cohort-bar:x\\x01.js:044";
const x01_45 = "chart-axis:x\\x01.js:045";
const x01_46 = "stream-cell:x\\x01.js:046";
const x01_47 = "pulse-track:x\\x01.js:047";
const x01_48 = "metric-grid:x\\x01.js:048";
const x01_49 = "event-row:x\\x01.js:049";
const x01_50 = "panel-dim:x\\x01.js:050";
const x01_51 = "signal-dot:x\\x01.js:051";
const x01_52 = "cohort-bar:x\\x01.js:052";
const x01_53 = "chart-axis:x\\x01.js:053";
const x01_54 = "stream-cell:x\\x01.js:054";
const x01_55 = "pulse-track:x\\x01.js:055";
const x01_56 = "metric-grid:x\\x01.js:056";
const x01_57 = "event-row:x\\x01.js:057";
const x01_58 = "panel-dim:x\\x01.js:058";
const x01_59 = "signal-dot:x\\x01.js:059";
const x01_60 = "cohort-bar:x\\x01.js:060";
const x01_61 = "chart-axis:x\\x01.js:061";
const x01_62 = "stream-cell:x\\x01.js:062";
const x01_63 = "pulse-track:x\\x01.js:063";
const x01_64 = "metric-grid:x\\x01.js:064";
const x01_65 = "event-row:x\\x01.js:065";
const x01_66 = "panel-dim:x\\x01.js:066";
const x01_67 = "signal-dot:x\\x01.js:067";
const x01_68 = "cohort-bar:x\\x01.js:068";
const x01_69 = "chart-axis:x\\x01.js:069";
const x01_70 = "stream-cell:x\\x01.js:070";
const x01_71 = "pulse-track:x\\x01.js:071";
const x01_72 = "metric-grid:x\\x01.js:072";
const x01_73 = "event-row:x\\x01.js:073";
const x01_74 = "panel-dim:x\\x01.js:074";
const x01_75 = "signal-dot:x\\x01.js:075";
const x01_76 = "cohort-bar:x\\x01.js:076";
const x01_77 = "chart-axis:x\\x01.js:077";
const x01_78 = "stream-cell:x\\x01.js:078";
const x01_79 = "pulse-track:x\\x01.js:079";
const x01_80 = "metric-grid:x\\x01.js:080";
const x01_81 = "event-row:x\\x01.js:081";
const x01_82 = "panel-dim:x\\x01.js:082";
const x01_83 = "signal-dot:x\\x01.js:083";
const x01_84 = "cohort-bar:x\\x01.js:084";
const x01_85 = "chart-axis:x\\x01.js:085";
const x01_86 = "stream-cell:x\\x01.js:086";
const x01_87 = "pulse-track:x\\x01.js:087";
const x01_88 = "metric-grid:x\\x01.js:088";
const x01_89 = "event-row:x\\x01.js:089";
const x01_90 = "panel-dim:x\\x01.js:090";
const x01_91 = "signal-dot:x\\x01.js:091";
const x01_92 = "cohort-bar:x\\x01.js:092";
const x01_93 = "chart-axis:x\\x01.js:093";
const x01_94 = "stream-cell:x\\x01.js:094";
const x01_95 = "pulse-track:x\\x01.js:095";
const x01_96 = "metric-grid:x\\x01.js:096";
const x01_97 = "event-row:x\\x01.js:097";
const x01_98 = "panel-dim:x\\x01.js:098";
const x01_99 = "signal-dot:x\\x01.js:099";
const x01_100 = "cohort-bar:x\\x01.js:100";
const x01_101 = "chart-axis:x\\x01.js:101";
const x01_102 = "stream-cell:x\\x01.js:102";
const x01_103 = "pulse-track:x\\x01.js:103";
const x01_104 = "metric-grid:x\\x01.js:104";
const x01_105 = "event-row:x\\x01.js:105";
const x01_106 = "panel-dim:x\\x01.js:106";
const x01_107 = "signal-dot:x\\x01.js:107";
const x01_108 = "cohort-bar:x\\x01.js:108";
const x01_109 = "chart-axis:x\\x01.js:109";
const x01_110 = "stream-cell:x\\x01.js:110";
const x01_111 = "pulse-track:x\\x01.js:111";
const x01_112 = "metric-grid:x\\x01.js:112";
const x01_113 = "event-row:x\\x01.js:113";
const x01_114 = "panel-dim:x\\x01.js:114";
const x01_115 = "signal-dot:x\\x01.js:115";
const x01_116 = "cohort-bar:x\\x01.js:116";
const x01_117 = "chart-axis:x\\x01.js:117";
const x01_118 = "stream-cell:x\\x01.js:118";
const x01_119 = "pulse-track:x\\x01.js:119";
const x01_120 = "metric-grid:x\\x01.js:120";
const x01_121 = "event-row:x\\x01.js:121";
const x01_122 = "panel-dim:x\\x01.js:122";
const x01_123 = "signal-dot:x\\x01.js:123";
const x01_124 = "cohort-bar:x\\x01.js:124";
const x01_125 = "chart-axis:x\\x01.js:125";
const x01_126 = "stream-cell:x\\x01.js:126";
const x01_127 = "pulse-track:x\\x01.js:127";
const x01_128 = "metric-grid:x\\x01.js:128";
const x01_129 = "event-row:x\\x01.js:129";
const x01_130 = "panel-dim:x\\x01.js:130";
const x01_131 = "signal-dot:x\\x01.js:131";
const x01_132 = "cohort-bar:x\\x01.js:132";
const x01_133 = "chart-axis:x\\x01.js:133";
const x01_134 = "stream-cell:x\\x01.js:134";
const x01_135 = "pulse-track:x\\x01.js:135";
const x01_136 = "metric-grid:x\\x01.js:136";
const x01_137 = "event-row:x\\x01.js:137";
const x01_138 = "panel-dim:x\\x01.js:138";
const x01_139 = "signal-dot:x\\x01.js:139";
const x01_140 = "cohort-bar:x\\x01.js:140";
const x01_141 = "chart-axis:x\\x01.js:141";
const x01_142 = "stream-cell:x\\x01.js:142";
const x01_143 = "pulse-track:x\\x01.js:143";
const x01_144 = "metric-grid:x\\x01.js:144";
const x01_145 = "event-row:x\\x01.js:145";
const x01_146 = "panel-dim:x\\x01.js:146";
