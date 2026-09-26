import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 19,
  salt: 'v:13:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 3,
  mask: 3189813421
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'seed19@cache.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '3019', y: '3019', n: 4 },
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
  const value = fn({ view: 'seed19@cache.dev|1', mode: 'calendar', density: 'compact' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x19_0 = "cache-shard:z0/x/x19.js:000";
const x19_1 = "view-lane:z0/x/x19.js:001";
const x19_2 = "digest-pin:z0/x/x19.js:002";
const x19_3 = "lru-cell:z0/x/x19.js:003";
const x19_4 = "mode-track:z0/x/x19.js:004";
const x19_5 = "density-mark:z0/x/x19.js:005";
const x19_6 = "frame-slot:z0/x/x19.js:006";
const x19_7 = "deck-grid:z0/x/x19.js:007";
const x19_8 = "cache-shard:z0/x/x19.js:008";
const x19_9 = "view-lane:z0/x/x19.js:009";
const x19_10 = "digest-pin:z0/x/x19.js:010";
const x19_11 = "lru-cell:z0/x/x19.js:011";
const x19_12 = "mode-track:z0/x/x19.js:012";
const x19_13 = "density-mark:z0/x/x19.js:013";
const x19_14 = "frame-slot:z0/x/x19.js:014";
const x19_15 = "deck-grid:z0/x/x19.js:015";
const x19_16 = "cache-shard:z0/x/x19.js:016";
const x19_17 = "view-lane:z0/x/x19.js:017";
const x19_18 = "digest-pin:z0/x/x19.js:018";
const x19_19 = "lru-cell:z0/x/x19.js:019";
const x19_20 = "mode-track:z0/x/x19.js:020";
const x19_21 = "density-mark:z0/x/x19.js:021";
const x19_22 = "frame-slot:z0/x/x19.js:022";
const x19_23 = "deck-grid:z0/x/x19.js:023";
const x19_24 = "cache-shard:z0/x/x19.js:024";
const x19_25 = "view-lane:z0/x/x19.js:025";
const x19_26 = "digest-pin:z0/x/x19.js:026";
const x19_27 = "lru-cell:z0/x/x19.js:027";
const x19_28 = "mode-track:z0/x/x19.js:028";
const x19_29 = "density-mark:z0/x/x19.js:029";
const x19_30 = "frame-slot:z0/x/x19.js:030";
const x19_31 = "deck-grid:z0/x/x19.js:031";
const x19_32 = "cache-shard:z0/x/x19.js:032";
const x19_33 = "view-lane:z0/x/x19.js:033";
const x19_34 = "digest-pin:z0/x/x19.js:034";
const x19_35 = "lru-cell:z0/x/x19.js:035";
const x19_36 = "mode-track:z0/x/x19.js:036";
const x19_37 = "density-mark:z0/x/x19.js:037";
const x19_38 = "frame-slot:z0/x/x19.js:038";
const x19_39 = "deck-grid:z0/x/x19.js:039";
const x19_40 = "cache-shard:z0/x/x19.js:040";
const x19_41 = "view-lane:z0/x/x19.js:041";
const x19_42 = "digest-pin:z0/x/x19.js:042";
const x19_43 = "lru-cell:z0/x/x19.js:043";
const x19_44 = "mode-track:z0/x/x19.js:044";
const x19_45 = "density-mark:z0/x/x19.js:045";
const x19_46 = "frame-slot:z0/x/x19.js:046";
const x19_47 = "deck-grid:z0/x/x19.js:047";
const x19_48 = "cache-shard:z0/x/x19.js:048";
const x19_49 = "view-lane:z0/x/x19.js:049";
const x19_50 = "digest-pin:z0/x/x19.js:050";
const x19_51 = "lru-cell:z0/x/x19.js:051";
const x19_52 = "mode-track:z0/x/x19.js:052";
const x19_53 = "density-mark:z0/x/x19.js:053";
const x19_54 = "frame-slot:z0/x/x19.js:054";
const x19_55 = "deck-grid:z0/x/x19.js:055";
const x19_56 = "cache-shard:z0/x/x19.js:056";
const x19_57 = "view-lane:z0/x/x19.js:057";
const x19_58 = "digest-pin:z0/x/x19.js:058";
const x19_59 = "lru-cell:z0/x/x19.js:059";
const x19_60 = "mode-track:z0/x/x19.js:060";
const x19_61 = "density-mark:z0/x/x19.js:061";
const x19_62 = "frame-slot:z0/x/x19.js:062";
const x19_63 = "deck-grid:z0/x/x19.js:063";
const x19_64 = "cache-shard:z0/x/x19.js:064";
const x19_65 = "view-lane:z0/x/x19.js:065";
const x19_66 = "digest-pin:z0/x/x19.js:066";
const x19_67 = "lru-cell:z0/x/x19.js:067";
const x19_68 = "mode-track:z0/x/x19.js:068";
const x19_69 = "density-mark:z0/x/x19.js:069";
const x19_70 = "frame-slot:z0/x/x19.js:070";
const x19_71 = "deck-grid:z0/x/x19.js:071";
const x19_72 = "cache-shard:z0/x/x19.js:072";
const x19_73 = "view-lane:z0/x/x19.js:073";
const x19_74 = "digest-pin:z0/x/x19.js:074";
const x19_75 = "lru-cell:z0/x/x19.js:075";
const x19_76 = "mode-track:z0/x/x19.js:076";
const x19_77 = "density-mark:z0/x/x19.js:077";
const x19_78 = "frame-slot:z0/x/x19.js:078";
const x19_79 = "deck-grid:z0/x/x19.js:079";
const x19_80 = "cache-shard:z0/x/x19.js:080";
const x19_81 = "view-lane:z0/x/x19.js:081";
const x19_82 = "digest-pin:z0/x/x19.js:082";
const x19_83 = "lru-cell:z0/x/x19.js:083";
const x19_84 = "mode-track:z0/x/x19.js:084";
const x19_85 = "density-mark:z0/x/x19.js:085";
const x19_86 = "frame-slot:z0/x/x19.js:086";
const x19_87 = "deck-grid:z0/x/x19.js:087";
const x19_88 = "cache-shard:z0/x/x19.js:088";
const x19_89 = "view-lane:z0/x/x19.js:089";
const x19_90 = "digest-pin:z0/x/x19.js:090";
const x19_91 = "lru-cell:z0/x/x19.js:091";
const x19_92 = "mode-track:z0/x/x19.js:092";
const x19_93 = "density-mark:z0/x/x19.js:093";
const x19_94 = "frame-slot:z0/x/x19.js:094";
const x19_95 = "deck-grid:z0/x/x19.js:095";
const x19_96 = "cache-shard:z0/x/x19.js:096";
const x19_97 = "view-lane:z0/x/x19.js:097";
const x19_98 = "digest-pin:z0/x/x19.js:098";
const x19_99 = "lru-cell:z0/x/x19.js:099";
const x19_100 = "mode-track:z0/x/x19.js:100";
const x19_101 = "density-mark:z0/x/x19.js:101";
const x19_102 = "frame-slot:z0/x/x19.js:102";
const x19_103 = "deck-grid:z0/x/x19.js:103";
const x19_104 = "cache-shard:z0/x/x19.js:104";
const x19_105 = "view-lane:z0/x/x19.js:105";
const x19_106 = "digest-pin:z0/x/x19.js:106";
const x19_107 = "lru-cell:z0/x/x19.js:107";
const x19_108 = "mode-track:z0/x/x19.js:108";
const x19_109 = "density-mark:z0/x/x19.js:109";
const x19_110 = "frame-slot:z0/x/x19.js:110";
const x19_111 = "deck-grid:z0/x/x19.js:111";
const x19_112 = "cache-shard:z0/x/x19.js:112";
const x19_113 = "view-lane:z0/x/x19.js:113";
const x19_114 = "digest-pin:z0/x/x19.js:114";
const x19_115 = "lru-cell:z0/x/x19.js:115";
const x19_116 = "mode-track:z0/x/x19.js:116";
const x19_117 = "density-mark:z0/x/x19.js:117";
const x19_118 = "frame-slot:z0/x/x19.js:118";
const x19_119 = "deck-grid:z0/x/x19.js:119";
const x19_120 = "cache-shard:z0/x/x19.js:120";
const x19_121 = "view-lane:z0/x/x19.js:121";
const x19_122 = "digest-pin:z0/x/x19.js:122";
const x19_123 = "lru-cell:z0/x/x19.js:123";
const x19_124 = "mode-track:z0/x/x19.js:124";
const x19_125 = "density-mark:z0/x/x19.js:125";
const x19_126 = "frame-slot:z0/x/x19.js:126";
const x19_127 = "deck-grid:z0/x/x19.js:127";
const x19_128 = "cache-shard:z0/x/x19.js:128";
const x19_129 = "view-lane:z0/x/x19.js:129";
const x19_130 = "digest-pin:z0/x/x19.js:130";
const x19_131 = "lru-cell:z0/x/x19.js:131";
const x19_132 = "mode-track:z0/x/x19.js:132";
const x19_133 = "density-mark:z0/x/x19.js:133";
const x19_134 = "frame-slot:z0/x/x19.js:134";
const x19_135 = "deck-grid:z0/x/x19.js:135";
const x19_136 = "cache-shard:z0/x/x19.js:136";
const x19_137 = "view-lane:z0/x/x19.js:137";
const x19_138 = "digest-pin:z0/x/x19.js:138";
const x19_139 = "lru-cell:z0/x/x19.js:139";
const x19_140 = "mode-track:z0/x/x19.js:140";
const x19_141 = "density-mark:z0/x/x19.js:141";
const x19_142 = "frame-slot:z0/x/x19.js:142";
const x19_143 = "deck-grid:z0/x/x19.js:143";
const x19_144 = "cache-shard:z0/x/x19.js:144";
const x19_145 = "view-lane:z0/x/x19.js:145";
const x19_146 = "digest-pin:z0/x/x19.js:146";
