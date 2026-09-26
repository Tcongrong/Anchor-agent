import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 42,
  salt: 'm:16:lane',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 9,
  mask: 2471588124
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane42@metrics.dev', y: 'shadow', n: 18 },
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
const x42_0 = "metric-grid:x\\x42.js:000";
const x42_1 = "event-row:x\\x42.js:001";
const x42_2 = "panel-dim:x\\x42.js:002";
const x42_3 = "signal-dot:x\\x42.js:003";
const x42_4 = "cohort-bar:x\\x42.js:004";
const x42_5 = "chart-axis:x\\x42.js:005";
const x42_6 = "stream-cell:x\\x42.js:006";
const x42_7 = "pulse-track:x\\x42.js:007";
const x42_8 = "metric-grid:x\\x42.js:008";
const x42_9 = "event-row:x\\x42.js:009";
const x42_10 = "panel-dim:x\\x42.js:010";
const x42_11 = "signal-dot:x\\x42.js:011";
const x42_12 = "cohort-bar:x\\x42.js:012";
const x42_13 = "chart-axis:x\\x42.js:013";
const x42_14 = "stream-cell:x\\x42.js:014";
const x42_15 = "pulse-track:x\\x42.js:015";
const x42_16 = "metric-grid:x\\x42.js:016";
const x42_17 = "event-row:x\\x42.js:017";
const x42_18 = "panel-dim:x\\x42.js:018";
const x42_19 = "signal-dot:x\\x42.js:019";
const x42_20 = "cohort-bar:x\\x42.js:020";
const x42_21 = "chart-axis:x\\x42.js:021";
const x42_22 = "stream-cell:x\\x42.js:022";
const x42_23 = "pulse-track:x\\x42.js:023";
const x42_24 = "metric-grid:x\\x42.js:024";
const x42_25 = "event-row:x\\x42.js:025";
const x42_26 = "panel-dim:x\\x42.js:026";
const x42_27 = "signal-dot:x\\x42.js:027";
const x42_28 = "cohort-bar:x\\x42.js:028";
const x42_29 = "chart-axis:x\\x42.js:029";
const x42_30 = "stream-cell:x\\x42.js:030";
const x42_31 = "pulse-track:x\\x42.js:031";
const x42_32 = "metric-grid:x\\x42.js:032";
const x42_33 = "event-row:x\\x42.js:033";
const x42_34 = "panel-dim:x\\x42.js:034";
const x42_35 = "signal-dot:x\\x42.js:035";
const x42_36 = "cohort-bar:x\\x42.js:036";
const x42_37 = "chart-axis:x\\x42.js:037";
const x42_38 = "stream-cell:x\\x42.js:038";
const x42_39 = "pulse-track:x\\x42.js:039";
const x42_40 = "metric-grid:x\\x42.js:040";
const x42_41 = "event-row:x\\x42.js:041";
const x42_42 = "panel-dim:x\\x42.js:042";
const x42_43 = "signal-dot:x\\x42.js:043";
const x42_44 = "cohort-bar:x\\x42.js:044";
const x42_45 = "chart-axis:x\\x42.js:045";
const x42_46 = "stream-cell:x\\x42.js:046";
const x42_47 = "pulse-track:x\\x42.js:047";
const x42_48 = "metric-grid:x\\x42.js:048";
const x42_49 = "event-row:x\\x42.js:049";
const x42_50 = "panel-dim:x\\x42.js:050";
const x42_51 = "signal-dot:x\\x42.js:051";
const x42_52 = "cohort-bar:x\\x42.js:052";
const x42_53 = "chart-axis:x\\x42.js:053";
const x42_54 = "stream-cell:x\\x42.js:054";
const x42_55 = "pulse-track:x\\x42.js:055";
const x42_56 = "metric-grid:x\\x42.js:056";
const x42_57 = "event-row:x\\x42.js:057";
const x42_58 = "panel-dim:x\\x42.js:058";
const x42_59 = "signal-dot:x\\x42.js:059";
const x42_60 = "cohort-bar:x\\x42.js:060";
const x42_61 = "chart-axis:x\\x42.js:061";
const x42_62 = "stream-cell:x\\x42.js:062";
const x42_63 = "pulse-track:x\\x42.js:063";
const x42_64 = "metric-grid:x\\x42.js:064";
const x42_65 = "event-row:x\\x42.js:065";
const x42_66 = "panel-dim:x\\x42.js:066";
const x42_67 = "signal-dot:x\\x42.js:067";
const x42_68 = "cohort-bar:x\\x42.js:068";
const x42_69 = "chart-axis:x\\x42.js:069";
const x42_70 = "stream-cell:x\\x42.js:070";
const x42_71 = "pulse-track:x\\x42.js:071";
const x42_72 = "metric-grid:x\\x42.js:072";
const x42_73 = "event-row:x\\x42.js:073";
const x42_74 = "panel-dim:x\\x42.js:074";
const x42_75 = "signal-dot:x\\x42.js:075";
const x42_76 = "cohort-bar:x\\x42.js:076";
const x42_77 = "chart-axis:x\\x42.js:077";
const x42_78 = "stream-cell:x\\x42.js:078";
const x42_79 = "pulse-track:x\\x42.js:079";
const x42_80 = "metric-grid:x\\x42.js:080";
const x42_81 = "event-row:x\\x42.js:081";
const x42_82 = "panel-dim:x\\x42.js:082";
const x42_83 = "signal-dot:x\\x42.js:083";
const x42_84 = "cohort-bar:x\\x42.js:084";
const x42_85 = "chart-axis:x\\x42.js:085";
const x42_86 = "stream-cell:x\\x42.js:086";
const x42_87 = "pulse-track:x\\x42.js:087";
const x42_88 = "metric-grid:x\\x42.js:088";
const x42_89 = "event-row:x\\x42.js:089";
const x42_90 = "panel-dim:x\\x42.js:090";
const x42_91 = "signal-dot:x\\x42.js:091";
const x42_92 = "cohort-bar:x\\x42.js:092";
const x42_93 = "chart-axis:x\\x42.js:093";
const x42_94 = "stream-cell:x\\x42.js:094";
const x42_95 = "pulse-track:x\\x42.js:095";
const x42_96 = "metric-grid:x\\x42.js:096";
const x42_97 = "event-row:x\\x42.js:097";
const x42_98 = "panel-dim:x\\x42.js:098";
const x42_99 = "signal-dot:x\\x42.js:099";
const x42_100 = "cohort-bar:x\\x42.js:100";
const x42_101 = "chart-axis:x\\x42.js:101";
const x42_102 = "stream-cell:x\\x42.js:102";
const x42_103 = "pulse-track:x\\x42.js:103";
const x42_104 = "metric-grid:x\\x42.js:104";
const x42_105 = "event-row:x\\x42.js:105";
const x42_106 = "panel-dim:x\\x42.js:106";
const x42_107 = "signal-dot:x\\x42.js:107";
const x42_108 = "cohort-bar:x\\x42.js:108";
const x42_109 = "chart-axis:x\\x42.js:109";
const x42_110 = "stream-cell:x\\x42.js:110";
const x42_111 = "pulse-track:x\\x42.js:111";
const x42_112 = "metric-grid:x\\x42.js:112";
const x42_113 = "event-row:x\\x42.js:113";
const x42_114 = "panel-dim:x\\x42.js:114";
const x42_115 = "signal-dot:x\\x42.js:115";
const x42_116 = "cohort-bar:x\\x42.js:116";
const x42_117 = "chart-axis:x\\x42.js:117";
const x42_118 = "stream-cell:x\\x42.js:118";
const x42_119 = "pulse-track:x\\x42.js:119";
const x42_120 = "metric-grid:x\\x42.js:120";
const x42_121 = "event-row:x\\x42.js:121";
const x42_122 = "panel-dim:x\\x42.js:122";
const x42_123 = "signal-dot:x\\x42.js:123";
const x42_124 = "cohort-bar:x\\x42.js:124";
const x42_125 = "chart-axis:x\\x42.js:125";
const x42_126 = "stream-cell:x\\x42.js:126";
const x42_127 = "pulse-track:x\\x42.js:127";
const x42_128 = "metric-grid:x\\x42.js:128";
const x42_129 = "event-row:x\\x42.js:129";
const x42_130 = "panel-dim:x\\x42.js:130";
const x42_131 = "signal-dot:x\\x42.js:131";
const x42_132 = "cohort-bar:x\\x42.js:132";
const x42_133 = "chart-axis:x\\x42.js:133";
const x42_134 = "stream-cell:x\\x42.js:134";
const x42_135 = "pulse-track:x\\x42.js:135";
const x42_136 = "metric-grid:x\\x42.js:136";
const x42_137 = "event-row:x\\x42.js:137";
const x42_138 = "panel-dim:x\\x42.js:138";
const x42_139 = "signal-dot:x\\x42.js:139";
const x42_140 = "cohort-bar:x\\x42.js:140";
const x42_141 = "chart-axis:x\\x42.js:141";
const x42_142 = "stream-cell:x\\x42.js:142";
const x42_143 = "pulse-track:x\\x42.js:143";
const x42_144 = "metric-grid:x\\x42.js:144";
const x42_145 = "event-row:x\\x42.js:145";
const x42_146 = "panel-dim:x\\x42.js:146";
