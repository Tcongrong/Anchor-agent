import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 36,
  salt: 'p:10:band',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 8,
  mask: 1457683932
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band36@props.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
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
const x36_0 = "prop-card:x\\x36.js:000";
const x36_1 = "scope-ring:x\\x36.js:001";
const x36_2 = "value-chip:x\\x36.js:002";
const x36_3 = "strip-gate:x\\x36.js:003";
const x36_4 = "bucket-row:x\\x36.js:004";
const x36_5 = "code-pane:x\\x36.js:005";
const x36_6 = "entry-cell:x\\x36.js:006";
const x36_7 = "frame-dot:x\\x36.js:007";
const x36_8 = "prop-card:x\\x36.js:008";
const x36_9 = "scope-ring:x\\x36.js:009";
const x36_10 = "value-chip:x\\x36.js:010";
const x36_11 = "strip-gate:x\\x36.js:011";
const x36_12 = "bucket-row:x\\x36.js:012";
const x36_13 = "code-pane:x\\x36.js:013";
const x36_14 = "entry-cell:x\\x36.js:014";
const x36_15 = "frame-dot:x\\x36.js:015";
const x36_16 = "prop-card:x\\x36.js:016";
const x36_17 = "scope-ring:x\\x36.js:017";
const x36_18 = "value-chip:x\\x36.js:018";
const x36_19 = "strip-gate:x\\x36.js:019";
const x36_20 = "bucket-row:x\\x36.js:020";
const x36_21 = "code-pane:x\\x36.js:021";
const x36_22 = "entry-cell:x\\x36.js:022";
const x36_23 = "frame-dot:x\\x36.js:023";
const x36_24 = "prop-card:x\\x36.js:024";
const x36_25 = "scope-ring:x\\x36.js:025";
const x36_26 = "value-chip:x\\x36.js:026";
const x36_27 = "strip-gate:x\\x36.js:027";
const x36_28 = "bucket-row:x\\x36.js:028";
const x36_29 = "code-pane:x\\x36.js:029";
const x36_30 = "entry-cell:x\\x36.js:030";
const x36_31 = "frame-dot:x\\x36.js:031";
const x36_32 = "prop-card:x\\x36.js:032";
const x36_33 = "scope-ring:x\\x36.js:033";
const x36_34 = "value-chip:x\\x36.js:034";
const x36_35 = "strip-gate:x\\x36.js:035";
const x36_36 = "bucket-row:x\\x36.js:036";
const x36_37 = "code-pane:x\\x36.js:037";
const x36_38 = "entry-cell:x\\x36.js:038";
const x36_39 = "frame-dot:x\\x36.js:039";
const x36_40 = "prop-card:x\\x36.js:040";
const x36_41 = "scope-ring:x\\x36.js:041";
const x36_42 = "value-chip:x\\x36.js:042";
const x36_43 = "strip-gate:x\\x36.js:043";
const x36_44 = "bucket-row:x\\x36.js:044";
const x36_45 = "code-pane:x\\x36.js:045";
const x36_46 = "entry-cell:x\\x36.js:046";
const x36_47 = "frame-dot:x\\x36.js:047";
const x36_48 = "prop-card:x\\x36.js:048";
const x36_49 = "scope-ring:x\\x36.js:049";
const x36_50 = "value-chip:x\\x36.js:050";
const x36_51 = "strip-gate:x\\x36.js:051";
const x36_52 = "bucket-row:x\\x36.js:052";
const x36_53 = "code-pane:x\\x36.js:053";
const x36_54 = "entry-cell:x\\x36.js:054";
const x36_55 = "frame-dot:x\\x36.js:055";
const x36_56 = "prop-card:x\\x36.js:056";
const x36_57 = "scope-ring:x\\x36.js:057";
const x36_58 = "value-chip:x\\x36.js:058";
const x36_59 = "strip-gate:x\\x36.js:059";
const x36_60 = "bucket-row:x\\x36.js:060";
const x36_61 = "code-pane:x\\x36.js:061";
const x36_62 = "entry-cell:x\\x36.js:062";
const x36_63 = "frame-dot:x\\x36.js:063";
const x36_64 = "prop-card:x\\x36.js:064";
const x36_65 = "scope-ring:x\\x36.js:065";
const x36_66 = "value-chip:x\\x36.js:066";
const x36_67 = "strip-gate:x\\x36.js:067";
const x36_68 = "bucket-row:x\\x36.js:068";
const x36_69 = "code-pane:x\\x36.js:069";
const x36_70 = "entry-cell:x\\x36.js:070";
const x36_71 = "frame-dot:x\\x36.js:071";
const x36_72 = "prop-card:x\\x36.js:072";
const x36_73 = "scope-ring:x\\x36.js:073";
const x36_74 = "value-chip:x\\x36.js:074";
const x36_75 = "strip-gate:x\\x36.js:075";
const x36_76 = "bucket-row:x\\x36.js:076";
const x36_77 = "code-pane:x\\x36.js:077";
const x36_78 = "entry-cell:x\\x36.js:078";
const x36_79 = "frame-dot:x\\x36.js:079";
const x36_80 = "prop-card:x\\x36.js:080";
const x36_81 = "scope-ring:x\\x36.js:081";
const x36_82 = "value-chip:x\\x36.js:082";
const x36_83 = "strip-gate:x\\x36.js:083";
const x36_84 = "bucket-row:x\\x36.js:084";
const x36_85 = "code-pane:x\\x36.js:085";
const x36_86 = "entry-cell:x\\x36.js:086";
const x36_87 = "frame-dot:x\\x36.js:087";
const x36_88 = "prop-card:x\\x36.js:088";
const x36_89 = "scope-ring:x\\x36.js:089";
const x36_90 = "value-chip:x\\x36.js:090";
const x36_91 = "strip-gate:x\\x36.js:091";
const x36_92 = "bucket-row:x\\x36.js:092";
const x36_93 = "code-pane:x\\x36.js:093";
const x36_94 = "entry-cell:x\\x36.js:094";
const x36_95 = "frame-dot:x\\x36.js:095";
const x36_96 = "prop-card:x\\x36.js:096";
const x36_97 = "scope-ring:x\\x36.js:097";
const x36_98 = "value-chip:x\\x36.js:098";
const x36_99 = "strip-gate:x\\x36.js:099";
const x36_100 = "bucket-row:x\\x36.js:100";
const x36_101 = "code-pane:x\\x36.js:101";
const x36_102 = "entry-cell:x\\x36.js:102";
const x36_103 = "frame-dot:x\\x36.js:103";
const x36_104 = "prop-card:x\\x36.js:104";
const x36_105 = "scope-ring:x\\x36.js:105";
const x36_106 = "value-chip:x\\x36.js:106";
const x36_107 = "strip-gate:x\\x36.js:107";
const x36_108 = "bucket-row:x\\x36.js:108";
const x36_109 = "code-pane:x\\x36.js:109";
const x36_110 = "entry-cell:x\\x36.js:110";
const x36_111 = "frame-dot:x\\x36.js:111";
const x36_112 = "prop-card:x\\x36.js:112";
const x36_113 = "scope-ring:x\\x36.js:113";
const x36_114 = "value-chip:x\\x36.js:114";
const x36_115 = "strip-gate:x\\x36.js:115";
const x36_116 = "bucket-row:x\\x36.js:116";
const x36_117 = "code-pane:x\\x36.js:117";
const x36_118 = "entry-cell:x\\x36.js:118";
const x36_119 = "frame-dot:x\\x36.js:119";
const x36_120 = "prop-card:x\\x36.js:120";
const x36_121 = "scope-ring:x\\x36.js:121";
const x36_122 = "value-chip:x\\x36.js:122";
const x36_123 = "strip-gate:x\\x36.js:123";
const x36_124 = "bucket-row:x\\x36.js:124";
const x36_125 = "code-pane:x\\x36.js:125";
const x36_126 = "entry-cell:x\\x36.js:126";
const x36_127 = "frame-dot:x\\x36.js:127";
const x36_128 = "prop-card:x\\x36.js:128";
const x36_129 = "scope-ring:x\\x36.js:129";
const x36_130 = "value-chip:x\\x36.js:130";
const x36_131 = "strip-gate:x\\x36.js:131";
const x36_132 = "bucket-row:x\\x36.js:132";
const x36_133 = "code-pane:x\\x36.js:133";
const x36_134 = "entry-cell:x\\x36.js:134";
const x36_135 = "frame-dot:x\\x36.js:135";
const x36_136 = "prop-card:x\\x36.js:136";
const x36_137 = "scope-ring:x\\x36.js:137";
const x36_138 = "value-chip:x\\x36.js:138";
const x36_139 = "strip-gate:x\\x36.js:139";
const x36_140 = "bucket-row:x\\x36.js:140";
const x36_141 = "code-pane:x\\x36.js:141";
const x36_142 = "entry-cell:x\\x36.js:142";
const x36_143 = "frame-dot:x\\x36.js:143";
const x36_144 = "prop-card:x\\x36.js:144";
const x36_145 = "scope-ring:x\\x36.js:145";
const x36_146 = "value-chip:x\\x36.js:146";
