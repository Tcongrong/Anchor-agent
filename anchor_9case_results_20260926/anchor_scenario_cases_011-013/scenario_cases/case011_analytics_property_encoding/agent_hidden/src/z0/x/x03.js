import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 3,
  salt: 'p:03:band',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2063',
  shift: 7,
  mask: 4055617035
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band3@props.dev', y: 'shadow', n: 15 },
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
const x03_0 = "prop-card:x\\x03.js:000";
const x03_1 = "scope-ring:x\\x03.js:001";
const x03_2 = "value-chip:x\\x03.js:002";
const x03_3 = "strip-gate:x\\x03.js:003";
const x03_4 = "bucket-row:x\\x03.js:004";
const x03_5 = "code-pane:x\\x03.js:005";
const x03_6 = "entry-cell:x\\x03.js:006";
const x03_7 = "frame-dot:x\\x03.js:007";
const x03_8 = "prop-card:x\\x03.js:008";
const x03_9 = "scope-ring:x\\x03.js:009";
const x03_10 = "value-chip:x\\x03.js:010";
const x03_11 = "strip-gate:x\\x03.js:011";
const x03_12 = "bucket-row:x\\x03.js:012";
const x03_13 = "code-pane:x\\x03.js:013";
const x03_14 = "entry-cell:x\\x03.js:014";
const x03_15 = "frame-dot:x\\x03.js:015";
const x03_16 = "prop-card:x\\x03.js:016";
const x03_17 = "scope-ring:x\\x03.js:017";
const x03_18 = "value-chip:x\\x03.js:018";
const x03_19 = "strip-gate:x\\x03.js:019";
const x03_20 = "bucket-row:x\\x03.js:020";
const x03_21 = "code-pane:x\\x03.js:021";
const x03_22 = "entry-cell:x\\x03.js:022";
const x03_23 = "frame-dot:x\\x03.js:023";
const x03_24 = "prop-card:x\\x03.js:024";
const x03_25 = "scope-ring:x\\x03.js:025";
const x03_26 = "value-chip:x\\x03.js:026";
const x03_27 = "strip-gate:x\\x03.js:027";
const x03_28 = "bucket-row:x\\x03.js:028";
const x03_29 = "code-pane:x\\x03.js:029";
const x03_30 = "entry-cell:x\\x03.js:030";
const x03_31 = "frame-dot:x\\x03.js:031";
const x03_32 = "prop-card:x\\x03.js:032";
const x03_33 = "scope-ring:x\\x03.js:033";
const x03_34 = "value-chip:x\\x03.js:034";
const x03_35 = "strip-gate:x\\x03.js:035";
const x03_36 = "bucket-row:x\\x03.js:036";
const x03_37 = "code-pane:x\\x03.js:037";
const x03_38 = "entry-cell:x\\x03.js:038";
const x03_39 = "frame-dot:x\\x03.js:039";
const x03_40 = "prop-card:x\\x03.js:040";
const x03_41 = "scope-ring:x\\x03.js:041";
const x03_42 = "value-chip:x\\x03.js:042";
const x03_43 = "strip-gate:x\\x03.js:043";
const x03_44 = "bucket-row:x\\x03.js:044";
const x03_45 = "code-pane:x\\x03.js:045";
const x03_46 = "entry-cell:x\\x03.js:046";
const x03_47 = "frame-dot:x\\x03.js:047";
const x03_48 = "prop-card:x\\x03.js:048";
const x03_49 = "scope-ring:x\\x03.js:049";
const x03_50 = "value-chip:x\\x03.js:050";
const x03_51 = "strip-gate:x\\x03.js:051";
const x03_52 = "bucket-row:x\\x03.js:052";
const x03_53 = "code-pane:x\\x03.js:053";
const x03_54 = "entry-cell:x\\x03.js:054";
const x03_55 = "frame-dot:x\\x03.js:055";
const x03_56 = "prop-card:x\\x03.js:056";
const x03_57 = "scope-ring:x\\x03.js:057";
const x03_58 = "value-chip:x\\x03.js:058";
const x03_59 = "strip-gate:x\\x03.js:059";
const x03_60 = "bucket-row:x\\x03.js:060";
const x03_61 = "code-pane:x\\x03.js:061";
const x03_62 = "entry-cell:x\\x03.js:062";
const x03_63 = "frame-dot:x\\x03.js:063";
const x03_64 = "prop-card:x\\x03.js:064";
const x03_65 = "scope-ring:x\\x03.js:065";
const x03_66 = "value-chip:x\\x03.js:066";
const x03_67 = "strip-gate:x\\x03.js:067";
const x03_68 = "bucket-row:x\\x03.js:068";
const x03_69 = "code-pane:x\\x03.js:069";
const x03_70 = "entry-cell:x\\x03.js:070";
const x03_71 = "frame-dot:x\\x03.js:071";
const x03_72 = "prop-card:x\\x03.js:072";
const x03_73 = "scope-ring:x\\x03.js:073";
const x03_74 = "value-chip:x\\x03.js:074";
const x03_75 = "strip-gate:x\\x03.js:075";
const x03_76 = "bucket-row:x\\x03.js:076";
const x03_77 = "code-pane:x\\x03.js:077";
const x03_78 = "entry-cell:x\\x03.js:078";
const x03_79 = "frame-dot:x\\x03.js:079";
const x03_80 = "prop-card:x\\x03.js:080";
const x03_81 = "scope-ring:x\\x03.js:081";
const x03_82 = "value-chip:x\\x03.js:082";
const x03_83 = "strip-gate:x\\x03.js:083";
const x03_84 = "bucket-row:x\\x03.js:084";
const x03_85 = "code-pane:x\\x03.js:085";
const x03_86 = "entry-cell:x\\x03.js:086";
const x03_87 = "frame-dot:x\\x03.js:087";
const x03_88 = "prop-card:x\\x03.js:088";
const x03_89 = "scope-ring:x\\x03.js:089";
const x03_90 = "value-chip:x\\x03.js:090";
const x03_91 = "strip-gate:x\\x03.js:091";
const x03_92 = "bucket-row:x\\x03.js:092";
const x03_93 = "code-pane:x\\x03.js:093";
const x03_94 = "entry-cell:x\\x03.js:094";
const x03_95 = "frame-dot:x\\x03.js:095";
const x03_96 = "prop-card:x\\x03.js:096";
const x03_97 = "scope-ring:x\\x03.js:097";
const x03_98 = "value-chip:x\\x03.js:098";
const x03_99 = "strip-gate:x\\x03.js:099";
const x03_100 = "bucket-row:x\\x03.js:100";
const x03_101 = "code-pane:x\\x03.js:101";
const x03_102 = "entry-cell:x\\x03.js:102";
const x03_103 = "frame-dot:x\\x03.js:103";
const x03_104 = "prop-card:x\\x03.js:104";
const x03_105 = "scope-ring:x\\x03.js:105";
const x03_106 = "value-chip:x\\x03.js:106";
const x03_107 = "strip-gate:x\\x03.js:107";
const x03_108 = "bucket-row:x\\x03.js:108";
const x03_109 = "code-pane:x\\x03.js:109";
const x03_110 = "entry-cell:x\\x03.js:110";
const x03_111 = "frame-dot:x\\x03.js:111";
const x03_112 = "prop-card:x\\x03.js:112";
const x03_113 = "scope-ring:x\\x03.js:113";
const x03_114 = "value-chip:x\\x03.js:114";
const x03_115 = "strip-gate:x\\x03.js:115";
const x03_116 = "bucket-row:x\\x03.js:116";
const x03_117 = "code-pane:x\\x03.js:117";
const x03_118 = "entry-cell:x\\x03.js:118";
const x03_119 = "frame-dot:x\\x03.js:119";
const x03_120 = "prop-card:x\\x03.js:120";
const x03_121 = "scope-ring:x\\x03.js:121";
const x03_122 = "value-chip:x\\x03.js:122";
const x03_123 = "strip-gate:x\\x03.js:123";
const x03_124 = "bucket-row:x\\x03.js:124";
const x03_125 = "code-pane:x\\x03.js:125";
const x03_126 = "entry-cell:x\\x03.js:126";
const x03_127 = "frame-dot:x\\x03.js:127";
const x03_128 = "prop-card:x\\x03.js:128";
const x03_129 = "scope-ring:x\\x03.js:129";
const x03_130 = "value-chip:x\\x03.js:130";
const x03_131 = "strip-gate:x\\x03.js:131";
const x03_132 = "bucket-row:x\\x03.js:132";
const x03_133 = "code-pane:x\\x03.js:133";
const x03_134 = "entry-cell:x\\x03.js:134";
const x03_135 = "frame-dot:x\\x03.js:135";
const x03_136 = "prop-card:x\\x03.js:136";
const x03_137 = "scope-ring:x\\x03.js:137";
const x03_138 = "value-chip:x\\x03.js:138";
const x03_139 = "strip-gate:x\\x03.js:139";
const x03_140 = "bucket-row:x\\x03.js:140";
const x03_141 = "code-pane:x\\x03.js:141";
const x03_142 = "entry-cell:x\\x03.js:142";
const x03_143 = "frame-dot:x\\x03.js:143";
const x03_144 = "prop-card:x\\x03.js:144";
const x03_145 = "scope-ring:x\\x03.js:145";
const x03_146 = "value-chip:x\\x03.js:146";
