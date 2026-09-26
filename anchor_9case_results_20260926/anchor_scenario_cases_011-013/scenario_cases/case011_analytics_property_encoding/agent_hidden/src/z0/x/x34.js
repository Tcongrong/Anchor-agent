import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 34,
  salt: 'p:0y:band',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2062',
  shift: 6,
  mask: 443779706
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag34@props.dev', y: 'shadow', n: 15 },
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
const x34_0 = "prop-card:x\\x34.js:000";
const x34_1 = "scope-ring:x\\x34.js:001";
const x34_2 = "value-chip:x\\x34.js:002";
const x34_3 = "strip-gate:x\\x34.js:003";
const x34_4 = "bucket-row:x\\x34.js:004";
const x34_5 = "code-pane:x\\x34.js:005";
const x34_6 = "entry-cell:x\\x34.js:006";
const x34_7 = "frame-dot:x\\x34.js:007";
const x34_8 = "prop-card:x\\x34.js:008";
const x34_9 = "scope-ring:x\\x34.js:009";
const x34_10 = "value-chip:x\\x34.js:010";
const x34_11 = "strip-gate:x\\x34.js:011";
const x34_12 = "bucket-row:x\\x34.js:012";
const x34_13 = "code-pane:x\\x34.js:013";
const x34_14 = "entry-cell:x\\x34.js:014";
const x34_15 = "frame-dot:x\\x34.js:015";
const x34_16 = "prop-card:x\\x34.js:016";
const x34_17 = "scope-ring:x\\x34.js:017";
const x34_18 = "value-chip:x\\x34.js:018";
const x34_19 = "strip-gate:x\\x34.js:019";
const x34_20 = "bucket-row:x\\x34.js:020";
const x34_21 = "code-pane:x\\x34.js:021";
const x34_22 = "entry-cell:x\\x34.js:022";
const x34_23 = "frame-dot:x\\x34.js:023";
const x34_24 = "prop-card:x\\x34.js:024";
const x34_25 = "scope-ring:x\\x34.js:025";
const x34_26 = "value-chip:x\\x34.js:026";
const x34_27 = "strip-gate:x\\x34.js:027";
const x34_28 = "bucket-row:x\\x34.js:028";
const x34_29 = "code-pane:x\\x34.js:029";
const x34_30 = "entry-cell:x\\x34.js:030";
const x34_31 = "frame-dot:x\\x34.js:031";
const x34_32 = "prop-card:x\\x34.js:032";
const x34_33 = "scope-ring:x\\x34.js:033";
const x34_34 = "value-chip:x\\x34.js:034";
const x34_35 = "strip-gate:x\\x34.js:035";
const x34_36 = "bucket-row:x\\x34.js:036";
const x34_37 = "code-pane:x\\x34.js:037";
const x34_38 = "entry-cell:x\\x34.js:038";
const x34_39 = "frame-dot:x\\x34.js:039";
const x34_40 = "prop-card:x\\x34.js:040";
const x34_41 = "scope-ring:x\\x34.js:041";
const x34_42 = "value-chip:x\\x34.js:042";
const x34_43 = "strip-gate:x\\x34.js:043";
const x34_44 = "bucket-row:x\\x34.js:044";
const x34_45 = "code-pane:x\\x34.js:045";
const x34_46 = "entry-cell:x\\x34.js:046";
const x34_47 = "frame-dot:x\\x34.js:047";
const x34_48 = "prop-card:x\\x34.js:048";
const x34_49 = "scope-ring:x\\x34.js:049";
const x34_50 = "value-chip:x\\x34.js:050";
const x34_51 = "strip-gate:x\\x34.js:051";
const x34_52 = "bucket-row:x\\x34.js:052";
const x34_53 = "code-pane:x\\x34.js:053";
const x34_54 = "entry-cell:x\\x34.js:054";
const x34_55 = "frame-dot:x\\x34.js:055";
const x34_56 = "prop-card:x\\x34.js:056";
const x34_57 = "scope-ring:x\\x34.js:057";
const x34_58 = "value-chip:x\\x34.js:058";
const x34_59 = "strip-gate:x\\x34.js:059";
const x34_60 = "bucket-row:x\\x34.js:060";
const x34_61 = "code-pane:x\\x34.js:061";
const x34_62 = "entry-cell:x\\x34.js:062";
const x34_63 = "frame-dot:x\\x34.js:063";
const x34_64 = "prop-card:x\\x34.js:064";
const x34_65 = "scope-ring:x\\x34.js:065";
const x34_66 = "value-chip:x\\x34.js:066";
const x34_67 = "strip-gate:x\\x34.js:067";
const x34_68 = "bucket-row:x\\x34.js:068";
const x34_69 = "code-pane:x\\x34.js:069";
const x34_70 = "entry-cell:x\\x34.js:070";
const x34_71 = "frame-dot:x\\x34.js:071";
const x34_72 = "prop-card:x\\x34.js:072";
const x34_73 = "scope-ring:x\\x34.js:073";
const x34_74 = "value-chip:x\\x34.js:074";
const x34_75 = "strip-gate:x\\x34.js:075";
const x34_76 = "bucket-row:x\\x34.js:076";
const x34_77 = "code-pane:x\\x34.js:077";
const x34_78 = "entry-cell:x\\x34.js:078";
const x34_79 = "frame-dot:x\\x34.js:079";
const x34_80 = "prop-card:x\\x34.js:080";
const x34_81 = "scope-ring:x\\x34.js:081";
const x34_82 = "value-chip:x\\x34.js:082";
const x34_83 = "strip-gate:x\\x34.js:083";
const x34_84 = "bucket-row:x\\x34.js:084";
const x34_85 = "code-pane:x\\x34.js:085";
const x34_86 = "entry-cell:x\\x34.js:086";
const x34_87 = "frame-dot:x\\x34.js:087";
const x34_88 = "prop-card:x\\x34.js:088";
const x34_89 = "scope-ring:x\\x34.js:089";
const x34_90 = "value-chip:x\\x34.js:090";
const x34_91 = "strip-gate:x\\x34.js:091";
const x34_92 = "bucket-row:x\\x34.js:092";
const x34_93 = "code-pane:x\\x34.js:093";
const x34_94 = "entry-cell:x\\x34.js:094";
const x34_95 = "frame-dot:x\\x34.js:095";
const x34_96 = "prop-card:x\\x34.js:096";
const x34_97 = "scope-ring:x\\x34.js:097";
const x34_98 = "value-chip:x\\x34.js:098";
const x34_99 = "strip-gate:x\\x34.js:099";
const x34_100 = "bucket-row:x\\x34.js:100";
const x34_101 = "code-pane:x\\x34.js:101";
const x34_102 = "entry-cell:x\\x34.js:102";
const x34_103 = "frame-dot:x\\x34.js:103";
const x34_104 = "prop-card:x\\x34.js:104";
const x34_105 = "scope-ring:x\\x34.js:105";
const x34_106 = "value-chip:x\\x34.js:106";
const x34_107 = "strip-gate:x\\x34.js:107";
const x34_108 = "bucket-row:x\\x34.js:108";
const x34_109 = "code-pane:x\\x34.js:109";
const x34_110 = "entry-cell:x\\x34.js:110";
const x34_111 = "frame-dot:x\\x34.js:111";
const x34_112 = "prop-card:x\\x34.js:112";
const x34_113 = "scope-ring:x\\x34.js:113";
const x34_114 = "value-chip:x\\x34.js:114";
const x34_115 = "strip-gate:x\\x34.js:115";
const x34_116 = "bucket-row:x\\x34.js:116";
const x34_117 = "code-pane:x\\x34.js:117";
const x34_118 = "entry-cell:x\\x34.js:118";
const x34_119 = "frame-dot:x\\x34.js:119";
const x34_120 = "prop-card:x\\x34.js:120";
const x34_121 = "scope-ring:x\\x34.js:121";
const x34_122 = "value-chip:x\\x34.js:122";
const x34_123 = "strip-gate:x\\x34.js:123";
const x34_124 = "bucket-row:x\\x34.js:124";
const x34_125 = "code-pane:x\\x34.js:125";
const x34_126 = "entry-cell:x\\x34.js:126";
const x34_127 = "frame-dot:x\\x34.js:127";
const x34_128 = "prop-card:x\\x34.js:128";
const x34_129 = "scope-ring:x\\x34.js:129";
const x34_130 = "value-chip:x\\x34.js:130";
const x34_131 = "strip-gate:x\\x34.js:131";
const x34_132 = "bucket-row:x\\x34.js:132";
const x34_133 = "code-pane:x\\x34.js:133";
const x34_134 = "entry-cell:x\\x34.js:134";
const x34_135 = "frame-dot:x\\x34.js:135";
const x34_136 = "prop-card:x\\x34.js:136";
const x34_137 = "scope-ring:x\\x34.js:137";
const x34_138 = "value-chip:x\\x34.js:138";
const x34_139 = "strip-gate:x\\x34.js:139";
const x34_140 = "bucket-row:x\\x34.js:140";
const x34_141 = "code-pane:x\\x34.js:141";
const x34_142 = "entry-cell:x\\x34.js:142";
const x34_143 = "frame-dot:x\\x34.js:143";
const x34_144 = "prop-card:x\\x34.js:144";
const x34_145 = "scope-ring:x\\x34.js:145";
const x34_146 = "value-chip:x\\x34.js:146";
