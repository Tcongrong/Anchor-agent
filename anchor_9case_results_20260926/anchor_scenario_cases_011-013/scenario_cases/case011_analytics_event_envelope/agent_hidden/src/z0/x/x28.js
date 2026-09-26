import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 28,
  salt: 'm:0s:lane',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 4,
  mask: 3964193134
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig28@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
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
const x28_0 = "metric-grid:x\\x28.js:000";
const x28_1 = "event-row:x\\x28.js:001";
const x28_2 = "panel-dim:x\\x28.js:002";
const x28_3 = "signal-dot:x\\x28.js:003";
const x28_4 = "cohort-bar:x\\x28.js:004";
const x28_5 = "chart-axis:x\\x28.js:005";
const x28_6 = "stream-cell:x\\x28.js:006";
const x28_7 = "pulse-track:x\\x28.js:007";
const x28_8 = "metric-grid:x\\x28.js:008";
const x28_9 = "event-row:x\\x28.js:009";
const x28_10 = "panel-dim:x\\x28.js:010";
const x28_11 = "signal-dot:x\\x28.js:011";
const x28_12 = "cohort-bar:x\\x28.js:012";
const x28_13 = "chart-axis:x\\x28.js:013";
const x28_14 = "stream-cell:x\\x28.js:014";
const x28_15 = "pulse-track:x\\x28.js:015";
const x28_16 = "metric-grid:x\\x28.js:016";
const x28_17 = "event-row:x\\x28.js:017";
const x28_18 = "panel-dim:x\\x28.js:018";
const x28_19 = "signal-dot:x\\x28.js:019";
const x28_20 = "cohort-bar:x\\x28.js:020";
const x28_21 = "chart-axis:x\\x28.js:021";
const x28_22 = "stream-cell:x\\x28.js:022";
const x28_23 = "pulse-track:x\\x28.js:023";
const x28_24 = "metric-grid:x\\x28.js:024";
const x28_25 = "event-row:x\\x28.js:025";
const x28_26 = "panel-dim:x\\x28.js:026";
const x28_27 = "signal-dot:x\\x28.js:027";
const x28_28 = "cohort-bar:x\\x28.js:028";
const x28_29 = "chart-axis:x\\x28.js:029";
const x28_30 = "stream-cell:x\\x28.js:030";
const x28_31 = "pulse-track:x\\x28.js:031";
const x28_32 = "metric-grid:x\\x28.js:032";
const x28_33 = "event-row:x\\x28.js:033";
const x28_34 = "panel-dim:x\\x28.js:034";
const x28_35 = "signal-dot:x\\x28.js:035";
const x28_36 = "cohort-bar:x\\x28.js:036";
const x28_37 = "chart-axis:x\\x28.js:037";
const x28_38 = "stream-cell:x\\x28.js:038";
const x28_39 = "pulse-track:x\\x28.js:039";
const x28_40 = "metric-grid:x\\x28.js:040";
const x28_41 = "event-row:x\\x28.js:041";
const x28_42 = "panel-dim:x\\x28.js:042";
const x28_43 = "signal-dot:x\\x28.js:043";
const x28_44 = "cohort-bar:x\\x28.js:044";
const x28_45 = "chart-axis:x\\x28.js:045";
const x28_46 = "stream-cell:x\\x28.js:046";
const x28_47 = "pulse-track:x\\x28.js:047";
const x28_48 = "metric-grid:x\\x28.js:048";
const x28_49 = "event-row:x\\x28.js:049";
const x28_50 = "panel-dim:x\\x28.js:050";
const x28_51 = "signal-dot:x\\x28.js:051";
const x28_52 = "cohort-bar:x\\x28.js:052";
const x28_53 = "chart-axis:x\\x28.js:053";
const x28_54 = "stream-cell:x\\x28.js:054";
const x28_55 = "pulse-track:x\\x28.js:055";
const x28_56 = "metric-grid:x\\x28.js:056";
const x28_57 = "event-row:x\\x28.js:057";
const x28_58 = "panel-dim:x\\x28.js:058";
const x28_59 = "signal-dot:x\\x28.js:059";
const x28_60 = "cohort-bar:x\\x28.js:060";
const x28_61 = "chart-axis:x\\x28.js:061";
const x28_62 = "stream-cell:x\\x28.js:062";
const x28_63 = "pulse-track:x\\x28.js:063";
const x28_64 = "metric-grid:x\\x28.js:064";
const x28_65 = "event-row:x\\x28.js:065";
const x28_66 = "panel-dim:x\\x28.js:066";
const x28_67 = "signal-dot:x\\x28.js:067";
const x28_68 = "cohort-bar:x\\x28.js:068";
const x28_69 = "chart-axis:x\\x28.js:069";
const x28_70 = "stream-cell:x\\x28.js:070";
const x28_71 = "pulse-track:x\\x28.js:071";
const x28_72 = "metric-grid:x\\x28.js:072";
const x28_73 = "event-row:x\\x28.js:073";
const x28_74 = "panel-dim:x\\x28.js:074";
const x28_75 = "signal-dot:x\\x28.js:075";
const x28_76 = "cohort-bar:x\\x28.js:076";
const x28_77 = "chart-axis:x\\x28.js:077";
const x28_78 = "stream-cell:x\\x28.js:078";
const x28_79 = "pulse-track:x\\x28.js:079";
const x28_80 = "metric-grid:x\\x28.js:080";
const x28_81 = "event-row:x\\x28.js:081";
const x28_82 = "panel-dim:x\\x28.js:082";
const x28_83 = "signal-dot:x\\x28.js:083";
const x28_84 = "cohort-bar:x\\x28.js:084";
const x28_85 = "chart-axis:x\\x28.js:085";
const x28_86 = "stream-cell:x\\x28.js:086";
const x28_87 = "pulse-track:x\\x28.js:087";
const x28_88 = "metric-grid:x\\x28.js:088";
const x28_89 = "event-row:x\\x28.js:089";
const x28_90 = "panel-dim:x\\x28.js:090";
const x28_91 = "signal-dot:x\\x28.js:091";
const x28_92 = "cohort-bar:x\\x28.js:092";
const x28_93 = "chart-axis:x\\x28.js:093";
const x28_94 = "stream-cell:x\\x28.js:094";
const x28_95 = "pulse-track:x\\x28.js:095";
const x28_96 = "metric-grid:x\\x28.js:096";
const x28_97 = "event-row:x\\x28.js:097";
const x28_98 = "panel-dim:x\\x28.js:098";
const x28_99 = "signal-dot:x\\x28.js:099";
const x28_100 = "cohort-bar:x\\x28.js:100";
const x28_101 = "chart-axis:x\\x28.js:101";
const x28_102 = "stream-cell:x\\x28.js:102";
const x28_103 = "pulse-track:x\\x28.js:103";
const x28_104 = "metric-grid:x\\x28.js:104";
const x28_105 = "event-row:x\\x28.js:105";
const x28_106 = "panel-dim:x\\x28.js:106";
const x28_107 = "signal-dot:x\\x28.js:107";
const x28_108 = "cohort-bar:x\\x28.js:108";
const x28_109 = "chart-axis:x\\x28.js:109";
const x28_110 = "stream-cell:x\\x28.js:110";
const x28_111 = "pulse-track:x\\x28.js:111";
const x28_112 = "metric-grid:x\\x28.js:112";
const x28_113 = "event-row:x\\x28.js:113";
const x28_114 = "panel-dim:x\\x28.js:114";
const x28_115 = "signal-dot:x\\x28.js:115";
const x28_116 = "cohort-bar:x\\x28.js:116";
const x28_117 = "chart-axis:x\\x28.js:117";
const x28_118 = "stream-cell:x\\x28.js:118";
const x28_119 = "pulse-track:x\\x28.js:119";
const x28_120 = "metric-grid:x\\x28.js:120";
const x28_121 = "event-row:x\\x28.js:121";
const x28_122 = "panel-dim:x\\x28.js:122";
const x28_123 = "signal-dot:x\\x28.js:123";
const x28_124 = "cohort-bar:x\\x28.js:124";
const x28_125 = "chart-axis:x\\x28.js:125";
const x28_126 = "stream-cell:x\\x28.js:126";
const x28_127 = "pulse-track:x\\x28.js:127";
const x28_128 = "metric-grid:x\\x28.js:128";
const x28_129 = "event-row:x\\x28.js:129";
const x28_130 = "panel-dim:x\\x28.js:130";
const x28_131 = "signal-dot:x\\x28.js:131";
const x28_132 = "cohort-bar:x\\x28.js:132";
const x28_133 = "chart-axis:x\\x28.js:133";
const x28_134 = "stream-cell:x\\x28.js:134";
const x28_135 = "pulse-track:x\\x28.js:135";
const x28_136 = "metric-grid:x\\x28.js:136";
const x28_137 = "event-row:x\\x28.js:137";
const x28_138 = "panel-dim:x\\x28.js:138";
const x28_139 = "signal-dot:x\\x28.js:139";
const x28_140 = "cohort-bar:x\\x28.js:140";
const x28_141 = "chart-axis:x\\x28.js:141";
const x28_142 = "stream-cell:x\\x28.js:142";
const x28_143 = "pulse-track:x\\x28.js:143";
const x28_144 = "metric-grid:x\\x28.js:144";
const x28_145 = "event-row:x\\x28.js:145";
const x28_146 = "panel-dim:x\\x28.js:146";
