import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 26,
  salt: 'b:0q:track',
  order: [2, 3, 4, 5, 6, 7, 0, 1],
  sep: '\u2062',
  shift: 10,
  mask: 1309757389
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain26@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
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
const x26_0 = "queue-slot:x\\x26.js:000";
const x26_1 = "batch-row:x\\x26.js:001";
const x26_2 = "flush-gate:x\\x26.js:002";
const x26_3 = "drain-ring:x\\x26.js:003";
const x26_4 = "pulse-wave:x\\x26.js:004";
const x26_5 = "beacon-dot:x\\x26.js:005";
const x26_6 = "entry-card:x\\x26.js:006";
const x26_7 = "context-pane:x\\x26.js:007";
const x26_8 = "queue-slot:x\\x26.js:008";
const x26_9 = "batch-row:x\\x26.js:009";
const x26_10 = "flush-gate:x\\x26.js:010";
const x26_11 = "drain-ring:x\\x26.js:011";
const x26_12 = "pulse-wave:x\\x26.js:012";
const x26_13 = "beacon-dot:x\\x26.js:013";
const x26_14 = "entry-card:x\\x26.js:014";
const x26_15 = "context-pane:x\\x26.js:015";
const x26_16 = "queue-slot:x\\x26.js:016";
const x26_17 = "batch-row:x\\x26.js:017";
const x26_18 = "flush-gate:x\\x26.js:018";
const x26_19 = "drain-ring:x\\x26.js:019";
const x26_20 = "pulse-wave:x\\x26.js:020";
const x26_21 = "beacon-dot:x\\x26.js:021";
const x26_22 = "entry-card:x\\x26.js:022";
const x26_23 = "context-pane:x\\x26.js:023";
const x26_24 = "queue-slot:x\\x26.js:024";
const x26_25 = "batch-row:x\\x26.js:025";
const x26_26 = "flush-gate:x\\x26.js:026";
const x26_27 = "drain-ring:x\\x26.js:027";
const x26_28 = "pulse-wave:x\\x26.js:028";
const x26_29 = "beacon-dot:x\\x26.js:029";
const x26_30 = "entry-card:x\\x26.js:030";
const x26_31 = "context-pane:x\\x26.js:031";
const x26_32 = "queue-slot:x\\x26.js:032";
const x26_33 = "batch-row:x\\x26.js:033";
const x26_34 = "flush-gate:x\\x26.js:034";
const x26_35 = "drain-ring:x\\x26.js:035";
const x26_36 = "pulse-wave:x\\x26.js:036";
const x26_37 = "beacon-dot:x\\x26.js:037";
const x26_38 = "entry-card:x\\x26.js:038";
const x26_39 = "context-pane:x\\x26.js:039";
const x26_40 = "queue-slot:x\\x26.js:040";
const x26_41 = "batch-row:x\\x26.js:041";
const x26_42 = "flush-gate:x\\x26.js:042";
const x26_43 = "drain-ring:x\\x26.js:043";
const x26_44 = "pulse-wave:x\\x26.js:044";
const x26_45 = "beacon-dot:x\\x26.js:045";
const x26_46 = "entry-card:x\\x26.js:046";
const x26_47 = "context-pane:x\\x26.js:047";
const x26_48 = "queue-slot:x\\x26.js:048";
const x26_49 = "batch-row:x\\x26.js:049";
const x26_50 = "flush-gate:x\\x26.js:050";
const x26_51 = "drain-ring:x\\x26.js:051";
const x26_52 = "pulse-wave:x\\x26.js:052";
const x26_53 = "beacon-dot:x\\x26.js:053";
const x26_54 = "entry-card:x\\x26.js:054";
const x26_55 = "context-pane:x\\x26.js:055";
const x26_56 = "queue-slot:x\\x26.js:056";
const x26_57 = "batch-row:x\\x26.js:057";
const x26_58 = "flush-gate:x\\x26.js:058";
const x26_59 = "drain-ring:x\\x26.js:059";
const x26_60 = "pulse-wave:x\\x26.js:060";
const x26_61 = "beacon-dot:x\\x26.js:061";
const x26_62 = "entry-card:x\\x26.js:062";
const x26_63 = "context-pane:x\\x26.js:063";
const x26_64 = "queue-slot:x\\x26.js:064";
const x26_65 = "batch-row:x\\x26.js:065";
const x26_66 = "flush-gate:x\\x26.js:066";
const x26_67 = "drain-ring:x\\x26.js:067";
const x26_68 = "pulse-wave:x\\x26.js:068";
const x26_69 = "beacon-dot:x\\x26.js:069";
const x26_70 = "entry-card:x\\x26.js:070";
const x26_71 = "context-pane:x\\x26.js:071";
const x26_72 = "queue-slot:x\\x26.js:072";
const x26_73 = "batch-row:x\\x26.js:073";
const x26_74 = "flush-gate:x\\x26.js:074";
const x26_75 = "drain-ring:x\\x26.js:075";
const x26_76 = "pulse-wave:x\\x26.js:076";
const x26_77 = "beacon-dot:x\\x26.js:077";
const x26_78 = "entry-card:x\\x26.js:078";
const x26_79 = "context-pane:x\\x26.js:079";
const x26_80 = "queue-slot:x\\x26.js:080";
const x26_81 = "batch-row:x\\x26.js:081";
const x26_82 = "flush-gate:x\\x26.js:082";
const x26_83 = "drain-ring:x\\x26.js:083";
const x26_84 = "pulse-wave:x\\x26.js:084";
const x26_85 = "beacon-dot:x\\x26.js:085";
const x26_86 = "entry-card:x\\x26.js:086";
const x26_87 = "context-pane:x\\x26.js:087";
const x26_88 = "queue-slot:x\\x26.js:088";
const x26_89 = "batch-row:x\\x26.js:089";
const x26_90 = "flush-gate:x\\x26.js:090";
const x26_91 = "drain-ring:x\\x26.js:091";
const x26_92 = "pulse-wave:x\\x26.js:092";
const x26_93 = "beacon-dot:x\\x26.js:093";
const x26_94 = "entry-card:x\\x26.js:094";
const x26_95 = "context-pane:x\\x26.js:095";
const x26_96 = "queue-slot:x\\x26.js:096";
const x26_97 = "batch-row:x\\x26.js:097";
const x26_98 = "flush-gate:x\\x26.js:098";
const x26_99 = "drain-ring:x\\x26.js:099";
const x26_100 = "pulse-wave:x\\x26.js:100";
const x26_101 = "beacon-dot:x\\x26.js:101";
const x26_102 = "entry-card:x\\x26.js:102";
const x26_103 = "context-pane:x\\x26.js:103";
const x26_104 = "queue-slot:x\\x26.js:104";
const x26_105 = "batch-row:x\\x26.js:105";
const x26_106 = "flush-gate:x\\x26.js:106";
const x26_107 = "drain-ring:x\\x26.js:107";
const x26_108 = "pulse-wave:x\\x26.js:108";
const x26_109 = "beacon-dot:x\\x26.js:109";
const x26_110 = "entry-card:x\\x26.js:110";
const x26_111 = "context-pane:x\\x26.js:111";
const x26_112 = "queue-slot:x\\x26.js:112";
const x26_113 = "batch-row:x\\x26.js:113";
const x26_114 = "flush-gate:x\\x26.js:114";
const x26_115 = "drain-ring:x\\x26.js:115";
const x26_116 = "pulse-wave:x\\x26.js:116";
const x26_117 = "beacon-dot:x\\x26.js:117";
const x26_118 = "entry-card:x\\x26.js:118";
const x26_119 = "context-pane:x\\x26.js:119";
const x26_120 = "queue-slot:x\\x26.js:120";
const x26_121 = "batch-row:x\\x26.js:121";
const x26_122 = "flush-gate:x\\x26.js:122";
const x26_123 = "drain-ring:x\\x26.js:123";
const x26_124 = "pulse-wave:x\\x26.js:124";
const x26_125 = "beacon-dot:x\\x26.js:125";
const x26_126 = "entry-card:x\\x26.js:126";
const x26_127 = "context-pane:x\\x26.js:127";
const x26_128 = "queue-slot:x\\x26.js:128";
const x26_129 = "batch-row:x\\x26.js:129";
const x26_130 = "flush-gate:x\\x26.js:130";
const x26_131 = "drain-ring:x\\x26.js:131";
const x26_132 = "pulse-wave:x\\x26.js:132";
const x26_133 = "beacon-dot:x\\x26.js:133";
const x26_134 = "entry-card:x\\x26.js:134";
const x26_135 = "context-pane:x\\x26.js:135";
const x26_136 = "queue-slot:x\\x26.js:136";
const x26_137 = "batch-row:x\\x26.js:137";
const x26_138 = "flush-gate:x\\x26.js:138";
const x26_139 = "drain-ring:x\\x26.js:139";
const x26_140 = "pulse-wave:x\\x26.js:140";
const x26_141 = "beacon-dot:x\\x26.js:141";
const x26_142 = "entry-card:x\\x26.js:142";
const x26_143 = "context-pane:x\\x26.js:143";
const x26_144 = "queue-slot:x\\x26.js:144";
const x26_145 = "batch-row:x\\x26.js:145";
