import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 6,
  salt: 'm:06:lane',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 9,
  mask: 1401181240
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane6@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
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
const x06_0 = "metric-grid:x\\x06.js:000";
const x06_1 = "event-row:x\\x06.js:001";
const x06_2 = "panel-dim:x\\x06.js:002";
const x06_3 = "signal-dot:x\\x06.js:003";
const x06_4 = "cohort-bar:x\\x06.js:004";
const x06_5 = "chart-axis:x\\x06.js:005";
const x06_6 = "stream-cell:x\\x06.js:006";
const x06_7 = "pulse-track:x\\x06.js:007";
const x06_8 = "metric-grid:x\\x06.js:008";
const x06_9 = "event-row:x\\x06.js:009";
const x06_10 = "panel-dim:x\\x06.js:010";
const x06_11 = "signal-dot:x\\x06.js:011";
const x06_12 = "cohort-bar:x\\x06.js:012";
const x06_13 = "chart-axis:x\\x06.js:013";
const x06_14 = "stream-cell:x\\x06.js:014";
const x06_15 = "pulse-track:x\\x06.js:015";
const x06_16 = "metric-grid:x\\x06.js:016";
const x06_17 = "event-row:x\\x06.js:017";
const x06_18 = "panel-dim:x\\x06.js:018";
const x06_19 = "signal-dot:x\\x06.js:019";
const x06_20 = "cohort-bar:x\\x06.js:020";
const x06_21 = "chart-axis:x\\x06.js:021";
const x06_22 = "stream-cell:x\\x06.js:022";
const x06_23 = "pulse-track:x\\x06.js:023";
const x06_24 = "metric-grid:x\\x06.js:024";
const x06_25 = "event-row:x\\x06.js:025";
const x06_26 = "panel-dim:x\\x06.js:026";
const x06_27 = "signal-dot:x\\x06.js:027";
const x06_28 = "cohort-bar:x\\x06.js:028";
const x06_29 = "chart-axis:x\\x06.js:029";
const x06_30 = "stream-cell:x\\x06.js:030";
const x06_31 = "pulse-track:x\\x06.js:031";
const x06_32 = "metric-grid:x\\x06.js:032";
const x06_33 = "event-row:x\\x06.js:033";
const x06_34 = "panel-dim:x\\x06.js:034";
const x06_35 = "signal-dot:x\\x06.js:035";
const x06_36 = "cohort-bar:x\\x06.js:036";
const x06_37 = "chart-axis:x\\x06.js:037";
const x06_38 = "stream-cell:x\\x06.js:038";
const x06_39 = "pulse-track:x\\x06.js:039";
const x06_40 = "metric-grid:x\\x06.js:040";
const x06_41 = "event-row:x\\x06.js:041";
const x06_42 = "panel-dim:x\\x06.js:042";
const x06_43 = "signal-dot:x\\x06.js:043";
const x06_44 = "cohort-bar:x\\x06.js:044";
const x06_45 = "chart-axis:x\\x06.js:045";
const x06_46 = "stream-cell:x\\x06.js:046";
const x06_47 = "pulse-track:x\\x06.js:047";
const x06_48 = "metric-grid:x\\x06.js:048";
const x06_49 = "event-row:x\\x06.js:049";
const x06_50 = "panel-dim:x\\x06.js:050";
const x06_51 = "signal-dot:x\\x06.js:051";
const x06_52 = "cohort-bar:x\\x06.js:052";
const x06_53 = "chart-axis:x\\x06.js:053";
const x06_54 = "stream-cell:x\\x06.js:054";
const x06_55 = "pulse-track:x\\x06.js:055";
const x06_56 = "metric-grid:x\\x06.js:056";
const x06_57 = "event-row:x\\x06.js:057";
const x06_58 = "panel-dim:x\\x06.js:058";
const x06_59 = "signal-dot:x\\x06.js:059";
const x06_60 = "cohort-bar:x\\x06.js:060";
const x06_61 = "chart-axis:x\\x06.js:061";
const x06_62 = "stream-cell:x\\x06.js:062";
const x06_63 = "pulse-track:x\\x06.js:063";
const x06_64 = "metric-grid:x\\x06.js:064";
const x06_65 = "event-row:x\\x06.js:065";
const x06_66 = "panel-dim:x\\x06.js:066";
const x06_67 = "signal-dot:x\\x06.js:067";
const x06_68 = "cohort-bar:x\\x06.js:068";
const x06_69 = "chart-axis:x\\x06.js:069";
const x06_70 = "stream-cell:x\\x06.js:070";
const x06_71 = "pulse-track:x\\x06.js:071";
const x06_72 = "metric-grid:x\\x06.js:072";
const x06_73 = "event-row:x\\x06.js:073";
const x06_74 = "panel-dim:x\\x06.js:074";
const x06_75 = "signal-dot:x\\x06.js:075";
const x06_76 = "cohort-bar:x\\x06.js:076";
const x06_77 = "chart-axis:x\\x06.js:077";
const x06_78 = "stream-cell:x\\x06.js:078";
const x06_79 = "pulse-track:x\\x06.js:079";
const x06_80 = "metric-grid:x\\x06.js:080";
const x06_81 = "event-row:x\\x06.js:081";
const x06_82 = "panel-dim:x\\x06.js:082";
const x06_83 = "signal-dot:x\\x06.js:083";
const x06_84 = "cohort-bar:x\\x06.js:084";
const x06_85 = "chart-axis:x\\x06.js:085";
const x06_86 = "stream-cell:x\\x06.js:086";
const x06_87 = "pulse-track:x\\x06.js:087";
const x06_88 = "metric-grid:x\\x06.js:088";
const x06_89 = "event-row:x\\x06.js:089";
const x06_90 = "panel-dim:x\\x06.js:090";
const x06_91 = "signal-dot:x\\x06.js:091";
const x06_92 = "cohort-bar:x\\x06.js:092";
const x06_93 = "chart-axis:x\\x06.js:093";
const x06_94 = "stream-cell:x\\x06.js:094";
const x06_95 = "pulse-track:x\\x06.js:095";
const x06_96 = "metric-grid:x\\x06.js:096";
const x06_97 = "event-row:x\\x06.js:097";
const x06_98 = "panel-dim:x\\x06.js:098";
const x06_99 = "signal-dot:x\\x06.js:099";
const x06_100 = "cohort-bar:x\\x06.js:100";
const x06_101 = "chart-axis:x\\x06.js:101";
const x06_102 = "stream-cell:x\\x06.js:102";
const x06_103 = "pulse-track:x\\x06.js:103";
const x06_104 = "metric-grid:x\\x06.js:104";
const x06_105 = "event-row:x\\x06.js:105";
const x06_106 = "panel-dim:x\\x06.js:106";
const x06_107 = "signal-dot:x\\x06.js:107";
const x06_108 = "cohort-bar:x\\x06.js:108";
const x06_109 = "chart-axis:x\\x06.js:109";
const x06_110 = "stream-cell:x\\x06.js:110";
const x06_111 = "pulse-track:x\\x06.js:111";
const x06_112 = "metric-grid:x\\x06.js:112";
const x06_113 = "event-row:x\\x06.js:113";
const x06_114 = "panel-dim:x\\x06.js:114";
const x06_115 = "signal-dot:x\\x06.js:115";
const x06_116 = "cohort-bar:x\\x06.js:116";
const x06_117 = "chart-axis:x\\x06.js:117";
const x06_118 = "stream-cell:x\\x06.js:118";
const x06_119 = "pulse-track:x\\x06.js:119";
const x06_120 = "metric-grid:x\\x06.js:120";
const x06_121 = "event-row:x\\x06.js:121";
const x06_122 = "panel-dim:x\\x06.js:122";
const x06_123 = "signal-dot:x\\x06.js:123";
const x06_124 = "cohort-bar:x\\x06.js:124";
const x06_125 = "chart-axis:x\\x06.js:125";
const x06_126 = "stream-cell:x\\x06.js:126";
const x06_127 = "pulse-track:x\\x06.js:127";
const x06_128 = "metric-grid:x\\x06.js:128";
const x06_129 = "event-row:x\\x06.js:129";
const x06_130 = "panel-dim:x\\x06.js:130";
const x06_131 = "signal-dot:x\\x06.js:131";
const x06_132 = "cohort-bar:x\\x06.js:132";
const x06_133 = "chart-axis:x\\x06.js:133";
const x06_134 = "stream-cell:x\\x06.js:134";
const x06_135 = "pulse-track:x\\x06.js:135";
const x06_136 = "metric-grid:x\\x06.js:136";
const x06_137 = "event-row:x\\x06.js:137";
const x06_138 = "panel-dim:x\\x06.js:138";
const x06_139 = "signal-dot:x\\x06.js:139";
const x06_140 = "cohort-bar:x\\x06.js:140";
const x06_141 = "chart-axis:x\\x06.js:141";
const x06_142 = "stream-cell:x\\x06.js:142";
const x06_143 = "pulse-track:x\\x06.js:143";
const x06_144 = "metric-grid:x\\x06.js:144";
const x06_145 = "event-row:x\\x06.js:145";
const x06_146 = "panel-dim:x\\x06.js:146";
