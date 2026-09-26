import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 25,
  salt: 'b:0p:track',
  order: [1, 2, 3, 4, 5, 6, 7, 0],
  sep: '\u2061',
  shift: 9,
  mask: 2950288924
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot25@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
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
const x25_0 = "queue-slot:x\\x25.js:000";
const x25_1 = "batch-row:x\\x25.js:001";
const x25_2 = "flush-gate:x\\x25.js:002";
const x25_3 = "drain-ring:x\\x25.js:003";
const x25_4 = "pulse-wave:x\\x25.js:004";
const x25_5 = "beacon-dot:x\\x25.js:005";
const x25_6 = "entry-card:x\\x25.js:006";
const x25_7 = "context-pane:x\\x25.js:007";
const x25_8 = "queue-slot:x\\x25.js:008";
const x25_9 = "batch-row:x\\x25.js:009";
const x25_10 = "flush-gate:x\\x25.js:010";
const x25_11 = "drain-ring:x\\x25.js:011";
const x25_12 = "pulse-wave:x\\x25.js:012";
const x25_13 = "beacon-dot:x\\x25.js:013";
const x25_14 = "entry-card:x\\x25.js:014";
const x25_15 = "context-pane:x\\x25.js:015";
const x25_16 = "queue-slot:x\\x25.js:016";
const x25_17 = "batch-row:x\\x25.js:017";
const x25_18 = "flush-gate:x\\x25.js:018";
const x25_19 = "drain-ring:x\\x25.js:019";
const x25_20 = "pulse-wave:x\\x25.js:020";
const x25_21 = "beacon-dot:x\\x25.js:021";
const x25_22 = "entry-card:x\\x25.js:022";
const x25_23 = "context-pane:x\\x25.js:023";
const x25_24 = "queue-slot:x\\x25.js:024";
const x25_25 = "batch-row:x\\x25.js:025";
const x25_26 = "flush-gate:x\\x25.js:026";
const x25_27 = "drain-ring:x\\x25.js:027";
const x25_28 = "pulse-wave:x\\x25.js:028";
const x25_29 = "beacon-dot:x\\x25.js:029";
const x25_30 = "entry-card:x\\x25.js:030";
const x25_31 = "context-pane:x\\x25.js:031";
const x25_32 = "queue-slot:x\\x25.js:032";
const x25_33 = "batch-row:x\\x25.js:033";
const x25_34 = "flush-gate:x\\x25.js:034";
const x25_35 = "drain-ring:x\\x25.js:035";
const x25_36 = "pulse-wave:x\\x25.js:036";
const x25_37 = "beacon-dot:x\\x25.js:037";
const x25_38 = "entry-card:x\\x25.js:038";
const x25_39 = "context-pane:x\\x25.js:039";
const x25_40 = "queue-slot:x\\x25.js:040";
const x25_41 = "batch-row:x\\x25.js:041";
const x25_42 = "flush-gate:x\\x25.js:042";
const x25_43 = "drain-ring:x\\x25.js:043";
const x25_44 = "pulse-wave:x\\x25.js:044";
const x25_45 = "beacon-dot:x\\x25.js:045";
const x25_46 = "entry-card:x\\x25.js:046";
const x25_47 = "context-pane:x\\x25.js:047";
const x25_48 = "queue-slot:x\\x25.js:048";
const x25_49 = "batch-row:x\\x25.js:049";
const x25_50 = "flush-gate:x\\x25.js:050";
const x25_51 = "drain-ring:x\\x25.js:051";
const x25_52 = "pulse-wave:x\\x25.js:052";
const x25_53 = "beacon-dot:x\\x25.js:053";
const x25_54 = "entry-card:x\\x25.js:054";
const x25_55 = "context-pane:x\\x25.js:055";
const x25_56 = "queue-slot:x\\x25.js:056";
const x25_57 = "batch-row:x\\x25.js:057";
const x25_58 = "flush-gate:x\\x25.js:058";
const x25_59 = "drain-ring:x\\x25.js:059";
const x25_60 = "pulse-wave:x\\x25.js:060";
const x25_61 = "beacon-dot:x\\x25.js:061";
const x25_62 = "entry-card:x\\x25.js:062";
const x25_63 = "context-pane:x\\x25.js:063";
const x25_64 = "queue-slot:x\\x25.js:064";
const x25_65 = "batch-row:x\\x25.js:065";
const x25_66 = "flush-gate:x\\x25.js:066";
const x25_67 = "drain-ring:x\\x25.js:067";
const x25_68 = "pulse-wave:x\\x25.js:068";
const x25_69 = "beacon-dot:x\\x25.js:069";
const x25_70 = "entry-card:x\\x25.js:070";
const x25_71 = "context-pane:x\\x25.js:071";
const x25_72 = "queue-slot:x\\x25.js:072";
const x25_73 = "batch-row:x\\x25.js:073";
const x25_74 = "flush-gate:x\\x25.js:074";
const x25_75 = "drain-ring:x\\x25.js:075";
const x25_76 = "pulse-wave:x\\x25.js:076";
const x25_77 = "beacon-dot:x\\x25.js:077";
const x25_78 = "entry-card:x\\x25.js:078";
const x25_79 = "context-pane:x\\x25.js:079";
const x25_80 = "queue-slot:x\\x25.js:080";
const x25_81 = "batch-row:x\\x25.js:081";
const x25_82 = "flush-gate:x\\x25.js:082";
const x25_83 = "drain-ring:x\\x25.js:083";
const x25_84 = "pulse-wave:x\\x25.js:084";
const x25_85 = "beacon-dot:x\\x25.js:085";
const x25_86 = "entry-card:x\\x25.js:086";
const x25_87 = "context-pane:x\\x25.js:087";
const x25_88 = "queue-slot:x\\x25.js:088";
const x25_89 = "batch-row:x\\x25.js:089";
const x25_90 = "flush-gate:x\\x25.js:090";
const x25_91 = "drain-ring:x\\x25.js:091";
const x25_92 = "pulse-wave:x\\x25.js:092";
const x25_93 = "beacon-dot:x\\x25.js:093";
const x25_94 = "entry-card:x\\x25.js:094";
const x25_95 = "context-pane:x\\x25.js:095";
const x25_96 = "queue-slot:x\\x25.js:096";
const x25_97 = "batch-row:x\\x25.js:097";
const x25_98 = "flush-gate:x\\x25.js:098";
const x25_99 = "drain-ring:x\\x25.js:099";
const x25_100 = "pulse-wave:x\\x25.js:100";
const x25_101 = "beacon-dot:x\\x25.js:101";
const x25_102 = "entry-card:x\\x25.js:102";
const x25_103 = "context-pane:x\\x25.js:103";
const x25_104 = "queue-slot:x\\x25.js:104";
const x25_105 = "batch-row:x\\x25.js:105";
const x25_106 = "flush-gate:x\\x25.js:106";
const x25_107 = "drain-ring:x\\x25.js:107";
const x25_108 = "pulse-wave:x\\x25.js:108";
const x25_109 = "beacon-dot:x\\x25.js:109";
const x25_110 = "entry-card:x\\x25.js:110";
const x25_111 = "context-pane:x\\x25.js:111";
const x25_112 = "queue-slot:x\\x25.js:112";
const x25_113 = "batch-row:x\\x25.js:113";
const x25_114 = "flush-gate:x\\x25.js:114";
const x25_115 = "drain-ring:x\\x25.js:115";
const x25_116 = "pulse-wave:x\\x25.js:116";
const x25_117 = "beacon-dot:x\\x25.js:117";
const x25_118 = "entry-card:x\\x25.js:118";
const x25_119 = "context-pane:x\\x25.js:119";
const x25_120 = "queue-slot:x\\x25.js:120";
const x25_121 = "batch-row:x\\x25.js:121";
const x25_122 = "flush-gate:x\\x25.js:122";
const x25_123 = "drain-ring:x\\x25.js:123";
const x25_124 = "pulse-wave:x\\x25.js:124";
const x25_125 = "beacon-dot:x\\x25.js:125";
const x25_126 = "entry-card:x\\x25.js:126";
const x25_127 = "context-pane:x\\x25.js:127";
const x25_128 = "queue-slot:x\\x25.js:128";
const x25_129 = "batch-row:x\\x25.js:129";
const x25_130 = "flush-gate:x\\x25.js:130";
const x25_131 = "drain-ring:x\\x25.js:131";
const x25_132 = "pulse-wave:x\\x25.js:132";
const x25_133 = "beacon-dot:x\\x25.js:133";
const x25_134 = "entry-card:x\\x25.js:134";
const x25_135 = "context-pane:x\\x25.js:135";
const x25_136 = "queue-slot:x\\x25.js:136";
const x25_137 = "batch-row:x\\x25.js:137";
const x25_138 = "flush-gate:x\\x25.js:138";
const x25_139 = "drain-ring:x\\x25.js:139";
const x25_140 = "pulse-wave:x\\x25.js:140";
const x25_141 = "beacon-dot:x\\x25.js:141";
const x25_142 = "entry-card:x\\x25.js:142";
const x25_143 = "context-pane:x\\x25.js:143";
const x25_144 = "queue-slot:x\\x25.js:144";
const x25_145 = "batch-row:x\\x25.js:145";
