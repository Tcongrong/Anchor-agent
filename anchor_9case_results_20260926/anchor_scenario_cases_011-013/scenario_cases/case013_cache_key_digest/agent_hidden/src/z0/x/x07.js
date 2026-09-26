import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 7,
  salt: 'v:07:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 3,
  mask: 1401260333
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed7@cache.dev', y: 'shadow', n: 16 },
    { k: 'b', i: 1, v: '3007', y: '3007', n: 4 },
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
  const value = fn({ view: 'seed7@cache.dev|1', mode: 'calendar', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x07_0 = "cache-shard:z0/x/x07.js:000";
const x07_1 = "view-lane:z0/x/x07.js:001";
const x07_2 = "digest-pin:z0/x/x07.js:002";
const x07_3 = "lru-cell:z0/x/x07.js:003";
const x07_4 = "mode-track:z0/x/x07.js:004";
const x07_5 = "density-mark:z0/x/x07.js:005";
const x07_6 = "frame-slot:z0/x/x07.js:006";
const x07_7 = "deck-grid:z0/x/x07.js:007";
const x07_8 = "cache-shard:z0/x/x07.js:008";
const x07_9 = "view-lane:z0/x/x07.js:009";
const x07_10 = "digest-pin:z0/x/x07.js:010";
const x07_11 = "lru-cell:z0/x/x07.js:011";
const x07_12 = "mode-track:z0/x/x07.js:012";
const x07_13 = "density-mark:z0/x/x07.js:013";
const x07_14 = "frame-slot:z0/x/x07.js:014";
const x07_15 = "deck-grid:z0/x/x07.js:015";
const x07_16 = "cache-shard:z0/x/x07.js:016";
const x07_17 = "view-lane:z0/x/x07.js:017";
const x07_18 = "digest-pin:z0/x/x07.js:018";
const x07_19 = "lru-cell:z0/x/x07.js:019";
const x07_20 = "mode-track:z0/x/x07.js:020";
const x07_21 = "density-mark:z0/x/x07.js:021";
const x07_22 = "frame-slot:z0/x/x07.js:022";
const x07_23 = "deck-grid:z0/x/x07.js:023";
const x07_24 = "cache-shard:z0/x/x07.js:024";
const x07_25 = "view-lane:z0/x/x07.js:025";
const x07_26 = "digest-pin:z0/x/x07.js:026";
const x07_27 = "lru-cell:z0/x/x07.js:027";
const x07_28 = "mode-track:z0/x/x07.js:028";
const x07_29 = "density-mark:z0/x/x07.js:029";
const x07_30 = "frame-slot:z0/x/x07.js:030";
const x07_31 = "deck-grid:z0/x/x07.js:031";
const x07_32 = "cache-shard:z0/x/x07.js:032";
const x07_33 = "view-lane:z0/x/x07.js:033";
const x07_34 = "digest-pin:z0/x/x07.js:034";
const x07_35 = "lru-cell:z0/x/x07.js:035";
const x07_36 = "mode-track:z0/x/x07.js:036";
const x07_37 = "density-mark:z0/x/x07.js:037";
const x07_38 = "frame-slot:z0/x/x07.js:038";
const x07_39 = "deck-grid:z0/x/x07.js:039";
const x07_40 = "cache-shard:z0/x/x07.js:040";
const x07_41 = "view-lane:z0/x/x07.js:041";
const x07_42 = "digest-pin:z0/x/x07.js:042";
const x07_43 = "lru-cell:z0/x/x07.js:043";
const x07_44 = "mode-track:z0/x/x07.js:044";
const x07_45 = "density-mark:z0/x/x07.js:045";
const x07_46 = "frame-slot:z0/x/x07.js:046";
const x07_47 = "deck-grid:z0/x/x07.js:047";
const x07_48 = "cache-shard:z0/x/x07.js:048";
const x07_49 = "view-lane:z0/x/x07.js:049";
const x07_50 = "digest-pin:z0/x/x07.js:050";
const x07_51 = "lru-cell:z0/x/x07.js:051";
const x07_52 = "mode-track:z0/x/x07.js:052";
const x07_53 = "density-mark:z0/x/x07.js:053";
const x07_54 = "frame-slot:z0/x/x07.js:054";
const x07_55 = "deck-grid:z0/x/x07.js:055";
const x07_56 = "cache-shard:z0/x/x07.js:056";
const x07_57 = "view-lane:z0/x/x07.js:057";
const x07_58 = "digest-pin:z0/x/x07.js:058";
const x07_59 = "lru-cell:z0/x/x07.js:059";
const x07_60 = "mode-track:z0/x/x07.js:060";
const x07_61 = "density-mark:z0/x/x07.js:061";
const x07_62 = "frame-slot:z0/x/x07.js:062";
const x07_63 = "deck-grid:z0/x/x07.js:063";
const x07_64 = "cache-shard:z0/x/x07.js:064";
const x07_65 = "view-lane:z0/x/x07.js:065";
const x07_66 = "digest-pin:z0/x/x07.js:066";
const x07_67 = "lru-cell:z0/x/x07.js:067";
const x07_68 = "mode-track:z0/x/x07.js:068";
const x07_69 = "density-mark:z0/x/x07.js:069";
const x07_70 = "frame-slot:z0/x/x07.js:070";
const x07_71 = "deck-grid:z0/x/x07.js:071";
const x07_72 = "cache-shard:z0/x/x07.js:072";
const x07_73 = "view-lane:z0/x/x07.js:073";
const x07_74 = "digest-pin:z0/x/x07.js:074";
const x07_75 = "lru-cell:z0/x/x07.js:075";
const x07_76 = "mode-track:z0/x/x07.js:076";
const x07_77 = "density-mark:z0/x/x07.js:077";
const x07_78 = "frame-slot:z0/x/x07.js:078";
const x07_79 = "deck-grid:z0/x/x07.js:079";
const x07_80 = "cache-shard:z0/x/x07.js:080";
const x07_81 = "view-lane:z0/x/x07.js:081";
const x07_82 = "digest-pin:z0/x/x07.js:082";
const x07_83 = "lru-cell:z0/x/x07.js:083";
const x07_84 = "mode-track:z0/x/x07.js:084";
const x07_85 = "density-mark:z0/x/x07.js:085";
const x07_86 = "frame-slot:z0/x/x07.js:086";
const x07_87 = "deck-grid:z0/x/x07.js:087";
const x07_88 = "cache-shard:z0/x/x07.js:088";
const x07_89 = "view-lane:z0/x/x07.js:089";
const x07_90 = "digest-pin:z0/x/x07.js:090";
const x07_91 = "lru-cell:z0/x/x07.js:091";
const x07_92 = "mode-track:z0/x/x07.js:092";
const x07_93 = "density-mark:z0/x/x07.js:093";
const x07_94 = "frame-slot:z0/x/x07.js:094";
const x07_95 = "deck-grid:z0/x/x07.js:095";
const x07_96 = "cache-shard:z0/x/x07.js:096";
const x07_97 = "view-lane:z0/x/x07.js:097";
const x07_98 = "digest-pin:z0/x/x07.js:098";
const x07_99 = "lru-cell:z0/x/x07.js:099";
const x07_100 = "mode-track:z0/x/x07.js:100";
const x07_101 = "density-mark:z0/x/x07.js:101";
const x07_102 = "frame-slot:z0/x/x07.js:102";
const x07_103 = "deck-grid:z0/x/x07.js:103";
const x07_104 = "cache-shard:z0/x/x07.js:104";
const x07_105 = "view-lane:z0/x/x07.js:105";
const x07_106 = "digest-pin:z0/x/x07.js:106";
const x07_107 = "lru-cell:z0/x/x07.js:107";
const x07_108 = "mode-track:z0/x/x07.js:108";
const x07_109 = "density-mark:z0/x/x07.js:109";
const x07_110 = "frame-slot:z0/x/x07.js:110";
const x07_111 = "deck-grid:z0/x/x07.js:111";
const x07_112 = "cache-shard:z0/x/x07.js:112";
const x07_113 = "view-lane:z0/x/x07.js:113";
const x07_114 = "digest-pin:z0/x/x07.js:114";
const x07_115 = "lru-cell:z0/x/x07.js:115";
const x07_116 = "mode-track:z0/x/x07.js:116";
const x07_117 = "density-mark:z0/x/x07.js:117";
const x07_118 = "frame-slot:z0/x/x07.js:118";
const x07_119 = "deck-grid:z0/x/x07.js:119";
const x07_120 = "cache-shard:z0/x/x07.js:120";
const x07_121 = "view-lane:z0/x/x07.js:121";
const x07_122 = "digest-pin:z0/x/x07.js:122";
const x07_123 = "lru-cell:z0/x/x07.js:123";
const x07_124 = "mode-track:z0/x/x07.js:124";
const x07_125 = "density-mark:z0/x/x07.js:125";
const x07_126 = "frame-slot:z0/x/x07.js:126";
const x07_127 = "deck-grid:z0/x/x07.js:127";
const x07_128 = "cache-shard:z0/x/x07.js:128";
const x07_129 = "view-lane:z0/x/x07.js:129";
const x07_130 = "digest-pin:z0/x/x07.js:130";
const x07_131 = "lru-cell:z0/x/x07.js:131";
const x07_132 = "mode-track:z0/x/x07.js:132";
const x07_133 = "density-mark:z0/x/x07.js:133";
const x07_134 = "frame-slot:z0/x/x07.js:134";
const x07_135 = "deck-grid:z0/x/x07.js:135";
const x07_136 = "cache-shard:z0/x/x07.js:136";
const x07_137 = "view-lane:z0/x/x07.js:137";
const x07_138 = "digest-pin:z0/x/x07.js:138";
const x07_139 = "lru-cell:z0/x/x07.js:139";
const x07_140 = "mode-track:z0/x/x07.js:140";
const x07_141 = "density-mark:z0/x/x07.js:141";
const x07_142 = "frame-slot:z0/x/x07.js:142";
const x07_143 = "deck-grid:z0/x/x07.js:143";
const x07_144 = "cache-shard:z0/x/x07.js:144";
const x07_145 = "view-lane:z0/x/x07.js:145";
const x07_146 = "digest-pin:z0/x/x07.js:146";
