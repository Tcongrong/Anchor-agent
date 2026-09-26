import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 7,
  salt: 'm:07:lane',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 10,
  mask: 4055617001
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig7@metrics.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '7', y: '7', n: 1 },
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
const x07_0 = "metric-grid:x\\x07.js:000";
const x07_1 = "event-row:x\\x07.js:001";
const x07_2 = "panel-dim:x\\x07.js:002";
const x07_3 = "signal-dot:x\\x07.js:003";
const x07_4 = "cohort-bar:x\\x07.js:004";
const x07_5 = "chart-axis:x\\x07.js:005";
const x07_6 = "stream-cell:x\\x07.js:006";
const x07_7 = "pulse-track:x\\x07.js:007";
const x07_8 = "metric-grid:x\\x07.js:008";
const x07_9 = "event-row:x\\x07.js:009";
const x07_10 = "panel-dim:x\\x07.js:010";
const x07_11 = "signal-dot:x\\x07.js:011";
const x07_12 = "cohort-bar:x\\x07.js:012";
const x07_13 = "chart-axis:x\\x07.js:013";
const x07_14 = "stream-cell:x\\x07.js:014";
const x07_15 = "pulse-track:x\\x07.js:015";
const x07_16 = "metric-grid:x\\x07.js:016";
const x07_17 = "event-row:x\\x07.js:017";
const x07_18 = "panel-dim:x\\x07.js:018";
const x07_19 = "signal-dot:x\\x07.js:019";
const x07_20 = "cohort-bar:x\\x07.js:020";
const x07_21 = "chart-axis:x\\x07.js:021";
const x07_22 = "stream-cell:x\\x07.js:022";
const x07_23 = "pulse-track:x\\x07.js:023";
const x07_24 = "metric-grid:x\\x07.js:024";
const x07_25 = "event-row:x\\x07.js:025";
const x07_26 = "panel-dim:x\\x07.js:026";
const x07_27 = "signal-dot:x\\x07.js:027";
const x07_28 = "cohort-bar:x\\x07.js:028";
const x07_29 = "chart-axis:x\\x07.js:029";
const x07_30 = "stream-cell:x\\x07.js:030";
const x07_31 = "pulse-track:x\\x07.js:031";
const x07_32 = "metric-grid:x\\x07.js:032";
const x07_33 = "event-row:x\\x07.js:033";
const x07_34 = "panel-dim:x\\x07.js:034";
const x07_35 = "signal-dot:x\\x07.js:035";
const x07_36 = "cohort-bar:x\\x07.js:036";
const x07_37 = "chart-axis:x\\x07.js:037";
const x07_38 = "stream-cell:x\\x07.js:038";
const x07_39 = "pulse-track:x\\x07.js:039";
const x07_40 = "metric-grid:x\\x07.js:040";
const x07_41 = "event-row:x\\x07.js:041";
const x07_42 = "panel-dim:x\\x07.js:042";
const x07_43 = "signal-dot:x\\x07.js:043";
const x07_44 = "cohort-bar:x\\x07.js:044";
const x07_45 = "chart-axis:x\\x07.js:045";
const x07_46 = "stream-cell:x\\x07.js:046";
const x07_47 = "pulse-track:x\\x07.js:047";
const x07_48 = "metric-grid:x\\x07.js:048";
const x07_49 = "event-row:x\\x07.js:049";
const x07_50 = "panel-dim:x\\x07.js:050";
const x07_51 = "signal-dot:x\\x07.js:051";
const x07_52 = "cohort-bar:x\\x07.js:052";
const x07_53 = "chart-axis:x\\x07.js:053";
const x07_54 = "stream-cell:x\\x07.js:054";
const x07_55 = "pulse-track:x\\x07.js:055";
const x07_56 = "metric-grid:x\\x07.js:056";
const x07_57 = "event-row:x\\x07.js:057";
const x07_58 = "panel-dim:x\\x07.js:058";
const x07_59 = "signal-dot:x\\x07.js:059";
const x07_60 = "cohort-bar:x\\x07.js:060";
const x07_61 = "chart-axis:x\\x07.js:061";
const x07_62 = "stream-cell:x\\x07.js:062";
const x07_63 = "pulse-track:x\\x07.js:063";
const x07_64 = "metric-grid:x\\x07.js:064";
const x07_65 = "event-row:x\\x07.js:065";
const x07_66 = "panel-dim:x\\x07.js:066";
const x07_67 = "signal-dot:x\\x07.js:067";
const x07_68 = "cohort-bar:x\\x07.js:068";
const x07_69 = "chart-axis:x\\x07.js:069";
const x07_70 = "stream-cell:x\\x07.js:070";
const x07_71 = "pulse-track:x\\x07.js:071";
const x07_72 = "metric-grid:x\\x07.js:072";
const x07_73 = "event-row:x\\x07.js:073";
const x07_74 = "panel-dim:x\\x07.js:074";
const x07_75 = "signal-dot:x\\x07.js:075";
const x07_76 = "cohort-bar:x\\x07.js:076";
const x07_77 = "chart-axis:x\\x07.js:077";
const x07_78 = "stream-cell:x\\x07.js:078";
const x07_79 = "pulse-track:x\\x07.js:079";
const x07_80 = "metric-grid:x\\x07.js:080";
const x07_81 = "event-row:x\\x07.js:081";
const x07_82 = "panel-dim:x\\x07.js:082";
const x07_83 = "signal-dot:x\\x07.js:083";
const x07_84 = "cohort-bar:x\\x07.js:084";
const x07_85 = "chart-axis:x\\x07.js:085";
const x07_86 = "stream-cell:x\\x07.js:086";
const x07_87 = "pulse-track:x\\x07.js:087";
const x07_88 = "metric-grid:x\\x07.js:088";
const x07_89 = "event-row:x\\x07.js:089";
const x07_90 = "panel-dim:x\\x07.js:090";
const x07_91 = "signal-dot:x\\x07.js:091";
const x07_92 = "cohort-bar:x\\x07.js:092";
const x07_93 = "chart-axis:x\\x07.js:093";
const x07_94 = "stream-cell:x\\x07.js:094";
const x07_95 = "pulse-track:x\\x07.js:095";
const x07_96 = "metric-grid:x\\x07.js:096";
const x07_97 = "event-row:x\\x07.js:097";
const x07_98 = "panel-dim:x\\x07.js:098";
const x07_99 = "signal-dot:x\\x07.js:099";
const x07_100 = "cohort-bar:x\\x07.js:100";
const x07_101 = "chart-axis:x\\x07.js:101";
const x07_102 = "stream-cell:x\\x07.js:102";
const x07_103 = "pulse-track:x\\x07.js:103";
const x07_104 = "metric-grid:x\\x07.js:104";
const x07_105 = "event-row:x\\x07.js:105";
const x07_106 = "panel-dim:x\\x07.js:106";
const x07_107 = "signal-dot:x\\x07.js:107";
const x07_108 = "cohort-bar:x\\x07.js:108";
const x07_109 = "chart-axis:x\\x07.js:109";
const x07_110 = "stream-cell:x\\x07.js:110";
const x07_111 = "pulse-track:x\\x07.js:111";
const x07_112 = "metric-grid:x\\x07.js:112";
const x07_113 = "event-row:x\\x07.js:113";
const x07_114 = "panel-dim:x\\x07.js:114";
const x07_115 = "signal-dot:x\\x07.js:115";
const x07_116 = "cohort-bar:x\\x07.js:116";
const x07_117 = "chart-axis:x\\x07.js:117";
const x07_118 = "stream-cell:x\\x07.js:118";
const x07_119 = "pulse-track:x\\x07.js:119";
const x07_120 = "metric-grid:x\\x07.js:120";
const x07_121 = "event-row:x\\x07.js:121";
const x07_122 = "panel-dim:x\\x07.js:122";
const x07_123 = "signal-dot:x\\x07.js:123";
const x07_124 = "cohort-bar:x\\x07.js:124";
const x07_125 = "chart-axis:x\\x07.js:125";
const x07_126 = "stream-cell:x\\x07.js:126";
const x07_127 = "pulse-track:x\\x07.js:127";
const x07_128 = "metric-grid:x\\x07.js:128";
const x07_129 = "event-row:x\\x07.js:129";
const x07_130 = "panel-dim:x\\x07.js:130";
const x07_131 = "signal-dot:x\\x07.js:131";
const x07_132 = "cohort-bar:x\\x07.js:132";
const x07_133 = "chart-axis:x\\x07.js:133";
const x07_134 = "stream-cell:x\\x07.js:134";
const x07_135 = "pulse-track:x\\x07.js:135";
const x07_136 = "metric-grid:x\\x07.js:136";
const x07_137 = "event-row:x\\x07.js:137";
const x07_138 = "panel-dim:x\\x07.js:138";
const x07_139 = "signal-dot:x\\x07.js:139";
const x07_140 = "cohort-bar:x\\x07.js:140";
const x07_141 = "chart-axis:x\\x07.js:141";
const x07_142 = "stream-cell:x\\x07.js:142";
const x07_143 = "pulse-track:x\\x07.js:143";
const x07_144 = "metric-grid:x\\x07.js:144";
const x07_145 = "event-row:x\\x07.js:145";
const x07_146 = "panel-dim:x\\x07.js:146";
