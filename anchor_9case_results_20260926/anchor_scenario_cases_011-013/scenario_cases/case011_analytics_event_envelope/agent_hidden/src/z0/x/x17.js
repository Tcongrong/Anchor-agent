import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 17,
  salt: 'm:0h:lane',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2061',
  shift: 11,
  mask: 535203539
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row17@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '8', y: '8', n: 1 },
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
const x17_0 = "metric-grid:x\\x17.js:000";
const x17_1 = "event-row:x\\x17.js:001";
const x17_2 = "panel-dim:x\\x17.js:002";
const x17_3 = "signal-dot:x\\x17.js:003";
const x17_4 = "cohort-bar:x\\x17.js:004";
const x17_5 = "chart-axis:x\\x17.js:005";
const x17_6 = "stream-cell:x\\x17.js:006";
const x17_7 = "pulse-track:x\\x17.js:007";
const x17_8 = "metric-grid:x\\x17.js:008";
const x17_9 = "event-row:x\\x17.js:009";
const x17_10 = "panel-dim:x\\x17.js:010";
const x17_11 = "signal-dot:x\\x17.js:011";
const x17_12 = "cohort-bar:x\\x17.js:012";
const x17_13 = "chart-axis:x\\x17.js:013";
const x17_14 = "stream-cell:x\\x17.js:014";
const x17_15 = "pulse-track:x\\x17.js:015";
const x17_16 = "metric-grid:x\\x17.js:016";
const x17_17 = "event-row:x\\x17.js:017";
const x17_18 = "panel-dim:x\\x17.js:018";
const x17_19 = "signal-dot:x\\x17.js:019";
const x17_20 = "cohort-bar:x\\x17.js:020";
const x17_21 = "chart-axis:x\\x17.js:021";
const x17_22 = "stream-cell:x\\x17.js:022";
const x17_23 = "pulse-track:x\\x17.js:023";
const x17_24 = "metric-grid:x\\x17.js:024";
const x17_25 = "event-row:x\\x17.js:025";
const x17_26 = "panel-dim:x\\x17.js:026";
const x17_27 = "signal-dot:x\\x17.js:027";
const x17_28 = "cohort-bar:x\\x17.js:028";
const x17_29 = "chart-axis:x\\x17.js:029";
const x17_30 = "stream-cell:x\\x17.js:030";
const x17_31 = "pulse-track:x\\x17.js:031";
const x17_32 = "metric-grid:x\\x17.js:032";
const x17_33 = "event-row:x\\x17.js:033";
const x17_34 = "panel-dim:x\\x17.js:034";
const x17_35 = "signal-dot:x\\x17.js:035";
const x17_36 = "cohort-bar:x\\x17.js:036";
const x17_37 = "chart-axis:x\\x17.js:037";
const x17_38 = "stream-cell:x\\x17.js:038";
const x17_39 = "pulse-track:x\\x17.js:039";
const x17_40 = "metric-grid:x\\x17.js:040";
const x17_41 = "event-row:x\\x17.js:041";
const x17_42 = "panel-dim:x\\x17.js:042";
const x17_43 = "signal-dot:x\\x17.js:043";
const x17_44 = "cohort-bar:x\\x17.js:044";
const x17_45 = "chart-axis:x\\x17.js:045";
const x17_46 = "stream-cell:x\\x17.js:046";
const x17_47 = "pulse-track:x\\x17.js:047";
const x17_48 = "metric-grid:x\\x17.js:048";
const x17_49 = "event-row:x\\x17.js:049";
const x17_50 = "panel-dim:x\\x17.js:050";
const x17_51 = "signal-dot:x\\x17.js:051";
const x17_52 = "cohort-bar:x\\x17.js:052";
const x17_53 = "chart-axis:x\\x17.js:053";
const x17_54 = "stream-cell:x\\x17.js:054";
const x17_55 = "pulse-track:x\\x17.js:055";
const x17_56 = "metric-grid:x\\x17.js:056";
const x17_57 = "event-row:x\\x17.js:057";
const x17_58 = "panel-dim:x\\x17.js:058";
const x17_59 = "signal-dot:x\\x17.js:059";
const x17_60 = "cohort-bar:x\\x17.js:060";
const x17_61 = "chart-axis:x\\x17.js:061";
const x17_62 = "stream-cell:x\\x17.js:062";
const x17_63 = "pulse-track:x\\x17.js:063";
const x17_64 = "metric-grid:x\\x17.js:064";
const x17_65 = "event-row:x\\x17.js:065";
const x17_66 = "panel-dim:x\\x17.js:066";
const x17_67 = "signal-dot:x\\x17.js:067";
const x17_68 = "cohort-bar:x\\x17.js:068";
const x17_69 = "chart-axis:x\\x17.js:069";
const x17_70 = "stream-cell:x\\x17.js:070";
const x17_71 = "pulse-track:x\\x17.js:071";
const x17_72 = "metric-grid:x\\x17.js:072";
const x17_73 = "event-row:x\\x17.js:073";
const x17_74 = "panel-dim:x\\x17.js:074";
const x17_75 = "signal-dot:x\\x17.js:075";
const x17_76 = "cohort-bar:x\\x17.js:076";
const x17_77 = "chart-axis:x\\x17.js:077";
const x17_78 = "stream-cell:x\\x17.js:078";
const x17_79 = "pulse-track:x\\x17.js:079";
const x17_80 = "metric-grid:x\\x17.js:080";
const x17_81 = "event-row:x\\x17.js:081";
const x17_82 = "panel-dim:x\\x17.js:082";
const x17_83 = "signal-dot:x\\x17.js:083";
const x17_84 = "cohort-bar:x\\x17.js:084";
const x17_85 = "chart-axis:x\\x17.js:085";
const x17_86 = "stream-cell:x\\x17.js:086";
const x17_87 = "pulse-track:x\\x17.js:087";
const x17_88 = "metric-grid:x\\x17.js:088";
const x17_89 = "event-row:x\\x17.js:089";
const x17_90 = "panel-dim:x\\x17.js:090";
const x17_91 = "signal-dot:x\\x17.js:091";
const x17_92 = "cohort-bar:x\\x17.js:092";
const x17_93 = "chart-axis:x\\x17.js:093";
const x17_94 = "stream-cell:x\\x17.js:094";
const x17_95 = "pulse-track:x\\x17.js:095";
const x17_96 = "metric-grid:x\\x17.js:096";
const x17_97 = "event-row:x\\x17.js:097";
const x17_98 = "panel-dim:x\\x17.js:098";
const x17_99 = "signal-dot:x\\x17.js:099";
const x17_100 = "cohort-bar:x\\x17.js:100";
const x17_101 = "chart-axis:x\\x17.js:101";
const x17_102 = "stream-cell:x\\x17.js:102";
const x17_103 = "pulse-track:x\\x17.js:103";
const x17_104 = "metric-grid:x\\x17.js:104";
const x17_105 = "event-row:x\\x17.js:105";
const x17_106 = "panel-dim:x\\x17.js:106";
const x17_107 = "signal-dot:x\\x17.js:107";
const x17_108 = "cohort-bar:x\\x17.js:108";
const x17_109 = "chart-axis:x\\x17.js:109";
const x17_110 = "stream-cell:x\\x17.js:110";
const x17_111 = "pulse-track:x\\x17.js:111";
const x17_112 = "metric-grid:x\\x17.js:112";
const x17_113 = "event-row:x\\x17.js:113";
const x17_114 = "panel-dim:x\\x17.js:114";
const x17_115 = "signal-dot:x\\x17.js:115";
const x17_116 = "cohort-bar:x\\x17.js:116";
const x17_117 = "chart-axis:x\\x17.js:117";
const x17_118 = "stream-cell:x\\x17.js:118";
const x17_119 = "pulse-track:x\\x17.js:119";
const x17_120 = "metric-grid:x\\x17.js:120";
const x17_121 = "event-row:x\\x17.js:121";
const x17_122 = "panel-dim:x\\x17.js:122";
const x17_123 = "signal-dot:x\\x17.js:123";
const x17_124 = "cohort-bar:x\\x17.js:124";
const x17_125 = "chart-axis:x\\x17.js:125";
const x17_126 = "stream-cell:x\\x17.js:126";
const x17_127 = "pulse-track:x\\x17.js:127";
const x17_128 = "metric-grid:x\\x17.js:128";
const x17_129 = "event-row:x\\x17.js:129";
const x17_130 = "panel-dim:x\\x17.js:130";
const x17_131 = "signal-dot:x\\x17.js:131";
const x17_132 = "cohort-bar:x\\x17.js:132";
const x17_133 = "chart-axis:x\\x17.js:133";
const x17_134 = "stream-cell:x\\x17.js:134";
const x17_135 = "pulse-track:x\\x17.js:135";
const x17_136 = "metric-grid:x\\x17.js:136";
const x17_137 = "event-row:x\\x17.js:137";
const x17_138 = "panel-dim:x\\x17.js:138";
const x17_139 = "signal-dot:x\\x17.js:139";
const x17_140 = "cohort-bar:x\\x17.js:140";
const x17_141 = "chart-axis:x\\x17.js:141";
const x17_142 = "stream-cell:x\\x17.js:142";
const x17_143 = "pulse-track:x\\x17.js:143";
const x17_144 = "metric-grid:x\\x17.js:144";
const x17_145 = "event-row:x\\x17.js:145";
const x17_146 = "panel-dim:x\\x17.js:146";
