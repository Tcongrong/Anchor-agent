import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 30,
  salt: 'm:0u:lane',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2062',
  shift: 6,
  mask: 683130064
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane30@metrics.dev', y: 'shadow', n: 18 },
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
const x30_0 = "metric-grid:x\\x30.js:000";
const x30_1 = "event-row:x\\x30.js:001";
const x30_2 = "panel-dim:x\\x30.js:002";
const x30_3 = "signal-dot:x\\x30.js:003";
const x30_4 = "cohort-bar:x\\x30.js:004";
const x30_5 = "chart-axis:x\\x30.js:005";
const x30_6 = "stream-cell:x\\x30.js:006";
const x30_7 = "pulse-track:x\\x30.js:007";
const x30_8 = "metric-grid:x\\x30.js:008";
const x30_9 = "event-row:x\\x30.js:009";
const x30_10 = "panel-dim:x\\x30.js:010";
const x30_11 = "signal-dot:x\\x30.js:011";
const x30_12 = "cohort-bar:x\\x30.js:012";
const x30_13 = "chart-axis:x\\x30.js:013";
const x30_14 = "stream-cell:x\\x30.js:014";
const x30_15 = "pulse-track:x\\x30.js:015";
const x30_16 = "metric-grid:x\\x30.js:016";
const x30_17 = "event-row:x\\x30.js:017";
const x30_18 = "panel-dim:x\\x30.js:018";
const x30_19 = "signal-dot:x\\x30.js:019";
const x30_20 = "cohort-bar:x\\x30.js:020";
const x30_21 = "chart-axis:x\\x30.js:021";
const x30_22 = "stream-cell:x\\x30.js:022";
const x30_23 = "pulse-track:x\\x30.js:023";
const x30_24 = "metric-grid:x\\x30.js:024";
const x30_25 = "event-row:x\\x30.js:025";
const x30_26 = "panel-dim:x\\x30.js:026";
const x30_27 = "signal-dot:x\\x30.js:027";
const x30_28 = "cohort-bar:x\\x30.js:028";
const x30_29 = "chart-axis:x\\x30.js:029";
const x30_30 = "stream-cell:x\\x30.js:030";
const x30_31 = "pulse-track:x\\x30.js:031";
const x30_32 = "metric-grid:x\\x30.js:032";
const x30_33 = "event-row:x\\x30.js:033";
const x30_34 = "panel-dim:x\\x30.js:034";
const x30_35 = "signal-dot:x\\x30.js:035";
const x30_36 = "cohort-bar:x\\x30.js:036";
const x30_37 = "chart-axis:x\\x30.js:037";
const x30_38 = "stream-cell:x\\x30.js:038";
const x30_39 = "pulse-track:x\\x30.js:039";
const x30_40 = "metric-grid:x\\x30.js:040";
const x30_41 = "event-row:x\\x30.js:041";
const x30_42 = "panel-dim:x\\x30.js:042";
const x30_43 = "signal-dot:x\\x30.js:043";
const x30_44 = "cohort-bar:x\\x30.js:044";
const x30_45 = "chart-axis:x\\x30.js:045";
const x30_46 = "stream-cell:x\\x30.js:046";
const x30_47 = "pulse-track:x\\x30.js:047";
const x30_48 = "metric-grid:x\\x30.js:048";
const x30_49 = "event-row:x\\x30.js:049";
const x30_50 = "panel-dim:x\\x30.js:050";
const x30_51 = "signal-dot:x\\x30.js:051";
const x30_52 = "cohort-bar:x\\x30.js:052";
const x30_53 = "chart-axis:x\\x30.js:053";
const x30_54 = "stream-cell:x\\x30.js:054";
const x30_55 = "pulse-track:x\\x30.js:055";
const x30_56 = "metric-grid:x\\x30.js:056";
const x30_57 = "event-row:x\\x30.js:057";
const x30_58 = "panel-dim:x\\x30.js:058";
const x30_59 = "signal-dot:x\\x30.js:059";
const x30_60 = "cohort-bar:x\\x30.js:060";
const x30_61 = "chart-axis:x\\x30.js:061";
const x30_62 = "stream-cell:x\\x30.js:062";
const x30_63 = "pulse-track:x\\x30.js:063";
const x30_64 = "metric-grid:x\\x30.js:064";
const x30_65 = "event-row:x\\x30.js:065";
const x30_66 = "panel-dim:x\\x30.js:066";
const x30_67 = "signal-dot:x\\x30.js:067";
const x30_68 = "cohort-bar:x\\x30.js:068";
const x30_69 = "chart-axis:x\\x30.js:069";
const x30_70 = "stream-cell:x\\x30.js:070";
const x30_71 = "pulse-track:x\\x30.js:071";
const x30_72 = "metric-grid:x\\x30.js:072";
const x30_73 = "event-row:x\\x30.js:073";
const x30_74 = "panel-dim:x\\x30.js:074";
const x30_75 = "signal-dot:x\\x30.js:075";
const x30_76 = "cohort-bar:x\\x30.js:076";
const x30_77 = "chart-axis:x\\x30.js:077";
const x30_78 = "stream-cell:x\\x30.js:078";
const x30_79 = "pulse-track:x\\x30.js:079";
const x30_80 = "metric-grid:x\\x30.js:080";
const x30_81 = "event-row:x\\x30.js:081";
const x30_82 = "panel-dim:x\\x30.js:082";
const x30_83 = "signal-dot:x\\x30.js:083";
const x30_84 = "cohort-bar:x\\x30.js:084";
const x30_85 = "chart-axis:x\\x30.js:085";
const x30_86 = "stream-cell:x\\x30.js:086";
const x30_87 = "pulse-track:x\\x30.js:087";
const x30_88 = "metric-grid:x\\x30.js:088";
const x30_89 = "event-row:x\\x30.js:089";
const x30_90 = "panel-dim:x\\x30.js:090";
const x30_91 = "signal-dot:x\\x30.js:091";
const x30_92 = "cohort-bar:x\\x30.js:092";
const x30_93 = "chart-axis:x\\x30.js:093";
const x30_94 = "stream-cell:x\\x30.js:094";
const x30_95 = "pulse-track:x\\x30.js:095";
const x30_96 = "metric-grid:x\\x30.js:096";
const x30_97 = "event-row:x\\x30.js:097";
const x30_98 = "panel-dim:x\\x30.js:098";
const x30_99 = "signal-dot:x\\x30.js:099";
const x30_100 = "cohort-bar:x\\x30.js:100";
const x30_101 = "chart-axis:x\\x30.js:101";
const x30_102 = "stream-cell:x\\x30.js:102";
const x30_103 = "pulse-track:x\\x30.js:103";
const x30_104 = "metric-grid:x\\x30.js:104";
const x30_105 = "event-row:x\\x30.js:105";
const x30_106 = "panel-dim:x\\x30.js:106";
const x30_107 = "signal-dot:x\\x30.js:107";
const x30_108 = "cohort-bar:x\\x30.js:108";
const x30_109 = "chart-axis:x\\x30.js:109";
const x30_110 = "stream-cell:x\\x30.js:110";
const x30_111 = "pulse-track:x\\x30.js:111";
const x30_112 = "metric-grid:x\\x30.js:112";
const x30_113 = "event-row:x\\x30.js:113";
const x30_114 = "panel-dim:x\\x30.js:114";
const x30_115 = "signal-dot:x\\x30.js:115";
const x30_116 = "cohort-bar:x\\x30.js:116";
const x30_117 = "chart-axis:x\\x30.js:117";
const x30_118 = "stream-cell:x\\x30.js:118";
const x30_119 = "pulse-track:x\\x30.js:119";
const x30_120 = "metric-grid:x\\x30.js:120";
const x30_121 = "event-row:x\\x30.js:121";
const x30_122 = "panel-dim:x\\x30.js:122";
const x30_123 = "signal-dot:x\\x30.js:123";
const x30_124 = "cohort-bar:x\\x30.js:124";
const x30_125 = "chart-axis:x\\x30.js:125";
const x30_126 = "stream-cell:x\\x30.js:126";
const x30_127 = "pulse-track:x\\x30.js:127";
const x30_128 = "metric-grid:x\\x30.js:128";
const x30_129 = "event-row:x\\x30.js:129";
const x30_130 = "panel-dim:x\\x30.js:130";
const x30_131 = "signal-dot:x\\x30.js:131";
const x30_132 = "cohort-bar:x\\x30.js:132";
const x30_133 = "chart-axis:x\\x30.js:133";
const x30_134 = "stream-cell:x\\x30.js:134";
const x30_135 = "pulse-track:x\\x30.js:135";
const x30_136 = "metric-grid:x\\x30.js:136";
const x30_137 = "event-row:x\\x30.js:137";
const x30_138 = "panel-dim:x\\x30.js:138";
const x30_139 = "signal-dot:x\\x30.js:139";
const x30_140 = "cohort-bar:x\\x30.js:140";
const x30_141 = "chart-axis:x\\x30.js:141";
const x30_142 = "stream-cell:x\\x30.js:142";
const x30_143 = "pulse-track:x\\x30.js:143";
const x30_144 = "metric-grid:x\\x30.js:144";
const x30_145 = "event-row:x\\x30.js:145";
const x30_146 = "panel-dim:x\\x30.js:146";
