import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 3,
  salt: 'v:03:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 5,
  mask: 3668387501
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost3@cache.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '3003', y: '3003', n: 4 },
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
  const value = fn({ view: 'ghost3@cache.dev|1', mode: 'calendar', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x03_0 = "cache-shard:z0/x/x03.js:000";
const x03_1 = "view-lane:z0/x/x03.js:001";
const x03_2 = "digest-pin:z0/x/x03.js:002";
const x03_3 = "lru-cell:z0/x/x03.js:003";
const x03_4 = "mode-track:z0/x/x03.js:004";
const x03_5 = "density-mark:z0/x/x03.js:005";
const x03_6 = "frame-slot:z0/x/x03.js:006";
const x03_7 = "deck-grid:z0/x/x03.js:007";
const x03_8 = "cache-shard:z0/x/x03.js:008";
const x03_9 = "view-lane:z0/x/x03.js:009";
const x03_10 = "digest-pin:z0/x/x03.js:010";
const x03_11 = "lru-cell:z0/x/x03.js:011";
const x03_12 = "mode-track:z0/x/x03.js:012";
const x03_13 = "density-mark:z0/x/x03.js:013";
const x03_14 = "frame-slot:z0/x/x03.js:014";
const x03_15 = "deck-grid:z0/x/x03.js:015";
const x03_16 = "cache-shard:z0/x/x03.js:016";
const x03_17 = "view-lane:z0/x/x03.js:017";
const x03_18 = "digest-pin:z0/x/x03.js:018";
const x03_19 = "lru-cell:z0/x/x03.js:019";
const x03_20 = "mode-track:z0/x/x03.js:020";
const x03_21 = "density-mark:z0/x/x03.js:021";
const x03_22 = "frame-slot:z0/x/x03.js:022";
const x03_23 = "deck-grid:z0/x/x03.js:023";
const x03_24 = "cache-shard:z0/x/x03.js:024";
const x03_25 = "view-lane:z0/x/x03.js:025";
const x03_26 = "digest-pin:z0/x/x03.js:026";
const x03_27 = "lru-cell:z0/x/x03.js:027";
const x03_28 = "mode-track:z0/x/x03.js:028";
const x03_29 = "density-mark:z0/x/x03.js:029";
const x03_30 = "frame-slot:z0/x/x03.js:030";
const x03_31 = "deck-grid:z0/x/x03.js:031";
const x03_32 = "cache-shard:z0/x/x03.js:032";
const x03_33 = "view-lane:z0/x/x03.js:033";
const x03_34 = "digest-pin:z0/x/x03.js:034";
const x03_35 = "lru-cell:z0/x/x03.js:035";
const x03_36 = "mode-track:z0/x/x03.js:036";
const x03_37 = "density-mark:z0/x/x03.js:037";
const x03_38 = "frame-slot:z0/x/x03.js:038";
const x03_39 = "deck-grid:z0/x/x03.js:039";
const x03_40 = "cache-shard:z0/x/x03.js:040";
const x03_41 = "view-lane:z0/x/x03.js:041";
const x03_42 = "digest-pin:z0/x/x03.js:042";
const x03_43 = "lru-cell:z0/x/x03.js:043";
const x03_44 = "mode-track:z0/x/x03.js:044";
const x03_45 = "density-mark:z0/x/x03.js:045";
const x03_46 = "frame-slot:z0/x/x03.js:046";
const x03_47 = "deck-grid:z0/x/x03.js:047";
const x03_48 = "cache-shard:z0/x/x03.js:048";
const x03_49 = "view-lane:z0/x/x03.js:049";
const x03_50 = "digest-pin:z0/x/x03.js:050";
const x03_51 = "lru-cell:z0/x/x03.js:051";
const x03_52 = "mode-track:z0/x/x03.js:052";
const x03_53 = "density-mark:z0/x/x03.js:053";
const x03_54 = "frame-slot:z0/x/x03.js:054";
const x03_55 = "deck-grid:z0/x/x03.js:055";
const x03_56 = "cache-shard:z0/x/x03.js:056";
const x03_57 = "view-lane:z0/x/x03.js:057";
const x03_58 = "digest-pin:z0/x/x03.js:058";
const x03_59 = "lru-cell:z0/x/x03.js:059";
const x03_60 = "mode-track:z0/x/x03.js:060";
const x03_61 = "density-mark:z0/x/x03.js:061";
const x03_62 = "frame-slot:z0/x/x03.js:062";
const x03_63 = "deck-grid:z0/x/x03.js:063";
const x03_64 = "cache-shard:z0/x/x03.js:064";
const x03_65 = "view-lane:z0/x/x03.js:065";
const x03_66 = "digest-pin:z0/x/x03.js:066";
const x03_67 = "lru-cell:z0/x/x03.js:067";
const x03_68 = "mode-track:z0/x/x03.js:068";
const x03_69 = "density-mark:z0/x/x03.js:069";
const x03_70 = "frame-slot:z0/x/x03.js:070";
const x03_71 = "deck-grid:z0/x/x03.js:071";
const x03_72 = "cache-shard:z0/x/x03.js:072";
const x03_73 = "view-lane:z0/x/x03.js:073";
const x03_74 = "digest-pin:z0/x/x03.js:074";
const x03_75 = "lru-cell:z0/x/x03.js:075";
const x03_76 = "mode-track:z0/x/x03.js:076";
const x03_77 = "density-mark:z0/x/x03.js:077";
const x03_78 = "frame-slot:z0/x/x03.js:078";
const x03_79 = "deck-grid:z0/x/x03.js:079";
const x03_80 = "cache-shard:z0/x/x03.js:080";
const x03_81 = "view-lane:z0/x/x03.js:081";
const x03_82 = "digest-pin:z0/x/x03.js:082";
const x03_83 = "lru-cell:z0/x/x03.js:083";
const x03_84 = "mode-track:z0/x/x03.js:084";
const x03_85 = "density-mark:z0/x/x03.js:085";
const x03_86 = "frame-slot:z0/x/x03.js:086";
const x03_87 = "deck-grid:z0/x/x03.js:087";
const x03_88 = "cache-shard:z0/x/x03.js:088";
const x03_89 = "view-lane:z0/x/x03.js:089";
const x03_90 = "digest-pin:z0/x/x03.js:090";
const x03_91 = "lru-cell:z0/x/x03.js:091";
const x03_92 = "mode-track:z0/x/x03.js:092";
const x03_93 = "density-mark:z0/x/x03.js:093";
const x03_94 = "frame-slot:z0/x/x03.js:094";
const x03_95 = "deck-grid:z0/x/x03.js:095";
const x03_96 = "cache-shard:z0/x/x03.js:096";
const x03_97 = "view-lane:z0/x/x03.js:097";
const x03_98 = "digest-pin:z0/x/x03.js:098";
const x03_99 = "lru-cell:z0/x/x03.js:099";
const x03_100 = "mode-track:z0/x/x03.js:100";
const x03_101 = "density-mark:z0/x/x03.js:101";
const x03_102 = "frame-slot:z0/x/x03.js:102";
const x03_103 = "deck-grid:z0/x/x03.js:103";
const x03_104 = "cache-shard:z0/x/x03.js:104";
const x03_105 = "view-lane:z0/x/x03.js:105";
const x03_106 = "digest-pin:z0/x/x03.js:106";
const x03_107 = "lru-cell:z0/x/x03.js:107";
const x03_108 = "mode-track:z0/x/x03.js:108";
const x03_109 = "density-mark:z0/x/x03.js:109";
const x03_110 = "frame-slot:z0/x/x03.js:110";
const x03_111 = "deck-grid:z0/x/x03.js:111";
const x03_112 = "cache-shard:z0/x/x03.js:112";
const x03_113 = "view-lane:z0/x/x03.js:113";
const x03_114 = "digest-pin:z0/x/x03.js:114";
const x03_115 = "lru-cell:z0/x/x03.js:115";
const x03_116 = "mode-track:z0/x/x03.js:116";
const x03_117 = "density-mark:z0/x/x03.js:117";
const x03_118 = "frame-slot:z0/x/x03.js:118";
const x03_119 = "deck-grid:z0/x/x03.js:119";
const x03_120 = "cache-shard:z0/x/x03.js:120";
const x03_121 = "view-lane:z0/x/x03.js:121";
const x03_122 = "digest-pin:z0/x/x03.js:122";
const x03_123 = "lru-cell:z0/x/x03.js:123";
const x03_124 = "mode-track:z0/x/x03.js:124";
const x03_125 = "density-mark:z0/x/x03.js:125";
const x03_126 = "frame-slot:z0/x/x03.js:126";
const x03_127 = "deck-grid:z0/x/x03.js:127";
const x03_128 = "cache-shard:z0/x/x03.js:128";
const x03_129 = "view-lane:z0/x/x03.js:129";
const x03_130 = "digest-pin:z0/x/x03.js:130";
const x03_131 = "lru-cell:z0/x/x03.js:131";
const x03_132 = "mode-track:z0/x/x03.js:132";
const x03_133 = "density-mark:z0/x/x03.js:133";
const x03_134 = "frame-slot:z0/x/x03.js:134";
const x03_135 = "deck-grid:z0/x/x03.js:135";
const x03_136 = "cache-shard:z0/x/x03.js:136";
const x03_137 = "view-lane:z0/x/x03.js:137";
const x03_138 = "digest-pin:z0/x/x03.js:138";
const x03_139 = "lru-cell:z0/x/x03.js:139";
const x03_140 = "mode-track:z0/x/x03.js:140";
const x03_141 = "density-mark:z0/x/x03.js:141";
const x03_142 = "frame-slot:z0/x/x03.js:142";
const x03_143 = "deck-grid:z0/x/x03.js:143";
const x03_144 = "cache-shard:z0/x/x03.js:144";
const x03_145 = "view-lane:z0/x/x03.js:145";
const x03_146 = "digest-pin:z0/x/x03.js:146";
