import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 16,
  salt: 'v:10:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 6,
  mask: 3816416973
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed16@cache.dev', y: 'shadow', n: 15 },
    { k: 'b', i: 1, v: '3016', y: '3016', n: 4 },
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
  const value = fn({ view: 'seed16@cache.dev|0', mode: 'board', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x16_0 = "cache-shard:z0/x/x16.js:000";
const x16_1 = "view-lane:z0/x/x16.js:001";
const x16_2 = "digest-pin:z0/x/x16.js:002";
const x16_3 = "lru-cell:z0/x/x16.js:003";
const x16_4 = "mode-track:z0/x/x16.js:004";
const x16_5 = "density-mark:z0/x/x16.js:005";
const x16_6 = "frame-slot:z0/x/x16.js:006";
const x16_7 = "deck-grid:z0/x/x16.js:007";
const x16_8 = "cache-shard:z0/x/x16.js:008";
const x16_9 = "view-lane:z0/x/x16.js:009";
const x16_10 = "digest-pin:z0/x/x16.js:010";
const x16_11 = "lru-cell:z0/x/x16.js:011";
const x16_12 = "mode-track:z0/x/x16.js:012";
const x16_13 = "density-mark:z0/x/x16.js:013";
const x16_14 = "frame-slot:z0/x/x16.js:014";
const x16_15 = "deck-grid:z0/x/x16.js:015";
const x16_16 = "cache-shard:z0/x/x16.js:016";
const x16_17 = "view-lane:z0/x/x16.js:017";
const x16_18 = "digest-pin:z0/x/x16.js:018";
const x16_19 = "lru-cell:z0/x/x16.js:019";
const x16_20 = "mode-track:z0/x/x16.js:020";
const x16_21 = "density-mark:z0/x/x16.js:021";
const x16_22 = "frame-slot:z0/x/x16.js:022";
const x16_23 = "deck-grid:z0/x/x16.js:023";
const x16_24 = "cache-shard:z0/x/x16.js:024";
const x16_25 = "view-lane:z0/x/x16.js:025";
const x16_26 = "digest-pin:z0/x/x16.js:026";
const x16_27 = "lru-cell:z0/x/x16.js:027";
const x16_28 = "mode-track:z0/x/x16.js:028";
const x16_29 = "density-mark:z0/x/x16.js:029";
const x16_30 = "frame-slot:z0/x/x16.js:030";
const x16_31 = "deck-grid:z0/x/x16.js:031";
const x16_32 = "cache-shard:z0/x/x16.js:032";
const x16_33 = "view-lane:z0/x/x16.js:033";
const x16_34 = "digest-pin:z0/x/x16.js:034";
const x16_35 = "lru-cell:z0/x/x16.js:035";
const x16_36 = "mode-track:z0/x/x16.js:036";
const x16_37 = "density-mark:z0/x/x16.js:037";
const x16_38 = "frame-slot:z0/x/x16.js:038";
const x16_39 = "deck-grid:z0/x/x16.js:039";
const x16_40 = "cache-shard:z0/x/x16.js:040";
const x16_41 = "view-lane:z0/x/x16.js:041";
const x16_42 = "digest-pin:z0/x/x16.js:042";
const x16_43 = "lru-cell:z0/x/x16.js:043";
const x16_44 = "mode-track:z0/x/x16.js:044";
const x16_45 = "density-mark:z0/x/x16.js:045";
const x16_46 = "frame-slot:z0/x/x16.js:046";
const x16_47 = "deck-grid:z0/x/x16.js:047";
const x16_48 = "cache-shard:z0/x/x16.js:048";
const x16_49 = "view-lane:z0/x/x16.js:049";
const x16_50 = "digest-pin:z0/x/x16.js:050";
const x16_51 = "lru-cell:z0/x/x16.js:051";
const x16_52 = "mode-track:z0/x/x16.js:052";
const x16_53 = "density-mark:z0/x/x16.js:053";
const x16_54 = "frame-slot:z0/x/x16.js:054";
const x16_55 = "deck-grid:z0/x/x16.js:055";
const x16_56 = "cache-shard:z0/x/x16.js:056";
const x16_57 = "view-lane:z0/x/x16.js:057";
const x16_58 = "digest-pin:z0/x/x16.js:058";
const x16_59 = "lru-cell:z0/x/x16.js:059";
const x16_60 = "mode-track:z0/x/x16.js:060";
const x16_61 = "density-mark:z0/x/x16.js:061";
const x16_62 = "frame-slot:z0/x/x16.js:062";
const x16_63 = "deck-grid:z0/x/x16.js:063";
const x16_64 = "cache-shard:z0/x/x16.js:064";
const x16_65 = "view-lane:z0/x/x16.js:065";
const x16_66 = "digest-pin:z0/x/x16.js:066";
const x16_67 = "lru-cell:z0/x/x16.js:067";
const x16_68 = "mode-track:z0/x/x16.js:068";
const x16_69 = "density-mark:z0/x/x16.js:069";
const x16_70 = "frame-slot:z0/x/x16.js:070";
const x16_71 = "deck-grid:z0/x/x16.js:071";
const x16_72 = "cache-shard:z0/x/x16.js:072";
const x16_73 = "view-lane:z0/x/x16.js:073";
const x16_74 = "digest-pin:z0/x/x16.js:074";
const x16_75 = "lru-cell:z0/x/x16.js:075";
const x16_76 = "mode-track:z0/x/x16.js:076";
const x16_77 = "density-mark:z0/x/x16.js:077";
const x16_78 = "frame-slot:z0/x/x16.js:078";
const x16_79 = "deck-grid:z0/x/x16.js:079";
const x16_80 = "cache-shard:z0/x/x16.js:080";
const x16_81 = "view-lane:z0/x/x16.js:081";
const x16_82 = "digest-pin:z0/x/x16.js:082";
const x16_83 = "lru-cell:z0/x/x16.js:083";
const x16_84 = "mode-track:z0/x/x16.js:084";
const x16_85 = "density-mark:z0/x/x16.js:085";
const x16_86 = "frame-slot:z0/x/x16.js:086";
const x16_87 = "deck-grid:z0/x/x16.js:087";
const x16_88 = "cache-shard:z0/x/x16.js:088";
const x16_89 = "view-lane:z0/x/x16.js:089";
const x16_90 = "digest-pin:z0/x/x16.js:090";
const x16_91 = "lru-cell:z0/x/x16.js:091";
const x16_92 = "mode-track:z0/x/x16.js:092";
const x16_93 = "density-mark:z0/x/x16.js:093";
const x16_94 = "frame-slot:z0/x/x16.js:094";
const x16_95 = "deck-grid:z0/x/x16.js:095";
const x16_96 = "cache-shard:z0/x/x16.js:096";
const x16_97 = "view-lane:z0/x/x16.js:097";
const x16_98 = "digest-pin:z0/x/x16.js:098";
const x16_99 = "lru-cell:z0/x/x16.js:099";
const x16_100 = "mode-track:z0/x/x16.js:100";
const x16_101 = "density-mark:z0/x/x16.js:101";
const x16_102 = "frame-slot:z0/x/x16.js:102";
const x16_103 = "deck-grid:z0/x/x16.js:103";
const x16_104 = "cache-shard:z0/x/x16.js:104";
const x16_105 = "view-lane:z0/x/x16.js:105";
const x16_106 = "digest-pin:z0/x/x16.js:106";
const x16_107 = "lru-cell:z0/x/x16.js:107";
const x16_108 = "mode-track:z0/x/x16.js:108";
const x16_109 = "density-mark:z0/x/x16.js:109";
const x16_110 = "frame-slot:z0/x/x16.js:110";
const x16_111 = "deck-grid:z0/x/x16.js:111";
const x16_112 = "cache-shard:z0/x/x16.js:112";
const x16_113 = "view-lane:z0/x/x16.js:113";
const x16_114 = "digest-pin:z0/x/x16.js:114";
const x16_115 = "lru-cell:z0/x/x16.js:115";
const x16_116 = "mode-track:z0/x/x16.js:116";
const x16_117 = "density-mark:z0/x/x16.js:117";
const x16_118 = "frame-slot:z0/x/x16.js:118";
const x16_119 = "deck-grid:z0/x/x16.js:119";
const x16_120 = "cache-shard:z0/x/x16.js:120";
const x16_121 = "view-lane:z0/x/x16.js:121";
const x16_122 = "digest-pin:z0/x/x16.js:122";
const x16_123 = "lru-cell:z0/x/x16.js:123";
const x16_124 = "mode-track:z0/x/x16.js:124";
const x16_125 = "density-mark:z0/x/x16.js:125";
const x16_126 = "frame-slot:z0/x/x16.js:126";
const x16_127 = "deck-grid:z0/x/x16.js:127";
const x16_128 = "cache-shard:z0/x/x16.js:128";
const x16_129 = "view-lane:z0/x/x16.js:129";
const x16_130 = "digest-pin:z0/x/x16.js:130";
const x16_131 = "lru-cell:z0/x/x16.js:131";
const x16_132 = "mode-track:z0/x/x16.js:132";
const x16_133 = "density-mark:z0/x/x16.js:133";
const x16_134 = "frame-slot:z0/x/x16.js:134";
const x16_135 = "deck-grid:z0/x/x16.js:135";
const x16_136 = "cache-shard:z0/x/x16.js:136";
const x16_137 = "view-lane:z0/x/x16.js:137";
const x16_138 = "digest-pin:z0/x/x16.js:138";
const x16_139 = "lru-cell:z0/x/x16.js:139";
const x16_140 = "mode-track:z0/x/x16.js:140";
const x16_141 = "density-mark:z0/x/x16.js:141";
const x16_142 = "frame-slot:z0/x/x16.js:142";
const x16_143 = "deck-grid:z0/x/x16.js:143";
const x16_144 = "cache-shard:z0/x/x16.js:144";
const x16_145 = "view-lane:z0/x/x16.js:145";
const x16_146 = "digest-pin:z0/x/x16.js:146";
