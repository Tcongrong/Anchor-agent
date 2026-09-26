import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 14,
  salt: 'v:0e:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 4,
  mask: 2802496909
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe14@cache.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '3014', y: '3014', n: 4 },
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
  const value = fn({ view: 'probe14@cache.dev|0', mode: 'grid', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x14_0 = "cache-shard:z0/x/x14.js:000";
const x14_1 = "view-lane:z0/x/x14.js:001";
const x14_2 = "digest-pin:z0/x/x14.js:002";
const x14_3 = "lru-cell:z0/x/x14.js:003";
const x14_4 = "mode-track:z0/x/x14.js:004";
const x14_5 = "density-mark:z0/x/x14.js:005";
const x14_6 = "frame-slot:z0/x/x14.js:006";
const x14_7 = "deck-grid:z0/x/x14.js:007";
const x14_8 = "cache-shard:z0/x/x14.js:008";
const x14_9 = "view-lane:z0/x/x14.js:009";
const x14_10 = "digest-pin:z0/x/x14.js:010";
const x14_11 = "lru-cell:z0/x/x14.js:011";
const x14_12 = "mode-track:z0/x/x14.js:012";
const x14_13 = "density-mark:z0/x/x14.js:013";
const x14_14 = "frame-slot:z0/x/x14.js:014";
const x14_15 = "deck-grid:z0/x/x14.js:015";
const x14_16 = "cache-shard:z0/x/x14.js:016";
const x14_17 = "view-lane:z0/x/x14.js:017";
const x14_18 = "digest-pin:z0/x/x14.js:018";
const x14_19 = "lru-cell:z0/x/x14.js:019";
const x14_20 = "mode-track:z0/x/x14.js:020";
const x14_21 = "density-mark:z0/x/x14.js:021";
const x14_22 = "frame-slot:z0/x/x14.js:022";
const x14_23 = "deck-grid:z0/x/x14.js:023";
const x14_24 = "cache-shard:z0/x/x14.js:024";
const x14_25 = "view-lane:z0/x/x14.js:025";
const x14_26 = "digest-pin:z0/x/x14.js:026";
const x14_27 = "lru-cell:z0/x/x14.js:027";
const x14_28 = "mode-track:z0/x/x14.js:028";
const x14_29 = "density-mark:z0/x/x14.js:029";
const x14_30 = "frame-slot:z0/x/x14.js:030";
const x14_31 = "deck-grid:z0/x/x14.js:031";
const x14_32 = "cache-shard:z0/x/x14.js:032";
const x14_33 = "view-lane:z0/x/x14.js:033";
const x14_34 = "digest-pin:z0/x/x14.js:034";
const x14_35 = "lru-cell:z0/x/x14.js:035";
const x14_36 = "mode-track:z0/x/x14.js:036";
const x14_37 = "density-mark:z0/x/x14.js:037";
const x14_38 = "frame-slot:z0/x/x14.js:038";
const x14_39 = "deck-grid:z0/x/x14.js:039";
const x14_40 = "cache-shard:z0/x/x14.js:040";
const x14_41 = "view-lane:z0/x/x14.js:041";
const x14_42 = "digest-pin:z0/x/x14.js:042";
const x14_43 = "lru-cell:z0/x/x14.js:043";
const x14_44 = "mode-track:z0/x/x14.js:044";
const x14_45 = "density-mark:z0/x/x14.js:045";
const x14_46 = "frame-slot:z0/x/x14.js:046";
const x14_47 = "deck-grid:z0/x/x14.js:047";
const x14_48 = "cache-shard:z0/x/x14.js:048";
const x14_49 = "view-lane:z0/x/x14.js:049";
const x14_50 = "digest-pin:z0/x/x14.js:050";
const x14_51 = "lru-cell:z0/x/x14.js:051";
const x14_52 = "mode-track:z0/x/x14.js:052";
const x14_53 = "density-mark:z0/x/x14.js:053";
const x14_54 = "frame-slot:z0/x/x14.js:054";
const x14_55 = "deck-grid:z0/x/x14.js:055";
const x14_56 = "cache-shard:z0/x/x14.js:056";
const x14_57 = "view-lane:z0/x/x14.js:057";
const x14_58 = "digest-pin:z0/x/x14.js:058";
const x14_59 = "lru-cell:z0/x/x14.js:059";
const x14_60 = "mode-track:z0/x/x14.js:060";
const x14_61 = "density-mark:z0/x/x14.js:061";
const x14_62 = "frame-slot:z0/x/x14.js:062";
const x14_63 = "deck-grid:z0/x/x14.js:063";
const x14_64 = "cache-shard:z0/x/x14.js:064";
const x14_65 = "view-lane:z0/x/x14.js:065";
const x14_66 = "digest-pin:z0/x/x14.js:066";
const x14_67 = "lru-cell:z0/x/x14.js:067";
const x14_68 = "mode-track:z0/x/x14.js:068";
const x14_69 = "density-mark:z0/x/x14.js:069";
const x14_70 = "frame-slot:z0/x/x14.js:070";
const x14_71 = "deck-grid:z0/x/x14.js:071";
const x14_72 = "cache-shard:z0/x/x14.js:072";
const x14_73 = "view-lane:z0/x/x14.js:073";
const x14_74 = "digest-pin:z0/x/x14.js:074";
const x14_75 = "lru-cell:z0/x/x14.js:075";
const x14_76 = "mode-track:z0/x/x14.js:076";
const x14_77 = "density-mark:z0/x/x14.js:077";
const x14_78 = "frame-slot:z0/x/x14.js:078";
const x14_79 = "deck-grid:z0/x/x14.js:079";
const x14_80 = "cache-shard:z0/x/x14.js:080";
const x14_81 = "view-lane:z0/x/x14.js:081";
const x14_82 = "digest-pin:z0/x/x14.js:082";
const x14_83 = "lru-cell:z0/x/x14.js:083";
const x14_84 = "mode-track:z0/x/x14.js:084";
const x14_85 = "density-mark:z0/x/x14.js:085";
const x14_86 = "frame-slot:z0/x/x14.js:086";
const x14_87 = "deck-grid:z0/x/x14.js:087";
const x14_88 = "cache-shard:z0/x/x14.js:088";
const x14_89 = "view-lane:z0/x/x14.js:089";
const x14_90 = "digest-pin:z0/x/x14.js:090";
const x14_91 = "lru-cell:z0/x/x14.js:091";
const x14_92 = "mode-track:z0/x/x14.js:092";
const x14_93 = "density-mark:z0/x/x14.js:093";
const x14_94 = "frame-slot:z0/x/x14.js:094";
const x14_95 = "deck-grid:z0/x/x14.js:095";
const x14_96 = "cache-shard:z0/x/x14.js:096";
const x14_97 = "view-lane:z0/x/x14.js:097";
const x14_98 = "digest-pin:z0/x/x14.js:098";
const x14_99 = "lru-cell:z0/x/x14.js:099";
const x14_100 = "mode-track:z0/x/x14.js:100";
const x14_101 = "density-mark:z0/x/x14.js:101";
const x14_102 = "frame-slot:z0/x/x14.js:102";
const x14_103 = "deck-grid:z0/x/x14.js:103";
const x14_104 = "cache-shard:z0/x/x14.js:104";
const x14_105 = "view-lane:z0/x/x14.js:105";
const x14_106 = "digest-pin:z0/x/x14.js:106";
const x14_107 = "lru-cell:z0/x/x14.js:107";
const x14_108 = "mode-track:z0/x/x14.js:108";
const x14_109 = "density-mark:z0/x/x14.js:109";
const x14_110 = "frame-slot:z0/x/x14.js:110";
const x14_111 = "deck-grid:z0/x/x14.js:111";
const x14_112 = "cache-shard:z0/x/x14.js:112";
const x14_113 = "view-lane:z0/x/x14.js:113";
const x14_114 = "digest-pin:z0/x/x14.js:114";
const x14_115 = "lru-cell:z0/x/x14.js:115";
const x14_116 = "mode-track:z0/x/x14.js:116";
const x14_117 = "density-mark:z0/x/x14.js:117";
const x14_118 = "frame-slot:z0/x/x14.js:118";
const x14_119 = "deck-grid:z0/x/x14.js:119";
const x14_120 = "cache-shard:z0/x/x14.js:120";
const x14_121 = "view-lane:z0/x/x14.js:121";
const x14_122 = "digest-pin:z0/x/x14.js:122";
const x14_123 = "lru-cell:z0/x/x14.js:123";
const x14_124 = "mode-track:z0/x/x14.js:124";
const x14_125 = "density-mark:z0/x/x14.js:125";
const x14_126 = "frame-slot:z0/x/x14.js:126";
const x14_127 = "deck-grid:z0/x/x14.js:127";
const x14_128 = "cache-shard:z0/x/x14.js:128";
const x14_129 = "view-lane:z0/x/x14.js:129";
const x14_130 = "digest-pin:z0/x/x14.js:130";
const x14_131 = "lru-cell:z0/x/x14.js:131";
const x14_132 = "mode-track:z0/x/x14.js:132";
const x14_133 = "density-mark:z0/x/x14.js:133";
const x14_134 = "frame-slot:z0/x/x14.js:134";
const x14_135 = "deck-grid:z0/x/x14.js:135";
const x14_136 = "cache-shard:z0/x/x14.js:136";
const x14_137 = "view-lane:z0/x/x14.js:137";
const x14_138 = "digest-pin:z0/x/x14.js:138";
const x14_139 = "lru-cell:z0/x/x14.js:139";
const x14_140 = "mode-track:z0/x/x14.js:140";
const x14_141 = "density-mark:z0/x/x14.js:141";
const x14_142 = "frame-slot:z0/x/x14.js:142";
const x14_143 = "deck-grid:z0/x/x14.js:143";
const x14_144 = "cache-shard:z0/x/x14.js:144";
const x14_145 = "view-lane:z0/x/x14.js:145";
const x14_146 = "digest-pin:z0/x/x14.js:146";
