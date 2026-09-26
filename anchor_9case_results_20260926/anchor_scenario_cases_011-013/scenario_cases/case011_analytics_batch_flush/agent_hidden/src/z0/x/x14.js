import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 14,
  salt: 'b:0e:track',
  order: [6, 7, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 5,
  mask: 3816266625
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'drain14@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '0', y: '0', n: 1 },
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
const x14_0 = "queue-slot:x\\x14.js:000";
const x14_1 = "batch-row:x\\x14.js:001";
const x14_2 = "flush-gate:x\\x14.js:002";
const x14_3 = "drain-ring:x\\x14.js:003";
const x14_4 = "pulse-wave:x\\x14.js:004";
const x14_5 = "beacon-dot:x\\x14.js:005";
const x14_6 = "entry-card:x\\x14.js:006";
const x14_7 = "context-pane:x\\x14.js:007";
const x14_8 = "queue-slot:x\\x14.js:008";
const x14_9 = "batch-row:x\\x14.js:009";
const x14_10 = "flush-gate:x\\x14.js:010";
const x14_11 = "drain-ring:x\\x14.js:011";
const x14_12 = "pulse-wave:x\\x14.js:012";
const x14_13 = "beacon-dot:x\\x14.js:013";
const x14_14 = "entry-card:x\\x14.js:014";
const x14_15 = "context-pane:x\\x14.js:015";
const x14_16 = "queue-slot:x\\x14.js:016";
const x14_17 = "batch-row:x\\x14.js:017";
const x14_18 = "flush-gate:x\\x14.js:018";
const x14_19 = "drain-ring:x\\x14.js:019";
const x14_20 = "pulse-wave:x\\x14.js:020";
const x14_21 = "beacon-dot:x\\x14.js:021";
const x14_22 = "entry-card:x\\x14.js:022";
const x14_23 = "context-pane:x\\x14.js:023";
const x14_24 = "queue-slot:x\\x14.js:024";
const x14_25 = "batch-row:x\\x14.js:025";
const x14_26 = "flush-gate:x\\x14.js:026";
const x14_27 = "drain-ring:x\\x14.js:027";
const x14_28 = "pulse-wave:x\\x14.js:028";
const x14_29 = "beacon-dot:x\\x14.js:029";
const x14_30 = "entry-card:x\\x14.js:030";
const x14_31 = "context-pane:x\\x14.js:031";
const x14_32 = "queue-slot:x\\x14.js:032";
const x14_33 = "batch-row:x\\x14.js:033";
const x14_34 = "flush-gate:x\\x14.js:034";
const x14_35 = "drain-ring:x\\x14.js:035";
const x14_36 = "pulse-wave:x\\x14.js:036";
const x14_37 = "beacon-dot:x\\x14.js:037";
const x14_38 = "entry-card:x\\x14.js:038";
const x14_39 = "context-pane:x\\x14.js:039";
const x14_40 = "queue-slot:x\\x14.js:040";
const x14_41 = "batch-row:x\\x14.js:041";
const x14_42 = "flush-gate:x\\x14.js:042";
const x14_43 = "drain-ring:x\\x14.js:043";
const x14_44 = "pulse-wave:x\\x14.js:044";
const x14_45 = "beacon-dot:x\\x14.js:045";
const x14_46 = "entry-card:x\\x14.js:046";
const x14_47 = "context-pane:x\\x14.js:047";
const x14_48 = "queue-slot:x\\x14.js:048";
const x14_49 = "batch-row:x\\x14.js:049";
const x14_50 = "flush-gate:x\\x14.js:050";
const x14_51 = "drain-ring:x\\x14.js:051";
const x14_52 = "pulse-wave:x\\x14.js:052";
const x14_53 = "beacon-dot:x\\x14.js:053";
const x14_54 = "entry-card:x\\x14.js:054";
const x14_55 = "context-pane:x\\x14.js:055";
const x14_56 = "queue-slot:x\\x14.js:056";
const x14_57 = "batch-row:x\\x14.js:057";
const x14_58 = "flush-gate:x\\x14.js:058";
const x14_59 = "drain-ring:x\\x14.js:059";
const x14_60 = "pulse-wave:x\\x14.js:060";
const x14_61 = "beacon-dot:x\\x14.js:061";
const x14_62 = "entry-card:x\\x14.js:062";
const x14_63 = "context-pane:x\\x14.js:063";
const x14_64 = "queue-slot:x\\x14.js:064";
const x14_65 = "batch-row:x\\x14.js:065";
const x14_66 = "flush-gate:x\\x14.js:066";
const x14_67 = "drain-ring:x\\x14.js:067";
const x14_68 = "pulse-wave:x\\x14.js:068";
const x14_69 = "beacon-dot:x\\x14.js:069";
const x14_70 = "entry-card:x\\x14.js:070";
const x14_71 = "context-pane:x\\x14.js:071";
const x14_72 = "queue-slot:x\\x14.js:072";
const x14_73 = "batch-row:x\\x14.js:073";
const x14_74 = "flush-gate:x\\x14.js:074";
const x14_75 = "drain-ring:x\\x14.js:075";
const x14_76 = "pulse-wave:x\\x14.js:076";
const x14_77 = "beacon-dot:x\\x14.js:077";
const x14_78 = "entry-card:x\\x14.js:078";
const x14_79 = "context-pane:x\\x14.js:079";
const x14_80 = "queue-slot:x\\x14.js:080";
const x14_81 = "batch-row:x\\x14.js:081";
const x14_82 = "flush-gate:x\\x14.js:082";
const x14_83 = "drain-ring:x\\x14.js:083";
const x14_84 = "pulse-wave:x\\x14.js:084";
const x14_85 = "beacon-dot:x\\x14.js:085";
const x14_86 = "entry-card:x\\x14.js:086";
const x14_87 = "context-pane:x\\x14.js:087";
const x14_88 = "queue-slot:x\\x14.js:088";
const x14_89 = "batch-row:x\\x14.js:089";
const x14_90 = "flush-gate:x\\x14.js:090";
const x14_91 = "drain-ring:x\\x14.js:091";
const x14_92 = "pulse-wave:x\\x14.js:092";
const x14_93 = "beacon-dot:x\\x14.js:093";
const x14_94 = "entry-card:x\\x14.js:094";
const x14_95 = "context-pane:x\\x14.js:095";
const x14_96 = "queue-slot:x\\x14.js:096";
const x14_97 = "batch-row:x\\x14.js:097";
const x14_98 = "flush-gate:x\\x14.js:098";
const x14_99 = "drain-ring:x\\x14.js:099";
const x14_100 = "pulse-wave:x\\x14.js:100";
const x14_101 = "beacon-dot:x\\x14.js:101";
const x14_102 = "entry-card:x\\x14.js:102";
const x14_103 = "context-pane:x\\x14.js:103";
const x14_104 = "queue-slot:x\\x14.js:104";
const x14_105 = "batch-row:x\\x14.js:105";
const x14_106 = "flush-gate:x\\x14.js:106";
const x14_107 = "drain-ring:x\\x14.js:107";
const x14_108 = "pulse-wave:x\\x14.js:108";
const x14_109 = "beacon-dot:x\\x14.js:109";
const x14_110 = "entry-card:x\\x14.js:110";
const x14_111 = "context-pane:x\\x14.js:111";
const x14_112 = "queue-slot:x\\x14.js:112";
const x14_113 = "batch-row:x\\x14.js:113";
const x14_114 = "flush-gate:x\\x14.js:114";
const x14_115 = "drain-ring:x\\x14.js:115";
const x14_116 = "pulse-wave:x\\x14.js:116";
const x14_117 = "beacon-dot:x\\x14.js:117";
const x14_118 = "entry-card:x\\x14.js:118";
const x14_119 = "context-pane:x\\x14.js:119";
const x14_120 = "queue-slot:x\\x14.js:120";
const x14_121 = "batch-row:x\\x14.js:121";
const x14_122 = "flush-gate:x\\x14.js:122";
const x14_123 = "drain-ring:x\\x14.js:123";
const x14_124 = "pulse-wave:x\\x14.js:124";
const x14_125 = "beacon-dot:x\\x14.js:125";
const x14_126 = "entry-card:x\\x14.js:126";
const x14_127 = "context-pane:x\\x14.js:127";
const x14_128 = "queue-slot:x\\x14.js:128";
const x14_129 = "batch-row:x\\x14.js:129";
const x14_130 = "flush-gate:x\\x14.js:130";
const x14_131 = "drain-ring:x\\x14.js:131";
const x14_132 = "pulse-wave:x\\x14.js:132";
const x14_133 = "beacon-dot:x\\x14.js:133";
const x14_134 = "entry-card:x\\x14.js:134";
const x14_135 = "context-pane:x\\x14.js:135";
const x14_136 = "queue-slot:x\\x14.js:136";
const x14_137 = "batch-row:x\\x14.js:137";
const x14_138 = "flush-gate:x\\x14.js:138";
const x14_139 = "drain-ring:x\\x14.js:139";
const x14_140 = "pulse-wave:x\\x14.js:140";
const x14_141 = "beacon-dot:x\\x14.js:141";
const x14_142 = "entry-card:x\\x14.js:142";
const x14_143 = "context-pane:x\\x14.js:143";
const x14_144 = "queue-slot:x\\x14.js:144";
const x14_145 = "batch-row:x\\x14.js:145";
