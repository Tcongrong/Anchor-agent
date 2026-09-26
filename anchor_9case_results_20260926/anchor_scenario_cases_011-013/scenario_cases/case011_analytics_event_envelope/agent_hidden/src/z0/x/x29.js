import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 29,
  salt: 'm:0t:lane',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2061',
  shift: 5,
  mask: 2323661599
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row29@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x29_0 = "metric-grid:x\\x29.js:000";
const x29_1 = "event-row:x\\x29.js:001";
const x29_2 = "panel-dim:x\\x29.js:002";
const x29_3 = "signal-dot:x\\x29.js:003";
const x29_4 = "cohort-bar:x\\x29.js:004";
const x29_5 = "chart-axis:x\\x29.js:005";
const x29_6 = "stream-cell:x\\x29.js:006";
const x29_7 = "pulse-track:x\\x29.js:007";
const x29_8 = "metric-grid:x\\x29.js:008";
const x29_9 = "event-row:x\\x29.js:009";
const x29_10 = "panel-dim:x\\x29.js:010";
const x29_11 = "signal-dot:x\\x29.js:011";
const x29_12 = "cohort-bar:x\\x29.js:012";
const x29_13 = "chart-axis:x\\x29.js:013";
const x29_14 = "stream-cell:x\\x29.js:014";
const x29_15 = "pulse-track:x\\x29.js:015";
const x29_16 = "metric-grid:x\\x29.js:016";
const x29_17 = "event-row:x\\x29.js:017";
const x29_18 = "panel-dim:x\\x29.js:018";
const x29_19 = "signal-dot:x\\x29.js:019";
const x29_20 = "cohort-bar:x\\x29.js:020";
const x29_21 = "chart-axis:x\\x29.js:021";
const x29_22 = "stream-cell:x\\x29.js:022";
const x29_23 = "pulse-track:x\\x29.js:023";
const x29_24 = "metric-grid:x\\x29.js:024";
const x29_25 = "event-row:x\\x29.js:025";
const x29_26 = "panel-dim:x\\x29.js:026";
const x29_27 = "signal-dot:x\\x29.js:027";
const x29_28 = "cohort-bar:x\\x29.js:028";
const x29_29 = "chart-axis:x\\x29.js:029";
const x29_30 = "stream-cell:x\\x29.js:030";
const x29_31 = "pulse-track:x\\x29.js:031";
const x29_32 = "metric-grid:x\\x29.js:032";
const x29_33 = "event-row:x\\x29.js:033";
const x29_34 = "panel-dim:x\\x29.js:034";
const x29_35 = "signal-dot:x\\x29.js:035";
const x29_36 = "cohort-bar:x\\x29.js:036";
const x29_37 = "chart-axis:x\\x29.js:037";
const x29_38 = "stream-cell:x\\x29.js:038";
const x29_39 = "pulse-track:x\\x29.js:039";
const x29_40 = "metric-grid:x\\x29.js:040";
const x29_41 = "event-row:x\\x29.js:041";
const x29_42 = "panel-dim:x\\x29.js:042";
const x29_43 = "signal-dot:x\\x29.js:043";
const x29_44 = "cohort-bar:x\\x29.js:044";
const x29_45 = "chart-axis:x\\x29.js:045";
const x29_46 = "stream-cell:x\\x29.js:046";
const x29_47 = "pulse-track:x\\x29.js:047";
const x29_48 = "metric-grid:x\\x29.js:048";
const x29_49 = "event-row:x\\x29.js:049";
const x29_50 = "panel-dim:x\\x29.js:050";
const x29_51 = "signal-dot:x\\x29.js:051";
const x29_52 = "cohort-bar:x\\x29.js:052";
const x29_53 = "chart-axis:x\\x29.js:053";
const x29_54 = "stream-cell:x\\x29.js:054";
const x29_55 = "pulse-track:x\\x29.js:055";
const x29_56 = "metric-grid:x\\x29.js:056";
const x29_57 = "event-row:x\\x29.js:057";
const x29_58 = "panel-dim:x\\x29.js:058";
const x29_59 = "signal-dot:x\\x29.js:059";
const x29_60 = "cohort-bar:x\\x29.js:060";
const x29_61 = "chart-axis:x\\x29.js:061";
const x29_62 = "stream-cell:x\\x29.js:062";
const x29_63 = "pulse-track:x\\x29.js:063";
const x29_64 = "metric-grid:x\\x29.js:064";
const x29_65 = "event-row:x\\x29.js:065";
const x29_66 = "panel-dim:x\\x29.js:066";
const x29_67 = "signal-dot:x\\x29.js:067";
const x29_68 = "cohort-bar:x\\x29.js:068";
const x29_69 = "chart-axis:x\\x29.js:069";
const x29_70 = "stream-cell:x\\x29.js:070";
const x29_71 = "pulse-track:x\\x29.js:071";
const x29_72 = "metric-grid:x\\x29.js:072";
const x29_73 = "event-row:x\\x29.js:073";
const x29_74 = "panel-dim:x\\x29.js:074";
const x29_75 = "signal-dot:x\\x29.js:075";
const x29_76 = "cohort-bar:x\\x29.js:076";
const x29_77 = "chart-axis:x\\x29.js:077";
const x29_78 = "stream-cell:x\\x29.js:078";
const x29_79 = "pulse-track:x\\x29.js:079";
const x29_80 = "metric-grid:x\\x29.js:080";
const x29_81 = "event-row:x\\x29.js:081";
const x29_82 = "panel-dim:x\\x29.js:082";
const x29_83 = "signal-dot:x\\x29.js:083";
const x29_84 = "cohort-bar:x\\x29.js:084";
const x29_85 = "chart-axis:x\\x29.js:085";
const x29_86 = "stream-cell:x\\x29.js:086";
const x29_87 = "pulse-track:x\\x29.js:087";
const x29_88 = "metric-grid:x\\x29.js:088";
const x29_89 = "event-row:x\\x29.js:089";
const x29_90 = "panel-dim:x\\x29.js:090";
const x29_91 = "signal-dot:x\\x29.js:091";
const x29_92 = "cohort-bar:x\\x29.js:092";
const x29_93 = "chart-axis:x\\x29.js:093";
const x29_94 = "stream-cell:x\\x29.js:094";
const x29_95 = "pulse-track:x\\x29.js:095";
const x29_96 = "metric-grid:x\\x29.js:096";
const x29_97 = "event-row:x\\x29.js:097";
const x29_98 = "panel-dim:x\\x29.js:098";
const x29_99 = "signal-dot:x\\x29.js:099";
const x29_100 = "cohort-bar:x\\x29.js:100";
const x29_101 = "chart-axis:x\\x29.js:101";
const x29_102 = "stream-cell:x\\x29.js:102";
const x29_103 = "pulse-track:x\\x29.js:103";
const x29_104 = "metric-grid:x\\x29.js:104";
const x29_105 = "event-row:x\\x29.js:105";
const x29_106 = "panel-dim:x\\x29.js:106";
const x29_107 = "signal-dot:x\\x29.js:107";
const x29_108 = "cohort-bar:x\\x29.js:108";
const x29_109 = "chart-axis:x\\x29.js:109";
const x29_110 = "stream-cell:x\\x29.js:110";
const x29_111 = "pulse-track:x\\x29.js:111";
const x29_112 = "metric-grid:x\\x29.js:112";
const x29_113 = "event-row:x\\x29.js:113";
const x29_114 = "panel-dim:x\\x29.js:114";
const x29_115 = "signal-dot:x\\x29.js:115";
const x29_116 = "cohort-bar:x\\x29.js:116";
const x29_117 = "chart-axis:x\\x29.js:117";
const x29_118 = "stream-cell:x\\x29.js:118";
const x29_119 = "pulse-track:x\\x29.js:119";
const x29_120 = "metric-grid:x\\x29.js:120";
const x29_121 = "event-row:x\\x29.js:121";
const x29_122 = "panel-dim:x\\x29.js:122";
const x29_123 = "signal-dot:x\\x29.js:123";
const x29_124 = "cohort-bar:x\\x29.js:124";
const x29_125 = "chart-axis:x\\x29.js:125";
const x29_126 = "stream-cell:x\\x29.js:126";
const x29_127 = "pulse-track:x\\x29.js:127";
const x29_128 = "metric-grid:x\\x29.js:128";
const x29_129 = "event-row:x\\x29.js:129";
const x29_130 = "panel-dim:x\\x29.js:130";
const x29_131 = "signal-dot:x\\x29.js:131";
const x29_132 = "cohort-bar:x\\x29.js:132";
const x29_133 = "chart-axis:x\\x29.js:133";
const x29_134 = "stream-cell:x\\x29.js:134";
const x29_135 = "pulse-track:x\\x29.js:135";
const x29_136 = "metric-grid:x\\x29.js:136";
const x29_137 = "event-row:x\\x29.js:137";
const x29_138 = "panel-dim:x\\x29.js:138";
const x29_139 = "signal-dot:x\\x29.js:139";
const x29_140 = "cohort-bar:x\\x29.js:140";
const x29_141 = "chart-axis:x\\x29.js:141";
const x29_142 = "stream-cell:x\\x29.js:142";
const x29_143 = "pulse-track:x\\x29.js:143";
const x29_144 = "metric-grid:x\\x29.js:144";
const x29_145 = "event-row:x\\x29.js:145";
const x29_146 = "panel-dim:x\\x29.js:146";
