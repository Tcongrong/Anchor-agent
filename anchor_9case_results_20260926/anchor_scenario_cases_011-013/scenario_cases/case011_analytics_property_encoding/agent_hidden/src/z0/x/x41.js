import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 41,
  salt: 'p:15:band',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2061',
  shift: 5,
  mask: 1844960849
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row41@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
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
const x41_0 = "prop-card:x\\x41.js:000";
const x41_1 = "scope-ring:x\\x41.js:001";
const x41_2 = "value-chip:x\\x41.js:002";
const x41_3 = "strip-gate:x\\x41.js:003";
const x41_4 = "bucket-row:x\\x41.js:004";
const x41_5 = "code-pane:x\\x41.js:005";
const x41_6 = "entry-cell:x\\x41.js:006";
const x41_7 = "frame-dot:x\\x41.js:007";
const x41_8 = "prop-card:x\\x41.js:008";
const x41_9 = "scope-ring:x\\x41.js:009";
const x41_10 = "value-chip:x\\x41.js:010";
const x41_11 = "strip-gate:x\\x41.js:011";
const x41_12 = "bucket-row:x\\x41.js:012";
const x41_13 = "code-pane:x\\x41.js:013";
const x41_14 = "entry-cell:x\\x41.js:014";
const x41_15 = "frame-dot:x\\x41.js:015";
const x41_16 = "prop-card:x\\x41.js:016";
const x41_17 = "scope-ring:x\\x41.js:017";
const x41_18 = "value-chip:x\\x41.js:018";
const x41_19 = "strip-gate:x\\x41.js:019";
const x41_20 = "bucket-row:x\\x41.js:020";
const x41_21 = "code-pane:x\\x41.js:021";
const x41_22 = "entry-cell:x\\x41.js:022";
const x41_23 = "frame-dot:x\\x41.js:023";
const x41_24 = "prop-card:x\\x41.js:024";
const x41_25 = "scope-ring:x\\x41.js:025";
const x41_26 = "value-chip:x\\x41.js:026";
const x41_27 = "strip-gate:x\\x41.js:027";
const x41_28 = "bucket-row:x\\x41.js:028";
const x41_29 = "code-pane:x\\x41.js:029";
const x41_30 = "entry-cell:x\\x41.js:030";
const x41_31 = "frame-dot:x\\x41.js:031";
const x41_32 = "prop-card:x\\x41.js:032";
const x41_33 = "scope-ring:x\\x41.js:033";
const x41_34 = "value-chip:x\\x41.js:034";
const x41_35 = "strip-gate:x\\x41.js:035";
const x41_36 = "bucket-row:x\\x41.js:036";
const x41_37 = "code-pane:x\\x41.js:037";
const x41_38 = "entry-cell:x\\x41.js:038";
const x41_39 = "frame-dot:x\\x41.js:039";
const x41_40 = "prop-card:x\\x41.js:040";
const x41_41 = "scope-ring:x\\x41.js:041";
const x41_42 = "value-chip:x\\x41.js:042";
const x41_43 = "strip-gate:x\\x41.js:043";
const x41_44 = "bucket-row:x\\x41.js:044";
const x41_45 = "code-pane:x\\x41.js:045";
const x41_46 = "entry-cell:x\\x41.js:046";
const x41_47 = "frame-dot:x\\x41.js:047";
const x41_48 = "prop-card:x\\x41.js:048";
const x41_49 = "scope-ring:x\\x41.js:049";
const x41_50 = "value-chip:x\\x41.js:050";
const x41_51 = "strip-gate:x\\x41.js:051";
const x41_52 = "bucket-row:x\\x41.js:052";
const x41_53 = "code-pane:x\\x41.js:053";
const x41_54 = "entry-cell:x\\x41.js:054";
const x41_55 = "frame-dot:x\\x41.js:055";
const x41_56 = "prop-card:x\\x41.js:056";
const x41_57 = "scope-ring:x\\x41.js:057";
const x41_58 = "value-chip:x\\x41.js:058";
const x41_59 = "strip-gate:x\\x41.js:059";
const x41_60 = "bucket-row:x\\x41.js:060";
const x41_61 = "code-pane:x\\x41.js:061";
const x41_62 = "entry-cell:x\\x41.js:062";
const x41_63 = "frame-dot:x\\x41.js:063";
const x41_64 = "prop-card:x\\x41.js:064";
const x41_65 = "scope-ring:x\\x41.js:065";
const x41_66 = "value-chip:x\\x41.js:066";
const x41_67 = "strip-gate:x\\x41.js:067";
const x41_68 = "bucket-row:x\\x41.js:068";
const x41_69 = "code-pane:x\\x41.js:069";
const x41_70 = "entry-cell:x\\x41.js:070";
const x41_71 = "frame-dot:x\\x41.js:071";
const x41_72 = "prop-card:x\\x41.js:072";
const x41_73 = "scope-ring:x\\x41.js:073";
const x41_74 = "value-chip:x\\x41.js:074";
const x41_75 = "strip-gate:x\\x41.js:075";
const x41_76 = "bucket-row:x\\x41.js:076";
const x41_77 = "code-pane:x\\x41.js:077";
const x41_78 = "entry-cell:x\\x41.js:078";
const x41_79 = "frame-dot:x\\x41.js:079";
const x41_80 = "prop-card:x\\x41.js:080";
const x41_81 = "scope-ring:x\\x41.js:081";
const x41_82 = "value-chip:x\\x41.js:082";
const x41_83 = "strip-gate:x\\x41.js:083";
const x41_84 = "bucket-row:x\\x41.js:084";
const x41_85 = "code-pane:x\\x41.js:085";
const x41_86 = "entry-cell:x\\x41.js:086";
const x41_87 = "frame-dot:x\\x41.js:087";
const x41_88 = "prop-card:x\\x41.js:088";
const x41_89 = "scope-ring:x\\x41.js:089";
const x41_90 = "value-chip:x\\x41.js:090";
const x41_91 = "strip-gate:x\\x41.js:091";
const x41_92 = "bucket-row:x\\x41.js:092";
const x41_93 = "code-pane:x\\x41.js:093";
const x41_94 = "entry-cell:x\\x41.js:094";
const x41_95 = "frame-dot:x\\x41.js:095";
const x41_96 = "prop-card:x\\x41.js:096";
const x41_97 = "scope-ring:x\\x41.js:097";
const x41_98 = "value-chip:x\\x41.js:098";
const x41_99 = "strip-gate:x\\x41.js:099";
const x41_100 = "bucket-row:x\\x41.js:100";
const x41_101 = "code-pane:x\\x41.js:101";
const x41_102 = "entry-cell:x\\x41.js:102";
const x41_103 = "frame-dot:x\\x41.js:103";
const x41_104 = "prop-card:x\\x41.js:104";
const x41_105 = "scope-ring:x\\x41.js:105";
const x41_106 = "value-chip:x\\x41.js:106";
const x41_107 = "strip-gate:x\\x41.js:107";
const x41_108 = "bucket-row:x\\x41.js:108";
const x41_109 = "code-pane:x\\x41.js:109";
const x41_110 = "entry-cell:x\\x41.js:110";
const x41_111 = "frame-dot:x\\x41.js:111";
const x41_112 = "prop-card:x\\x41.js:112";
const x41_113 = "scope-ring:x\\x41.js:113";
const x41_114 = "value-chip:x\\x41.js:114";
const x41_115 = "strip-gate:x\\x41.js:115";
const x41_116 = "bucket-row:x\\x41.js:116";
const x41_117 = "code-pane:x\\x41.js:117";
const x41_118 = "entry-cell:x\\x41.js:118";
const x41_119 = "frame-dot:x\\x41.js:119";
const x41_120 = "prop-card:x\\x41.js:120";
const x41_121 = "scope-ring:x\\x41.js:121";
const x41_122 = "value-chip:x\\x41.js:122";
const x41_123 = "strip-gate:x\\x41.js:123";
const x41_124 = "bucket-row:x\\x41.js:124";
const x41_125 = "code-pane:x\\x41.js:125";
const x41_126 = "entry-cell:x\\x41.js:126";
const x41_127 = "frame-dot:x\\x41.js:127";
const x41_128 = "prop-card:x\\x41.js:128";
const x41_129 = "scope-ring:x\\x41.js:129";
const x41_130 = "value-chip:x\\x41.js:130";
const x41_131 = "strip-gate:x\\x41.js:131";
const x41_132 = "bucket-row:x\\x41.js:132";
const x41_133 = "code-pane:x\\x41.js:133";
const x41_134 = "entry-cell:x\\x41.js:134";
const x41_135 = "frame-dot:x\\x41.js:135";
const x41_136 = "prop-card:x\\x41.js:136";
const x41_137 = "scope-ring:x\\x41.js:137";
const x41_138 = "value-chip:x\\x41.js:138";
const x41_139 = "strip-gate:x\\x41.js:139";
const x41_140 = "bucket-row:x\\x41.js:140";
const x41_141 = "code-pane:x\\x41.js:141";
const x41_142 = "entry-cell:x\\x41.js:142";
const x41_143 = "frame-dot:x\\x41.js:143";
const x41_144 = "prop-card:x\\x41.js:144";
const x41_145 = "scope-ring:x\\x41.js:145";
const x41_146 = "value-chip:x\\x41.js:146";
