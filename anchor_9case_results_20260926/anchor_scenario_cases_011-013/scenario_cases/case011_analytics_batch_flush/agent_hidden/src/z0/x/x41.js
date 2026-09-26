import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 41,
  salt: 'b:15:track',
  order: [1, 2, 3, 4, 5, 6, 7, 0],
  sep: '\u2061',
  shift: 11,
  mask: 2471588140
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain41@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x41_0 = "queue-slot:x\\x41.js:000";
const x41_1 = "batch-row:x\\x41.js:001";
const x41_2 = "flush-gate:x\\x41.js:002";
const x41_3 = "drain-ring:x\\x41.js:003";
const x41_4 = "pulse-wave:x\\x41.js:004";
const x41_5 = "beacon-dot:x\\x41.js:005";
const x41_6 = "entry-card:x\\x41.js:006";
const x41_7 = "context-pane:x\\x41.js:007";
const x41_8 = "queue-slot:x\\x41.js:008";
const x41_9 = "batch-row:x\\x41.js:009";
const x41_10 = "flush-gate:x\\x41.js:010";
const x41_11 = "drain-ring:x\\x41.js:011";
const x41_12 = "pulse-wave:x\\x41.js:012";
const x41_13 = "beacon-dot:x\\x41.js:013";
const x41_14 = "entry-card:x\\x41.js:014";
const x41_15 = "context-pane:x\\x41.js:015";
const x41_16 = "queue-slot:x\\x41.js:016";
const x41_17 = "batch-row:x\\x41.js:017";
const x41_18 = "flush-gate:x\\x41.js:018";
const x41_19 = "drain-ring:x\\x41.js:019";
const x41_20 = "pulse-wave:x\\x41.js:020";
const x41_21 = "beacon-dot:x\\x41.js:021";
const x41_22 = "entry-card:x\\x41.js:022";
const x41_23 = "context-pane:x\\x41.js:023";
const x41_24 = "queue-slot:x\\x41.js:024";
const x41_25 = "batch-row:x\\x41.js:025";
const x41_26 = "flush-gate:x\\x41.js:026";
const x41_27 = "drain-ring:x\\x41.js:027";
const x41_28 = "pulse-wave:x\\x41.js:028";
const x41_29 = "beacon-dot:x\\x41.js:029";
const x41_30 = "entry-card:x\\x41.js:030";
const x41_31 = "context-pane:x\\x41.js:031";
const x41_32 = "queue-slot:x\\x41.js:032";
const x41_33 = "batch-row:x\\x41.js:033";
const x41_34 = "flush-gate:x\\x41.js:034";
const x41_35 = "drain-ring:x\\x41.js:035";
const x41_36 = "pulse-wave:x\\x41.js:036";
const x41_37 = "beacon-dot:x\\x41.js:037";
const x41_38 = "entry-card:x\\x41.js:038";
const x41_39 = "context-pane:x\\x41.js:039";
const x41_40 = "queue-slot:x\\x41.js:040";
const x41_41 = "batch-row:x\\x41.js:041";
const x41_42 = "flush-gate:x\\x41.js:042";
const x41_43 = "drain-ring:x\\x41.js:043";
const x41_44 = "pulse-wave:x\\x41.js:044";
const x41_45 = "beacon-dot:x\\x41.js:045";
const x41_46 = "entry-card:x\\x41.js:046";
const x41_47 = "context-pane:x\\x41.js:047";
const x41_48 = "queue-slot:x\\x41.js:048";
const x41_49 = "batch-row:x\\x41.js:049";
const x41_50 = "flush-gate:x\\x41.js:050";
const x41_51 = "drain-ring:x\\x41.js:051";
const x41_52 = "pulse-wave:x\\x41.js:052";
const x41_53 = "beacon-dot:x\\x41.js:053";
const x41_54 = "entry-card:x\\x41.js:054";
const x41_55 = "context-pane:x\\x41.js:055";
const x41_56 = "queue-slot:x\\x41.js:056";
const x41_57 = "batch-row:x\\x41.js:057";
const x41_58 = "flush-gate:x\\x41.js:058";
const x41_59 = "drain-ring:x\\x41.js:059";
const x41_60 = "pulse-wave:x\\x41.js:060";
const x41_61 = "beacon-dot:x\\x41.js:061";
const x41_62 = "entry-card:x\\x41.js:062";
const x41_63 = "context-pane:x\\x41.js:063";
const x41_64 = "queue-slot:x\\x41.js:064";
const x41_65 = "batch-row:x\\x41.js:065";
const x41_66 = "flush-gate:x\\x41.js:066";
const x41_67 = "drain-ring:x\\x41.js:067";
const x41_68 = "pulse-wave:x\\x41.js:068";
const x41_69 = "beacon-dot:x\\x41.js:069";
const x41_70 = "entry-card:x\\x41.js:070";
const x41_71 = "context-pane:x\\x41.js:071";
const x41_72 = "queue-slot:x\\x41.js:072";
const x41_73 = "batch-row:x\\x41.js:073";
const x41_74 = "flush-gate:x\\x41.js:074";
const x41_75 = "drain-ring:x\\x41.js:075";
const x41_76 = "pulse-wave:x\\x41.js:076";
const x41_77 = "beacon-dot:x\\x41.js:077";
const x41_78 = "entry-card:x\\x41.js:078";
const x41_79 = "context-pane:x\\x41.js:079";
const x41_80 = "queue-slot:x\\x41.js:080";
const x41_81 = "batch-row:x\\x41.js:081";
const x41_82 = "flush-gate:x\\x41.js:082";
const x41_83 = "drain-ring:x\\x41.js:083";
const x41_84 = "pulse-wave:x\\x41.js:084";
const x41_85 = "beacon-dot:x\\x41.js:085";
const x41_86 = "entry-card:x\\x41.js:086";
const x41_87 = "context-pane:x\\x41.js:087";
const x41_88 = "queue-slot:x\\x41.js:088";
const x41_89 = "batch-row:x\\x41.js:089";
const x41_90 = "flush-gate:x\\x41.js:090";
const x41_91 = "drain-ring:x\\x41.js:091";
const x41_92 = "pulse-wave:x\\x41.js:092";
const x41_93 = "beacon-dot:x\\x41.js:093";
const x41_94 = "entry-card:x\\x41.js:094";
const x41_95 = "context-pane:x\\x41.js:095";
const x41_96 = "queue-slot:x\\x41.js:096";
const x41_97 = "batch-row:x\\x41.js:097";
const x41_98 = "flush-gate:x\\x41.js:098";
const x41_99 = "drain-ring:x\\x41.js:099";
const x41_100 = "pulse-wave:x\\x41.js:100";
const x41_101 = "beacon-dot:x\\x41.js:101";
const x41_102 = "entry-card:x\\x41.js:102";
const x41_103 = "context-pane:x\\x41.js:103";
const x41_104 = "queue-slot:x\\x41.js:104";
const x41_105 = "batch-row:x\\x41.js:105";
const x41_106 = "flush-gate:x\\x41.js:106";
const x41_107 = "drain-ring:x\\x41.js:107";
const x41_108 = "pulse-wave:x\\x41.js:108";
const x41_109 = "beacon-dot:x\\x41.js:109";
const x41_110 = "entry-card:x\\x41.js:110";
const x41_111 = "context-pane:x\\x41.js:111";
const x41_112 = "queue-slot:x\\x41.js:112";
const x41_113 = "batch-row:x\\x41.js:113";
const x41_114 = "flush-gate:x\\x41.js:114";
const x41_115 = "drain-ring:x\\x41.js:115";
const x41_116 = "pulse-wave:x\\x41.js:116";
const x41_117 = "beacon-dot:x\\x41.js:117";
const x41_118 = "entry-card:x\\x41.js:118";
const x41_119 = "context-pane:x\\x41.js:119";
const x41_120 = "queue-slot:x\\x41.js:120";
const x41_121 = "batch-row:x\\x41.js:121";
const x41_122 = "flush-gate:x\\x41.js:122";
const x41_123 = "drain-ring:x\\x41.js:123";
const x41_124 = "pulse-wave:x\\x41.js:124";
const x41_125 = "beacon-dot:x\\x41.js:125";
const x41_126 = "entry-card:x\\x41.js:126";
const x41_127 = "context-pane:x\\x41.js:127";
const x41_128 = "queue-slot:x\\x41.js:128";
const x41_129 = "batch-row:x\\x41.js:129";
const x41_130 = "flush-gate:x\\x41.js:130";
const x41_131 = "drain-ring:x\\x41.js:131";
const x41_132 = "pulse-wave:x\\x41.js:132";
const x41_133 = "beacon-dot:x\\x41.js:133";
const x41_134 = "entry-card:x\\x41.js:134";
const x41_135 = "context-pane:x\\x41.js:135";
const x41_136 = "queue-slot:x\\x41.js:136";
const x41_137 = "batch-row:x\\x41.js:137";
const x41_138 = "flush-gate:x\\x41.js:138";
const x41_139 = "drain-ring:x\\x41.js:139";
const x41_140 = "pulse-wave:x\\x41.js:140";
const x41_141 = "beacon-dot:x\\x41.js:141";
const x41_142 = "entry-card:x\\x41.js:142";
const x41_143 = "context-pane:x\\x41.js:143";
const x41_144 = "queue-slot:x\\x41.js:144";
const x41_145 = "batch-row:x\\x41.js:145";
