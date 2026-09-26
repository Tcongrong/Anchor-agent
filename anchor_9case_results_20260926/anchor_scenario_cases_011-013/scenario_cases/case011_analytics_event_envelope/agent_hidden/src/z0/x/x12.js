import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 12,
  salt: 'm:0c:lane',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2060',
  shift: 6,
  mask: 147926622
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane12@metrics.dev', y: 'shadow', n: 18 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
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
const x12_0 = "metric-grid:x\\x12.js:000";
const x12_1 = "event-row:x\\x12.js:001";
const x12_2 = "panel-dim:x\\x12.js:002";
const x12_3 = "signal-dot:x\\x12.js:003";
const x12_4 = "cohort-bar:x\\x12.js:004";
const x12_5 = "chart-axis:x\\x12.js:005";
const x12_6 = "stream-cell:x\\x12.js:006";
const x12_7 = "pulse-track:x\\x12.js:007";
const x12_8 = "metric-grid:x\\x12.js:008";
const x12_9 = "event-row:x\\x12.js:009";
const x12_10 = "panel-dim:x\\x12.js:010";
const x12_11 = "signal-dot:x\\x12.js:011";
const x12_12 = "cohort-bar:x\\x12.js:012";
const x12_13 = "chart-axis:x\\x12.js:013";
const x12_14 = "stream-cell:x\\x12.js:014";
const x12_15 = "pulse-track:x\\x12.js:015";
const x12_16 = "metric-grid:x\\x12.js:016";
const x12_17 = "event-row:x\\x12.js:017";
const x12_18 = "panel-dim:x\\x12.js:018";
const x12_19 = "signal-dot:x\\x12.js:019";
const x12_20 = "cohort-bar:x\\x12.js:020";
const x12_21 = "chart-axis:x\\x12.js:021";
const x12_22 = "stream-cell:x\\x12.js:022";
const x12_23 = "pulse-track:x\\x12.js:023";
const x12_24 = "metric-grid:x\\x12.js:024";
const x12_25 = "event-row:x\\x12.js:025";
const x12_26 = "panel-dim:x\\x12.js:026";
const x12_27 = "signal-dot:x\\x12.js:027";
const x12_28 = "cohort-bar:x\\x12.js:028";
const x12_29 = "chart-axis:x\\x12.js:029";
const x12_30 = "stream-cell:x\\x12.js:030";
const x12_31 = "pulse-track:x\\x12.js:031";
const x12_32 = "metric-grid:x\\x12.js:032";
const x12_33 = "event-row:x\\x12.js:033";
const x12_34 = "panel-dim:x\\x12.js:034";
const x12_35 = "signal-dot:x\\x12.js:035";
const x12_36 = "cohort-bar:x\\x12.js:036";
const x12_37 = "chart-axis:x\\x12.js:037";
const x12_38 = "stream-cell:x\\x12.js:038";
const x12_39 = "pulse-track:x\\x12.js:039";
const x12_40 = "metric-grid:x\\x12.js:040";
const x12_41 = "event-row:x\\x12.js:041";
const x12_42 = "panel-dim:x\\x12.js:042";
const x12_43 = "signal-dot:x\\x12.js:043";
const x12_44 = "cohort-bar:x\\x12.js:044";
const x12_45 = "chart-axis:x\\x12.js:045";
const x12_46 = "stream-cell:x\\x12.js:046";
const x12_47 = "pulse-track:x\\x12.js:047";
const x12_48 = "metric-grid:x\\x12.js:048";
const x12_49 = "event-row:x\\x12.js:049";
const x12_50 = "panel-dim:x\\x12.js:050";
const x12_51 = "signal-dot:x\\x12.js:051";
const x12_52 = "cohort-bar:x\\x12.js:052";
const x12_53 = "chart-axis:x\\x12.js:053";
const x12_54 = "stream-cell:x\\x12.js:054";
const x12_55 = "pulse-track:x\\x12.js:055";
const x12_56 = "metric-grid:x\\x12.js:056";
const x12_57 = "event-row:x\\x12.js:057";
const x12_58 = "panel-dim:x\\x12.js:058";
const x12_59 = "signal-dot:x\\x12.js:059";
const x12_60 = "cohort-bar:x\\x12.js:060";
const x12_61 = "chart-axis:x\\x12.js:061";
const x12_62 = "stream-cell:x\\x12.js:062";
const x12_63 = "pulse-track:x\\x12.js:063";
const x12_64 = "metric-grid:x\\x12.js:064";
const x12_65 = "event-row:x\\x12.js:065";
const x12_66 = "panel-dim:x\\x12.js:066";
const x12_67 = "signal-dot:x\\x12.js:067";
const x12_68 = "cohort-bar:x\\x12.js:068";
const x12_69 = "chart-axis:x\\x12.js:069";
const x12_70 = "stream-cell:x\\x12.js:070";
const x12_71 = "pulse-track:x\\x12.js:071";
const x12_72 = "metric-grid:x\\x12.js:072";
const x12_73 = "event-row:x\\x12.js:073";
const x12_74 = "panel-dim:x\\x12.js:074";
const x12_75 = "signal-dot:x\\x12.js:075";
const x12_76 = "cohort-bar:x\\x12.js:076";
const x12_77 = "chart-axis:x\\x12.js:077";
const x12_78 = "stream-cell:x\\x12.js:078";
const x12_79 = "pulse-track:x\\x12.js:079";
const x12_80 = "metric-grid:x\\x12.js:080";
const x12_81 = "event-row:x\\x12.js:081";
const x12_82 = "panel-dim:x\\x12.js:082";
const x12_83 = "signal-dot:x\\x12.js:083";
const x12_84 = "cohort-bar:x\\x12.js:084";
const x12_85 = "chart-axis:x\\x12.js:085";
const x12_86 = "stream-cell:x\\x12.js:086";
const x12_87 = "pulse-track:x\\x12.js:087";
const x12_88 = "metric-grid:x\\x12.js:088";
const x12_89 = "event-row:x\\x12.js:089";
const x12_90 = "panel-dim:x\\x12.js:090";
const x12_91 = "signal-dot:x\\x12.js:091";
const x12_92 = "cohort-bar:x\\x12.js:092";
const x12_93 = "chart-axis:x\\x12.js:093";
const x12_94 = "stream-cell:x\\x12.js:094";
const x12_95 = "pulse-track:x\\x12.js:095";
const x12_96 = "metric-grid:x\\x12.js:096";
const x12_97 = "event-row:x\\x12.js:097";
const x12_98 = "panel-dim:x\\x12.js:098";
const x12_99 = "signal-dot:x\\x12.js:099";
const x12_100 = "cohort-bar:x\\x12.js:100";
const x12_101 = "chart-axis:x\\x12.js:101";
const x12_102 = "stream-cell:x\\x12.js:102";
const x12_103 = "pulse-track:x\\x12.js:103";
const x12_104 = "metric-grid:x\\x12.js:104";
const x12_105 = "event-row:x\\x12.js:105";
const x12_106 = "panel-dim:x\\x12.js:106";
const x12_107 = "signal-dot:x\\x12.js:107";
const x12_108 = "cohort-bar:x\\x12.js:108";
const x12_109 = "chart-axis:x\\x12.js:109";
const x12_110 = "stream-cell:x\\x12.js:110";
const x12_111 = "pulse-track:x\\x12.js:111";
const x12_112 = "metric-grid:x\\x12.js:112";
const x12_113 = "event-row:x\\x12.js:113";
const x12_114 = "panel-dim:x\\x12.js:114";
const x12_115 = "signal-dot:x\\x12.js:115";
const x12_116 = "cohort-bar:x\\x12.js:116";
const x12_117 = "chart-axis:x\\x12.js:117";
const x12_118 = "stream-cell:x\\x12.js:118";
const x12_119 = "pulse-track:x\\x12.js:119";
const x12_120 = "metric-grid:x\\x12.js:120";
const x12_121 = "event-row:x\\x12.js:121";
const x12_122 = "panel-dim:x\\x12.js:122";
const x12_123 = "signal-dot:x\\x12.js:123";
const x12_124 = "cohort-bar:x\\x12.js:124";
const x12_125 = "chart-axis:x\\x12.js:125";
const x12_126 = "stream-cell:x\\x12.js:126";
const x12_127 = "pulse-track:x\\x12.js:127";
const x12_128 = "metric-grid:x\\x12.js:128";
const x12_129 = "event-row:x\\x12.js:129";
const x12_130 = "panel-dim:x\\x12.js:130";
const x12_131 = "signal-dot:x\\x12.js:131";
const x12_132 = "cohort-bar:x\\x12.js:132";
const x12_133 = "chart-axis:x\\x12.js:133";
const x12_134 = "stream-cell:x\\x12.js:134";
const x12_135 = "pulse-track:x\\x12.js:135";
const x12_136 = "metric-grid:x\\x12.js:136";
const x12_137 = "event-row:x\\x12.js:137";
const x12_138 = "panel-dim:x\\x12.js:138";
const x12_139 = "signal-dot:x\\x12.js:139";
const x12_140 = "cohort-bar:x\\x12.js:140";
const x12_141 = "chart-axis:x\\x12.js:141";
const x12_142 = "stream-cell:x\\x12.js:142";
const x12_143 = "pulse-track:x\\x12.js:143";
const x12_144 = "metric-grid:x\\x12.js:144";
const x12_145 = "event-row:x\\x12.js:145";
const x12_146 = "panel-dim:x\\x12.js:146";
