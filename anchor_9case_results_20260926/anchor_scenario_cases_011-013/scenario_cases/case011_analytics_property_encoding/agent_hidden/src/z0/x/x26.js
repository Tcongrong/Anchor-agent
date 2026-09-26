import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 26,
  salt: 'p:0q:band',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2062',
  shift: 6,
  mask: 683130098
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row26@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x26_0 = "prop-card:x\\x26.js:000";
const x26_1 = "scope-ring:x\\x26.js:001";
const x26_2 = "value-chip:x\\x26.js:002";
const x26_3 = "strip-gate:x\\x26.js:003";
const x26_4 = "bucket-row:x\\x26.js:004";
const x26_5 = "code-pane:x\\x26.js:005";
const x26_6 = "entry-cell:x\\x26.js:006";
const x26_7 = "frame-dot:x\\x26.js:007";
const x26_8 = "prop-card:x\\x26.js:008";
const x26_9 = "scope-ring:x\\x26.js:009";
const x26_10 = "value-chip:x\\x26.js:010";
const x26_11 = "strip-gate:x\\x26.js:011";
const x26_12 = "bucket-row:x\\x26.js:012";
const x26_13 = "code-pane:x\\x26.js:013";
const x26_14 = "entry-cell:x\\x26.js:014";
const x26_15 = "frame-dot:x\\x26.js:015";
const x26_16 = "prop-card:x\\x26.js:016";
const x26_17 = "scope-ring:x\\x26.js:017";
const x26_18 = "value-chip:x\\x26.js:018";
const x26_19 = "strip-gate:x\\x26.js:019";
const x26_20 = "bucket-row:x\\x26.js:020";
const x26_21 = "code-pane:x\\x26.js:021";
const x26_22 = "entry-cell:x\\x26.js:022";
const x26_23 = "frame-dot:x\\x26.js:023";
const x26_24 = "prop-card:x\\x26.js:024";
const x26_25 = "scope-ring:x\\x26.js:025";
const x26_26 = "value-chip:x\\x26.js:026";
const x26_27 = "strip-gate:x\\x26.js:027";
const x26_28 = "bucket-row:x\\x26.js:028";
const x26_29 = "code-pane:x\\x26.js:029";
const x26_30 = "entry-cell:x\\x26.js:030";
const x26_31 = "frame-dot:x\\x26.js:031";
const x26_32 = "prop-card:x\\x26.js:032";
const x26_33 = "scope-ring:x\\x26.js:033";
const x26_34 = "value-chip:x\\x26.js:034";
const x26_35 = "strip-gate:x\\x26.js:035";
const x26_36 = "bucket-row:x\\x26.js:036";
const x26_37 = "code-pane:x\\x26.js:037";
const x26_38 = "entry-cell:x\\x26.js:038";
const x26_39 = "frame-dot:x\\x26.js:039";
const x26_40 = "prop-card:x\\x26.js:040";
const x26_41 = "scope-ring:x\\x26.js:041";
const x26_42 = "value-chip:x\\x26.js:042";
const x26_43 = "strip-gate:x\\x26.js:043";
const x26_44 = "bucket-row:x\\x26.js:044";
const x26_45 = "code-pane:x\\x26.js:045";
const x26_46 = "entry-cell:x\\x26.js:046";
const x26_47 = "frame-dot:x\\x26.js:047";
const x26_48 = "prop-card:x\\x26.js:048";
const x26_49 = "scope-ring:x\\x26.js:049";
const x26_50 = "value-chip:x\\x26.js:050";
const x26_51 = "strip-gate:x\\x26.js:051";
const x26_52 = "bucket-row:x\\x26.js:052";
const x26_53 = "code-pane:x\\x26.js:053";
const x26_54 = "entry-cell:x\\x26.js:054";
const x26_55 = "frame-dot:x\\x26.js:055";
const x26_56 = "prop-card:x\\x26.js:056";
const x26_57 = "scope-ring:x\\x26.js:057";
const x26_58 = "value-chip:x\\x26.js:058";
const x26_59 = "strip-gate:x\\x26.js:059";
const x26_60 = "bucket-row:x\\x26.js:060";
const x26_61 = "code-pane:x\\x26.js:061";
const x26_62 = "entry-cell:x\\x26.js:062";
const x26_63 = "frame-dot:x\\x26.js:063";
const x26_64 = "prop-card:x\\x26.js:064";
const x26_65 = "scope-ring:x\\x26.js:065";
const x26_66 = "value-chip:x\\x26.js:066";
const x26_67 = "strip-gate:x\\x26.js:067";
const x26_68 = "bucket-row:x\\x26.js:068";
const x26_69 = "code-pane:x\\x26.js:069";
const x26_70 = "entry-cell:x\\x26.js:070";
const x26_71 = "frame-dot:x\\x26.js:071";
const x26_72 = "prop-card:x\\x26.js:072";
const x26_73 = "scope-ring:x\\x26.js:073";
const x26_74 = "value-chip:x\\x26.js:074";
const x26_75 = "strip-gate:x\\x26.js:075";
const x26_76 = "bucket-row:x\\x26.js:076";
const x26_77 = "code-pane:x\\x26.js:077";
const x26_78 = "entry-cell:x\\x26.js:078";
const x26_79 = "frame-dot:x\\x26.js:079";
const x26_80 = "prop-card:x\\x26.js:080";
const x26_81 = "scope-ring:x\\x26.js:081";
const x26_82 = "value-chip:x\\x26.js:082";
const x26_83 = "strip-gate:x\\x26.js:083";
const x26_84 = "bucket-row:x\\x26.js:084";
const x26_85 = "code-pane:x\\x26.js:085";
const x26_86 = "entry-cell:x\\x26.js:086";
const x26_87 = "frame-dot:x\\x26.js:087";
const x26_88 = "prop-card:x\\x26.js:088";
const x26_89 = "scope-ring:x\\x26.js:089";
const x26_90 = "value-chip:x\\x26.js:090";
const x26_91 = "strip-gate:x\\x26.js:091";
const x26_92 = "bucket-row:x\\x26.js:092";
const x26_93 = "code-pane:x\\x26.js:093";
const x26_94 = "entry-cell:x\\x26.js:094";
const x26_95 = "frame-dot:x\\x26.js:095";
const x26_96 = "prop-card:x\\x26.js:096";
const x26_97 = "scope-ring:x\\x26.js:097";
const x26_98 = "value-chip:x\\x26.js:098";
const x26_99 = "strip-gate:x\\x26.js:099";
const x26_100 = "bucket-row:x\\x26.js:100";
const x26_101 = "code-pane:x\\x26.js:101";
const x26_102 = "entry-cell:x\\x26.js:102";
const x26_103 = "frame-dot:x\\x26.js:103";
const x26_104 = "prop-card:x\\x26.js:104";
const x26_105 = "scope-ring:x\\x26.js:105";
const x26_106 = "value-chip:x\\x26.js:106";
const x26_107 = "strip-gate:x\\x26.js:107";
const x26_108 = "bucket-row:x\\x26.js:108";
const x26_109 = "code-pane:x\\x26.js:109";
const x26_110 = "entry-cell:x\\x26.js:110";
const x26_111 = "frame-dot:x\\x26.js:111";
const x26_112 = "prop-card:x\\x26.js:112";
const x26_113 = "scope-ring:x\\x26.js:113";
const x26_114 = "value-chip:x\\x26.js:114";
const x26_115 = "strip-gate:x\\x26.js:115";
const x26_116 = "bucket-row:x\\x26.js:116";
const x26_117 = "code-pane:x\\x26.js:117";
const x26_118 = "entry-cell:x\\x26.js:118";
const x26_119 = "frame-dot:x\\x26.js:119";
const x26_120 = "prop-card:x\\x26.js:120";
const x26_121 = "scope-ring:x\\x26.js:121";
const x26_122 = "value-chip:x\\x26.js:122";
const x26_123 = "strip-gate:x\\x26.js:123";
const x26_124 = "bucket-row:x\\x26.js:124";
const x26_125 = "code-pane:x\\x26.js:125";
const x26_126 = "entry-cell:x\\x26.js:126";
const x26_127 = "frame-dot:x\\x26.js:127";
const x26_128 = "prop-card:x\\x26.js:128";
const x26_129 = "scope-ring:x\\x26.js:129";
const x26_130 = "value-chip:x\\x26.js:130";
const x26_131 = "strip-gate:x\\x26.js:131";
const x26_132 = "bucket-row:x\\x26.js:132";
const x26_133 = "code-pane:x\\x26.js:133";
const x26_134 = "entry-cell:x\\x26.js:134";
const x26_135 = "frame-dot:x\\x26.js:135";
const x26_136 = "prop-card:x\\x26.js:136";
const x26_137 = "scope-ring:x\\x26.js:137";
const x26_138 = "value-chip:x\\x26.js:138";
const x26_139 = "strip-gate:x\\x26.js:139";
const x26_140 = "bucket-row:x\\x26.js:140";
const x26_141 = "code-pane:x\\x26.js:141";
const x26_142 = "entry-cell:x\\x26.js:142";
const x26_143 = "frame-dot:x\\x26.js:143";
const x26_144 = "prop-card:x\\x26.js:144";
const x26_145 = "scope-ring:x\\x26.js:145";
const x26_146 = "value-chip:x\\x26.js:146";
