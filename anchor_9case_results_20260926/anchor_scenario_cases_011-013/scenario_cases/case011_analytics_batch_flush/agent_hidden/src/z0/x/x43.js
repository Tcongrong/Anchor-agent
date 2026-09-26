import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 43,
  salt: 'b:17:track',
  order: [3, 4, 5, 6, 7, 0, 1, 2],
  sep: '\u2063',
  shift: 6,
  mask: 3485492366
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot43@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
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
const x43_0 = "queue-slot:x\\x43.js:000";
const x43_1 = "batch-row:x\\x43.js:001";
const x43_2 = "flush-gate:x\\x43.js:002";
const x43_3 = "drain-ring:x\\x43.js:003";
const x43_4 = "pulse-wave:x\\x43.js:004";
const x43_5 = "beacon-dot:x\\x43.js:005";
const x43_6 = "entry-card:x\\x43.js:006";
const x43_7 = "context-pane:x\\x43.js:007";
const x43_8 = "queue-slot:x\\x43.js:008";
const x43_9 = "batch-row:x\\x43.js:009";
const x43_10 = "flush-gate:x\\x43.js:010";
const x43_11 = "drain-ring:x\\x43.js:011";
const x43_12 = "pulse-wave:x\\x43.js:012";
const x43_13 = "beacon-dot:x\\x43.js:013";
const x43_14 = "entry-card:x\\x43.js:014";
const x43_15 = "context-pane:x\\x43.js:015";
const x43_16 = "queue-slot:x\\x43.js:016";
const x43_17 = "batch-row:x\\x43.js:017";
const x43_18 = "flush-gate:x\\x43.js:018";
const x43_19 = "drain-ring:x\\x43.js:019";
const x43_20 = "pulse-wave:x\\x43.js:020";
const x43_21 = "beacon-dot:x\\x43.js:021";
const x43_22 = "entry-card:x\\x43.js:022";
const x43_23 = "context-pane:x\\x43.js:023";
const x43_24 = "queue-slot:x\\x43.js:024";
const x43_25 = "batch-row:x\\x43.js:025";
const x43_26 = "flush-gate:x\\x43.js:026";
const x43_27 = "drain-ring:x\\x43.js:027";
const x43_28 = "pulse-wave:x\\x43.js:028";
const x43_29 = "beacon-dot:x\\x43.js:029";
const x43_30 = "entry-card:x\\x43.js:030";
const x43_31 = "context-pane:x\\x43.js:031";
const x43_32 = "queue-slot:x\\x43.js:032";
const x43_33 = "batch-row:x\\x43.js:033";
const x43_34 = "flush-gate:x\\x43.js:034";
const x43_35 = "drain-ring:x\\x43.js:035";
const x43_36 = "pulse-wave:x\\x43.js:036";
const x43_37 = "beacon-dot:x\\x43.js:037";
const x43_38 = "entry-card:x\\x43.js:038";
const x43_39 = "context-pane:x\\x43.js:039";
const x43_40 = "queue-slot:x\\x43.js:040";
const x43_41 = "batch-row:x\\x43.js:041";
const x43_42 = "flush-gate:x\\x43.js:042";
const x43_43 = "drain-ring:x\\x43.js:043";
const x43_44 = "pulse-wave:x\\x43.js:044";
const x43_45 = "beacon-dot:x\\x43.js:045";
const x43_46 = "entry-card:x\\x43.js:046";
const x43_47 = "context-pane:x\\x43.js:047";
const x43_48 = "queue-slot:x\\x43.js:048";
const x43_49 = "batch-row:x\\x43.js:049";
const x43_50 = "flush-gate:x\\x43.js:050";
const x43_51 = "drain-ring:x\\x43.js:051";
const x43_52 = "pulse-wave:x\\x43.js:052";
const x43_53 = "beacon-dot:x\\x43.js:053";
const x43_54 = "entry-card:x\\x43.js:054";
const x43_55 = "context-pane:x\\x43.js:055";
const x43_56 = "queue-slot:x\\x43.js:056";
const x43_57 = "batch-row:x\\x43.js:057";
const x43_58 = "flush-gate:x\\x43.js:058";
const x43_59 = "drain-ring:x\\x43.js:059";
const x43_60 = "pulse-wave:x\\x43.js:060";
const x43_61 = "beacon-dot:x\\x43.js:061";
const x43_62 = "entry-card:x\\x43.js:062";
const x43_63 = "context-pane:x\\x43.js:063";
const x43_64 = "queue-slot:x\\x43.js:064";
const x43_65 = "batch-row:x\\x43.js:065";
const x43_66 = "flush-gate:x\\x43.js:066";
const x43_67 = "drain-ring:x\\x43.js:067";
const x43_68 = "pulse-wave:x\\x43.js:068";
const x43_69 = "beacon-dot:x\\x43.js:069";
const x43_70 = "entry-card:x\\x43.js:070";
const x43_71 = "context-pane:x\\x43.js:071";
const x43_72 = "queue-slot:x\\x43.js:072";
const x43_73 = "batch-row:x\\x43.js:073";
const x43_74 = "flush-gate:x\\x43.js:074";
const x43_75 = "drain-ring:x\\x43.js:075";
const x43_76 = "pulse-wave:x\\x43.js:076";
const x43_77 = "beacon-dot:x\\x43.js:077";
const x43_78 = "entry-card:x\\x43.js:078";
const x43_79 = "context-pane:x\\x43.js:079";
const x43_80 = "queue-slot:x\\x43.js:080";
const x43_81 = "batch-row:x\\x43.js:081";
const x43_82 = "flush-gate:x\\x43.js:082";
const x43_83 = "drain-ring:x\\x43.js:083";
const x43_84 = "pulse-wave:x\\x43.js:084";
const x43_85 = "beacon-dot:x\\x43.js:085";
const x43_86 = "entry-card:x\\x43.js:086";
const x43_87 = "context-pane:x\\x43.js:087";
const x43_88 = "queue-slot:x\\x43.js:088";
const x43_89 = "batch-row:x\\x43.js:089";
const x43_90 = "flush-gate:x\\x43.js:090";
const x43_91 = "drain-ring:x\\x43.js:091";
const x43_92 = "pulse-wave:x\\x43.js:092";
const x43_93 = "beacon-dot:x\\x43.js:093";
const x43_94 = "entry-card:x\\x43.js:094";
const x43_95 = "context-pane:x\\x43.js:095";
const x43_96 = "queue-slot:x\\x43.js:096";
const x43_97 = "batch-row:x\\x43.js:097";
const x43_98 = "flush-gate:x\\x43.js:098";
const x43_99 = "drain-ring:x\\x43.js:099";
const x43_100 = "pulse-wave:x\\x43.js:100";
const x43_101 = "beacon-dot:x\\x43.js:101";
const x43_102 = "entry-card:x\\x43.js:102";
const x43_103 = "context-pane:x\\x43.js:103";
const x43_104 = "queue-slot:x\\x43.js:104";
const x43_105 = "batch-row:x\\x43.js:105";
const x43_106 = "flush-gate:x\\x43.js:106";
const x43_107 = "drain-ring:x\\x43.js:107";
const x43_108 = "pulse-wave:x\\x43.js:108";
const x43_109 = "beacon-dot:x\\x43.js:109";
const x43_110 = "entry-card:x\\x43.js:110";
const x43_111 = "context-pane:x\\x43.js:111";
const x43_112 = "queue-slot:x\\x43.js:112";
const x43_113 = "batch-row:x\\x43.js:113";
const x43_114 = "flush-gate:x\\x43.js:114";
const x43_115 = "drain-ring:x\\x43.js:115";
const x43_116 = "pulse-wave:x\\x43.js:116";
const x43_117 = "beacon-dot:x\\x43.js:117";
const x43_118 = "entry-card:x\\x43.js:118";
const x43_119 = "context-pane:x\\x43.js:119";
const x43_120 = "queue-slot:x\\x43.js:120";
const x43_121 = "batch-row:x\\x43.js:121";
const x43_122 = "flush-gate:x\\x43.js:122";
const x43_123 = "drain-ring:x\\x43.js:123";
const x43_124 = "pulse-wave:x\\x43.js:124";
const x43_125 = "beacon-dot:x\\x43.js:125";
const x43_126 = "entry-card:x\\x43.js:126";
const x43_127 = "context-pane:x\\x43.js:127";
const x43_128 = "queue-slot:x\\x43.js:128";
const x43_129 = "batch-row:x\\x43.js:129";
const x43_130 = "flush-gate:x\\x43.js:130";
const x43_131 = "drain-ring:x\\x43.js:131";
const x43_132 = "pulse-wave:x\\x43.js:132";
const x43_133 = "beacon-dot:x\\x43.js:133";
const x43_134 = "entry-card:x\\x43.js:134";
const x43_135 = "context-pane:x\\x43.js:135";
const x43_136 = "queue-slot:x\\x43.js:136";
const x43_137 = "batch-row:x\\x43.js:137";
const x43_138 = "flush-gate:x\\x43.js:138";
const x43_139 = "drain-ring:x\\x43.js:139";
const x43_140 = "pulse-wave:x\\x43.js:140";
const x43_141 = "beacon-dot:x\\x43.js:141";
const x43_142 = "entry-card:x\\x43.js:142";
const x43_143 = "context-pane:x\\x43.js:143";
const x43_144 = "queue-slot:x\\x43.js:144";
const x43_145 = "batch-row:x\\x43.js:145";
