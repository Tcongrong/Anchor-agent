import { ref } from "../m8/q2/s5.js";

const cfg = {
  slot: 6,
  salt: 'f:06:listing',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 9,
  mask: 3041720597
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'listing6@grid.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '205979', y: '205979', n: 6 },
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
  const value = fn({ filters: 'pending|east|126|1', order: 'oldest' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x06_0 = "query-shard:z0/x/x06.js:000";
const x06_1 = "filter-lane:z0/x/x06.js:001";
const x06_2 = "region-pin:z0/x/x06.js:002";
const x06_3 = "sort-track:z0/x/x06.js:003";
const x06_4 = "page-cursor:z0/x/x06.js:004";
const x06_5 = "archive-bit:z0/x/x06.js:005";
const x06_6 = "grid-slot:z0/x/x06.js:006";
const x06_7 = "facet-mark:z0/x/x06.js:007";
const x06_8 = "query-shard:z0/x/x06.js:008";
const x06_9 = "filter-lane:z0/x/x06.js:009";
const x06_10 = "region-pin:z0/x/x06.js:010";
const x06_11 = "sort-track:z0/x/x06.js:011";
const x06_12 = "page-cursor:z0/x/x06.js:012";
const x06_13 = "archive-bit:z0/x/x06.js:013";
const x06_14 = "grid-slot:z0/x/x06.js:014";
const x06_15 = "facet-mark:z0/x/x06.js:015";
const x06_16 = "query-shard:z0/x/x06.js:016";
const x06_17 = "filter-lane:z0/x/x06.js:017";
const x06_18 = "region-pin:z0/x/x06.js:018";
const x06_19 = "sort-track:z0/x/x06.js:019";
const x06_20 = "page-cursor:z0/x/x06.js:020";
const x06_21 = "archive-bit:z0/x/x06.js:021";
const x06_22 = "grid-slot:z0/x/x06.js:022";
const x06_23 = "facet-mark:z0/x/x06.js:023";
const x06_24 = "query-shard:z0/x/x06.js:024";
const x06_25 = "filter-lane:z0/x/x06.js:025";
const x06_26 = "region-pin:z0/x/x06.js:026";
const x06_27 = "sort-track:z0/x/x06.js:027";
const x06_28 = "page-cursor:z0/x/x06.js:028";
const x06_29 = "archive-bit:z0/x/x06.js:029";
const x06_30 = "grid-slot:z0/x/x06.js:030";
const x06_31 = "facet-mark:z0/x/x06.js:031";
const x06_32 = "query-shard:z0/x/x06.js:032";
const x06_33 = "filter-lane:z0/x/x06.js:033";
const x06_34 = "region-pin:z0/x/x06.js:034";
const x06_35 = "sort-track:z0/x/x06.js:035";
const x06_36 = "page-cursor:z0/x/x06.js:036";
const x06_37 = "archive-bit:z0/x/x06.js:037";
const x06_38 = "grid-slot:z0/x/x06.js:038";
const x06_39 = "facet-mark:z0/x/x06.js:039";
const x06_40 = "query-shard:z0/x/x06.js:040";
const x06_41 = "filter-lane:z0/x/x06.js:041";
const x06_42 = "region-pin:z0/x/x06.js:042";
const x06_43 = "sort-track:z0/x/x06.js:043";
const x06_44 = "page-cursor:z0/x/x06.js:044";
const x06_45 = "archive-bit:z0/x/x06.js:045";
const x06_46 = "grid-slot:z0/x/x06.js:046";
const x06_47 = "facet-mark:z0/x/x06.js:047";
const x06_48 = "query-shard:z0/x/x06.js:048";
const x06_49 = "filter-lane:z0/x/x06.js:049";
const x06_50 = "region-pin:z0/x/x06.js:050";
const x06_51 = "sort-track:z0/x/x06.js:051";
const x06_52 = "page-cursor:z0/x/x06.js:052";
const x06_53 = "archive-bit:z0/x/x06.js:053";
const x06_54 = "grid-slot:z0/x/x06.js:054";
const x06_55 = "facet-mark:z0/x/x06.js:055";
const x06_56 = "query-shard:z0/x/x06.js:056";
const x06_57 = "filter-lane:z0/x/x06.js:057";
const x06_58 = "region-pin:z0/x/x06.js:058";
const x06_59 = "sort-track:z0/x/x06.js:059";
const x06_60 = "page-cursor:z0/x/x06.js:060";
const x06_61 = "archive-bit:z0/x/x06.js:061";
const x06_62 = "grid-slot:z0/x/x06.js:062";
const x06_63 = "facet-mark:z0/x/x06.js:063";
const x06_64 = "query-shard:z0/x/x06.js:064";
const x06_65 = "filter-lane:z0/x/x06.js:065";
const x06_66 = "region-pin:z0/x/x06.js:066";
const x06_67 = "sort-track:z0/x/x06.js:067";
const x06_68 = "page-cursor:z0/x/x06.js:068";
const x06_69 = "archive-bit:z0/x/x06.js:069";
const x06_70 = "grid-slot:z0/x/x06.js:070";
const x06_71 = "facet-mark:z0/x/x06.js:071";
const x06_72 = "query-shard:z0/x/x06.js:072";
const x06_73 = "filter-lane:z0/x/x06.js:073";
const x06_74 = "region-pin:z0/x/x06.js:074";
const x06_75 = "sort-track:z0/x/x06.js:075";
const x06_76 = "page-cursor:z0/x/x06.js:076";
const x06_77 = "archive-bit:z0/x/x06.js:077";
const x06_78 = "grid-slot:z0/x/x06.js:078";
const x06_79 = "facet-mark:z0/x/x06.js:079";
const x06_80 = "query-shard:z0/x/x06.js:080";
const x06_81 = "filter-lane:z0/x/x06.js:081";
const x06_82 = "region-pin:z0/x/x06.js:082";
const x06_83 = "sort-track:z0/x/x06.js:083";
const x06_84 = "page-cursor:z0/x/x06.js:084";
const x06_85 = "archive-bit:z0/x/x06.js:085";
const x06_86 = "grid-slot:z0/x/x06.js:086";
const x06_87 = "facet-mark:z0/x/x06.js:087";
const x06_88 = "query-shard:z0/x/x06.js:088";
const x06_89 = "filter-lane:z0/x/x06.js:089";
const x06_90 = "region-pin:z0/x/x06.js:090";
const x06_91 = "sort-track:z0/x/x06.js:091";
const x06_92 = "page-cursor:z0/x/x06.js:092";
const x06_93 = "archive-bit:z0/x/x06.js:093";
const x06_94 = "grid-slot:z0/x/x06.js:094";
const x06_95 = "facet-mark:z0/x/x06.js:095";
const x06_96 = "query-shard:z0/x/x06.js:096";
const x06_97 = "filter-lane:z0/x/x06.js:097";
const x06_98 = "region-pin:z0/x/x06.js:098";
const x06_99 = "sort-track:z0/x/x06.js:099";
const x06_100 = "page-cursor:z0/x/x06.js:100";
const x06_101 = "archive-bit:z0/x/x06.js:101";
const x06_102 = "grid-slot:z0/x/x06.js:102";
const x06_103 = "facet-mark:z0/x/x06.js:103";
const x06_104 = "query-shard:z0/x/x06.js:104";
const x06_105 = "filter-lane:z0/x/x06.js:105";
const x06_106 = "region-pin:z0/x/x06.js:106";
const x06_107 = "sort-track:z0/x/x06.js:107";
const x06_108 = "page-cursor:z0/x/x06.js:108";
const x06_109 = "archive-bit:z0/x/x06.js:109";
const x06_110 = "grid-slot:z0/x/x06.js:110";
const x06_111 = "facet-mark:z0/x/x06.js:111";
const x06_112 = "query-shard:z0/x/x06.js:112";
const x06_113 = "filter-lane:z0/x/x06.js:113";
const x06_114 = "region-pin:z0/x/x06.js:114";
const x06_115 = "sort-track:z0/x/x06.js:115";
const x06_116 = "page-cursor:z0/x/x06.js:116";
const x06_117 = "archive-bit:z0/x/x06.js:117";
const x06_118 = "grid-slot:z0/x/x06.js:118";
const x06_119 = "facet-mark:z0/x/x06.js:119";
const x06_120 = "query-shard:z0/x/x06.js:120";
const x06_121 = "filter-lane:z0/x/x06.js:121";
const x06_122 = "region-pin:z0/x/x06.js:122";
const x06_123 = "sort-track:z0/x/x06.js:123";
const x06_124 = "page-cursor:z0/x/x06.js:124";
const x06_125 = "archive-bit:z0/x/x06.js:125";
const x06_126 = "grid-slot:z0/x/x06.js:126";
const x06_127 = "facet-mark:z0/x/x06.js:127";
const x06_128 = "query-shard:z0/x/x06.js:128";
const x06_129 = "filter-lane:z0/x/x06.js:129";
const x06_130 = "region-pin:z0/x/x06.js:130";
const x06_131 = "sort-track:z0/x/x06.js:131";
const x06_132 = "page-cursor:z0/x/x06.js:132";
const x06_133 = "archive-bit:z0/x/x06.js:133";
const x06_134 = "grid-slot:z0/x/x06.js:134";
const x06_135 = "facet-mark:z0/x/x06.js:135";
const x06_136 = "query-shard:z0/x/x06.js:136";
const x06_137 = "filter-lane:z0/x/x06.js:137";
const x06_138 = "region-pin:z0/x/x06.js:138";
const x06_139 = "sort-track:z0/x/x06.js:139";
const x06_140 = "page-cursor:z0/x/x06.js:140";
const x06_141 = "archive-bit:z0/x/x06.js:141";
const x06_142 = "grid-slot:z0/x/x06.js:142";
const x06_143 = "facet-mark:z0/x/x06.js:143";
const x06_144 = "query-shard:z0/x/x06.js:144";
const x06_145 = "filter-lane:z0/x/x06.js:145";
const x06_146 = "region-pin:z0/x/x06.js:146";
const x06_147 = "sort-track:z0/x/x06.js:147";
