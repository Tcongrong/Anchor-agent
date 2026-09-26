import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 40,
  salt: 'b:14:track',
  order: [0, 1, 2, 3, 4, 5, 6, 7],
  sep: '\u2060',
  shift: 10,
  mask: 4112119675
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot40@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'n', i: 4, v: 'n', y: 'n', n: 1 },
    { k: 'g', i: 5, v: 'g', y: 'g', n: 1 },
    { k: 'u', i: 6, v: 'u', y: 'u', n: 1 },
    { k: 't', i: 7, v: 't', y: 't', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(3, 11) + '~' + (cfg.slot + 4).toString(36) + (0).toString(36).padStart(3, '0');
}

export function track(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(waveTuple(ctx), 'wave', { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x40_0 = "queue-slot:x\\x40.js:000";
const x40_1 = "batch-row:x\\x40.js:001";
const x40_2 = "flush-gate:x\\x40.js:002";
const x40_3 = "drain-ring:x\\x40.js:003";
const x40_4 = "pulse-wave:x\\x40.js:004";
const x40_5 = "beacon-dot:x\\x40.js:005";
const x40_6 = "entry-card:x\\x40.js:006";
const x40_7 = "context-pane:x\\x40.js:007";
const x40_8 = "queue-slot:x\\x40.js:008";
const x40_9 = "batch-row:x\\x40.js:009";
const x40_10 = "flush-gate:x\\x40.js:010";
const x40_11 = "drain-ring:x\\x40.js:011";
const x40_12 = "pulse-wave:x\\x40.js:012";
const x40_13 = "beacon-dot:x\\x40.js:013";
const x40_14 = "entry-card:x\\x40.js:014";
const x40_15 = "context-pane:x\\x40.js:015";
const x40_16 = "queue-slot:x\\x40.js:016";
const x40_17 = "batch-row:x\\x40.js:017";
const x40_18 = "flush-gate:x\\x40.js:018";
const x40_19 = "drain-ring:x\\x40.js:019";
const x40_20 = "pulse-wave:x\\x40.js:020";
const x40_21 = "beacon-dot:x\\x40.js:021";
const x40_22 = "entry-card:x\\x40.js:022";
const x40_23 = "context-pane:x\\x40.js:023";
const x40_24 = "queue-slot:x\\x40.js:024";
const x40_25 = "batch-row:x\\x40.js:025";
const x40_26 = "flush-gate:x\\x40.js:026";
const x40_27 = "drain-ring:x\\x40.js:027";
const x40_28 = "pulse-wave:x\\x40.js:028";
const x40_29 = "beacon-dot:x\\x40.js:029";
const x40_30 = "entry-card:x\\x40.js:030";
const x40_31 = "context-pane:x\\x40.js:031";
const x40_32 = "queue-slot:x\\x40.js:032";
const x40_33 = "batch-row:x\\x40.js:033";
const x40_34 = "flush-gate:x\\x40.js:034";
const x40_35 = "drain-ring:x\\x40.js:035";
const x40_36 = "pulse-wave:x\\x40.js:036";
const x40_37 = "beacon-dot:x\\x40.js:037";
const x40_38 = "entry-card:x\\x40.js:038";
const x40_39 = "context-pane:x\\x40.js:039";
const x40_40 = "queue-slot:x\\x40.js:040";
const x40_41 = "batch-row:x\\x40.js:041";
const x40_42 = "flush-gate:x\\x40.js:042";
const x40_43 = "drain-ring:x\\x40.js:043";
const x40_44 = "pulse-wave:x\\x40.js:044";
const x40_45 = "beacon-dot:x\\x40.js:045";
const x40_46 = "entry-card:x\\x40.js:046";
const x40_47 = "context-pane:x\\x40.js:047";
const x40_48 = "queue-slot:x\\x40.js:048";
const x40_49 = "batch-row:x\\x40.js:049";
const x40_50 = "flush-gate:x\\x40.js:050";
const x40_51 = "drain-ring:x\\x40.js:051";
const x40_52 = "pulse-wave:x\\x40.js:052";
const x40_53 = "beacon-dot:x\\x40.js:053";
const x40_54 = "entry-card:x\\x40.js:054";
const x40_55 = "context-pane:x\\x40.js:055";
const x40_56 = "queue-slot:x\\x40.js:056";
const x40_57 = "batch-row:x\\x40.js:057";
const x40_58 = "flush-gate:x\\x40.js:058";
const x40_59 = "drain-ring:x\\x40.js:059";
const x40_60 = "pulse-wave:x\\x40.js:060";
const x40_61 = "beacon-dot:x\\x40.js:061";
const x40_62 = "entry-card:x\\x40.js:062";
const x40_63 = "context-pane:x\\x40.js:063";
const x40_64 = "queue-slot:x\\x40.js:064";
const x40_65 = "batch-row:x\\x40.js:065";
const x40_66 = "flush-gate:x\\x40.js:066";
const x40_67 = "drain-ring:x\\x40.js:067";
const x40_68 = "pulse-wave:x\\x40.js:068";
const x40_69 = "beacon-dot:x\\x40.js:069";
const x40_70 = "entry-card:x\\x40.js:070";
const x40_71 = "context-pane:x\\x40.js:071";
const x40_72 = "queue-slot:x\\x40.js:072";
const x40_73 = "batch-row:x\\x40.js:073";
const x40_74 = "flush-gate:x\\x40.js:074";
const x40_75 = "drain-ring:x\\x40.js:075";
const x40_76 = "pulse-wave:x\\x40.js:076";
const x40_77 = "beacon-dot:x\\x40.js:077";
const x40_78 = "entry-card:x\\x40.js:078";
const x40_79 = "context-pane:x\\x40.js:079";
const x40_80 = "queue-slot:x\\x40.js:080";
const x40_81 = "batch-row:x\\x40.js:081";
const x40_82 = "flush-gate:x\\x40.js:082";
const x40_83 = "drain-ring:x\\x40.js:083";
const x40_84 = "pulse-wave:x\\x40.js:084";
const x40_85 = "beacon-dot:x\\x40.js:085";
const x40_86 = "entry-card:x\\x40.js:086";
const x40_87 = "context-pane:x\\x40.js:087";
const x40_88 = "queue-slot:x\\x40.js:088";
const x40_89 = "batch-row:x\\x40.js:089";
const x40_90 = "flush-gate:x\\x40.js:090";
const x40_91 = "drain-ring:x\\x40.js:091";
const x40_92 = "pulse-wave:x\\x40.js:092";
const x40_93 = "beacon-dot:x\\x40.js:093";
const x40_94 = "entry-card:x\\x40.js:094";
const x40_95 = "context-pane:x\\x40.js:095";
const x40_96 = "queue-slot:x\\x40.js:096";
const x40_97 = "batch-row:x\\x40.js:097";
const x40_98 = "flush-gate:x\\x40.js:098";
const x40_99 = "drain-ring:x\\x40.js:099";
const x40_100 = "pulse-wave:x\\x40.js:100";
const x40_101 = "beacon-dot:x\\x40.js:101";
const x40_102 = "entry-card:x\\x40.js:102";
const x40_103 = "context-pane:x\\x40.js:103";
const x40_104 = "queue-slot:x\\x40.js:104";
const x40_105 = "batch-row:x\\x40.js:105";
const x40_106 = "flush-gate:x\\x40.js:106";
const x40_107 = "drain-ring:x\\x40.js:107";
const x40_108 = "pulse-wave:x\\x40.js:108";
const x40_109 = "beacon-dot:x\\x40.js:109";
const x40_110 = "entry-card:x\\x40.js:110";
const x40_111 = "context-pane:x\\x40.js:111";
const x40_112 = "queue-slot:x\\x40.js:112";
const x40_113 = "batch-row:x\\x40.js:113";
const x40_114 = "flush-gate:x\\x40.js:114";
const x40_115 = "drain-ring:x\\x40.js:115";
const x40_116 = "pulse-wave:x\\x40.js:116";
const x40_117 = "beacon-dot:x\\x40.js:117";
const x40_118 = "entry-card:x\\x40.js:118";
const x40_119 = "context-pane:x\\x40.js:119";
const x40_120 = "queue-slot:x\\x40.js:120";
const x40_121 = "batch-row:x\\x40.js:121";
const x40_122 = "flush-gate:x\\x40.js:122";
const x40_123 = "drain-ring:x\\x40.js:123";
const x40_124 = "pulse-wave:x\\x40.js:124";
const x40_125 = "beacon-dot:x\\x40.js:125";
const x40_126 = "entry-card:x\\x40.js:126";
const x40_127 = "context-pane:x\\x40.js:127";
const x40_128 = "queue-slot:x\\x40.js:128";
const x40_129 = "batch-row:x\\x40.js:129";
const x40_130 = "flush-gate:x\\x40.js:130";
const x40_131 = "drain-ring:x\\x40.js:131";
const x40_132 = "pulse-wave:x\\x40.js:132";
const x40_133 = "beacon-dot:x\\x40.js:133";
const x40_134 = "entry-card:x\\x40.js:134";
const x40_135 = "context-pane:x\\x40.js:135";
const x40_136 = "queue-slot:x\\x40.js:136";
const x40_137 = "batch-row:x\\x40.js:137";
const x40_138 = "flush-gate:x\\x40.js:138";
const x40_139 = "drain-ring:x\\x40.js:139";
const x40_140 = "pulse-wave:x\\x40.js:140";
const x40_141 = "beacon-dot:x\\x40.js:141";
const x40_142 = "entry-card:x\\x40.js:142";
const x40_143 = "context-pane:x\\x40.js:143";
const x40_144 = "queue-slot:x\\x40.js:144";
const x40_145 = "batch-row:x\\x40.js:145";
