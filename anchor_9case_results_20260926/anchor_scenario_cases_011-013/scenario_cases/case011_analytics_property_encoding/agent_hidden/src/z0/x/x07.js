import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 7,
  salt: 'p:07:band',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2063',
  shift: 11,
  mask: 1788458191
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag7@props.dev', y: 'shadow', n: 14 },
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
const x07_0 = "prop-card:x\\x07.js:000";
const x07_1 = "scope-ring:x\\x07.js:001";
const x07_2 = "value-chip:x\\x07.js:002";
const x07_3 = "strip-gate:x\\x07.js:003";
const x07_4 = "bucket-row:x\\x07.js:004";
const x07_5 = "code-pane:x\\x07.js:005";
const x07_6 = "entry-cell:x\\x07.js:006";
const x07_7 = "frame-dot:x\\x07.js:007";
const x07_8 = "prop-card:x\\x07.js:008";
const x07_9 = "scope-ring:x\\x07.js:009";
const x07_10 = "value-chip:x\\x07.js:010";
const x07_11 = "strip-gate:x\\x07.js:011";
const x07_12 = "bucket-row:x\\x07.js:012";
const x07_13 = "code-pane:x\\x07.js:013";
const x07_14 = "entry-cell:x\\x07.js:014";
const x07_15 = "frame-dot:x\\x07.js:015";
const x07_16 = "prop-card:x\\x07.js:016";
const x07_17 = "scope-ring:x\\x07.js:017";
const x07_18 = "value-chip:x\\x07.js:018";
const x07_19 = "strip-gate:x\\x07.js:019";
const x07_20 = "bucket-row:x\\x07.js:020";
const x07_21 = "code-pane:x\\x07.js:021";
const x07_22 = "entry-cell:x\\x07.js:022";
const x07_23 = "frame-dot:x\\x07.js:023";
const x07_24 = "prop-card:x\\x07.js:024";
const x07_25 = "scope-ring:x\\x07.js:025";
const x07_26 = "value-chip:x\\x07.js:026";
const x07_27 = "strip-gate:x\\x07.js:027";
const x07_28 = "bucket-row:x\\x07.js:028";
const x07_29 = "code-pane:x\\x07.js:029";
const x07_30 = "entry-cell:x\\x07.js:030";
const x07_31 = "frame-dot:x\\x07.js:031";
const x07_32 = "prop-card:x\\x07.js:032";
const x07_33 = "scope-ring:x\\x07.js:033";
const x07_34 = "value-chip:x\\x07.js:034";
const x07_35 = "strip-gate:x\\x07.js:035";
const x07_36 = "bucket-row:x\\x07.js:036";
const x07_37 = "code-pane:x\\x07.js:037";
const x07_38 = "entry-cell:x\\x07.js:038";
const x07_39 = "frame-dot:x\\x07.js:039";
const x07_40 = "prop-card:x\\x07.js:040";
const x07_41 = "scope-ring:x\\x07.js:041";
const x07_42 = "value-chip:x\\x07.js:042";
const x07_43 = "strip-gate:x\\x07.js:043";
const x07_44 = "bucket-row:x\\x07.js:044";
const x07_45 = "code-pane:x\\x07.js:045";
const x07_46 = "entry-cell:x\\x07.js:046";
const x07_47 = "frame-dot:x\\x07.js:047";
const x07_48 = "prop-card:x\\x07.js:048";
const x07_49 = "scope-ring:x\\x07.js:049";
const x07_50 = "value-chip:x\\x07.js:050";
const x07_51 = "strip-gate:x\\x07.js:051";
const x07_52 = "bucket-row:x\\x07.js:052";
const x07_53 = "code-pane:x\\x07.js:053";
const x07_54 = "entry-cell:x\\x07.js:054";
const x07_55 = "frame-dot:x\\x07.js:055";
const x07_56 = "prop-card:x\\x07.js:056";
const x07_57 = "scope-ring:x\\x07.js:057";
const x07_58 = "value-chip:x\\x07.js:058";
const x07_59 = "strip-gate:x\\x07.js:059";
const x07_60 = "bucket-row:x\\x07.js:060";
const x07_61 = "code-pane:x\\x07.js:061";
const x07_62 = "entry-cell:x\\x07.js:062";
const x07_63 = "frame-dot:x\\x07.js:063";
const x07_64 = "prop-card:x\\x07.js:064";
const x07_65 = "scope-ring:x\\x07.js:065";
const x07_66 = "value-chip:x\\x07.js:066";
const x07_67 = "strip-gate:x\\x07.js:067";
const x07_68 = "bucket-row:x\\x07.js:068";
const x07_69 = "code-pane:x\\x07.js:069";
const x07_70 = "entry-cell:x\\x07.js:070";
const x07_71 = "frame-dot:x\\x07.js:071";
const x07_72 = "prop-card:x\\x07.js:072";
const x07_73 = "scope-ring:x\\x07.js:073";
const x07_74 = "value-chip:x\\x07.js:074";
const x07_75 = "strip-gate:x\\x07.js:075";
const x07_76 = "bucket-row:x\\x07.js:076";
const x07_77 = "code-pane:x\\x07.js:077";
const x07_78 = "entry-cell:x\\x07.js:078";
const x07_79 = "frame-dot:x\\x07.js:079";
const x07_80 = "prop-card:x\\x07.js:080";
const x07_81 = "scope-ring:x\\x07.js:081";
const x07_82 = "value-chip:x\\x07.js:082";
const x07_83 = "strip-gate:x\\x07.js:083";
const x07_84 = "bucket-row:x\\x07.js:084";
const x07_85 = "code-pane:x\\x07.js:085";
const x07_86 = "entry-cell:x\\x07.js:086";
const x07_87 = "frame-dot:x\\x07.js:087";
const x07_88 = "prop-card:x\\x07.js:088";
const x07_89 = "scope-ring:x\\x07.js:089";
const x07_90 = "value-chip:x\\x07.js:090";
const x07_91 = "strip-gate:x\\x07.js:091";
const x07_92 = "bucket-row:x\\x07.js:092";
const x07_93 = "code-pane:x\\x07.js:093";
const x07_94 = "entry-cell:x\\x07.js:094";
const x07_95 = "frame-dot:x\\x07.js:095";
const x07_96 = "prop-card:x\\x07.js:096";
const x07_97 = "scope-ring:x\\x07.js:097";
const x07_98 = "value-chip:x\\x07.js:098";
const x07_99 = "strip-gate:x\\x07.js:099";
const x07_100 = "bucket-row:x\\x07.js:100";
const x07_101 = "code-pane:x\\x07.js:101";
const x07_102 = "entry-cell:x\\x07.js:102";
const x07_103 = "frame-dot:x\\x07.js:103";
const x07_104 = "prop-card:x\\x07.js:104";
const x07_105 = "scope-ring:x\\x07.js:105";
const x07_106 = "value-chip:x\\x07.js:106";
const x07_107 = "strip-gate:x\\x07.js:107";
const x07_108 = "bucket-row:x\\x07.js:108";
const x07_109 = "code-pane:x\\x07.js:109";
const x07_110 = "entry-cell:x\\x07.js:110";
const x07_111 = "frame-dot:x\\x07.js:111";
const x07_112 = "prop-card:x\\x07.js:112";
const x07_113 = "scope-ring:x\\x07.js:113";
const x07_114 = "value-chip:x\\x07.js:114";
const x07_115 = "strip-gate:x\\x07.js:115";
const x07_116 = "bucket-row:x\\x07.js:116";
const x07_117 = "code-pane:x\\x07.js:117";
const x07_118 = "entry-cell:x\\x07.js:118";
const x07_119 = "frame-dot:x\\x07.js:119";
const x07_120 = "prop-card:x\\x07.js:120";
const x07_121 = "scope-ring:x\\x07.js:121";
const x07_122 = "value-chip:x\\x07.js:122";
const x07_123 = "strip-gate:x\\x07.js:123";
const x07_124 = "bucket-row:x\\x07.js:124";
const x07_125 = "code-pane:x\\x07.js:125";
const x07_126 = "entry-cell:x\\x07.js:126";
const x07_127 = "frame-dot:x\\x07.js:127";
const x07_128 = "prop-card:x\\x07.js:128";
const x07_129 = "scope-ring:x\\x07.js:129";
const x07_130 = "value-chip:x\\x07.js:130";
const x07_131 = "strip-gate:x\\x07.js:131";
const x07_132 = "bucket-row:x\\x07.js:132";
const x07_133 = "code-pane:x\\x07.js:133";
const x07_134 = "entry-cell:x\\x07.js:134";
const x07_135 = "frame-dot:x\\x07.js:135";
const x07_136 = "prop-card:x\\x07.js:136";
const x07_137 = "scope-ring:x\\x07.js:137";
const x07_138 = "value-chip:x\\x07.js:138";
const x07_139 = "strip-gate:x\\x07.js:139";
const x07_140 = "bucket-row:x\\x07.js:140";
const x07_141 = "code-pane:x\\x07.js:141";
const x07_142 = "entry-cell:x\\x07.js:142";
const x07_143 = "frame-dot:x\\x07.js:143";
const x07_144 = "prop-card:x\\x07.js:144";
const x07_145 = "scope-ring:x\\x07.js:145";
const x07_146 = "value-chip:x\\x07.js:146";
