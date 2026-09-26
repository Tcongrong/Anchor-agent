import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 23,
  salt: 'p:0n:band',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 11,
  mask: 1309757407
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row23@props.dev', y: 'shadow', n: 15 },
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
const x23_0 = "prop-card:x\\x23.js:000";
const x23_1 = "scope-ring:x\\x23.js:001";
const x23_2 = "value-chip:x\\x23.js:002";
const x23_3 = "strip-gate:x\\x23.js:003";
const x23_4 = "bucket-row:x\\x23.js:004";
const x23_5 = "code-pane:x\\x23.js:005";
const x23_6 = "entry-cell:x\\x23.js:006";
const x23_7 = "frame-dot:x\\x23.js:007";
const x23_8 = "prop-card:x\\x23.js:008";
const x23_9 = "scope-ring:x\\x23.js:009";
const x23_10 = "value-chip:x\\x23.js:010";
const x23_11 = "strip-gate:x\\x23.js:011";
const x23_12 = "bucket-row:x\\x23.js:012";
const x23_13 = "code-pane:x\\x23.js:013";
const x23_14 = "entry-cell:x\\x23.js:014";
const x23_15 = "frame-dot:x\\x23.js:015";
const x23_16 = "prop-card:x\\x23.js:016";
const x23_17 = "scope-ring:x\\x23.js:017";
const x23_18 = "value-chip:x\\x23.js:018";
const x23_19 = "strip-gate:x\\x23.js:019";
const x23_20 = "bucket-row:x\\x23.js:020";
const x23_21 = "code-pane:x\\x23.js:021";
const x23_22 = "entry-cell:x\\x23.js:022";
const x23_23 = "frame-dot:x\\x23.js:023";
const x23_24 = "prop-card:x\\x23.js:024";
const x23_25 = "scope-ring:x\\x23.js:025";
const x23_26 = "value-chip:x\\x23.js:026";
const x23_27 = "strip-gate:x\\x23.js:027";
const x23_28 = "bucket-row:x\\x23.js:028";
const x23_29 = "code-pane:x\\x23.js:029";
const x23_30 = "entry-cell:x\\x23.js:030";
const x23_31 = "frame-dot:x\\x23.js:031";
const x23_32 = "prop-card:x\\x23.js:032";
const x23_33 = "scope-ring:x\\x23.js:033";
const x23_34 = "value-chip:x\\x23.js:034";
const x23_35 = "strip-gate:x\\x23.js:035";
const x23_36 = "bucket-row:x\\x23.js:036";
const x23_37 = "code-pane:x\\x23.js:037";
const x23_38 = "entry-cell:x\\x23.js:038";
const x23_39 = "frame-dot:x\\x23.js:039";
const x23_40 = "prop-card:x\\x23.js:040";
const x23_41 = "scope-ring:x\\x23.js:041";
const x23_42 = "value-chip:x\\x23.js:042";
const x23_43 = "strip-gate:x\\x23.js:043";
const x23_44 = "bucket-row:x\\x23.js:044";
const x23_45 = "code-pane:x\\x23.js:045";
const x23_46 = "entry-cell:x\\x23.js:046";
const x23_47 = "frame-dot:x\\x23.js:047";
const x23_48 = "prop-card:x\\x23.js:048";
const x23_49 = "scope-ring:x\\x23.js:049";
const x23_50 = "value-chip:x\\x23.js:050";
const x23_51 = "strip-gate:x\\x23.js:051";
const x23_52 = "bucket-row:x\\x23.js:052";
const x23_53 = "code-pane:x\\x23.js:053";
const x23_54 = "entry-cell:x\\x23.js:054";
const x23_55 = "frame-dot:x\\x23.js:055";
const x23_56 = "prop-card:x\\x23.js:056";
const x23_57 = "scope-ring:x\\x23.js:057";
const x23_58 = "value-chip:x\\x23.js:058";
const x23_59 = "strip-gate:x\\x23.js:059";
const x23_60 = "bucket-row:x\\x23.js:060";
const x23_61 = "code-pane:x\\x23.js:061";
const x23_62 = "entry-cell:x\\x23.js:062";
const x23_63 = "frame-dot:x\\x23.js:063";
const x23_64 = "prop-card:x\\x23.js:064";
const x23_65 = "scope-ring:x\\x23.js:065";
const x23_66 = "value-chip:x\\x23.js:066";
const x23_67 = "strip-gate:x\\x23.js:067";
const x23_68 = "bucket-row:x\\x23.js:068";
const x23_69 = "code-pane:x\\x23.js:069";
const x23_70 = "entry-cell:x\\x23.js:070";
const x23_71 = "frame-dot:x\\x23.js:071";
const x23_72 = "prop-card:x\\x23.js:072";
const x23_73 = "scope-ring:x\\x23.js:073";
const x23_74 = "value-chip:x\\x23.js:074";
const x23_75 = "strip-gate:x\\x23.js:075";
const x23_76 = "bucket-row:x\\x23.js:076";
const x23_77 = "code-pane:x\\x23.js:077";
const x23_78 = "entry-cell:x\\x23.js:078";
const x23_79 = "frame-dot:x\\x23.js:079";
const x23_80 = "prop-card:x\\x23.js:080";
const x23_81 = "scope-ring:x\\x23.js:081";
const x23_82 = "value-chip:x\\x23.js:082";
const x23_83 = "strip-gate:x\\x23.js:083";
const x23_84 = "bucket-row:x\\x23.js:084";
const x23_85 = "code-pane:x\\x23.js:085";
const x23_86 = "entry-cell:x\\x23.js:086";
const x23_87 = "frame-dot:x\\x23.js:087";
const x23_88 = "prop-card:x\\x23.js:088";
const x23_89 = "scope-ring:x\\x23.js:089";
const x23_90 = "value-chip:x\\x23.js:090";
const x23_91 = "strip-gate:x\\x23.js:091";
const x23_92 = "bucket-row:x\\x23.js:092";
const x23_93 = "code-pane:x\\x23.js:093";
const x23_94 = "entry-cell:x\\x23.js:094";
const x23_95 = "frame-dot:x\\x23.js:095";
const x23_96 = "prop-card:x\\x23.js:096";
const x23_97 = "scope-ring:x\\x23.js:097";
const x23_98 = "value-chip:x\\x23.js:098";
const x23_99 = "strip-gate:x\\x23.js:099";
const x23_100 = "bucket-row:x\\x23.js:100";
const x23_101 = "code-pane:x\\x23.js:101";
const x23_102 = "entry-cell:x\\x23.js:102";
const x23_103 = "frame-dot:x\\x23.js:103";
const x23_104 = "prop-card:x\\x23.js:104";
const x23_105 = "scope-ring:x\\x23.js:105";
const x23_106 = "value-chip:x\\x23.js:106";
const x23_107 = "strip-gate:x\\x23.js:107";
const x23_108 = "bucket-row:x\\x23.js:108";
const x23_109 = "code-pane:x\\x23.js:109";
const x23_110 = "entry-cell:x\\x23.js:110";
const x23_111 = "frame-dot:x\\x23.js:111";
const x23_112 = "prop-card:x\\x23.js:112";
const x23_113 = "scope-ring:x\\x23.js:113";
const x23_114 = "value-chip:x\\x23.js:114";
const x23_115 = "strip-gate:x\\x23.js:115";
const x23_116 = "bucket-row:x\\x23.js:116";
const x23_117 = "code-pane:x\\x23.js:117";
const x23_118 = "entry-cell:x\\x23.js:118";
const x23_119 = "frame-dot:x\\x23.js:119";
const x23_120 = "prop-card:x\\x23.js:120";
const x23_121 = "scope-ring:x\\x23.js:121";
const x23_122 = "value-chip:x\\x23.js:122";
const x23_123 = "strip-gate:x\\x23.js:123";
const x23_124 = "bucket-row:x\\x23.js:124";
const x23_125 = "code-pane:x\\x23.js:125";
const x23_126 = "entry-cell:x\\x23.js:126";
const x23_127 = "frame-dot:x\\x23.js:127";
const x23_128 = "prop-card:x\\x23.js:128";
const x23_129 = "scope-ring:x\\x23.js:129";
const x23_130 = "value-chip:x\\x23.js:130";
const x23_131 = "strip-gate:x\\x23.js:131";
const x23_132 = "bucket-row:x\\x23.js:132";
const x23_133 = "code-pane:x\\x23.js:133";
const x23_134 = "entry-cell:x\\x23.js:134";
const x23_135 = "frame-dot:x\\x23.js:135";
const x23_136 = "prop-card:x\\x23.js:136";
const x23_137 = "scope-ring:x\\x23.js:137";
const x23_138 = "value-chip:x\\x23.js:138";
const x23_139 = "strip-gate:x\\x23.js:139";
const x23_140 = "bucket-row:x\\x23.js:140";
const x23_141 = "code-pane:x\\x23.js:141";
const x23_142 = "entry-cell:x\\x23.js:142";
const x23_143 = "frame-dot:x\\x23.js:143";
const x23_144 = "prop-card:x\\x23.js:144";
const x23_145 = "scope-ring:x\\x23.js:145";
const x23_146 = "value-chip:x\\x23.js:146";
