import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 10,
  salt: 'v:0a:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 6,
  mask: 774656781
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed10@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3010', y: '3010', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(4) + '/' + (cfg.slot * 2 + 5).toString(36) + 'q';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'seed10@cache.dev|0', mode: 'grid', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x10_0 = "cache-shard:z0/x/x10.js:000";
const x10_1 = "view-lane:z0/x/x10.js:001";
const x10_2 = "digest-pin:z0/x/x10.js:002";
const x10_3 = "lru-cell:z0/x/x10.js:003";
const x10_4 = "mode-track:z0/x/x10.js:004";
const x10_5 = "density-mark:z0/x/x10.js:005";
const x10_6 = "frame-slot:z0/x/x10.js:006";
const x10_7 = "deck-grid:z0/x/x10.js:007";
const x10_8 = "cache-shard:z0/x/x10.js:008";
const x10_9 = "view-lane:z0/x/x10.js:009";
const x10_10 = "digest-pin:z0/x/x10.js:010";
const x10_11 = "lru-cell:z0/x/x10.js:011";
const x10_12 = "mode-track:z0/x/x10.js:012";
const x10_13 = "density-mark:z0/x/x10.js:013";
const x10_14 = "frame-slot:z0/x/x10.js:014";
const x10_15 = "deck-grid:z0/x/x10.js:015";
const x10_16 = "cache-shard:z0/x/x10.js:016";
const x10_17 = "view-lane:z0/x/x10.js:017";
const x10_18 = "digest-pin:z0/x/x10.js:018";
const x10_19 = "lru-cell:z0/x/x10.js:019";
const x10_20 = "mode-track:z0/x/x10.js:020";
const x10_21 = "density-mark:z0/x/x10.js:021";
const x10_22 = "frame-slot:z0/x/x10.js:022";
const x10_23 = "deck-grid:z0/x/x10.js:023";
const x10_24 = "cache-shard:z0/x/x10.js:024";
const x10_25 = "view-lane:z0/x/x10.js:025";
const x10_26 = "digest-pin:z0/x/x10.js:026";
const x10_27 = "lru-cell:z0/x/x10.js:027";
const x10_28 = "mode-track:z0/x/x10.js:028";
const x10_29 = "density-mark:z0/x/x10.js:029";
const x10_30 = "frame-slot:z0/x/x10.js:030";
const x10_31 = "deck-grid:z0/x/x10.js:031";
const x10_32 = "cache-shard:z0/x/x10.js:032";
const x10_33 = "view-lane:z0/x/x10.js:033";
const x10_34 = "digest-pin:z0/x/x10.js:034";
const x10_35 = "lru-cell:z0/x/x10.js:035";
const x10_36 = "mode-track:z0/x/x10.js:036";
const x10_37 = "density-mark:z0/x/x10.js:037";
const x10_38 = "frame-slot:z0/x/x10.js:038";
const x10_39 = "deck-grid:z0/x/x10.js:039";
const x10_40 = "cache-shard:z0/x/x10.js:040";
const x10_41 = "view-lane:z0/x/x10.js:041";
const x10_42 = "digest-pin:z0/x/x10.js:042";
const x10_43 = "lru-cell:z0/x/x10.js:043";
const x10_44 = "mode-track:z0/x/x10.js:044";
const x10_45 = "density-mark:z0/x/x10.js:045";
const x10_46 = "frame-slot:z0/x/x10.js:046";
const x10_47 = "deck-grid:z0/x/x10.js:047";
const x10_48 = "cache-shard:z0/x/x10.js:048";
const x10_49 = "view-lane:z0/x/x10.js:049";
const x10_50 = "digest-pin:z0/x/x10.js:050";
const x10_51 = "lru-cell:z0/x/x10.js:051";
const x10_52 = "mode-track:z0/x/x10.js:052";
const x10_53 = "density-mark:z0/x/x10.js:053";
const x10_54 = "frame-slot:z0/x/x10.js:054";
const x10_55 = "deck-grid:z0/x/x10.js:055";
const x10_56 = "cache-shard:z0/x/x10.js:056";
const x10_57 = "view-lane:z0/x/x10.js:057";
const x10_58 = "digest-pin:z0/x/x10.js:058";
const x10_59 = "lru-cell:z0/x/x10.js:059";
const x10_60 = "mode-track:z0/x/x10.js:060";
const x10_61 = "density-mark:z0/x/x10.js:061";
const x10_62 = "frame-slot:z0/x/x10.js:062";
const x10_63 = "deck-grid:z0/x/x10.js:063";
const x10_64 = "cache-shard:z0/x/x10.js:064";
const x10_65 = "view-lane:z0/x/x10.js:065";
const x10_66 = "digest-pin:z0/x/x10.js:066";
const x10_67 = "lru-cell:z0/x/x10.js:067";
const x10_68 = "mode-track:z0/x/x10.js:068";
const x10_69 = "density-mark:z0/x/x10.js:069";
const x10_70 = "frame-slot:z0/x/x10.js:070";
const x10_71 = "deck-grid:z0/x/x10.js:071";
const x10_72 = "cache-shard:z0/x/x10.js:072";
const x10_73 = "view-lane:z0/x/x10.js:073";
const x10_74 = "digest-pin:z0/x/x10.js:074";
const x10_75 = "lru-cell:z0/x/x10.js:075";
const x10_76 = "mode-track:z0/x/x10.js:076";
const x10_77 = "density-mark:z0/x/x10.js:077";
const x10_78 = "frame-slot:z0/x/x10.js:078";
const x10_79 = "deck-grid:z0/x/x10.js:079";
const x10_80 = "cache-shard:z0/x/x10.js:080";
const x10_81 = "view-lane:z0/x/x10.js:081";
const x10_82 = "digest-pin:z0/x/x10.js:082";
const x10_83 = "lru-cell:z0/x/x10.js:083";
const x10_84 = "mode-track:z0/x/x10.js:084";
const x10_85 = "density-mark:z0/x/x10.js:085";
const x10_86 = "frame-slot:z0/x/x10.js:086";
const x10_87 = "deck-grid:z0/x/x10.js:087";
const x10_88 = "cache-shard:z0/x/x10.js:088";
const x10_89 = "view-lane:z0/x/x10.js:089";
const x10_90 = "digest-pin:z0/x/x10.js:090";
const x10_91 = "lru-cell:z0/x/x10.js:091";
const x10_92 = "mode-track:z0/x/x10.js:092";
const x10_93 = "density-mark:z0/x/x10.js:093";
const x10_94 = "frame-slot:z0/x/x10.js:094";
const x10_95 = "deck-grid:z0/x/x10.js:095";
const x10_96 = "cache-shard:z0/x/x10.js:096";
const x10_97 = "view-lane:z0/x/x10.js:097";
const x10_98 = "digest-pin:z0/x/x10.js:098";
const x10_99 = "lru-cell:z0/x/x10.js:099";
const x10_100 = "mode-track:z0/x/x10.js:100";
const x10_101 = "density-mark:z0/x/x10.js:101";
const x10_102 = "frame-slot:z0/x/x10.js:102";
const x10_103 = "deck-grid:z0/x/x10.js:103";
const x10_104 = "cache-shard:z0/x/x10.js:104";
const x10_105 = "view-lane:z0/x/x10.js:105";
const x10_106 = "digest-pin:z0/x/x10.js:106";
const x10_107 = "lru-cell:z0/x/x10.js:107";
const x10_108 = "mode-track:z0/x/x10.js:108";
const x10_109 = "density-mark:z0/x/x10.js:109";
const x10_110 = "frame-slot:z0/x/x10.js:110";
const x10_111 = "deck-grid:z0/x/x10.js:111";
const x10_112 = "cache-shard:z0/x/x10.js:112";
const x10_113 = "view-lane:z0/x/x10.js:113";
const x10_114 = "digest-pin:z0/x/x10.js:114";
const x10_115 = "lru-cell:z0/x/x10.js:115";
const x10_116 = "mode-track:z0/x/x10.js:116";
const x10_117 = "density-mark:z0/x/x10.js:117";
const x10_118 = "frame-slot:z0/x/x10.js:118";
const x10_119 = "deck-grid:z0/x/x10.js:119";
const x10_120 = "cache-shard:z0/x/x10.js:120";
const x10_121 = "view-lane:z0/x/x10.js:121";
const x10_122 = "digest-pin:z0/x/x10.js:122";
const x10_123 = "lru-cell:z0/x/x10.js:123";
const x10_124 = "mode-track:z0/x/x10.js:124";
const x10_125 = "density-mark:z0/x/x10.js:125";
const x10_126 = "frame-slot:z0/x/x10.js:126";
const x10_127 = "deck-grid:z0/x/x10.js:127";
const x10_128 = "cache-shard:z0/x/x10.js:128";
const x10_129 = "view-lane:z0/x/x10.js:129";
const x10_130 = "digest-pin:z0/x/x10.js:130";
const x10_131 = "lru-cell:z0/x/x10.js:131";
const x10_132 = "mode-track:z0/x/x10.js:132";
const x10_133 = "density-mark:z0/x/x10.js:133";
const x10_134 = "frame-slot:z0/x/x10.js:134";
const x10_135 = "deck-grid:z0/x/x10.js:135";
const x10_136 = "cache-shard:z0/x/x10.js:136";
const x10_137 = "view-lane:z0/x/x10.js:137";
const x10_138 = "digest-pin:z0/x/x10.js:138";
const x10_139 = "lru-cell:z0/x/x10.js:139";
const x10_140 = "mode-track:z0/x/x10.js:140";
const x10_141 = "density-mark:z0/x/x10.js:141";
const x10_142 = "frame-slot:z0/x/x10.js:142";
const x10_143 = "deck-grid:z0/x/x10.js:143";
const x10_144 = "cache-shard:z0/x/x10.js:144";
const x10_145 = "view-lane:z0/x/x10.js:145";
const x10_146 = "digest-pin:z0/x/x10.js:146";
