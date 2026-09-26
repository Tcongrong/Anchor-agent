import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 28,
  salt: 'p:0s:band',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2060',
  shift: 8,
  mask: 1697034324
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag28@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
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
const x28_0 = "prop-card:x\\x28.js:000";
const x28_1 = "scope-ring:x\\x28.js:001";
const x28_2 = "value-chip:x\\x28.js:002";
const x28_3 = "strip-gate:x\\x28.js:003";
const x28_4 = "bucket-row:x\\x28.js:004";
const x28_5 = "code-pane:x\\x28.js:005";
const x28_6 = "entry-cell:x\\x28.js:006";
const x28_7 = "frame-dot:x\\x28.js:007";
const x28_8 = "prop-card:x\\x28.js:008";
const x28_9 = "scope-ring:x\\x28.js:009";
const x28_10 = "value-chip:x\\x28.js:010";
const x28_11 = "strip-gate:x\\x28.js:011";
const x28_12 = "bucket-row:x\\x28.js:012";
const x28_13 = "code-pane:x\\x28.js:013";
const x28_14 = "entry-cell:x\\x28.js:014";
const x28_15 = "frame-dot:x\\x28.js:015";
const x28_16 = "prop-card:x\\x28.js:016";
const x28_17 = "scope-ring:x\\x28.js:017";
const x28_18 = "value-chip:x\\x28.js:018";
const x28_19 = "strip-gate:x\\x28.js:019";
const x28_20 = "bucket-row:x\\x28.js:020";
const x28_21 = "code-pane:x\\x28.js:021";
const x28_22 = "entry-cell:x\\x28.js:022";
const x28_23 = "frame-dot:x\\x28.js:023";
const x28_24 = "prop-card:x\\x28.js:024";
const x28_25 = "scope-ring:x\\x28.js:025";
const x28_26 = "value-chip:x\\x28.js:026";
const x28_27 = "strip-gate:x\\x28.js:027";
const x28_28 = "bucket-row:x\\x28.js:028";
const x28_29 = "code-pane:x\\x28.js:029";
const x28_30 = "entry-cell:x\\x28.js:030";
const x28_31 = "frame-dot:x\\x28.js:031";
const x28_32 = "prop-card:x\\x28.js:032";
const x28_33 = "scope-ring:x\\x28.js:033";
const x28_34 = "value-chip:x\\x28.js:034";
const x28_35 = "strip-gate:x\\x28.js:035";
const x28_36 = "bucket-row:x\\x28.js:036";
const x28_37 = "code-pane:x\\x28.js:037";
const x28_38 = "entry-cell:x\\x28.js:038";
const x28_39 = "frame-dot:x\\x28.js:039";
const x28_40 = "prop-card:x\\x28.js:040";
const x28_41 = "scope-ring:x\\x28.js:041";
const x28_42 = "value-chip:x\\x28.js:042";
const x28_43 = "strip-gate:x\\x28.js:043";
const x28_44 = "bucket-row:x\\x28.js:044";
const x28_45 = "code-pane:x\\x28.js:045";
const x28_46 = "entry-cell:x\\x28.js:046";
const x28_47 = "frame-dot:x\\x28.js:047";
const x28_48 = "prop-card:x\\x28.js:048";
const x28_49 = "scope-ring:x\\x28.js:049";
const x28_50 = "value-chip:x\\x28.js:050";
const x28_51 = "strip-gate:x\\x28.js:051";
const x28_52 = "bucket-row:x\\x28.js:052";
const x28_53 = "code-pane:x\\x28.js:053";
const x28_54 = "entry-cell:x\\x28.js:054";
const x28_55 = "frame-dot:x\\x28.js:055";
const x28_56 = "prop-card:x\\x28.js:056";
const x28_57 = "scope-ring:x\\x28.js:057";
const x28_58 = "value-chip:x\\x28.js:058";
const x28_59 = "strip-gate:x\\x28.js:059";
const x28_60 = "bucket-row:x\\x28.js:060";
const x28_61 = "code-pane:x\\x28.js:061";
const x28_62 = "entry-cell:x\\x28.js:062";
const x28_63 = "frame-dot:x\\x28.js:063";
const x28_64 = "prop-card:x\\x28.js:064";
const x28_65 = "scope-ring:x\\x28.js:065";
const x28_66 = "value-chip:x\\x28.js:066";
const x28_67 = "strip-gate:x\\x28.js:067";
const x28_68 = "bucket-row:x\\x28.js:068";
const x28_69 = "code-pane:x\\x28.js:069";
const x28_70 = "entry-cell:x\\x28.js:070";
const x28_71 = "frame-dot:x\\x28.js:071";
const x28_72 = "prop-card:x\\x28.js:072";
const x28_73 = "scope-ring:x\\x28.js:073";
const x28_74 = "value-chip:x\\x28.js:074";
const x28_75 = "strip-gate:x\\x28.js:075";
const x28_76 = "bucket-row:x\\x28.js:076";
const x28_77 = "code-pane:x\\x28.js:077";
const x28_78 = "entry-cell:x\\x28.js:078";
const x28_79 = "frame-dot:x\\x28.js:079";
const x28_80 = "prop-card:x\\x28.js:080";
const x28_81 = "scope-ring:x\\x28.js:081";
const x28_82 = "value-chip:x\\x28.js:082";
const x28_83 = "strip-gate:x\\x28.js:083";
const x28_84 = "bucket-row:x\\x28.js:084";
const x28_85 = "code-pane:x\\x28.js:085";
const x28_86 = "entry-cell:x\\x28.js:086";
const x28_87 = "frame-dot:x\\x28.js:087";
const x28_88 = "prop-card:x\\x28.js:088";
const x28_89 = "scope-ring:x\\x28.js:089";
const x28_90 = "value-chip:x\\x28.js:090";
const x28_91 = "strip-gate:x\\x28.js:091";
const x28_92 = "bucket-row:x\\x28.js:092";
const x28_93 = "code-pane:x\\x28.js:093";
const x28_94 = "entry-cell:x\\x28.js:094";
const x28_95 = "frame-dot:x\\x28.js:095";
const x28_96 = "prop-card:x\\x28.js:096";
const x28_97 = "scope-ring:x\\x28.js:097";
const x28_98 = "value-chip:x\\x28.js:098";
const x28_99 = "strip-gate:x\\x28.js:099";
const x28_100 = "bucket-row:x\\x28.js:100";
const x28_101 = "code-pane:x\\x28.js:101";
const x28_102 = "entry-cell:x\\x28.js:102";
const x28_103 = "frame-dot:x\\x28.js:103";
const x28_104 = "prop-card:x\\x28.js:104";
const x28_105 = "scope-ring:x\\x28.js:105";
const x28_106 = "value-chip:x\\x28.js:106";
const x28_107 = "strip-gate:x\\x28.js:107";
const x28_108 = "bucket-row:x\\x28.js:108";
const x28_109 = "code-pane:x\\x28.js:109";
const x28_110 = "entry-cell:x\\x28.js:110";
const x28_111 = "frame-dot:x\\x28.js:111";
const x28_112 = "prop-card:x\\x28.js:112";
const x28_113 = "scope-ring:x\\x28.js:113";
const x28_114 = "value-chip:x\\x28.js:114";
const x28_115 = "strip-gate:x\\x28.js:115";
const x28_116 = "bucket-row:x\\x28.js:116";
const x28_117 = "code-pane:x\\x28.js:117";
const x28_118 = "entry-cell:x\\x28.js:118";
const x28_119 = "frame-dot:x\\x28.js:119";
const x28_120 = "prop-card:x\\x28.js:120";
const x28_121 = "scope-ring:x\\x28.js:121";
const x28_122 = "value-chip:x\\x28.js:122";
const x28_123 = "strip-gate:x\\x28.js:123";
const x28_124 = "bucket-row:x\\x28.js:124";
const x28_125 = "code-pane:x\\x28.js:125";
const x28_126 = "entry-cell:x\\x28.js:126";
const x28_127 = "frame-dot:x\\x28.js:127";
const x28_128 = "prop-card:x\\x28.js:128";
const x28_129 = "scope-ring:x\\x28.js:129";
const x28_130 = "value-chip:x\\x28.js:130";
const x28_131 = "strip-gate:x\\x28.js:131";
const x28_132 = "bucket-row:x\\x28.js:132";
const x28_133 = "code-pane:x\\x28.js:133";
const x28_134 = "entry-cell:x\\x28.js:134";
const x28_135 = "frame-dot:x\\x28.js:135";
const x28_136 = "prop-card:x\\x28.js:136";
const x28_137 = "scope-ring:x\\x28.js:137";
const x28_138 = "value-chip:x\\x28.js:138";
const x28_139 = "strip-gate:x\\x28.js:139";
const x28_140 = "bucket-row:x\\x28.js:140";
const x28_141 = "code-pane:x\\x28.js:141";
const x28_142 = "entry-cell:x\\x28.js:142";
const x28_143 = "frame-dot:x\\x28.js:143";
const x28_144 = "prop-card:x\\x28.js:144";
const x28_145 = "scope-ring:x\\x28.js:145";
const x28_146 = "value-chip:x\\x28.js:146";
