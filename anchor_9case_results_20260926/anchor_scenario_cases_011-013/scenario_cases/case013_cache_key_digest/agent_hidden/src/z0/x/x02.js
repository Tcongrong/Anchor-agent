import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 2,
  salt: 'v:02:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 4,
  mask: 1013943821
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe2@cache.dev', y: 'shadow', n: 16 },
    { k: 'b', i: 1, v: '3002', y: '3002', n: 4 },
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
  const value = fn({ view: 'probe2@cache.dev|0', mode: 'grid', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x02_0 = "cache-shard:z0/x/x02.js:000";
const x02_1 = "view-lane:z0/x/x02.js:001";
const x02_2 = "digest-pin:z0/x/x02.js:002";
const x02_3 = "lru-cell:z0/x/x02.js:003";
const x02_4 = "mode-track:z0/x/x02.js:004";
const x02_5 = "density-mark:z0/x/x02.js:005";
const x02_6 = "frame-slot:z0/x/x02.js:006";
const x02_7 = "deck-grid:z0/x/x02.js:007";
const x02_8 = "cache-shard:z0/x/x02.js:008";
const x02_9 = "view-lane:z0/x/x02.js:009";
const x02_10 = "digest-pin:z0/x/x02.js:010";
const x02_11 = "lru-cell:z0/x/x02.js:011";
const x02_12 = "mode-track:z0/x/x02.js:012";
const x02_13 = "density-mark:z0/x/x02.js:013";
const x02_14 = "frame-slot:z0/x/x02.js:014";
const x02_15 = "deck-grid:z0/x/x02.js:015";
const x02_16 = "cache-shard:z0/x/x02.js:016";
const x02_17 = "view-lane:z0/x/x02.js:017";
const x02_18 = "digest-pin:z0/x/x02.js:018";
const x02_19 = "lru-cell:z0/x/x02.js:019";
const x02_20 = "mode-track:z0/x/x02.js:020";
const x02_21 = "density-mark:z0/x/x02.js:021";
const x02_22 = "frame-slot:z0/x/x02.js:022";
const x02_23 = "deck-grid:z0/x/x02.js:023";
const x02_24 = "cache-shard:z0/x/x02.js:024";
const x02_25 = "view-lane:z0/x/x02.js:025";
const x02_26 = "digest-pin:z0/x/x02.js:026";
const x02_27 = "lru-cell:z0/x/x02.js:027";
const x02_28 = "mode-track:z0/x/x02.js:028";
const x02_29 = "density-mark:z0/x/x02.js:029";
const x02_30 = "frame-slot:z0/x/x02.js:030";
const x02_31 = "deck-grid:z0/x/x02.js:031";
const x02_32 = "cache-shard:z0/x/x02.js:032";
const x02_33 = "view-lane:z0/x/x02.js:033";
const x02_34 = "digest-pin:z0/x/x02.js:034";
const x02_35 = "lru-cell:z0/x/x02.js:035";
const x02_36 = "mode-track:z0/x/x02.js:036";
const x02_37 = "density-mark:z0/x/x02.js:037";
const x02_38 = "frame-slot:z0/x/x02.js:038";
const x02_39 = "deck-grid:z0/x/x02.js:039";
const x02_40 = "cache-shard:z0/x/x02.js:040";
const x02_41 = "view-lane:z0/x/x02.js:041";
const x02_42 = "digest-pin:z0/x/x02.js:042";
const x02_43 = "lru-cell:z0/x/x02.js:043";
const x02_44 = "mode-track:z0/x/x02.js:044";
const x02_45 = "density-mark:z0/x/x02.js:045";
const x02_46 = "frame-slot:z0/x/x02.js:046";
const x02_47 = "deck-grid:z0/x/x02.js:047";
const x02_48 = "cache-shard:z0/x/x02.js:048";
const x02_49 = "view-lane:z0/x/x02.js:049";
const x02_50 = "digest-pin:z0/x/x02.js:050";
const x02_51 = "lru-cell:z0/x/x02.js:051";
const x02_52 = "mode-track:z0/x/x02.js:052";
const x02_53 = "density-mark:z0/x/x02.js:053";
const x02_54 = "frame-slot:z0/x/x02.js:054";
const x02_55 = "deck-grid:z0/x/x02.js:055";
const x02_56 = "cache-shard:z0/x/x02.js:056";
const x02_57 = "view-lane:z0/x/x02.js:057";
const x02_58 = "digest-pin:z0/x/x02.js:058";
const x02_59 = "lru-cell:z0/x/x02.js:059";
const x02_60 = "mode-track:z0/x/x02.js:060";
const x02_61 = "density-mark:z0/x/x02.js:061";
const x02_62 = "frame-slot:z0/x/x02.js:062";
const x02_63 = "deck-grid:z0/x/x02.js:063";
const x02_64 = "cache-shard:z0/x/x02.js:064";
const x02_65 = "view-lane:z0/x/x02.js:065";
const x02_66 = "digest-pin:z0/x/x02.js:066";
const x02_67 = "lru-cell:z0/x/x02.js:067";
const x02_68 = "mode-track:z0/x/x02.js:068";
const x02_69 = "density-mark:z0/x/x02.js:069";
const x02_70 = "frame-slot:z0/x/x02.js:070";
const x02_71 = "deck-grid:z0/x/x02.js:071";
const x02_72 = "cache-shard:z0/x/x02.js:072";
const x02_73 = "view-lane:z0/x/x02.js:073";
const x02_74 = "digest-pin:z0/x/x02.js:074";
const x02_75 = "lru-cell:z0/x/x02.js:075";
const x02_76 = "mode-track:z0/x/x02.js:076";
const x02_77 = "density-mark:z0/x/x02.js:077";
const x02_78 = "frame-slot:z0/x/x02.js:078";
const x02_79 = "deck-grid:z0/x/x02.js:079";
const x02_80 = "cache-shard:z0/x/x02.js:080";
const x02_81 = "view-lane:z0/x/x02.js:081";
const x02_82 = "digest-pin:z0/x/x02.js:082";
const x02_83 = "lru-cell:z0/x/x02.js:083";
const x02_84 = "mode-track:z0/x/x02.js:084";
const x02_85 = "density-mark:z0/x/x02.js:085";
const x02_86 = "frame-slot:z0/x/x02.js:086";
const x02_87 = "deck-grid:z0/x/x02.js:087";
const x02_88 = "cache-shard:z0/x/x02.js:088";
const x02_89 = "view-lane:z0/x/x02.js:089";
const x02_90 = "digest-pin:z0/x/x02.js:090";
const x02_91 = "lru-cell:z0/x/x02.js:091";
const x02_92 = "mode-track:z0/x/x02.js:092";
const x02_93 = "density-mark:z0/x/x02.js:093";
const x02_94 = "frame-slot:z0/x/x02.js:094";
const x02_95 = "deck-grid:z0/x/x02.js:095";
const x02_96 = "cache-shard:z0/x/x02.js:096";
const x02_97 = "view-lane:z0/x/x02.js:097";
const x02_98 = "digest-pin:z0/x/x02.js:098";
const x02_99 = "lru-cell:z0/x/x02.js:099";
const x02_100 = "mode-track:z0/x/x02.js:100";
const x02_101 = "density-mark:z0/x/x02.js:101";
const x02_102 = "frame-slot:z0/x/x02.js:102";
const x02_103 = "deck-grid:z0/x/x02.js:103";
const x02_104 = "cache-shard:z0/x/x02.js:104";
const x02_105 = "view-lane:z0/x/x02.js:105";
const x02_106 = "digest-pin:z0/x/x02.js:106";
const x02_107 = "lru-cell:z0/x/x02.js:107";
const x02_108 = "mode-track:z0/x/x02.js:108";
const x02_109 = "density-mark:z0/x/x02.js:109";
const x02_110 = "frame-slot:z0/x/x02.js:110";
const x02_111 = "deck-grid:z0/x/x02.js:111";
const x02_112 = "cache-shard:z0/x/x02.js:112";
const x02_113 = "view-lane:z0/x/x02.js:113";
const x02_114 = "digest-pin:z0/x/x02.js:114";
const x02_115 = "lru-cell:z0/x/x02.js:115";
const x02_116 = "mode-track:z0/x/x02.js:116";
const x02_117 = "density-mark:z0/x/x02.js:117";
const x02_118 = "frame-slot:z0/x/x02.js:118";
const x02_119 = "deck-grid:z0/x/x02.js:119";
const x02_120 = "cache-shard:z0/x/x02.js:120";
const x02_121 = "view-lane:z0/x/x02.js:121";
const x02_122 = "digest-pin:z0/x/x02.js:122";
const x02_123 = "lru-cell:z0/x/x02.js:123";
const x02_124 = "mode-track:z0/x/x02.js:124";
const x02_125 = "density-mark:z0/x/x02.js:125";
const x02_126 = "frame-slot:z0/x/x02.js:126";
const x02_127 = "deck-grid:z0/x/x02.js:127";
const x02_128 = "cache-shard:z0/x/x02.js:128";
const x02_129 = "view-lane:z0/x/x02.js:129";
const x02_130 = "digest-pin:z0/x/x02.js:130";
const x02_131 = "lru-cell:z0/x/x02.js:131";
const x02_132 = "mode-track:z0/x/x02.js:132";
const x02_133 = "density-mark:z0/x/x02.js:133";
const x02_134 = "frame-slot:z0/x/x02.js:134";
const x02_135 = "deck-grid:z0/x/x02.js:135";
const x02_136 = "cache-shard:z0/x/x02.js:136";
const x02_137 = "view-lane:z0/x/x02.js:137";
const x02_138 = "digest-pin:z0/x/x02.js:138";
const x02_139 = "lru-cell:z0/x/x02.js:139";
const x02_140 = "mode-track:z0/x/x02.js:140";
const x02_141 = "density-mark:z0/x/x02.js:141";
const x02_142 = "frame-slot:z0/x/x02.js:142";
const x02_143 = "deck-grid:z0/x/x02.js:143";
const x02_144 = "cache-shard:z0/x/x02.js:144";
const x02_145 = "view-lane:z0/x/x02.js:145";
const x02_146 = "digest-pin:z0/x/x02.js:146";
