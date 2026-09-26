import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 43,
  salt: 'p:17:band',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2063',
  shift: 7,
  mask: 2858865075
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag43@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
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
const x43_0 = "prop-card:x\\x43.js:000";
const x43_1 = "scope-ring:x\\x43.js:001";
const x43_2 = "value-chip:x\\x43.js:002";
const x43_3 = "strip-gate:x\\x43.js:003";
const x43_4 = "bucket-row:x\\x43.js:004";
const x43_5 = "code-pane:x\\x43.js:005";
const x43_6 = "entry-cell:x\\x43.js:006";
const x43_7 = "frame-dot:x\\x43.js:007";
const x43_8 = "prop-card:x\\x43.js:008";
const x43_9 = "scope-ring:x\\x43.js:009";
const x43_10 = "value-chip:x\\x43.js:010";
const x43_11 = "strip-gate:x\\x43.js:011";
const x43_12 = "bucket-row:x\\x43.js:012";
const x43_13 = "code-pane:x\\x43.js:013";
const x43_14 = "entry-cell:x\\x43.js:014";
const x43_15 = "frame-dot:x\\x43.js:015";
const x43_16 = "prop-card:x\\x43.js:016";
const x43_17 = "scope-ring:x\\x43.js:017";
const x43_18 = "value-chip:x\\x43.js:018";
const x43_19 = "strip-gate:x\\x43.js:019";
const x43_20 = "bucket-row:x\\x43.js:020";
const x43_21 = "code-pane:x\\x43.js:021";
const x43_22 = "entry-cell:x\\x43.js:022";
const x43_23 = "frame-dot:x\\x43.js:023";
const x43_24 = "prop-card:x\\x43.js:024";
const x43_25 = "scope-ring:x\\x43.js:025";
const x43_26 = "value-chip:x\\x43.js:026";
const x43_27 = "strip-gate:x\\x43.js:027";
const x43_28 = "bucket-row:x\\x43.js:028";
const x43_29 = "code-pane:x\\x43.js:029";
const x43_30 = "entry-cell:x\\x43.js:030";
const x43_31 = "frame-dot:x\\x43.js:031";
const x43_32 = "prop-card:x\\x43.js:032";
const x43_33 = "scope-ring:x\\x43.js:033";
const x43_34 = "value-chip:x\\x43.js:034";
const x43_35 = "strip-gate:x\\x43.js:035";
const x43_36 = "bucket-row:x\\x43.js:036";
const x43_37 = "code-pane:x\\x43.js:037";
const x43_38 = "entry-cell:x\\x43.js:038";
const x43_39 = "frame-dot:x\\x43.js:039";
const x43_40 = "prop-card:x\\x43.js:040";
const x43_41 = "scope-ring:x\\x43.js:041";
const x43_42 = "value-chip:x\\x43.js:042";
const x43_43 = "strip-gate:x\\x43.js:043";
const x43_44 = "bucket-row:x\\x43.js:044";
const x43_45 = "code-pane:x\\x43.js:045";
const x43_46 = "entry-cell:x\\x43.js:046";
const x43_47 = "frame-dot:x\\x43.js:047";
const x43_48 = "prop-card:x\\x43.js:048";
const x43_49 = "scope-ring:x\\x43.js:049";
const x43_50 = "value-chip:x\\x43.js:050";
const x43_51 = "strip-gate:x\\x43.js:051";
const x43_52 = "bucket-row:x\\x43.js:052";
const x43_53 = "code-pane:x\\x43.js:053";
const x43_54 = "entry-cell:x\\x43.js:054";
const x43_55 = "frame-dot:x\\x43.js:055";
const x43_56 = "prop-card:x\\x43.js:056";
const x43_57 = "scope-ring:x\\x43.js:057";
const x43_58 = "value-chip:x\\x43.js:058";
const x43_59 = "strip-gate:x\\x43.js:059";
const x43_60 = "bucket-row:x\\x43.js:060";
const x43_61 = "code-pane:x\\x43.js:061";
const x43_62 = "entry-cell:x\\x43.js:062";
const x43_63 = "frame-dot:x\\x43.js:063";
const x43_64 = "prop-card:x\\x43.js:064";
const x43_65 = "scope-ring:x\\x43.js:065";
const x43_66 = "value-chip:x\\x43.js:066";
const x43_67 = "strip-gate:x\\x43.js:067";
const x43_68 = "bucket-row:x\\x43.js:068";
const x43_69 = "code-pane:x\\x43.js:069";
const x43_70 = "entry-cell:x\\x43.js:070";
const x43_71 = "frame-dot:x\\x43.js:071";
const x43_72 = "prop-card:x\\x43.js:072";
const x43_73 = "scope-ring:x\\x43.js:073";
const x43_74 = "value-chip:x\\x43.js:074";
const x43_75 = "strip-gate:x\\x43.js:075";
const x43_76 = "bucket-row:x\\x43.js:076";
const x43_77 = "code-pane:x\\x43.js:077";
const x43_78 = "entry-cell:x\\x43.js:078";
const x43_79 = "frame-dot:x\\x43.js:079";
const x43_80 = "prop-card:x\\x43.js:080";
const x43_81 = "scope-ring:x\\x43.js:081";
const x43_82 = "value-chip:x\\x43.js:082";
const x43_83 = "strip-gate:x\\x43.js:083";
const x43_84 = "bucket-row:x\\x43.js:084";
const x43_85 = "code-pane:x\\x43.js:085";
const x43_86 = "entry-cell:x\\x43.js:086";
const x43_87 = "frame-dot:x\\x43.js:087";
const x43_88 = "prop-card:x\\x43.js:088";
const x43_89 = "scope-ring:x\\x43.js:089";
const x43_90 = "value-chip:x\\x43.js:090";
const x43_91 = "strip-gate:x\\x43.js:091";
const x43_92 = "bucket-row:x\\x43.js:092";
const x43_93 = "code-pane:x\\x43.js:093";
const x43_94 = "entry-cell:x\\x43.js:094";
const x43_95 = "frame-dot:x\\x43.js:095";
const x43_96 = "prop-card:x\\x43.js:096";
const x43_97 = "scope-ring:x\\x43.js:097";
const x43_98 = "value-chip:x\\x43.js:098";
const x43_99 = "strip-gate:x\\x43.js:099";
const x43_100 = "bucket-row:x\\x43.js:100";
const x43_101 = "code-pane:x\\x43.js:101";
const x43_102 = "entry-cell:x\\x43.js:102";
const x43_103 = "frame-dot:x\\x43.js:103";
const x43_104 = "prop-card:x\\x43.js:104";
const x43_105 = "scope-ring:x\\x43.js:105";
const x43_106 = "value-chip:x\\x43.js:106";
const x43_107 = "strip-gate:x\\x43.js:107";
const x43_108 = "bucket-row:x\\x43.js:108";
const x43_109 = "code-pane:x\\x43.js:109";
const x43_110 = "entry-cell:x\\x43.js:110";
const x43_111 = "frame-dot:x\\x43.js:111";
const x43_112 = "prop-card:x\\x43.js:112";
const x43_113 = "scope-ring:x\\x43.js:113";
const x43_114 = "value-chip:x\\x43.js:114";
const x43_115 = "strip-gate:x\\x43.js:115";
const x43_116 = "bucket-row:x\\x43.js:116";
const x43_117 = "code-pane:x\\x43.js:117";
const x43_118 = "entry-cell:x\\x43.js:118";
const x43_119 = "frame-dot:x\\x43.js:119";
const x43_120 = "prop-card:x\\x43.js:120";
const x43_121 = "scope-ring:x\\x43.js:121";
const x43_122 = "value-chip:x\\x43.js:122";
const x43_123 = "strip-gate:x\\x43.js:123";
const x43_124 = "bucket-row:x\\x43.js:124";
const x43_125 = "code-pane:x\\x43.js:125";
const x43_126 = "entry-cell:x\\x43.js:126";
const x43_127 = "frame-dot:x\\x43.js:127";
const x43_128 = "prop-card:x\\x43.js:128";
const x43_129 = "scope-ring:x\\x43.js:129";
const x43_130 = "value-chip:x\\x43.js:130";
const x43_131 = "strip-gate:x\\x43.js:131";
const x43_132 = "bucket-row:x\\x43.js:132";
const x43_133 = "code-pane:x\\x43.js:133";
const x43_134 = "entry-cell:x\\x43.js:134";
const x43_135 = "frame-dot:x\\x43.js:135";
const x43_136 = "prop-card:x\\x43.js:136";
const x43_137 = "scope-ring:x\\x43.js:137";
const x43_138 = "value-chip:x\\x43.js:138";
const x43_139 = "strip-gate:x\\x43.js:139";
const x43_140 = "bucket-row:x\\x43.js:140";
const x43_141 = "code-pane:x\\x43.js:141";
const x43_142 = "entry-cell:x\\x43.js:142";
const x43_143 = "frame-dot:x\\x43.js:143";
const x43_144 = "prop-card:x\\x43.js:144";
const x43_145 = "scope-ring:x\\x43.js:145";
const x43_146 = "value-chip:x\\x43.js:146";
