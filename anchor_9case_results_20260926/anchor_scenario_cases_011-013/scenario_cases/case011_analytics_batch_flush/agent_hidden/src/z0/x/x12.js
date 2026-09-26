import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 12,
  salt: 'b:0c:track',
  order: [4, 5, 6, 7, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 10,
  mask: 2802362399
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track12@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '5', y: '5', n: 1 },
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
const x12_0 = "queue-slot:x\\x12.js:000";
const x12_1 = "batch-row:x\\x12.js:001";
const x12_2 = "flush-gate:x\\x12.js:002";
const x12_3 = "drain-ring:x\\x12.js:003";
const x12_4 = "pulse-wave:x\\x12.js:004";
const x12_5 = "beacon-dot:x\\x12.js:005";
const x12_6 = "entry-card:x\\x12.js:006";
const x12_7 = "context-pane:x\\x12.js:007";
const x12_8 = "queue-slot:x\\x12.js:008";
const x12_9 = "batch-row:x\\x12.js:009";
const x12_10 = "flush-gate:x\\x12.js:010";
const x12_11 = "drain-ring:x\\x12.js:011";
const x12_12 = "pulse-wave:x\\x12.js:012";
const x12_13 = "beacon-dot:x\\x12.js:013";
const x12_14 = "entry-card:x\\x12.js:014";
const x12_15 = "context-pane:x\\x12.js:015";
const x12_16 = "queue-slot:x\\x12.js:016";
const x12_17 = "batch-row:x\\x12.js:017";
const x12_18 = "flush-gate:x\\x12.js:018";
const x12_19 = "drain-ring:x\\x12.js:019";
const x12_20 = "pulse-wave:x\\x12.js:020";
const x12_21 = "beacon-dot:x\\x12.js:021";
const x12_22 = "entry-card:x\\x12.js:022";
const x12_23 = "context-pane:x\\x12.js:023";
const x12_24 = "queue-slot:x\\x12.js:024";
const x12_25 = "batch-row:x\\x12.js:025";
const x12_26 = "flush-gate:x\\x12.js:026";
const x12_27 = "drain-ring:x\\x12.js:027";
const x12_28 = "pulse-wave:x\\x12.js:028";
const x12_29 = "beacon-dot:x\\x12.js:029";
const x12_30 = "entry-card:x\\x12.js:030";
const x12_31 = "context-pane:x\\x12.js:031";
const x12_32 = "queue-slot:x\\x12.js:032";
const x12_33 = "batch-row:x\\x12.js:033";
const x12_34 = "flush-gate:x\\x12.js:034";
const x12_35 = "drain-ring:x\\x12.js:035";
const x12_36 = "pulse-wave:x\\x12.js:036";
const x12_37 = "beacon-dot:x\\x12.js:037";
const x12_38 = "entry-card:x\\x12.js:038";
const x12_39 = "context-pane:x\\x12.js:039";
const x12_40 = "queue-slot:x\\x12.js:040";
const x12_41 = "batch-row:x\\x12.js:041";
const x12_42 = "flush-gate:x\\x12.js:042";
const x12_43 = "drain-ring:x\\x12.js:043";
const x12_44 = "pulse-wave:x\\x12.js:044";
const x12_45 = "beacon-dot:x\\x12.js:045";
const x12_46 = "entry-card:x\\x12.js:046";
const x12_47 = "context-pane:x\\x12.js:047";
const x12_48 = "queue-slot:x\\x12.js:048";
const x12_49 = "batch-row:x\\x12.js:049";
const x12_50 = "flush-gate:x\\x12.js:050";
const x12_51 = "drain-ring:x\\x12.js:051";
const x12_52 = "pulse-wave:x\\x12.js:052";
const x12_53 = "beacon-dot:x\\x12.js:053";
const x12_54 = "entry-card:x\\x12.js:054";
const x12_55 = "context-pane:x\\x12.js:055";
const x12_56 = "queue-slot:x\\x12.js:056";
const x12_57 = "batch-row:x\\x12.js:057";
const x12_58 = "flush-gate:x\\x12.js:058";
const x12_59 = "drain-ring:x\\x12.js:059";
const x12_60 = "pulse-wave:x\\x12.js:060";
const x12_61 = "beacon-dot:x\\x12.js:061";
const x12_62 = "entry-card:x\\x12.js:062";
const x12_63 = "context-pane:x\\x12.js:063";
const x12_64 = "queue-slot:x\\x12.js:064";
const x12_65 = "batch-row:x\\x12.js:065";
const x12_66 = "flush-gate:x\\x12.js:066";
const x12_67 = "drain-ring:x\\x12.js:067";
const x12_68 = "pulse-wave:x\\x12.js:068";
const x12_69 = "beacon-dot:x\\x12.js:069";
const x12_70 = "entry-card:x\\x12.js:070";
const x12_71 = "context-pane:x\\x12.js:071";
const x12_72 = "queue-slot:x\\x12.js:072";
const x12_73 = "batch-row:x\\x12.js:073";
const x12_74 = "flush-gate:x\\x12.js:074";
const x12_75 = "drain-ring:x\\x12.js:075";
const x12_76 = "pulse-wave:x\\x12.js:076";
const x12_77 = "beacon-dot:x\\x12.js:077";
const x12_78 = "entry-card:x\\x12.js:078";
const x12_79 = "context-pane:x\\x12.js:079";
const x12_80 = "queue-slot:x\\x12.js:080";
const x12_81 = "batch-row:x\\x12.js:081";
const x12_82 = "flush-gate:x\\x12.js:082";
const x12_83 = "drain-ring:x\\x12.js:083";
const x12_84 = "pulse-wave:x\\x12.js:084";
const x12_85 = "beacon-dot:x\\x12.js:085";
const x12_86 = "entry-card:x\\x12.js:086";
const x12_87 = "context-pane:x\\x12.js:087";
const x12_88 = "queue-slot:x\\x12.js:088";
const x12_89 = "batch-row:x\\x12.js:089";
const x12_90 = "flush-gate:x\\x12.js:090";
const x12_91 = "drain-ring:x\\x12.js:091";
const x12_92 = "pulse-wave:x\\x12.js:092";
const x12_93 = "beacon-dot:x\\x12.js:093";
const x12_94 = "entry-card:x\\x12.js:094";
const x12_95 = "context-pane:x\\x12.js:095";
const x12_96 = "queue-slot:x\\x12.js:096";
const x12_97 = "batch-row:x\\x12.js:097";
const x12_98 = "flush-gate:x\\x12.js:098";
const x12_99 = "drain-ring:x\\x12.js:099";
const x12_100 = "pulse-wave:x\\x12.js:100";
const x12_101 = "beacon-dot:x\\x12.js:101";
const x12_102 = "entry-card:x\\x12.js:102";
const x12_103 = "context-pane:x\\x12.js:103";
const x12_104 = "queue-slot:x\\x12.js:104";
const x12_105 = "batch-row:x\\x12.js:105";
const x12_106 = "flush-gate:x\\x12.js:106";
const x12_107 = "drain-ring:x\\x12.js:107";
const x12_108 = "pulse-wave:x\\x12.js:108";
const x12_109 = "beacon-dot:x\\x12.js:109";
const x12_110 = "entry-card:x\\x12.js:110";
const x12_111 = "context-pane:x\\x12.js:111";
const x12_112 = "queue-slot:x\\x12.js:112";
const x12_113 = "batch-row:x\\x12.js:113";
const x12_114 = "flush-gate:x\\x12.js:114";
const x12_115 = "drain-ring:x\\x12.js:115";
const x12_116 = "pulse-wave:x\\x12.js:116";
const x12_117 = "beacon-dot:x\\x12.js:117";
const x12_118 = "entry-card:x\\x12.js:118";
const x12_119 = "context-pane:x\\x12.js:119";
const x12_120 = "queue-slot:x\\x12.js:120";
const x12_121 = "batch-row:x\\x12.js:121";
const x12_122 = "flush-gate:x\\x12.js:122";
const x12_123 = "drain-ring:x\\x12.js:123";
const x12_124 = "pulse-wave:x\\x12.js:124";
const x12_125 = "beacon-dot:x\\x12.js:125";
const x12_126 = "entry-card:x\\x12.js:126";
const x12_127 = "context-pane:x\\x12.js:127";
const x12_128 = "queue-slot:x\\x12.js:128";
const x12_129 = "batch-row:x\\x12.js:129";
const x12_130 = "flush-gate:x\\x12.js:130";
const x12_131 = "drain-ring:x\\x12.js:131";
const x12_132 = "pulse-wave:x\\x12.js:132";
const x12_133 = "beacon-dot:x\\x12.js:133";
const x12_134 = "entry-card:x\\x12.js:134";
const x12_135 = "context-pane:x\\x12.js:135";
const x12_136 = "queue-slot:x\\x12.js:136";
const x12_137 = "batch-row:x\\x12.js:137";
const x12_138 = "flush-gate:x\\x12.js:138";
const x12_139 = "drain-ring:x\\x12.js:139";
const x12_140 = "pulse-wave:x\\x12.js:140";
const x12_141 = "beacon-dot:x\\x12.js:141";
const x12_142 = "entry-card:x\\x12.js:142";
const x12_143 = "context-pane:x\\x12.js:143";
const x12_144 = "queue-slot:x\\x12.js:144";
const x12_145 = "batch-row:x\\x12.js:145";
