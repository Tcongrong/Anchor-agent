import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 8,
  salt: 'b:08:track',
  order: [0, 1, 2, 3, 4, 5, 6, 7],
  sep: '\u2060',
  shift: 6,
  mask: 774553947
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain8@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
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
const x08_0 = "queue-slot:x\\x08.js:000";
const x08_1 = "batch-row:x\\x08.js:001";
const x08_2 = "flush-gate:x\\x08.js:002";
const x08_3 = "drain-ring:x\\x08.js:003";
const x08_4 = "pulse-wave:x\\x08.js:004";
const x08_5 = "beacon-dot:x\\x08.js:005";
const x08_6 = "entry-card:x\\x08.js:006";
const x08_7 = "context-pane:x\\x08.js:007";
const x08_8 = "queue-slot:x\\x08.js:008";
const x08_9 = "batch-row:x\\x08.js:009";
const x08_10 = "flush-gate:x\\x08.js:010";
const x08_11 = "drain-ring:x\\x08.js:011";
const x08_12 = "pulse-wave:x\\x08.js:012";
const x08_13 = "beacon-dot:x\\x08.js:013";
const x08_14 = "entry-card:x\\x08.js:014";
const x08_15 = "context-pane:x\\x08.js:015";
const x08_16 = "queue-slot:x\\x08.js:016";
const x08_17 = "batch-row:x\\x08.js:017";
const x08_18 = "flush-gate:x\\x08.js:018";
const x08_19 = "drain-ring:x\\x08.js:019";
const x08_20 = "pulse-wave:x\\x08.js:020";
const x08_21 = "beacon-dot:x\\x08.js:021";
const x08_22 = "entry-card:x\\x08.js:022";
const x08_23 = "context-pane:x\\x08.js:023";
const x08_24 = "queue-slot:x\\x08.js:024";
const x08_25 = "batch-row:x\\x08.js:025";
const x08_26 = "flush-gate:x\\x08.js:026";
const x08_27 = "drain-ring:x\\x08.js:027";
const x08_28 = "pulse-wave:x\\x08.js:028";
const x08_29 = "beacon-dot:x\\x08.js:029";
const x08_30 = "entry-card:x\\x08.js:030";
const x08_31 = "context-pane:x\\x08.js:031";
const x08_32 = "queue-slot:x\\x08.js:032";
const x08_33 = "batch-row:x\\x08.js:033";
const x08_34 = "flush-gate:x\\x08.js:034";
const x08_35 = "drain-ring:x\\x08.js:035";
const x08_36 = "pulse-wave:x\\x08.js:036";
const x08_37 = "beacon-dot:x\\x08.js:037";
const x08_38 = "entry-card:x\\x08.js:038";
const x08_39 = "context-pane:x\\x08.js:039";
const x08_40 = "queue-slot:x\\x08.js:040";
const x08_41 = "batch-row:x\\x08.js:041";
const x08_42 = "flush-gate:x\\x08.js:042";
const x08_43 = "drain-ring:x\\x08.js:043";
const x08_44 = "pulse-wave:x\\x08.js:044";
const x08_45 = "beacon-dot:x\\x08.js:045";
const x08_46 = "entry-card:x\\x08.js:046";
const x08_47 = "context-pane:x\\x08.js:047";
const x08_48 = "queue-slot:x\\x08.js:048";
const x08_49 = "batch-row:x\\x08.js:049";
const x08_50 = "flush-gate:x\\x08.js:050";
const x08_51 = "drain-ring:x\\x08.js:051";
const x08_52 = "pulse-wave:x\\x08.js:052";
const x08_53 = "beacon-dot:x\\x08.js:053";
const x08_54 = "entry-card:x\\x08.js:054";
const x08_55 = "context-pane:x\\x08.js:055";
const x08_56 = "queue-slot:x\\x08.js:056";
const x08_57 = "batch-row:x\\x08.js:057";
const x08_58 = "flush-gate:x\\x08.js:058";
const x08_59 = "drain-ring:x\\x08.js:059";
const x08_60 = "pulse-wave:x\\x08.js:060";
const x08_61 = "beacon-dot:x\\x08.js:061";
const x08_62 = "entry-card:x\\x08.js:062";
const x08_63 = "context-pane:x\\x08.js:063";
const x08_64 = "queue-slot:x\\x08.js:064";
const x08_65 = "batch-row:x\\x08.js:065";
const x08_66 = "flush-gate:x\\x08.js:066";
const x08_67 = "drain-ring:x\\x08.js:067";
const x08_68 = "pulse-wave:x\\x08.js:068";
const x08_69 = "beacon-dot:x\\x08.js:069";
const x08_70 = "entry-card:x\\x08.js:070";
const x08_71 = "context-pane:x\\x08.js:071";
const x08_72 = "queue-slot:x\\x08.js:072";
const x08_73 = "batch-row:x\\x08.js:073";
const x08_74 = "flush-gate:x\\x08.js:074";
const x08_75 = "drain-ring:x\\x08.js:075";
const x08_76 = "pulse-wave:x\\x08.js:076";
const x08_77 = "beacon-dot:x\\x08.js:077";
const x08_78 = "entry-card:x\\x08.js:078";
const x08_79 = "context-pane:x\\x08.js:079";
const x08_80 = "queue-slot:x\\x08.js:080";
const x08_81 = "batch-row:x\\x08.js:081";
const x08_82 = "flush-gate:x\\x08.js:082";
const x08_83 = "drain-ring:x\\x08.js:083";
const x08_84 = "pulse-wave:x\\x08.js:084";
const x08_85 = "beacon-dot:x\\x08.js:085";
const x08_86 = "entry-card:x\\x08.js:086";
const x08_87 = "context-pane:x\\x08.js:087";
const x08_88 = "queue-slot:x\\x08.js:088";
const x08_89 = "batch-row:x\\x08.js:089";
const x08_90 = "flush-gate:x\\x08.js:090";
const x08_91 = "drain-ring:x\\x08.js:091";
const x08_92 = "pulse-wave:x\\x08.js:092";
const x08_93 = "beacon-dot:x\\x08.js:093";
const x08_94 = "entry-card:x\\x08.js:094";
const x08_95 = "context-pane:x\\x08.js:095";
const x08_96 = "queue-slot:x\\x08.js:096";
const x08_97 = "batch-row:x\\x08.js:097";
const x08_98 = "flush-gate:x\\x08.js:098";
const x08_99 = "drain-ring:x\\x08.js:099";
const x08_100 = "pulse-wave:x\\x08.js:100";
const x08_101 = "beacon-dot:x\\x08.js:101";
const x08_102 = "entry-card:x\\x08.js:102";
const x08_103 = "context-pane:x\\x08.js:103";
const x08_104 = "queue-slot:x\\x08.js:104";
const x08_105 = "batch-row:x\\x08.js:105";
const x08_106 = "flush-gate:x\\x08.js:106";
const x08_107 = "drain-ring:x\\x08.js:107";
const x08_108 = "pulse-wave:x\\x08.js:108";
const x08_109 = "beacon-dot:x\\x08.js:109";
const x08_110 = "entry-card:x\\x08.js:110";
const x08_111 = "context-pane:x\\x08.js:111";
const x08_112 = "queue-slot:x\\x08.js:112";
const x08_113 = "batch-row:x\\x08.js:113";
const x08_114 = "flush-gate:x\\x08.js:114";
const x08_115 = "drain-ring:x\\x08.js:115";
const x08_116 = "pulse-wave:x\\x08.js:116";
const x08_117 = "beacon-dot:x\\x08.js:117";
const x08_118 = "entry-card:x\\x08.js:118";
const x08_119 = "context-pane:x\\x08.js:119";
const x08_120 = "queue-slot:x\\x08.js:120";
const x08_121 = "batch-row:x\\x08.js:121";
const x08_122 = "flush-gate:x\\x08.js:122";
const x08_123 = "drain-ring:x\\x08.js:123";
const x08_124 = "pulse-wave:x\\x08.js:124";
const x08_125 = "beacon-dot:x\\x08.js:125";
const x08_126 = "entry-card:x\\x08.js:126";
const x08_127 = "context-pane:x\\x08.js:127";
const x08_128 = "queue-slot:x\\x08.js:128";
const x08_129 = "batch-row:x\\x08.js:129";
const x08_130 = "flush-gate:x\\x08.js:130";
const x08_131 = "drain-ring:x\\x08.js:131";
const x08_132 = "pulse-wave:x\\x08.js:132";
const x08_133 = "beacon-dot:x\\x08.js:133";
const x08_134 = "entry-card:x\\x08.js:134";
const x08_135 = "context-pane:x\\x08.js:135";
const x08_136 = "queue-slot:x\\x08.js:136";
const x08_137 = "batch-row:x\\x08.js:137";
const x08_138 = "flush-gate:x\\x08.js:138";
const x08_139 = "drain-ring:x\\x08.js:139";
const x08_140 = "pulse-wave:x\\x08.js:140";
const x08_141 = "beacon-dot:x\\x08.js:141";
const x08_142 = "entry-card:x\\x08.js:142";
const x08_143 = "context-pane:x\\x08.js:143";
const x08_144 = "queue-slot:x\\x08.js:144";
const x08_145 = "batch-row:x\\x08.js:145";
