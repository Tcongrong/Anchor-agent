import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 32,
  salt: 'p:0w:band',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 4,
  mask: 3724842776
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row32@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
    { k: 'r', i: 2, v: '8', y: '8', n: 1 },
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
const x32_0 = "prop-card:x\\x32.js:000";
const x32_1 = "scope-ring:x\\x32.js:001";
const x32_2 = "value-chip:x\\x32.js:002";
const x32_3 = "strip-gate:x\\x32.js:003";
const x32_4 = "bucket-row:x\\x32.js:004";
const x32_5 = "code-pane:x\\x32.js:005";
const x32_6 = "entry-cell:x\\x32.js:006";
const x32_7 = "frame-dot:x\\x32.js:007";
const x32_8 = "prop-card:x\\x32.js:008";
const x32_9 = "scope-ring:x\\x32.js:009";
const x32_10 = "value-chip:x\\x32.js:010";
const x32_11 = "strip-gate:x\\x32.js:011";
const x32_12 = "bucket-row:x\\x32.js:012";
const x32_13 = "code-pane:x\\x32.js:013";
const x32_14 = "entry-cell:x\\x32.js:014";
const x32_15 = "frame-dot:x\\x32.js:015";
const x32_16 = "prop-card:x\\x32.js:016";
const x32_17 = "scope-ring:x\\x32.js:017";
const x32_18 = "value-chip:x\\x32.js:018";
const x32_19 = "strip-gate:x\\x32.js:019";
const x32_20 = "bucket-row:x\\x32.js:020";
const x32_21 = "code-pane:x\\x32.js:021";
const x32_22 = "entry-cell:x\\x32.js:022";
const x32_23 = "frame-dot:x\\x32.js:023";
const x32_24 = "prop-card:x\\x32.js:024";
const x32_25 = "scope-ring:x\\x32.js:025";
const x32_26 = "value-chip:x\\x32.js:026";
const x32_27 = "strip-gate:x\\x32.js:027";
const x32_28 = "bucket-row:x\\x32.js:028";
const x32_29 = "code-pane:x\\x32.js:029";
const x32_30 = "entry-cell:x\\x32.js:030";
const x32_31 = "frame-dot:x\\x32.js:031";
const x32_32 = "prop-card:x\\x32.js:032";
const x32_33 = "scope-ring:x\\x32.js:033";
const x32_34 = "value-chip:x\\x32.js:034";
const x32_35 = "strip-gate:x\\x32.js:035";
const x32_36 = "bucket-row:x\\x32.js:036";
const x32_37 = "code-pane:x\\x32.js:037";
const x32_38 = "entry-cell:x\\x32.js:038";
const x32_39 = "frame-dot:x\\x32.js:039";
const x32_40 = "prop-card:x\\x32.js:040";
const x32_41 = "scope-ring:x\\x32.js:041";
const x32_42 = "value-chip:x\\x32.js:042";
const x32_43 = "strip-gate:x\\x32.js:043";
const x32_44 = "bucket-row:x\\x32.js:044";
const x32_45 = "code-pane:x\\x32.js:045";
const x32_46 = "entry-cell:x\\x32.js:046";
const x32_47 = "frame-dot:x\\x32.js:047";
const x32_48 = "prop-card:x\\x32.js:048";
const x32_49 = "scope-ring:x\\x32.js:049";
const x32_50 = "value-chip:x\\x32.js:050";
const x32_51 = "strip-gate:x\\x32.js:051";
const x32_52 = "bucket-row:x\\x32.js:052";
const x32_53 = "code-pane:x\\x32.js:053";
const x32_54 = "entry-cell:x\\x32.js:054";
const x32_55 = "frame-dot:x\\x32.js:055";
const x32_56 = "prop-card:x\\x32.js:056";
const x32_57 = "scope-ring:x\\x32.js:057";
const x32_58 = "value-chip:x\\x32.js:058";
const x32_59 = "strip-gate:x\\x32.js:059";
const x32_60 = "bucket-row:x\\x32.js:060";
const x32_61 = "code-pane:x\\x32.js:061";
const x32_62 = "entry-cell:x\\x32.js:062";
const x32_63 = "frame-dot:x\\x32.js:063";
const x32_64 = "prop-card:x\\x32.js:064";
const x32_65 = "scope-ring:x\\x32.js:065";
const x32_66 = "value-chip:x\\x32.js:066";
const x32_67 = "strip-gate:x\\x32.js:067";
const x32_68 = "bucket-row:x\\x32.js:068";
const x32_69 = "code-pane:x\\x32.js:069";
const x32_70 = "entry-cell:x\\x32.js:070";
const x32_71 = "frame-dot:x\\x32.js:071";
const x32_72 = "prop-card:x\\x32.js:072";
const x32_73 = "scope-ring:x\\x32.js:073";
const x32_74 = "value-chip:x\\x32.js:074";
const x32_75 = "strip-gate:x\\x32.js:075";
const x32_76 = "bucket-row:x\\x32.js:076";
const x32_77 = "code-pane:x\\x32.js:077";
const x32_78 = "entry-cell:x\\x32.js:078";
const x32_79 = "frame-dot:x\\x32.js:079";
const x32_80 = "prop-card:x\\x32.js:080";
const x32_81 = "scope-ring:x\\x32.js:081";
const x32_82 = "value-chip:x\\x32.js:082";
const x32_83 = "strip-gate:x\\x32.js:083";
const x32_84 = "bucket-row:x\\x32.js:084";
const x32_85 = "code-pane:x\\x32.js:085";
const x32_86 = "entry-cell:x\\x32.js:086";
const x32_87 = "frame-dot:x\\x32.js:087";
const x32_88 = "prop-card:x\\x32.js:088";
const x32_89 = "scope-ring:x\\x32.js:089";
const x32_90 = "value-chip:x\\x32.js:090";
const x32_91 = "strip-gate:x\\x32.js:091";
const x32_92 = "bucket-row:x\\x32.js:092";
const x32_93 = "code-pane:x\\x32.js:093";
const x32_94 = "entry-cell:x\\x32.js:094";
const x32_95 = "frame-dot:x\\x32.js:095";
const x32_96 = "prop-card:x\\x32.js:096";
const x32_97 = "scope-ring:x\\x32.js:097";
const x32_98 = "value-chip:x\\x32.js:098";
const x32_99 = "strip-gate:x\\x32.js:099";
const x32_100 = "bucket-row:x\\x32.js:100";
const x32_101 = "code-pane:x\\x32.js:101";
const x32_102 = "entry-cell:x\\x32.js:102";
const x32_103 = "frame-dot:x\\x32.js:103";
const x32_104 = "prop-card:x\\x32.js:104";
const x32_105 = "scope-ring:x\\x32.js:105";
const x32_106 = "value-chip:x\\x32.js:106";
const x32_107 = "strip-gate:x\\x32.js:107";
const x32_108 = "bucket-row:x\\x32.js:108";
const x32_109 = "code-pane:x\\x32.js:109";
const x32_110 = "entry-cell:x\\x32.js:110";
const x32_111 = "frame-dot:x\\x32.js:111";
const x32_112 = "prop-card:x\\x32.js:112";
const x32_113 = "scope-ring:x\\x32.js:113";
const x32_114 = "value-chip:x\\x32.js:114";
const x32_115 = "strip-gate:x\\x32.js:115";
const x32_116 = "bucket-row:x\\x32.js:116";
const x32_117 = "code-pane:x\\x32.js:117";
const x32_118 = "entry-cell:x\\x32.js:118";
const x32_119 = "frame-dot:x\\x32.js:119";
const x32_120 = "prop-card:x\\x32.js:120";
const x32_121 = "scope-ring:x\\x32.js:121";
const x32_122 = "value-chip:x\\x32.js:122";
const x32_123 = "strip-gate:x\\x32.js:123";
const x32_124 = "bucket-row:x\\x32.js:124";
const x32_125 = "code-pane:x\\x32.js:125";
const x32_126 = "entry-cell:x\\x32.js:126";
const x32_127 = "frame-dot:x\\x32.js:127";
const x32_128 = "prop-card:x\\x32.js:128";
const x32_129 = "scope-ring:x\\x32.js:129";
const x32_130 = "value-chip:x\\x32.js:130";
const x32_131 = "strip-gate:x\\x32.js:131";
const x32_132 = "bucket-row:x\\x32.js:132";
const x32_133 = "code-pane:x\\x32.js:133";
const x32_134 = "entry-cell:x\\x32.js:134";
const x32_135 = "frame-dot:x\\x32.js:135";
const x32_136 = "prop-card:x\\x32.js:136";
const x32_137 = "scope-ring:x\\x32.js:137";
const x32_138 = "value-chip:x\\x32.js:138";
const x32_139 = "strip-gate:x\\x32.js:139";
const x32_140 = "bucket-row:x\\x32.js:140";
const x32_141 = "code-pane:x\\x32.js:141";
const x32_142 = "entry-cell:x\\x32.js:142";
const x32_143 = "frame-dot:x\\x32.js:143";
const x32_144 = "prop-card:x\\x32.js:144";
const x32_145 = "scope-ring:x\\x32.js:145";
const x32_146 = "value-chip:x\\x32.js:146";
