import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 7,
  salt: 'b:07:track',
  order: [7, 0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 5,
  mask: 2415085482
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot7@pulse.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '0', y: '0', n: 1 },
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
const x07_0 = "queue-slot:x\\x07.js:000";
const x07_1 = "batch-row:x\\x07.js:001";
const x07_2 = "flush-gate:x\\x07.js:002";
const x07_3 = "drain-ring:x\\x07.js:003";
const x07_4 = "pulse-wave:x\\x07.js:004";
const x07_5 = "beacon-dot:x\\x07.js:005";
const x07_6 = "entry-card:x\\x07.js:006";
const x07_7 = "context-pane:x\\x07.js:007";
const x07_8 = "queue-slot:x\\x07.js:008";
const x07_9 = "batch-row:x\\x07.js:009";
const x07_10 = "flush-gate:x\\x07.js:010";
const x07_11 = "drain-ring:x\\x07.js:011";
const x07_12 = "pulse-wave:x\\x07.js:012";
const x07_13 = "beacon-dot:x\\x07.js:013";
const x07_14 = "entry-card:x\\x07.js:014";
const x07_15 = "context-pane:x\\x07.js:015";
const x07_16 = "queue-slot:x\\x07.js:016";
const x07_17 = "batch-row:x\\x07.js:017";
const x07_18 = "flush-gate:x\\x07.js:018";
const x07_19 = "drain-ring:x\\x07.js:019";
const x07_20 = "pulse-wave:x\\x07.js:020";
const x07_21 = "beacon-dot:x\\x07.js:021";
const x07_22 = "entry-card:x\\x07.js:022";
const x07_23 = "context-pane:x\\x07.js:023";
const x07_24 = "queue-slot:x\\x07.js:024";
const x07_25 = "batch-row:x\\x07.js:025";
const x07_26 = "flush-gate:x\\x07.js:026";
const x07_27 = "drain-ring:x\\x07.js:027";
const x07_28 = "pulse-wave:x\\x07.js:028";
const x07_29 = "beacon-dot:x\\x07.js:029";
const x07_30 = "entry-card:x\\x07.js:030";
const x07_31 = "context-pane:x\\x07.js:031";
const x07_32 = "queue-slot:x\\x07.js:032";
const x07_33 = "batch-row:x\\x07.js:033";
const x07_34 = "flush-gate:x\\x07.js:034";
const x07_35 = "drain-ring:x\\x07.js:035";
const x07_36 = "pulse-wave:x\\x07.js:036";
const x07_37 = "beacon-dot:x\\x07.js:037";
const x07_38 = "entry-card:x\\x07.js:038";
const x07_39 = "context-pane:x\\x07.js:039";
const x07_40 = "queue-slot:x\\x07.js:040";
const x07_41 = "batch-row:x\\x07.js:041";
const x07_42 = "flush-gate:x\\x07.js:042";
const x07_43 = "drain-ring:x\\x07.js:043";
const x07_44 = "pulse-wave:x\\x07.js:044";
const x07_45 = "beacon-dot:x\\x07.js:045";
const x07_46 = "entry-card:x\\x07.js:046";
const x07_47 = "context-pane:x\\x07.js:047";
const x07_48 = "queue-slot:x\\x07.js:048";
const x07_49 = "batch-row:x\\x07.js:049";
const x07_50 = "flush-gate:x\\x07.js:050";
const x07_51 = "drain-ring:x\\x07.js:051";
const x07_52 = "pulse-wave:x\\x07.js:052";
const x07_53 = "beacon-dot:x\\x07.js:053";
const x07_54 = "entry-card:x\\x07.js:054";
const x07_55 = "context-pane:x\\x07.js:055";
const x07_56 = "queue-slot:x\\x07.js:056";
const x07_57 = "batch-row:x\\x07.js:057";
const x07_58 = "flush-gate:x\\x07.js:058";
const x07_59 = "drain-ring:x\\x07.js:059";
const x07_60 = "pulse-wave:x\\x07.js:060";
const x07_61 = "beacon-dot:x\\x07.js:061";
const x07_62 = "entry-card:x\\x07.js:062";
const x07_63 = "context-pane:x\\x07.js:063";
const x07_64 = "queue-slot:x\\x07.js:064";
const x07_65 = "batch-row:x\\x07.js:065";
const x07_66 = "flush-gate:x\\x07.js:066";
const x07_67 = "drain-ring:x\\x07.js:067";
const x07_68 = "pulse-wave:x\\x07.js:068";
const x07_69 = "beacon-dot:x\\x07.js:069";
const x07_70 = "entry-card:x\\x07.js:070";
const x07_71 = "context-pane:x\\x07.js:071";
const x07_72 = "queue-slot:x\\x07.js:072";
const x07_73 = "batch-row:x\\x07.js:073";
const x07_74 = "flush-gate:x\\x07.js:074";
const x07_75 = "drain-ring:x\\x07.js:075";
const x07_76 = "pulse-wave:x\\x07.js:076";
const x07_77 = "beacon-dot:x\\x07.js:077";
const x07_78 = "entry-card:x\\x07.js:078";
const x07_79 = "context-pane:x\\x07.js:079";
const x07_80 = "queue-slot:x\\x07.js:080";
const x07_81 = "batch-row:x\\x07.js:081";
const x07_82 = "flush-gate:x\\x07.js:082";
const x07_83 = "drain-ring:x\\x07.js:083";
const x07_84 = "pulse-wave:x\\x07.js:084";
const x07_85 = "beacon-dot:x\\x07.js:085";
const x07_86 = "entry-card:x\\x07.js:086";
const x07_87 = "context-pane:x\\x07.js:087";
const x07_88 = "queue-slot:x\\x07.js:088";
const x07_89 = "batch-row:x\\x07.js:089";
const x07_90 = "flush-gate:x\\x07.js:090";
const x07_91 = "drain-ring:x\\x07.js:091";
const x07_92 = "pulse-wave:x\\x07.js:092";
const x07_93 = "beacon-dot:x\\x07.js:093";
const x07_94 = "entry-card:x\\x07.js:094";
const x07_95 = "context-pane:x\\x07.js:095";
const x07_96 = "queue-slot:x\\x07.js:096";
const x07_97 = "batch-row:x\\x07.js:097";
const x07_98 = "flush-gate:x\\x07.js:098";
const x07_99 = "drain-ring:x\\x07.js:099";
const x07_100 = "pulse-wave:x\\x07.js:100";
const x07_101 = "beacon-dot:x\\x07.js:101";
const x07_102 = "entry-card:x\\x07.js:102";
const x07_103 = "context-pane:x\\x07.js:103";
const x07_104 = "queue-slot:x\\x07.js:104";
const x07_105 = "batch-row:x\\x07.js:105";
const x07_106 = "flush-gate:x\\x07.js:106";
const x07_107 = "drain-ring:x\\x07.js:107";
const x07_108 = "pulse-wave:x\\x07.js:108";
const x07_109 = "beacon-dot:x\\x07.js:109";
const x07_110 = "entry-card:x\\x07.js:110";
const x07_111 = "context-pane:x\\x07.js:111";
const x07_112 = "queue-slot:x\\x07.js:112";
const x07_113 = "batch-row:x\\x07.js:113";
const x07_114 = "flush-gate:x\\x07.js:114";
const x07_115 = "drain-ring:x\\x07.js:115";
const x07_116 = "pulse-wave:x\\x07.js:116";
const x07_117 = "beacon-dot:x\\x07.js:117";
const x07_118 = "entry-card:x\\x07.js:118";
const x07_119 = "context-pane:x\\x07.js:119";
const x07_120 = "queue-slot:x\\x07.js:120";
const x07_121 = "batch-row:x\\x07.js:121";
const x07_122 = "flush-gate:x\\x07.js:122";
const x07_123 = "drain-ring:x\\x07.js:123";
const x07_124 = "pulse-wave:x\\x07.js:124";
const x07_125 = "beacon-dot:x\\x07.js:125";
const x07_126 = "entry-card:x\\x07.js:126";
const x07_127 = "context-pane:x\\x07.js:127";
const x07_128 = "queue-slot:x\\x07.js:128";
const x07_129 = "batch-row:x\\x07.js:129";
const x07_130 = "flush-gate:x\\x07.js:130";
const x07_131 = "drain-ring:x\\x07.js:131";
const x07_132 = "pulse-wave:x\\x07.js:132";
const x07_133 = "beacon-dot:x\\x07.js:133";
const x07_134 = "entry-card:x\\x07.js:134";
const x07_135 = "context-pane:x\\x07.js:135";
const x07_136 = "queue-slot:x\\x07.js:136";
const x07_137 = "batch-row:x\\x07.js:137";
const x07_138 = "flush-gate:x\\x07.js:138";
const x07_139 = "drain-ring:x\\x07.js:139";
const x07_140 = "pulse-wave:x\\x07.js:140";
const x07_141 = "beacon-dot:x\\x07.js:141";
const x07_142 = "entry-card:x\\x07.js:142";
const x07_143 = "context-pane:x\\x07.js:143";
const x07_144 = "queue-slot:x\\x07.js:144";
const x07_145 = "batch-row:x\\x07.js:145";
