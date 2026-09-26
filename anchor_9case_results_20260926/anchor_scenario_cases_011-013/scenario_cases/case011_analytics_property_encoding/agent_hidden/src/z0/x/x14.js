import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 14,
  salt: 'p:0e:band',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2062',
  shift: 10,
  mask: 3189639334
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row14@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
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
const x14_0 = "prop-card:x\\x14.js:000";
const x14_1 = "scope-ring:x\\x14.js:001";
const x14_2 = "value-chip:x\\x14.js:002";
const x14_3 = "strip-gate:x\\x14.js:003";
const x14_4 = "bucket-row:x\\x14.js:004";
const x14_5 = "code-pane:x\\x14.js:005";
const x14_6 = "entry-cell:x\\x14.js:006";
const x14_7 = "frame-dot:x\\x14.js:007";
const x14_8 = "prop-card:x\\x14.js:008";
const x14_9 = "scope-ring:x\\x14.js:009";
const x14_10 = "value-chip:x\\x14.js:010";
const x14_11 = "strip-gate:x\\x14.js:011";
const x14_12 = "bucket-row:x\\x14.js:012";
const x14_13 = "code-pane:x\\x14.js:013";
const x14_14 = "entry-cell:x\\x14.js:014";
const x14_15 = "frame-dot:x\\x14.js:015";
const x14_16 = "prop-card:x\\x14.js:016";
const x14_17 = "scope-ring:x\\x14.js:017";
const x14_18 = "value-chip:x\\x14.js:018";
const x14_19 = "strip-gate:x\\x14.js:019";
const x14_20 = "bucket-row:x\\x14.js:020";
const x14_21 = "code-pane:x\\x14.js:021";
const x14_22 = "entry-cell:x\\x14.js:022";
const x14_23 = "frame-dot:x\\x14.js:023";
const x14_24 = "prop-card:x\\x14.js:024";
const x14_25 = "scope-ring:x\\x14.js:025";
const x14_26 = "value-chip:x\\x14.js:026";
const x14_27 = "strip-gate:x\\x14.js:027";
const x14_28 = "bucket-row:x\\x14.js:028";
const x14_29 = "code-pane:x\\x14.js:029";
const x14_30 = "entry-cell:x\\x14.js:030";
const x14_31 = "frame-dot:x\\x14.js:031";
const x14_32 = "prop-card:x\\x14.js:032";
const x14_33 = "scope-ring:x\\x14.js:033";
const x14_34 = "value-chip:x\\x14.js:034";
const x14_35 = "strip-gate:x\\x14.js:035";
const x14_36 = "bucket-row:x\\x14.js:036";
const x14_37 = "code-pane:x\\x14.js:037";
const x14_38 = "entry-cell:x\\x14.js:038";
const x14_39 = "frame-dot:x\\x14.js:039";
const x14_40 = "prop-card:x\\x14.js:040";
const x14_41 = "scope-ring:x\\x14.js:041";
const x14_42 = "value-chip:x\\x14.js:042";
const x14_43 = "strip-gate:x\\x14.js:043";
const x14_44 = "bucket-row:x\\x14.js:044";
const x14_45 = "code-pane:x\\x14.js:045";
const x14_46 = "entry-cell:x\\x14.js:046";
const x14_47 = "frame-dot:x\\x14.js:047";
const x14_48 = "prop-card:x\\x14.js:048";
const x14_49 = "scope-ring:x\\x14.js:049";
const x14_50 = "value-chip:x\\x14.js:050";
const x14_51 = "strip-gate:x\\x14.js:051";
const x14_52 = "bucket-row:x\\x14.js:052";
const x14_53 = "code-pane:x\\x14.js:053";
const x14_54 = "entry-cell:x\\x14.js:054";
const x14_55 = "frame-dot:x\\x14.js:055";
const x14_56 = "prop-card:x\\x14.js:056";
const x14_57 = "scope-ring:x\\x14.js:057";
const x14_58 = "value-chip:x\\x14.js:058";
const x14_59 = "strip-gate:x\\x14.js:059";
const x14_60 = "bucket-row:x\\x14.js:060";
const x14_61 = "code-pane:x\\x14.js:061";
const x14_62 = "entry-cell:x\\x14.js:062";
const x14_63 = "frame-dot:x\\x14.js:063";
const x14_64 = "prop-card:x\\x14.js:064";
const x14_65 = "scope-ring:x\\x14.js:065";
const x14_66 = "value-chip:x\\x14.js:066";
const x14_67 = "strip-gate:x\\x14.js:067";
const x14_68 = "bucket-row:x\\x14.js:068";
const x14_69 = "code-pane:x\\x14.js:069";
const x14_70 = "entry-cell:x\\x14.js:070";
const x14_71 = "frame-dot:x\\x14.js:071";
const x14_72 = "prop-card:x\\x14.js:072";
const x14_73 = "scope-ring:x\\x14.js:073";
const x14_74 = "value-chip:x\\x14.js:074";
const x14_75 = "strip-gate:x\\x14.js:075";
const x14_76 = "bucket-row:x\\x14.js:076";
const x14_77 = "code-pane:x\\x14.js:077";
const x14_78 = "entry-cell:x\\x14.js:078";
const x14_79 = "frame-dot:x\\x14.js:079";
const x14_80 = "prop-card:x\\x14.js:080";
const x14_81 = "scope-ring:x\\x14.js:081";
const x14_82 = "value-chip:x\\x14.js:082";
const x14_83 = "strip-gate:x\\x14.js:083";
const x14_84 = "bucket-row:x\\x14.js:084";
const x14_85 = "code-pane:x\\x14.js:085";
const x14_86 = "entry-cell:x\\x14.js:086";
const x14_87 = "frame-dot:x\\x14.js:087";
const x14_88 = "prop-card:x\\x14.js:088";
const x14_89 = "scope-ring:x\\x14.js:089";
const x14_90 = "value-chip:x\\x14.js:090";
const x14_91 = "strip-gate:x\\x14.js:091";
const x14_92 = "bucket-row:x\\x14.js:092";
const x14_93 = "code-pane:x\\x14.js:093";
const x14_94 = "entry-cell:x\\x14.js:094";
const x14_95 = "frame-dot:x\\x14.js:095";
const x14_96 = "prop-card:x\\x14.js:096";
const x14_97 = "scope-ring:x\\x14.js:097";
const x14_98 = "value-chip:x\\x14.js:098";
const x14_99 = "strip-gate:x\\x14.js:099";
const x14_100 = "bucket-row:x\\x14.js:100";
const x14_101 = "code-pane:x\\x14.js:101";
const x14_102 = "entry-cell:x\\x14.js:102";
const x14_103 = "frame-dot:x\\x14.js:103";
const x14_104 = "prop-card:x\\x14.js:104";
const x14_105 = "scope-ring:x\\x14.js:105";
const x14_106 = "value-chip:x\\x14.js:106";
const x14_107 = "strip-gate:x\\x14.js:107";
const x14_108 = "bucket-row:x\\x14.js:108";
const x14_109 = "code-pane:x\\x14.js:109";
const x14_110 = "entry-cell:x\\x14.js:110";
const x14_111 = "frame-dot:x\\x14.js:111";
const x14_112 = "prop-card:x\\x14.js:112";
const x14_113 = "scope-ring:x\\x14.js:113";
const x14_114 = "value-chip:x\\x14.js:114";
const x14_115 = "strip-gate:x\\x14.js:115";
const x14_116 = "bucket-row:x\\x14.js:116";
const x14_117 = "code-pane:x\\x14.js:117";
const x14_118 = "entry-cell:x\\x14.js:118";
const x14_119 = "frame-dot:x\\x14.js:119";
const x14_120 = "prop-card:x\\x14.js:120";
const x14_121 = "scope-ring:x\\x14.js:121";
const x14_122 = "value-chip:x\\x14.js:122";
const x14_123 = "strip-gate:x\\x14.js:123";
const x14_124 = "bucket-row:x\\x14.js:124";
const x14_125 = "code-pane:x\\x14.js:125";
const x14_126 = "entry-cell:x\\x14.js:126";
const x14_127 = "frame-dot:x\\x14.js:127";
const x14_128 = "prop-card:x\\x14.js:128";
const x14_129 = "scope-ring:x\\x14.js:129";
const x14_130 = "value-chip:x\\x14.js:130";
const x14_131 = "strip-gate:x\\x14.js:131";
const x14_132 = "bucket-row:x\\x14.js:132";
const x14_133 = "code-pane:x\\x14.js:133";
const x14_134 = "entry-cell:x\\x14.js:134";
const x14_135 = "frame-dot:x\\x14.js:135";
const x14_136 = "prop-card:x\\x14.js:136";
const x14_137 = "scope-ring:x\\x14.js:137";
const x14_138 = "value-chip:x\\x14.js:138";
const x14_139 = "strip-gate:x\\x14.js:139";
const x14_140 = "bucket-row:x\\x14.js:140";
const x14_141 = "code-pane:x\\x14.js:141";
const x14_142 = "entry-cell:x\\x14.js:142";
const x14_143 = "frame-dot:x\\x14.js:143";
const x14_144 = "prop-card:x\\x14.js:144";
const x14_145 = "scope-ring:x\\x14.js:145";
const x14_146 = "value-chip:x\\x14.js:146";
