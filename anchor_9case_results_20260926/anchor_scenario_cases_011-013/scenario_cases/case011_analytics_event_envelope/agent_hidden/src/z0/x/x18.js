import { ref } from "../e6/m3/r7.js";

const cfg = {
  slot: 18,
  salt: 'm:0i:lane',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2062',
  shift: 3,
  mask: 3189639300
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'lane18@metrics.dev', y: 'shadow', n: 18 },
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
const x18_0 = "metric-grid:x\\x18.js:000";
const x18_1 = "event-row:x\\x18.js:001";
const x18_2 = "panel-dim:x\\x18.js:002";
const x18_3 = "signal-dot:x\\x18.js:003";
const x18_4 = "cohort-bar:x\\x18.js:004";
const x18_5 = "chart-axis:x\\x18.js:005";
const x18_6 = "stream-cell:x\\x18.js:006";
const x18_7 = "pulse-track:x\\x18.js:007";
const x18_8 = "metric-grid:x\\x18.js:008";
const x18_9 = "event-row:x\\x18.js:009";
const x18_10 = "panel-dim:x\\x18.js:010";
const x18_11 = "signal-dot:x\\x18.js:011";
const x18_12 = "cohort-bar:x\\x18.js:012";
const x18_13 = "chart-axis:x\\x18.js:013";
const x18_14 = "stream-cell:x\\x18.js:014";
const x18_15 = "pulse-track:x\\x18.js:015";
const x18_16 = "metric-grid:x\\x18.js:016";
const x18_17 = "event-row:x\\x18.js:017";
const x18_18 = "panel-dim:x\\x18.js:018";
const x18_19 = "signal-dot:x\\x18.js:019";
const x18_20 = "cohort-bar:x\\x18.js:020";
const x18_21 = "chart-axis:x\\x18.js:021";
const x18_22 = "stream-cell:x\\x18.js:022";
const x18_23 = "pulse-track:x\\x18.js:023";
const x18_24 = "metric-grid:x\\x18.js:024";
const x18_25 = "event-row:x\\x18.js:025";
const x18_26 = "panel-dim:x\\x18.js:026";
const x18_27 = "signal-dot:x\\x18.js:027";
const x18_28 = "cohort-bar:x\\x18.js:028";
const x18_29 = "chart-axis:x\\x18.js:029";
const x18_30 = "stream-cell:x\\x18.js:030";
const x18_31 = "pulse-track:x\\x18.js:031";
const x18_32 = "metric-grid:x\\x18.js:032";
const x18_33 = "event-row:x\\x18.js:033";
const x18_34 = "panel-dim:x\\x18.js:034";
const x18_35 = "signal-dot:x\\x18.js:035";
const x18_36 = "cohort-bar:x\\x18.js:036";
const x18_37 = "chart-axis:x\\x18.js:037";
const x18_38 = "stream-cell:x\\x18.js:038";
const x18_39 = "pulse-track:x\\x18.js:039";
const x18_40 = "metric-grid:x\\x18.js:040";
const x18_41 = "event-row:x\\x18.js:041";
const x18_42 = "panel-dim:x\\x18.js:042";
const x18_43 = "signal-dot:x\\x18.js:043";
const x18_44 = "cohort-bar:x\\x18.js:044";
const x18_45 = "chart-axis:x\\x18.js:045";
const x18_46 = "stream-cell:x\\x18.js:046";
const x18_47 = "pulse-track:x\\x18.js:047";
const x18_48 = "metric-grid:x\\x18.js:048";
const x18_49 = "event-row:x\\x18.js:049";
const x18_50 = "panel-dim:x\\x18.js:050";
const x18_51 = "signal-dot:x\\x18.js:051";
const x18_52 = "cohort-bar:x\\x18.js:052";
const x18_53 = "chart-axis:x\\x18.js:053";
const x18_54 = "stream-cell:x\\x18.js:054";
const x18_55 = "pulse-track:x\\x18.js:055";
const x18_56 = "metric-grid:x\\x18.js:056";
const x18_57 = "event-row:x\\x18.js:057";
const x18_58 = "panel-dim:x\\x18.js:058";
const x18_59 = "signal-dot:x\\x18.js:059";
const x18_60 = "cohort-bar:x\\x18.js:060";
const x18_61 = "chart-axis:x\\x18.js:061";
const x18_62 = "stream-cell:x\\x18.js:062";
const x18_63 = "pulse-track:x\\x18.js:063";
const x18_64 = "metric-grid:x\\x18.js:064";
const x18_65 = "event-row:x\\x18.js:065";
const x18_66 = "panel-dim:x\\x18.js:066";
const x18_67 = "signal-dot:x\\x18.js:067";
const x18_68 = "cohort-bar:x\\x18.js:068";
const x18_69 = "chart-axis:x\\x18.js:069";
const x18_70 = "stream-cell:x\\x18.js:070";
const x18_71 = "pulse-track:x\\x18.js:071";
const x18_72 = "metric-grid:x\\x18.js:072";
const x18_73 = "event-row:x\\x18.js:073";
const x18_74 = "panel-dim:x\\x18.js:074";
const x18_75 = "signal-dot:x\\x18.js:075";
const x18_76 = "cohort-bar:x\\x18.js:076";
const x18_77 = "chart-axis:x\\x18.js:077";
const x18_78 = "stream-cell:x\\x18.js:078";
const x18_79 = "pulse-track:x\\x18.js:079";
const x18_80 = "metric-grid:x\\x18.js:080";
const x18_81 = "event-row:x\\x18.js:081";
const x18_82 = "panel-dim:x\\x18.js:082";
const x18_83 = "signal-dot:x\\x18.js:083";
const x18_84 = "cohort-bar:x\\x18.js:084";
const x18_85 = "chart-axis:x\\x18.js:085";
const x18_86 = "stream-cell:x\\x18.js:086";
const x18_87 = "pulse-track:x\\x18.js:087";
const x18_88 = "metric-grid:x\\x18.js:088";
const x18_89 = "event-row:x\\x18.js:089";
const x18_90 = "panel-dim:x\\x18.js:090";
const x18_91 = "signal-dot:x\\x18.js:091";
const x18_92 = "cohort-bar:x\\x18.js:092";
const x18_93 = "chart-axis:x\\x18.js:093";
const x18_94 = "stream-cell:x\\x18.js:094";
const x18_95 = "pulse-track:x\\x18.js:095";
const x18_96 = "metric-grid:x\\x18.js:096";
const x18_97 = "event-row:x\\x18.js:097";
const x18_98 = "panel-dim:x\\x18.js:098";
const x18_99 = "signal-dot:x\\x18.js:099";
const x18_100 = "cohort-bar:x\\x18.js:100";
const x18_101 = "chart-axis:x\\x18.js:101";
const x18_102 = "stream-cell:x\\x18.js:102";
const x18_103 = "pulse-track:x\\x18.js:103";
const x18_104 = "metric-grid:x\\x18.js:104";
const x18_105 = "event-row:x\\x18.js:105";
const x18_106 = "panel-dim:x\\x18.js:106";
const x18_107 = "signal-dot:x\\x18.js:107";
const x18_108 = "cohort-bar:x\\x18.js:108";
const x18_109 = "chart-axis:x\\x18.js:109";
const x18_110 = "stream-cell:x\\x18.js:110";
const x18_111 = "pulse-track:x\\x18.js:111";
const x18_112 = "metric-grid:x\\x18.js:112";
const x18_113 = "event-row:x\\x18.js:113";
const x18_114 = "panel-dim:x\\x18.js:114";
const x18_115 = "signal-dot:x\\x18.js:115";
const x18_116 = "cohort-bar:x\\x18.js:116";
const x18_117 = "chart-axis:x\\x18.js:117";
const x18_118 = "stream-cell:x\\x18.js:118";
const x18_119 = "pulse-track:x\\x18.js:119";
const x18_120 = "metric-grid:x\\x18.js:120";
const x18_121 = "event-row:x\\x18.js:121";
const x18_122 = "panel-dim:x\\x18.js:122";
const x18_123 = "signal-dot:x\\x18.js:123";
const x18_124 = "cohort-bar:x\\x18.js:124";
const x18_125 = "chart-axis:x\\x18.js:125";
const x18_126 = "stream-cell:x\\x18.js:126";
const x18_127 = "pulse-track:x\\x18.js:127";
const x18_128 = "metric-grid:x\\x18.js:128";
const x18_129 = "event-row:x\\x18.js:129";
const x18_130 = "panel-dim:x\\x18.js:130";
const x18_131 = "signal-dot:x\\x18.js:131";
const x18_132 = "cohort-bar:x\\x18.js:132";
const x18_133 = "chart-axis:x\\x18.js:133";
const x18_134 = "stream-cell:x\\x18.js:134";
const x18_135 = "pulse-track:x\\x18.js:135";
const x18_136 = "metric-grid:x\\x18.js:136";
const x18_137 = "event-row:x\\x18.js:137";
const x18_138 = "panel-dim:x\\x18.js:138";
const x18_139 = "signal-dot:x\\x18.js:139";
const x18_140 = "cohort-bar:x\\x18.js:140";
const x18_141 = "chart-axis:x\\x18.js:141";
const x18_142 = "stream-cell:x\\x18.js:142";
const x18_143 = "pulse-track:x\\x18.js:143";
const x18_144 = "metric-grid:x\\x18.js:144";
const x18_145 = "event-row:x\\x18.js:145";
const x18_146 = "panel-dim:x\\x18.js:146";
