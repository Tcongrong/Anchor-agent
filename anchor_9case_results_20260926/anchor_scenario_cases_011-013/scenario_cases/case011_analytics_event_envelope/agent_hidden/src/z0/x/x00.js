import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 0,
  salt: 'm:00:lane',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 3,
  mask: 2654435858
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane0@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '0', y: '0', n: 1 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 't', i: 6, v: 't', y: 't', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 13) + '-' + (cfg.slot + 3).toString(36) + '00';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneTuple(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x00_0 = "metric-grid:x\\x00.js:000";
const x00_1 = "event-row:x\\x00.js:001";
const x00_2 = "panel-dim:x\\x00.js:002";
const x00_3 = "signal-dot:x\\x00.js:003";
const x00_4 = "cohort-bar:x\\x00.js:004";
const x00_5 = "chart-axis:x\\x00.js:005";
const x00_6 = "stream-cell:x\\x00.js:006";
const x00_7 = "pulse-track:x\\x00.js:007";
const x00_8 = "metric-grid:x\\x00.js:008";
const x00_9 = "event-row:x\\x00.js:009";
const x00_10 = "panel-dim:x\\x00.js:010";
const x00_11 = "signal-dot:x\\x00.js:011";
const x00_12 = "cohort-bar:x\\x00.js:012";
const x00_13 = "chart-axis:x\\x00.js:013";
const x00_14 = "stream-cell:x\\x00.js:014";
const x00_15 = "pulse-track:x\\x00.js:015";
const x00_16 = "metric-grid:x\\x00.js:016";
const x00_17 = "event-row:x\\x00.js:017";
const x00_18 = "panel-dim:x\\x00.js:018";
const x00_19 = "signal-dot:x\\x00.js:019";
const x00_20 = "cohort-bar:x\\x00.js:020";
const x00_21 = "chart-axis:x\\x00.js:021";
const x00_22 = "stream-cell:x\\x00.js:022";
const x00_23 = "pulse-track:x\\x00.js:023";
const x00_24 = "metric-grid:x\\x00.js:024";
const x00_25 = "event-row:x\\x00.js:025";
const x00_26 = "panel-dim:x\\x00.js:026";
const x00_27 = "signal-dot:x\\x00.js:027";
const x00_28 = "cohort-bar:x\\x00.js:028";
const x00_29 = "chart-axis:x\\x00.js:029";
const x00_30 = "stream-cell:x\\x00.js:030";
const x00_31 = "pulse-track:x\\x00.js:031";
const x00_32 = "metric-grid:x\\x00.js:032";
const x00_33 = "event-row:x\\x00.js:033";
const x00_34 = "panel-dim:x\\x00.js:034";
const x00_35 = "signal-dot:x\\x00.js:035";
const x00_36 = "cohort-bar:x\\x00.js:036";
const x00_37 = "chart-axis:x\\x00.js:037";
const x00_38 = "stream-cell:x\\x00.js:038";
const x00_39 = "pulse-track:x\\x00.js:039";
const x00_40 = "metric-grid:x\\x00.js:040";
const x00_41 = "event-row:x\\x00.js:041";
const x00_42 = "panel-dim:x\\x00.js:042";
const x00_43 = "signal-dot:x\\x00.js:043";
const x00_44 = "cohort-bar:x\\x00.js:044";
const x00_45 = "chart-axis:x\\x00.js:045";
const x00_46 = "stream-cell:x\\x00.js:046";
const x00_47 = "pulse-track:x\\x00.js:047";
const x00_48 = "metric-grid:x\\x00.js:048";
const x00_49 = "event-row:x\\x00.js:049";
const x00_50 = "panel-dim:x\\x00.js:050";
const x00_51 = "signal-dot:x\\x00.js:051";
const x00_52 = "cohort-bar:x\\x00.js:052";
const x00_53 = "chart-axis:x\\x00.js:053";
const x00_54 = "stream-cell:x\\x00.js:054";
const x00_55 = "pulse-track:x\\x00.js:055";
const x00_56 = "metric-grid:x\\x00.js:056";
const x00_57 = "event-row:x\\x00.js:057";
const x00_58 = "panel-dim:x\\x00.js:058";
const x00_59 = "signal-dot:x\\x00.js:059";
const x00_60 = "cohort-bar:x\\x00.js:060";
const x00_61 = "chart-axis:x\\x00.js:061";
const x00_62 = "stream-cell:x\\x00.js:062";
const x00_63 = "pulse-track:x\\x00.js:063";
const x00_64 = "metric-grid:x\\x00.js:064";
const x00_65 = "event-row:x\\x00.js:065";
const x00_66 = "panel-dim:x\\x00.js:066";
const x00_67 = "signal-dot:x\\x00.js:067";
const x00_68 = "cohort-bar:x\\x00.js:068";
const x00_69 = "chart-axis:x\\x00.js:069";
const x00_70 = "stream-cell:x\\x00.js:070";
const x00_71 = "pulse-track:x\\x00.js:071";
const x00_72 = "metric-grid:x\\x00.js:072";
const x00_73 = "event-row:x\\x00.js:073";
const x00_74 = "panel-dim:x\\x00.js:074";
const x00_75 = "signal-dot:x\\x00.js:075";
const x00_76 = "cohort-bar:x\\x00.js:076";
const x00_77 = "chart-axis:x\\x00.js:077";
const x00_78 = "stream-cell:x\\x00.js:078";
const x00_79 = "pulse-track:x\\x00.js:079";
const x00_80 = "metric-grid:x\\x00.js:080";
const x00_81 = "event-row:x\\x00.js:081";
const x00_82 = "panel-dim:x\\x00.js:082";
const x00_83 = "signal-dot:x\\x00.js:083";
const x00_84 = "cohort-bar:x\\x00.js:084";
const x00_85 = "chart-axis:x\\x00.js:085";
const x00_86 = "stream-cell:x\\x00.js:086";
const x00_87 = "pulse-track:x\\x00.js:087";
const x00_88 = "metric-grid:x\\x00.js:088";
const x00_89 = "event-row:x\\x00.js:089";
const x00_90 = "panel-dim:x\\x00.js:090";
const x00_91 = "signal-dot:x\\x00.js:091";
const x00_92 = "cohort-bar:x\\x00.js:092";
const x00_93 = "chart-axis:x\\x00.js:093";
const x00_94 = "stream-cell:x\\x00.js:094";
const x00_95 = "pulse-track:x\\x00.js:095";
const x00_96 = "metric-grid:x\\x00.js:096";
const x00_97 = "event-row:x\\x00.js:097";
const x00_98 = "panel-dim:x\\x00.js:098";
const x00_99 = "signal-dot:x\\x00.js:099";
const x00_100 = "cohort-bar:x\\x00.js:100";
const x00_101 = "chart-axis:x\\x00.js:101";
const x00_102 = "stream-cell:x\\x00.js:102";
const x00_103 = "pulse-track:x\\x00.js:103";
const x00_104 = "metric-grid:x\\x00.js:104";
const x00_105 = "event-row:x\\x00.js:105";
const x00_106 = "panel-dim:x\\x00.js:106";
const x00_107 = "signal-dot:x\\x00.js:107";
const x00_108 = "cohort-bar:x\\x00.js:108";
const x00_109 = "chart-axis:x\\x00.js:109";
const x00_110 = "stream-cell:x\\x00.js:110";
const x00_111 = "pulse-track:x\\x00.js:111";
const x00_112 = "metric-grid:x\\x00.js:112";
const x00_113 = "event-row:x\\x00.js:113";
const x00_114 = "panel-dim:x\\x00.js:114";
const x00_115 = "signal-dot:x\\x00.js:115";
const x00_116 = "cohort-bar:x\\x00.js:116";
const x00_117 = "chart-axis:x\\x00.js:117";
const x00_118 = "stream-cell:x\\x00.js:118";
const x00_119 = "pulse-track:x\\x00.js:119";
const x00_120 = "metric-grid:x\\x00.js:120";
const x00_121 = "event-row:x\\x00.js:121";
const x00_122 = "panel-dim:x\\x00.js:122";
const x00_123 = "signal-dot:x\\x00.js:123";
const x00_124 = "cohort-bar:x\\x00.js:124";
const x00_125 = "chart-axis:x\\x00.js:125";
const x00_126 = "stream-cell:x\\x00.js:126";
const x00_127 = "pulse-track:x\\x00.js:127";
const x00_128 = "metric-grid:x\\x00.js:128";
const x00_129 = "event-row:x\\x00.js:129";
const x00_130 = "panel-dim:x\\x00.js:130";
const x00_131 = "signal-dot:x\\x00.js:131";
const x00_132 = "cohort-bar:x\\x00.js:132";
const x00_133 = "chart-axis:x\\x00.js:133";
const x00_134 = "stream-cell:x\\x00.js:134";
const x00_135 = "pulse-track:x\\x00.js:135";
const x00_136 = "metric-grid:x\\x00.js:136";
const x00_137 = "event-row:x\\x00.js:137";
const x00_138 = "panel-dim:x\\x00.js:138";
const x00_139 = "signal-dot:x\\x00.js:139";
const x00_140 = "cohort-bar:x\\x00.js:140";
const x00_141 = "chart-axis:x\\x00.js:141";
const x00_142 = "stream-cell:x\\x00.js:142";
const x00_143 = "pulse-track:x\\x00.js:143";
const x00_144 = "metric-grid:x\\x00.js:144";
const x00_145 = "event-row:x\\x00.js:145";
const x00_146 = "panel-dim:x\\x00.js:146";
