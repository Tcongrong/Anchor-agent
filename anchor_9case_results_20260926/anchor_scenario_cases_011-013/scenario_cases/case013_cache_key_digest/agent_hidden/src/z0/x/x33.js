import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 33,
  salt: 'v:21:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 5,
  mask: 1697319277
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost33@cache.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '3033', y: '3033', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(0, 9) + '.' + (cfg.slot + 3).toString(36) + 'dk';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'ghost33@cache.dev|1', mode: 'list', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x33_0 = "cache-shard:z0/x/x33.js:000";
const x33_1 = "view-lane:z0/x/x33.js:001";
const x33_2 = "digest-pin:z0/x/x33.js:002";
const x33_3 = "lru-cell:z0/x/x33.js:003";
const x33_4 = "mode-track:z0/x/x33.js:004";
const x33_5 = "density-mark:z0/x/x33.js:005";
const x33_6 = "frame-slot:z0/x/x33.js:006";
const x33_7 = "deck-grid:z0/x/x33.js:007";
const x33_8 = "cache-shard:z0/x/x33.js:008";
const x33_9 = "view-lane:z0/x/x33.js:009";
const x33_10 = "digest-pin:z0/x/x33.js:010";
const x33_11 = "lru-cell:z0/x/x33.js:011";
const x33_12 = "mode-track:z0/x/x33.js:012";
const x33_13 = "density-mark:z0/x/x33.js:013";
const x33_14 = "frame-slot:z0/x/x33.js:014";
const x33_15 = "deck-grid:z0/x/x33.js:015";
const x33_16 = "cache-shard:z0/x/x33.js:016";
const x33_17 = "view-lane:z0/x/x33.js:017";
const x33_18 = "digest-pin:z0/x/x33.js:018";
const x33_19 = "lru-cell:z0/x/x33.js:019";
const x33_20 = "mode-track:z0/x/x33.js:020";
const x33_21 = "density-mark:z0/x/x33.js:021";
const x33_22 = "frame-slot:z0/x/x33.js:022";
const x33_23 = "deck-grid:z0/x/x33.js:023";
const x33_24 = "cache-shard:z0/x/x33.js:024";
const x33_25 = "view-lane:z0/x/x33.js:025";
const x33_26 = "digest-pin:z0/x/x33.js:026";
const x33_27 = "lru-cell:z0/x/x33.js:027";
const x33_28 = "mode-track:z0/x/x33.js:028";
const x33_29 = "density-mark:z0/x/x33.js:029";
const x33_30 = "frame-slot:z0/x/x33.js:030";
const x33_31 = "deck-grid:z0/x/x33.js:031";
const x33_32 = "cache-shard:z0/x/x33.js:032";
const x33_33 = "view-lane:z0/x/x33.js:033";
const x33_34 = "digest-pin:z0/x/x33.js:034";
const x33_35 = "lru-cell:z0/x/x33.js:035";
const x33_36 = "mode-track:z0/x/x33.js:036";
const x33_37 = "density-mark:z0/x/x33.js:037";
const x33_38 = "frame-slot:z0/x/x33.js:038";
const x33_39 = "deck-grid:z0/x/x33.js:039";
const x33_40 = "cache-shard:z0/x/x33.js:040";
const x33_41 = "view-lane:z0/x/x33.js:041";
const x33_42 = "digest-pin:z0/x/x33.js:042";
const x33_43 = "lru-cell:z0/x/x33.js:043";
const x33_44 = "mode-track:z0/x/x33.js:044";
const x33_45 = "density-mark:z0/x/x33.js:045";
const x33_46 = "frame-slot:z0/x/x33.js:046";
const x33_47 = "deck-grid:z0/x/x33.js:047";
const x33_48 = "cache-shard:z0/x/x33.js:048";
const x33_49 = "view-lane:z0/x/x33.js:049";
const x33_50 = "digest-pin:z0/x/x33.js:050";
const x33_51 = "lru-cell:z0/x/x33.js:051";
const x33_52 = "mode-track:z0/x/x33.js:052";
const x33_53 = "density-mark:z0/x/x33.js:053";
const x33_54 = "frame-slot:z0/x/x33.js:054";
const x33_55 = "deck-grid:z0/x/x33.js:055";
const x33_56 = "cache-shard:z0/x/x33.js:056";
const x33_57 = "view-lane:z0/x/x33.js:057";
const x33_58 = "digest-pin:z0/x/x33.js:058";
const x33_59 = "lru-cell:z0/x/x33.js:059";
const x33_60 = "mode-track:z0/x/x33.js:060";
const x33_61 = "density-mark:z0/x/x33.js:061";
const x33_62 = "frame-slot:z0/x/x33.js:062";
const x33_63 = "deck-grid:z0/x/x33.js:063";
const x33_64 = "cache-shard:z0/x/x33.js:064";
const x33_65 = "view-lane:z0/x/x33.js:065";
const x33_66 = "digest-pin:z0/x/x33.js:066";
const x33_67 = "lru-cell:z0/x/x33.js:067";
const x33_68 = "mode-track:z0/x/x33.js:068";
const x33_69 = "density-mark:z0/x/x33.js:069";
const x33_70 = "frame-slot:z0/x/x33.js:070";
const x33_71 = "deck-grid:z0/x/x33.js:071";
const x33_72 = "cache-shard:z0/x/x33.js:072";
const x33_73 = "view-lane:z0/x/x33.js:073";
const x33_74 = "digest-pin:z0/x/x33.js:074";
const x33_75 = "lru-cell:z0/x/x33.js:075";
const x33_76 = "mode-track:z0/x/x33.js:076";
const x33_77 = "density-mark:z0/x/x33.js:077";
const x33_78 = "frame-slot:z0/x/x33.js:078";
const x33_79 = "deck-grid:z0/x/x33.js:079";
const x33_80 = "cache-shard:z0/x/x33.js:080";
const x33_81 = "view-lane:z0/x/x33.js:081";
const x33_82 = "digest-pin:z0/x/x33.js:082";
const x33_83 = "lru-cell:z0/x/x33.js:083";
const x33_84 = "mode-track:z0/x/x33.js:084";
const x33_85 = "density-mark:z0/x/x33.js:085";
const x33_86 = "frame-slot:z0/x/x33.js:086";
const x33_87 = "deck-grid:z0/x/x33.js:087";
const x33_88 = "cache-shard:z0/x/x33.js:088";
const x33_89 = "view-lane:z0/x/x33.js:089";
const x33_90 = "digest-pin:z0/x/x33.js:090";
const x33_91 = "lru-cell:z0/x/x33.js:091";
const x33_92 = "mode-track:z0/x/x33.js:092";
const x33_93 = "density-mark:z0/x/x33.js:093";
const x33_94 = "frame-slot:z0/x/x33.js:094";
const x33_95 = "deck-grid:z0/x/x33.js:095";
const x33_96 = "cache-shard:z0/x/x33.js:096";
const x33_97 = "view-lane:z0/x/x33.js:097";
const x33_98 = "digest-pin:z0/x/x33.js:098";
const x33_99 = "lru-cell:z0/x/x33.js:099";
const x33_100 = "mode-track:z0/x/x33.js:100";
const x33_101 = "density-mark:z0/x/x33.js:101";
const x33_102 = "frame-slot:z0/x/x33.js:102";
const x33_103 = "deck-grid:z0/x/x33.js:103";
const x33_104 = "cache-shard:z0/x/x33.js:104";
const x33_105 = "view-lane:z0/x/x33.js:105";
const x33_106 = "digest-pin:z0/x/x33.js:106";
const x33_107 = "lru-cell:z0/x/x33.js:107";
const x33_108 = "mode-track:z0/x/x33.js:108";
const x33_109 = "density-mark:z0/x/x33.js:109";
const x33_110 = "frame-slot:z0/x/x33.js:110";
const x33_111 = "deck-grid:z0/x/x33.js:111";
const x33_112 = "cache-shard:z0/x/x33.js:112";
const x33_113 = "view-lane:z0/x/x33.js:113";
const x33_114 = "digest-pin:z0/x/x33.js:114";
const x33_115 = "lru-cell:z0/x/x33.js:115";
const x33_116 = "mode-track:z0/x/x33.js:116";
const x33_117 = "density-mark:z0/x/x33.js:117";
const x33_118 = "frame-slot:z0/x/x33.js:118";
const x33_119 = "deck-grid:z0/x/x33.js:119";
const x33_120 = "cache-shard:z0/x/x33.js:120";
const x33_121 = "view-lane:z0/x/x33.js:121";
const x33_122 = "digest-pin:z0/x/x33.js:122";
const x33_123 = "lru-cell:z0/x/x33.js:123";
const x33_124 = "mode-track:z0/x/x33.js:124";
const x33_125 = "density-mark:z0/x/x33.js:125";
const x33_126 = "frame-slot:z0/x/x33.js:126";
const x33_127 = "deck-grid:z0/x/x33.js:127";
const x33_128 = "cache-shard:z0/x/x33.js:128";
const x33_129 = "view-lane:z0/x/x33.js:129";
const x33_130 = "digest-pin:z0/x/x33.js:130";
const x33_131 = "lru-cell:z0/x/x33.js:131";
const x33_132 = "mode-track:z0/x/x33.js:132";
const x33_133 = "density-mark:z0/x/x33.js:133";
const x33_134 = "frame-slot:z0/x/x33.js:134";
const x33_135 = "deck-grid:z0/x/x33.js:135";
const x33_136 = "cache-shard:z0/x/x33.js:136";
const x33_137 = "view-lane:z0/x/x33.js:137";
const x33_138 = "digest-pin:z0/x/x33.js:138";
const x33_139 = "lru-cell:z0/x/x33.js:139";
const x33_140 = "mode-track:z0/x/x33.js:140";
const x33_141 = "density-mark:z0/x/x33.js:141";
const x33_142 = "frame-slot:z0/x/x33.js:142";
const x33_143 = "deck-grid:z0/x/x33.js:143";
const x33_144 = "cache-shard:z0/x/x33.js:144";
const x33_145 = "view-lane:z0/x/x33.js:145";
const x33_146 = "digest-pin:z0/x/x33.js:146";
