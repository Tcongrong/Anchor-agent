import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 24,
  salt: 'b:0o:track',
  order: [0, 1, 2, 3, 4, 5, 6, 7],
  sep: '\u2060',
  shift: 8,
  mask: 295853163
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track24@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '3', y: '3', n: 1 },
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
const x24_0 = "queue-slot:x\\x24.js:000";
const x24_1 = "batch-row:x\\x24.js:001";
const x24_2 = "flush-gate:x\\x24.js:002";
const x24_3 = "drain-ring:x\\x24.js:003";
const x24_4 = "pulse-wave:x\\x24.js:004";
const x24_5 = "beacon-dot:x\\x24.js:005";
const x24_6 = "entry-card:x\\x24.js:006";
const x24_7 = "context-pane:x\\x24.js:007";
const x24_8 = "queue-slot:x\\x24.js:008";
const x24_9 = "batch-row:x\\x24.js:009";
const x24_10 = "flush-gate:x\\x24.js:010";
const x24_11 = "drain-ring:x\\x24.js:011";
const x24_12 = "pulse-wave:x\\x24.js:012";
const x24_13 = "beacon-dot:x\\x24.js:013";
const x24_14 = "entry-card:x\\x24.js:014";
const x24_15 = "context-pane:x\\x24.js:015";
const x24_16 = "queue-slot:x\\x24.js:016";
const x24_17 = "batch-row:x\\x24.js:017";
const x24_18 = "flush-gate:x\\x24.js:018";
const x24_19 = "drain-ring:x\\x24.js:019";
const x24_20 = "pulse-wave:x\\x24.js:020";
const x24_21 = "beacon-dot:x\\x24.js:021";
const x24_22 = "entry-card:x\\x24.js:022";
const x24_23 = "context-pane:x\\x24.js:023";
const x24_24 = "queue-slot:x\\x24.js:024";
const x24_25 = "batch-row:x\\x24.js:025";
const x24_26 = "flush-gate:x\\x24.js:026";
const x24_27 = "drain-ring:x\\x24.js:027";
const x24_28 = "pulse-wave:x\\x24.js:028";
const x24_29 = "beacon-dot:x\\x24.js:029";
const x24_30 = "entry-card:x\\x24.js:030";
const x24_31 = "context-pane:x\\x24.js:031";
const x24_32 = "queue-slot:x\\x24.js:032";
const x24_33 = "batch-row:x\\x24.js:033";
const x24_34 = "flush-gate:x\\x24.js:034";
const x24_35 = "drain-ring:x\\x24.js:035";
const x24_36 = "pulse-wave:x\\x24.js:036";
const x24_37 = "beacon-dot:x\\x24.js:037";
const x24_38 = "entry-card:x\\x24.js:038";
const x24_39 = "context-pane:x\\x24.js:039";
const x24_40 = "queue-slot:x\\x24.js:040";
const x24_41 = "batch-row:x\\x24.js:041";
const x24_42 = "flush-gate:x\\x24.js:042";
const x24_43 = "drain-ring:x\\x24.js:043";
const x24_44 = "pulse-wave:x\\x24.js:044";
const x24_45 = "beacon-dot:x\\x24.js:045";
const x24_46 = "entry-card:x\\x24.js:046";
const x24_47 = "context-pane:x\\x24.js:047";
const x24_48 = "queue-slot:x\\x24.js:048";
const x24_49 = "batch-row:x\\x24.js:049";
const x24_50 = "flush-gate:x\\x24.js:050";
const x24_51 = "drain-ring:x\\x24.js:051";
const x24_52 = "pulse-wave:x\\x24.js:052";
const x24_53 = "beacon-dot:x\\x24.js:053";
const x24_54 = "entry-card:x\\x24.js:054";
const x24_55 = "context-pane:x\\x24.js:055";
const x24_56 = "queue-slot:x\\x24.js:056";
const x24_57 = "batch-row:x\\x24.js:057";
const x24_58 = "flush-gate:x\\x24.js:058";
const x24_59 = "drain-ring:x\\x24.js:059";
const x24_60 = "pulse-wave:x\\x24.js:060";
const x24_61 = "beacon-dot:x\\x24.js:061";
const x24_62 = "entry-card:x\\x24.js:062";
const x24_63 = "context-pane:x\\x24.js:063";
const x24_64 = "queue-slot:x\\x24.js:064";
const x24_65 = "batch-row:x\\x24.js:065";
const x24_66 = "flush-gate:x\\x24.js:066";
const x24_67 = "drain-ring:x\\x24.js:067";
const x24_68 = "pulse-wave:x\\x24.js:068";
const x24_69 = "beacon-dot:x\\x24.js:069";
const x24_70 = "entry-card:x\\x24.js:070";
const x24_71 = "context-pane:x\\x24.js:071";
const x24_72 = "queue-slot:x\\x24.js:072";
const x24_73 = "batch-row:x\\x24.js:073";
const x24_74 = "flush-gate:x\\x24.js:074";
const x24_75 = "drain-ring:x\\x24.js:075";
const x24_76 = "pulse-wave:x\\x24.js:076";
const x24_77 = "beacon-dot:x\\x24.js:077";
const x24_78 = "entry-card:x\\x24.js:078";
const x24_79 = "context-pane:x\\x24.js:079";
const x24_80 = "queue-slot:x\\x24.js:080";
const x24_81 = "batch-row:x\\x24.js:081";
const x24_82 = "flush-gate:x\\x24.js:082";
const x24_83 = "drain-ring:x\\x24.js:083";
const x24_84 = "pulse-wave:x\\x24.js:084";
const x24_85 = "beacon-dot:x\\x24.js:085";
const x24_86 = "entry-card:x\\x24.js:086";
const x24_87 = "context-pane:x\\x24.js:087";
const x24_88 = "queue-slot:x\\x24.js:088";
const x24_89 = "batch-row:x\\x24.js:089";
const x24_90 = "flush-gate:x\\x24.js:090";
const x24_91 = "drain-ring:x\\x24.js:091";
const x24_92 = "pulse-wave:x\\x24.js:092";
const x24_93 = "beacon-dot:x\\x24.js:093";
const x24_94 = "entry-card:x\\x24.js:094";
const x24_95 = "context-pane:x\\x24.js:095";
const x24_96 = "queue-slot:x\\x24.js:096";
const x24_97 = "batch-row:x\\x24.js:097";
const x24_98 = "flush-gate:x\\x24.js:098";
const x24_99 = "drain-ring:x\\x24.js:099";
const x24_100 = "pulse-wave:x\\x24.js:100";
const x24_101 = "beacon-dot:x\\x24.js:101";
const x24_102 = "entry-card:x\\x24.js:102";
const x24_103 = "context-pane:x\\x24.js:103";
const x24_104 = "queue-slot:x\\x24.js:104";
const x24_105 = "batch-row:x\\x24.js:105";
const x24_106 = "flush-gate:x\\x24.js:106";
const x24_107 = "drain-ring:x\\x24.js:107";
const x24_108 = "pulse-wave:x\\x24.js:108";
const x24_109 = "beacon-dot:x\\x24.js:109";
const x24_110 = "entry-card:x\\x24.js:110";
const x24_111 = "context-pane:x\\x24.js:111";
const x24_112 = "queue-slot:x\\x24.js:112";
const x24_113 = "batch-row:x\\x24.js:113";
const x24_114 = "flush-gate:x\\x24.js:114";
const x24_115 = "drain-ring:x\\x24.js:115";
const x24_116 = "pulse-wave:x\\x24.js:116";
const x24_117 = "beacon-dot:x\\x24.js:117";
const x24_118 = "entry-card:x\\x24.js:118";
const x24_119 = "context-pane:x\\x24.js:119";
const x24_120 = "queue-slot:x\\x24.js:120";
const x24_121 = "batch-row:x\\x24.js:121";
const x24_122 = "flush-gate:x\\x24.js:122";
const x24_123 = "drain-ring:x\\x24.js:123";
const x24_124 = "pulse-wave:x\\x24.js:124";
const x24_125 = "beacon-dot:x\\x24.js:125";
const x24_126 = "entry-card:x\\x24.js:126";
const x24_127 = "context-pane:x\\x24.js:127";
const x24_128 = "queue-slot:x\\x24.js:128";
const x24_129 = "batch-row:x\\x24.js:129";
const x24_130 = "flush-gate:x\\x24.js:130";
const x24_131 = "drain-ring:x\\x24.js:131";
const x24_132 = "pulse-wave:x\\x24.js:132";
const x24_133 = "beacon-dot:x\\x24.js:133";
const x24_134 = "entry-card:x\\x24.js:134";
const x24_135 = "context-pane:x\\x24.js:135";
const x24_136 = "queue-slot:x\\x24.js:136";
const x24_137 = "batch-row:x\\x24.js:137";
const x24_138 = "flush-gate:x\\x24.js:138";
const x24_139 = "drain-ring:x\\x24.js:139";
const x24_140 = "pulse-wave:x\\x24.js:140";
const x24_141 = "beacon-dot:x\\x24.js:141";
const x24_142 = "entry-card:x\\x24.js:142";
const x24_143 = "context-pane:x\\x24.js:143";
const x24_144 = "queue-slot:x\\x24.js:144";
const x24_145 = "batch-row:x\\x24.js:145";
