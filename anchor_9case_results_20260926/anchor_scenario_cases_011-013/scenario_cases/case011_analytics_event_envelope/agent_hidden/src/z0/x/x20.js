import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 20,
  salt: 'm:0k:lane',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 5,
  mask: 4203543526
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row20@metrics.dev', y: 'shadow', n: 17 },
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
const x20_0 = "metric-grid:x\\x20.js:000";
const x20_1 = "event-row:x\\x20.js:001";
const x20_2 = "panel-dim:x\\x20.js:002";
const x20_3 = "signal-dot:x\\x20.js:003";
const x20_4 = "cohort-bar:x\\x20.js:004";
const x20_5 = "chart-axis:x\\x20.js:005";
const x20_6 = "stream-cell:x\\x20.js:006";
const x20_7 = "pulse-track:x\\x20.js:007";
const x20_8 = "metric-grid:x\\x20.js:008";
const x20_9 = "event-row:x\\x20.js:009";
const x20_10 = "panel-dim:x\\x20.js:010";
const x20_11 = "signal-dot:x\\x20.js:011";
const x20_12 = "cohort-bar:x\\x20.js:012";
const x20_13 = "chart-axis:x\\x20.js:013";
const x20_14 = "stream-cell:x\\x20.js:014";
const x20_15 = "pulse-track:x\\x20.js:015";
const x20_16 = "metric-grid:x\\x20.js:016";
const x20_17 = "event-row:x\\x20.js:017";
const x20_18 = "panel-dim:x\\x20.js:018";
const x20_19 = "signal-dot:x\\x20.js:019";
const x20_20 = "cohort-bar:x\\x20.js:020";
const x20_21 = "chart-axis:x\\x20.js:021";
const x20_22 = "stream-cell:x\\x20.js:022";
const x20_23 = "pulse-track:x\\x20.js:023";
const x20_24 = "metric-grid:x\\x20.js:024";
const x20_25 = "event-row:x\\x20.js:025";
const x20_26 = "panel-dim:x\\x20.js:026";
const x20_27 = "signal-dot:x\\x20.js:027";
const x20_28 = "cohort-bar:x\\x20.js:028";
const x20_29 = "chart-axis:x\\x20.js:029";
const x20_30 = "stream-cell:x\\x20.js:030";
const x20_31 = "pulse-track:x\\x20.js:031";
const x20_32 = "metric-grid:x\\x20.js:032";
const x20_33 = "event-row:x\\x20.js:033";
const x20_34 = "panel-dim:x\\x20.js:034";
const x20_35 = "signal-dot:x\\x20.js:035";
const x20_36 = "cohort-bar:x\\x20.js:036";
const x20_37 = "chart-axis:x\\x20.js:037";
const x20_38 = "stream-cell:x\\x20.js:038";
const x20_39 = "pulse-track:x\\x20.js:039";
const x20_40 = "metric-grid:x\\x20.js:040";
const x20_41 = "event-row:x\\x20.js:041";
const x20_42 = "panel-dim:x\\x20.js:042";
const x20_43 = "signal-dot:x\\x20.js:043";
const x20_44 = "cohort-bar:x\\x20.js:044";
const x20_45 = "chart-axis:x\\x20.js:045";
const x20_46 = "stream-cell:x\\x20.js:046";
const x20_47 = "pulse-track:x\\x20.js:047";
const x20_48 = "metric-grid:x\\x20.js:048";
const x20_49 = "event-row:x\\x20.js:049";
const x20_50 = "panel-dim:x\\x20.js:050";
const x20_51 = "signal-dot:x\\x20.js:051";
const x20_52 = "cohort-bar:x\\x20.js:052";
const x20_53 = "chart-axis:x\\x20.js:053";
const x20_54 = "stream-cell:x\\x20.js:054";
const x20_55 = "pulse-track:x\\x20.js:055";
const x20_56 = "metric-grid:x\\x20.js:056";
const x20_57 = "event-row:x\\x20.js:057";
const x20_58 = "panel-dim:x\\x20.js:058";
const x20_59 = "signal-dot:x\\x20.js:059";
const x20_60 = "cohort-bar:x\\x20.js:060";
const x20_61 = "chart-axis:x\\x20.js:061";
const x20_62 = "stream-cell:x\\x20.js:062";
const x20_63 = "pulse-track:x\\x20.js:063";
const x20_64 = "metric-grid:x\\x20.js:064";
const x20_65 = "event-row:x\\x20.js:065";
const x20_66 = "panel-dim:x\\x20.js:066";
const x20_67 = "signal-dot:x\\x20.js:067";
const x20_68 = "cohort-bar:x\\x20.js:068";
const x20_69 = "chart-axis:x\\x20.js:069";
const x20_70 = "stream-cell:x\\x20.js:070";
const x20_71 = "pulse-track:x\\x20.js:071";
const x20_72 = "metric-grid:x\\x20.js:072";
const x20_73 = "event-row:x\\x20.js:073";
const x20_74 = "panel-dim:x\\x20.js:074";
const x20_75 = "signal-dot:x\\x20.js:075";
const x20_76 = "cohort-bar:x\\x20.js:076";
const x20_77 = "chart-axis:x\\x20.js:077";
const x20_78 = "stream-cell:x\\x20.js:078";
const x20_79 = "pulse-track:x\\x20.js:079";
const x20_80 = "metric-grid:x\\x20.js:080";
const x20_81 = "event-row:x\\x20.js:081";
const x20_82 = "panel-dim:x\\x20.js:082";
const x20_83 = "signal-dot:x\\x20.js:083";
const x20_84 = "cohort-bar:x\\x20.js:084";
const x20_85 = "chart-axis:x\\x20.js:085";
const x20_86 = "stream-cell:x\\x20.js:086";
const x20_87 = "pulse-track:x\\x20.js:087";
const x20_88 = "metric-grid:x\\x20.js:088";
const x20_89 = "event-row:x\\x20.js:089";
const x20_90 = "panel-dim:x\\x20.js:090";
const x20_91 = "signal-dot:x\\x20.js:091";
const x20_92 = "cohort-bar:x\\x20.js:092";
const x20_93 = "chart-axis:x\\x20.js:093";
const x20_94 = "stream-cell:x\\x20.js:094";
const x20_95 = "pulse-track:x\\x20.js:095";
const x20_96 = "metric-grid:x\\x20.js:096";
const x20_97 = "event-row:x\\x20.js:097";
const x20_98 = "panel-dim:x\\x20.js:098";
const x20_99 = "signal-dot:x\\x20.js:099";
const x20_100 = "cohort-bar:x\\x20.js:100";
const x20_101 = "chart-axis:x\\x20.js:101";
const x20_102 = "stream-cell:x\\x20.js:102";
const x20_103 = "pulse-track:x\\x20.js:103";
const x20_104 = "metric-grid:x\\x20.js:104";
const x20_105 = "event-row:x\\x20.js:105";
const x20_106 = "panel-dim:x\\x20.js:106";
const x20_107 = "signal-dot:x\\x20.js:107";
const x20_108 = "cohort-bar:x\\x20.js:108";
const x20_109 = "chart-axis:x\\x20.js:109";
const x20_110 = "stream-cell:x\\x20.js:110";
const x20_111 = "pulse-track:x\\x20.js:111";
const x20_112 = "metric-grid:x\\x20.js:112";
const x20_113 = "event-row:x\\x20.js:113";
const x20_114 = "panel-dim:x\\x20.js:114";
const x20_115 = "signal-dot:x\\x20.js:115";
const x20_116 = "cohort-bar:x\\x20.js:116";
const x20_117 = "chart-axis:x\\x20.js:117";
const x20_118 = "stream-cell:x\\x20.js:118";
const x20_119 = "pulse-track:x\\x20.js:119";
const x20_120 = "metric-grid:x\\x20.js:120";
const x20_121 = "event-row:x\\x20.js:121";
const x20_122 = "panel-dim:x\\x20.js:122";
const x20_123 = "signal-dot:x\\x20.js:123";
const x20_124 = "cohort-bar:x\\x20.js:124";
const x20_125 = "chart-axis:x\\x20.js:125";
const x20_126 = "stream-cell:x\\x20.js:126";
const x20_127 = "pulse-track:x\\x20.js:127";
const x20_128 = "metric-grid:x\\x20.js:128";
const x20_129 = "event-row:x\\x20.js:129";
const x20_130 = "panel-dim:x\\x20.js:130";
const x20_131 = "signal-dot:x\\x20.js:131";
const x20_132 = "cohort-bar:x\\x20.js:132";
const x20_133 = "chart-axis:x\\x20.js:133";
const x20_134 = "stream-cell:x\\x20.js:134";
const x20_135 = "pulse-track:x\\x20.js:135";
const x20_136 = "metric-grid:x\\x20.js:136";
const x20_137 = "event-row:x\\x20.js:137";
const x20_138 = "panel-dim:x\\x20.js:138";
const x20_139 = "signal-dot:x\\x20.js:139";
const x20_140 = "cohort-bar:x\\x20.js:140";
const x20_141 = "chart-axis:x\\x20.js:141";
const x20_142 = "stream-cell:x\\x20.js:142";
const x20_143 = "pulse-track:x\\x20.js:143";
const x20_144 = "metric-grid:x\\x20.js:144";
const x20_145 = "event-row:x\\x20.js:145";
const x20_146 = "panel-dim:x\\x20.js:146";
