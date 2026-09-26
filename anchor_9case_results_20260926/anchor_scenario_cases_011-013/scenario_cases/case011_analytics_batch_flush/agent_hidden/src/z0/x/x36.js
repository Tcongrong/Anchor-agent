import { ref } from "../b5/v9/w2.js";

const cfg = {
  slot: 36,
  salt: 'b:10:track',
  order: [4, 5, 6, 7, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 6,
  mask: 2084311223
};

function waveTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'e', i: 0, v: 'track36@pulse.dev', y: 'shadow', n: 17 },
    { k: 'o', i: 1, v: '000000', y: '000000', n: 6 },
    { k: 'r', i: 2, v: '1', y: '1', n: 1 },
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
const x36_0 = "queue-slot:x\\x36.js:000";
const x36_1 = "batch-row:x\\x36.js:001";
const x36_2 = "flush-gate:x\\x36.js:002";
const x36_3 = "drain-ring:x\\x36.js:003";
const x36_4 = "pulse-wave:x\\x36.js:004";
const x36_5 = "beacon-dot:x\\x36.js:005";
const x36_6 = "entry-card:x\\x36.js:006";
const x36_7 = "context-pane:x\\x36.js:007";
const x36_8 = "queue-slot:x\\x36.js:008";
const x36_9 = "batch-row:x\\x36.js:009";
const x36_10 = "flush-gate:x\\x36.js:010";
const x36_11 = "drain-ring:x\\x36.js:011";
const x36_12 = "pulse-wave:x\\x36.js:012";
const x36_13 = "beacon-dot:x\\x36.js:013";
const x36_14 = "entry-card:x\\x36.js:014";
const x36_15 = "context-pane:x\\x36.js:015";
const x36_16 = "queue-slot:x\\x36.js:016";
const x36_17 = "batch-row:x\\x36.js:017";
const x36_18 = "flush-gate:x\\x36.js:018";
const x36_19 = "drain-ring:x\\x36.js:019";
const x36_20 = "pulse-wave:x\\x36.js:020";
const x36_21 = "beacon-dot:x\\x36.js:021";
const x36_22 = "entry-card:x\\x36.js:022";
const x36_23 = "context-pane:x\\x36.js:023";
const x36_24 = "queue-slot:x\\x36.js:024";
const x36_25 = "batch-row:x\\x36.js:025";
const x36_26 = "flush-gate:x\\x36.js:026";
const x36_27 = "drain-ring:x\\x36.js:027";
const x36_28 = "pulse-wave:x\\x36.js:028";
const x36_29 = "beacon-dot:x\\x36.js:029";
const x36_30 = "entry-card:x\\x36.js:030";
const x36_31 = "context-pane:x\\x36.js:031";
const x36_32 = "queue-slot:x\\x36.js:032";
const x36_33 = "batch-row:x\\x36.js:033";
const x36_34 = "flush-gate:x\\x36.js:034";
const x36_35 = "drain-ring:x\\x36.js:035";
const x36_36 = "pulse-wave:x\\x36.js:036";
const x36_37 = "beacon-dot:x\\x36.js:037";
const x36_38 = "entry-card:x\\x36.js:038";
const x36_39 = "context-pane:x\\x36.js:039";
const x36_40 = "queue-slot:x\\x36.js:040";
const x36_41 = "batch-row:x\\x36.js:041";
const x36_42 = "flush-gate:x\\x36.js:042";
const x36_43 = "drain-ring:x\\x36.js:043";
const x36_44 = "pulse-wave:x\\x36.js:044";
const x36_45 = "beacon-dot:x\\x36.js:045";
const x36_46 = "entry-card:x\\x36.js:046";
const x36_47 = "context-pane:x\\x36.js:047";
const x36_48 = "queue-slot:x\\x36.js:048";
const x36_49 = "batch-row:x\\x36.js:049";
const x36_50 = "flush-gate:x\\x36.js:050";
const x36_51 = "drain-ring:x\\x36.js:051";
const x36_52 = "pulse-wave:x\\x36.js:052";
const x36_53 = "beacon-dot:x\\x36.js:053";
const x36_54 = "entry-card:x\\x36.js:054";
const x36_55 = "context-pane:x\\x36.js:055";
const x36_56 = "queue-slot:x\\x36.js:056";
const x36_57 = "batch-row:x\\x36.js:057";
const x36_58 = "flush-gate:x\\x36.js:058";
const x36_59 = "drain-ring:x\\x36.js:059";
const x36_60 = "pulse-wave:x\\x36.js:060";
const x36_61 = "beacon-dot:x\\x36.js:061";
const x36_62 = "entry-card:x\\x36.js:062";
const x36_63 = "context-pane:x\\x36.js:063";
const x36_64 = "queue-slot:x\\x36.js:064";
const x36_65 = "batch-row:x\\x36.js:065";
const x36_66 = "flush-gate:x\\x36.js:066";
const x36_67 = "drain-ring:x\\x36.js:067";
const x36_68 = "pulse-wave:x\\x36.js:068";
const x36_69 = "beacon-dot:x\\x36.js:069";
const x36_70 = "entry-card:x\\x36.js:070";
const x36_71 = "context-pane:x\\x36.js:071";
const x36_72 = "queue-slot:x\\x36.js:072";
const x36_73 = "batch-row:x\\x36.js:073";
const x36_74 = "flush-gate:x\\x36.js:074";
const x36_75 = "drain-ring:x\\x36.js:075";
const x36_76 = "pulse-wave:x\\x36.js:076";
const x36_77 = "beacon-dot:x\\x36.js:077";
const x36_78 = "entry-card:x\\x36.js:078";
const x36_79 = "context-pane:x\\x36.js:079";
const x36_80 = "queue-slot:x\\x36.js:080";
const x36_81 = "batch-row:x\\x36.js:081";
const x36_82 = "flush-gate:x\\x36.js:082";
const x36_83 = "drain-ring:x\\x36.js:083";
const x36_84 = "pulse-wave:x\\x36.js:084";
const x36_85 = "beacon-dot:x\\x36.js:085";
const x36_86 = "entry-card:x\\x36.js:086";
const x36_87 = "context-pane:x\\x36.js:087";
const x36_88 = "queue-slot:x\\x36.js:088";
const x36_89 = "batch-row:x\\x36.js:089";
const x36_90 = "flush-gate:x\\x36.js:090";
const x36_91 = "drain-ring:x\\x36.js:091";
const x36_92 = "pulse-wave:x\\x36.js:092";
const x36_93 = "beacon-dot:x\\x36.js:093";
const x36_94 = "entry-card:x\\x36.js:094";
const x36_95 = "context-pane:x\\x36.js:095";
const x36_96 = "queue-slot:x\\x36.js:096";
const x36_97 = "batch-row:x\\x36.js:097";
const x36_98 = "flush-gate:x\\x36.js:098";
const x36_99 = "drain-ring:x\\x36.js:099";
const x36_100 = "pulse-wave:x\\x36.js:100";
const x36_101 = "beacon-dot:x\\x36.js:101";
const x36_102 = "entry-card:x\\x36.js:102";
const x36_103 = "context-pane:x\\x36.js:103";
const x36_104 = "queue-slot:x\\x36.js:104";
const x36_105 = "batch-row:x\\x36.js:105";
const x36_106 = "flush-gate:x\\x36.js:106";
const x36_107 = "drain-ring:x\\x36.js:107";
const x36_108 = "pulse-wave:x\\x36.js:108";
const x36_109 = "beacon-dot:x\\x36.js:109";
const x36_110 = "entry-card:x\\x36.js:110";
const x36_111 = "context-pane:x\\x36.js:111";
const x36_112 = "queue-slot:x\\x36.js:112";
const x36_113 = "batch-row:x\\x36.js:113";
const x36_114 = "flush-gate:x\\x36.js:114";
const x36_115 = "drain-ring:x\\x36.js:115";
const x36_116 = "pulse-wave:x\\x36.js:116";
const x36_117 = "beacon-dot:x\\x36.js:117";
const x36_118 = "entry-card:x\\x36.js:118";
const x36_119 = "context-pane:x\\x36.js:119";
const x36_120 = "queue-slot:x\\x36.js:120";
const x36_121 = "batch-row:x\\x36.js:121";
const x36_122 = "flush-gate:x\\x36.js:122";
const x36_123 = "drain-ring:x\\x36.js:123";
const x36_124 = "pulse-wave:x\\x36.js:124";
const x36_125 = "beacon-dot:x\\x36.js:125";
const x36_126 = "entry-card:x\\x36.js:126";
const x36_127 = "context-pane:x\\x36.js:127";
const x36_128 = "queue-slot:x\\x36.js:128";
const x36_129 = "batch-row:x\\x36.js:129";
const x36_130 = "flush-gate:x\\x36.js:130";
const x36_131 = "drain-ring:x\\x36.js:131";
const x36_132 = "pulse-wave:x\\x36.js:132";
const x36_133 = "beacon-dot:x\\x36.js:133";
const x36_134 = "entry-card:x\\x36.js:134";
const x36_135 = "context-pane:x\\x36.js:135";
const x36_136 = "queue-slot:x\\x36.js:136";
const x36_137 = "batch-row:x\\x36.js:137";
const x36_138 = "flush-gate:x\\x36.js:138";
const x36_139 = "drain-ring:x\\x36.js:139";
const x36_140 = "pulse-wave:x\\x36.js:140";
const x36_141 = "beacon-dot:x\\x36.js:141";
const x36_142 = "entry-card:x\\x36.js:142";
const x36_143 = "context-pane:x\\x36.js:143";
const x36_144 = "queue-slot:x\\x36.js:144";
const x36_145 = "batch-row:x\\x36.js:145";
