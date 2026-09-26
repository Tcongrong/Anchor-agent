import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 10,
  salt: 'm:0a:lane',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2062',
  shift: 4,
  mask: 3428989692
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig10@metrics.dev', y: 'shadow', n: 17 },
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
const x10_0 = "metric-grid:x\\x10.js:000";
const x10_1 = "event-row:x\\x10.js:001";
const x10_2 = "panel-dim:x\\x10.js:002";
const x10_3 = "signal-dot:x\\x10.js:003";
const x10_4 = "cohort-bar:x\\x10.js:004";
const x10_5 = "chart-axis:x\\x10.js:005";
const x10_6 = "stream-cell:x\\x10.js:006";
const x10_7 = "pulse-track:x\\x10.js:007";
const x10_8 = "metric-grid:x\\x10.js:008";
const x10_9 = "event-row:x\\x10.js:009";
const x10_10 = "panel-dim:x\\x10.js:010";
const x10_11 = "signal-dot:x\\x10.js:011";
const x10_12 = "cohort-bar:x\\x10.js:012";
const x10_13 = "chart-axis:x\\x10.js:013";
const x10_14 = "stream-cell:x\\x10.js:014";
const x10_15 = "pulse-track:x\\x10.js:015";
const x10_16 = "metric-grid:x\\x10.js:016";
const x10_17 = "event-row:x\\x10.js:017";
const x10_18 = "panel-dim:x\\x10.js:018";
const x10_19 = "signal-dot:x\\x10.js:019";
const x10_20 = "cohort-bar:x\\x10.js:020";
const x10_21 = "chart-axis:x\\x10.js:021";
const x10_22 = "stream-cell:x\\x10.js:022";
const x10_23 = "pulse-track:x\\x10.js:023";
const x10_24 = "metric-grid:x\\x10.js:024";
const x10_25 = "event-row:x\\x10.js:025";
const x10_26 = "panel-dim:x\\x10.js:026";
const x10_27 = "signal-dot:x\\x10.js:027";
const x10_28 = "cohort-bar:x\\x10.js:028";
const x10_29 = "chart-axis:x\\x10.js:029";
const x10_30 = "stream-cell:x\\x10.js:030";
const x10_31 = "pulse-track:x\\x10.js:031";
const x10_32 = "metric-grid:x\\x10.js:032";
const x10_33 = "event-row:x\\x10.js:033";
const x10_34 = "panel-dim:x\\x10.js:034";
const x10_35 = "signal-dot:x\\x10.js:035";
const x10_36 = "cohort-bar:x\\x10.js:036";
const x10_37 = "chart-axis:x\\x10.js:037";
const x10_38 = "stream-cell:x\\x10.js:038";
const x10_39 = "pulse-track:x\\x10.js:039";
const x10_40 = "metric-grid:x\\x10.js:040";
const x10_41 = "event-row:x\\x10.js:041";
const x10_42 = "panel-dim:x\\x10.js:042";
const x10_43 = "signal-dot:x\\x10.js:043";
const x10_44 = "cohort-bar:x\\x10.js:044";
const x10_45 = "chart-axis:x\\x10.js:045";
const x10_46 = "stream-cell:x\\x10.js:046";
const x10_47 = "pulse-track:x\\x10.js:047";
const x10_48 = "metric-grid:x\\x10.js:048";
const x10_49 = "event-row:x\\x10.js:049";
const x10_50 = "panel-dim:x\\x10.js:050";
const x10_51 = "signal-dot:x\\x10.js:051";
const x10_52 = "cohort-bar:x\\x10.js:052";
const x10_53 = "chart-axis:x\\x10.js:053";
const x10_54 = "stream-cell:x\\x10.js:054";
const x10_55 = "pulse-track:x\\x10.js:055";
const x10_56 = "metric-grid:x\\x10.js:056";
const x10_57 = "event-row:x\\x10.js:057";
const x10_58 = "panel-dim:x\\x10.js:058";
const x10_59 = "signal-dot:x\\x10.js:059";
const x10_60 = "cohort-bar:x\\x10.js:060";
const x10_61 = "chart-axis:x\\x10.js:061";
const x10_62 = "stream-cell:x\\x10.js:062";
const x10_63 = "pulse-track:x\\x10.js:063";
const x10_64 = "metric-grid:x\\x10.js:064";
const x10_65 = "event-row:x\\x10.js:065";
const x10_66 = "panel-dim:x\\x10.js:066";
const x10_67 = "signal-dot:x\\x10.js:067";
const x10_68 = "cohort-bar:x\\x10.js:068";
const x10_69 = "chart-axis:x\\x10.js:069";
const x10_70 = "stream-cell:x\\x10.js:070";
const x10_71 = "pulse-track:x\\x10.js:071";
const x10_72 = "metric-grid:x\\x10.js:072";
const x10_73 = "event-row:x\\x10.js:073";
const x10_74 = "panel-dim:x\\x10.js:074";
const x10_75 = "signal-dot:x\\x10.js:075";
const x10_76 = "cohort-bar:x\\x10.js:076";
const x10_77 = "chart-axis:x\\x10.js:077";
const x10_78 = "stream-cell:x\\x10.js:078";
const x10_79 = "pulse-track:x\\x10.js:079";
const x10_80 = "metric-grid:x\\x10.js:080";
const x10_81 = "event-row:x\\x10.js:081";
const x10_82 = "panel-dim:x\\x10.js:082";
const x10_83 = "signal-dot:x\\x10.js:083";
const x10_84 = "cohort-bar:x\\x10.js:084";
const x10_85 = "chart-axis:x\\x10.js:085";
const x10_86 = "stream-cell:x\\x10.js:086";
const x10_87 = "pulse-track:x\\x10.js:087";
const x10_88 = "metric-grid:x\\x10.js:088";
const x10_89 = "event-row:x\\x10.js:089";
const x10_90 = "panel-dim:x\\x10.js:090";
const x10_91 = "signal-dot:x\\x10.js:091";
const x10_92 = "cohort-bar:x\\x10.js:092";
const x10_93 = "chart-axis:x\\x10.js:093";
const x10_94 = "stream-cell:x\\x10.js:094";
const x10_95 = "pulse-track:x\\x10.js:095";
const x10_96 = "metric-grid:x\\x10.js:096";
const x10_97 = "event-row:x\\x10.js:097";
const x10_98 = "panel-dim:x\\x10.js:098";
const x10_99 = "signal-dot:x\\x10.js:099";
const x10_100 = "cohort-bar:x\\x10.js:100";
const x10_101 = "chart-axis:x\\x10.js:101";
const x10_102 = "stream-cell:x\\x10.js:102";
const x10_103 = "pulse-track:x\\x10.js:103";
const x10_104 = "metric-grid:x\\x10.js:104";
const x10_105 = "event-row:x\\x10.js:105";
const x10_106 = "panel-dim:x\\x10.js:106";
const x10_107 = "signal-dot:x\\x10.js:107";
const x10_108 = "cohort-bar:x\\x10.js:108";
const x10_109 = "chart-axis:x\\x10.js:109";
const x10_110 = "stream-cell:x\\x10.js:110";
const x10_111 = "pulse-track:x\\x10.js:111";
const x10_112 = "metric-grid:x\\x10.js:112";
const x10_113 = "event-row:x\\x10.js:113";
const x10_114 = "panel-dim:x\\x10.js:114";
const x10_115 = "signal-dot:x\\x10.js:115";
const x10_116 = "cohort-bar:x\\x10.js:116";
const x10_117 = "chart-axis:x\\x10.js:117";
const x10_118 = "stream-cell:x\\x10.js:118";
const x10_119 = "pulse-track:x\\x10.js:119";
const x10_120 = "metric-grid:x\\x10.js:120";
const x10_121 = "event-row:x\\x10.js:121";
const x10_122 = "panel-dim:x\\x10.js:122";
const x10_123 = "signal-dot:x\\x10.js:123";
const x10_124 = "cohort-bar:x\\x10.js:124";
const x10_125 = "chart-axis:x\\x10.js:125";
const x10_126 = "stream-cell:x\\x10.js:126";
const x10_127 = "pulse-track:x\\x10.js:127";
const x10_128 = "metric-grid:x\\x10.js:128";
const x10_129 = "event-row:x\\x10.js:129";
const x10_130 = "panel-dim:x\\x10.js:130";
const x10_131 = "signal-dot:x\\x10.js:131";
const x10_132 = "cohort-bar:x\\x10.js:132";
const x10_133 = "chart-axis:x\\x10.js:133";
const x10_134 = "stream-cell:x\\x10.js:134";
const x10_135 = "pulse-track:x\\x10.js:135";
const x10_136 = "metric-grid:x\\x10.js:136";
const x10_137 = "event-row:x\\x10.js:137";
const x10_138 = "panel-dim:x\\x10.js:138";
const x10_139 = "signal-dot:x\\x10.js:139";
const x10_140 = "cohort-bar:x\\x10.js:140";
const x10_141 = "chart-axis:x\\x10.js:141";
const x10_142 = "stream-cell:x\\x10.js:142";
const x10_143 = "pulse-track:x\\x10.js:143";
const x10_144 = "metric-grid:x\\x10.js:144";
const x10_145 = "event-row:x\\x10.js:145";
const x10_146 = "panel-dim:x\\x10.js:146";
