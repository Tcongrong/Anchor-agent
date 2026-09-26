import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 30,
  salt: 'b:0u:track',
  order: [6, 7, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 7,
  mask: 3337565841
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track30@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x30_0 = "queue-slot:x\\x30.js:000";
const x30_1 = "batch-row:x\\x30.js:001";
const x30_2 = "flush-gate:x\\x30.js:002";
const x30_3 = "drain-ring:x\\x30.js:003";
const x30_4 = "pulse-wave:x\\x30.js:004";
const x30_5 = "beacon-dot:x\\x30.js:005";
const x30_6 = "entry-card:x\\x30.js:006";
const x30_7 = "context-pane:x\\x30.js:007";
const x30_8 = "queue-slot:x\\x30.js:008";
const x30_9 = "batch-row:x\\x30.js:009";
const x30_10 = "flush-gate:x\\x30.js:010";
const x30_11 = "drain-ring:x\\x30.js:011";
const x30_12 = "pulse-wave:x\\x30.js:012";
const x30_13 = "beacon-dot:x\\x30.js:013";
const x30_14 = "entry-card:x\\x30.js:014";
const x30_15 = "context-pane:x\\x30.js:015";
const x30_16 = "queue-slot:x\\x30.js:016";
const x30_17 = "batch-row:x\\x30.js:017";
const x30_18 = "flush-gate:x\\x30.js:018";
const x30_19 = "drain-ring:x\\x30.js:019";
const x30_20 = "pulse-wave:x\\x30.js:020";
const x30_21 = "beacon-dot:x\\x30.js:021";
const x30_22 = "entry-card:x\\x30.js:022";
const x30_23 = "context-pane:x\\x30.js:023";
const x30_24 = "queue-slot:x\\x30.js:024";
const x30_25 = "batch-row:x\\x30.js:025";
const x30_26 = "flush-gate:x\\x30.js:026";
const x30_27 = "drain-ring:x\\x30.js:027";
const x30_28 = "pulse-wave:x\\x30.js:028";
const x30_29 = "beacon-dot:x\\x30.js:029";
const x30_30 = "entry-card:x\\x30.js:030";
const x30_31 = "context-pane:x\\x30.js:031";
const x30_32 = "queue-slot:x\\x30.js:032";
const x30_33 = "batch-row:x\\x30.js:033";
const x30_34 = "flush-gate:x\\x30.js:034";
const x30_35 = "drain-ring:x\\x30.js:035";
const x30_36 = "pulse-wave:x\\x30.js:036";
const x30_37 = "beacon-dot:x\\x30.js:037";
const x30_38 = "entry-card:x\\x30.js:038";
const x30_39 = "context-pane:x\\x30.js:039";
const x30_40 = "queue-slot:x\\x30.js:040";
const x30_41 = "batch-row:x\\x30.js:041";
const x30_42 = "flush-gate:x\\x30.js:042";
const x30_43 = "drain-ring:x\\x30.js:043";
const x30_44 = "pulse-wave:x\\x30.js:044";
const x30_45 = "beacon-dot:x\\x30.js:045";
const x30_46 = "entry-card:x\\x30.js:046";
const x30_47 = "context-pane:x\\x30.js:047";
const x30_48 = "queue-slot:x\\x30.js:048";
const x30_49 = "batch-row:x\\x30.js:049";
const x30_50 = "flush-gate:x\\x30.js:050";
const x30_51 = "drain-ring:x\\x30.js:051";
const x30_52 = "pulse-wave:x\\x30.js:052";
const x30_53 = "beacon-dot:x\\x30.js:053";
const x30_54 = "entry-card:x\\x30.js:054";
const x30_55 = "context-pane:x\\x30.js:055";
const x30_56 = "queue-slot:x\\x30.js:056";
const x30_57 = "batch-row:x\\x30.js:057";
const x30_58 = "flush-gate:x\\x30.js:058";
const x30_59 = "drain-ring:x\\x30.js:059";
const x30_60 = "pulse-wave:x\\x30.js:060";
const x30_61 = "beacon-dot:x\\x30.js:061";
const x30_62 = "entry-card:x\\x30.js:062";
const x30_63 = "context-pane:x\\x30.js:063";
const x30_64 = "queue-slot:x\\x30.js:064";
const x30_65 = "batch-row:x\\x30.js:065";
const x30_66 = "flush-gate:x\\x30.js:066";
const x30_67 = "drain-ring:x\\x30.js:067";
const x30_68 = "pulse-wave:x\\x30.js:068";
const x30_69 = "beacon-dot:x\\x30.js:069";
const x30_70 = "entry-card:x\\x30.js:070";
const x30_71 = "context-pane:x\\x30.js:071";
const x30_72 = "queue-slot:x\\x30.js:072";
const x30_73 = "batch-row:x\\x30.js:073";
const x30_74 = "flush-gate:x\\x30.js:074";
const x30_75 = "drain-ring:x\\x30.js:075";
const x30_76 = "pulse-wave:x\\x30.js:076";
const x30_77 = "beacon-dot:x\\x30.js:077";
const x30_78 = "entry-card:x\\x30.js:078";
const x30_79 = "context-pane:x\\x30.js:079";
const x30_80 = "queue-slot:x\\x30.js:080";
const x30_81 = "batch-row:x\\x30.js:081";
const x30_82 = "flush-gate:x\\x30.js:082";
const x30_83 = "drain-ring:x\\x30.js:083";
const x30_84 = "pulse-wave:x\\x30.js:084";
const x30_85 = "beacon-dot:x\\x30.js:085";
const x30_86 = "entry-card:x\\x30.js:086";
const x30_87 = "context-pane:x\\x30.js:087";
const x30_88 = "queue-slot:x\\x30.js:088";
const x30_89 = "batch-row:x\\x30.js:089";
const x30_90 = "flush-gate:x\\x30.js:090";
const x30_91 = "drain-ring:x\\x30.js:091";
const x30_92 = "pulse-wave:x\\x30.js:092";
const x30_93 = "beacon-dot:x\\x30.js:093";
const x30_94 = "entry-card:x\\x30.js:094";
const x30_95 = "context-pane:x\\x30.js:095";
const x30_96 = "queue-slot:x\\x30.js:096";
const x30_97 = "batch-row:x\\x30.js:097";
const x30_98 = "flush-gate:x\\x30.js:098";
const x30_99 = "drain-ring:x\\x30.js:099";
const x30_100 = "pulse-wave:x\\x30.js:100";
const x30_101 = "beacon-dot:x\\x30.js:101";
const x30_102 = "entry-card:x\\x30.js:102";
const x30_103 = "context-pane:x\\x30.js:103";
const x30_104 = "queue-slot:x\\x30.js:104";
const x30_105 = "batch-row:x\\x30.js:105";
const x30_106 = "flush-gate:x\\x30.js:106";
const x30_107 = "drain-ring:x\\x30.js:107";
const x30_108 = "pulse-wave:x\\x30.js:108";
const x30_109 = "beacon-dot:x\\x30.js:109";
const x30_110 = "entry-card:x\\x30.js:110";
const x30_111 = "context-pane:x\\x30.js:111";
const x30_112 = "queue-slot:x\\x30.js:112";
const x30_113 = "batch-row:x\\x30.js:113";
const x30_114 = "flush-gate:x\\x30.js:114";
const x30_115 = "drain-ring:x\\x30.js:115";
const x30_116 = "pulse-wave:x\\x30.js:116";
const x30_117 = "beacon-dot:x\\x30.js:117";
const x30_118 = "entry-card:x\\x30.js:118";
const x30_119 = "context-pane:x\\x30.js:119";
const x30_120 = "queue-slot:x\\x30.js:120";
const x30_121 = "batch-row:x\\x30.js:121";
const x30_122 = "flush-gate:x\\x30.js:122";
const x30_123 = "drain-ring:x\\x30.js:123";
const x30_124 = "pulse-wave:x\\x30.js:124";
const x30_125 = "beacon-dot:x\\x30.js:125";
const x30_126 = "entry-card:x\\x30.js:126";
const x30_127 = "context-pane:x\\x30.js:127";
const x30_128 = "queue-slot:x\\x30.js:128";
const x30_129 = "batch-row:x\\x30.js:129";
const x30_130 = "flush-gate:x\\x30.js:130";
const x30_131 = "drain-ring:x\\x30.js:131";
const x30_132 = "pulse-wave:x\\x30.js:132";
const x30_133 = "beacon-dot:x\\x30.js:133";
const x30_134 = "entry-card:x\\x30.js:134";
const x30_135 = "context-pane:x\\x30.js:135";
const x30_136 = "queue-slot:x\\x30.js:136";
const x30_137 = "batch-row:x\\x30.js:137";
const x30_138 = "flush-gate:x\\x30.js:138";
const x30_139 = "drain-ring:x\\x30.js:139";
const x30_140 = "pulse-wave:x\\x30.js:140";
const x30_141 = "beacon-dot:x\\x30.js:141";
const x30_142 = "entry-card:x\\x30.js:142";
const x30_143 = "context-pane:x\\x30.js:143";
const x30_144 = "queue-slot:x\\x30.js:144";
const x30_145 = "batch-row:x\\x30.js:145";
