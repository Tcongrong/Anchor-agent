import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 42,
  salt: 'p:16:band',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2062',
  shift: 6,
  mask: 204429314
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band42@props.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
    { k: 'r', i: 2, v: '0', y: '0', n: 1 },
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
const x42_0 = "prop-card:x\\x42.js:000";
const x42_1 = "scope-ring:x\\x42.js:001";
const x42_2 = "value-chip:x\\x42.js:002";
const x42_3 = "strip-gate:x\\x42.js:003";
const x42_4 = "bucket-row:x\\x42.js:004";
const x42_5 = "code-pane:x\\x42.js:005";
const x42_6 = "entry-cell:x\\x42.js:006";
const x42_7 = "frame-dot:x\\x42.js:007";
const x42_8 = "prop-card:x\\x42.js:008";
const x42_9 = "scope-ring:x\\x42.js:009";
const x42_10 = "value-chip:x\\x42.js:010";
const x42_11 = "strip-gate:x\\x42.js:011";
const x42_12 = "bucket-row:x\\x42.js:012";
const x42_13 = "code-pane:x\\x42.js:013";
const x42_14 = "entry-cell:x\\x42.js:014";
const x42_15 = "frame-dot:x\\x42.js:015";
const x42_16 = "prop-card:x\\x42.js:016";
const x42_17 = "scope-ring:x\\x42.js:017";
const x42_18 = "value-chip:x\\x42.js:018";
const x42_19 = "strip-gate:x\\x42.js:019";
const x42_20 = "bucket-row:x\\x42.js:020";
const x42_21 = "code-pane:x\\x42.js:021";
const x42_22 = "entry-cell:x\\x42.js:022";
const x42_23 = "frame-dot:x\\x42.js:023";
const x42_24 = "prop-card:x\\x42.js:024";
const x42_25 = "scope-ring:x\\x42.js:025";
const x42_26 = "value-chip:x\\x42.js:026";
const x42_27 = "strip-gate:x\\x42.js:027";
const x42_28 = "bucket-row:x\\x42.js:028";
const x42_29 = "code-pane:x\\x42.js:029";
const x42_30 = "entry-cell:x\\x42.js:030";
const x42_31 = "frame-dot:x\\x42.js:031";
const x42_32 = "prop-card:x\\x42.js:032";
const x42_33 = "scope-ring:x\\x42.js:033";
const x42_34 = "value-chip:x\\x42.js:034";
const x42_35 = "strip-gate:x\\x42.js:035";
const x42_36 = "bucket-row:x\\x42.js:036";
const x42_37 = "code-pane:x\\x42.js:037";
const x42_38 = "entry-cell:x\\x42.js:038";
const x42_39 = "frame-dot:x\\x42.js:039";
const x42_40 = "prop-card:x\\x42.js:040";
const x42_41 = "scope-ring:x\\x42.js:041";
const x42_42 = "value-chip:x\\x42.js:042";
const x42_43 = "strip-gate:x\\x42.js:043";
const x42_44 = "bucket-row:x\\x42.js:044";
const x42_45 = "code-pane:x\\x42.js:045";
const x42_46 = "entry-cell:x\\x42.js:046";
const x42_47 = "frame-dot:x\\x42.js:047";
const x42_48 = "prop-card:x\\x42.js:048";
const x42_49 = "scope-ring:x\\x42.js:049";
const x42_50 = "value-chip:x\\x42.js:050";
const x42_51 = "strip-gate:x\\x42.js:051";
const x42_52 = "bucket-row:x\\x42.js:052";
const x42_53 = "code-pane:x\\x42.js:053";
const x42_54 = "entry-cell:x\\x42.js:054";
const x42_55 = "frame-dot:x\\x42.js:055";
const x42_56 = "prop-card:x\\x42.js:056";
const x42_57 = "scope-ring:x\\x42.js:057";
const x42_58 = "value-chip:x\\x42.js:058";
const x42_59 = "strip-gate:x\\x42.js:059";
const x42_60 = "bucket-row:x\\x42.js:060";
const x42_61 = "code-pane:x\\x42.js:061";
const x42_62 = "entry-cell:x\\x42.js:062";
const x42_63 = "frame-dot:x\\x42.js:063";
const x42_64 = "prop-card:x\\x42.js:064";
const x42_65 = "scope-ring:x\\x42.js:065";
const x42_66 = "value-chip:x\\x42.js:066";
const x42_67 = "strip-gate:x\\x42.js:067";
const x42_68 = "bucket-row:x\\x42.js:068";
const x42_69 = "code-pane:x\\x42.js:069";
const x42_70 = "entry-cell:x\\x42.js:070";
const x42_71 = "frame-dot:x\\x42.js:071";
const x42_72 = "prop-card:x\\x42.js:072";
const x42_73 = "scope-ring:x\\x42.js:073";
const x42_74 = "value-chip:x\\x42.js:074";
const x42_75 = "strip-gate:x\\x42.js:075";
const x42_76 = "bucket-row:x\\x42.js:076";
const x42_77 = "code-pane:x\\x42.js:077";
const x42_78 = "entry-cell:x\\x42.js:078";
const x42_79 = "frame-dot:x\\x42.js:079";
const x42_80 = "prop-card:x\\x42.js:080";
const x42_81 = "scope-ring:x\\x42.js:081";
const x42_82 = "value-chip:x\\x42.js:082";
const x42_83 = "strip-gate:x\\x42.js:083";
const x42_84 = "bucket-row:x\\x42.js:084";
const x42_85 = "code-pane:x\\x42.js:085";
const x42_86 = "entry-cell:x\\x42.js:086";
const x42_87 = "frame-dot:x\\x42.js:087";
const x42_88 = "prop-card:x\\x42.js:088";
const x42_89 = "scope-ring:x\\x42.js:089";
const x42_90 = "value-chip:x\\x42.js:090";
const x42_91 = "strip-gate:x\\x42.js:091";
const x42_92 = "bucket-row:x\\x42.js:092";
const x42_93 = "code-pane:x\\x42.js:093";
const x42_94 = "entry-cell:x\\x42.js:094";
const x42_95 = "frame-dot:x\\x42.js:095";
const x42_96 = "prop-card:x\\x42.js:096";
const x42_97 = "scope-ring:x\\x42.js:097";
const x42_98 = "value-chip:x\\x42.js:098";
const x42_99 = "strip-gate:x\\x42.js:099";
const x42_100 = "bucket-row:x\\x42.js:100";
const x42_101 = "code-pane:x\\x42.js:101";
const x42_102 = "entry-cell:x\\x42.js:102";
const x42_103 = "frame-dot:x\\x42.js:103";
const x42_104 = "prop-card:x\\x42.js:104";
const x42_105 = "scope-ring:x\\x42.js:105";
const x42_106 = "value-chip:x\\x42.js:106";
const x42_107 = "strip-gate:x\\x42.js:107";
const x42_108 = "bucket-row:x\\x42.js:108";
const x42_109 = "code-pane:x\\x42.js:109";
const x42_110 = "entry-cell:x\\x42.js:110";
const x42_111 = "frame-dot:x\\x42.js:111";
const x42_112 = "prop-card:x\\x42.js:112";
const x42_113 = "scope-ring:x\\x42.js:113";
const x42_114 = "value-chip:x\\x42.js:114";
const x42_115 = "strip-gate:x\\x42.js:115";
const x42_116 = "bucket-row:x\\x42.js:116";
const x42_117 = "code-pane:x\\x42.js:117";
const x42_118 = "entry-cell:x\\x42.js:118";
const x42_119 = "frame-dot:x\\x42.js:119";
const x42_120 = "prop-card:x\\x42.js:120";
const x42_121 = "scope-ring:x\\x42.js:121";
const x42_122 = "value-chip:x\\x42.js:122";
const x42_123 = "strip-gate:x\\x42.js:123";
const x42_124 = "bucket-row:x\\x42.js:124";
const x42_125 = "code-pane:x\\x42.js:125";
const x42_126 = "entry-cell:x\\x42.js:126";
const x42_127 = "frame-dot:x\\x42.js:127";
const x42_128 = "prop-card:x\\x42.js:128";
const x42_129 = "scope-ring:x\\x42.js:129";
const x42_130 = "value-chip:x\\x42.js:130";
const x42_131 = "strip-gate:x\\x42.js:131";
const x42_132 = "bucket-row:x\\x42.js:132";
const x42_133 = "code-pane:x\\x42.js:133";
const x42_134 = "entry-cell:x\\x42.js:134";
const x42_135 = "frame-dot:x\\x42.js:135";
const x42_136 = "prop-card:x\\x42.js:136";
const x42_137 = "scope-ring:x\\x42.js:137";
const x42_138 = "value-chip:x\\x42.js:138";
const x42_139 = "strip-gate:x\\x42.js:139";
const x42_140 = "bucket-row:x\\x42.js:140";
const x42_141 = "code-pane:x\\x42.js:141";
const x42_142 = "entry-cell:x\\x42.js:142";
const x42_143 = "frame-dot:x\\x42.js:143";
const x42_144 = "prop-card:x\\x42.js:144";
const x42_145 = "scope-ring:x\\x42.js:145";
const x42_146 = "value-chip:x\\x42.js:146";
