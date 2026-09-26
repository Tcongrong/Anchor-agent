import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 40,
  salt: 'v:28:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 6,
  mask: 3098555853
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed40@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3040', y: '3040', n: 4 },
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
  const value = fn({ view: 'seed40@cache.dev|0', mode: 'board', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x40_0 = "cache-shard:z0/x/x40.js:000";
const x40_1 = "view-lane:z0/x/x40.js:001";
const x40_2 = "digest-pin:z0/x/x40.js:002";
const x40_3 = "lru-cell:z0/x/x40.js:003";
const x40_4 = "mode-track:z0/x/x40.js:004";
const x40_5 = "density-mark:z0/x/x40.js:005";
const x40_6 = "frame-slot:z0/x/x40.js:006";
const x40_7 = "deck-grid:z0/x/x40.js:007";
const x40_8 = "cache-shard:z0/x/x40.js:008";
const x40_9 = "view-lane:z0/x/x40.js:009";
const x40_10 = "digest-pin:z0/x/x40.js:010";
const x40_11 = "lru-cell:z0/x/x40.js:011";
const x40_12 = "mode-track:z0/x/x40.js:012";
const x40_13 = "density-mark:z0/x/x40.js:013";
const x40_14 = "frame-slot:z0/x/x40.js:014";
const x40_15 = "deck-grid:z0/x/x40.js:015";
const x40_16 = "cache-shard:z0/x/x40.js:016";
const x40_17 = "view-lane:z0/x/x40.js:017";
const x40_18 = "digest-pin:z0/x/x40.js:018";
const x40_19 = "lru-cell:z0/x/x40.js:019";
const x40_20 = "mode-track:z0/x/x40.js:020";
const x40_21 = "density-mark:z0/x/x40.js:021";
const x40_22 = "frame-slot:z0/x/x40.js:022";
const x40_23 = "deck-grid:z0/x/x40.js:023";
const x40_24 = "cache-shard:z0/x/x40.js:024";
const x40_25 = "view-lane:z0/x/x40.js:025";
const x40_26 = "digest-pin:z0/x/x40.js:026";
const x40_27 = "lru-cell:z0/x/x40.js:027";
const x40_28 = "mode-track:z0/x/x40.js:028";
const x40_29 = "density-mark:z0/x/x40.js:029";
const x40_30 = "frame-slot:z0/x/x40.js:030";
const x40_31 = "deck-grid:z0/x/x40.js:031";
const x40_32 = "cache-shard:z0/x/x40.js:032";
const x40_33 = "view-lane:z0/x/x40.js:033";
const x40_34 = "digest-pin:z0/x/x40.js:034";
const x40_35 = "lru-cell:z0/x/x40.js:035";
const x40_36 = "mode-track:z0/x/x40.js:036";
const x40_37 = "density-mark:z0/x/x40.js:037";
const x40_38 = "frame-slot:z0/x/x40.js:038";
const x40_39 = "deck-grid:z0/x/x40.js:039";
const x40_40 = "cache-shard:z0/x/x40.js:040";
const x40_41 = "view-lane:z0/x/x40.js:041";
const x40_42 = "digest-pin:z0/x/x40.js:042";
const x40_43 = "lru-cell:z0/x/x40.js:043";
const x40_44 = "mode-track:z0/x/x40.js:044";
const x40_45 = "density-mark:z0/x/x40.js:045";
const x40_46 = "frame-slot:z0/x/x40.js:046";
const x40_47 = "deck-grid:z0/x/x40.js:047";
const x40_48 = "cache-shard:z0/x/x40.js:048";
const x40_49 = "view-lane:z0/x/x40.js:049";
const x40_50 = "digest-pin:z0/x/x40.js:050";
const x40_51 = "lru-cell:z0/x/x40.js:051";
const x40_52 = "mode-track:z0/x/x40.js:052";
const x40_53 = "density-mark:z0/x/x40.js:053";
const x40_54 = "frame-slot:z0/x/x40.js:054";
const x40_55 = "deck-grid:z0/x/x40.js:055";
const x40_56 = "cache-shard:z0/x/x40.js:056";
const x40_57 = "view-lane:z0/x/x40.js:057";
const x40_58 = "digest-pin:z0/x/x40.js:058";
const x40_59 = "lru-cell:z0/x/x40.js:059";
const x40_60 = "mode-track:z0/x/x40.js:060";
const x40_61 = "density-mark:z0/x/x40.js:061";
const x40_62 = "frame-slot:z0/x/x40.js:062";
const x40_63 = "deck-grid:z0/x/x40.js:063";
const x40_64 = "cache-shard:z0/x/x40.js:064";
const x40_65 = "view-lane:z0/x/x40.js:065";
const x40_66 = "digest-pin:z0/x/x40.js:066";
const x40_67 = "lru-cell:z0/x/x40.js:067";
const x40_68 = "mode-track:z0/x/x40.js:068";
const x40_69 = "density-mark:z0/x/x40.js:069";
const x40_70 = "frame-slot:z0/x/x40.js:070";
const x40_71 = "deck-grid:z0/x/x40.js:071";
const x40_72 = "cache-shard:z0/x/x40.js:072";
const x40_73 = "view-lane:z0/x/x40.js:073";
const x40_74 = "digest-pin:z0/x/x40.js:074";
const x40_75 = "lru-cell:z0/x/x40.js:075";
const x40_76 = "mode-track:z0/x/x40.js:076";
const x40_77 = "density-mark:z0/x/x40.js:077";
const x40_78 = "frame-slot:z0/x/x40.js:078";
const x40_79 = "deck-grid:z0/x/x40.js:079";
const x40_80 = "cache-shard:z0/x/x40.js:080";
const x40_81 = "view-lane:z0/x/x40.js:081";
const x40_82 = "digest-pin:z0/x/x40.js:082";
const x40_83 = "lru-cell:z0/x/x40.js:083";
const x40_84 = "mode-track:z0/x/x40.js:084";
const x40_85 = "density-mark:z0/x/x40.js:085";
const x40_86 = "frame-slot:z0/x/x40.js:086";
const x40_87 = "deck-grid:z0/x/x40.js:087";
const x40_88 = "cache-shard:z0/x/x40.js:088";
const x40_89 = "view-lane:z0/x/x40.js:089";
const x40_90 = "digest-pin:z0/x/x40.js:090";
const x40_91 = "lru-cell:z0/x/x40.js:091";
const x40_92 = "mode-track:z0/x/x40.js:092";
const x40_93 = "density-mark:z0/x/x40.js:093";
const x40_94 = "frame-slot:z0/x/x40.js:094";
const x40_95 = "deck-grid:z0/x/x40.js:095";
const x40_96 = "cache-shard:z0/x/x40.js:096";
const x40_97 = "view-lane:z0/x/x40.js:097";
const x40_98 = "digest-pin:z0/x/x40.js:098";
const x40_99 = "lru-cell:z0/x/x40.js:099";
const x40_100 = "mode-track:z0/x/x40.js:100";
const x40_101 = "density-mark:z0/x/x40.js:101";
const x40_102 = "frame-slot:z0/x/x40.js:102";
const x40_103 = "deck-grid:z0/x/x40.js:103";
const x40_104 = "cache-shard:z0/x/x40.js:104";
const x40_105 = "view-lane:z0/x/x40.js:105";
const x40_106 = "digest-pin:z0/x/x40.js:106";
const x40_107 = "lru-cell:z0/x/x40.js:107";
const x40_108 = "mode-track:z0/x/x40.js:108";
const x40_109 = "density-mark:z0/x/x40.js:109";
const x40_110 = "frame-slot:z0/x/x40.js:110";
const x40_111 = "deck-grid:z0/x/x40.js:111";
const x40_112 = "cache-shard:z0/x/x40.js:112";
const x40_113 = "view-lane:z0/x/x40.js:113";
const x40_114 = "digest-pin:z0/x/x40.js:114";
const x40_115 = "lru-cell:z0/x/x40.js:115";
const x40_116 = "mode-track:z0/x/x40.js:116";
const x40_117 = "density-mark:z0/x/x40.js:117";
const x40_118 = "frame-slot:z0/x/x40.js:118";
const x40_119 = "deck-grid:z0/x/x40.js:119";
const x40_120 = "cache-shard:z0/x/x40.js:120";
const x40_121 = "view-lane:z0/x/x40.js:121";
const x40_122 = "digest-pin:z0/x/x40.js:122";
const x40_123 = "lru-cell:z0/x/x40.js:123";
const x40_124 = "mode-track:z0/x/x40.js:124";
const x40_125 = "density-mark:z0/x/x40.js:125";
const x40_126 = "frame-slot:z0/x/x40.js:126";
const x40_127 = "deck-grid:z0/x/x40.js:127";
const x40_128 = "cache-shard:z0/x/x40.js:128";
const x40_129 = "view-lane:z0/x/x40.js:129";
const x40_130 = "digest-pin:z0/x/x40.js:130";
const x40_131 = "lru-cell:z0/x/x40.js:131";
const x40_132 = "mode-track:z0/x/x40.js:132";
const x40_133 = "density-mark:z0/x/x40.js:133";
const x40_134 = "frame-slot:z0/x/x40.js:134";
const x40_135 = "deck-grid:z0/x/x40.js:135";
const x40_136 = "cache-shard:z0/x/x40.js:136";
const x40_137 = "view-lane:z0/x/x40.js:137";
const x40_138 = "digest-pin:z0/x/x40.js:138";
const x40_139 = "lru-cell:z0/x/x40.js:139";
const x40_140 = "mode-track:z0/x/x40.js:140";
const x40_141 = "density-mark:z0/x/x40.js:141";
const x40_142 = "frame-slot:z0/x/x40.js:142";
const x40_143 = "deck-grid:z0/x/x40.js:143";
const x40_144 = "cache-shard:z0/x/x40.js:144";
const x40_145 = "view-lane:z0/x/x40.js:145";
const x40_146 = "digest-pin:z0/x/x40.js:146";
