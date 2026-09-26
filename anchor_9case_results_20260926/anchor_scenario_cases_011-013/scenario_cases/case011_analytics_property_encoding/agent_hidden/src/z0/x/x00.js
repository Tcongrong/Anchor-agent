import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 0,
  salt: 'p:00:band',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2060',
  shift: 4,
  mask: 387277048
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band0@props.dev', y: 'shadow', n: 15 },
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
const x00_0 = "prop-card:x\\x00.js:000";
const x00_1 = "scope-ring:x\\x00.js:001";
const x00_2 = "value-chip:x\\x00.js:002";
const x00_3 = "strip-gate:x\\x00.js:003";
const x00_4 = "bucket-row:x\\x00.js:004";
const x00_5 = "code-pane:x\\x00.js:005";
const x00_6 = "entry-cell:x\\x00.js:006";
const x00_7 = "frame-dot:x\\x00.js:007";
const x00_8 = "prop-card:x\\x00.js:008";
const x00_9 = "scope-ring:x\\x00.js:009";
const x00_10 = "value-chip:x\\x00.js:010";
const x00_11 = "strip-gate:x\\x00.js:011";
const x00_12 = "bucket-row:x\\x00.js:012";
const x00_13 = "code-pane:x\\x00.js:013";
const x00_14 = "entry-cell:x\\x00.js:014";
const x00_15 = "frame-dot:x\\x00.js:015";
const x00_16 = "prop-card:x\\x00.js:016";
const x00_17 = "scope-ring:x\\x00.js:017";
const x00_18 = "value-chip:x\\x00.js:018";
const x00_19 = "strip-gate:x\\x00.js:019";
const x00_20 = "bucket-row:x\\x00.js:020";
const x00_21 = "code-pane:x\\x00.js:021";
const x00_22 = "entry-cell:x\\x00.js:022";
const x00_23 = "frame-dot:x\\x00.js:023";
const x00_24 = "prop-card:x\\x00.js:024";
const x00_25 = "scope-ring:x\\x00.js:025";
const x00_26 = "value-chip:x\\x00.js:026";
const x00_27 = "strip-gate:x\\x00.js:027";
const x00_28 = "bucket-row:x\\x00.js:028";
const x00_29 = "code-pane:x\\x00.js:029";
const x00_30 = "entry-cell:x\\x00.js:030";
const x00_31 = "frame-dot:x\\x00.js:031";
const x00_32 = "prop-card:x\\x00.js:032";
const x00_33 = "scope-ring:x\\x00.js:033";
const x00_34 = "value-chip:x\\x00.js:034";
const x00_35 = "strip-gate:x\\x00.js:035";
const x00_36 = "bucket-row:x\\x00.js:036";
const x00_37 = "code-pane:x\\x00.js:037";
const x00_38 = "entry-cell:x\\x00.js:038";
const x00_39 = "frame-dot:x\\x00.js:039";
const x00_40 = "prop-card:x\\x00.js:040";
const x00_41 = "scope-ring:x\\x00.js:041";
const x00_42 = "value-chip:x\\x00.js:042";
const x00_43 = "strip-gate:x\\x00.js:043";
const x00_44 = "bucket-row:x\\x00.js:044";
const x00_45 = "code-pane:x\\x00.js:045";
const x00_46 = "entry-cell:x\\x00.js:046";
const x00_47 = "frame-dot:x\\x00.js:047";
const x00_48 = "prop-card:x\\x00.js:048";
const x00_49 = "scope-ring:x\\x00.js:049";
const x00_50 = "value-chip:x\\x00.js:050";
const x00_51 = "strip-gate:x\\x00.js:051";
const x00_52 = "bucket-row:x\\x00.js:052";
const x00_53 = "code-pane:x\\x00.js:053";
const x00_54 = "entry-cell:x\\x00.js:054";
const x00_55 = "frame-dot:x\\x00.js:055";
const x00_56 = "prop-card:x\\x00.js:056";
const x00_57 = "scope-ring:x\\x00.js:057";
const x00_58 = "value-chip:x\\x00.js:058";
const x00_59 = "strip-gate:x\\x00.js:059";
const x00_60 = "bucket-row:x\\x00.js:060";
const x00_61 = "code-pane:x\\x00.js:061";
const x00_62 = "entry-cell:x\\x00.js:062";
const x00_63 = "frame-dot:x\\x00.js:063";
const x00_64 = "prop-card:x\\x00.js:064";
const x00_65 = "scope-ring:x\\x00.js:065";
const x00_66 = "value-chip:x\\x00.js:066";
const x00_67 = "strip-gate:x\\x00.js:067";
const x00_68 = "bucket-row:x\\x00.js:068";
const x00_69 = "code-pane:x\\x00.js:069";
const x00_70 = "entry-cell:x\\x00.js:070";
const x00_71 = "frame-dot:x\\x00.js:071";
const x00_72 = "prop-card:x\\x00.js:072";
const x00_73 = "scope-ring:x\\x00.js:073";
const x00_74 = "value-chip:x\\x00.js:074";
const x00_75 = "strip-gate:x\\x00.js:075";
const x00_76 = "bucket-row:x\\x00.js:076";
const x00_77 = "code-pane:x\\x00.js:077";
const x00_78 = "entry-cell:x\\x00.js:078";
const x00_79 = "frame-dot:x\\x00.js:079";
const x00_80 = "prop-card:x\\x00.js:080";
const x00_81 = "scope-ring:x\\x00.js:081";
const x00_82 = "value-chip:x\\x00.js:082";
const x00_83 = "strip-gate:x\\x00.js:083";
const x00_84 = "bucket-row:x\\x00.js:084";
const x00_85 = "code-pane:x\\x00.js:085";
const x00_86 = "entry-cell:x\\x00.js:086";
const x00_87 = "frame-dot:x\\x00.js:087";
const x00_88 = "prop-card:x\\x00.js:088";
const x00_89 = "scope-ring:x\\x00.js:089";
const x00_90 = "value-chip:x\\x00.js:090";
const x00_91 = "strip-gate:x\\x00.js:091";
const x00_92 = "bucket-row:x\\x00.js:092";
const x00_93 = "code-pane:x\\x00.js:093";
const x00_94 = "entry-cell:x\\x00.js:094";
const x00_95 = "frame-dot:x\\x00.js:095";
const x00_96 = "prop-card:x\\x00.js:096";
const x00_97 = "scope-ring:x\\x00.js:097";
const x00_98 = "value-chip:x\\x00.js:098";
const x00_99 = "strip-gate:x\\x00.js:099";
const x00_100 = "bucket-row:x\\x00.js:100";
const x00_101 = "code-pane:x\\x00.js:101";
const x00_102 = "entry-cell:x\\x00.js:102";
const x00_103 = "frame-dot:x\\x00.js:103";
const x00_104 = "prop-card:x\\x00.js:104";
const x00_105 = "scope-ring:x\\x00.js:105";
const x00_106 = "value-chip:x\\x00.js:106";
const x00_107 = "strip-gate:x\\x00.js:107";
const x00_108 = "bucket-row:x\\x00.js:108";
const x00_109 = "code-pane:x\\x00.js:109";
const x00_110 = "entry-cell:x\\x00.js:110";
const x00_111 = "frame-dot:x\\x00.js:111";
const x00_112 = "prop-card:x\\x00.js:112";
const x00_113 = "scope-ring:x\\x00.js:113";
const x00_114 = "value-chip:x\\x00.js:114";
const x00_115 = "strip-gate:x\\x00.js:115";
const x00_116 = "bucket-row:x\\x00.js:116";
const x00_117 = "code-pane:x\\x00.js:117";
const x00_118 = "entry-cell:x\\x00.js:118";
const x00_119 = "frame-dot:x\\x00.js:119";
const x00_120 = "prop-card:x\\x00.js:120";
const x00_121 = "scope-ring:x\\x00.js:121";
const x00_122 = "value-chip:x\\x00.js:122";
const x00_123 = "strip-gate:x\\x00.js:123";
const x00_124 = "bucket-row:x\\x00.js:124";
const x00_125 = "code-pane:x\\x00.js:125";
const x00_126 = "entry-cell:x\\x00.js:126";
const x00_127 = "frame-dot:x\\x00.js:127";
const x00_128 = "prop-card:x\\x00.js:128";
const x00_129 = "scope-ring:x\\x00.js:129";
const x00_130 = "value-chip:x\\x00.js:130";
const x00_131 = "strip-gate:x\\x00.js:131";
const x00_132 = "bucket-row:x\\x00.js:132";
const x00_133 = "code-pane:x\\x00.js:133";
const x00_134 = "entry-cell:x\\x00.js:134";
const x00_135 = "frame-dot:x\\x00.js:135";
const x00_136 = "prop-card:x\\x00.js:136";
const x00_137 = "scope-ring:x\\x00.js:137";
const x00_138 = "value-chip:x\\x00.js:138";
const x00_139 = "strip-gate:x\\x00.js:139";
const x00_140 = "bucket-row:x\\x00.js:140";
const x00_141 = "code-pane:x\\x00.js:141";
const x00_142 = "entry-cell:x\\x00.js:142";
const x00_143 = "frame-dot:x\\x00.js:143";
const x00_144 = "prop-card:x\\x00.js:144";
const x00_145 = "scope-ring:x\\x00.js:145";
const x00_146 = "value-chip:x\\x00.js:146";
