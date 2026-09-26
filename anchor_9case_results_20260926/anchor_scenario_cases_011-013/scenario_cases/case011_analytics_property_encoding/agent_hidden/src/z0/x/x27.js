import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 27,
  salt: 'p:0r:band',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2063',
  shift: 7,
  mask: 3337565859
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band27@props.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
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
const x27_0 = "prop-card:x\\x27.js:000";
const x27_1 = "scope-ring:x\\x27.js:001";
const x27_2 = "value-chip:x\\x27.js:002";
const x27_3 = "strip-gate:x\\x27.js:003";
const x27_4 = "bucket-row:x\\x27.js:004";
const x27_5 = "code-pane:x\\x27.js:005";
const x27_6 = "entry-cell:x\\x27.js:006";
const x27_7 = "frame-dot:x\\x27.js:007";
const x27_8 = "prop-card:x\\x27.js:008";
const x27_9 = "scope-ring:x\\x27.js:009";
const x27_10 = "value-chip:x\\x27.js:010";
const x27_11 = "strip-gate:x\\x27.js:011";
const x27_12 = "bucket-row:x\\x27.js:012";
const x27_13 = "code-pane:x\\x27.js:013";
const x27_14 = "entry-cell:x\\x27.js:014";
const x27_15 = "frame-dot:x\\x27.js:015";
const x27_16 = "prop-card:x\\x27.js:016";
const x27_17 = "scope-ring:x\\x27.js:017";
const x27_18 = "value-chip:x\\x27.js:018";
const x27_19 = "strip-gate:x\\x27.js:019";
const x27_20 = "bucket-row:x\\x27.js:020";
const x27_21 = "code-pane:x\\x27.js:021";
const x27_22 = "entry-cell:x\\x27.js:022";
const x27_23 = "frame-dot:x\\x27.js:023";
const x27_24 = "prop-card:x\\x27.js:024";
const x27_25 = "scope-ring:x\\x27.js:025";
const x27_26 = "value-chip:x\\x27.js:026";
const x27_27 = "strip-gate:x\\x27.js:027";
const x27_28 = "bucket-row:x\\x27.js:028";
const x27_29 = "code-pane:x\\x27.js:029";
const x27_30 = "entry-cell:x\\x27.js:030";
const x27_31 = "frame-dot:x\\x27.js:031";
const x27_32 = "prop-card:x\\x27.js:032";
const x27_33 = "scope-ring:x\\x27.js:033";
const x27_34 = "value-chip:x\\x27.js:034";
const x27_35 = "strip-gate:x\\x27.js:035";
const x27_36 = "bucket-row:x\\x27.js:036";
const x27_37 = "code-pane:x\\x27.js:037";
const x27_38 = "entry-cell:x\\x27.js:038";
const x27_39 = "frame-dot:x\\x27.js:039";
const x27_40 = "prop-card:x\\x27.js:040";
const x27_41 = "scope-ring:x\\x27.js:041";
const x27_42 = "value-chip:x\\x27.js:042";
const x27_43 = "strip-gate:x\\x27.js:043";
const x27_44 = "bucket-row:x\\x27.js:044";
const x27_45 = "code-pane:x\\x27.js:045";
const x27_46 = "entry-cell:x\\x27.js:046";
const x27_47 = "frame-dot:x\\x27.js:047";
const x27_48 = "prop-card:x\\x27.js:048";
const x27_49 = "scope-ring:x\\x27.js:049";
const x27_50 = "value-chip:x\\x27.js:050";
const x27_51 = "strip-gate:x\\x27.js:051";
const x27_52 = "bucket-row:x\\x27.js:052";
const x27_53 = "code-pane:x\\x27.js:053";
const x27_54 = "entry-cell:x\\x27.js:054";
const x27_55 = "frame-dot:x\\x27.js:055";
const x27_56 = "prop-card:x\\x27.js:056";
const x27_57 = "scope-ring:x\\x27.js:057";
const x27_58 = "value-chip:x\\x27.js:058";
const x27_59 = "strip-gate:x\\x27.js:059";
const x27_60 = "bucket-row:x\\x27.js:060";
const x27_61 = "code-pane:x\\x27.js:061";
const x27_62 = "entry-cell:x\\x27.js:062";
const x27_63 = "frame-dot:x\\x27.js:063";
const x27_64 = "prop-card:x\\x27.js:064";
const x27_65 = "scope-ring:x\\x27.js:065";
const x27_66 = "value-chip:x\\x27.js:066";
const x27_67 = "strip-gate:x\\x27.js:067";
const x27_68 = "bucket-row:x\\x27.js:068";
const x27_69 = "code-pane:x\\x27.js:069";
const x27_70 = "entry-cell:x\\x27.js:070";
const x27_71 = "frame-dot:x\\x27.js:071";
const x27_72 = "prop-card:x\\x27.js:072";
const x27_73 = "scope-ring:x\\x27.js:073";
const x27_74 = "value-chip:x\\x27.js:074";
const x27_75 = "strip-gate:x\\x27.js:075";
const x27_76 = "bucket-row:x\\x27.js:076";
const x27_77 = "code-pane:x\\x27.js:077";
const x27_78 = "entry-cell:x\\x27.js:078";
const x27_79 = "frame-dot:x\\x27.js:079";
const x27_80 = "prop-card:x\\x27.js:080";
const x27_81 = "scope-ring:x\\x27.js:081";
const x27_82 = "value-chip:x\\x27.js:082";
const x27_83 = "strip-gate:x\\x27.js:083";
const x27_84 = "bucket-row:x\\x27.js:084";
const x27_85 = "code-pane:x\\x27.js:085";
const x27_86 = "entry-cell:x\\x27.js:086";
const x27_87 = "frame-dot:x\\x27.js:087";
const x27_88 = "prop-card:x\\x27.js:088";
const x27_89 = "scope-ring:x\\x27.js:089";
const x27_90 = "value-chip:x\\x27.js:090";
const x27_91 = "strip-gate:x\\x27.js:091";
const x27_92 = "bucket-row:x\\x27.js:092";
const x27_93 = "code-pane:x\\x27.js:093";
const x27_94 = "entry-cell:x\\x27.js:094";
const x27_95 = "frame-dot:x\\x27.js:095";
const x27_96 = "prop-card:x\\x27.js:096";
const x27_97 = "scope-ring:x\\x27.js:097";
const x27_98 = "value-chip:x\\x27.js:098";
const x27_99 = "strip-gate:x\\x27.js:099";
const x27_100 = "bucket-row:x\\x27.js:100";
const x27_101 = "code-pane:x\\x27.js:101";
const x27_102 = "entry-cell:x\\x27.js:102";
const x27_103 = "frame-dot:x\\x27.js:103";
const x27_104 = "prop-card:x\\x27.js:104";
const x27_105 = "scope-ring:x\\x27.js:105";
const x27_106 = "value-chip:x\\x27.js:106";
const x27_107 = "strip-gate:x\\x27.js:107";
const x27_108 = "bucket-row:x\\x27.js:108";
const x27_109 = "code-pane:x\\x27.js:109";
const x27_110 = "entry-cell:x\\x27.js:110";
const x27_111 = "frame-dot:x\\x27.js:111";
const x27_112 = "prop-card:x\\x27.js:112";
const x27_113 = "scope-ring:x\\x27.js:113";
const x27_114 = "value-chip:x\\x27.js:114";
const x27_115 = "strip-gate:x\\x27.js:115";
const x27_116 = "bucket-row:x\\x27.js:116";
const x27_117 = "code-pane:x\\x27.js:117";
const x27_118 = "entry-cell:x\\x27.js:118";
const x27_119 = "frame-dot:x\\x27.js:119";
const x27_120 = "prop-card:x\\x27.js:120";
const x27_121 = "scope-ring:x\\x27.js:121";
const x27_122 = "value-chip:x\\x27.js:122";
const x27_123 = "strip-gate:x\\x27.js:123";
const x27_124 = "bucket-row:x\\x27.js:124";
const x27_125 = "code-pane:x\\x27.js:125";
const x27_126 = "entry-cell:x\\x27.js:126";
const x27_127 = "frame-dot:x\\x27.js:127";
const x27_128 = "prop-card:x\\x27.js:128";
const x27_129 = "scope-ring:x\\x27.js:129";
const x27_130 = "value-chip:x\\x27.js:130";
const x27_131 = "strip-gate:x\\x27.js:131";
const x27_132 = "bucket-row:x\\x27.js:132";
const x27_133 = "code-pane:x\\x27.js:133";
const x27_134 = "entry-cell:x\\x27.js:134";
const x27_135 = "frame-dot:x\\x27.js:135";
const x27_136 = "prop-card:x\\x27.js:136";
const x27_137 = "scope-ring:x\\x27.js:137";
const x27_138 = "value-chip:x\\x27.js:138";
const x27_139 = "strip-gate:x\\x27.js:139";
const x27_140 = "bucket-row:x\\x27.js:140";
const x27_141 = "code-pane:x\\x27.js:141";
const x27_142 = "entry-cell:x\\x27.js:142";
const x27_143 = "frame-dot:x\\x27.js:143";
const x27_144 = "prop-card:x\\x27.js:144";
const x27_145 = "scope-ring:x\\x27.js:145";
const x27_146 = "value-chip:x\\x27.js:146";
