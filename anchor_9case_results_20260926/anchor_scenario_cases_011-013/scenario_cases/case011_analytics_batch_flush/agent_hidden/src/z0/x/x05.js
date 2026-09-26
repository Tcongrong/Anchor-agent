import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 5,
  salt: 'b:05:track',
  order: [5, 6, 7, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 10,
  mask: 1401181256
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain5@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
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
const x05_0 = "queue-slot:x\\x05.js:000";
const x05_1 = "batch-row:x\\x05.js:001";
const x05_2 = "flush-gate:x\\x05.js:002";
const x05_3 = "drain-ring:x\\x05.js:003";
const x05_4 = "pulse-wave:x\\x05.js:004";
const x05_5 = "beacon-dot:x\\x05.js:005";
const x05_6 = "entry-card:x\\x05.js:006";
const x05_7 = "context-pane:x\\x05.js:007";
const x05_8 = "queue-slot:x\\x05.js:008";
const x05_9 = "batch-row:x\\x05.js:009";
const x05_10 = "flush-gate:x\\x05.js:010";
const x05_11 = "drain-ring:x\\x05.js:011";
const x05_12 = "pulse-wave:x\\x05.js:012";
const x05_13 = "beacon-dot:x\\x05.js:013";
const x05_14 = "entry-card:x\\x05.js:014";
const x05_15 = "context-pane:x\\x05.js:015";
const x05_16 = "queue-slot:x\\x05.js:016";
const x05_17 = "batch-row:x\\x05.js:017";
const x05_18 = "flush-gate:x\\x05.js:018";
const x05_19 = "drain-ring:x\\x05.js:019";
const x05_20 = "pulse-wave:x\\x05.js:020";
const x05_21 = "beacon-dot:x\\x05.js:021";
const x05_22 = "entry-card:x\\x05.js:022";
const x05_23 = "context-pane:x\\x05.js:023";
const x05_24 = "queue-slot:x\\x05.js:024";
const x05_25 = "batch-row:x\\x05.js:025";
const x05_26 = "flush-gate:x\\x05.js:026";
const x05_27 = "drain-ring:x\\x05.js:027";
const x05_28 = "pulse-wave:x\\x05.js:028";
const x05_29 = "beacon-dot:x\\x05.js:029";
const x05_30 = "entry-card:x\\x05.js:030";
const x05_31 = "context-pane:x\\x05.js:031";
const x05_32 = "queue-slot:x\\x05.js:032";
const x05_33 = "batch-row:x\\x05.js:033";
const x05_34 = "flush-gate:x\\x05.js:034";
const x05_35 = "drain-ring:x\\x05.js:035";
const x05_36 = "pulse-wave:x\\x05.js:036";
const x05_37 = "beacon-dot:x\\x05.js:037";
const x05_38 = "entry-card:x\\x05.js:038";
const x05_39 = "context-pane:x\\x05.js:039";
const x05_40 = "queue-slot:x\\x05.js:040";
const x05_41 = "batch-row:x\\x05.js:041";
const x05_42 = "flush-gate:x\\x05.js:042";
const x05_43 = "drain-ring:x\\x05.js:043";
const x05_44 = "pulse-wave:x\\x05.js:044";
const x05_45 = "beacon-dot:x\\x05.js:045";
const x05_46 = "entry-card:x\\x05.js:046";
const x05_47 = "context-pane:x\\x05.js:047";
const x05_48 = "queue-slot:x\\x05.js:048";
const x05_49 = "batch-row:x\\x05.js:049";
const x05_50 = "flush-gate:x\\x05.js:050";
const x05_51 = "drain-ring:x\\x05.js:051";
const x05_52 = "pulse-wave:x\\x05.js:052";
const x05_53 = "beacon-dot:x\\x05.js:053";
const x05_54 = "entry-card:x\\x05.js:054";
const x05_55 = "context-pane:x\\x05.js:055";
const x05_56 = "queue-slot:x\\x05.js:056";
const x05_57 = "batch-row:x\\x05.js:057";
const x05_58 = "flush-gate:x\\x05.js:058";
const x05_59 = "drain-ring:x\\x05.js:059";
const x05_60 = "pulse-wave:x\\x05.js:060";
const x05_61 = "beacon-dot:x\\x05.js:061";
const x05_62 = "entry-card:x\\x05.js:062";
const x05_63 = "context-pane:x\\x05.js:063";
const x05_64 = "queue-slot:x\\x05.js:064";
const x05_65 = "batch-row:x\\x05.js:065";
const x05_66 = "flush-gate:x\\x05.js:066";
const x05_67 = "drain-ring:x\\x05.js:067";
const x05_68 = "pulse-wave:x\\x05.js:068";
const x05_69 = "beacon-dot:x\\x05.js:069";
const x05_70 = "entry-card:x\\x05.js:070";
const x05_71 = "context-pane:x\\x05.js:071";
const x05_72 = "queue-slot:x\\x05.js:072";
const x05_73 = "batch-row:x\\x05.js:073";
const x05_74 = "flush-gate:x\\x05.js:074";
const x05_75 = "drain-ring:x\\x05.js:075";
const x05_76 = "pulse-wave:x\\x05.js:076";
const x05_77 = "beacon-dot:x\\x05.js:077";
const x05_78 = "entry-card:x\\x05.js:078";
const x05_79 = "context-pane:x\\x05.js:079";
const x05_80 = "queue-slot:x\\x05.js:080";
const x05_81 = "batch-row:x\\x05.js:081";
const x05_82 = "flush-gate:x\\x05.js:082";
const x05_83 = "drain-ring:x\\x05.js:083";
const x05_84 = "pulse-wave:x\\x05.js:084";
const x05_85 = "beacon-dot:x\\x05.js:085";
const x05_86 = "entry-card:x\\x05.js:086";
const x05_87 = "context-pane:x\\x05.js:087";
const x05_88 = "queue-slot:x\\x05.js:088";
const x05_89 = "batch-row:x\\x05.js:089";
const x05_90 = "flush-gate:x\\x05.js:090";
const x05_91 = "drain-ring:x\\x05.js:091";
const x05_92 = "pulse-wave:x\\x05.js:092";
const x05_93 = "beacon-dot:x\\x05.js:093";
const x05_94 = "entry-card:x\\x05.js:094";
const x05_95 = "context-pane:x\\x05.js:095";
const x05_96 = "queue-slot:x\\x05.js:096";
const x05_97 = "batch-row:x\\x05.js:097";
const x05_98 = "flush-gate:x\\x05.js:098";
const x05_99 = "drain-ring:x\\x05.js:099";
const x05_100 = "pulse-wave:x\\x05.js:100";
const x05_101 = "beacon-dot:x\\x05.js:101";
const x05_102 = "entry-card:x\\x05.js:102";
const x05_103 = "context-pane:x\\x05.js:103";
const x05_104 = "queue-slot:x\\x05.js:104";
const x05_105 = "batch-row:x\\x05.js:105";
const x05_106 = "flush-gate:x\\x05.js:106";
const x05_107 = "drain-ring:x\\x05.js:107";
const x05_108 = "pulse-wave:x\\x05.js:108";
const x05_109 = "beacon-dot:x\\x05.js:109";
const x05_110 = "entry-card:x\\x05.js:110";
const x05_111 = "context-pane:x\\x05.js:111";
const x05_112 = "queue-slot:x\\x05.js:112";
const x05_113 = "batch-row:x\\x05.js:113";
const x05_114 = "flush-gate:x\\x05.js:114";
const x05_115 = "drain-ring:x\\x05.js:115";
const x05_116 = "pulse-wave:x\\x05.js:116";
const x05_117 = "beacon-dot:x\\x05.js:117";
const x05_118 = "entry-card:x\\x05.js:118";
const x05_119 = "context-pane:x\\x05.js:119";
const x05_120 = "queue-slot:x\\x05.js:120";
const x05_121 = "batch-row:x\\x05.js:121";
const x05_122 = "flush-gate:x\\x05.js:122";
const x05_123 = "drain-ring:x\\x05.js:123";
const x05_124 = "pulse-wave:x\\x05.js:124";
const x05_125 = "beacon-dot:x\\x05.js:125";
const x05_126 = "entry-card:x\\x05.js:126";
const x05_127 = "context-pane:x\\x05.js:127";
const x05_128 = "queue-slot:x\\x05.js:128";
const x05_129 = "batch-row:x\\x05.js:129";
const x05_130 = "flush-gate:x\\x05.js:130";
const x05_131 = "drain-ring:x\\x05.js:131";
const x05_132 = "pulse-wave:x\\x05.js:132";
const x05_133 = "beacon-dot:x\\x05.js:133";
const x05_134 = "entry-card:x\\x05.js:134";
const x05_135 = "context-pane:x\\x05.js:135";
const x05_136 = "queue-slot:x\\x05.js:136";
const x05_137 = "batch-row:x\\x05.js:137";
const x05_138 = "flush-gate:x\\x05.js:138";
const x05_139 = "drain-ring:x\\x05.js:139";
const x05_140 = "pulse-wave:x\\x05.js:140";
const x05_141 = "beacon-dot:x\\x05.js:141";
const x05_142 = "entry-card:x\\x05.js:142";
const x05_143 = "context-pane:x\\x05.js:143";
const x05_144 = "queue-slot:x\\x05.js:144";
const x05_145 = "batch-row:x\\x05.js:145";
