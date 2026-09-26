import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 23,
  salt: 'b:0n:track',
  order: [7, 0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 7,
  mask: 1936384698
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain23@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x23_0 = "queue-slot:x\\x23.js:000";
const x23_1 = "batch-row:x\\x23.js:001";
const x23_2 = "flush-gate:x\\x23.js:002";
const x23_3 = "drain-ring:x\\x23.js:003";
const x23_4 = "pulse-wave:x\\x23.js:004";
const x23_5 = "beacon-dot:x\\x23.js:005";
const x23_6 = "entry-card:x\\x23.js:006";
const x23_7 = "context-pane:x\\x23.js:007";
const x23_8 = "queue-slot:x\\x23.js:008";
const x23_9 = "batch-row:x\\x23.js:009";
const x23_10 = "flush-gate:x\\x23.js:010";
const x23_11 = "drain-ring:x\\x23.js:011";
const x23_12 = "pulse-wave:x\\x23.js:012";
const x23_13 = "beacon-dot:x\\x23.js:013";
const x23_14 = "entry-card:x\\x23.js:014";
const x23_15 = "context-pane:x\\x23.js:015";
const x23_16 = "queue-slot:x\\x23.js:016";
const x23_17 = "batch-row:x\\x23.js:017";
const x23_18 = "flush-gate:x\\x23.js:018";
const x23_19 = "drain-ring:x\\x23.js:019";
const x23_20 = "pulse-wave:x\\x23.js:020";
const x23_21 = "beacon-dot:x\\x23.js:021";
const x23_22 = "entry-card:x\\x23.js:022";
const x23_23 = "context-pane:x\\x23.js:023";
const x23_24 = "queue-slot:x\\x23.js:024";
const x23_25 = "batch-row:x\\x23.js:025";
const x23_26 = "flush-gate:x\\x23.js:026";
const x23_27 = "drain-ring:x\\x23.js:027";
const x23_28 = "pulse-wave:x\\x23.js:028";
const x23_29 = "beacon-dot:x\\x23.js:029";
const x23_30 = "entry-card:x\\x23.js:030";
const x23_31 = "context-pane:x\\x23.js:031";
const x23_32 = "queue-slot:x\\x23.js:032";
const x23_33 = "batch-row:x\\x23.js:033";
const x23_34 = "flush-gate:x\\x23.js:034";
const x23_35 = "drain-ring:x\\x23.js:035";
const x23_36 = "pulse-wave:x\\x23.js:036";
const x23_37 = "beacon-dot:x\\x23.js:037";
const x23_38 = "entry-card:x\\x23.js:038";
const x23_39 = "context-pane:x\\x23.js:039";
const x23_40 = "queue-slot:x\\x23.js:040";
const x23_41 = "batch-row:x\\x23.js:041";
const x23_42 = "flush-gate:x\\x23.js:042";
const x23_43 = "drain-ring:x\\x23.js:043";
const x23_44 = "pulse-wave:x\\x23.js:044";
const x23_45 = "beacon-dot:x\\x23.js:045";
const x23_46 = "entry-card:x\\x23.js:046";
const x23_47 = "context-pane:x\\x23.js:047";
const x23_48 = "queue-slot:x\\x23.js:048";
const x23_49 = "batch-row:x\\x23.js:049";
const x23_50 = "flush-gate:x\\x23.js:050";
const x23_51 = "drain-ring:x\\x23.js:051";
const x23_52 = "pulse-wave:x\\x23.js:052";
const x23_53 = "beacon-dot:x\\x23.js:053";
const x23_54 = "entry-card:x\\x23.js:054";
const x23_55 = "context-pane:x\\x23.js:055";
const x23_56 = "queue-slot:x\\x23.js:056";
const x23_57 = "batch-row:x\\x23.js:057";
const x23_58 = "flush-gate:x\\x23.js:058";
const x23_59 = "drain-ring:x\\x23.js:059";
const x23_60 = "pulse-wave:x\\x23.js:060";
const x23_61 = "beacon-dot:x\\x23.js:061";
const x23_62 = "entry-card:x\\x23.js:062";
const x23_63 = "context-pane:x\\x23.js:063";
const x23_64 = "queue-slot:x\\x23.js:064";
const x23_65 = "batch-row:x\\x23.js:065";
const x23_66 = "flush-gate:x\\x23.js:066";
const x23_67 = "drain-ring:x\\x23.js:067";
const x23_68 = "pulse-wave:x\\x23.js:068";
const x23_69 = "beacon-dot:x\\x23.js:069";
const x23_70 = "entry-card:x\\x23.js:070";
const x23_71 = "context-pane:x\\x23.js:071";
const x23_72 = "queue-slot:x\\x23.js:072";
const x23_73 = "batch-row:x\\x23.js:073";
const x23_74 = "flush-gate:x\\x23.js:074";
const x23_75 = "drain-ring:x\\x23.js:075";
const x23_76 = "pulse-wave:x\\x23.js:076";
const x23_77 = "beacon-dot:x\\x23.js:077";
const x23_78 = "entry-card:x\\x23.js:078";
const x23_79 = "context-pane:x\\x23.js:079";
const x23_80 = "queue-slot:x\\x23.js:080";
const x23_81 = "batch-row:x\\x23.js:081";
const x23_82 = "flush-gate:x\\x23.js:082";
const x23_83 = "drain-ring:x\\x23.js:083";
const x23_84 = "pulse-wave:x\\x23.js:084";
const x23_85 = "beacon-dot:x\\x23.js:085";
const x23_86 = "entry-card:x\\x23.js:086";
const x23_87 = "context-pane:x\\x23.js:087";
const x23_88 = "queue-slot:x\\x23.js:088";
const x23_89 = "batch-row:x\\x23.js:089";
const x23_90 = "flush-gate:x\\x23.js:090";
const x23_91 = "drain-ring:x\\x23.js:091";
const x23_92 = "pulse-wave:x\\x23.js:092";
const x23_93 = "beacon-dot:x\\x23.js:093";
const x23_94 = "entry-card:x\\x23.js:094";
const x23_95 = "context-pane:x\\x23.js:095";
const x23_96 = "queue-slot:x\\x23.js:096";
const x23_97 = "batch-row:x\\x23.js:097";
const x23_98 = "flush-gate:x\\x23.js:098";
const x23_99 = "drain-ring:x\\x23.js:099";
const x23_100 = "pulse-wave:x\\x23.js:100";
const x23_101 = "beacon-dot:x\\x23.js:101";
const x23_102 = "entry-card:x\\x23.js:102";
const x23_103 = "context-pane:x\\x23.js:103";
const x23_104 = "queue-slot:x\\x23.js:104";
const x23_105 = "batch-row:x\\x23.js:105";
const x23_106 = "flush-gate:x\\x23.js:106";
const x23_107 = "drain-ring:x\\x23.js:107";
const x23_108 = "pulse-wave:x\\x23.js:108";
const x23_109 = "beacon-dot:x\\x23.js:109";
const x23_110 = "entry-card:x\\x23.js:110";
const x23_111 = "context-pane:x\\x23.js:111";
const x23_112 = "queue-slot:x\\x23.js:112";
const x23_113 = "batch-row:x\\x23.js:113";
const x23_114 = "flush-gate:x\\x23.js:114";
const x23_115 = "drain-ring:x\\x23.js:115";
const x23_116 = "pulse-wave:x\\x23.js:116";
const x23_117 = "beacon-dot:x\\x23.js:117";
const x23_118 = "entry-card:x\\x23.js:118";
const x23_119 = "context-pane:x\\x23.js:119";
const x23_120 = "queue-slot:x\\x23.js:120";
const x23_121 = "batch-row:x\\x23.js:121";
const x23_122 = "flush-gate:x\\x23.js:122";
const x23_123 = "drain-ring:x\\x23.js:123";
const x23_124 = "pulse-wave:x\\x23.js:124";
const x23_125 = "beacon-dot:x\\x23.js:125";
const x23_126 = "entry-card:x\\x23.js:126";
const x23_127 = "context-pane:x\\x23.js:127";
const x23_128 = "queue-slot:x\\x23.js:128";
const x23_129 = "batch-row:x\\x23.js:129";
const x23_130 = "flush-gate:x\\x23.js:130";
const x23_131 = "drain-ring:x\\x23.js:131";
const x23_132 = "pulse-wave:x\\x23.js:132";
const x23_133 = "beacon-dot:x\\x23.js:133";
const x23_134 = "entry-card:x\\x23.js:134";
const x23_135 = "context-pane:x\\x23.js:135";
const x23_136 = "queue-slot:x\\x23.js:136";
const x23_137 = "batch-row:x\\x23.js:137";
const x23_138 = "flush-gate:x\\x23.js:138";
const x23_139 = "drain-ring:x\\x23.js:139";
const x23_140 = "pulse-wave:x\\x23.js:140";
const x23_141 = "beacon-dot:x\\x23.js:141";
const x23_142 = "entry-card:x\\x23.js:142";
const x23_143 = "context-pane:x\\x23.js:143";
const x23_144 = "queue-slot:x\\x23.js:144";
const x23_145 = "batch-row:x\\x23.js:145";
