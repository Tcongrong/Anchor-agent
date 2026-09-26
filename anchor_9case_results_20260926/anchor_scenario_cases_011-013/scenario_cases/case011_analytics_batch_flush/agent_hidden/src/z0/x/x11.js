import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 11,
  salt: 'b:0b:track',
  order: [3, 4, 5, 6, 7, 0, 1, 2],
  sep: '\u2063',
  shift: 9,
  mask: 147926638
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain11@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'r', i: 2, v: '4', y: '4', n: 1 },
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
const x11_0 = "queue-slot:x\\x11.js:000";
const x11_1 = "batch-row:x\\x11.js:001";
const x11_2 = "flush-gate:x\\x11.js:002";
const x11_3 = "drain-ring:x\\x11.js:003";
const x11_4 = "pulse-wave:x\\x11.js:004";
const x11_5 = "beacon-dot:x\\x11.js:005";
const x11_6 = "entry-card:x\\x11.js:006";
const x11_7 = "context-pane:x\\x11.js:007";
const x11_8 = "queue-slot:x\\x11.js:008";
const x11_9 = "batch-row:x\\x11.js:009";
const x11_10 = "flush-gate:x\\x11.js:010";
const x11_11 = "drain-ring:x\\x11.js:011";
const x11_12 = "pulse-wave:x\\x11.js:012";
const x11_13 = "beacon-dot:x\\x11.js:013";
const x11_14 = "entry-card:x\\x11.js:014";
const x11_15 = "context-pane:x\\x11.js:015";
const x11_16 = "queue-slot:x\\x11.js:016";
const x11_17 = "batch-row:x\\x11.js:017";
const x11_18 = "flush-gate:x\\x11.js:018";
const x11_19 = "drain-ring:x\\x11.js:019";
const x11_20 = "pulse-wave:x\\x11.js:020";
const x11_21 = "beacon-dot:x\\x11.js:021";
const x11_22 = "entry-card:x\\x11.js:022";
const x11_23 = "context-pane:x\\x11.js:023";
const x11_24 = "queue-slot:x\\x11.js:024";
const x11_25 = "batch-row:x\\x11.js:025";
const x11_26 = "flush-gate:x\\x11.js:026";
const x11_27 = "drain-ring:x\\x11.js:027";
const x11_28 = "pulse-wave:x\\x11.js:028";
const x11_29 = "beacon-dot:x\\x11.js:029";
const x11_30 = "entry-card:x\\x11.js:030";
const x11_31 = "context-pane:x\\x11.js:031";
const x11_32 = "queue-slot:x\\x11.js:032";
const x11_33 = "batch-row:x\\x11.js:033";
const x11_34 = "flush-gate:x\\x11.js:034";
const x11_35 = "drain-ring:x\\x11.js:035";
const x11_36 = "pulse-wave:x\\x11.js:036";
const x11_37 = "beacon-dot:x\\x11.js:037";
const x11_38 = "entry-card:x\\x11.js:038";
const x11_39 = "context-pane:x\\x11.js:039";
const x11_40 = "queue-slot:x\\x11.js:040";
const x11_41 = "batch-row:x\\x11.js:041";
const x11_42 = "flush-gate:x\\x11.js:042";
const x11_43 = "drain-ring:x\\x11.js:043";
const x11_44 = "pulse-wave:x\\x11.js:044";
const x11_45 = "beacon-dot:x\\x11.js:045";
const x11_46 = "entry-card:x\\x11.js:046";
const x11_47 = "context-pane:x\\x11.js:047";
const x11_48 = "queue-slot:x\\x11.js:048";
const x11_49 = "batch-row:x\\x11.js:049";
const x11_50 = "flush-gate:x\\x11.js:050";
const x11_51 = "drain-ring:x\\x11.js:051";
const x11_52 = "pulse-wave:x\\x11.js:052";
const x11_53 = "beacon-dot:x\\x11.js:053";
const x11_54 = "entry-card:x\\x11.js:054";
const x11_55 = "context-pane:x\\x11.js:055";
const x11_56 = "queue-slot:x\\x11.js:056";
const x11_57 = "batch-row:x\\x11.js:057";
const x11_58 = "flush-gate:x\\x11.js:058";
const x11_59 = "drain-ring:x\\x11.js:059";
const x11_60 = "pulse-wave:x\\x11.js:060";
const x11_61 = "beacon-dot:x\\x11.js:061";
const x11_62 = "entry-card:x\\x11.js:062";
const x11_63 = "context-pane:x\\x11.js:063";
const x11_64 = "queue-slot:x\\x11.js:064";
const x11_65 = "batch-row:x\\x11.js:065";
const x11_66 = "flush-gate:x\\x11.js:066";
const x11_67 = "drain-ring:x\\x11.js:067";
const x11_68 = "pulse-wave:x\\x11.js:068";
const x11_69 = "beacon-dot:x\\x11.js:069";
const x11_70 = "entry-card:x\\x11.js:070";
const x11_71 = "context-pane:x\\x11.js:071";
const x11_72 = "queue-slot:x\\x11.js:072";
const x11_73 = "batch-row:x\\x11.js:073";
const x11_74 = "flush-gate:x\\x11.js:074";
const x11_75 = "drain-ring:x\\x11.js:075";
const x11_76 = "pulse-wave:x\\x11.js:076";
const x11_77 = "beacon-dot:x\\x11.js:077";
const x11_78 = "entry-card:x\\x11.js:078";
const x11_79 = "context-pane:x\\x11.js:079";
const x11_80 = "queue-slot:x\\x11.js:080";
const x11_81 = "batch-row:x\\x11.js:081";
const x11_82 = "flush-gate:x\\x11.js:082";
const x11_83 = "drain-ring:x\\x11.js:083";
const x11_84 = "pulse-wave:x\\x11.js:084";
const x11_85 = "beacon-dot:x\\x11.js:085";
const x11_86 = "entry-card:x\\x11.js:086";
const x11_87 = "context-pane:x\\x11.js:087";
const x11_88 = "queue-slot:x\\x11.js:088";
const x11_89 = "batch-row:x\\x11.js:089";
const x11_90 = "flush-gate:x\\x11.js:090";
const x11_91 = "drain-ring:x\\x11.js:091";
const x11_92 = "pulse-wave:x\\x11.js:092";
const x11_93 = "beacon-dot:x\\x11.js:093";
const x11_94 = "entry-card:x\\x11.js:094";
const x11_95 = "context-pane:x\\x11.js:095";
const x11_96 = "queue-slot:x\\x11.js:096";
const x11_97 = "batch-row:x\\x11.js:097";
const x11_98 = "flush-gate:x\\x11.js:098";
const x11_99 = "drain-ring:x\\x11.js:099";
const x11_100 = "pulse-wave:x\\x11.js:100";
const x11_101 = "beacon-dot:x\\x11.js:101";
const x11_102 = "entry-card:x\\x11.js:102";
const x11_103 = "context-pane:x\\x11.js:103";
const x11_104 = "queue-slot:x\\x11.js:104";
const x11_105 = "batch-row:x\\x11.js:105";
const x11_106 = "flush-gate:x\\x11.js:106";
const x11_107 = "drain-ring:x\\x11.js:107";
const x11_108 = "pulse-wave:x\\x11.js:108";
const x11_109 = "beacon-dot:x\\x11.js:109";
const x11_110 = "entry-card:x\\x11.js:110";
const x11_111 = "context-pane:x\\x11.js:111";
const x11_112 = "queue-slot:x\\x11.js:112";
const x11_113 = "batch-row:x\\x11.js:113";
const x11_114 = "flush-gate:x\\x11.js:114";
const x11_115 = "drain-ring:x\\x11.js:115";
const x11_116 = "pulse-wave:x\\x11.js:116";
const x11_117 = "beacon-dot:x\\x11.js:117";
const x11_118 = "entry-card:x\\x11.js:118";
const x11_119 = "context-pane:x\\x11.js:119";
const x11_120 = "queue-slot:x\\x11.js:120";
const x11_121 = "batch-row:x\\x11.js:121";
const x11_122 = "flush-gate:x\\x11.js:122";
const x11_123 = "drain-ring:x\\x11.js:123";
const x11_124 = "pulse-wave:x\\x11.js:124";
const x11_125 = "beacon-dot:x\\x11.js:125";
const x11_126 = "entry-card:x\\x11.js:126";
const x11_127 = "context-pane:x\\x11.js:127";
const x11_128 = "queue-slot:x\\x11.js:128";
const x11_129 = "batch-row:x\\x11.js:129";
const x11_130 = "flush-gate:x\\x11.js:130";
const x11_131 = "drain-ring:x\\x11.js:131";
const x11_132 = "pulse-wave:x\\x11.js:132";
const x11_133 = "beacon-dot:x\\x11.js:133";
const x11_134 = "entry-card:x\\x11.js:134";
const x11_135 = "context-pane:x\\x11.js:135";
const x11_136 = "queue-slot:x\\x11.js:136";
const x11_137 = "batch-row:x\\x11.js:137";
const x11_138 = "flush-gate:x\\x11.js:138";
const x11_139 = "drain-ring:x\\x11.js:139";
const x11_140 = "pulse-wave:x\\x11.js:140";
const x11_141 = "beacon-dot:x\\x11.js:141";
const x11_142 = "entry-card:x\\x11.js:142";
const x11_143 = "context-pane:x\\x11.js:143";
const x11_144 = "queue-slot:x\\x11.js:144";
const x11_145 = "batch-row:x\\x11.js:145";
