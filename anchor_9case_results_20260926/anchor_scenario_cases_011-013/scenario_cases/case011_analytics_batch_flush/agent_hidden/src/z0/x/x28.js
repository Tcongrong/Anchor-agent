import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 28,
  salt: 'b:0s:track',
  order: [4, 5, 6, 7, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 5,
  mask: 2323661615
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot28@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
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
const x28_0 = "queue-slot:x\\x28.js:000";
const x28_1 = "batch-row:x\\x28.js:001";
const x28_2 = "flush-gate:x\\x28.js:002";
const x28_3 = "drain-ring:x\\x28.js:003";
const x28_4 = "pulse-wave:x\\x28.js:004";
const x28_5 = "beacon-dot:x\\x28.js:005";
const x28_6 = "entry-card:x\\x28.js:006";
const x28_7 = "context-pane:x\\x28.js:007";
const x28_8 = "queue-slot:x\\x28.js:008";
const x28_9 = "batch-row:x\\x28.js:009";
const x28_10 = "flush-gate:x\\x28.js:010";
const x28_11 = "drain-ring:x\\x28.js:011";
const x28_12 = "pulse-wave:x\\x28.js:012";
const x28_13 = "beacon-dot:x\\x28.js:013";
const x28_14 = "entry-card:x\\x28.js:014";
const x28_15 = "context-pane:x\\x28.js:015";
const x28_16 = "queue-slot:x\\x28.js:016";
const x28_17 = "batch-row:x\\x28.js:017";
const x28_18 = "flush-gate:x\\x28.js:018";
const x28_19 = "drain-ring:x\\x28.js:019";
const x28_20 = "pulse-wave:x\\x28.js:020";
const x28_21 = "beacon-dot:x\\x28.js:021";
const x28_22 = "entry-card:x\\x28.js:022";
const x28_23 = "context-pane:x\\x28.js:023";
const x28_24 = "queue-slot:x\\x28.js:024";
const x28_25 = "batch-row:x\\x28.js:025";
const x28_26 = "flush-gate:x\\x28.js:026";
const x28_27 = "drain-ring:x\\x28.js:027";
const x28_28 = "pulse-wave:x\\x28.js:028";
const x28_29 = "beacon-dot:x\\x28.js:029";
const x28_30 = "entry-card:x\\x28.js:030";
const x28_31 = "context-pane:x\\x28.js:031";
const x28_32 = "queue-slot:x\\x28.js:032";
const x28_33 = "batch-row:x\\x28.js:033";
const x28_34 = "flush-gate:x\\x28.js:034";
const x28_35 = "drain-ring:x\\x28.js:035";
const x28_36 = "pulse-wave:x\\x28.js:036";
const x28_37 = "beacon-dot:x\\x28.js:037";
const x28_38 = "entry-card:x\\x28.js:038";
const x28_39 = "context-pane:x\\x28.js:039";
const x28_40 = "queue-slot:x\\x28.js:040";
const x28_41 = "batch-row:x\\x28.js:041";
const x28_42 = "flush-gate:x\\x28.js:042";
const x28_43 = "drain-ring:x\\x28.js:043";
const x28_44 = "pulse-wave:x\\x28.js:044";
const x28_45 = "beacon-dot:x\\x28.js:045";
const x28_46 = "entry-card:x\\x28.js:046";
const x28_47 = "context-pane:x\\x28.js:047";
const x28_48 = "queue-slot:x\\x28.js:048";
const x28_49 = "batch-row:x\\x28.js:049";
const x28_50 = "flush-gate:x\\x28.js:050";
const x28_51 = "drain-ring:x\\x28.js:051";
const x28_52 = "pulse-wave:x\\x28.js:052";
const x28_53 = "beacon-dot:x\\x28.js:053";
const x28_54 = "entry-card:x\\x28.js:054";
const x28_55 = "context-pane:x\\x28.js:055";
const x28_56 = "queue-slot:x\\x28.js:056";
const x28_57 = "batch-row:x\\x28.js:057";
const x28_58 = "flush-gate:x\\x28.js:058";
const x28_59 = "drain-ring:x\\x28.js:059";
const x28_60 = "pulse-wave:x\\x28.js:060";
const x28_61 = "beacon-dot:x\\x28.js:061";
const x28_62 = "entry-card:x\\x28.js:062";
const x28_63 = "context-pane:x\\x28.js:063";
const x28_64 = "queue-slot:x\\x28.js:064";
const x28_65 = "batch-row:x\\x28.js:065";
const x28_66 = "flush-gate:x\\x28.js:066";
const x28_67 = "drain-ring:x\\x28.js:067";
const x28_68 = "pulse-wave:x\\x28.js:068";
const x28_69 = "beacon-dot:x\\x28.js:069";
const x28_70 = "entry-card:x\\x28.js:070";
const x28_71 = "context-pane:x\\x28.js:071";
const x28_72 = "queue-slot:x\\x28.js:072";
const x28_73 = "batch-row:x\\x28.js:073";
const x28_74 = "flush-gate:x\\x28.js:074";
const x28_75 = "drain-ring:x\\x28.js:075";
const x28_76 = "pulse-wave:x\\x28.js:076";
const x28_77 = "beacon-dot:x\\x28.js:077";
const x28_78 = "entry-card:x\\x28.js:078";
const x28_79 = "context-pane:x\\x28.js:079";
const x28_80 = "queue-slot:x\\x28.js:080";
const x28_81 = "batch-row:x\\x28.js:081";
const x28_82 = "flush-gate:x\\x28.js:082";
const x28_83 = "drain-ring:x\\x28.js:083";
const x28_84 = "pulse-wave:x\\x28.js:084";
const x28_85 = "beacon-dot:x\\x28.js:085";
const x28_86 = "entry-card:x\\x28.js:086";
const x28_87 = "context-pane:x\\x28.js:087";
const x28_88 = "queue-slot:x\\x28.js:088";
const x28_89 = "batch-row:x\\x28.js:089";
const x28_90 = "flush-gate:x\\x28.js:090";
const x28_91 = "drain-ring:x\\x28.js:091";
const x28_92 = "pulse-wave:x\\x28.js:092";
const x28_93 = "beacon-dot:x\\x28.js:093";
const x28_94 = "entry-card:x\\x28.js:094";
const x28_95 = "context-pane:x\\x28.js:095";
const x28_96 = "queue-slot:x\\x28.js:096";
const x28_97 = "batch-row:x\\x28.js:097";
const x28_98 = "flush-gate:x\\x28.js:098";
const x28_99 = "drain-ring:x\\x28.js:099";
const x28_100 = "pulse-wave:x\\x28.js:100";
const x28_101 = "beacon-dot:x\\x28.js:101";
const x28_102 = "entry-card:x\\x28.js:102";
const x28_103 = "context-pane:x\\x28.js:103";
const x28_104 = "queue-slot:x\\x28.js:104";
const x28_105 = "batch-row:x\\x28.js:105";
const x28_106 = "flush-gate:x\\x28.js:106";
const x28_107 = "drain-ring:x\\x28.js:107";
const x28_108 = "pulse-wave:x\\x28.js:108";
const x28_109 = "beacon-dot:x\\x28.js:109";
const x28_110 = "entry-card:x\\x28.js:110";
const x28_111 = "context-pane:x\\x28.js:111";
const x28_112 = "queue-slot:x\\x28.js:112";
const x28_113 = "batch-row:x\\x28.js:113";
const x28_114 = "flush-gate:x\\x28.js:114";
const x28_115 = "drain-ring:x\\x28.js:115";
const x28_116 = "pulse-wave:x\\x28.js:116";
const x28_117 = "beacon-dot:x\\x28.js:117";
const x28_118 = "entry-card:x\\x28.js:118";
const x28_119 = "context-pane:x\\x28.js:119";
const x28_120 = "queue-slot:x\\x28.js:120";
const x28_121 = "batch-row:x\\x28.js:121";
const x28_122 = "flush-gate:x\\x28.js:122";
const x28_123 = "drain-ring:x\\x28.js:123";
const x28_124 = "pulse-wave:x\\x28.js:124";
const x28_125 = "beacon-dot:x\\x28.js:125";
const x28_126 = "entry-card:x\\x28.js:126";
const x28_127 = "context-pane:x\\x28.js:127";
const x28_128 = "queue-slot:x\\x28.js:128";
const x28_129 = "batch-row:x\\x28.js:129";
const x28_130 = "flush-gate:x\\x28.js:130";
const x28_131 = "drain-ring:x\\x28.js:131";
const x28_132 = "pulse-wave:x\\x28.js:132";
const x28_133 = "beacon-dot:x\\x28.js:133";
const x28_134 = "entry-card:x\\x28.js:134";
const x28_135 = "context-pane:x\\x28.js:135";
const x28_136 = "queue-slot:x\\x28.js:136";
const x28_137 = "batch-row:x\\x28.js:137";
const x28_138 = "flush-gate:x\\x28.js:138";
const x28_139 = "drain-ring:x\\x28.js:139";
const x28_140 = "pulse-wave:x\\x28.js:140";
const x28_141 = "beacon-dot:x\\x28.js:141";
const x28_142 = "entry-card:x\\x28.js:142";
const x28_143 = "context-pane:x\\x28.js:143";
const x28_144 = "queue-slot:x\\x28.js:144";
const x28_145 = "batch-row:x\\x28.js:145";
