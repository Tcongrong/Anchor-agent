import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 40,
  salt: 'p:14:band',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2060',
  shift: 4,
  mask: 3485492384
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag40@props.dev', y: 'shadow', n: 15 },
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
const x40_0 = "prop-card:x\\x40.js:000";
const x40_1 = "scope-ring:x\\x40.js:001";
const x40_2 = "value-chip:x\\x40.js:002";
const x40_3 = "strip-gate:x\\x40.js:003";
const x40_4 = "bucket-row:x\\x40.js:004";
const x40_5 = "code-pane:x\\x40.js:005";
const x40_6 = "entry-cell:x\\x40.js:006";
const x40_7 = "frame-dot:x\\x40.js:007";
const x40_8 = "prop-card:x\\x40.js:008";
const x40_9 = "scope-ring:x\\x40.js:009";
const x40_10 = "value-chip:x\\x40.js:010";
const x40_11 = "strip-gate:x\\x40.js:011";
const x40_12 = "bucket-row:x\\x40.js:012";
const x40_13 = "code-pane:x\\x40.js:013";
const x40_14 = "entry-cell:x\\x40.js:014";
const x40_15 = "frame-dot:x\\x40.js:015";
const x40_16 = "prop-card:x\\x40.js:016";
const x40_17 = "scope-ring:x\\x40.js:017";
const x40_18 = "value-chip:x\\x40.js:018";
const x40_19 = "strip-gate:x\\x40.js:019";
const x40_20 = "bucket-row:x\\x40.js:020";
const x40_21 = "code-pane:x\\x40.js:021";
const x40_22 = "entry-cell:x\\x40.js:022";
const x40_23 = "frame-dot:x\\x40.js:023";
const x40_24 = "prop-card:x\\x40.js:024";
const x40_25 = "scope-ring:x\\x40.js:025";
const x40_26 = "value-chip:x\\x40.js:026";
const x40_27 = "strip-gate:x\\x40.js:027";
const x40_28 = "bucket-row:x\\x40.js:028";
const x40_29 = "code-pane:x\\x40.js:029";
const x40_30 = "entry-cell:x\\x40.js:030";
const x40_31 = "frame-dot:x\\x40.js:031";
const x40_32 = "prop-card:x\\x40.js:032";
const x40_33 = "scope-ring:x\\x40.js:033";
const x40_34 = "value-chip:x\\x40.js:034";
const x40_35 = "strip-gate:x\\x40.js:035";
const x40_36 = "bucket-row:x\\x40.js:036";
const x40_37 = "code-pane:x\\x40.js:037";
const x40_38 = "entry-cell:x\\x40.js:038";
const x40_39 = "frame-dot:x\\x40.js:039";
const x40_40 = "prop-card:x\\x40.js:040";
const x40_41 = "scope-ring:x\\x40.js:041";
const x40_42 = "value-chip:x\\x40.js:042";
const x40_43 = "strip-gate:x\\x40.js:043";
const x40_44 = "bucket-row:x\\x40.js:044";
const x40_45 = "code-pane:x\\x40.js:045";
const x40_46 = "entry-cell:x\\x40.js:046";
const x40_47 = "frame-dot:x\\x40.js:047";
const x40_48 = "prop-card:x\\x40.js:048";
const x40_49 = "scope-ring:x\\x40.js:049";
const x40_50 = "value-chip:x\\x40.js:050";
const x40_51 = "strip-gate:x\\x40.js:051";
const x40_52 = "bucket-row:x\\x40.js:052";
const x40_53 = "code-pane:x\\x40.js:053";
const x40_54 = "entry-cell:x\\x40.js:054";
const x40_55 = "frame-dot:x\\x40.js:055";
const x40_56 = "prop-card:x\\x40.js:056";
const x40_57 = "scope-ring:x\\x40.js:057";
const x40_58 = "value-chip:x\\x40.js:058";
const x40_59 = "strip-gate:x\\x40.js:059";
const x40_60 = "bucket-row:x\\x40.js:060";
const x40_61 = "code-pane:x\\x40.js:061";
const x40_62 = "entry-cell:x\\x40.js:062";
const x40_63 = "frame-dot:x\\x40.js:063";
const x40_64 = "prop-card:x\\x40.js:064";
const x40_65 = "scope-ring:x\\x40.js:065";
const x40_66 = "value-chip:x\\x40.js:066";
const x40_67 = "strip-gate:x\\x40.js:067";
const x40_68 = "bucket-row:x\\x40.js:068";
const x40_69 = "code-pane:x\\x40.js:069";
const x40_70 = "entry-cell:x\\x40.js:070";
const x40_71 = "frame-dot:x\\x40.js:071";
const x40_72 = "prop-card:x\\x40.js:072";
const x40_73 = "scope-ring:x\\x40.js:073";
const x40_74 = "value-chip:x\\x40.js:074";
const x40_75 = "strip-gate:x\\x40.js:075";
const x40_76 = "bucket-row:x\\x40.js:076";
const x40_77 = "code-pane:x\\x40.js:077";
const x40_78 = "entry-cell:x\\x40.js:078";
const x40_79 = "frame-dot:x\\x40.js:079";
const x40_80 = "prop-card:x\\x40.js:080";
const x40_81 = "scope-ring:x\\x40.js:081";
const x40_82 = "value-chip:x\\x40.js:082";
const x40_83 = "strip-gate:x\\x40.js:083";
const x40_84 = "bucket-row:x\\x40.js:084";
const x40_85 = "code-pane:x\\x40.js:085";
const x40_86 = "entry-cell:x\\x40.js:086";
const x40_87 = "frame-dot:x\\x40.js:087";
const x40_88 = "prop-card:x\\x40.js:088";
const x40_89 = "scope-ring:x\\x40.js:089";
const x40_90 = "value-chip:x\\x40.js:090";
const x40_91 = "strip-gate:x\\x40.js:091";
const x40_92 = "bucket-row:x\\x40.js:092";
const x40_93 = "code-pane:x\\x40.js:093";
const x40_94 = "entry-cell:x\\x40.js:094";
const x40_95 = "frame-dot:x\\x40.js:095";
const x40_96 = "prop-card:x\\x40.js:096";
const x40_97 = "scope-ring:x\\x40.js:097";
const x40_98 = "value-chip:x\\x40.js:098";
const x40_99 = "strip-gate:x\\x40.js:099";
const x40_100 = "bucket-row:x\\x40.js:100";
const x40_101 = "code-pane:x\\x40.js:101";
const x40_102 = "entry-cell:x\\x40.js:102";
const x40_103 = "frame-dot:x\\x40.js:103";
const x40_104 = "prop-card:x\\x40.js:104";
const x40_105 = "scope-ring:x\\x40.js:105";
const x40_106 = "value-chip:x\\x40.js:106";
const x40_107 = "strip-gate:x\\x40.js:107";
const x40_108 = "bucket-row:x\\x40.js:108";
const x40_109 = "code-pane:x\\x40.js:109";
const x40_110 = "entry-cell:x\\x40.js:110";
const x40_111 = "frame-dot:x\\x40.js:111";
const x40_112 = "prop-card:x\\x40.js:112";
const x40_113 = "scope-ring:x\\x40.js:113";
const x40_114 = "value-chip:x\\x40.js:114";
const x40_115 = "strip-gate:x\\x40.js:115";
const x40_116 = "bucket-row:x\\x40.js:116";
const x40_117 = "code-pane:x\\x40.js:117";
const x40_118 = "entry-cell:x\\x40.js:118";
const x40_119 = "frame-dot:x\\x40.js:119";
const x40_120 = "prop-card:x\\x40.js:120";
const x40_121 = "scope-ring:x\\x40.js:121";
const x40_122 = "value-chip:x\\x40.js:122";
const x40_123 = "strip-gate:x\\x40.js:123";
const x40_124 = "bucket-row:x\\x40.js:124";
const x40_125 = "code-pane:x\\x40.js:125";
const x40_126 = "entry-cell:x\\x40.js:126";
const x40_127 = "frame-dot:x\\x40.js:127";
const x40_128 = "prop-card:x\\x40.js:128";
const x40_129 = "scope-ring:x\\x40.js:129";
const x40_130 = "value-chip:x\\x40.js:130";
const x40_131 = "strip-gate:x\\x40.js:131";
const x40_132 = "bucket-row:x\\x40.js:132";
const x40_133 = "code-pane:x\\x40.js:133";
const x40_134 = "entry-cell:x\\x40.js:134";
const x40_135 = "frame-dot:x\\x40.js:135";
const x40_136 = "prop-card:x\\x40.js:136";
const x40_137 = "scope-ring:x\\x40.js:137";
const x40_138 = "value-chip:x\\x40.js:138";
const x40_139 = "strip-gate:x\\x40.js:139";
const x40_140 = "bucket-row:x\\x40.js:140";
const x40_141 = "code-pane:x\\x40.js:141";
const x40_142 = "entry-cell:x\\x40.js:142";
const x40_143 = "frame-dot:x\\x40.js:143";
const x40_144 = "prop-card:x\\x40.js:144";
const x40_145 = "scope-ring:x\\x40.js:145";
const x40_146 = "value-chip:x\\x40.js:146";
