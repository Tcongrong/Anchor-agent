import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 21,
  salt: 'p:0l:band',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2061',
  shift: 9,
  mask: 295853181
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band21@props.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x21_0 = "prop-card:x\\x21.js:000";
const x21_1 = "scope-ring:x\\x21.js:001";
const x21_2 = "value-chip:x\\x21.js:002";
const x21_3 = "strip-gate:x\\x21.js:003";
const x21_4 = "bucket-row:x\\x21.js:004";
const x21_5 = "code-pane:x\\x21.js:005";
const x21_6 = "entry-cell:x\\x21.js:006";
const x21_7 = "frame-dot:x\\x21.js:007";
const x21_8 = "prop-card:x\\x21.js:008";
const x21_9 = "scope-ring:x\\x21.js:009";
const x21_10 = "value-chip:x\\x21.js:010";
const x21_11 = "strip-gate:x\\x21.js:011";
const x21_12 = "bucket-row:x\\x21.js:012";
const x21_13 = "code-pane:x\\x21.js:013";
const x21_14 = "entry-cell:x\\x21.js:014";
const x21_15 = "frame-dot:x\\x21.js:015";
const x21_16 = "prop-card:x\\x21.js:016";
const x21_17 = "scope-ring:x\\x21.js:017";
const x21_18 = "value-chip:x\\x21.js:018";
const x21_19 = "strip-gate:x\\x21.js:019";
const x21_20 = "bucket-row:x\\x21.js:020";
const x21_21 = "code-pane:x\\x21.js:021";
const x21_22 = "entry-cell:x\\x21.js:022";
const x21_23 = "frame-dot:x\\x21.js:023";
const x21_24 = "prop-card:x\\x21.js:024";
const x21_25 = "scope-ring:x\\x21.js:025";
const x21_26 = "value-chip:x\\x21.js:026";
const x21_27 = "strip-gate:x\\x21.js:027";
const x21_28 = "bucket-row:x\\x21.js:028";
const x21_29 = "code-pane:x\\x21.js:029";
const x21_30 = "entry-cell:x\\x21.js:030";
const x21_31 = "frame-dot:x\\x21.js:031";
const x21_32 = "prop-card:x\\x21.js:032";
const x21_33 = "scope-ring:x\\x21.js:033";
const x21_34 = "value-chip:x\\x21.js:034";
const x21_35 = "strip-gate:x\\x21.js:035";
const x21_36 = "bucket-row:x\\x21.js:036";
const x21_37 = "code-pane:x\\x21.js:037";
const x21_38 = "entry-cell:x\\x21.js:038";
const x21_39 = "frame-dot:x\\x21.js:039";
const x21_40 = "prop-card:x\\x21.js:040";
const x21_41 = "scope-ring:x\\x21.js:041";
const x21_42 = "value-chip:x\\x21.js:042";
const x21_43 = "strip-gate:x\\x21.js:043";
const x21_44 = "bucket-row:x\\x21.js:044";
const x21_45 = "code-pane:x\\x21.js:045";
const x21_46 = "entry-cell:x\\x21.js:046";
const x21_47 = "frame-dot:x\\x21.js:047";
const x21_48 = "prop-card:x\\x21.js:048";
const x21_49 = "scope-ring:x\\x21.js:049";
const x21_50 = "value-chip:x\\x21.js:050";
const x21_51 = "strip-gate:x\\x21.js:051";
const x21_52 = "bucket-row:x\\x21.js:052";
const x21_53 = "code-pane:x\\x21.js:053";
const x21_54 = "entry-cell:x\\x21.js:054";
const x21_55 = "frame-dot:x\\x21.js:055";
const x21_56 = "prop-card:x\\x21.js:056";
const x21_57 = "scope-ring:x\\x21.js:057";
const x21_58 = "value-chip:x\\x21.js:058";
const x21_59 = "strip-gate:x\\x21.js:059";
const x21_60 = "bucket-row:x\\x21.js:060";
const x21_61 = "code-pane:x\\x21.js:061";
const x21_62 = "entry-cell:x\\x21.js:062";
const x21_63 = "frame-dot:x\\x21.js:063";
const x21_64 = "prop-card:x\\x21.js:064";
const x21_65 = "scope-ring:x\\x21.js:065";
const x21_66 = "value-chip:x\\x21.js:066";
const x21_67 = "strip-gate:x\\x21.js:067";
const x21_68 = "bucket-row:x\\x21.js:068";
const x21_69 = "code-pane:x\\x21.js:069";
const x21_70 = "entry-cell:x\\x21.js:070";
const x21_71 = "frame-dot:x\\x21.js:071";
const x21_72 = "prop-card:x\\x21.js:072";
const x21_73 = "scope-ring:x\\x21.js:073";
const x21_74 = "value-chip:x\\x21.js:074";
const x21_75 = "strip-gate:x\\x21.js:075";
const x21_76 = "bucket-row:x\\x21.js:076";
const x21_77 = "code-pane:x\\x21.js:077";
const x21_78 = "entry-cell:x\\x21.js:078";
const x21_79 = "frame-dot:x\\x21.js:079";
const x21_80 = "prop-card:x\\x21.js:080";
const x21_81 = "scope-ring:x\\x21.js:081";
const x21_82 = "value-chip:x\\x21.js:082";
const x21_83 = "strip-gate:x\\x21.js:083";
const x21_84 = "bucket-row:x\\x21.js:084";
const x21_85 = "code-pane:x\\x21.js:085";
const x21_86 = "entry-cell:x\\x21.js:086";
const x21_87 = "frame-dot:x\\x21.js:087";
const x21_88 = "prop-card:x\\x21.js:088";
const x21_89 = "scope-ring:x\\x21.js:089";
const x21_90 = "value-chip:x\\x21.js:090";
const x21_91 = "strip-gate:x\\x21.js:091";
const x21_92 = "bucket-row:x\\x21.js:092";
const x21_93 = "code-pane:x\\x21.js:093";
const x21_94 = "entry-cell:x\\x21.js:094";
const x21_95 = "frame-dot:x\\x21.js:095";
const x21_96 = "prop-card:x\\x21.js:096";
const x21_97 = "scope-ring:x\\x21.js:097";
const x21_98 = "value-chip:x\\x21.js:098";
const x21_99 = "strip-gate:x\\x21.js:099";
const x21_100 = "bucket-row:x\\x21.js:100";
const x21_101 = "code-pane:x\\x21.js:101";
const x21_102 = "entry-cell:x\\x21.js:102";
const x21_103 = "frame-dot:x\\x21.js:103";
const x21_104 = "prop-card:x\\x21.js:104";
const x21_105 = "scope-ring:x\\x21.js:105";
const x21_106 = "value-chip:x\\x21.js:106";
const x21_107 = "strip-gate:x\\x21.js:107";
const x21_108 = "bucket-row:x\\x21.js:108";
const x21_109 = "code-pane:x\\x21.js:109";
const x21_110 = "entry-cell:x\\x21.js:110";
const x21_111 = "frame-dot:x\\x21.js:111";
const x21_112 = "prop-card:x\\x21.js:112";
const x21_113 = "scope-ring:x\\x21.js:113";
const x21_114 = "value-chip:x\\x21.js:114";
const x21_115 = "strip-gate:x\\x21.js:115";
const x21_116 = "bucket-row:x\\x21.js:116";
const x21_117 = "code-pane:x\\x21.js:117";
const x21_118 = "entry-cell:x\\x21.js:118";
const x21_119 = "frame-dot:x\\x21.js:119";
const x21_120 = "prop-card:x\\x21.js:120";
const x21_121 = "scope-ring:x\\x21.js:121";
const x21_122 = "value-chip:x\\x21.js:122";
const x21_123 = "strip-gate:x\\x21.js:123";
const x21_124 = "bucket-row:x\\x21.js:124";
const x21_125 = "code-pane:x\\x21.js:125";
const x21_126 = "entry-cell:x\\x21.js:126";
const x21_127 = "frame-dot:x\\x21.js:127";
const x21_128 = "prop-card:x\\x21.js:128";
const x21_129 = "scope-ring:x\\x21.js:129";
const x21_130 = "value-chip:x\\x21.js:130";
const x21_131 = "strip-gate:x\\x21.js:131";
const x21_132 = "bucket-row:x\\x21.js:132";
const x21_133 = "code-pane:x\\x21.js:133";
const x21_134 = "entry-cell:x\\x21.js:134";
const x21_135 = "frame-dot:x\\x21.js:135";
const x21_136 = "prop-card:x\\x21.js:136";
const x21_137 = "scope-ring:x\\x21.js:137";
const x21_138 = "value-chip:x\\x21.js:138";
const x21_139 = "strip-gate:x\\x21.js:139";
const x21_140 = "bucket-row:x\\x21.js:140";
const x21_141 = "code-pane:x\\x21.js:141";
const x21_142 = "entry-cell:x\\x21.js:142";
const x21_143 = "frame-dot:x\\x21.js:143";
const x21_144 = "prop-card:x\\x21.js:144";
const x21_145 = "scope-ring:x\\x21.js:145";
const x21_146 = "value-chip:x\\x21.js:146";
