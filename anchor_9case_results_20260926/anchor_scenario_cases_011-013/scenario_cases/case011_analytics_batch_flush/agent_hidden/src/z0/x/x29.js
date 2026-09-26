import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 29,
  salt: 'b:0t:track',
  order: [5, 6, 7, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 6,
  mask: 683130080
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain29@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
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
const x29_0 = "queue-slot:x\\x29.js:000";
const x29_1 = "batch-row:x\\x29.js:001";
const x29_2 = "flush-gate:x\\x29.js:002";
const x29_3 = "drain-ring:x\\x29.js:003";
const x29_4 = "pulse-wave:x\\x29.js:004";
const x29_5 = "beacon-dot:x\\x29.js:005";
const x29_6 = "entry-card:x\\x29.js:006";
const x29_7 = "context-pane:x\\x29.js:007";
const x29_8 = "queue-slot:x\\x29.js:008";
const x29_9 = "batch-row:x\\x29.js:009";
const x29_10 = "flush-gate:x\\x29.js:010";
const x29_11 = "drain-ring:x\\x29.js:011";
const x29_12 = "pulse-wave:x\\x29.js:012";
const x29_13 = "beacon-dot:x\\x29.js:013";
const x29_14 = "entry-card:x\\x29.js:014";
const x29_15 = "context-pane:x\\x29.js:015";
const x29_16 = "queue-slot:x\\x29.js:016";
const x29_17 = "batch-row:x\\x29.js:017";
const x29_18 = "flush-gate:x\\x29.js:018";
const x29_19 = "drain-ring:x\\x29.js:019";
const x29_20 = "pulse-wave:x\\x29.js:020";
const x29_21 = "beacon-dot:x\\x29.js:021";
const x29_22 = "entry-card:x\\x29.js:022";
const x29_23 = "context-pane:x\\x29.js:023";
const x29_24 = "queue-slot:x\\x29.js:024";
const x29_25 = "batch-row:x\\x29.js:025";
const x29_26 = "flush-gate:x\\x29.js:026";
const x29_27 = "drain-ring:x\\x29.js:027";
const x29_28 = "pulse-wave:x\\x29.js:028";
const x29_29 = "beacon-dot:x\\x29.js:029";
const x29_30 = "entry-card:x\\x29.js:030";
const x29_31 = "context-pane:x\\x29.js:031";
const x29_32 = "queue-slot:x\\x29.js:032";
const x29_33 = "batch-row:x\\x29.js:033";
const x29_34 = "flush-gate:x\\x29.js:034";
const x29_35 = "drain-ring:x\\x29.js:035";
const x29_36 = "pulse-wave:x\\x29.js:036";
const x29_37 = "beacon-dot:x\\x29.js:037";
const x29_38 = "entry-card:x\\x29.js:038";
const x29_39 = "context-pane:x\\x29.js:039";
const x29_40 = "queue-slot:x\\x29.js:040";
const x29_41 = "batch-row:x\\x29.js:041";
const x29_42 = "flush-gate:x\\x29.js:042";
const x29_43 = "drain-ring:x\\x29.js:043";
const x29_44 = "pulse-wave:x\\x29.js:044";
const x29_45 = "beacon-dot:x\\x29.js:045";
const x29_46 = "entry-card:x\\x29.js:046";
const x29_47 = "context-pane:x\\x29.js:047";
const x29_48 = "queue-slot:x\\x29.js:048";
const x29_49 = "batch-row:x\\x29.js:049";
const x29_50 = "flush-gate:x\\x29.js:050";
const x29_51 = "drain-ring:x\\x29.js:051";
const x29_52 = "pulse-wave:x\\x29.js:052";
const x29_53 = "beacon-dot:x\\x29.js:053";
const x29_54 = "entry-card:x\\x29.js:054";
const x29_55 = "context-pane:x\\x29.js:055";
const x29_56 = "queue-slot:x\\x29.js:056";
const x29_57 = "batch-row:x\\x29.js:057";
const x29_58 = "flush-gate:x\\x29.js:058";
const x29_59 = "drain-ring:x\\x29.js:059";
const x29_60 = "pulse-wave:x\\x29.js:060";
const x29_61 = "beacon-dot:x\\x29.js:061";
const x29_62 = "entry-card:x\\x29.js:062";
const x29_63 = "context-pane:x\\x29.js:063";
const x29_64 = "queue-slot:x\\x29.js:064";
const x29_65 = "batch-row:x\\x29.js:065";
const x29_66 = "flush-gate:x\\x29.js:066";
const x29_67 = "drain-ring:x\\x29.js:067";
const x29_68 = "pulse-wave:x\\x29.js:068";
const x29_69 = "beacon-dot:x\\x29.js:069";
const x29_70 = "entry-card:x\\x29.js:070";
const x29_71 = "context-pane:x\\x29.js:071";
const x29_72 = "queue-slot:x\\x29.js:072";
const x29_73 = "batch-row:x\\x29.js:073";
const x29_74 = "flush-gate:x\\x29.js:074";
const x29_75 = "drain-ring:x\\x29.js:075";
const x29_76 = "pulse-wave:x\\x29.js:076";
const x29_77 = "beacon-dot:x\\x29.js:077";
const x29_78 = "entry-card:x\\x29.js:078";
const x29_79 = "context-pane:x\\x29.js:079";
const x29_80 = "queue-slot:x\\x29.js:080";
const x29_81 = "batch-row:x\\x29.js:081";
const x29_82 = "flush-gate:x\\x29.js:082";
const x29_83 = "drain-ring:x\\x29.js:083";
const x29_84 = "pulse-wave:x\\x29.js:084";
const x29_85 = "beacon-dot:x\\x29.js:085";
const x29_86 = "entry-card:x\\x29.js:086";
const x29_87 = "context-pane:x\\x29.js:087";
const x29_88 = "queue-slot:x\\x29.js:088";
const x29_89 = "batch-row:x\\x29.js:089";
const x29_90 = "flush-gate:x\\x29.js:090";
const x29_91 = "drain-ring:x\\x29.js:091";
const x29_92 = "pulse-wave:x\\x29.js:092";
const x29_93 = "beacon-dot:x\\x29.js:093";
const x29_94 = "entry-card:x\\x29.js:094";
const x29_95 = "context-pane:x\\x29.js:095";
const x29_96 = "queue-slot:x\\x29.js:096";
const x29_97 = "batch-row:x\\x29.js:097";
const x29_98 = "flush-gate:x\\x29.js:098";
const x29_99 = "drain-ring:x\\x29.js:099";
const x29_100 = "pulse-wave:x\\x29.js:100";
const x29_101 = "beacon-dot:x\\x29.js:101";
const x29_102 = "entry-card:x\\x29.js:102";
const x29_103 = "context-pane:x\\x29.js:103";
const x29_104 = "queue-slot:x\\x29.js:104";
const x29_105 = "batch-row:x\\x29.js:105";
const x29_106 = "flush-gate:x\\x29.js:106";
const x29_107 = "drain-ring:x\\x29.js:107";
const x29_108 = "pulse-wave:x\\x29.js:108";
const x29_109 = "beacon-dot:x\\x29.js:109";
const x29_110 = "entry-card:x\\x29.js:110";
const x29_111 = "context-pane:x\\x29.js:111";
const x29_112 = "queue-slot:x\\x29.js:112";
const x29_113 = "batch-row:x\\x29.js:113";
const x29_114 = "flush-gate:x\\x29.js:114";
const x29_115 = "drain-ring:x\\x29.js:115";
const x29_116 = "pulse-wave:x\\x29.js:116";
const x29_117 = "beacon-dot:x\\x29.js:117";
const x29_118 = "entry-card:x\\x29.js:118";
const x29_119 = "context-pane:x\\x29.js:119";
const x29_120 = "queue-slot:x\\x29.js:120";
const x29_121 = "batch-row:x\\x29.js:121";
const x29_122 = "flush-gate:x\\x29.js:122";
const x29_123 = "drain-ring:x\\x29.js:123";
const x29_124 = "pulse-wave:x\\x29.js:124";
const x29_125 = "beacon-dot:x\\x29.js:125";
const x29_126 = "entry-card:x\\x29.js:126";
const x29_127 = "context-pane:x\\x29.js:127";
const x29_128 = "queue-slot:x\\x29.js:128";
const x29_129 = "batch-row:x\\x29.js:129";
const x29_130 = "flush-gate:x\\x29.js:130";
const x29_131 = "drain-ring:x\\x29.js:131";
const x29_132 = "pulse-wave:x\\x29.js:132";
const x29_133 = "beacon-dot:x\\x29.js:133";
const x29_134 = "entry-card:x\\x29.js:134";
const x29_135 = "context-pane:x\\x29.js:135";
const x29_136 = "queue-slot:x\\x29.js:136";
const x29_137 = "batch-row:x\\x29.js:137";
const x29_138 = "flush-gate:x\\x29.js:138";
const x29_139 = "drain-ring:x\\x29.js:139";
const x29_140 = "pulse-wave:x\\x29.js:140";
const x29_141 = "beacon-dot:x\\x29.js:141";
const x29_142 = "entry-card:x\\x29.js:142";
const x29_143 = "context-pane:x\\x29.js:143";
const x29_144 = "queue-slot:x\\x29.js:144";
const x29_145 = "batch-row:x\\x29.js:145";
