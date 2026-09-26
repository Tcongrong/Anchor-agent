import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 31,
  salt: 'p:0v:band',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2063',
  shift: 11,
  mask: 1070407015
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag31@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '7', y: '7', n: 1 },
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
const x31_0 = "prop-card:x\\x31.js:000";
const x31_1 = "scope-ring:x\\x31.js:001";
const x31_2 = "value-chip:x\\x31.js:002";
const x31_3 = "strip-gate:x\\x31.js:003";
const x31_4 = "bucket-row:x\\x31.js:004";
const x31_5 = "code-pane:x\\x31.js:005";
const x31_6 = "entry-cell:x\\x31.js:006";
const x31_7 = "frame-dot:x\\x31.js:007";
const x31_8 = "prop-card:x\\x31.js:008";
const x31_9 = "scope-ring:x\\x31.js:009";
const x31_10 = "value-chip:x\\x31.js:010";
const x31_11 = "strip-gate:x\\x31.js:011";
const x31_12 = "bucket-row:x\\x31.js:012";
const x31_13 = "code-pane:x\\x31.js:013";
const x31_14 = "entry-cell:x\\x31.js:014";
const x31_15 = "frame-dot:x\\x31.js:015";
const x31_16 = "prop-card:x\\x31.js:016";
const x31_17 = "scope-ring:x\\x31.js:017";
const x31_18 = "value-chip:x\\x31.js:018";
const x31_19 = "strip-gate:x\\x31.js:019";
const x31_20 = "bucket-row:x\\x31.js:020";
const x31_21 = "code-pane:x\\x31.js:021";
const x31_22 = "entry-cell:x\\x31.js:022";
const x31_23 = "frame-dot:x\\x31.js:023";
const x31_24 = "prop-card:x\\x31.js:024";
const x31_25 = "scope-ring:x\\x31.js:025";
const x31_26 = "value-chip:x\\x31.js:026";
const x31_27 = "strip-gate:x\\x31.js:027";
const x31_28 = "bucket-row:x\\x31.js:028";
const x31_29 = "code-pane:x\\x31.js:029";
const x31_30 = "entry-cell:x\\x31.js:030";
const x31_31 = "frame-dot:x\\x31.js:031";
const x31_32 = "prop-card:x\\x31.js:032";
const x31_33 = "scope-ring:x\\x31.js:033";
const x31_34 = "value-chip:x\\x31.js:034";
const x31_35 = "strip-gate:x\\x31.js:035";
const x31_36 = "bucket-row:x\\x31.js:036";
const x31_37 = "code-pane:x\\x31.js:037";
const x31_38 = "entry-cell:x\\x31.js:038";
const x31_39 = "frame-dot:x\\x31.js:039";
const x31_40 = "prop-card:x\\x31.js:040";
const x31_41 = "scope-ring:x\\x31.js:041";
const x31_42 = "value-chip:x\\x31.js:042";
const x31_43 = "strip-gate:x\\x31.js:043";
const x31_44 = "bucket-row:x\\x31.js:044";
const x31_45 = "code-pane:x\\x31.js:045";
const x31_46 = "entry-cell:x\\x31.js:046";
const x31_47 = "frame-dot:x\\x31.js:047";
const x31_48 = "prop-card:x\\x31.js:048";
const x31_49 = "scope-ring:x\\x31.js:049";
const x31_50 = "value-chip:x\\x31.js:050";
const x31_51 = "strip-gate:x\\x31.js:051";
const x31_52 = "bucket-row:x\\x31.js:052";
const x31_53 = "code-pane:x\\x31.js:053";
const x31_54 = "entry-cell:x\\x31.js:054";
const x31_55 = "frame-dot:x\\x31.js:055";
const x31_56 = "prop-card:x\\x31.js:056";
const x31_57 = "scope-ring:x\\x31.js:057";
const x31_58 = "value-chip:x\\x31.js:058";
const x31_59 = "strip-gate:x\\x31.js:059";
const x31_60 = "bucket-row:x\\x31.js:060";
const x31_61 = "code-pane:x\\x31.js:061";
const x31_62 = "entry-cell:x\\x31.js:062";
const x31_63 = "frame-dot:x\\x31.js:063";
const x31_64 = "prop-card:x\\x31.js:064";
const x31_65 = "scope-ring:x\\x31.js:065";
const x31_66 = "value-chip:x\\x31.js:066";
const x31_67 = "strip-gate:x\\x31.js:067";
const x31_68 = "bucket-row:x\\x31.js:068";
const x31_69 = "code-pane:x\\x31.js:069";
const x31_70 = "entry-cell:x\\x31.js:070";
const x31_71 = "frame-dot:x\\x31.js:071";
const x31_72 = "prop-card:x\\x31.js:072";
const x31_73 = "scope-ring:x\\x31.js:073";
const x31_74 = "value-chip:x\\x31.js:074";
const x31_75 = "strip-gate:x\\x31.js:075";
const x31_76 = "bucket-row:x\\x31.js:076";
const x31_77 = "code-pane:x\\x31.js:077";
const x31_78 = "entry-cell:x\\x31.js:078";
const x31_79 = "frame-dot:x\\x31.js:079";
const x31_80 = "prop-card:x\\x31.js:080";
const x31_81 = "scope-ring:x\\x31.js:081";
const x31_82 = "value-chip:x\\x31.js:082";
const x31_83 = "strip-gate:x\\x31.js:083";
const x31_84 = "bucket-row:x\\x31.js:084";
const x31_85 = "code-pane:x\\x31.js:085";
const x31_86 = "entry-cell:x\\x31.js:086";
const x31_87 = "frame-dot:x\\x31.js:087";
const x31_88 = "prop-card:x\\x31.js:088";
const x31_89 = "scope-ring:x\\x31.js:089";
const x31_90 = "value-chip:x\\x31.js:090";
const x31_91 = "strip-gate:x\\x31.js:091";
const x31_92 = "bucket-row:x\\x31.js:092";
const x31_93 = "code-pane:x\\x31.js:093";
const x31_94 = "entry-cell:x\\x31.js:094";
const x31_95 = "frame-dot:x\\x31.js:095";
const x31_96 = "prop-card:x\\x31.js:096";
const x31_97 = "scope-ring:x\\x31.js:097";
const x31_98 = "value-chip:x\\x31.js:098";
const x31_99 = "strip-gate:x\\x31.js:099";
const x31_100 = "bucket-row:x\\x31.js:100";
const x31_101 = "code-pane:x\\x31.js:101";
const x31_102 = "entry-cell:x\\x31.js:102";
const x31_103 = "frame-dot:x\\x31.js:103";
const x31_104 = "prop-card:x\\x31.js:104";
const x31_105 = "scope-ring:x\\x31.js:105";
const x31_106 = "value-chip:x\\x31.js:106";
const x31_107 = "strip-gate:x\\x31.js:107";
const x31_108 = "bucket-row:x\\x31.js:108";
const x31_109 = "code-pane:x\\x31.js:109";
const x31_110 = "entry-cell:x\\x31.js:110";
const x31_111 = "frame-dot:x\\x31.js:111";
const x31_112 = "prop-card:x\\x31.js:112";
const x31_113 = "scope-ring:x\\x31.js:113";
const x31_114 = "value-chip:x\\x31.js:114";
const x31_115 = "strip-gate:x\\x31.js:115";
const x31_116 = "bucket-row:x\\x31.js:116";
const x31_117 = "code-pane:x\\x31.js:117";
const x31_118 = "entry-cell:x\\x31.js:118";
const x31_119 = "frame-dot:x\\x31.js:119";
const x31_120 = "prop-card:x\\x31.js:120";
const x31_121 = "scope-ring:x\\x31.js:121";
const x31_122 = "value-chip:x\\x31.js:122";
const x31_123 = "strip-gate:x\\x31.js:123";
const x31_124 = "bucket-row:x\\x31.js:124";
const x31_125 = "code-pane:x\\x31.js:125";
const x31_126 = "entry-cell:x\\x31.js:126";
const x31_127 = "frame-dot:x\\x31.js:127";
const x31_128 = "prop-card:x\\x31.js:128";
const x31_129 = "scope-ring:x\\x31.js:129";
const x31_130 = "value-chip:x\\x31.js:130";
const x31_131 = "strip-gate:x\\x31.js:131";
const x31_132 = "bucket-row:x\\x31.js:132";
const x31_133 = "code-pane:x\\x31.js:133";
const x31_134 = "entry-cell:x\\x31.js:134";
const x31_135 = "frame-dot:x\\x31.js:135";
const x31_136 = "prop-card:x\\x31.js:136";
const x31_137 = "scope-ring:x\\x31.js:137";
const x31_138 = "value-chip:x\\x31.js:138";
const x31_139 = "strip-gate:x\\x31.js:139";
const x31_140 = "bucket-row:x\\x31.js:140";
const x31_141 = "code-pane:x\\x31.js:141";
const x31_142 = "entry-cell:x\\x31.js:142";
const x31_143 = "frame-dot:x\\x31.js:143";
const x31_144 = "prop-card:x\\x31.js:144";
const x31_145 = "scope-ring:x\\x31.js:145";
const x31_146 = "value-chip:x\\x31.js:146";
