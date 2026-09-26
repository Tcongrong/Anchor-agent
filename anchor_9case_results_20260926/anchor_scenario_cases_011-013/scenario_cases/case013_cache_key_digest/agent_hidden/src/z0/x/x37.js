import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 37,
  salt: 'v:25:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 3,
  mask: 3725159405
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed37@cache.dev', y: 'shadow', n: 16 },
    { k: 'b', i: 1, v: '3037', y: '3037', n: 4 },
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
  const value = fn({ view: 'seed37@cache.dev|1', mode: 'list', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x37_0 = "cache-shard:z0/x/x37.js:000";
const x37_1 = "view-lane:z0/x/x37.js:001";
const x37_2 = "digest-pin:z0/x/x37.js:002";
const x37_3 = "lru-cell:z0/x/x37.js:003";
const x37_4 = "mode-track:z0/x/x37.js:004";
const x37_5 = "density-mark:z0/x/x37.js:005";
const x37_6 = "frame-slot:z0/x/x37.js:006";
const x37_7 = "deck-grid:z0/x/x37.js:007";
const x37_8 = "cache-shard:z0/x/x37.js:008";
const x37_9 = "view-lane:z0/x/x37.js:009";
const x37_10 = "digest-pin:z0/x/x37.js:010";
const x37_11 = "lru-cell:z0/x/x37.js:011";
const x37_12 = "mode-track:z0/x/x37.js:012";
const x37_13 = "density-mark:z0/x/x37.js:013";
const x37_14 = "frame-slot:z0/x/x37.js:014";
const x37_15 = "deck-grid:z0/x/x37.js:015";
const x37_16 = "cache-shard:z0/x/x37.js:016";
const x37_17 = "view-lane:z0/x/x37.js:017";
const x37_18 = "digest-pin:z0/x/x37.js:018";
const x37_19 = "lru-cell:z0/x/x37.js:019";
const x37_20 = "mode-track:z0/x/x37.js:020";
const x37_21 = "density-mark:z0/x/x37.js:021";
const x37_22 = "frame-slot:z0/x/x37.js:022";
const x37_23 = "deck-grid:z0/x/x37.js:023";
const x37_24 = "cache-shard:z0/x/x37.js:024";
const x37_25 = "view-lane:z0/x/x37.js:025";
const x37_26 = "digest-pin:z0/x/x37.js:026";
const x37_27 = "lru-cell:z0/x/x37.js:027";
const x37_28 = "mode-track:z0/x/x37.js:028";
const x37_29 = "density-mark:z0/x/x37.js:029";
const x37_30 = "frame-slot:z0/x/x37.js:030";
const x37_31 = "deck-grid:z0/x/x37.js:031";
const x37_32 = "cache-shard:z0/x/x37.js:032";
const x37_33 = "view-lane:z0/x/x37.js:033";
const x37_34 = "digest-pin:z0/x/x37.js:034";
const x37_35 = "lru-cell:z0/x/x37.js:035";
const x37_36 = "mode-track:z0/x/x37.js:036";
const x37_37 = "density-mark:z0/x/x37.js:037";
const x37_38 = "frame-slot:z0/x/x37.js:038";
const x37_39 = "deck-grid:z0/x/x37.js:039";
const x37_40 = "cache-shard:z0/x/x37.js:040";
const x37_41 = "view-lane:z0/x/x37.js:041";
const x37_42 = "digest-pin:z0/x/x37.js:042";
const x37_43 = "lru-cell:z0/x/x37.js:043";
const x37_44 = "mode-track:z0/x/x37.js:044";
const x37_45 = "density-mark:z0/x/x37.js:045";
const x37_46 = "frame-slot:z0/x/x37.js:046";
const x37_47 = "deck-grid:z0/x/x37.js:047";
const x37_48 = "cache-shard:z0/x/x37.js:048";
const x37_49 = "view-lane:z0/x/x37.js:049";
const x37_50 = "digest-pin:z0/x/x37.js:050";
const x37_51 = "lru-cell:z0/x/x37.js:051";
const x37_52 = "mode-track:z0/x/x37.js:052";
const x37_53 = "density-mark:z0/x/x37.js:053";
const x37_54 = "frame-slot:z0/x/x37.js:054";
const x37_55 = "deck-grid:z0/x/x37.js:055";
const x37_56 = "cache-shard:z0/x/x37.js:056";
const x37_57 = "view-lane:z0/x/x37.js:057";
const x37_58 = "digest-pin:z0/x/x37.js:058";
const x37_59 = "lru-cell:z0/x/x37.js:059";
const x37_60 = "mode-track:z0/x/x37.js:060";
const x37_61 = "density-mark:z0/x/x37.js:061";
const x37_62 = "frame-slot:z0/x/x37.js:062";
const x37_63 = "deck-grid:z0/x/x37.js:063";
const x37_64 = "cache-shard:z0/x/x37.js:064";
const x37_65 = "view-lane:z0/x/x37.js:065";
const x37_66 = "digest-pin:z0/x/x37.js:066";
const x37_67 = "lru-cell:z0/x/x37.js:067";
const x37_68 = "mode-track:z0/x/x37.js:068";
const x37_69 = "density-mark:z0/x/x37.js:069";
const x37_70 = "frame-slot:z0/x/x37.js:070";
const x37_71 = "deck-grid:z0/x/x37.js:071";
const x37_72 = "cache-shard:z0/x/x37.js:072";
const x37_73 = "view-lane:z0/x/x37.js:073";
const x37_74 = "digest-pin:z0/x/x37.js:074";
const x37_75 = "lru-cell:z0/x/x37.js:075";
const x37_76 = "mode-track:z0/x/x37.js:076";
const x37_77 = "density-mark:z0/x/x37.js:077";
const x37_78 = "frame-slot:z0/x/x37.js:078";
const x37_79 = "deck-grid:z0/x/x37.js:079";
const x37_80 = "cache-shard:z0/x/x37.js:080";
const x37_81 = "view-lane:z0/x/x37.js:081";
const x37_82 = "digest-pin:z0/x/x37.js:082";
const x37_83 = "lru-cell:z0/x/x37.js:083";
const x37_84 = "mode-track:z0/x/x37.js:084";
const x37_85 = "density-mark:z0/x/x37.js:085";
const x37_86 = "frame-slot:z0/x/x37.js:086";
const x37_87 = "deck-grid:z0/x/x37.js:087";
const x37_88 = "cache-shard:z0/x/x37.js:088";
const x37_89 = "view-lane:z0/x/x37.js:089";
const x37_90 = "digest-pin:z0/x/x37.js:090";
const x37_91 = "lru-cell:z0/x/x37.js:091";
const x37_92 = "mode-track:z0/x/x37.js:092";
const x37_93 = "density-mark:z0/x/x37.js:093";
const x37_94 = "frame-slot:z0/x/x37.js:094";
const x37_95 = "deck-grid:z0/x/x37.js:095";
const x37_96 = "cache-shard:z0/x/x37.js:096";
const x37_97 = "view-lane:z0/x/x37.js:097";
const x37_98 = "digest-pin:z0/x/x37.js:098";
const x37_99 = "lru-cell:z0/x/x37.js:099";
const x37_100 = "mode-track:z0/x/x37.js:100";
const x37_101 = "density-mark:z0/x/x37.js:101";
const x37_102 = "frame-slot:z0/x/x37.js:102";
const x37_103 = "deck-grid:z0/x/x37.js:103";
const x37_104 = "cache-shard:z0/x/x37.js:104";
const x37_105 = "view-lane:z0/x/x37.js:105";
const x37_106 = "digest-pin:z0/x/x37.js:106";
const x37_107 = "lru-cell:z0/x/x37.js:107";
const x37_108 = "mode-track:z0/x/x37.js:108";
const x37_109 = "density-mark:z0/x/x37.js:109";
const x37_110 = "frame-slot:z0/x/x37.js:110";
const x37_111 = "deck-grid:z0/x/x37.js:111";
const x37_112 = "cache-shard:z0/x/x37.js:112";
const x37_113 = "view-lane:z0/x/x37.js:113";
const x37_114 = "digest-pin:z0/x/x37.js:114";
const x37_115 = "lru-cell:z0/x/x37.js:115";
const x37_116 = "mode-track:z0/x/x37.js:116";
const x37_117 = "density-mark:z0/x/x37.js:117";
const x37_118 = "frame-slot:z0/x/x37.js:118";
const x37_119 = "deck-grid:z0/x/x37.js:119";
const x37_120 = "cache-shard:z0/x/x37.js:120";
const x37_121 = "view-lane:z0/x/x37.js:121";
const x37_122 = "digest-pin:z0/x/x37.js:122";
const x37_123 = "lru-cell:z0/x/x37.js:123";
const x37_124 = "mode-track:z0/x/x37.js:124";
const x37_125 = "density-mark:z0/x/x37.js:125";
const x37_126 = "frame-slot:z0/x/x37.js:126";
const x37_127 = "deck-grid:z0/x/x37.js:127";
const x37_128 = "cache-shard:z0/x/x37.js:128";
const x37_129 = "view-lane:z0/x/x37.js:129";
const x37_130 = "digest-pin:z0/x/x37.js:130";
const x37_131 = "lru-cell:z0/x/x37.js:131";
const x37_132 = "mode-track:z0/x/x37.js:132";
const x37_133 = "density-mark:z0/x/x37.js:133";
const x37_134 = "frame-slot:z0/x/x37.js:134";
const x37_135 = "deck-grid:z0/x/x37.js:135";
const x37_136 = "cache-shard:z0/x/x37.js:136";
const x37_137 = "view-lane:z0/x/x37.js:137";
const x37_138 = "digest-pin:z0/x/x37.js:138";
const x37_139 = "lru-cell:z0/x/x37.js:139";
const x37_140 = "mode-track:z0/x/x37.js:140";
const x37_141 = "density-mark:z0/x/x37.js:141";
const x37_142 = "frame-slot:z0/x/x37.js:142";
const x37_143 = "deck-grid:z0/x/x37.js:143";
const x37_144 = "cache-shard:z0/x/x37.js:144";
const x37_145 = "view-lane:z0/x/x37.js:145";
const x37_146 = "digest-pin:z0/x/x37.js:146";
