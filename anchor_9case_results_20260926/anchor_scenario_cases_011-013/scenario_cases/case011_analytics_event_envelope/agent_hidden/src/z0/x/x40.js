import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 40,
  salt: 'm:14:lane',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2060',
  shift: 7,
  mask: 1457683898
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig40@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '4', y: '4', n: 1 },
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
const x40_0 = "metric-grid:x\\x40.js:000";
const x40_1 = "event-row:x\\x40.js:001";
const x40_2 = "panel-dim:x\\x40.js:002";
const x40_3 = "signal-dot:x\\x40.js:003";
const x40_4 = "cohort-bar:x\\x40.js:004";
const x40_5 = "chart-axis:x\\x40.js:005";
const x40_6 = "stream-cell:x\\x40.js:006";
const x40_7 = "pulse-track:x\\x40.js:007";
const x40_8 = "metric-grid:x\\x40.js:008";
const x40_9 = "event-row:x\\x40.js:009";
const x40_10 = "panel-dim:x\\x40.js:010";
const x40_11 = "signal-dot:x\\x40.js:011";
const x40_12 = "cohort-bar:x\\x40.js:012";
const x40_13 = "chart-axis:x\\x40.js:013";
const x40_14 = "stream-cell:x\\x40.js:014";
const x40_15 = "pulse-track:x\\x40.js:015";
const x40_16 = "metric-grid:x\\x40.js:016";
const x40_17 = "event-row:x\\x40.js:017";
const x40_18 = "panel-dim:x\\x40.js:018";
const x40_19 = "signal-dot:x\\x40.js:019";
const x40_20 = "cohort-bar:x\\x40.js:020";
const x40_21 = "chart-axis:x\\x40.js:021";
const x40_22 = "stream-cell:x\\x40.js:022";
const x40_23 = "pulse-track:x\\x40.js:023";
const x40_24 = "metric-grid:x\\x40.js:024";
const x40_25 = "event-row:x\\x40.js:025";
const x40_26 = "panel-dim:x\\x40.js:026";
const x40_27 = "signal-dot:x\\x40.js:027";
const x40_28 = "cohort-bar:x\\x40.js:028";
const x40_29 = "chart-axis:x\\x40.js:029";
const x40_30 = "stream-cell:x\\x40.js:030";
const x40_31 = "pulse-track:x\\x40.js:031";
const x40_32 = "metric-grid:x\\x40.js:032";
const x40_33 = "event-row:x\\x40.js:033";
const x40_34 = "panel-dim:x\\x40.js:034";
const x40_35 = "signal-dot:x\\x40.js:035";
const x40_36 = "cohort-bar:x\\x40.js:036";
const x40_37 = "chart-axis:x\\x40.js:037";
const x40_38 = "stream-cell:x\\x40.js:038";
const x40_39 = "pulse-track:x\\x40.js:039";
const x40_40 = "metric-grid:x\\x40.js:040";
const x40_41 = "event-row:x\\x40.js:041";
const x40_42 = "panel-dim:x\\x40.js:042";
const x40_43 = "signal-dot:x\\x40.js:043";
const x40_44 = "cohort-bar:x\\x40.js:044";
const x40_45 = "chart-axis:x\\x40.js:045";
const x40_46 = "stream-cell:x\\x40.js:046";
const x40_47 = "pulse-track:x\\x40.js:047";
const x40_48 = "metric-grid:x\\x40.js:048";
const x40_49 = "event-row:x\\x40.js:049";
const x40_50 = "panel-dim:x\\x40.js:050";
const x40_51 = "signal-dot:x\\x40.js:051";
const x40_52 = "cohort-bar:x\\x40.js:052";
const x40_53 = "chart-axis:x\\x40.js:053";
const x40_54 = "stream-cell:x\\x40.js:054";
const x40_55 = "pulse-track:x\\x40.js:055";
const x40_56 = "metric-grid:x\\x40.js:056";
const x40_57 = "event-row:x\\x40.js:057";
const x40_58 = "panel-dim:x\\x40.js:058";
const x40_59 = "signal-dot:x\\x40.js:059";
const x40_60 = "cohort-bar:x\\x40.js:060";
const x40_61 = "chart-axis:x\\x40.js:061";
const x40_62 = "stream-cell:x\\x40.js:062";
const x40_63 = "pulse-track:x\\x40.js:063";
const x40_64 = "metric-grid:x\\x40.js:064";
const x40_65 = "event-row:x\\x40.js:065";
const x40_66 = "panel-dim:x\\x40.js:066";
const x40_67 = "signal-dot:x\\x40.js:067";
const x40_68 = "cohort-bar:x\\x40.js:068";
const x40_69 = "chart-axis:x\\x40.js:069";
const x40_70 = "stream-cell:x\\x40.js:070";
const x40_71 = "pulse-track:x\\x40.js:071";
const x40_72 = "metric-grid:x\\x40.js:072";
const x40_73 = "event-row:x\\x40.js:073";
const x40_74 = "panel-dim:x\\x40.js:074";
const x40_75 = "signal-dot:x\\x40.js:075";
const x40_76 = "cohort-bar:x\\x40.js:076";
const x40_77 = "chart-axis:x\\x40.js:077";
const x40_78 = "stream-cell:x\\x40.js:078";
const x40_79 = "pulse-track:x\\x40.js:079";
const x40_80 = "metric-grid:x\\x40.js:080";
const x40_81 = "event-row:x\\x40.js:081";
const x40_82 = "panel-dim:x\\x40.js:082";
const x40_83 = "signal-dot:x\\x40.js:083";
const x40_84 = "cohort-bar:x\\x40.js:084";
const x40_85 = "chart-axis:x\\x40.js:085";
const x40_86 = "stream-cell:x\\x40.js:086";
const x40_87 = "pulse-track:x\\x40.js:087";
const x40_88 = "metric-grid:x\\x40.js:088";
const x40_89 = "event-row:x\\x40.js:089";
const x40_90 = "panel-dim:x\\x40.js:090";
const x40_91 = "signal-dot:x\\x40.js:091";
const x40_92 = "cohort-bar:x\\x40.js:092";
const x40_93 = "chart-axis:x\\x40.js:093";
const x40_94 = "stream-cell:x\\x40.js:094";
const x40_95 = "pulse-track:x\\x40.js:095";
const x40_96 = "metric-grid:x\\x40.js:096";
const x40_97 = "event-row:x\\x40.js:097";
const x40_98 = "panel-dim:x\\x40.js:098";
const x40_99 = "signal-dot:x\\x40.js:099";
const x40_100 = "cohort-bar:x\\x40.js:100";
const x40_101 = "chart-axis:x\\x40.js:101";
const x40_102 = "stream-cell:x\\x40.js:102";
const x40_103 = "pulse-track:x\\x40.js:103";
const x40_104 = "metric-grid:x\\x40.js:104";
const x40_105 = "event-row:x\\x40.js:105";
const x40_106 = "panel-dim:x\\x40.js:106";
const x40_107 = "signal-dot:x\\x40.js:107";
const x40_108 = "cohort-bar:x\\x40.js:108";
const x40_109 = "chart-axis:x\\x40.js:109";
const x40_110 = "stream-cell:x\\x40.js:110";
const x40_111 = "pulse-track:x\\x40.js:111";
const x40_112 = "metric-grid:x\\x40.js:112";
const x40_113 = "event-row:x\\x40.js:113";
const x40_114 = "panel-dim:x\\x40.js:114";
const x40_115 = "signal-dot:x\\x40.js:115";
const x40_116 = "cohort-bar:x\\x40.js:116";
const x40_117 = "chart-axis:x\\x40.js:117";
const x40_118 = "stream-cell:x\\x40.js:118";
const x40_119 = "pulse-track:x\\x40.js:119";
const x40_120 = "metric-grid:x\\x40.js:120";
const x40_121 = "event-row:x\\x40.js:121";
const x40_122 = "panel-dim:x\\x40.js:122";
const x40_123 = "signal-dot:x\\x40.js:123";
const x40_124 = "cohort-bar:x\\x40.js:124";
const x40_125 = "chart-axis:x\\x40.js:125";
const x40_126 = "stream-cell:x\\x40.js:126";
const x40_127 = "pulse-track:x\\x40.js:127";
const x40_128 = "metric-grid:x\\x40.js:128";
const x40_129 = "event-row:x\\x40.js:129";
const x40_130 = "panel-dim:x\\x40.js:130";
const x40_131 = "signal-dot:x\\x40.js:131";
const x40_132 = "cohort-bar:x\\x40.js:132";
const x40_133 = "chart-axis:x\\x40.js:133";
const x40_134 = "stream-cell:x\\x40.js:134";
const x40_135 = "pulse-track:x\\x40.js:135";
const x40_136 = "metric-grid:x\\x40.js:136";
const x40_137 = "event-row:x\\x40.js:137";
const x40_138 = "panel-dim:x\\x40.js:138";
const x40_139 = "signal-dot:x\\x40.js:139";
const x40_140 = "cohort-bar:x\\x40.js:140";
const x40_141 = "chart-axis:x\\x40.js:141";
const x40_142 = "stream-cell:x\\x40.js:142";
const x40_143 = "pulse-track:x\\x40.js:143";
const x40_144 = "metric-grid:x\\x40.js:144";
const x40_145 = "event-row:x\\x40.js:145";
const x40_146 = "panel-dim:x\\x40.js:146";
