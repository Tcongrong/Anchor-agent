import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 10,
  salt: 'p:0a:band',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 6,
  mask: 1161830882
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag10@props.dev', y: 'shadow', n: 15 },
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
const x10_0 = "prop-card:x\\x10.js:000";
const x10_1 = "scope-ring:x\\x10.js:001";
const x10_2 = "value-chip:x\\x10.js:002";
const x10_3 = "strip-gate:x\\x10.js:003";
const x10_4 = "bucket-row:x\\x10.js:004";
const x10_5 = "code-pane:x\\x10.js:005";
const x10_6 = "entry-cell:x\\x10.js:006";
const x10_7 = "frame-dot:x\\x10.js:007";
const x10_8 = "prop-card:x\\x10.js:008";
const x10_9 = "scope-ring:x\\x10.js:009";
const x10_10 = "value-chip:x\\x10.js:010";
const x10_11 = "strip-gate:x\\x10.js:011";
const x10_12 = "bucket-row:x\\x10.js:012";
const x10_13 = "code-pane:x\\x10.js:013";
const x10_14 = "entry-cell:x\\x10.js:014";
const x10_15 = "frame-dot:x\\x10.js:015";
const x10_16 = "prop-card:x\\x10.js:016";
const x10_17 = "scope-ring:x\\x10.js:017";
const x10_18 = "value-chip:x\\x10.js:018";
const x10_19 = "strip-gate:x\\x10.js:019";
const x10_20 = "bucket-row:x\\x10.js:020";
const x10_21 = "code-pane:x\\x10.js:021";
const x10_22 = "entry-cell:x\\x10.js:022";
const x10_23 = "frame-dot:x\\x10.js:023";
const x10_24 = "prop-card:x\\x10.js:024";
const x10_25 = "scope-ring:x\\x10.js:025";
const x10_26 = "value-chip:x\\x10.js:026";
const x10_27 = "strip-gate:x\\x10.js:027";
const x10_28 = "bucket-row:x\\x10.js:028";
const x10_29 = "code-pane:x\\x10.js:029";
const x10_30 = "entry-cell:x\\x10.js:030";
const x10_31 = "frame-dot:x\\x10.js:031";
const x10_32 = "prop-card:x\\x10.js:032";
const x10_33 = "scope-ring:x\\x10.js:033";
const x10_34 = "value-chip:x\\x10.js:034";
const x10_35 = "strip-gate:x\\x10.js:035";
const x10_36 = "bucket-row:x\\x10.js:036";
const x10_37 = "code-pane:x\\x10.js:037";
const x10_38 = "entry-cell:x\\x10.js:038";
const x10_39 = "frame-dot:x\\x10.js:039";
const x10_40 = "prop-card:x\\x10.js:040";
const x10_41 = "scope-ring:x\\x10.js:041";
const x10_42 = "value-chip:x\\x10.js:042";
const x10_43 = "strip-gate:x\\x10.js:043";
const x10_44 = "bucket-row:x\\x10.js:044";
const x10_45 = "code-pane:x\\x10.js:045";
const x10_46 = "entry-cell:x\\x10.js:046";
const x10_47 = "frame-dot:x\\x10.js:047";
const x10_48 = "prop-card:x\\x10.js:048";
const x10_49 = "scope-ring:x\\x10.js:049";
const x10_50 = "value-chip:x\\x10.js:050";
const x10_51 = "strip-gate:x\\x10.js:051";
const x10_52 = "bucket-row:x\\x10.js:052";
const x10_53 = "code-pane:x\\x10.js:053";
const x10_54 = "entry-cell:x\\x10.js:054";
const x10_55 = "frame-dot:x\\x10.js:055";
const x10_56 = "prop-card:x\\x10.js:056";
const x10_57 = "scope-ring:x\\x10.js:057";
const x10_58 = "value-chip:x\\x10.js:058";
const x10_59 = "strip-gate:x\\x10.js:059";
const x10_60 = "bucket-row:x\\x10.js:060";
const x10_61 = "code-pane:x\\x10.js:061";
const x10_62 = "entry-cell:x\\x10.js:062";
const x10_63 = "frame-dot:x\\x10.js:063";
const x10_64 = "prop-card:x\\x10.js:064";
const x10_65 = "scope-ring:x\\x10.js:065";
const x10_66 = "value-chip:x\\x10.js:066";
const x10_67 = "strip-gate:x\\x10.js:067";
const x10_68 = "bucket-row:x\\x10.js:068";
const x10_69 = "code-pane:x\\x10.js:069";
const x10_70 = "entry-cell:x\\x10.js:070";
const x10_71 = "frame-dot:x\\x10.js:071";
const x10_72 = "prop-card:x\\x10.js:072";
const x10_73 = "scope-ring:x\\x10.js:073";
const x10_74 = "value-chip:x\\x10.js:074";
const x10_75 = "strip-gate:x\\x10.js:075";
const x10_76 = "bucket-row:x\\x10.js:076";
const x10_77 = "code-pane:x\\x10.js:077";
const x10_78 = "entry-cell:x\\x10.js:078";
const x10_79 = "frame-dot:x\\x10.js:079";
const x10_80 = "prop-card:x\\x10.js:080";
const x10_81 = "scope-ring:x\\x10.js:081";
const x10_82 = "value-chip:x\\x10.js:082";
const x10_83 = "strip-gate:x\\x10.js:083";
const x10_84 = "bucket-row:x\\x10.js:084";
const x10_85 = "code-pane:x\\x10.js:085";
const x10_86 = "entry-cell:x\\x10.js:086";
const x10_87 = "frame-dot:x\\x10.js:087";
const x10_88 = "prop-card:x\\x10.js:088";
const x10_89 = "scope-ring:x\\x10.js:089";
const x10_90 = "value-chip:x\\x10.js:090";
const x10_91 = "strip-gate:x\\x10.js:091";
const x10_92 = "bucket-row:x\\x10.js:092";
const x10_93 = "code-pane:x\\x10.js:093";
const x10_94 = "entry-cell:x\\x10.js:094";
const x10_95 = "frame-dot:x\\x10.js:095";
const x10_96 = "prop-card:x\\x10.js:096";
const x10_97 = "scope-ring:x\\x10.js:097";
const x10_98 = "value-chip:x\\x10.js:098";
const x10_99 = "strip-gate:x\\x10.js:099";
const x10_100 = "bucket-row:x\\x10.js:100";
const x10_101 = "code-pane:x\\x10.js:101";
const x10_102 = "entry-cell:x\\x10.js:102";
const x10_103 = "frame-dot:x\\x10.js:103";
const x10_104 = "prop-card:x\\x10.js:104";
const x10_105 = "scope-ring:x\\x10.js:105";
const x10_106 = "value-chip:x\\x10.js:106";
const x10_107 = "strip-gate:x\\x10.js:107";
const x10_108 = "bucket-row:x\\x10.js:108";
const x10_109 = "code-pane:x\\x10.js:109";
const x10_110 = "entry-cell:x\\x10.js:110";
const x10_111 = "frame-dot:x\\x10.js:111";
const x10_112 = "prop-card:x\\x10.js:112";
const x10_113 = "scope-ring:x\\x10.js:113";
const x10_114 = "value-chip:x\\x10.js:114";
const x10_115 = "strip-gate:x\\x10.js:115";
const x10_116 = "bucket-row:x\\x10.js:116";
const x10_117 = "code-pane:x\\x10.js:117";
const x10_118 = "entry-cell:x\\x10.js:118";
const x10_119 = "frame-dot:x\\x10.js:119";
const x10_120 = "prop-card:x\\x10.js:120";
const x10_121 = "scope-ring:x\\x10.js:121";
const x10_122 = "value-chip:x\\x10.js:122";
const x10_123 = "strip-gate:x\\x10.js:123";
const x10_124 = "bucket-row:x\\x10.js:124";
const x10_125 = "code-pane:x\\x10.js:125";
const x10_126 = "entry-cell:x\\x10.js:126";
const x10_127 = "frame-dot:x\\x10.js:127";
const x10_128 = "prop-card:x\\x10.js:128";
const x10_129 = "scope-ring:x\\x10.js:129";
const x10_130 = "value-chip:x\\x10.js:130";
const x10_131 = "strip-gate:x\\x10.js:131";
const x10_132 = "bucket-row:x\\x10.js:132";
const x10_133 = "code-pane:x\\x10.js:133";
const x10_134 = "entry-cell:x\\x10.js:134";
const x10_135 = "frame-dot:x\\x10.js:135";
const x10_136 = "prop-card:x\\x10.js:136";
const x10_137 = "scope-ring:x\\x10.js:137";
const x10_138 = "value-chip:x\\x10.js:138";
const x10_139 = "strip-gate:x\\x10.js:139";
const x10_140 = "bucket-row:x\\x10.js:140";
const x10_141 = "code-pane:x\\x10.js:141";
const x10_142 = "entry-cell:x\\x10.js:142";
const x10_143 = "frame-dot:x\\x10.js:143";
const x10_144 = "prop-card:x\\x10.js:144";
const x10_145 = "scope-ring:x\\x10.js:145";
const x10_146 = "value-chip:x\\x10.js:146";
