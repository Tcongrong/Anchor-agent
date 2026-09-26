import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 11,
  salt: 'v:0b:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 7,
  mask: 3429100461
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe11@cache.dev', y: 'shadow', n: 15 },
    { k: 'b', i: 1, v: '3011', y: '3011', n: 4 },
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
  const value = fn({ view: 'probe11@cache.dev|1', mode: 'calendar', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x11_0 = "cache-shard:z0/x/x11.js:000";
const x11_1 = "view-lane:z0/x/x11.js:001";
const x11_2 = "digest-pin:z0/x/x11.js:002";
const x11_3 = "lru-cell:z0/x/x11.js:003";
const x11_4 = "mode-track:z0/x/x11.js:004";
const x11_5 = "density-mark:z0/x/x11.js:005";
const x11_6 = "frame-slot:z0/x/x11.js:006";
const x11_7 = "deck-grid:z0/x/x11.js:007";
const x11_8 = "cache-shard:z0/x/x11.js:008";
const x11_9 = "view-lane:z0/x/x11.js:009";
const x11_10 = "digest-pin:z0/x/x11.js:010";
const x11_11 = "lru-cell:z0/x/x11.js:011";
const x11_12 = "mode-track:z0/x/x11.js:012";
const x11_13 = "density-mark:z0/x/x11.js:013";
const x11_14 = "frame-slot:z0/x/x11.js:014";
const x11_15 = "deck-grid:z0/x/x11.js:015";
const x11_16 = "cache-shard:z0/x/x11.js:016";
const x11_17 = "view-lane:z0/x/x11.js:017";
const x11_18 = "digest-pin:z0/x/x11.js:018";
const x11_19 = "lru-cell:z0/x/x11.js:019";
const x11_20 = "mode-track:z0/x/x11.js:020";
const x11_21 = "density-mark:z0/x/x11.js:021";
const x11_22 = "frame-slot:z0/x/x11.js:022";
const x11_23 = "deck-grid:z0/x/x11.js:023";
const x11_24 = "cache-shard:z0/x/x11.js:024";
const x11_25 = "view-lane:z0/x/x11.js:025";
const x11_26 = "digest-pin:z0/x/x11.js:026";
const x11_27 = "lru-cell:z0/x/x11.js:027";
const x11_28 = "mode-track:z0/x/x11.js:028";
const x11_29 = "density-mark:z0/x/x11.js:029";
const x11_30 = "frame-slot:z0/x/x11.js:030";
const x11_31 = "deck-grid:z0/x/x11.js:031";
const x11_32 = "cache-shard:z0/x/x11.js:032";
const x11_33 = "view-lane:z0/x/x11.js:033";
const x11_34 = "digest-pin:z0/x/x11.js:034";
const x11_35 = "lru-cell:z0/x/x11.js:035";
const x11_36 = "mode-track:z0/x/x11.js:036";
const x11_37 = "density-mark:z0/x/x11.js:037";
const x11_38 = "frame-slot:z0/x/x11.js:038";
const x11_39 = "deck-grid:z0/x/x11.js:039";
const x11_40 = "cache-shard:z0/x/x11.js:040";
const x11_41 = "view-lane:z0/x/x11.js:041";
const x11_42 = "digest-pin:z0/x/x11.js:042";
const x11_43 = "lru-cell:z0/x/x11.js:043";
const x11_44 = "mode-track:z0/x/x11.js:044";
const x11_45 = "density-mark:z0/x/x11.js:045";
const x11_46 = "frame-slot:z0/x/x11.js:046";
const x11_47 = "deck-grid:z0/x/x11.js:047";
const x11_48 = "cache-shard:z0/x/x11.js:048";
const x11_49 = "view-lane:z0/x/x11.js:049";
const x11_50 = "digest-pin:z0/x/x11.js:050";
const x11_51 = "lru-cell:z0/x/x11.js:051";
const x11_52 = "mode-track:z0/x/x11.js:052";
const x11_53 = "density-mark:z0/x/x11.js:053";
const x11_54 = "frame-slot:z0/x/x11.js:054";
const x11_55 = "deck-grid:z0/x/x11.js:055";
const x11_56 = "cache-shard:z0/x/x11.js:056";
const x11_57 = "view-lane:z0/x/x11.js:057";
const x11_58 = "digest-pin:z0/x/x11.js:058";
const x11_59 = "lru-cell:z0/x/x11.js:059";
const x11_60 = "mode-track:z0/x/x11.js:060";
const x11_61 = "density-mark:z0/x/x11.js:061";
const x11_62 = "frame-slot:z0/x/x11.js:062";
const x11_63 = "deck-grid:z0/x/x11.js:063";
const x11_64 = "cache-shard:z0/x/x11.js:064";
const x11_65 = "view-lane:z0/x/x11.js:065";
const x11_66 = "digest-pin:z0/x/x11.js:066";
const x11_67 = "lru-cell:z0/x/x11.js:067";
const x11_68 = "mode-track:z0/x/x11.js:068";
const x11_69 = "density-mark:z0/x/x11.js:069";
const x11_70 = "frame-slot:z0/x/x11.js:070";
const x11_71 = "deck-grid:z0/x/x11.js:071";
const x11_72 = "cache-shard:z0/x/x11.js:072";
const x11_73 = "view-lane:z0/x/x11.js:073";
const x11_74 = "digest-pin:z0/x/x11.js:074";
const x11_75 = "lru-cell:z0/x/x11.js:075";
const x11_76 = "mode-track:z0/x/x11.js:076";
const x11_77 = "density-mark:z0/x/x11.js:077";
const x11_78 = "frame-slot:z0/x/x11.js:078";
const x11_79 = "deck-grid:z0/x/x11.js:079";
const x11_80 = "cache-shard:z0/x/x11.js:080";
const x11_81 = "view-lane:z0/x/x11.js:081";
const x11_82 = "digest-pin:z0/x/x11.js:082";
const x11_83 = "lru-cell:z0/x/x11.js:083";
const x11_84 = "mode-track:z0/x/x11.js:084";
const x11_85 = "density-mark:z0/x/x11.js:085";
const x11_86 = "frame-slot:z0/x/x11.js:086";
const x11_87 = "deck-grid:z0/x/x11.js:087";
const x11_88 = "cache-shard:z0/x/x11.js:088";
const x11_89 = "view-lane:z0/x/x11.js:089";
const x11_90 = "digest-pin:z0/x/x11.js:090";
const x11_91 = "lru-cell:z0/x/x11.js:091";
const x11_92 = "mode-track:z0/x/x11.js:092";
const x11_93 = "density-mark:z0/x/x11.js:093";
const x11_94 = "frame-slot:z0/x/x11.js:094";
const x11_95 = "deck-grid:z0/x/x11.js:095";
const x11_96 = "cache-shard:z0/x/x11.js:096";
const x11_97 = "view-lane:z0/x/x11.js:097";
const x11_98 = "digest-pin:z0/x/x11.js:098";
const x11_99 = "lru-cell:z0/x/x11.js:099";
const x11_100 = "mode-track:z0/x/x11.js:100";
const x11_101 = "density-mark:z0/x/x11.js:101";
const x11_102 = "frame-slot:z0/x/x11.js:102";
const x11_103 = "deck-grid:z0/x/x11.js:103";
const x11_104 = "cache-shard:z0/x/x11.js:104";
const x11_105 = "view-lane:z0/x/x11.js:105";
const x11_106 = "digest-pin:z0/x/x11.js:106";
const x11_107 = "lru-cell:z0/x/x11.js:107";
const x11_108 = "mode-track:z0/x/x11.js:108";
const x11_109 = "density-mark:z0/x/x11.js:109";
const x11_110 = "frame-slot:z0/x/x11.js:110";
const x11_111 = "deck-grid:z0/x/x11.js:111";
const x11_112 = "cache-shard:z0/x/x11.js:112";
const x11_113 = "view-lane:z0/x/x11.js:113";
const x11_114 = "digest-pin:z0/x/x11.js:114";
const x11_115 = "lru-cell:z0/x/x11.js:115";
const x11_116 = "mode-track:z0/x/x11.js:116";
const x11_117 = "density-mark:z0/x/x11.js:117";
const x11_118 = "frame-slot:z0/x/x11.js:118";
const x11_119 = "deck-grid:z0/x/x11.js:119";
const x11_120 = "cache-shard:z0/x/x11.js:120";
const x11_121 = "view-lane:z0/x/x11.js:121";
const x11_122 = "digest-pin:z0/x/x11.js:122";
const x11_123 = "lru-cell:z0/x/x11.js:123";
const x11_124 = "mode-track:z0/x/x11.js:124";
const x11_125 = "density-mark:z0/x/x11.js:125";
const x11_126 = "frame-slot:z0/x/x11.js:126";
const x11_127 = "deck-grid:z0/x/x11.js:127";
const x11_128 = "cache-shard:z0/x/x11.js:128";
const x11_129 = "view-lane:z0/x/x11.js:129";
const x11_130 = "digest-pin:z0/x/x11.js:130";
const x11_131 = "lru-cell:z0/x/x11.js:131";
const x11_132 = "mode-track:z0/x/x11.js:132";
const x11_133 = "density-mark:z0/x/x11.js:133";
const x11_134 = "frame-slot:z0/x/x11.js:134";
const x11_135 = "deck-grid:z0/x/x11.js:135";
const x11_136 = "cache-shard:z0/x/x11.js:136";
const x11_137 = "view-lane:z0/x/x11.js:137";
const x11_138 = "digest-pin:z0/x/x11.js:138";
const x11_139 = "lru-cell:z0/x/x11.js:139";
const x11_140 = "mode-track:z0/x/x11.js:140";
const x11_141 = "density-mark:z0/x/x11.js:141";
const x11_142 = "frame-slot:z0/x/x11.js:142";
const x11_143 = "deck-grid:z0/x/x11.js:143";
const x11_144 = "cache-shard:z0/x/x11.js:144";
const x11_145 = "view-lane:z0/x/x11.js:145";
const x11_146 = "digest-pin:z0/x/x11.js:146";
