import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 33,
  salt: 'b:0x:track',
  order: [1, 2, 3, 4, 5, 6, 7, 0],
  sep: '\u2061',
  shift: 10,
  mask: 2710938532
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track33@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
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
const x33_0 = "queue-slot:x\\x33.js:000";
const x33_1 = "batch-row:x\\x33.js:001";
const x33_2 = "flush-gate:x\\x33.js:002";
const x33_3 = "drain-ring:x\\x33.js:003";
const x33_4 = "pulse-wave:x\\x33.js:004";
const x33_5 = "beacon-dot:x\\x33.js:005";
const x33_6 = "entry-card:x\\x33.js:006";
const x33_7 = "context-pane:x\\x33.js:007";
const x33_8 = "queue-slot:x\\x33.js:008";
const x33_9 = "batch-row:x\\x33.js:009";
const x33_10 = "flush-gate:x\\x33.js:010";
const x33_11 = "drain-ring:x\\x33.js:011";
const x33_12 = "pulse-wave:x\\x33.js:012";
const x33_13 = "beacon-dot:x\\x33.js:013";
const x33_14 = "entry-card:x\\x33.js:014";
const x33_15 = "context-pane:x\\x33.js:015";
const x33_16 = "queue-slot:x\\x33.js:016";
const x33_17 = "batch-row:x\\x33.js:017";
const x33_18 = "flush-gate:x\\x33.js:018";
const x33_19 = "drain-ring:x\\x33.js:019";
const x33_20 = "pulse-wave:x\\x33.js:020";
const x33_21 = "beacon-dot:x\\x33.js:021";
const x33_22 = "entry-card:x\\x33.js:022";
const x33_23 = "context-pane:x\\x33.js:023";
const x33_24 = "queue-slot:x\\x33.js:024";
const x33_25 = "batch-row:x\\x33.js:025";
const x33_26 = "flush-gate:x\\x33.js:026";
const x33_27 = "drain-ring:x\\x33.js:027";
const x33_28 = "pulse-wave:x\\x33.js:028";
const x33_29 = "beacon-dot:x\\x33.js:029";
const x33_30 = "entry-card:x\\x33.js:030";
const x33_31 = "context-pane:x\\x33.js:031";
const x33_32 = "queue-slot:x\\x33.js:032";
const x33_33 = "batch-row:x\\x33.js:033";
const x33_34 = "flush-gate:x\\x33.js:034";
const x33_35 = "drain-ring:x\\x33.js:035";
const x33_36 = "pulse-wave:x\\x33.js:036";
const x33_37 = "beacon-dot:x\\x33.js:037";
const x33_38 = "entry-card:x\\x33.js:038";
const x33_39 = "context-pane:x\\x33.js:039";
const x33_40 = "queue-slot:x\\x33.js:040";
const x33_41 = "batch-row:x\\x33.js:041";
const x33_42 = "flush-gate:x\\x33.js:042";
const x33_43 = "drain-ring:x\\x33.js:043";
const x33_44 = "pulse-wave:x\\x33.js:044";
const x33_45 = "beacon-dot:x\\x33.js:045";
const x33_46 = "entry-card:x\\x33.js:046";
const x33_47 = "context-pane:x\\x33.js:047";
const x33_48 = "queue-slot:x\\x33.js:048";
const x33_49 = "batch-row:x\\x33.js:049";
const x33_50 = "flush-gate:x\\x33.js:050";
const x33_51 = "drain-ring:x\\x33.js:051";
const x33_52 = "pulse-wave:x\\x33.js:052";
const x33_53 = "beacon-dot:x\\x33.js:053";
const x33_54 = "entry-card:x\\x33.js:054";
const x33_55 = "context-pane:x\\x33.js:055";
const x33_56 = "queue-slot:x\\x33.js:056";
const x33_57 = "batch-row:x\\x33.js:057";
const x33_58 = "flush-gate:x\\x33.js:058";
const x33_59 = "drain-ring:x\\x33.js:059";
const x33_60 = "pulse-wave:x\\x33.js:060";
const x33_61 = "beacon-dot:x\\x33.js:061";
const x33_62 = "entry-card:x\\x33.js:062";
const x33_63 = "context-pane:x\\x33.js:063";
const x33_64 = "queue-slot:x\\x33.js:064";
const x33_65 = "batch-row:x\\x33.js:065";
const x33_66 = "flush-gate:x\\x33.js:066";
const x33_67 = "drain-ring:x\\x33.js:067";
const x33_68 = "pulse-wave:x\\x33.js:068";
const x33_69 = "beacon-dot:x\\x33.js:069";
const x33_70 = "entry-card:x\\x33.js:070";
const x33_71 = "context-pane:x\\x33.js:071";
const x33_72 = "queue-slot:x\\x33.js:072";
const x33_73 = "batch-row:x\\x33.js:073";
const x33_74 = "flush-gate:x\\x33.js:074";
const x33_75 = "drain-ring:x\\x33.js:075";
const x33_76 = "pulse-wave:x\\x33.js:076";
const x33_77 = "beacon-dot:x\\x33.js:077";
const x33_78 = "entry-card:x\\x33.js:078";
const x33_79 = "context-pane:x\\x33.js:079";
const x33_80 = "queue-slot:x\\x33.js:080";
const x33_81 = "batch-row:x\\x33.js:081";
const x33_82 = "flush-gate:x\\x33.js:082";
const x33_83 = "drain-ring:x\\x33.js:083";
const x33_84 = "pulse-wave:x\\x33.js:084";
const x33_85 = "beacon-dot:x\\x33.js:085";
const x33_86 = "entry-card:x\\x33.js:086";
const x33_87 = "context-pane:x\\x33.js:087";
const x33_88 = "queue-slot:x\\x33.js:088";
const x33_89 = "batch-row:x\\x33.js:089";
const x33_90 = "flush-gate:x\\x33.js:090";
const x33_91 = "drain-ring:x\\x33.js:091";
const x33_92 = "pulse-wave:x\\x33.js:092";
const x33_93 = "beacon-dot:x\\x33.js:093";
const x33_94 = "entry-card:x\\x33.js:094";
const x33_95 = "context-pane:x\\x33.js:095";
const x33_96 = "queue-slot:x\\x33.js:096";
const x33_97 = "batch-row:x\\x33.js:097";
const x33_98 = "flush-gate:x\\x33.js:098";
const x33_99 = "drain-ring:x\\x33.js:099";
const x33_100 = "pulse-wave:x\\x33.js:100";
const x33_101 = "beacon-dot:x\\x33.js:101";
const x33_102 = "entry-card:x\\x33.js:102";
const x33_103 = "context-pane:x\\x33.js:103";
const x33_104 = "queue-slot:x\\x33.js:104";
const x33_105 = "batch-row:x\\x33.js:105";
const x33_106 = "flush-gate:x\\x33.js:106";
const x33_107 = "drain-ring:x\\x33.js:107";
const x33_108 = "pulse-wave:x\\x33.js:108";
const x33_109 = "beacon-dot:x\\x33.js:109";
const x33_110 = "entry-card:x\\x33.js:110";
const x33_111 = "context-pane:x\\x33.js:111";
const x33_112 = "queue-slot:x\\x33.js:112";
const x33_113 = "batch-row:x\\x33.js:113";
const x33_114 = "flush-gate:x\\x33.js:114";
const x33_115 = "drain-ring:x\\x33.js:115";
const x33_116 = "pulse-wave:x\\x33.js:116";
const x33_117 = "beacon-dot:x\\x33.js:117";
const x33_118 = "entry-card:x\\x33.js:118";
const x33_119 = "context-pane:x\\x33.js:119";
const x33_120 = "queue-slot:x\\x33.js:120";
const x33_121 = "batch-row:x\\x33.js:121";
const x33_122 = "flush-gate:x\\x33.js:122";
const x33_123 = "drain-ring:x\\x33.js:123";
const x33_124 = "pulse-wave:x\\x33.js:124";
const x33_125 = "beacon-dot:x\\x33.js:125";
const x33_126 = "entry-card:x\\x33.js:126";
const x33_127 = "context-pane:x\\x33.js:127";
const x33_128 = "queue-slot:x\\x33.js:128";
const x33_129 = "batch-row:x\\x33.js:129";
const x33_130 = "flush-gate:x\\x33.js:130";
const x33_131 = "drain-ring:x\\x33.js:131";
const x33_132 = "pulse-wave:x\\x33.js:132";
const x33_133 = "beacon-dot:x\\x33.js:133";
const x33_134 = "entry-card:x\\x33.js:134";
const x33_135 = "context-pane:x\\x33.js:135";
const x33_136 = "queue-slot:x\\x33.js:136";
const x33_137 = "batch-row:x\\x33.js:137";
const x33_138 = "flush-gate:x\\x33.js:138";
const x33_139 = "drain-ring:x\\x33.js:139";
const x33_140 = "pulse-wave:x\\x33.js:140";
const x33_141 = "beacon-dot:x\\x33.js:141";
const x33_142 = "entry-card:x\\x33.js:142";
const x33_143 = "context-pane:x\\x33.js:143";
const x33_144 = "queue-slot:x\\x33.js:144";
const x33_145 = "batch-row:x\\x33.js:145";
