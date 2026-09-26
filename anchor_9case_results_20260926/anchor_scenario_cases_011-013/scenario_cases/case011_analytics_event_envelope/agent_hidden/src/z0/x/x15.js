import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 15,
  salt: 'm:0f:lane',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2063',
  shift: 9,
  mask: 3816266609
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane15@metrics.dev', y: 'shadow', n: 18 },
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
const x15_0 = "metric-grid:x\\x15.js:000";
const x15_1 = "event-row:x\\x15.js:001";
const x15_2 = "panel-dim:x\\x15.js:002";
const x15_3 = "signal-dot:x\\x15.js:003";
const x15_4 = "cohort-bar:x\\x15.js:004";
const x15_5 = "chart-axis:x\\x15.js:005";
const x15_6 = "stream-cell:x\\x15.js:006";
const x15_7 = "pulse-track:x\\x15.js:007";
const x15_8 = "metric-grid:x\\x15.js:008";
const x15_9 = "event-row:x\\x15.js:009";
const x15_10 = "panel-dim:x\\x15.js:010";
const x15_11 = "signal-dot:x\\x15.js:011";
const x15_12 = "cohort-bar:x\\x15.js:012";
const x15_13 = "chart-axis:x\\x15.js:013";
const x15_14 = "stream-cell:x\\x15.js:014";
const x15_15 = "pulse-track:x\\x15.js:015";
const x15_16 = "metric-grid:x\\x15.js:016";
const x15_17 = "event-row:x\\x15.js:017";
const x15_18 = "panel-dim:x\\x15.js:018";
const x15_19 = "signal-dot:x\\x15.js:019";
const x15_20 = "cohort-bar:x\\x15.js:020";
const x15_21 = "chart-axis:x\\x15.js:021";
const x15_22 = "stream-cell:x\\x15.js:022";
const x15_23 = "pulse-track:x\\x15.js:023";
const x15_24 = "metric-grid:x\\x15.js:024";
const x15_25 = "event-row:x\\x15.js:025";
const x15_26 = "panel-dim:x\\x15.js:026";
const x15_27 = "signal-dot:x\\x15.js:027";
const x15_28 = "cohort-bar:x\\x15.js:028";
const x15_29 = "chart-axis:x\\x15.js:029";
const x15_30 = "stream-cell:x\\x15.js:030";
const x15_31 = "pulse-track:x\\x15.js:031";
const x15_32 = "metric-grid:x\\x15.js:032";
const x15_33 = "event-row:x\\x15.js:033";
const x15_34 = "panel-dim:x\\x15.js:034";
const x15_35 = "signal-dot:x\\x15.js:035";
const x15_36 = "cohort-bar:x\\x15.js:036";
const x15_37 = "chart-axis:x\\x15.js:037";
const x15_38 = "stream-cell:x\\x15.js:038";
const x15_39 = "pulse-track:x\\x15.js:039";
const x15_40 = "metric-grid:x\\x15.js:040";
const x15_41 = "event-row:x\\x15.js:041";
const x15_42 = "panel-dim:x\\x15.js:042";
const x15_43 = "signal-dot:x\\x15.js:043";
const x15_44 = "cohort-bar:x\\x15.js:044";
const x15_45 = "chart-axis:x\\x15.js:045";
const x15_46 = "stream-cell:x\\x15.js:046";
const x15_47 = "pulse-track:x\\x15.js:047";
const x15_48 = "metric-grid:x\\x15.js:048";
const x15_49 = "event-row:x\\x15.js:049";
const x15_50 = "panel-dim:x\\x15.js:050";
const x15_51 = "signal-dot:x\\x15.js:051";
const x15_52 = "cohort-bar:x\\x15.js:052";
const x15_53 = "chart-axis:x\\x15.js:053";
const x15_54 = "stream-cell:x\\x15.js:054";
const x15_55 = "pulse-track:x\\x15.js:055";
const x15_56 = "metric-grid:x\\x15.js:056";
const x15_57 = "event-row:x\\x15.js:057";
const x15_58 = "panel-dim:x\\x15.js:058";
const x15_59 = "signal-dot:x\\x15.js:059";
const x15_60 = "cohort-bar:x\\x15.js:060";
const x15_61 = "chart-axis:x\\x15.js:061";
const x15_62 = "stream-cell:x\\x15.js:062";
const x15_63 = "pulse-track:x\\x15.js:063";
const x15_64 = "metric-grid:x\\x15.js:064";
const x15_65 = "event-row:x\\x15.js:065";
const x15_66 = "panel-dim:x\\x15.js:066";
const x15_67 = "signal-dot:x\\x15.js:067";
const x15_68 = "cohort-bar:x\\x15.js:068";
const x15_69 = "chart-axis:x\\x15.js:069";
const x15_70 = "stream-cell:x\\x15.js:070";
const x15_71 = "pulse-track:x\\x15.js:071";
const x15_72 = "metric-grid:x\\x15.js:072";
const x15_73 = "event-row:x\\x15.js:073";
const x15_74 = "panel-dim:x\\x15.js:074";
const x15_75 = "signal-dot:x\\x15.js:075";
const x15_76 = "cohort-bar:x\\x15.js:076";
const x15_77 = "chart-axis:x\\x15.js:077";
const x15_78 = "stream-cell:x\\x15.js:078";
const x15_79 = "pulse-track:x\\x15.js:079";
const x15_80 = "metric-grid:x\\x15.js:080";
const x15_81 = "event-row:x\\x15.js:081";
const x15_82 = "panel-dim:x\\x15.js:082";
const x15_83 = "signal-dot:x\\x15.js:083";
const x15_84 = "cohort-bar:x\\x15.js:084";
const x15_85 = "chart-axis:x\\x15.js:085";
const x15_86 = "stream-cell:x\\x15.js:086";
const x15_87 = "pulse-track:x\\x15.js:087";
const x15_88 = "metric-grid:x\\x15.js:088";
const x15_89 = "event-row:x\\x15.js:089";
const x15_90 = "panel-dim:x\\x15.js:090";
const x15_91 = "signal-dot:x\\x15.js:091";
const x15_92 = "cohort-bar:x\\x15.js:092";
const x15_93 = "chart-axis:x\\x15.js:093";
const x15_94 = "stream-cell:x\\x15.js:094";
const x15_95 = "pulse-track:x\\x15.js:095";
const x15_96 = "metric-grid:x\\x15.js:096";
const x15_97 = "event-row:x\\x15.js:097";
const x15_98 = "panel-dim:x\\x15.js:098";
const x15_99 = "signal-dot:x\\x15.js:099";
const x15_100 = "cohort-bar:x\\x15.js:100";
const x15_101 = "chart-axis:x\\x15.js:101";
const x15_102 = "stream-cell:x\\x15.js:102";
const x15_103 = "pulse-track:x\\x15.js:103";
const x15_104 = "metric-grid:x\\x15.js:104";
const x15_105 = "event-row:x\\x15.js:105";
const x15_106 = "panel-dim:x\\x15.js:106";
const x15_107 = "signal-dot:x\\x15.js:107";
const x15_108 = "cohort-bar:x\\x15.js:108";
const x15_109 = "chart-axis:x\\x15.js:109";
const x15_110 = "stream-cell:x\\x15.js:110";
const x15_111 = "pulse-track:x\\x15.js:111";
const x15_112 = "metric-grid:x\\x15.js:112";
const x15_113 = "event-row:x\\x15.js:113";
const x15_114 = "panel-dim:x\\x15.js:114";
const x15_115 = "signal-dot:x\\x15.js:115";
const x15_116 = "cohort-bar:x\\x15.js:116";
const x15_117 = "chart-axis:x\\x15.js:117";
const x15_118 = "stream-cell:x\\x15.js:118";
const x15_119 = "pulse-track:x\\x15.js:119";
const x15_120 = "metric-grid:x\\x15.js:120";
const x15_121 = "event-row:x\\x15.js:121";
const x15_122 = "panel-dim:x\\x15.js:122";
const x15_123 = "signal-dot:x\\x15.js:123";
const x15_124 = "cohort-bar:x\\x15.js:124";
const x15_125 = "chart-axis:x\\x15.js:125";
const x15_126 = "stream-cell:x\\x15.js:126";
const x15_127 = "pulse-track:x\\x15.js:127";
const x15_128 = "metric-grid:x\\x15.js:128";
const x15_129 = "event-row:x\\x15.js:129";
const x15_130 = "panel-dim:x\\x15.js:130";
const x15_131 = "signal-dot:x\\x15.js:131";
const x15_132 = "cohort-bar:x\\x15.js:132";
const x15_133 = "chart-axis:x\\x15.js:133";
const x15_134 = "stream-cell:x\\x15.js:134";
const x15_135 = "pulse-track:x\\x15.js:135";
const x15_136 = "metric-grid:x\\x15.js:136";
const x15_137 = "event-row:x\\x15.js:137";
const x15_138 = "panel-dim:x\\x15.js:138";
const x15_139 = "signal-dot:x\\x15.js:139";
const x15_140 = "cohort-bar:x\\x15.js:140";
const x15_141 = "chart-axis:x\\x15.js:141";
const x15_142 = "stream-cell:x\\x15.js:142";
const x15_143 = "pulse-track:x\\x15.js:143";
const x15_144 = "metric-grid:x\\x15.js:144";
const x15_145 = "event-row:x\\x15.js:145";
const x15_146 = "panel-dim:x\\x15.js:146";
