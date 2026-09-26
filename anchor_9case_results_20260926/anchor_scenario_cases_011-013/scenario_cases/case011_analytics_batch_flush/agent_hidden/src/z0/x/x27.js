import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 27,
  salt: 'b:0r:track',
  order: [3, 4, 5, 6, 7, 0, 1, 2],
  sep: '\u2063',
  shift: 11,
  mask: 3964193150
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track27@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x27_0 = "queue-slot:x\\x27.js:000";
const x27_1 = "batch-row:x\\x27.js:001";
const x27_2 = "flush-gate:x\\x27.js:002";
const x27_3 = "drain-ring:x\\x27.js:003";
const x27_4 = "pulse-wave:x\\x27.js:004";
const x27_5 = "beacon-dot:x\\x27.js:005";
const x27_6 = "entry-card:x\\x27.js:006";
const x27_7 = "context-pane:x\\x27.js:007";
const x27_8 = "queue-slot:x\\x27.js:008";
const x27_9 = "batch-row:x\\x27.js:009";
const x27_10 = "flush-gate:x\\x27.js:010";
const x27_11 = "drain-ring:x\\x27.js:011";
const x27_12 = "pulse-wave:x\\x27.js:012";
const x27_13 = "beacon-dot:x\\x27.js:013";
const x27_14 = "entry-card:x\\x27.js:014";
const x27_15 = "context-pane:x\\x27.js:015";
const x27_16 = "queue-slot:x\\x27.js:016";
const x27_17 = "batch-row:x\\x27.js:017";
const x27_18 = "flush-gate:x\\x27.js:018";
const x27_19 = "drain-ring:x\\x27.js:019";
const x27_20 = "pulse-wave:x\\x27.js:020";
const x27_21 = "beacon-dot:x\\x27.js:021";
const x27_22 = "entry-card:x\\x27.js:022";
const x27_23 = "context-pane:x\\x27.js:023";
const x27_24 = "queue-slot:x\\x27.js:024";
const x27_25 = "batch-row:x\\x27.js:025";
const x27_26 = "flush-gate:x\\x27.js:026";
const x27_27 = "drain-ring:x\\x27.js:027";
const x27_28 = "pulse-wave:x\\x27.js:028";
const x27_29 = "beacon-dot:x\\x27.js:029";
const x27_30 = "entry-card:x\\x27.js:030";
const x27_31 = "context-pane:x\\x27.js:031";
const x27_32 = "queue-slot:x\\x27.js:032";
const x27_33 = "batch-row:x\\x27.js:033";
const x27_34 = "flush-gate:x\\x27.js:034";
const x27_35 = "drain-ring:x\\x27.js:035";
const x27_36 = "pulse-wave:x\\x27.js:036";
const x27_37 = "beacon-dot:x\\x27.js:037";
const x27_38 = "entry-card:x\\x27.js:038";
const x27_39 = "context-pane:x\\x27.js:039";
const x27_40 = "queue-slot:x\\x27.js:040";
const x27_41 = "batch-row:x\\x27.js:041";
const x27_42 = "flush-gate:x\\x27.js:042";
const x27_43 = "drain-ring:x\\x27.js:043";
const x27_44 = "pulse-wave:x\\x27.js:044";
const x27_45 = "beacon-dot:x\\x27.js:045";
const x27_46 = "entry-card:x\\x27.js:046";
const x27_47 = "context-pane:x\\x27.js:047";
const x27_48 = "queue-slot:x\\x27.js:048";
const x27_49 = "batch-row:x\\x27.js:049";
const x27_50 = "flush-gate:x\\x27.js:050";
const x27_51 = "drain-ring:x\\x27.js:051";
const x27_52 = "pulse-wave:x\\x27.js:052";
const x27_53 = "beacon-dot:x\\x27.js:053";
const x27_54 = "entry-card:x\\x27.js:054";
const x27_55 = "context-pane:x\\x27.js:055";
const x27_56 = "queue-slot:x\\x27.js:056";
const x27_57 = "batch-row:x\\x27.js:057";
const x27_58 = "flush-gate:x\\x27.js:058";
const x27_59 = "drain-ring:x\\x27.js:059";
const x27_60 = "pulse-wave:x\\x27.js:060";
const x27_61 = "beacon-dot:x\\x27.js:061";
const x27_62 = "entry-card:x\\x27.js:062";
const x27_63 = "context-pane:x\\x27.js:063";
const x27_64 = "queue-slot:x\\x27.js:064";
const x27_65 = "batch-row:x\\x27.js:065";
const x27_66 = "flush-gate:x\\x27.js:066";
const x27_67 = "drain-ring:x\\x27.js:067";
const x27_68 = "pulse-wave:x\\x27.js:068";
const x27_69 = "beacon-dot:x\\x27.js:069";
const x27_70 = "entry-card:x\\x27.js:070";
const x27_71 = "context-pane:x\\x27.js:071";
const x27_72 = "queue-slot:x\\x27.js:072";
const x27_73 = "batch-row:x\\x27.js:073";
const x27_74 = "flush-gate:x\\x27.js:074";
const x27_75 = "drain-ring:x\\x27.js:075";
const x27_76 = "pulse-wave:x\\x27.js:076";
const x27_77 = "beacon-dot:x\\x27.js:077";
const x27_78 = "entry-card:x\\x27.js:078";
const x27_79 = "context-pane:x\\x27.js:079";
const x27_80 = "queue-slot:x\\x27.js:080";
const x27_81 = "batch-row:x\\x27.js:081";
const x27_82 = "flush-gate:x\\x27.js:082";
const x27_83 = "drain-ring:x\\x27.js:083";
const x27_84 = "pulse-wave:x\\x27.js:084";
const x27_85 = "beacon-dot:x\\x27.js:085";
const x27_86 = "entry-card:x\\x27.js:086";
const x27_87 = "context-pane:x\\x27.js:087";
const x27_88 = "queue-slot:x\\x27.js:088";
const x27_89 = "batch-row:x\\x27.js:089";
const x27_90 = "flush-gate:x\\x27.js:090";
const x27_91 = "drain-ring:x\\x27.js:091";
const x27_92 = "pulse-wave:x\\x27.js:092";
const x27_93 = "beacon-dot:x\\x27.js:093";
const x27_94 = "entry-card:x\\x27.js:094";
const x27_95 = "context-pane:x\\x27.js:095";
const x27_96 = "queue-slot:x\\x27.js:096";
const x27_97 = "batch-row:x\\x27.js:097";
const x27_98 = "flush-gate:x\\x27.js:098";
const x27_99 = "drain-ring:x\\x27.js:099";
const x27_100 = "pulse-wave:x\\x27.js:100";
const x27_101 = "beacon-dot:x\\x27.js:101";
const x27_102 = "entry-card:x\\x27.js:102";
const x27_103 = "context-pane:x\\x27.js:103";
const x27_104 = "queue-slot:x\\x27.js:104";
const x27_105 = "batch-row:x\\x27.js:105";
const x27_106 = "flush-gate:x\\x27.js:106";
const x27_107 = "drain-ring:x\\x27.js:107";
const x27_108 = "pulse-wave:x\\x27.js:108";
const x27_109 = "beacon-dot:x\\x27.js:109";
const x27_110 = "entry-card:x\\x27.js:110";
const x27_111 = "context-pane:x\\x27.js:111";
const x27_112 = "queue-slot:x\\x27.js:112";
const x27_113 = "batch-row:x\\x27.js:113";
const x27_114 = "flush-gate:x\\x27.js:114";
const x27_115 = "drain-ring:x\\x27.js:115";
const x27_116 = "pulse-wave:x\\x27.js:116";
const x27_117 = "beacon-dot:x\\x27.js:117";
const x27_118 = "entry-card:x\\x27.js:118";
const x27_119 = "context-pane:x\\x27.js:119";
const x27_120 = "queue-slot:x\\x27.js:120";
const x27_121 = "batch-row:x\\x27.js:121";
const x27_122 = "flush-gate:x\\x27.js:122";
const x27_123 = "drain-ring:x\\x27.js:123";
const x27_124 = "pulse-wave:x\\x27.js:124";
const x27_125 = "beacon-dot:x\\x27.js:125";
const x27_126 = "entry-card:x\\x27.js:126";
const x27_127 = "context-pane:x\\x27.js:127";
const x27_128 = "queue-slot:x\\x27.js:128";
const x27_129 = "batch-row:x\\x27.js:129";
const x27_130 = "flush-gate:x\\x27.js:130";
const x27_131 = "drain-ring:x\\x27.js:131";
const x27_132 = "pulse-wave:x\\x27.js:132";
const x27_133 = "beacon-dot:x\\x27.js:133";
const x27_134 = "entry-card:x\\x27.js:134";
const x27_135 = "context-pane:x\\x27.js:135";
const x27_136 = "queue-slot:x\\x27.js:136";
const x27_137 = "batch-row:x\\x27.js:137";
const x27_138 = "flush-gate:x\\x27.js:138";
const x27_139 = "drain-ring:x\\x27.js:139";
const x27_140 = "pulse-wave:x\\x27.js:140";
const x27_141 = "beacon-dot:x\\x27.js:141";
const x27_142 = "entry-card:x\\x27.js:142";
const x27_143 = "context-pane:x\\x27.js:143";
const x27_144 = "queue-slot:x\\x27.js:144";
const x27_145 = "batch-row:x\\x27.js:145";
