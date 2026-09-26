import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 1,
  salt: 'p:01:band',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2061',
  shift: 5,
  mask: 3041712809
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag1@props.dev', y: 'shadow', n: 14 },
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
const x01_0 = "prop-card:x\\x01.js:000";
const x01_1 = "scope-ring:x\\x01.js:001";
const x01_2 = "value-chip:x\\x01.js:002";
const x01_3 = "strip-gate:x\\x01.js:003";
const x01_4 = "bucket-row:x\\x01.js:004";
const x01_5 = "code-pane:x\\x01.js:005";
const x01_6 = "entry-cell:x\\x01.js:006";
const x01_7 = "frame-dot:x\\x01.js:007";
const x01_8 = "prop-card:x\\x01.js:008";
const x01_9 = "scope-ring:x\\x01.js:009";
const x01_10 = "value-chip:x\\x01.js:010";
const x01_11 = "strip-gate:x\\x01.js:011";
const x01_12 = "bucket-row:x\\x01.js:012";
const x01_13 = "code-pane:x\\x01.js:013";
const x01_14 = "entry-cell:x\\x01.js:014";
const x01_15 = "frame-dot:x\\x01.js:015";
const x01_16 = "prop-card:x\\x01.js:016";
const x01_17 = "scope-ring:x\\x01.js:017";
const x01_18 = "value-chip:x\\x01.js:018";
const x01_19 = "strip-gate:x\\x01.js:019";
const x01_20 = "bucket-row:x\\x01.js:020";
const x01_21 = "code-pane:x\\x01.js:021";
const x01_22 = "entry-cell:x\\x01.js:022";
const x01_23 = "frame-dot:x\\x01.js:023";
const x01_24 = "prop-card:x\\x01.js:024";
const x01_25 = "scope-ring:x\\x01.js:025";
const x01_26 = "value-chip:x\\x01.js:026";
const x01_27 = "strip-gate:x\\x01.js:027";
const x01_28 = "bucket-row:x\\x01.js:028";
const x01_29 = "code-pane:x\\x01.js:029";
const x01_30 = "entry-cell:x\\x01.js:030";
const x01_31 = "frame-dot:x\\x01.js:031";
const x01_32 = "prop-card:x\\x01.js:032";
const x01_33 = "scope-ring:x\\x01.js:033";
const x01_34 = "value-chip:x\\x01.js:034";
const x01_35 = "strip-gate:x\\x01.js:035";
const x01_36 = "bucket-row:x\\x01.js:036";
const x01_37 = "code-pane:x\\x01.js:037";
const x01_38 = "entry-cell:x\\x01.js:038";
const x01_39 = "frame-dot:x\\x01.js:039";
const x01_40 = "prop-card:x\\x01.js:040";
const x01_41 = "scope-ring:x\\x01.js:041";
const x01_42 = "value-chip:x\\x01.js:042";
const x01_43 = "strip-gate:x\\x01.js:043";
const x01_44 = "bucket-row:x\\x01.js:044";
const x01_45 = "code-pane:x\\x01.js:045";
const x01_46 = "entry-cell:x\\x01.js:046";
const x01_47 = "frame-dot:x\\x01.js:047";
const x01_48 = "prop-card:x\\x01.js:048";
const x01_49 = "scope-ring:x\\x01.js:049";
const x01_50 = "value-chip:x\\x01.js:050";
const x01_51 = "strip-gate:x\\x01.js:051";
const x01_52 = "bucket-row:x\\x01.js:052";
const x01_53 = "code-pane:x\\x01.js:053";
const x01_54 = "entry-cell:x\\x01.js:054";
const x01_55 = "frame-dot:x\\x01.js:055";
const x01_56 = "prop-card:x\\x01.js:056";
const x01_57 = "scope-ring:x\\x01.js:057";
const x01_58 = "value-chip:x\\x01.js:058";
const x01_59 = "strip-gate:x\\x01.js:059";
const x01_60 = "bucket-row:x\\x01.js:060";
const x01_61 = "code-pane:x\\x01.js:061";
const x01_62 = "entry-cell:x\\x01.js:062";
const x01_63 = "frame-dot:x\\x01.js:063";
const x01_64 = "prop-card:x\\x01.js:064";
const x01_65 = "scope-ring:x\\x01.js:065";
const x01_66 = "value-chip:x\\x01.js:066";
const x01_67 = "strip-gate:x\\x01.js:067";
const x01_68 = "bucket-row:x\\x01.js:068";
const x01_69 = "code-pane:x\\x01.js:069";
const x01_70 = "entry-cell:x\\x01.js:070";
const x01_71 = "frame-dot:x\\x01.js:071";
const x01_72 = "prop-card:x\\x01.js:072";
const x01_73 = "scope-ring:x\\x01.js:073";
const x01_74 = "value-chip:x\\x01.js:074";
const x01_75 = "strip-gate:x\\x01.js:075";
const x01_76 = "bucket-row:x\\x01.js:076";
const x01_77 = "code-pane:x\\x01.js:077";
const x01_78 = "entry-cell:x\\x01.js:078";
const x01_79 = "frame-dot:x\\x01.js:079";
const x01_80 = "prop-card:x\\x01.js:080";
const x01_81 = "scope-ring:x\\x01.js:081";
const x01_82 = "value-chip:x\\x01.js:082";
const x01_83 = "strip-gate:x\\x01.js:083";
const x01_84 = "bucket-row:x\\x01.js:084";
const x01_85 = "code-pane:x\\x01.js:085";
const x01_86 = "entry-cell:x\\x01.js:086";
const x01_87 = "frame-dot:x\\x01.js:087";
const x01_88 = "prop-card:x\\x01.js:088";
const x01_89 = "scope-ring:x\\x01.js:089";
const x01_90 = "value-chip:x\\x01.js:090";
const x01_91 = "strip-gate:x\\x01.js:091";
const x01_92 = "bucket-row:x\\x01.js:092";
const x01_93 = "code-pane:x\\x01.js:093";
const x01_94 = "entry-cell:x\\x01.js:094";
const x01_95 = "frame-dot:x\\x01.js:095";
const x01_96 = "prop-card:x\\x01.js:096";
const x01_97 = "scope-ring:x\\x01.js:097";
const x01_98 = "value-chip:x\\x01.js:098";
const x01_99 = "strip-gate:x\\x01.js:099";
const x01_100 = "bucket-row:x\\x01.js:100";
const x01_101 = "code-pane:x\\x01.js:101";
const x01_102 = "entry-cell:x\\x01.js:102";
const x01_103 = "frame-dot:x\\x01.js:103";
const x01_104 = "prop-card:x\\x01.js:104";
const x01_105 = "scope-ring:x\\x01.js:105";
const x01_106 = "value-chip:x\\x01.js:106";
const x01_107 = "strip-gate:x\\x01.js:107";
const x01_108 = "bucket-row:x\\x01.js:108";
const x01_109 = "code-pane:x\\x01.js:109";
const x01_110 = "entry-cell:x\\x01.js:110";
const x01_111 = "frame-dot:x\\x01.js:111";
const x01_112 = "prop-card:x\\x01.js:112";
const x01_113 = "scope-ring:x\\x01.js:113";
const x01_114 = "value-chip:x\\x01.js:114";
const x01_115 = "strip-gate:x\\x01.js:115";
const x01_116 = "bucket-row:x\\x01.js:116";
const x01_117 = "code-pane:x\\x01.js:117";
const x01_118 = "entry-cell:x\\x01.js:118";
const x01_119 = "frame-dot:x\\x01.js:119";
const x01_120 = "prop-card:x\\x01.js:120";
const x01_121 = "scope-ring:x\\x01.js:121";
const x01_122 = "value-chip:x\\x01.js:122";
const x01_123 = "strip-gate:x\\x01.js:123";
const x01_124 = "bucket-row:x\\x01.js:124";
const x01_125 = "code-pane:x\\x01.js:125";
const x01_126 = "entry-cell:x\\x01.js:126";
const x01_127 = "frame-dot:x\\x01.js:127";
const x01_128 = "prop-card:x\\x01.js:128";
const x01_129 = "scope-ring:x\\x01.js:129";
const x01_130 = "value-chip:x\\x01.js:130";
const x01_131 = "strip-gate:x\\x01.js:131";
const x01_132 = "bucket-row:x\\x01.js:132";
const x01_133 = "code-pane:x\\x01.js:133";
const x01_134 = "entry-cell:x\\x01.js:134";
const x01_135 = "frame-dot:x\\x01.js:135";
const x01_136 = "prop-card:x\\x01.js:136";
const x01_137 = "scope-ring:x\\x01.js:137";
const x01_138 = "value-chip:x\\x01.js:138";
const x01_139 = "strip-gate:x\\x01.js:139";
const x01_140 = "bucket-row:x\\x01.js:140";
const x01_141 = "code-pane:x\\x01.js:141";
const x01_142 = "entry-cell:x\\x01.js:142";
const x01_143 = "frame-dot:x\\x01.js:143";
const x01_144 = "prop-card:x\\x01.js:144";
const x01_145 = "scope-ring:x\\x01.js:145";
const x01_146 = "value-chip:x\\x01.js:146";
