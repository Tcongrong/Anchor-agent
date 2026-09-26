import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 37,
  salt: 'm:11:lane',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2061',
  shift: 4,
  mask: 2084311207
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig37@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
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
const x37_0 = "metric-grid:x\\x37.js:000";
const x37_1 = "event-row:x\\x37.js:001";
const x37_2 = "panel-dim:x\\x37.js:002";
const x37_3 = "signal-dot:x\\x37.js:003";
const x37_4 = "cohort-bar:x\\x37.js:004";
const x37_5 = "chart-axis:x\\x37.js:005";
const x37_6 = "stream-cell:x\\x37.js:006";
const x37_7 = "pulse-track:x\\x37.js:007";
const x37_8 = "metric-grid:x\\x37.js:008";
const x37_9 = "event-row:x\\x37.js:009";
const x37_10 = "panel-dim:x\\x37.js:010";
const x37_11 = "signal-dot:x\\x37.js:011";
const x37_12 = "cohort-bar:x\\x37.js:012";
const x37_13 = "chart-axis:x\\x37.js:013";
const x37_14 = "stream-cell:x\\x37.js:014";
const x37_15 = "pulse-track:x\\x37.js:015";
const x37_16 = "metric-grid:x\\x37.js:016";
const x37_17 = "event-row:x\\x37.js:017";
const x37_18 = "panel-dim:x\\x37.js:018";
const x37_19 = "signal-dot:x\\x37.js:019";
const x37_20 = "cohort-bar:x\\x37.js:020";
const x37_21 = "chart-axis:x\\x37.js:021";
const x37_22 = "stream-cell:x\\x37.js:022";
const x37_23 = "pulse-track:x\\x37.js:023";
const x37_24 = "metric-grid:x\\x37.js:024";
const x37_25 = "event-row:x\\x37.js:025";
const x37_26 = "panel-dim:x\\x37.js:026";
const x37_27 = "signal-dot:x\\x37.js:027";
const x37_28 = "cohort-bar:x\\x37.js:028";
const x37_29 = "chart-axis:x\\x37.js:029";
const x37_30 = "stream-cell:x\\x37.js:030";
const x37_31 = "pulse-track:x\\x37.js:031";
const x37_32 = "metric-grid:x\\x37.js:032";
const x37_33 = "event-row:x\\x37.js:033";
const x37_34 = "panel-dim:x\\x37.js:034";
const x37_35 = "signal-dot:x\\x37.js:035";
const x37_36 = "cohort-bar:x\\x37.js:036";
const x37_37 = "chart-axis:x\\x37.js:037";
const x37_38 = "stream-cell:x\\x37.js:038";
const x37_39 = "pulse-track:x\\x37.js:039";
const x37_40 = "metric-grid:x\\x37.js:040";
const x37_41 = "event-row:x\\x37.js:041";
const x37_42 = "panel-dim:x\\x37.js:042";
const x37_43 = "signal-dot:x\\x37.js:043";
const x37_44 = "cohort-bar:x\\x37.js:044";
const x37_45 = "chart-axis:x\\x37.js:045";
const x37_46 = "stream-cell:x\\x37.js:046";
const x37_47 = "pulse-track:x\\x37.js:047";
const x37_48 = "metric-grid:x\\x37.js:048";
const x37_49 = "event-row:x\\x37.js:049";
const x37_50 = "panel-dim:x\\x37.js:050";
const x37_51 = "signal-dot:x\\x37.js:051";
const x37_52 = "cohort-bar:x\\x37.js:052";
const x37_53 = "chart-axis:x\\x37.js:053";
const x37_54 = "stream-cell:x\\x37.js:054";
const x37_55 = "pulse-track:x\\x37.js:055";
const x37_56 = "metric-grid:x\\x37.js:056";
const x37_57 = "event-row:x\\x37.js:057";
const x37_58 = "panel-dim:x\\x37.js:058";
const x37_59 = "signal-dot:x\\x37.js:059";
const x37_60 = "cohort-bar:x\\x37.js:060";
const x37_61 = "chart-axis:x\\x37.js:061";
const x37_62 = "stream-cell:x\\x37.js:062";
const x37_63 = "pulse-track:x\\x37.js:063";
const x37_64 = "metric-grid:x\\x37.js:064";
const x37_65 = "event-row:x\\x37.js:065";
const x37_66 = "panel-dim:x\\x37.js:066";
const x37_67 = "signal-dot:x\\x37.js:067";
const x37_68 = "cohort-bar:x\\x37.js:068";
const x37_69 = "chart-axis:x\\x37.js:069";
const x37_70 = "stream-cell:x\\x37.js:070";
const x37_71 = "pulse-track:x\\x37.js:071";
const x37_72 = "metric-grid:x\\x37.js:072";
const x37_73 = "event-row:x\\x37.js:073";
const x37_74 = "panel-dim:x\\x37.js:074";
const x37_75 = "signal-dot:x\\x37.js:075";
const x37_76 = "cohort-bar:x\\x37.js:076";
const x37_77 = "chart-axis:x\\x37.js:077";
const x37_78 = "stream-cell:x\\x37.js:078";
const x37_79 = "pulse-track:x\\x37.js:079";
const x37_80 = "metric-grid:x\\x37.js:080";
const x37_81 = "event-row:x\\x37.js:081";
const x37_82 = "panel-dim:x\\x37.js:082";
const x37_83 = "signal-dot:x\\x37.js:083";
const x37_84 = "cohort-bar:x\\x37.js:084";
const x37_85 = "chart-axis:x\\x37.js:085";
const x37_86 = "stream-cell:x\\x37.js:086";
const x37_87 = "pulse-track:x\\x37.js:087";
const x37_88 = "metric-grid:x\\x37.js:088";
const x37_89 = "event-row:x\\x37.js:089";
const x37_90 = "panel-dim:x\\x37.js:090";
const x37_91 = "signal-dot:x\\x37.js:091";
const x37_92 = "cohort-bar:x\\x37.js:092";
const x37_93 = "chart-axis:x\\x37.js:093";
const x37_94 = "stream-cell:x\\x37.js:094";
const x37_95 = "pulse-track:x\\x37.js:095";
const x37_96 = "metric-grid:x\\x37.js:096";
const x37_97 = "event-row:x\\x37.js:097";
const x37_98 = "panel-dim:x\\x37.js:098";
const x37_99 = "signal-dot:x\\x37.js:099";
const x37_100 = "cohort-bar:x\\x37.js:100";
const x37_101 = "chart-axis:x\\x37.js:101";
const x37_102 = "stream-cell:x\\x37.js:102";
const x37_103 = "pulse-track:x\\x37.js:103";
const x37_104 = "metric-grid:x\\x37.js:104";
const x37_105 = "event-row:x\\x37.js:105";
const x37_106 = "panel-dim:x\\x37.js:106";
const x37_107 = "signal-dot:x\\x37.js:107";
const x37_108 = "cohort-bar:x\\x37.js:108";
const x37_109 = "chart-axis:x\\x37.js:109";
const x37_110 = "stream-cell:x\\x37.js:110";
const x37_111 = "pulse-track:x\\x37.js:111";
const x37_112 = "metric-grid:x\\x37.js:112";
const x37_113 = "event-row:x\\x37.js:113";
const x37_114 = "panel-dim:x\\x37.js:114";
const x37_115 = "signal-dot:x\\x37.js:115";
const x37_116 = "cohort-bar:x\\x37.js:116";
const x37_117 = "chart-axis:x\\x37.js:117";
const x37_118 = "stream-cell:x\\x37.js:118";
const x37_119 = "pulse-track:x\\x37.js:119";
const x37_120 = "metric-grid:x\\x37.js:120";
const x37_121 = "event-row:x\\x37.js:121";
const x37_122 = "panel-dim:x\\x37.js:122";
const x37_123 = "signal-dot:x\\x37.js:123";
const x37_124 = "cohort-bar:x\\x37.js:124";
const x37_125 = "chart-axis:x\\x37.js:125";
const x37_126 = "stream-cell:x\\x37.js:126";
const x37_127 = "pulse-track:x\\x37.js:127";
const x37_128 = "metric-grid:x\\x37.js:128";
const x37_129 = "event-row:x\\x37.js:129";
const x37_130 = "panel-dim:x\\x37.js:130";
const x37_131 = "signal-dot:x\\x37.js:131";
const x37_132 = "cohort-bar:x\\x37.js:132";
const x37_133 = "chart-axis:x\\x37.js:133";
const x37_134 = "stream-cell:x\\x37.js:134";
const x37_135 = "pulse-track:x\\x37.js:135";
const x37_136 = "metric-grid:x\\x37.js:136";
const x37_137 = "event-row:x\\x37.js:137";
const x37_138 = "panel-dim:x\\x37.js:138";
const x37_139 = "signal-dot:x\\x37.js:139";
const x37_140 = "cohort-bar:x\\x37.js:140";
const x37_141 = "chart-axis:x\\x37.js:141";
const x37_142 = "stream-cell:x\\x37.js:142";
const x37_143 = "pulse-track:x\\x37.js:143";
const x37_144 = "metric-grid:x\\x37.js:144";
const x37_145 = "event-row:x\\x37.js:145";
const x37_146 = "panel-dim:x\\x37.js:146";
