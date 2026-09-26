import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 33,
  salt: 'm:0x:lane',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 9,
  mask: 56502755
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane33@metrics.dev', y: 'shadow', n: 18 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x33_0 = "metric-grid:x\\x33.js:000";
const x33_1 = "event-row:x\\x33.js:001";
const x33_2 = "panel-dim:x\\x33.js:002";
const x33_3 = "signal-dot:x\\x33.js:003";
const x33_4 = "cohort-bar:x\\x33.js:004";
const x33_5 = "chart-axis:x\\x33.js:005";
const x33_6 = "stream-cell:x\\x33.js:006";
const x33_7 = "pulse-track:x\\x33.js:007";
const x33_8 = "metric-grid:x\\x33.js:008";
const x33_9 = "event-row:x\\x33.js:009";
const x33_10 = "panel-dim:x\\x33.js:010";
const x33_11 = "signal-dot:x\\x33.js:011";
const x33_12 = "cohort-bar:x\\x33.js:012";
const x33_13 = "chart-axis:x\\x33.js:013";
const x33_14 = "stream-cell:x\\x33.js:014";
const x33_15 = "pulse-track:x\\x33.js:015";
const x33_16 = "metric-grid:x\\x33.js:016";
const x33_17 = "event-row:x\\x33.js:017";
const x33_18 = "panel-dim:x\\x33.js:018";
const x33_19 = "signal-dot:x\\x33.js:019";
const x33_20 = "cohort-bar:x\\x33.js:020";
const x33_21 = "chart-axis:x\\x33.js:021";
const x33_22 = "stream-cell:x\\x33.js:022";
const x33_23 = "pulse-track:x\\x33.js:023";
const x33_24 = "metric-grid:x\\x33.js:024";
const x33_25 = "event-row:x\\x33.js:025";
const x33_26 = "panel-dim:x\\x33.js:026";
const x33_27 = "signal-dot:x\\x33.js:027";
const x33_28 = "cohort-bar:x\\x33.js:028";
const x33_29 = "chart-axis:x\\x33.js:029";
const x33_30 = "stream-cell:x\\x33.js:030";
const x33_31 = "pulse-track:x\\x33.js:031";
const x33_32 = "metric-grid:x\\x33.js:032";
const x33_33 = "event-row:x\\x33.js:033";
const x33_34 = "panel-dim:x\\x33.js:034";
const x33_35 = "signal-dot:x\\x33.js:035";
const x33_36 = "cohort-bar:x\\x33.js:036";
const x33_37 = "chart-axis:x\\x33.js:037";
const x33_38 = "stream-cell:x\\x33.js:038";
const x33_39 = "pulse-track:x\\x33.js:039";
const x33_40 = "metric-grid:x\\x33.js:040";
const x33_41 = "event-row:x\\x33.js:041";
const x33_42 = "panel-dim:x\\x33.js:042";
const x33_43 = "signal-dot:x\\x33.js:043";
const x33_44 = "cohort-bar:x\\x33.js:044";
const x33_45 = "chart-axis:x\\x33.js:045";
const x33_46 = "stream-cell:x\\x33.js:046";
const x33_47 = "pulse-track:x\\x33.js:047";
const x33_48 = "metric-grid:x\\x33.js:048";
const x33_49 = "event-row:x\\x33.js:049";
const x33_50 = "panel-dim:x\\x33.js:050";
const x33_51 = "signal-dot:x\\x33.js:051";
const x33_52 = "cohort-bar:x\\x33.js:052";
const x33_53 = "chart-axis:x\\x33.js:053";
const x33_54 = "stream-cell:x\\x33.js:054";
const x33_55 = "pulse-track:x\\x33.js:055";
const x33_56 = "metric-grid:x\\x33.js:056";
const x33_57 = "event-row:x\\x33.js:057";
const x33_58 = "panel-dim:x\\x33.js:058";
const x33_59 = "signal-dot:x\\x33.js:059";
const x33_60 = "cohort-bar:x\\x33.js:060";
const x33_61 = "chart-axis:x\\x33.js:061";
const x33_62 = "stream-cell:x\\x33.js:062";
const x33_63 = "pulse-track:x\\x33.js:063";
const x33_64 = "metric-grid:x\\x33.js:064";
const x33_65 = "event-row:x\\x33.js:065";
const x33_66 = "panel-dim:x\\x33.js:066";
const x33_67 = "signal-dot:x\\x33.js:067";
const x33_68 = "cohort-bar:x\\x33.js:068";
const x33_69 = "chart-axis:x\\x33.js:069";
const x33_70 = "stream-cell:x\\x33.js:070";
const x33_71 = "pulse-track:x\\x33.js:071";
const x33_72 = "metric-grid:x\\x33.js:072";
const x33_73 = "event-row:x\\x33.js:073";
const x33_74 = "panel-dim:x\\x33.js:074";
const x33_75 = "signal-dot:x\\x33.js:075";
const x33_76 = "cohort-bar:x\\x33.js:076";
const x33_77 = "chart-axis:x\\x33.js:077";
const x33_78 = "stream-cell:x\\x33.js:078";
const x33_79 = "pulse-track:x\\x33.js:079";
const x33_80 = "metric-grid:x\\x33.js:080";
const x33_81 = "event-row:x\\x33.js:081";
const x33_82 = "panel-dim:x\\x33.js:082";
const x33_83 = "signal-dot:x\\x33.js:083";
const x33_84 = "cohort-bar:x\\x33.js:084";
const x33_85 = "chart-axis:x\\x33.js:085";
const x33_86 = "stream-cell:x\\x33.js:086";
const x33_87 = "pulse-track:x\\x33.js:087";
const x33_88 = "metric-grid:x\\x33.js:088";
const x33_89 = "event-row:x\\x33.js:089";
const x33_90 = "panel-dim:x\\x33.js:090";
const x33_91 = "signal-dot:x\\x33.js:091";
const x33_92 = "cohort-bar:x\\x33.js:092";
const x33_93 = "chart-axis:x\\x33.js:093";
const x33_94 = "stream-cell:x\\x33.js:094";
const x33_95 = "pulse-track:x\\x33.js:095";
const x33_96 = "metric-grid:x\\x33.js:096";
const x33_97 = "event-row:x\\x33.js:097";
const x33_98 = "panel-dim:x\\x33.js:098";
const x33_99 = "signal-dot:x\\x33.js:099";
const x33_100 = "cohort-bar:x\\x33.js:100";
const x33_101 = "chart-axis:x\\x33.js:101";
const x33_102 = "stream-cell:x\\x33.js:102";
const x33_103 = "pulse-track:x\\x33.js:103";
const x33_104 = "metric-grid:x\\x33.js:104";
const x33_105 = "event-row:x\\x33.js:105";
const x33_106 = "panel-dim:x\\x33.js:106";
const x33_107 = "signal-dot:x\\x33.js:107";
const x33_108 = "cohort-bar:x\\x33.js:108";
const x33_109 = "chart-axis:x\\x33.js:109";
const x33_110 = "stream-cell:x\\x33.js:110";
const x33_111 = "pulse-track:x\\x33.js:111";
const x33_112 = "metric-grid:x\\x33.js:112";
const x33_113 = "event-row:x\\x33.js:113";
const x33_114 = "panel-dim:x\\x33.js:114";
const x33_115 = "signal-dot:x\\x33.js:115";
const x33_116 = "cohort-bar:x\\x33.js:116";
const x33_117 = "chart-axis:x\\x33.js:117";
const x33_118 = "stream-cell:x\\x33.js:118";
const x33_119 = "pulse-track:x\\x33.js:119";
const x33_120 = "metric-grid:x\\x33.js:120";
const x33_121 = "event-row:x\\x33.js:121";
const x33_122 = "panel-dim:x\\x33.js:122";
const x33_123 = "signal-dot:x\\x33.js:123";
const x33_124 = "cohort-bar:x\\x33.js:124";
const x33_125 = "chart-axis:x\\x33.js:125";
const x33_126 = "stream-cell:x\\x33.js:126";
const x33_127 = "pulse-track:x\\x33.js:127";
const x33_128 = "metric-grid:x\\x33.js:128";
const x33_129 = "event-row:x\\x33.js:129";
const x33_130 = "panel-dim:x\\x33.js:130";
const x33_131 = "signal-dot:x\\x33.js:131";
const x33_132 = "cohort-bar:x\\x33.js:132";
const x33_133 = "chart-axis:x\\x33.js:133";
const x33_134 = "stream-cell:x\\x33.js:134";
const x33_135 = "pulse-track:x\\x33.js:135";
const x33_136 = "metric-grid:x\\x33.js:136";
const x33_137 = "event-row:x\\x33.js:137";
const x33_138 = "panel-dim:x\\x33.js:138";
const x33_139 = "signal-dot:x\\x33.js:139";
const x33_140 = "cohort-bar:x\\x33.js:140";
const x33_141 = "chart-axis:x\\x33.js:141";
const x33_142 = "stream-cell:x\\x33.js:142";
const x33_143 = "pulse-track:x\\x33.js:143";
const x33_144 = "metric-grid:x\\x33.js:144";
const x33_145 = "event-row:x\\x33.js:145";
const x33_146 = "panel-dim:x\\x33.js:146";
