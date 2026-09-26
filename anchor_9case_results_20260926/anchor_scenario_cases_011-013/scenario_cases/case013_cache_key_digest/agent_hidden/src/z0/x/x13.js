import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 13,
  salt: 'v:0d:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 3,
  mask: 148053229
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed13@cache.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '3013', y: '3013', n: 4 },
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
  const value = fn({ view: 'seed13@cache.dev|1', mode: 'list', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x13_0 = "cache-shard:z0/x/x13.js:000";
const x13_1 = "view-lane:z0/x/x13.js:001";
const x13_2 = "digest-pin:z0/x/x13.js:002";
const x13_3 = "lru-cell:z0/x/x13.js:003";
const x13_4 = "mode-track:z0/x/x13.js:004";
const x13_5 = "density-mark:z0/x/x13.js:005";
const x13_6 = "frame-slot:z0/x/x13.js:006";
const x13_7 = "deck-grid:z0/x/x13.js:007";
const x13_8 = "cache-shard:z0/x/x13.js:008";
const x13_9 = "view-lane:z0/x/x13.js:009";
const x13_10 = "digest-pin:z0/x/x13.js:010";
const x13_11 = "lru-cell:z0/x/x13.js:011";
const x13_12 = "mode-track:z0/x/x13.js:012";
const x13_13 = "density-mark:z0/x/x13.js:013";
const x13_14 = "frame-slot:z0/x/x13.js:014";
const x13_15 = "deck-grid:z0/x/x13.js:015";
const x13_16 = "cache-shard:z0/x/x13.js:016";
const x13_17 = "view-lane:z0/x/x13.js:017";
const x13_18 = "digest-pin:z0/x/x13.js:018";
const x13_19 = "lru-cell:z0/x/x13.js:019";
const x13_20 = "mode-track:z0/x/x13.js:020";
const x13_21 = "density-mark:z0/x/x13.js:021";
const x13_22 = "frame-slot:z0/x/x13.js:022";
const x13_23 = "deck-grid:z0/x/x13.js:023";
const x13_24 = "cache-shard:z0/x/x13.js:024";
const x13_25 = "view-lane:z0/x/x13.js:025";
const x13_26 = "digest-pin:z0/x/x13.js:026";
const x13_27 = "lru-cell:z0/x/x13.js:027";
const x13_28 = "mode-track:z0/x/x13.js:028";
const x13_29 = "density-mark:z0/x/x13.js:029";
const x13_30 = "frame-slot:z0/x/x13.js:030";
const x13_31 = "deck-grid:z0/x/x13.js:031";
const x13_32 = "cache-shard:z0/x/x13.js:032";
const x13_33 = "view-lane:z0/x/x13.js:033";
const x13_34 = "digest-pin:z0/x/x13.js:034";
const x13_35 = "lru-cell:z0/x/x13.js:035";
const x13_36 = "mode-track:z0/x/x13.js:036";
const x13_37 = "density-mark:z0/x/x13.js:037";
const x13_38 = "frame-slot:z0/x/x13.js:038";
const x13_39 = "deck-grid:z0/x/x13.js:039";
const x13_40 = "cache-shard:z0/x/x13.js:040";
const x13_41 = "view-lane:z0/x/x13.js:041";
const x13_42 = "digest-pin:z0/x/x13.js:042";
const x13_43 = "lru-cell:z0/x/x13.js:043";
const x13_44 = "mode-track:z0/x/x13.js:044";
const x13_45 = "density-mark:z0/x/x13.js:045";
const x13_46 = "frame-slot:z0/x/x13.js:046";
const x13_47 = "deck-grid:z0/x/x13.js:047";
const x13_48 = "cache-shard:z0/x/x13.js:048";
const x13_49 = "view-lane:z0/x/x13.js:049";
const x13_50 = "digest-pin:z0/x/x13.js:050";
const x13_51 = "lru-cell:z0/x/x13.js:051";
const x13_52 = "mode-track:z0/x/x13.js:052";
const x13_53 = "density-mark:z0/x/x13.js:053";
const x13_54 = "frame-slot:z0/x/x13.js:054";
const x13_55 = "deck-grid:z0/x/x13.js:055";
const x13_56 = "cache-shard:z0/x/x13.js:056";
const x13_57 = "view-lane:z0/x/x13.js:057";
const x13_58 = "digest-pin:z0/x/x13.js:058";
const x13_59 = "lru-cell:z0/x/x13.js:059";
const x13_60 = "mode-track:z0/x/x13.js:060";
const x13_61 = "density-mark:z0/x/x13.js:061";
const x13_62 = "frame-slot:z0/x/x13.js:062";
const x13_63 = "deck-grid:z0/x/x13.js:063";
const x13_64 = "cache-shard:z0/x/x13.js:064";
const x13_65 = "view-lane:z0/x/x13.js:065";
const x13_66 = "digest-pin:z0/x/x13.js:066";
const x13_67 = "lru-cell:z0/x/x13.js:067";
const x13_68 = "mode-track:z0/x/x13.js:068";
const x13_69 = "density-mark:z0/x/x13.js:069";
const x13_70 = "frame-slot:z0/x/x13.js:070";
const x13_71 = "deck-grid:z0/x/x13.js:071";
const x13_72 = "cache-shard:z0/x/x13.js:072";
const x13_73 = "view-lane:z0/x/x13.js:073";
const x13_74 = "digest-pin:z0/x/x13.js:074";
const x13_75 = "lru-cell:z0/x/x13.js:075";
const x13_76 = "mode-track:z0/x/x13.js:076";
const x13_77 = "density-mark:z0/x/x13.js:077";
const x13_78 = "frame-slot:z0/x/x13.js:078";
const x13_79 = "deck-grid:z0/x/x13.js:079";
const x13_80 = "cache-shard:z0/x/x13.js:080";
const x13_81 = "view-lane:z0/x/x13.js:081";
const x13_82 = "digest-pin:z0/x/x13.js:082";
const x13_83 = "lru-cell:z0/x/x13.js:083";
const x13_84 = "mode-track:z0/x/x13.js:084";
const x13_85 = "density-mark:z0/x/x13.js:085";
const x13_86 = "frame-slot:z0/x/x13.js:086";
const x13_87 = "deck-grid:z0/x/x13.js:087";
const x13_88 = "cache-shard:z0/x/x13.js:088";
const x13_89 = "view-lane:z0/x/x13.js:089";
const x13_90 = "digest-pin:z0/x/x13.js:090";
const x13_91 = "lru-cell:z0/x/x13.js:091";
const x13_92 = "mode-track:z0/x/x13.js:092";
const x13_93 = "density-mark:z0/x/x13.js:093";
const x13_94 = "frame-slot:z0/x/x13.js:094";
const x13_95 = "deck-grid:z0/x/x13.js:095";
const x13_96 = "cache-shard:z0/x/x13.js:096";
const x13_97 = "view-lane:z0/x/x13.js:097";
const x13_98 = "digest-pin:z0/x/x13.js:098";
const x13_99 = "lru-cell:z0/x/x13.js:099";
const x13_100 = "mode-track:z0/x/x13.js:100";
const x13_101 = "density-mark:z0/x/x13.js:101";
const x13_102 = "frame-slot:z0/x/x13.js:102";
const x13_103 = "deck-grid:z0/x/x13.js:103";
const x13_104 = "cache-shard:z0/x/x13.js:104";
const x13_105 = "view-lane:z0/x/x13.js:105";
const x13_106 = "digest-pin:z0/x/x13.js:106";
const x13_107 = "lru-cell:z0/x/x13.js:107";
const x13_108 = "mode-track:z0/x/x13.js:108";
const x13_109 = "density-mark:z0/x/x13.js:109";
const x13_110 = "frame-slot:z0/x/x13.js:110";
const x13_111 = "deck-grid:z0/x/x13.js:111";
const x13_112 = "cache-shard:z0/x/x13.js:112";
const x13_113 = "view-lane:z0/x/x13.js:113";
const x13_114 = "digest-pin:z0/x/x13.js:114";
const x13_115 = "lru-cell:z0/x/x13.js:115";
const x13_116 = "mode-track:z0/x/x13.js:116";
const x13_117 = "density-mark:z0/x/x13.js:117";
const x13_118 = "frame-slot:z0/x/x13.js:118";
const x13_119 = "deck-grid:z0/x/x13.js:119";
const x13_120 = "cache-shard:z0/x/x13.js:120";
const x13_121 = "view-lane:z0/x/x13.js:121";
const x13_122 = "digest-pin:z0/x/x13.js:122";
const x13_123 = "lru-cell:z0/x/x13.js:123";
const x13_124 = "mode-track:z0/x/x13.js:124";
const x13_125 = "density-mark:z0/x/x13.js:125";
const x13_126 = "frame-slot:z0/x/x13.js:126";
const x13_127 = "deck-grid:z0/x/x13.js:127";
const x13_128 = "cache-shard:z0/x/x13.js:128";
const x13_129 = "view-lane:z0/x/x13.js:129";
const x13_130 = "digest-pin:z0/x/x13.js:130";
const x13_131 = "lru-cell:z0/x/x13.js:131";
const x13_132 = "mode-track:z0/x/x13.js:132";
const x13_133 = "density-mark:z0/x/x13.js:133";
const x13_134 = "frame-slot:z0/x/x13.js:134";
const x13_135 = "deck-grid:z0/x/x13.js:135";
const x13_136 = "cache-shard:z0/x/x13.js:136";
const x13_137 = "view-lane:z0/x/x13.js:137";
const x13_138 = "digest-pin:z0/x/x13.js:138";
const x13_139 = "lru-cell:z0/x/x13.js:139";
const x13_140 = "mode-track:z0/x/x13.js:140";
const x13_141 = "density-mark:z0/x/x13.js:141";
const x13_142 = "frame-slot:z0/x/x13.js:142";
const x13_143 = "deck-grid:z0/x/x13.js:143";
const x13_144 = "cache-shard:z0/x/x13.js:144";
const x13_145 = "view-lane:z0/x/x13.js:145";
const x13_146 = "digest-pin:z0/x/x13.js:146";
