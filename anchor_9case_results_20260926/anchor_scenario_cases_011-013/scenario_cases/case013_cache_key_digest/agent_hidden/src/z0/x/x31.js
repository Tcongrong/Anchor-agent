import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 31,
  salt: 'v:1f:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 3,
  mask: 683399213
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed31@cache.dev', y: 'shadow', n: 15 },
    { k: 'b', i: 1, v: '3031', y: '3031', n: 4 },
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
  const value = fn({ view: 'seed31@cache.dev|1', mode: 'calendar', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x31_0 = "cache-shard:z0/x/x31.js:000";
const x31_1 = "view-lane:z0/x/x31.js:001";
const x31_2 = "digest-pin:z0/x/x31.js:002";
const x31_3 = "lru-cell:z0/x/x31.js:003";
const x31_4 = "mode-track:z0/x/x31.js:004";
const x31_5 = "density-mark:z0/x/x31.js:005";
const x31_6 = "frame-slot:z0/x/x31.js:006";
const x31_7 = "deck-grid:z0/x/x31.js:007";
const x31_8 = "cache-shard:z0/x/x31.js:008";
const x31_9 = "view-lane:z0/x/x31.js:009";
const x31_10 = "digest-pin:z0/x/x31.js:010";
const x31_11 = "lru-cell:z0/x/x31.js:011";
const x31_12 = "mode-track:z0/x/x31.js:012";
const x31_13 = "density-mark:z0/x/x31.js:013";
const x31_14 = "frame-slot:z0/x/x31.js:014";
const x31_15 = "deck-grid:z0/x/x31.js:015";
const x31_16 = "cache-shard:z0/x/x31.js:016";
const x31_17 = "view-lane:z0/x/x31.js:017";
const x31_18 = "digest-pin:z0/x/x31.js:018";
const x31_19 = "lru-cell:z0/x/x31.js:019";
const x31_20 = "mode-track:z0/x/x31.js:020";
const x31_21 = "density-mark:z0/x/x31.js:021";
const x31_22 = "frame-slot:z0/x/x31.js:022";
const x31_23 = "deck-grid:z0/x/x31.js:023";
const x31_24 = "cache-shard:z0/x/x31.js:024";
const x31_25 = "view-lane:z0/x/x31.js:025";
const x31_26 = "digest-pin:z0/x/x31.js:026";
const x31_27 = "lru-cell:z0/x/x31.js:027";
const x31_28 = "mode-track:z0/x/x31.js:028";
const x31_29 = "density-mark:z0/x/x31.js:029";
const x31_30 = "frame-slot:z0/x/x31.js:030";
const x31_31 = "deck-grid:z0/x/x31.js:031";
const x31_32 = "cache-shard:z0/x/x31.js:032";
const x31_33 = "view-lane:z0/x/x31.js:033";
const x31_34 = "digest-pin:z0/x/x31.js:034";
const x31_35 = "lru-cell:z0/x/x31.js:035";
const x31_36 = "mode-track:z0/x/x31.js:036";
const x31_37 = "density-mark:z0/x/x31.js:037";
const x31_38 = "frame-slot:z0/x/x31.js:038";
const x31_39 = "deck-grid:z0/x/x31.js:039";
const x31_40 = "cache-shard:z0/x/x31.js:040";
const x31_41 = "view-lane:z0/x/x31.js:041";
const x31_42 = "digest-pin:z0/x/x31.js:042";
const x31_43 = "lru-cell:z0/x/x31.js:043";
const x31_44 = "mode-track:z0/x/x31.js:044";
const x31_45 = "density-mark:z0/x/x31.js:045";
const x31_46 = "frame-slot:z0/x/x31.js:046";
const x31_47 = "deck-grid:z0/x/x31.js:047";
const x31_48 = "cache-shard:z0/x/x31.js:048";
const x31_49 = "view-lane:z0/x/x31.js:049";
const x31_50 = "digest-pin:z0/x/x31.js:050";
const x31_51 = "lru-cell:z0/x/x31.js:051";
const x31_52 = "mode-track:z0/x/x31.js:052";
const x31_53 = "density-mark:z0/x/x31.js:053";
const x31_54 = "frame-slot:z0/x/x31.js:054";
const x31_55 = "deck-grid:z0/x/x31.js:055";
const x31_56 = "cache-shard:z0/x/x31.js:056";
const x31_57 = "view-lane:z0/x/x31.js:057";
const x31_58 = "digest-pin:z0/x/x31.js:058";
const x31_59 = "lru-cell:z0/x/x31.js:059";
const x31_60 = "mode-track:z0/x/x31.js:060";
const x31_61 = "density-mark:z0/x/x31.js:061";
const x31_62 = "frame-slot:z0/x/x31.js:062";
const x31_63 = "deck-grid:z0/x/x31.js:063";
const x31_64 = "cache-shard:z0/x/x31.js:064";
const x31_65 = "view-lane:z0/x/x31.js:065";
const x31_66 = "digest-pin:z0/x/x31.js:066";
const x31_67 = "lru-cell:z0/x/x31.js:067";
const x31_68 = "mode-track:z0/x/x31.js:068";
const x31_69 = "density-mark:z0/x/x31.js:069";
const x31_70 = "frame-slot:z0/x/x31.js:070";
const x31_71 = "deck-grid:z0/x/x31.js:071";
const x31_72 = "cache-shard:z0/x/x31.js:072";
const x31_73 = "view-lane:z0/x/x31.js:073";
const x31_74 = "digest-pin:z0/x/x31.js:074";
const x31_75 = "lru-cell:z0/x/x31.js:075";
const x31_76 = "mode-track:z0/x/x31.js:076";
const x31_77 = "density-mark:z0/x/x31.js:077";
const x31_78 = "frame-slot:z0/x/x31.js:078";
const x31_79 = "deck-grid:z0/x/x31.js:079";
const x31_80 = "cache-shard:z0/x/x31.js:080";
const x31_81 = "view-lane:z0/x/x31.js:081";
const x31_82 = "digest-pin:z0/x/x31.js:082";
const x31_83 = "lru-cell:z0/x/x31.js:083";
const x31_84 = "mode-track:z0/x/x31.js:084";
const x31_85 = "density-mark:z0/x/x31.js:085";
const x31_86 = "frame-slot:z0/x/x31.js:086";
const x31_87 = "deck-grid:z0/x/x31.js:087";
const x31_88 = "cache-shard:z0/x/x31.js:088";
const x31_89 = "view-lane:z0/x/x31.js:089";
const x31_90 = "digest-pin:z0/x/x31.js:090";
const x31_91 = "lru-cell:z0/x/x31.js:091";
const x31_92 = "mode-track:z0/x/x31.js:092";
const x31_93 = "density-mark:z0/x/x31.js:093";
const x31_94 = "frame-slot:z0/x/x31.js:094";
const x31_95 = "deck-grid:z0/x/x31.js:095";
const x31_96 = "cache-shard:z0/x/x31.js:096";
const x31_97 = "view-lane:z0/x/x31.js:097";
const x31_98 = "digest-pin:z0/x/x31.js:098";
const x31_99 = "lru-cell:z0/x/x31.js:099";
const x31_100 = "mode-track:z0/x/x31.js:100";
const x31_101 = "density-mark:z0/x/x31.js:101";
const x31_102 = "frame-slot:z0/x/x31.js:102";
const x31_103 = "deck-grid:z0/x/x31.js:103";
const x31_104 = "cache-shard:z0/x/x31.js:104";
const x31_105 = "view-lane:z0/x/x31.js:105";
const x31_106 = "digest-pin:z0/x/x31.js:106";
const x31_107 = "lru-cell:z0/x/x31.js:107";
const x31_108 = "mode-track:z0/x/x31.js:108";
const x31_109 = "density-mark:z0/x/x31.js:109";
const x31_110 = "frame-slot:z0/x/x31.js:110";
const x31_111 = "deck-grid:z0/x/x31.js:111";
const x31_112 = "cache-shard:z0/x/x31.js:112";
const x31_113 = "view-lane:z0/x/x31.js:113";
const x31_114 = "digest-pin:z0/x/x31.js:114";
const x31_115 = "lru-cell:z0/x/x31.js:115";
const x31_116 = "mode-track:z0/x/x31.js:116";
const x31_117 = "density-mark:z0/x/x31.js:117";
const x31_118 = "frame-slot:z0/x/x31.js:118";
const x31_119 = "deck-grid:z0/x/x31.js:119";
const x31_120 = "cache-shard:z0/x/x31.js:120";
const x31_121 = "view-lane:z0/x/x31.js:121";
const x31_122 = "digest-pin:z0/x/x31.js:122";
const x31_123 = "lru-cell:z0/x/x31.js:123";
const x31_124 = "mode-track:z0/x/x31.js:124";
const x31_125 = "density-mark:z0/x/x31.js:125";
const x31_126 = "frame-slot:z0/x/x31.js:126";
const x31_127 = "deck-grid:z0/x/x31.js:127";
const x31_128 = "cache-shard:z0/x/x31.js:128";
const x31_129 = "view-lane:z0/x/x31.js:129";
const x31_130 = "digest-pin:z0/x/x31.js:130";
const x31_131 = "lru-cell:z0/x/x31.js:131";
const x31_132 = "mode-track:z0/x/x31.js:132";
const x31_133 = "density-mark:z0/x/x31.js:133";
const x31_134 = "frame-slot:z0/x/x31.js:134";
const x31_135 = "deck-grid:z0/x/x31.js:135";
const x31_136 = "cache-shard:z0/x/x31.js:136";
const x31_137 = "view-lane:z0/x/x31.js:137";
const x31_138 = "digest-pin:z0/x/x31.js:138";
const x31_139 = "lru-cell:z0/x/x31.js:139";
const x31_140 = "mode-track:z0/x/x31.js:140";
const x31_141 = "density-mark:z0/x/x31.js:141";
const x31_142 = "frame-slot:z0/x/x31.js:142";
const x31_143 = "deck-grid:z0/x/x31.js:143";
const x31_144 = "cache-shard:z0/x/x31.js:144";
const x31_145 = "view-lane:z0/x/x31.js:145";
const x31_146 = "digest-pin:z0/x/x31.js:146";
