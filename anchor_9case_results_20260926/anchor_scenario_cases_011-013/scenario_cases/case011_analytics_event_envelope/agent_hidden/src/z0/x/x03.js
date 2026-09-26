import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 3,
  salt: 'm:03:lane',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2063',
  shift: 6,
  mask: 2027808549
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane3@metrics.dev', y: 'shadow', n: 17 },
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
const x03_0 = "metric-grid:x\\x03.js:000";
const x03_1 = "event-row:x\\x03.js:001";
const x03_2 = "panel-dim:x\\x03.js:002";
const x03_3 = "signal-dot:x\\x03.js:003";
const x03_4 = "cohort-bar:x\\x03.js:004";
const x03_5 = "chart-axis:x\\x03.js:005";
const x03_6 = "stream-cell:x\\x03.js:006";
const x03_7 = "pulse-track:x\\x03.js:007";
const x03_8 = "metric-grid:x\\x03.js:008";
const x03_9 = "event-row:x\\x03.js:009";
const x03_10 = "panel-dim:x\\x03.js:010";
const x03_11 = "signal-dot:x\\x03.js:011";
const x03_12 = "cohort-bar:x\\x03.js:012";
const x03_13 = "chart-axis:x\\x03.js:013";
const x03_14 = "stream-cell:x\\x03.js:014";
const x03_15 = "pulse-track:x\\x03.js:015";
const x03_16 = "metric-grid:x\\x03.js:016";
const x03_17 = "event-row:x\\x03.js:017";
const x03_18 = "panel-dim:x\\x03.js:018";
const x03_19 = "signal-dot:x\\x03.js:019";
const x03_20 = "cohort-bar:x\\x03.js:020";
const x03_21 = "chart-axis:x\\x03.js:021";
const x03_22 = "stream-cell:x\\x03.js:022";
const x03_23 = "pulse-track:x\\x03.js:023";
const x03_24 = "metric-grid:x\\x03.js:024";
const x03_25 = "event-row:x\\x03.js:025";
const x03_26 = "panel-dim:x\\x03.js:026";
const x03_27 = "signal-dot:x\\x03.js:027";
const x03_28 = "cohort-bar:x\\x03.js:028";
const x03_29 = "chart-axis:x\\x03.js:029";
const x03_30 = "stream-cell:x\\x03.js:030";
const x03_31 = "pulse-track:x\\x03.js:031";
const x03_32 = "metric-grid:x\\x03.js:032";
const x03_33 = "event-row:x\\x03.js:033";
const x03_34 = "panel-dim:x\\x03.js:034";
const x03_35 = "signal-dot:x\\x03.js:035";
const x03_36 = "cohort-bar:x\\x03.js:036";
const x03_37 = "chart-axis:x\\x03.js:037";
const x03_38 = "stream-cell:x\\x03.js:038";
const x03_39 = "pulse-track:x\\x03.js:039";
const x03_40 = "metric-grid:x\\x03.js:040";
const x03_41 = "event-row:x\\x03.js:041";
const x03_42 = "panel-dim:x\\x03.js:042";
const x03_43 = "signal-dot:x\\x03.js:043";
const x03_44 = "cohort-bar:x\\x03.js:044";
const x03_45 = "chart-axis:x\\x03.js:045";
const x03_46 = "stream-cell:x\\x03.js:046";
const x03_47 = "pulse-track:x\\x03.js:047";
const x03_48 = "metric-grid:x\\x03.js:048";
const x03_49 = "event-row:x\\x03.js:049";
const x03_50 = "panel-dim:x\\x03.js:050";
const x03_51 = "signal-dot:x\\x03.js:051";
const x03_52 = "cohort-bar:x\\x03.js:052";
const x03_53 = "chart-axis:x\\x03.js:053";
const x03_54 = "stream-cell:x\\x03.js:054";
const x03_55 = "pulse-track:x\\x03.js:055";
const x03_56 = "metric-grid:x\\x03.js:056";
const x03_57 = "event-row:x\\x03.js:057";
const x03_58 = "panel-dim:x\\x03.js:058";
const x03_59 = "signal-dot:x\\x03.js:059";
const x03_60 = "cohort-bar:x\\x03.js:060";
const x03_61 = "chart-axis:x\\x03.js:061";
const x03_62 = "stream-cell:x\\x03.js:062";
const x03_63 = "pulse-track:x\\x03.js:063";
const x03_64 = "metric-grid:x\\x03.js:064";
const x03_65 = "event-row:x\\x03.js:065";
const x03_66 = "panel-dim:x\\x03.js:066";
const x03_67 = "signal-dot:x\\x03.js:067";
const x03_68 = "cohort-bar:x\\x03.js:068";
const x03_69 = "chart-axis:x\\x03.js:069";
const x03_70 = "stream-cell:x\\x03.js:070";
const x03_71 = "pulse-track:x\\x03.js:071";
const x03_72 = "metric-grid:x\\x03.js:072";
const x03_73 = "event-row:x\\x03.js:073";
const x03_74 = "panel-dim:x\\x03.js:074";
const x03_75 = "signal-dot:x\\x03.js:075";
const x03_76 = "cohort-bar:x\\x03.js:076";
const x03_77 = "chart-axis:x\\x03.js:077";
const x03_78 = "stream-cell:x\\x03.js:078";
const x03_79 = "pulse-track:x\\x03.js:079";
const x03_80 = "metric-grid:x\\x03.js:080";
const x03_81 = "event-row:x\\x03.js:081";
const x03_82 = "panel-dim:x\\x03.js:082";
const x03_83 = "signal-dot:x\\x03.js:083";
const x03_84 = "cohort-bar:x\\x03.js:084";
const x03_85 = "chart-axis:x\\x03.js:085";
const x03_86 = "stream-cell:x\\x03.js:086";
const x03_87 = "pulse-track:x\\x03.js:087";
const x03_88 = "metric-grid:x\\x03.js:088";
const x03_89 = "event-row:x\\x03.js:089";
const x03_90 = "panel-dim:x\\x03.js:090";
const x03_91 = "signal-dot:x\\x03.js:091";
const x03_92 = "cohort-bar:x\\x03.js:092";
const x03_93 = "chart-axis:x\\x03.js:093";
const x03_94 = "stream-cell:x\\x03.js:094";
const x03_95 = "pulse-track:x\\x03.js:095";
const x03_96 = "metric-grid:x\\x03.js:096";
const x03_97 = "event-row:x\\x03.js:097";
const x03_98 = "panel-dim:x\\x03.js:098";
const x03_99 = "signal-dot:x\\x03.js:099";
const x03_100 = "cohort-bar:x\\x03.js:100";
const x03_101 = "chart-axis:x\\x03.js:101";
const x03_102 = "stream-cell:x\\x03.js:102";
const x03_103 = "pulse-track:x\\x03.js:103";
const x03_104 = "metric-grid:x\\x03.js:104";
const x03_105 = "event-row:x\\x03.js:105";
const x03_106 = "panel-dim:x\\x03.js:106";
const x03_107 = "signal-dot:x\\x03.js:107";
const x03_108 = "cohort-bar:x\\x03.js:108";
const x03_109 = "chart-axis:x\\x03.js:109";
const x03_110 = "stream-cell:x\\x03.js:110";
const x03_111 = "pulse-track:x\\x03.js:111";
const x03_112 = "metric-grid:x\\x03.js:112";
const x03_113 = "event-row:x\\x03.js:113";
const x03_114 = "panel-dim:x\\x03.js:114";
const x03_115 = "signal-dot:x\\x03.js:115";
const x03_116 = "cohort-bar:x\\x03.js:116";
const x03_117 = "chart-axis:x\\x03.js:117";
const x03_118 = "stream-cell:x\\x03.js:118";
const x03_119 = "pulse-track:x\\x03.js:119";
const x03_120 = "metric-grid:x\\x03.js:120";
const x03_121 = "event-row:x\\x03.js:121";
const x03_122 = "panel-dim:x\\x03.js:122";
const x03_123 = "signal-dot:x\\x03.js:123";
const x03_124 = "cohort-bar:x\\x03.js:124";
const x03_125 = "chart-axis:x\\x03.js:125";
const x03_126 = "stream-cell:x\\x03.js:126";
const x03_127 = "pulse-track:x\\x03.js:127";
const x03_128 = "metric-grid:x\\x03.js:128";
const x03_129 = "event-row:x\\x03.js:129";
const x03_130 = "panel-dim:x\\x03.js:130";
const x03_131 = "signal-dot:x\\x03.js:131";
const x03_132 = "cohort-bar:x\\x03.js:132";
const x03_133 = "chart-axis:x\\x03.js:133";
const x03_134 = "stream-cell:x\\x03.js:134";
const x03_135 = "pulse-track:x\\x03.js:135";
const x03_136 = "metric-grid:x\\x03.js:136";
const x03_137 = "event-row:x\\x03.js:137";
const x03_138 = "panel-dim:x\\x03.js:138";
const x03_139 = "signal-dot:x\\x03.js:139";
const x03_140 = "cohort-bar:x\\x03.js:140";
const x03_141 = "chart-axis:x\\x03.js:141";
const x03_142 = "stream-cell:x\\x03.js:142";
const x03_143 = "pulse-track:x\\x03.js:143";
const x03_144 = "metric-grid:x\\x03.js:144";
const x03_145 = "event-row:x\\x03.js:145";
const x03_146 = "panel-dim:x\\x03.js:146";
