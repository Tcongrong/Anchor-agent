import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 2,
  salt: 'b:02:track',
  order: [2, 3, 4, 5, 6, 7, 0, 1],
  sep: '\u2062',
  shift: 7,
  mask: 2027808565
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain2@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '2', y: '2', n: 1 },
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
const x02_0 = "queue-slot:x\\x02.js:000";
const x02_1 = "batch-row:x\\x02.js:001";
const x02_2 = "flush-gate:x\\x02.js:002";
const x02_3 = "drain-ring:x\\x02.js:003";
const x02_4 = "pulse-wave:x\\x02.js:004";
const x02_5 = "beacon-dot:x\\x02.js:005";
const x02_6 = "entry-card:x\\x02.js:006";
const x02_7 = "context-pane:x\\x02.js:007";
const x02_8 = "queue-slot:x\\x02.js:008";
const x02_9 = "batch-row:x\\x02.js:009";
const x02_10 = "flush-gate:x\\x02.js:010";
const x02_11 = "drain-ring:x\\x02.js:011";
const x02_12 = "pulse-wave:x\\x02.js:012";
const x02_13 = "beacon-dot:x\\x02.js:013";
const x02_14 = "entry-card:x\\x02.js:014";
const x02_15 = "context-pane:x\\x02.js:015";
const x02_16 = "queue-slot:x\\x02.js:016";
const x02_17 = "batch-row:x\\x02.js:017";
const x02_18 = "flush-gate:x\\x02.js:018";
const x02_19 = "drain-ring:x\\x02.js:019";
const x02_20 = "pulse-wave:x\\x02.js:020";
const x02_21 = "beacon-dot:x\\x02.js:021";
const x02_22 = "entry-card:x\\x02.js:022";
const x02_23 = "context-pane:x\\x02.js:023";
const x02_24 = "queue-slot:x\\x02.js:024";
const x02_25 = "batch-row:x\\x02.js:025";
const x02_26 = "flush-gate:x\\x02.js:026";
const x02_27 = "drain-ring:x\\x02.js:027";
const x02_28 = "pulse-wave:x\\x02.js:028";
const x02_29 = "beacon-dot:x\\x02.js:029";
const x02_30 = "entry-card:x\\x02.js:030";
const x02_31 = "context-pane:x\\x02.js:031";
const x02_32 = "queue-slot:x\\x02.js:032";
const x02_33 = "batch-row:x\\x02.js:033";
const x02_34 = "flush-gate:x\\x02.js:034";
const x02_35 = "drain-ring:x\\x02.js:035";
const x02_36 = "pulse-wave:x\\x02.js:036";
const x02_37 = "beacon-dot:x\\x02.js:037";
const x02_38 = "entry-card:x\\x02.js:038";
const x02_39 = "context-pane:x\\x02.js:039";
const x02_40 = "queue-slot:x\\x02.js:040";
const x02_41 = "batch-row:x\\x02.js:041";
const x02_42 = "flush-gate:x\\x02.js:042";
const x02_43 = "drain-ring:x\\x02.js:043";
const x02_44 = "pulse-wave:x\\x02.js:044";
const x02_45 = "beacon-dot:x\\x02.js:045";
const x02_46 = "entry-card:x\\x02.js:046";
const x02_47 = "context-pane:x\\x02.js:047";
const x02_48 = "queue-slot:x\\x02.js:048";
const x02_49 = "batch-row:x\\x02.js:049";
const x02_50 = "flush-gate:x\\x02.js:050";
const x02_51 = "drain-ring:x\\x02.js:051";
const x02_52 = "pulse-wave:x\\x02.js:052";
const x02_53 = "beacon-dot:x\\x02.js:053";
const x02_54 = "entry-card:x\\x02.js:054";
const x02_55 = "context-pane:x\\x02.js:055";
const x02_56 = "queue-slot:x\\x02.js:056";
const x02_57 = "batch-row:x\\x02.js:057";
const x02_58 = "flush-gate:x\\x02.js:058";
const x02_59 = "drain-ring:x\\x02.js:059";
const x02_60 = "pulse-wave:x\\x02.js:060";
const x02_61 = "beacon-dot:x\\x02.js:061";
const x02_62 = "entry-card:x\\x02.js:062";
const x02_63 = "context-pane:x\\x02.js:063";
const x02_64 = "queue-slot:x\\x02.js:064";
const x02_65 = "batch-row:x\\x02.js:065";
const x02_66 = "flush-gate:x\\x02.js:066";
const x02_67 = "drain-ring:x\\x02.js:067";
const x02_68 = "pulse-wave:x\\x02.js:068";
const x02_69 = "beacon-dot:x\\x02.js:069";
const x02_70 = "entry-card:x\\x02.js:070";
const x02_71 = "context-pane:x\\x02.js:071";
const x02_72 = "queue-slot:x\\x02.js:072";
const x02_73 = "batch-row:x\\x02.js:073";
const x02_74 = "flush-gate:x\\x02.js:074";
const x02_75 = "drain-ring:x\\x02.js:075";
const x02_76 = "pulse-wave:x\\x02.js:076";
const x02_77 = "beacon-dot:x\\x02.js:077";
const x02_78 = "entry-card:x\\x02.js:078";
const x02_79 = "context-pane:x\\x02.js:079";
const x02_80 = "queue-slot:x\\x02.js:080";
const x02_81 = "batch-row:x\\x02.js:081";
const x02_82 = "flush-gate:x\\x02.js:082";
const x02_83 = "drain-ring:x\\x02.js:083";
const x02_84 = "pulse-wave:x\\x02.js:084";
const x02_85 = "beacon-dot:x\\x02.js:085";
const x02_86 = "entry-card:x\\x02.js:086";
const x02_87 = "context-pane:x\\x02.js:087";
const x02_88 = "queue-slot:x\\x02.js:088";
const x02_89 = "batch-row:x\\x02.js:089";
const x02_90 = "flush-gate:x\\x02.js:090";
const x02_91 = "drain-ring:x\\x02.js:091";
const x02_92 = "pulse-wave:x\\x02.js:092";
const x02_93 = "beacon-dot:x\\x02.js:093";
const x02_94 = "entry-card:x\\x02.js:094";
const x02_95 = "context-pane:x\\x02.js:095";
const x02_96 = "queue-slot:x\\x02.js:096";
const x02_97 = "batch-row:x\\x02.js:097";
const x02_98 = "flush-gate:x\\x02.js:098";
const x02_99 = "drain-ring:x\\x02.js:099";
const x02_100 = "pulse-wave:x\\x02.js:100";
const x02_101 = "beacon-dot:x\\x02.js:101";
const x02_102 = "entry-card:x\\x02.js:102";
const x02_103 = "context-pane:x\\x02.js:103";
const x02_104 = "queue-slot:x\\x02.js:104";
const x02_105 = "batch-row:x\\x02.js:105";
const x02_106 = "flush-gate:x\\x02.js:106";
const x02_107 = "drain-ring:x\\x02.js:107";
const x02_108 = "pulse-wave:x\\x02.js:108";
const x02_109 = "beacon-dot:x\\x02.js:109";
const x02_110 = "entry-card:x\\x02.js:110";
const x02_111 = "context-pane:x\\x02.js:111";
const x02_112 = "queue-slot:x\\x02.js:112";
const x02_113 = "batch-row:x\\x02.js:113";
const x02_114 = "flush-gate:x\\x02.js:114";
const x02_115 = "drain-ring:x\\x02.js:115";
const x02_116 = "pulse-wave:x\\x02.js:116";
const x02_117 = "beacon-dot:x\\x02.js:117";
const x02_118 = "entry-card:x\\x02.js:118";
const x02_119 = "context-pane:x\\x02.js:119";
const x02_120 = "queue-slot:x\\x02.js:120";
const x02_121 = "batch-row:x\\x02.js:121";
const x02_122 = "flush-gate:x\\x02.js:122";
const x02_123 = "drain-ring:x\\x02.js:123";
const x02_124 = "pulse-wave:x\\x02.js:124";
const x02_125 = "beacon-dot:x\\x02.js:125";
const x02_126 = "entry-card:x\\x02.js:126";
const x02_127 = "context-pane:x\\x02.js:127";
const x02_128 = "queue-slot:x\\x02.js:128";
const x02_129 = "batch-row:x\\x02.js:129";
const x02_130 = "flush-gate:x\\x02.js:130";
const x02_131 = "drain-ring:x\\x02.js:131";
const x02_132 = "pulse-wave:x\\x02.js:132";
const x02_133 = "beacon-dot:x\\x02.js:133";
const x02_134 = "entry-card:x\\x02.js:134";
const x02_135 = "context-pane:x\\x02.js:135";
const x02_136 = "queue-slot:x\\x02.js:136";
const x02_137 = "batch-row:x\\x02.js:137";
const x02_138 = "flush-gate:x\\x02.js:138";
const x02_139 = "drain-ring:x\\x02.js:139";
const x02_140 = "pulse-wave:x\\x02.js:140";
const x02_141 = "beacon-dot:x\\x02.js:141";
const x02_142 = "entry-card:x\\x02.js:142";
const x02_143 = "context-pane:x\\x02.js:143";
const x02_144 = "queue-slot:x\\x02.js:144";
const x02_145 = "batch-row:x\\x02.js:145";
