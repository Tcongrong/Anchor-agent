import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 24,
  salt: 'v:18:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 2,
  mask: 3577129933
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost24@cache.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '3024', y: '3024', n: 4 },
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
  const value = fn({ view: 'ghost24@cache.dev|0', mode: 'board', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x24_0 = "cache-shard:z0/x/x24.js:000";
const x24_1 = "view-lane:z0/x/x24.js:001";
const x24_2 = "digest-pin:z0/x/x24.js:002";
const x24_3 = "lru-cell:z0/x/x24.js:003";
const x24_4 = "mode-track:z0/x/x24.js:004";
const x24_5 = "density-mark:z0/x/x24.js:005";
const x24_6 = "frame-slot:z0/x/x24.js:006";
const x24_7 = "deck-grid:z0/x/x24.js:007";
const x24_8 = "cache-shard:z0/x/x24.js:008";
const x24_9 = "view-lane:z0/x/x24.js:009";
const x24_10 = "digest-pin:z0/x/x24.js:010";
const x24_11 = "lru-cell:z0/x/x24.js:011";
const x24_12 = "mode-track:z0/x/x24.js:012";
const x24_13 = "density-mark:z0/x/x24.js:013";
const x24_14 = "frame-slot:z0/x/x24.js:014";
const x24_15 = "deck-grid:z0/x/x24.js:015";
const x24_16 = "cache-shard:z0/x/x24.js:016";
const x24_17 = "view-lane:z0/x/x24.js:017";
const x24_18 = "digest-pin:z0/x/x24.js:018";
const x24_19 = "lru-cell:z0/x/x24.js:019";
const x24_20 = "mode-track:z0/x/x24.js:020";
const x24_21 = "density-mark:z0/x/x24.js:021";
const x24_22 = "frame-slot:z0/x/x24.js:022";
const x24_23 = "deck-grid:z0/x/x24.js:023";
const x24_24 = "cache-shard:z0/x/x24.js:024";
const x24_25 = "view-lane:z0/x/x24.js:025";
const x24_26 = "digest-pin:z0/x/x24.js:026";
const x24_27 = "lru-cell:z0/x/x24.js:027";
const x24_28 = "mode-track:z0/x/x24.js:028";
const x24_29 = "density-mark:z0/x/x24.js:029";
const x24_30 = "frame-slot:z0/x/x24.js:030";
const x24_31 = "deck-grid:z0/x/x24.js:031";
const x24_32 = "cache-shard:z0/x/x24.js:032";
const x24_33 = "view-lane:z0/x/x24.js:033";
const x24_34 = "digest-pin:z0/x/x24.js:034";
const x24_35 = "lru-cell:z0/x/x24.js:035";
const x24_36 = "mode-track:z0/x/x24.js:036";
const x24_37 = "density-mark:z0/x/x24.js:037";
const x24_38 = "frame-slot:z0/x/x24.js:038";
const x24_39 = "deck-grid:z0/x/x24.js:039";
const x24_40 = "cache-shard:z0/x/x24.js:040";
const x24_41 = "view-lane:z0/x/x24.js:041";
const x24_42 = "digest-pin:z0/x/x24.js:042";
const x24_43 = "lru-cell:z0/x/x24.js:043";
const x24_44 = "mode-track:z0/x/x24.js:044";
const x24_45 = "density-mark:z0/x/x24.js:045";
const x24_46 = "frame-slot:z0/x/x24.js:046";
const x24_47 = "deck-grid:z0/x/x24.js:047";
const x24_48 = "cache-shard:z0/x/x24.js:048";
const x24_49 = "view-lane:z0/x/x24.js:049";
const x24_50 = "digest-pin:z0/x/x24.js:050";
const x24_51 = "lru-cell:z0/x/x24.js:051";
const x24_52 = "mode-track:z0/x/x24.js:052";
const x24_53 = "density-mark:z0/x/x24.js:053";
const x24_54 = "frame-slot:z0/x/x24.js:054";
const x24_55 = "deck-grid:z0/x/x24.js:055";
const x24_56 = "cache-shard:z0/x/x24.js:056";
const x24_57 = "view-lane:z0/x/x24.js:057";
const x24_58 = "digest-pin:z0/x/x24.js:058";
const x24_59 = "lru-cell:z0/x/x24.js:059";
const x24_60 = "mode-track:z0/x/x24.js:060";
const x24_61 = "density-mark:z0/x/x24.js:061";
const x24_62 = "frame-slot:z0/x/x24.js:062";
const x24_63 = "deck-grid:z0/x/x24.js:063";
const x24_64 = "cache-shard:z0/x/x24.js:064";
const x24_65 = "view-lane:z0/x/x24.js:065";
const x24_66 = "digest-pin:z0/x/x24.js:066";
const x24_67 = "lru-cell:z0/x/x24.js:067";
const x24_68 = "mode-track:z0/x/x24.js:068";
const x24_69 = "density-mark:z0/x/x24.js:069";
const x24_70 = "frame-slot:z0/x/x24.js:070";
const x24_71 = "deck-grid:z0/x/x24.js:071";
const x24_72 = "cache-shard:z0/x/x24.js:072";
const x24_73 = "view-lane:z0/x/x24.js:073";
const x24_74 = "digest-pin:z0/x/x24.js:074";
const x24_75 = "lru-cell:z0/x/x24.js:075";
const x24_76 = "mode-track:z0/x/x24.js:076";
const x24_77 = "density-mark:z0/x/x24.js:077";
const x24_78 = "frame-slot:z0/x/x24.js:078";
const x24_79 = "deck-grid:z0/x/x24.js:079";
const x24_80 = "cache-shard:z0/x/x24.js:080";
const x24_81 = "view-lane:z0/x/x24.js:081";
const x24_82 = "digest-pin:z0/x/x24.js:082";
const x24_83 = "lru-cell:z0/x/x24.js:083";
const x24_84 = "mode-track:z0/x/x24.js:084";
const x24_85 = "density-mark:z0/x/x24.js:085";
const x24_86 = "frame-slot:z0/x/x24.js:086";
const x24_87 = "deck-grid:z0/x/x24.js:087";
const x24_88 = "cache-shard:z0/x/x24.js:088";
const x24_89 = "view-lane:z0/x/x24.js:089";
const x24_90 = "digest-pin:z0/x/x24.js:090";
const x24_91 = "lru-cell:z0/x/x24.js:091";
const x24_92 = "mode-track:z0/x/x24.js:092";
const x24_93 = "density-mark:z0/x/x24.js:093";
const x24_94 = "frame-slot:z0/x/x24.js:094";
const x24_95 = "deck-grid:z0/x/x24.js:095";
const x24_96 = "cache-shard:z0/x/x24.js:096";
const x24_97 = "view-lane:z0/x/x24.js:097";
const x24_98 = "digest-pin:z0/x/x24.js:098";
const x24_99 = "lru-cell:z0/x/x24.js:099";
const x24_100 = "mode-track:z0/x/x24.js:100";
const x24_101 = "density-mark:z0/x/x24.js:101";
const x24_102 = "frame-slot:z0/x/x24.js:102";
const x24_103 = "deck-grid:z0/x/x24.js:103";
const x24_104 = "cache-shard:z0/x/x24.js:104";
const x24_105 = "view-lane:z0/x/x24.js:105";
const x24_106 = "digest-pin:z0/x/x24.js:106";
const x24_107 = "lru-cell:z0/x/x24.js:107";
const x24_108 = "mode-track:z0/x/x24.js:108";
const x24_109 = "density-mark:z0/x/x24.js:109";
const x24_110 = "frame-slot:z0/x/x24.js:110";
const x24_111 = "deck-grid:z0/x/x24.js:111";
const x24_112 = "cache-shard:z0/x/x24.js:112";
const x24_113 = "view-lane:z0/x/x24.js:113";
const x24_114 = "digest-pin:z0/x/x24.js:114";
const x24_115 = "lru-cell:z0/x/x24.js:115";
const x24_116 = "mode-track:z0/x/x24.js:116";
const x24_117 = "density-mark:z0/x/x24.js:117";
const x24_118 = "frame-slot:z0/x/x24.js:118";
const x24_119 = "deck-grid:z0/x/x24.js:119";
const x24_120 = "cache-shard:z0/x/x24.js:120";
const x24_121 = "view-lane:z0/x/x24.js:121";
const x24_122 = "digest-pin:z0/x/x24.js:122";
const x24_123 = "lru-cell:z0/x/x24.js:123";
const x24_124 = "mode-track:z0/x/x24.js:124";
const x24_125 = "density-mark:z0/x/x24.js:125";
const x24_126 = "frame-slot:z0/x/x24.js:126";
const x24_127 = "deck-grid:z0/x/x24.js:127";
const x24_128 = "cache-shard:z0/x/x24.js:128";
const x24_129 = "view-lane:z0/x/x24.js:129";
const x24_130 = "digest-pin:z0/x/x24.js:130";
const x24_131 = "lru-cell:z0/x/x24.js:131";
const x24_132 = "mode-track:z0/x/x24.js:132";
const x24_133 = "density-mark:z0/x/x24.js:133";
const x24_134 = "frame-slot:z0/x/x24.js:134";
const x24_135 = "deck-grid:z0/x/x24.js:135";
const x24_136 = "cache-shard:z0/x/x24.js:136";
const x24_137 = "view-lane:z0/x/x24.js:137";
const x24_138 = "digest-pin:z0/x/x24.js:138";
const x24_139 = "lru-cell:z0/x/x24.js:139";
const x24_140 = "mode-track:z0/x/x24.js:140";
const x24_141 = "density-mark:z0/x/x24.js:141";
const x24_142 = "frame-slot:z0/x/x24.js:142";
const x24_143 = "deck-grid:z0/x/x24.js:143";
const x24_144 = "cache-shard:z0/x/x24.js:144";
const x24_145 = "view-lane:z0/x/x24.js:145";
const x24_146 = "digest-pin:z0/x/x24.js:146";
