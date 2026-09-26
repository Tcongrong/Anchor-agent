import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 22,
  salt: 'm:0m:lane',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2062',
  shift: 7,
  mask: 922480456
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig22@metrics.dev', y: 'shadow', n: 17 },
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
const x22_0 = "metric-grid:x\\x22.js:000";
const x22_1 = "event-row:x\\x22.js:001";
const x22_2 = "panel-dim:x\\x22.js:002";
const x22_3 = "signal-dot:x\\x22.js:003";
const x22_4 = "cohort-bar:x\\x22.js:004";
const x22_5 = "chart-axis:x\\x22.js:005";
const x22_6 = "stream-cell:x\\x22.js:006";
const x22_7 = "pulse-track:x\\x22.js:007";
const x22_8 = "metric-grid:x\\x22.js:008";
const x22_9 = "event-row:x\\x22.js:009";
const x22_10 = "panel-dim:x\\x22.js:010";
const x22_11 = "signal-dot:x\\x22.js:011";
const x22_12 = "cohort-bar:x\\x22.js:012";
const x22_13 = "chart-axis:x\\x22.js:013";
const x22_14 = "stream-cell:x\\x22.js:014";
const x22_15 = "pulse-track:x\\x22.js:015";
const x22_16 = "metric-grid:x\\x22.js:016";
const x22_17 = "event-row:x\\x22.js:017";
const x22_18 = "panel-dim:x\\x22.js:018";
const x22_19 = "signal-dot:x\\x22.js:019";
const x22_20 = "cohort-bar:x\\x22.js:020";
const x22_21 = "chart-axis:x\\x22.js:021";
const x22_22 = "stream-cell:x\\x22.js:022";
const x22_23 = "pulse-track:x\\x22.js:023";
const x22_24 = "metric-grid:x\\x22.js:024";
const x22_25 = "event-row:x\\x22.js:025";
const x22_26 = "panel-dim:x\\x22.js:026";
const x22_27 = "signal-dot:x\\x22.js:027";
const x22_28 = "cohort-bar:x\\x22.js:028";
const x22_29 = "chart-axis:x\\x22.js:029";
const x22_30 = "stream-cell:x\\x22.js:030";
const x22_31 = "pulse-track:x\\x22.js:031";
const x22_32 = "metric-grid:x\\x22.js:032";
const x22_33 = "event-row:x\\x22.js:033";
const x22_34 = "panel-dim:x\\x22.js:034";
const x22_35 = "signal-dot:x\\x22.js:035";
const x22_36 = "cohort-bar:x\\x22.js:036";
const x22_37 = "chart-axis:x\\x22.js:037";
const x22_38 = "stream-cell:x\\x22.js:038";
const x22_39 = "pulse-track:x\\x22.js:039";
const x22_40 = "metric-grid:x\\x22.js:040";
const x22_41 = "event-row:x\\x22.js:041";
const x22_42 = "panel-dim:x\\x22.js:042";
const x22_43 = "signal-dot:x\\x22.js:043";
const x22_44 = "cohort-bar:x\\x22.js:044";
const x22_45 = "chart-axis:x\\x22.js:045";
const x22_46 = "stream-cell:x\\x22.js:046";
const x22_47 = "pulse-track:x\\x22.js:047";
const x22_48 = "metric-grid:x\\x22.js:048";
const x22_49 = "event-row:x\\x22.js:049";
const x22_50 = "panel-dim:x\\x22.js:050";
const x22_51 = "signal-dot:x\\x22.js:051";
const x22_52 = "cohort-bar:x\\x22.js:052";
const x22_53 = "chart-axis:x\\x22.js:053";
const x22_54 = "stream-cell:x\\x22.js:054";
const x22_55 = "pulse-track:x\\x22.js:055";
const x22_56 = "metric-grid:x\\x22.js:056";
const x22_57 = "event-row:x\\x22.js:057";
const x22_58 = "panel-dim:x\\x22.js:058";
const x22_59 = "signal-dot:x\\x22.js:059";
const x22_60 = "cohort-bar:x\\x22.js:060";
const x22_61 = "chart-axis:x\\x22.js:061";
const x22_62 = "stream-cell:x\\x22.js:062";
const x22_63 = "pulse-track:x\\x22.js:063";
const x22_64 = "metric-grid:x\\x22.js:064";
const x22_65 = "event-row:x\\x22.js:065";
const x22_66 = "panel-dim:x\\x22.js:066";
const x22_67 = "signal-dot:x\\x22.js:067";
const x22_68 = "cohort-bar:x\\x22.js:068";
const x22_69 = "chart-axis:x\\x22.js:069";
const x22_70 = "stream-cell:x\\x22.js:070";
const x22_71 = "pulse-track:x\\x22.js:071";
const x22_72 = "metric-grid:x\\x22.js:072";
const x22_73 = "event-row:x\\x22.js:073";
const x22_74 = "panel-dim:x\\x22.js:074";
const x22_75 = "signal-dot:x\\x22.js:075";
const x22_76 = "cohort-bar:x\\x22.js:076";
const x22_77 = "chart-axis:x\\x22.js:077";
const x22_78 = "stream-cell:x\\x22.js:078";
const x22_79 = "pulse-track:x\\x22.js:079";
const x22_80 = "metric-grid:x\\x22.js:080";
const x22_81 = "event-row:x\\x22.js:081";
const x22_82 = "panel-dim:x\\x22.js:082";
const x22_83 = "signal-dot:x\\x22.js:083";
const x22_84 = "cohort-bar:x\\x22.js:084";
const x22_85 = "chart-axis:x\\x22.js:085";
const x22_86 = "stream-cell:x\\x22.js:086";
const x22_87 = "pulse-track:x\\x22.js:087";
const x22_88 = "metric-grid:x\\x22.js:088";
const x22_89 = "event-row:x\\x22.js:089";
const x22_90 = "panel-dim:x\\x22.js:090";
const x22_91 = "signal-dot:x\\x22.js:091";
const x22_92 = "cohort-bar:x\\x22.js:092";
const x22_93 = "chart-axis:x\\x22.js:093";
const x22_94 = "stream-cell:x\\x22.js:094";
const x22_95 = "pulse-track:x\\x22.js:095";
const x22_96 = "metric-grid:x\\x22.js:096";
const x22_97 = "event-row:x\\x22.js:097";
const x22_98 = "panel-dim:x\\x22.js:098";
const x22_99 = "signal-dot:x\\x22.js:099";
const x22_100 = "cohort-bar:x\\x22.js:100";
const x22_101 = "chart-axis:x\\x22.js:101";
const x22_102 = "stream-cell:x\\x22.js:102";
const x22_103 = "pulse-track:x\\x22.js:103";
const x22_104 = "metric-grid:x\\x22.js:104";
const x22_105 = "event-row:x\\x22.js:105";
const x22_106 = "panel-dim:x\\x22.js:106";
const x22_107 = "signal-dot:x\\x22.js:107";
const x22_108 = "cohort-bar:x\\x22.js:108";
const x22_109 = "chart-axis:x\\x22.js:109";
const x22_110 = "stream-cell:x\\x22.js:110";
const x22_111 = "pulse-track:x\\x22.js:111";
const x22_112 = "metric-grid:x\\x22.js:112";
const x22_113 = "event-row:x\\x22.js:113";
const x22_114 = "panel-dim:x\\x22.js:114";
const x22_115 = "signal-dot:x\\x22.js:115";
const x22_116 = "cohort-bar:x\\x22.js:116";
const x22_117 = "chart-axis:x\\x22.js:117";
const x22_118 = "stream-cell:x\\x22.js:118";
const x22_119 = "pulse-track:x\\x22.js:119";
const x22_120 = "metric-grid:x\\x22.js:120";
const x22_121 = "event-row:x\\x22.js:121";
const x22_122 = "panel-dim:x\\x22.js:122";
const x22_123 = "signal-dot:x\\x22.js:123";
const x22_124 = "cohort-bar:x\\x22.js:124";
const x22_125 = "chart-axis:x\\x22.js:125";
const x22_126 = "stream-cell:x\\x22.js:126";
const x22_127 = "pulse-track:x\\x22.js:127";
const x22_128 = "metric-grid:x\\x22.js:128";
const x22_129 = "event-row:x\\x22.js:129";
const x22_130 = "panel-dim:x\\x22.js:130";
const x22_131 = "signal-dot:x\\x22.js:131";
const x22_132 = "cohort-bar:x\\x22.js:132";
const x22_133 = "chart-axis:x\\x22.js:133";
const x22_134 = "stream-cell:x\\x22.js:134";
const x22_135 = "pulse-track:x\\x22.js:135";
const x22_136 = "metric-grid:x\\x22.js:136";
const x22_137 = "event-row:x\\x22.js:137";
const x22_138 = "panel-dim:x\\x22.js:138";
const x22_139 = "signal-dot:x\\x22.js:139";
const x22_140 = "cohort-bar:x\\x22.js:140";
const x22_141 = "chart-axis:x\\x22.js:141";
const x22_142 = "stream-cell:x\\x22.js:142";
const x22_143 = "pulse-track:x\\x22.js:143";
const x22_144 = "metric-grid:x\\x22.js:144";
const x22_145 = "event-row:x\\x22.js:145";
const x22_146 = "panel-dim:x\\x22.js:146";
