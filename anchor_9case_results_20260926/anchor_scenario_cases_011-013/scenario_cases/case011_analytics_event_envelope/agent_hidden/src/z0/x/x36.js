import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 36,
  salt: 'm:10:lane',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2060',
  shift: 3,
  mask: 3724842742
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane36@metrics.dev', y: 'shadow', n: 18 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '0', y: '0', n: 1 },
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
const x36_0 = "metric-grid:x\\x36.js:000";
const x36_1 = "event-row:x\\x36.js:001";
const x36_2 = "panel-dim:x\\x36.js:002";
const x36_3 = "signal-dot:x\\x36.js:003";
const x36_4 = "cohort-bar:x\\x36.js:004";
const x36_5 = "chart-axis:x\\x36.js:005";
const x36_6 = "stream-cell:x\\x36.js:006";
const x36_7 = "pulse-track:x\\x36.js:007";
const x36_8 = "metric-grid:x\\x36.js:008";
const x36_9 = "event-row:x\\x36.js:009";
const x36_10 = "panel-dim:x\\x36.js:010";
const x36_11 = "signal-dot:x\\x36.js:011";
const x36_12 = "cohort-bar:x\\x36.js:012";
const x36_13 = "chart-axis:x\\x36.js:013";
const x36_14 = "stream-cell:x\\x36.js:014";
const x36_15 = "pulse-track:x\\x36.js:015";
const x36_16 = "metric-grid:x\\x36.js:016";
const x36_17 = "event-row:x\\x36.js:017";
const x36_18 = "panel-dim:x\\x36.js:018";
const x36_19 = "signal-dot:x\\x36.js:019";
const x36_20 = "cohort-bar:x\\x36.js:020";
const x36_21 = "chart-axis:x\\x36.js:021";
const x36_22 = "stream-cell:x\\x36.js:022";
const x36_23 = "pulse-track:x\\x36.js:023";
const x36_24 = "metric-grid:x\\x36.js:024";
const x36_25 = "event-row:x\\x36.js:025";
const x36_26 = "panel-dim:x\\x36.js:026";
const x36_27 = "signal-dot:x\\x36.js:027";
const x36_28 = "cohort-bar:x\\x36.js:028";
const x36_29 = "chart-axis:x\\x36.js:029";
const x36_30 = "stream-cell:x\\x36.js:030";
const x36_31 = "pulse-track:x\\x36.js:031";
const x36_32 = "metric-grid:x\\x36.js:032";
const x36_33 = "event-row:x\\x36.js:033";
const x36_34 = "panel-dim:x\\x36.js:034";
const x36_35 = "signal-dot:x\\x36.js:035";
const x36_36 = "cohort-bar:x\\x36.js:036";
const x36_37 = "chart-axis:x\\x36.js:037";
const x36_38 = "stream-cell:x\\x36.js:038";
const x36_39 = "pulse-track:x\\x36.js:039";
const x36_40 = "metric-grid:x\\x36.js:040";
const x36_41 = "event-row:x\\x36.js:041";
const x36_42 = "panel-dim:x\\x36.js:042";
const x36_43 = "signal-dot:x\\x36.js:043";
const x36_44 = "cohort-bar:x\\x36.js:044";
const x36_45 = "chart-axis:x\\x36.js:045";
const x36_46 = "stream-cell:x\\x36.js:046";
const x36_47 = "pulse-track:x\\x36.js:047";
const x36_48 = "metric-grid:x\\x36.js:048";
const x36_49 = "event-row:x\\x36.js:049";
const x36_50 = "panel-dim:x\\x36.js:050";
const x36_51 = "signal-dot:x\\x36.js:051";
const x36_52 = "cohort-bar:x\\x36.js:052";
const x36_53 = "chart-axis:x\\x36.js:053";
const x36_54 = "stream-cell:x\\x36.js:054";
const x36_55 = "pulse-track:x\\x36.js:055";
const x36_56 = "metric-grid:x\\x36.js:056";
const x36_57 = "event-row:x\\x36.js:057";
const x36_58 = "panel-dim:x\\x36.js:058";
const x36_59 = "signal-dot:x\\x36.js:059";
const x36_60 = "cohort-bar:x\\x36.js:060";
const x36_61 = "chart-axis:x\\x36.js:061";
const x36_62 = "stream-cell:x\\x36.js:062";
const x36_63 = "pulse-track:x\\x36.js:063";
const x36_64 = "metric-grid:x\\x36.js:064";
const x36_65 = "event-row:x\\x36.js:065";
const x36_66 = "panel-dim:x\\x36.js:066";
const x36_67 = "signal-dot:x\\x36.js:067";
const x36_68 = "cohort-bar:x\\x36.js:068";
const x36_69 = "chart-axis:x\\x36.js:069";
const x36_70 = "stream-cell:x\\x36.js:070";
const x36_71 = "pulse-track:x\\x36.js:071";
const x36_72 = "metric-grid:x\\x36.js:072";
const x36_73 = "event-row:x\\x36.js:073";
const x36_74 = "panel-dim:x\\x36.js:074";
const x36_75 = "signal-dot:x\\x36.js:075";
const x36_76 = "cohort-bar:x\\x36.js:076";
const x36_77 = "chart-axis:x\\x36.js:077";
const x36_78 = "stream-cell:x\\x36.js:078";
const x36_79 = "pulse-track:x\\x36.js:079";
const x36_80 = "metric-grid:x\\x36.js:080";
const x36_81 = "event-row:x\\x36.js:081";
const x36_82 = "panel-dim:x\\x36.js:082";
const x36_83 = "signal-dot:x\\x36.js:083";
const x36_84 = "cohort-bar:x\\x36.js:084";
const x36_85 = "chart-axis:x\\x36.js:085";
const x36_86 = "stream-cell:x\\x36.js:086";
const x36_87 = "pulse-track:x\\x36.js:087";
const x36_88 = "metric-grid:x\\x36.js:088";
const x36_89 = "event-row:x\\x36.js:089";
const x36_90 = "panel-dim:x\\x36.js:090";
const x36_91 = "signal-dot:x\\x36.js:091";
const x36_92 = "cohort-bar:x\\x36.js:092";
const x36_93 = "chart-axis:x\\x36.js:093";
const x36_94 = "stream-cell:x\\x36.js:094";
const x36_95 = "pulse-track:x\\x36.js:095";
const x36_96 = "metric-grid:x\\x36.js:096";
const x36_97 = "event-row:x\\x36.js:097";
const x36_98 = "panel-dim:x\\x36.js:098";
const x36_99 = "signal-dot:x\\x36.js:099";
const x36_100 = "cohort-bar:x\\x36.js:100";
const x36_101 = "chart-axis:x\\x36.js:101";
const x36_102 = "stream-cell:x\\x36.js:102";
const x36_103 = "pulse-track:x\\x36.js:103";
const x36_104 = "metric-grid:x\\x36.js:104";
const x36_105 = "event-row:x\\x36.js:105";
const x36_106 = "panel-dim:x\\x36.js:106";
const x36_107 = "signal-dot:x\\x36.js:107";
const x36_108 = "cohort-bar:x\\x36.js:108";
const x36_109 = "chart-axis:x\\x36.js:109";
const x36_110 = "stream-cell:x\\x36.js:110";
const x36_111 = "pulse-track:x\\x36.js:111";
const x36_112 = "metric-grid:x\\x36.js:112";
const x36_113 = "event-row:x\\x36.js:113";
const x36_114 = "panel-dim:x\\x36.js:114";
const x36_115 = "signal-dot:x\\x36.js:115";
const x36_116 = "cohort-bar:x\\x36.js:116";
const x36_117 = "chart-axis:x\\x36.js:117";
const x36_118 = "stream-cell:x\\x36.js:118";
const x36_119 = "pulse-track:x\\x36.js:119";
const x36_120 = "metric-grid:x\\x36.js:120";
const x36_121 = "event-row:x\\x36.js:121";
const x36_122 = "panel-dim:x\\x36.js:122";
const x36_123 = "signal-dot:x\\x36.js:123";
const x36_124 = "cohort-bar:x\\x36.js:124";
const x36_125 = "chart-axis:x\\x36.js:125";
const x36_126 = "stream-cell:x\\x36.js:126";
const x36_127 = "pulse-track:x\\x36.js:127";
const x36_128 = "metric-grid:x\\x36.js:128";
const x36_129 = "event-row:x\\x36.js:129";
const x36_130 = "panel-dim:x\\x36.js:130";
const x36_131 = "signal-dot:x\\x36.js:131";
const x36_132 = "cohort-bar:x\\x36.js:132";
const x36_133 = "chart-axis:x\\x36.js:133";
const x36_134 = "stream-cell:x\\x36.js:134";
const x36_135 = "pulse-track:x\\x36.js:135";
const x36_136 = "metric-grid:x\\x36.js:136";
const x36_137 = "event-row:x\\x36.js:137";
const x36_138 = "panel-dim:x\\x36.js:138";
const x36_139 = "signal-dot:x\\x36.js:139";
const x36_140 = "cohort-bar:x\\x36.js:140";
const x36_141 = "chart-axis:x\\x36.js:141";
const x36_142 = "stream-cell:x\\x36.js:142";
const x36_143 = "pulse-track:x\\x36.js:143";
const x36_144 = "metric-grid:x\\x36.js:144";
const x36_145 = "event-row:x\\x36.js:145";
const x36_146 = "panel-dim:x\\x36.js:146";
