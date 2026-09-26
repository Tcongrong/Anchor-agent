import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 39,
  salt: 'm:13:lane',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2063',
  shift: 6,
  mask: 3098215433
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane39@metrics.dev', y: 'shadow', n: 18 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
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
const x39_0 = "metric-grid:x\\x39.js:000";
const x39_1 = "event-row:x\\x39.js:001";
const x39_2 = "panel-dim:x\\x39.js:002";
const x39_3 = "signal-dot:x\\x39.js:003";
const x39_4 = "cohort-bar:x\\x39.js:004";
const x39_5 = "chart-axis:x\\x39.js:005";
const x39_6 = "stream-cell:x\\x39.js:006";
const x39_7 = "pulse-track:x\\x39.js:007";
const x39_8 = "metric-grid:x\\x39.js:008";
const x39_9 = "event-row:x\\x39.js:009";
const x39_10 = "panel-dim:x\\x39.js:010";
const x39_11 = "signal-dot:x\\x39.js:011";
const x39_12 = "cohort-bar:x\\x39.js:012";
const x39_13 = "chart-axis:x\\x39.js:013";
const x39_14 = "stream-cell:x\\x39.js:014";
const x39_15 = "pulse-track:x\\x39.js:015";
const x39_16 = "metric-grid:x\\x39.js:016";
const x39_17 = "event-row:x\\x39.js:017";
const x39_18 = "panel-dim:x\\x39.js:018";
const x39_19 = "signal-dot:x\\x39.js:019";
const x39_20 = "cohort-bar:x\\x39.js:020";
const x39_21 = "chart-axis:x\\x39.js:021";
const x39_22 = "stream-cell:x\\x39.js:022";
const x39_23 = "pulse-track:x\\x39.js:023";
const x39_24 = "metric-grid:x\\x39.js:024";
const x39_25 = "event-row:x\\x39.js:025";
const x39_26 = "panel-dim:x\\x39.js:026";
const x39_27 = "signal-dot:x\\x39.js:027";
const x39_28 = "cohort-bar:x\\x39.js:028";
const x39_29 = "chart-axis:x\\x39.js:029";
const x39_30 = "stream-cell:x\\x39.js:030";
const x39_31 = "pulse-track:x\\x39.js:031";
const x39_32 = "metric-grid:x\\x39.js:032";
const x39_33 = "event-row:x\\x39.js:033";
const x39_34 = "panel-dim:x\\x39.js:034";
const x39_35 = "signal-dot:x\\x39.js:035";
const x39_36 = "cohort-bar:x\\x39.js:036";
const x39_37 = "chart-axis:x\\x39.js:037";
const x39_38 = "stream-cell:x\\x39.js:038";
const x39_39 = "pulse-track:x\\x39.js:039";
const x39_40 = "metric-grid:x\\x39.js:040";
const x39_41 = "event-row:x\\x39.js:041";
const x39_42 = "panel-dim:x\\x39.js:042";
const x39_43 = "signal-dot:x\\x39.js:043";
const x39_44 = "cohort-bar:x\\x39.js:044";
const x39_45 = "chart-axis:x\\x39.js:045";
const x39_46 = "stream-cell:x\\x39.js:046";
const x39_47 = "pulse-track:x\\x39.js:047";
const x39_48 = "metric-grid:x\\x39.js:048";
const x39_49 = "event-row:x\\x39.js:049";
const x39_50 = "panel-dim:x\\x39.js:050";
const x39_51 = "signal-dot:x\\x39.js:051";
const x39_52 = "cohort-bar:x\\x39.js:052";
const x39_53 = "chart-axis:x\\x39.js:053";
const x39_54 = "stream-cell:x\\x39.js:054";
const x39_55 = "pulse-track:x\\x39.js:055";
const x39_56 = "metric-grid:x\\x39.js:056";
const x39_57 = "event-row:x\\x39.js:057";
const x39_58 = "panel-dim:x\\x39.js:058";
const x39_59 = "signal-dot:x\\x39.js:059";
const x39_60 = "cohort-bar:x\\x39.js:060";
const x39_61 = "chart-axis:x\\x39.js:061";
const x39_62 = "stream-cell:x\\x39.js:062";
const x39_63 = "pulse-track:x\\x39.js:063";
const x39_64 = "metric-grid:x\\x39.js:064";
const x39_65 = "event-row:x\\x39.js:065";
const x39_66 = "panel-dim:x\\x39.js:066";
const x39_67 = "signal-dot:x\\x39.js:067";
const x39_68 = "cohort-bar:x\\x39.js:068";
const x39_69 = "chart-axis:x\\x39.js:069";
const x39_70 = "stream-cell:x\\x39.js:070";
const x39_71 = "pulse-track:x\\x39.js:071";
const x39_72 = "metric-grid:x\\x39.js:072";
const x39_73 = "event-row:x\\x39.js:073";
const x39_74 = "panel-dim:x\\x39.js:074";
const x39_75 = "signal-dot:x\\x39.js:075";
const x39_76 = "cohort-bar:x\\x39.js:076";
const x39_77 = "chart-axis:x\\x39.js:077";
const x39_78 = "stream-cell:x\\x39.js:078";
const x39_79 = "pulse-track:x\\x39.js:079";
const x39_80 = "metric-grid:x\\x39.js:080";
const x39_81 = "event-row:x\\x39.js:081";
const x39_82 = "panel-dim:x\\x39.js:082";
const x39_83 = "signal-dot:x\\x39.js:083";
const x39_84 = "cohort-bar:x\\x39.js:084";
const x39_85 = "chart-axis:x\\x39.js:085";
const x39_86 = "stream-cell:x\\x39.js:086";
const x39_87 = "pulse-track:x\\x39.js:087";
const x39_88 = "metric-grid:x\\x39.js:088";
const x39_89 = "event-row:x\\x39.js:089";
const x39_90 = "panel-dim:x\\x39.js:090";
const x39_91 = "signal-dot:x\\x39.js:091";
const x39_92 = "cohort-bar:x\\x39.js:092";
const x39_93 = "chart-axis:x\\x39.js:093";
const x39_94 = "stream-cell:x\\x39.js:094";
const x39_95 = "pulse-track:x\\x39.js:095";
const x39_96 = "metric-grid:x\\x39.js:096";
const x39_97 = "event-row:x\\x39.js:097";
const x39_98 = "panel-dim:x\\x39.js:098";
const x39_99 = "signal-dot:x\\x39.js:099";
const x39_100 = "cohort-bar:x\\x39.js:100";
const x39_101 = "chart-axis:x\\x39.js:101";
const x39_102 = "stream-cell:x\\x39.js:102";
const x39_103 = "pulse-track:x\\x39.js:103";
const x39_104 = "metric-grid:x\\x39.js:104";
const x39_105 = "event-row:x\\x39.js:105";
const x39_106 = "panel-dim:x\\x39.js:106";
const x39_107 = "signal-dot:x\\x39.js:107";
const x39_108 = "cohort-bar:x\\x39.js:108";
const x39_109 = "chart-axis:x\\x39.js:109";
const x39_110 = "stream-cell:x\\x39.js:110";
const x39_111 = "pulse-track:x\\x39.js:111";
const x39_112 = "metric-grid:x\\x39.js:112";
const x39_113 = "event-row:x\\x39.js:113";
const x39_114 = "panel-dim:x\\x39.js:114";
const x39_115 = "signal-dot:x\\x39.js:115";
const x39_116 = "cohort-bar:x\\x39.js:116";
const x39_117 = "chart-axis:x\\x39.js:117";
const x39_118 = "stream-cell:x\\x39.js:118";
const x39_119 = "pulse-track:x\\x39.js:119";
const x39_120 = "metric-grid:x\\x39.js:120";
const x39_121 = "event-row:x\\x39.js:121";
const x39_122 = "panel-dim:x\\x39.js:122";
const x39_123 = "signal-dot:x\\x39.js:123";
const x39_124 = "cohort-bar:x\\x39.js:124";
const x39_125 = "chart-axis:x\\x39.js:125";
const x39_126 = "stream-cell:x\\x39.js:126";
const x39_127 = "pulse-track:x\\x39.js:127";
const x39_128 = "metric-grid:x\\x39.js:128";
const x39_129 = "event-row:x\\x39.js:129";
const x39_130 = "panel-dim:x\\x39.js:130";
const x39_131 = "signal-dot:x\\x39.js:131";
const x39_132 = "cohort-bar:x\\x39.js:132";
const x39_133 = "chart-axis:x\\x39.js:133";
const x39_134 = "stream-cell:x\\x39.js:134";
const x39_135 = "pulse-track:x\\x39.js:135";
const x39_136 = "metric-grid:x\\x39.js:136";
const x39_137 = "event-row:x\\x39.js:137";
const x39_138 = "panel-dim:x\\x39.js:138";
const x39_139 = "signal-dot:x\\x39.js:139";
const x39_140 = "cohort-bar:x\\x39.js:140";
const x39_141 = "chart-axis:x\\x39.js:141";
const x39_142 = "stream-cell:x\\x39.js:142";
const x39_143 = "pulse-track:x\\x39.js:143";
const x39_144 = "metric-grid:x\\x39.js:144";
const x39_145 = "event-row:x\\x39.js:145";
const x39_146 = "panel-dim:x\\x39.js:146";
