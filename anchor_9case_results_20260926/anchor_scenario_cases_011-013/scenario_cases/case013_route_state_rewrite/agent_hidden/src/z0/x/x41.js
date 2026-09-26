import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 41,
  salt: 'r:15:trail',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 9,
  mask: 2858865155
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/41/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '5', y: '5', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(2, 11) + '=' + (cfg.slot * 3 + 1).toString(36) + 'q1';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x41_0 = "route-echo:x\\x41.js:000";
const x41_1 = "path-lane:x\\x41.js:001";
const x41_2 = "view-pin:x\\x41.js:002";
const x41_3 = "scroll-mark:x\\x41.js:003";
const x41_4 = "policy-slot:x\\x41.js:004";
const x41_5 = "crumb-track:x\\x41.js:005";
const x41_6 = "rewrite-shard:x\\x41.js:006";
const x41_7 = "trail-cell:x\\x41.js:007";
const x41_8 = "route-echo:x\\x41.js:008";
const x41_9 = "path-lane:x\\x41.js:009";
const x41_10 = "view-pin:x\\x41.js:010";
const x41_11 = "scroll-mark:x\\x41.js:011";
const x41_12 = "policy-slot:x\\x41.js:012";
const x41_13 = "crumb-track:x\\x41.js:013";
const x41_14 = "rewrite-shard:x\\x41.js:014";
const x41_15 = "trail-cell:x\\x41.js:015";
const x41_16 = "route-echo:x\\x41.js:016";
const x41_17 = "path-lane:x\\x41.js:017";
const x41_18 = "view-pin:x\\x41.js:018";
const x41_19 = "scroll-mark:x\\x41.js:019";
const x41_20 = "policy-slot:x\\x41.js:020";
const x41_21 = "crumb-track:x\\x41.js:021";
const x41_22 = "rewrite-shard:x\\x41.js:022";
const x41_23 = "trail-cell:x\\x41.js:023";
const x41_24 = "route-echo:x\\x41.js:024";
const x41_25 = "path-lane:x\\x41.js:025";
const x41_26 = "view-pin:x\\x41.js:026";
const x41_27 = "scroll-mark:x\\x41.js:027";
const x41_28 = "policy-slot:x\\x41.js:028";
const x41_29 = "crumb-track:x\\x41.js:029";
const x41_30 = "rewrite-shard:x\\x41.js:030";
const x41_31 = "trail-cell:x\\x41.js:031";
const x41_32 = "route-echo:x\\x41.js:032";
const x41_33 = "path-lane:x\\x41.js:033";
const x41_34 = "view-pin:x\\x41.js:034";
const x41_35 = "scroll-mark:x\\x41.js:035";
const x41_36 = "policy-slot:x\\x41.js:036";
const x41_37 = "crumb-track:x\\x41.js:037";
const x41_38 = "rewrite-shard:x\\x41.js:038";
const x41_39 = "trail-cell:x\\x41.js:039";
const x41_40 = "route-echo:x\\x41.js:040";
const x41_41 = "path-lane:x\\x41.js:041";
const x41_42 = "view-pin:x\\x41.js:042";
const x41_43 = "scroll-mark:x\\x41.js:043";
const x41_44 = "policy-slot:x\\x41.js:044";
const x41_45 = "crumb-track:x\\x41.js:045";
const x41_46 = "rewrite-shard:x\\x41.js:046";
const x41_47 = "trail-cell:x\\x41.js:047";
const x41_48 = "route-echo:x\\x41.js:048";
const x41_49 = "path-lane:x\\x41.js:049";
const x41_50 = "view-pin:x\\x41.js:050";
const x41_51 = "scroll-mark:x\\x41.js:051";
const x41_52 = "policy-slot:x\\x41.js:052";
const x41_53 = "crumb-track:x\\x41.js:053";
const x41_54 = "rewrite-shard:x\\x41.js:054";
const x41_55 = "trail-cell:x\\x41.js:055";
const x41_56 = "route-echo:x\\x41.js:056";
const x41_57 = "path-lane:x\\x41.js:057";
const x41_58 = "view-pin:x\\x41.js:058";
const x41_59 = "scroll-mark:x\\x41.js:059";
const x41_60 = "policy-slot:x\\x41.js:060";
const x41_61 = "crumb-track:x\\x41.js:061";
const x41_62 = "rewrite-shard:x\\x41.js:062";
const x41_63 = "trail-cell:x\\x41.js:063";
const x41_64 = "route-echo:x\\x41.js:064";
const x41_65 = "path-lane:x\\x41.js:065";
const x41_66 = "view-pin:x\\x41.js:066";
const x41_67 = "scroll-mark:x\\x41.js:067";
const x41_68 = "policy-slot:x\\x41.js:068";
const x41_69 = "crumb-track:x\\x41.js:069";
const x41_70 = "rewrite-shard:x\\x41.js:070";
const x41_71 = "trail-cell:x\\x41.js:071";
const x41_72 = "route-echo:x\\x41.js:072";
const x41_73 = "path-lane:x\\x41.js:073";
const x41_74 = "view-pin:x\\x41.js:074";
const x41_75 = "scroll-mark:x\\x41.js:075";
const x41_76 = "policy-slot:x\\x41.js:076";
const x41_77 = "crumb-track:x\\x41.js:077";
const x41_78 = "rewrite-shard:x\\x41.js:078";
const x41_79 = "trail-cell:x\\x41.js:079";
const x41_80 = "route-echo:x\\x41.js:080";
const x41_81 = "path-lane:x\\x41.js:081";
const x41_82 = "view-pin:x\\x41.js:082";
const x41_83 = "scroll-mark:x\\x41.js:083";
const x41_84 = "policy-slot:x\\x41.js:084";
const x41_85 = "crumb-track:x\\x41.js:085";
const x41_86 = "rewrite-shard:x\\x41.js:086";
const x41_87 = "trail-cell:x\\x41.js:087";
const x41_88 = "route-echo:x\\x41.js:088";
const x41_89 = "path-lane:x\\x41.js:089";
const x41_90 = "view-pin:x\\x41.js:090";
const x41_91 = "scroll-mark:x\\x41.js:091";
const x41_92 = "policy-slot:x\\x41.js:092";
const x41_93 = "crumb-track:x\\x41.js:093";
const x41_94 = "rewrite-shard:x\\x41.js:094";
const x41_95 = "trail-cell:x\\x41.js:095";
const x41_96 = "route-echo:x\\x41.js:096";
const x41_97 = "path-lane:x\\x41.js:097";
const x41_98 = "view-pin:x\\x41.js:098";
const x41_99 = "scroll-mark:x\\x41.js:099";
const x41_100 = "policy-slot:x\\x41.js:100";
const x41_101 = "crumb-track:x\\x41.js:101";
const x41_102 = "rewrite-shard:x\\x41.js:102";
const x41_103 = "trail-cell:x\\x41.js:103";
const x41_104 = "route-echo:x\\x41.js:104";
const x41_105 = "path-lane:x\\x41.js:105";
const x41_106 = "view-pin:x\\x41.js:106";
const x41_107 = "scroll-mark:x\\x41.js:107";
const x41_108 = "policy-slot:x\\x41.js:108";
const x41_109 = "crumb-track:x\\x41.js:109";
const x41_110 = "rewrite-shard:x\\x41.js:110";
const x41_111 = "trail-cell:x\\x41.js:111";
const x41_112 = "route-echo:x\\x41.js:112";
const x41_113 = "path-lane:x\\x41.js:113";
const x41_114 = "view-pin:x\\x41.js:114";
const x41_115 = "scroll-mark:x\\x41.js:115";
const x41_116 = "policy-slot:x\\x41.js:116";
const x41_117 = "crumb-track:x\\x41.js:117";
const x41_118 = "rewrite-shard:x\\x41.js:118";
const x41_119 = "trail-cell:x\\x41.js:119";
const x41_120 = "route-echo:x\\x41.js:120";
const x41_121 = "path-lane:x\\x41.js:121";
const x41_122 = "view-pin:x\\x41.js:122";
const x41_123 = "scroll-mark:x\\x41.js:123";
const x41_124 = "policy-slot:x\\x41.js:124";
const x41_125 = "crumb-track:x\\x41.js:125";
const x41_126 = "rewrite-shard:x\\x41.js:126";
const x41_127 = "trail-cell:x\\x41.js:127";
const x41_128 = "route-echo:x\\x41.js:128";
const x41_129 = "path-lane:x\\x41.js:129";
const x41_130 = "view-pin:x\\x41.js:130";
const x41_131 = "scroll-mark:x\\x41.js:131";
const x41_132 = "policy-slot:x\\x41.js:132";
const x41_133 = "crumb-track:x\\x41.js:133";
const x41_134 = "rewrite-shard:x\\x41.js:134";
const x41_135 = "trail-cell:x\\x41.js:135";
const x41_136 = "route-echo:x\\x41.js:136";
const x41_137 = "path-lane:x\\x41.js:137";
const x41_138 = "view-pin:x\\x41.js:138";
const x41_139 = "scroll-mark:x\\x41.js:139";
const x41_140 = "policy-slot:x\\x41.js:140";
const x41_141 = "crumb-track:x\\x41.js:141";
const x41_142 = "rewrite-shard:x\\x41.js:142";
const x41_143 = "trail-cell:x\\x41.js:143";
const x41_144 = "route-echo:x\\x41.js:144";
const x41_145 = "path-lane:x\\x41.js:145";
const x41_146 = "view-pin:x\\x41.js:146";
const x41_147 = "scroll-mark:x\\x41.js:147";
const x41_148 = "policy-slot:x\\x41.js:148";
