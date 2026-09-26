import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 33,
  salt: 'p:0x:band',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2061',
  shift: 5,
  mask: 2084311241
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band33@props.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '0', y: '0', n: 1 },
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
const x33_0 = "prop-card:x\\x33.js:000";
const x33_1 = "scope-ring:x\\x33.js:001";
const x33_2 = "value-chip:x\\x33.js:002";
const x33_3 = "strip-gate:x\\x33.js:003";
const x33_4 = "bucket-row:x\\x33.js:004";
const x33_5 = "code-pane:x\\x33.js:005";
const x33_6 = "entry-cell:x\\x33.js:006";
const x33_7 = "frame-dot:x\\x33.js:007";
const x33_8 = "prop-card:x\\x33.js:008";
const x33_9 = "scope-ring:x\\x33.js:009";
const x33_10 = "value-chip:x\\x33.js:010";
const x33_11 = "strip-gate:x\\x33.js:011";
const x33_12 = "bucket-row:x\\x33.js:012";
const x33_13 = "code-pane:x\\x33.js:013";
const x33_14 = "entry-cell:x\\x33.js:014";
const x33_15 = "frame-dot:x\\x33.js:015";
const x33_16 = "prop-card:x\\x33.js:016";
const x33_17 = "scope-ring:x\\x33.js:017";
const x33_18 = "value-chip:x\\x33.js:018";
const x33_19 = "strip-gate:x\\x33.js:019";
const x33_20 = "bucket-row:x\\x33.js:020";
const x33_21 = "code-pane:x\\x33.js:021";
const x33_22 = "entry-cell:x\\x33.js:022";
const x33_23 = "frame-dot:x\\x33.js:023";
const x33_24 = "prop-card:x\\x33.js:024";
const x33_25 = "scope-ring:x\\x33.js:025";
const x33_26 = "value-chip:x\\x33.js:026";
const x33_27 = "strip-gate:x\\x33.js:027";
const x33_28 = "bucket-row:x\\x33.js:028";
const x33_29 = "code-pane:x\\x33.js:029";
const x33_30 = "entry-cell:x\\x33.js:030";
const x33_31 = "frame-dot:x\\x33.js:031";
const x33_32 = "prop-card:x\\x33.js:032";
const x33_33 = "scope-ring:x\\x33.js:033";
const x33_34 = "value-chip:x\\x33.js:034";
const x33_35 = "strip-gate:x\\x33.js:035";
const x33_36 = "bucket-row:x\\x33.js:036";
const x33_37 = "code-pane:x\\x33.js:037";
const x33_38 = "entry-cell:x\\x33.js:038";
const x33_39 = "frame-dot:x\\x33.js:039";
const x33_40 = "prop-card:x\\x33.js:040";
const x33_41 = "scope-ring:x\\x33.js:041";
const x33_42 = "value-chip:x\\x33.js:042";
const x33_43 = "strip-gate:x\\x33.js:043";
const x33_44 = "bucket-row:x\\x33.js:044";
const x33_45 = "code-pane:x\\x33.js:045";
const x33_46 = "entry-cell:x\\x33.js:046";
const x33_47 = "frame-dot:x\\x33.js:047";
const x33_48 = "prop-card:x\\x33.js:048";
const x33_49 = "scope-ring:x\\x33.js:049";
const x33_50 = "value-chip:x\\x33.js:050";
const x33_51 = "strip-gate:x\\x33.js:051";
const x33_52 = "bucket-row:x\\x33.js:052";
const x33_53 = "code-pane:x\\x33.js:053";
const x33_54 = "entry-cell:x\\x33.js:054";
const x33_55 = "frame-dot:x\\x33.js:055";
const x33_56 = "prop-card:x\\x33.js:056";
const x33_57 = "scope-ring:x\\x33.js:057";
const x33_58 = "value-chip:x\\x33.js:058";
const x33_59 = "strip-gate:x\\x33.js:059";
const x33_60 = "bucket-row:x\\x33.js:060";
const x33_61 = "code-pane:x\\x33.js:061";
const x33_62 = "entry-cell:x\\x33.js:062";
const x33_63 = "frame-dot:x\\x33.js:063";
const x33_64 = "prop-card:x\\x33.js:064";
const x33_65 = "scope-ring:x\\x33.js:065";
const x33_66 = "value-chip:x\\x33.js:066";
const x33_67 = "strip-gate:x\\x33.js:067";
const x33_68 = "bucket-row:x\\x33.js:068";
const x33_69 = "code-pane:x\\x33.js:069";
const x33_70 = "entry-cell:x\\x33.js:070";
const x33_71 = "frame-dot:x\\x33.js:071";
const x33_72 = "prop-card:x\\x33.js:072";
const x33_73 = "scope-ring:x\\x33.js:073";
const x33_74 = "value-chip:x\\x33.js:074";
const x33_75 = "strip-gate:x\\x33.js:075";
const x33_76 = "bucket-row:x\\x33.js:076";
const x33_77 = "code-pane:x\\x33.js:077";
const x33_78 = "entry-cell:x\\x33.js:078";
const x33_79 = "frame-dot:x\\x33.js:079";
const x33_80 = "prop-card:x\\x33.js:080";
const x33_81 = "scope-ring:x\\x33.js:081";
const x33_82 = "value-chip:x\\x33.js:082";
const x33_83 = "strip-gate:x\\x33.js:083";
const x33_84 = "bucket-row:x\\x33.js:084";
const x33_85 = "code-pane:x\\x33.js:085";
const x33_86 = "entry-cell:x\\x33.js:086";
const x33_87 = "frame-dot:x\\x33.js:087";
const x33_88 = "prop-card:x\\x33.js:088";
const x33_89 = "scope-ring:x\\x33.js:089";
const x33_90 = "value-chip:x\\x33.js:090";
const x33_91 = "strip-gate:x\\x33.js:091";
const x33_92 = "bucket-row:x\\x33.js:092";
const x33_93 = "code-pane:x\\x33.js:093";
const x33_94 = "entry-cell:x\\x33.js:094";
const x33_95 = "frame-dot:x\\x33.js:095";
const x33_96 = "prop-card:x\\x33.js:096";
const x33_97 = "scope-ring:x\\x33.js:097";
const x33_98 = "value-chip:x\\x33.js:098";
const x33_99 = "strip-gate:x\\x33.js:099";
const x33_100 = "bucket-row:x\\x33.js:100";
const x33_101 = "code-pane:x\\x33.js:101";
const x33_102 = "entry-cell:x\\x33.js:102";
const x33_103 = "frame-dot:x\\x33.js:103";
const x33_104 = "prop-card:x\\x33.js:104";
const x33_105 = "scope-ring:x\\x33.js:105";
const x33_106 = "value-chip:x\\x33.js:106";
const x33_107 = "strip-gate:x\\x33.js:107";
const x33_108 = "bucket-row:x\\x33.js:108";
const x33_109 = "code-pane:x\\x33.js:109";
const x33_110 = "entry-cell:x\\x33.js:110";
const x33_111 = "frame-dot:x\\x33.js:111";
const x33_112 = "prop-card:x\\x33.js:112";
const x33_113 = "scope-ring:x\\x33.js:113";
const x33_114 = "value-chip:x\\x33.js:114";
const x33_115 = "strip-gate:x\\x33.js:115";
const x33_116 = "bucket-row:x\\x33.js:116";
const x33_117 = "code-pane:x\\x33.js:117";
const x33_118 = "entry-cell:x\\x33.js:118";
const x33_119 = "frame-dot:x\\x33.js:119";
const x33_120 = "prop-card:x\\x33.js:120";
const x33_121 = "scope-ring:x\\x33.js:121";
const x33_122 = "value-chip:x\\x33.js:122";
const x33_123 = "strip-gate:x\\x33.js:123";
const x33_124 = "bucket-row:x\\x33.js:124";
const x33_125 = "code-pane:x\\x33.js:125";
const x33_126 = "entry-cell:x\\x33.js:126";
const x33_127 = "frame-dot:x\\x33.js:127";
const x33_128 = "prop-card:x\\x33.js:128";
const x33_129 = "scope-ring:x\\x33.js:129";
const x33_130 = "value-chip:x\\x33.js:130";
const x33_131 = "strip-gate:x\\x33.js:131";
const x33_132 = "bucket-row:x\\x33.js:132";
const x33_133 = "code-pane:x\\x33.js:133";
const x33_134 = "entry-cell:x\\x33.js:134";
const x33_135 = "frame-dot:x\\x33.js:135";
const x33_136 = "prop-card:x\\x33.js:136";
const x33_137 = "scope-ring:x\\x33.js:137";
const x33_138 = "value-chip:x\\x33.js:138";
const x33_139 = "strip-gate:x\\x33.js:139";
const x33_140 = "bucket-row:x\\x33.js:140";
const x33_141 = "code-pane:x\\x33.js:141";
const x33_142 = "entry-cell:x\\x33.js:142";
const x33_143 = "frame-dot:x\\x33.js:143";
const x33_144 = "prop-card:x\\x33.js:144";
const x33_145 = "scope-ring:x\\x33.js:145";
const x33_146 = "value-chip:x\\x33.js:146";
