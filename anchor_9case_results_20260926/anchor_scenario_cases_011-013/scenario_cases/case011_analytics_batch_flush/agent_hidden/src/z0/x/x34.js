import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 34,
  salt: 'b:0y:track',
  order: [2, 3, 4, 5, 6, 7, 0, 1],
  sep: '\u2062',
  shift: 11,
  mask: 1070406997
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot34@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x34_0 = "queue-slot:x\\x34.js:000";
const x34_1 = "batch-row:x\\x34.js:001";
const x34_2 = "flush-gate:x\\x34.js:002";
const x34_3 = "drain-ring:x\\x34.js:003";
const x34_4 = "pulse-wave:x\\x34.js:004";
const x34_5 = "beacon-dot:x\\x34.js:005";
const x34_6 = "entry-card:x\\x34.js:006";
const x34_7 = "context-pane:x\\x34.js:007";
const x34_8 = "queue-slot:x\\x34.js:008";
const x34_9 = "batch-row:x\\x34.js:009";
const x34_10 = "flush-gate:x\\x34.js:010";
const x34_11 = "drain-ring:x\\x34.js:011";
const x34_12 = "pulse-wave:x\\x34.js:012";
const x34_13 = "beacon-dot:x\\x34.js:013";
const x34_14 = "entry-card:x\\x34.js:014";
const x34_15 = "context-pane:x\\x34.js:015";
const x34_16 = "queue-slot:x\\x34.js:016";
const x34_17 = "batch-row:x\\x34.js:017";
const x34_18 = "flush-gate:x\\x34.js:018";
const x34_19 = "drain-ring:x\\x34.js:019";
const x34_20 = "pulse-wave:x\\x34.js:020";
const x34_21 = "beacon-dot:x\\x34.js:021";
const x34_22 = "entry-card:x\\x34.js:022";
const x34_23 = "context-pane:x\\x34.js:023";
const x34_24 = "queue-slot:x\\x34.js:024";
const x34_25 = "batch-row:x\\x34.js:025";
const x34_26 = "flush-gate:x\\x34.js:026";
const x34_27 = "drain-ring:x\\x34.js:027";
const x34_28 = "pulse-wave:x\\x34.js:028";
const x34_29 = "beacon-dot:x\\x34.js:029";
const x34_30 = "entry-card:x\\x34.js:030";
const x34_31 = "context-pane:x\\x34.js:031";
const x34_32 = "queue-slot:x\\x34.js:032";
const x34_33 = "batch-row:x\\x34.js:033";
const x34_34 = "flush-gate:x\\x34.js:034";
const x34_35 = "drain-ring:x\\x34.js:035";
const x34_36 = "pulse-wave:x\\x34.js:036";
const x34_37 = "beacon-dot:x\\x34.js:037";
const x34_38 = "entry-card:x\\x34.js:038";
const x34_39 = "context-pane:x\\x34.js:039";
const x34_40 = "queue-slot:x\\x34.js:040";
const x34_41 = "batch-row:x\\x34.js:041";
const x34_42 = "flush-gate:x\\x34.js:042";
const x34_43 = "drain-ring:x\\x34.js:043";
const x34_44 = "pulse-wave:x\\x34.js:044";
const x34_45 = "beacon-dot:x\\x34.js:045";
const x34_46 = "entry-card:x\\x34.js:046";
const x34_47 = "context-pane:x\\x34.js:047";
const x34_48 = "queue-slot:x\\x34.js:048";
const x34_49 = "batch-row:x\\x34.js:049";
const x34_50 = "flush-gate:x\\x34.js:050";
const x34_51 = "drain-ring:x\\x34.js:051";
const x34_52 = "pulse-wave:x\\x34.js:052";
const x34_53 = "beacon-dot:x\\x34.js:053";
const x34_54 = "entry-card:x\\x34.js:054";
const x34_55 = "context-pane:x\\x34.js:055";
const x34_56 = "queue-slot:x\\x34.js:056";
const x34_57 = "batch-row:x\\x34.js:057";
const x34_58 = "flush-gate:x\\x34.js:058";
const x34_59 = "drain-ring:x\\x34.js:059";
const x34_60 = "pulse-wave:x\\x34.js:060";
const x34_61 = "beacon-dot:x\\x34.js:061";
const x34_62 = "entry-card:x\\x34.js:062";
const x34_63 = "context-pane:x\\x34.js:063";
const x34_64 = "queue-slot:x\\x34.js:064";
const x34_65 = "batch-row:x\\x34.js:065";
const x34_66 = "flush-gate:x\\x34.js:066";
const x34_67 = "drain-ring:x\\x34.js:067";
const x34_68 = "pulse-wave:x\\x34.js:068";
const x34_69 = "beacon-dot:x\\x34.js:069";
const x34_70 = "entry-card:x\\x34.js:070";
const x34_71 = "context-pane:x\\x34.js:071";
const x34_72 = "queue-slot:x\\x34.js:072";
const x34_73 = "batch-row:x\\x34.js:073";
const x34_74 = "flush-gate:x\\x34.js:074";
const x34_75 = "drain-ring:x\\x34.js:075";
const x34_76 = "pulse-wave:x\\x34.js:076";
const x34_77 = "beacon-dot:x\\x34.js:077";
const x34_78 = "entry-card:x\\x34.js:078";
const x34_79 = "context-pane:x\\x34.js:079";
const x34_80 = "queue-slot:x\\x34.js:080";
const x34_81 = "batch-row:x\\x34.js:081";
const x34_82 = "flush-gate:x\\x34.js:082";
const x34_83 = "drain-ring:x\\x34.js:083";
const x34_84 = "pulse-wave:x\\x34.js:084";
const x34_85 = "beacon-dot:x\\x34.js:085";
const x34_86 = "entry-card:x\\x34.js:086";
const x34_87 = "context-pane:x\\x34.js:087";
const x34_88 = "queue-slot:x\\x34.js:088";
const x34_89 = "batch-row:x\\x34.js:089";
const x34_90 = "flush-gate:x\\x34.js:090";
const x34_91 = "drain-ring:x\\x34.js:091";
const x34_92 = "pulse-wave:x\\x34.js:092";
const x34_93 = "beacon-dot:x\\x34.js:093";
const x34_94 = "entry-card:x\\x34.js:094";
const x34_95 = "context-pane:x\\x34.js:095";
const x34_96 = "queue-slot:x\\x34.js:096";
const x34_97 = "batch-row:x\\x34.js:097";
const x34_98 = "flush-gate:x\\x34.js:098";
const x34_99 = "drain-ring:x\\x34.js:099";
const x34_100 = "pulse-wave:x\\x34.js:100";
const x34_101 = "beacon-dot:x\\x34.js:101";
const x34_102 = "entry-card:x\\x34.js:102";
const x34_103 = "context-pane:x\\x34.js:103";
const x34_104 = "queue-slot:x\\x34.js:104";
const x34_105 = "batch-row:x\\x34.js:105";
const x34_106 = "flush-gate:x\\x34.js:106";
const x34_107 = "drain-ring:x\\x34.js:107";
const x34_108 = "pulse-wave:x\\x34.js:108";
const x34_109 = "beacon-dot:x\\x34.js:109";
const x34_110 = "entry-card:x\\x34.js:110";
const x34_111 = "context-pane:x\\x34.js:111";
const x34_112 = "queue-slot:x\\x34.js:112";
const x34_113 = "batch-row:x\\x34.js:113";
const x34_114 = "flush-gate:x\\x34.js:114";
const x34_115 = "drain-ring:x\\x34.js:115";
const x34_116 = "pulse-wave:x\\x34.js:116";
const x34_117 = "beacon-dot:x\\x34.js:117";
const x34_118 = "entry-card:x\\x34.js:118";
const x34_119 = "context-pane:x\\x34.js:119";
const x34_120 = "queue-slot:x\\x34.js:120";
const x34_121 = "batch-row:x\\x34.js:121";
const x34_122 = "flush-gate:x\\x34.js:122";
const x34_123 = "drain-ring:x\\x34.js:123";
const x34_124 = "pulse-wave:x\\x34.js:124";
const x34_125 = "beacon-dot:x\\x34.js:125";
const x34_126 = "entry-card:x\\x34.js:126";
const x34_127 = "context-pane:x\\x34.js:127";
const x34_128 = "queue-slot:x\\x34.js:128";
const x34_129 = "batch-row:x\\x34.js:129";
const x34_130 = "flush-gate:x\\x34.js:130";
const x34_131 = "drain-ring:x\\x34.js:131";
const x34_132 = "pulse-wave:x\\x34.js:132";
const x34_133 = "beacon-dot:x\\x34.js:133";
const x34_134 = "entry-card:x\\x34.js:134";
const x34_135 = "context-pane:x\\x34.js:135";
const x34_136 = "queue-slot:x\\x34.js:136";
const x34_137 = "batch-row:x\\x34.js:137";
const x34_138 = "flush-gate:x\\x34.js:138";
const x34_139 = "drain-ring:x\\x34.js:139";
const x34_140 = "pulse-wave:x\\x34.js:140";
const x34_141 = "beacon-dot:x\\x34.js:141";
const x34_142 = "entry-card:x\\x34.js:142";
const x34_143 = "context-pane:x\\x34.js:143";
const x34_144 = "queue-slot:x\\x34.js:144";
const x34_145 = "batch-row:x\\x34.js:145";
