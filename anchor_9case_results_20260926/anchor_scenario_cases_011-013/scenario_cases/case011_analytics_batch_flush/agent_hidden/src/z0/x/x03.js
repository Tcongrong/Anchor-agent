import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 3,
  salt: 'b:03:track',
  order: [3, 4, 5, 6, 7, 0, 1, 2],
  sep: '\u2063',
  shift: 8,
  mask: 387277030
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track3@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'n', i: 4, v: 'n', y: 'n', n: 1 },
    { k: 'g', i: 5, v: 'g', y: 'g', n: 1 },
    { k: 'u', i: 6, v: 'u', y: 'u', n: 1 },
    { k: 't', i: 7, v: 't', y: 't', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 13) + '-' + (cfg.slot + 11).toString(36) + 'q';
}

export function track(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(waveTuple(ctx), 'wave', { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x03_0 = "queue-slot:x\\x03.js:000";
const x03_1 = "batch-row:x\\x03.js:001";
const x03_2 = "flush-gate:x\\x03.js:002";
const x03_3 = "drain-ring:x\\x03.js:003";
const x03_4 = "pulse-wave:x\\x03.js:004";
const x03_5 = "beacon-dot:x\\x03.js:005";
const x03_6 = "entry-card:x\\x03.js:006";
const x03_7 = "context-pane:x\\x03.js:007";
const x03_8 = "queue-slot:x\\x03.js:008";
const x03_9 = "batch-row:x\\x03.js:009";
const x03_10 = "flush-gate:x\\x03.js:010";
const x03_11 = "drain-ring:x\\x03.js:011";
const x03_12 = "pulse-wave:x\\x03.js:012";
const x03_13 = "beacon-dot:x\\x03.js:013";
const x03_14 = "entry-card:x\\x03.js:014";
const x03_15 = "context-pane:x\\x03.js:015";
const x03_16 = "queue-slot:x\\x03.js:016";
const x03_17 = "batch-row:x\\x03.js:017";
const x03_18 = "flush-gate:x\\x03.js:018";
const x03_19 = "drain-ring:x\\x03.js:019";
const x03_20 = "pulse-wave:x\\x03.js:020";
const x03_21 = "beacon-dot:x\\x03.js:021";
const x03_22 = "entry-card:x\\x03.js:022";
const x03_23 = "context-pane:x\\x03.js:023";
const x03_24 = "queue-slot:x\\x03.js:024";
const x03_25 = "batch-row:x\\x03.js:025";
const x03_26 = "flush-gate:x\\x03.js:026";
const x03_27 = "drain-ring:x\\x03.js:027";
const x03_28 = "pulse-wave:x\\x03.js:028";
const x03_29 = "beacon-dot:x\\x03.js:029";
const x03_30 = "entry-card:x\\x03.js:030";
const x03_31 = "context-pane:x\\x03.js:031";
const x03_32 = "queue-slot:x\\x03.js:032";
const x03_33 = "batch-row:x\\x03.js:033";
const x03_34 = "flush-gate:x\\x03.js:034";
const x03_35 = "drain-ring:x\\x03.js:035";
const x03_36 = "pulse-wave:x\\x03.js:036";
const x03_37 = "beacon-dot:x\\x03.js:037";
const x03_38 = "entry-card:x\\x03.js:038";
const x03_39 = "context-pane:x\\x03.js:039";
const x03_40 = "queue-slot:x\\x03.js:040";
const x03_41 = "batch-row:x\\x03.js:041";
const x03_42 = "flush-gate:x\\x03.js:042";
const x03_43 = "drain-ring:x\\x03.js:043";
const x03_44 = "pulse-wave:x\\x03.js:044";
const x03_45 = "beacon-dot:x\\x03.js:045";
const x03_46 = "entry-card:x\\x03.js:046";
const x03_47 = "context-pane:x\\x03.js:047";
const x03_48 = "queue-slot:x\\x03.js:048";
const x03_49 = "batch-row:x\\x03.js:049";
const x03_50 = "flush-gate:x\\x03.js:050";
const x03_51 = "drain-ring:x\\x03.js:051";
const x03_52 = "pulse-wave:x\\x03.js:052";
const x03_53 = "beacon-dot:x\\x03.js:053";
const x03_54 = "entry-card:x\\x03.js:054";
const x03_55 = "context-pane:x\\x03.js:055";
const x03_56 = "queue-slot:x\\x03.js:056";
const x03_57 = "batch-row:x\\x03.js:057";
const x03_58 = "flush-gate:x\\x03.js:058";
const x03_59 = "drain-ring:x\\x03.js:059";
const x03_60 = "pulse-wave:x\\x03.js:060";
const x03_61 = "beacon-dot:x\\x03.js:061";
const x03_62 = "entry-card:x\\x03.js:062";
const x03_63 = "context-pane:x\\x03.js:063";
const x03_64 = "queue-slot:x\\x03.js:064";
const x03_65 = "batch-row:x\\x03.js:065";
const x03_66 = "flush-gate:x\\x03.js:066";
const x03_67 = "drain-ring:x\\x03.js:067";
const x03_68 = "pulse-wave:x\\x03.js:068";
const x03_69 = "beacon-dot:x\\x03.js:069";
const x03_70 = "entry-card:x\\x03.js:070";
const x03_71 = "context-pane:x\\x03.js:071";
const x03_72 = "queue-slot:x\\x03.js:072";
const x03_73 = "batch-row:x\\x03.js:073";
const x03_74 = "flush-gate:x\\x03.js:074";
const x03_75 = "drain-ring:x\\x03.js:075";
const x03_76 = "pulse-wave:x\\x03.js:076";
const x03_77 = "beacon-dot:x\\x03.js:077";
const x03_78 = "entry-card:x\\x03.js:078";
const x03_79 = "context-pane:x\\x03.js:079";
const x03_80 = "queue-slot:x\\x03.js:080";
const x03_81 = "batch-row:x\\x03.js:081";
const x03_82 = "flush-gate:x\\x03.js:082";
const x03_83 = "drain-ring:x\\x03.js:083";
const x03_84 = "pulse-wave:x\\x03.js:084";
const x03_85 = "beacon-dot:x\\x03.js:085";
const x03_86 = "entry-card:x\\x03.js:086";
const x03_87 = "context-pane:x\\x03.js:087";
const x03_88 = "queue-slot:x\\x03.js:088";
const x03_89 = "batch-row:x\\x03.js:089";
const x03_90 = "flush-gate:x\\x03.js:090";
const x03_91 = "drain-ring:x\\x03.js:091";
const x03_92 = "pulse-wave:x\\x03.js:092";
const x03_93 = "beacon-dot:x\\x03.js:093";
const x03_94 = "entry-card:x\\x03.js:094";
const x03_95 = "context-pane:x\\x03.js:095";
const x03_96 = "queue-slot:x\\x03.js:096";
const x03_97 = "batch-row:x\\x03.js:097";
const x03_98 = "flush-gate:x\\x03.js:098";
const x03_99 = "drain-ring:x\\x03.js:099";
const x03_100 = "pulse-wave:x\\x03.js:100";
const x03_101 = "beacon-dot:x\\x03.js:101";
const x03_102 = "entry-card:x\\x03.js:102";
const x03_103 = "context-pane:x\\x03.js:103";
const x03_104 = "queue-slot:x\\x03.js:104";
const x03_105 = "batch-row:x\\x03.js:105";
const x03_106 = "flush-gate:x\\x03.js:106";
const x03_107 = "drain-ring:x\\x03.js:107";
const x03_108 = "pulse-wave:x\\x03.js:108";
const x03_109 = "beacon-dot:x\\x03.js:109";
const x03_110 = "entry-card:x\\x03.js:110";
const x03_111 = "context-pane:x\\x03.js:111";
const x03_112 = "queue-slot:x\\x03.js:112";
const x03_113 = "batch-row:x\\x03.js:113";
const x03_114 = "flush-gate:x\\x03.js:114";
const x03_115 = "drain-ring:x\\x03.js:115";
const x03_116 = "pulse-wave:x\\x03.js:116";
const x03_117 = "beacon-dot:x\\x03.js:117";
const x03_118 = "entry-card:x\\x03.js:118";
const x03_119 = "context-pane:x\\x03.js:119";
const x03_120 = "queue-slot:x\\x03.js:120";
const x03_121 = "batch-row:x\\x03.js:121";
const x03_122 = "flush-gate:x\\x03.js:122";
const x03_123 = "drain-ring:x\\x03.js:123";
const x03_124 = "pulse-wave:x\\x03.js:124";
const x03_125 = "beacon-dot:x\\x03.js:125";
const x03_126 = "entry-card:x\\x03.js:126";
const x03_127 = "context-pane:x\\x03.js:127";
const x03_128 = "queue-slot:x\\x03.js:128";
const x03_129 = "batch-row:x\\x03.js:129";
const x03_130 = "flush-gate:x\\x03.js:130";
const x03_131 = "drain-ring:x\\x03.js:131";
const x03_132 = "pulse-wave:x\\x03.js:132";
const x03_133 = "beacon-dot:x\\x03.js:133";
const x03_134 = "entry-card:x\\x03.js:134";
const x03_135 = "context-pane:x\\x03.js:135";
const x03_136 = "queue-slot:x\\x03.js:136";
const x03_137 = "batch-row:x\\x03.js:137";
const x03_138 = "flush-gate:x\\x03.js:138";
const x03_139 = "drain-ring:x\\x03.js:139";
const x03_140 = "pulse-wave:x\\x03.js:140";
const x03_141 = "beacon-dot:x\\x03.js:141";
const x03_142 = "entry-card:x\\x03.js:142";
const x03_143 = "context-pane:x\\x03.js:143";
const x03_144 = "queue-slot:x\\x03.js:144";
const x03_145 = "batch-row:x\\x03.js:145";
