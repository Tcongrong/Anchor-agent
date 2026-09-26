import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 8,
  salt: 'p:08:band',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 4,
  mask: 147926656
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row8@props.dev', y: 'shadow', n: 14 },
    { k: 'o', i: 1, v: '012345', y: '012345', n: 6 },
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
const x08_0 = "prop-card:x\\x08.js:000";
const x08_1 = "scope-ring:x\\x08.js:001";
const x08_2 = "value-chip:x\\x08.js:002";
const x08_3 = "strip-gate:x\\x08.js:003";
const x08_4 = "bucket-row:x\\x08.js:004";
const x08_5 = "code-pane:x\\x08.js:005";
const x08_6 = "entry-cell:x\\x08.js:006";
const x08_7 = "frame-dot:x\\x08.js:007";
const x08_8 = "prop-card:x\\x08.js:008";
const x08_9 = "scope-ring:x\\x08.js:009";
const x08_10 = "value-chip:x\\x08.js:010";
const x08_11 = "strip-gate:x\\x08.js:011";
const x08_12 = "bucket-row:x\\x08.js:012";
const x08_13 = "code-pane:x\\x08.js:013";
const x08_14 = "entry-cell:x\\x08.js:014";
const x08_15 = "frame-dot:x\\x08.js:015";
const x08_16 = "prop-card:x\\x08.js:016";
const x08_17 = "scope-ring:x\\x08.js:017";
const x08_18 = "value-chip:x\\x08.js:018";
const x08_19 = "strip-gate:x\\x08.js:019";
const x08_20 = "bucket-row:x\\x08.js:020";
const x08_21 = "code-pane:x\\x08.js:021";
const x08_22 = "entry-cell:x\\x08.js:022";
const x08_23 = "frame-dot:x\\x08.js:023";
const x08_24 = "prop-card:x\\x08.js:024";
const x08_25 = "scope-ring:x\\x08.js:025";
const x08_26 = "value-chip:x\\x08.js:026";
const x08_27 = "strip-gate:x\\x08.js:027";
const x08_28 = "bucket-row:x\\x08.js:028";
const x08_29 = "code-pane:x\\x08.js:029";
const x08_30 = "entry-cell:x\\x08.js:030";
const x08_31 = "frame-dot:x\\x08.js:031";
const x08_32 = "prop-card:x\\x08.js:032";
const x08_33 = "scope-ring:x\\x08.js:033";
const x08_34 = "value-chip:x\\x08.js:034";
const x08_35 = "strip-gate:x\\x08.js:035";
const x08_36 = "bucket-row:x\\x08.js:036";
const x08_37 = "code-pane:x\\x08.js:037";
const x08_38 = "entry-cell:x\\x08.js:038";
const x08_39 = "frame-dot:x\\x08.js:039";
const x08_40 = "prop-card:x\\x08.js:040";
const x08_41 = "scope-ring:x\\x08.js:041";
const x08_42 = "value-chip:x\\x08.js:042";
const x08_43 = "strip-gate:x\\x08.js:043";
const x08_44 = "bucket-row:x\\x08.js:044";
const x08_45 = "code-pane:x\\x08.js:045";
const x08_46 = "entry-cell:x\\x08.js:046";
const x08_47 = "frame-dot:x\\x08.js:047";
const x08_48 = "prop-card:x\\x08.js:048";
const x08_49 = "scope-ring:x\\x08.js:049";
const x08_50 = "value-chip:x\\x08.js:050";
const x08_51 = "strip-gate:x\\x08.js:051";
const x08_52 = "bucket-row:x\\x08.js:052";
const x08_53 = "code-pane:x\\x08.js:053";
const x08_54 = "entry-cell:x\\x08.js:054";
const x08_55 = "frame-dot:x\\x08.js:055";
const x08_56 = "prop-card:x\\x08.js:056";
const x08_57 = "scope-ring:x\\x08.js:057";
const x08_58 = "value-chip:x\\x08.js:058";
const x08_59 = "strip-gate:x\\x08.js:059";
const x08_60 = "bucket-row:x\\x08.js:060";
const x08_61 = "code-pane:x\\x08.js:061";
const x08_62 = "entry-cell:x\\x08.js:062";
const x08_63 = "frame-dot:x\\x08.js:063";
const x08_64 = "prop-card:x\\x08.js:064";
const x08_65 = "scope-ring:x\\x08.js:065";
const x08_66 = "value-chip:x\\x08.js:066";
const x08_67 = "strip-gate:x\\x08.js:067";
const x08_68 = "bucket-row:x\\x08.js:068";
const x08_69 = "code-pane:x\\x08.js:069";
const x08_70 = "entry-cell:x\\x08.js:070";
const x08_71 = "frame-dot:x\\x08.js:071";
const x08_72 = "prop-card:x\\x08.js:072";
const x08_73 = "scope-ring:x\\x08.js:073";
const x08_74 = "value-chip:x\\x08.js:074";
const x08_75 = "strip-gate:x\\x08.js:075";
const x08_76 = "bucket-row:x\\x08.js:076";
const x08_77 = "code-pane:x\\x08.js:077";
const x08_78 = "entry-cell:x\\x08.js:078";
const x08_79 = "frame-dot:x\\x08.js:079";
const x08_80 = "prop-card:x\\x08.js:080";
const x08_81 = "scope-ring:x\\x08.js:081";
const x08_82 = "value-chip:x\\x08.js:082";
const x08_83 = "strip-gate:x\\x08.js:083";
const x08_84 = "bucket-row:x\\x08.js:084";
const x08_85 = "code-pane:x\\x08.js:085";
const x08_86 = "entry-cell:x\\x08.js:086";
const x08_87 = "frame-dot:x\\x08.js:087";
const x08_88 = "prop-card:x\\x08.js:088";
const x08_89 = "scope-ring:x\\x08.js:089";
const x08_90 = "value-chip:x\\x08.js:090";
const x08_91 = "strip-gate:x\\x08.js:091";
const x08_92 = "bucket-row:x\\x08.js:092";
const x08_93 = "code-pane:x\\x08.js:093";
const x08_94 = "entry-cell:x\\x08.js:094";
const x08_95 = "frame-dot:x\\x08.js:095";
const x08_96 = "prop-card:x\\x08.js:096";
const x08_97 = "scope-ring:x\\x08.js:097";
const x08_98 = "value-chip:x\\x08.js:098";
const x08_99 = "strip-gate:x\\x08.js:099";
const x08_100 = "bucket-row:x\\x08.js:100";
const x08_101 = "code-pane:x\\x08.js:101";
const x08_102 = "entry-cell:x\\x08.js:102";
const x08_103 = "frame-dot:x\\x08.js:103";
const x08_104 = "prop-card:x\\x08.js:104";
const x08_105 = "scope-ring:x\\x08.js:105";
const x08_106 = "value-chip:x\\x08.js:106";
const x08_107 = "strip-gate:x\\x08.js:107";
const x08_108 = "bucket-row:x\\x08.js:108";
const x08_109 = "code-pane:x\\x08.js:109";
const x08_110 = "entry-cell:x\\x08.js:110";
const x08_111 = "frame-dot:x\\x08.js:111";
const x08_112 = "prop-card:x\\x08.js:112";
const x08_113 = "scope-ring:x\\x08.js:113";
const x08_114 = "value-chip:x\\x08.js:114";
const x08_115 = "strip-gate:x\\x08.js:115";
const x08_116 = "bucket-row:x\\x08.js:116";
const x08_117 = "code-pane:x\\x08.js:117";
const x08_118 = "entry-cell:x\\x08.js:118";
const x08_119 = "frame-dot:x\\x08.js:119";
const x08_120 = "prop-card:x\\x08.js:120";
const x08_121 = "scope-ring:x\\x08.js:121";
const x08_122 = "value-chip:x\\x08.js:122";
const x08_123 = "strip-gate:x\\x08.js:123";
const x08_124 = "bucket-row:x\\x08.js:124";
const x08_125 = "code-pane:x\\x08.js:125";
const x08_126 = "entry-cell:x\\x08.js:126";
const x08_127 = "frame-dot:x\\x08.js:127";
const x08_128 = "prop-card:x\\x08.js:128";
const x08_129 = "scope-ring:x\\x08.js:129";
const x08_130 = "value-chip:x\\x08.js:130";
const x08_131 = "strip-gate:x\\x08.js:131";
const x08_132 = "bucket-row:x\\x08.js:132";
const x08_133 = "code-pane:x\\x08.js:133";
const x08_134 = "entry-cell:x\\x08.js:134";
const x08_135 = "frame-dot:x\\x08.js:135";
const x08_136 = "prop-card:x\\x08.js:136";
const x08_137 = "scope-ring:x\\x08.js:137";
const x08_138 = "value-chip:x\\x08.js:138";
const x08_139 = "strip-gate:x\\x08.js:139";
const x08_140 = "bucket-row:x\\x08.js:140";
const x08_141 = "code-pane:x\\x08.js:141";
const x08_142 = "entry-cell:x\\x08.js:142";
const x08_143 = "frame-dot:x\\x08.js:143";
const x08_144 = "prop-card:x\\x08.js:144";
const x08_145 = "scope-ring:x\\x08.js:145";
const x08_146 = "value-chip:x\\x08.js:146";
