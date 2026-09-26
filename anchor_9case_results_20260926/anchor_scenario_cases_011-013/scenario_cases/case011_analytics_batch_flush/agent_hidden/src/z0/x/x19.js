import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 19,
  salt: 'b:0j:track',
  order: [3, 4, 5, 6, 7, 0, 1, 2],
  sep: '\u2063',
  shift: 10,
  mask: 4203543542
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot19@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
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
const x19_0 = "queue-slot:x\\x19.js:000";
const x19_1 = "batch-row:x\\x19.js:001";
const x19_2 = "flush-gate:x\\x19.js:002";
const x19_3 = "drain-ring:x\\x19.js:003";
const x19_4 = "pulse-wave:x\\x19.js:004";
const x19_5 = "beacon-dot:x\\x19.js:005";
const x19_6 = "entry-card:x\\x19.js:006";
const x19_7 = "context-pane:x\\x19.js:007";
const x19_8 = "queue-slot:x\\x19.js:008";
const x19_9 = "batch-row:x\\x19.js:009";
const x19_10 = "flush-gate:x\\x19.js:010";
const x19_11 = "drain-ring:x\\x19.js:011";
const x19_12 = "pulse-wave:x\\x19.js:012";
const x19_13 = "beacon-dot:x\\x19.js:013";
const x19_14 = "entry-card:x\\x19.js:014";
const x19_15 = "context-pane:x\\x19.js:015";
const x19_16 = "queue-slot:x\\x19.js:016";
const x19_17 = "batch-row:x\\x19.js:017";
const x19_18 = "flush-gate:x\\x19.js:018";
const x19_19 = "drain-ring:x\\x19.js:019";
const x19_20 = "pulse-wave:x\\x19.js:020";
const x19_21 = "beacon-dot:x\\x19.js:021";
const x19_22 = "entry-card:x\\x19.js:022";
const x19_23 = "context-pane:x\\x19.js:023";
const x19_24 = "queue-slot:x\\x19.js:024";
const x19_25 = "batch-row:x\\x19.js:025";
const x19_26 = "flush-gate:x\\x19.js:026";
const x19_27 = "drain-ring:x\\x19.js:027";
const x19_28 = "pulse-wave:x\\x19.js:028";
const x19_29 = "beacon-dot:x\\x19.js:029";
const x19_30 = "entry-card:x\\x19.js:030";
const x19_31 = "context-pane:x\\x19.js:031";
const x19_32 = "queue-slot:x\\x19.js:032";
const x19_33 = "batch-row:x\\x19.js:033";
const x19_34 = "flush-gate:x\\x19.js:034";
const x19_35 = "drain-ring:x\\x19.js:035";
const x19_36 = "pulse-wave:x\\x19.js:036";
const x19_37 = "beacon-dot:x\\x19.js:037";
const x19_38 = "entry-card:x\\x19.js:038";
const x19_39 = "context-pane:x\\x19.js:039";
const x19_40 = "queue-slot:x\\x19.js:040";
const x19_41 = "batch-row:x\\x19.js:041";
const x19_42 = "flush-gate:x\\x19.js:042";
const x19_43 = "drain-ring:x\\x19.js:043";
const x19_44 = "pulse-wave:x\\x19.js:044";
const x19_45 = "beacon-dot:x\\x19.js:045";
const x19_46 = "entry-card:x\\x19.js:046";
const x19_47 = "context-pane:x\\x19.js:047";
const x19_48 = "queue-slot:x\\x19.js:048";
const x19_49 = "batch-row:x\\x19.js:049";
const x19_50 = "flush-gate:x\\x19.js:050";
const x19_51 = "drain-ring:x\\x19.js:051";
const x19_52 = "pulse-wave:x\\x19.js:052";
const x19_53 = "beacon-dot:x\\x19.js:053";
const x19_54 = "entry-card:x\\x19.js:054";
const x19_55 = "context-pane:x\\x19.js:055";
const x19_56 = "queue-slot:x\\x19.js:056";
const x19_57 = "batch-row:x\\x19.js:057";
const x19_58 = "flush-gate:x\\x19.js:058";
const x19_59 = "drain-ring:x\\x19.js:059";
const x19_60 = "pulse-wave:x\\x19.js:060";
const x19_61 = "beacon-dot:x\\x19.js:061";
const x19_62 = "entry-card:x\\x19.js:062";
const x19_63 = "context-pane:x\\x19.js:063";
const x19_64 = "queue-slot:x\\x19.js:064";
const x19_65 = "batch-row:x\\x19.js:065";
const x19_66 = "flush-gate:x\\x19.js:066";
const x19_67 = "drain-ring:x\\x19.js:067";
const x19_68 = "pulse-wave:x\\x19.js:068";
const x19_69 = "beacon-dot:x\\x19.js:069";
const x19_70 = "entry-card:x\\x19.js:070";
const x19_71 = "context-pane:x\\x19.js:071";
const x19_72 = "queue-slot:x\\x19.js:072";
const x19_73 = "batch-row:x\\x19.js:073";
const x19_74 = "flush-gate:x\\x19.js:074";
const x19_75 = "drain-ring:x\\x19.js:075";
const x19_76 = "pulse-wave:x\\x19.js:076";
const x19_77 = "beacon-dot:x\\x19.js:077";
const x19_78 = "entry-card:x\\x19.js:078";
const x19_79 = "context-pane:x\\x19.js:079";
const x19_80 = "queue-slot:x\\x19.js:080";
const x19_81 = "batch-row:x\\x19.js:081";
const x19_82 = "flush-gate:x\\x19.js:082";
const x19_83 = "drain-ring:x\\x19.js:083";
const x19_84 = "pulse-wave:x\\x19.js:084";
const x19_85 = "beacon-dot:x\\x19.js:085";
const x19_86 = "entry-card:x\\x19.js:086";
const x19_87 = "context-pane:x\\x19.js:087";
const x19_88 = "queue-slot:x\\x19.js:088";
const x19_89 = "batch-row:x\\x19.js:089";
const x19_90 = "flush-gate:x\\x19.js:090";
const x19_91 = "drain-ring:x\\x19.js:091";
const x19_92 = "pulse-wave:x\\x19.js:092";
const x19_93 = "beacon-dot:x\\x19.js:093";
const x19_94 = "entry-card:x\\x19.js:094";
const x19_95 = "context-pane:x\\x19.js:095";
const x19_96 = "queue-slot:x\\x19.js:096";
const x19_97 = "batch-row:x\\x19.js:097";
const x19_98 = "flush-gate:x\\x19.js:098";
const x19_99 = "drain-ring:x\\x19.js:099";
const x19_100 = "pulse-wave:x\\x19.js:100";
const x19_101 = "beacon-dot:x\\x19.js:101";
const x19_102 = "entry-card:x\\x19.js:102";
const x19_103 = "context-pane:x\\x19.js:103";
const x19_104 = "queue-slot:x\\x19.js:104";
const x19_105 = "batch-row:x\\x19.js:105";
const x19_106 = "flush-gate:x\\x19.js:106";
const x19_107 = "drain-ring:x\\x19.js:107";
const x19_108 = "pulse-wave:x\\x19.js:108";
const x19_109 = "beacon-dot:x\\x19.js:109";
const x19_110 = "entry-card:x\\x19.js:110";
const x19_111 = "context-pane:x\\x19.js:111";
const x19_112 = "queue-slot:x\\x19.js:112";
const x19_113 = "batch-row:x\\x19.js:113";
const x19_114 = "flush-gate:x\\x19.js:114";
const x19_115 = "drain-ring:x\\x19.js:115";
const x19_116 = "pulse-wave:x\\x19.js:116";
const x19_117 = "beacon-dot:x\\x19.js:117";
const x19_118 = "entry-card:x\\x19.js:118";
const x19_119 = "context-pane:x\\x19.js:119";
const x19_120 = "queue-slot:x\\x19.js:120";
const x19_121 = "batch-row:x\\x19.js:121";
const x19_122 = "flush-gate:x\\x19.js:122";
const x19_123 = "drain-ring:x\\x19.js:123";
const x19_124 = "pulse-wave:x\\x19.js:124";
const x19_125 = "beacon-dot:x\\x19.js:125";
const x19_126 = "entry-card:x\\x19.js:126";
const x19_127 = "context-pane:x\\x19.js:127";
const x19_128 = "queue-slot:x\\x19.js:128";
const x19_129 = "batch-row:x\\x19.js:129";
const x19_130 = "flush-gate:x\\x19.js:130";
const x19_131 = "drain-ring:x\\x19.js:131";
const x19_132 = "pulse-wave:x\\x19.js:132";
const x19_133 = "beacon-dot:x\\x19.js:133";
const x19_134 = "entry-card:x\\x19.js:134";
const x19_135 = "context-pane:x\\x19.js:135";
const x19_136 = "queue-slot:x\\x19.js:136";
const x19_137 = "batch-row:x\\x19.js:137";
const x19_138 = "flush-gate:x\\x19.js:138";
const x19_139 = "drain-ring:x\\x19.js:139";
const x19_140 = "pulse-wave:x\\x19.js:140";
const x19_141 = "beacon-dot:x\\x19.js:141";
const x19_142 = "entry-card:x\\x19.js:142";
const x19_143 = "context-pane:x\\x19.js:143";
const x19_144 = "queue-slot:x\\x19.js:144";
const x19_145 = "batch-row:x\\x19.js:145";
