import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 31,
  salt: 'm:0v:lane',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2063',
  shift: 7,
  mask: 3337565825
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig31@metrics.dev', y: 'shadow', n: 17 },
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
const x31_0 = "metric-grid:x\\x31.js:000";
const x31_1 = "event-row:x\\x31.js:001";
const x31_2 = "panel-dim:x\\x31.js:002";
const x31_3 = "signal-dot:x\\x31.js:003";
const x31_4 = "cohort-bar:x\\x31.js:004";
const x31_5 = "chart-axis:x\\x31.js:005";
const x31_6 = "stream-cell:x\\x31.js:006";
const x31_7 = "pulse-track:x\\x31.js:007";
const x31_8 = "metric-grid:x\\x31.js:008";
const x31_9 = "event-row:x\\x31.js:009";
const x31_10 = "panel-dim:x\\x31.js:010";
const x31_11 = "signal-dot:x\\x31.js:011";
const x31_12 = "cohort-bar:x\\x31.js:012";
const x31_13 = "chart-axis:x\\x31.js:013";
const x31_14 = "stream-cell:x\\x31.js:014";
const x31_15 = "pulse-track:x\\x31.js:015";
const x31_16 = "metric-grid:x\\x31.js:016";
const x31_17 = "event-row:x\\x31.js:017";
const x31_18 = "panel-dim:x\\x31.js:018";
const x31_19 = "signal-dot:x\\x31.js:019";
const x31_20 = "cohort-bar:x\\x31.js:020";
const x31_21 = "chart-axis:x\\x31.js:021";
const x31_22 = "stream-cell:x\\x31.js:022";
const x31_23 = "pulse-track:x\\x31.js:023";
const x31_24 = "metric-grid:x\\x31.js:024";
const x31_25 = "event-row:x\\x31.js:025";
const x31_26 = "panel-dim:x\\x31.js:026";
const x31_27 = "signal-dot:x\\x31.js:027";
const x31_28 = "cohort-bar:x\\x31.js:028";
const x31_29 = "chart-axis:x\\x31.js:029";
const x31_30 = "stream-cell:x\\x31.js:030";
const x31_31 = "pulse-track:x\\x31.js:031";
const x31_32 = "metric-grid:x\\x31.js:032";
const x31_33 = "event-row:x\\x31.js:033";
const x31_34 = "panel-dim:x\\x31.js:034";
const x31_35 = "signal-dot:x\\x31.js:035";
const x31_36 = "cohort-bar:x\\x31.js:036";
const x31_37 = "chart-axis:x\\x31.js:037";
const x31_38 = "stream-cell:x\\x31.js:038";
const x31_39 = "pulse-track:x\\x31.js:039";
const x31_40 = "metric-grid:x\\x31.js:040";
const x31_41 = "event-row:x\\x31.js:041";
const x31_42 = "panel-dim:x\\x31.js:042";
const x31_43 = "signal-dot:x\\x31.js:043";
const x31_44 = "cohort-bar:x\\x31.js:044";
const x31_45 = "chart-axis:x\\x31.js:045";
const x31_46 = "stream-cell:x\\x31.js:046";
const x31_47 = "pulse-track:x\\x31.js:047";
const x31_48 = "metric-grid:x\\x31.js:048";
const x31_49 = "event-row:x\\x31.js:049";
const x31_50 = "panel-dim:x\\x31.js:050";
const x31_51 = "signal-dot:x\\x31.js:051";
const x31_52 = "cohort-bar:x\\x31.js:052";
const x31_53 = "chart-axis:x\\x31.js:053";
const x31_54 = "stream-cell:x\\x31.js:054";
const x31_55 = "pulse-track:x\\x31.js:055";
const x31_56 = "metric-grid:x\\x31.js:056";
const x31_57 = "event-row:x\\x31.js:057";
const x31_58 = "panel-dim:x\\x31.js:058";
const x31_59 = "signal-dot:x\\x31.js:059";
const x31_60 = "cohort-bar:x\\x31.js:060";
const x31_61 = "chart-axis:x\\x31.js:061";
const x31_62 = "stream-cell:x\\x31.js:062";
const x31_63 = "pulse-track:x\\x31.js:063";
const x31_64 = "metric-grid:x\\x31.js:064";
const x31_65 = "event-row:x\\x31.js:065";
const x31_66 = "panel-dim:x\\x31.js:066";
const x31_67 = "signal-dot:x\\x31.js:067";
const x31_68 = "cohort-bar:x\\x31.js:068";
const x31_69 = "chart-axis:x\\x31.js:069";
const x31_70 = "stream-cell:x\\x31.js:070";
const x31_71 = "pulse-track:x\\x31.js:071";
const x31_72 = "metric-grid:x\\x31.js:072";
const x31_73 = "event-row:x\\x31.js:073";
const x31_74 = "panel-dim:x\\x31.js:074";
const x31_75 = "signal-dot:x\\x31.js:075";
const x31_76 = "cohort-bar:x\\x31.js:076";
const x31_77 = "chart-axis:x\\x31.js:077";
const x31_78 = "stream-cell:x\\x31.js:078";
const x31_79 = "pulse-track:x\\x31.js:079";
const x31_80 = "metric-grid:x\\x31.js:080";
const x31_81 = "event-row:x\\x31.js:081";
const x31_82 = "panel-dim:x\\x31.js:082";
const x31_83 = "signal-dot:x\\x31.js:083";
const x31_84 = "cohort-bar:x\\x31.js:084";
const x31_85 = "chart-axis:x\\x31.js:085";
const x31_86 = "stream-cell:x\\x31.js:086";
const x31_87 = "pulse-track:x\\x31.js:087";
const x31_88 = "metric-grid:x\\x31.js:088";
const x31_89 = "event-row:x\\x31.js:089";
const x31_90 = "panel-dim:x\\x31.js:090";
const x31_91 = "signal-dot:x\\x31.js:091";
const x31_92 = "cohort-bar:x\\x31.js:092";
const x31_93 = "chart-axis:x\\x31.js:093";
const x31_94 = "stream-cell:x\\x31.js:094";
const x31_95 = "pulse-track:x\\x31.js:095";
const x31_96 = "metric-grid:x\\x31.js:096";
const x31_97 = "event-row:x\\x31.js:097";
const x31_98 = "panel-dim:x\\x31.js:098";
const x31_99 = "signal-dot:x\\x31.js:099";
const x31_100 = "cohort-bar:x\\x31.js:100";
const x31_101 = "chart-axis:x\\x31.js:101";
const x31_102 = "stream-cell:x\\x31.js:102";
const x31_103 = "pulse-track:x\\x31.js:103";
const x31_104 = "metric-grid:x\\x31.js:104";
const x31_105 = "event-row:x\\x31.js:105";
const x31_106 = "panel-dim:x\\x31.js:106";
const x31_107 = "signal-dot:x\\x31.js:107";
const x31_108 = "cohort-bar:x\\x31.js:108";
const x31_109 = "chart-axis:x\\x31.js:109";
const x31_110 = "stream-cell:x\\x31.js:110";
const x31_111 = "pulse-track:x\\x31.js:111";
const x31_112 = "metric-grid:x\\x31.js:112";
const x31_113 = "event-row:x\\x31.js:113";
const x31_114 = "panel-dim:x\\x31.js:114";
const x31_115 = "signal-dot:x\\x31.js:115";
const x31_116 = "cohort-bar:x\\x31.js:116";
const x31_117 = "chart-axis:x\\x31.js:117";
const x31_118 = "stream-cell:x\\x31.js:118";
const x31_119 = "pulse-track:x\\x31.js:119";
const x31_120 = "metric-grid:x\\x31.js:120";
const x31_121 = "event-row:x\\x31.js:121";
const x31_122 = "panel-dim:x\\x31.js:122";
const x31_123 = "signal-dot:x\\x31.js:123";
const x31_124 = "cohort-bar:x\\x31.js:124";
const x31_125 = "chart-axis:x\\x31.js:125";
const x31_126 = "stream-cell:x\\x31.js:126";
const x31_127 = "pulse-track:x\\x31.js:127";
const x31_128 = "metric-grid:x\\x31.js:128";
const x31_129 = "event-row:x\\x31.js:129";
const x31_130 = "panel-dim:x\\x31.js:130";
const x31_131 = "signal-dot:x\\x31.js:131";
const x31_132 = "cohort-bar:x\\x31.js:132";
const x31_133 = "chart-axis:x\\x31.js:133";
const x31_134 = "stream-cell:x\\x31.js:134";
const x31_135 = "pulse-track:x\\x31.js:135";
const x31_136 = "metric-grid:x\\x31.js:136";
const x31_137 = "event-row:x\\x31.js:137";
const x31_138 = "panel-dim:x\\x31.js:138";
const x31_139 = "signal-dot:x\\x31.js:139";
const x31_140 = "cohort-bar:x\\x31.js:140";
const x31_141 = "chart-axis:x\\x31.js:141";
const x31_142 = "stream-cell:x\\x31.js:142";
const x31_143 = "pulse-track:x\\x31.js:143";
const x31_144 = "metric-grid:x\\x31.js:144";
const x31_145 = "event-row:x\\x31.js:145";
const x31_146 = "panel-dim:x\\x31.js:146";
