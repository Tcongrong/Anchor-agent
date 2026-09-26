import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 9,
  salt: 'b:09:track',
  order: [1, 2, 3, 4, 5, 6, 7, 0],
  sep: '\u2061',
  shift: 7,
  mask: 3428989708
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track9@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
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
const x09_0 = "queue-slot:x\\x09.js:000";
const x09_1 = "batch-row:x\\x09.js:001";
const x09_2 = "flush-gate:x\\x09.js:002";
const x09_3 = "drain-ring:x\\x09.js:003";
const x09_4 = "pulse-wave:x\\x09.js:004";
const x09_5 = "beacon-dot:x\\x09.js:005";
const x09_6 = "entry-card:x\\x09.js:006";
const x09_7 = "context-pane:x\\x09.js:007";
const x09_8 = "queue-slot:x\\x09.js:008";
const x09_9 = "batch-row:x\\x09.js:009";
const x09_10 = "flush-gate:x\\x09.js:010";
const x09_11 = "drain-ring:x\\x09.js:011";
const x09_12 = "pulse-wave:x\\x09.js:012";
const x09_13 = "beacon-dot:x\\x09.js:013";
const x09_14 = "entry-card:x\\x09.js:014";
const x09_15 = "context-pane:x\\x09.js:015";
const x09_16 = "queue-slot:x\\x09.js:016";
const x09_17 = "batch-row:x\\x09.js:017";
const x09_18 = "flush-gate:x\\x09.js:018";
const x09_19 = "drain-ring:x\\x09.js:019";
const x09_20 = "pulse-wave:x\\x09.js:020";
const x09_21 = "beacon-dot:x\\x09.js:021";
const x09_22 = "entry-card:x\\x09.js:022";
const x09_23 = "context-pane:x\\x09.js:023";
const x09_24 = "queue-slot:x\\x09.js:024";
const x09_25 = "batch-row:x\\x09.js:025";
const x09_26 = "flush-gate:x\\x09.js:026";
const x09_27 = "drain-ring:x\\x09.js:027";
const x09_28 = "pulse-wave:x\\x09.js:028";
const x09_29 = "beacon-dot:x\\x09.js:029";
const x09_30 = "entry-card:x\\x09.js:030";
const x09_31 = "context-pane:x\\x09.js:031";
const x09_32 = "queue-slot:x\\x09.js:032";
const x09_33 = "batch-row:x\\x09.js:033";
const x09_34 = "flush-gate:x\\x09.js:034";
const x09_35 = "drain-ring:x\\x09.js:035";
const x09_36 = "pulse-wave:x\\x09.js:036";
const x09_37 = "beacon-dot:x\\x09.js:037";
const x09_38 = "entry-card:x\\x09.js:038";
const x09_39 = "context-pane:x\\x09.js:039";
const x09_40 = "queue-slot:x\\x09.js:040";
const x09_41 = "batch-row:x\\x09.js:041";
const x09_42 = "flush-gate:x\\x09.js:042";
const x09_43 = "drain-ring:x\\x09.js:043";
const x09_44 = "pulse-wave:x\\x09.js:044";
const x09_45 = "beacon-dot:x\\x09.js:045";
const x09_46 = "entry-card:x\\x09.js:046";
const x09_47 = "context-pane:x\\x09.js:047";
const x09_48 = "queue-slot:x\\x09.js:048";
const x09_49 = "batch-row:x\\x09.js:049";
const x09_50 = "flush-gate:x\\x09.js:050";
const x09_51 = "drain-ring:x\\x09.js:051";
const x09_52 = "pulse-wave:x\\x09.js:052";
const x09_53 = "beacon-dot:x\\x09.js:053";
const x09_54 = "entry-card:x\\x09.js:054";
const x09_55 = "context-pane:x\\x09.js:055";
const x09_56 = "queue-slot:x\\x09.js:056";
const x09_57 = "batch-row:x\\x09.js:057";
const x09_58 = "flush-gate:x\\x09.js:058";
const x09_59 = "drain-ring:x\\x09.js:059";
const x09_60 = "pulse-wave:x\\x09.js:060";
const x09_61 = "beacon-dot:x\\x09.js:061";
const x09_62 = "entry-card:x\\x09.js:062";
const x09_63 = "context-pane:x\\x09.js:063";
const x09_64 = "queue-slot:x\\x09.js:064";
const x09_65 = "batch-row:x\\x09.js:065";
const x09_66 = "flush-gate:x\\x09.js:066";
const x09_67 = "drain-ring:x\\x09.js:067";
const x09_68 = "pulse-wave:x\\x09.js:068";
const x09_69 = "beacon-dot:x\\x09.js:069";
const x09_70 = "entry-card:x\\x09.js:070";
const x09_71 = "context-pane:x\\x09.js:071";
const x09_72 = "queue-slot:x\\x09.js:072";
const x09_73 = "batch-row:x\\x09.js:073";
const x09_74 = "flush-gate:x\\x09.js:074";
const x09_75 = "drain-ring:x\\x09.js:075";
const x09_76 = "pulse-wave:x\\x09.js:076";
const x09_77 = "beacon-dot:x\\x09.js:077";
const x09_78 = "entry-card:x\\x09.js:078";
const x09_79 = "context-pane:x\\x09.js:079";
const x09_80 = "queue-slot:x\\x09.js:080";
const x09_81 = "batch-row:x\\x09.js:081";
const x09_82 = "flush-gate:x\\x09.js:082";
const x09_83 = "drain-ring:x\\x09.js:083";
const x09_84 = "pulse-wave:x\\x09.js:084";
const x09_85 = "beacon-dot:x\\x09.js:085";
const x09_86 = "entry-card:x\\x09.js:086";
const x09_87 = "context-pane:x\\x09.js:087";
const x09_88 = "queue-slot:x\\x09.js:088";
const x09_89 = "batch-row:x\\x09.js:089";
const x09_90 = "flush-gate:x\\x09.js:090";
const x09_91 = "drain-ring:x\\x09.js:091";
const x09_92 = "pulse-wave:x\\x09.js:092";
const x09_93 = "beacon-dot:x\\x09.js:093";
const x09_94 = "entry-card:x\\x09.js:094";
const x09_95 = "context-pane:x\\x09.js:095";
const x09_96 = "queue-slot:x\\x09.js:096";
const x09_97 = "batch-row:x\\x09.js:097";
const x09_98 = "flush-gate:x\\x09.js:098";
const x09_99 = "drain-ring:x\\x09.js:099";
const x09_100 = "pulse-wave:x\\x09.js:100";
const x09_101 = "beacon-dot:x\\x09.js:101";
const x09_102 = "entry-card:x\\x09.js:102";
const x09_103 = "context-pane:x\\x09.js:103";
const x09_104 = "queue-slot:x\\x09.js:104";
const x09_105 = "batch-row:x\\x09.js:105";
const x09_106 = "flush-gate:x\\x09.js:106";
const x09_107 = "drain-ring:x\\x09.js:107";
const x09_108 = "pulse-wave:x\\x09.js:108";
const x09_109 = "beacon-dot:x\\x09.js:109";
const x09_110 = "entry-card:x\\x09.js:110";
const x09_111 = "context-pane:x\\x09.js:111";
const x09_112 = "queue-slot:x\\x09.js:112";
const x09_113 = "batch-row:x\\x09.js:113";
const x09_114 = "flush-gate:x\\x09.js:114";
const x09_115 = "drain-ring:x\\x09.js:115";
const x09_116 = "pulse-wave:x\\x09.js:116";
const x09_117 = "beacon-dot:x\\x09.js:117";
const x09_118 = "entry-card:x\\x09.js:118";
const x09_119 = "context-pane:x\\x09.js:119";
const x09_120 = "queue-slot:x\\x09.js:120";
const x09_121 = "batch-row:x\\x09.js:121";
const x09_122 = "flush-gate:x\\x09.js:122";
const x09_123 = "drain-ring:x\\x09.js:123";
const x09_124 = "pulse-wave:x\\x09.js:124";
const x09_125 = "beacon-dot:x\\x09.js:125";
const x09_126 = "entry-card:x\\x09.js:126";
const x09_127 = "context-pane:x\\x09.js:127";
const x09_128 = "queue-slot:x\\x09.js:128";
const x09_129 = "batch-row:x\\x09.js:129";
const x09_130 = "flush-gate:x\\x09.js:130";
const x09_131 = "drain-ring:x\\x09.js:131";
const x09_132 = "pulse-wave:x\\x09.js:132";
const x09_133 = "beacon-dot:x\\x09.js:133";
const x09_134 = "entry-card:x\\x09.js:134";
const x09_135 = "context-pane:x\\x09.js:135";
const x09_136 = "queue-slot:x\\x09.js:136";
const x09_137 = "batch-row:x\\x09.js:137";
const x09_138 = "flush-gate:x\\x09.js:138";
const x09_139 = "drain-ring:x\\x09.js:139";
const x09_140 = "pulse-wave:x\\x09.js:140";
const x09_141 = "beacon-dot:x\\x09.js:141";
const x09_142 = "entry-card:x\\x09.js:142";
const x09_143 = "context-pane:x\\x09.js:143";
const x09_144 = "queue-slot:x\\x09.js:144";
const x09_145 = "batch-row:x\\x09.js:145";
