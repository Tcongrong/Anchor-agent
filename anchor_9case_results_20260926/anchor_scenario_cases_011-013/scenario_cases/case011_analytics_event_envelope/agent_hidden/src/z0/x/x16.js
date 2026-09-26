import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 16,
  salt: 'm:0g:lane',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2060',
  shift: 10,
  mask: 2175735074
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig16@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '7', y: '7', n: 1 },
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
const x16_0 = "metric-grid:x\\x16.js:000";
const x16_1 = "event-row:x\\x16.js:001";
const x16_2 = "panel-dim:x\\x16.js:002";
const x16_3 = "signal-dot:x\\x16.js:003";
const x16_4 = "cohort-bar:x\\x16.js:004";
const x16_5 = "chart-axis:x\\x16.js:005";
const x16_6 = "stream-cell:x\\x16.js:006";
const x16_7 = "pulse-track:x\\x16.js:007";
const x16_8 = "metric-grid:x\\x16.js:008";
const x16_9 = "event-row:x\\x16.js:009";
const x16_10 = "panel-dim:x\\x16.js:010";
const x16_11 = "signal-dot:x\\x16.js:011";
const x16_12 = "cohort-bar:x\\x16.js:012";
const x16_13 = "chart-axis:x\\x16.js:013";
const x16_14 = "stream-cell:x\\x16.js:014";
const x16_15 = "pulse-track:x\\x16.js:015";
const x16_16 = "metric-grid:x\\x16.js:016";
const x16_17 = "event-row:x\\x16.js:017";
const x16_18 = "panel-dim:x\\x16.js:018";
const x16_19 = "signal-dot:x\\x16.js:019";
const x16_20 = "cohort-bar:x\\x16.js:020";
const x16_21 = "chart-axis:x\\x16.js:021";
const x16_22 = "stream-cell:x\\x16.js:022";
const x16_23 = "pulse-track:x\\x16.js:023";
const x16_24 = "metric-grid:x\\x16.js:024";
const x16_25 = "event-row:x\\x16.js:025";
const x16_26 = "panel-dim:x\\x16.js:026";
const x16_27 = "signal-dot:x\\x16.js:027";
const x16_28 = "cohort-bar:x\\x16.js:028";
const x16_29 = "chart-axis:x\\x16.js:029";
const x16_30 = "stream-cell:x\\x16.js:030";
const x16_31 = "pulse-track:x\\x16.js:031";
const x16_32 = "metric-grid:x\\x16.js:032";
const x16_33 = "event-row:x\\x16.js:033";
const x16_34 = "panel-dim:x\\x16.js:034";
const x16_35 = "signal-dot:x\\x16.js:035";
const x16_36 = "cohort-bar:x\\x16.js:036";
const x16_37 = "chart-axis:x\\x16.js:037";
const x16_38 = "stream-cell:x\\x16.js:038";
const x16_39 = "pulse-track:x\\x16.js:039";
const x16_40 = "metric-grid:x\\x16.js:040";
const x16_41 = "event-row:x\\x16.js:041";
const x16_42 = "panel-dim:x\\x16.js:042";
const x16_43 = "signal-dot:x\\x16.js:043";
const x16_44 = "cohort-bar:x\\x16.js:044";
const x16_45 = "chart-axis:x\\x16.js:045";
const x16_46 = "stream-cell:x\\x16.js:046";
const x16_47 = "pulse-track:x\\x16.js:047";
const x16_48 = "metric-grid:x\\x16.js:048";
const x16_49 = "event-row:x\\x16.js:049";
const x16_50 = "panel-dim:x\\x16.js:050";
const x16_51 = "signal-dot:x\\x16.js:051";
const x16_52 = "cohort-bar:x\\x16.js:052";
const x16_53 = "chart-axis:x\\x16.js:053";
const x16_54 = "stream-cell:x\\x16.js:054";
const x16_55 = "pulse-track:x\\x16.js:055";
const x16_56 = "metric-grid:x\\x16.js:056";
const x16_57 = "event-row:x\\x16.js:057";
const x16_58 = "panel-dim:x\\x16.js:058";
const x16_59 = "signal-dot:x\\x16.js:059";
const x16_60 = "cohort-bar:x\\x16.js:060";
const x16_61 = "chart-axis:x\\x16.js:061";
const x16_62 = "stream-cell:x\\x16.js:062";
const x16_63 = "pulse-track:x\\x16.js:063";
const x16_64 = "metric-grid:x\\x16.js:064";
const x16_65 = "event-row:x\\x16.js:065";
const x16_66 = "panel-dim:x\\x16.js:066";
const x16_67 = "signal-dot:x\\x16.js:067";
const x16_68 = "cohort-bar:x\\x16.js:068";
const x16_69 = "chart-axis:x\\x16.js:069";
const x16_70 = "stream-cell:x\\x16.js:070";
const x16_71 = "pulse-track:x\\x16.js:071";
const x16_72 = "metric-grid:x\\x16.js:072";
const x16_73 = "event-row:x\\x16.js:073";
const x16_74 = "panel-dim:x\\x16.js:074";
const x16_75 = "signal-dot:x\\x16.js:075";
const x16_76 = "cohort-bar:x\\x16.js:076";
const x16_77 = "chart-axis:x\\x16.js:077";
const x16_78 = "stream-cell:x\\x16.js:078";
const x16_79 = "pulse-track:x\\x16.js:079";
const x16_80 = "metric-grid:x\\x16.js:080";
const x16_81 = "event-row:x\\x16.js:081";
const x16_82 = "panel-dim:x\\x16.js:082";
const x16_83 = "signal-dot:x\\x16.js:083";
const x16_84 = "cohort-bar:x\\x16.js:084";
const x16_85 = "chart-axis:x\\x16.js:085";
const x16_86 = "stream-cell:x\\x16.js:086";
const x16_87 = "pulse-track:x\\x16.js:087";
const x16_88 = "metric-grid:x\\x16.js:088";
const x16_89 = "event-row:x\\x16.js:089";
const x16_90 = "panel-dim:x\\x16.js:090";
const x16_91 = "signal-dot:x\\x16.js:091";
const x16_92 = "cohort-bar:x\\x16.js:092";
const x16_93 = "chart-axis:x\\x16.js:093";
const x16_94 = "stream-cell:x\\x16.js:094";
const x16_95 = "pulse-track:x\\x16.js:095";
const x16_96 = "metric-grid:x\\x16.js:096";
const x16_97 = "event-row:x\\x16.js:097";
const x16_98 = "panel-dim:x\\x16.js:098";
const x16_99 = "signal-dot:x\\x16.js:099";
const x16_100 = "cohort-bar:x\\x16.js:100";
const x16_101 = "chart-axis:x\\x16.js:101";
const x16_102 = "stream-cell:x\\x16.js:102";
const x16_103 = "pulse-track:x\\x16.js:103";
const x16_104 = "metric-grid:x\\x16.js:104";
const x16_105 = "event-row:x\\x16.js:105";
const x16_106 = "panel-dim:x\\x16.js:106";
const x16_107 = "signal-dot:x\\x16.js:107";
const x16_108 = "cohort-bar:x\\x16.js:108";
const x16_109 = "chart-axis:x\\x16.js:109";
const x16_110 = "stream-cell:x\\x16.js:110";
const x16_111 = "pulse-track:x\\x16.js:111";
const x16_112 = "metric-grid:x\\x16.js:112";
const x16_113 = "event-row:x\\x16.js:113";
const x16_114 = "panel-dim:x\\x16.js:114";
const x16_115 = "signal-dot:x\\x16.js:115";
const x16_116 = "cohort-bar:x\\x16.js:116";
const x16_117 = "chart-axis:x\\x16.js:117";
const x16_118 = "stream-cell:x\\x16.js:118";
const x16_119 = "pulse-track:x\\x16.js:119";
const x16_120 = "metric-grid:x\\x16.js:120";
const x16_121 = "event-row:x\\x16.js:121";
const x16_122 = "panel-dim:x\\x16.js:122";
const x16_123 = "signal-dot:x\\x16.js:123";
const x16_124 = "cohort-bar:x\\x16.js:124";
const x16_125 = "chart-axis:x\\x16.js:125";
const x16_126 = "stream-cell:x\\x16.js:126";
const x16_127 = "pulse-track:x\\x16.js:127";
const x16_128 = "metric-grid:x\\x16.js:128";
const x16_129 = "event-row:x\\x16.js:129";
const x16_130 = "panel-dim:x\\x16.js:130";
const x16_131 = "signal-dot:x\\x16.js:131";
const x16_132 = "cohort-bar:x\\x16.js:132";
const x16_133 = "chart-axis:x\\x16.js:133";
const x16_134 = "stream-cell:x\\x16.js:134";
const x16_135 = "pulse-track:x\\x16.js:135";
const x16_136 = "metric-grid:x\\x16.js:136";
const x16_137 = "event-row:x\\x16.js:137";
const x16_138 = "panel-dim:x\\x16.js:138";
const x16_139 = "signal-dot:x\\x16.js:139";
const x16_140 = "cohort-bar:x\\x16.js:140";
const x16_141 = "chart-axis:x\\x16.js:141";
const x16_142 = "stream-cell:x\\x16.js:142";
const x16_143 = "pulse-track:x\\x16.js:143";
const x16_144 = "metric-grid:x\\x16.js:144";
const x16_145 = "event-row:x\\x16.js:145";
const x16_146 = "panel-dim:x\\x16.js:146";
