import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 32,
  salt: 'b:0w:track',
  order: [0, 1, 2, 3, 4, 5, 6, 7],
  sep: '\u2060',
  shift: 9,
  mask: 56502771
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain32@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '4', y: '4', n: 1 },
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
const x32_0 = "queue-slot:x\\x32.js:000";
const x32_1 = "batch-row:x\\x32.js:001";
const x32_2 = "flush-gate:x\\x32.js:002";
const x32_3 = "drain-ring:x\\x32.js:003";
const x32_4 = "pulse-wave:x\\x32.js:004";
const x32_5 = "beacon-dot:x\\x32.js:005";
const x32_6 = "entry-card:x\\x32.js:006";
const x32_7 = "context-pane:x\\x32.js:007";
const x32_8 = "queue-slot:x\\x32.js:008";
const x32_9 = "batch-row:x\\x32.js:009";
const x32_10 = "flush-gate:x\\x32.js:010";
const x32_11 = "drain-ring:x\\x32.js:011";
const x32_12 = "pulse-wave:x\\x32.js:012";
const x32_13 = "beacon-dot:x\\x32.js:013";
const x32_14 = "entry-card:x\\x32.js:014";
const x32_15 = "context-pane:x\\x32.js:015";
const x32_16 = "queue-slot:x\\x32.js:016";
const x32_17 = "batch-row:x\\x32.js:017";
const x32_18 = "flush-gate:x\\x32.js:018";
const x32_19 = "drain-ring:x\\x32.js:019";
const x32_20 = "pulse-wave:x\\x32.js:020";
const x32_21 = "beacon-dot:x\\x32.js:021";
const x32_22 = "entry-card:x\\x32.js:022";
const x32_23 = "context-pane:x\\x32.js:023";
const x32_24 = "queue-slot:x\\x32.js:024";
const x32_25 = "batch-row:x\\x32.js:025";
const x32_26 = "flush-gate:x\\x32.js:026";
const x32_27 = "drain-ring:x\\x32.js:027";
const x32_28 = "pulse-wave:x\\x32.js:028";
const x32_29 = "beacon-dot:x\\x32.js:029";
const x32_30 = "entry-card:x\\x32.js:030";
const x32_31 = "context-pane:x\\x32.js:031";
const x32_32 = "queue-slot:x\\x32.js:032";
const x32_33 = "batch-row:x\\x32.js:033";
const x32_34 = "flush-gate:x\\x32.js:034";
const x32_35 = "drain-ring:x\\x32.js:035";
const x32_36 = "pulse-wave:x\\x32.js:036";
const x32_37 = "beacon-dot:x\\x32.js:037";
const x32_38 = "entry-card:x\\x32.js:038";
const x32_39 = "context-pane:x\\x32.js:039";
const x32_40 = "queue-slot:x\\x32.js:040";
const x32_41 = "batch-row:x\\x32.js:041";
const x32_42 = "flush-gate:x\\x32.js:042";
const x32_43 = "drain-ring:x\\x32.js:043";
const x32_44 = "pulse-wave:x\\x32.js:044";
const x32_45 = "beacon-dot:x\\x32.js:045";
const x32_46 = "entry-card:x\\x32.js:046";
const x32_47 = "context-pane:x\\x32.js:047";
const x32_48 = "queue-slot:x\\x32.js:048";
const x32_49 = "batch-row:x\\x32.js:049";
const x32_50 = "flush-gate:x\\x32.js:050";
const x32_51 = "drain-ring:x\\x32.js:051";
const x32_52 = "pulse-wave:x\\x32.js:052";
const x32_53 = "beacon-dot:x\\x32.js:053";
const x32_54 = "entry-card:x\\x32.js:054";
const x32_55 = "context-pane:x\\x32.js:055";
const x32_56 = "queue-slot:x\\x32.js:056";
const x32_57 = "batch-row:x\\x32.js:057";
const x32_58 = "flush-gate:x\\x32.js:058";
const x32_59 = "drain-ring:x\\x32.js:059";
const x32_60 = "pulse-wave:x\\x32.js:060";
const x32_61 = "beacon-dot:x\\x32.js:061";
const x32_62 = "entry-card:x\\x32.js:062";
const x32_63 = "context-pane:x\\x32.js:063";
const x32_64 = "queue-slot:x\\x32.js:064";
const x32_65 = "batch-row:x\\x32.js:065";
const x32_66 = "flush-gate:x\\x32.js:066";
const x32_67 = "drain-ring:x\\x32.js:067";
const x32_68 = "pulse-wave:x\\x32.js:068";
const x32_69 = "beacon-dot:x\\x32.js:069";
const x32_70 = "entry-card:x\\x32.js:070";
const x32_71 = "context-pane:x\\x32.js:071";
const x32_72 = "queue-slot:x\\x32.js:072";
const x32_73 = "batch-row:x\\x32.js:073";
const x32_74 = "flush-gate:x\\x32.js:074";
const x32_75 = "drain-ring:x\\x32.js:075";
const x32_76 = "pulse-wave:x\\x32.js:076";
const x32_77 = "beacon-dot:x\\x32.js:077";
const x32_78 = "entry-card:x\\x32.js:078";
const x32_79 = "context-pane:x\\x32.js:079";
const x32_80 = "queue-slot:x\\x32.js:080";
const x32_81 = "batch-row:x\\x32.js:081";
const x32_82 = "flush-gate:x\\x32.js:082";
const x32_83 = "drain-ring:x\\x32.js:083";
const x32_84 = "pulse-wave:x\\x32.js:084";
const x32_85 = "beacon-dot:x\\x32.js:085";
const x32_86 = "entry-card:x\\x32.js:086";
const x32_87 = "context-pane:x\\x32.js:087";
const x32_88 = "queue-slot:x\\x32.js:088";
const x32_89 = "batch-row:x\\x32.js:089";
const x32_90 = "flush-gate:x\\x32.js:090";
const x32_91 = "drain-ring:x\\x32.js:091";
const x32_92 = "pulse-wave:x\\x32.js:092";
const x32_93 = "beacon-dot:x\\x32.js:093";
const x32_94 = "entry-card:x\\x32.js:094";
const x32_95 = "context-pane:x\\x32.js:095";
const x32_96 = "queue-slot:x\\x32.js:096";
const x32_97 = "batch-row:x\\x32.js:097";
const x32_98 = "flush-gate:x\\x32.js:098";
const x32_99 = "drain-ring:x\\x32.js:099";
const x32_100 = "pulse-wave:x\\x32.js:100";
const x32_101 = "beacon-dot:x\\x32.js:101";
const x32_102 = "entry-card:x\\x32.js:102";
const x32_103 = "context-pane:x\\x32.js:103";
const x32_104 = "queue-slot:x\\x32.js:104";
const x32_105 = "batch-row:x\\x32.js:105";
const x32_106 = "flush-gate:x\\x32.js:106";
const x32_107 = "drain-ring:x\\x32.js:107";
const x32_108 = "pulse-wave:x\\x32.js:108";
const x32_109 = "beacon-dot:x\\x32.js:109";
const x32_110 = "entry-card:x\\x32.js:110";
const x32_111 = "context-pane:x\\x32.js:111";
const x32_112 = "queue-slot:x\\x32.js:112";
const x32_113 = "batch-row:x\\x32.js:113";
const x32_114 = "flush-gate:x\\x32.js:114";
const x32_115 = "drain-ring:x\\x32.js:115";
const x32_116 = "pulse-wave:x\\x32.js:116";
const x32_117 = "beacon-dot:x\\x32.js:117";
const x32_118 = "entry-card:x\\x32.js:118";
const x32_119 = "context-pane:x\\x32.js:119";
const x32_120 = "queue-slot:x\\x32.js:120";
const x32_121 = "batch-row:x\\x32.js:121";
const x32_122 = "flush-gate:x\\x32.js:122";
const x32_123 = "drain-ring:x\\x32.js:123";
const x32_124 = "pulse-wave:x\\x32.js:124";
const x32_125 = "beacon-dot:x\\x32.js:125";
const x32_126 = "entry-card:x\\x32.js:126";
const x32_127 = "context-pane:x\\x32.js:127";
const x32_128 = "queue-slot:x\\x32.js:128";
const x32_129 = "batch-row:x\\x32.js:129";
const x32_130 = "flush-gate:x\\x32.js:130";
const x32_131 = "drain-ring:x\\x32.js:131";
const x32_132 = "pulse-wave:x\\x32.js:132";
const x32_133 = "beacon-dot:x\\x32.js:133";
const x32_134 = "entry-card:x\\x32.js:134";
const x32_135 = "context-pane:x\\x32.js:135";
const x32_136 = "queue-slot:x\\x32.js:136";
const x32_137 = "batch-row:x\\x32.js:137";
const x32_138 = "flush-gate:x\\x32.js:138";
const x32_139 = "drain-ring:x\\x32.js:139";
const x32_140 = "pulse-wave:x\\x32.js:140";
const x32_141 = "beacon-dot:x\\x32.js:141";
const x32_142 = "entry-card:x\\x32.js:142";
const x32_143 = "context-pane:x\\x32.js:143";
const x32_144 = "queue-slot:x\\x32.js:144";
const x32_145 = "batch-row:x\\x32.js:145";
