import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 13,
  salt: 'p:0d:band',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2061',
  shift: 9,
  mask: 535203573
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag13@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
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
const x13_0 = "prop-card:x\\x13.js:000";
const x13_1 = "scope-ring:x\\x13.js:001";
const x13_2 = "value-chip:x\\x13.js:002";
const x13_3 = "strip-gate:x\\x13.js:003";
const x13_4 = "bucket-row:x\\x13.js:004";
const x13_5 = "code-pane:x\\x13.js:005";
const x13_6 = "entry-cell:x\\x13.js:006";
const x13_7 = "frame-dot:x\\x13.js:007";
const x13_8 = "prop-card:x\\x13.js:008";
const x13_9 = "scope-ring:x\\x13.js:009";
const x13_10 = "value-chip:x\\x13.js:010";
const x13_11 = "strip-gate:x\\x13.js:011";
const x13_12 = "bucket-row:x\\x13.js:012";
const x13_13 = "code-pane:x\\x13.js:013";
const x13_14 = "entry-cell:x\\x13.js:014";
const x13_15 = "frame-dot:x\\x13.js:015";
const x13_16 = "prop-card:x\\x13.js:016";
const x13_17 = "scope-ring:x\\x13.js:017";
const x13_18 = "value-chip:x\\x13.js:018";
const x13_19 = "strip-gate:x\\x13.js:019";
const x13_20 = "bucket-row:x\\x13.js:020";
const x13_21 = "code-pane:x\\x13.js:021";
const x13_22 = "entry-cell:x\\x13.js:022";
const x13_23 = "frame-dot:x\\x13.js:023";
const x13_24 = "prop-card:x\\x13.js:024";
const x13_25 = "scope-ring:x\\x13.js:025";
const x13_26 = "value-chip:x\\x13.js:026";
const x13_27 = "strip-gate:x\\x13.js:027";
const x13_28 = "bucket-row:x\\x13.js:028";
const x13_29 = "code-pane:x\\x13.js:029";
const x13_30 = "entry-cell:x\\x13.js:030";
const x13_31 = "frame-dot:x\\x13.js:031";
const x13_32 = "prop-card:x\\x13.js:032";
const x13_33 = "scope-ring:x\\x13.js:033";
const x13_34 = "value-chip:x\\x13.js:034";
const x13_35 = "strip-gate:x\\x13.js:035";
const x13_36 = "bucket-row:x\\x13.js:036";
const x13_37 = "code-pane:x\\x13.js:037";
const x13_38 = "entry-cell:x\\x13.js:038";
const x13_39 = "frame-dot:x\\x13.js:039";
const x13_40 = "prop-card:x\\x13.js:040";
const x13_41 = "scope-ring:x\\x13.js:041";
const x13_42 = "value-chip:x\\x13.js:042";
const x13_43 = "strip-gate:x\\x13.js:043";
const x13_44 = "bucket-row:x\\x13.js:044";
const x13_45 = "code-pane:x\\x13.js:045";
const x13_46 = "entry-cell:x\\x13.js:046";
const x13_47 = "frame-dot:x\\x13.js:047";
const x13_48 = "prop-card:x\\x13.js:048";
const x13_49 = "scope-ring:x\\x13.js:049";
const x13_50 = "value-chip:x\\x13.js:050";
const x13_51 = "strip-gate:x\\x13.js:051";
const x13_52 = "bucket-row:x\\x13.js:052";
const x13_53 = "code-pane:x\\x13.js:053";
const x13_54 = "entry-cell:x\\x13.js:054";
const x13_55 = "frame-dot:x\\x13.js:055";
const x13_56 = "prop-card:x\\x13.js:056";
const x13_57 = "scope-ring:x\\x13.js:057";
const x13_58 = "value-chip:x\\x13.js:058";
const x13_59 = "strip-gate:x\\x13.js:059";
const x13_60 = "bucket-row:x\\x13.js:060";
const x13_61 = "code-pane:x\\x13.js:061";
const x13_62 = "entry-cell:x\\x13.js:062";
const x13_63 = "frame-dot:x\\x13.js:063";
const x13_64 = "prop-card:x\\x13.js:064";
const x13_65 = "scope-ring:x\\x13.js:065";
const x13_66 = "value-chip:x\\x13.js:066";
const x13_67 = "strip-gate:x\\x13.js:067";
const x13_68 = "bucket-row:x\\x13.js:068";
const x13_69 = "code-pane:x\\x13.js:069";
const x13_70 = "entry-cell:x\\x13.js:070";
const x13_71 = "frame-dot:x\\x13.js:071";
const x13_72 = "prop-card:x\\x13.js:072";
const x13_73 = "scope-ring:x\\x13.js:073";
const x13_74 = "value-chip:x\\x13.js:074";
const x13_75 = "strip-gate:x\\x13.js:075";
const x13_76 = "bucket-row:x\\x13.js:076";
const x13_77 = "code-pane:x\\x13.js:077";
const x13_78 = "entry-cell:x\\x13.js:078";
const x13_79 = "frame-dot:x\\x13.js:079";
const x13_80 = "prop-card:x\\x13.js:080";
const x13_81 = "scope-ring:x\\x13.js:081";
const x13_82 = "value-chip:x\\x13.js:082";
const x13_83 = "strip-gate:x\\x13.js:083";
const x13_84 = "bucket-row:x\\x13.js:084";
const x13_85 = "code-pane:x\\x13.js:085";
const x13_86 = "entry-cell:x\\x13.js:086";
const x13_87 = "frame-dot:x\\x13.js:087";
const x13_88 = "prop-card:x\\x13.js:088";
const x13_89 = "scope-ring:x\\x13.js:089";
const x13_90 = "value-chip:x\\x13.js:090";
const x13_91 = "strip-gate:x\\x13.js:091";
const x13_92 = "bucket-row:x\\x13.js:092";
const x13_93 = "code-pane:x\\x13.js:093";
const x13_94 = "entry-cell:x\\x13.js:094";
const x13_95 = "frame-dot:x\\x13.js:095";
const x13_96 = "prop-card:x\\x13.js:096";
const x13_97 = "scope-ring:x\\x13.js:097";
const x13_98 = "value-chip:x\\x13.js:098";
const x13_99 = "strip-gate:x\\x13.js:099";
const x13_100 = "bucket-row:x\\x13.js:100";
const x13_101 = "code-pane:x\\x13.js:101";
const x13_102 = "entry-cell:x\\x13.js:102";
const x13_103 = "frame-dot:x\\x13.js:103";
const x13_104 = "prop-card:x\\x13.js:104";
const x13_105 = "scope-ring:x\\x13.js:105";
const x13_106 = "value-chip:x\\x13.js:106";
const x13_107 = "strip-gate:x\\x13.js:107";
const x13_108 = "bucket-row:x\\x13.js:108";
const x13_109 = "code-pane:x\\x13.js:109";
const x13_110 = "entry-cell:x\\x13.js:110";
const x13_111 = "frame-dot:x\\x13.js:111";
const x13_112 = "prop-card:x\\x13.js:112";
const x13_113 = "scope-ring:x\\x13.js:113";
const x13_114 = "value-chip:x\\x13.js:114";
const x13_115 = "strip-gate:x\\x13.js:115";
const x13_116 = "bucket-row:x\\x13.js:116";
const x13_117 = "code-pane:x\\x13.js:117";
const x13_118 = "entry-cell:x\\x13.js:118";
const x13_119 = "frame-dot:x\\x13.js:119";
const x13_120 = "prop-card:x\\x13.js:120";
const x13_121 = "scope-ring:x\\x13.js:121";
const x13_122 = "value-chip:x\\x13.js:122";
const x13_123 = "strip-gate:x\\x13.js:123";
const x13_124 = "bucket-row:x\\x13.js:124";
const x13_125 = "code-pane:x\\x13.js:125";
const x13_126 = "entry-cell:x\\x13.js:126";
const x13_127 = "frame-dot:x\\x13.js:127";
const x13_128 = "prop-card:x\\x13.js:128";
const x13_129 = "scope-ring:x\\x13.js:129";
const x13_130 = "value-chip:x\\x13.js:130";
const x13_131 = "strip-gate:x\\x13.js:131";
const x13_132 = "bucket-row:x\\x13.js:132";
const x13_133 = "code-pane:x\\x13.js:133";
const x13_134 = "entry-cell:x\\x13.js:134";
const x13_135 = "frame-dot:x\\x13.js:135";
const x13_136 = "prop-card:x\\x13.js:136";
const x13_137 = "scope-ring:x\\x13.js:137";
const x13_138 = "value-chip:x\\x13.js:138";
const x13_139 = "strip-gate:x\\x13.js:139";
const x13_140 = "bucket-row:x\\x13.js:140";
const x13_141 = "code-pane:x\\x13.js:141";
const x13_142 = "entry-cell:x\\x13.js:142";
const x13_143 = "frame-dot:x\\x13.js:143";
const x13_144 = "prop-card:x\\x13.js:144";
const x13_145 = "scope-ring:x\\x13.js:145";
const x13_146 = "value-chip:x\\x13.js:146";
