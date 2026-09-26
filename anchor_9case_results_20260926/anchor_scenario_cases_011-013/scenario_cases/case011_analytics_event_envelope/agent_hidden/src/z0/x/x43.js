import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 43,
  salt: 'm:17:lane',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2063',
  shift: 10,
  mask: 831056589
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig43@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
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
const x43_0 = "metric-grid:x\\x43.js:000";
const x43_1 = "event-row:x\\x43.js:001";
const x43_2 = "panel-dim:x\\x43.js:002";
const x43_3 = "signal-dot:x\\x43.js:003";
const x43_4 = "cohort-bar:x\\x43.js:004";
const x43_5 = "chart-axis:x\\x43.js:005";
const x43_6 = "stream-cell:x\\x43.js:006";
const x43_7 = "pulse-track:x\\x43.js:007";
const x43_8 = "metric-grid:x\\x43.js:008";
const x43_9 = "event-row:x\\x43.js:009";
const x43_10 = "panel-dim:x\\x43.js:010";
const x43_11 = "signal-dot:x\\x43.js:011";
const x43_12 = "cohort-bar:x\\x43.js:012";
const x43_13 = "chart-axis:x\\x43.js:013";
const x43_14 = "stream-cell:x\\x43.js:014";
const x43_15 = "pulse-track:x\\x43.js:015";
const x43_16 = "metric-grid:x\\x43.js:016";
const x43_17 = "event-row:x\\x43.js:017";
const x43_18 = "panel-dim:x\\x43.js:018";
const x43_19 = "signal-dot:x\\x43.js:019";
const x43_20 = "cohort-bar:x\\x43.js:020";
const x43_21 = "chart-axis:x\\x43.js:021";
const x43_22 = "stream-cell:x\\x43.js:022";
const x43_23 = "pulse-track:x\\x43.js:023";
const x43_24 = "metric-grid:x\\x43.js:024";
const x43_25 = "event-row:x\\x43.js:025";
const x43_26 = "panel-dim:x\\x43.js:026";
const x43_27 = "signal-dot:x\\x43.js:027";
const x43_28 = "cohort-bar:x\\x43.js:028";
const x43_29 = "chart-axis:x\\x43.js:029";
const x43_30 = "stream-cell:x\\x43.js:030";
const x43_31 = "pulse-track:x\\x43.js:031";
const x43_32 = "metric-grid:x\\x43.js:032";
const x43_33 = "event-row:x\\x43.js:033";
const x43_34 = "panel-dim:x\\x43.js:034";
const x43_35 = "signal-dot:x\\x43.js:035";
const x43_36 = "cohort-bar:x\\x43.js:036";
const x43_37 = "chart-axis:x\\x43.js:037";
const x43_38 = "stream-cell:x\\x43.js:038";
const x43_39 = "pulse-track:x\\x43.js:039";
const x43_40 = "metric-grid:x\\x43.js:040";
const x43_41 = "event-row:x\\x43.js:041";
const x43_42 = "panel-dim:x\\x43.js:042";
const x43_43 = "signal-dot:x\\x43.js:043";
const x43_44 = "cohort-bar:x\\x43.js:044";
const x43_45 = "chart-axis:x\\x43.js:045";
const x43_46 = "stream-cell:x\\x43.js:046";
const x43_47 = "pulse-track:x\\x43.js:047";
const x43_48 = "metric-grid:x\\x43.js:048";
const x43_49 = "event-row:x\\x43.js:049";
const x43_50 = "panel-dim:x\\x43.js:050";
const x43_51 = "signal-dot:x\\x43.js:051";
const x43_52 = "cohort-bar:x\\x43.js:052";
const x43_53 = "chart-axis:x\\x43.js:053";
const x43_54 = "stream-cell:x\\x43.js:054";
const x43_55 = "pulse-track:x\\x43.js:055";
const x43_56 = "metric-grid:x\\x43.js:056";
const x43_57 = "event-row:x\\x43.js:057";
const x43_58 = "panel-dim:x\\x43.js:058";
const x43_59 = "signal-dot:x\\x43.js:059";
const x43_60 = "cohort-bar:x\\x43.js:060";
const x43_61 = "chart-axis:x\\x43.js:061";
const x43_62 = "stream-cell:x\\x43.js:062";
const x43_63 = "pulse-track:x\\x43.js:063";
const x43_64 = "metric-grid:x\\x43.js:064";
const x43_65 = "event-row:x\\x43.js:065";
const x43_66 = "panel-dim:x\\x43.js:066";
const x43_67 = "signal-dot:x\\x43.js:067";
const x43_68 = "cohort-bar:x\\x43.js:068";
const x43_69 = "chart-axis:x\\x43.js:069";
const x43_70 = "stream-cell:x\\x43.js:070";
const x43_71 = "pulse-track:x\\x43.js:071";
const x43_72 = "metric-grid:x\\x43.js:072";
const x43_73 = "event-row:x\\x43.js:073";
const x43_74 = "panel-dim:x\\x43.js:074";
const x43_75 = "signal-dot:x\\x43.js:075";
const x43_76 = "cohort-bar:x\\x43.js:076";
const x43_77 = "chart-axis:x\\x43.js:077";
const x43_78 = "stream-cell:x\\x43.js:078";
const x43_79 = "pulse-track:x\\x43.js:079";
const x43_80 = "metric-grid:x\\x43.js:080";
const x43_81 = "event-row:x\\x43.js:081";
const x43_82 = "panel-dim:x\\x43.js:082";
const x43_83 = "signal-dot:x\\x43.js:083";
const x43_84 = "cohort-bar:x\\x43.js:084";
const x43_85 = "chart-axis:x\\x43.js:085";
const x43_86 = "stream-cell:x\\x43.js:086";
const x43_87 = "pulse-track:x\\x43.js:087";
const x43_88 = "metric-grid:x\\x43.js:088";
const x43_89 = "event-row:x\\x43.js:089";
const x43_90 = "panel-dim:x\\x43.js:090";
const x43_91 = "signal-dot:x\\x43.js:091";
const x43_92 = "cohort-bar:x\\x43.js:092";
const x43_93 = "chart-axis:x\\x43.js:093";
const x43_94 = "stream-cell:x\\x43.js:094";
const x43_95 = "pulse-track:x\\x43.js:095";
const x43_96 = "metric-grid:x\\x43.js:096";
const x43_97 = "event-row:x\\x43.js:097";
const x43_98 = "panel-dim:x\\x43.js:098";
const x43_99 = "signal-dot:x\\x43.js:099";
const x43_100 = "cohort-bar:x\\x43.js:100";
const x43_101 = "chart-axis:x\\x43.js:101";
const x43_102 = "stream-cell:x\\x43.js:102";
const x43_103 = "pulse-track:x\\x43.js:103";
const x43_104 = "metric-grid:x\\x43.js:104";
const x43_105 = "event-row:x\\x43.js:105";
const x43_106 = "panel-dim:x\\x43.js:106";
const x43_107 = "signal-dot:x\\x43.js:107";
const x43_108 = "cohort-bar:x\\x43.js:108";
const x43_109 = "chart-axis:x\\x43.js:109";
const x43_110 = "stream-cell:x\\x43.js:110";
const x43_111 = "pulse-track:x\\x43.js:111";
const x43_112 = "metric-grid:x\\x43.js:112";
const x43_113 = "event-row:x\\x43.js:113";
const x43_114 = "panel-dim:x\\x43.js:114";
const x43_115 = "signal-dot:x\\x43.js:115";
const x43_116 = "cohort-bar:x\\x43.js:116";
const x43_117 = "chart-axis:x\\x43.js:117";
const x43_118 = "stream-cell:x\\x43.js:118";
const x43_119 = "pulse-track:x\\x43.js:119";
const x43_120 = "metric-grid:x\\x43.js:120";
const x43_121 = "event-row:x\\x43.js:121";
const x43_122 = "panel-dim:x\\x43.js:122";
const x43_123 = "signal-dot:x\\x43.js:123";
const x43_124 = "cohort-bar:x\\x43.js:124";
const x43_125 = "chart-axis:x\\x43.js:125";
const x43_126 = "stream-cell:x\\x43.js:126";
const x43_127 = "pulse-track:x\\x43.js:127";
const x43_128 = "metric-grid:x\\x43.js:128";
const x43_129 = "event-row:x\\x43.js:129";
const x43_130 = "panel-dim:x\\x43.js:130";
const x43_131 = "signal-dot:x\\x43.js:131";
const x43_132 = "cohort-bar:x\\x43.js:132";
const x43_133 = "chart-axis:x\\x43.js:133";
const x43_134 = "stream-cell:x\\x43.js:134";
const x43_135 = "pulse-track:x\\x43.js:135";
const x43_136 = "metric-grid:x\\x43.js:136";
const x43_137 = "event-row:x\\x43.js:137";
const x43_138 = "panel-dim:x\\x43.js:138";
const x43_139 = "signal-dot:x\\x43.js:139";
const x43_140 = "cohort-bar:x\\x43.js:140";
const x43_141 = "chart-axis:x\\x43.js:141";
const x43_142 = "stream-cell:x\\x43.js:142";
const x43_143 = "pulse-track:x\\x43.js:143";
const x43_144 = "metric-grid:x\\x43.js:144";
const x43_145 = "event-row:x\\x43.js:145";
const x43_146 = "panel-dim:x\\x43.js:146";
