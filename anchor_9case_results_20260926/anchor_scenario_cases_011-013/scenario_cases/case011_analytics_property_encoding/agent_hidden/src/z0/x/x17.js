import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 17,
  salt: 'p:0h:band',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2061',
  shift: 5,
  mask: 2563012025
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row17@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
    { k: 'b', i: 3, v: 'b', y: 'b', n: 1 },
    { k: 'n', i: 4, v: 'n', y: 'n', n: 1 },
    { k: 'g', i: 5, v: 'g', y: 'g', n: 1 },
    { k: 'u', i: 6, v: 'u', y: 'u', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(4, 13) + '.' + (cfg.slot + 11).toString(36) + 'r';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(bandTuple(ctx), 'band', { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x17_0 = "prop-card:x\\x17.js:000";
const x17_1 = "scope-ring:x\\x17.js:001";
const x17_2 = "value-chip:x\\x17.js:002";
const x17_3 = "strip-gate:x\\x17.js:003";
const x17_4 = "bucket-row:x\\x17.js:004";
const x17_5 = "code-pane:x\\x17.js:005";
const x17_6 = "entry-cell:x\\x17.js:006";
const x17_7 = "frame-dot:x\\x17.js:007";
const x17_8 = "prop-card:x\\x17.js:008";
const x17_9 = "scope-ring:x\\x17.js:009";
const x17_10 = "value-chip:x\\x17.js:010";
const x17_11 = "strip-gate:x\\x17.js:011";
const x17_12 = "bucket-row:x\\x17.js:012";
const x17_13 = "code-pane:x\\x17.js:013";
const x17_14 = "entry-cell:x\\x17.js:014";
const x17_15 = "frame-dot:x\\x17.js:015";
const x17_16 = "prop-card:x\\x17.js:016";
const x17_17 = "scope-ring:x\\x17.js:017";
const x17_18 = "value-chip:x\\x17.js:018";
const x17_19 = "strip-gate:x\\x17.js:019";
const x17_20 = "bucket-row:x\\x17.js:020";
const x17_21 = "code-pane:x\\x17.js:021";
const x17_22 = "entry-cell:x\\x17.js:022";
const x17_23 = "frame-dot:x\\x17.js:023";
const x17_24 = "prop-card:x\\x17.js:024";
const x17_25 = "scope-ring:x\\x17.js:025";
const x17_26 = "value-chip:x\\x17.js:026";
const x17_27 = "strip-gate:x\\x17.js:027";
const x17_28 = "bucket-row:x\\x17.js:028";
const x17_29 = "code-pane:x\\x17.js:029";
const x17_30 = "entry-cell:x\\x17.js:030";
const x17_31 = "frame-dot:x\\x17.js:031";
const x17_32 = "prop-card:x\\x17.js:032";
const x17_33 = "scope-ring:x\\x17.js:033";
const x17_34 = "value-chip:x\\x17.js:034";
const x17_35 = "strip-gate:x\\x17.js:035";
const x17_36 = "bucket-row:x\\x17.js:036";
const x17_37 = "code-pane:x\\x17.js:037";
const x17_38 = "entry-cell:x\\x17.js:038";
const x17_39 = "frame-dot:x\\x17.js:039";
const x17_40 = "prop-card:x\\x17.js:040";
const x17_41 = "scope-ring:x\\x17.js:041";
const x17_42 = "value-chip:x\\x17.js:042";
const x17_43 = "strip-gate:x\\x17.js:043";
const x17_44 = "bucket-row:x\\x17.js:044";
const x17_45 = "code-pane:x\\x17.js:045";
const x17_46 = "entry-cell:x\\x17.js:046";
const x17_47 = "frame-dot:x\\x17.js:047";
const x17_48 = "prop-card:x\\x17.js:048";
const x17_49 = "scope-ring:x\\x17.js:049";
const x17_50 = "value-chip:x\\x17.js:050";
const x17_51 = "strip-gate:x\\x17.js:051";
const x17_52 = "bucket-row:x\\x17.js:052";
const x17_53 = "code-pane:x\\x17.js:053";
const x17_54 = "entry-cell:x\\x17.js:054";
const x17_55 = "frame-dot:x\\x17.js:055";
const x17_56 = "prop-card:x\\x17.js:056";
const x17_57 = "scope-ring:x\\x17.js:057";
const x17_58 = "value-chip:x\\x17.js:058";
const x17_59 = "strip-gate:x\\x17.js:059";
const x17_60 = "bucket-row:x\\x17.js:060";
const x17_61 = "code-pane:x\\x17.js:061";
const x17_62 = "entry-cell:x\\x17.js:062";
const x17_63 = "frame-dot:x\\x17.js:063";
const x17_64 = "prop-card:x\\x17.js:064";
const x17_65 = "scope-ring:x\\x17.js:065";
const x17_66 = "value-chip:x\\x17.js:066";
const x17_67 = "strip-gate:x\\x17.js:067";
const x17_68 = "bucket-row:x\\x17.js:068";
const x17_69 = "code-pane:x\\x17.js:069";
const x17_70 = "entry-cell:x\\x17.js:070";
const x17_71 = "frame-dot:x\\x17.js:071";
const x17_72 = "prop-card:x\\x17.js:072";
const x17_73 = "scope-ring:x\\x17.js:073";
const x17_74 = "value-chip:x\\x17.js:074";
const x17_75 = "strip-gate:x\\x17.js:075";
const x17_76 = "bucket-row:x\\x17.js:076";
const x17_77 = "code-pane:x\\x17.js:077";
const x17_78 = "entry-cell:x\\x17.js:078";
const x17_79 = "frame-dot:x\\x17.js:079";
const x17_80 = "prop-card:x\\x17.js:080";
const x17_81 = "scope-ring:x\\x17.js:081";
const x17_82 = "value-chip:x\\x17.js:082";
const x17_83 = "strip-gate:x\\x17.js:083";
const x17_84 = "bucket-row:x\\x17.js:084";
const x17_85 = "code-pane:x\\x17.js:085";
const x17_86 = "entry-cell:x\\x17.js:086";
const x17_87 = "frame-dot:x\\x17.js:087";
const x17_88 = "prop-card:x\\x17.js:088";
const x17_89 = "scope-ring:x\\x17.js:089";
const x17_90 = "value-chip:x\\x17.js:090";
const x17_91 = "strip-gate:x\\x17.js:091";
const x17_92 = "bucket-row:x\\x17.js:092";
const x17_93 = "code-pane:x\\x17.js:093";
const x17_94 = "entry-cell:x\\x17.js:094";
const x17_95 = "frame-dot:x\\x17.js:095";
const x17_96 = "prop-card:x\\x17.js:096";
const x17_97 = "scope-ring:x\\x17.js:097";
const x17_98 = "value-chip:x\\x17.js:098";
const x17_99 = "strip-gate:x\\x17.js:099";
const x17_100 = "bucket-row:x\\x17.js:100";
const x17_101 = "code-pane:x\\x17.js:101";
const x17_102 = "entry-cell:x\\x17.js:102";
const x17_103 = "frame-dot:x\\x17.js:103";
const x17_104 = "prop-card:x\\x17.js:104";
const x17_105 = "scope-ring:x\\x17.js:105";
const x17_106 = "value-chip:x\\x17.js:106";
const x17_107 = "strip-gate:x\\x17.js:107";
const x17_108 = "bucket-row:x\\x17.js:108";
const x17_109 = "code-pane:x\\x17.js:109";
const x17_110 = "entry-cell:x\\x17.js:110";
const x17_111 = "frame-dot:x\\x17.js:111";
const x17_112 = "prop-card:x\\x17.js:112";
const x17_113 = "scope-ring:x\\x17.js:113";
const x17_114 = "value-chip:x\\x17.js:114";
const x17_115 = "strip-gate:x\\x17.js:115";
const x17_116 = "bucket-row:x\\x17.js:116";
const x17_117 = "code-pane:x\\x17.js:117";
const x17_118 = "entry-cell:x\\x17.js:118";
const x17_119 = "frame-dot:x\\x17.js:119";
const x17_120 = "prop-card:x\\x17.js:120";
const x17_121 = "scope-ring:x\\x17.js:121";
const x17_122 = "value-chip:x\\x17.js:122";
const x17_123 = "strip-gate:x\\x17.js:123";
const x17_124 = "bucket-row:x\\x17.js:124";
const x17_125 = "code-pane:x\\x17.js:125";
const x17_126 = "entry-cell:x\\x17.js:126";
const x17_127 = "frame-dot:x\\x17.js:127";
const x17_128 = "prop-card:x\\x17.js:128";
const x17_129 = "scope-ring:x\\x17.js:129";
const x17_130 = "value-chip:x\\x17.js:130";
const x17_131 = "strip-gate:x\\x17.js:131";
const x17_132 = "bucket-row:x\\x17.js:132";
const x17_133 = "code-pane:x\\x17.js:133";
const x17_134 = "entry-cell:x\\x17.js:134";
const x17_135 = "frame-dot:x\\x17.js:135";
const x17_136 = "prop-card:x\\x17.js:136";
const x17_137 = "scope-ring:x\\x17.js:137";
const x17_138 = "value-chip:x\\x17.js:138";
const x17_139 = "strip-gate:x\\x17.js:139";
const x17_140 = "bucket-row:x\\x17.js:140";
const x17_141 = "code-pane:x\\x17.js:141";
const x17_142 = "entry-cell:x\\x17.js:142";
const x17_143 = "frame-dot:x\\x17.js:143";
const x17_144 = "prop-card:x\\x17.js:144";
const x17_145 = "scope-ring:x\\x17.js:145";
const x17_146 = "value-chip:x\\x17.js:146";
