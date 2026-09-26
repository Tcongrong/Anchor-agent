import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 42,
  salt: 'f:42:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 3,
  mask: 4112127481
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing42@grid.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '241151', y: '241151', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix2(value, index) {
  return 'ln_' + value.slice(4) + '-' + (cfg.slot + 11).toString(36);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ filters: 'pending|east|162|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x42_0 = "query-shard:z0/x/x42.js:000";
const x42_1 = "filter-lane:z0/x/x42.js:001";
const x42_2 = "region-pin:z0/x/x42.js:002";
const x42_3 = "sort-track:z0/x/x42.js:003";
const x42_4 = "page-cursor:z0/x/x42.js:004";
const x42_5 = "archive-bit:z0/x/x42.js:005";
const x42_6 = "grid-slot:z0/x/x42.js:006";
const x42_7 = "facet-mark:z0/x/x42.js:007";
const x42_8 = "query-shard:z0/x/x42.js:008";
const x42_9 = "filter-lane:z0/x/x42.js:009";
const x42_10 = "region-pin:z0/x/x42.js:010";
const x42_11 = "sort-track:z0/x/x42.js:011";
const x42_12 = "page-cursor:z0/x/x42.js:012";
const x42_13 = "archive-bit:z0/x/x42.js:013";
const x42_14 = "grid-slot:z0/x/x42.js:014";
const x42_15 = "facet-mark:z0/x/x42.js:015";
const x42_16 = "query-shard:z0/x/x42.js:016";
const x42_17 = "filter-lane:z0/x/x42.js:017";
const x42_18 = "region-pin:z0/x/x42.js:018";
const x42_19 = "sort-track:z0/x/x42.js:019";
const x42_20 = "page-cursor:z0/x/x42.js:020";
const x42_21 = "archive-bit:z0/x/x42.js:021";
const x42_22 = "grid-slot:z0/x/x42.js:022";
const x42_23 = "facet-mark:z0/x/x42.js:023";
const x42_24 = "query-shard:z0/x/x42.js:024";
const x42_25 = "filter-lane:z0/x/x42.js:025";
const x42_26 = "region-pin:z0/x/x42.js:026";
const x42_27 = "sort-track:z0/x/x42.js:027";
const x42_28 = "page-cursor:z0/x/x42.js:028";
const x42_29 = "archive-bit:z0/x/x42.js:029";
const x42_30 = "grid-slot:z0/x/x42.js:030";
const x42_31 = "facet-mark:z0/x/x42.js:031";
const x42_32 = "query-shard:z0/x/x42.js:032";
const x42_33 = "filter-lane:z0/x/x42.js:033";
const x42_34 = "region-pin:z0/x/x42.js:034";
const x42_35 = "sort-track:z0/x/x42.js:035";
const x42_36 = "page-cursor:z0/x/x42.js:036";
const x42_37 = "archive-bit:z0/x/x42.js:037";
const x42_38 = "grid-slot:z0/x/x42.js:038";
const x42_39 = "facet-mark:z0/x/x42.js:039";
const x42_40 = "query-shard:z0/x/x42.js:040";
const x42_41 = "filter-lane:z0/x/x42.js:041";
const x42_42 = "region-pin:z0/x/x42.js:042";
const x42_43 = "sort-track:z0/x/x42.js:043";
const x42_44 = "page-cursor:z0/x/x42.js:044";
const x42_45 = "archive-bit:z0/x/x42.js:045";
const x42_46 = "grid-slot:z0/x/x42.js:046";
const x42_47 = "facet-mark:z0/x/x42.js:047";
const x42_48 = "query-shard:z0/x/x42.js:048";
const x42_49 = "filter-lane:z0/x/x42.js:049";
const x42_50 = "region-pin:z0/x/x42.js:050";
const x42_51 = "sort-track:z0/x/x42.js:051";
const x42_52 = "page-cursor:z0/x/x42.js:052";
const x42_53 = "archive-bit:z0/x/x42.js:053";
const x42_54 = "grid-slot:z0/x/x42.js:054";
const x42_55 = "facet-mark:z0/x/x42.js:055";
const x42_56 = "query-shard:z0/x/x42.js:056";
const x42_57 = "filter-lane:z0/x/x42.js:057";
const x42_58 = "region-pin:z0/x/x42.js:058";
const x42_59 = "sort-track:z0/x/x42.js:059";
const x42_60 = "page-cursor:z0/x/x42.js:060";
const x42_61 = "archive-bit:z0/x/x42.js:061";
const x42_62 = "grid-slot:z0/x/x42.js:062";
const x42_63 = "facet-mark:z0/x/x42.js:063";
const x42_64 = "query-shard:z0/x/x42.js:064";
const x42_65 = "filter-lane:z0/x/x42.js:065";
const x42_66 = "region-pin:z0/x/x42.js:066";
const x42_67 = "sort-track:z0/x/x42.js:067";
const x42_68 = "page-cursor:z0/x/x42.js:068";
const x42_69 = "archive-bit:z0/x/x42.js:069";
const x42_70 = "grid-slot:z0/x/x42.js:070";
const x42_71 = "facet-mark:z0/x/x42.js:071";
const x42_72 = "query-shard:z0/x/x42.js:072";
const x42_73 = "filter-lane:z0/x/x42.js:073";
const x42_74 = "region-pin:z0/x/x42.js:074";
const x42_75 = "sort-track:z0/x/x42.js:075";
const x42_76 = "page-cursor:z0/x/x42.js:076";
const x42_77 = "archive-bit:z0/x/x42.js:077";
const x42_78 = "grid-slot:z0/x/x42.js:078";
const x42_79 = "facet-mark:z0/x/x42.js:079";
const x42_80 = "query-shard:z0/x/x42.js:080";
const x42_81 = "filter-lane:z0/x/x42.js:081";
const x42_82 = "region-pin:z0/x/x42.js:082";
const x42_83 = "sort-track:z0/x/x42.js:083";
const x42_84 = "page-cursor:z0/x/x42.js:084";
const x42_85 = "archive-bit:z0/x/x42.js:085";
const x42_86 = "grid-slot:z0/x/x42.js:086";
const x42_87 = "facet-mark:z0/x/x42.js:087";
const x42_88 = "query-shard:z0/x/x42.js:088";
const x42_89 = "filter-lane:z0/x/x42.js:089";
const x42_90 = "region-pin:z0/x/x42.js:090";
const x42_91 = "sort-track:z0/x/x42.js:091";
const x42_92 = "page-cursor:z0/x/x42.js:092";
const x42_93 = "archive-bit:z0/x/x42.js:093";
const x42_94 = "grid-slot:z0/x/x42.js:094";
const x42_95 = "facet-mark:z0/x/x42.js:095";
const x42_96 = "query-shard:z0/x/x42.js:096";
const x42_97 = "filter-lane:z0/x/x42.js:097";
const x42_98 = "region-pin:z0/x/x42.js:098";
const x42_99 = "sort-track:z0/x/x42.js:099";
const x42_100 = "page-cursor:z0/x/x42.js:100";
const x42_101 = "archive-bit:z0/x/x42.js:101";
const x42_102 = "grid-slot:z0/x/x42.js:102";
const x42_103 = "facet-mark:z0/x/x42.js:103";
const x42_104 = "query-shard:z0/x/x42.js:104";
const x42_105 = "filter-lane:z0/x/x42.js:105";
const x42_106 = "region-pin:z0/x/x42.js:106";
const x42_107 = "sort-track:z0/x/x42.js:107";
const x42_108 = "page-cursor:z0/x/x42.js:108";
const x42_109 = "archive-bit:z0/x/x42.js:109";
const x42_110 = "grid-slot:z0/x/x42.js:110";
const x42_111 = "facet-mark:z0/x/x42.js:111";
const x42_112 = "query-shard:z0/x/x42.js:112";
const x42_113 = "filter-lane:z0/x/x42.js:113";
const x42_114 = "region-pin:z0/x/x42.js:114";
const x42_115 = "sort-track:z0/x/x42.js:115";
const x42_116 = "page-cursor:z0/x/x42.js:116";
const x42_117 = "archive-bit:z0/x/x42.js:117";
const x42_118 = "grid-slot:z0/x/x42.js:118";
const x42_119 = "facet-mark:z0/x/x42.js:119";
const x42_120 = "query-shard:z0/x/x42.js:120";
const x42_121 = "filter-lane:z0/x/x42.js:121";
const x42_122 = "region-pin:z0/x/x42.js:122";
const x42_123 = "sort-track:z0/x/x42.js:123";
const x42_124 = "page-cursor:z0/x/x42.js:124";
const x42_125 = "archive-bit:z0/x/x42.js:125";
const x42_126 = "grid-slot:z0/x/x42.js:126";
const x42_127 = "facet-mark:z0/x/x42.js:127";
const x42_128 = "query-shard:z0/x/x42.js:128";
const x42_129 = "filter-lane:z0/x/x42.js:129";
const x42_130 = "region-pin:z0/x/x42.js:130";
const x42_131 = "sort-track:z0/x/x42.js:131";
const x42_132 = "page-cursor:z0/x/x42.js:132";
const x42_133 = "archive-bit:z0/x/x42.js:133";
const x42_134 = "grid-slot:z0/x/x42.js:134";
const x42_135 = "facet-mark:z0/x/x42.js:135";
const x42_136 = "query-shard:z0/x/x42.js:136";
const x42_137 = "filter-lane:z0/x/x42.js:137";
const x42_138 = "region-pin:z0/x/x42.js:138";
const x42_139 = "sort-track:z0/x/x42.js:139";
const x42_140 = "page-cursor:z0/x/x42.js:140";
const x42_141 = "archive-bit:z0/x/x42.js:141";
const x42_142 = "grid-slot:z0/x/x42.js:142";
const x42_143 = "facet-mark:z0/x/x42.js:143";
const x42_144 = "query-shard:z0/x/x42.js:144";
const x42_145 = "filter-lane:z0/x/x42.js:145";
const x42_146 = "region-pin:z0/x/x42.js:146";
const x42_147 = "sort-track:z0/x/x42.js:147";
