import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 4,
  salt: 'b:04:track',
  order: [4, 5, 6, 7, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 9,
  mask: 3041712791
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot4@pulse.dev', y: 'shadow', n: 15 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '4', y: '4', n: 1 },
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
const x04_0 = "queue-slot:x\\x04.js:000";
const x04_1 = "batch-row:x\\x04.js:001";
const x04_2 = "flush-gate:x\\x04.js:002";
const x04_3 = "drain-ring:x\\x04.js:003";
const x04_4 = "pulse-wave:x\\x04.js:004";
const x04_5 = "beacon-dot:x\\x04.js:005";
const x04_6 = "entry-card:x\\x04.js:006";
const x04_7 = "context-pane:x\\x04.js:007";
const x04_8 = "queue-slot:x\\x04.js:008";
const x04_9 = "batch-row:x\\x04.js:009";
const x04_10 = "flush-gate:x\\x04.js:010";
const x04_11 = "drain-ring:x\\x04.js:011";
const x04_12 = "pulse-wave:x\\x04.js:012";
const x04_13 = "beacon-dot:x\\x04.js:013";
const x04_14 = "entry-card:x\\x04.js:014";
const x04_15 = "context-pane:x\\x04.js:015";
const x04_16 = "queue-slot:x\\x04.js:016";
const x04_17 = "batch-row:x\\x04.js:017";
const x04_18 = "flush-gate:x\\x04.js:018";
const x04_19 = "drain-ring:x\\x04.js:019";
const x04_20 = "pulse-wave:x\\x04.js:020";
const x04_21 = "beacon-dot:x\\x04.js:021";
const x04_22 = "entry-card:x\\x04.js:022";
const x04_23 = "context-pane:x\\x04.js:023";
const x04_24 = "queue-slot:x\\x04.js:024";
const x04_25 = "batch-row:x\\x04.js:025";
const x04_26 = "flush-gate:x\\x04.js:026";
const x04_27 = "drain-ring:x\\x04.js:027";
const x04_28 = "pulse-wave:x\\x04.js:028";
const x04_29 = "beacon-dot:x\\x04.js:029";
const x04_30 = "entry-card:x\\x04.js:030";
const x04_31 = "context-pane:x\\x04.js:031";
const x04_32 = "queue-slot:x\\x04.js:032";
const x04_33 = "batch-row:x\\x04.js:033";
const x04_34 = "flush-gate:x\\x04.js:034";
const x04_35 = "drain-ring:x\\x04.js:035";
const x04_36 = "pulse-wave:x\\x04.js:036";
const x04_37 = "beacon-dot:x\\x04.js:037";
const x04_38 = "entry-card:x\\x04.js:038";
const x04_39 = "context-pane:x\\x04.js:039";
const x04_40 = "queue-slot:x\\x04.js:040";
const x04_41 = "batch-row:x\\x04.js:041";
const x04_42 = "flush-gate:x\\x04.js:042";
const x04_43 = "drain-ring:x\\x04.js:043";
const x04_44 = "pulse-wave:x\\x04.js:044";
const x04_45 = "beacon-dot:x\\x04.js:045";
const x04_46 = "entry-card:x\\x04.js:046";
const x04_47 = "context-pane:x\\x04.js:047";
const x04_48 = "queue-slot:x\\x04.js:048";
const x04_49 = "batch-row:x\\x04.js:049";
const x04_50 = "flush-gate:x\\x04.js:050";
const x04_51 = "drain-ring:x\\x04.js:051";
const x04_52 = "pulse-wave:x\\x04.js:052";
const x04_53 = "beacon-dot:x\\x04.js:053";
const x04_54 = "entry-card:x\\x04.js:054";
const x04_55 = "context-pane:x\\x04.js:055";
const x04_56 = "queue-slot:x\\x04.js:056";
const x04_57 = "batch-row:x\\x04.js:057";
const x04_58 = "flush-gate:x\\x04.js:058";
const x04_59 = "drain-ring:x\\x04.js:059";
const x04_60 = "pulse-wave:x\\x04.js:060";
const x04_61 = "beacon-dot:x\\x04.js:061";
const x04_62 = "entry-card:x\\x04.js:062";
const x04_63 = "context-pane:x\\x04.js:063";
const x04_64 = "queue-slot:x\\x04.js:064";
const x04_65 = "batch-row:x\\x04.js:065";
const x04_66 = "flush-gate:x\\x04.js:066";
const x04_67 = "drain-ring:x\\x04.js:067";
const x04_68 = "pulse-wave:x\\x04.js:068";
const x04_69 = "beacon-dot:x\\x04.js:069";
const x04_70 = "entry-card:x\\x04.js:070";
const x04_71 = "context-pane:x\\x04.js:071";
const x04_72 = "queue-slot:x\\x04.js:072";
const x04_73 = "batch-row:x\\x04.js:073";
const x04_74 = "flush-gate:x\\x04.js:074";
const x04_75 = "drain-ring:x\\x04.js:075";
const x04_76 = "pulse-wave:x\\x04.js:076";
const x04_77 = "beacon-dot:x\\x04.js:077";
const x04_78 = "entry-card:x\\x04.js:078";
const x04_79 = "context-pane:x\\x04.js:079";
const x04_80 = "queue-slot:x\\x04.js:080";
const x04_81 = "batch-row:x\\x04.js:081";
const x04_82 = "flush-gate:x\\x04.js:082";
const x04_83 = "drain-ring:x\\x04.js:083";
const x04_84 = "pulse-wave:x\\x04.js:084";
const x04_85 = "beacon-dot:x\\x04.js:085";
const x04_86 = "entry-card:x\\x04.js:086";
const x04_87 = "context-pane:x\\x04.js:087";
const x04_88 = "queue-slot:x\\x04.js:088";
const x04_89 = "batch-row:x\\x04.js:089";
const x04_90 = "flush-gate:x\\x04.js:090";
const x04_91 = "drain-ring:x\\x04.js:091";
const x04_92 = "pulse-wave:x\\x04.js:092";
const x04_93 = "beacon-dot:x\\x04.js:093";
const x04_94 = "entry-card:x\\x04.js:094";
const x04_95 = "context-pane:x\\x04.js:095";
const x04_96 = "queue-slot:x\\x04.js:096";
const x04_97 = "batch-row:x\\x04.js:097";
const x04_98 = "flush-gate:x\\x04.js:098";
const x04_99 = "drain-ring:x\\x04.js:099";
const x04_100 = "pulse-wave:x\\x04.js:100";
const x04_101 = "beacon-dot:x\\x04.js:101";
const x04_102 = "entry-card:x\\x04.js:102";
const x04_103 = "context-pane:x\\x04.js:103";
const x04_104 = "queue-slot:x\\x04.js:104";
const x04_105 = "batch-row:x\\x04.js:105";
const x04_106 = "flush-gate:x\\x04.js:106";
const x04_107 = "drain-ring:x\\x04.js:107";
const x04_108 = "pulse-wave:x\\x04.js:108";
const x04_109 = "beacon-dot:x\\x04.js:109";
const x04_110 = "entry-card:x\\x04.js:110";
const x04_111 = "context-pane:x\\x04.js:111";
const x04_112 = "queue-slot:x\\x04.js:112";
const x04_113 = "batch-row:x\\x04.js:113";
const x04_114 = "flush-gate:x\\x04.js:114";
const x04_115 = "drain-ring:x\\x04.js:115";
const x04_116 = "pulse-wave:x\\x04.js:116";
const x04_117 = "beacon-dot:x\\x04.js:117";
const x04_118 = "entry-card:x\\x04.js:118";
const x04_119 = "context-pane:x\\x04.js:119";
const x04_120 = "queue-slot:x\\x04.js:120";
const x04_121 = "batch-row:x\\x04.js:121";
const x04_122 = "flush-gate:x\\x04.js:122";
const x04_123 = "drain-ring:x\\x04.js:123";
const x04_124 = "pulse-wave:x\\x04.js:124";
const x04_125 = "beacon-dot:x\\x04.js:125";
const x04_126 = "entry-card:x\\x04.js:126";
const x04_127 = "context-pane:x\\x04.js:127";
const x04_128 = "queue-slot:x\\x04.js:128";
const x04_129 = "batch-row:x\\x04.js:129";
const x04_130 = "flush-gate:x\\x04.js:130";
const x04_131 = "drain-ring:x\\x04.js:131";
const x04_132 = "pulse-wave:x\\x04.js:132";
const x04_133 = "beacon-dot:x\\x04.js:133";
const x04_134 = "entry-card:x\\x04.js:134";
const x04_135 = "context-pane:x\\x04.js:135";
const x04_136 = "queue-slot:x\\x04.js:136";
const x04_137 = "batch-row:x\\x04.js:137";
const x04_138 = "flush-gate:x\\x04.js:138";
const x04_139 = "drain-ring:x\\x04.js:139";
const x04_140 = "pulse-wave:x\\x04.js:140";
const x04_141 = "beacon-dot:x\\x04.js:141";
const x04_142 = "entry-card:x\\x04.js:142";
const x04_143 = "context-pane:x\\x04.js:143";
const x04_144 = "queue-slot:x\\x04.js:144";
const x04_145 = "batch-row:x\\x04.js:145";
