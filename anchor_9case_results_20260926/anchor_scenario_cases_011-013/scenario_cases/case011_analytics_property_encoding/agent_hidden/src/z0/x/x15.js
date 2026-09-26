import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 15,
  salt: 'p:0f:band',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2063',
  shift: 11,
  mask: 1549107799
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band15@props.dev', y: 'shadow', n: 16 },
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
const x15_0 = "prop-card:x\\x15.js:000";
const x15_1 = "scope-ring:x\\x15.js:001";
const x15_2 = "value-chip:x\\x15.js:002";
const x15_3 = "strip-gate:x\\x15.js:003";
const x15_4 = "bucket-row:x\\x15.js:004";
const x15_5 = "code-pane:x\\x15.js:005";
const x15_6 = "entry-cell:x\\x15.js:006";
const x15_7 = "frame-dot:x\\x15.js:007";
const x15_8 = "prop-card:x\\x15.js:008";
const x15_9 = "scope-ring:x\\x15.js:009";
const x15_10 = "value-chip:x\\x15.js:010";
const x15_11 = "strip-gate:x\\x15.js:011";
const x15_12 = "bucket-row:x\\x15.js:012";
const x15_13 = "code-pane:x\\x15.js:013";
const x15_14 = "entry-cell:x\\x15.js:014";
const x15_15 = "frame-dot:x\\x15.js:015";
const x15_16 = "prop-card:x\\x15.js:016";
const x15_17 = "scope-ring:x\\x15.js:017";
const x15_18 = "value-chip:x\\x15.js:018";
const x15_19 = "strip-gate:x\\x15.js:019";
const x15_20 = "bucket-row:x\\x15.js:020";
const x15_21 = "code-pane:x\\x15.js:021";
const x15_22 = "entry-cell:x\\x15.js:022";
const x15_23 = "frame-dot:x\\x15.js:023";
const x15_24 = "prop-card:x\\x15.js:024";
const x15_25 = "scope-ring:x\\x15.js:025";
const x15_26 = "value-chip:x\\x15.js:026";
const x15_27 = "strip-gate:x\\x15.js:027";
const x15_28 = "bucket-row:x\\x15.js:028";
const x15_29 = "code-pane:x\\x15.js:029";
const x15_30 = "entry-cell:x\\x15.js:030";
const x15_31 = "frame-dot:x\\x15.js:031";
const x15_32 = "prop-card:x\\x15.js:032";
const x15_33 = "scope-ring:x\\x15.js:033";
const x15_34 = "value-chip:x\\x15.js:034";
const x15_35 = "strip-gate:x\\x15.js:035";
const x15_36 = "bucket-row:x\\x15.js:036";
const x15_37 = "code-pane:x\\x15.js:037";
const x15_38 = "entry-cell:x\\x15.js:038";
const x15_39 = "frame-dot:x\\x15.js:039";
const x15_40 = "prop-card:x\\x15.js:040";
const x15_41 = "scope-ring:x\\x15.js:041";
const x15_42 = "value-chip:x\\x15.js:042";
const x15_43 = "strip-gate:x\\x15.js:043";
const x15_44 = "bucket-row:x\\x15.js:044";
const x15_45 = "code-pane:x\\x15.js:045";
const x15_46 = "entry-cell:x\\x15.js:046";
const x15_47 = "frame-dot:x\\x15.js:047";
const x15_48 = "prop-card:x\\x15.js:048";
const x15_49 = "scope-ring:x\\x15.js:049";
const x15_50 = "value-chip:x\\x15.js:050";
const x15_51 = "strip-gate:x\\x15.js:051";
const x15_52 = "bucket-row:x\\x15.js:052";
const x15_53 = "code-pane:x\\x15.js:053";
const x15_54 = "entry-cell:x\\x15.js:054";
const x15_55 = "frame-dot:x\\x15.js:055";
const x15_56 = "prop-card:x\\x15.js:056";
const x15_57 = "scope-ring:x\\x15.js:057";
const x15_58 = "value-chip:x\\x15.js:058";
const x15_59 = "strip-gate:x\\x15.js:059";
const x15_60 = "bucket-row:x\\x15.js:060";
const x15_61 = "code-pane:x\\x15.js:061";
const x15_62 = "entry-cell:x\\x15.js:062";
const x15_63 = "frame-dot:x\\x15.js:063";
const x15_64 = "prop-card:x\\x15.js:064";
const x15_65 = "scope-ring:x\\x15.js:065";
const x15_66 = "value-chip:x\\x15.js:066";
const x15_67 = "strip-gate:x\\x15.js:067";
const x15_68 = "bucket-row:x\\x15.js:068";
const x15_69 = "code-pane:x\\x15.js:069";
const x15_70 = "entry-cell:x\\x15.js:070";
const x15_71 = "frame-dot:x\\x15.js:071";
const x15_72 = "prop-card:x\\x15.js:072";
const x15_73 = "scope-ring:x\\x15.js:073";
const x15_74 = "value-chip:x\\x15.js:074";
const x15_75 = "strip-gate:x\\x15.js:075";
const x15_76 = "bucket-row:x\\x15.js:076";
const x15_77 = "code-pane:x\\x15.js:077";
const x15_78 = "entry-cell:x\\x15.js:078";
const x15_79 = "frame-dot:x\\x15.js:079";
const x15_80 = "prop-card:x\\x15.js:080";
const x15_81 = "scope-ring:x\\x15.js:081";
const x15_82 = "value-chip:x\\x15.js:082";
const x15_83 = "strip-gate:x\\x15.js:083";
const x15_84 = "bucket-row:x\\x15.js:084";
const x15_85 = "code-pane:x\\x15.js:085";
const x15_86 = "entry-cell:x\\x15.js:086";
const x15_87 = "frame-dot:x\\x15.js:087";
const x15_88 = "prop-card:x\\x15.js:088";
const x15_89 = "scope-ring:x\\x15.js:089";
const x15_90 = "value-chip:x\\x15.js:090";
const x15_91 = "strip-gate:x\\x15.js:091";
const x15_92 = "bucket-row:x\\x15.js:092";
const x15_93 = "code-pane:x\\x15.js:093";
const x15_94 = "entry-cell:x\\x15.js:094";
const x15_95 = "frame-dot:x\\x15.js:095";
const x15_96 = "prop-card:x\\x15.js:096";
const x15_97 = "scope-ring:x\\x15.js:097";
const x15_98 = "value-chip:x\\x15.js:098";
const x15_99 = "strip-gate:x\\x15.js:099";
const x15_100 = "bucket-row:x\\x15.js:100";
const x15_101 = "code-pane:x\\x15.js:101";
const x15_102 = "entry-cell:x\\x15.js:102";
const x15_103 = "frame-dot:x\\x15.js:103";
const x15_104 = "prop-card:x\\x15.js:104";
const x15_105 = "scope-ring:x\\x15.js:105";
const x15_106 = "value-chip:x\\x15.js:106";
const x15_107 = "strip-gate:x\\x15.js:107";
const x15_108 = "bucket-row:x\\x15.js:108";
const x15_109 = "code-pane:x\\x15.js:109";
const x15_110 = "entry-cell:x\\x15.js:110";
const x15_111 = "frame-dot:x\\x15.js:111";
const x15_112 = "prop-card:x\\x15.js:112";
const x15_113 = "scope-ring:x\\x15.js:113";
const x15_114 = "value-chip:x\\x15.js:114";
const x15_115 = "strip-gate:x\\x15.js:115";
const x15_116 = "bucket-row:x\\x15.js:116";
const x15_117 = "code-pane:x\\x15.js:117";
const x15_118 = "entry-cell:x\\x15.js:118";
const x15_119 = "frame-dot:x\\x15.js:119";
const x15_120 = "prop-card:x\\x15.js:120";
const x15_121 = "scope-ring:x\\x15.js:121";
const x15_122 = "value-chip:x\\x15.js:122";
const x15_123 = "strip-gate:x\\x15.js:123";
const x15_124 = "bucket-row:x\\x15.js:124";
const x15_125 = "code-pane:x\\x15.js:125";
const x15_126 = "entry-cell:x\\x15.js:126";
const x15_127 = "frame-dot:x\\x15.js:127";
const x15_128 = "prop-card:x\\x15.js:128";
const x15_129 = "scope-ring:x\\x15.js:129";
const x15_130 = "value-chip:x\\x15.js:130";
const x15_131 = "strip-gate:x\\x15.js:131";
const x15_132 = "bucket-row:x\\x15.js:132";
const x15_133 = "code-pane:x\\x15.js:133";
const x15_134 = "entry-cell:x\\x15.js:134";
const x15_135 = "frame-dot:x\\x15.js:135";
const x15_136 = "prop-card:x\\x15.js:136";
const x15_137 = "scope-ring:x\\x15.js:137";
const x15_138 = "value-chip:x\\x15.js:138";
const x15_139 = "strip-gate:x\\x15.js:139";
const x15_140 = "bucket-row:x\\x15.js:140";
const x15_141 = "code-pane:x\\x15.js:141";
const x15_142 = "entry-cell:x\\x15.js:142";
const x15_143 = "frame-dot:x\\x15.js:143";
const x15_144 = "prop-card:x\\x15.js:144";
const x15_145 = "scope-ring:x\\x15.js:145";
const x15_146 = "value-chip:x\\x15.js:146";
