import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 14,
  salt: 'm:0e:lane',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 8,
  mask: 1161830848
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row14@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
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
const x14_0 = "metric-grid:x\\x14.js:000";
const x14_1 = "event-row:x\\x14.js:001";
const x14_2 = "panel-dim:x\\x14.js:002";
const x14_3 = "signal-dot:x\\x14.js:003";
const x14_4 = "cohort-bar:x\\x14.js:004";
const x14_5 = "chart-axis:x\\x14.js:005";
const x14_6 = "stream-cell:x\\x14.js:006";
const x14_7 = "pulse-track:x\\x14.js:007";
const x14_8 = "metric-grid:x\\x14.js:008";
const x14_9 = "event-row:x\\x14.js:009";
const x14_10 = "panel-dim:x\\x14.js:010";
const x14_11 = "signal-dot:x\\x14.js:011";
const x14_12 = "cohort-bar:x\\x14.js:012";
const x14_13 = "chart-axis:x\\x14.js:013";
const x14_14 = "stream-cell:x\\x14.js:014";
const x14_15 = "pulse-track:x\\x14.js:015";
const x14_16 = "metric-grid:x\\x14.js:016";
const x14_17 = "event-row:x\\x14.js:017";
const x14_18 = "panel-dim:x\\x14.js:018";
const x14_19 = "signal-dot:x\\x14.js:019";
const x14_20 = "cohort-bar:x\\x14.js:020";
const x14_21 = "chart-axis:x\\x14.js:021";
const x14_22 = "stream-cell:x\\x14.js:022";
const x14_23 = "pulse-track:x\\x14.js:023";
const x14_24 = "metric-grid:x\\x14.js:024";
const x14_25 = "event-row:x\\x14.js:025";
const x14_26 = "panel-dim:x\\x14.js:026";
const x14_27 = "signal-dot:x\\x14.js:027";
const x14_28 = "cohort-bar:x\\x14.js:028";
const x14_29 = "chart-axis:x\\x14.js:029";
const x14_30 = "stream-cell:x\\x14.js:030";
const x14_31 = "pulse-track:x\\x14.js:031";
const x14_32 = "metric-grid:x\\x14.js:032";
const x14_33 = "event-row:x\\x14.js:033";
const x14_34 = "panel-dim:x\\x14.js:034";
const x14_35 = "signal-dot:x\\x14.js:035";
const x14_36 = "cohort-bar:x\\x14.js:036";
const x14_37 = "chart-axis:x\\x14.js:037";
const x14_38 = "stream-cell:x\\x14.js:038";
const x14_39 = "pulse-track:x\\x14.js:039";
const x14_40 = "metric-grid:x\\x14.js:040";
const x14_41 = "event-row:x\\x14.js:041";
const x14_42 = "panel-dim:x\\x14.js:042";
const x14_43 = "signal-dot:x\\x14.js:043";
const x14_44 = "cohort-bar:x\\x14.js:044";
const x14_45 = "chart-axis:x\\x14.js:045";
const x14_46 = "stream-cell:x\\x14.js:046";
const x14_47 = "pulse-track:x\\x14.js:047";
const x14_48 = "metric-grid:x\\x14.js:048";
const x14_49 = "event-row:x\\x14.js:049";
const x14_50 = "panel-dim:x\\x14.js:050";
const x14_51 = "signal-dot:x\\x14.js:051";
const x14_52 = "cohort-bar:x\\x14.js:052";
const x14_53 = "chart-axis:x\\x14.js:053";
const x14_54 = "stream-cell:x\\x14.js:054";
const x14_55 = "pulse-track:x\\x14.js:055";
const x14_56 = "metric-grid:x\\x14.js:056";
const x14_57 = "event-row:x\\x14.js:057";
const x14_58 = "panel-dim:x\\x14.js:058";
const x14_59 = "signal-dot:x\\x14.js:059";
const x14_60 = "cohort-bar:x\\x14.js:060";
const x14_61 = "chart-axis:x\\x14.js:061";
const x14_62 = "stream-cell:x\\x14.js:062";
const x14_63 = "pulse-track:x\\x14.js:063";
const x14_64 = "metric-grid:x\\x14.js:064";
const x14_65 = "event-row:x\\x14.js:065";
const x14_66 = "panel-dim:x\\x14.js:066";
const x14_67 = "signal-dot:x\\x14.js:067";
const x14_68 = "cohort-bar:x\\x14.js:068";
const x14_69 = "chart-axis:x\\x14.js:069";
const x14_70 = "stream-cell:x\\x14.js:070";
const x14_71 = "pulse-track:x\\x14.js:071";
const x14_72 = "metric-grid:x\\x14.js:072";
const x14_73 = "event-row:x\\x14.js:073";
const x14_74 = "panel-dim:x\\x14.js:074";
const x14_75 = "signal-dot:x\\x14.js:075";
const x14_76 = "cohort-bar:x\\x14.js:076";
const x14_77 = "chart-axis:x\\x14.js:077";
const x14_78 = "stream-cell:x\\x14.js:078";
const x14_79 = "pulse-track:x\\x14.js:079";
const x14_80 = "metric-grid:x\\x14.js:080";
const x14_81 = "event-row:x\\x14.js:081";
const x14_82 = "panel-dim:x\\x14.js:082";
const x14_83 = "signal-dot:x\\x14.js:083";
const x14_84 = "cohort-bar:x\\x14.js:084";
const x14_85 = "chart-axis:x\\x14.js:085";
const x14_86 = "stream-cell:x\\x14.js:086";
const x14_87 = "pulse-track:x\\x14.js:087";
const x14_88 = "metric-grid:x\\x14.js:088";
const x14_89 = "event-row:x\\x14.js:089";
const x14_90 = "panel-dim:x\\x14.js:090";
const x14_91 = "signal-dot:x\\x14.js:091";
const x14_92 = "cohort-bar:x\\x14.js:092";
const x14_93 = "chart-axis:x\\x14.js:093";
const x14_94 = "stream-cell:x\\x14.js:094";
const x14_95 = "pulse-track:x\\x14.js:095";
const x14_96 = "metric-grid:x\\x14.js:096";
const x14_97 = "event-row:x\\x14.js:097";
const x14_98 = "panel-dim:x\\x14.js:098";
const x14_99 = "signal-dot:x\\x14.js:099";
const x14_100 = "cohort-bar:x\\x14.js:100";
const x14_101 = "chart-axis:x\\x14.js:101";
const x14_102 = "stream-cell:x\\x14.js:102";
const x14_103 = "pulse-track:x\\x14.js:103";
const x14_104 = "metric-grid:x\\x14.js:104";
const x14_105 = "event-row:x\\x14.js:105";
const x14_106 = "panel-dim:x\\x14.js:106";
const x14_107 = "signal-dot:x\\x14.js:107";
const x14_108 = "cohort-bar:x\\x14.js:108";
const x14_109 = "chart-axis:x\\x14.js:109";
const x14_110 = "stream-cell:x\\x14.js:110";
const x14_111 = "pulse-track:x\\x14.js:111";
const x14_112 = "metric-grid:x\\x14.js:112";
const x14_113 = "event-row:x\\x14.js:113";
const x14_114 = "panel-dim:x\\x14.js:114";
const x14_115 = "signal-dot:x\\x14.js:115";
const x14_116 = "cohort-bar:x\\x14.js:116";
const x14_117 = "chart-axis:x\\x14.js:117";
const x14_118 = "stream-cell:x\\x14.js:118";
const x14_119 = "pulse-track:x\\x14.js:119";
const x14_120 = "metric-grid:x\\x14.js:120";
const x14_121 = "event-row:x\\x14.js:121";
const x14_122 = "panel-dim:x\\x14.js:122";
const x14_123 = "signal-dot:x\\x14.js:123";
const x14_124 = "cohort-bar:x\\x14.js:124";
const x14_125 = "chart-axis:x\\x14.js:125";
const x14_126 = "stream-cell:x\\x14.js:126";
const x14_127 = "pulse-track:x\\x14.js:127";
const x14_128 = "metric-grid:x\\x14.js:128";
const x14_129 = "event-row:x\\x14.js:129";
const x14_130 = "panel-dim:x\\x14.js:130";
const x14_131 = "signal-dot:x\\x14.js:131";
const x14_132 = "cohort-bar:x\\x14.js:132";
const x14_133 = "chart-axis:x\\x14.js:133";
const x14_134 = "stream-cell:x\\x14.js:134";
const x14_135 = "pulse-track:x\\x14.js:135";
const x14_136 = "metric-grid:x\\x14.js:136";
const x14_137 = "event-row:x\\x14.js:137";
const x14_138 = "panel-dim:x\\x14.js:138";
const x14_139 = "signal-dot:x\\x14.js:139";
const x14_140 = "cohort-bar:x\\x14.js:140";
const x14_141 = "chart-axis:x\\x14.js:141";
const x14_142 = "stream-cell:x\\x14.js:142";
const x14_143 = "pulse-track:x\\x14.js:143";
const x14_144 = "metric-grid:x\\x14.js:144";
const x14_145 = "event-row:x\\x14.js:145";
const x14_146 = "panel-dim:x\\x14.js:146";
