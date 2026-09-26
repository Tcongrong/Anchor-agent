import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 43,
  salt: 'v:2b:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 3,
  mask: 2471952301
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed43@cache.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '3043', y: '3043', n: 4 },
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
  const value = fn({ view: 'seed43@cache.dev|1', mode: 'calendar', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x43_0 = "cache-shard:z0/x/x43.js:000";
const x43_1 = "view-lane:z0/x/x43.js:001";
const x43_2 = "digest-pin:z0/x/x43.js:002";
const x43_3 = "lru-cell:z0/x/x43.js:003";
const x43_4 = "mode-track:z0/x/x43.js:004";
const x43_5 = "density-mark:z0/x/x43.js:005";
const x43_6 = "frame-slot:z0/x/x43.js:006";
const x43_7 = "deck-grid:z0/x/x43.js:007";
const x43_8 = "cache-shard:z0/x/x43.js:008";
const x43_9 = "view-lane:z0/x/x43.js:009";
const x43_10 = "digest-pin:z0/x/x43.js:010";
const x43_11 = "lru-cell:z0/x/x43.js:011";
const x43_12 = "mode-track:z0/x/x43.js:012";
const x43_13 = "density-mark:z0/x/x43.js:013";
const x43_14 = "frame-slot:z0/x/x43.js:014";
const x43_15 = "deck-grid:z0/x/x43.js:015";
const x43_16 = "cache-shard:z0/x/x43.js:016";
const x43_17 = "view-lane:z0/x/x43.js:017";
const x43_18 = "digest-pin:z0/x/x43.js:018";
const x43_19 = "lru-cell:z0/x/x43.js:019";
const x43_20 = "mode-track:z0/x/x43.js:020";
const x43_21 = "density-mark:z0/x/x43.js:021";
const x43_22 = "frame-slot:z0/x/x43.js:022";
const x43_23 = "deck-grid:z0/x/x43.js:023";
const x43_24 = "cache-shard:z0/x/x43.js:024";
const x43_25 = "view-lane:z0/x/x43.js:025";
const x43_26 = "digest-pin:z0/x/x43.js:026";
const x43_27 = "lru-cell:z0/x/x43.js:027";
const x43_28 = "mode-track:z0/x/x43.js:028";
const x43_29 = "density-mark:z0/x/x43.js:029";
const x43_30 = "frame-slot:z0/x/x43.js:030";
const x43_31 = "deck-grid:z0/x/x43.js:031";
const x43_32 = "cache-shard:z0/x/x43.js:032";
const x43_33 = "view-lane:z0/x/x43.js:033";
const x43_34 = "digest-pin:z0/x/x43.js:034";
const x43_35 = "lru-cell:z0/x/x43.js:035";
const x43_36 = "mode-track:z0/x/x43.js:036";
const x43_37 = "density-mark:z0/x/x43.js:037";
const x43_38 = "frame-slot:z0/x/x43.js:038";
const x43_39 = "deck-grid:z0/x/x43.js:039";
const x43_40 = "cache-shard:z0/x/x43.js:040";
const x43_41 = "view-lane:z0/x/x43.js:041";
const x43_42 = "digest-pin:z0/x/x43.js:042";
const x43_43 = "lru-cell:z0/x/x43.js:043";
const x43_44 = "mode-track:z0/x/x43.js:044";
const x43_45 = "density-mark:z0/x/x43.js:045";
const x43_46 = "frame-slot:z0/x/x43.js:046";
const x43_47 = "deck-grid:z0/x/x43.js:047";
const x43_48 = "cache-shard:z0/x/x43.js:048";
const x43_49 = "view-lane:z0/x/x43.js:049";
const x43_50 = "digest-pin:z0/x/x43.js:050";
const x43_51 = "lru-cell:z0/x/x43.js:051";
const x43_52 = "mode-track:z0/x/x43.js:052";
const x43_53 = "density-mark:z0/x/x43.js:053";
const x43_54 = "frame-slot:z0/x/x43.js:054";
const x43_55 = "deck-grid:z0/x/x43.js:055";
const x43_56 = "cache-shard:z0/x/x43.js:056";
const x43_57 = "view-lane:z0/x/x43.js:057";
const x43_58 = "digest-pin:z0/x/x43.js:058";
const x43_59 = "lru-cell:z0/x/x43.js:059";
const x43_60 = "mode-track:z0/x/x43.js:060";
const x43_61 = "density-mark:z0/x/x43.js:061";
const x43_62 = "frame-slot:z0/x/x43.js:062";
const x43_63 = "deck-grid:z0/x/x43.js:063";
const x43_64 = "cache-shard:z0/x/x43.js:064";
const x43_65 = "view-lane:z0/x/x43.js:065";
const x43_66 = "digest-pin:z0/x/x43.js:066";
const x43_67 = "lru-cell:z0/x/x43.js:067";
const x43_68 = "mode-track:z0/x/x43.js:068";
const x43_69 = "density-mark:z0/x/x43.js:069";
const x43_70 = "frame-slot:z0/x/x43.js:070";
const x43_71 = "deck-grid:z0/x/x43.js:071";
const x43_72 = "cache-shard:z0/x/x43.js:072";
const x43_73 = "view-lane:z0/x/x43.js:073";
const x43_74 = "digest-pin:z0/x/x43.js:074";
const x43_75 = "lru-cell:z0/x/x43.js:075";
const x43_76 = "mode-track:z0/x/x43.js:076";
const x43_77 = "density-mark:z0/x/x43.js:077";
const x43_78 = "frame-slot:z0/x/x43.js:078";
const x43_79 = "deck-grid:z0/x/x43.js:079";
const x43_80 = "cache-shard:z0/x/x43.js:080";
const x43_81 = "view-lane:z0/x/x43.js:081";
const x43_82 = "digest-pin:z0/x/x43.js:082";
const x43_83 = "lru-cell:z0/x/x43.js:083";
const x43_84 = "mode-track:z0/x/x43.js:084";
const x43_85 = "density-mark:z0/x/x43.js:085";
const x43_86 = "frame-slot:z0/x/x43.js:086";
const x43_87 = "deck-grid:z0/x/x43.js:087";
const x43_88 = "cache-shard:z0/x/x43.js:088";
const x43_89 = "view-lane:z0/x/x43.js:089";
const x43_90 = "digest-pin:z0/x/x43.js:090";
const x43_91 = "lru-cell:z0/x/x43.js:091";
const x43_92 = "mode-track:z0/x/x43.js:092";
const x43_93 = "density-mark:z0/x/x43.js:093";
const x43_94 = "frame-slot:z0/x/x43.js:094";
const x43_95 = "deck-grid:z0/x/x43.js:095";
const x43_96 = "cache-shard:z0/x/x43.js:096";
const x43_97 = "view-lane:z0/x/x43.js:097";
const x43_98 = "digest-pin:z0/x/x43.js:098";
const x43_99 = "lru-cell:z0/x/x43.js:099";
const x43_100 = "mode-track:z0/x/x43.js:100";
const x43_101 = "density-mark:z0/x/x43.js:101";
const x43_102 = "frame-slot:z0/x/x43.js:102";
const x43_103 = "deck-grid:z0/x/x43.js:103";
const x43_104 = "cache-shard:z0/x/x43.js:104";
const x43_105 = "view-lane:z0/x/x43.js:105";
const x43_106 = "digest-pin:z0/x/x43.js:106";
const x43_107 = "lru-cell:z0/x/x43.js:107";
const x43_108 = "mode-track:z0/x/x43.js:108";
const x43_109 = "density-mark:z0/x/x43.js:109";
const x43_110 = "frame-slot:z0/x/x43.js:110";
const x43_111 = "deck-grid:z0/x/x43.js:111";
const x43_112 = "cache-shard:z0/x/x43.js:112";
const x43_113 = "view-lane:z0/x/x43.js:113";
const x43_114 = "digest-pin:z0/x/x43.js:114";
const x43_115 = "lru-cell:z0/x/x43.js:115";
const x43_116 = "mode-track:z0/x/x43.js:116";
const x43_117 = "density-mark:z0/x/x43.js:117";
const x43_118 = "frame-slot:z0/x/x43.js:118";
const x43_119 = "deck-grid:z0/x/x43.js:119";
const x43_120 = "cache-shard:z0/x/x43.js:120";
const x43_121 = "view-lane:z0/x/x43.js:121";
const x43_122 = "digest-pin:z0/x/x43.js:122";
const x43_123 = "lru-cell:z0/x/x43.js:123";
const x43_124 = "mode-track:z0/x/x43.js:124";
const x43_125 = "density-mark:z0/x/x43.js:125";
const x43_126 = "frame-slot:z0/x/x43.js:126";
const x43_127 = "deck-grid:z0/x/x43.js:127";
const x43_128 = "cache-shard:z0/x/x43.js:128";
const x43_129 = "view-lane:z0/x/x43.js:129";
const x43_130 = "digest-pin:z0/x/x43.js:130";
const x43_131 = "lru-cell:z0/x/x43.js:131";
const x43_132 = "mode-track:z0/x/x43.js:132";
const x43_133 = "density-mark:z0/x/x43.js:133";
const x43_134 = "frame-slot:z0/x/x43.js:134";
const x43_135 = "deck-grid:z0/x/x43.js:135";
const x43_136 = "cache-shard:z0/x/x43.js:136";
const x43_137 = "view-lane:z0/x/x43.js:137";
const x43_138 = "digest-pin:z0/x/x43.js:138";
const x43_139 = "lru-cell:z0/x/x43.js:139";
const x43_140 = "mode-track:z0/x/x43.js:140";
const x43_141 = "density-mark:z0/x/x43.js:141";
const x43_142 = "frame-slot:z0/x/x43.js:142";
const x43_143 = "deck-grid:z0/x/x43.js:143";
const x43_144 = "cache-shard:z0/x/x43.js:144";
const x43_145 = "view-lane:z0/x/x43.js:145";
const x43_146 = "digest-pin:z0/x/x43.js:146";
