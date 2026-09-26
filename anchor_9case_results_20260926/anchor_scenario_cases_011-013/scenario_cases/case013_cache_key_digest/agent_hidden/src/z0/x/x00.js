import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 0,
  salt: 'v:00:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 2,
  mask: 23757
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost0@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3000', y: '3000', n: 4 },
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
  const value = fn({ view: 'ghost0@cache.dev|0', mode: 'board', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x00_0 = "cache-shard:z0/x/x00.js:000";
const x00_1 = "view-lane:z0/x/x00.js:001";
const x00_2 = "digest-pin:z0/x/x00.js:002";
const x00_3 = "lru-cell:z0/x/x00.js:003";
const x00_4 = "mode-track:z0/x/x00.js:004";
const x00_5 = "density-mark:z0/x/x00.js:005";
const x00_6 = "frame-slot:z0/x/x00.js:006";
const x00_7 = "deck-grid:z0/x/x00.js:007";
const x00_8 = "cache-shard:z0/x/x00.js:008";
const x00_9 = "view-lane:z0/x/x00.js:009";
const x00_10 = "digest-pin:z0/x/x00.js:010";
const x00_11 = "lru-cell:z0/x/x00.js:011";
const x00_12 = "mode-track:z0/x/x00.js:012";
const x00_13 = "density-mark:z0/x/x00.js:013";
const x00_14 = "frame-slot:z0/x/x00.js:014";
const x00_15 = "deck-grid:z0/x/x00.js:015";
const x00_16 = "cache-shard:z0/x/x00.js:016";
const x00_17 = "view-lane:z0/x/x00.js:017";
const x00_18 = "digest-pin:z0/x/x00.js:018";
const x00_19 = "lru-cell:z0/x/x00.js:019";
const x00_20 = "mode-track:z0/x/x00.js:020";
const x00_21 = "density-mark:z0/x/x00.js:021";
const x00_22 = "frame-slot:z0/x/x00.js:022";
const x00_23 = "deck-grid:z0/x/x00.js:023";
const x00_24 = "cache-shard:z0/x/x00.js:024";
const x00_25 = "view-lane:z0/x/x00.js:025";
const x00_26 = "digest-pin:z0/x/x00.js:026";
const x00_27 = "lru-cell:z0/x/x00.js:027";
const x00_28 = "mode-track:z0/x/x00.js:028";
const x00_29 = "density-mark:z0/x/x00.js:029";
const x00_30 = "frame-slot:z0/x/x00.js:030";
const x00_31 = "deck-grid:z0/x/x00.js:031";
const x00_32 = "cache-shard:z0/x/x00.js:032";
const x00_33 = "view-lane:z0/x/x00.js:033";
const x00_34 = "digest-pin:z0/x/x00.js:034";
const x00_35 = "lru-cell:z0/x/x00.js:035";
const x00_36 = "mode-track:z0/x/x00.js:036";
const x00_37 = "density-mark:z0/x/x00.js:037";
const x00_38 = "frame-slot:z0/x/x00.js:038";
const x00_39 = "deck-grid:z0/x/x00.js:039";
const x00_40 = "cache-shard:z0/x/x00.js:040";
const x00_41 = "view-lane:z0/x/x00.js:041";
const x00_42 = "digest-pin:z0/x/x00.js:042";
const x00_43 = "lru-cell:z0/x/x00.js:043";
const x00_44 = "mode-track:z0/x/x00.js:044";
const x00_45 = "density-mark:z0/x/x00.js:045";
const x00_46 = "frame-slot:z0/x/x00.js:046";
const x00_47 = "deck-grid:z0/x/x00.js:047";
const x00_48 = "cache-shard:z0/x/x00.js:048";
const x00_49 = "view-lane:z0/x/x00.js:049";
const x00_50 = "digest-pin:z0/x/x00.js:050";
const x00_51 = "lru-cell:z0/x/x00.js:051";
const x00_52 = "mode-track:z0/x/x00.js:052";
const x00_53 = "density-mark:z0/x/x00.js:053";
const x00_54 = "frame-slot:z0/x/x00.js:054";
const x00_55 = "deck-grid:z0/x/x00.js:055";
const x00_56 = "cache-shard:z0/x/x00.js:056";
const x00_57 = "view-lane:z0/x/x00.js:057";
const x00_58 = "digest-pin:z0/x/x00.js:058";
const x00_59 = "lru-cell:z0/x/x00.js:059";
const x00_60 = "mode-track:z0/x/x00.js:060";
const x00_61 = "density-mark:z0/x/x00.js:061";
const x00_62 = "frame-slot:z0/x/x00.js:062";
const x00_63 = "deck-grid:z0/x/x00.js:063";
const x00_64 = "cache-shard:z0/x/x00.js:064";
const x00_65 = "view-lane:z0/x/x00.js:065";
const x00_66 = "digest-pin:z0/x/x00.js:066";
const x00_67 = "lru-cell:z0/x/x00.js:067";
const x00_68 = "mode-track:z0/x/x00.js:068";
const x00_69 = "density-mark:z0/x/x00.js:069";
const x00_70 = "frame-slot:z0/x/x00.js:070";
const x00_71 = "deck-grid:z0/x/x00.js:071";
const x00_72 = "cache-shard:z0/x/x00.js:072";
const x00_73 = "view-lane:z0/x/x00.js:073";
const x00_74 = "digest-pin:z0/x/x00.js:074";
const x00_75 = "lru-cell:z0/x/x00.js:075";
const x00_76 = "mode-track:z0/x/x00.js:076";
const x00_77 = "density-mark:z0/x/x00.js:077";
const x00_78 = "frame-slot:z0/x/x00.js:078";
const x00_79 = "deck-grid:z0/x/x00.js:079";
const x00_80 = "cache-shard:z0/x/x00.js:080";
const x00_81 = "view-lane:z0/x/x00.js:081";
const x00_82 = "digest-pin:z0/x/x00.js:082";
const x00_83 = "lru-cell:z0/x/x00.js:083";
const x00_84 = "mode-track:z0/x/x00.js:084";
const x00_85 = "density-mark:z0/x/x00.js:085";
const x00_86 = "frame-slot:z0/x/x00.js:086";
const x00_87 = "deck-grid:z0/x/x00.js:087";
const x00_88 = "cache-shard:z0/x/x00.js:088";
const x00_89 = "view-lane:z0/x/x00.js:089";
const x00_90 = "digest-pin:z0/x/x00.js:090";
const x00_91 = "lru-cell:z0/x/x00.js:091";
const x00_92 = "mode-track:z0/x/x00.js:092";
const x00_93 = "density-mark:z0/x/x00.js:093";
const x00_94 = "frame-slot:z0/x/x00.js:094";
const x00_95 = "deck-grid:z0/x/x00.js:095";
const x00_96 = "cache-shard:z0/x/x00.js:096";
const x00_97 = "view-lane:z0/x/x00.js:097";
const x00_98 = "digest-pin:z0/x/x00.js:098";
const x00_99 = "lru-cell:z0/x/x00.js:099";
const x00_100 = "mode-track:z0/x/x00.js:100";
const x00_101 = "density-mark:z0/x/x00.js:101";
const x00_102 = "frame-slot:z0/x/x00.js:102";
const x00_103 = "deck-grid:z0/x/x00.js:103";
const x00_104 = "cache-shard:z0/x/x00.js:104";
const x00_105 = "view-lane:z0/x/x00.js:105";
const x00_106 = "digest-pin:z0/x/x00.js:106";
const x00_107 = "lru-cell:z0/x/x00.js:107";
const x00_108 = "mode-track:z0/x/x00.js:108";
const x00_109 = "density-mark:z0/x/x00.js:109";
const x00_110 = "frame-slot:z0/x/x00.js:110";
const x00_111 = "deck-grid:z0/x/x00.js:111";
const x00_112 = "cache-shard:z0/x/x00.js:112";
const x00_113 = "view-lane:z0/x/x00.js:113";
const x00_114 = "digest-pin:z0/x/x00.js:114";
const x00_115 = "lru-cell:z0/x/x00.js:115";
const x00_116 = "mode-track:z0/x/x00.js:116";
const x00_117 = "density-mark:z0/x/x00.js:117";
const x00_118 = "frame-slot:z0/x/x00.js:118";
const x00_119 = "deck-grid:z0/x/x00.js:119";
const x00_120 = "cache-shard:z0/x/x00.js:120";
const x00_121 = "view-lane:z0/x/x00.js:121";
const x00_122 = "digest-pin:z0/x/x00.js:122";
const x00_123 = "lru-cell:z0/x/x00.js:123";
const x00_124 = "mode-track:z0/x/x00.js:124";
const x00_125 = "density-mark:z0/x/x00.js:125";
const x00_126 = "frame-slot:z0/x/x00.js:126";
const x00_127 = "deck-grid:z0/x/x00.js:127";
const x00_128 = "cache-shard:z0/x/x00.js:128";
const x00_129 = "view-lane:z0/x/x00.js:129";
const x00_130 = "digest-pin:z0/x/x00.js:130";
const x00_131 = "lru-cell:z0/x/x00.js:131";
const x00_132 = "mode-track:z0/x/x00.js:132";
const x00_133 = "density-mark:z0/x/x00.js:133";
const x00_134 = "frame-slot:z0/x/x00.js:134";
const x00_135 = "deck-grid:z0/x/x00.js:135";
const x00_136 = "cache-shard:z0/x/x00.js:136";
const x00_137 = "view-lane:z0/x/x00.js:137";
const x00_138 = "digest-pin:z0/x/x00.js:138";
const x00_139 = "lru-cell:z0/x/x00.js:139";
const x00_140 = "mode-track:z0/x/x00.js:140";
const x00_141 = "density-mark:z0/x/x00.js:141";
const x00_142 = "frame-slot:z0/x/x00.js:142";
const x00_143 = "deck-grid:z0/x/x00.js:143";
const x00_144 = "cache-shard:z0/x/x00.js:144";
const x00_145 = "view-lane:z0/x/x00.js:145";
const x00_146 = "digest-pin:z0/x/x00.js:146";
