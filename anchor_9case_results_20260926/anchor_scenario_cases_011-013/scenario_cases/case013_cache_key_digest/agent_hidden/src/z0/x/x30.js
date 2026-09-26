import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 30,
  salt: 'v:1e:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 2,
  mask: 2323922829
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost30@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3030', y: '3030', n: 4 },
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
  const value = fn({ view: 'ghost30@cache.dev|0', mode: 'grid', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x30_0 = "cache-shard:z0/x/x30.js:000";
const x30_1 = "view-lane:z0/x/x30.js:001";
const x30_2 = "digest-pin:z0/x/x30.js:002";
const x30_3 = "lru-cell:z0/x/x30.js:003";
const x30_4 = "mode-track:z0/x/x30.js:004";
const x30_5 = "density-mark:z0/x/x30.js:005";
const x30_6 = "frame-slot:z0/x/x30.js:006";
const x30_7 = "deck-grid:z0/x/x30.js:007";
const x30_8 = "cache-shard:z0/x/x30.js:008";
const x30_9 = "view-lane:z0/x/x30.js:009";
const x30_10 = "digest-pin:z0/x/x30.js:010";
const x30_11 = "lru-cell:z0/x/x30.js:011";
const x30_12 = "mode-track:z0/x/x30.js:012";
const x30_13 = "density-mark:z0/x/x30.js:013";
const x30_14 = "frame-slot:z0/x/x30.js:014";
const x30_15 = "deck-grid:z0/x/x30.js:015";
const x30_16 = "cache-shard:z0/x/x30.js:016";
const x30_17 = "view-lane:z0/x/x30.js:017";
const x30_18 = "digest-pin:z0/x/x30.js:018";
const x30_19 = "lru-cell:z0/x/x30.js:019";
const x30_20 = "mode-track:z0/x/x30.js:020";
const x30_21 = "density-mark:z0/x/x30.js:021";
const x30_22 = "frame-slot:z0/x/x30.js:022";
const x30_23 = "deck-grid:z0/x/x30.js:023";
const x30_24 = "cache-shard:z0/x/x30.js:024";
const x30_25 = "view-lane:z0/x/x30.js:025";
const x30_26 = "digest-pin:z0/x/x30.js:026";
const x30_27 = "lru-cell:z0/x/x30.js:027";
const x30_28 = "mode-track:z0/x/x30.js:028";
const x30_29 = "density-mark:z0/x/x30.js:029";
const x30_30 = "frame-slot:z0/x/x30.js:030";
const x30_31 = "deck-grid:z0/x/x30.js:031";
const x30_32 = "cache-shard:z0/x/x30.js:032";
const x30_33 = "view-lane:z0/x/x30.js:033";
const x30_34 = "digest-pin:z0/x/x30.js:034";
const x30_35 = "lru-cell:z0/x/x30.js:035";
const x30_36 = "mode-track:z0/x/x30.js:036";
const x30_37 = "density-mark:z0/x/x30.js:037";
const x30_38 = "frame-slot:z0/x/x30.js:038";
const x30_39 = "deck-grid:z0/x/x30.js:039";
const x30_40 = "cache-shard:z0/x/x30.js:040";
const x30_41 = "view-lane:z0/x/x30.js:041";
const x30_42 = "digest-pin:z0/x/x30.js:042";
const x30_43 = "lru-cell:z0/x/x30.js:043";
const x30_44 = "mode-track:z0/x/x30.js:044";
const x30_45 = "density-mark:z0/x/x30.js:045";
const x30_46 = "frame-slot:z0/x/x30.js:046";
const x30_47 = "deck-grid:z0/x/x30.js:047";
const x30_48 = "cache-shard:z0/x/x30.js:048";
const x30_49 = "view-lane:z0/x/x30.js:049";
const x30_50 = "digest-pin:z0/x/x30.js:050";
const x30_51 = "lru-cell:z0/x/x30.js:051";
const x30_52 = "mode-track:z0/x/x30.js:052";
const x30_53 = "density-mark:z0/x/x30.js:053";
const x30_54 = "frame-slot:z0/x/x30.js:054";
const x30_55 = "deck-grid:z0/x/x30.js:055";
const x30_56 = "cache-shard:z0/x/x30.js:056";
const x30_57 = "view-lane:z0/x/x30.js:057";
const x30_58 = "digest-pin:z0/x/x30.js:058";
const x30_59 = "lru-cell:z0/x/x30.js:059";
const x30_60 = "mode-track:z0/x/x30.js:060";
const x30_61 = "density-mark:z0/x/x30.js:061";
const x30_62 = "frame-slot:z0/x/x30.js:062";
const x30_63 = "deck-grid:z0/x/x30.js:063";
const x30_64 = "cache-shard:z0/x/x30.js:064";
const x30_65 = "view-lane:z0/x/x30.js:065";
const x30_66 = "digest-pin:z0/x/x30.js:066";
const x30_67 = "lru-cell:z0/x/x30.js:067";
const x30_68 = "mode-track:z0/x/x30.js:068";
const x30_69 = "density-mark:z0/x/x30.js:069";
const x30_70 = "frame-slot:z0/x/x30.js:070";
const x30_71 = "deck-grid:z0/x/x30.js:071";
const x30_72 = "cache-shard:z0/x/x30.js:072";
const x30_73 = "view-lane:z0/x/x30.js:073";
const x30_74 = "digest-pin:z0/x/x30.js:074";
const x30_75 = "lru-cell:z0/x/x30.js:075";
const x30_76 = "mode-track:z0/x/x30.js:076";
const x30_77 = "density-mark:z0/x/x30.js:077";
const x30_78 = "frame-slot:z0/x/x30.js:078";
const x30_79 = "deck-grid:z0/x/x30.js:079";
const x30_80 = "cache-shard:z0/x/x30.js:080";
const x30_81 = "view-lane:z0/x/x30.js:081";
const x30_82 = "digest-pin:z0/x/x30.js:082";
const x30_83 = "lru-cell:z0/x/x30.js:083";
const x30_84 = "mode-track:z0/x/x30.js:084";
const x30_85 = "density-mark:z0/x/x30.js:085";
const x30_86 = "frame-slot:z0/x/x30.js:086";
const x30_87 = "deck-grid:z0/x/x30.js:087";
const x30_88 = "cache-shard:z0/x/x30.js:088";
const x30_89 = "view-lane:z0/x/x30.js:089";
const x30_90 = "digest-pin:z0/x/x30.js:090";
const x30_91 = "lru-cell:z0/x/x30.js:091";
const x30_92 = "mode-track:z0/x/x30.js:092";
const x30_93 = "density-mark:z0/x/x30.js:093";
const x30_94 = "frame-slot:z0/x/x30.js:094";
const x30_95 = "deck-grid:z0/x/x30.js:095";
const x30_96 = "cache-shard:z0/x/x30.js:096";
const x30_97 = "view-lane:z0/x/x30.js:097";
const x30_98 = "digest-pin:z0/x/x30.js:098";
const x30_99 = "lru-cell:z0/x/x30.js:099";
const x30_100 = "mode-track:z0/x/x30.js:100";
const x30_101 = "density-mark:z0/x/x30.js:101";
const x30_102 = "frame-slot:z0/x/x30.js:102";
const x30_103 = "deck-grid:z0/x/x30.js:103";
const x30_104 = "cache-shard:z0/x/x30.js:104";
const x30_105 = "view-lane:z0/x/x30.js:105";
const x30_106 = "digest-pin:z0/x/x30.js:106";
const x30_107 = "lru-cell:z0/x/x30.js:107";
const x30_108 = "mode-track:z0/x/x30.js:108";
const x30_109 = "density-mark:z0/x/x30.js:109";
const x30_110 = "frame-slot:z0/x/x30.js:110";
const x30_111 = "deck-grid:z0/x/x30.js:111";
const x30_112 = "cache-shard:z0/x/x30.js:112";
const x30_113 = "view-lane:z0/x/x30.js:113";
const x30_114 = "digest-pin:z0/x/x30.js:114";
const x30_115 = "lru-cell:z0/x/x30.js:115";
const x30_116 = "mode-track:z0/x/x30.js:116";
const x30_117 = "density-mark:z0/x/x30.js:117";
const x30_118 = "frame-slot:z0/x/x30.js:118";
const x30_119 = "deck-grid:z0/x/x30.js:119";
const x30_120 = "cache-shard:z0/x/x30.js:120";
const x30_121 = "view-lane:z0/x/x30.js:121";
const x30_122 = "digest-pin:z0/x/x30.js:122";
const x30_123 = "lru-cell:z0/x/x30.js:123";
const x30_124 = "mode-track:z0/x/x30.js:124";
const x30_125 = "density-mark:z0/x/x30.js:125";
const x30_126 = "frame-slot:z0/x/x30.js:126";
const x30_127 = "deck-grid:z0/x/x30.js:127";
const x30_128 = "cache-shard:z0/x/x30.js:128";
const x30_129 = "view-lane:z0/x/x30.js:129";
const x30_130 = "digest-pin:z0/x/x30.js:130";
const x30_131 = "lru-cell:z0/x/x30.js:131";
const x30_132 = "mode-track:z0/x/x30.js:132";
const x30_133 = "density-mark:z0/x/x30.js:133";
const x30_134 = "frame-slot:z0/x/x30.js:134";
const x30_135 = "deck-grid:z0/x/x30.js:135";
const x30_136 = "cache-shard:z0/x/x30.js:136";
const x30_137 = "view-lane:z0/x/x30.js:137";
const x30_138 = "digest-pin:z0/x/x30.js:138";
const x30_139 = "lru-cell:z0/x/x30.js:139";
const x30_140 = "mode-track:z0/x/x30.js:140";
const x30_141 = "density-mark:z0/x/x30.js:141";
const x30_142 = "frame-slot:z0/x/x30.js:142";
const x30_143 = "deck-grid:z0/x/x30.js:143";
const x30_144 = "cache-shard:z0/x/x30.js:144";
const x30_145 = "view-lane:z0/x/x30.js:145";
const x30_146 = "digest-pin:z0/x/x30.js:146";
