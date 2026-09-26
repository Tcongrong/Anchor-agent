import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 34,
  salt: 'm:0y:lane',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 10,
  mask: 2710938516
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'sig34@metrics.dev', y: 'shadow', n: 17 },
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
const x34_0 = "metric-grid:x\\x34.js:000";
const x34_1 = "event-row:x\\x34.js:001";
const x34_2 = "panel-dim:x\\x34.js:002";
const x34_3 = "signal-dot:x\\x34.js:003";
const x34_4 = "cohort-bar:x\\x34.js:004";
const x34_5 = "chart-axis:x\\x34.js:005";
const x34_6 = "stream-cell:x\\x34.js:006";
const x34_7 = "pulse-track:x\\x34.js:007";
const x34_8 = "metric-grid:x\\x34.js:008";
const x34_9 = "event-row:x\\x34.js:009";
const x34_10 = "panel-dim:x\\x34.js:010";
const x34_11 = "signal-dot:x\\x34.js:011";
const x34_12 = "cohort-bar:x\\x34.js:012";
const x34_13 = "chart-axis:x\\x34.js:013";
const x34_14 = "stream-cell:x\\x34.js:014";
const x34_15 = "pulse-track:x\\x34.js:015";
const x34_16 = "metric-grid:x\\x34.js:016";
const x34_17 = "event-row:x\\x34.js:017";
const x34_18 = "panel-dim:x\\x34.js:018";
const x34_19 = "signal-dot:x\\x34.js:019";
const x34_20 = "cohort-bar:x\\x34.js:020";
const x34_21 = "chart-axis:x\\x34.js:021";
const x34_22 = "stream-cell:x\\x34.js:022";
const x34_23 = "pulse-track:x\\x34.js:023";
const x34_24 = "metric-grid:x\\x34.js:024";
const x34_25 = "event-row:x\\x34.js:025";
const x34_26 = "panel-dim:x\\x34.js:026";
const x34_27 = "signal-dot:x\\x34.js:027";
const x34_28 = "cohort-bar:x\\x34.js:028";
const x34_29 = "chart-axis:x\\x34.js:029";
const x34_30 = "stream-cell:x\\x34.js:030";
const x34_31 = "pulse-track:x\\x34.js:031";
const x34_32 = "metric-grid:x\\x34.js:032";
const x34_33 = "event-row:x\\x34.js:033";
const x34_34 = "panel-dim:x\\x34.js:034";
const x34_35 = "signal-dot:x\\x34.js:035";
const x34_36 = "cohort-bar:x\\x34.js:036";
const x34_37 = "chart-axis:x\\x34.js:037";
const x34_38 = "stream-cell:x\\x34.js:038";
const x34_39 = "pulse-track:x\\x34.js:039";
const x34_40 = "metric-grid:x\\x34.js:040";
const x34_41 = "event-row:x\\x34.js:041";
const x34_42 = "panel-dim:x\\x34.js:042";
const x34_43 = "signal-dot:x\\x34.js:043";
const x34_44 = "cohort-bar:x\\x34.js:044";
const x34_45 = "chart-axis:x\\x34.js:045";
const x34_46 = "stream-cell:x\\x34.js:046";
const x34_47 = "pulse-track:x\\x34.js:047";
const x34_48 = "metric-grid:x\\x34.js:048";
const x34_49 = "event-row:x\\x34.js:049";
const x34_50 = "panel-dim:x\\x34.js:050";
const x34_51 = "signal-dot:x\\x34.js:051";
const x34_52 = "cohort-bar:x\\x34.js:052";
const x34_53 = "chart-axis:x\\x34.js:053";
const x34_54 = "stream-cell:x\\x34.js:054";
const x34_55 = "pulse-track:x\\x34.js:055";
const x34_56 = "metric-grid:x\\x34.js:056";
const x34_57 = "event-row:x\\x34.js:057";
const x34_58 = "panel-dim:x\\x34.js:058";
const x34_59 = "signal-dot:x\\x34.js:059";
const x34_60 = "cohort-bar:x\\x34.js:060";
const x34_61 = "chart-axis:x\\x34.js:061";
const x34_62 = "stream-cell:x\\x34.js:062";
const x34_63 = "pulse-track:x\\x34.js:063";
const x34_64 = "metric-grid:x\\x34.js:064";
const x34_65 = "event-row:x\\x34.js:065";
const x34_66 = "panel-dim:x\\x34.js:066";
const x34_67 = "signal-dot:x\\x34.js:067";
const x34_68 = "cohort-bar:x\\x34.js:068";
const x34_69 = "chart-axis:x\\x34.js:069";
const x34_70 = "stream-cell:x\\x34.js:070";
const x34_71 = "pulse-track:x\\x34.js:071";
const x34_72 = "metric-grid:x\\x34.js:072";
const x34_73 = "event-row:x\\x34.js:073";
const x34_74 = "panel-dim:x\\x34.js:074";
const x34_75 = "signal-dot:x\\x34.js:075";
const x34_76 = "cohort-bar:x\\x34.js:076";
const x34_77 = "chart-axis:x\\x34.js:077";
const x34_78 = "stream-cell:x\\x34.js:078";
const x34_79 = "pulse-track:x\\x34.js:079";
const x34_80 = "metric-grid:x\\x34.js:080";
const x34_81 = "event-row:x\\x34.js:081";
const x34_82 = "panel-dim:x\\x34.js:082";
const x34_83 = "signal-dot:x\\x34.js:083";
const x34_84 = "cohort-bar:x\\x34.js:084";
const x34_85 = "chart-axis:x\\x34.js:085";
const x34_86 = "stream-cell:x\\x34.js:086";
const x34_87 = "pulse-track:x\\x34.js:087";
const x34_88 = "metric-grid:x\\x34.js:088";
const x34_89 = "event-row:x\\x34.js:089";
const x34_90 = "panel-dim:x\\x34.js:090";
const x34_91 = "signal-dot:x\\x34.js:091";
const x34_92 = "cohort-bar:x\\x34.js:092";
const x34_93 = "chart-axis:x\\x34.js:093";
const x34_94 = "stream-cell:x\\x34.js:094";
const x34_95 = "pulse-track:x\\x34.js:095";
const x34_96 = "metric-grid:x\\x34.js:096";
const x34_97 = "event-row:x\\x34.js:097";
const x34_98 = "panel-dim:x\\x34.js:098";
const x34_99 = "signal-dot:x\\x34.js:099";
const x34_100 = "cohort-bar:x\\x34.js:100";
const x34_101 = "chart-axis:x\\x34.js:101";
const x34_102 = "stream-cell:x\\x34.js:102";
const x34_103 = "pulse-track:x\\x34.js:103";
const x34_104 = "metric-grid:x\\x34.js:104";
const x34_105 = "event-row:x\\x34.js:105";
const x34_106 = "panel-dim:x\\x34.js:106";
const x34_107 = "signal-dot:x\\x34.js:107";
const x34_108 = "cohort-bar:x\\x34.js:108";
const x34_109 = "chart-axis:x\\x34.js:109";
const x34_110 = "stream-cell:x\\x34.js:110";
const x34_111 = "pulse-track:x\\x34.js:111";
const x34_112 = "metric-grid:x\\x34.js:112";
const x34_113 = "event-row:x\\x34.js:113";
const x34_114 = "panel-dim:x\\x34.js:114";
const x34_115 = "signal-dot:x\\x34.js:115";
const x34_116 = "cohort-bar:x\\x34.js:116";
const x34_117 = "chart-axis:x\\x34.js:117";
const x34_118 = "stream-cell:x\\x34.js:118";
const x34_119 = "pulse-track:x\\x34.js:119";
const x34_120 = "metric-grid:x\\x34.js:120";
const x34_121 = "event-row:x\\x34.js:121";
const x34_122 = "panel-dim:x\\x34.js:122";
const x34_123 = "signal-dot:x\\x34.js:123";
const x34_124 = "cohort-bar:x\\x34.js:124";
const x34_125 = "chart-axis:x\\x34.js:125";
const x34_126 = "stream-cell:x\\x34.js:126";
const x34_127 = "pulse-track:x\\x34.js:127";
const x34_128 = "metric-grid:x\\x34.js:128";
const x34_129 = "event-row:x\\x34.js:129";
const x34_130 = "panel-dim:x\\x34.js:130";
const x34_131 = "signal-dot:x\\x34.js:131";
const x34_132 = "cohort-bar:x\\x34.js:132";
const x34_133 = "chart-axis:x\\x34.js:133";
const x34_134 = "stream-cell:x\\x34.js:134";
const x34_135 = "pulse-track:x\\x34.js:135";
const x34_136 = "metric-grid:x\\x34.js:136";
const x34_137 = "event-row:x\\x34.js:137";
const x34_138 = "panel-dim:x\\x34.js:138";
const x34_139 = "signal-dot:x\\x34.js:139";
const x34_140 = "cohort-bar:x\\x34.js:140";
const x34_141 = "chart-axis:x\\x34.js:141";
const x34_142 = "stream-cell:x\\x34.js:142";
const x34_143 = "pulse-track:x\\x34.js:143";
const x34_144 = "metric-grid:x\\x34.js:144";
const x34_145 = "event-row:x\\x34.js:145";
const x34_146 = "panel-dim:x\\x34.js:146";
