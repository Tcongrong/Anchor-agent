import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 12,
  salt: 'p:0c:band',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2060',
  shift: 8,
  mask: 2175735108
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band12@props.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
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
const x12_0 = "prop-card:x\\x12.js:000";
const x12_1 = "scope-ring:x\\x12.js:001";
const x12_2 = "value-chip:x\\x12.js:002";
const x12_3 = "strip-gate:x\\x12.js:003";
const x12_4 = "bucket-row:x\\x12.js:004";
const x12_5 = "code-pane:x\\x12.js:005";
const x12_6 = "entry-cell:x\\x12.js:006";
const x12_7 = "frame-dot:x\\x12.js:007";
const x12_8 = "prop-card:x\\x12.js:008";
const x12_9 = "scope-ring:x\\x12.js:009";
const x12_10 = "value-chip:x\\x12.js:010";
const x12_11 = "strip-gate:x\\x12.js:011";
const x12_12 = "bucket-row:x\\x12.js:012";
const x12_13 = "code-pane:x\\x12.js:013";
const x12_14 = "entry-cell:x\\x12.js:014";
const x12_15 = "frame-dot:x\\x12.js:015";
const x12_16 = "prop-card:x\\x12.js:016";
const x12_17 = "scope-ring:x\\x12.js:017";
const x12_18 = "value-chip:x\\x12.js:018";
const x12_19 = "strip-gate:x\\x12.js:019";
const x12_20 = "bucket-row:x\\x12.js:020";
const x12_21 = "code-pane:x\\x12.js:021";
const x12_22 = "entry-cell:x\\x12.js:022";
const x12_23 = "frame-dot:x\\x12.js:023";
const x12_24 = "prop-card:x\\x12.js:024";
const x12_25 = "scope-ring:x\\x12.js:025";
const x12_26 = "value-chip:x\\x12.js:026";
const x12_27 = "strip-gate:x\\x12.js:027";
const x12_28 = "bucket-row:x\\x12.js:028";
const x12_29 = "code-pane:x\\x12.js:029";
const x12_30 = "entry-cell:x\\x12.js:030";
const x12_31 = "frame-dot:x\\x12.js:031";
const x12_32 = "prop-card:x\\x12.js:032";
const x12_33 = "scope-ring:x\\x12.js:033";
const x12_34 = "value-chip:x\\x12.js:034";
const x12_35 = "strip-gate:x\\x12.js:035";
const x12_36 = "bucket-row:x\\x12.js:036";
const x12_37 = "code-pane:x\\x12.js:037";
const x12_38 = "entry-cell:x\\x12.js:038";
const x12_39 = "frame-dot:x\\x12.js:039";
const x12_40 = "prop-card:x\\x12.js:040";
const x12_41 = "scope-ring:x\\x12.js:041";
const x12_42 = "value-chip:x\\x12.js:042";
const x12_43 = "strip-gate:x\\x12.js:043";
const x12_44 = "bucket-row:x\\x12.js:044";
const x12_45 = "code-pane:x\\x12.js:045";
const x12_46 = "entry-cell:x\\x12.js:046";
const x12_47 = "frame-dot:x\\x12.js:047";
const x12_48 = "prop-card:x\\x12.js:048";
const x12_49 = "scope-ring:x\\x12.js:049";
const x12_50 = "value-chip:x\\x12.js:050";
const x12_51 = "strip-gate:x\\x12.js:051";
const x12_52 = "bucket-row:x\\x12.js:052";
const x12_53 = "code-pane:x\\x12.js:053";
const x12_54 = "entry-cell:x\\x12.js:054";
const x12_55 = "frame-dot:x\\x12.js:055";
const x12_56 = "prop-card:x\\x12.js:056";
const x12_57 = "scope-ring:x\\x12.js:057";
const x12_58 = "value-chip:x\\x12.js:058";
const x12_59 = "strip-gate:x\\x12.js:059";
const x12_60 = "bucket-row:x\\x12.js:060";
const x12_61 = "code-pane:x\\x12.js:061";
const x12_62 = "entry-cell:x\\x12.js:062";
const x12_63 = "frame-dot:x\\x12.js:063";
const x12_64 = "prop-card:x\\x12.js:064";
const x12_65 = "scope-ring:x\\x12.js:065";
const x12_66 = "value-chip:x\\x12.js:066";
const x12_67 = "strip-gate:x\\x12.js:067";
const x12_68 = "bucket-row:x\\x12.js:068";
const x12_69 = "code-pane:x\\x12.js:069";
const x12_70 = "entry-cell:x\\x12.js:070";
const x12_71 = "frame-dot:x\\x12.js:071";
const x12_72 = "prop-card:x\\x12.js:072";
const x12_73 = "scope-ring:x\\x12.js:073";
const x12_74 = "value-chip:x\\x12.js:074";
const x12_75 = "strip-gate:x\\x12.js:075";
const x12_76 = "bucket-row:x\\x12.js:076";
const x12_77 = "code-pane:x\\x12.js:077";
const x12_78 = "entry-cell:x\\x12.js:078";
const x12_79 = "frame-dot:x\\x12.js:079";
const x12_80 = "prop-card:x\\x12.js:080";
const x12_81 = "scope-ring:x\\x12.js:081";
const x12_82 = "value-chip:x\\x12.js:082";
const x12_83 = "strip-gate:x\\x12.js:083";
const x12_84 = "bucket-row:x\\x12.js:084";
const x12_85 = "code-pane:x\\x12.js:085";
const x12_86 = "entry-cell:x\\x12.js:086";
const x12_87 = "frame-dot:x\\x12.js:087";
const x12_88 = "prop-card:x\\x12.js:088";
const x12_89 = "scope-ring:x\\x12.js:089";
const x12_90 = "value-chip:x\\x12.js:090";
const x12_91 = "strip-gate:x\\x12.js:091";
const x12_92 = "bucket-row:x\\x12.js:092";
const x12_93 = "code-pane:x\\x12.js:093";
const x12_94 = "entry-cell:x\\x12.js:094";
const x12_95 = "frame-dot:x\\x12.js:095";
const x12_96 = "prop-card:x\\x12.js:096";
const x12_97 = "scope-ring:x\\x12.js:097";
const x12_98 = "value-chip:x\\x12.js:098";
const x12_99 = "strip-gate:x\\x12.js:099";
const x12_100 = "bucket-row:x\\x12.js:100";
const x12_101 = "code-pane:x\\x12.js:101";
const x12_102 = "entry-cell:x\\x12.js:102";
const x12_103 = "frame-dot:x\\x12.js:103";
const x12_104 = "prop-card:x\\x12.js:104";
const x12_105 = "scope-ring:x\\x12.js:105";
const x12_106 = "value-chip:x\\x12.js:106";
const x12_107 = "strip-gate:x\\x12.js:107";
const x12_108 = "bucket-row:x\\x12.js:108";
const x12_109 = "code-pane:x\\x12.js:109";
const x12_110 = "entry-cell:x\\x12.js:110";
const x12_111 = "frame-dot:x\\x12.js:111";
const x12_112 = "prop-card:x\\x12.js:112";
const x12_113 = "scope-ring:x\\x12.js:113";
const x12_114 = "value-chip:x\\x12.js:114";
const x12_115 = "strip-gate:x\\x12.js:115";
const x12_116 = "bucket-row:x\\x12.js:116";
const x12_117 = "code-pane:x\\x12.js:117";
const x12_118 = "entry-cell:x\\x12.js:118";
const x12_119 = "frame-dot:x\\x12.js:119";
const x12_120 = "prop-card:x\\x12.js:120";
const x12_121 = "scope-ring:x\\x12.js:121";
const x12_122 = "value-chip:x\\x12.js:122";
const x12_123 = "strip-gate:x\\x12.js:123";
const x12_124 = "bucket-row:x\\x12.js:124";
const x12_125 = "code-pane:x\\x12.js:125";
const x12_126 = "entry-cell:x\\x12.js:126";
const x12_127 = "frame-dot:x\\x12.js:127";
const x12_128 = "prop-card:x\\x12.js:128";
const x12_129 = "scope-ring:x\\x12.js:129";
const x12_130 = "value-chip:x\\x12.js:130";
const x12_131 = "strip-gate:x\\x12.js:131";
const x12_132 = "bucket-row:x\\x12.js:132";
const x12_133 = "code-pane:x\\x12.js:133";
const x12_134 = "entry-cell:x\\x12.js:134";
const x12_135 = "frame-dot:x\\x12.js:135";
const x12_136 = "prop-card:x\\x12.js:136";
const x12_137 = "scope-ring:x\\x12.js:137";
const x12_138 = "value-chip:x\\x12.js:138";
const x12_139 = "strip-gate:x\\x12.js:139";
const x12_140 = "bucket-row:x\\x12.js:140";
const x12_141 = "code-pane:x\\x12.js:141";
const x12_142 = "entry-cell:x\\x12.js:142";
const x12_143 = "frame-dot:x\\x12.js:143";
const x12_144 = "prop-card:x\\x12.js:144";
const x12_145 = "scope-ring:x\\x12.js:145";
const x12_146 = "value-chip:x\\x12.js:146";
