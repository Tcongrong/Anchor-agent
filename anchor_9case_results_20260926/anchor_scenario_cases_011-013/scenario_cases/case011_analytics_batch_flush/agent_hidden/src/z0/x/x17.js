import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 17,
  salt: 'b:0h:track',
  order: [1, 2, 3, 4, 5, 6, 7, 0],
  sep: '\u2061',
  shift: 8,
  mask: 3189639316
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain17@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
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
const x17_0 = "queue-slot:x\\x17.js:000";
const x17_1 = "batch-row:x\\x17.js:001";
const x17_2 = "flush-gate:x\\x17.js:002";
const x17_3 = "drain-ring:x\\x17.js:003";
const x17_4 = "pulse-wave:x\\x17.js:004";
const x17_5 = "beacon-dot:x\\x17.js:005";
const x17_6 = "entry-card:x\\x17.js:006";
const x17_7 = "context-pane:x\\x17.js:007";
const x17_8 = "queue-slot:x\\x17.js:008";
const x17_9 = "batch-row:x\\x17.js:009";
const x17_10 = "flush-gate:x\\x17.js:010";
const x17_11 = "drain-ring:x\\x17.js:011";
const x17_12 = "pulse-wave:x\\x17.js:012";
const x17_13 = "beacon-dot:x\\x17.js:013";
const x17_14 = "entry-card:x\\x17.js:014";
const x17_15 = "context-pane:x\\x17.js:015";
const x17_16 = "queue-slot:x\\x17.js:016";
const x17_17 = "batch-row:x\\x17.js:017";
const x17_18 = "flush-gate:x\\x17.js:018";
const x17_19 = "drain-ring:x\\x17.js:019";
const x17_20 = "pulse-wave:x\\x17.js:020";
const x17_21 = "beacon-dot:x\\x17.js:021";
const x17_22 = "entry-card:x\\x17.js:022";
const x17_23 = "context-pane:x\\x17.js:023";
const x17_24 = "queue-slot:x\\x17.js:024";
const x17_25 = "batch-row:x\\x17.js:025";
const x17_26 = "flush-gate:x\\x17.js:026";
const x17_27 = "drain-ring:x\\x17.js:027";
const x17_28 = "pulse-wave:x\\x17.js:028";
const x17_29 = "beacon-dot:x\\x17.js:029";
const x17_30 = "entry-card:x\\x17.js:030";
const x17_31 = "context-pane:x\\x17.js:031";
const x17_32 = "queue-slot:x\\x17.js:032";
const x17_33 = "batch-row:x\\x17.js:033";
const x17_34 = "flush-gate:x\\x17.js:034";
const x17_35 = "drain-ring:x\\x17.js:035";
const x17_36 = "pulse-wave:x\\x17.js:036";
const x17_37 = "beacon-dot:x\\x17.js:037";
const x17_38 = "entry-card:x\\x17.js:038";
const x17_39 = "context-pane:x\\x17.js:039";
const x17_40 = "queue-slot:x\\x17.js:040";
const x17_41 = "batch-row:x\\x17.js:041";
const x17_42 = "flush-gate:x\\x17.js:042";
const x17_43 = "drain-ring:x\\x17.js:043";
const x17_44 = "pulse-wave:x\\x17.js:044";
const x17_45 = "beacon-dot:x\\x17.js:045";
const x17_46 = "entry-card:x\\x17.js:046";
const x17_47 = "context-pane:x\\x17.js:047";
const x17_48 = "queue-slot:x\\x17.js:048";
const x17_49 = "batch-row:x\\x17.js:049";
const x17_50 = "flush-gate:x\\x17.js:050";
const x17_51 = "drain-ring:x\\x17.js:051";
const x17_52 = "pulse-wave:x\\x17.js:052";
const x17_53 = "beacon-dot:x\\x17.js:053";
const x17_54 = "entry-card:x\\x17.js:054";
const x17_55 = "context-pane:x\\x17.js:055";
const x17_56 = "queue-slot:x\\x17.js:056";
const x17_57 = "batch-row:x\\x17.js:057";
const x17_58 = "flush-gate:x\\x17.js:058";
const x17_59 = "drain-ring:x\\x17.js:059";
const x17_60 = "pulse-wave:x\\x17.js:060";
const x17_61 = "beacon-dot:x\\x17.js:061";
const x17_62 = "entry-card:x\\x17.js:062";
const x17_63 = "context-pane:x\\x17.js:063";
const x17_64 = "queue-slot:x\\x17.js:064";
const x17_65 = "batch-row:x\\x17.js:065";
const x17_66 = "flush-gate:x\\x17.js:066";
const x17_67 = "drain-ring:x\\x17.js:067";
const x17_68 = "pulse-wave:x\\x17.js:068";
const x17_69 = "beacon-dot:x\\x17.js:069";
const x17_70 = "entry-card:x\\x17.js:070";
const x17_71 = "context-pane:x\\x17.js:071";
const x17_72 = "queue-slot:x\\x17.js:072";
const x17_73 = "batch-row:x\\x17.js:073";
const x17_74 = "flush-gate:x\\x17.js:074";
const x17_75 = "drain-ring:x\\x17.js:075";
const x17_76 = "pulse-wave:x\\x17.js:076";
const x17_77 = "beacon-dot:x\\x17.js:077";
const x17_78 = "entry-card:x\\x17.js:078";
const x17_79 = "context-pane:x\\x17.js:079";
const x17_80 = "queue-slot:x\\x17.js:080";
const x17_81 = "batch-row:x\\x17.js:081";
const x17_82 = "flush-gate:x\\x17.js:082";
const x17_83 = "drain-ring:x\\x17.js:083";
const x17_84 = "pulse-wave:x\\x17.js:084";
const x17_85 = "beacon-dot:x\\x17.js:085";
const x17_86 = "entry-card:x\\x17.js:086";
const x17_87 = "context-pane:x\\x17.js:087";
const x17_88 = "queue-slot:x\\x17.js:088";
const x17_89 = "batch-row:x\\x17.js:089";
const x17_90 = "flush-gate:x\\x17.js:090";
const x17_91 = "drain-ring:x\\x17.js:091";
const x17_92 = "pulse-wave:x\\x17.js:092";
const x17_93 = "beacon-dot:x\\x17.js:093";
const x17_94 = "entry-card:x\\x17.js:094";
const x17_95 = "context-pane:x\\x17.js:095";
const x17_96 = "queue-slot:x\\x17.js:096";
const x17_97 = "batch-row:x\\x17.js:097";
const x17_98 = "flush-gate:x\\x17.js:098";
const x17_99 = "drain-ring:x\\x17.js:099";
const x17_100 = "pulse-wave:x\\x17.js:100";
const x17_101 = "beacon-dot:x\\x17.js:101";
const x17_102 = "entry-card:x\\x17.js:102";
const x17_103 = "context-pane:x\\x17.js:103";
const x17_104 = "queue-slot:x\\x17.js:104";
const x17_105 = "batch-row:x\\x17.js:105";
const x17_106 = "flush-gate:x\\x17.js:106";
const x17_107 = "drain-ring:x\\x17.js:107";
const x17_108 = "pulse-wave:x\\x17.js:108";
const x17_109 = "beacon-dot:x\\x17.js:109";
const x17_110 = "entry-card:x\\x17.js:110";
const x17_111 = "context-pane:x\\x17.js:111";
const x17_112 = "queue-slot:x\\x17.js:112";
const x17_113 = "batch-row:x\\x17.js:113";
const x17_114 = "flush-gate:x\\x17.js:114";
const x17_115 = "drain-ring:x\\x17.js:115";
const x17_116 = "pulse-wave:x\\x17.js:116";
const x17_117 = "beacon-dot:x\\x17.js:117";
const x17_118 = "entry-card:x\\x17.js:118";
const x17_119 = "context-pane:x\\x17.js:119";
const x17_120 = "queue-slot:x\\x17.js:120";
const x17_121 = "batch-row:x\\x17.js:121";
const x17_122 = "flush-gate:x\\x17.js:122";
const x17_123 = "drain-ring:x\\x17.js:123";
const x17_124 = "pulse-wave:x\\x17.js:124";
const x17_125 = "beacon-dot:x\\x17.js:125";
const x17_126 = "entry-card:x\\x17.js:126";
const x17_127 = "context-pane:x\\x17.js:127";
const x17_128 = "queue-slot:x\\x17.js:128";
const x17_129 = "batch-row:x\\x17.js:129";
const x17_130 = "flush-gate:x\\x17.js:130";
const x17_131 = "drain-ring:x\\x17.js:131";
const x17_132 = "pulse-wave:x\\x17.js:132";
const x17_133 = "beacon-dot:x\\x17.js:133";
const x17_134 = "entry-card:x\\x17.js:134";
const x17_135 = "context-pane:x\\x17.js:135";
const x17_136 = "queue-slot:x\\x17.js:136";
const x17_137 = "batch-row:x\\x17.js:137";
const x17_138 = "flush-gate:x\\x17.js:138";
const x17_139 = "drain-ring:x\\x17.js:139";
const x17_140 = "pulse-wave:x\\x17.js:140";
const x17_141 = "beacon-dot:x\\x17.js:141";
const x17_142 = "entry-card:x\\x17.js:142";
const x17_143 = "context-pane:x\\x17.js:143";
const x17_144 = "queue-slot:x\\x17.js:144";
const x17_145 = "batch-row:x\\x17.js:145";
