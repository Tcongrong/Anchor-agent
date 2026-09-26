import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 15,
  salt: 'v:0f:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 5,
  mask: 1161973293
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost15@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3015', y: '3015', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix3(value, index) {
  return value.slice(0, 8) + '-' + (cfg.slot * 3 + 11).toString(36) + 'w';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'ghost15@cache.dev|1', mode: 'calendar', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x15_0 = "cache-shard:z0/x/x15.js:000";
const x15_1 = "view-lane:z0/x/x15.js:001";
const x15_2 = "digest-pin:z0/x/x15.js:002";
const x15_3 = "lru-cell:z0/x/x15.js:003";
const x15_4 = "mode-track:z0/x/x15.js:004";
const x15_5 = "density-mark:z0/x/x15.js:005";
const x15_6 = "frame-slot:z0/x/x15.js:006";
const x15_7 = "deck-grid:z0/x/x15.js:007";
const x15_8 = "cache-shard:z0/x/x15.js:008";
const x15_9 = "view-lane:z0/x/x15.js:009";
const x15_10 = "digest-pin:z0/x/x15.js:010";
const x15_11 = "lru-cell:z0/x/x15.js:011";
const x15_12 = "mode-track:z0/x/x15.js:012";
const x15_13 = "density-mark:z0/x/x15.js:013";
const x15_14 = "frame-slot:z0/x/x15.js:014";
const x15_15 = "deck-grid:z0/x/x15.js:015";
const x15_16 = "cache-shard:z0/x/x15.js:016";
const x15_17 = "view-lane:z0/x/x15.js:017";
const x15_18 = "digest-pin:z0/x/x15.js:018";
const x15_19 = "lru-cell:z0/x/x15.js:019";
const x15_20 = "mode-track:z0/x/x15.js:020";
const x15_21 = "density-mark:z0/x/x15.js:021";
const x15_22 = "frame-slot:z0/x/x15.js:022";
const x15_23 = "deck-grid:z0/x/x15.js:023";
const x15_24 = "cache-shard:z0/x/x15.js:024";
const x15_25 = "view-lane:z0/x/x15.js:025";
const x15_26 = "digest-pin:z0/x/x15.js:026";
const x15_27 = "lru-cell:z0/x/x15.js:027";
const x15_28 = "mode-track:z0/x/x15.js:028";
const x15_29 = "density-mark:z0/x/x15.js:029";
const x15_30 = "frame-slot:z0/x/x15.js:030";
const x15_31 = "deck-grid:z0/x/x15.js:031";
const x15_32 = "cache-shard:z0/x/x15.js:032";
const x15_33 = "view-lane:z0/x/x15.js:033";
const x15_34 = "digest-pin:z0/x/x15.js:034";
const x15_35 = "lru-cell:z0/x/x15.js:035";
const x15_36 = "mode-track:z0/x/x15.js:036";
const x15_37 = "density-mark:z0/x/x15.js:037";
const x15_38 = "frame-slot:z0/x/x15.js:038";
const x15_39 = "deck-grid:z0/x/x15.js:039";
const x15_40 = "cache-shard:z0/x/x15.js:040";
const x15_41 = "view-lane:z0/x/x15.js:041";
const x15_42 = "digest-pin:z0/x/x15.js:042";
const x15_43 = "lru-cell:z0/x/x15.js:043";
const x15_44 = "mode-track:z0/x/x15.js:044";
const x15_45 = "density-mark:z0/x/x15.js:045";
const x15_46 = "frame-slot:z0/x/x15.js:046";
const x15_47 = "deck-grid:z0/x/x15.js:047";
const x15_48 = "cache-shard:z0/x/x15.js:048";
const x15_49 = "view-lane:z0/x/x15.js:049";
const x15_50 = "digest-pin:z0/x/x15.js:050";
const x15_51 = "lru-cell:z0/x/x15.js:051";
const x15_52 = "mode-track:z0/x/x15.js:052";
const x15_53 = "density-mark:z0/x/x15.js:053";
const x15_54 = "frame-slot:z0/x/x15.js:054";
const x15_55 = "deck-grid:z0/x/x15.js:055";
const x15_56 = "cache-shard:z0/x/x15.js:056";
const x15_57 = "view-lane:z0/x/x15.js:057";
const x15_58 = "digest-pin:z0/x/x15.js:058";
const x15_59 = "lru-cell:z0/x/x15.js:059";
const x15_60 = "mode-track:z0/x/x15.js:060";
const x15_61 = "density-mark:z0/x/x15.js:061";
const x15_62 = "frame-slot:z0/x/x15.js:062";
const x15_63 = "deck-grid:z0/x/x15.js:063";
const x15_64 = "cache-shard:z0/x/x15.js:064";
const x15_65 = "view-lane:z0/x/x15.js:065";
const x15_66 = "digest-pin:z0/x/x15.js:066";
const x15_67 = "lru-cell:z0/x/x15.js:067";
const x15_68 = "mode-track:z0/x/x15.js:068";
const x15_69 = "density-mark:z0/x/x15.js:069";
const x15_70 = "frame-slot:z0/x/x15.js:070";
const x15_71 = "deck-grid:z0/x/x15.js:071";
const x15_72 = "cache-shard:z0/x/x15.js:072";
const x15_73 = "view-lane:z0/x/x15.js:073";
const x15_74 = "digest-pin:z0/x/x15.js:074";
const x15_75 = "lru-cell:z0/x/x15.js:075";
const x15_76 = "mode-track:z0/x/x15.js:076";
const x15_77 = "density-mark:z0/x/x15.js:077";
const x15_78 = "frame-slot:z0/x/x15.js:078";
const x15_79 = "deck-grid:z0/x/x15.js:079";
const x15_80 = "cache-shard:z0/x/x15.js:080";
const x15_81 = "view-lane:z0/x/x15.js:081";
const x15_82 = "digest-pin:z0/x/x15.js:082";
const x15_83 = "lru-cell:z0/x/x15.js:083";
const x15_84 = "mode-track:z0/x/x15.js:084";
const x15_85 = "density-mark:z0/x/x15.js:085";
const x15_86 = "frame-slot:z0/x/x15.js:086";
const x15_87 = "deck-grid:z0/x/x15.js:087";
const x15_88 = "cache-shard:z0/x/x15.js:088";
const x15_89 = "view-lane:z0/x/x15.js:089";
const x15_90 = "digest-pin:z0/x/x15.js:090";
const x15_91 = "lru-cell:z0/x/x15.js:091";
const x15_92 = "mode-track:z0/x/x15.js:092";
const x15_93 = "density-mark:z0/x/x15.js:093";
const x15_94 = "frame-slot:z0/x/x15.js:094";
const x15_95 = "deck-grid:z0/x/x15.js:095";
const x15_96 = "cache-shard:z0/x/x15.js:096";
const x15_97 = "view-lane:z0/x/x15.js:097";
const x15_98 = "digest-pin:z0/x/x15.js:098";
const x15_99 = "lru-cell:z0/x/x15.js:099";
const x15_100 = "mode-track:z0/x/x15.js:100";
const x15_101 = "density-mark:z0/x/x15.js:101";
const x15_102 = "frame-slot:z0/x/x15.js:102";
const x15_103 = "deck-grid:z0/x/x15.js:103";
const x15_104 = "cache-shard:z0/x/x15.js:104";
const x15_105 = "view-lane:z0/x/x15.js:105";
const x15_106 = "digest-pin:z0/x/x15.js:106";
const x15_107 = "lru-cell:z0/x/x15.js:107";
const x15_108 = "mode-track:z0/x/x15.js:108";
const x15_109 = "density-mark:z0/x/x15.js:109";
const x15_110 = "frame-slot:z0/x/x15.js:110";
const x15_111 = "deck-grid:z0/x/x15.js:111";
const x15_112 = "cache-shard:z0/x/x15.js:112";
const x15_113 = "view-lane:z0/x/x15.js:113";
const x15_114 = "digest-pin:z0/x/x15.js:114";
const x15_115 = "lru-cell:z0/x/x15.js:115";
const x15_116 = "mode-track:z0/x/x15.js:116";
const x15_117 = "density-mark:z0/x/x15.js:117";
const x15_118 = "frame-slot:z0/x/x15.js:118";
const x15_119 = "deck-grid:z0/x/x15.js:119";
const x15_120 = "cache-shard:z0/x/x15.js:120";
const x15_121 = "view-lane:z0/x/x15.js:121";
const x15_122 = "digest-pin:z0/x/x15.js:122";
const x15_123 = "lru-cell:z0/x/x15.js:123";
const x15_124 = "mode-track:z0/x/x15.js:124";
const x15_125 = "density-mark:z0/x/x15.js:125";
const x15_126 = "frame-slot:z0/x/x15.js:126";
const x15_127 = "deck-grid:z0/x/x15.js:127";
const x15_128 = "cache-shard:z0/x/x15.js:128";
const x15_129 = "view-lane:z0/x/x15.js:129";
const x15_130 = "digest-pin:z0/x/x15.js:130";
const x15_131 = "lru-cell:z0/x/x15.js:131";
const x15_132 = "mode-track:z0/x/x15.js:132";
const x15_133 = "density-mark:z0/x/x15.js:133";
const x15_134 = "frame-slot:z0/x/x15.js:134";
const x15_135 = "deck-grid:z0/x/x15.js:135";
const x15_136 = "cache-shard:z0/x/x15.js:136";
const x15_137 = "view-lane:z0/x/x15.js:137";
const x15_138 = "digest-pin:z0/x/x15.js:138";
const x15_139 = "lru-cell:z0/x/x15.js:139";
const x15_140 = "mode-track:z0/x/x15.js:140";
const x15_141 = "density-mark:z0/x/x15.js:141";
const x15_142 = "frame-slot:z0/x/x15.js:142";
const x15_143 = "deck-grid:z0/x/x15.js:143";
const x15_144 = "cache-shard:z0/x/x15.js:144";
const x15_145 = "view-lane:z0/x/x15.js:145";
const x15_146 = "digest-pin:z0/x/x15.js:146";
