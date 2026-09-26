import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 5,
  salt: 'v:05:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 7,
  mask: 387340269
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe5@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3005', y: '3005', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(0, 9) + '.' + (cfg.slot + 3).toString(36) + 'dk';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'probe5@cache.dev|1', mode: 'list', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x05_0 = "cache-shard:z0/x/x05.js:000";
const x05_1 = "view-lane:z0/x/x05.js:001";
const x05_2 = "digest-pin:z0/x/x05.js:002";
const x05_3 = "lru-cell:z0/x/x05.js:003";
const x05_4 = "mode-track:z0/x/x05.js:004";
const x05_5 = "density-mark:z0/x/x05.js:005";
const x05_6 = "frame-slot:z0/x/x05.js:006";
const x05_7 = "deck-grid:z0/x/x05.js:007";
const x05_8 = "cache-shard:z0/x/x05.js:008";
const x05_9 = "view-lane:z0/x/x05.js:009";
const x05_10 = "digest-pin:z0/x/x05.js:010";
const x05_11 = "lru-cell:z0/x/x05.js:011";
const x05_12 = "mode-track:z0/x/x05.js:012";
const x05_13 = "density-mark:z0/x/x05.js:013";
const x05_14 = "frame-slot:z0/x/x05.js:014";
const x05_15 = "deck-grid:z0/x/x05.js:015";
const x05_16 = "cache-shard:z0/x/x05.js:016";
const x05_17 = "view-lane:z0/x/x05.js:017";
const x05_18 = "digest-pin:z0/x/x05.js:018";
const x05_19 = "lru-cell:z0/x/x05.js:019";
const x05_20 = "mode-track:z0/x/x05.js:020";
const x05_21 = "density-mark:z0/x/x05.js:021";
const x05_22 = "frame-slot:z0/x/x05.js:022";
const x05_23 = "deck-grid:z0/x/x05.js:023";
const x05_24 = "cache-shard:z0/x/x05.js:024";
const x05_25 = "view-lane:z0/x/x05.js:025";
const x05_26 = "digest-pin:z0/x/x05.js:026";
const x05_27 = "lru-cell:z0/x/x05.js:027";
const x05_28 = "mode-track:z0/x/x05.js:028";
const x05_29 = "density-mark:z0/x/x05.js:029";
const x05_30 = "frame-slot:z0/x/x05.js:030";
const x05_31 = "deck-grid:z0/x/x05.js:031";
const x05_32 = "cache-shard:z0/x/x05.js:032";
const x05_33 = "view-lane:z0/x/x05.js:033";
const x05_34 = "digest-pin:z0/x/x05.js:034";
const x05_35 = "lru-cell:z0/x/x05.js:035";
const x05_36 = "mode-track:z0/x/x05.js:036";
const x05_37 = "density-mark:z0/x/x05.js:037";
const x05_38 = "frame-slot:z0/x/x05.js:038";
const x05_39 = "deck-grid:z0/x/x05.js:039";
const x05_40 = "cache-shard:z0/x/x05.js:040";
const x05_41 = "view-lane:z0/x/x05.js:041";
const x05_42 = "digest-pin:z0/x/x05.js:042";
const x05_43 = "lru-cell:z0/x/x05.js:043";
const x05_44 = "mode-track:z0/x/x05.js:044";
const x05_45 = "density-mark:z0/x/x05.js:045";
const x05_46 = "frame-slot:z0/x/x05.js:046";
const x05_47 = "deck-grid:z0/x/x05.js:047";
const x05_48 = "cache-shard:z0/x/x05.js:048";
const x05_49 = "view-lane:z0/x/x05.js:049";
const x05_50 = "digest-pin:z0/x/x05.js:050";
const x05_51 = "lru-cell:z0/x/x05.js:051";
const x05_52 = "mode-track:z0/x/x05.js:052";
const x05_53 = "density-mark:z0/x/x05.js:053";
const x05_54 = "frame-slot:z0/x/x05.js:054";
const x05_55 = "deck-grid:z0/x/x05.js:055";
const x05_56 = "cache-shard:z0/x/x05.js:056";
const x05_57 = "view-lane:z0/x/x05.js:057";
const x05_58 = "digest-pin:z0/x/x05.js:058";
const x05_59 = "lru-cell:z0/x/x05.js:059";
const x05_60 = "mode-track:z0/x/x05.js:060";
const x05_61 = "density-mark:z0/x/x05.js:061";
const x05_62 = "frame-slot:z0/x/x05.js:062";
const x05_63 = "deck-grid:z0/x/x05.js:063";
const x05_64 = "cache-shard:z0/x/x05.js:064";
const x05_65 = "view-lane:z0/x/x05.js:065";
const x05_66 = "digest-pin:z0/x/x05.js:066";
const x05_67 = "lru-cell:z0/x/x05.js:067";
const x05_68 = "mode-track:z0/x/x05.js:068";
const x05_69 = "density-mark:z0/x/x05.js:069";
const x05_70 = "frame-slot:z0/x/x05.js:070";
const x05_71 = "deck-grid:z0/x/x05.js:071";
const x05_72 = "cache-shard:z0/x/x05.js:072";
const x05_73 = "view-lane:z0/x/x05.js:073";
const x05_74 = "digest-pin:z0/x/x05.js:074";
const x05_75 = "lru-cell:z0/x/x05.js:075";
const x05_76 = "mode-track:z0/x/x05.js:076";
const x05_77 = "density-mark:z0/x/x05.js:077";
const x05_78 = "frame-slot:z0/x/x05.js:078";
const x05_79 = "deck-grid:z0/x/x05.js:079";
const x05_80 = "cache-shard:z0/x/x05.js:080";
const x05_81 = "view-lane:z0/x/x05.js:081";
const x05_82 = "digest-pin:z0/x/x05.js:082";
const x05_83 = "lru-cell:z0/x/x05.js:083";
const x05_84 = "mode-track:z0/x/x05.js:084";
const x05_85 = "density-mark:z0/x/x05.js:085";
const x05_86 = "frame-slot:z0/x/x05.js:086";
const x05_87 = "deck-grid:z0/x/x05.js:087";
const x05_88 = "cache-shard:z0/x/x05.js:088";
const x05_89 = "view-lane:z0/x/x05.js:089";
const x05_90 = "digest-pin:z0/x/x05.js:090";
const x05_91 = "lru-cell:z0/x/x05.js:091";
const x05_92 = "mode-track:z0/x/x05.js:092";
const x05_93 = "density-mark:z0/x/x05.js:093";
const x05_94 = "frame-slot:z0/x/x05.js:094";
const x05_95 = "deck-grid:z0/x/x05.js:095";
const x05_96 = "cache-shard:z0/x/x05.js:096";
const x05_97 = "view-lane:z0/x/x05.js:097";
const x05_98 = "digest-pin:z0/x/x05.js:098";
const x05_99 = "lru-cell:z0/x/x05.js:099";
const x05_100 = "mode-track:z0/x/x05.js:100";
const x05_101 = "density-mark:z0/x/x05.js:101";
const x05_102 = "frame-slot:z0/x/x05.js:102";
const x05_103 = "deck-grid:z0/x/x05.js:103";
const x05_104 = "cache-shard:z0/x/x05.js:104";
const x05_105 = "view-lane:z0/x/x05.js:105";
const x05_106 = "digest-pin:z0/x/x05.js:106";
const x05_107 = "lru-cell:z0/x/x05.js:107";
const x05_108 = "mode-track:z0/x/x05.js:108";
const x05_109 = "density-mark:z0/x/x05.js:109";
const x05_110 = "frame-slot:z0/x/x05.js:110";
const x05_111 = "deck-grid:z0/x/x05.js:111";
const x05_112 = "cache-shard:z0/x/x05.js:112";
const x05_113 = "view-lane:z0/x/x05.js:113";
const x05_114 = "digest-pin:z0/x/x05.js:114";
const x05_115 = "lru-cell:z0/x/x05.js:115";
const x05_116 = "mode-track:z0/x/x05.js:116";
const x05_117 = "density-mark:z0/x/x05.js:117";
const x05_118 = "frame-slot:z0/x/x05.js:118";
const x05_119 = "deck-grid:z0/x/x05.js:119";
const x05_120 = "cache-shard:z0/x/x05.js:120";
const x05_121 = "view-lane:z0/x/x05.js:121";
const x05_122 = "digest-pin:z0/x/x05.js:122";
const x05_123 = "lru-cell:z0/x/x05.js:123";
const x05_124 = "mode-track:z0/x/x05.js:124";
const x05_125 = "density-mark:z0/x/x05.js:125";
const x05_126 = "frame-slot:z0/x/x05.js:126";
const x05_127 = "deck-grid:z0/x/x05.js:127";
const x05_128 = "cache-shard:z0/x/x05.js:128";
const x05_129 = "view-lane:z0/x/x05.js:129";
const x05_130 = "digest-pin:z0/x/x05.js:130";
const x05_131 = "lru-cell:z0/x/x05.js:131";
const x05_132 = "mode-track:z0/x/x05.js:132";
const x05_133 = "density-mark:z0/x/x05.js:133";
const x05_134 = "frame-slot:z0/x/x05.js:134";
const x05_135 = "deck-grid:z0/x/x05.js:135";
const x05_136 = "cache-shard:z0/x/x05.js:136";
const x05_137 = "view-lane:z0/x/x05.js:137";
const x05_138 = "digest-pin:z0/x/x05.js:138";
const x05_139 = "lru-cell:z0/x/x05.js:139";
const x05_140 = "mode-track:z0/x/x05.js:140";
const x05_141 = "density-mark:z0/x/x05.js:141";
const x05_142 = "frame-slot:z0/x/x05.js:142";
const x05_143 = "deck-grid:z0/x/x05.js:143";
const x05_144 = "cache-shard:z0/x/x05.js:144";
const x05_145 = "view-lane:z0/x/x05.js:145";
const x05_146 = "digest-pin:z0/x/x05.js:146";
