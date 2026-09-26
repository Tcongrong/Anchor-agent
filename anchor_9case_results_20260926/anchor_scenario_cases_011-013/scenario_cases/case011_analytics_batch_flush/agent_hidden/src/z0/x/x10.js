import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 10,
  salt: 'b:0a:track',
  order: [2, 3, 4, 5, 6, 7, 0, 1],
  sep: '\u2062',
  shift: 8,
  mask: 1788458173
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot10@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
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
const x10_0 = "queue-slot:x\\x10.js:000";
const x10_1 = "batch-row:x\\x10.js:001";
const x10_2 = "flush-gate:x\\x10.js:002";
const x10_3 = "drain-ring:x\\x10.js:003";
const x10_4 = "pulse-wave:x\\x10.js:004";
const x10_5 = "beacon-dot:x\\x10.js:005";
const x10_6 = "entry-card:x\\x10.js:006";
const x10_7 = "context-pane:x\\x10.js:007";
const x10_8 = "queue-slot:x\\x10.js:008";
const x10_9 = "batch-row:x\\x10.js:009";
const x10_10 = "flush-gate:x\\x10.js:010";
const x10_11 = "drain-ring:x\\x10.js:011";
const x10_12 = "pulse-wave:x\\x10.js:012";
const x10_13 = "beacon-dot:x\\x10.js:013";
const x10_14 = "entry-card:x\\x10.js:014";
const x10_15 = "context-pane:x\\x10.js:015";
const x10_16 = "queue-slot:x\\x10.js:016";
const x10_17 = "batch-row:x\\x10.js:017";
const x10_18 = "flush-gate:x\\x10.js:018";
const x10_19 = "drain-ring:x\\x10.js:019";
const x10_20 = "pulse-wave:x\\x10.js:020";
const x10_21 = "beacon-dot:x\\x10.js:021";
const x10_22 = "entry-card:x\\x10.js:022";
const x10_23 = "context-pane:x\\x10.js:023";
const x10_24 = "queue-slot:x\\x10.js:024";
const x10_25 = "batch-row:x\\x10.js:025";
const x10_26 = "flush-gate:x\\x10.js:026";
const x10_27 = "drain-ring:x\\x10.js:027";
const x10_28 = "pulse-wave:x\\x10.js:028";
const x10_29 = "beacon-dot:x\\x10.js:029";
const x10_30 = "entry-card:x\\x10.js:030";
const x10_31 = "context-pane:x\\x10.js:031";
const x10_32 = "queue-slot:x\\x10.js:032";
const x10_33 = "batch-row:x\\x10.js:033";
const x10_34 = "flush-gate:x\\x10.js:034";
const x10_35 = "drain-ring:x\\x10.js:035";
const x10_36 = "pulse-wave:x\\x10.js:036";
const x10_37 = "beacon-dot:x\\x10.js:037";
const x10_38 = "entry-card:x\\x10.js:038";
const x10_39 = "context-pane:x\\x10.js:039";
const x10_40 = "queue-slot:x\\x10.js:040";
const x10_41 = "batch-row:x\\x10.js:041";
const x10_42 = "flush-gate:x\\x10.js:042";
const x10_43 = "drain-ring:x\\x10.js:043";
const x10_44 = "pulse-wave:x\\x10.js:044";
const x10_45 = "beacon-dot:x\\x10.js:045";
const x10_46 = "entry-card:x\\x10.js:046";
const x10_47 = "context-pane:x\\x10.js:047";
const x10_48 = "queue-slot:x\\x10.js:048";
const x10_49 = "batch-row:x\\x10.js:049";
const x10_50 = "flush-gate:x\\x10.js:050";
const x10_51 = "drain-ring:x\\x10.js:051";
const x10_52 = "pulse-wave:x\\x10.js:052";
const x10_53 = "beacon-dot:x\\x10.js:053";
const x10_54 = "entry-card:x\\x10.js:054";
const x10_55 = "context-pane:x\\x10.js:055";
const x10_56 = "queue-slot:x\\x10.js:056";
const x10_57 = "batch-row:x\\x10.js:057";
const x10_58 = "flush-gate:x\\x10.js:058";
const x10_59 = "drain-ring:x\\x10.js:059";
const x10_60 = "pulse-wave:x\\x10.js:060";
const x10_61 = "beacon-dot:x\\x10.js:061";
const x10_62 = "entry-card:x\\x10.js:062";
const x10_63 = "context-pane:x\\x10.js:063";
const x10_64 = "queue-slot:x\\x10.js:064";
const x10_65 = "batch-row:x\\x10.js:065";
const x10_66 = "flush-gate:x\\x10.js:066";
const x10_67 = "drain-ring:x\\x10.js:067";
const x10_68 = "pulse-wave:x\\x10.js:068";
const x10_69 = "beacon-dot:x\\x10.js:069";
const x10_70 = "entry-card:x\\x10.js:070";
const x10_71 = "context-pane:x\\x10.js:071";
const x10_72 = "queue-slot:x\\x10.js:072";
const x10_73 = "batch-row:x\\x10.js:073";
const x10_74 = "flush-gate:x\\x10.js:074";
const x10_75 = "drain-ring:x\\x10.js:075";
const x10_76 = "pulse-wave:x\\x10.js:076";
const x10_77 = "beacon-dot:x\\x10.js:077";
const x10_78 = "entry-card:x\\x10.js:078";
const x10_79 = "context-pane:x\\x10.js:079";
const x10_80 = "queue-slot:x\\x10.js:080";
const x10_81 = "batch-row:x\\x10.js:081";
const x10_82 = "flush-gate:x\\x10.js:082";
const x10_83 = "drain-ring:x\\x10.js:083";
const x10_84 = "pulse-wave:x\\x10.js:084";
const x10_85 = "beacon-dot:x\\x10.js:085";
const x10_86 = "entry-card:x\\x10.js:086";
const x10_87 = "context-pane:x\\x10.js:087";
const x10_88 = "queue-slot:x\\x10.js:088";
const x10_89 = "batch-row:x\\x10.js:089";
const x10_90 = "flush-gate:x\\x10.js:090";
const x10_91 = "drain-ring:x\\x10.js:091";
const x10_92 = "pulse-wave:x\\x10.js:092";
const x10_93 = "beacon-dot:x\\x10.js:093";
const x10_94 = "entry-card:x\\x10.js:094";
const x10_95 = "context-pane:x\\x10.js:095";
const x10_96 = "queue-slot:x\\x10.js:096";
const x10_97 = "batch-row:x\\x10.js:097";
const x10_98 = "flush-gate:x\\x10.js:098";
const x10_99 = "drain-ring:x\\x10.js:099";
const x10_100 = "pulse-wave:x\\x10.js:100";
const x10_101 = "beacon-dot:x\\x10.js:101";
const x10_102 = "entry-card:x\\x10.js:102";
const x10_103 = "context-pane:x\\x10.js:103";
const x10_104 = "queue-slot:x\\x10.js:104";
const x10_105 = "batch-row:x\\x10.js:105";
const x10_106 = "flush-gate:x\\x10.js:106";
const x10_107 = "drain-ring:x\\x10.js:107";
const x10_108 = "pulse-wave:x\\x10.js:108";
const x10_109 = "beacon-dot:x\\x10.js:109";
const x10_110 = "entry-card:x\\x10.js:110";
const x10_111 = "context-pane:x\\x10.js:111";
const x10_112 = "queue-slot:x\\x10.js:112";
const x10_113 = "batch-row:x\\x10.js:113";
const x10_114 = "flush-gate:x\\x10.js:114";
const x10_115 = "drain-ring:x\\x10.js:115";
const x10_116 = "pulse-wave:x\\x10.js:116";
const x10_117 = "beacon-dot:x\\x10.js:117";
const x10_118 = "entry-card:x\\x10.js:118";
const x10_119 = "context-pane:x\\x10.js:119";
const x10_120 = "queue-slot:x\\x10.js:120";
const x10_121 = "batch-row:x\\x10.js:121";
const x10_122 = "flush-gate:x\\x10.js:122";
const x10_123 = "drain-ring:x\\x10.js:123";
const x10_124 = "pulse-wave:x\\x10.js:124";
const x10_125 = "beacon-dot:x\\x10.js:125";
const x10_126 = "entry-card:x\\x10.js:126";
const x10_127 = "context-pane:x\\x10.js:127";
const x10_128 = "queue-slot:x\\x10.js:128";
const x10_129 = "batch-row:x\\x10.js:129";
const x10_130 = "flush-gate:x\\x10.js:130";
const x10_131 = "drain-ring:x\\x10.js:131";
const x10_132 = "pulse-wave:x\\x10.js:132";
const x10_133 = "beacon-dot:x\\x10.js:133";
const x10_134 = "entry-card:x\\x10.js:134";
const x10_135 = "context-pane:x\\x10.js:135";
const x10_136 = "queue-slot:x\\x10.js:136";
const x10_137 = "batch-row:x\\x10.js:137";
const x10_138 = "flush-gate:x\\x10.js:138";
const x10_139 = "drain-ring:x\\x10.js:139";
const x10_140 = "pulse-wave:x\\x10.js:140";
const x10_141 = "beacon-dot:x\\x10.js:141";
const x10_142 = "entry-card:x\\x10.js:142";
const x10_143 = "context-pane:x\\x10.js:143";
const x10_144 = "queue-slot:x\\x10.js:144";
const x10_145 = "batch-row:x\\x10.js:145";
