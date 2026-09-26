import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 26,
  salt: 'm:0q:lane',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2062',
  shift: 11,
  mask: 2950288908
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row26@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
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
const x26_0 = "metric-grid:x\\x26.js:000";
const x26_1 = "event-row:x\\x26.js:001";
const x26_2 = "panel-dim:x\\x26.js:002";
const x26_3 = "signal-dot:x\\x26.js:003";
const x26_4 = "cohort-bar:x\\x26.js:004";
const x26_5 = "chart-axis:x\\x26.js:005";
const x26_6 = "stream-cell:x\\x26.js:006";
const x26_7 = "pulse-track:x\\x26.js:007";
const x26_8 = "metric-grid:x\\x26.js:008";
const x26_9 = "event-row:x\\x26.js:009";
const x26_10 = "panel-dim:x\\x26.js:010";
const x26_11 = "signal-dot:x\\x26.js:011";
const x26_12 = "cohort-bar:x\\x26.js:012";
const x26_13 = "chart-axis:x\\x26.js:013";
const x26_14 = "stream-cell:x\\x26.js:014";
const x26_15 = "pulse-track:x\\x26.js:015";
const x26_16 = "metric-grid:x\\x26.js:016";
const x26_17 = "event-row:x\\x26.js:017";
const x26_18 = "panel-dim:x\\x26.js:018";
const x26_19 = "signal-dot:x\\x26.js:019";
const x26_20 = "cohort-bar:x\\x26.js:020";
const x26_21 = "chart-axis:x\\x26.js:021";
const x26_22 = "stream-cell:x\\x26.js:022";
const x26_23 = "pulse-track:x\\x26.js:023";
const x26_24 = "metric-grid:x\\x26.js:024";
const x26_25 = "event-row:x\\x26.js:025";
const x26_26 = "panel-dim:x\\x26.js:026";
const x26_27 = "signal-dot:x\\x26.js:027";
const x26_28 = "cohort-bar:x\\x26.js:028";
const x26_29 = "chart-axis:x\\x26.js:029";
const x26_30 = "stream-cell:x\\x26.js:030";
const x26_31 = "pulse-track:x\\x26.js:031";
const x26_32 = "metric-grid:x\\x26.js:032";
const x26_33 = "event-row:x\\x26.js:033";
const x26_34 = "panel-dim:x\\x26.js:034";
const x26_35 = "signal-dot:x\\x26.js:035";
const x26_36 = "cohort-bar:x\\x26.js:036";
const x26_37 = "chart-axis:x\\x26.js:037";
const x26_38 = "stream-cell:x\\x26.js:038";
const x26_39 = "pulse-track:x\\x26.js:039";
const x26_40 = "metric-grid:x\\x26.js:040";
const x26_41 = "event-row:x\\x26.js:041";
const x26_42 = "panel-dim:x\\x26.js:042";
const x26_43 = "signal-dot:x\\x26.js:043";
const x26_44 = "cohort-bar:x\\x26.js:044";
const x26_45 = "chart-axis:x\\x26.js:045";
const x26_46 = "stream-cell:x\\x26.js:046";
const x26_47 = "pulse-track:x\\x26.js:047";
const x26_48 = "metric-grid:x\\x26.js:048";
const x26_49 = "event-row:x\\x26.js:049";
const x26_50 = "panel-dim:x\\x26.js:050";
const x26_51 = "signal-dot:x\\x26.js:051";
const x26_52 = "cohort-bar:x\\x26.js:052";
const x26_53 = "chart-axis:x\\x26.js:053";
const x26_54 = "stream-cell:x\\x26.js:054";
const x26_55 = "pulse-track:x\\x26.js:055";
const x26_56 = "metric-grid:x\\x26.js:056";
const x26_57 = "event-row:x\\x26.js:057";
const x26_58 = "panel-dim:x\\x26.js:058";
const x26_59 = "signal-dot:x\\x26.js:059";
const x26_60 = "cohort-bar:x\\x26.js:060";
const x26_61 = "chart-axis:x\\x26.js:061";
const x26_62 = "stream-cell:x\\x26.js:062";
const x26_63 = "pulse-track:x\\x26.js:063";
const x26_64 = "metric-grid:x\\x26.js:064";
const x26_65 = "event-row:x\\x26.js:065";
const x26_66 = "panel-dim:x\\x26.js:066";
const x26_67 = "signal-dot:x\\x26.js:067";
const x26_68 = "cohort-bar:x\\x26.js:068";
const x26_69 = "chart-axis:x\\x26.js:069";
const x26_70 = "stream-cell:x\\x26.js:070";
const x26_71 = "pulse-track:x\\x26.js:071";
const x26_72 = "metric-grid:x\\x26.js:072";
const x26_73 = "event-row:x\\x26.js:073";
const x26_74 = "panel-dim:x\\x26.js:074";
const x26_75 = "signal-dot:x\\x26.js:075";
const x26_76 = "cohort-bar:x\\x26.js:076";
const x26_77 = "chart-axis:x\\x26.js:077";
const x26_78 = "stream-cell:x\\x26.js:078";
const x26_79 = "pulse-track:x\\x26.js:079";
const x26_80 = "metric-grid:x\\x26.js:080";
const x26_81 = "event-row:x\\x26.js:081";
const x26_82 = "panel-dim:x\\x26.js:082";
const x26_83 = "signal-dot:x\\x26.js:083";
const x26_84 = "cohort-bar:x\\x26.js:084";
const x26_85 = "chart-axis:x\\x26.js:085";
const x26_86 = "stream-cell:x\\x26.js:086";
const x26_87 = "pulse-track:x\\x26.js:087";
const x26_88 = "metric-grid:x\\x26.js:088";
const x26_89 = "event-row:x\\x26.js:089";
const x26_90 = "panel-dim:x\\x26.js:090";
const x26_91 = "signal-dot:x\\x26.js:091";
const x26_92 = "cohort-bar:x\\x26.js:092";
const x26_93 = "chart-axis:x\\x26.js:093";
const x26_94 = "stream-cell:x\\x26.js:094";
const x26_95 = "pulse-track:x\\x26.js:095";
const x26_96 = "metric-grid:x\\x26.js:096";
const x26_97 = "event-row:x\\x26.js:097";
const x26_98 = "panel-dim:x\\x26.js:098";
const x26_99 = "signal-dot:x\\x26.js:099";
const x26_100 = "cohort-bar:x\\x26.js:100";
const x26_101 = "chart-axis:x\\x26.js:101";
const x26_102 = "stream-cell:x\\x26.js:102";
const x26_103 = "pulse-track:x\\x26.js:103";
const x26_104 = "metric-grid:x\\x26.js:104";
const x26_105 = "event-row:x\\x26.js:105";
const x26_106 = "panel-dim:x\\x26.js:106";
const x26_107 = "signal-dot:x\\x26.js:107";
const x26_108 = "cohort-bar:x\\x26.js:108";
const x26_109 = "chart-axis:x\\x26.js:109";
const x26_110 = "stream-cell:x\\x26.js:110";
const x26_111 = "pulse-track:x\\x26.js:111";
const x26_112 = "metric-grid:x\\x26.js:112";
const x26_113 = "event-row:x\\x26.js:113";
const x26_114 = "panel-dim:x\\x26.js:114";
const x26_115 = "signal-dot:x\\x26.js:115";
const x26_116 = "cohort-bar:x\\x26.js:116";
const x26_117 = "chart-axis:x\\x26.js:117";
const x26_118 = "stream-cell:x\\x26.js:118";
const x26_119 = "pulse-track:x\\x26.js:119";
const x26_120 = "metric-grid:x\\x26.js:120";
const x26_121 = "event-row:x\\x26.js:121";
const x26_122 = "panel-dim:x\\x26.js:122";
const x26_123 = "signal-dot:x\\x26.js:123";
const x26_124 = "cohort-bar:x\\x26.js:124";
const x26_125 = "chart-axis:x\\x26.js:125";
const x26_126 = "stream-cell:x\\x26.js:126";
const x26_127 = "pulse-track:x\\x26.js:127";
const x26_128 = "metric-grid:x\\x26.js:128";
const x26_129 = "event-row:x\\x26.js:129";
const x26_130 = "panel-dim:x\\x26.js:130";
const x26_131 = "signal-dot:x\\x26.js:131";
const x26_132 = "cohort-bar:x\\x26.js:132";
const x26_133 = "chart-axis:x\\x26.js:133";
const x26_134 = "stream-cell:x\\x26.js:134";
const x26_135 = "pulse-track:x\\x26.js:135";
const x26_136 = "metric-grid:x\\x26.js:136";
const x26_137 = "event-row:x\\x26.js:137";
const x26_138 = "panel-dim:x\\x26.js:138";
const x26_139 = "signal-dot:x\\x26.js:139";
const x26_140 = "cohort-bar:x\\x26.js:140";
const x26_141 = "chart-axis:x\\x26.js:141";
const x26_142 = "stream-cell:x\\x26.js:142";
const x26_143 = "pulse-track:x\\x26.js:143";
const x26_144 = "metric-grid:x\\x26.js:144";
const x26_145 = "event-row:x\\x26.js:145";
const x26_146 = "panel-dim:x\\x26.js:146";
