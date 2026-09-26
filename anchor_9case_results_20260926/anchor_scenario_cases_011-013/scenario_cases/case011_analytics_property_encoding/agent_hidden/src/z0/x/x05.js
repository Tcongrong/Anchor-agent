import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 5,
  salt: 'p:05:band',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2061',
  shift: 9,
  mask: 774553965
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row5@props.dev', y: 'shadow', n: 14 },
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
const x05_0 = "prop-card:x\\x05.js:000";
const x05_1 = "scope-ring:x\\x05.js:001";
const x05_2 = "value-chip:x\\x05.js:002";
const x05_3 = "strip-gate:x\\x05.js:003";
const x05_4 = "bucket-row:x\\x05.js:004";
const x05_5 = "code-pane:x\\x05.js:005";
const x05_6 = "entry-cell:x\\x05.js:006";
const x05_7 = "frame-dot:x\\x05.js:007";
const x05_8 = "prop-card:x\\x05.js:008";
const x05_9 = "scope-ring:x\\x05.js:009";
const x05_10 = "value-chip:x\\x05.js:010";
const x05_11 = "strip-gate:x\\x05.js:011";
const x05_12 = "bucket-row:x\\x05.js:012";
const x05_13 = "code-pane:x\\x05.js:013";
const x05_14 = "entry-cell:x\\x05.js:014";
const x05_15 = "frame-dot:x\\x05.js:015";
const x05_16 = "prop-card:x\\x05.js:016";
const x05_17 = "scope-ring:x\\x05.js:017";
const x05_18 = "value-chip:x\\x05.js:018";
const x05_19 = "strip-gate:x\\x05.js:019";
const x05_20 = "bucket-row:x\\x05.js:020";
const x05_21 = "code-pane:x\\x05.js:021";
const x05_22 = "entry-cell:x\\x05.js:022";
const x05_23 = "frame-dot:x\\x05.js:023";
const x05_24 = "prop-card:x\\x05.js:024";
const x05_25 = "scope-ring:x\\x05.js:025";
const x05_26 = "value-chip:x\\x05.js:026";
const x05_27 = "strip-gate:x\\x05.js:027";
const x05_28 = "bucket-row:x\\x05.js:028";
const x05_29 = "code-pane:x\\x05.js:029";
const x05_30 = "entry-cell:x\\x05.js:030";
const x05_31 = "frame-dot:x\\x05.js:031";
const x05_32 = "prop-card:x\\x05.js:032";
const x05_33 = "scope-ring:x\\x05.js:033";
const x05_34 = "value-chip:x\\x05.js:034";
const x05_35 = "strip-gate:x\\x05.js:035";
const x05_36 = "bucket-row:x\\x05.js:036";
const x05_37 = "code-pane:x\\x05.js:037";
const x05_38 = "entry-cell:x\\x05.js:038";
const x05_39 = "frame-dot:x\\x05.js:039";
const x05_40 = "prop-card:x\\x05.js:040";
const x05_41 = "scope-ring:x\\x05.js:041";
const x05_42 = "value-chip:x\\x05.js:042";
const x05_43 = "strip-gate:x\\x05.js:043";
const x05_44 = "bucket-row:x\\x05.js:044";
const x05_45 = "code-pane:x\\x05.js:045";
const x05_46 = "entry-cell:x\\x05.js:046";
const x05_47 = "frame-dot:x\\x05.js:047";
const x05_48 = "prop-card:x\\x05.js:048";
const x05_49 = "scope-ring:x\\x05.js:049";
const x05_50 = "value-chip:x\\x05.js:050";
const x05_51 = "strip-gate:x\\x05.js:051";
const x05_52 = "bucket-row:x\\x05.js:052";
const x05_53 = "code-pane:x\\x05.js:053";
const x05_54 = "entry-cell:x\\x05.js:054";
const x05_55 = "frame-dot:x\\x05.js:055";
const x05_56 = "prop-card:x\\x05.js:056";
const x05_57 = "scope-ring:x\\x05.js:057";
const x05_58 = "value-chip:x\\x05.js:058";
const x05_59 = "strip-gate:x\\x05.js:059";
const x05_60 = "bucket-row:x\\x05.js:060";
const x05_61 = "code-pane:x\\x05.js:061";
const x05_62 = "entry-cell:x\\x05.js:062";
const x05_63 = "frame-dot:x\\x05.js:063";
const x05_64 = "prop-card:x\\x05.js:064";
const x05_65 = "scope-ring:x\\x05.js:065";
const x05_66 = "value-chip:x\\x05.js:066";
const x05_67 = "strip-gate:x\\x05.js:067";
const x05_68 = "bucket-row:x\\x05.js:068";
const x05_69 = "code-pane:x\\x05.js:069";
const x05_70 = "entry-cell:x\\x05.js:070";
const x05_71 = "frame-dot:x\\x05.js:071";
const x05_72 = "prop-card:x\\x05.js:072";
const x05_73 = "scope-ring:x\\x05.js:073";
const x05_74 = "value-chip:x\\x05.js:074";
const x05_75 = "strip-gate:x\\x05.js:075";
const x05_76 = "bucket-row:x\\x05.js:076";
const x05_77 = "code-pane:x\\x05.js:077";
const x05_78 = "entry-cell:x\\x05.js:078";
const x05_79 = "frame-dot:x\\x05.js:079";
const x05_80 = "prop-card:x\\x05.js:080";
const x05_81 = "scope-ring:x\\x05.js:081";
const x05_82 = "value-chip:x\\x05.js:082";
const x05_83 = "strip-gate:x\\x05.js:083";
const x05_84 = "bucket-row:x\\x05.js:084";
const x05_85 = "code-pane:x\\x05.js:085";
const x05_86 = "entry-cell:x\\x05.js:086";
const x05_87 = "frame-dot:x\\x05.js:087";
const x05_88 = "prop-card:x\\x05.js:088";
const x05_89 = "scope-ring:x\\x05.js:089";
const x05_90 = "value-chip:x\\x05.js:090";
const x05_91 = "strip-gate:x\\x05.js:091";
const x05_92 = "bucket-row:x\\x05.js:092";
const x05_93 = "code-pane:x\\x05.js:093";
const x05_94 = "entry-cell:x\\x05.js:094";
const x05_95 = "frame-dot:x\\x05.js:095";
const x05_96 = "prop-card:x\\x05.js:096";
const x05_97 = "scope-ring:x\\x05.js:097";
const x05_98 = "value-chip:x\\x05.js:098";
const x05_99 = "strip-gate:x\\x05.js:099";
const x05_100 = "bucket-row:x\\x05.js:100";
const x05_101 = "code-pane:x\\x05.js:101";
const x05_102 = "entry-cell:x\\x05.js:102";
const x05_103 = "frame-dot:x\\x05.js:103";
const x05_104 = "prop-card:x\\x05.js:104";
const x05_105 = "scope-ring:x\\x05.js:105";
const x05_106 = "value-chip:x\\x05.js:106";
const x05_107 = "strip-gate:x\\x05.js:107";
const x05_108 = "bucket-row:x\\x05.js:108";
const x05_109 = "code-pane:x\\x05.js:109";
const x05_110 = "entry-cell:x\\x05.js:110";
const x05_111 = "frame-dot:x\\x05.js:111";
const x05_112 = "prop-card:x\\x05.js:112";
const x05_113 = "scope-ring:x\\x05.js:113";
const x05_114 = "value-chip:x\\x05.js:114";
const x05_115 = "strip-gate:x\\x05.js:115";
const x05_116 = "bucket-row:x\\x05.js:116";
const x05_117 = "code-pane:x\\x05.js:117";
const x05_118 = "entry-cell:x\\x05.js:118";
const x05_119 = "frame-dot:x\\x05.js:119";
const x05_120 = "prop-card:x\\x05.js:120";
const x05_121 = "scope-ring:x\\x05.js:121";
const x05_122 = "value-chip:x\\x05.js:122";
const x05_123 = "strip-gate:x\\x05.js:123";
const x05_124 = "bucket-row:x\\x05.js:124";
const x05_125 = "code-pane:x\\x05.js:125";
const x05_126 = "entry-cell:x\\x05.js:126";
const x05_127 = "frame-dot:x\\x05.js:127";
const x05_128 = "prop-card:x\\x05.js:128";
const x05_129 = "scope-ring:x\\x05.js:129";
const x05_130 = "value-chip:x\\x05.js:130";
const x05_131 = "strip-gate:x\\x05.js:131";
const x05_132 = "bucket-row:x\\x05.js:132";
const x05_133 = "code-pane:x\\x05.js:133";
const x05_134 = "entry-cell:x\\x05.js:134";
const x05_135 = "frame-dot:x\\x05.js:135";
const x05_136 = "prop-card:x\\x05.js:136";
const x05_137 = "scope-ring:x\\x05.js:137";
const x05_138 = "value-chip:x\\x05.js:138";
const x05_139 = "strip-gate:x\\x05.js:139";
const x05_140 = "bucket-row:x\\x05.js:140";
const x05_141 = "code-pane:x\\x05.js:141";
const x05_142 = "entry-cell:x\\x05.js:142";
const x05_143 = "frame-dot:x\\x05.js:143";
const x05_144 = "prop-card:x\\x05.js:144";
const x05_145 = "scope-ring:x\\x05.js:145";
const x05_146 = "value-chip:x\\x05.js:146";
