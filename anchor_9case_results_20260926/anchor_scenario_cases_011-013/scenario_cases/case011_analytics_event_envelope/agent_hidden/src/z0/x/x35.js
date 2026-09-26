import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 35,
  salt: 'm:0z:lane',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 11,
  mask: 1070406981
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row35@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
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
const x35_0 = "metric-grid:x\\x35.js:000";
const x35_1 = "event-row:x\\x35.js:001";
const x35_2 = "panel-dim:x\\x35.js:002";
const x35_3 = "signal-dot:x\\x35.js:003";
const x35_4 = "cohort-bar:x\\x35.js:004";
const x35_5 = "chart-axis:x\\x35.js:005";
const x35_6 = "stream-cell:x\\x35.js:006";
const x35_7 = "pulse-track:x\\x35.js:007";
const x35_8 = "metric-grid:x\\x35.js:008";
const x35_9 = "event-row:x\\x35.js:009";
const x35_10 = "panel-dim:x\\x35.js:010";
const x35_11 = "signal-dot:x\\x35.js:011";
const x35_12 = "cohort-bar:x\\x35.js:012";
const x35_13 = "chart-axis:x\\x35.js:013";
const x35_14 = "stream-cell:x\\x35.js:014";
const x35_15 = "pulse-track:x\\x35.js:015";
const x35_16 = "metric-grid:x\\x35.js:016";
const x35_17 = "event-row:x\\x35.js:017";
const x35_18 = "panel-dim:x\\x35.js:018";
const x35_19 = "signal-dot:x\\x35.js:019";
const x35_20 = "cohort-bar:x\\x35.js:020";
const x35_21 = "chart-axis:x\\x35.js:021";
const x35_22 = "stream-cell:x\\x35.js:022";
const x35_23 = "pulse-track:x\\x35.js:023";
const x35_24 = "metric-grid:x\\x35.js:024";
const x35_25 = "event-row:x\\x35.js:025";
const x35_26 = "panel-dim:x\\x35.js:026";
const x35_27 = "signal-dot:x\\x35.js:027";
const x35_28 = "cohort-bar:x\\x35.js:028";
const x35_29 = "chart-axis:x\\x35.js:029";
const x35_30 = "stream-cell:x\\x35.js:030";
const x35_31 = "pulse-track:x\\x35.js:031";
const x35_32 = "metric-grid:x\\x35.js:032";
const x35_33 = "event-row:x\\x35.js:033";
const x35_34 = "panel-dim:x\\x35.js:034";
const x35_35 = "signal-dot:x\\x35.js:035";
const x35_36 = "cohort-bar:x\\x35.js:036";
const x35_37 = "chart-axis:x\\x35.js:037";
const x35_38 = "stream-cell:x\\x35.js:038";
const x35_39 = "pulse-track:x\\x35.js:039";
const x35_40 = "metric-grid:x\\x35.js:040";
const x35_41 = "event-row:x\\x35.js:041";
const x35_42 = "panel-dim:x\\x35.js:042";
const x35_43 = "signal-dot:x\\x35.js:043";
const x35_44 = "cohort-bar:x\\x35.js:044";
const x35_45 = "chart-axis:x\\x35.js:045";
const x35_46 = "stream-cell:x\\x35.js:046";
const x35_47 = "pulse-track:x\\x35.js:047";
const x35_48 = "metric-grid:x\\x35.js:048";
const x35_49 = "event-row:x\\x35.js:049";
const x35_50 = "panel-dim:x\\x35.js:050";
const x35_51 = "signal-dot:x\\x35.js:051";
const x35_52 = "cohort-bar:x\\x35.js:052";
const x35_53 = "chart-axis:x\\x35.js:053";
const x35_54 = "stream-cell:x\\x35.js:054";
const x35_55 = "pulse-track:x\\x35.js:055";
const x35_56 = "metric-grid:x\\x35.js:056";
const x35_57 = "event-row:x\\x35.js:057";
const x35_58 = "panel-dim:x\\x35.js:058";
const x35_59 = "signal-dot:x\\x35.js:059";
const x35_60 = "cohort-bar:x\\x35.js:060";
const x35_61 = "chart-axis:x\\x35.js:061";
const x35_62 = "stream-cell:x\\x35.js:062";
const x35_63 = "pulse-track:x\\x35.js:063";
const x35_64 = "metric-grid:x\\x35.js:064";
const x35_65 = "event-row:x\\x35.js:065";
const x35_66 = "panel-dim:x\\x35.js:066";
const x35_67 = "signal-dot:x\\x35.js:067";
const x35_68 = "cohort-bar:x\\x35.js:068";
const x35_69 = "chart-axis:x\\x35.js:069";
const x35_70 = "stream-cell:x\\x35.js:070";
const x35_71 = "pulse-track:x\\x35.js:071";
const x35_72 = "metric-grid:x\\x35.js:072";
const x35_73 = "event-row:x\\x35.js:073";
const x35_74 = "panel-dim:x\\x35.js:074";
const x35_75 = "signal-dot:x\\x35.js:075";
const x35_76 = "cohort-bar:x\\x35.js:076";
const x35_77 = "chart-axis:x\\x35.js:077";
const x35_78 = "stream-cell:x\\x35.js:078";
const x35_79 = "pulse-track:x\\x35.js:079";
const x35_80 = "metric-grid:x\\x35.js:080";
const x35_81 = "event-row:x\\x35.js:081";
const x35_82 = "panel-dim:x\\x35.js:082";
const x35_83 = "signal-dot:x\\x35.js:083";
const x35_84 = "cohort-bar:x\\x35.js:084";
const x35_85 = "chart-axis:x\\x35.js:085";
const x35_86 = "stream-cell:x\\x35.js:086";
const x35_87 = "pulse-track:x\\x35.js:087";
const x35_88 = "metric-grid:x\\x35.js:088";
const x35_89 = "event-row:x\\x35.js:089";
const x35_90 = "panel-dim:x\\x35.js:090";
const x35_91 = "signal-dot:x\\x35.js:091";
const x35_92 = "cohort-bar:x\\x35.js:092";
const x35_93 = "chart-axis:x\\x35.js:093";
const x35_94 = "stream-cell:x\\x35.js:094";
const x35_95 = "pulse-track:x\\x35.js:095";
const x35_96 = "metric-grid:x\\x35.js:096";
const x35_97 = "event-row:x\\x35.js:097";
const x35_98 = "panel-dim:x\\x35.js:098";
const x35_99 = "signal-dot:x\\x35.js:099";
const x35_100 = "cohort-bar:x\\x35.js:100";
const x35_101 = "chart-axis:x\\x35.js:101";
const x35_102 = "stream-cell:x\\x35.js:102";
const x35_103 = "pulse-track:x\\x35.js:103";
const x35_104 = "metric-grid:x\\x35.js:104";
const x35_105 = "event-row:x\\x35.js:105";
const x35_106 = "panel-dim:x\\x35.js:106";
const x35_107 = "signal-dot:x\\x35.js:107";
const x35_108 = "cohort-bar:x\\x35.js:108";
const x35_109 = "chart-axis:x\\x35.js:109";
const x35_110 = "stream-cell:x\\x35.js:110";
const x35_111 = "pulse-track:x\\x35.js:111";
const x35_112 = "metric-grid:x\\x35.js:112";
const x35_113 = "event-row:x\\x35.js:113";
const x35_114 = "panel-dim:x\\x35.js:114";
const x35_115 = "signal-dot:x\\x35.js:115";
const x35_116 = "cohort-bar:x\\x35.js:116";
const x35_117 = "chart-axis:x\\x35.js:117";
const x35_118 = "stream-cell:x\\x35.js:118";
const x35_119 = "pulse-track:x\\x35.js:119";
const x35_120 = "metric-grid:x\\x35.js:120";
const x35_121 = "event-row:x\\x35.js:121";
const x35_122 = "panel-dim:x\\x35.js:122";
const x35_123 = "signal-dot:x\\x35.js:123";
const x35_124 = "cohort-bar:x\\x35.js:124";
const x35_125 = "chart-axis:x\\x35.js:125";
const x35_126 = "stream-cell:x\\x35.js:126";
const x35_127 = "pulse-track:x\\x35.js:127";
const x35_128 = "metric-grid:x\\x35.js:128";
const x35_129 = "event-row:x\\x35.js:129";
const x35_130 = "panel-dim:x\\x35.js:130";
const x35_131 = "signal-dot:x\\x35.js:131";
const x35_132 = "cohort-bar:x\\x35.js:132";
const x35_133 = "chart-axis:x\\x35.js:133";
const x35_134 = "stream-cell:x\\x35.js:134";
const x35_135 = "pulse-track:x\\x35.js:135";
const x35_136 = "metric-grid:x\\x35.js:136";
const x35_137 = "event-row:x\\x35.js:137";
const x35_138 = "panel-dim:x\\x35.js:138";
const x35_139 = "signal-dot:x\\x35.js:139";
const x35_140 = "cohort-bar:x\\x35.js:140";
const x35_141 = "chart-axis:x\\x35.js:141";
const x35_142 = "stream-cell:x\\x35.js:142";
const x35_143 = "pulse-track:x\\x35.js:143";
const x35_144 = "metric-grid:x\\x35.js:144";
const x35_145 = "event-row:x\\x35.js:145";
const x35_146 = "panel-dim:x\\x35.js:146";
