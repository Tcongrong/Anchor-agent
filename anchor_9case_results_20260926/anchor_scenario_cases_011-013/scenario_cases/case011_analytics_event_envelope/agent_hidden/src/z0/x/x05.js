import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 5,
  salt: 'm:05:lane',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 8,
  mask: 3041712775
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row5@metrics.dev', y: 'shadow', n: 16 },
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
const x05_0 = "metric-grid:x\\x05.js:000";
const x05_1 = "event-row:x\\x05.js:001";
const x05_2 = "panel-dim:x\\x05.js:002";
const x05_3 = "signal-dot:x\\x05.js:003";
const x05_4 = "cohort-bar:x\\x05.js:004";
const x05_5 = "chart-axis:x\\x05.js:005";
const x05_6 = "stream-cell:x\\x05.js:006";
const x05_7 = "pulse-track:x\\x05.js:007";
const x05_8 = "metric-grid:x\\x05.js:008";
const x05_9 = "event-row:x\\x05.js:009";
const x05_10 = "panel-dim:x\\x05.js:010";
const x05_11 = "signal-dot:x\\x05.js:011";
const x05_12 = "cohort-bar:x\\x05.js:012";
const x05_13 = "chart-axis:x\\x05.js:013";
const x05_14 = "stream-cell:x\\x05.js:014";
const x05_15 = "pulse-track:x\\x05.js:015";
const x05_16 = "metric-grid:x\\x05.js:016";
const x05_17 = "event-row:x\\x05.js:017";
const x05_18 = "panel-dim:x\\x05.js:018";
const x05_19 = "signal-dot:x\\x05.js:019";
const x05_20 = "cohort-bar:x\\x05.js:020";
const x05_21 = "chart-axis:x\\x05.js:021";
const x05_22 = "stream-cell:x\\x05.js:022";
const x05_23 = "pulse-track:x\\x05.js:023";
const x05_24 = "metric-grid:x\\x05.js:024";
const x05_25 = "event-row:x\\x05.js:025";
const x05_26 = "panel-dim:x\\x05.js:026";
const x05_27 = "signal-dot:x\\x05.js:027";
const x05_28 = "cohort-bar:x\\x05.js:028";
const x05_29 = "chart-axis:x\\x05.js:029";
const x05_30 = "stream-cell:x\\x05.js:030";
const x05_31 = "pulse-track:x\\x05.js:031";
const x05_32 = "metric-grid:x\\x05.js:032";
const x05_33 = "event-row:x\\x05.js:033";
const x05_34 = "panel-dim:x\\x05.js:034";
const x05_35 = "signal-dot:x\\x05.js:035";
const x05_36 = "cohort-bar:x\\x05.js:036";
const x05_37 = "chart-axis:x\\x05.js:037";
const x05_38 = "stream-cell:x\\x05.js:038";
const x05_39 = "pulse-track:x\\x05.js:039";
const x05_40 = "metric-grid:x\\x05.js:040";
const x05_41 = "event-row:x\\x05.js:041";
const x05_42 = "panel-dim:x\\x05.js:042";
const x05_43 = "signal-dot:x\\x05.js:043";
const x05_44 = "cohort-bar:x\\x05.js:044";
const x05_45 = "chart-axis:x\\x05.js:045";
const x05_46 = "stream-cell:x\\x05.js:046";
const x05_47 = "pulse-track:x\\x05.js:047";
const x05_48 = "metric-grid:x\\x05.js:048";
const x05_49 = "event-row:x\\x05.js:049";
const x05_50 = "panel-dim:x\\x05.js:050";
const x05_51 = "signal-dot:x\\x05.js:051";
const x05_52 = "cohort-bar:x\\x05.js:052";
const x05_53 = "chart-axis:x\\x05.js:053";
const x05_54 = "stream-cell:x\\x05.js:054";
const x05_55 = "pulse-track:x\\x05.js:055";
const x05_56 = "metric-grid:x\\x05.js:056";
const x05_57 = "event-row:x\\x05.js:057";
const x05_58 = "panel-dim:x\\x05.js:058";
const x05_59 = "signal-dot:x\\x05.js:059";
const x05_60 = "cohort-bar:x\\x05.js:060";
const x05_61 = "chart-axis:x\\x05.js:061";
const x05_62 = "stream-cell:x\\x05.js:062";
const x05_63 = "pulse-track:x\\x05.js:063";
const x05_64 = "metric-grid:x\\x05.js:064";
const x05_65 = "event-row:x\\x05.js:065";
const x05_66 = "panel-dim:x\\x05.js:066";
const x05_67 = "signal-dot:x\\x05.js:067";
const x05_68 = "cohort-bar:x\\x05.js:068";
const x05_69 = "chart-axis:x\\x05.js:069";
const x05_70 = "stream-cell:x\\x05.js:070";
const x05_71 = "pulse-track:x\\x05.js:071";
const x05_72 = "metric-grid:x\\x05.js:072";
const x05_73 = "event-row:x\\x05.js:073";
const x05_74 = "panel-dim:x\\x05.js:074";
const x05_75 = "signal-dot:x\\x05.js:075";
const x05_76 = "cohort-bar:x\\x05.js:076";
const x05_77 = "chart-axis:x\\x05.js:077";
const x05_78 = "stream-cell:x\\x05.js:078";
const x05_79 = "pulse-track:x\\x05.js:079";
const x05_80 = "metric-grid:x\\x05.js:080";
const x05_81 = "event-row:x\\x05.js:081";
const x05_82 = "panel-dim:x\\x05.js:082";
const x05_83 = "signal-dot:x\\x05.js:083";
const x05_84 = "cohort-bar:x\\x05.js:084";
const x05_85 = "chart-axis:x\\x05.js:085";
const x05_86 = "stream-cell:x\\x05.js:086";
const x05_87 = "pulse-track:x\\x05.js:087";
const x05_88 = "metric-grid:x\\x05.js:088";
const x05_89 = "event-row:x\\x05.js:089";
const x05_90 = "panel-dim:x\\x05.js:090";
const x05_91 = "signal-dot:x\\x05.js:091";
const x05_92 = "cohort-bar:x\\x05.js:092";
const x05_93 = "chart-axis:x\\x05.js:093";
const x05_94 = "stream-cell:x\\x05.js:094";
const x05_95 = "pulse-track:x\\x05.js:095";
const x05_96 = "metric-grid:x\\x05.js:096";
const x05_97 = "event-row:x\\x05.js:097";
const x05_98 = "panel-dim:x\\x05.js:098";
const x05_99 = "signal-dot:x\\x05.js:099";
const x05_100 = "cohort-bar:x\\x05.js:100";
const x05_101 = "chart-axis:x\\x05.js:101";
const x05_102 = "stream-cell:x\\x05.js:102";
const x05_103 = "pulse-track:x\\x05.js:103";
const x05_104 = "metric-grid:x\\x05.js:104";
const x05_105 = "event-row:x\\x05.js:105";
const x05_106 = "panel-dim:x\\x05.js:106";
const x05_107 = "signal-dot:x\\x05.js:107";
const x05_108 = "cohort-bar:x\\x05.js:108";
const x05_109 = "chart-axis:x\\x05.js:109";
const x05_110 = "stream-cell:x\\x05.js:110";
const x05_111 = "pulse-track:x\\x05.js:111";
const x05_112 = "metric-grid:x\\x05.js:112";
const x05_113 = "event-row:x\\x05.js:113";
const x05_114 = "panel-dim:x\\x05.js:114";
const x05_115 = "signal-dot:x\\x05.js:115";
const x05_116 = "cohort-bar:x\\x05.js:116";
const x05_117 = "chart-axis:x\\x05.js:117";
const x05_118 = "stream-cell:x\\x05.js:118";
const x05_119 = "pulse-track:x\\x05.js:119";
const x05_120 = "metric-grid:x\\x05.js:120";
const x05_121 = "event-row:x\\x05.js:121";
const x05_122 = "panel-dim:x\\x05.js:122";
const x05_123 = "signal-dot:x\\x05.js:123";
const x05_124 = "cohort-bar:x\\x05.js:124";
const x05_125 = "chart-axis:x\\x05.js:125";
const x05_126 = "stream-cell:x\\x05.js:126";
const x05_127 = "pulse-track:x\\x05.js:127";
const x05_128 = "metric-grid:x\\x05.js:128";
const x05_129 = "event-row:x\\x05.js:129";
const x05_130 = "panel-dim:x\\x05.js:130";
const x05_131 = "signal-dot:x\\x05.js:131";
const x05_132 = "cohort-bar:x\\x05.js:132";
const x05_133 = "chart-axis:x\\x05.js:133";
const x05_134 = "stream-cell:x\\x05.js:134";
const x05_135 = "pulse-track:x\\x05.js:135";
const x05_136 = "metric-grid:x\\x05.js:136";
const x05_137 = "event-row:x\\x05.js:137";
const x05_138 = "panel-dim:x\\x05.js:138";
const x05_139 = "signal-dot:x\\x05.js:139";
const x05_140 = "cohort-bar:x\\x05.js:140";
const x05_141 = "chart-axis:x\\x05.js:141";
const x05_142 = "stream-cell:x\\x05.js:142";
const x05_143 = "pulse-track:x\\x05.js:143";
const x05_144 = "metric-grid:x\\x05.js:144";
const x05_145 = "event-row:x\\x05.js:145";
const x05_146 = "panel-dim:x\\x05.js:146";
