import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 6,
  salt: 'p:06:band',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2062',
  shift: 10,
  mask: 3428989726
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'band6@props.dev', y: 'shadow', n: 15 },
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
const x06_0 = "prop-card:x\\x06.js:000";
const x06_1 = "scope-ring:x\\x06.js:001";
const x06_2 = "value-chip:x\\x06.js:002";
const x06_3 = "strip-gate:x\\x06.js:003";
const x06_4 = "bucket-row:x\\x06.js:004";
const x06_5 = "code-pane:x\\x06.js:005";
const x06_6 = "entry-cell:x\\x06.js:006";
const x06_7 = "frame-dot:x\\x06.js:007";
const x06_8 = "prop-card:x\\x06.js:008";
const x06_9 = "scope-ring:x\\x06.js:009";
const x06_10 = "value-chip:x\\x06.js:010";
const x06_11 = "strip-gate:x\\x06.js:011";
const x06_12 = "bucket-row:x\\x06.js:012";
const x06_13 = "code-pane:x\\x06.js:013";
const x06_14 = "entry-cell:x\\x06.js:014";
const x06_15 = "frame-dot:x\\x06.js:015";
const x06_16 = "prop-card:x\\x06.js:016";
const x06_17 = "scope-ring:x\\x06.js:017";
const x06_18 = "value-chip:x\\x06.js:018";
const x06_19 = "strip-gate:x\\x06.js:019";
const x06_20 = "bucket-row:x\\x06.js:020";
const x06_21 = "code-pane:x\\x06.js:021";
const x06_22 = "entry-cell:x\\x06.js:022";
const x06_23 = "frame-dot:x\\x06.js:023";
const x06_24 = "prop-card:x\\x06.js:024";
const x06_25 = "scope-ring:x\\x06.js:025";
const x06_26 = "value-chip:x\\x06.js:026";
const x06_27 = "strip-gate:x\\x06.js:027";
const x06_28 = "bucket-row:x\\x06.js:028";
const x06_29 = "code-pane:x\\x06.js:029";
const x06_30 = "entry-cell:x\\x06.js:030";
const x06_31 = "frame-dot:x\\x06.js:031";
const x06_32 = "prop-card:x\\x06.js:032";
const x06_33 = "scope-ring:x\\x06.js:033";
const x06_34 = "value-chip:x\\x06.js:034";
const x06_35 = "strip-gate:x\\x06.js:035";
const x06_36 = "bucket-row:x\\x06.js:036";
const x06_37 = "code-pane:x\\x06.js:037";
const x06_38 = "entry-cell:x\\x06.js:038";
const x06_39 = "frame-dot:x\\x06.js:039";
const x06_40 = "prop-card:x\\x06.js:040";
const x06_41 = "scope-ring:x\\x06.js:041";
const x06_42 = "value-chip:x\\x06.js:042";
const x06_43 = "strip-gate:x\\x06.js:043";
const x06_44 = "bucket-row:x\\x06.js:044";
const x06_45 = "code-pane:x\\x06.js:045";
const x06_46 = "entry-cell:x\\x06.js:046";
const x06_47 = "frame-dot:x\\x06.js:047";
const x06_48 = "prop-card:x\\x06.js:048";
const x06_49 = "scope-ring:x\\x06.js:049";
const x06_50 = "value-chip:x\\x06.js:050";
const x06_51 = "strip-gate:x\\x06.js:051";
const x06_52 = "bucket-row:x\\x06.js:052";
const x06_53 = "code-pane:x\\x06.js:053";
const x06_54 = "entry-cell:x\\x06.js:054";
const x06_55 = "frame-dot:x\\x06.js:055";
const x06_56 = "prop-card:x\\x06.js:056";
const x06_57 = "scope-ring:x\\x06.js:057";
const x06_58 = "value-chip:x\\x06.js:058";
const x06_59 = "strip-gate:x\\x06.js:059";
const x06_60 = "bucket-row:x\\x06.js:060";
const x06_61 = "code-pane:x\\x06.js:061";
const x06_62 = "entry-cell:x\\x06.js:062";
const x06_63 = "frame-dot:x\\x06.js:063";
const x06_64 = "prop-card:x\\x06.js:064";
const x06_65 = "scope-ring:x\\x06.js:065";
const x06_66 = "value-chip:x\\x06.js:066";
const x06_67 = "strip-gate:x\\x06.js:067";
const x06_68 = "bucket-row:x\\x06.js:068";
const x06_69 = "code-pane:x\\x06.js:069";
const x06_70 = "entry-cell:x\\x06.js:070";
const x06_71 = "frame-dot:x\\x06.js:071";
const x06_72 = "prop-card:x\\x06.js:072";
const x06_73 = "scope-ring:x\\x06.js:073";
const x06_74 = "value-chip:x\\x06.js:074";
const x06_75 = "strip-gate:x\\x06.js:075";
const x06_76 = "bucket-row:x\\x06.js:076";
const x06_77 = "code-pane:x\\x06.js:077";
const x06_78 = "entry-cell:x\\x06.js:078";
const x06_79 = "frame-dot:x\\x06.js:079";
const x06_80 = "prop-card:x\\x06.js:080";
const x06_81 = "scope-ring:x\\x06.js:081";
const x06_82 = "value-chip:x\\x06.js:082";
const x06_83 = "strip-gate:x\\x06.js:083";
const x06_84 = "bucket-row:x\\x06.js:084";
const x06_85 = "code-pane:x\\x06.js:085";
const x06_86 = "entry-cell:x\\x06.js:086";
const x06_87 = "frame-dot:x\\x06.js:087";
const x06_88 = "prop-card:x\\x06.js:088";
const x06_89 = "scope-ring:x\\x06.js:089";
const x06_90 = "value-chip:x\\x06.js:090";
const x06_91 = "strip-gate:x\\x06.js:091";
const x06_92 = "bucket-row:x\\x06.js:092";
const x06_93 = "code-pane:x\\x06.js:093";
const x06_94 = "entry-cell:x\\x06.js:094";
const x06_95 = "frame-dot:x\\x06.js:095";
const x06_96 = "prop-card:x\\x06.js:096";
const x06_97 = "scope-ring:x\\x06.js:097";
const x06_98 = "value-chip:x\\x06.js:098";
const x06_99 = "strip-gate:x\\x06.js:099";
const x06_100 = "bucket-row:x\\x06.js:100";
const x06_101 = "code-pane:x\\x06.js:101";
const x06_102 = "entry-cell:x\\x06.js:102";
const x06_103 = "frame-dot:x\\x06.js:103";
const x06_104 = "prop-card:x\\x06.js:104";
const x06_105 = "scope-ring:x\\x06.js:105";
const x06_106 = "value-chip:x\\x06.js:106";
const x06_107 = "strip-gate:x\\x06.js:107";
const x06_108 = "bucket-row:x\\x06.js:108";
const x06_109 = "code-pane:x\\x06.js:109";
const x06_110 = "entry-cell:x\\x06.js:110";
const x06_111 = "frame-dot:x\\x06.js:111";
const x06_112 = "prop-card:x\\x06.js:112";
const x06_113 = "scope-ring:x\\x06.js:113";
const x06_114 = "value-chip:x\\x06.js:114";
const x06_115 = "strip-gate:x\\x06.js:115";
const x06_116 = "bucket-row:x\\x06.js:116";
const x06_117 = "code-pane:x\\x06.js:117";
const x06_118 = "entry-cell:x\\x06.js:118";
const x06_119 = "frame-dot:x\\x06.js:119";
const x06_120 = "prop-card:x\\x06.js:120";
const x06_121 = "scope-ring:x\\x06.js:121";
const x06_122 = "value-chip:x\\x06.js:122";
const x06_123 = "strip-gate:x\\x06.js:123";
const x06_124 = "bucket-row:x\\x06.js:124";
const x06_125 = "code-pane:x\\x06.js:125";
const x06_126 = "entry-cell:x\\x06.js:126";
const x06_127 = "frame-dot:x\\x06.js:127";
const x06_128 = "prop-card:x\\x06.js:128";
const x06_129 = "scope-ring:x\\x06.js:129";
const x06_130 = "value-chip:x\\x06.js:130";
const x06_131 = "strip-gate:x\\x06.js:131";
const x06_132 = "bucket-row:x\\x06.js:132";
const x06_133 = "code-pane:x\\x06.js:133";
const x06_134 = "entry-cell:x\\x06.js:134";
const x06_135 = "frame-dot:x\\x06.js:135";
const x06_136 = "prop-card:x\\x06.js:136";
const x06_137 = "scope-ring:x\\x06.js:137";
const x06_138 = "value-chip:x\\x06.js:138";
const x06_139 = "strip-gate:x\\x06.js:139";
const x06_140 = "bucket-row:x\\x06.js:140";
const x06_141 = "code-pane:x\\x06.js:141";
const x06_142 = "entry-cell:x\\x06.js:142";
const x06_143 = "frame-dot:x\\x06.js:143";
const x06_144 = "prop-card:x\\x06.js:144";
const x06_145 = "scope-ring:x\\x06.js:145";
const x06_146 = "value-chip:x\\x06.js:146";
