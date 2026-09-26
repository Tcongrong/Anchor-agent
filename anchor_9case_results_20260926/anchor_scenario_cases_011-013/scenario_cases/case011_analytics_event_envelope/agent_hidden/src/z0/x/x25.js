import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 25,
  salt: 'm:0p:lane',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2061',
  shift: 10,
  mask: 295853147
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig25@metrics.dev', y: 'shadow', n: 17 },
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
const x25_0 = "metric-grid:x\\x25.js:000";
const x25_1 = "event-row:x\\x25.js:001";
const x25_2 = "panel-dim:x\\x25.js:002";
const x25_3 = "signal-dot:x\\x25.js:003";
const x25_4 = "cohort-bar:x\\x25.js:004";
const x25_5 = "chart-axis:x\\x25.js:005";
const x25_6 = "stream-cell:x\\x25.js:006";
const x25_7 = "pulse-track:x\\x25.js:007";
const x25_8 = "metric-grid:x\\x25.js:008";
const x25_9 = "event-row:x\\x25.js:009";
const x25_10 = "panel-dim:x\\x25.js:010";
const x25_11 = "signal-dot:x\\x25.js:011";
const x25_12 = "cohort-bar:x\\x25.js:012";
const x25_13 = "chart-axis:x\\x25.js:013";
const x25_14 = "stream-cell:x\\x25.js:014";
const x25_15 = "pulse-track:x\\x25.js:015";
const x25_16 = "metric-grid:x\\x25.js:016";
const x25_17 = "event-row:x\\x25.js:017";
const x25_18 = "panel-dim:x\\x25.js:018";
const x25_19 = "signal-dot:x\\x25.js:019";
const x25_20 = "cohort-bar:x\\x25.js:020";
const x25_21 = "chart-axis:x\\x25.js:021";
const x25_22 = "stream-cell:x\\x25.js:022";
const x25_23 = "pulse-track:x\\x25.js:023";
const x25_24 = "metric-grid:x\\x25.js:024";
const x25_25 = "event-row:x\\x25.js:025";
const x25_26 = "panel-dim:x\\x25.js:026";
const x25_27 = "signal-dot:x\\x25.js:027";
const x25_28 = "cohort-bar:x\\x25.js:028";
const x25_29 = "chart-axis:x\\x25.js:029";
const x25_30 = "stream-cell:x\\x25.js:030";
const x25_31 = "pulse-track:x\\x25.js:031";
const x25_32 = "metric-grid:x\\x25.js:032";
const x25_33 = "event-row:x\\x25.js:033";
const x25_34 = "panel-dim:x\\x25.js:034";
const x25_35 = "signal-dot:x\\x25.js:035";
const x25_36 = "cohort-bar:x\\x25.js:036";
const x25_37 = "chart-axis:x\\x25.js:037";
const x25_38 = "stream-cell:x\\x25.js:038";
const x25_39 = "pulse-track:x\\x25.js:039";
const x25_40 = "metric-grid:x\\x25.js:040";
const x25_41 = "event-row:x\\x25.js:041";
const x25_42 = "panel-dim:x\\x25.js:042";
const x25_43 = "signal-dot:x\\x25.js:043";
const x25_44 = "cohort-bar:x\\x25.js:044";
const x25_45 = "chart-axis:x\\x25.js:045";
const x25_46 = "stream-cell:x\\x25.js:046";
const x25_47 = "pulse-track:x\\x25.js:047";
const x25_48 = "metric-grid:x\\x25.js:048";
const x25_49 = "event-row:x\\x25.js:049";
const x25_50 = "panel-dim:x\\x25.js:050";
const x25_51 = "signal-dot:x\\x25.js:051";
const x25_52 = "cohort-bar:x\\x25.js:052";
const x25_53 = "chart-axis:x\\x25.js:053";
const x25_54 = "stream-cell:x\\x25.js:054";
const x25_55 = "pulse-track:x\\x25.js:055";
const x25_56 = "metric-grid:x\\x25.js:056";
const x25_57 = "event-row:x\\x25.js:057";
const x25_58 = "panel-dim:x\\x25.js:058";
const x25_59 = "signal-dot:x\\x25.js:059";
const x25_60 = "cohort-bar:x\\x25.js:060";
const x25_61 = "chart-axis:x\\x25.js:061";
const x25_62 = "stream-cell:x\\x25.js:062";
const x25_63 = "pulse-track:x\\x25.js:063";
const x25_64 = "metric-grid:x\\x25.js:064";
const x25_65 = "event-row:x\\x25.js:065";
const x25_66 = "panel-dim:x\\x25.js:066";
const x25_67 = "signal-dot:x\\x25.js:067";
const x25_68 = "cohort-bar:x\\x25.js:068";
const x25_69 = "chart-axis:x\\x25.js:069";
const x25_70 = "stream-cell:x\\x25.js:070";
const x25_71 = "pulse-track:x\\x25.js:071";
const x25_72 = "metric-grid:x\\x25.js:072";
const x25_73 = "event-row:x\\x25.js:073";
const x25_74 = "panel-dim:x\\x25.js:074";
const x25_75 = "signal-dot:x\\x25.js:075";
const x25_76 = "cohort-bar:x\\x25.js:076";
const x25_77 = "chart-axis:x\\x25.js:077";
const x25_78 = "stream-cell:x\\x25.js:078";
const x25_79 = "pulse-track:x\\x25.js:079";
const x25_80 = "metric-grid:x\\x25.js:080";
const x25_81 = "event-row:x\\x25.js:081";
const x25_82 = "panel-dim:x\\x25.js:082";
const x25_83 = "signal-dot:x\\x25.js:083";
const x25_84 = "cohort-bar:x\\x25.js:084";
const x25_85 = "chart-axis:x\\x25.js:085";
const x25_86 = "stream-cell:x\\x25.js:086";
const x25_87 = "pulse-track:x\\x25.js:087";
const x25_88 = "metric-grid:x\\x25.js:088";
const x25_89 = "event-row:x\\x25.js:089";
const x25_90 = "panel-dim:x\\x25.js:090";
const x25_91 = "signal-dot:x\\x25.js:091";
const x25_92 = "cohort-bar:x\\x25.js:092";
const x25_93 = "chart-axis:x\\x25.js:093";
const x25_94 = "stream-cell:x\\x25.js:094";
const x25_95 = "pulse-track:x\\x25.js:095";
const x25_96 = "metric-grid:x\\x25.js:096";
const x25_97 = "event-row:x\\x25.js:097";
const x25_98 = "panel-dim:x\\x25.js:098";
const x25_99 = "signal-dot:x\\x25.js:099";
const x25_100 = "cohort-bar:x\\x25.js:100";
const x25_101 = "chart-axis:x\\x25.js:101";
const x25_102 = "stream-cell:x\\x25.js:102";
const x25_103 = "pulse-track:x\\x25.js:103";
const x25_104 = "metric-grid:x\\x25.js:104";
const x25_105 = "event-row:x\\x25.js:105";
const x25_106 = "panel-dim:x\\x25.js:106";
const x25_107 = "signal-dot:x\\x25.js:107";
const x25_108 = "cohort-bar:x\\x25.js:108";
const x25_109 = "chart-axis:x\\x25.js:109";
const x25_110 = "stream-cell:x\\x25.js:110";
const x25_111 = "pulse-track:x\\x25.js:111";
const x25_112 = "metric-grid:x\\x25.js:112";
const x25_113 = "event-row:x\\x25.js:113";
const x25_114 = "panel-dim:x\\x25.js:114";
const x25_115 = "signal-dot:x\\x25.js:115";
const x25_116 = "cohort-bar:x\\x25.js:116";
const x25_117 = "chart-axis:x\\x25.js:117";
const x25_118 = "stream-cell:x\\x25.js:118";
const x25_119 = "pulse-track:x\\x25.js:119";
const x25_120 = "metric-grid:x\\x25.js:120";
const x25_121 = "event-row:x\\x25.js:121";
const x25_122 = "panel-dim:x\\x25.js:122";
const x25_123 = "signal-dot:x\\x25.js:123";
const x25_124 = "cohort-bar:x\\x25.js:124";
const x25_125 = "chart-axis:x\\x25.js:125";
const x25_126 = "stream-cell:x\\x25.js:126";
const x25_127 = "pulse-track:x\\x25.js:127";
const x25_128 = "metric-grid:x\\x25.js:128";
const x25_129 = "event-row:x\\x25.js:129";
const x25_130 = "panel-dim:x\\x25.js:130";
const x25_131 = "signal-dot:x\\x25.js:131";
const x25_132 = "cohort-bar:x\\x25.js:132";
const x25_133 = "chart-axis:x\\x25.js:133";
const x25_134 = "stream-cell:x\\x25.js:134";
const x25_135 = "pulse-track:x\\x25.js:135";
const x25_136 = "metric-grid:x\\x25.js:136";
const x25_137 = "event-row:x\\x25.js:137";
const x25_138 = "panel-dim:x\\x25.js:138";
const x25_139 = "signal-dot:x\\x25.js:139";
const x25_140 = "cohort-bar:x\\x25.js:140";
const x25_141 = "chart-axis:x\\x25.js:141";
const x25_142 = "stream-cell:x\\x25.js:142";
const x25_143 = "pulse-track:x\\x25.js:143";
const x25_144 = "metric-grid:x\\x25.js:144";
const x25_145 = "event-row:x\\x25.js:145";
const x25_146 = "panel-dim:x\\x25.js:146";
