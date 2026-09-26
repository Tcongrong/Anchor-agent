import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 20,
  salt: 'b:0k:track',
  order: [4, 5, 6, 7, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 11,
  mask: 2563012007
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain20@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x20_0 = "queue-slot:x\\x20.js:000";
const x20_1 = "batch-row:x\\x20.js:001";
const x20_2 = "flush-gate:x\\x20.js:002";
const x20_3 = "drain-ring:x\\x20.js:003";
const x20_4 = "pulse-wave:x\\x20.js:004";
const x20_5 = "beacon-dot:x\\x20.js:005";
const x20_6 = "entry-card:x\\x20.js:006";
const x20_7 = "context-pane:x\\x20.js:007";
const x20_8 = "queue-slot:x\\x20.js:008";
const x20_9 = "batch-row:x\\x20.js:009";
const x20_10 = "flush-gate:x\\x20.js:010";
const x20_11 = "drain-ring:x\\x20.js:011";
const x20_12 = "pulse-wave:x\\x20.js:012";
const x20_13 = "beacon-dot:x\\x20.js:013";
const x20_14 = "entry-card:x\\x20.js:014";
const x20_15 = "context-pane:x\\x20.js:015";
const x20_16 = "queue-slot:x\\x20.js:016";
const x20_17 = "batch-row:x\\x20.js:017";
const x20_18 = "flush-gate:x\\x20.js:018";
const x20_19 = "drain-ring:x\\x20.js:019";
const x20_20 = "pulse-wave:x\\x20.js:020";
const x20_21 = "beacon-dot:x\\x20.js:021";
const x20_22 = "entry-card:x\\x20.js:022";
const x20_23 = "context-pane:x\\x20.js:023";
const x20_24 = "queue-slot:x\\x20.js:024";
const x20_25 = "batch-row:x\\x20.js:025";
const x20_26 = "flush-gate:x\\x20.js:026";
const x20_27 = "drain-ring:x\\x20.js:027";
const x20_28 = "pulse-wave:x\\x20.js:028";
const x20_29 = "beacon-dot:x\\x20.js:029";
const x20_30 = "entry-card:x\\x20.js:030";
const x20_31 = "context-pane:x\\x20.js:031";
const x20_32 = "queue-slot:x\\x20.js:032";
const x20_33 = "batch-row:x\\x20.js:033";
const x20_34 = "flush-gate:x\\x20.js:034";
const x20_35 = "drain-ring:x\\x20.js:035";
const x20_36 = "pulse-wave:x\\x20.js:036";
const x20_37 = "beacon-dot:x\\x20.js:037";
const x20_38 = "entry-card:x\\x20.js:038";
const x20_39 = "context-pane:x\\x20.js:039";
const x20_40 = "queue-slot:x\\x20.js:040";
const x20_41 = "batch-row:x\\x20.js:041";
const x20_42 = "flush-gate:x\\x20.js:042";
const x20_43 = "drain-ring:x\\x20.js:043";
const x20_44 = "pulse-wave:x\\x20.js:044";
const x20_45 = "beacon-dot:x\\x20.js:045";
const x20_46 = "entry-card:x\\x20.js:046";
const x20_47 = "context-pane:x\\x20.js:047";
const x20_48 = "queue-slot:x\\x20.js:048";
const x20_49 = "batch-row:x\\x20.js:049";
const x20_50 = "flush-gate:x\\x20.js:050";
const x20_51 = "drain-ring:x\\x20.js:051";
const x20_52 = "pulse-wave:x\\x20.js:052";
const x20_53 = "beacon-dot:x\\x20.js:053";
const x20_54 = "entry-card:x\\x20.js:054";
const x20_55 = "context-pane:x\\x20.js:055";
const x20_56 = "queue-slot:x\\x20.js:056";
const x20_57 = "batch-row:x\\x20.js:057";
const x20_58 = "flush-gate:x\\x20.js:058";
const x20_59 = "drain-ring:x\\x20.js:059";
const x20_60 = "pulse-wave:x\\x20.js:060";
const x20_61 = "beacon-dot:x\\x20.js:061";
const x20_62 = "entry-card:x\\x20.js:062";
const x20_63 = "context-pane:x\\x20.js:063";
const x20_64 = "queue-slot:x\\x20.js:064";
const x20_65 = "batch-row:x\\x20.js:065";
const x20_66 = "flush-gate:x\\x20.js:066";
const x20_67 = "drain-ring:x\\x20.js:067";
const x20_68 = "pulse-wave:x\\x20.js:068";
const x20_69 = "beacon-dot:x\\x20.js:069";
const x20_70 = "entry-card:x\\x20.js:070";
const x20_71 = "context-pane:x\\x20.js:071";
const x20_72 = "queue-slot:x\\x20.js:072";
const x20_73 = "batch-row:x\\x20.js:073";
const x20_74 = "flush-gate:x\\x20.js:074";
const x20_75 = "drain-ring:x\\x20.js:075";
const x20_76 = "pulse-wave:x\\x20.js:076";
const x20_77 = "beacon-dot:x\\x20.js:077";
const x20_78 = "entry-card:x\\x20.js:078";
const x20_79 = "context-pane:x\\x20.js:079";
const x20_80 = "queue-slot:x\\x20.js:080";
const x20_81 = "batch-row:x\\x20.js:081";
const x20_82 = "flush-gate:x\\x20.js:082";
const x20_83 = "drain-ring:x\\x20.js:083";
const x20_84 = "pulse-wave:x\\x20.js:084";
const x20_85 = "beacon-dot:x\\x20.js:085";
const x20_86 = "entry-card:x\\x20.js:086";
const x20_87 = "context-pane:x\\x20.js:087";
const x20_88 = "queue-slot:x\\x20.js:088";
const x20_89 = "batch-row:x\\x20.js:089";
const x20_90 = "flush-gate:x\\x20.js:090";
const x20_91 = "drain-ring:x\\x20.js:091";
const x20_92 = "pulse-wave:x\\x20.js:092";
const x20_93 = "beacon-dot:x\\x20.js:093";
const x20_94 = "entry-card:x\\x20.js:094";
const x20_95 = "context-pane:x\\x20.js:095";
const x20_96 = "queue-slot:x\\x20.js:096";
const x20_97 = "batch-row:x\\x20.js:097";
const x20_98 = "flush-gate:x\\x20.js:098";
const x20_99 = "drain-ring:x\\x20.js:099";
const x20_100 = "pulse-wave:x\\x20.js:100";
const x20_101 = "beacon-dot:x\\x20.js:101";
const x20_102 = "entry-card:x\\x20.js:102";
const x20_103 = "context-pane:x\\x20.js:103";
const x20_104 = "queue-slot:x\\x20.js:104";
const x20_105 = "batch-row:x\\x20.js:105";
const x20_106 = "flush-gate:x\\x20.js:106";
const x20_107 = "drain-ring:x\\x20.js:107";
const x20_108 = "pulse-wave:x\\x20.js:108";
const x20_109 = "beacon-dot:x\\x20.js:109";
const x20_110 = "entry-card:x\\x20.js:110";
const x20_111 = "context-pane:x\\x20.js:111";
const x20_112 = "queue-slot:x\\x20.js:112";
const x20_113 = "batch-row:x\\x20.js:113";
const x20_114 = "flush-gate:x\\x20.js:114";
const x20_115 = "drain-ring:x\\x20.js:115";
const x20_116 = "pulse-wave:x\\x20.js:116";
const x20_117 = "beacon-dot:x\\x20.js:117";
const x20_118 = "entry-card:x\\x20.js:118";
const x20_119 = "context-pane:x\\x20.js:119";
const x20_120 = "queue-slot:x\\x20.js:120";
const x20_121 = "batch-row:x\\x20.js:121";
const x20_122 = "flush-gate:x\\x20.js:122";
const x20_123 = "drain-ring:x\\x20.js:123";
const x20_124 = "pulse-wave:x\\x20.js:124";
const x20_125 = "beacon-dot:x\\x20.js:125";
const x20_126 = "entry-card:x\\x20.js:126";
const x20_127 = "context-pane:x\\x20.js:127";
const x20_128 = "queue-slot:x\\x20.js:128";
const x20_129 = "batch-row:x\\x20.js:129";
const x20_130 = "flush-gate:x\\x20.js:130";
const x20_131 = "drain-ring:x\\x20.js:131";
const x20_132 = "pulse-wave:x\\x20.js:132";
const x20_133 = "beacon-dot:x\\x20.js:133";
const x20_134 = "entry-card:x\\x20.js:134";
const x20_135 = "context-pane:x\\x20.js:135";
const x20_136 = "queue-slot:x\\x20.js:136";
const x20_137 = "batch-row:x\\x20.js:137";
const x20_138 = "flush-gate:x\\x20.js:138";
const x20_139 = "drain-ring:x\\x20.js:139";
const x20_140 = "pulse-wave:x\\x20.js:140";
const x20_141 = "beacon-dot:x\\x20.js:141";
const x20_142 = "entry-card:x\\x20.js:142";
const x20_143 = "context-pane:x\\x20.js:143";
const x20_144 = "queue-slot:x\\x20.js:144";
const x20_145 = "batch-row:x\\x20.js:145";
