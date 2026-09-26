import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 27,
  salt: 'm:0r:lane',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2063',
  shift: 3,
  mask: 1309757373
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane27@metrics.dev', y: 'shadow', n: 18 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
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
const x27_0 = "metric-grid:x\\x27.js:000";
const x27_1 = "event-row:x\\x27.js:001";
const x27_2 = "panel-dim:x\\x27.js:002";
const x27_3 = "signal-dot:x\\x27.js:003";
const x27_4 = "cohort-bar:x\\x27.js:004";
const x27_5 = "chart-axis:x\\x27.js:005";
const x27_6 = "stream-cell:x\\x27.js:006";
const x27_7 = "pulse-track:x\\x27.js:007";
const x27_8 = "metric-grid:x\\x27.js:008";
const x27_9 = "event-row:x\\x27.js:009";
const x27_10 = "panel-dim:x\\x27.js:010";
const x27_11 = "signal-dot:x\\x27.js:011";
const x27_12 = "cohort-bar:x\\x27.js:012";
const x27_13 = "chart-axis:x\\x27.js:013";
const x27_14 = "stream-cell:x\\x27.js:014";
const x27_15 = "pulse-track:x\\x27.js:015";
const x27_16 = "metric-grid:x\\x27.js:016";
const x27_17 = "event-row:x\\x27.js:017";
const x27_18 = "panel-dim:x\\x27.js:018";
const x27_19 = "signal-dot:x\\x27.js:019";
const x27_20 = "cohort-bar:x\\x27.js:020";
const x27_21 = "chart-axis:x\\x27.js:021";
const x27_22 = "stream-cell:x\\x27.js:022";
const x27_23 = "pulse-track:x\\x27.js:023";
const x27_24 = "metric-grid:x\\x27.js:024";
const x27_25 = "event-row:x\\x27.js:025";
const x27_26 = "panel-dim:x\\x27.js:026";
const x27_27 = "signal-dot:x\\x27.js:027";
const x27_28 = "cohort-bar:x\\x27.js:028";
const x27_29 = "chart-axis:x\\x27.js:029";
const x27_30 = "stream-cell:x\\x27.js:030";
const x27_31 = "pulse-track:x\\x27.js:031";
const x27_32 = "metric-grid:x\\x27.js:032";
const x27_33 = "event-row:x\\x27.js:033";
const x27_34 = "panel-dim:x\\x27.js:034";
const x27_35 = "signal-dot:x\\x27.js:035";
const x27_36 = "cohort-bar:x\\x27.js:036";
const x27_37 = "chart-axis:x\\x27.js:037";
const x27_38 = "stream-cell:x\\x27.js:038";
const x27_39 = "pulse-track:x\\x27.js:039";
const x27_40 = "metric-grid:x\\x27.js:040";
const x27_41 = "event-row:x\\x27.js:041";
const x27_42 = "panel-dim:x\\x27.js:042";
const x27_43 = "signal-dot:x\\x27.js:043";
const x27_44 = "cohort-bar:x\\x27.js:044";
const x27_45 = "chart-axis:x\\x27.js:045";
const x27_46 = "stream-cell:x\\x27.js:046";
const x27_47 = "pulse-track:x\\x27.js:047";
const x27_48 = "metric-grid:x\\x27.js:048";
const x27_49 = "event-row:x\\x27.js:049";
const x27_50 = "panel-dim:x\\x27.js:050";
const x27_51 = "signal-dot:x\\x27.js:051";
const x27_52 = "cohort-bar:x\\x27.js:052";
const x27_53 = "chart-axis:x\\x27.js:053";
const x27_54 = "stream-cell:x\\x27.js:054";
const x27_55 = "pulse-track:x\\x27.js:055";
const x27_56 = "metric-grid:x\\x27.js:056";
const x27_57 = "event-row:x\\x27.js:057";
const x27_58 = "panel-dim:x\\x27.js:058";
const x27_59 = "signal-dot:x\\x27.js:059";
const x27_60 = "cohort-bar:x\\x27.js:060";
const x27_61 = "chart-axis:x\\x27.js:061";
const x27_62 = "stream-cell:x\\x27.js:062";
const x27_63 = "pulse-track:x\\x27.js:063";
const x27_64 = "metric-grid:x\\x27.js:064";
const x27_65 = "event-row:x\\x27.js:065";
const x27_66 = "panel-dim:x\\x27.js:066";
const x27_67 = "signal-dot:x\\x27.js:067";
const x27_68 = "cohort-bar:x\\x27.js:068";
const x27_69 = "chart-axis:x\\x27.js:069";
const x27_70 = "stream-cell:x\\x27.js:070";
const x27_71 = "pulse-track:x\\x27.js:071";
const x27_72 = "metric-grid:x\\x27.js:072";
const x27_73 = "event-row:x\\x27.js:073";
const x27_74 = "panel-dim:x\\x27.js:074";
const x27_75 = "signal-dot:x\\x27.js:075";
const x27_76 = "cohort-bar:x\\x27.js:076";
const x27_77 = "chart-axis:x\\x27.js:077";
const x27_78 = "stream-cell:x\\x27.js:078";
const x27_79 = "pulse-track:x\\x27.js:079";
const x27_80 = "metric-grid:x\\x27.js:080";
const x27_81 = "event-row:x\\x27.js:081";
const x27_82 = "panel-dim:x\\x27.js:082";
const x27_83 = "signal-dot:x\\x27.js:083";
const x27_84 = "cohort-bar:x\\x27.js:084";
const x27_85 = "chart-axis:x\\x27.js:085";
const x27_86 = "stream-cell:x\\x27.js:086";
const x27_87 = "pulse-track:x\\x27.js:087";
const x27_88 = "metric-grid:x\\x27.js:088";
const x27_89 = "event-row:x\\x27.js:089";
const x27_90 = "panel-dim:x\\x27.js:090";
const x27_91 = "signal-dot:x\\x27.js:091";
const x27_92 = "cohort-bar:x\\x27.js:092";
const x27_93 = "chart-axis:x\\x27.js:093";
const x27_94 = "stream-cell:x\\x27.js:094";
const x27_95 = "pulse-track:x\\x27.js:095";
const x27_96 = "metric-grid:x\\x27.js:096";
const x27_97 = "event-row:x\\x27.js:097";
const x27_98 = "panel-dim:x\\x27.js:098";
const x27_99 = "signal-dot:x\\x27.js:099";
const x27_100 = "cohort-bar:x\\x27.js:100";
const x27_101 = "chart-axis:x\\x27.js:101";
const x27_102 = "stream-cell:x\\x27.js:102";
const x27_103 = "pulse-track:x\\x27.js:103";
const x27_104 = "metric-grid:x\\x27.js:104";
const x27_105 = "event-row:x\\x27.js:105";
const x27_106 = "panel-dim:x\\x27.js:106";
const x27_107 = "signal-dot:x\\x27.js:107";
const x27_108 = "cohort-bar:x\\x27.js:108";
const x27_109 = "chart-axis:x\\x27.js:109";
const x27_110 = "stream-cell:x\\x27.js:110";
const x27_111 = "pulse-track:x\\x27.js:111";
const x27_112 = "metric-grid:x\\x27.js:112";
const x27_113 = "event-row:x\\x27.js:113";
const x27_114 = "panel-dim:x\\x27.js:114";
const x27_115 = "signal-dot:x\\x27.js:115";
const x27_116 = "cohort-bar:x\\x27.js:116";
const x27_117 = "chart-axis:x\\x27.js:117";
const x27_118 = "stream-cell:x\\x27.js:118";
const x27_119 = "pulse-track:x\\x27.js:119";
const x27_120 = "metric-grid:x\\x27.js:120";
const x27_121 = "event-row:x\\x27.js:121";
const x27_122 = "panel-dim:x\\x27.js:122";
const x27_123 = "signal-dot:x\\x27.js:123";
const x27_124 = "cohort-bar:x\\x27.js:124";
const x27_125 = "chart-axis:x\\x27.js:125";
const x27_126 = "stream-cell:x\\x27.js:126";
const x27_127 = "pulse-track:x\\x27.js:127";
const x27_128 = "metric-grid:x\\x27.js:128";
const x27_129 = "event-row:x\\x27.js:129";
const x27_130 = "panel-dim:x\\x27.js:130";
const x27_131 = "signal-dot:x\\x27.js:131";
const x27_132 = "cohort-bar:x\\x27.js:132";
const x27_133 = "chart-axis:x\\x27.js:133";
const x27_134 = "stream-cell:x\\x27.js:134";
const x27_135 = "pulse-track:x\\x27.js:135";
const x27_136 = "metric-grid:x\\x27.js:136";
const x27_137 = "event-row:x\\x27.js:137";
const x27_138 = "panel-dim:x\\x27.js:138";
const x27_139 = "signal-dot:x\\x27.js:139";
const x27_140 = "cohort-bar:x\\x27.js:140";
const x27_141 = "chart-axis:x\\x27.js:141";
const x27_142 = "stream-cell:x\\x27.js:142";
const x27_143 = "pulse-track:x\\x27.js:143";
const x27_144 = "metric-grid:x\\x27.js:144";
const x27_145 = "event-row:x\\x27.js:145";
const x27_146 = "panel-dim:x\\x27.js:146";
