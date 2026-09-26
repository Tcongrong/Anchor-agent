import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 2,
  salt: 'm:02:lane',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2062',
  shift: 5,
  mask: 3668340084
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row2@metrics.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
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
const x02_0 = "metric-grid:x\\x02.js:000";
const x02_1 = "event-row:x\\x02.js:001";
const x02_2 = "panel-dim:x\\x02.js:002";
const x02_3 = "signal-dot:x\\x02.js:003";
const x02_4 = "cohort-bar:x\\x02.js:004";
const x02_5 = "chart-axis:x\\x02.js:005";
const x02_6 = "stream-cell:x\\x02.js:006";
const x02_7 = "pulse-track:x\\x02.js:007";
const x02_8 = "metric-grid:x\\x02.js:008";
const x02_9 = "event-row:x\\x02.js:009";
const x02_10 = "panel-dim:x\\x02.js:010";
const x02_11 = "signal-dot:x\\x02.js:011";
const x02_12 = "cohort-bar:x\\x02.js:012";
const x02_13 = "chart-axis:x\\x02.js:013";
const x02_14 = "stream-cell:x\\x02.js:014";
const x02_15 = "pulse-track:x\\x02.js:015";
const x02_16 = "metric-grid:x\\x02.js:016";
const x02_17 = "event-row:x\\x02.js:017";
const x02_18 = "panel-dim:x\\x02.js:018";
const x02_19 = "signal-dot:x\\x02.js:019";
const x02_20 = "cohort-bar:x\\x02.js:020";
const x02_21 = "chart-axis:x\\x02.js:021";
const x02_22 = "stream-cell:x\\x02.js:022";
const x02_23 = "pulse-track:x\\x02.js:023";
const x02_24 = "metric-grid:x\\x02.js:024";
const x02_25 = "event-row:x\\x02.js:025";
const x02_26 = "panel-dim:x\\x02.js:026";
const x02_27 = "signal-dot:x\\x02.js:027";
const x02_28 = "cohort-bar:x\\x02.js:028";
const x02_29 = "chart-axis:x\\x02.js:029";
const x02_30 = "stream-cell:x\\x02.js:030";
const x02_31 = "pulse-track:x\\x02.js:031";
const x02_32 = "metric-grid:x\\x02.js:032";
const x02_33 = "event-row:x\\x02.js:033";
const x02_34 = "panel-dim:x\\x02.js:034";
const x02_35 = "signal-dot:x\\x02.js:035";
const x02_36 = "cohort-bar:x\\x02.js:036";
const x02_37 = "chart-axis:x\\x02.js:037";
const x02_38 = "stream-cell:x\\x02.js:038";
const x02_39 = "pulse-track:x\\x02.js:039";
const x02_40 = "metric-grid:x\\x02.js:040";
const x02_41 = "event-row:x\\x02.js:041";
const x02_42 = "panel-dim:x\\x02.js:042";
const x02_43 = "signal-dot:x\\x02.js:043";
const x02_44 = "cohort-bar:x\\x02.js:044";
const x02_45 = "chart-axis:x\\x02.js:045";
const x02_46 = "stream-cell:x\\x02.js:046";
const x02_47 = "pulse-track:x\\x02.js:047";
const x02_48 = "metric-grid:x\\x02.js:048";
const x02_49 = "event-row:x\\x02.js:049";
const x02_50 = "panel-dim:x\\x02.js:050";
const x02_51 = "signal-dot:x\\x02.js:051";
const x02_52 = "cohort-bar:x\\x02.js:052";
const x02_53 = "chart-axis:x\\x02.js:053";
const x02_54 = "stream-cell:x\\x02.js:054";
const x02_55 = "pulse-track:x\\x02.js:055";
const x02_56 = "metric-grid:x\\x02.js:056";
const x02_57 = "event-row:x\\x02.js:057";
const x02_58 = "panel-dim:x\\x02.js:058";
const x02_59 = "signal-dot:x\\x02.js:059";
const x02_60 = "cohort-bar:x\\x02.js:060";
const x02_61 = "chart-axis:x\\x02.js:061";
const x02_62 = "stream-cell:x\\x02.js:062";
const x02_63 = "pulse-track:x\\x02.js:063";
const x02_64 = "metric-grid:x\\x02.js:064";
const x02_65 = "event-row:x\\x02.js:065";
const x02_66 = "panel-dim:x\\x02.js:066";
const x02_67 = "signal-dot:x\\x02.js:067";
const x02_68 = "cohort-bar:x\\x02.js:068";
const x02_69 = "chart-axis:x\\x02.js:069";
const x02_70 = "stream-cell:x\\x02.js:070";
const x02_71 = "pulse-track:x\\x02.js:071";
const x02_72 = "metric-grid:x\\x02.js:072";
const x02_73 = "event-row:x\\x02.js:073";
const x02_74 = "panel-dim:x\\x02.js:074";
const x02_75 = "signal-dot:x\\x02.js:075";
const x02_76 = "cohort-bar:x\\x02.js:076";
const x02_77 = "chart-axis:x\\x02.js:077";
const x02_78 = "stream-cell:x\\x02.js:078";
const x02_79 = "pulse-track:x\\x02.js:079";
const x02_80 = "metric-grid:x\\x02.js:080";
const x02_81 = "event-row:x\\x02.js:081";
const x02_82 = "panel-dim:x\\x02.js:082";
const x02_83 = "signal-dot:x\\x02.js:083";
const x02_84 = "cohort-bar:x\\x02.js:084";
const x02_85 = "chart-axis:x\\x02.js:085";
const x02_86 = "stream-cell:x\\x02.js:086";
const x02_87 = "pulse-track:x\\x02.js:087";
const x02_88 = "metric-grid:x\\x02.js:088";
const x02_89 = "event-row:x\\x02.js:089";
const x02_90 = "panel-dim:x\\x02.js:090";
const x02_91 = "signal-dot:x\\x02.js:091";
const x02_92 = "cohort-bar:x\\x02.js:092";
const x02_93 = "chart-axis:x\\x02.js:093";
const x02_94 = "stream-cell:x\\x02.js:094";
const x02_95 = "pulse-track:x\\x02.js:095";
const x02_96 = "metric-grid:x\\x02.js:096";
const x02_97 = "event-row:x\\x02.js:097";
const x02_98 = "panel-dim:x\\x02.js:098";
const x02_99 = "signal-dot:x\\x02.js:099";
const x02_100 = "cohort-bar:x\\x02.js:100";
const x02_101 = "chart-axis:x\\x02.js:101";
const x02_102 = "stream-cell:x\\x02.js:102";
const x02_103 = "pulse-track:x\\x02.js:103";
const x02_104 = "metric-grid:x\\x02.js:104";
const x02_105 = "event-row:x\\x02.js:105";
const x02_106 = "panel-dim:x\\x02.js:106";
const x02_107 = "signal-dot:x\\x02.js:107";
const x02_108 = "cohort-bar:x\\x02.js:108";
const x02_109 = "chart-axis:x\\x02.js:109";
const x02_110 = "stream-cell:x\\x02.js:110";
const x02_111 = "pulse-track:x\\x02.js:111";
const x02_112 = "metric-grid:x\\x02.js:112";
const x02_113 = "event-row:x\\x02.js:113";
const x02_114 = "panel-dim:x\\x02.js:114";
const x02_115 = "signal-dot:x\\x02.js:115";
const x02_116 = "cohort-bar:x\\x02.js:116";
const x02_117 = "chart-axis:x\\x02.js:117";
const x02_118 = "stream-cell:x\\x02.js:118";
const x02_119 = "pulse-track:x\\x02.js:119";
const x02_120 = "metric-grid:x\\x02.js:120";
const x02_121 = "event-row:x\\x02.js:121";
const x02_122 = "panel-dim:x\\x02.js:122";
const x02_123 = "signal-dot:x\\x02.js:123";
const x02_124 = "cohort-bar:x\\x02.js:124";
const x02_125 = "chart-axis:x\\x02.js:125";
const x02_126 = "stream-cell:x\\x02.js:126";
const x02_127 = "pulse-track:x\\x02.js:127";
const x02_128 = "metric-grid:x\\x02.js:128";
const x02_129 = "event-row:x\\x02.js:129";
const x02_130 = "panel-dim:x\\x02.js:130";
const x02_131 = "signal-dot:x\\x02.js:131";
const x02_132 = "cohort-bar:x\\x02.js:132";
const x02_133 = "chart-axis:x\\x02.js:133";
const x02_134 = "stream-cell:x\\x02.js:134";
const x02_135 = "pulse-track:x\\x02.js:135";
const x02_136 = "metric-grid:x\\x02.js:136";
const x02_137 = "event-row:x\\x02.js:137";
const x02_138 = "panel-dim:x\\x02.js:138";
const x02_139 = "signal-dot:x\\x02.js:139";
const x02_140 = "cohort-bar:x\\x02.js:140";
const x02_141 = "chart-axis:x\\x02.js:141";
const x02_142 = "stream-cell:x\\x02.js:142";
const x02_143 = "pulse-track:x\\x02.js:143";
const x02_144 = "metric-grid:x\\x02.js:144";
const x02_145 = "event-row:x\\x02.js:145";
const x02_146 = "panel-dim:x\\x02.js:146";
