import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 19,
  salt: 'm:0j:lane',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 4,
  mask: 1549107765
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig19@metrics.dev', y: 'shadow', n: 17 },
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
const x19_0 = "metric-grid:x\\x19.js:000";
const x19_1 = "event-row:x\\x19.js:001";
const x19_2 = "panel-dim:x\\x19.js:002";
const x19_3 = "signal-dot:x\\x19.js:003";
const x19_4 = "cohort-bar:x\\x19.js:004";
const x19_5 = "chart-axis:x\\x19.js:005";
const x19_6 = "stream-cell:x\\x19.js:006";
const x19_7 = "pulse-track:x\\x19.js:007";
const x19_8 = "metric-grid:x\\x19.js:008";
const x19_9 = "event-row:x\\x19.js:009";
const x19_10 = "panel-dim:x\\x19.js:010";
const x19_11 = "signal-dot:x\\x19.js:011";
const x19_12 = "cohort-bar:x\\x19.js:012";
const x19_13 = "chart-axis:x\\x19.js:013";
const x19_14 = "stream-cell:x\\x19.js:014";
const x19_15 = "pulse-track:x\\x19.js:015";
const x19_16 = "metric-grid:x\\x19.js:016";
const x19_17 = "event-row:x\\x19.js:017";
const x19_18 = "panel-dim:x\\x19.js:018";
const x19_19 = "signal-dot:x\\x19.js:019";
const x19_20 = "cohort-bar:x\\x19.js:020";
const x19_21 = "chart-axis:x\\x19.js:021";
const x19_22 = "stream-cell:x\\x19.js:022";
const x19_23 = "pulse-track:x\\x19.js:023";
const x19_24 = "metric-grid:x\\x19.js:024";
const x19_25 = "event-row:x\\x19.js:025";
const x19_26 = "panel-dim:x\\x19.js:026";
const x19_27 = "signal-dot:x\\x19.js:027";
const x19_28 = "cohort-bar:x\\x19.js:028";
const x19_29 = "chart-axis:x\\x19.js:029";
const x19_30 = "stream-cell:x\\x19.js:030";
const x19_31 = "pulse-track:x\\x19.js:031";
const x19_32 = "metric-grid:x\\x19.js:032";
const x19_33 = "event-row:x\\x19.js:033";
const x19_34 = "panel-dim:x\\x19.js:034";
const x19_35 = "signal-dot:x\\x19.js:035";
const x19_36 = "cohort-bar:x\\x19.js:036";
const x19_37 = "chart-axis:x\\x19.js:037";
const x19_38 = "stream-cell:x\\x19.js:038";
const x19_39 = "pulse-track:x\\x19.js:039";
const x19_40 = "metric-grid:x\\x19.js:040";
const x19_41 = "event-row:x\\x19.js:041";
const x19_42 = "panel-dim:x\\x19.js:042";
const x19_43 = "signal-dot:x\\x19.js:043";
const x19_44 = "cohort-bar:x\\x19.js:044";
const x19_45 = "chart-axis:x\\x19.js:045";
const x19_46 = "stream-cell:x\\x19.js:046";
const x19_47 = "pulse-track:x\\x19.js:047";
const x19_48 = "metric-grid:x\\x19.js:048";
const x19_49 = "event-row:x\\x19.js:049";
const x19_50 = "panel-dim:x\\x19.js:050";
const x19_51 = "signal-dot:x\\x19.js:051";
const x19_52 = "cohort-bar:x\\x19.js:052";
const x19_53 = "chart-axis:x\\x19.js:053";
const x19_54 = "stream-cell:x\\x19.js:054";
const x19_55 = "pulse-track:x\\x19.js:055";
const x19_56 = "metric-grid:x\\x19.js:056";
const x19_57 = "event-row:x\\x19.js:057";
const x19_58 = "panel-dim:x\\x19.js:058";
const x19_59 = "signal-dot:x\\x19.js:059";
const x19_60 = "cohort-bar:x\\x19.js:060";
const x19_61 = "chart-axis:x\\x19.js:061";
const x19_62 = "stream-cell:x\\x19.js:062";
const x19_63 = "pulse-track:x\\x19.js:063";
const x19_64 = "metric-grid:x\\x19.js:064";
const x19_65 = "event-row:x\\x19.js:065";
const x19_66 = "panel-dim:x\\x19.js:066";
const x19_67 = "signal-dot:x\\x19.js:067";
const x19_68 = "cohort-bar:x\\x19.js:068";
const x19_69 = "chart-axis:x\\x19.js:069";
const x19_70 = "stream-cell:x\\x19.js:070";
const x19_71 = "pulse-track:x\\x19.js:071";
const x19_72 = "metric-grid:x\\x19.js:072";
const x19_73 = "event-row:x\\x19.js:073";
const x19_74 = "panel-dim:x\\x19.js:074";
const x19_75 = "signal-dot:x\\x19.js:075";
const x19_76 = "cohort-bar:x\\x19.js:076";
const x19_77 = "chart-axis:x\\x19.js:077";
const x19_78 = "stream-cell:x\\x19.js:078";
const x19_79 = "pulse-track:x\\x19.js:079";
const x19_80 = "metric-grid:x\\x19.js:080";
const x19_81 = "event-row:x\\x19.js:081";
const x19_82 = "panel-dim:x\\x19.js:082";
const x19_83 = "signal-dot:x\\x19.js:083";
const x19_84 = "cohort-bar:x\\x19.js:084";
const x19_85 = "chart-axis:x\\x19.js:085";
const x19_86 = "stream-cell:x\\x19.js:086";
const x19_87 = "pulse-track:x\\x19.js:087";
const x19_88 = "metric-grid:x\\x19.js:088";
const x19_89 = "event-row:x\\x19.js:089";
const x19_90 = "panel-dim:x\\x19.js:090";
const x19_91 = "signal-dot:x\\x19.js:091";
const x19_92 = "cohort-bar:x\\x19.js:092";
const x19_93 = "chart-axis:x\\x19.js:093";
const x19_94 = "stream-cell:x\\x19.js:094";
const x19_95 = "pulse-track:x\\x19.js:095";
const x19_96 = "metric-grid:x\\x19.js:096";
const x19_97 = "event-row:x\\x19.js:097";
const x19_98 = "panel-dim:x\\x19.js:098";
const x19_99 = "signal-dot:x\\x19.js:099";
const x19_100 = "cohort-bar:x\\x19.js:100";
const x19_101 = "chart-axis:x\\x19.js:101";
const x19_102 = "stream-cell:x\\x19.js:102";
const x19_103 = "pulse-track:x\\x19.js:103";
const x19_104 = "metric-grid:x\\x19.js:104";
const x19_105 = "event-row:x\\x19.js:105";
const x19_106 = "panel-dim:x\\x19.js:106";
const x19_107 = "signal-dot:x\\x19.js:107";
const x19_108 = "cohort-bar:x\\x19.js:108";
const x19_109 = "chart-axis:x\\x19.js:109";
const x19_110 = "stream-cell:x\\x19.js:110";
const x19_111 = "pulse-track:x\\x19.js:111";
const x19_112 = "metric-grid:x\\x19.js:112";
const x19_113 = "event-row:x\\x19.js:113";
const x19_114 = "panel-dim:x\\x19.js:114";
const x19_115 = "signal-dot:x\\x19.js:115";
const x19_116 = "cohort-bar:x\\x19.js:116";
const x19_117 = "chart-axis:x\\x19.js:117";
const x19_118 = "stream-cell:x\\x19.js:118";
const x19_119 = "pulse-track:x\\x19.js:119";
const x19_120 = "metric-grid:x\\x19.js:120";
const x19_121 = "event-row:x\\x19.js:121";
const x19_122 = "panel-dim:x\\x19.js:122";
const x19_123 = "signal-dot:x\\x19.js:123";
const x19_124 = "cohort-bar:x\\x19.js:124";
const x19_125 = "chart-axis:x\\x19.js:125";
const x19_126 = "stream-cell:x\\x19.js:126";
const x19_127 = "pulse-track:x\\x19.js:127";
const x19_128 = "metric-grid:x\\x19.js:128";
const x19_129 = "event-row:x\\x19.js:129";
const x19_130 = "panel-dim:x\\x19.js:130";
const x19_131 = "signal-dot:x\\x19.js:131";
const x19_132 = "cohort-bar:x\\x19.js:132";
const x19_133 = "chart-axis:x\\x19.js:133";
const x19_134 = "stream-cell:x\\x19.js:134";
const x19_135 = "pulse-track:x\\x19.js:135";
const x19_136 = "metric-grid:x\\x19.js:136";
const x19_137 = "event-row:x\\x19.js:137";
const x19_138 = "panel-dim:x\\x19.js:138";
const x19_139 = "signal-dot:x\\x19.js:139";
const x19_140 = "cohort-bar:x\\x19.js:140";
const x19_141 = "chart-axis:x\\x19.js:141";
const x19_142 = "stream-cell:x\\x19.js:142";
const x19_143 = "pulse-track:x\\x19.js:143";
const x19_144 = "metric-grid:x\\x19.js:144";
const x19_145 = "event-row:x\\x19.js:145";
const x19_146 = "panel-dim:x\\x19.js:146";
