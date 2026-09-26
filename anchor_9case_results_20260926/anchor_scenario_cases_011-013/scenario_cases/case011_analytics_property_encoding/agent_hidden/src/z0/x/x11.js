import { ref } from "../d8/n4/t1.js";

const cfg = {
  slot: 11,
  salt: 'p:0b:band',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 7,
  mask: 3816266643
};

function bandTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'row11@props.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '654321', y: '654321', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
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
const x11_0 = "prop-card:x\\x11.js:000";
const x11_1 = "scope-ring:x\\x11.js:001";
const x11_2 = "value-chip:x\\x11.js:002";
const x11_3 = "strip-gate:x\\x11.js:003";
const x11_4 = "bucket-row:x\\x11.js:004";
const x11_5 = "code-pane:x\\x11.js:005";
const x11_6 = "entry-cell:x\\x11.js:006";
const x11_7 = "frame-dot:x\\x11.js:007";
const x11_8 = "prop-card:x\\x11.js:008";
const x11_9 = "scope-ring:x\\x11.js:009";
const x11_10 = "value-chip:x\\x11.js:010";
const x11_11 = "strip-gate:x\\x11.js:011";
const x11_12 = "bucket-row:x\\x11.js:012";
const x11_13 = "code-pane:x\\x11.js:013";
const x11_14 = "entry-cell:x\\x11.js:014";
const x11_15 = "frame-dot:x\\x11.js:015";
const x11_16 = "prop-card:x\\x11.js:016";
const x11_17 = "scope-ring:x\\x11.js:017";
const x11_18 = "value-chip:x\\x11.js:018";
const x11_19 = "strip-gate:x\\x11.js:019";
const x11_20 = "bucket-row:x\\x11.js:020";
const x11_21 = "code-pane:x\\x11.js:021";
const x11_22 = "entry-cell:x\\x11.js:022";
const x11_23 = "frame-dot:x\\x11.js:023";
const x11_24 = "prop-card:x\\x11.js:024";
const x11_25 = "scope-ring:x\\x11.js:025";
const x11_26 = "value-chip:x\\x11.js:026";
const x11_27 = "strip-gate:x\\x11.js:027";
const x11_28 = "bucket-row:x\\x11.js:028";
const x11_29 = "code-pane:x\\x11.js:029";
const x11_30 = "entry-cell:x\\x11.js:030";
const x11_31 = "frame-dot:x\\x11.js:031";
const x11_32 = "prop-card:x\\x11.js:032";
const x11_33 = "scope-ring:x\\x11.js:033";
const x11_34 = "value-chip:x\\x11.js:034";
const x11_35 = "strip-gate:x\\x11.js:035";
const x11_36 = "bucket-row:x\\x11.js:036";
const x11_37 = "code-pane:x\\x11.js:037";
const x11_38 = "entry-cell:x\\x11.js:038";
const x11_39 = "frame-dot:x\\x11.js:039";
const x11_40 = "prop-card:x\\x11.js:040";
const x11_41 = "scope-ring:x\\x11.js:041";
const x11_42 = "value-chip:x\\x11.js:042";
const x11_43 = "strip-gate:x\\x11.js:043";
const x11_44 = "bucket-row:x\\x11.js:044";
const x11_45 = "code-pane:x\\x11.js:045";
const x11_46 = "entry-cell:x\\x11.js:046";
const x11_47 = "frame-dot:x\\x11.js:047";
const x11_48 = "prop-card:x\\x11.js:048";
const x11_49 = "scope-ring:x\\x11.js:049";
const x11_50 = "value-chip:x\\x11.js:050";
const x11_51 = "strip-gate:x\\x11.js:051";
const x11_52 = "bucket-row:x\\x11.js:052";
const x11_53 = "code-pane:x\\x11.js:053";
const x11_54 = "entry-cell:x\\x11.js:054";
const x11_55 = "frame-dot:x\\x11.js:055";
const x11_56 = "prop-card:x\\x11.js:056";
const x11_57 = "scope-ring:x\\x11.js:057";
const x11_58 = "value-chip:x\\x11.js:058";
const x11_59 = "strip-gate:x\\x11.js:059";
const x11_60 = "bucket-row:x\\x11.js:060";
const x11_61 = "code-pane:x\\x11.js:061";
const x11_62 = "entry-cell:x\\x11.js:062";
const x11_63 = "frame-dot:x\\x11.js:063";
const x11_64 = "prop-card:x\\x11.js:064";
const x11_65 = "scope-ring:x\\x11.js:065";
const x11_66 = "value-chip:x\\x11.js:066";
const x11_67 = "strip-gate:x\\x11.js:067";
const x11_68 = "bucket-row:x\\x11.js:068";
const x11_69 = "code-pane:x\\x11.js:069";
const x11_70 = "entry-cell:x\\x11.js:070";
const x11_71 = "frame-dot:x\\x11.js:071";
const x11_72 = "prop-card:x\\x11.js:072";
const x11_73 = "scope-ring:x\\x11.js:073";
const x11_74 = "value-chip:x\\x11.js:074";
const x11_75 = "strip-gate:x\\x11.js:075";
const x11_76 = "bucket-row:x\\x11.js:076";
const x11_77 = "code-pane:x\\x11.js:077";
const x11_78 = "entry-cell:x\\x11.js:078";
const x11_79 = "frame-dot:x\\x11.js:079";
const x11_80 = "prop-card:x\\x11.js:080";
const x11_81 = "scope-ring:x\\x11.js:081";
const x11_82 = "value-chip:x\\x11.js:082";
const x11_83 = "strip-gate:x\\x11.js:083";
const x11_84 = "bucket-row:x\\x11.js:084";
const x11_85 = "code-pane:x\\x11.js:085";
const x11_86 = "entry-cell:x\\x11.js:086";
const x11_87 = "frame-dot:x\\x11.js:087";
const x11_88 = "prop-card:x\\x11.js:088";
const x11_89 = "scope-ring:x\\x11.js:089";
const x11_90 = "value-chip:x\\x11.js:090";
const x11_91 = "strip-gate:x\\x11.js:091";
const x11_92 = "bucket-row:x\\x11.js:092";
const x11_93 = "code-pane:x\\x11.js:093";
const x11_94 = "entry-cell:x\\x11.js:094";
const x11_95 = "frame-dot:x\\x11.js:095";
const x11_96 = "prop-card:x\\x11.js:096";
const x11_97 = "scope-ring:x\\x11.js:097";
const x11_98 = "value-chip:x\\x11.js:098";
const x11_99 = "strip-gate:x\\x11.js:099";
const x11_100 = "bucket-row:x\\x11.js:100";
const x11_101 = "code-pane:x\\x11.js:101";
const x11_102 = "entry-cell:x\\x11.js:102";
const x11_103 = "frame-dot:x\\x11.js:103";
const x11_104 = "prop-card:x\\x11.js:104";
const x11_105 = "scope-ring:x\\x11.js:105";
const x11_106 = "value-chip:x\\x11.js:106";
const x11_107 = "strip-gate:x\\x11.js:107";
const x11_108 = "bucket-row:x\\x11.js:108";
const x11_109 = "code-pane:x\\x11.js:109";
const x11_110 = "entry-cell:x\\x11.js:110";
const x11_111 = "frame-dot:x\\x11.js:111";
const x11_112 = "prop-card:x\\x11.js:112";
const x11_113 = "scope-ring:x\\x11.js:113";
const x11_114 = "value-chip:x\\x11.js:114";
const x11_115 = "strip-gate:x\\x11.js:115";
const x11_116 = "bucket-row:x\\x11.js:116";
const x11_117 = "code-pane:x\\x11.js:117";
const x11_118 = "entry-cell:x\\x11.js:118";
const x11_119 = "frame-dot:x\\x11.js:119";
const x11_120 = "prop-card:x\\x11.js:120";
const x11_121 = "scope-ring:x\\x11.js:121";
const x11_122 = "value-chip:x\\x11.js:122";
const x11_123 = "strip-gate:x\\x11.js:123";
const x11_124 = "bucket-row:x\\x11.js:124";
const x11_125 = "code-pane:x\\x11.js:125";
const x11_126 = "entry-cell:x\\x11.js:126";
const x11_127 = "frame-dot:x\\x11.js:127";
const x11_128 = "prop-card:x\\x11.js:128";
const x11_129 = "scope-ring:x\\x11.js:129";
const x11_130 = "value-chip:x\\x11.js:130";
const x11_131 = "strip-gate:x\\x11.js:131";
const x11_132 = "bucket-row:x\\x11.js:132";
const x11_133 = "code-pane:x\\x11.js:133";
const x11_134 = "entry-cell:x\\x11.js:134";
const x11_135 = "frame-dot:x\\x11.js:135";
const x11_136 = "prop-card:x\\x11.js:136";
const x11_137 = "scope-ring:x\\x11.js:137";
const x11_138 = "value-chip:x\\x11.js:138";
const x11_139 = "strip-gate:x\\x11.js:139";
const x11_140 = "bucket-row:x\\x11.js:140";
const x11_141 = "code-pane:x\\x11.js:141";
const x11_142 = "entry-cell:x\\x11.js:142";
const x11_143 = "frame-dot:x\\x11.js:143";
const x11_144 = "prop-card:x\\x11.js:144";
const x11_145 = "scope-ring:x\\x11.js:145";
const x11_146 = "value-chip:x\\x11.js:146";
