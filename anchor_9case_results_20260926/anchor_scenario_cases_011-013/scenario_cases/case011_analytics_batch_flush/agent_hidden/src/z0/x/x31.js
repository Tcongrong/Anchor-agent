import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 31,
  salt: 'b:0v:track',
  order: [7, 0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 8,
  mask: 1697034306
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot31@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
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
const x31_0 = "queue-slot:x\\x31.js:000";
const x31_1 = "batch-row:x\\x31.js:001";
const x31_2 = "flush-gate:x\\x31.js:002";
const x31_3 = "drain-ring:x\\x31.js:003";
const x31_4 = "pulse-wave:x\\x31.js:004";
const x31_5 = "beacon-dot:x\\x31.js:005";
const x31_6 = "entry-card:x\\x31.js:006";
const x31_7 = "context-pane:x\\x31.js:007";
const x31_8 = "queue-slot:x\\x31.js:008";
const x31_9 = "batch-row:x\\x31.js:009";
const x31_10 = "flush-gate:x\\x31.js:010";
const x31_11 = "drain-ring:x\\x31.js:011";
const x31_12 = "pulse-wave:x\\x31.js:012";
const x31_13 = "beacon-dot:x\\x31.js:013";
const x31_14 = "entry-card:x\\x31.js:014";
const x31_15 = "context-pane:x\\x31.js:015";
const x31_16 = "queue-slot:x\\x31.js:016";
const x31_17 = "batch-row:x\\x31.js:017";
const x31_18 = "flush-gate:x\\x31.js:018";
const x31_19 = "drain-ring:x\\x31.js:019";
const x31_20 = "pulse-wave:x\\x31.js:020";
const x31_21 = "beacon-dot:x\\x31.js:021";
const x31_22 = "entry-card:x\\x31.js:022";
const x31_23 = "context-pane:x\\x31.js:023";
const x31_24 = "queue-slot:x\\x31.js:024";
const x31_25 = "batch-row:x\\x31.js:025";
const x31_26 = "flush-gate:x\\x31.js:026";
const x31_27 = "drain-ring:x\\x31.js:027";
const x31_28 = "pulse-wave:x\\x31.js:028";
const x31_29 = "beacon-dot:x\\x31.js:029";
const x31_30 = "entry-card:x\\x31.js:030";
const x31_31 = "context-pane:x\\x31.js:031";
const x31_32 = "queue-slot:x\\x31.js:032";
const x31_33 = "batch-row:x\\x31.js:033";
const x31_34 = "flush-gate:x\\x31.js:034";
const x31_35 = "drain-ring:x\\x31.js:035";
const x31_36 = "pulse-wave:x\\x31.js:036";
const x31_37 = "beacon-dot:x\\x31.js:037";
const x31_38 = "entry-card:x\\x31.js:038";
const x31_39 = "context-pane:x\\x31.js:039";
const x31_40 = "queue-slot:x\\x31.js:040";
const x31_41 = "batch-row:x\\x31.js:041";
const x31_42 = "flush-gate:x\\x31.js:042";
const x31_43 = "drain-ring:x\\x31.js:043";
const x31_44 = "pulse-wave:x\\x31.js:044";
const x31_45 = "beacon-dot:x\\x31.js:045";
const x31_46 = "entry-card:x\\x31.js:046";
const x31_47 = "context-pane:x\\x31.js:047";
const x31_48 = "queue-slot:x\\x31.js:048";
const x31_49 = "batch-row:x\\x31.js:049";
const x31_50 = "flush-gate:x\\x31.js:050";
const x31_51 = "drain-ring:x\\x31.js:051";
const x31_52 = "pulse-wave:x\\x31.js:052";
const x31_53 = "beacon-dot:x\\x31.js:053";
const x31_54 = "entry-card:x\\x31.js:054";
const x31_55 = "context-pane:x\\x31.js:055";
const x31_56 = "queue-slot:x\\x31.js:056";
const x31_57 = "batch-row:x\\x31.js:057";
const x31_58 = "flush-gate:x\\x31.js:058";
const x31_59 = "drain-ring:x\\x31.js:059";
const x31_60 = "pulse-wave:x\\x31.js:060";
const x31_61 = "beacon-dot:x\\x31.js:061";
const x31_62 = "entry-card:x\\x31.js:062";
const x31_63 = "context-pane:x\\x31.js:063";
const x31_64 = "queue-slot:x\\x31.js:064";
const x31_65 = "batch-row:x\\x31.js:065";
const x31_66 = "flush-gate:x\\x31.js:066";
const x31_67 = "drain-ring:x\\x31.js:067";
const x31_68 = "pulse-wave:x\\x31.js:068";
const x31_69 = "beacon-dot:x\\x31.js:069";
const x31_70 = "entry-card:x\\x31.js:070";
const x31_71 = "context-pane:x\\x31.js:071";
const x31_72 = "queue-slot:x\\x31.js:072";
const x31_73 = "batch-row:x\\x31.js:073";
const x31_74 = "flush-gate:x\\x31.js:074";
const x31_75 = "drain-ring:x\\x31.js:075";
const x31_76 = "pulse-wave:x\\x31.js:076";
const x31_77 = "beacon-dot:x\\x31.js:077";
const x31_78 = "entry-card:x\\x31.js:078";
const x31_79 = "context-pane:x\\x31.js:079";
const x31_80 = "queue-slot:x\\x31.js:080";
const x31_81 = "batch-row:x\\x31.js:081";
const x31_82 = "flush-gate:x\\x31.js:082";
const x31_83 = "drain-ring:x\\x31.js:083";
const x31_84 = "pulse-wave:x\\x31.js:084";
const x31_85 = "beacon-dot:x\\x31.js:085";
const x31_86 = "entry-card:x\\x31.js:086";
const x31_87 = "context-pane:x\\x31.js:087";
const x31_88 = "queue-slot:x\\x31.js:088";
const x31_89 = "batch-row:x\\x31.js:089";
const x31_90 = "flush-gate:x\\x31.js:090";
const x31_91 = "drain-ring:x\\x31.js:091";
const x31_92 = "pulse-wave:x\\x31.js:092";
const x31_93 = "beacon-dot:x\\x31.js:093";
const x31_94 = "entry-card:x\\x31.js:094";
const x31_95 = "context-pane:x\\x31.js:095";
const x31_96 = "queue-slot:x\\x31.js:096";
const x31_97 = "batch-row:x\\x31.js:097";
const x31_98 = "flush-gate:x\\x31.js:098";
const x31_99 = "drain-ring:x\\x31.js:099";
const x31_100 = "pulse-wave:x\\x31.js:100";
const x31_101 = "beacon-dot:x\\x31.js:101";
const x31_102 = "entry-card:x\\x31.js:102";
const x31_103 = "context-pane:x\\x31.js:103";
const x31_104 = "queue-slot:x\\x31.js:104";
const x31_105 = "batch-row:x\\x31.js:105";
const x31_106 = "flush-gate:x\\x31.js:106";
const x31_107 = "drain-ring:x\\x31.js:107";
const x31_108 = "pulse-wave:x\\x31.js:108";
const x31_109 = "beacon-dot:x\\x31.js:109";
const x31_110 = "entry-card:x\\x31.js:110";
const x31_111 = "context-pane:x\\x31.js:111";
const x31_112 = "queue-slot:x\\x31.js:112";
const x31_113 = "batch-row:x\\x31.js:113";
const x31_114 = "flush-gate:x\\x31.js:114";
const x31_115 = "drain-ring:x\\x31.js:115";
const x31_116 = "pulse-wave:x\\x31.js:116";
const x31_117 = "beacon-dot:x\\x31.js:117";
const x31_118 = "entry-card:x\\x31.js:118";
const x31_119 = "context-pane:x\\x31.js:119";
const x31_120 = "queue-slot:x\\x31.js:120";
const x31_121 = "batch-row:x\\x31.js:121";
const x31_122 = "flush-gate:x\\x31.js:122";
const x31_123 = "drain-ring:x\\x31.js:123";
const x31_124 = "pulse-wave:x\\x31.js:124";
const x31_125 = "beacon-dot:x\\x31.js:125";
const x31_126 = "entry-card:x\\x31.js:126";
const x31_127 = "context-pane:x\\x31.js:127";
const x31_128 = "queue-slot:x\\x31.js:128";
const x31_129 = "batch-row:x\\x31.js:129";
const x31_130 = "flush-gate:x\\x31.js:130";
const x31_131 = "drain-ring:x\\x31.js:131";
const x31_132 = "pulse-wave:x\\x31.js:132";
const x31_133 = "beacon-dot:x\\x31.js:133";
const x31_134 = "entry-card:x\\x31.js:134";
const x31_135 = "context-pane:x\\x31.js:135";
const x31_136 = "queue-slot:x\\x31.js:136";
const x31_137 = "batch-row:x\\x31.js:137";
const x31_138 = "flush-gate:x\\x31.js:138";
const x31_139 = "drain-ring:x\\x31.js:139";
const x31_140 = "pulse-wave:x\\x31.js:140";
const x31_141 = "beacon-dot:x\\x31.js:141";
const x31_142 = "entry-card:x\\x31.js:142";
const x31_143 = "context-pane:x\\x31.js:143";
const x31_144 = "queue-slot:x\\x31.js:144";
const x31_145 = "batch-row:x\\x31.js:145";
