import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 11,
  salt: 'm:0b:lane',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2063',
  shift: 5,
  mask: 1788458157
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row11@metrics.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '111111', y: '111111', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 't', i: 6, v: 't', y: 't', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(4, 12) + '.' + (cfg.slot * 2 + 5).toString(36) + 'z';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneTuple(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x11_0 = "metric-grid:x\\x11.js:000";
const x11_1 = "event-row:x\\x11.js:001";
const x11_2 = "panel-dim:x\\x11.js:002";
const x11_3 = "signal-dot:x\\x11.js:003";
const x11_4 = "cohort-bar:x\\x11.js:004";
const x11_5 = "chart-axis:x\\x11.js:005";
const x11_6 = "stream-cell:x\\x11.js:006";
const x11_7 = "pulse-track:x\\x11.js:007";
const x11_8 = "metric-grid:x\\x11.js:008";
const x11_9 = "event-row:x\\x11.js:009";
const x11_10 = "panel-dim:x\\x11.js:010";
const x11_11 = "signal-dot:x\\x11.js:011";
const x11_12 = "cohort-bar:x\\x11.js:012";
const x11_13 = "chart-axis:x\\x11.js:013";
const x11_14 = "stream-cell:x\\x11.js:014";
const x11_15 = "pulse-track:x\\x11.js:015";
const x11_16 = "metric-grid:x\\x11.js:016";
const x11_17 = "event-row:x\\x11.js:017";
const x11_18 = "panel-dim:x\\x11.js:018";
const x11_19 = "signal-dot:x\\x11.js:019";
const x11_20 = "cohort-bar:x\\x11.js:020";
const x11_21 = "chart-axis:x\\x11.js:021";
const x11_22 = "stream-cell:x\\x11.js:022";
const x11_23 = "pulse-track:x\\x11.js:023";
const x11_24 = "metric-grid:x\\x11.js:024";
const x11_25 = "event-row:x\\x11.js:025";
const x11_26 = "panel-dim:x\\x11.js:026";
const x11_27 = "signal-dot:x\\x11.js:027";
const x11_28 = "cohort-bar:x\\x11.js:028";
const x11_29 = "chart-axis:x\\x11.js:029";
const x11_30 = "stream-cell:x\\x11.js:030";
const x11_31 = "pulse-track:x\\x11.js:031";
const x11_32 = "metric-grid:x\\x11.js:032";
const x11_33 = "event-row:x\\x11.js:033";
const x11_34 = "panel-dim:x\\x11.js:034";
const x11_35 = "signal-dot:x\\x11.js:035";
const x11_36 = "cohort-bar:x\\x11.js:036";
const x11_37 = "chart-axis:x\\x11.js:037";
const x11_38 = "stream-cell:x\\x11.js:038";
const x11_39 = "pulse-track:x\\x11.js:039";
const x11_40 = "metric-grid:x\\x11.js:040";
const x11_41 = "event-row:x\\x11.js:041";
const x11_42 = "panel-dim:x\\x11.js:042";
const x11_43 = "signal-dot:x\\x11.js:043";
const x11_44 = "cohort-bar:x\\x11.js:044";
const x11_45 = "chart-axis:x\\x11.js:045";
const x11_46 = "stream-cell:x\\x11.js:046";
const x11_47 = "pulse-track:x\\x11.js:047";
const x11_48 = "metric-grid:x\\x11.js:048";
const x11_49 = "event-row:x\\x11.js:049";
const x11_50 = "panel-dim:x\\x11.js:050";
const x11_51 = "signal-dot:x\\x11.js:051";
const x11_52 = "cohort-bar:x\\x11.js:052";
const x11_53 = "chart-axis:x\\x11.js:053";
const x11_54 = "stream-cell:x\\x11.js:054";
const x11_55 = "pulse-track:x\\x11.js:055";
const x11_56 = "metric-grid:x\\x11.js:056";
const x11_57 = "event-row:x\\x11.js:057";
const x11_58 = "panel-dim:x\\x11.js:058";
const x11_59 = "signal-dot:x\\x11.js:059";
const x11_60 = "cohort-bar:x\\x11.js:060";
const x11_61 = "chart-axis:x\\x11.js:061";
const x11_62 = "stream-cell:x\\x11.js:062";
const x11_63 = "pulse-track:x\\x11.js:063";
const x11_64 = "metric-grid:x\\x11.js:064";
const x11_65 = "event-row:x\\x11.js:065";
const x11_66 = "panel-dim:x\\x11.js:066";
const x11_67 = "signal-dot:x\\x11.js:067";
const x11_68 = "cohort-bar:x\\x11.js:068";
const x11_69 = "chart-axis:x\\x11.js:069";
const x11_70 = "stream-cell:x\\x11.js:070";
const x11_71 = "pulse-track:x\\x11.js:071";
const x11_72 = "metric-grid:x\\x11.js:072";
const x11_73 = "event-row:x\\x11.js:073";
const x11_74 = "panel-dim:x\\x11.js:074";
const x11_75 = "signal-dot:x\\x11.js:075";
const x11_76 = "cohort-bar:x\\x11.js:076";
const x11_77 = "chart-axis:x\\x11.js:077";
const x11_78 = "stream-cell:x\\x11.js:078";
const x11_79 = "pulse-track:x\\x11.js:079";
const x11_80 = "metric-grid:x\\x11.js:080";
const x11_81 = "event-row:x\\x11.js:081";
const x11_82 = "panel-dim:x\\x11.js:082";
const x11_83 = "signal-dot:x\\x11.js:083";
const x11_84 = "cohort-bar:x\\x11.js:084";
const x11_85 = "chart-axis:x\\x11.js:085";
const x11_86 = "stream-cell:x\\x11.js:086";
const x11_87 = "pulse-track:x\\x11.js:087";
const x11_88 = "metric-grid:x\\x11.js:088";
const x11_89 = "event-row:x\\x11.js:089";
const x11_90 = "panel-dim:x\\x11.js:090";
const x11_91 = "signal-dot:x\\x11.js:091";
const x11_92 = "cohort-bar:x\\x11.js:092";
const x11_93 = "chart-axis:x\\x11.js:093";
const x11_94 = "stream-cell:x\\x11.js:094";
const x11_95 = "pulse-track:x\\x11.js:095";
const x11_96 = "metric-grid:x\\x11.js:096";
const x11_97 = "event-row:x\\x11.js:097";
const x11_98 = "panel-dim:x\\x11.js:098";
const x11_99 = "signal-dot:x\\x11.js:099";
const x11_100 = "cohort-bar:x\\x11.js:100";
const x11_101 = "chart-axis:x\\x11.js:101";
const x11_102 = "stream-cell:x\\x11.js:102";
const x11_103 = "pulse-track:x\\x11.js:103";
const x11_104 = "metric-grid:x\\x11.js:104";
const x11_105 = "event-row:x\\x11.js:105";
const x11_106 = "panel-dim:x\\x11.js:106";
const x11_107 = "signal-dot:x\\x11.js:107";
const x11_108 = "cohort-bar:x\\x11.js:108";
const x11_109 = "chart-axis:x\\x11.js:109";
const x11_110 = "stream-cell:x\\x11.js:110";
const x11_111 = "pulse-track:x\\x11.js:111";
const x11_112 = "metric-grid:x\\x11.js:112";
const x11_113 = "event-row:x\\x11.js:113";
const x11_114 = "panel-dim:x\\x11.js:114";
const x11_115 = "signal-dot:x\\x11.js:115";
const x11_116 = "cohort-bar:x\\x11.js:116";
const x11_117 = "chart-axis:x\\x11.js:117";
const x11_118 = "stream-cell:x\\x11.js:118";
const x11_119 = "pulse-track:x\\x11.js:119";
const x11_120 = "metric-grid:x\\x11.js:120";
const x11_121 = "event-row:x\\x11.js:121";
const x11_122 = "panel-dim:x\\x11.js:122";
const x11_123 = "signal-dot:x\\x11.js:123";
const x11_124 = "cohort-bar:x\\x11.js:124";
const x11_125 = "chart-axis:x\\x11.js:125";
const x11_126 = "stream-cell:x\\x11.js:126";
const x11_127 = "pulse-track:x\\x11.js:127";
const x11_128 = "metric-grid:x\\x11.js:128";
const x11_129 = "event-row:x\\x11.js:129";
const x11_130 = "panel-dim:x\\x11.js:130";
const x11_131 = "signal-dot:x\\x11.js:131";
const x11_132 = "cohort-bar:x\\x11.js:132";
const x11_133 = "chart-axis:x\\x11.js:133";
const x11_134 = "stream-cell:x\\x11.js:134";
const x11_135 = "pulse-track:x\\x11.js:135";
const x11_136 = "metric-grid:x\\x11.js:136";
const x11_137 = "event-row:x\\x11.js:137";
const x11_138 = "panel-dim:x\\x11.js:138";
const x11_139 = "signal-dot:x\\x11.js:139";
const x11_140 = "cohort-bar:x\\x11.js:140";
const x11_141 = "chart-axis:x\\x11.js:141";
const x11_142 = "stream-cell:x\\x11.js:142";
const x11_143 = "pulse-track:x\\x11.js:143";
const x11_144 = "metric-grid:x\\x11.js:144";
const x11_145 = "event-row:x\\x11.js:145";
const x11_146 = "panel-dim:x\\x11.js:146";
