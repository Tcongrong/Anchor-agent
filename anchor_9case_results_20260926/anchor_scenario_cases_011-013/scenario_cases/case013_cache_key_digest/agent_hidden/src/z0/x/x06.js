import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 6,
  salt: 'v:06:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 2,
  mask: 3041783949
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost6@cache.dev', y: 'shadow', n: 15 },
    { k: 'b', i: 1, v: '3006', y: '3006', n: 4 },
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
  const value = fn({ view: 'ghost6@cache.dev|0', mode: 'grid', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x06_0 = "cache-shard:z0/x/x06.js:000";
const x06_1 = "view-lane:z0/x/x06.js:001";
const x06_2 = "digest-pin:z0/x/x06.js:002";
const x06_3 = "lru-cell:z0/x/x06.js:003";
const x06_4 = "mode-track:z0/x/x06.js:004";
const x06_5 = "density-mark:z0/x/x06.js:005";
const x06_6 = "frame-slot:z0/x/x06.js:006";
const x06_7 = "deck-grid:z0/x/x06.js:007";
const x06_8 = "cache-shard:z0/x/x06.js:008";
const x06_9 = "view-lane:z0/x/x06.js:009";
const x06_10 = "digest-pin:z0/x/x06.js:010";
const x06_11 = "lru-cell:z0/x/x06.js:011";
const x06_12 = "mode-track:z0/x/x06.js:012";
const x06_13 = "density-mark:z0/x/x06.js:013";
const x06_14 = "frame-slot:z0/x/x06.js:014";
const x06_15 = "deck-grid:z0/x/x06.js:015";
const x06_16 = "cache-shard:z0/x/x06.js:016";
const x06_17 = "view-lane:z0/x/x06.js:017";
const x06_18 = "digest-pin:z0/x/x06.js:018";
const x06_19 = "lru-cell:z0/x/x06.js:019";
const x06_20 = "mode-track:z0/x/x06.js:020";
const x06_21 = "density-mark:z0/x/x06.js:021";
const x06_22 = "frame-slot:z0/x/x06.js:022";
const x06_23 = "deck-grid:z0/x/x06.js:023";
const x06_24 = "cache-shard:z0/x/x06.js:024";
const x06_25 = "view-lane:z0/x/x06.js:025";
const x06_26 = "digest-pin:z0/x/x06.js:026";
const x06_27 = "lru-cell:z0/x/x06.js:027";
const x06_28 = "mode-track:z0/x/x06.js:028";
const x06_29 = "density-mark:z0/x/x06.js:029";
const x06_30 = "frame-slot:z0/x/x06.js:030";
const x06_31 = "deck-grid:z0/x/x06.js:031";
const x06_32 = "cache-shard:z0/x/x06.js:032";
const x06_33 = "view-lane:z0/x/x06.js:033";
const x06_34 = "digest-pin:z0/x/x06.js:034";
const x06_35 = "lru-cell:z0/x/x06.js:035";
const x06_36 = "mode-track:z0/x/x06.js:036";
const x06_37 = "density-mark:z0/x/x06.js:037";
const x06_38 = "frame-slot:z0/x/x06.js:038";
const x06_39 = "deck-grid:z0/x/x06.js:039";
const x06_40 = "cache-shard:z0/x/x06.js:040";
const x06_41 = "view-lane:z0/x/x06.js:041";
const x06_42 = "digest-pin:z0/x/x06.js:042";
const x06_43 = "lru-cell:z0/x/x06.js:043";
const x06_44 = "mode-track:z0/x/x06.js:044";
const x06_45 = "density-mark:z0/x/x06.js:045";
const x06_46 = "frame-slot:z0/x/x06.js:046";
const x06_47 = "deck-grid:z0/x/x06.js:047";
const x06_48 = "cache-shard:z0/x/x06.js:048";
const x06_49 = "view-lane:z0/x/x06.js:049";
const x06_50 = "digest-pin:z0/x/x06.js:050";
const x06_51 = "lru-cell:z0/x/x06.js:051";
const x06_52 = "mode-track:z0/x/x06.js:052";
const x06_53 = "density-mark:z0/x/x06.js:053";
const x06_54 = "frame-slot:z0/x/x06.js:054";
const x06_55 = "deck-grid:z0/x/x06.js:055";
const x06_56 = "cache-shard:z0/x/x06.js:056";
const x06_57 = "view-lane:z0/x/x06.js:057";
const x06_58 = "digest-pin:z0/x/x06.js:058";
const x06_59 = "lru-cell:z0/x/x06.js:059";
const x06_60 = "mode-track:z0/x/x06.js:060";
const x06_61 = "density-mark:z0/x/x06.js:061";
const x06_62 = "frame-slot:z0/x/x06.js:062";
const x06_63 = "deck-grid:z0/x/x06.js:063";
const x06_64 = "cache-shard:z0/x/x06.js:064";
const x06_65 = "view-lane:z0/x/x06.js:065";
const x06_66 = "digest-pin:z0/x/x06.js:066";
const x06_67 = "lru-cell:z0/x/x06.js:067";
const x06_68 = "mode-track:z0/x/x06.js:068";
const x06_69 = "density-mark:z0/x/x06.js:069";
const x06_70 = "frame-slot:z0/x/x06.js:070";
const x06_71 = "deck-grid:z0/x/x06.js:071";
const x06_72 = "cache-shard:z0/x/x06.js:072";
const x06_73 = "view-lane:z0/x/x06.js:073";
const x06_74 = "digest-pin:z0/x/x06.js:074";
const x06_75 = "lru-cell:z0/x/x06.js:075";
const x06_76 = "mode-track:z0/x/x06.js:076";
const x06_77 = "density-mark:z0/x/x06.js:077";
const x06_78 = "frame-slot:z0/x/x06.js:078";
const x06_79 = "deck-grid:z0/x/x06.js:079";
const x06_80 = "cache-shard:z0/x/x06.js:080";
const x06_81 = "view-lane:z0/x/x06.js:081";
const x06_82 = "digest-pin:z0/x/x06.js:082";
const x06_83 = "lru-cell:z0/x/x06.js:083";
const x06_84 = "mode-track:z0/x/x06.js:084";
const x06_85 = "density-mark:z0/x/x06.js:085";
const x06_86 = "frame-slot:z0/x/x06.js:086";
const x06_87 = "deck-grid:z0/x/x06.js:087";
const x06_88 = "cache-shard:z0/x/x06.js:088";
const x06_89 = "view-lane:z0/x/x06.js:089";
const x06_90 = "digest-pin:z0/x/x06.js:090";
const x06_91 = "lru-cell:z0/x/x06.js:091";
const x06_92 = "mode-track:z0/x/x06.js:092";
const x06_93 = "density-mark:z0/x/x06.js:093";
const x06_94 = "frame-slot:z0/x/x06.js:094";
const x06_95 = "deck-grid:z0/x/x06.js:095";
const x06_96 = "cache-shard:z0/x/x06.js:096";
const x06_97 = "view-lane:z0/x/x06.js:097";
const x06_98 = "digest-pin:z0/x/x06.js:098";
const x06_99 = "lru-cell:z0/x/x06.js:099";
const x06_100 = "mode-track:z0/x/x06.js:100";
const x06_101 = "density-mark:z0/x/x06.js:101";
const x06_102 = "frame-slot:z0/x/x06.js:102";
const x06_103 = "deck-grid:z0/x/x06.js:103";
const x06_104 = "cache-shard:z0/x/x06.js:104";
const x06_105 = "view-lane:z0/x/x06.js:105";
const x06_106 = "digest-pin:z0/x/x06.js:106";
const x06_107 = "lru-cell:z0/x/x06.js:107";
const x06_108 = "mode-track:z0/x/x06.js:108";
const x06_109 = "density-mark:z0/x/x06.js:109";
const x06_110 = "frame-slot:z0/x/x06.js:110";
const x06_111 = "deck-grid:z0/x/x06.js:111";
const x06_112 = "cache-shard:z0/x/x06.js:112";
const x06_113 = "view-lane:z0/x/x06.js:113";
const x06_114 = "digest-pin:z0/x/x06.js:114";
const x06_115 = "lru-cell:z0/x/x06.js:115";
const x06_116 = "mode-track:z0/x/x06.js:116";
const x06_117 = "density-mark:z0/x/x06.js:117";
const x06_118 = "frame-slot:z0/x/x06.js:118";
const x06_119 = "deck-grid:z0/x/x06.js:119";
const x06_120 = "cache-shard:z0/x/x06.js:120";
const x06_121 = "view-lane:z0/x/x06.js:121";
const x06_122 = "digest-pin:z0/x/x06.js:122";
const x06_123 = "lru-cell:z0/x/x06.js:123";
const x06_124 = "mode-track:z0/x/x06.js:124";
const x06_125 = "density-mark:z0/x/x06.js:125";
const x06_126 = "frame-slot:z0/x/x06.js:126";
const x06_127 = "deck-grid:z0/x/x06.js:127";
const x06_128 = "cache-shard:z0/x/x06.js:128";
const x06_129 = "view-lane:z0/x/x06.js:129";
const x06_130 = "digest-pin:z0/x/x06.js:130";
const x06_131 = "lru-cell:z0/x/x06.js:131";
const x06_132 = "mode-track:z0/x/x06.js:132";
const x06_133 = "density-mark:z0/x/x06.js:133";
const x06_134 = "frame-slot:z0/x/x06.js:134";
const x06_135 = "deck-grid:z0/x/x06.js:135";
const x06_136 = "cache-shard:z0/x/x06.js:136";
const x06_137 = "view-lane:z0/x/x06.js:137";
const x06_138 = "digest-pin:z0/x/x06.js:138";
const x06_139 = "lru-cell:z0/x/x06.js:139";
const x06_140 = "mode-track:z0/x/x06.js:140";
const x06_141 = "density-mark:z0/x/x06.js:141";
const x06_142 = "frame-slot:z0/x/x06.js:142";
const x06_143 = "deck-grid:z0/x/x06.js:143";
const x06_144 = "cache-shard:z0/x/x06.js:144";
const x06_145 = "view-lane:z0/x/x06.js:145";
const x06_146 = "digest-pin:z0/x/x06.js:146";
