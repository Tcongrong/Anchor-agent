import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 13,
  salt: 'b:0d:track',
  order: [5, 6, 7, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 11,
  mask: 1161830864
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot13@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x13_0 = "queue-slot:x\\x13.js:000";
const x13_1 = "batch-row:x\\x13.js:001";
const x13_2 = "flush-gate:x\\x13.js:002";
const x13_3 = "drain-ring:x\\x13.js:003";
const x13_4 = "pulse-wave:x\\x13.js:004";
const x13_5 = "beacon-dot:x\\x13.js:005";
const x13_6 = "entry-card:x\\x13.js:006";
const x13_7 = "context-pane:x\\x13.js:007";
const x13_8 = "queue-slot:x\\x13.js:008";
const x13_9 = "batch-row:x\\x13.js:009";
const x13_10 = "flush-gate:x\\x13.js:010";
const x13_11 = "drain-ring:x\\x13.js:011";
const x13_12 = "pulse-wave:x\\x13.js:012";
const x13_13 = "beacon-dot:x\\x13.js:013";
const x13_14 = "entry-card:x\\x13.js:014";
const x13_15 = "context-pane:x\\x13.js:015";
const x13_16 = "queue-slot:x\\x13.js:016";
const x13_17 = "batch-row:x\\x13.js:017";
const x13_18 = "flush-gate:x\\x13.js:018";
const x13_19 = "drain-ring:x\\x13.js:019";
const x13_20 = "pulse-wave:x\\x13.js:020";
const x13_21 = "beacon-dot:x\\x13.js:021";
const x13_22 = "entry-card:x\\x13.js:022";
const x13_23 = "context-pane:x\\x13.js:023";
const x13_24 = "queue-slot:x\\x13.js:024";
const x13_25 = "batch-row:x\\x13.js:025";
const x13_26 = "flush-gate:x\\x13.js:026";
const x13_27 = "drain-ring:x\\x13.js:027";
const x13_28 = "pulse-wave:x\\x13.js:028";
const x13_29 = "beacon-dot:x\\x13.js:029";
const x13_30 = "entry-card:x\\x13.js:030";
const x13_31 = "context-pane:x\\x13.js:031";
const x13_32 = "queue-slot:x\\x13.js:032";
const x13_33 = "batch-row:x\\x13.js:033";
const x13_34 = "flush-gate:x\\x13.js:034";
const x13_35 = "drain-ring:x\\x13.js:035";
const x13_36 = "pulse-wave:x\\x13.js:036";
const x13_37 = "beacon-dot:x\\x13.js:037";
const x13_38 = "entry-card:x\\x13.js:038";
const x13_39 = "context-pane:x\\x13.js:039";
const x13_40 = "queue-slot:x\\x13.js:040";
const x13_41 = "batch-row:x\\x13.js:041";
const x13_42 = "flush-gate:x\\x13.js:042";
const x13_43 = "drain-ring:x\\x13.js:043";
const x13_44 = "pulse-wave:x\\x13.js:044";
const x13_45 = "beacon-dot:x\\x13.js:045";
const x13_46 = "entry-card:x\\x13.js:046";
const x13_47 = "context-pane:x\\x13.js:047";
const x13_48 = "queue-slot:x\\x13.js:048";
const x13_49 = "batch-row:x\\x13.js:049";
const x13_50 = "flush-gate:x\\x13.js:050";
const x13_51 = "drain-ring:x\\x13.js:051";
const x13_52 = "pulse-wave:x\\x13.js:052";
const x13_53 = "beacon-dot:x\\x13.js:053";
const x13_54 = "entry-card:x\\x13.js:054";
const x13_55 = "context-pane:x\\x13.js:055";
const x13_56 = "queue-slot:x\\x13.js:056";
const x13_57 = "batch-row:x\\x13.js:057";
const x13_58 = "flush-gate:x\\x13.js:058";
const x13_59 = "drain-ring:x\\x13.js:059";
const x13_60 = "pulse-wave:x\\x13.js:060";
const x13_61 = "beacon-dot:x\\x13.js:061";
const x13_62 = "entry-card:x\\x13.js:062";
const x13_63 = "context-pane:x\\x13.js:063";
const x13_64 = "queue-slot:x\\x13.js:064";
const x13_65 = "batch-row:x\\x13.js:065";
const x13_66 = "flush-gate:x\\x13.js:066";
const x13_67 = "drain-ring:x\\x13.js:067";
const x13_68 = "pulse-wave:x\\x13.js:068";
const x13_69 = "beacon-dot:x\\x13.js:069";
const x13_70 = "entry-card:x\\x13.js:070";
const x13_71 = "context-pane:x\\x13.js:071";
const x13_72 = "queue-slot:x\\x13.js:072";
const x13_73 = "batch-row:x\\x13.js:073";
const x13_74 = "flush-gate:x\\x13.js:074";
const x13_75 = "drain-ring:x\\x13.js:075";
const x13_76 = "pulse-wave:x\\x13.js:076";
const x13_77 = "beacon-dot:x\\x13.js:077";
const x13_78 = "entry-card:x\\x13.js:078";
const x13_79 = "context-pane:x\\x13.js:079";
const x13_80 = "queue-slot:x\\x13.js:080";
const x13_81 = "batch-row:x\\x13.js:081";
const x13_82 = "flush-gate:x\\x13.js:082";
const x13_83 = "drain-ring:x\\x13.js:083";
const x13_84 = "pulse-wave:x\\x13.js:084";
const x13_85 = "beacon-dot:x\\x13.js:085";
const x13_86 = "entry-card:x\\x13.js:086";
const x13_87 = "context-pane:x\\x13.js:087";
const x13_88 = "queue-slot:x\\x13.js:088";
const x13_89 = "batch-row:x\\x13.js:089";
const x13_90 = "flush-gate:x\\x13.js:090";
const x13_91 = "drain-ring:x\\x13.js:091";
const x13_92 = "pulse-wave:x\\x13.js:092";
const x13_93 = "beacon-dot:x\\x13.js:093";
const x13_94 = "entry-card:x\\x13.js:094";
const x13_95 = "context-pane:x\\x13.js:095";
const x13_96 = "queue-slot:x\\x13.js:096";
const x13_97 = "batch-row:x\\x13.js:097";
const x13_98 = "flush-gate:x\\x13.js:098";
const x13_99 = "drain-ring:x\\x13.js:099";
const x13_100 = "pulse-wave:x\\x13.js:100";
const x13_101 = "beacon-dot:x\\x13.js:101";
const x13_102 = "entry-card:x\\x13.js:102";
const x13_103 = "context-pane:x\\x13.js:103";
const x13_104 = "queue-slot:x\\x13.js:104";
const x13_105 = "batch-row:x\\x13.js:105";
const x13_106 = "flush-gate:x\\x13.js:106";
const x13_107 = "drain-ring:x\\x13.js:107";
const x13_108 = "pulse-wave:x\\x13.js:108";
const x13_109 = "beacon-dot:x\\x13.js:109";
const x13_110 = "entry-card:x\\x13.js:110";
const x13_111 = "context-pane:x\\x13.js:111";
const x13_112 = "queue-slot:x\\x13.js:112";
const x13_113 = "batch-row:x\\x13.js:113";
const x13_114 = "flush-gate:x\\x13.js:114";
const x13_115 = "drain-ring:x\\x13.js:115";
const x13_116 = "pulse-wave:x\\x13.js:116";
const x13_117 = "beacon-dot:x\\x13.js:117";
const x13_118 = "entry-card:x\\x13.js:118";
const x13_119 = "context-pane:x\\x13.js:119";
const x13_120 = "queue-slot:x\\x13.js:120";
const x13_121 = "batch-row:x\\x13.js:121";
const x13_122 = "flush-gate:x\\x13.js:122";
const x13_123 = "drain-ring:x\\x13.js:123";
const x13_124 = "pulse-wave:x\\x13.js:124";
const x13_125 = "beacon-dot:x\\x13.js:125";
const x13_126 = "entry-card:x\\x13.js:126";
const x13_127 = "context-pane:x\\x13.js:127";
const x13_128 = "queue-slot:x\\x13.js:128";
const x13_129 = "batch-row:x\\x13.js:129";
const x13_130 = "flush-gate:x\\x13.js:130";
const x13_131 = "drain-ring:x\\x13.js:131";
const x13_132 = "pulse-wave:x\\x13.js:132";
const x13_133 = "beacon-dot:x\\x13.js:133";
const x13_134 = "entry-card:x\\x13.js:134";
const x13_135 = "context-pane:x\\x13.js:135";
const x13_136 = "queue-slot:x\\x13.js:136";
const x13_137 = "batch-row:x\\x13.js:137";
const x13_138 = "flush-gate:x\\x13.js:138";
const x13_139 = "drain-ring:x\\x13.js:139";
const x13_140 = "pulse-wave:x\\x13.js:140";
const x13_141 = "beacon-dot:x\\x13.js:141";
const x13_142 = "entry-card:x\\x13.js:142";
const x13_143 = "context-pane:x\\x13.js:143";
const x13_144 = "queue-slot:x\\x13.js:144";
const x13_145 = "batch-row:x\\x13.js:145";
