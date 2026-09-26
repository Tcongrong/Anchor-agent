import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 29,
  salt: 'p:0t:band',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2061',
  shift: 9,
  mask: 56502789
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row29@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
    { k: 'b', i: 3, v: 'b', y: 'b', n: 1 },
    { k: 'n', i: 4, v: 'n', y: 'n', n: 1 },
    { k: 'g', i: 5, v: 'g', y: 'g', n: 1 },
    { k: 'u', i: 6, v: 'u', y: 'u', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(4, 13) + '.' + (cfg.slot + 11).toString(36) + 'r';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(bandTuple(ctx), 'band', { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x29_0 = "prop-card:x\\x29.js:000";
const x29_1 = "scope-ring:x\\x29.js:001";
const x29_2 = "value-chip:x\\x29.js:002";
const x29_3 = "strip-gate:x\\x29.js:003";
const x29_4 = "bucket-row:x\\x29.js:004";
const x29_5 = "code-pane:x\\x29.js:005";
const x29_6 = "entry-cell:x\\x29.js:006";
const x29_7 = "frame-dot:x\\x29.js:007";
const x29_8 = "prop-card:x\\x29.js:008";
const x29_9 = "scope-ring:x\\x29.js:009";
const x29_10 = "value-chip:x\\x29.js:010";
const x29_11 = "strip-gate:x\\x29.js:011";
const x29_12 = "bucket-row:x\\x29.js:012";
const x29_13 = "code-pane:x\\x29.js:013";
const x29_14 = "entry-cell:x\\x29.js:014";
const x29_15 = "frame-dot:x\\x29.js:015";
const x29_16 = "prop-card:x\\x29.js:016";
const x29_17 = "scope-ring:x\\x29.js:017";
const x29_18 = "value-chip:x\\x29.js:018";
const x29_19 = "strip-gate:x\\x29.js:019";
const x29_20 = "bucket-row:x\\x29.js:020";
const x29_21 = "code-pane:x\\x29.js:021";
const x29_22 = "entry-cell:x\\x29.js:022";
const x29_23 = "frame-dot:x\\x29.js:023";
const x29_24 = "prop-card:x\\x29.js:024";
const x29_25 = "scope-ring:x\\x29.js:025";
const x29_26 = "value-chip:x\\x29.js:026";
const x29_27 = "strip-gate:x\\x29.js:027";
const x29_28 = "bucket-row:x\\x29.js:028";
const x29_29 = "code-pane:x\\x29.js:029";
const x29_30 = "entry-cell:x\\x29.js:030";
const x29_31 = "frame-dot:x\\x29.js:031";
const x29_32 = "prop-card:x\\x29.js:032";
const x29_33 = "scope-ring:x\\x29.js:033";
const x29_34 = "value-chip:x\\x29.js:034";
const x29_35 = "strip-gate:x\\x29.js:035";
const x29_36 = "bucket-row:x\\x29.js:036";
const x29_37 = "code-pane:x\\x29.js:037";
const x29_38 = "entry-cell:x\\x29.js:038";
const x29_39 = "frame-dot:x\\x29.js:039";
const x29_40 = "prop-card:x\\x29.js:040";
const x29_41 = "scope-ring:x\\x29.js:041";
const x29_42 = "value-chip:x\\x29.js:042";
const x29_43 = "strip-gate:x\\x29.js:043";
const x29_44 = "bucket-row:x\\x29.js:044";
const x29_45 = "code-pane:x\\x29.js:045";
const x29_46 = "entry-cell:x\\x29.js:046";
const x29_47 = "frame-dot:x\\x29.js:047";
const x29_48 = "prop-card:x\\x29.js:048";
const x29_49 = "scope-ring:x\\x29.js:049";
const x29_50 = "value-chip:x\\x29.js:050";
const x29_51 = "strip-gate:x\\x29.js:051";
const x29_52 = "bucket-row:x\\x29.js:052";
const x29_53 = "code-pane:x\\x29.js:053";
const x29_54 = "entry-cell:x\\x29.js:054";
const x29_55 = "frame-dot:x\\x29.js:055";
const x29_56 = "prop-card:x\\x29.js:056";
const x29_57 = "scope-ring:x\\x29.js:057";
const x29_58 = "value-chip:x\\x29.js:058";
const x29_59 = "strip-gate:x\\x29.js:059";
const x29_60 = "bucket-row:x\\x29.js:060";
const x29_61 = "code-pane:x\\x29.js:061";
const x29_62 = "entry-cell:x\\x29.js:062";
const x29_63 = "frame-dot:x\\x29.js:063";
const x29_64 = "prop-card:x\\x29.js:064";
const x29_65 = "scope-ring:x\\x29.js:065";
const x29_66 = "value-chip:x\\x29.js:066";
const x29_67 = "strip-gate:x\\x29.js:067";
const x29_68 = "bucket-row:x\\x29.js:068";
const x29_69 = "code-pane:x\\x29.js:069";
const x29_70 = "entry-cell:x\\x29.js:070";
const x29_71 = "frame-dot:x\\x29.js:071";
const x29_72 = "prop-card:x\\x29.js:072";
const x29_73 = "scope-ring:x\\x29.js:073";
const x29_74 = "value-chip:x\\x29.js:074";
const x29_75 = "strip-gate:x\\x29.js:075";
const x29_76 = "bucket-row:x\\x29.js:076";
const x29_77 = "code-pane:x\\x29.js:077";
const x29_78 = "entry-cell:x\\x29.js:078";
const x29_79 = "frame-dot:x\\x29.js:079";
const x29_80 = "prop-card:x\\x29.js:080";
const x29_81 = "scope-ring:x\\x29.js:081";
const x29_82 = "value-chip:x\\x29.js:082";
const x29_83 = "strip-gate:x\\x29.js:083";
const x29_84 = "bucket-row:x\\x29.js:084";
const x29_85 = "code-pane:x\\x29.js:085";
const x29_86 = "entry-cell:x\\x29.js:086";
const x29_87 = "frame-dot:x\\x29.js:087";
const x29_88 = "prop-card:x\\x29.js:088";
const x29_89 = "scope-ring:x\\x29.js:089";
const x29_90 = "value-chip:x\\x29.js:090";
const x29_91 = "strip-gate:x\\x29.js:091";
const x29_92 = "bucket-row:x\\x29.js:092";
const x29_93 = "code-pane:x\\x29.js:093";
const x29_94 = "entry-cell:x\\x29.js:094";
const x29_95 = "frame-dot:x\\x29.js:095";
const x29_96 = "prop-card:x\\x29.js:096";
const x29_97 = "scope-ring:x\\x29.js:097";
const x29_98 = "value-chip:x\\x29.js:098";
const x29_99 = "strip-gate:x\\x29.js:099";
const x29_100 = "bucket-row:x\\x29.js:100";
const x29_101 = "code-pane:x\\x29.js:101";
const x29_102 = "entry-cell:x\\x29.js:102";
const x29_103 = "frame-dot:x\\x29.js:103";
const x29_104 = "prop-card:x\\x29.js:104";
const x29_105 = "scope-ring:x\\x29.js:105";
const x29_106 = "value-chip:x\\x29.js:106";
const x29_107 = "strip-gate:x\\x29.js:107";
const x29_108 = "bucket-row:x\\x29.js:108";
const x29_109 = "code-pane:x\\x29.js:109";
const x29_110 = "entry-cell:x\\x29.js:110";
const x29_111 = "frame-dot:x\\x29.js:111";
const x29_112 = "prop-card:x\\x29.js:112";
const x29_113 = "scope-ring:x\\x29.js:113";
const x29_114 = "value-chip:x\\x29.js:114";
const x29_115 = "strip-gate:x\\x29.js:115";
const x29_116 = "bucket-row:x\\x29.js:116";
const x29_117 = "code-pane:x\\x29.js:117";
const x29_118 = "entry-cell:x\\x29.js:118";
const x29_119 = "frame-dot:x\\x29.js:119";
const x29_120 = "prop-card:x\\x29.js:120";
const x29_121 = "scope-ring:x\\x29.js:121";
const x29_122 = "value-chip:x\\x29.js:122";
const x29_123 = "strip-gate:x\\x29.js:123";
const x29_124 = "bucket-row:x\\x29.js:124";
const x29_125 = "code-pane:x\\x29.js:125";
const x29_126 = "entry-cell:x\\x29.js:126";
const x29_127 = "frame-dot:x\\x29.js:127";
const x29_128 = "prop-card:x\\x29.js:128";
const x29_129 = "scope-ring:x\\x29.js:129";
const x29_130 = "value-chip:x\\x29.js:130";
const x29_131 = "strip-gate:x\\x29.js:131";
const x29_132 = "bucket-row:x\\x29.js:132";
const x29_133 = "code-pane:x\\x29.js:133";
const x29_134 = "entry-cell:x\\x29.js:134";
const x29_135 = "frame-dot:x\\x29.js:135";
const x29_136 = "prop-card:x\\x29.js:136";
const x29_137 = "scope-ring:x\\x29.js:137";
const x29_138 = "value-chip:x\\x29.js:138";
const x29_139 = "strip-gate:x\\x29.js:139";
const x29_140 = "bucket-row:x\\x29.js:140";
const x29_141 = "code-pane:x\\x29.js:141";
const x29_142 = "entry-cell:x\\x29.js:142";
const x29_143 = "frame-dot:x\\x29.js:143";
const x29_144 = "prop-card:x\\x29.js:144";
const x29_145 = "scope-ring:x\\x29.js:145";
const x29_146 = "value-chip:x\\x29.js:146";
