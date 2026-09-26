import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 39,
  salt: 'b:13:track',
  order: [7, 0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 9,
  mask: 1457683914
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track39@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
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
const x39_0 = "queue-slot:x\\x39.js:000";
const x39_1 = "batch-row:x\\x39.js:001";
const x39_2 = "flush-gate:x\\x39.js:002";
const x39_3 = "drain-ring:x\\x39.js:003";
const x39_4 = "pulse-wave:x\\x39.js:004";
const x39_5 = "beacon-dot:x\\x39.js:005";
const x39_6 = "entry-card:x\\x39.js:006";
const x39_7 = "context-pane:x\\x39.js:007";
const x39_8 = "queue-slot:x\\x39.js:008";
const x39_9 = "batch-row:x\\x39.js:009";
const x39_10 = "flush-gate:x\\x39.js:010";
const x39_11 = "drain-ring:x\\x39.js:011";
const x39_12 = "pulse-wave:x\\x39.js:012";
const x39_13 = "beacon-dot:x\\x39.js:013";
const x39_14 = "entry-card:x\\x39.js:014";
const x39_15 = "context-pane:x\\x39.js:015";
const x39_16 = "queue-slot:x\\x39.js:016";
const x39_17 = "batch-row:x\\x39.js:017";
const x39_18 = "flush-gate:x\\x39.js:018";
const x39_19 = "drain-ring:x\\x39.js:019";
const x39_20 = "pulse-wave:x\\x39.js:020";
const x39_21 = "beacon-dot:x\\x39.js:021";
const x39_22 = "entry-card:x\\x39.js:022";
const x39_23 = "context-pane:x\\x39.js:023";
const x39_24 = "queue-slot:x\\x39.js:024";
const x39_25 = "batch-row:x\\x39.js:025";
const x39_26 = "flush-gate:x\\x39.js:026";
const x39_27 = "drain-ring:x\\x39.js:027";
const x39_28 = "pulse-wave:x\\x39.js:028";
const x39_29 = "beacon-dot:x\\x39.js:029";
const x39_30 = "entry-card:x\\x39.js:030";
const x39_31 = "context-pane:x\\x39.js:031";
const x39_32 = "queue-slot:x\\x39.js:032";
const x39_33 = "batch-row:x\\x39.js:033";
const x39_34 = "flush-gate:x\\x39.js:034";
const x39_35 = "drain-ring:x\\x39.js:035";
const x39_36 = "pulse-wave:x\\x39.js:036";
const x39_37 = "beacon-dot:x\\x39.js:037";
const x39_38 = "entry-card:x\\x39.js:038";
const x39_39 = "context-pane:x\\x39.js:039";
const x39_40 = "queue-slot:x\\x39.js:040";
const x39_41 = "batch-row:x\\x39.js:041";
const x39_42 = "flush-gate:x\\x39.js:042";
const x39_43 = "drain-ring:x\\x39.js:043";
const x39_44 = "pulse-wave:x\\x39.js:044";
const x39_45 = "beacon-dot:x\\x39.js:045";
const x39_46 = "entry-card:x\\x39.js:046";
const x39_47 = "context-pane:x\\x39.js:047";
const x39_48 = "queue-slot:x\\x39.js:048";
const x39_49 = "batch-row:x\\x39.js:049";
const x39_50 = "flush-gate:x\\x39.js:050";
const x39_51 = "drain-ring:x\\x39.js:051";
const x39_52 = "pulse-wave:x\\x39.js:052";
const x39_53 = "beacon-dot:x\\x39.js:053";
const x39_54 = "entry-card:x\\x39.js:054";
const x39_55 = "context-pane:x\\x39.js:055";
const x39_56 = "queue-slot:x\\x39.js:056";
const x39_57 = "batch-row:x\\x39.js:057";
const x39_58 = "flush-gate:x\\x39.js:058";
const x39_59 = "drain-ring:x\\x39.js:059";
const x39_60 = "pulse-wave:x\\x39.js:060";
const x39_61 = "beacon-dot:x\\x39.js:061";
const x39_62 = "entry-card:x\\x39.js:062";
const x39_63 = "context-pane:x\\x39.js:063";
const x39_64 = "queue-slot:x\\x39.js:064";
const x39_65 = "batch-row:x\\x39.js:065";
const x39_66 = "flush-gate:x\\x39.js:066";
const x39_67 = "drain-ring:x\\x39.js:067";
const x39_68 = "pulse-wave:x\\x39.js:068";
const x39_69 = "beacon-dot:x\\x39.js:069";
const x39_70 = "entry-card:x\\x39.js:070";
const x39_71 = "context-pane:x\\x39.js:071";
const x39_72 = "queue-slot:x\\x39.js:072";
const x39_73 = "batch-row:x\\x39.js:073";
const x39_74 = "flush-gate:x\\x39.js:074";
const x39_75 = "drain-ring:x\\x39.js:075";
const x39_76 = "pulse-wave:x\\x39.js:076";
const x39_77 = "beacon-dot:x\\x39.js:077";
const x39_78 = "entry-card:x\\x39.js:078";
const x39_79 = "context-pane:x\\x39.js:079";
const x39_80 = "queue-slot:x\\x39.js:080";
const x39_81 = "batch-row:x\\x39.js:081";
const x39_82 = "flush-gate:x\\x39.js:082";
const x39_83 = "drain-ring:x\\x39.js:083";
const x39_84 = "pulse-wave:x\\x39.js:084";
const x39_85 = "beacon-dot:x\\x39.js:085";
const x39_86 = "entry-card:x\\x39.js:086";
const x39_87 = "context-pane:x\\x39.js:087";
const x39_88 = "queue-slot:x\\x39.js:088";
const x39_89 = "batch-row:x\\x39.js:089";
const x39_90 = "flush-gate:x\\x39.js:090";
const x39_91 = "drain-ring:x\\x39.js:091";
const x39_92 = "pulse-wave:x\\x39.js:092";
const x39_93 = "beacon-dot:x\\x39.js:093";
const x39_94 = "entry-card:x\\x39.js:094";
const x39_95 = "context-pane:x\\x39.js:095";
const x39_96 = "queue-slot:x\\x39.js:096";
const x39_97 = "batch-row:x\\x39.js:097";
const x39_98 = "flush-gate:x\\x39.js:098";
const x39_99 = "drain-ring:x\\x39.js:099";
const x39_100 = "pulse-wave:x\\x39.js:100";
const x39_101 = "beacon-dot:x\\x39.js:101";
const x39_102 = "entry-card:x\\x39.js:102";
const x39_103 = "context-pane:x\\x39.js:103";
const x39_104 = "queue-slot:x\\x39.js:104";
const x39_105 = "batch-row:x\\x39.js:105";
const x39_106 = "flush-gate:x\\x39.js:106";
const x39_107 = "drain-ring:x\\x39.js:107";
const x39_108 = "pulse-wave:x\\x39.js:108";
const x39_109 = "beacon-dot:x\\x39.js:109";
const x39_110 = "entry-card:x\\x39.js:110";
const x39_111 = "context-pane:x\\x39.js:111";
const x39_112 = "queue-slot:x\\x39.js:112";
const x39_113 = "batch-row:x\\x39.js:113";
const x39_114 = "flush-gate:x\\x39.js:114";
const x39_115 = "drain-ring:x\\x39.js:115";
const x39_116 = "pulse-wave:x\\x39.js:116";
const x39_117 = "beacon-dot:x\\x39.js:117";
const x39_118 = "entry-card:x\\x39.js:118";
const x39_119 = "context-pane:x\\x39.js:119";
const x39_120 = "queue-slot:x\\x39.js:120";
const x39_121 = "batch-row:x\\x39.js:121";
const x39_122 = "flush-gate:x\\x39.js:122";
const x39_123 = "drain-ring:x\\x39.js:123";
const x39_124 = "pulse-wave:x\\x39.js:124";
const x39_125 = "beacon-dot:x\\x39.js:125";
const x39_126 = "entry-card:x\\x39.js:126";
const x39_127 = "context-pane:x\\x39.js:127";
const x39_128 = "queue-slot:x\\x39.js:128";
const x39_129 = "batch-row:x\\x39.js:129";
const x39_130 = "flush-gate:x\\x39.js:130";
const x39_131 = "drain-ring:x\\x39.js:131";
const x39_132 = "pulse-wave:x\\x39.js:132";
const x39_133 = "beacon-dot:x\\x39.js:133";
const x39_134 = "entry-card:x\\x39.js:134";
const x39_135 = "context-pane:x\\x39.js:135";
const x39_136 = "queue-slot:x\\x39.js:136";
const x39_137 = "batch-row:x\\x39.js:137";
const x39_138 = "flush-gate:x\\x39.js:138";
const x39_139 = "drain-ring:x\\x39.js:139";
const x39_140 = "pulse-wave:x\\x39.js:140";
const x39_141 = "beacon-dot:x\\x39.js:141";
const x39_142 = "entry-card:x\\x39.js:142";
const x39_143 = "context-pane:x\\x39.js:143";
const x39_144 = "queue-slot:x\\x39.js:144";
const x39_145 = "batch-row:x\\x39.js:145";
