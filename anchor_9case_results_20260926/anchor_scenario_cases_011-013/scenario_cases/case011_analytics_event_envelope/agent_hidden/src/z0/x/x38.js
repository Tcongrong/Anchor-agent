import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 38,
  salt: 'm:12:lane',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2062',
  shift: 5,
  mask: 443779672
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row38@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x38_0 = "metric-grid:x\\x38.js:000";
const x38_1 = "event-row:x\\x38.js:001";
const x38_2 = "panel-dim:x\\x38.js:002";
const x38_3 = "signal-dot:x\\x38.js:003";
const x38_4 = "cohort-bar:x\\x38.js:004";
const x38_5 = "chart-axis:x\\x38.js:005";
const x38_6 = "stream-cell:x\\x38.js:006";
const x38_7 = "pulse-track:x\\x38.js:007";
const x38_8 = "metric-grid:x\\x38.js:008";
const x38_9 = "event-row:x\\x38.js:009";
const x38_10 = "panel-dim:x\\x38.js:010";
const x38_11 = "signal-dot:x\\x38.js:011";
const x38_12 = "cohort-bar:x\\x38.js:012";
const x38_13 = "chart-axis:x\\x38.js:013";
const x38_14 = "stream-cell:x\\x38.js:014";
const x38_15 = "pulse-track:x\\x38.js:015";
const x38_16 = "metric-grid:x\\x38.js:016";
const x38_17 = "event-row:x\\x38.js:017";
const x38_18 = "panel-dim:x\\x38.js:018";
const x38_19 = "signal-dot:x\\x38.js:019";
const x38_20 = "cohort-bar:x\\x38.js:020";
const x38_21 = "chart-axis:x\\x38.js:021";
const x38_22 = "stream-cell:x\\x38.js:022";
const x38_23 = "pulse-track:x\\x38.js:023";
const x38_24 = "metric-grid:x\\x38.js:024";
const x38_25 = "event-row:x\\x38.js:025";
const x38_26 = "panel-dim:x\\x38.js:026";
const x38_27 = "signal-dot:x\\x38.js:027";
const x38_28 = "cohort-bar:x\\x38.js:028";
const x38_29 = "chart-axis:x\\x38.js:029";
const x38_30 = "stream-cell:x\\x38.js:030";
const x38_31 = "pulse-track:x\\x38.js:031";
const x38_32 = "metric-grid:x\\x38.js:032";
const x38_33 = "event-row:x\\x38.js:033";
const x38_34 = "panel-dim:x\\x38.js:034";
const x38_35 = "signal-dot:x\\x38.js:035";
const x38_36 = "cohort-bar:x\\x38.js:036";
const x38_37 = "chart-axis:x\\x38.js:037";
const x38_38 = "stream-cell:x\\x38.js:038";
const x38_39 = "pulse-track:x\\x38.js:039";
const x38_40 = "metric-grid:x\\x38.js:040";
const x38_41 = "event-row:x\\x38.js:041";
const x38_42 = "panel-dim:x\\x38.js:042";
const x38_43 = "signal-dot:x\\x38.js:043";
const x38_44 = "cohort-bar:x\\x38.js:044";
const x38_45 = "chart-axis:x\\x38.js:045";
const x38_46 = "stream-cell:x\\x38.js:046";
const x38_47 = "pulse-track:x\\x38.js:047";
const x38_48 = "metric-grid:x\\x38.js:048";
const x38_49 = "event-row:x\\x38.js:049";
const x38_50 = "panel-dim:x\\x38.js:050";
const x38_51 = "signal-dot:x\\x38.js:051";
const x38_52 = "cohort-bar:x\\x38.js:052";
const x38_53 = "chart-axis:x\\x38.js:053";
const x38_54 = "stream-cell:x\\x38.js:054";
const x38_55 = "pulse-track:x\\x38.js:055";
const x38_56 = "metric-grid:x\\x38.js:056";
const x38_57 = "event-row:x\\x38.js:057";
const x38_58 = "panel-dim:x\\x38.js:058";
const x38_59 = "signal-dot:x\\x38.js:059";
const x38_60 = "cohort-bar:x\\x38.js:060";
const x38_61 = "chart-axis:x\\x38.js:061";
const x38_62 = "stream-cell:x\\x38.js:062";
const x38_63 = "pulse-track:x\\x38.js:063";
const x38_64 = "metric-grid:x\\x38.js:064";
const x38_65 = "event-row:x\\x38.js:065";
const x38_66 = "panel-dim:x\\x38.js:066";
const x38_67 = "signal-dot:x\\x38.js:067";
const x38_68 = "cohort-bar:x\\x38.js:068";
const x38_69 = "chart-axis:x\\x38.js:069";
const x38_70 = "stream-cell:x\\x38.js:070";
const x38_71 = "pulse-track:x\\x38.js:071";
const x38_72 = "metric-grid:x\\x38.js:072";
const x38_73 = "event-row:x\\x38.js:073";
const x38_74 = "panel-dim:x\\x38.js:074";
const x38_75 = "signal-dot:x\\x38.js:075";
const x38_76 = "cohort-bar:x\\x38.js:076";
const x38_77 = "chart-axis:x\\x38.js:077";
const x38_78 = "stream-cell:x\\x38.js:078";
const x38_79 = "pulse-track:x\\x38.js:079";
const x38_80 = "metric-grid:x\\x38.js:080";
const x38_81 = "event-row:x\\x38.js:081";
const x38_82 = "panel-dim:x\\x38.js:082";
const x38_83 = "signal-dot:x\\x38.js:083";
const x38_84 = "cohort-bar:x\\x38.js:084";
const x38_85 = "chart-axis:x\\x38.js:085";
const x38_86 = "stream-cell:x\\x38.js:086";
const x38_87 = "pulse-track:x\\x38.js:087";
const x38_88 = "metric-grid:x\\x38.js:088";
const x38_89 = "event-row:x\\x38.js:089";
const x38_90 = "panel-dim:x\\x38.js:090";
const x38_91 = "signal-dot:x\\x38.js:091";
const x38_92 = "cohort-bar:x\\x38.js:092";
const x38_93 = "chart-axis:x\\x38.js:093";
const x38_94 = "stream-cell:x\\x38.js:094";
const x38_95 = "pulse-track:x\\x38.js:095";
const x38_96 = "metric-grid:x\\x38.js:096";
const x38_97 = "event-row:x\\x38.js:097";
const x38_98 = "panel-dim:x\\x38.js:098";
const x38_99 = "signal-dot:x\\x38.js:099";
const x38_100 = "cohort-bar:x\\x38.js:100";
const x38_101 = "chart-axis:x\\x38.js:101";
const x38_102 = "stream-cell:x\\x38.js:102";
const x38_103 = "pulse-track:x\\x38.js:103";
const x38_104 = "metric-grid:x\\x38.js:104";
const x38_105 = "event-row:x\\x38.js:105";
const x38_106 = "panel-dim:x\\x38.js:106";
const x38_107 = "signal-dot:x\\x38.js:107";
const x38_108 = "cohort-bar:x\\x38.js:108";
const x38_109 = "chart-axis:x\\x38.js:109";
const x38_110 = "stream-cell:x\\x38.js:110";
const x38_111 = "pulse-track:x\\x38.js:111";
const x38_112 = "metric-grid:x\\x38.js:112";
const x38_113 = "event-row:x\\x38.js:113";
const x38_114 = "panel-dim:x\\x38.js:114";
const x38_115 = "signal-dot:x\\x38.js:115";
const x38_116 = "cohort-bar:x\\x38.js:116";
const x38_117 = "chart-axis:x\\x38.js:117";
const x38_118 = "stream-cell:x\\x38.js:118";
const x38_119 = "pulse-track:x\\x38.js:119";
const x38_120 = "metric-grid:x\\x38.js:120";
const x38_121 = "event-row:x\\x38.js:121";
const x38_122 = "panel-dim:x\\x38.js:122";
const x38_123 = "signal-dot:x\\x38.js:123";
const x38_124 = "cohort-bar:x\\x38.js:124";
const x38_125 = "chart-axis:x\\x38.js:125";
const x38_126 = "stream-cell:x\\x38.js:126";
const x38_127 = "pulse-track:x\\x38.js:127";
const x38_128 = "metric-grid:x\\x38.js:128";
const x38_129 = "event-row:x\\x38.js:129";
const x38_130 = "panel-dim:x\\x38.js:130";
const x38_131 = "signal-dot:x\\x38.js:131";
const x38_132 = "cohort-bar:x\\x38.js:132";
const x38_133 = "chart-axis:x\\x38.js:133";
const x38_134 = "stream-cell:x\\x38.js:134";
const x38_135 = "pulse-track:x\\x38.js:135";
const x38_136 = "metric-grid:x\\x38.js:136";
const x38_137 = "event-row:x\\x38.js:137";
const x38_138 = "panel-dim:x\\x38.js:138";
const x38_139 = "signal-dot:x\\x38.js:139";
const x38_140 = "cohort-bar:x\\x38.js:140";
const x38_141 = "chart-axis:x\\x38.js:141";
const x38_142 = "stream-cell:x\\x38.js:142";
const x38_143 = "pulse-track:x\\x38.js:143";
const x38_144 = "metric-grid:x\\x38.js:144";
const x38_145 = "event-row:x\\x38.js:145";
const x38_146 = "panel-dim:x\\x38.js:146";
