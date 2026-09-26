import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 16,
  salt: 'b:0g:track',
  order: [0, 1, 2, 3, 4, 5, 6, 7],
  sep: '\u2060',
  shift: 7,
  mask: 535203555
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot16@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x16_0 = "queue-slot:x\\x16.js:000";
const x16_1 = "batch-row:x\\x16.js:001";
const x16_2 = "flush-gate:x\\x16.js:002";
const x16_3 = "drain-ring:x\\x16.js:003";
const x16_4 = "pulse-wave:x\\x16.js:004";
const x16_5 = "beacon-dot:x\\x16.js:005";
const x16_6 = "entry-card:x\\x16.js:006";
const x16_7 = "context-pane:x\\x16.js:007";
const x16_8 = "queue-slot:x\\x16.js:008";
const x16_9 = "batch-row:x\\x16.js:009";
const x16_10 = "flush-gate:x\\x16.js:010";
const x16_11 = "drain-ring:x\\x16.js:011";
const x16_12 = "pulse-wave:x\\x16.js:012";
const x16_13 = "beacon-dot:x\\x16.js:013";
const x16_14 = "entry-card:x\\x16.js:014";
const x16_15 = "context-pane:x\\x16.js:015";
const x16_16 = "queue-slot:x\\x16.js:016";
const x16_17 = "batch-row:x\\x16.js:017";
const x16_18 = "flush-gate:x\\x16.js:018";
const x16_19 = "drain-ring:x\\x16.js:019";
const x16_20 = "pulse-wave:x\\x16.js:020";
const x16_21 = "beacon-dot:x\\x16.js:021";
const x16_22 = "entry-card:x\\x16.js:022";
const x16_23 = "context-pane:x\\x16.js:023";
const x16_24 = "queue-slot:x\\x16.js:024";
const x16_25 = "batch-row:x\\x16.js:025";
const x16_26 = "flush-gate:x\\x16.js:026";
const x16_27 = "drain-ring:x\\x16.js:027";
const x16_28 = "pulse-wave:x\\x16.js:028";
const x16_29 = "beacon-dot:x\\x16.js:029";
const x16_30 = "entry-card:x\\x16.js:030";
const x16_31 = "context-pane:x\\x16.js:031";
const x16_32 = "queue-slot:x\\x16.js:032";
const x16_33 = "batch-row:x\\x16.js:033";
const x16_34 = "flush-gate:x\\x16.js:034";
const x16_35 = "drain-ring:x\\x16.js:035";
const x16_36 = "pulse-wave:x\\x16.js:036";
const x16_37 = "beacon-dot:x\\x16.js:037";
const x16_38 = "entry-card:x\\x16.js:038";
const x16_39 = "context-pane:x\\x16.js:039";
const x16_40 = "queue-slot:x\\x16.js:040";
const x16_41 = "batch-row:x\\x16.js:041";
const x16_42 = "flush-gate:x\\x16.js:042";
const x16_43 = "drain-ring:x\\x16.js:043";
const x16_44 = "pulse-wave:x\\x16.js:044";
const x16_45 = "beacon-dot:x\\x16.js:045";
const x16_46 = "entry-card:x\\x16.js:046";
const x16_47 = "context-pane:x\\x16.js:047";
const x16_48 = "queue-slot:x\\x16.js:048";
const x16_49 = "batch-row:x\\x16.js:049";
const x16_50 = "flush-gate:x\\x16.js:050";
const x16_51 = "drain-ring:x\\x16.js:051";
const x16_52 = "pulse-wave:x\\x16.js:052";
const x16_53 = "beacon-dot:x\\x16.js:053";
const x16_54 = "entry-card:x\\x16.js:054";
const x16_55 = "context-pane:x\\x16.js:055";
const x16_56 = "queue-slot:x\\x16.js:056";
const x16_57 = "batch-row:x\\x16.js:057";
const x16_58 = "flush-gate:x\\x16.js:058";
const x16_59 = "drain-ring:x\\x16.js:059";
const x16_60 = "pulse-wave:x\\x16.js:060";
const x16_61 = "beacon-dot:x\\x16.js:061";
const x16_62 = "entry-card:x\\x16.js:062";
const x16_63 = "context-pane:x\\x16.js:063";
const x16_64 = "queue-slot:x\\x16.js:064";
const x16_65 = "batch-row:x\\x16.js:065";
const x16_66 = "flush-gate:x\\x16.js:066";
const x16_67 = "drain-ring:x\\x16.js:067";
const x16_68 = "pulse-wave:x\\x16.js:068";
const x16_69 = "beacon-dot:x\\x16.js:069";
const x16_70 = "entry-card:x\\x16.js:070";
const x16_71 = "context-pane:x\\x16.js:071";
const x16_72 = "queue-slot:x\\x16.js:072";
const x16_73 = "batch-row:x\\x16.js:073";
const x16_74 = "flush-gate:x\\x16.js:074";
const x16_75 = "drain-ring:x\\x16.js:075";
const x16_76 = "pulse-wave:x\\x16.js:076";
const x16_77 = "beacon-dot:x\\x16.js:077";
const x16_78 = "entry-card:x\\x16.js:078";
const x16_79 = "context-pane:x\\x16.js:079";
const x16_80 = "queue-slot:x\\x16.js:080";
const x16_81 = "batch-row:x\\x16.js:081";
const x16_82 = "flush-gate:x\\x16.js:082";
const x16_83 = "drain-ring:x\\x16.js:083";
const x16_84 = "pulse-wave:x\\x16.js:084";
const x16_85 = "beacon-dot:x\\x16.js:085";
const x16_86 = "entry-card:x\\x16.js:086";
const x16_87 = "context-pane:x\\x16.js:087";
const x16_88 = "queue-slot:x\\x16.js:088";
const x16_89 = "batch-row:x\\x16.js:089";
const x16_90 = "flush-gate:x\\x16.js:090";
const x16_91 = "drain-ring:x\\x16.js:091";
const x16_92 = "pulse-wave:x\\x16.js:092";
const x16_93 = "beacon-dot:x\\x16.js:093";
const x16_94 = "entry-card:x\\x16.js:094";
const x16_95 = "context-pane:x\\x16.js:095";
const x16_96 = "queue-slot:x\\x16.js:096";
const x16_97 = "batch-row:x\\x16.js:097";
const x16_98 = "flush-gate:x\\x16.js:098";
const x16_99 = "drain-ring:x\\x16.js:099";
const x16_100 = "pulse-wave:x\\x16.js:100";
const x16_101 = "beacon-dot:x\\x16.js:101";
const x16_102 = "entry-card:x\\x16.js:102";
const x16_103 = "context-pane:x\\x16.js:103";
const x16_104 = "queue-slot:x\\x16.js:104";
const x16_105 = "batch-row:x\\x16.js:105";
const x16_106 = "flush-gate:x\\x16.js:106";
const x16_107 = "drain-ring:x\\x16.js:107";
const x16_108 = "pulse-wave:x\\x16.js:108";
const x16_109 = "beacon-dot:x\\x16.js:109";
const x16_110 = "entry-card:x\\x16.js:110";
const x16_111 = "context-pane:x\\x16.js:111";
const x16_112 = "queue-slot:x\\x16.js:112";
const x16_113 = "batch-row:x\\x16.js:113";
const x16_114 = "flush-gate:x\\x16.js:114";
const x16_115 = "drain-ring:x\\x16.js:115";
const x16_116 = "pulse-wave:x\\x16.js:116";
const x16_117 = "beacon-dot:x\\x16.js:117";
const x16_118 = "entry-card:x\\x16.js:118";
const x16_119 = "context-pane:x\\x16.js:119";
const x16_120 = "queue-slot:x\\x16.js:120";
const x16_121 = "batch-row:x\\x16.js:121";
const x16_122 = "flush-gate:x\\x16.js:122";
const x16_123 = "drain-ring:x\\x16.js:123";
const x16_124 = "pulse-wave:x\\x16.js:124";
const x16_125 = "beacon-dot:x\\x16.js:125";
const x16_126 = "entry-card:x\\x16.js:126";
const x16_127 = "context-pane:x\\x16.js:127";
const x16_128 = "queue-slot:x\\x16.js:128";
const x16_129 = "batch-row:x\\x16.js:129";
const x16_130 = "flush-gate:x\\x16.js:130";
const x16_131 = "drain-ring:x\\x16.js:131";
const x16_132 = "pulse-wave:x\\x16.js:132";
const x16_133 = "beacon-dot:x\\x16.js:133";
const x16_134 = "entry-card:x\\x16.js:134";
const x16_135 = "context-pane:x\\x16.js:135";
const x16_136 = "queue-slot:x\\x16.js:136";
const x16_137 = "batch-row:x\\x16.js:137";
const x16_138 = "flush-gate:x\\x16.js:138";
const x16_139 = "drain-ring:x\\x16.js:139";
const x16_140 = "pulse-wave:x\\x16.js:140";
const x16_141 = "beacon-dot:x\\x16.js:141";
const x16_142 = "entry-card:x\\x16.js:142";
const x16_143 = "context-pane:x\\x16.js:143";
const x16_144 = "queue-slot:x\\x16.js:144";
const x16_145 = "batch-row:x\\x16.js:145";
