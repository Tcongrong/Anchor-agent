import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 42,
  salt: 'b:16:track',
  order: [2, 3, 4, 5, 6, 7, 0, 1],
  sep: '\u2062',
  shift: 5,
  mask: 831056605
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track42@pulse.dev', y: 'shadow', n: 17 },
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
const x42_0 = "queue-slot:x\\x42.js:000";
const x42_1 = "batch-row:x\\x42.js:001";
const x42_2 = "flush-gate:x\\x42.js:002";
const x42_3 = "drain-ring:x\\x42.js:003";
const x42_4 = "pulse-wave:x\\x42.js:004";
const x42_5 = "beacon-dot:x\\x42.js:005";
const x42_6 = "entry-card:x\\x42.js:006";
const x42_7 = "context-pane:x\\x42.js:007";
const x42_8 = "queue-slot:x\\x42.js:008";
const x42_9 = "batch-row:x\\x42.js:009";
const x42_10 = "flush-gate:x\\x42.js:010";
const x42_11 = "drain-ring:x\\x42.js:011";
const x42_12 = "pulse-wave:x\\x42.js:012";
const x42_13 = "beacon-dot:x\\x42.js:013";
const x42_14 = "entry-card:x\\x42.js:014";
const x42_15 = "context-pane:x\\x42.js:015";
const x42_16 = "queue-slot:x\\x42.js:016";
const x42_17 = "batch-row:x\\x42.js:017";
const x42_18 = "flush-gate:x\\x42.js:018";
const x42_19 = "drain-ring:x\\x42.js:019";
const x42_20 = "pulse-wave:x\\x42.js:020";
const x42_21 = "beacon-dot:x\\x42.js:021";
const x42_22 = "entry-card:x\\x42.js:022";
const x42_23 = "context-pane:x\\x42.js:023";
const x42_24 = "queue-slot:x\\x42.js:024";
const x42_25 = "batch-row:x\\x42.js:025";
const x42_26 = "flush-gate:x\\x42.js:026";
const x42_27 = "drain-ring:x\\x42.js:027";
const x42_28 = "pulse-wave:x\\x42.js:028";
const x42_29 = "beacon-dot:x\\x42.js:029";
const x42_30 = "entry-card:x\\x42.js:030";
const x42_31 = "context-pane:x\\x42.js:031";
const x42_32 = "queue-slot:x\\x42.js:032";
const x42_33 = "batch-row:x\\x42.js:033";
const x42_34 = "flush-gate:x\\x42.js:034";
const x42_35 = "drain-ring:x\\x42.js:035";
const x42_36 = "pulse-wave:x\\x42.js:036";
const x42_37 = "beacon-dot:x\\x42.js:037";
const x42_38 = "entry-card:x\\x42.js:038";
const x42_39 = "context-pane:x\\x42.js:039";
const x42_40 = "queue-slot:x\\x42.js:040";
const x42_41 = "batch-row:x\\x42.js:041";
const x42_42 = "flush-gate:x\\x42.js:042";
const x42_43 = "drain-ring:x\\x42.js:043";
const x42_44 = "pulse-wave:x\\x42.js:044";
const x42_45 = "beacon-dot:x\\x42.js:045";
const x42_46 = "entry-card:x\\x42.js:046";
const x42_47 = "context-pane:x\\x42.js:047";
const x42_48 = "queue-slot:x\\x42.js:048";
const x42_49 = "batch-row:x\\x42.js:049";
const x42_50 = "flush-gate:x\\x42.js:050";
const x42_51 = "drain-ring:x\\x42.js:051";
const x42_52 = "pulse-wave:x\\x42.js:052";
const x42_53 = "beacon-dot:x\\x42.js:053";
const x42_54 = "entry-card:x\\x42.js:054";
const x42_55 = "context-pane:x\\x42.js:055";
const x42_56 = "queue-slot:x\\x42.js:056";
const x42_57 = "batch-row:x\\x42.js:057";
const x42_58 = "flush-gate:x\\x42.js:058";
const x42_59 = "drain-ring:x\\x42.js:059";
const x42_60 = "pulse-wave:x\\x42.js:060";
const x42_61 = "beacon-dot:x\\x42.js:061";
const x42_62 = "entry-card:x\\x42.js:062";
const x42_63 = "context-pane:x\\x42.js:063";
const x42_64 = "queue-slot:x\\x42.js:064";
const x42_65 = "batch-row:x\\x42.js:065";
const x42_66 = "flush-gate:x\\x42.js:066";
const x42_67 = "drain-ring:x\\x42.js:067";
const x42_68 = "pulse-wave:x\\x42.js:068";
const x42_69 = "beacon-dot:x\\x42.js:069";
const x42_70 = "entry-card:x\\x42.js:070";
const x42_71 = "context-pane:x\\x42.js:071";
const x42_72 = "queue-slot:x\\x42.js:072";
const x42_73 = "batch-row:x\\x42.js:073";
const x42_74 = "flush-gate:x\\x42.js:074";
const x42_75 = "drain-ring:x\\x42.js:075";
const x42_76 = "pulse-wave:x\\x42.js:076";
const x42_77 = "beacon-dot:x\\x42.js:077";
const x42_78 = "entry-card:x\\x42.js:078";
const x42_79 = "context-pane:x\\x42.js:079";
const x42_80 = "queue-slot:x\\x42.js:080";
const x42_81 = "batch-row:x\\x42.js:081";
const x42_82 = "flush-gate:x\\x42.js:082";
const x42_83 = "drain-ring:x\\x42.js:083";
const x42_84 = "pulse-wave:x\\x42.js:084";
const x42_85 = "beacon-dot:x\\x42.js:085";
const x42_86 = "entry-card:x\\x42.js:086";
const x42_87 = "context-pane:x\\x42.js:087";
const x42_88 = "queue-slot:x\\x42.js:088";
const x42_89 = "batch-row:x\\x42.js:089";
const x42_90 = "flush-gate:x\\x42.js:090";
const x42_91 = "drain-ring:x\\x42.js:091";
const x42_92 = "pulse-wave:x\\x42.js:092";
const x42_93 = "beacon-dot:x\\x42.js:093";
const x42_94 = "entry-card:x\\x42.js:094";
const x42_95 = "context-pane:x\\x42.js:095";
const x42_96 = "queue-slot:x\\x42.js:096";
const x42_97 = "batch-row:x\\x42.js:097";
const x42_98 = "flush-gate:x\\x42.js:098";
const x42_99 = "drain-ring:x\\x42.js:099";
const x42_100 = "pulse-wave:x\\x42.js:100";
const x42_101 = "beacon-dot:x\\x42.js:101";
const x42_102 = "entry-card:x\\x42.js:102";
const x42_103 = "context-pane:x\\x42.js:103";
const x42_104 = "queue-slot:x\\x42.js:104";
const x42_105 = "batch-row:x\\x42.js:105";
const x42_106 = "flush-gate:x\\x42.js:106";
const x42_107 = "drain-ring:x\\x42.js:107";
const x42_108 = "pulse-wave:x\\x42.js:108";
const x42_109 = "beacon-dot:x\\x42.js:109";
const x42_110 = "entry-card:x\\x42.js:110";
const x42_111 = "context-pane:x\\x42.js:111";
const x42_112 = "queue-slot:x\\x42.js:112";
const x42_113 = "batch-row:x\\x42.js:113";
const x42_114 = "flush-gate:x\\x42.js:114";
const x42_115 = "drain-ring:x\\x42.js:115";
const x42_116 = "pulse-wave:x\\x42.js:116";
const x42_117 = "beacon-dot:x\\x42.js:117";
const x42_118 = "entry-card:x\\x42.js:118";
const x42_119 = "context-pane:x\\x42.js:119";
const x42_120 = "queue-slot:x\\x42.js:120";
const x42_121 = "batch-row:x\\x42.js:121";
const x42_122 = "flush-gate:x\\x42.js:122";
const x42_123 = "drain-ring:x\\x42.js:123";
const x42_124 = "pulse-wave:x\\x42.js:124";
const x42_125 = "beacon-dot:x\\x42.js:125";
const x42_126 = "entry-card:x\\x42.js:126";
const x42_127 = "context-pane:x\\x42.js:127";
const x42_128 = "queue-slot:x\\x42.js:128";
const x42_129 = "batch-row:x\\x42.js:129";
const x42_130 = "flush-gate:x\\x42.js:130";
const x42_131 = "drain-ring:x\\x42.js:131";
const x42_132 = "pulse-wave:x\\x42.js:132";
const x42_133 = "beacon-dot:x\\x42.js:133";
const x42_134 = "entry-card:x\\x42.js:134";
const x42_135 = "context-pane:x\\x42.js:135";
const x42_136 = "queue-slot:x\\x42.js:136";
const x42_137 = "batch-row:x\\x42.js:137";
const x42_138 = "flush-gate:x\\x42.js:138";
const x42_139 = "drain-ring:x\\x42.js:139";
const x42_140 = "pulse-wave:x\\x42.js:140";
const x42_141 = "beacon-dot:x\\x42.js:141";
const x42_142 = "entry-card:x\\x42.js:142";
const x42_143 = "context-pane:x\\x42.js:143";
const x42_144 = "queue-slot:x\\x42.js:144";
const x42_145 = "batch-row:x\\x42.js:145";
