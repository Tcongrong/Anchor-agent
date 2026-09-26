import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 21,
  salt: 'b:0l:track',
  order: [5, 6, 7, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 5,
  mask: 922480472
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track21@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
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
const x21_0 = "queue-slot:x\\x21.js:000";
const x21_1 = "batch-row:x\\x21.js:001";
const x21_2 = "flush-gate:x\\x21.js:002";
const x21_3 = "drain-ring:x\\x21.js:003";
const x21_4 = "pulse-wave:x\\x21.js:004";
const x21_5 = "beacon-dot:x\\x21.js:005";
const x21_6 = "entry-card:x\\x21.js:006";
const x21_7 = "context-pane:x\\x21.js:007";
const x21_8 = "queue-slot:x\\x21.js:008";
const x21_9 = "batch-row:x\\x21.js:009";
const x21_10 = "flush-gate:x\\x21.js:010";
const x21_11 = "drain-ring:x\\x21.js:011";
const x21_12 = "pulse-wave:x\\x21.js:012";
const x21_13 = "beacon-dot:x\\x21.js:013";
const x21_14 = "entry-card:x\\x21.js:014";
const x21_15 = "context-pane:x\\x21.js:015";
const x21_16 = "queue-slot:x\\x21.js:016";
const x21_17 = "batch-row:x\\x21.js:017";
const x21_18 = "flush-gate:x\\x21.js:018";
const x21_19 = "drain-ring:x\\x21.js:019";
const x21_20 = "pulse-wave:x\\x21.js:020";
const x21_21 = "beacon-dot:x\\x21.js:021";
const x21_22 = "entry-card:x\\x21.js:022";
const x21_23 = "context-pane:x\\x21.js:023";
const x21_24 = "queue-slot:x\\x21.js:024";
const x21_25 = "batch-row:x\\x21.js:025";
const x21_26 = "flush-gate:x\\x21.js:026";
const x21_27 = "drain-ring:x\\x21.js:027";
const x21_28 = "pulse-wave:x\\x21.js:028";
const x21_29 = "beacon-dot:x\\x21.js:029";
const x21_30 = "entry-card:x\\x21.js:030";
const x21_31 = "context-pane:x\\x21.js:031";
const x21_32 = "queue-slot:x\\x21.js:032";
const x21_33 = "batch-row:x\\x21.js:033";
const x21_34 = "flush-gate:x\\x21.js:034";
const x21_35 = "drain-ring:x\\x21.js:035";
const x21_36 = "pulse-wave:x\\x21.js:036";
const x21_37 = "beacon-dot:x\\x21.js:037";
const x21_38 = "entry-card:x\\x21.js:038";
const x21_39 = "context-pane:x\\x21.js:039";
const x21_40 = "queue-slot:x\\x21.js:040";
const x21_41 = "batch-row:x\\x21.js:041";
const x21_42 = "flush-gate:x\\x21.js:042";
const x21_43 = "drain-ring:x\\x21.js:043";
const x21_44 = "pulse-wave:x\\x21.js:044";
const x21_45 = "beacon-dot:x\\x21.js:045";
const x21_46 = "entry-card:x\\x21.js:046";
const x21_47 = "context-pane:x\\x21.js:047";
const x21_48 = "queue-slot:x\\x21.js:048";
const x21_49 = "batch-row:x\\x21.js:049";
const x21_50 = "flush-gate:x\\x21.js:050";
const x21_51 = "drain-ring:x\\x21.js:051";
const x21_52 = "pulse-wave:x\\x21.js:052";
const x21_53 = "beacon-dot:x\\x21.js:053";
const x21_54 = "entry-card:x\\x21.js:054";
const x21_55 = "context-pane:x\\x21.js:055";
const x21_56 = "queue-slot:x\\x21.js:056";
const x21_57 = "batch-row:x\\x21.js:057";
const x21_58 = "flush-gate:x\\x21.js:058";
const x21_59 = "drain-ring:x\\x21.js:059";
const x21_60 = "pulse-wave:x\\x21.js:060";
const x21_61 = "beacon-dot:x\\x21.js:061";
const x21_62 = "entry-card:x\\x21.js:062";
const x21_63 = "context-pane:x\\x21.js:063";
const x21_64 = "queue-slot:x\\x21.js:064";
const x21_65 = "batch-row:x\\x21.js:065";
const x21_66 = "flush-gate:x\\x21.js:066";
const x21_67 = "drain-ring:x\\x21.js:067";
const x21_68 = "pulse-wave:x\\x21.js:068";
const x21_69 = "beacon-dot:x\\x21.js:069";
const x21_70 = "entry-card:x\\x21.js:070";
const x21_71 = "context-pane:x\\x21.js:071";
const x21_72 = "queue-slot:x\\x21.js:072";
const x21_73 = "batch-row:x\\x21.js:073";
const x21_74 = "flush-gate:x\\x21.js:074";
const x21_75 = "drain-ring:x\\x21.js:075";
const x21_76 = "pulse-wave:x\\x21.js:076";
const x21_77 = "beacon-dot:x\\x21.js:077";
const x21_78 = "entry-card:x\\x21.js:078";
const x21_79 = "context-pane:x\\x21.js:079";
const x21_80 = "queue-slot:x\\x21.js:080";
const x21_81 = "batch-row:x\\x21.js:081";
const x21_82 = "flush-gate:x\\x21.js:082";
const x21_83 = "drain-ring:x\\x21.js:083";
const x21_84 = "pulse-wave:x\\x21.js:084";
const x21_85 = "beacon-dot:x\\x21.js:085";
const x21_86 = "entry-card:x\\x21.js:086";
const x21_87 = "context-pane:x\\x21.js:087";
const x21_88 = "queue-slot:x\\x21.js:088";
const x21_89 = "batch-row:x\\x21.js:089";
const x21_90 = "flush-gate:x\\x21.js:090";
const x21_91 = "drain-ring:x\\x21.js:091";
const x21_92 = "pulse-wave:x\\x21.js:092";
const x21_93 = "beacon-dot:x\\x21.js:093";
const x21_94 = "entry-card:x\\x21.js:094";
const x21_95 = "context-pane:x\\x21.js:095";
const x21_96 = "queue-slot:x\\x21.js:096";
const x21_97 = "batch-row:x\\x21.js:097";
const x21_98 = "flush-gate:x\\x21.js:098";
const x21_99 = "drain-ring:x\\x21.js:099";
const x21_100 = "pulse-wave:x\\x21.js:100";
const x21_101 = "beacon-dot:x\\x21.js:101";
const x21_102 = "entry-card:x\\x21.js:102";
const x21_103 = "context-pane:x\\x21.js:103";
const x21_104 = "queue-slot:x\\x21.js:104";
const x21_105 = "batch-row:x\\x21.js:105";
const x21_106 = "flush-gate:x\\x21.js:106";
const x21_107 = "drain-ring:x\\x21.js:107";
const x21_108 = "pulse-wave:x\\x21.js:108";
const x21_109 = "beacon-dot:x\\x21.js:109";
const x21_110 = "entry-card:x\\x21.js:110";
const x21_111 = "context-pane:x\\x21.js:111";
const x21_112 = "queue-slot:x\\x21.js:112";
const x21_113 = "batch-row:x\\x21.js:113";
const x21_114 = "flush-gate:x\\x21.js:114";
const x21_115 = "drain-ring:x\\x21.js:115";
const x21_116 = "pulse-wave:x\\x21.js:116";
const x21_117 = "beacon-dot:x\\x21.js:117";
const x21_118 = "entry-card:x\\x21.js:118";
const x21_119 = "context-pane:x\\x21.js:119";
const x21_120 = "queue-slot:x\\x21.js:120";
const x21_121 = "batch-row:x\\x21.js:121";
const x21_122 = "flush-gate:x\\x21.js:122";
const x21_123 = "drain-ring:x\\x21.js:123";
const x21_124 = "pulse-wave:x\\x21.js:124";
const x21_125 = "beacon-dot:x\\x21.js:125";
const x21_126 = "entry-card:x\\x21.js:126";
const x21_127 = "context-pane:x\\x21.js:127";
const x21_128 = "queue-slot:x\\x21.js:128";
const x21_129 = "batch-row:x\\x21.js:129";
const x21_130 = "flush-gate:x\\x21.js:130";
const x21_131 = "drain-ring:x\\x21.js:131";
const x21_132 = "pulse-wave:x\\x21.js:132";
const x21_133 = "beacon-dot:x\\x21.js:133";
const x21_134 = "entry-card:x\\x21.js:134";
const x21_135 = "context-pane:x\\x21.js:135";
const x21_136 = "queue-slot:x\\x21.js:136";
const x21_137 = "batch-row:x\\x21.js:137";
const x21_138 = "flush-gate:x\\x21.js:138";
const x21_139 = "drain-ring:x\\x21.js:139";
const x21_140 = "pulse-wave:x\\x21.js:140";
const x21_141 = "beacon-dot:x\\x21.js:141";
const x21_142 = "entry-card:x\\x21.js:142";
const x21_143 = "context-pane:x\\x21.js:143";
const x21_144 = "queue-slot:x\\x21.js:144";
const x21_145 = "batch-row:x\\x21.js:145";
