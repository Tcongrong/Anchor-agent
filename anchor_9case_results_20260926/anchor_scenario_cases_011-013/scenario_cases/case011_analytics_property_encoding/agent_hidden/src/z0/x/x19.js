import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 19,
  salt: 'p:0j:band',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2063',
  shift: 7,
  mask: 3576916251
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'tag19@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
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
const x19_0 = "prop-card:x\\x19.js:000";
const x19_1 = "scope-ring:x\\x19.js:001";
const x19_2 = "value-chip:x\\x19.js:002";
const x19_3 = "strip-gate:x\\x19.js:003";
const x19_4 = "bucket-row:x\\x19.js:004";
const x19_5 = "code-pane:x\\x19.js:005";
const x19_6 = "entry-cell:x\\x19.js:006";
const x19_7 = "frame-dot:x\\x19.js:007";
const x19_8 = "prop-card:x\\x19.js:008";
const x19_9 = "scope-ring:x\\x19.js:009";
const x19_10 = "value-chip:x\\x19.js:010";
const x19_11 = "strip-gate:x\\x19.js:011";
const x19_12 = "bucket-row:x\\x19.js:012";
const x19_13 = "code-pane:x\\x19.js:013";
const x19_14 = "entry-cell:x\\x19.js:014";
const x19_15 = "frame-dot:x\\x19.js:015";
const x19_16 = "prop-card:x\\x19.js:016";
const x19_17 = "scope-ring:x\\x19.js:017";
const x19_18 = "value-chip:x\\x19.js:018";
const x19_19 = "strip-gate:x\\x19.js:019";
const x19_20 = "bucket-row:x\\x19.js:020";
const x19_21 = "code-pane:x\\x19.js:021";
const x19_22 = "entry-cell:x\\x19.js:022";
const x19_23 = "frame-dot:x\\x19.js:023";
const x19_24 = "prop-card:x\\x19.js:024";
const x19_25 = "scope-ring:x\\x19.js:025";
const x19_26 = "value-chip:x\\x19.js:026";
const x19_27 = "strip-gate:x\\x19.js:027";
const x19_28 = "bucket-row:x\\x19.js:028";
const x19_29 = "code-pane:x\\x19.js:029";
const x19_30 = "entry-cell:x\\x19.js:030";
const x19_31 = "frame-dot:x\\x19.js:031";
const x19_32 = "prop-card:x\\x19.js:032";
const x19_33 = "scope-ring:x\\x19.js:033";
const x19_34 = "value-chip:x\\x19.js:034";
const x19_35 = "strip-gate:x\\x19.js:035";
const x19_36 = "bucket-row:x\\x19.js:036";
const x19_37 = "code-pane:x\\x19.js:037";
const x19_38 = "entry-cell:x\\x19.js:038";
const x19_39 = "frame-dot:x\\x19.js:039";
const x19_40 = "prop-card:x\\x19.js:040";
const x19_41 = "scope-ring:x\\x19.js:041";
const x19_42 = "value-chip:x\\x19.js:042";
const x19_43 = "strip-gate:x\\x19.js:043";
const x19_44 = "bucket-row:x\\x19.js:044";
const x19_45 = "code-pane:x\\x19.js:045";
const x19_46 = "entry-cell:x\\x19.js:046";
const x19_47 = "frame-dot:x\\x19.js:047";
const x19_48 = "prop-card:x\\x19.js:048";
const x19_49 = "scope-ring:x\\x19.js:049";
const x19_50 = "value-chip:x\\x19.js:050";
const x19_51 = "strip-gate:x\\x19.js:051";
const x19_52 = "bucket-row:x\\x19.js:052";
const x19_53 = "code-pane:x\\x19.js:053";
const x19_54 = "entry-cell:x\\x19.js:054";
const x19_55 = "frame-dot:x\\x19.js:055";
const x19_56 = "prop-card:x\\x19.js:056";
const x19_57 = "scope-ring:x\\x19.js:057";
const x19_58 = "value-chip:x\\x19.js:058";
const x19_59 = "strip-gate:x\\x19.js:059";
const x19_60 = "bucket-row:x\\x19.js:060";
const x19_61 = "code-pane:x\\x19.js:061";
const x19_62 = "entry-cell:x\\x19.js:062";
const x19_63 = "frame-dot:x\\x19.js:063";
const x19_64 = "prop-card:x\\x19.js:064";
const x19_65 = "scope-ring:x\\x19.js:065";
const x19_66 = "value-chip:x\\x19.js:066";
const x19_67 = "strip-gate:x\\x19.js:067";
const x19_68 = "bucket-row:x\\x19.js:068";
const x19_69 = "code-pane:x\\x19.js:069";
const x19_70 = "entry-cell:x\\x19.js:070";
const x19_71 = "frame-dot:x\\x19.js:071";
const x19_72 = "prop-card:x\\x19.js:072";
const x19_73 = "scope-ring:x\\x19.js:073";
const x19_74 = "value-chip:x\\x19.js:074";
const x19_75 = "strip-gate:x\\x19.js:075";
const x19_76 = "bucket-row:x\\x19.js:076";
const x19_77 = "code-pane:x\\x19.js:077";
const x19_78 = "entry-cell:x\\x19.js:078";
const x19_79 = "frame-dot:x\\x19.js:079";
const x19_80 = "prop-card:x\\x19.js:080";
const x19_81 = "scope-ring:x\\x19.js:081";
const x19_82 = "value-chip:x\\x19.js:082";
const x19_83 = "strip-gate:x\\x19.js:083";
const x19_84 = "bucket-row:x\\x19.js:084";
const x19_85 = "code-pane:x\\x19.js:085";
const x19_86 = "entry-cell:x\\x19.js:086";
const x19_87 = "frame-dot:x\\x19.js:087";
const x19_88 = "prop-card:x\\x19.js:088";
const x19_89 = "scope-ring:x\\x19.js:089";
const x19_90 = "value-chip:x\\x19.js:090";
const x19_91 = "strip-gate:x\\x19.js:091";
const x19_92 = "bucket-row:x\\x19.js:092";
const x19_93 = "code-pane:x\\x19.js:093";
const x19_94 = "entry-cell:x\\x19.js:094";
const x19_95 = "frame-dot:x\\x19.js:095";
const x19_96 = "prop-card:x\\x19.js:096";
const x19_97 = "scope-ring:x\\x19.js:097";
const x19_98 = "value-chip:x\\x19.js:098";
const x19_99 = "strip-gate:x\\x19.js:099";
const x19_100 = "bucket-row:x\\x19.js:100";
const x19_101 = "code-pane:x\\x19.js:101";
const x19_102 = "entry-cell:x\\x19.js:102";
const x19_103 = "frame-dot:x\\x19.js:103";
const x19_104 = "prop-card:x\\x19.js:104";
const x19_105 = "scope-ring:x\\x19.js:105";
const x19_106 = "value-chip:x\\x19.js:106";
const x19_107 = "strip-gate:x\\x19.js:107";
const x19_108 = "bucket-row:x\\x19.js:108";
const x19_109 = "code-pane:x\\x19.js:109";
const x19_110 = "entry-cell:x\\x19.js:110";
const x19_111 = "frame-dot:x\\x19.js:111";
const x19_112 = "prop-card:x\\x19.js:112";
const x19_113 = "scope-ring:x\\x19.js:113";
const x19_114 = "value-chip:x\\x19.js:114";
const x19_115 = "strip-gate:x\\x19.js:115";
const x19_116 = "bucket-row:x\\x19.js:116";
const x19_117 = "code-pane:x\\x19.js:117";
const x19_118 = "entry-cell:x\\x19.js:118";
const x19_119 = "frame-dot:x\\x19.js:119";
const x19_120 = "prop-card:x\\x19.js:120";
const x19_121 = "scope-ring:x\\x19.js:121";
const x19_122 = "value-chip:x\\x19.js:122";
const x19_123 = "strip-gate:x\\x19.js:123";
const x19_124 = "bucket-row:x\\x19.js:124";
const x19_125 = "code-pane:x\\x19.js:125";
const x19_126 = "entry-cell:x\\x19.js:126";
const x19_127 = "frame-dot:x\\x19.js:127";
const x19_128 = "prop-card:x\\x19.js:128";
const x19_129 = "scope-ring:x\\x19.js:129";
const x19_130 = "value-chip:x\\x19.js:130";
const x19_131 = "strip-gate:x\\x19.js:131";
const x19_132 = "bucket-row:x\\x19.js:132";
const x19_133 = "code-pane:x\\x19.js:133";
const x19_134 = "entry-cell:x\\x19.js:134";
const x19_135 = "frame-dot:x\\x19.js:135";
const x19_136 = "prop-card:x\\x19.js:136";
const x19_137 = "scope-ring:x\\x19.js:137";
const x19_138 = "value-chip:x\\x19.js:138";
const x19_139 = "strip-gate:x\\x19.js:139";
const x19_140 = "bucket-row:x\\x19.js:140";
const x19_141 = "code-pane:x\\x19.js:141";
const x19_142 = "entry-cell:x\\x19.js:142";
const x19_143 = "frame-dot:x\\x19.js:143";
const x19_144 = "prop-card:x\\x19.js:144";
const x19_145 = "scope-ring:x\\x19.js:145";
const x19_146 = "value-chip:x\\x19.js:146";
