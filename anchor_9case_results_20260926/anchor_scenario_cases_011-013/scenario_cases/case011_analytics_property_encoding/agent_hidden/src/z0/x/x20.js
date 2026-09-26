import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 20,
  salt: 'p:0k:band',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2060',
  shift: 8,
  mask: 1936384716
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row20@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
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
const x20_0 = "prop-card:x\\x20.js:000";
const x20_1 = "scope-ring:x\\x20.js:001";
const x20_2 = "value-chip:x\\x20.js:002";
const x20_3 = "strip-gate:x\\x20.js:003";
const x20_4 = "bucket-row:x\\x20.js:004";
const x20_5 = "code-pane:x\\x20.js:005";
const x20_6 = "entry-cell:x\\x20.js:006";
const x20_7 = "frame-dot:x\\x20.js:007";
const x20_8 = "prop-card:x\\x20.js:008";
const x20_9 = "scope-ring:x\\x20.js:009";
const x20_10 = "value-chip:x\\x20.js:010";
const x20_11 = "strip-gate:x\\x20.js:011";
const x20_12 = "bucket-row:x\\x20.js:012";
const x20_13 = "code-pane:x\\x20.js:013";
const x20_14 = "entry-cell:x\\x20.js:014";
const x20_15 = "frame-dot:x\\x20.js:015";
const x20_16 = "prop-card:x\\x20.js:016";
const x20_17 = "scope-ring:x\\x20.js:017";
const x20_18 = "value-chip:x\\x20.js:018";
const x20_19 = "strip-gate:x\\x20.js:019";
const x20_20 = "bucket-row:x\\x20.js:020";
const x20_21 = "code-pane:x\\x20.js:021";
const x20_22 = "entry-cell:x\\x20.js:022";
const x20_23 = "frame-dot:x\\x20.js:023";
const x20_24 = "prop-card:x\\x20.js:024";
const x20_25 = "scope-ring:x\\x20.js:025";
const x20_26 = "value-chip:x\\x20.js:026";
const x20_27 = "strip-gate:x\\x20.js:027";
const x20_28 = "bucket-row:x\\x20.js:028";
const x20_29 = "code-pane:x\\x20.js:029";
const x20_30 = "entry-cell:x\\x20.js:030";
const x20_31 = "frame-dot:x\\x20.js:031";
const x20_32 = "prop-card:x\\x20.js:032";
const x20_33 = "scope-ring:x\\x20.js:033";
const x20_34 = "value-chip:x\\x20.js:034";
const x20_35 = "strip-gate:x\\x20.js:035";
const x20_36 = "bucket-row:x\\x20.js:036";
const x20_37 = "code-pane:x\\x20.js:037";
const x20_38 = "entry-cell:x\\x20.js:038";
const x20_39 = "frame-dot:x\\x20.js:039";
const x20_40 = "prop-card:x\\x20.js:040";
const x20_41 = "scope-ring:x\\x20.js:041";
const x20_42 = "value-chip:x\\x20.js:042";
const x20_43 = "strip-gate:x\\x20.js:043";
const x20_44 = "bucket-row:x\\x20.js:044";
const x20_45 = "code-pane:x\\x20.js:045";
const x20_46 = "entry-cell:x\\x20.js:046";
const x20_47 = "frame-dot:x\\x20.js:047";
const x20_48 = "prop-card:x\\x20.js:048";
const x20_49 = "scope-ring:x\\x20.js:049";
const x20_50 = "value-chip:x\\x20.js:050";
const x20_51 = "strip-gate:x\\x20.js:051";
const x20_52 = "bucket-row:x\\x20.js:052";
const x20_53 = "code-pane:x\\x20.js:053";
const x20_54 = "entry-cell:x\\x20.js:054";
const x20_55 = "frame-dot:x\\x20.js:055";
const x20_56 = "prop-card:x\\x20.js:056";
const x20_57 = "scope-ring:x\\x20.js:057";
const x20_58 = "value-chip:x\\x20.js:058";
const x20_59 = "strip-gate:x\\x20.js:059";
const x20_60 = "bucket-row:x\\x20.js:060";
const x20_61 = "code-pane:x\\x20.js:061";
const x20_62 = "entry-cell:x\\x20.js:062";
const x20_63 = "frame-dot:x\\x20.js:063";
const x20_64 = "prop-card:x\\x20.js:064";
const x20_65 = "scope-ring:x\\x20.js:065";
const x20_66 = "value-chip:x\\x20.js:066";
const x20_67 = "strip-gate:x\\x20.js:067";
const x20_68 = "bucket-row:x\\x20.js:068";
const x20_69 = "code-pane:x\\x20.js:069";
const x20_70 = "entry-cell:x\\x20.js:070";
const x20_71 = "frame-dot:x\\x20.js:071";
const x20_72 = "prop-card:x\\x20.js:072";
const x20_73 = "scope-ring:x\\x20.js:073";
const x20_74 = "value-chip:x\\x20.js:074";
const x20_75 = "strip-gate:x\\x20.js:075";
const x20_76 = "bucket-row:x\\x20.js:076";
const x20_77 = "code-pane:x\\x20.js:077";
const x20_78 = "entry-cell:x\\x20.js:078";
const x20_79 = "frame-dot:x\\x20.js:079";
const x20_80 = "prop-card:x\\x20.js:080";
const x20_81 = "scope-ring:x\\x20.js:081";
const x20_82 = "value-chip:x\\x20.js:082";
const x20_83 = "strip-gate:x\\x20.js:083";
const x20_84 = "bucket-row:x\\x20.js:084";
const x20_85 = "code-pane:x\\x20.js:085";
const x20_86 = "entry-cell:x\\x20.js:086";
const x20_87 = "frame-dot:x\\x20.js:087";
const x20_88 = "prop-card:x\\x20.js:088";
const x20_89 = "scope-ring:x\\x20.js:089";
const x20_90 = "value-chip:x\\x20.js:090";
const x20_91 = "strip-gate:x\\x20.js:091";
const x20_92 = "bucket-row:x\\x20.js:092";
const x20_93 = "code-pane:x\\x20.js:093";
const x20_94 = "entry-cell:x\\x20.js:094";
const x20_95 = "frame-dot:x\\x20.js:095";
const x20_96 = "prop-card:x\\x20.js:096";
const x20_97 = "scope-ring:x\\x20.js:097";
const x20_98 = "value-chip:x\\x20.js:098";
const x20_99 = "strip-gate:x\\x20.js:099";
const x20_100 = "bucket-row:x\\x20.js:100";
const x20_101 = "code-pane:x\\x20.js:101";
const x20_102 = "entry-cell:x\\x20.js:102";
const x20_103 = "frame-dot:x\\x20.js:103";
const x20_104 = "prop-card:x\\x20.js:104";
const x20_105 = "scope-ring:x\\x20.js:105";
const x20_106 = "value-chip:x\\x20.js:106";
const x20_107 = "strip-gate:x\\x20.js:107";
const x20_108 = "bucket-row:x\\x20.js:108";
const x20_109 = "code-pane:x\\x20.js:109";
const x20_110 = "entry-cell:x\\x20.js:110";
const x20_111 = "frame-dot:x\\x20.js:111";
const x20_112 = "prop-card:x\\x20.js:112";
const x20_113 = "scope-ring:x\\x20.js:113";
const x20_114 = "value-chip:x\\x20.js:114";
const x20_115 = "strip-gate:x\\x20.js:115";
const x20_116 = "bucket-row:x\\x20.js:116";
const x20_117 = "code-pane:x\\x20.js:117";
const x20_118 = "entry-cell:x\\x20.js:118";
const x20_119 = "frame-dot:x\\x20.js:119";
const x20_120 = "prop-card:x\\x20.js:120";
const x20_121 = "scope-ring:x\\x20.js:121";
const x20_122 = "value-chip:x\\x20.js:122";
const x20_123 = "strip-gate:x\\x20.js:123";
const x20_124 = "bucket-row:x\\x20.js:124";
const x20_125 = "code-pane:x\\x20.js:125";
const x20_126 = "entry-cell:x\\x20.js:126";
const x20_127 = "frame-dot:x\\x20.js:127";
const x20_128 = "prop-card:x\\x20.js:128";
const x20_129 = "scope-ring:x\\x20.js:129";
const x20_130 = "value-chip:x\\x20.js:130";
const x20_131 = "strip-gate:x\\x20.js:131";
const x20_132 = "bucket-row:x\\x20.js:132";
const x20_133 = "code-pane:x\\x20.js:133";
const x20_134 = "entry-cell:x\\x20.js:134";
const x20_135 = "frame-dot:x\\x20.js:135";
const x20_136 = "prop-card:x\\x20.js:136";
const x20_137 = "scope-ring:x\\x20.js:137";
const x20_138 = "value-chip:x\\x20.js:138";
const x20_139 = "strip-gate:x\\x20.js:139";
const x20_140 = "bucket-row:x\\x20.js:140";
const x20_141 = "code-pane:x\\x20.js:141";
const x20_142 = "entry-cell:x\\x20.js:142";
const x20_143 = "frame-dot:x\\x20.js:143";
const x20_144 = "prop-card:x\\x20.js:144";
const x20_145 = "scope-ring:x\\x20.js:145";
const x20_146 = "value-chip:x\\x20.js:146";
