import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 0,
  salt: 'b:00:track',
  order: [0, 1, 2, 3, 4, 5, 6, 7],
  sep: '\u2060',
  shift: 5,
  mask: 1013904339
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track0@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '0', y: '0', n: 1 },
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
const x00_0 = "queue-slot:x\\x00.js:000";
const x00_1 = "batch-row:x\\x00.js:001";
const x00_2 = "flush-gate:x\\x00.js:002";
const x00_3 = "drain-ring:x\\x00.js:003";
const x00_4 = "pulse-wave:x\\x00.js:004";
const x00_5 = "beacon-dot:x\\x00.js:005";
const x00_6 = "entry-card:x\\x00.js:006";
const x00_7 = "context-pane:x\\x00.js:007";
const x00_8 = "queue-slot:x\\x00.js:008";
const x00_9 = "batch-row:x\\x00.js:009";
const x00_10 = "flush-gate:x\\x00.js:010";
const x00_11 = "drain-ring:x\\x00.js:011";
const x00_12 = "pulse-wave:x\\x00.js:012";
const x00_13 = "beacon-dot:x\\x00.js:013";
const x00_14 = "entry-card:x\\x00.js:014";
const x00_15 = "context-pane:x\\x00.js:015";
const x00_16 = "queue-slot:x\\x00.js:016";
const x00_17 = "batch-row:x\\x00.js:017";
const x00_18 = "flush-gate:x\\x00.js:018";
const x00_19 = "drain-ring:x\\x00.js:019";
const x00_20 = "pulse-wave:x\\x00.js:020";
const x00_21 = "beacon-dot:x\\x00.js:021";
const x00_22 = "entry-card:x\\x00.js:022";
const x00_23 = "context-pane:x\\x00.js:023";
const x00_24 = "queue-slot:x\\x00.js:024";
const x00_25 = "batch-row:x\\x00.js:025";
const x00_26 = "flush-gate:x\\x00.js:026";
const x00_27 = "drain-ring:x\\x00.js:027";
const x00_28 = "pulse-wave:x\\x00.js:028";
const x00_29 = "beacon-dot:x\\x00.js:029";
const x00_30 = "entry-card:x\\x00.js:030";
const x00_31 = "context-pane:x\\x00.js:031";
const x00_32 = "queue-slot:x\\x00.js:032";
const x00_33 = "batch-row:x\\x00.js:033";
const x00_34 = "flush-gate:x\\x00.js:034";
const x00_35 = "drain-ring:x\\x00.js:035";
const x00_36 = "pulse-wave:x\\x00.js:036";
const x00_37 = "beacon-dot:x\\x00.js:037";
const x00_38 = "entry-card:x\\x00.js:038";
const x00_39 = "context-pane:x\\x00.js:039";
const x00_40 = "queue-slot:x\\x00.js:040";
const x00_41 = "batch-row:x\\x00.js:041";
const x00_42 = "flush-gate:x\\x00.js:042";
const x00_43 = "drain-ring:x\\x00.js:043";
const x00_44 = "pulse-wave:x\\x00.js:044";
const x00_45 = "beacon-dot:x\\x00.js:045";
const x00_46 = "entry-card:x\\x00.js:046";
const x00_47 = "context-pane:x\\x00.js:047";
const x00_48 = "queue-slot:x\\x00.js:048";
const x00_49 = "batch-row:x\\x00.js:049";
const x00_50 = "flush-gate:x\\x00.js:050";
const x00_51 = "drain-ring:x\\x00.js:051";
const x00_52 = "pulse-wave:x\\x00.js:052";
const x00_53 = "beacon-dot:x\\x00.js:053";
const x00_54 = "entry-card:x\\x00.js:054";
const x00_55 = "context-pane:x\\x00.js:055";
const x00_56 = "queue-slot:x\\x00.js:056";
const x00_57 = "batch-row:x\\x00.js:057";
const x00_58 = "flush-gate:x\\x00.js:058";
const x00_59 = "drain-ring:x\\x00.js:059";
const x00_60 = "pulse-wave:x\\x00.js:060";
const x00_61 = "beacon-dot:x\\x00.js:061";
const x00_62 = "entry-card:x\\x00.js:062";
const x00_63 = "context-pane:x\\x00.js:063";
const x00_64 = "queue-slot:x\\x00.js:064";
const x00_65 = "batch-row:x\\x00.js:065";
const x00_66 = "flush-gate:x\\x00.js:066";
const x00_67 = "drain-ring:x\\x00.js:067";
const x00_68 = "pulse-wave:x\\x00.js:068";
const x00_69 = "beacon-dot:x\\x00.js:069";
const x00_70 = "entry-card:x\\x00.js:070";
const x00_71 = "context-pane:x\\x00.js:071";
const x00_72 = "queue-slot:x\\x00.js:072";
const x00_73 = "batch-row:x\\x00.js:073";
const x00_74 = "flush-gate:x\\x00.js:074";
const x00_75 = "drain-ring:x\\x00.js:075";
const x00_76 = "pulse-wave:x\\x00.js:076";
const x00_77 = "beacon-dot:x\\x00.js:077";
const x00_78 = "entry-card:x\\x00.js:078";
const x00_79 = "context-pane:x\\x00.js:079";
const x00_80 = "queue-slot:x\\x00.js:080";
const x00_81 = "batch-row:x\\x00.js:081";
const x00_82 = "flush-gate:x\\x00.js:082";
const x00_83 = "drain-ring:x\\x00.js:083";
const x00_84 = "pulse-wave:x\\x00.js:084";
const x00_85 = "beacon-dot:x\\x00.js:085";
const x00_86 = "entry-card:x\\x00.js:086";
const x00_87 = "context-pane:x\\x00.js:087";
const x00_88 = "queue-slot:x\\x00.js:088";
const x00_89 = "batch-row:x\\x00.js:089";
const x00_90 = "flush-gate:x\\x00.js:090";
const x00_91 = "drain-ring:x\\x00.js:091";
const x00_92 = "pulse-wave:x\\x00.js:092";
const x00_93 = "beacon-dot:x\\x00.js:093";
const x00_94 = "entry-card:x\\x00.js:094";
const x00_95 = "context-pane:x\\x00.js:095";
const x00_96 = "queue-slot:x\\x00.js:096";
const x00_97 = "batch-row:x\\x00.js:097";
const x00_98 = "flush-gate:x\\x00.js:098";
const x00_99 = "drain-ring:x\\x00.js:099";
const x00_100 = "pulse-wave:x\\x00.js:100";
const x00_101 = "beacon-dot:x\\x00.js:101";
const x00_102 = "entry-card:x\\x00.js:102";
const x00_103 = "context-pane:x\\x00.js:103";
const x00_104 = "queue-slot:x\\x00.js:104";
const x00_105 = "batch-row:x\\x00.js:105";
const x00_106 = "flush-gate:x\\x00.js:106";
const x00_107 = "drain-ring:x\\x00.js:107";
const x00_108 = "pulse-wave:x\\x00.js:108";
const x00_109 = "beacon-dot:x\\x00.js:109";
const x00_110 = "entry-card:x\\x00.js:110";
const x00_111 = "context-pane:x\\x00.js:111";
const x00_112 = "queue-slot:x\\x00.js:112";
const x00_113 = "batch-row:x\\x00.js:113";
const x00_114 = "flush-gate:x\\x00.js:114";
const x00_115 = "drain-ring:x\\x00.js:115";
const x00_116 = "pulse-wave:x\\x00.js:116";
const x00_117 = "beacon-dot:x\\x00.js:117";
const x00_118 = "entry-card:x\\x00.js:118";
const x00_119 = "context-pane:x\\x00.js:119";
const x00_120 = "queue-slot:x\\x00.js:120";
const x00_121 = "batch-row:x\\x00.js:121";
const x00_122 = "flush-gate:x\\x00.js:122";
const x00_123 = "drain-ring:x\\x00.js:123";
const x00_124 = "pulse-wave:x\\x00.js:124";
const x00_125 = "beacon-dot:x\\x00.js:125";
const x00_126 = "entry-card:x\\x00.js:126";
const x00_127 = "context-pane:x\\x00.js:127";
const x00_128 = "queue-slot:x\\x00.js:128";
const x00_129 = "batch-row:x\\x00.js:129";
const x00_130 = "flush-gate:x\\x00.js:130";
const x00_131 = "drain-ring:x\\x00.js:131";
const x00_132 = "pulse-wave:x\\x00.js:132";
const x00_133 = "beacon-dot:x\\x00.js:133";
const x00_134 = "entry-card:x\\x00.js:134";
const x00_135 = "context-pane:x\\x00.js:135";
const x00_136 = "queue-slot:x\\x00.js:136";
const x00_137 = "batch-row:x\\x00.js:137";
const x00_138 = "flush-gate:x\\x00.js:138";
const x00_139 = "drain-ring:x\\x00.js:139";
const x00_140 = "pulse-wave:x\\x00.js:140";
const x00_141 = "beacon-dot:x\\x00.js:141";
const x00_142 = "entry-card:x\\x00.js:142";
const x00_143 = "context-pane:x\\x00.js:143";
const x00_144 = "queue-slot:x\\x00.js:144";
const x00_145 = "batch-row:x\\x00.js:145";
