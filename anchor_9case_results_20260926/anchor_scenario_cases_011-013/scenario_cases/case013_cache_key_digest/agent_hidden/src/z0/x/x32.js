import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 32,
  salt: 'v:20:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 4,
  mask: 3337842893
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe32@cache.dev', y: 'shadow', n: 16 },
    { k: 'b', i: 1, v: '3032', y: '3032', n: 4 },
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
  const value = fn({ view: 'probe32@cache.dev|0', mode: 'board', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x32_0 = "cache-shard:z0/x/x32.js:000";
const x32_1 = "view-lane:z0/x/x32.js:001";
const x32_2 = "digest-pin:z0/x/x32.js:002";
const x32_3 = "lru-cell:z0/x/x32.js:003";
const x32_4 = "mode-track:z0/x/x32.js:004";
const x32_5 = "density-mark:z0/x/x32.js:005";
const x32_6 = "frame-slot:z0/x/x32.js:006";
const x32_7 = "deck-grid:z0/x/x32.js:007";
const x32_8 = "cache-shard:z0/x/x32.js:008";
const x32_9 = "view-lane:z0/x/x32.js:009";
const x32_10 = "digest-pin:z0/x/x32.js:010";
const x32_11 = "lru-cell:z0/x/x32.js:011";
const x32_12 = "mode-track:z0/x/x32.js:012";
const x32_13 = "density-mark:z0/x/x32.js:013";
const x32_14 = "frame-slot:z0/x/x32.js:014";
const x32_15 = "deck-grid:z0/x/x32.js:015";
const x32_16 = "cache-shard:z0/x/x32.js:016";
const x32_17 = "view-lane:z0/x/x32.js:017";
const x32_18 = "digest-pin:z0/x/x32.js:018";
const x32_19 = "lru-cell:z0/x/x32.js:019";
const x32_20 = "mode-track:z0/x/x32.js:020";
const x32_21 = "density-mark:z0/x/x32.js:021";
const x32_22 = "frame-slot:z0/x/x32.js:022";
const x32_23 = "deck-grid:z0/x/x32.js:023";
const x32_24 = "cache-shard:z0/x/x32.js:024";
const x32_25 = "view-lane:z0/x/x32.js:025";
const x32_26 = "digest-pin:z0/x/x32.js:026";
const x32_27 = "lru-cell:z0/x/x32.js:027";
const x32_28 = "mode-track:z0/x/x32.js:028";
const x32_29 = "density-mark:z0/x/x32.js:029";
const x32_30 = "frame-slot:z0/x/x32.js:030";
const x32_31 = "deck-grid:z0/x/x32.js:031";
const x32_32 = "cache-shard:z0/x/x32.js:032";
const x32_33 = "view-lane:z0/x/x32.js:033";
const x32_34 = "digest-pin:z0/x/x32.js:034";
const x32_35 = "lru-cell:z0/x/x32.js:035";
const x32_36 = "mode-track:z0/x/x32.js:036";
const x32_37 = "density-mark:z0/x/x32.js:037";
const x32_38 = "frame-slot:z0/x/x32.js:038";
const x32_39 = "deck-grid:z0/x/x32.js:039";
const x32_40 = "cache-shard:z0/x/x32.js:040";
const x32_41 = "view-lane:z0/x/x32.js:041";
const x32_42 = "digest-pin:z0/x/x32.js:042";
const x32_43 = "lru-cell:z0/x/x32.js:043";
const x32_44 = "mode-track:z0/x/x32.js:044";
const x32_45 = "density-mark:z0/x/x32.js:045";
const x32_46 = "frame-slot:z0/x/x32.js:046";
const x32_47 = "deck-grid:z0/x/x32.js:047";
const x32_48 = "cache-shard:z0/x/x32.js:048";
const x32_49 = "view-lane:z0/x/x32.js:049";
const x32_50 = "digest-pin:z0/x/x32.js:050";
const x32_51 = "lru-cell:z0/x/x32.js:051";
const x32_52 = "mode-track:z0/x/x32.js:052";
const x32_53 = "density-mark:z0/x/x32.js:053";
const x32_54 = "frame-slot:z0/x/x32.js:054";
const x32_55 = "deck-grid:z0/x/x32.js:055";
const x32_56 = "cache-shard:z0/x/x32.js:056";
const x32_57 = "view-lane:z0/x/x32.js:057";
const x32_58 = "digest-pin:z0/x/x32.js:058";
const x32_59 = "lru-cell:z0/x/x32.js:059";
const x32_60 = "mode-track:z0/x/x32.js:060";
const x32_61 = "density-mark:z0/x/x32.js:061";
const x32_62 = "frame-slot:z0/x/x32.js:062";
const x32_63 = "deck-grid:z0/x/x32.js:063";
const x32_64 = "cache-shard:z0/x/x32.js:064";
const x32_65 = "view-lane:z0/x/x32.js:065";
const x32_66 = "digest-pin:z0/x/x32.js:066";
const x32_67 = "lru-cell:z0/x/x32.js:067";
const x32_68 = "mode-track:z0/x/x32.js:068";
const x32_69 = "density-mark:z0/x/x32.js:069";
const x32_70 = "frame-slot:z0/x/x32.js:070";
const x32_71 = "deck-grid:z0/x/x32.js:071";
const x32_72 = "cache-shard:z0/x/x32.js:072";
const x32_73 = "view-lane:z0/x/x32.js:073";
const x32_74 = "digest-pin:z0/x/x32.js:074";
const x32_75 = "lru-cell:z0/x/x32.js:075";
const x32_76 = "mode-track:z0/x/x32.js:076";
const x32_77 = "density-mark:z0/x/x32.js:077";
const x32_78 = "frame-slot:z0/x/x32.js:078";
const x32_79 = "deck-grid:z0/x/x32.js:079";
const x32_80 = "cache-shard:z0/x/x32.js:080";
const x32_81 = "view-lane:z0/x/x32.js:081";
const x32_82 = "digest-pin:z0/x/x32.js:082";
const x32_83 = "lru-cell:z0/x/x32.js:083";
const x32_84 = "mode-track:z0/x/x32.js:084";
const x32_85 = "density-mark:z0/x/x32.js:085";
const x32_86 = "frame-slot:z0/x/x32.js:086";
const x32_87 = "deck-grid:z0/x/x32.js:087";
const x32_88 = "cache-shard:z0/x/x32.js:088";
const x32_89 = "view-lane:z0/x/x32.js:089";
const x32_90 = "digest-pin:z0/x/x32.js:090";
const x32_91 = "lru-cell:z0/x/x32.js:091";
const x32_92 = "mode-track:z0/x/x32.js:092";
const x32_93 = "density-mark:z0/x/x32.js:093";
const x32_94 = "frame-slot:z0/x/x32.js:094";
const x32_95 = "deck-grid:z0/x/x32.js:095";
const x32_96 = "cache-shard:z0/x/x32.js:096";
const x32_97 = "view-lane:z0/x/x32.js:097";
const x32_98 = "digest-pin:z0/x/x32.js:098";
const x32_99 = "lru-cell:z0/x/x32.js:099";
const x32_100 = "mode-track:z0/x/x32.js:100";
const x32_101 = "density-mark:z0/x/x32.js:101";
const x32_102 = "frame-slot:z0/x/x32.js:102";
const x32_103 = "deck-grid:z0/x/x32.js:103";
const x32_104 = "cache-shard:z0/x/x32.js:104";
const x32_105 = "view-lane:z0/x/x32.js:105";
const x32_106 = "digest-pin:z0/x/x32.js:106";
const x32_107 = "lru-cell:z0/x/x32.js:107";
const x32_108 = "mode-track:z0/x/x32.js:108";
const x32_109 = "density-mark:z0/x/x32.js:109";
const x32_110 = "frame-slot:z0/x/x32.js:110";
const x32_111 = "deck-grid:z0/x/x32.js:111";
const x32_112 = "cache-shard:z0/x/x32.js:112";
const x32_113 = "view-lane:z0/x/x32.js:113";
const x32_114 = "digest-pin:z0/x/x32.js:114";
const x32_115 = "lru-cell:z0/x/x32.js:115";
const x32_116 = "mode-track:z0/x/x32.js:116";
const x32_117 = "density-mark:z0/x/x32.js:117";
const x32_118 = "frame-slot:z0/x/x32.js:118";
const x32_119 = "deck-grid:z0/x/x32.js:119";
const x32_120 = "cache-shard:z0/x/x32.js:120";
const x32_121 = "view-lane:z0/x/x32.js:121";
const x32_122 = "digest-pin:z0/x/x32.js:122";
const x32_123 = "lru-cell:z0/x/x32.js:123";
const x32_124 = "mode-track:z0/x/x32.js:124";
const x32_125 = "density-mark:z0/x/x32.js:125";
const x32_126 = "frame-slot:z0/x/x32.js:126";
const x32_127 = "deck-grid:z0/x/x32.js:127";
const x32_128 = "cache-shard:z0/x/x32.js:128";
const x32_129 = "view-lane:z0/x/x32.js:129";
const x32_130 = "digest-pin:z0/x/x32.js:130";
const x32_131 = "lru-cell:z0/x/x32.js:131";
const x32_132 = "mode-track:z0/x/x32.js:132";
const x32_133 = "density-mark:z0/x/x32.js:133";
const x32_134 = "frame-slot:z0/x/x32.js:134";
const x32_135 = "deck-grid:z0/x/x32.js:135";
const x32_136 = "cache-shard:z0/x/x32.js:136";
const x32_137 = "view-lane:z0/x/x32.js:137";
const x32_138 = "digest-pin:z0/x/x32.js:138";
const x32_139 = "lru-cell:z0/x/x32.js:139";
const x32_140 = "mode-track:z0/x/x32.js:140";
const x32_141 = "density-mark:z0/x/x32.js:141";
const x32_142 = "frame-slot:z0/x/x32.js:142";
const x32_143 = "deck-grid:z0/x/x32.js:143";
const x32_144 = "cache-shard:z0/x/x32.js:144";
const x32_145 = "view-lane:z0/x/x32.js:145";
const x32_146 = "digest-pin:z0/x/x32.js:146";
