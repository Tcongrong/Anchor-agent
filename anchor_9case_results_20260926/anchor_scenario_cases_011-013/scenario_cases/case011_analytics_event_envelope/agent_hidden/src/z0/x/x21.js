import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 21,
  salt: 'm:0l:lane',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 6,
  mask: 2563011991
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane21@metrics.dev', y: 'shadow', n: 18 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 't', i: 6, v: 't', y: 't', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 13) + '-' + (cfg.slot + 3).toString(36) + '00';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneTuple(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x21_0 = "metric-grid:x\\x21.js:000";
const x21_1 = "event-row:x\\x21.js:001";
const x21_2 = "panel-dim:x\\x21.js:002";
const x21_3 = "signal-dot:x\\x21.js:003";
const x21_4 = "cohort-bar:x\\x21.js:004";
const x21_5 = "chart-axis:x\\x21.js:005";
const x21_6 = "stream-cell:x\\x21.js:006";
const x21_7 = "pulse-track:x\\x21.js:007";
const x21_8 = "metric-grid:x\\x21.js:008";
const x21_9 = "event-row:x\\x21.js:009";
const x21_10 = "panel-dim:x\\x21.js:010";
const x21_11 = "signal-dot:x\\x21.js:011";
const x21_12 = "cohort-bar:x\\x21.js:012";
const x21_13 = "chart-axis:x\\x21.js:013";
const x21_14 = "stream-cell:x\\x21.js:014";
const x21_15 = "pulse-track:x\\x21.js:015";
const x21_16 = "metric-grid:x\\x21.js:016";
const x21_17 = "event-row:x\\x21.js:017";
const x21_18 = "panel-dim:x\\x21.js:018";
const x21_19 = "signal-dot:x\\x21.js:019";
const x21_20 = "cohort-bar:x\\x21.js:020";
const x21_21 = "chart-axis:x\\x21.js:021";
const x21_22 = "stream-cell:x\\x21.js:022";
const x21_23 = "pulse-track:x\\x21.js:023";
const x21_24 = "metric-grid:x\\x21.js:024";
const x21_25 = "event-row:x\\x21.js:025";
const x21_26 = "panel-dim:x\\x21.js:026";
const x21_27 = "signal-dot:x\\x21.js:027";
const x21_28 = "cohort-bar:x\\x21.js:028";
const x21_29 = "chart-axis:x\\x21.js:029";
const x21_30 = "stream-cell:x\\x21.js:030";
const x21_31 = "pulse-track:x\\x21.js:031";
const x21_32 = "metric-grid:x\\x21.js:032";
const x21_33 = "event-row:x\\x21.js:033";
const x21_34 = "panel-dim:x\\x21.js:034";
const x21_35 = "signal-dot:x\\x21.js:035";
const x21_36 = "cohort-bar:x\\x21.js:036";
const x21_37 = "chart-axis:x\\x21.js:037";
const x21_38 = "stream-cell:x\\x21.js:038";
const x21_39 = "pulse-track:x\\x21.js:039";
const x21_40 = "metric-grid:x\\x21.js:040";
const x21_41 = "event-row:x\\x21.js:041";
const x21_42 = "panel-dim:x\\x21.js:042";
const x21_43 = "signal-dot:x\\x21.js:043";
const x21_44 = "cohort-bar:x\\x21.js:044";
const x21_45 = "chart-axis:x\\x21.js:045";
const x21_46 = "stream-cell:x\\x21.js:046";
const x21_47 = "pulse-track:x\\x21.js:047";
const x21_48 = "metric-grid:x\\x21.js:048";
const x21_49 = "event-row:x\\x21.js:049";
const x21_50 = "panel-dim:x\\x21.js:050";
const x21_51 = "signal-dot:x\\x21.js:051";
const x21_52 = "cohort-bar:x\\x21.js:052";
const x21_53 = "chart-axis:x\\x21.js:053";
const x21_54 = "stream-cell:x\\x21.js:054";
const x21_55 = "pulse-track:x\\x21.js:055";
const x21_56 = "metric-grid:x\\x21.js:056";
const x21_57 = "event-row:x\\x21.js:057";
const x21_58 = "panel-dim:x\\x21.js:058";
const x21_59 = "signal-dot:x\\x21.js:059";
const x21_60 = "cohort-bar:x\\x21.js:060";
const x21_61 = "chart-axis:x\\x21.js:061";
const x21_62 = "stream-cell:x\\x21.js:062";
const x21_63 = "pulse-track:x\\x21.js:063";
const x21_64 = "metric-grid:x\\x21.js:064";
const x21_65 = "event-row:x\\x21.js:065";
const x21_66 = "panel-dim:x\\x21.js:066";
const x21_67 = "signal-dot:x\\x21.js:067";
const x21_68 = "cohort-bar:x\\x21.js:068";
const x21_69 = "chart-axis:x\\x21.js:069";
const x21_70 = "stream-cell:x\\x21.js:070";
const x21_71 = "pulse-track:x\\x21.js:071";
const x21_72 = "metric-grid:x\\x21.js:072";
const x21_73 = "event-row:x\\x21.js:073";
const x21_74 = "panel-dim:x\\x21.js:074";
const x21_75 = "signal-dot:x\\x21.js:075";
const x21_76 = "cohort-bar:x\\x21.js:076";
const x21_77 = "chart-axis:x\\x21.js:077";
const x21_78 = "stream-cell:x\\x21.js:078";
const x21_79 = "pulse-track:x\\x21.js:079";
const x21_80 = "metric-grid:x\\x21.js:080";
const x21_81 = "event-row:x\\x21.js:081";
const x21_82 = "panel-dim:x\\x21.js:082";
const x21_83 = "signal-dot:x\\x21.js:083";
const x21_84 = "cohort-bar:x\\x21.js:084";
const x21_85 = "chart-axis:x\\x21.js:085";
const x21_86 = "stream-cell:x\\x21.js:086";
const x21_87 = "pulse-track:x\\x21.js:087";
const x21_88 = "metric-grid:x\\x21.js:088";
const x21_89 = "event-row:x\\x21.js:089";
const x21_90 = "panel-dim:x\\x21.js:090";
const x21_91 = "signal-dot:x\\x21.js:091";
const x21_92 = "cohort-bar:x\\x21.js:092";
const x21_93 = "chart-axis:x\\x21.js:093";
const x21_94 = "stream-cell:x\\x21.js:094";
const x21_95 = "pulse-track:x\\x21.js:095";
const x21_96 = "metric-grid:x\\x21.js:096";
const x21_97 = "event-row:x\\x21.js:097";
const x21_98 = "panel-dim:x\\x21.js:098";
const x21_99 = "signal-dot:x\\x21.js:099";
const x21_100 = "cohort-bar:x\\x21.js:100";
const x21_101 = "chart-axis:x\\x21.js:101";
const x21_102 = "stream-cell:x\\x21.js:102";
const x21_103 = "pulse-track:x\\x21.js:103";
const x21_104 = "metric-grid:x\\x21.js:104";
const x21_105 = "event-row:x\\x21.js:105";
const x21_106 = "panel-dim:x\\x21.js:106";
const x21_107 = "signal-dot:x\\x21.js:107";
const x21_108 = "cohort-bar:x\\x21.js:108";
const x21_109 = "chart-axis:x\\x21.js:109";
const x21_110 = "stream-cell:x\\x21.js:110";
const x21_111 = "pulse-track:x\\x21.js:111";
const x21_112 = "metric-grid:x\\x21.js:112";
const x21_113 = "event-row:x\\x21.js:113";
const x21_114 = "panel-dim:x\\x21.js:114";
const x21_115 = "signal-dot:x\\x21.js:115";
const x21_116 = "cohort-bar:x\\x21.js:116";
const x21_117 = "chart-axis:x\\x21.js:117";
const x21_118 = "stream-cell:x\\x21.js:118";
const x21_119 = "pulse-track:x\\x21.js:119";
const x21_120 = "metric-grid:x\\x21.js:120";
const x21_121 = "event-row:x\\x21.js:121";
const x21_122 = "panel-dim:x\\x21.js:122";
const x21_123 = "signal-dot:x\\x21.js:123";
const x21_124 = "cohort-bar:x\\x21.js:124";
const x21_125 = "chart-axis:x\\x21.js:125";
const x21_126 = "stream-cell:x\\x21.js:126";
const x21_127 = "pulse-track:x\\x21.js:127";
const x21_128 = "metric-grid:x\\x21.js:128";
const x21_129 = "event-row:x\\x21.js:129";
const x21_130 = "panel-dim:x\\x21.js:130";
const x21_131 = "signal-dot:x\\x21.js:131";
const x21_132 = "cohort-bar:x\\x21.js:132";
const x21_133 = "chart-axis:x\\x21.js:133";
const x21_134 = "stream-cell:x\\x21.js:134";
const x21_135 = "pulse-track:x\\x21.js:135";
const x21_136 = "metric-grid:x\\x21.js:136";
const x21_137 = "event-row:x\\x21.js:137";
const x21_138 = "panel-dim:x\\x21.js:138";
const x21_139 = "signal-dot:x\\x21.js:139";
const x21_140 = "cohort-bar:x\\x21.js:140";
const x21_141 = "chart-axis:x\\x21.js:141";
const x21_142 = "stream-cell:x\\x21.js:142";
const x21_143 = "pulse-track:x\\x21.js:143";
const x21_144 = "metric-grid:x\\x21.js:144";
const x21_145 = "event-row:x\\x21.js:145";
const x21_146 = "panel-dim:x\\x21.js:146";
