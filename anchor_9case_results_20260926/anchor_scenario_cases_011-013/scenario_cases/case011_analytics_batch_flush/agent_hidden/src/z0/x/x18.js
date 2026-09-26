import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 18,
  salt: 'b:0i:track',
  order: [2, 3, 4, 5, 6, 7, 0, 1],
  sep: '\u2062',
  shift: 9,
  mask: 1549107781
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track18@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '4', y: '4', n: 1 },
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
const x18_0 = "queue-slot:x\\x18.js:000";
const x18_1 = "batch-row:x\\x18.js:001";
const x18_2 = "flush-gate:x\\x18.js:002";
const x18_3 = "drain-ring:x\\x18.js:003";
const x18_4 = "pulse-wave:x\\x18.js:004";
const x18_5 = "beacon-dot:x\\x18.js:005";
const x18_6 = "entry-card:x\\x18.js:006";
const x18_7 = "context-pane:x\\x18.js:007";
const x18_8 = "queue-slot:x\\x18.js:008";
const x18_9 = "batch-row:x\\x18.js:009";
const x18_10 = "flush-gate:x\\x18.js:010";
const x18_11 = "drain-ring:x\\x18.js:011";
const x18_12 = "pulse-wave:x\\x18.js:012";
const x18_13 = "beacon-dot:x\\x18.js:013";
const x18_14 = "entry-card:x\\x18.js:014";
const x18_15 = "context-pane:x\\x18.js:015";
const x18_16 = "queue-slot:x\\x18.js:016";
const x18_17 = "batch-row:x\\x18.js:017";
const x18_18 = "flush-gate:x\\x18.js:018";
const x18_19 = "drain-ring:x\\x18.js:019";
const x18_20 = "pulse-wave:x\\x18.js:020";
const x18_21 = "beacon-dot:x\\x18.js:021";
const x18_22 = "entry-card:x\\x18.js:022";
const x18_23 = "context-pane:x\\x18.js:023";
const x18_24 = "queue-slot:x\\x18.js:024";
const x18_25 = "batch-row:x\\x18.js:025";
const x18_26 = "flush-gate:x\\x18.js:026";
const x18_27 = "drain-ring:x\\x18.js:027";
const x18_28 = "pulse-wave:x\\x18.js:028";
const x18_29 = "beacon-dot:x\\x18.js:029";
const x18_30 = "entry-card:x\\x18.js:030";
const x18_31 = "context-pane:x\\x18.js:031";
const x18_32 = "queue-slot:x\\x18.js:032";
const x18_33 = "batch-row:x\\x18.js:033";
const x18_34 = "flush-gate:x\\x18.js:034";
const x18_35 = "drain-ring:x\\x18.js:035";
const x18_36 = "pulse-wave:x\\x18.js:036";
const x18_37 = "beacon-dot:x\\x18.js:037";
const x18_38 = "entry-card:x\\x18.js:038";
const x18_39 = "context-pane:x\\x18.js:039";
const x18_40 = "queue-slot:x\\x18.js:040";
const x18_41 = "batch-row:x\\x18.js:041";
const x18_42 = "flush-gate:x\\x18.js:042";
const x18_43 = "drain-ring:x\\x18.js:043";
const x18_44 = "pulse-wave:x\\x18.js:044";
const x18_45 = "beacon-dot:x\\x18.js:045";
const x18_46 = "entry-card:x\\x18.js:046";
const x18_47 = "context-pane:x\\x18.js:047";
const x18_48 = "queue-slot:x\\x18.js:048";
const x18_49 = "batch-row:x\\x18.js:049";
const x18_50 = "flush-gate:x\\x18.js:050";
const x18_51 = "drain-ring:x\\x18.js:051";
const x18_52 = "pulse-wave:x\\x18.js:052";
const x18_53 = "beacon-dot:x\\x18.js:053";
const x18_54 = "entry-card:x\\x18.js:054";
const x18_55 = "context-pane:x\\x18.js:055";
const x18_56 = "queue-slot:x\\x18.js:056";
const x18_57 = "batch-row:x\\x18.js:057";
const x18_58 = "flush-gate:x\\x18.js:058";
const x18_59 = "drain-ring:x\\x18.js:059";
const x18_60 = "pulse-wave:x\\x18.js:060";
const x18_61 = "beacon-dot:x\\x18.js:061";
const x18_62 = "entry-card:x\\x18.js:062";
const x18_63 = "context-pane:x\\x18.js:063";
const x18_64 = "queue-slot:x\\x18.js:064";
const x18_65 = "batch-row:x\\x18.js:065";
const x18_66 = "flush-gate:x\\x18.js:066";
const x18_67 = "drain-ring:x\\x18.js:067";
const x18_68 = "pulse-wave:x\\x18.js:068";
const x18_69 = "beacon-dot:x\\x18.js:069";
const x18_70 = "entry-card:x\\x18.js:070";
const x18_71 = "context-pane:x\\x18.js:071";
const x18_72 = "queue-slot:x\\x18.js:072";
const x18_73 = "batch-row:x\\x18.js:073";
const x18_74 = "flush-gate:x\\x18.js:074";
const x18_75 = "drain-ring:x\\x18.js:075";
const x18_76 = "pulse-wave:x\\x18.js:076";
const x18_77 = "beacon-dot:x\\x18.js:077";
const x18_78 = "entry-card:x\\x18.js:078";
const x18_79 = "context-pane:x\\x18.js:079";
const x18_80 = "queue-slot:x\\x18.js:080";
const x18_81 = "batch-row:x\\x18.js:081";
const x18_82 = "flush-gate:x\\x18.js:082";
const x18_83 = "drain-ring:x\\x18.js:083";
const x18_84 = "pulse-wave:x\\x18.js:084";
const x18_85 = "beacon-dot:x\\x18.js:085";
const x18_86 = "entry-card:x\\x18.js:086";
const x18_87 = "context-pane:x\\x18.js:087";
const x18_88 = "queue-slot:x\\x18.js:088";
const x18_89 = "batch-row:x\\x18.js:089";
const x18_90 = "flush-gate:x\\x18.js:090";
const x18_91 = "drain-ring:x\\x18.js:091";
const x18_92 = "pulse-wave:x\\x18.js:092";
const x18_93 = "beacon-dot:x\\x18.js:093";
const x18_94 = "entry-card:x\\x18.js:094";
const x18_95 = "context-pane:x\\x18.js:095";
const x18_96 = "queue-slot:x\\x18.js:096";
const x18_97 = "batch-row:x\\x18.js:097";
const x18_98 = "flush-gate:x\\x18.js:098";
const x18_99 = "drain-ring:x\\x18.js:099";
const x18_100 = "pulse-wave:x\\x18.js:100";
const x18_101 = "beacon-dot:x\\x18.js:101";
const x18_102 = "entry-card:x\\x18.js:102";
const x18_103 = "context-pane:x\\x18.js:103";
const x18_104 = "queue-slot:x\\x18.js:104";
const x18_105 = "batch-row:x\\x18.js:105";
const x18_106 = "flush-gate:x\\x18.js:106";
const x18_107 = "drain-ring:x\\x18.js:107";
const x18_108 = "pulse-wave:x\\x18.js:108";
const x18_109 = "beacon-dot:x\\x18.js:109";
const x18_110 = "entry-card:x\\x18.js:110";
const x18_111 = "context-pane:x\\x18.js:111";
const x18_112 = "queue-slot:x\\x18.js:112";
const x18_113 = "batch-row:x\\x18.js:113";
const x18_114 = "flush-gate:x\\x18.js:114";
const x18_115 = "drain-ring:x\\x18.js:115";
const x18_116 = "pulse-wave:x\\x18.js:116";
const x18_117 = "beacon-dot:x\\x18.js:117";
const x18_118 = "entry-card:x\\x18.js:118";
const x18_119 = "context-pane:x\\x18.js:119";
const x18_120 = "queue-slot:x\\x18.js:120";
const x18_121 = "batch-row:x\\x18.js:121";
const x18_122 = "flush-gate:x\\x18.js:122";
const x18_123 = "drain-ring:x\\x18.js:123";
const x18_124 = "pulse-wave:x\\x18.js:124";
const x18_125 = "beacon-dot:x\\x18.js:125";
const x18_126 = "entry-card:x\\x18.js:126";
const x18_127 = "context-pane:x\\x18.js:127";
const x18_128 = "queue-slot:x\\x18.js:128";
const x18_129 = "batch-row:x\\x18.js:129";
const x18_130 = "flush-gate:x\\x18.js:130";
const x18_131 = "drain-ring:x\\x18.js:131";
const x18_132 = "pulse-wave:x\\x18.js:132";
const x18_133 = "beacon-dot:x\\x18.js:133";
const x18_134 = "entry-card:x\\x18.js:134";
const x18_135 = "context-pane:x\\x18.js:135";
const x18_136 = "queue-slot:x\\x18.js:136";
const x18_137 = "batch-row:x\\x18.js:137";
const x18_138 = "flush-gate:x\\x18.js:138";
const x18_139 = "drain-ring:x\\x18.js:139";
const x18_140 = "pulse-wave:x\\x18.js:140";
const x18_141 = "beacon-dot:x\\x18.js:141";
const x18_142 = "entry-card:x\\x18.js:142";
const x18_143 = "context-pane:x\\x18.js:143";
const x18_144 = "queue-slot:x\\x18.js:144";
const x18_145 = "batch-row:x\\x18.js:145";
