import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 9,
  salt: 'm:09:lane',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2061',
  shift: 3,
  mask: 774553931
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane9@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
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
const x09_0 = "metric-grid:x\\x09.js:000";
const x09_1 = "event-row:x\\x09.js:001";
const x09_2 = "panel-dim:x\\x09.js:002";
const x09_3 = "signal-dot:x\\x09.js:003";
const x09_4 = "cohort-bar:x\\x09.js:004";
const x09_5 = "chart-axis:x\\x09.js:005";
const x09_6 = "stream-cell:x\\x09.js:006";
const x09_7 = "pulse-track:x\\x09.js:007";
const x09_8 = "metric-grid:x\\x09.js:008";
const x09_9 = "event-row:x\\x09.js:009";
const x09_10 = "panel-dim:x\\x09.js:010";
const x09_11 = "signal-dot:x\\x09.js:011";
const x09_12 = "cohort-bar:x\\x09.js:012";
const x09_13 = "chart-axis:x\\x09.js:013";
const x09_14 = "stream-cell:x\\x09.js:014";
const x09_15 = "pulse-track:x\\x09.js:015";
const x09_16 = "metric-grid:x\\x09.js:016";
const x09_17 = "event-row:x\\x09.js:017";
const x09_18 = "panel-dim:x\\x09.js:018";
const x09_19 = "signal-dot:x\\x09.js:019";
const x09_20 = "cohort-bar:x\\x09.js:020";
const x09_21 = "chart-axis:x\\x09.js:021";
const x09_22 = "stream-cell:x\\x09.js:022";
const x09_23 = "pulse-track:x\\x09.js:023";
const x09_24 = "metric-grid:x\\x09.js:024";
const x09_25 = "event-row:x\\x09.js:025";
const x09_26 = "panel-dim:x\\x09.js:026";
const x09_27 = "signal-dot:x\\x09.js:027";
const x09_28 = "cohort-bar:x\\x09.js:028";
const x09_29 = "chart-axis:x\\x09.js:029";
const x09_30 = "stream-cell:x\\x09.js:030";
const x09_31 = "pulse-track:x\\x09.js:031";
const x09_32 = "metric-grid:x\\x09.js:032";
const x09_33 = "event-row:x\\x09.js:033";
const x09_34 = "panel-dim:x\\x09.js:034";
const x09_35 = "signal-dot:x\\x09.js:035";
const x09_36 = "cohort-bar:x\\x09.js:036";
const x09_37 = "chart-axis:x\\x09.js:037";
const x09_38 = "stream-cell:x\\x09.js:038";
const x09_39 = "pulse-track:x\\x09.js:039";
const x09_40 = "metric-grid:x\\x09.js:040";
const x09_41 = "event-row:x\\x09.js:041";
const x09_42 = "panel-dim:x\\x09.js:042";
const x09_43 = "signal-dot:x\\x09.js:043";
const x09_44 = "cohort-bar:x\\x09.js:044";
const x09_45 = "chart-axis:x\\x09.js:045";
const x09_46 = "stream-cell:x\\x09.js:046";
const x09_47 = "pulse-track:x\\x09.js:047";
const x09_48 = "metric-grid:x\\x09.js:048";
const x09_49 = "event-row:x\\x09.js:049";
const x09_50 = "panel-dim:x\\x09.js:050";
const x09_51 = "signal-dot:x\\x09.js:051";
const x09_52 = "cohort-bar:x\\x09.js:052";
const x09_53 = "chart-axis:x\\x09.js:053";
const x09_54 = "stream-cell:x\\x09.js:054";
const x09_55 = "pulse-track:x\\x09.js:055";
const x09_56 = "metric-grid:x\\x09.js:056";
const x09_57 = "event-row:x\\x09.js:057";
const x09_58 = "panel-dim:x\\x09.js:058";
const x09_59 = "signal-dot:x\\x09.js:059";
const x09_60 = "cohort-bar:x\\x09.js:060";
const x09_61 = "chart-axis:x\\x09.js:061";
const x09_62 = "stream-cell:x\\x09.js:062";
const x09_63 = "pulse-track:x\\x09.js:063";
const x09_64 = "metric-grid:x\\x09.js:064";
const x09_65 = "event-row:x\\x09.js:065";
const x09_66 = "panel-dim:x\\x09.js:066";
const x09_67 = "signal-dot:x\\x09.js:067";
const x09_68 = "cohort-bar:x\\x09.js:068";
const x09_69 = "chart-axis:x\\x09.js:069";
const x09_70 = "stream-cell:x\\x09.js:070";
const x09_71 = "pulse-track:x\\x09.js:071";
const x09_72 = "metric-grid:x\\x09.js:072";
const x09_73 = "event-row:x\\x09.js:073";
const x09_74 = "panel-dim:x\\x09.js:074";
const x09_75 = "signal-dot:x\\x09.js:075";
const x09_76 = "cohort-bar:x\\x09.js:076";
const x09_77 = "chart-axis:x\\x09.js:077";
const x09_78 = "stream-cell:x\\x09.js:078";
const x09_79 = "pulse-track:x\\x09.js:079";
const x09_80 = "metric-grid:x\\x09.js:080";
const x09_81 = "event-row:x\\x09.js:081";
const x09_82 = "panel-dim:x\\x09.js:082";
const x09_83 = "signal-dot:x\\x09.js:083";
const x09_84 = "cohort-bar:x\\x09.js:084";
const x09_85 = "chart-axis:x\\x09.js:085";
const x09_86 = "stream-cell:x\\x09.js:086";
const x09_87 = "pulse-track:x\\x09.js:087";
const x09_88 = "metric-grid:x\\x09.js:088";
const x09_89 = "event-row:x\\x09.js:089";
const x09_90 = "panel-dim:x\\x09.js:090";
const x09_91 = "signal-dot:x\\x09.js:091";
const x09_92 = "cohort-bar:x\\x09.js:092";
const x09_93 = "chart-axis:x\\x09.js:093";
const x09_94 = "stream-cell:x\\x09.js:094";
const x09_95 = "pulse-track:x\\x09.js:095";
const x09_96 = "metric-grid:x\\x09.js:096";
const x09_97 = "event-row:x\\x09.js:097";
const x09_98 = "panel-dim:x\\x09.js:098";
const x09_99 = "signal-dot:x\\x09.js:099";
const x09_100 = "cohort-bar:x\\x09.js:100";
const x09_101 = "chart-axis:x\\x09.js:101";
const x09_102 = "stream-cell:x\\x09.js:102";
const x09_103 = "pulse-track:x\\x09.js:103";
const x09_104 = "metric-grid:x\\x09.js:104";
const x09_105 = "event-row:x\\x09.js:105";
const x09_106 = "panel-dim:x\\x09.js:106";
const x09_107 = "signal-dot:x\\x09.js:107";
const x09_108 = "cohort-bar:x\\x09.js:108";
const x09_109 = "chart-axis:x\\x09.js:109";
const x09_110 = "stream-cell:x\\x09.js:110";
const x09_111 = "pulse-track:x\\x09.js:111";
const x09_112 = "metric-grid:x\\x09.js:112";
const x09_113 = "event-row:x\\x09.js:113";
const x09_114 = "panel-dim:x\\x09.js:114";
const x09_115 = "signal-dot:x\\x09.js:115";
const x09_116 = "cohort-bar:x\\x09.js:116";
const x09_117 = "chart-axis:x\\x09.js:117";
const x09_118 = "stream-cell:x\\x09.js:118";
const x09_119 = "pulse-track:x\\x09.js:119";
const x09_120 = "metric-grid:x\\x09.js:120";
const x09_121 = "event-row:x\\x09.js:121";
const x09_122 = "panel-dim:x\\x09.js:122";
const x09_123 = "signal-dot:x\\x09.js:123";
const x09_124 = "cohort-bar:x\\x09.js:124";
const x09_125 = "chart-axis:x\\x09.js:125";
const x09_126 = "stream-cell:x\\x09.js:126";
const x09_127 = "pulse-track:x\\x09.js:127";
const x09_128 = "metric-grid:x\\x09.js:128";
const x09_129 = "event-row:x\\x09.js:129";
const x09_130 = "panel-dim:x\\x09.js:130";
const x09_131 = "signal-dot:x\\x09.js:131";
const x09_132 = "cohort-bar:x\\x09.js:132";
const x09_133 = "chart-axis:x\\x09.js:133";
const x09_134 = "stream-cell:x\\x09.js:134";
const x09_135 = "pulse-track:x\\x09.js:135";
const x09_136 = "metric-grid:x\\x09.js:136";
const x09_137 = "event-row:x\\x09.js:137";
const x09_138 = "panel-dim:x\\x09.js:138";
const x09_139 = "signal-dot:x\\x09.js:139";
const x09_140 = "cohort-bar:x\\x09.js:140";
const x09_141 = "chart-axis:x\\x09.js:141";
const x09_142 = "stream-cell:x\\x09.js:142";
const x09_143 = "pulse-track:x\\x09.js:143";
const x09_144 = "metric-grid:x\\x09.js:144";
const x09_145 = "event-row:x\\x09.js:145";
const x09_146 = "panel-dim:x\\x09.js:146";
