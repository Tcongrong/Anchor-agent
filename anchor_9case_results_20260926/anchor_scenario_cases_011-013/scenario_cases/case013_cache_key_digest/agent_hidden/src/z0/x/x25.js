import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 25,
  salt: 'v:19:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 3,
  mask: 1936606317
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed25@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3025', y: '3025', n: 4 },
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
  const value = fn({ view: 'seed25@cache.dev|1', mode: 'list', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x25_0 = "cache-shard:z0/x/x25.js:000";
const x25_1 = "view-lane:z0/x/x25.js:001";
const x25_2 = "digest-pin:z0/x/x25.js:002";
const x25_3 = "lru-cell:z0/x/x25.js:003";
const x25_4 = "mode-track:z0/x/x25.js:004";
const x25_5 = "density-mark:z0/x/x25.js:005";
const x25_6 = "frame-slot:z0/x/x25.js:006";
const x25_7 = "deck-grid:z0/x/x25.js:007";
const x25_8 = "cache-shard:z0/x/x25.js:008";
const x25_9 = "view-lane:z0/x/x25.js:009";
const x25_10 = "digest-pin:z0/x/x25.js:010";
const x25_11 = "lru-cell:z0/x/x25.js:011";
const x25_12 = "mode-track:z0/x/x25.js:012";
const x25_13 = "density-mark:z0/x/x25.js:013";
const x25_14 = "frame-slot:z0/x/x25.js:014";
const x25_15 = "deck-grid:z0/x/x25.js:015";
const x25_16 = "cache-shard:z0/x/x25.js:016";
const x25_17 = "view-lane:z0/x/x25.js:017";
const x25_18 = "digest-pin:z0/x/x25.js:018";
const x25_19 = "lru-cell:z0/x/x25.js:019";
const x25_20 = "mode-track:z0/x/x25.js:020";
const x25_21 = "density-mark:z0/x/x25.js:021";
const x25_22 = "frame-slot:z0/x/x25.js:022";
const x25_23 = "deck-grid:z0/x/x25.js:023";
const x25_24 = "cache-shard:z0/x/x25.js:024";
const x25_25 = "view-lane:z0/x/x25.js:025";
const x25_26 = "digest-pin:z0/x/x25.js:026";
const x25_27 = "lru-cell:z0/x/x25.js:027";
const x25_28 = "mode-track:z0/x/x25.js:028";
const x25_29 = "density-mark:z0/x/x25.js:029";
const x25_30 = "frame-slot:z0/x/x25.js:030";
const x25_31 = "deck-grid:z0/x/x25.js:031";
const x25_32 = "cache-shard:z0/x/x25.js:032";
const x25_33 = "view-lane:z0/x/x25.js:033";
const x25_34 = "digest-pin:z0/x/x25.js:034";
const x25_35 = "lru-cell:z0/x/x25.js:035";
const x25_36 = "mode-track:z0/x/x25.js:036";
const x25_37 = "density-mark:z0/x/x25.js:037";
const x25_38 = "frame-slot:z0/x/x25.js:038";
const x25_39 = "deck-grid:z0/x/x25.js:039";
const x25_40 = "cache-shard:z0/x/x25.js:040";
const x25_41 = "view-lane:z0/x/x25.js:041";
const x25_42 = "digest-pin:z0/x/x25.js:042";
const x25_43 = "lru-cell:z0/x/x25.js:043";
const x25_44 = "mode-track:z0/x/x25.js:044";
const x25_45 = "density-mark:z0/x/x25.js:045";
const x25_46 = "frame-slot:z0/x/x25.js:046";
const x25_47 = "deck-grid:z0/x/x25.js:047";
const x25_48 = "cache-shard:z0/x/x25.js:048";
const x25_49 = "view-lane:z0/x/x25.js:049";
const x25_50 = "digest-pin:z0/x/x25.js:050";
const x25_51 = "lru-cell:z0/x/x25.js:051";
const x25_52 = "mode-track:z0/x/x25.js:052";
const x25_53 = "density-mark:z0/x/x25.js:053";
const x25_54 = "frame-slot:z0/x/x25.js:054";
const x25_55 = "deck-grid:z0/x/x25.js:055";
const x25_56 = "cache-shard:z0/x/x25.js:056";
const x25_57 = "view-lane:z0/x/x25.js:057";
const x25_58 = "digest-pin:z0/x/x25.js:058";
const x25_59 = "lru-cell:z0/x/x25.js:059";
const x25_60 = "mode-track:z0/x/x25.js:060";
const x25_61 = "density-mark:z0/x/x25.js:061";
const x25_62 = "frame-slot:z0/x/x25.js:062";
const x25_63 = "deck-grid:z0/x/x25.js:063";
const x25_64 = "cache-shard:z0/x/x25.js:064";
const x25_65 = "view-lane:z0/x/x25.js:065";
const x25_66 = "digest-pin:z0/x/x25.js:066";
const x25_67 = "lru-cell:z0/x/x25.js:067";
const x25_68 = "mode-track:z0/x/x25.js:068";
const x25_69 = "density-mark:z0/x/x25.js:069";
const x25_70 = "frame-slot:z0/x/x25.js:070";
const x25_71 = "deck-grid:z0/x/x25.js:071";
const x25_72 = "cache-shard:z0/x/x25.js:072";
const x25_73 = "view-lane:z0/x/x25.js:073";
const x25_74 = "digest-pin:z0/x/x25.js:074";
const x25_75 = "lru-cell:z0/x/x25.js:075";
const x25_76 = "mode-track:z0/x/x25.js:076";
const x25_77 = "density-mark:z0/x/x25.js:077";
const x25_78 = "frame-slot:z0/x/x25.js:078";
const x25_79 = "deck-grid:z0/x/x25.js:079";
const x25_80 = "cache-shard:z0/x/x25.js:080";
const x25_81 = "view-lane:z0/x/x25.js:081";
const x25_82 = "digest-pin:z0/x/x25.js:082";
const x25_83 = "lru-cell:z0/x/x25.js:083";
const x25_84 = "mode-track:z0/x/x25.js:084";
const x25_85 = "density-mark:z0/x/x25.js:085";
const x25_86 = "frame-slot:z0/x/x25.js:086";
const x25_87 = "deck-grid:z0/x/x25.js:087";
const x25_88 = "cache-shard:z0/x/x25.js:088";
const x25_89 = "view-lane:z0/x/x25.js:089";
const x25_90 = "digest-pin:z0/x/x25.js:090";
const x25_91 = "lru-cell:z0/x/x25.js:091";
const x25_92 = "mode-track:z0/x/x25.js:092";
const x25_93 = "density-mark:z0/x/x25.js:093";
const x25_94 = "frame-slot:z0/x/x25.js:094";
const x25_95 = "deck-grid:z0/x/x25.js:095";
const x25_96 = "cache-shard:z0/x/x25.js:096";
const x25_97 = "view-lane:z0/x/x25.js:097";
const x25_98 = "digest-pin:z0/x/x25.js:098";
const x25_99 = "lru-cell:z0/x/x25.js:099";
const x25_100 = "mode-track:z0/x/x25.js:100";
const x25_101 = "density-mark:z0/x/x25.js:101";
const x25_102 = "frame-slot:z0/x/x25.js:102";
const x25_103 = "deck-grid:z0/x/x25.js:103";
const x25_104 = "cache-shard:z0/x/x25.js:104";
const x25_105 = "view-lane:z0/x/x25.js:105";
const x25_106 = "digest-pin:z0/x/x25.js:106";
const x25_107 = "lru-cell:z0/x/x25.js:107";
const x25_108 = "mode-track:z0/x/x25.js:108";
const x25_109 = "density-mark:z0/x/x25.js:109";
const x25_110 = "frame-slot:z0/x/x25.js:110";
const x25_111 = "deck-grid:z0/x/x25.js:111";
const x25_112 = "cache-shard:z0/x/x25.js:112";
const x25_113 = "view-lane:z0/x/x25.js:113";
const x25_114 = "digest-pin:z0/x/x25.js:114";
const x25_115 = "lru-cell:z0/x/x25.js:115";
const x25_116 = "mode-track:z0/x/x25.js:116";
const x25_117 = "density-mark:z0/x/x25.js:117";
const x25_118 = "frame-slot:z0/x/x25.js:118";
const x25_119 = "deck-grid:z0/x/x25.js:119";
const x25_120 = "cache-shard:z0/x/x25.js:120";
const x25_121 = "view-lane:z0/x/x25.js:121";
const x25_122 = "digest-pin:z0/x/x25.js:122";
const x25_123 = "lru-cell:z0/x/x25.js:123";
const x25_124 = "mode-track:z0/x/x25.js:124";
const x25_125 = "density-mark:z0/x/x25.js:125";
const x25_126 = "frame-slot:z0/x/x25.js:126";
const x25_127 = "deck-grid:z0/x/x25.js:127";
const x25_128 = "cache-shard:z0/x/x25.js:128";
const x25_129 = "view-lane:z0/x/x25.js:129";
const x25_130 = "digest-pin:z0/x/x25.js:130";
const x25_131 = "lru-cell:z0/x/x25.js:131";
const x25_132 = "mode-track:z0/x/x25.js:132";
const x25_133 = "density-mark:z0/x/x25.js:133";
const x25_134 = "frame-slot:z0/x/x25.js:134";
const x25_135 = "deck-grid:z0/x/x25.js:135";
const x25_136 = "cache-shard:z0/x/x25.js:136";
const x25_137 = "view-lane:z0/x/x25.js:137";
const x25_138 = "digest-pin:z0/x/x25.js:138";
const x25_139 = "lru-cell:z0/x/x25.js:139";
const x25_140 = "mode-track:z0/x/x25.js:140";
const x25_141 = "density-mark:z0/x/x25.js:141";
const x25_142 = "frame-slot:z0/x/x25.js:142";
const x25_143 = "deck-grid:z0/x/x25.js:143";
const x25_144 = "cache-shard:z0/x/x25.js:144";
const x25_145 = "view-lane:z0/x/x25.js:145";
const x25_146 = "digest-pin:z0/x/x25.js:146";
