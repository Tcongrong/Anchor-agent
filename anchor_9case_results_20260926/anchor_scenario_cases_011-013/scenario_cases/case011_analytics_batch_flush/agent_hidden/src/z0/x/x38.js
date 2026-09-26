import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 38,
  salt: 'b:12:track',
  order: [6, 7, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 8,
  mask: 3098215449
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain38@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'n', i: 4, v: 'n', y: 'n', n: 1 },
    { k: 'g', i: 5, v: 'g', y: 'g', n: 1 },
    { k: 'u', i: 6, v: 'u', y: 'u', n: 1 },
    { k: 't', i: 7, v: 't', y: 't', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(4, 12) + '.' + (cfg.slot * 3 + 2).toString(36) + 'r';
}

export function track(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(waveTuple(ctx), 'wave', { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x38_0 = "queue-slot:x\\x38.js:000";
const x38_1 = "batch-row:x\\x38.js:001";
const x38_2 = "flush-gate:x\\x38.js:002";
const x38_3 = "drain-ring:x\\x38.js:003";
const x38_4 = "pulse-wave:x\\x38.js:004";
const x38_5 = "beacon-dot:x\\x38.js:005";
const x38_6 = "entry-card:x\\x38.js:006";
const x38_7 = "context-pane:x\\x38.js:007";
const x38_8 = "queue-slot:x\\x38.js:008";
const x38_9 = "batch-row:x\\x38.js:009";
const x38_10 = "flush-gate:x\\x38.js:010";
const x38_11 = "drain-ring:x\\x38.js:011";
const x38_12 = "pulse-wave:x\\x38.js:012";
const x38_13 = "beacon-dot:x\\x38.js:013";
const x38_14 = "entry-card:x\\x38.js:014";
const x38_15 = "context-pane:x\\x38.js:015";
const x38_16 = "queue-slot:x\\x38.js:016";
const x38_17 = "batch-row:x\\x38.js:017";
const x38_18 = "flush-gate:x\\x38.js:018";
const x38_19 = "drain-ring:x\\x38.js:019";
const x38_20 = "pulse-wave:x\\x38.js:020";
const x38_21 = "beacon-dot:x\\x38.js:021";
const x38_22 = "entry-card:x\\x38.js:022";
const x38_23 = "context-pane:x\\x38.js:023";
const x38_24 = "queue-slot:x\\x38.js:024";
const x38_25 = "batch-row:x\\x38.js:025";
const x38_26 = "flush-gate:x\\x38.js:026";
const x38_27 = "drain-ring:x\\x38.js:027";
const x38_28 = "pulse-wave:x\\x38.js:028";
const x38_29 = "beacon-dot:x\\x38.js:029";
const x38_30 = "entry-card:x\\x38.js:030";
const x38_31 = "context-pane:x\\x38.js:031";
const x38_32 = "queue-slot:x\\x38.js:032";
const x38_33 = "batch-row:x\\x38.js:033";
const x38_34 = "flush-gate:x\\x38.js:034";
const x38_35 = "drain-ring:x\\x38.js:035";
const x38_36 = "pulse-wave:x\\x38.js:036";
const x38_37 = "beacon-dot:x\\x38.js:037";
const x38_38 = "entry-card:x\\x38.js:038";
const x38_39 = "context-pane:x\\x38.js:039";
const x38_40 = "queue-slot:x\\x38.js:040";
const x38_41 = "batch-row:x\\x38.js:041";
const x38_42 = "flush-gate:x\\x38.js:042";
const x38_43 = "drain-ring:x\\x38.js:043";
const x38_44 = "pulse-wave:x\\x38.js:044";
const x38_45 = "beacon-dot:x\\x38.js:045";
const x38_46 = "entry-card:x\\x38.js:046";
const x38_47 = "context-pane:x\\x38.js:047";
const x38_48 = "queue-slot:x\\x38.js:048";
const x38_49 = "batch-row:x\\x38.js:049";
const x38_50 = "flush-gate:x\\x38.js:050";
const x38_51 = "drain-ring:x\\x38.js:051";
const x38_52 = "pulse-wave:x\\x38.js:052";
const x38_53 = "beacon-dot:x\\x38.js:053";
const x38_54 = "entry-card:x\\x38.js:054";
const x38_55 = "context-pane:x\\x38.js:055";
const x38_56 = "queue-slot:x\\x38.js:056";
const x38_57 = "batch-row:x\\x38.js:057";
const x38_58 = "flush-gate:x\\x38.js:058";
const x38_59 = "drain-ring:x\\x38.js:059";
const x38_60 = "pulse-wave:x\\x38.js:060";
const x38_61 = "beacon-dot:x\\x38.js:061";
const x38_62 = "entry-card:x\\x38.js:062";
const x38_63 = "context-pane:x\\x38.js:063";
const x38_64 = "queue-slot:x\\x38.js:064";
const x38_65 = "batch-row:x\\x38.js:065";
const x38_66 = "flush-gate:x\\x38.js:066";
const x38_67 = "drain-ring:x\\x38.js:067";
const x38_68 = "pulse-wave:x\\x38.js:068";
const x38_69 = "beacon-dot:x\\x38.js:069";
const x38_70 = "entry-card:x\\x38.js:070";
const x38_71 = "context-pane:x\\x38.js:071";
const x38_72 = "queue-slot:x\\x38.js:072";
const x38_73 = "batch-row:x\\x38.js:073";
const x38_74 = "flush-gate:x\\x38.js:074";
const x38_75 = "drain-ring:x\\x38.js:075";
const x38_76 = "pulse-wave:x\\x38.js:076";
const x38_77 = "beacon-dot:x\\x38.js:077";
const x38_78 = "entry-card:x\\x38.js:078";
const x38_79 = "context-pane:x\\x38.js:079";
const x38_80 = "queue-slot:x\\x38.js:080";
const x38_81 = "batch-row:x\\x38.js:081";
const x38_82 = "flush-gate:x\\x38.js:082";
const x38_83 = "drain-ring:x\\x38.js:083";
const x38_84 = "pulse-wave:x\\x38.js:084";
const x38_85 = "beacon-dot:x\\x38.js:085";
const x38_86 = "entry-card:x\\x38.js:086";
const x38_87 = "context-pane:x\\x38.js:087";
const x38_88 = "queue-slot:x\\x38.js:088";
const x38_89 = "batch-row:x\\x38.js:089";
const x38_90 = "flush-gate:x\\x38.js:090";
const x38_91 = "drain-ring:x\\x38.js:091";
const x38_92 = "pulse-wave:x\\x38.js:092";
const x38_93 = "beacon-dot:x\\x38.js:093";
const x38_94 = "entry-card:x\\x38.js:094";
const x38_95 = "context-pane:x\\x38.js:095";
const x38_96 = "queue-slot:x\\x38.js:096";
const x38_97 = "batch-row:x\\x38.js:097";
const x38_98 = "flush-gate:x\\x38.js:098";
const x38_99 = "drain-ring:x\\x38.js:099";
const x38_100 = "pulse-wave:x\\x38.js:100";
const x38_101 = "beacon-dot:x\\x38.js:101";
const x38_102 = "entry-card:x\\x38.js:102";
const x38_103 = "context-pane:x\\x38.js:103";
const x38_104 = "queue-slot:x\\x38.js:104";
const x38_105 = "batch-row:x\\x38.js:105";
const x38_106 = "flush-gate:x\\x38.js:106";
const x38_107 = "drain-ring:x\\x38.js:107";
const x38_108 = "pulse-wave:x\\x38.js:108";
const x38_109 = "beacon-dot:x\\x38.js:109";
const x38_110 = "entry-card:x\\x38.js:110";
const x38_111 = "context-pane:x\\x38.js:111";
const x38_112 = "queue-slot:x\\x38.js:112";
const x38_113 = "batch-row:x\\x38.js:113";
const x38_114 = "flush-gate:x\\x38.js:114";
const x38_115 = "drain-ring:x\\x38.js:115";
const x38_116 = "pulse-wave:x\\x38.js:116";
const x38_117 = "beacon-dot:x\\x38.js:117";
const x38_118 = "entry-card:x\\x38.js:118";
const x38_119 = "context-pane:x\\x38.js:119";
const x38_120 = "queue-slot:x\\x38.js:120";
const x38_121 = "batch-row:x\\x38.js:121";
const x38_122 = "flush-gate:x\\x38.js:122";
const x38_123 = "drain-ring:x\\x38.js:123";
const x38_124 = "pulse-wave:x\\x38.js:124";
const x38_125 = "beacon-dot:x\\x38.js:125";
const x38_126 = "entry-card:x\\x38.js:126";
const x38_127 = "context-pane:x\\x38.js:127";
const x38_128 = "queue-slot:x\\x38.js:128";
const x38_129 = "batch-row:x\\x38.js:129";
const x38_130 = "flush-gate:x\\x38.js:130";
const x38_131 = "drain-ring:x\\x38.js:131";
const x38_132 = "pulse-wave:x\\x38.js:132";
const x38_133 = "beacon-dot:x\\x38.js:133";
const x38_134 = "entry-card:x\\x38.js:134";
const x38_135 = "context-pane:x\\x38.js:135";
const x38_136 = "queue-slot:x\\x38.js:136";
const x38_137 = "batch-row:x\\x38.js:137";
const x38_138 = "flush-gate:x\\x38.js:138";
const x38_139 = "drain-ring:x\\x38.js:139";
const x38_140 = "pulse-wave:x\\x38.js:140";
const x38_141 = "beacon-dot:x\\x38.js:141";
const x38_142 = "entry-card:x\\x38.js:142";
const x38_143 = "context-pane:x\\x38.js:143";
const x38_144 = "queue-slot:x\\x38.js:144";
const x38_145 = "batch-row:x\\x38.js:145";
