import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 13,
  salt: 'm:0d:lane',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2061',
  shift: 7,
  mask: 2802362383
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig13@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '4', y: '4', n: 1 },
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
const x13_0 = "metric-grid:x\\x13.js:000";
const x13_1 = "event-row:x\\x13.js:001";
const x13_2 = "panel-dim:x\\x13.js:002";
const x13_3 = "signal-dot:x\\x13.js:003";
const x13_4 = "cohort-bar:x\\x13.js:004";
const x13_5 = "chart-axis:x\\x13.js:005";
const x13_6 = "stream-cell:x\\x13.js:006";
const x13_7 = "pulse-track:x\\x13.js:007";
const x13_8 = "metric-grid:x\\x13.js:008";
const x13_9 = "event-row:x\\x13.js:009";
const x13_10 = "panel-dim:x\\x13.js:010";
const x13_11 = "signal-dot:x\\x13.js:011";
const x13_12 = "cohort-bar:x\\x13.js:012";
const x13_13 = "chart-axis:x\\x13.js:013";
const x13_14 = "stream-cell:x\\x13.js:014";
const x13_15 = "pulse-track:x\\x13.js:015";
const x13_16 = "metric-grid:x\\x13.js:016";
const x13_17 = "event-row:x\\x13.js:017";
const x13_18 = "panel-dim:x\\x13.js:018";
const x13_19 = "signal-dot:x\\x13.js:019";
const x13_20 = "cohort-bar:x\\x13.js:020";
const x13_21 = "chart-axis:x\\x13.js:021";
const x13_22 = "stream-cell:x\\x13.js:022";
const x13_23 = "pulse-track:x\\x13.js:023";
const x13_24 = "metric-grid:x\\x13.js:024";
const x13_25 = "event-row:x\\x13.js:025";
const x13_26 = "panel-dim:x\\x13.js:026";
const x13_27 = "signal-dot:x\\x13.js:027";
const x13_28 = "cohort-bar:x\\x13.js:028";
const x13_29 = "chart-axis:x\\x13.js:029";
const x13_30 = "stream-cell:x\\x13.js:030";
const x13_31 = "pulse-track:x\\x13.js:031";
const x13_32 = "metric-grid:x\\x13.js:032";
const x13_33 = "event-row:x\\x13.js:033";
const x13_34 = "panel-dim:x\\x13.js:034";
const x13_35 = "signal-dot:x\\x13.js:035";
const x13_36 = "cohort-bar:x\\x13.js:036";
const x13_37 = "chart-axis:x\\x13.js:037";
const x13_38 = "stream-cell:x\\x13.js:038";
const x13_39 = "pulse-track:x\\x13.js:039";
const x13_40 = "metric-grid:x\\x13.js:040";
const x13_41 = "event-row:x\\x13.js:041";
const x13_42 = "panel-dim:x\\x13.js:042";
const x13_43 = "signal-dot:x\\x13.js:043";
const x13_44 = "cohort-bar:x\\x13.js:044";
const x13_45 = "chart-axis:x\\x13.js:045";
const x13_46 = "stream-cell:x\\x13.js:046";
const x13_47 = "pulse-track:x\\x13.js:047";
const x13_48 = "metric-grid:x\\x13.js:048";
const x13_49 = "event-row:x\\x13.js:049";
const x13_50 = "panel-dim:x\\x13.js:050";
const x13_51 = "signal-dot:x\\x13.js:051";
const x13_52 = "cohort-bar:x\\x13.js:052";
const x13_53 = "chart-axis:x\\x13.js:053";
const x13_54 = "stream-cell:x\\x13.js:054";
const x13_55 = "pulse-track:x\\x13.js:055";
const x13_56 = "metric-grid:x\\x13.js:056";
const x13_57 = "event-row:x\\x13.js:057";
const x13_58 = "panel-dim:x\\x13.js:058";
const x13_59 = "signal-dot:x\\x13.js:059";
const x13_60 = "cohort-bar:x\\x13.js:060";
const x13_61 = "chart-axis:x\\x13.js:061";
const x13_62 = "stream-cell:x\\x13.js:062";
const x13_63 = "pulse-track:x\\x13.js:063";
const x13_64 = "metric-grid:x\\x13.js:064";
const x13_65 = "event-row:x\\x13.js:065";
const x13_66 = "panel-dim:x\\x13.js:066";
const x13_67 = "signal-dot:x\\x13.js:067";
const x13_68 = "cohort-bar:x\\x13.js:068";
const x13_69 = "chart-axis:x\\x13.js:069";
const x13_70 = "stream-cell:x\\x13.js:070";
const x13_71 = "pulse-track:x\\x13.js:071";
const x13_72 = "metric-grid:x\\x13.js:072";
const x13_73 = "event-row:x\\x13.js:073";
const x13_74 = "panel-dim:x\\x13.js:074";
const x13_75 = "signal-dot:x\\x13.js:075";
const x13_76 = "cohort-bar:x\\x13.js:076";
const x13_77 = "chart-axis:x\\x13.js:077";
const x13_78 = "stream-cell:x\\x13.js:078";
const x13_79 = "pulse-track:x\\x13.js:079";
const x13_80 = "metric-grid:x\\x13.js:080";
const x13_81 = "event-row:x\\x13.js:081";
const x13_82 = "panel-dim:x\\x13.js:082";
const x13_83 = "signal-dot:x\\x13.js:083";
const x13_84 = "cohort-bar:x\\x13.js:084";
const x13_85 = "chart-axis:x\\x13.js:085";
const x13_86 = "stream-cell:x\\x13.js:086";
const x13_87 = "pulse-track:x\\x13.js:087";
const x13_88 = "metric-grid:x\\x13.js:088";
const x13_89 = "event-row:x\\x13.js:089";
const x13_90 = "panel-dim:x\\x13.js:090";
const x13_91 = "signal-dot:x\\x13.js:091";
const x13_92 = "cohort-bar:x\\x13.js:092";
const x13_93 = "chart-axis:x\\x13.js:093";
const x13_94 = "stream-cell:x\\x13.js:094";
const x13_95 = "pulse-track:x\\x13.js:095";
const x13_96 = "metric-grid:x\\x13.js:096";
const x13_97 = "event-row:x\\x13.js:097";
const x13_98 = "panel-dim:x\\x13.js:098";
const x13_99 = "signal-dot:x\\x13.js:099";
const x13_100 = "cohort-bar:x\\x13.js:100";
const x13_101 = "chart-axis:x\\x13.js:101";
const x13_102 = "stream-cell:x\\x13.js:102";
const x13_103 = "pulse-track:x\\x13.js:103";
const x13_104 = "metric-grid:x\\x13.js:104";
const x13_105 = "event-row:x\\x13.js:105";
const x13_106 = "panel-dim:x\\x13.js:106";
const x13_107 = "signal-dot:x\\x13.js:107";
const x13_108 = "cohort-bar:x\\x13.js:108";
const x13_109 = "chart-axis:x\\x13.js:109";
const x13_110 = "stream-cell:x\\x13.js:110";
const x13_111 = "pulse-track:x\\x13.js:111";
const x13_112 = "metric-grid:x\\x13.js:112";
const x13_113 = "event-row:x\\x13.js:113";
const x13_114 = "panel-dim:x\\x13.js:114";
const x13_115 = "signal-dot:x\\x13.js:115";
const x13_116 = "cohort-bar:x\\x13.js:116";
const x13_117 = "chart-axis:x\\x13.js:117";
const x13_118 = "stream-cell:x\\x13.js:118";
const x13_119 = "pulse-track:x\\x13.js:119";
const x13_120 = "metric-grid:x\\x13.js:120";
const x13_121 = "event-row:x\\x13.js:121";
const x13_122 = "panel-dim:x\\x13.js:122";
const x13_123 = "signal-dot:x\\x13.js:123";
const x13_124 = "cohort-bar:x\\x13.js:124";
const x13_125 = "chart-axis:x\\x13.js:125";
const x13_126 = "stream-cell:x\\x13.js:126";
const x13_127 = "pulse-track:x\\x13.js:127";
const x13_128 = "metric-grid:x\\x13.js:128";
const x13_129 = "event-row:x\\x13.js:129";
const x13_130 = "panel-dim:x\\x13.js:130";
const x13_131 = "signal-dot:x\\x13.js:131";
const x13_132 = "cohort-bar:x\\x13.js:132";
const x13_133 = "chart-axis:x\\x13.js:133";
const x13_134 = "stream-cell:x\\x13.js:134";
const x13_135 = "pulse-track:x\\x13.js:135";
const x13_136 = "metric-grid:x\\x13.js:136";
const x13_137 = "event-row:x\\x13.js:137";
const x13_138 = "panel-dim:x\\x13.js:138";
const x13_139 = "signal-dot:x\\x13.js:139";
const x13_140 = "cohort-bar:x\\x13.js:140";
const x13_141 = "chart-axis:x\\x13.js:141";
const x13_142 = "stream-cell:x\\x13.js:142";
const x13_143 = "pulse-track:x\\x13.js:143";
const x13_144 = "metric-grid:x\\x13.js:144";
const x13_145 = "event-row:x\\x13.js:145";
const x13_146 = "panel-dim:x\\x13.js:146";
