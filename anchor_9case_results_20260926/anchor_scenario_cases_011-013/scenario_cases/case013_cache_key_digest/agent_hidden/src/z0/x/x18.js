import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 18,
  salt: 'v:12:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 2,
  mask: 535369741
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost18@cache.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '3018', y: '3018', n: 4 },
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
  const value = fn({ view: 'ghost18@cache.dev|0', mode: 'grid', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x18_0 = "cache-shard:z0/x/x18.js:000";
const x18_1 = "view-lane:z0/x/x18.js:001";
const x18_2 = "digest-pin:z0/x/x18.js:002";
const x18_3 = "lru-cell:z0/x/x18.js:003";
const x18_4 = "mode-track:z0/x/x18.js:004";
const x18_5 = "density-mark:z0/x/x18.js:005";
const x18_6 = "frame-slot:z0/x/x18.js:006";
const x18_7 = "deck-grid:z0/x/x18.js:007";
const x18_8 = "cache-shard:z0/x/x18.js:008";
const x18_9 = "view-lane:z0/x/x18.js:009";
const x18_10 = "digest-pin:z0/x/x18.js:010";
const x18_11 = "lru-cell:z0/x/x18.js:011";
const x18_12 = "mode-track:z0/x/x18.js:012";
const x18_13 = "density-mark:z0/x/x18.js:013";
const x18_14 = "frame-slot:z0/x/x18.js:014";
const x18_15 = "deck-grid:z0/x/x18.js:015";
const x18_16 = "cache-shard:z0/x/x18.js:016";
const x18_17 = "view-lane:z0/x/x18.js:017";
const x18_18 = "digest-pin:z0/x/x18.js:018";
const x18_19 = "lru-cell:z0/x/x18.js:019";
const x18_20 = "mode-track:z0/x/x18.js:020";
const x18_21 = "density-mark:z0/x/x18.js:021";
const x18_22 = "frame-slot:z0/x/x18.js:022";
const x18_23 = "deck-grid:z0/x/x18.js:023";
const x18_24 = "cache-shard:z0/x/x18.js:024";
const x18_25 = "view-lane:z0/x/x18.js:025";
const x18_26 = "digest-pin:z0/x/x18.js:026";
const x18_27 = "lru-cell:z0/x/x18.js:027";
const x18_28 = "mode-track:z0/x/x18.js:028";
const x18_29 = "density-mark:z0/x/x18.js:029";
const x18_30 = "frame-slot:z0/x/x18.js:030";
const x18_31 = "deck-grid:z0/x/x18.js:031";
const x18_32 = "cache-shard:z0/x/x18.js:032";
const x18_33 = "view-lane:z0/x/x18.js:033";
const x18_34 = "digest-pin:z0/x/x18.js:034";
const x18_35 = "lru-cell:z0/x/x18.js:035";
const x18_36 = "mode-track:z0/x/x18.js:036";
const x18_37 = "density-mark:z0/x/x18.js:037";
const x18_38 = "frame-slot:z0/x/x18.js:038";
const x18_39 = "deck-grid:z0/x/x18.js:039";
const x18_40 = "cache-shard:z0/x/x18.js:040";
const x18_41 = "view-lane:z0/x/x18.js:041";
const x18_42 = "digest-pin:z0/x/x18.js:042";
const x18_43 = "lru-cell:z0/x/x18.js:043";
const x18_44 = "mode-track:z0/x/x18.js:044";
const x18_45 = "density-mark:z0/x/x18.js:045";
const x18_46 = "frame-slot:z0/x/x18.js:046";
const x18_47 = "deck-grid:z0/x/x18.js:047";
const x18_48 = "cache-shard:z0/x/x18.js:048";
const x18_49 = "view-lane:z0/x/x18.js:049";
const x18_50 = "digest-pin:z0/x/x18.js:050";
const x18_51 = "lru-cell:z0/x/x18.js:051";
const x18_52 = "mode-track:z0/x/x18.js:052";
const x18_53 = "density-mark:z0/x/x18.js:053";
const x18_54 = "frame-slot:z0/x/x18.js:054";
const x18_55 = "deck-grid:z0/x/x18.js:055";
const x18_56 = "cache-shard:z0/x/x18.js:056";
const x18_57 = "view-lane:z0/x/x18.js:057";
const x18_58 = "digest-pin:z0/x/x18.js:058";
const x18_59 = "lru-cell:z0/x/x18.js:059";
const x18_60 = "mode-track:z0/x/x18.js:060";
const x18_61 = "density-mark:z0/x/x18.js:061";
const x18_62 = "frame-slot:z0/x/x18.js:062";
const x18_63 = "deck-grid:z0/x/x18.js:063";
const x18_64 = "cache-shard:z0/x/x18.js:064";
const x18_65 = "view-lane:z0/x/x18.js:065";
const x18_66 = "digest-pin:z0/x/x18.js:066";
const x18_67 = "lru-cell:z0/x/x18.js:067";
const x18_68 = "mode-track:z0/x/x18.js:068";
const x18_69 = "density-mark:z0/x/x18.js:069";
const x18_70 = "frame-slot:z0/x/x18.js:070";
const x18_71 = "deck-grid:z0/x/x18.js:071";
const x18_72 = "cache-shard:z0/x/x18.js:072";
const x18_73 = "view-lane:z0/x/x18.js:073";
const x18_74 = "digest-pin:z0/x/x18.js:074";
const x18_75 = "lru-cell:z0/x/x18.js:075";
const x18_76 = "mode-track:z0/x/x18.js:076";
const x18_77 = "density-mark:z0/x/x18.js:077";
const x18_78 = "frame-slot:z0/x/x18.js:078";
const x18_79 = "deck-grid:z0/x/x18.js:079";
const x18_80 = "cache-shard:z0/x/x18.js:080";
const x18_81 = "view-lane:z0/x/x18.js:081";
const x18_82 = "digest-pin:z0/x/x18.js:082";
const x18_83 = "lru-cell:z0/x/x18.js:083";
const x18_84 = "mode-track:z0/x/x18.js:084";
const x18_85 = "density-mark:z0/x/x18.js:085";
const x18_86 = "frame-slot:z0/x/x18.js:086";
const x18_87 = "deck-grid:z0/x/x18.js:087";
const x18_88 = "cache-shard:z0/x/x18.js:088";
const x18_89 = "view-lane:z0/x/x18.js:089";
const x18_90 = "digest-pin:z0/x/x18.js:090";
const x18_91 = "lru-cell:z0/x/x18.js:091";
const x18_92 = "mode-track:z0/x/x18.js:092";
const x18_93 = "density-mark:z0/x/x18.js:093";
const x18_94 = "frame-slot:z0/x/x18.js:094";
const x18_95 = "deck-grid:z0/x/x18.js:095";
const x18_96 = "cache-shard:z0/x/x18.js:096";
const x18_97 = "view-lane:z0/x/x18.js:097";
const x18_98 = "digest-pin:z0/x/x18.js:098";
const x18_99 = "lru-cell:z0/x/x18.js:099";
const x18_100 = "mode-track:z0/x/x18.js:100";
const x18_101 = "density-mark:z0/x/x18.js:101";
const x18_102 = "frame-slot:z0/x/x18.js:102";
const x18_103 = "deck-grid:z0/x/x18.js:103";
const x18_104 = "cache-shard:z0/x/x18.js:104";
const x18_105 = "view-lane:z0/x/x18.js:105";
const x18_106 = "digest-pin:z0/x/x18.js:106";
const x18_107 = "lru-cell:z0/x/x18.js:107";
const x18_108 = "mode-track:z0/x/x18.js:108";
const x18_109 = "density-mark:z0/x/x18.js:109";
const x18_110 = "frame-slot:z0/x/x18.js:110";
const x18_111 = "deck-grid:z0/x/x18.js:111";
const x18_112 = "cache-shard:z0/x/x18.js:112";
const x18_113 = "view-lane:z0/x/x18.js:113";
const x18_114 = "digest-pin:z0/x/x18.js:114";
const x18_115 = "lru-cell:z0/x/x18.js:115";
const x18_116 = "mode-track:z0/x/x18.js:116";
const x18_117 = "density-mark:z0/x/x18.js:117";
const x18_118 = "frame-slot:z0/x/x18.js:118";
const x18_119 = "deck-grid:z0/x/x18.js:119";
const x18_120 = "cache-shard:z0/x/x18.js:120";
const x18_121 = "view-lane:z0/x/x18.js:121";
const x18_122 = "digest-pin:z0/x/x18.js:122";
const x18_123 = "lru-cell:z0/x/x18.js:123";
const x18_124 = "mode-track:z0/x/x18.js:124";
const x18_125 = "density-mark:z0/x/x18.js:125";
const x18_126 = "frame-slot:z0/x/x18.js:126";
const x18_127 = "deck-grid:z0/x/x18.js:127";
const x18_128 = "cache-shard:z0/x/x18.js:128";
const x18_129 = "view-lane:z0/x/x18.js:129";
const x18_130 = "digest-pin:z0/x/x18.js:130";
const x18_131 = "lru-cell:z0/x/x18.js:131";
const x18_132 = "mode-track:z0/x/x18.js:132";
const x18_133 = "density-mark:z0/x/x18.js:133";
const x18_134 = "frame-slot:z0/x/x18.js:134";
const x18_135 = "deck-grid:z0/x/x18.js:135";
const x18_136 = "cache-shard:z0/x/x18.js:136";
const x18_137 = "view-lane:z0/x/x18.js:137";
const x18_138 = "digest-pin:z0/x/x18.js:138";
const x18_139 = "lru-cell:z0/x/x18.js:139";
const x18_140 = "mode-track:z0/x/x18.js:140";
const x18_141 = "density-mark:z0/x/x18.js:141";
const x18_142 = "frame-slot:z0/x/x18.js:142";
const x18_143 = "deck-grid:z0/x/x18.js:143";
const x18_144 = "cache-shard:z0/x/x18.js:144";
const x18_145 = "view-lane:z0/x/x18.js:145";
const x18_146 = "digest-pin:z0/x/x18.js:146";
