import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 6,
  salt: 'b:06:track',
  order: [6, 7, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 11,
  mask: 4055617017
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track6@pulse.dev', y: 'shadow', n: 16 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '6', y: '6', n: 1 },
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
const x06_0 = "queue-slot:x\\x06.js:000";
const x06_1 = "batch-row:x\\x06.js:001";
const x06_2 = "flush-gate:x\\x06.js:002";
const x06_3 = "drain-ring:x\\x06.js:003";
const x06_4 = "pulse-wave:x\\x06.js:004";
const x06_5 = "beacon-dot:x\\x06.js:005";
const x06_6 = "entry-card:x\\x06.js:006";
const x06_7 = "context-pane:x\\x06.js:007";
const x06_8 = "queue-slot:x\\x06.js:008";
const x06_9 = "batch-row:x\\x06.js:009";
const x06_10 = "flush-gate:x\\x06.js:010";
const x06_11 = "drain-ring:x\\x06.js:011";
const x06_12 = "pulse-wave:x\\x06.js:012";
const x06_13 = "beacon-dot:x\\x06.js:013";
const x06_14 = "entry-card:x\\x06.js:014";
const x06_15 = "context-pane:x\\x06.js:015";
const x06_16 = "queue-slot:x\\x06.js:016";
const x06_17 = "batch-row:x\\x06.js:017";
const x06_18 = "flush-gate:x\\x06.js:018";
const x06_19 = "drain-ring:x\\x06.js:019";
const x06_20 = "pulse-wave:x\\x06.js:020";
const x06_21 = "beacon-dot:x\\x06.js:021";
const x06_22 = "entry-card:x\\x06.js:022";
const x06_23 = "context-pane:x\\x06.js:023";
const x06_24 = "queue-slot:x\\x06.js:024";
const x06_25 = "batch-row:x\\x06.js:025";
const x06_26 = "flush-gate:x\\x06.js:026";
const x06_27 = "drain-ring:x\\x06.js:027";
const x06_28 = "pulse-wave:x\\x06.js:028";
const x06_29 = "beacon-dot:x\\x06.js:029";
const x06_30 = "entry-card:x\\x06.js:030";
const x06_31 = "context-pane:x\\x06.js:031";
const x06_32 = "queue-slot:x\\x06.js:032";
const x06_33 = "batch-row:x\\x06.js:033";
const x06_34 = "flush-gate:x\\x06.js:034";
const x06_35 = "drain-ring:x\\x06.js:035";
const x06_36 = "pulse-wave:x\\x06.js:036";
const x06_37 = "beacon-dot:x\\x06.js:037";
const x06_38 = "entry-card:x\\x06.js:038";
const x06_39 = "context-pane:x\\x06.js:039";
const x06_40 = "queue-slot:x\\x06.js:040";
const x06_41 = "batch-row:x\\x06.js:041";
const x06_42 = "flush-gate:x\\x06.js:042";
const x06_43 = "drain-ring:x\\x06.js:043";
const x06_44 = "pulse-wave:x\\x06.js:044";
const x06_45 = "beacon-dot:x\\x06.js:045";
const x06_46 = "entry-card:x\\x06.js:046";
const x06_47 = "context-pane:x\\x06.js:047";
const x06_48 = "queue-slot:x\\x06.js:048";
const x06_49 = "batch-row:x\\x06.js:049";
const x06_50 = "flush-gate:x\\x06.js:050";
const x06_51 = "drain-ring:x\\x06.js:051";
const x06_52 = "pulse-wave:x\\x06.js:052";
const x06_53 = "beacon-dot:x\\x06.js:053";
const x06_54 = "entry-card:x\\x06.js:054";
const x06_55 = "context-pane:x\\x06.js:055";
const x06_56 = "queue-slot:x\\x06.js:056";
const x06_57 = "batch-row:x\\x06.js:057";
const x06_58 = "flush-gate:x\\x06.js:058";
const x06_59 = "drain-ring:x\\x06.js:059";
const x06_60 = "pulse-wave:x\\x06.js:060";
const x06_61 = "beacon-dot:x\\x06.js:061";
const x06_62 = "entry-card:x\\x06.js:062";
const x06_63 = "context-pane:x\\x06.js:063";
const x06_64 = "queue-slot:x\\x06.js:064";
const x06_65 = "batch-row:x\\x06.js:065";
const x06_66 = "flush-gate:x\\x06.js:066";
const x06_67 = "drain-ring:x\\x06.js:067";
const x06_68 = "pulse-wave:x\\x06.js:068";
const x06_69 = "beacon-dot:x\\x06.js:069";
const x06_70 = "entry-card:x\\x06.js:070";
const x06_71 = "context-pane:x\\x06.js:071";
const x06_72 = "queue-slot:x\\x06.js:072";
const x06_73 = "batch-row:x\\x06.js:073";
const x06_74 = "flush-gate:x\\x06.js:074";
const x06_75 = "drain-ring:x\\x06.js:075";
const x06_76 = "pulse-wave:x\\x06.js:076";
const x06_77 = "beacon-dot:x\\x06.js:077";
const x06_78 = "entry-card:x\\x06.js:078";
const x06_79 = "context-pane:x\\x06.js:079";
const x06_80 = "queue-slot:x\\x06.js:080";
const x06_81 = "batch-row:x\\x06.js:081";
const x06_82 = "flush-gate:x\\x06.js:082";
const x06_83 = "drain-ring:x\\x06.js:083";
const x06_84 = "pulse-wave:x\\x06.js:084";
const x06_85 = "beacon-dot:x\\x06.js:085";
const x06_86 = "entry-card:x\\x06.js:086";
const x06_87 = "context-pane:x\\x06.js:087";
const x06_88 = "queue-slot:x\\x06.js:088";
const x06_89 = "batch-row:x\\x06.js:089";
const x06_90 = "flush-gate:x\\x06.js:090";
const x06_91 = "drain-ring:x\\x06.js:091";
const x06_92 = "pulse-wave:x\\x06.js:092";
const x06_93 = "beacon-dot:x\\x06.js:093";
const x06_94 = "entry-card:x\\x06.js:094";
const x06_95 = "context-pane:x\\x06.js:095";
const x06_96 = "queue-slot:x\\x06.js:096";
const x06_97 = "batch-row:x\\x06.js:097";
const x06_98 = "flush-gate:x\\x06.js:098";
const x06_99 = "drain-ring:x\\x06.js:099";
const x06_100 = "pulse-wave:x\\x06.js:100";
const x06_101 = "beacon-dot:x\\x06.js:101";
const x06_102 = "entry-card:x\\x06.js:102";
const x06_103 = "context-pane:x\\x06.js:103";
const x06_104 = "queue-slot:x\\x06.js:104";
const x06_105 = "batch-row:x\\x06.js:105";
const x06_106 = "flush-gate:x\\x06.js:106";
const x06_107 = "drain-ring:x\\x06.js:107";
const x06_108 = "pulse-wave:x\\x06.js:108";
const x06_109 = "beacon-dot:x\\x06.js:109";
const x06_110 = "entry-card:x\\x06.js:110";
const x06_111 = "context-pane:x\\x06.js:111";
const x06_112 = "queue-slot:x\\x06.js:112";
const x06_113 = "batch-row:x\\x06.js:113";
const x06_114 = "flush-gate:x\\x06.js:114";
const x06_115 = "drain-ring:x\\x06.js:115";
const x06_116 = "pulse-wave:x\\x06.js:116";
const x06_117 = "beacon-dot:x\\x06.js:117";
const x06_118 = "entry-card:x\\x06.js:118";
const x06_119 = "context-pane:x\\x06.js:119";
const x06_120 = "queue-slot:x\\x06.js:120";
const x06_121 = "batch-row:x\\x06.js:121";
const x06_122 = "flush-gate:x\\x06.js:122";
const x06_123 = "drain-ring:x\\x06.js:123";
const x06_124 = "pulse-wave:x\\x06.js:124";
const x06_125 = "beacon-dot:x\\x06.js:125";
const x06_126 = "entry-card:x\\x06.js:126";
const x06_127 = "context-pane:x\\x06.js:127";
const x06_128 = "queue-slot:x\\x06.js:128";
const x06_129 = "batch-row:x\\x06.js:129";
const x06_130 = "flush-gate:x\\x06.js:130";
const x06_131 = "drain-ring:x\\x06.js:131";
const x06_132 = "pulse-wave:x\\x06.js:132";
const x06_133 = "beacon-dot:x\\x06.js:133";
const x06_134 = "entry-card:x\\x06.js:134";
const x06_135 = "context-pane:x\\x06.js:135";
const x06_136 = "queue-slot:x\\x06.js:136";
const x06_137 = "batch-row:x\\x06.js:137";
const x06_138 = "flush-gate:x\\x06.js:138";
const x06_139 = "drain-ring:x\\x06.js:139";
const x06_140 = "pulse-wave:x\\x06.js:140";
const x06_141 = "beacon-dot:x\\x06.js:141";
const x06_142 = "entry-card:x\\x06.js:142";
const x06_143 = "context-pane:x\\x06.js:143";
const x06_144 = "queue-slot:x\\x06.js:144";
const x06_145 = "batch-row:x\\x06.js:145";
