import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 25,
  salt: 'p:0p:band',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 5,
  mask: 2323661633
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag25@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
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
const x25_0 = "prop-card:x\\x25.js:000";
const x25_1 = "scope-ring:x\\x25.js:001";
const x25_2 = "value-chip:x\\x25.js:002";
const x25_3 = "strip-gate:x\\x25.js:003";
const x25_4 = "bucket-row:x\\x25.js:004";
const x25_5 = "code-pane:x\\x25.js:005";
const x25_6 = "entry-cell:x\\x25.js:006";
const x25_7 = "frame-dot:x\\x25.js:007";
const x25_8 = "prop-card:x\\x25.js:008";
const x25_9 = "scope-ring:x\\x25.js:009";
const x25_10 = "value-chip:x\\x25.js:010";
const x25_11 = "strip-gate:x\\x25.js:011";
const x25_12 = "bucket-row:x\\x25.js:012";
const x25_13 = "code-pane:x\\x25.js:013";
const x25_14 = "entry-cell:x\\x25.js:014";
const x25_15 = "frame-dot:x\\x25.js:015";
const x25_16 = "prop-card:x\\x25.js:016";
const x25_17 = "scope-ring:x\\x25.js:017";
const x25_18 = "value-chip:x\\x25.js:018";
const x25_19 = "strip-gate:x\\x25.js:019";
const x25_20 = "bucket-row:x\\x25.js:020";
const x25_21 = "code-pane:x\\x25.js:021";
const x25_22 = "entry-cell:x\\x25.js:022";
const x25_23 = "frame-dot:x\\x25.js:023";
const x25_24 = "prop-card:x\\x25.js:024";
const x25_25 = "scope-ring:x\\x25.js:025";
const x25_26 = "value-chip:x\\x25.js:026";
const x25_27 = "strip-gate:x\\x25.js:027";
const x25_28 = "bucket-row:x\\x25.js:028";
const x25_29 = "code-pane:x\\x25.js:029";
const x25_30 = "entry-cell:x\\x25.js:030";
const x25_31 = "frame-dot:x\\x25.js:031";
const x25_32 = "prop-card:x\\x25.js:032";
const x25_33 = "scope-ring:x\\x25.js:033";
const x25_34 = "value-chip:x\\x25.js:034";
const x25_35 = "strip-gate:x\\x25.js:035";
const x25_36 = "bucket-row:x\\x25.js:036";
const x25_37 = "code-pane:x\\x25.js:037";
const x25_38 = "entry-cell:x\\x25.js:038";
const x25_39 = "frame-dot:x\\x25.js:039";
const x25_40 = "prop-card:x\\x25.js:040";
const x25_41 = "scope-ring:x\\x25.js:041";
const x25_42 = "value-chip:x\\x25.js:042";
const x25_43 = "strip-gate:x\\x25.js:043";
const x25_44 = "bucket-row:x\\x25.js:044";
const x25_45 = "code-pane:x\\x25.js:045";
const x25_46 = "entry-cell:x\\x25.js:046";
const x25_47 = "frame-dot:x\\x25.js:047";
const x25_48 = "prop-card:x\\x25.js:048";
const x25_49 = "scope-ring:x\\x25.js:049";
const x25_50 = "value-chip:x\\x25.js:050";
const x25_51 = "strip-gate:x\\x25.js:051";
const x25_52 = "bucket-row:x\\x25.js:052";
const x25_53 = "code-pane:x\\x25.js:053";
const x25_54 = "entry-cell:x\\x25.js:054";
const x25_55 = "frame-dot:x\\x25.js:055";
const x25_56 = "prop-card:x\\x25.js:056";
const x25_57 = "scope-ring:x\\x25.js:057";
const x25_58 = "value-chip:x\\x25.js:058";
const x25_59 = "strip-gate:x\\x25.js:059";
const x25_60 = "bucket-row:x\\x25.js:060";
const x25_61 = "code-pane:x\\x25.js:061";
const x25_62 = "entry-cell:x\\x25.js:062";
const x25_63 = "frame-dot:x\\x25.js:063";
const x25_64 = "prop-card:x\\x25.js:064";
const x25_65 = "scope-ring:x\\x25.js:065";
const x25_66 = "value-chip:x\\x25.js:066";
const x25_67 = "strip-gate:x\\x25.js:067";
const x25_68 = "bucket-row:x\\x25.js:068";
const x25_69 = "code-pane:x\\x25.js:069";
const x25_70 = "entry-cell:x\\x25.js:070";
const x25_71 = "frame-dot:x\\x25.js:071";
const x25_72 = "prop-card:x\\x25.js:072";
const x25_73 = "scope-ring:x\\x25.js:073";
const x25_74 = "value-chip:x\\x25.js:074";
const x25_75 = "strip-gate:x\\x25.js:075";
const x25_76 = "bucket-row:x\\x25.js:076";
const x25_77 = "code-pane:x\\x25.js:077";
const x25_78 = "entry-cell:x\\x25.js:078";
const x25_79 = "frame-dot:x\\x25.js:079";
const x25_80 = "prop-card:x\\x25.js:080";
const x25_81 = "scope-ring:x\\x25.js:081";
const x25_82 = "value-chip:x\\x25.js:082";
const x25_83 = "strip-gate:x\\x25.js:083";
const x25_84 = "bucket-row:x\\x25.js:084";
const x25_85 = "code-pane:x\\x25.js:085";
const x25_86 = "entry-cell:x\\x25.js:086";
const x25_87 = "frame-dot:x\\x25.js:087";
const x25_88 = "prop-card:x\\x25.js:088";
const x25_89 = "scope-ring:x\\x25.js:089";
const x25_90 = "value-chip:x\\x25.js:090";
const x25_91 = "strip-gate:x\\x25.js:091";
const x25_92 = "bucket-row:x\\x25.js:092";
const x25_93 = "code-pane:x\\x25.js:093";
const x25_94 = "entry-cell:x\\x25.js:094";
const x25_95 = "frame-dot:x\\x25.js:095";
const x25_96 = "prop-card:x\\x25.js:096";
const x25_97 = "scope-ring:x\\x25.js:097";
const x25_98 = "value-chip:x\\x25.js:098";
const x25_99 = "strip-gate:x\\x25.js:099";
const x25_100 = "bucket-row:x\\x25.js:100";
const x25_101 = "code-pane:x\\x25.js:101";
const x25_102 = "entry-cell:x\\x25.js:102";
const x25_103 = "frame-dot:x\\x25.js:103";
const x25_104 = "prop-card:x\\x25.js:104";
const x25_105 = "scope-ring:x\\x25.js:105";
const x25_106 = "value-chip:x\\x25.js:106";
const x25_107 = "strip-gate:x\\x25.js:107";
const x25_108 = "bucket-row:x\\x25.js:108";
const x25_109 = "code-pane:x\\x25.js:109";
const x25_110 = "entry-cell:x\\x25.js:110";
const x25_111 = "frame-dot:x\\x25.js:111";
const x25_112 = "prop-card:x\\x25.js:112";
const x25_113 = "scope-ring:x\\x25.js:113";
const x25_114 = "value-chip:x\\x25.js:114";
const x25_115 = "strip-gate:x\\x25.js:115";
const x25_116 = "bucket-row:x\\x25.js:116";
const x25_117 = "code-pane:x\\x25.js:117";
const x25_118 = "entry-cell:x\\x25.js:118";
const x25_119 = "frame-dot:x\\x25.js:119";
const x25_120 = "prop-card:x\\x25.js:120";
const x25_121 = "scope-ring:x\\x25.js:121";
const x25_122 = "value-chip:x\\x25.js:122";
const x25_123 = "strip-gate:x\\x25.js:123";
const x25_124 = "bucket-row:x\\x25.js:124";
const x25_125 = "code-pane:x\\x25.js:125";
const x25_126 = "entry-cell:x\\x25.js:126";
const x25_127 = "frame-dot:x\\x25.js:127";
const x25_128 = "prop-card:x\\x25.js:128";
const x25_129 = "scope-ring:x\\x25.js:129";
const x25_130 = "value-chip:x\\x25.js:130";
const x25_131 = "strip-gate:x\\x25.js:131";
const x25_132 = "bucket-row:x\\x25.js:132";
const x25_133 = "code-pane:x\\x25.js:133";
const x25_134 = "entry-cell:x\\x25.js:134";
const x25_135 = "frame-dot:x\\x25.js:135";
const x25_136 = "prop-card:x\\x25.js:136";
const x25_137 = "scope-ring:x\\x25.js:137";
const x25_138 = "value-chip:x\\x25.js:138";
const x25_139 = "strip-gate:x\\x25.js:139";
const x25_140 = "bucket-row:x\\x25.js:140";
const x25_141 = "code-pane:x\\x25.js:141";
const x25_142 = "entry-cell:x\\x25.js:142";
const x25_143 = "frame-dot:x\\x25.js:143";
const x25_144 = "prop-card:x\\x25.js:144";
const x25_145 = "scope-ring:x\\x25.js:145";
const x25_146 = "value-chip:x\\x25.js:146";
