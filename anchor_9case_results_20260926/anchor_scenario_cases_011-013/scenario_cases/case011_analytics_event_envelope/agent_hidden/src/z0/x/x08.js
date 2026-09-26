import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 8,
  salt: 'm:08:lane',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2060',
  shift: 11,
  mask: 2415085466
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row8@metrics.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
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
const x08_0 = "metric-grid:x\\x08.js:000";
const x08_1 = "event-row:x\\x08.js:001";
const x08_2 = "panel-dim:x\\x08.js:002";
const x08_3 = "signal-dot:x\\x08.js:003";
const x08_4 = "cohort-bar:x\\x08.js:004";
const x08_5 = "chart-axis:x\\x08.js:005";
const x08_6 = "stream-cell:x\\x08.js:006";
const x08_7 = "pulse-track:x\\x08.js:007";
const x08_8 = "metric-grid:x\\x08.js:008";
const x08_9 = "event-row:x\\x08.js:009";
const x08_10 = "panel-dim:x\\x08.js:010";
const x08_11 = "signal-dot:x\\x08.js:011";
const x08_12 = "cohort-bar:x\\x08.js:012";
const x08_13 = "chart-axis:x\\x08.js:013";
const x08_14 = "stream-cell:x\\x08.js:014";
const x08_15 = "pulse-track:x\\x08.js:015";
const x08_16 = "metric-grid:x\\x08.js:016";
const x08_17 = "event-row:x\\x08.js:017";
const x08_18 = "panel-dim:x\\x08.js:018";
const x08_19 = "signal-dot:x\\x08.js:019";
const x08_20 = "cohort-bar:x\\x08.js:020";
const x08_21 = "chart-axis:x\\x08.js:021";
const x08_22 = "stream-cell:x\\x08.js:022";
const x08_23 = "pulse-track:x\\x08.js:023";
const x08_24 = "metric-grid:x\\x08.js:024";
const x08_25 = "event-row:x\\x08.js:025";
const x08_26 = "panel-dim:x\\x08.js:026";
const x08_27 = "signal-dot:x\\x08.js:027";
const x08_28 = "cohort-bar:x\\x08.js:028";
const x08_29 = "chart-axis:x\\x08.js:029";
const x08_30 = "stream-cell:x\\x08.js:030";
const x08_31 = "pulse-track:x\\x08.js:031";
const x08_32 = "metric-grid:x\\x08.js:032";
const x08_33 = "event-row:x\\x08.js:033";
const x08_34 = "panel-dim:x\\x08.js:034";
const x08_35 = "signal-dot:x\\x08.js:035";
const x08_36 = "cohort-bar:x\\x08.js:036";
const x08_37 = "chart-axis:x\\x08.js:037";
const x08_38 = "stream-cell:x\\x08.js:038";
const x08_39 = "pulse-track:x\\x08.js:039";
const x08_40 = "metric-grid:x\\x08.js:040";
const x08_41 = "event-row:x\\x08.js:041";
const x08_42 = "panel-dim:x\\x08.js:042";
const x08_43 = "signal-dot:x\\x08.js:043";
const x08_44 = "cohort-bar:x\\x08.js:044";
const x08_45 = "chart-axis:x\\x08.js:045";
const x08_46 = "stream-cell:x\\x08.js:046";
const x08_47 = "pulse-track:x\\x08.js:047";
const x08_48 = "metric-grid:x\\x08.js:048";
const x08_49 = "event-row:x\\x08.js:049";
const x08_50 = "panel-dim:x\\x08.js:050";
const x08_51 = "signal-dot:x\\x08.js:051";
const x08_52 = "cohort-bar:x\\x08.js:052";
const x08_53 = "chart-axis:x\\x08.js:053";
const x08_54 = "stream-cell:x\\x08.js:054";
const x08_55 = "pulse-track:x\\x08.js:055";
const x08_56 = "metric-grid:x\\x08.js:056";
const x08_57 = "event-row:x\\x08.js:057";
const x08_58 = "panel-dim:x\\x08.js:058";
const x08_59 = "signal-dot:x\\x08.js:059";
const x08_60 = "cohort-bar:x\\x08.js:060";
const x08_61 = "chart-axis:x\\x08.js:061";
const x08_62 = "stream-cell:x\\x08.js:062";
const x08_63 = "pulse-track:x\\x08.js:063";
const x08_64 = "metric-grid:x\\x08.js:064";
const x08_65 = "event-row:x\\x08.js:065";
const x08_66 = "panel-dim:x\\x08.js:066";
const x08_67 = "signal-dot:x\\x08.js:067";
const x08_68 = "cohort-bar:x\\x08.js:068";
const x08_69 = "chart-axis:x\\x08.js:069";
const x08_70 = "stream-cell:x\\x08.js:070";
const x08_71 = "pulse-track:x\\x08.js:071";
const x08_72 = "metric-grid:x\\x08.js:072";
const x08_73 = "event-row:x\\x08.js:073";
const x08_74 = "panel-dim:x\\x08.js:074";
const x08_75 = "signal-dot:x\\x08.js:075";
const x08_76 = "cohort-bar:x\\x08.js:076";
const x08_77 = "chart-axis:x\\x08.js:077";
const x08_78 = "stream-cell:x\\x08.js:078";
const x08_79 = "pulse-track:x\\x08.js:079";
const x08_80 = "metric-grid:x\\x08.js:080";
const x08_81 = "event-row:x\\x08.js:081";
const x08_82 = "panel-dim:x\\x08.js:082";
const x08_83 = "signal-dot:x\\x08.js:083";
const x08_84 = "cohort-bar:x\\x08.js:084";
const x08_85 = "chart-axis:x\\x08.js:085";
const x08_86 = "stream-cell:x\\x08.js:086";
const x08_87 = "pulse-track:x\\x08.js:087";
const x08_88 = "metric-grid:x\\x08.js:088";
const x08_89 = "event-row:x\\x08.js:089";
const x08_90 = "panel-dim:x\\x08.js:090";
const x08_91 = "signal-dot:x\\x08.js:091";
const x08_92 = "cohort-bar:x\\x08.js:092";
const x08_93 = "chart-axis:x\\x08.js:093";
const x08_94 = "stream-cell:x\\x08.js:094";
const x08_95 = "pulse-track:x\\x08.js:095";
const x08_96 = "metric-grid:x\\x08.js:096";
const x08_97 = "event-row:x\\x08.js:097";
const x08_98 = "panel-dim:x\\x08.js:098";
const x08_99 = "signal-dot:x\\x08.js:099";
const x08_100 = "cohort-bar:x\\x08.js:100";
const x08_101 = "chart-axis:x\\x08.js:101";
const x08_102 = "stream-cell:x\\x08.js:102";
const x08_103 = "pulse-track:x\\x08.js:103";
const x08_104 = "metric-grid:x\\x08.js:104";
const x08_105 = "event-row:x\\x08.js:105";
const x08_106 = "panel-dim:x\\x08.js:106";
const x08_107 = "signal-dot:x\\x08.js:107";
const x08_108 = "cohort-bar:x\\x08.js:108";
const x08_109 = "chart-axis:x\\x08.js:109";
const x08_110 = "stream-cell:x\\x08.js:110";
const x08_111 = "pulse-track:x\\x08.js:111";
const x08_112 = "metric-grid:x\\x08.js:112";
const x08_113 = "event-row:x\\x08.js:113";
const x08_114 = "panel-dim:x\\x08.js:114";
const x08_115 = "signal-dot:x\\x08.js:115";
const x08_116 = "cohort-bar:x\\x08.js:116";
const x08_117 = "chart-axis:x\\x08.js:117";
const x08_118 = "stream-cell:x\\x08.js:118";
const x08_119 = "pulse-track:x\\x08.js:119";
const x08_120 = "metric-grid:x\\x08.js:120";
const x08_121 = "event-row:x\\x08.js:121";
const x08_122 = "panel-dim:x\\x08.js:122";
const x08_123 = "signal-dot:x\\x08.js:123";
const x08_124 = "cohort-bar:x\\x08.js:124";
const x08_125 = "chart-axis:x\\x08.js:125";
const x08_126 = "stream-cell:x\\x08.js:126";
const x08_127 = "pulse-track:x\\x08.js:127";
const x08_128 = "metric-grid:x\\x08.js:128";
const x08_129 = "event-row:x\\x08.js:129";
const x08_130 = "panel-dim:x\\x08.js:130";
const x08_131 = "signal-dot:x\\x08.js:131";
const x08_132 = "cohort-bar:x\\x08.js:132";
const x08_133 = "chart-axis:x\\x08.js:133";
const x08_134 = "stream-cell:x\\x08.js:134";
const x08_135 = "pulse-track:x\\x08.js:135";
const x08_136 = "metric-grid:x\\x08.js:136";
const x08_137 = "event-row:x\\x08.js:137";
const x08_138 = "panel-dim:x\\x08.js:138";
const x08_139 = "signal-dot:x\\x08.js:139";
const x08_140 = "cohort-bar:x\\x08.js:140";
const x08_141 = "chart-axis:x\\x08.js:141";
const x08_142 = "stream-cell:x\\x08.js:142";
const x08_143 = "pulse-track:x\\x08.js:143";
const x08_144 = "metric-grid:x\\x08.js:144";
const x08_145 = "event-row:x\\x08.js:145";
const x08_146 = "panel-dim:x\\x08.js:146";
