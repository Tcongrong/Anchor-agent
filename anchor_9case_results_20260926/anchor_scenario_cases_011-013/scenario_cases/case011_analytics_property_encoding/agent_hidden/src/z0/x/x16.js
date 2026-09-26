import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 16,
  salt: 'p:0g:band',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2060',
  shift: 4,
  mask: 4203543560
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag16@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
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
const x16_0 = "prop-card:x\\x16.js:000";
const x16_1 = "scope-ring:x\\x16.js:001";
const x16_2 = "value-chip:x\\x16.js:002";
const x16_3 = "strip-gate:x\\x16.js:003";
const x16_4 = "bucket-row:x\\x16.js:004";
const x16_5 = "code-pane:x\\x16.js:005";
const x16_6 = "entry-cell:x\\x16.js:006";
const x16_7 = "frame-dot:x\\x16.js:007";
const x16_8 = "prop-card:x\\x16.js:008";
const x16_9 = "scope-ring:x\\x16.js:009";
const x16_10 = "value-chip:x\\x16.js:010";
const x16_11 = "strip-gate:x\\x16.js:011";
const x16_12 = "bucket-row:x\\x16.js:012";
const x16_13 = "code-pane:x\\x16.js:013";
const x16_14 = "entry-cell:x\\x16.js:014";
const x16_15 = "frame-dot:x\\x16.js:015";
const x16_16 = "prop-card:x\\x16.js:016";
const x16_17 = "scope-ring:x\\x16.js:017";
const x16_18 = "value-chip:x\\x16.js:018";
const x16_19 = "strip-gate:x\\x16.js:019";
const x16_20 = "bucket-row:x\\x16.js:020";
const x16_21 = "code-pane:x\\x16.js:021";
const x16_22 = "entry-cell:x\\x16.js:022";
const x16_23 = "frame-dot:x\\x16.js:023";
const x16_24 = "prop-card:x\\x16.js:024";
const x16_25 = "scope-ring:x\\x16.js:025";
const x16_26 = "value-chip:x\\x16.js:026";
const x16_27 = "strip-gate:x\\x16.js:027";
const x16_28 = "bucket-row:x\\x16.js:028";
const x16_29 = "code-pane:x\\x16.js:029";
const x16_30 = "entry-cell:x\\x16.js:030";
const x16_31 = "frame-dot:x\\x16.js:031";
const x16_32 = "prop-card:x\\x16.js:032";
const x16_33 = "scope-ring:x\\x16.js:033";
const x16_34 = "value-chip:x\\x16.js:034";
const x16_35 = "strip-gate:x\\x16.js:035";
const x16_36 = "bucket-row:x\\x16.js:036";
const x16_37 = "code-pane:x\\x16.js:037";
const x16_38 = "entry-cell:x\\x16.js:038";
const x16_39 = "frame-dot:x\\x16.js:039";
const x16_40 = "prop-card:x\\x16.js:040";
const x16_41 = "scope-ring:x\\x16.js:041";
const x16_42 = "value-chip:x\\x16.js:042";
const x16_43 = "strip-gate:x\\x16.js:043";
const x16_44 = "bucket-row:x\\x16.js:044";
const x16_45 = "code-pane:x\\x16.js:045";
const x16_46 = "entry-cell:x\\x16.js:046";
const x16_47 = "frame-dot:x\\x16.js:047";
const x16_48 = "prop-card:x\\x16.js:048";
const x16_49 = "scope-ring:x\\x16.js:049";
const x16_50 = "value-chip:x\\x16.js:050";
const x16_51 = "strip-gate:x\\x16.js:051";
const x16_52 = "bucket-row:x\\x16.js:052";
const x16_53 = "code-pane:x\\x16.js:053";
const x16_54 = "entry-cell:x\\x16.js:054";
const x16_55 = "frame-dot:x\\x16.js:055";
const x16_56 = "prop-card:x\\x16.js:056";
const x16_57 = "scope-ring:x\\x16.js:057";
const x16_58 = "value-chip:x\\x16.js:058";
const x16_59 = "strip-gate:x\\x16.js:059";
const x16_60 = "bucket-row:x\\x16.js:060";
const x16_61 = "code-pane:x\\x16.js:061";
const x16_62 = "entry-cell:x\\x16.js:062";
const x16_63 = "frame-dot:x\\x16.js:063";
const x16_64 = "prop-card:x\\x16.js:064";
const x16_65 = "scope-ring:x\\x16.js:065";
const x16_66 = "value-chip:x\\x16.js:066";
const x16_67 = "strip-gate:x\\x16.js:067";
const x16_68 = "bucket-row:x\\x16.js:068";
const x16_69 = "code-pane:x\\x16.js:069";
const x16_70 = "entry-cell:x\\x16.js:070";
const x16_71 = "frame-dot:x\\x16.js:071";
const x16_72 = "prop-card:x\\x16.js:072";
const x16_73 = "scope-ring:x\\x16.js:073";
const x16_74 = "value-chip:x\\x16.js:074";
const x16_75 = "strip-gate:x\\x16.js:075";
const x16_76 = "bucket-row:x\\x16.js:076";
const x16_77 = "code-pane:x\\x16.js:077";
const x16_78 = "entry-cell:x\\x16.js:078";
const x16_79 = "frame-dot:x\\x16.js:079";
const x16_80 = "prop-card:x\\x16.js:080";
const x16_81 = "scope-ring:x\\x16.js:081";
const x16_82 = "value-chip:x\\x16.js:082";
const x16_83 = "strip-gate:x\\x16.js:083";
const x16_84 = "bucket-row:x\\x16.js:084";
const x16_85 = "code-pane:x\\x16.js:085";
const x16_86 = "entry-cell:x\\x16.js:086";
const x16_87 = "frame-dot:x\\x16.js:087";
const x16_88 = "prop-card:x\\x16.js:088";
const x16_89 = "scope-ring:x\\x16.js:089";
const x16_90 = "value-chip:x\\x16.js:090";
const x16_91 = "strip-gate:x\\x16.js:091";
const x16_92 = "bucket-row:x\\x16.js:092";
const x16_93 = "code-pane:x\\x16.js:093";
const x16_94 = "entry-cell:x\\x16.js:094";
const x16_95 = "frame-dot:x\\x16.js:095";
const x16_96 = "prop-card:x\\x16.js:096";
const x16_97 = "scope-ring:x\\x16.js:097";
const x16_98 = "value-chip:x\\x16.js:098";
const x16_99 = "strip-gate:x\\x16.js:099";
const x16_100 = "bucket-row:x\\x16.js:100";
const x16_101 = "code-pane:x\\x16.js:101";
const x16_102 = "entry-cell:x\\x16.js:102";
const x16_103 = "frame-dot:x\\x16.js:103";
const x16_104 = "prop-card:x\\x16.js:104";
const x16_105 = "scope-ring:x\\x16.js:105";
const x16_106 = "value-chip:x\\x16.js:106";
const x16_107 = "strip-gate:x\\x16.js:107";
const x16_108 = "bucket-row:x\\x16.js:108";
const x16_109 = "code-pane:x\\x16.js:109";
const x16_110 = "entry-cell:x\\x16.js:110";
const x16_111 = "frame-dot:x\\x16.js:111";
const x16_112 = "prop-card:x\\x16.js:112";
const x16_113 = "scope-ring:x\\x16.js:113";
const x16_114 = "value-chip:x\\x16.js:114";
const x16_115 = "strip-gate:x\\x16.js:115";
const x16_116 = "bucket-row:x\\x16.js:116";
const x16_117 = "code-pane:x\\x16.js:117";
const x16_118 = "entry-cell:x\\x16.js:118";
const x16_119 = "frame-dot:x\\x16.js:119";
const x16_120 = "prop-card:x\\x16.js:120";
const x16_121 = "scope-ring:x\\x16.js:121";
const x16_122 = "value-chip:x\\x16.js:122";
const x16_123 = "strip-gate:x\\x16.js:123";
const x16_124 = "bucket-row:x\\x16.js:124";
const x16_125 = "code-pane:x\\x16.js:125";
const x16_126 = "entry-cell:x\\x16.js:126";
const x16_127 = "frame-dot:x\\x16.js:127";
const x16_128 = "prop-card:x\\x16.js:128";
const x16_129 = "scope-ring:x\\x16.js:129";
const x16_130 = "value-chip:x\\x16.js:130";
const x16_131 = "strip-gate:x\\x16.js:131";
const x16_132 = "bucket-row:x\\x16.js:132";
const x16_133 = "code-pane:x\\x16.js:133";
const x16_134 = "entry-cell:x\\x16.js:134";
const x16_135 = "frame-dot:x\\x16.js:135";
const x16_136 = "prop-card:x\\x16.js:136";
const x16_137 = "scope-ring:x\\x16.js:137";
const x16_138 = "value-chip:x\\x16.js:138";
const x16_139 = "strip-gate:x\\x16.js:139";
const x16_140 = "bucket-row:x\\x16.js:140";
const x16_141 = "code-pane:x\\x16.js:141";
const x16_142 = "entry-cell:x\\x16.js:142";
const x16_143 = "frame-dot:x\\x16.js:143";
const x16_144 = "prop-card:x\\x16.js:144";
const x16_145 = "scope-ring:x\\x16.js:145";
const x16_146 = "value-chip:x\\x16.js:146";
