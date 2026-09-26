import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 37,
  salt: 'p:11:band',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 9,
  mask: 4112119693
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag37@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '4', y: '4', n: 1 },
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
const x37_0 = "prop-card:x\\x37.js:000";
const x37_1 = "scope-ring:x\\x37.js:001";
const x37_2 = "value-chip:x\\x37.js:002";
const x37_3 = "strip-gate:x\\x37.js:003";
const x37_4 = "bucket-row:x\\x37.js:004";
const x37_5 = "code-pane:x\\x37.js:005";
const x37_6 = "entry-cell:x\\x37.js:006";
const x37_7 = "frame-dot:x\\x37.js:007";
const x37_8 = "prop-card:x\\x37.js:008";
const x37_9 = "scope-ring:x\\x37.js:009";
const x37_10 = "value-chip:x\\x37.js:010";
const x37_11 = "strip-gate:x\\x37.js:011";
const x37_12 = "bucket-row:x\\x37.js:012";
const x37_13 = "code-pane:x\\x37.js:013";
const x37_14 = "entry-cell:x\\x37.js:014";
const x37_15 = "frame-dot:x\\x37.js:015";
const x37_16 = "prop-card:x\\x37.js:016";
const x37_17 = "scope-ring:x\\x37.js:017";
const x37_18 = "value-chip:x\\x37.js:018";
const x37_19 = "strip-gate:x\\x37.js:019";
const x37_20 = "bucket-row:x\\x37.js:020";
const x37_21 = "code-pane:x\\x37.js:021";
const x37_22 = "entry-cell:x\\x37.js:022";
const x37_23 = "frame-dot:x\\x37.js:023";
const x37_24 = "prop-card:x\\x37.js:024";
const x37_25 = "scope-ring:x\\x37.js:025";
const x37_26 = "value-chip:x\\x37.js:026";
const x37_27 = "strip-gate:x\\x37.js:027";
const x37_28 = "bucket-row:x\\x37.js:028";
const x37_29 = "code-pane:x\\x37.js:029";
const x37_30 = "entry-cell:x\\x37.js:030";
const x37_31 = "frame-dot:x\\x37.js:031";
const x37_32 = "prop-card:x\\x37.js:032";
const x37_33 = "scope-ring:x\\x37.js:033";
const x37_34 = "value-chip:x\\x37.js:034";
const x37_35 = "strip-gate:x\\x37.js:035";
const x37_36 = "bucket-row:x\\x37.js:036";
const x37_37 = "code-pane:x\\x37.js:037";
const x37_38 = "entry-cell:x\\x37.js:038";
const x37_39 = "frame-dot:x\\x37.js:039";
const x37_40 = "prop-card:x\\x37.js:040";
const x37_41 = "scope-ring:x\\x37.js:041";
const x37_42 = "value-chip:x\\x37.js:042";
const x37_43 = "strip-gate:x\\x37.js:043";
const x37_44 = "bucket-row:x\\x37.js:044";
const x37_45 = "code-pane:x\\x37.js:045";
const x37_46 = "entry-cell:x\\x37.js:046";
const x37_47 = "frame-dot:x\\x37.js:047";
const x37_48 = "prop-card:x\\x37.js:048";
const x37_49 = "scope-ring:x\\x37.js:049";
const x37_50 = "value-chip:x\\x37.js:050";
const x37_51 = "strip-gate:x\\x37.js:051";
const x37_52 = "bucket-row:x\\x37.js:052";
const x37_53 = "code-pane:x\\x37.js:053";
const x37_54 = "entry-cell:x\\x37.js:054";
const x37_55 = "frame-dot:x\\x37.js:055";
const x37_56 = "prop-card:x\\x37.js:056";
const x37_57 = "scope-ring:x\\x37.js:057";
const x37_58 = "value-chip:x\\x37.js:058";
const x37_59 = "strip-gate:x\\x37.js:059";
const x37_60 = "bucket-row:x\\x37.js:060";
const x37_61 = "code-pane:x\\x37.js:061";
const x37_62 = "entry-cell:x\\x37.js:062";
const x37_63 = "frame-dot:x\\x37.js:063";
const x37_64 = "prop-card:x\\x37.js:064";
const x37_65 = "scope-ring:x\\x37.js:065";
const x37_66 = "value-chip:x\\x37.js:066";
const x37_67 = "strip-gate:x\\x37.js:067";
const x37_68 = "bucket-row:x\\x37.js:068";
const x37_69 = "code-pane:x\\x37.js:069";
const x37_70 = "entry-cell:x\\x37.js:070";
const x37_71 = "frame-dot:x\\x37.js:071";
const x37_72 = "prop-card:x\\x37.js:072";
const x37_73 = "scope-ring:x\\x37.js:073";
const x37_74 = "value-chip:x\\x37.js:074";
const x37_75 = "strip-gate:x\\x37.js:075";
const x37_76 = "bucket-row:x\\x37.js:076";
const x37_77 = "code-pane:x\\x37.js:077";
const x37_78 = "entry-cell:x\\x37.js:078";
const x37_79 = "frame-dot:x\\x37.js:079";
const x37_80 = "prop-card:x\\x37.js:080";
const x37_81 = "scope-ring:x\\x37.js:081";
const x37_82 = "value-chip:x\\x37.js:082";
const x37_83 = "strip-gate:x\\x37.js:083";
const x37_84 = "bucket-row:x\\x37.js:084";
const x37_85 = "code-pane:x\\x37.js:085";
const x37_86 = "entry-cell:x\\x37.js:086";
const x37_87 = "frame-dot:x\\x37.js:087";
const x37_88 = "prop-card:x\\x37.js:088";
const x37_89 = "scope-ring:x\\x37.js:089";
const x37_90 = "value-chip:x\\x37.js:090";
const x37_91 = "strip-gate:x\\x37.js:091";
const x37_92 = "bucket-row:x\\x37.js:092";
const x37_93 = "code-pane:x\\x37.js:093";
const x37_94 = "entry-cell:x\\x37.js:094";
const x37_95 = "frame-dot:x\\x37.js:095";
const x37_96 = "prop-card:x\\x37.js:096";
const x37_97 = "scope-ring:x\\x37.js:097";
const x37_98 = "value-chip:x\\x37.js:098";
const x37_99 = "strip-gate:x\\x37.js:099";
const x37_100 = "bucket-row:x\\x37.js:100";
const x37_101 = "code-pane:x\\x37.js:101";
const x37_102 = "entry-cell:x\\x37.js:102";
const x37_103 = "frame-dot:x\\x37.js:103";
const x37_104 = "prop-card:x\\x37.js:104";
const x37_105 = "scope-ring:x\\x37.js:105";
const x37_106 = "value-chip:x\\x37.js:106";
const x37_107 = "strip-gate:x\\x37.js:107";
const x37_108 = "bucket-row:x\\x37.js:108";
const x37_109 = "code-pane:x\\x37.js:109";
const x37_110 = "entry-cell:x\\x37.js:110";
const x37_111 = "frame-dot:x\\x37.js:111";
const x37_112 = "prop-card:x\\x37.js:112";
const x37_113 = "scope-ring:x\\x37.js:113";
const x37_114 = "value-chip:x\\x37.js:114";
const x37_115 = "strip-gate:x\\x37.js:115";
const x37_116 = "bucket-row:x\\x37.js:116";
const x37_117 = "code-pane:x\\x37.js:117";
const x37_118 = "entry-cell:x\\x37.js:118";
const x37_119 = "frame-dot:x\\x37.js:119";
const x37_120 = "prop-card:x\\x37.js:120";
const x37_121 = "scope-ring:x\\x37.js:121";
const x37_122 = "value-chip:x\\x37.js:122";
const x37_123 = "strip-gate:x\\x37.js:123";
const x37_124 = "bucket-row:x\\x37.js:124";
const x37_125 = "code-pane:x\\x37.js:125";
const x37_126 = "entry-cell:x\\x37.js:126";
const x37_127 = "frame-dot:x\\x37.js:127";
const x37_128 = "prop-card:x\\x37.js:128";
const x37_129 = "scope-ring:x\\x37.js:129";
const x37_130 = "value-chip:x\\x37.js:130";
const x37_131 = "strip-gate:x\\x37.js:131";
const x37_132 = "bucket-row:x\\x37.js:132";
const x37_133 = "code-pane:x\\x37.js:133";
const x37_134 = "entry-cell:x\\x37.js:134";
const x37_135 = "frame-dot:x\\x37.js:135";
const x37_136 = "prop-card:x\\x37.js:136";
const x37_137 = "scope-ring:x\\x37.js:137";
const x37_138 = "value-chip:x\\x37.js:138";
const x37_139 = "strip-gate:x\\x37.js:139";
const x37_140 = "bucket-row:x\\x37.js:140";
const x37_141 = "code-pane:x\\x37.js:141";
const x37_142 = "entry-cell:x\\x37.js:142";
const x37_143 = "frame-dot:x\\x37.js:143";
const x37_144 = "prop-card:x\\x37.js:144";
const x37_145 = "scope-ring:x\\x37.js:145";
const x37_146 = "value-chip:x\\x37.js:146";
