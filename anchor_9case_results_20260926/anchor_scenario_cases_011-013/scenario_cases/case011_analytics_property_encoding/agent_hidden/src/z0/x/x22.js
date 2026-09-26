import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 22,
  salt: 'p:0m:band',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2062',
  shift: 10,
  mask: 2950288942
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag22@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
    { k: 'r', i: 2, v: '7', y: '7', n: 1 },
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
const x22_0 = "prop-card:x\\x22.js:000";
const x22_1 = "scope-ring:x\\x22.js:001";
const x22_2 = "value-chip:x\\x22.js:002";
const x22_3 = "strip-gate:x\\x22.js:003";
const x22_4 = "bucket-row:x\\x22.js:004";
const x22_5 = "code-pane:x\\x22.js:005";
const x22_6 = "entry-cell:x\\x22.js:006";
const x22_7 = "frame-dot:x\\x22.js:007";
const x22_8 = "prop-card:x\\x22.js:008";
const x22_9 = "scope-ring:x\\x22.js:009";
const x22_10 = "value-chip:x\\x22.js:010";
const x22_11 = "strip-gate:x\\x22.js:011";
const x22_12 = "bucket-row:x\\x22.js:012";
const x22_13 = "code-pane:x\\x22.js:013";
const x22_14 = "entry-cell:x\\x22.js:014";
const x22_15 = "frame-dot:x\\x22.js:015";
const x22_16 = "prop-card:x\\x22.js:016";
const x22_17 = "scope-ring:x\\x22.js:017";
const x22_18 = "value-chip:x\\x22.js:018";
const x22_19 = "strip-gate:x\\x22.js:019";
const x22_20 = "bucket-row:x\\x22.js:020";
const x22_21 = "code-pane:x\\x22.js:021";
const x22_22 = "entry-cell:x\\x22.js:022";
const x22_23 = "frame-dot:x\\x22.js:023";
const x22_24 = "prop-card:x\\x22.js:024";
const x22_25 = "scope-ring:x\\x22.js:025";
const x22_26 = "value-chip:x\\x22.js:026";
const x22_27 = "strip-gate:x\\x22.js:027";
const x22_28 = "bucket-row:x\\x22.js:028";
const x22_29 = "code-pane:x\\x22.js:029";
const x22_30 = "entry-cell:x\\x22.js:030";
const x22_31 = "frame-dot:x\\x22.js:031";
const x22_32 = "prop-card:x\\x22.js:032";
const x22_33 = "scope-ring:x\\x22.js:033";
const x22_34 = "value-chip:x\\x22.js:034";
const x22_35 = "strip-gate:x\\x22.js:035";
const x22_36 = "bucket-row:x\\x22.js:036";
const x22_37 = "code-pane:x\\x22.js:037";
const x22_38 = "entry-cell:x\\x22.js:038";
const x22_39 = "frame-dot:x\\x22.js:039";
const x22_40 = "prop-card:x\\x22.js:040";
const x22_41 = "scope-ring:x\\x22.js:041";
const x22_42 = "value-chip:x\\x22.js:042";
const x22_43 = "strip-gate:x\\x22.js:043";
const x22_44 = "bucket-row:x\\x22.js:044";
const x22_45 = "code-pane:x\\x22.js:045";
const x22_46 = "entry-cell:x\\x22.js:046";
const x22_47 = "frame-dot:x\\x22.js:047";
const x22_48 = "prop-card:x\\x22.js:048";
const x22_49 = "scope-ring:x\\x22.js:049";
const x22_50 = "value-chip:x\\x22.js:050";
const x22_51 = "strip-gate:x\\x22.js:051";
const x22_52 = "bucket-row:x\\x22.js:052";
const x22_53 = "code-pane:x\\x22.js:053";
const x22_54 = "entry-cell:x\\x22.js:054";
const x22_55 = "frame-dot:x\\x22.js:055";
const x22_56 = "prop-card:x\\x22.js:056";
const x22_57 = "scope-ring:x\\x22.js:057";
const x22_58 = "value-chip:x\\x22.js:058";
const x22_59 = "strip-gate:x\\x22.js:059";
const x22_60 = "bucket-row:x\\x22.js:060";
const x22_61 = "code-pane:x\\x22.js:061";
const x22_62 = "entry-cell:x\\x22.js:062";
const x22_63 = "frame-dot:x\\x22.js:063";
const x22_64 = "prop-card:x\\x22.js:064";
const x22_65 = "scope-ring:x\\x22.js:065";
const x22_66 = "value-chip:x\\x22.js:066";
const x22_67 = "strip-gate:x\\x22.js:067";
const x22_68 = "bucket-row:x\\x22.js:068";
const x22_69 = "code-pane:x\\x22.js:069";
const x22_70 = "entry-cell:x\\x22.js:070";
const x22_71 = "frame-dot:x\\x22.js:071";
const x22_72 = "prop-card:x\\x22.js:072";
const x22_73 = "scope-ring:x\\x22.js:073";
const x22_74 = "value-chip:x\\x22.js:074";
const x22_75 = "strip-gate:x\\x22.js:075";
const x22_76 = "bucket-row:x\\x22.js:076";
const x22_77 = "code-pane:x\\x22.js:077";
const x22_78 = "entry-cell:x\\x22.js:078";
const x22_79 = "frame-dot:x\\x22.js:079";
const x22_80 = "prop-card:x\\x22.js:080";
const x22_81 = "scope-ring:x\\x22.js:081";
const x22_82 = "value-chip:x\\x22.js:082";
const x22_83 = "strip-gate:x\\x22.js:083";
const x22_84 = "bucket-row:x\\x22.js:084";
const x22_85 = "code-pane:x\\x22.js:085";
const x22_86 = "entry-cell:x\\x22.js:086";
const x22_87 = "frame-dot:x\\x22.js:087";
const x22_88 = "prop-card:x\\x22.js:088";
const x22_89 = "scope-ring:x\\x22.js:089";
const x22_90 = "value-chip:x\\x22.js:090";
const x22_91 = "strip-gate:x\\x22.js:091";
const x22_92 = "bucket-row:x\\x22.js:092";
const x22_93 = "code-pane:x\\x22.js:093";
const x22_94 = "entry-cell:x\\x22.js:094";
const x22_95 = "frame-dot:x\\x22.js:095";
const x22_96 = "prop-card:x\\x22.js:096";
const x22_97 = "scope-ring:x\\x22.js:097";
const x22_98 = "value-chip:x\\x22.js:098";
const x22_99 = "strip-gate:x\\x22.js:099";
const x22_100 = "bucket-row:x\\x22.js:100";
const x22_101 = "code-pane:x\\x22.js:101";
const x22_102 = "entry-cell:x\\x22.js:102";
const x22_103 = "frame-dot:x\\x22.js:103";
const x22_104 = "prop-card:x\\x22.js:104";
const x22_105 = "scope-ring:x\\x22.js:105";
const x22_106 = "value-chip:x\\x22.js:106";
const x22_107 = "strip-gate:x\\x22.js:107";
const x22_108 = "bucket-row:x\\x22.js:108";
const x22_109 = "code-pane:x\\x22.js:109";
const x22_110 = "entry-cell:x\\x22.js:110";
const x22_111 = "frame-dot:x\\x22.js:111";
const x22_112 = "prop-card:x\\x22.js:112";
const x22_113 = "scope-ring:x\\x22.js:113";
const x22_114 = "value-chip:x\\x22.js:114";
const x22_115 = "strip-gate:x\\x22.js:115";
const x22_116 = "bucket-row:x\\x22.js:116";
const x22_117 = "code-pane:x\\x22.js:117";
const x22_118 = "entry-cell:x\\x22.js:118";
const x22_119 = "frame-dot:x\\x22.js:119";
const x22_120 = "prop-card:x\\x22.js:120";
const x22_121 = "scope-ring:x\\x22.js:121";
const x22_122 = "value-chip:x\\x22.js:122";
const x22_123 = "strip-gate:x\\x22.js:123";
const x22_124 = "bucket-row:x\\x22.js:124";
const x22_125 = "code-pane:x\\x22.js:125";
const x22_126 = "entry-cell:x\\x22.js:126";
const x22_127 = "frame-dot:x\\x22.js:127";
const x22_128 = "prop-card:x\\x22.js:128";
const x22_129 = "scope-ring:x\\x22.js:129";
const x22_130 = "value-chip:x\\x22.js:130";
const x22_131 = "strip-gate:x\\x22.js:131";
const x22_132 = "bucket-row:x\\x22.js:132";
const x22_133 = "code-pane:x\\x22.js:133";
const x22_134 = "entry-cell:x\\x22.js:134";
const x22_135 = "frame-dot:x\\x22.js:135";
const x22_136 = "prop-card:x\\x22.js:136";
const x22_137 = "scope-ring:x\\x22.js:137";
const x22_138 = "value-chip:x\\x22.js:138";
const x22_139 = "strip-gate:x\\x22.js:139";
const x22_140 = "bucket-row:x\\x22.js:140";
const x22_141 = "code-pane:x\\x22.js:141";
const x22_142 = "entry-cell:x\\x22.js:142";
const x22_143 = "frame-dot:x\\x22.js:143";
const x22_144 = "prop-card:x\\x22.js:144";
const x22_145 = "scope-ring:x\\x22.js:145";
const x22_146 = "value-chip:x\\x22.js:146";
