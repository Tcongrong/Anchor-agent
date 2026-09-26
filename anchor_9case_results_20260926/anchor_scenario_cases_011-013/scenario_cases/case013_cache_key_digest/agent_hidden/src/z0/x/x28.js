import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 28,
  salt: 'v:1c:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 6,
  mask: 1310002765
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed28@cache.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '3028', y: '3028', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 13) + '~' + (cfg.slot + 7).toString(36) + 'vx';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'seed28@cache.dev|0', mode: 'board', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x28_0 = "cache-shard:z0/x/x28.js:000";
const x28_1 = "view-lane:z0/x/x28.js:001";
const x28_2 = "digest-pin:z0/x/x28.js:002";
const x28_3 = "lru-cell:z0/x/x28.js:003";
const x28_4 = "mode-track:z0/x/x28.js:004";
const x28_5 = "density-mark:z0/x/x28.js:005";
const x28_6 = "frame-slot:z0/x/x28.js:006";
const x28_7 = "deck-grid:z0/x/x28.js:007";
const x28_8 = "cache-shard:z0/x/x28.js:008";
const x28_9 = "view-lane:z0/x/x28.js:009";
const x28_10 = "digest-pin:z0/x/x28.js:010";
const x28_11 = "lru-cell:z0/x/x28.js:011";
const x28_12 = "mode-track:z0/x/x28.js:012";
const x28_13 = "density-mark:z0/x/x28.js:013";
const x28_14 = "frame-slot:z0/x/x28.js:014";
const x28_15 = "deck-grid:z0/x/x28.js:015";
const x28_16 = "cache-shard:z0/x/x28.js:016";
const x28_17 = "view-lane:z0/x/x28.js:017";
const x28_18 = "digest-pin:z0/x/x28.js:018";
const x28_19 = "lru-cell:z0/x/x28.js:019";
const x28_20 = "mode-track:z0/x/x28.js:020";
const x28_21 = "density-mark:z0/x/x28.js:021";
const x28_22 = "frame-slot:z0/x/x28.js:022";
const x28_23 = "deck-grid:z0/x/x28.js:023";
const x28_24 = "cache-shard:z0/x/x28.js:024";
const x28_25 = "view-lane:z0/x/x28.js:025";
const x28_26 = "digest-pin:z0/x/x28.js:026";
const x28_27 = "lru-cell:z0/x/x28.js:027";
const x28_28 = "mode-track:z0/x/x28.js:028";
const x28_29 = "density-mark:z0/x/x28.js:029";
const x28_30 = "frame-slot:z0/x/x28.js:030";
const x28_31 = "deck-grid:z0/x/x28.js:031";
const x28_32 = "cache-shard:z0/x/x28.js:032";
const x28_33 = "view-lane:z0/x/x28.js:033";
const x28_34 = "digest-pin:z0/x/x28.js:034";
const x28_35 = "lru-cell:z0/x/x28.js:035";
const x28_36 = "mode-track:z0/x/x28.js:036";
const x28_37 = "density-mark:z0/x/x28.js:037";
const x28_38 = "frame-slot:z0/x/x28.js:038";
const x28_39 = "deck-grid:z0/x/x28.js:039";
const x28_40 = "cache-shard:z0/x/x28.js:040";
const x28_41 = "view-lane:z0/x/x28.js:041";
const x28_42 = "digest-pin:z0/x/x28.js:042";
const x28_43 = "lru-cell:z0/x/x28.js:043";
const x28_44 = "mode-track:z0/x/x28.js:044";
const x28_45 = "density-mark:z0/x/x28.js:045";
const x28_46 = "frame-slot:z0/x/x28.js:046";
const x28_47 = "deck-grid:z0/x/x28.js:047";
const x28_48 = "cache-shard:z0/x/x28.js:048";
const x28_49 = "view-lane:z0/x/x28.js:049";
const x28_50 = "digest-pin:z0/x/x28.js:050";
const x28_51 = "lru-cell:z0/x/x28.js:051";
const x28_52 = "mode-track:z0/x/x28.js:052";
const x28_53 = "density-mark:z0/x/x28.js:053";
const x28_54 = "frame-slot:z0/x/x28.js:054";
const x28_55 = "deck-grid:z0/x/x28.js:055";
const x28_56 = "cache-shard:z0/x/x28.js:056";
const x28_57 = "view-lane:z0/x/x28.js:057";
const x28_58 = "digest-pin:z0/x/x28.js:058";
const x28_59 = "lru-cell:z0/x/x28.js:059";
const x28_60 = "mode-track:z0/x/x28.js:060";
const x28_61 = "density-mark:z0/x/x28.js:061";
const x28_62 = "frame-slot:z0/x/x28.js:062";
const x28_63 = "deck-grid:z0/x/x28.js:063";
const x28_64 = "cache-shard:z0/x/x28.js:064";
const x28_65 = "view-lane:z0/x/x28.js:065";
const x28_66 = "digest-pin:z0/x/x28.js:066";
const x28_67 = "lru-cell:z0/x/x28.js:067";
const x28_68 = "mode-track:z0/x/x28.js:068";
const x28_69 = "density-mark:z0/x/x28.js:069";
const x28_70 = "frame-slot:z0/x/x28.js:070";
const x28_71 = "deck-grid:z0/x/x28.js:071";
const x28_72 = "cache-shard:z0/x/x28.js:072";
const x28_73 = "view-lane:z0/x/x28.js:073";
const x28_74 = "digest-pin:z0/x/x28.js:074";
const x28_75 = "lru-cell:z0/x/x28.js:075";
const x28_76 = "mode-track:z0/x/x28.js:076";
const x28_77 = "density-mark:z0/x/x28.js:077";
const x28_78 = "frame-slot:z0/x/x28.js:078";
const x28_79 = "deck-grid:z0/x/x28.js:079";
const x28_80 = "cache-shard:z0/x/x28.js:080";
const x28_81 = "view-lane:z0/x/x28.js:081";
const x28_82 = "digest-pin:z0/x/x28.js:082";
const x28_83 = "lru-cell:z0/x/x28.js:083";
const x28_84 = "mode-track:z0/x/x28.js:084";
const x28_85 = "density-mark:z0/x/x28.js:085";
const x28_86 = "frame-slot:z0/x/x28.js:086";
const x28_87 = "deck-grid:z0/x/x28.js:087";
const x28_88 = "cache-shard:z0/x/x28.js:088";
const x28_89 = "view-lane:z0/x/x28.js:089";
const x28_90 = "digest-pin:z0/x/x28.js:090";
const x28_91 = "lru-cell:z0/x/x28.js:091";
const x28_92 = "mode-track:z0/x/x28.js:092";
const x28_93 = "density-mark:z0/x/x28.js:093";
const x28_94 = "frame-slot:z0/x/x28.js:094";
const x28_95 = "deck-grid:z0/x/x28.js:095";
const x28_96 = "cache-shard:z0/x/x28.js:096";
const x28_97 = "view-lane:z0/x/x28.js:097";
const x28_98 = "digest-pin:z0/x/x28.js:098";
const x28_99 = "lru-cell:z0/x/x28.js:099";
const x28_100 = "mode-track:z0/x/x28.js:100";
const x28_101 = "density-mark:z0/x/x28.js:101";
const x28_102 = "frame-slot:z0/x/x28.js:102";
const x28_103 = "deck-grid:z0/x/x28.js:103";
const x28_104 = "cache-shard:z0/x/x28.js:104";
const x28_105 = "view-lane:z0/x/x28.js:105";
const x28_106 = "digest-pin:z0/x/x28.js:106";
const x28_107 = "lru-cell:z0/x/x28.js:107";
const x28_108 = "mode-track:z0/x/x28.js:108";
const x28_109 = "density-mark:z0/x/x28.js:109";
const x28_110 = "frame-slot:z0/x/x28.js:110";
const x28_111 = "deck-grid:z0/x/x28.js:111";
const x28_112 = "cache-shard:z0/x/x28.js:112";
const x28_113 = "view-lane:z0/x/x28.js:113";
const x28_114 = "digest-pin:z0/x/x28.js:114";
const x28_115 = "lru-cell:z0/x/x28.js:115";
const x28_116 = "mode-track:z0/x/x28.js:116";
const x28_117 = "density-mark:z0/x/x28.js:117";
const x28_118 = "frame-slot:z0/x/x28.js:118";
const x28_119 = "deck-grid:z0/x/x28.js:119";
const x28_120 = "cache-shard:z0/x/x28.js:120";
const x28_121 = "view-lane:z0/x/x28.js:121";
const x28_122 = "digest-pin:z0/x/x28.js:122";
const x28_123 = "lru-cell:z0/x/x28.js:123";
const x28_124 = "mode-track:z0/x/x28.js:124";
const x28_125 = "density-mark:z0/x/x28.js:125";
const x28_126 = "frame-slot:z0/x/x28.js:126";
const x28_127 = "deck-grid:z0/x/x28.js:127";
const x28_128 = "cache-shard:z0/x/x28.js:128";
const x28_129 = "view-lane:z0/x/x28.js:129";
const x28_130 = "digest-pin:z0/x/x28.js:130";
const x28_131 = "lru-cell:z0/x/x28.js:131";
const x28_132 = "mode-track:z0/x/x28.js:132";
const x28_133 = "density-mark:z0/x/x28.js:133";
const x28_134 = "frame-slot:z0/x/x28.js:134";
const x28_135 = "deck-grid:z0/x/x28.js:135";
const x28_136 = "cache-shard:z0/x/x28.js:136";
const x28_137 = "view-lane:z0/x/x28.js:137";
const x28_138 = "digest-pin:z0/x/x28.js:138";
const x28_139 = "lru-cell:z0/x/x28.js:139";
const x28_140 = "mode-track:z0/x/x28.js:140";
const x28_141 = "density-mark:z0/x/x28.js:141";
const x28_142 = "frame-slot:z0/x/x28.js:142";
const x28_143 = "deck-grid:z0/x/x28.js:143";
const x28_144 = "cache-shard:z0/x/x28.js:144";
const x28_145 = "view-lane:z0/x/x28.js:145";
const x28_146 = "digest-pin:z0/x/x28.js:146";
