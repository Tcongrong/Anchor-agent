import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 30,
  salt: 'p:0u:band',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2062',
  shift: 10,
  mask: 2710938550
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band30@props.dev', y: 'shadow', n: 16 },
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
const x30_0 = "prop-card:x\\x30.js:000";
const x30_1 = "scope-ring:x\\x30.js:001";
const x30_2 = "value-chip:x\\x30.js:002";
const x30_3 = "strip-gate:x\\x30.js:003";
const x30_4 = "bucket-row:x\\x30.js:004";
const x30_5 = "code-pane:x\\x30.js:005";
const x30_6 = "entry-cell:x\\x30.js:006";
const x30_7 = "frame-dot:x\\x30.js:007";
const x30_8 = "prop-card:x\\x30.js:008";
const x30_9 = "scope-ring:x\\x30.js:009";
const x30_10 = "value-chip:x\\x30.js:010";
const x30_11 = "strip-gate:x\\x30.js:011";
const x30_12 = "bucket-row:x\\x30.js:012";
const x30_13 = "code-pane:x\\x30.js:013";
const x30_14 = "entry-cell:x\\x30.js:014";
const x30_15 = "frame-dot:x\\x30.js:015";
const x30_16 = "prop-card:x\\x30.js:016";
const x30_17 = "scope-ring:x\\x30.js:017";
const x30_18 = "value-chip:x\\x30.js:018";
const x30_19 = "strip-gate:x\\x30.js:019";
const x30_20 = "bucket-row:x\\x30.js:020";
const x30_21 = "code-pane:x\\x30.js:021";
const x30_22 = "entry-cell:x\\x30.js:022";
const x30_23 = "frame-dot:x\\x30.js:023";
const x30_24 = "prop-card:x\\x30.js:024";
const x30_25 = "scope-ring:x\\x30.js:025";
const x30_26 = "value-chip:x\\x30.js:026";
const x30_27 = "strip-gate:x\\x30.js:027";
const x30_28 = "bucket-row:x\\x30.js:028";
const x30_29 = "code-pane:x\\x30.js:029";
const x30_30 = "entry-cell:x\\x30.js:030";
const x30_31 = "frame-dot:x\\x30.js:031";
const x30_32 = "prop-card:x\\x30.js:032";
const x30_33 = "scope-ring:x\\x30.js:033";
const x30_34 = "value-chip:x\\x30.js:034";
const x30_35 = "strip-gate:x\\x30.js:035";
const x30_36 = "bucket-row:x\\x30.js:036";
const x30_37 = "code-pane:x\\x30.js:037";
const x30_38 = "entry-cell:x\\x30.js:038";
const x30_39 = "frame-dot:x\\x30.js:039";
const x30_40 = "prop-card:x\\x30.js:040";
const x30_41 = "scope-ring:x\\x30.js:041";
const x30_42 = "value-chip:x\\x30.js:042";
const x30_43 = "strip-gate:x\\x30.js:043";
const x30_44 = "bucket-row:x\\x30.js:044";
const x30_45 = "code-pane:x\\x30.js:045";
const x30_46 = "entry-cell:x\\x30.js:046";
const x30_47 = "frame-dot:x\\x30.js:047";
const x30_48 = "prop-card:x\\x30.js:048";
const x30_49 = "scope-ring:x\\x30.js:049";
const x30_50 = "value-chip:x\\x30.js:050";
const x30_51 = "strip-gate:x\\x30.js:051";
const x30_52 = "bucket-row:x\\x30.js:052";
const x30_53 = "code-pane:x\\x30.js:053";
const x30_54 = "entry-cell:x\\x30.js:054";
const x30_55 = "frame-dot:x\\x30.js:055";
const x30_56 = "prop-card:x\\x30.js:056";
const x30_57 = "scope-ring:x\\x30.js:057";
const x30_58 = "value-chip:x\\x30.js:058";
const x30_59 = "strip-gate:x\\x30.js:059";
const x30_60 = "bucket-row:x\\x30.js:060";
const x30_61 = "code-pane:x\\x30.js:061";
const x30_62 = "entry-cell:x\\x30.js:062";
const x30_63 = "frame-dot:x\\x30.js:063";
const x30_64 = "prop-card:x\\x30.js:064";
const x30_65 = "scope-ring:x\\x30.js:065";
const x30_66 = "value-chip:x\\x30.js:066";
const x30_67 = "strip-gate:x\\x30.js:067";
const x30_68 = "bucket-row:x\\x30.js:068";
const x30_69 = "code-pane:x\\x30.js:069";
const x30_70 = "entry-cell:x\\x30.js:070";
const x30_71 = "frame-dot:x\\x30.js:071";
const x30_72 = "prop-card:x\\x30.js:072";
const x30_73 = "scope-ring:x\\x30.js:073";
const x30_74 = "value-chip:x\\x30.js:074";
const x30_75 = "strip-gate:x\\x30.js:075";
const x30_76 = "bucket-row:x\\x30.js:076";
const x30_77 = "code-pane:x\\x30.js:077";
const x30_78 = "entry-cell:x\\x30.js:078";
const x30_79 = "frame-dot:x\\x30.js:079";
const x30_80 = "prop-card:x\\x30.js:080";
const x30_81 = "scope-ring:x\\x30.js:081";
const x30_82 = "value-chip:x\\x30.js:082";
const x30_83 = "strip-gate:x\\x30.js:083";
const x30_84 = "bucket-row:x\\x30.js:084";
const x30_85 = "code-pane:x\\x30.js:085";
const x30_86 = "entry-cell:x\\x30.js:086";
const x30_87 = "frame-dot:x\\x30.js:087";
const x30_88 = "prop-card:x\\x30.js:088";
const x30_89 = "scope-ring:x\\x30.js:089";
const x30_90 = "value-chip:x\\x30.js:090";
const x30_91 = "strip-gate:x\\x30.js:091";
const x30_92 = "bucket-row:x\\x30.js:092";
const x30_93 = "code-pane:x\\x30.js:093";
const x30_94 = "entry-cell:x\\x30.js:094";
const x30_95 = "frame-dot:x\\x30.js:095";
const x30_96 = "prop-card:x\\x30.js:096";
const x30_97 = "scope-ring:x\\x30.js:097";
const x30_98 = "value-chip:x\\x30.js:098";
const x30_99 = "strip-gate:x\\x30.js:099";
const x30_100 = "bucket-row:x\\x30.js:100";
const x30_101 = "code-pane:x\\x30.js:101";
const x30_102 = "entry-cell:x\\x30.js:102";
const x30_103 = "frame-dot:x\\x30.js:103";
const x30_104 = "prop-card:x\\x30.js:104";
const x30_105 = "scope-ring:x\\x30.js:105";
const x30_106 = "value-chip:x\\x30.js:106";
const x30_107 = "strip-gate:x\\x30.js:107";
const x30_108 = "bucket-row:x\\x30.js:108";
const x30_109 = "code-pane:x\\x30.js:109";
const x30_110 = "entry-cell:x\\x30.js:110";
const x30_111 = "frame-dot:x\\x30.js:111";
const x30_112 = "prop-card:x\\x30.js:112";
const x30_113 = "scope-ring:x\\x30.js:113";
const x30_114 = "value-chip:x\\x30.js:114";
const x30_115 = "strip-gate:x\\x30.js:115";
const x30_116 = "bucket-row:x\\x30.js:116";
const x30_117 = "code-pane:x\\x30.js:117";
const x30_118 = "entry-cell:x\\x30.js:118";
const x30_119 = "frame-dot:x\\x30.js:119";
const x30_120 = "prop-card:x\\x30.js:120";
const x30_121 = "scope-ring:x\\x30.js:121";
const x30_122 = "value-chip:x\\x30.js:122";
const x30_123 = "strip-gate:x\\x30.js:123";
const x30_124 = "bucket-row:x\\x30.js:124";
const x30_125 = "code-pane:x\\x30.js:125";
const x30_126 = "entry-cell:x\\x30.js:126";
const x30_127 = "frame-dot:x\\x30.js:127";
const x30_128 = "prop-card:x\\x30.js:128";
const x30_129 = "scope-ring:x\\x30.js:129";
const x30_130 = "value-chip:x\\x30.js:130";
const x30_131 = "strip-gate:x\\x30.js:131";
const x30_132 = "bucket-row:x\\x30.js:132";
const x30_133 = "code-pane:x\\x30.js:133";
const x30_134 = "entry-cell:x\\x30.js:134";
const x30_135 = "frame-dot:x\\x30.js:135";
const x30_136 = "prop-card:x\\x30.js:136";
const x30_137 = "scope-ring:x\\x30.js:137";
const x30_138 = "value-chip:x\\x30.js:138";
const x30_139 = "strip-gate:x\\x30.js:139";
const x30_140 = "bucket-row:x\\x30.js:140";
const x30_141 = "code-pane:x\\x30.js:141";
const x30_142 = "entry-cell:x\\x30.js:142";
const x30_143 = "frame-dot:x\\x30.js:143";
const x30_144 = "prop-card:x\\x30.js:144";
const x30_145 = "scope-ring:x\\x30.js:145";
const x30_146 = "value-chip:x\\x30.js:146";
