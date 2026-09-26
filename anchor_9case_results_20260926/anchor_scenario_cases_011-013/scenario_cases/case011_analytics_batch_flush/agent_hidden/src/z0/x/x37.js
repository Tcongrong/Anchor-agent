import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 37,
  salt: 'b:11:track',
  order: [5, 6, 7, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 7,
  mask: 443779688
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'slot37@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x37_0 = "queue-slot:x\\x37.js:000";
const x37_1 = "batch-row:x\\x37.js:001";
const x37_2 = "flush-gate:x\\x37.js:002";
const x37_3 = "drain-ring:x\\x37.js:003";
const x37_4 = "pulse-wave:x\\x37.js:004";
const x37_5 = "beacon-dot:x\\x37.js:005";
const x37_6 = "entry-card:x\\x37.js:006";
const x37_7 = "context-pane:x\\x37.js:007";
const x37_8 = "queue-slot:x\\x37.js:008";
const x37_9 = "batch-row:x\\x37.js:009";
const x37_10 = "flush-gate:x\\x37.js:010";
const x37_11 = "drain-ring:x\\x37.js:011";
const x37_12 = "pulse-wave:x\\x37.js:012";
const x37_13 = "beacon-dot:x\\x37.js:013";
const x37_14 = "entry-card:x\\x37.js:014";
const x37_15 = "context-pane:x\\x37.js:015";
const x37_16 = "queue-slot:x\\x37.js:016";
const x37_17 = "batch-row:x\\x37.js:017";
const x37_18 = "flush-gate:x\\x37.js:018";
const x37_19 = "drain-ring:x\\x37.js:019";
const x37_20 = "pulse-wave:x\\x37.js:020";
const x37_21 = "beacon-dot:x\\x37.js:021";
const x37_22 = "entry-card:x\\x37.js:022";
const x37_23 = "context-pane:x\\x37.js:023";
const x37_24 = "queue-slot:x\\x37.js:024";
const x37_25 = "batch-row:x\\x37.js:025";
const x37_26 = "flush-gate:x\\x37.js:026";
const x37_27 = "drain-ring:x\\x37.js:027";
const x37_28 = "pulse-wave:x\\x37.js:028";
const x37_29 = "beacon-dot:x\\x37.js:029";
const x37_30 = "entry-card:x\\x37.js:030";
const x37_31 = "context-pane:x\\x37.js:031";
const x37_32 = "queue-slot:x\\x37.js:032";
const x37_33 = "batch-row:x\\x37.js:033";
const x37_34 = "flush-gate:x\\x37.js:034";
const x37_35 = "drain-ring:x\\x37.js:035";
const x37_36 = "pulse-wave:x\\x37.js:036";
const x37_37 = "beacon-dot:x\\x37.js:037";
const x37_38 = "entry-card:x\\x37.js:038";
const x37_39 = "context-pane:x\\x37.js:039";
const x37_40 = "queue-slot:x\\x37.js:040";
const x37_41 = "batch-row:x\\x37.js:041";
const x37_42 = "flush-gate:x\\x37.js:042";
const x37_43 = "drain-ring:x\\x37.js:043";
const x37_44 = "pulse-wave:x\\x37.js:044";
const x37_45 = "beacon-dot:x\\x37.js:045";
const x37_46 = "entry-card:x\\x37.js:046";
const x37_47 = "context-pane:x\\x37.js:047";
const x37_48 = "queue-slot:x\\x37.js:048";
const x37_49 = "batch-row:x\\x37.js:049";
const x37_50 = "flush-gate:x\\x37.js:050";
const x37_51 = "drain-ring:x\\x37.js:051";
const x37_52 = "pulse-wave:x\\x37.js:052";
const x37_53 = "beacon-dot:x\\x37.js:053";
const x37_54 = "entry-card:x\\x37.js:054";
const x37_55 = "context-pane:x\\x37.js:055";
const x37_56 = "queue-slot:x\\x37.js:056";
const x37_57 = "batch-row:x\\x37.js:057";
const x37_58 = "flush-gate:x\\x37.js:058";
const x37_59 = "drain-ring:x\\x37.js:059";
const x37_60 = "pulse-wave:x\\x37.js:060";
const x37_61 = "beacon-dot:x\\x37.js:061";
const x37_62 = "entry-card:x\\x37.js:062";
const x37_63 = "context-pane:x\\x37.js:063";
const x37_64 = "queue-slot:x\\x37.js:064";
const x37_65 = "batch-row:x\\x37.js:065";
const x37_66 = "flush-gate:x\\x37.js:066";
const x37_67 = "drain-ring:x\\x37.js:067";
const x37_68 = "pulse-wave:x\\x37.js:068";
const x37_69 = "beacon-dot:x\\x37.js:069";
const x37_70 = "entry-card:x\\x37.js:070";
const x37_71 = "context-pane:x\\x37.js:071";
const x37_72 = "queue-slot:x\\x37.js:072";
const x37_73 = "batch-row:x\\x37.js:073";
const x37_74 = "flush-gate:x\\x37.js:074";
const x37_75 = "drain-ring:x\\x37.js:075";
const x37_76 = "pulse-wave:x\\x37.js:076";
const x37_77 = "beacon-dot:x\\x37.js:077";
const x37_78 = "entry-card:x\\x37.js:078";
const x37_79 = "context-pane:x\\x37.js:079";
const x37_80 = "queue-slot:x\\x37.js:080";
const x37_81 = "batch-row:x\\x37.js:081";
const x37_82 = "flush-gate:x\\x37.js:082";
const x37_83 = "drain-ring:x\\x37.js:083";
const x37_84 = "pulse-wave:x\\x37.js:084";
const x37_85 = "beacon-dot:x\\x37.js:085";
const x37_86 = "entry-card:x\\x37.js:086";
const x37_87 = "context-pane:x\\x37.js:087";
const x37_88 = "queue-slot:x\\x37.js:088";
const x37_89 = "batch-row:x\\x37.js:089";
const x37_90 = "flush-gate:x\\x37.js:090";
const x37_91 = "drain-ring:x\\x37.js:091";
const x37_92 = "pulse-wave:x\\x37.js:092";
const x37_93 = "beacon-dot:x\\x37.js:093";
const x37_94 = "entry-card:x\\x37.js:094";
const x37_95 = "context-pane:x\\x37.js:095";
const x37_96 = "queue-slot:x\\x37.js:096";
const x37_97 = "batch-row:x\\x37.js:097";
const x37_98 = "flush-gate:x\\x37.js:098";
const x37_99 = "drain-ring:x\\x37.js:099";
const x37_100 = "pulse-wave:x\\x37.js:100";
const x37_101 = "beacon-dot:x\\x37.js:101";
const x37_102 = "entry-card:x\\x37.js:102";
const x37_103 = "context-pane:x\\x37.js:103";
const x37_104 = "queue-slot:x\\x37.js:104";
const x37_105 = "batch-row:x\\x37.js:105";
const x37_106 = "flush-gate:x\\x37.js:106";
const x37_107 = "drain-ring:x\\x37.js:107";
const x37_108 = "pulse-wave:x\\x37.js:108";
const x37_109 = "beacon-dot:x\\x37.js:109";
const x37_110 = "entry-card:x\\x37.js:110";
const x37_111 = "context-pane:x\\x37.js:111";
const x37_112 = "queue-slot:x\\x37.js:112";
const x37_113 = "batch-row:x\\x37.js:113";
const x37_114 = "flush-gate:x\\x37.js:114";
const x37_115 = "drain-ring:x\\x37.js:115";
const x37_116 = "pulse-wave:x\\x37.js:116";
const x37_117 = "beacon-dot:x\\x37.js:117";
const x37_118 = "entry-card:x\\x37.js:118";
const x37_119 = "context-pane:x\\x37.js:119";
const x37_120 = "queue-slot:x\\x37.js:120";
const x37_121 = "batch-row:x\\x37.js:121";
const x37_122 = "flush-gate:x\\x37.js:122";
const x37_123 = "drain-ring:x\\x37.js:123";
const x37_124 = "pulse-wave:x\\x37.js:124";
const x37_125 = "beacon-dot:x\\x37.js:125";
const x37_126 = "entry-card:x\\x37.js:126";
const x37_127 = "context-pane:x\\x37.js:127";
const x37_128 = "queue-slot:x\\x37.js:128";
const x37_129 = "batch-row:x\\x37.js:129";
const x37_130 = "flush-gate:x\\x37.js:130";
const x37_131 = "drain-ring:x\\x37.js:131";
const x37_132 = "pulse-wave:x\\x37.js:132";
const x37_133 = "beacon-dot:x\\x37.js:133";
const x37_134 = "entry-card:x\\x37.js:134";
const x37_135 = "context-pane:x\\x37.js:135";
const x37_136 = "queue-slot:x\\x37.js:136";
const x37_137 = "batch-row:x\\x37.js:137";
const x37_138 = "flush-gate:x\\x37.js:138";
const x37_139 = "drain-ring:x\\x37.js:139";
const x37_140 = "pulse-wave:x\\x37.js:140";
const x37_141 = "beacon-dot:x\\x37.js:141";
const x37_142 = "entry-card:x\\x37.js:142";
const x37_143 = "context-pane:x\\x37.js:143";
const x37_144 = "queue-slot:x\\x37.js:144";
const x37_145 = "batch-row:x\\x37.js:145";
