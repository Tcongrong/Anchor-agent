import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 19,
  salt: 'r:0j:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 11,
  mask: 295853261
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/19/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '1', y: '1', n: 1 }
  ];
}

function remix3(value, index) {
  return value.split('').reverse().join('').slice(3, 15);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x19_0 = "route-echo:x\\x19.js:000";
const x19_1 = "path-lane:x\\x19.js:001";
const x19_2 = "view-pin:x\\x19.js:002";
const x19_3 = "scroll-mark:x\\x19.js:003";
const x19_4 = "policy-slot:x\\x19.js:004";
const x19_5 = "crumb-track:x\\x19.js:005";
const x19_6 = "rewrite-shard:x\\x19.js:006";
const x19_7 = "trail-cell:x\\x19.js:007";
const x19_8 = "route-echo:x\\x19.js:008";
const x19_9 = "path-lane:x\\x19.js:009";
const x19_10 = "view-pin:x\\x19.js:010";
const x19_11 = "scroll-mark:x\\x19.js:011";
const x19_12 = "policy-slot:x\\x19.js:012";
const x19_13 = "crumb-track:x\\x19.js:013";
const x19_14 = "rewrite-shard:x\\x19.js:014";
const x19_15 = "trail-cell:x\\x19.js:015";
const x19_16 = "route-echo:x\\x19.js:016";
const x19_17 = "path-lane:x\\x19.js:017";
const x19_18 = "view-pin:x\\x19.js:018";
const x19_19 = "scroll-mark:x\\x19.js:019";
const x19_20 = "policy-slot:x\\x19.js:020";
const x19_21 = "crumb-track:x\\x19.js:021";
const x19_22 = "rewrite-shard:x\\x19.js:022";
const x19_23 = "trail-cell:x\\x19.js:023";
const x19_24 = "route-echo:x\\x19.js:024";
const x19_25 = "path-lane:x\\x19.js:025";
const x19_26 = "view-pin:x\\x19.js:026";
const x19_27 = "scroll-mark:x\\x19.js:027";
const x19_28 = "policy-slot:x\\x19.js:028";
const x19_29 = "crumb-track:x\\x19.js:029";
const x19_30 = "rewrite-shard:x\\x19.js:030";
const x19_31 = "trail-cell:x\\x19.js:031";
const x19_32 = "route-echo:x\\x19.js:032";
const x19_33 = "path-lane:x\\x19.js:033";
const x19_34 = "view-pin:x\\x19.js:034";
const x19_35 = "scroll-mark:x\\x19.js:035";
const x19_36 = "policy-slot:x\\x19.js:036";
const x19_37 = "crumb-track:x\\x19.js:037";
const x19_38 = "rewrite-shard:x\\x19.js:038";
const x19_39 = "trail-cell:x\\x19.js:039";
const x19_40 = "route-echo:x\\x19.js:040";
const x19_41 = "path-lane:x\\x19.js:041";
const x19_42 = "view-pin:x\\x19.js:042";
const x19_43 = "scroll-mark:x\\x19.js:043";
const x19_44 = "policy-slot:x\\x19.js:044";
const x19_45 = "crumb-track:x\\x19.js:045";
const x19_46 = "rewrite-shard:x\\x19.js:046";
const x19_47 = "trail-cell:x\\x19.js:047";
const x19_48 = "route-echo:x\\x19.js:048";
const x19_49 = "path-lane:x\\x19.js:049";
const x19_50 = "view-pin:x\\x19.js:050";
const x19_51 = "scroll-mark:x\\x19.js:051";
const x19_52 = "policy-slot:x\\x19.js:052";
const x19_53 = "crumb-track:x\\x19.js:053";
const x19_54 = "rewrite-shard:x\\x19.js:054";
const x19_55 = "trail-cell:x\\x19.js:055";
const x19_56 = "route-echo:x\\x19.js:056";
const x19_57 = "path-lane:x\\x19.js:057";
const x19_58 = "view-pin:x\\x19.js:058";
const x19_59 = "scroll-mark:x\\x19.js:059";
const x19_60 = "policy-slot:x\\x19.js:060";
const x19_61 = "crumb-track:x\\x19.js:061";
const x19_62 = "rewrite-shard:x\\x19.js:062";
const x19_63 = "trail-cell:x\\x19.js:063";
const x19_64 = "route-echo:x\\x19.js:064";
const x19_65 = "path-lane:x\\x19.js:065";
const x19_66 = "view-pin:x\\x19.js:066";
const x19_67 = "scroll-mark:x\\x19.js:067";
const x19_68 = "policy-slot:x\\x19.js:068";
const x19_69 = "crumb-track:x\\x19.js:069";
const x19_70 = "rewrite-shard:x\\x19.js:070";
const x19_71 = "trail-cell:x\\x19.js:071";
const x19_72 = "route-echo:x\\x19.js:072";
const x19_73 = "path-lane:x\\x19.js:073";
const x19_74 = "view-pin:x\\x19.js:074";
const x19_75 = "scroll-mark:x\\x19.js:075";
const x19_76 = "policy-slot:x\\x19.js:076";
const x19_77 = "crumb-track:x\\x19.js:077";
const x19_78 = "rewrite-shard:x\\x19.js:078";
const x19_79 = "trail-cell:x\\x19.js:079";
const x19_80 = "route-echo:x\\x19.js:080";
const x19_81 = "path-lane:x\\x19.js:081";
const x19_82 = "view-pin:x\\x19.js:082";
const x19_83 = "scroll-mark:x\\x19.js:083";
const x19_84 = "policy-slot:x\\x19.js:084";
const x19_85 = "crumb-track:x\\x19.js:085";
const x19_86 = "rewrite-shard:x\\x19.js:086";
const x19_87 = "trail-cell:x\\x19.js:087";
const x19_88 = "route-echo:x\\x19.js:088";
const x19_89 = "path-lane:x\\x19.js:089";
const x19_90 = "view-pin:x\\x19.js:090";
const x19_91 = "scroll-mark:x\\x19.js:091";
const x19_92 = "policy-slot:x\\x19.js:092";
const x19_93 = "crumb-track:x\\x19.js:093";
const x19_94 = "rewrite-shard:x\\x19.js:094";
const x19_95 = "trail-cell:x\\x19.js:095";
const x19_96 = "route-echo:x\\x19.js:096";
const x19_97 = "path-lane:x\\x19.js:097";
const x19_98 = "view-pin:x\\x19.js:098";
const x19_99 = "scroll-mark:x\\x19.js:099";
const x19_100 = "policy-slot:x\\x19.js:100";
const x19_101 = "crumb-track:x\\x19.js:101";
const x19_102 = "rewrite-shard:x\\x19.js:102";
const x19_103 = "trail-cell:x\\x19.js:103";
const x19_104 = "route-echo:x\\x19.js:104";
const x19_105 = "path-lane:x\\x19.js:105";
const x19_106 = "view-pin:x\\x19.js:106";
const x19_107 = "scroll-mark:x\\x19.js:107";
const x19_108 = "policy-slot:x\\x19.js:108";
const x19_109 = "crumb-track:x\\x19.js:109";
const x19_110 = "rewrite-shard:x\\x19.js:110";
const x19_111 = "trail-cell:x\\x19.js:111";
const x19_112 = "route-echo:x\\x19.js:112";
const x19_113 = "path-lane:x\\x19.js:113";
const x19_114 = "view-pin:x\\x19.js:114";
const x19_115 = "scroll-mark:x\\x19.js:115";
const x19_116 = "policy-slot:x\\x19.js:116";
const x19_117 = "crumb-track:x\\x19.js:117";
const x19_118 = "rewrite-shard:x\\x19.js:118";
const x19_119 = "trail-cell:x\\x19.js:119";
const x19_120 = "route-echo:x\\x19.js:120";
const x19_121 = "path-lane:x\\x19.js:121";
const x19_122 = "view-pin:x\\x19.js:122";
const x19_123 = "scroll-mark:x\\x19.js:123";
const x19_124 = "policy-slot:x\\x19.js:124";
const x19_125 = "crumb-track:x\\x19.js:125";
const x19_126 = "rewrite-shard:x\\x19.js:126";
const x19_127 = "trail-cell:x\\x19.js:127";
const x19_128 = "route-echo:x\\x19.js:128";
const x19_129 = "path-lane:x\\x19.js:129";
const x19_130 = "view-pin:x\\x19.js:130";
const x19_131 = "scroll-mark:x\\x19.js:131";
const x19_132 = "policy-slot:x\\x19.js:132";
const x19_133 = "crumb-track:x\\x19.js:133";
const x19_134 = "rewrite-shard:x\\x19.js:134";
const x19_135 = "trail-cell:x\\x19.js:135";
const x19_136 = "route-echo:x\\x19.js:136";
const x19_137 = "path-lane:x\\x19.js:137";
const x19_138 = "view-pin:x\\x19.js:138";
const x19_139 = "scroll-mark:x\\x19.js:139";
const x19_140 = "policy-slot:x\\x19.js:140";
const x19_141 = "crumb-track:x\\x19.js:141";
const x19_142 = "rewrite-shard:x\\x19.js:142";
const x19_143 = "trail-cell:x\\x19.js:143";
const x19_144 = "route-echo:x\\x19.js:144";
const x19_145 = "path-lane:x\\x19.js:145";
const x19_146 = "view-pin:x\\x19.js:146";
const x19_147 = "scroll-mark:x\\x19.js:147";
const x19_148 = "policy-slot:x\\x19.js:148";
