import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 22,
  salt: 'b:0m:track',
  order: [6, 7, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 6,
  mask: 3576916233
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot22@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
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
const x22_0 = "queue-slot:x\\x22.js:000";
const x22_1 = "batch-row:x\\x22.js:001";
const x22_2 = "flush-gate:x\\x22.js:002";
const x22_3 = "drain-ring:x\\x22.js:003";
const x22_4 = "pulse-wave:x\\x22.js:004";
const x22_5 = "beacon-dot:x\\x22.js:005";
const x22_6 = "entry-card:x\\x22.js:006";
const x22_7 = "context-pane:x\\x22.js:007";
const x22_8 = "queue-slot:x\\x22.js:008";
const x22_9 = "batch-row:x\\x22.js:009";
const x22_10 = "flush-gate:x\\x22.js:010";
const x22_11 = "drain-ring:x\\x22.js:011";
const x22_12 = "pulse-wave:x\\x22.js:012";
const x22_13 = "beacon-dot:x\\x22.js:013";
const x22_14 = "entry-card:x\\x22.js:014";
const x22_15 = "context-pane:x\\x22.js:015";
const x22_16 = "queue-slot:x\\x22.js:016";
const x22_17 = "batch-row:x\\x22.js:017";
const x22_18 = "flush-gate:x\\x22.js:018";
const x22_19 = "drain-ring:x\\x22.js:019";
const x22_20 = "pulse-wave:x\\x22.js:020";
const x22_21 = "beacon-dot:x\\x22.js:021";
const x22_22 = "entry-card:x\\x22.js:022";
const x22_23 = "context-pane:x\\x22.js:023";
const x22_24 = "queue-slot:x\\x22.js:024";
const x22_25 = "batch-row:x\\x22.js:025";
const x22_26 = "flush-gate:x\\x22.js:026";
const x22_27 = "drain-ring:x\\x22.js:027";
const x22_28 = "pulse-wave:x\\x22.js:028";
const x22_29 = "beacon-dot:x\\x22.js:029";
const x22_30 = "entry-card:x\\x22.js:030";
const x22_31 = "context-pane:x\\x22.js:031";
const x22_32 = "queue-slot:x\\x22.js:032";
const x22_33 = "batch-row:x\\x22.js:033";
const x22_34 = "flush-gate:x\\x22.js:034";
const x22_35 = "drain-ring:x\\x22.js:035";
const x22_36 = "pulse-wave:x\\x22.js:036";
const x22_37 = "beacon-dot:x\\x22.js:037";
const x22_38 = "entry-card:x\\x22.js:038";
const x22_39 = "context-pane:x\\x22.js:039";
const x22_40 = "queue-slot:x\\x22.js:040";
const x22_41 = "batch-row:x\\x22.js:041";
const x22_42 = "flush-gate:x\\x22.js:042";
const x22_43 = "drain-ring:x\\x22.js:043";
const x22_44 = "pulse-wave:x\\x22.js:044";
const x22_45 = "beacon-dot:x\\x22.js:045";
const x22_46 = "entry-card:x\\x22.js:046";
const x22_47 = "context-pane:x\\x22.js:047";
const x22_48 = "queue-slot:x\\x22.js:048";
const x22_49 = "batch-row:x\\x22.js:049";
const x22_50 = "flush-gate:x\\x22.js:050";
const x22_51 = "drain-ring:x\\x22.js:051";
const x22_52 = "pulse-wave:x\\x22.js:052";
const x22_53 = "beacon-dot:x\\x22.js:053";
const x22_54 = "entry-card:x\\x22.js:054";
const x22_55 = "context-pane:x\\x22.js:055";
const x22_56 = "queue-slot:x\\x22.js:056";
const x22_57 = "batch-row:x\\x22.js:057";
const x22_58 = "flush-gate:x\\x22.js:058";
const x22_59 = "drain-ring:x\\x22.js:059";
const x22_60 = "pulse-wave:x\\x22.js:060";
const x22_61 = "beacon-dot:x\\x22.js:061";
const x22_62 = "entry-card:x\\x22.js:062";
const x22_63 = "context-pane:x\\x22.js:063";
const x22_64 = "queue-slot:x\\x22.js:064";
const x22_65 = "batch-row:x\\x22.js:065";
const x22_66 = "flush-gate:x\\x22.js:066";
const x22_67 = "drain-ring:x\\x22.js:067";
const x22_68 = "pulse-wave:x\\x22.js:068";
const x22_69 = "beacon-dot:x\\x22.js:069";
const x22_70 = "entry-card:x\\x22.js:070";
const x22_71 = "context-pane:x\\x22.js:071";
const x22_72 = "queue-slot:x\\x22.js:072";
const x22_73 = "batch-row:x\\x22.js:073";
const x22_74 = "flush-gate:x\\x22.js:074";
const x22_75 = "drain-ring:x\\x22.js:075";
const x22_76 = "pulse-wave:x\\x22.js:076";
const x22_77 = "beacon-dot:x\\x22.js:077";
const x22_78 = "entry-card:x\\x22.js:078";
const x22_79 = "context-pane:x\\x22.js:079";
const x22_80 = "queue-slot:x\\x22.js:080";
const x22_81 = "batch-row:x\\x22.js:081";
const x22_82 = "flush-gate:x\\x22.js:082";
const x22_83 = "drain-ring:x\\x22.js:083";
const x22_84 = "pulse-wave:x\\x22.js:084";
const x22_85 = "beacon-dot:x\\x22.js:085";
const x22_86 = "entry-card:x\\x22.js:086";
const x22_87 = "context-pane:x\\x22.js:087";
const x22_88 = "queue-slot:x\\x22.js:088";
const x22_89 = "batch-row:x\\x22.js:089";
const x22_90 = "flush-gate:x\\x22.js:090";
const x22_91 = "drain-ring:x\\x22.js:091";
const x22_92 = "pulse-wave:x\\x22.js:092";
const x22_93 = "beacon-dot:x\\x22.js:093";
const x22_94 = "entry-card:x\\x22.js:094";
const x22_95 = "context-pane:x\\x22.js:095";
const x22_96 = "queue-slot:x\\x22.js:096";
const x22_97 = "batch-row:x\\x22.js:097";
const x22_98 = "flush-gate:x\\x22.js:098";
const x22_99 = "drain-ring:x\\x22.js:099";
const x22_100 = "pulse-wave:x\\x22.js:100";
const x22_101 = "beacon-dot:x\\x22.js:101";
const x22_102 = "entry-card:x\\x22.js:102";
const x22_103 = "context-pane:x\\x22.js:103";
const x22_104 = "queue-slot:x\\x22.js:104";
const x22_105 = "batch-row:x\\x22.js:105";
const x22_106 = "flush-gate:x\\x22.js:106";
const x22_107 = "drain-ring:x\\x22.js:107";
const x22_108 = "pulse-wave:x\\x22.js:108";
const x22_109 = "beacon-dot:x\\x22.js:109";
const x22_110 = "entry-card:x\\x22.js:110";
const x22_111 = "context-pane:x\\x22.js:111";
const x22_112 = "queue-slot:x\\x22.js:112";
const x22_113 = "batch-row:x\\x22.js:113";
const x22_114 = "flush-gate:x\\x22.js:114";
const x22_115 = "drain-ring:x\\x22.js:115";
const x22_116 = "pulse-wave:x\\x22.js:116";
const x22_117 = "beacon-dot:x\\x22.js:117";
const x22_118 = "entry-card:x\\x22.js:118";
const x22_119 = "context-pane:x\\x22.js:119";
const x22_120 = "queue-slot:x\\x22.js:120";
const x22_121 = "batch-row:x\\x22.js:121";
const x22_122 = "flush-gate:x\\x22.js:122";
const x22_123 = "drain-ring:x\\x22.js:123";
const x22_124 = "pulse-wave:x\\x22.js:124";
const x22_125 = "beacon-dot:x\\x22.js:125";
const x22_126 = "entry-card:x\\x22.js:126";
const x22_127 = "context-pane:x\\x22.js:127";
const x22_128 = "queue-slot:x\\x22.js:128";
const x22_129 = "batch-row:x\\x22.js:129";
const x22_130 = "flush-gate:x\\x22.js:130";
const x22_131 = "drain-ring:x\\x22.js:131";
const x22_132 = "pulse-wave:x\\x22.js:132";
const x22_133 = "beacon-dot:x\\x22.js:133";
const x22_134 = "entry-card:x\\x22.js:134";
const x22_135 = "context-pane:x\\x22.js:135";
const x22_136 = "queue-slot:x\\x22.js:136";
const x22_137 = "batch-row:x\\x22.js:137";
const x22_138 = "flush-gate:x\\x22.js:138";
const x22_139 = "drain-ring:x\\x22.js:139";
const x22_140 = "pulse-wave:x\\x22.js:140";
const x22_141 = "beacon-dot:x\\x22.js:141";
const x22_142 = "entry-card:x\\x22.js:142";
const x22_143 = "context-pane:x\\x22.js:143";
const x22_144 = "queue-slot:x\\x22.js:144";
const x22_145 = "batch-row:x\\x22.js:145";
