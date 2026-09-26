import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 25,
  salt: 'r:0p:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2061',
  shift: 5,
  mask: 3337565939
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/25/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '7', y: '7', n: 1 }
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
const x25_0 = "route-echo:x\\x25.js:000";
const x25_1 = "path-lane:x\\x25.js:001";
const x25_2 = "view-pin:x\\x25.js:002";
const x25_3 = "scroll-mark:x\\x25.js:003";
const x25_4 = "policy-slot:x\\x25.js:004";
const x25_5 = "crumb-track:x\\x25.js:005";
const x25_6 = "rewrite-shard:x\\x25.js:006";
const x25_7 = "trail-cell:x\\x25.js:007";
const x25_8 = "route-echo:x\\x25.js:008";
const x25_9 = "path-lane:x\\x25.js:009";
const x25_10 = "view-pin:x\\x25.js:010";
const x25_11 = "scroll-mark:x\\x25.js:011";
const x25_12 = "policy-slot:x\\x25.js:012";
const x25_13 = "crumb-track:x\\x25.js:013";
const x25_14 = "rewrite-shard:x\\x25.js:014";
const x25_15 = "trail-cell:x\\x25.js:015";
const x25_16 = "route-echo:x\\x25.js:016";
const x25_17 = "path-lane:x\\x25.js:017";
const x25_18 = "view-pin:x\\x25.js:018";
const x25_19 = "scroll-mark:x\\x25.js:019";
const x25_20 = "policy-slot:x\\x25.js:020";
const x25_21 = "crumb-track:x\\x25.js:021";
const x25_22 = "rewrite-shard:x\\x25.js:022";
const x25_23 = "trail-cell:x\\x25.js:023";
const x25_24 = "route-echo:x\\x25.js:024";
const x25_25 = "path-lane:x\\x25.js:025";
const x25_26 = "view-pin:x\\x25.js:026";
const x25_27 = "scroll-mark:x\\x25.js:027";
const x25_28 = "policy-slot:x\\x25.js:028";
const x25_29 = "crumb-track:x\\x25.js:029";
const x25_30 = "rewrite-shard:x\\x25.js:030";
const x25_31 = "trail-cell:x\\x25.js:031";
const x25_32 = "route-echo:x\\x25.js:032";
const x25_33 = "path-lane:x\\x25.js:033";
const x25_34 = "view-pin:x\\x25.js:034";
const x25_35 = "scroll-mark:x\\x25.js:035";
const x25_36 = "policy-slot:x\\x25.js:036";
const x25_37 = "crumb-track:x\\x25.js:037";
const x25_38 = "rewrite-shard:x\\x25.js:038";
const x25_39 = "trail-cell:x\\x25.js:039";
const x25_40 = "route-echo:x\\x25.js:040";
const x25_41 = "path-lane:x\\x25.js:041";
const x25_42 = "view-pin:x\\x25.js:042";
const x25_43 = "scroll-mark:x\\x25.js:043";
const x25_44 = "policy-slot:x\\x25.js:044";
const x25_45 = "crumb-track:x\\x25.js:045";
const x25_46 = "rewrite-shard:x\\x25.js:046";
const x25_47 = "trail-cell:x\\x25.js:047";
const x25_48 = "route-echo:x\\x25.js:048";
const x25_49 = "path-lane:x\\x25.js:049";
const x25_50 = "view-pin:x\\x25.js:050";
const x25_51 = "scroll-mark:x\\x25.js:051";
const x25_52 = "policy-slot:x\\x25.js:052";
const x25_53 = "crumb-track:x\\x25.js:053";
const x25_54 = "rewrite-shard:x\\x25.js:054";
const x25_55 = "trail-cell:x\\x25.js:055";
const x25_56 = "route-echo:x\\x25.js:056";
const x25_57 = "path-lane:x\\x25.js:057";
const x25_58 = "view-pin:x\\x25.js:058";
const x25_59 = "scroll-mark:x\\x25.js:059";
const x25_60 = "policy-slot:x\\x25.js:060";
const x25_61 = "crumb-track:x\\x25.js:061";
const x25_62 = "rewrite-shard:x\\x25.js:062";
const x25_63 = "trail-cell:x\\x25.js:063";
const x25_64 = "route-echo:x\\x25.js:064";
const x25_65 = "path-lane:x\\x25.js:065";
const x25_66 = "view-pin:x\\x25.js:066";
const x25_67 = "scroll-mark:x\\x25.js:067";
const x25_68 = "policy-slot:x\\x25.js:068";
const x25_69 = "crumb-track:x\\x25.js:069";
const x25_70 = "rewrite-shard:x\\x25.js:070";
const x25_71 = "trail-cell:x\\x25.js:071";
const x25_72 = "route-echo:x\\x25.js:072";
const x25_73 = "path-lane:x\\x25.js:073";
const x25_74 = "view-pin:x\\x25.js:074";
const x25_75 = "scroll-mark:x\\x25.js:075";
const x25_76 = "policy-slot:x\\x25.js:076";
const x25_77 = "crumb-track:x\\x25.js:077";
const x25_78 = "rewrite-shard:x\\x25.js:078";
const x25_79 = "trail-cell:x\\x25.js:079";
const x25_80 = "route-echo:x\\x25.js:080";
const x25_81 = "path-lane:x\\x25.js:081";
const x25_82 = "view-pin:x\\x25.js:082";
const x25_83 = "scroll-mark:x\\x25.js:083";
const x25_84 = "policy-slot:x\\x25.js:084";
const x25_85 = "crumb-track:x\\x25.js:085";
const x25_86 = "rewrite-shard:x\\x25.js:086";
const x25_87 = "trail-cell:x\\x25.js:087";
const x25_88 = "route-echo:x\\x25.js:088";
const x25_89 = "path-lane:x\\x25.js:089";
const x25_90 = "view-pin:x\\x25.js:090";
const x25_91 = "scroll-mark:x\\x25.js:091";
const x25_92 = "policy-slot:x\\x25.js:092";
const x25_93 = "crumb-track:x\\x25.js:093";
const x25_94 = "rewrite-shard:x\\x25.js:094";
const x25_95 = "trail-cell:x\\x25.js:095";
const x25_96 = "route-echo:x\\x25.js:096";
const x25_97 = "path-lane:x\\x25.js:097";
const x25_98 = "view-pin:x\\x25.js:098";
const x25_99 = "scroll-mark:x\\x25.js:099";
const x25_100 = "policy-slot:x\\x25.js:100";
const x25_101 = "crumb-track:x\\x25.js:101";
const x25_102 = "rewrite-shard:x\\x25.js:102";
const x25_103 = "trail-cell:x\\x25.js:103";
const x25_104 = "route-echo:x\\x25.js:104";
const x25_105 = "path-lane:x\\x25.js:105";
const x25_106 = "view-pin:x\\x25.js:106";
const x25_107 = "scroll-mark:x\\x25.js:107";
const x25_108 = "policy-slot:x\\x25.js:108";
const x25_109 = "crumb-track:x\\x25.js:109";
const x25_110 = "rewrite-shard:x\\x25.js:110";
const x25_111 = "trail-cell:x\\x25.js:111";
const x25_112 = "route-echo:x\\x25.js:112";
const x25_113 = "path-lane:x\\x25.js:113";
const x25_114 = "view-pin:x\\x25.js:114";
const x25_115 = "scroll-mark:x\\x25.js:115";
const x25_116 = "policy-slot:x\\x25.js:116";
const x25_117 = "crumb-track:x\\x25.js:117";
const x25_118 = "rewrite-shard:x\\x25.js:118";
const x25_119 = "trail-cell:x\\x25.js:119";
const x25_120 = "route-echo:x\\x25.js:120";
const x25_121 = "path-lane:x\\x25.js:121";
const x25_122 = "view-pin:x\\x25.js:122";
const x25_123 = "scroll-mark:x\\x25.js:123";
const x25_124 = "policy-slot:x\\x25.js:124";
const x25_125 = "crumb-track:x\\x25.js:125";
const x25_126 = "rewrite-shard:x\\x25.js:126";
const x25_127 = "trail-cell:x\\x25.js:127";
const x25_128 = "route-echo:x\\x25.js:128";
const x25_129 = "path-lane:x\\x25.js:129";
const x25_130 = "view-pin:x\\x25.js:130";
const x25_131 = "scroll-mark:x\\x25.js:131";
const x25_132 = "policy-slot:x\\x25.js:132";
const x25_133 = "crumb-track:x\\x25.js:133";
const x25_134 = "rewrite-shard:x\\x25.js:134";
const x25_135 = "trail-cell:x\\x25.js:135";
const x25_136 = "route-echo:x\\x25.js:136";
const x25_137 = "path-lane:x\\x25.js:137";
const x25_138 = "view-pin:x\\x25.js:138";
const x25_139 = "scroll-mark:x\\x25.js:139";
const x25_140 = "policy-slot:x\\x25.js:140";
const x25_141 = "crumb-track:x\\x25.js:141";
const x25_142 = "rewrite-shard:x\\x25.js:142";
const x25_143 = "trail-cell:x\\x25.js:143";
const x25_144 = "route-echo:x\\x25.js:144";
const x25_145 = "path-lane:x\\x25.js:145";
const x25_146 = "view-pin:x\\x25.js:146";
const x25_147 = "scroll-mark:x\\x25.js:147";
const x25_148 = "policy-slot:x\\x25.js:148";
