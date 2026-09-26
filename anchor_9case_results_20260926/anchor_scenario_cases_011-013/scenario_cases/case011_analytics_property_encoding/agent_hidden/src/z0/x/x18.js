import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 18,
  salt: 'p:0i:band',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 6,
  mask: 922480490
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band18@props.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
    { k: 'b', i: 3, v: 'b', y: 'b', n: 1 },
    { k: 'n', i: 4, v: 'n', y: 'n', n: 1 },
    { k: 'g', i: 5, v: 'g', y: 'g', n: 1 },
    { k: 'u', i: 6, v: 'u', y: 'u', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(2, 12) + '-' + (cfg.slot + 7).toString(36) + 'p';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(bandTuple(ctx), 'band', { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x18_0 = "prop-card:x\\x18.js:000";
const x18_1 = "scope-ring:x\\x18.js:001";
const x18_2 = "value-chip:x\\x18.js:002";
const x18_3 = "strip-gate:x\\x18.js:003";
const x18_4 = "bucket-row:x\\x18.js:004";
const x18_5 = "code-pane:x\\x18.js:005";
const x18_6 = "entry-cell:x\\x18.js:006";
const x18_7 = "frame-dot:x\\x18.js:007";
const x18_8 = "prop-card:x\\x18.js:008";
const x18_9 = "scope-ring:x\\x18.js:009";
const x18_10 = "value-chip:x\\x18.js:010";
const x18_11 = "strip-gate:x\\x18.js:011";
const x18_12 = "bucket-row:x\\x18.js:012";
const x18_13 = "code-pane:x\\x18.js:013";
const x18_14 = "entry-cell:x\\x18.js:014";
const x18_15 = "frame-dot:x\\x18.js:015";
const x18_16 = "prop-card:x\\x18.js:016";
const x18_17 = "scope-ring:x\\x18.js:017";
const x18_18 = "value-chip:x\\x18.js:018";
const x18_19 = "strip-gate:x\\x18.js:019";
const x18_20 = "bucket-row:x\\x18.js:020";
const x18_21 = "code-pane:x\\x18.js:021";
const x18_22 = "entry-cell:x\\x18.js:022";
const x18_23 = "frame-dot:x\\x18.js:023";
const x18_24 = "prop-card:x\\x18.js:024";
const x18_25 = "scope-ring:x\\x18.js:025";
const x18_26 = "value-chip:x\\x18.js:026";
const x18_27 = "strip-gate:x\\x18.js:027";
const x18_28 = "bucket-row:x\\x18.js:028";
const x18_29 = "code-pane:x\\x18.js:029";
const x18_30 = "entry-cell:x\\x18.js:030";
const x18_31 = "frame-dot:x\\x18.js:031";
const x18_32 = "prop-card:x\\x18.js:032";
const x18_33 = "scope-ring:x\\x18.js:033";
const x18_34 = "value-chip:x\\x18.js:034";
const x18_35 = "strip-gate:x\\x18.js:035";
const x18_36 = "bucket-row:x\\x18.js:036";
const x18_37 = "code-pane:x\\x18.js:037";
const x18_38 = "entry-cell:x\\x18.js:038";
const x18_39 = "frame-dot:x\\x18.js:039";
const x18_40 = "prop-card:x\\x18.js:040";
const x18_41 = "scope-ring:x\\x18.js:041";
const x18_42 = "value-chip:x\\x18.js:042";
const x18_43 = "strip-gate:x\\x18.js:043";
const x18_44 = "bucket-row:x\\x18.js:044";
const x18_45 = "code-pane:x\\x18.js:045";
const x18_46 = "entry-cell:x\\x18.js:046";
const x18_47 = "frame-dot:x\\x18.js:047";
const x18_48 = "prop-card:x\\x18.js:048";
const x18_49 = "scope-ring:x\\x18.js:049";
const x18_50 = "value-chip:x\\x18.js:050";
const x18_51 = "strip-gate:x\\x18.js:051";
const x18_52 = "bucket-row:x\\x18.js:052";
const x18_53 = "code-pane:x\\x18.js:053";
const x18_54 = "entry-cell:x\\x18.js:054";
const x18_55 = "frame-dot:x\\x18.js:055";
const x18_56 = "prop-card:x\\x18.js:056";
const x18_57 = "scope-ring:x\\x18.js:057";
const x18_58 = "value-chip:x\\x18.js:058";
const x18_59 = "strip-gate:x\\x18.js:059";
const x18_60 = "bucket-row:x\\x18.js:060";
const x18_61 = "code-pane:x\\x18.js:061";
const x18_62 = "entry-cell:x\\x18.js:062";
const x18_63 = "frame-dot:x\\x18.js:063";
const x18_64 = "prop-card:x\\x18.js:064";
const x18_65 = "scope-ring:x\\x18.js:065";
const x18_66 = "value-chip:x\\x18.js:066";
const x18_67 = "strip-gate:x\\x18.js:067";
const x18_68 = "bucket-row:x\\x18.js:068";
const x18_69 = "code-pane:x\\x18.js:069";
const x18_70 = "entry-cell:x\\x18.js:070";
const x18_71 = "frame-dot:x\\x18.js:071";
const x18_72 = "prop-card:x\\x18.js:072";
const x18_73 = "scope-ring:x\\x18.js:073";
const x18_74 = "value-chip:x\\x18.js:074";
const x18_75 = "strip-gate:x\\x18.js:075";
const x18_76 = "bucket-row:x\\x18.js:076";
const x18_77 = "code-pane:x\\x18.js:077";
const x18_78 = "entry-cell:x\\x18.js:078";
const x18_79 = "frame-dot:x\\x18.js:079";
const x18_80 = "prop-card:x\\x18.js:080";
const x18_81 = "scope-ring:x\\x18.js:081";
const x18_82 = "value-chip:x\\x18.js:082";
const x18_83 = "strip-gate:x\\x18.js:083";
const x18_84 = "bucket-row:x\\x18.js:084";
const x18_85 = "code-pane:x\\x18.js:085";
const x18_86 = "entry-cell:x\\x18.js:086";
const x18_87 = "frame-dot:x\\x18.js:087";
const x18_88 = "prop-card:x\\x18.js:088";
const x18_89 = "scope-ring:x\\x18.js:089";
const x18_90 = "value-chip:x\\x18.js:090";
const x18_91 = "strip-gate:x\\x18.js:091";
const x18_92 = "bucket-row:x\\x18.js:092";
const x18_93 = "code-pane:x\\x18.js:093";
const x18_94 = "entry-cell:x\\x18.js:094";
const x18_95 = "frame-dot:x\\x18.js:095";
const x18_96 = "prop-card:x\\x18.js:096";
const x18_97 = "scope-ring:x\\x18.js:097";
const x18_98 = "value-chip:x\\x18.js:098";
const x18_99 = "strip-gate:x\\x18.js:099";
const x18_100 = "bucket-row:x\\x18.js:100";
const x18_101 = "code-pane:x\\x18.js:101";
const x18_102 = "entry-cell:x\\x18.js:102";
const x18_103 = "frame-dot:x\\x18.js:103";
const x18_104 = "prop-card:x\\x18.js:104";
const x18_105 = "scope-ring:x\\x18.js:105";
const x18_106 = "value-chip:x\\x18.js:106";
const x18_107 = "strip-gate:x\\x18.js:107";
const x18_108 = "bucket-row:x\\x18.js:108";
const x18_109 = "code-pane:x\\x18.js:109";
const x18_110 = "entry-cell:x\\x18.js:110";
const x18_111 = "frame-dot:x\\x18.js:111";
const x18_112 = "prop-card:x\\x18.js:112";
const x18_113 = "scope-ring:x\\x18.js:113";
const x18_114 = "value-chip:x\\x18.js:114";
const x18_115 = "strip-gate:x\\x18.js:115";
const x18_116 = "bucket-row:x\\x18.js:116";
const x18_117 = "code-pane:x\\x18.js:117";
const x18_118 = "entry-cell:x\\x18.js:118";
const x18_119 = "frame-dot:x\\x18.js:119";
const x18_120 = "prop-card:x\\x18.js:120";
const x18_121 = "scope-ring:x\\x18.js:121";
const x18_122 = "value-chip:x\\x18.js:122";
const x18_123 = "strip-gate:x\\x18.js:123";
const x18_124 = "bucket-row:x\\x18.js:124";
const x18_125 = "code-pane:x\\x18.js:125";
const x18_126 = "entry-cell:x\\x18.js:126";
const x18_127 = "frame-dot:x\\x18.js:127";
const x18_128 = "prop-card:x\\x18.js:128";
const x18_129 = "scope-ring:x\\x18.js:129";
const x18_130 = "value-chip:x\\x18.js:130";
const x18_131 = "strip-gate:x\\x18.js:131";
const x18_132 = "bucket-row:x\\x18.js:132";
const x18_133 = "code-pane:x\\x18.js:133";
const x18_134 = "entry-cell:x\\x18.js:134";
const x18_135 = "frame-dot:x\\x18.js:135";
const x18_136 = "prop-card:x\\x18.js:136";
const x18_137 = "scope-ring:x\\x18.js:137";
const x18_138 = "value-chip:x\\x18.js:138";
const x18_139 = "strip-gate:x\\x18.js:139";
const x18_140 = "bucket-row:x\\x18.js:140";
const x18_141 = "code-pane:x\\x18.js:141";
const x18_142 = "entry-cell:x\\x18.js:142";
const x18_143 = "frame-dot:x\\x18.js:143";
const x18_144 = "prop-card:x\\x18.js:144";
const x18_145 = "scope-ring:x\\x18.js:145";
const x18_146 = "value-chip:x\\x18.js:146";
