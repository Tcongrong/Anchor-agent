import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 4,
  salt: 'p:04:band',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 8,
  mask: 2415085500
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag4@props.dev', y: 'shadow', n: 14 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
    { k: 'r', i: 2, v: '7', y: '7', n: 1 },
    { k: 'b', i: 3, v: 'b', y: 'b', n: 1 },
    { k: 'n', i: 4, v: 'n', y: 'n', n: 1 },
    { k: 'g', i: 5, v: 'g', y: 'g', n: 1 },
    { k: 'u', i: 6, v: 'u', y: 'u', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(3, 11) + '~' + (cfg.slot * 2 + 1).toString(36) + 'q';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(bandTuple(ctx), 'band', { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x04_0 = "prop-card:x\\x04.js:000";
const x04_1 = "scope-ring:x\\x04.js:001";
const x04_2 = "value-chip:x\\x04.js:002";
const x04_3 = "strip-gate:x\\x04.js:003";
const x04_4 = "bucket-row:x\\x04.js:004";
const x04_5 = "code-pane:x\\x04.js:005";
const x04_6 = "entry-cell:x\\x04.js:006";
const x04_7 = "frame-dot:x\\x04.js:007";
const x04_8 = "prop-card:x\\x04.js:008";
const x04_9 = "scope-ring:x\\x04.js:009";
const x04_10 = "value-chip:x\\x04.js:010";
const x04_11 = "strip-gate:x\\x04.js:011";
const x04_12 = "bucket-row:x\\x04.js:012";
const x04_13 = "code-pane:x\\x04.js:013";
const x04_14 = "entry-cell:x\\x04.js:014";
const x04_15 = "frame-dot:x\\x04.js:015";
const x04_16 = "prop-card:x\\x04.js:016";
const x04_17 = "scope-ring:x\\x04.js:017";
const x04_18 = "value-chip:x\\x04.js:018";
const x04_19 = "strip-gate:x\\x04.js:019";
const x04_20 = "bucket-row:x\\x04.js:020";
const x04_21 = "code-pane:x\\x04.js:021";
const x04_22 = "entry-cell:x\\x04.js:022";
const x04_23 = "frame-dot:x\\x04.js:023";
const x04_24 = "prop-card:x\\x04.js:024";
const x04_25 = "scope-ring:x\\x04.js:025";
const x04_26 = "value-chip:x\\x04.js:026";
const x04_27 = "strip-gate:x\\x04.js:027";
const x04_28 = "bucket-row:x\\x04.js:028";
const x04_29 = "code-pane:x\\x04.js:029";
const x04_30 = "entry-cell:x\\x04.js:030";
const x04_31 = "frame-dot:x\\x04.js:031";
const x04_32 = "prop-card:x\\x04.js:032";
const x04_33 = "scope-ring:x\\x04.js:033";
const x04_34 = "value-chip:x\\x04.js:034";
const x04_35 = "strip-gate:x\\x04.js:035";
const x04_36 = "bucket-row:x\\x04.js:036";
const x04_37 = "code-pane:x\\x04.js:037";
const x04_38 = "entry-cell:x\\x04.js:038";
const x04_39 = "frame-dot:x\\x04.js:039";
const x04_40 = "prop-card:x\\x04.js:040";
const x04_41 = "scope-ring:x\\x04.js:041";
const x04_42 = "value-chip:x\\x04.js:042";
const x04_43 = "strip-gate:x\\x04.js:043";
const x04_44 = "bucket-row:x\\x04.js:044";
const x04_45 = "code-pane:x\\x04.js:045";
const x04_46 = "entry-cell:x\\x04.js:046";
const x04_47 = "frame-dot:x\\x04.js:047";
const x04_48 = "prop-card:x\\x04.js:048";
const x04_49 = "scope-ring:x\\x04.js:049";
const x04_50 = "value-chip:x\\x04.js:050";
const x04_51 = "strip-gate:x\\x04.js:051";
const x04_52 = "bucket-row:x\\x04.js:052";
const x04_53 = "code-pane:x\\x04.js:053";
const x04_54 = "entry-cell:x\\x04.js:054";
const x04_55 = "frame-dot:x\\x04.js:055";
const x04_56 = "prop-card:x\\x04.js:056";
const x04_57 = "scope-ring:x\\x04.js:057";
const x04_58 = "value-chip:x\\x04.js:058";
const x04_59 = "strip-gate:x\\x04.js:059";
const x04_60 = "bucket-row:x\\x04.js:060";
const x04_61 = "code-pane:x\\x04.js:061";
const x04_62 = "entry-cell:x\\x04.js:062";
const x04_63 = "frame-dot:x\\x04.js:063";
const x04_64 = "prop-card:x\\x04.js:064";
const x04_65 = "scope-ring:x\\x04.js:065";
const x04_66 = "value-chip:x\\x04.js:066";
const x04_67 = "strip-gate:x\\x04.js:067";
const x04_68 = "bucket-row:x\\x04.js:068";
const x04_69 = "code-pane:x\\x04.js:069";
const x04_70 = "entry-cell:x\\x04.js:070";
const x04_71 = "frame-dot:x\\x04.js:071";
const x04_72 = "prop-card:x\\x04.js:072";
const x04_73 = "scope-ring:x\\x04.js:073";
const x04_74 = "value-chip:x\\x04.js:074";
const x04_75 = "strip-gate:x\\x04.js:075";
const x04_76 = "bucket-row:x\\x04.js:076";
const x04_77 = "code-pane:x\\x04.js:077";
const x04_78 = "entry-cell:x\\x04.js:078";
const x04_79 = "frame-dot:x\\x04.js:079";
const x04_80 = "prop-card:x\\x04.js:080";
const x04_81 = "scope-ring:x\\x04.js:081";
const x04_82 = "value-chip:x\\x04.js:082";
const x04_83 = "strip-gate:x\\x04.js:083";
const x04_84 = "bucket-row:x\\x04.js:084";
const x04_85 = "code-pane:x\\x04.js:085";
const x04_86 = "entry-cell:x\\x04.js:086";
const x04_87 = "frame-dot:x\\x04.js:087";
const x04_88 = "prop-card:x\\x04.js:088";
const x04_89 = "scope-ring:x\\x04.js:089";
const x04_90 = "value-chip:x\\x04.js:090";
const x04_91 = "strip-gate:x\\x04.js:091";
const x04_92 = "bucket-row:x\\x04.js:092";
const x04_93 = "code-pane:x\\x04.js:093";
const x04_94 = "entry-cell:x\\x04.js:094";
const x04_95 = "frame-dot:x\\x04.js:095";
const x04_96 = "prop-card:x\\x04.js:096";
const x04_97 = "scope-ring:x\\x04.js:097";
const x04_98 = "value-chip:x\\x04.js:098";
const x04_99 = "strip-gate:x\\x04.js:099";
const x04_100 = "bucket-row:x\\x04.js:100";
const x04_101 = "code-pane:x\\x04.js:101";
const x04_102 = "entry-cell:x\\x04.js:102";
const x04_103 = "frame-dot:x\\x04.js:103";
const x04_104 = "prop-card:x\\x04.js:104";
const x04_105 = "scope-ring:x\\x04.js:105";
const x04_106 = "value-chip:x\\x04.js:106";
const x04_107 = "strip-gate:x\\x04.js:107";
const x04_108 = "bucket-row:x\\x04.js:108";
const x04_109 = "code-pane:x\\x04.js:109";
const x04_110 = "entry-cell:x\\x04.js:110";
const x04_111 = "frame-dot:x\\x04.js:111";
const x04_112 = "prop-card:x\\x04.js:112";
const x04_113 = "scope-ring:x\\x04.js:113";
const x04_114 = "value-chip:x\\x04.js:114";
const x04_115 = "strip-gate:x\\x04.js:115";
const x04_116 = "bucket-row:x\\x04.js:116";
const x04_117 = "code-pane:x\\x04.js:117";
const x04_118 = "entry-cell:x\\x04.js:118";
const x04_119 = "frame-dot:x\\x04.js:119";
const x04_120 = "prop-card:x\\x04.js:120";
const x04_121 = "scope-ring:x\\x04.js:121";
const x04_122 = "value-chip:x\\x04.js:122";
const x04_123 = "strip-gate:x\\x04.js:123";
const x04_124 = "bucket-row:x\\x04.js:124";
const x04_125 = "code-pane:x\\x04.js:125";
const x04_126 = "entry-cell:x\\x04.js:126";
const x04_127 = "frame-dot:x\\x04.js:127";
const x04_128 = "prop-card:x\\x04.js:128";
const x04_129 = "scope-ring:x\\x04.js:129";
const x04_130 = "value-chip:x\\x04.js:130";
const x04_131 = "strip-gate:x\\x04.js:131";
const x04_132 = "bucket-row:x\\x04.js:132";
const x04_133 = "code-pane:x\\x04.js:133";
const x04_134 = "entry-cell:x\\x04.js:134";
const x04_135 = "frame-dot:x\\x04.js:135";
const x04_136 = "prop-card:x\\x04.js:136";
const x04_137 = "scope-ring:x\\x04.js:137";
const x04_138 = "value-chip:x\\x04.js:138";
const x04_139 = "strip-gate:x\\x04.js:139";
const x04_140 = "bucket-row:x\\x04.js:140";
const x04_141 = "code-pane:x\\x04.js:141";
const x04_142 = "entry-cell:x\\x04.js:142";
const x04_143 = "frame-dot:x\\x04.js:143";
const x04_144 = "prop-card:x\\x04.js:144";
const x04_145 = "scope-ring:x\\x04.js:145";
const x04_146 = "value-chip:x\\x04.js:146";
