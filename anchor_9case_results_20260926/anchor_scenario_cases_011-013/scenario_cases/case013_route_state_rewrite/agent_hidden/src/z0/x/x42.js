import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 42,
  salt: 'r:16:trail',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 10,
  mask: 1218333620
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/42/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '6', y: '6', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(5, 14) + '#' + (cfg.slot + 9).toString(36) + 'w2';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x42_0 = "route-echo:x\\x42.js:000";
const x42_1 = "path-lane:x\\x42.js:001";
const x42_2 = "view-pin:x\\x42.js:002";
const x42_3 = "scroll-mark:x\\x42.js:003";
const x42_4 = "policy-slot:x\\x42.js:004";
const x42_5 = "crumb-track:x\\x42.js:005";
const x42_6 = "rewrite-shard:x\\x42.js:006";
const x42_7 = "trail-cell:x\\x42.js:007";
const x42_8 = "route-echo:x\\x42.js:008";
const x42_9 = "path-lane:x\\x42.js:009";
const x42_10 = "view-pin:x\\x42.js:010";
const x42_11 = "scroll-mark:x\\x42.js:011";
const x42_12 = "policy-slot:x\\x42.js:012";
const x42_13 = "crumb-track:x\\x42.js:013";
const x42_14 = "rewrite-shard:x\\x42.js:014";
const x42_15 = "trail-cell:x\\x42.js:015";
const x42_16 = "route-echo:x\\x42.js:016";
const x42_17 = "path-lane:x\\x42.js:017";
const x42_18 = "view-pin:x\\x42.js:018";
const x42_19 = "scroll-mark:x\\x42.js:019";
const x42_20 = "policy-slot:x\\x42.js:020";
const x42_21 = "crumb-track:x\\x42.js:021";
const x42_22 = "rewrite-shard:x\\x42.js:022";
const x42_23 = "trail-cell:x\\x42.js:023";
const x42_24 = "route-echo:x\\x42.js:024";
const x42_25 = "path-lane:x\\x42.js:025";
const x42_26 = "view-pin:x\\x42.js:026";
const x42_27 = "scroll-mark:x\\x42.js:027";
const x42_28 = "policy-slot:x\\x42.js:028";
const x42_29 = "crumb-track:x\\x42.js:029";
const x42_30 = "rewrite-shard:x\\x42.js:030";
const x42_31 = "trail-cell:x\\x42.js:031";
const x42_32 = "route-echo:x\\x42.js:032";
const x42_33 = "path-lane:x\\x42.js:033";
const x42_34 = "view-pin:x\\x42.js:034";
const x42_35 = "scroll-mark:x\\x42.js:035";
const x42_36 = "policy-slot:x\\x42.js:036";
const x42_37 = "crumb-track:x\\x42.js:037";
const x42_38 = "rewrite-shard:x\\x42.js:038";
const x42_39 = "trail-cell:x\\x42.js:039";
const x42_40 = "route-echo:x\\x42.js:040";
const x42_41 = "path-lane:x\\x42.js:041";
const x42_42 = "view-pin:x\\x42.js:042";
const x42_43 = "scroll-mark:x\\x42.js:043";
const x42_44 = "policy-slot:x\\x42.js:044";
const x42_45 = "crumb-track:x\\x42.js:045";
const x42_46 = "rewrite-shard:x\\x42.js:046";
const x42_47 = "trail-cell:x\\x42.js:047";
const x42_48 = "route-echo:x\\x42.js:048";
const x42_49 = "path-lane:x\\x42.js:049";
const x42_50 = "view-pin:x\\x42.js:050";
const x42_51 = "scroll-mark:x\\x42.js:051";
const x42_52 = "policy-slot:x\\x42.js:052";
const x42_53 = "crumb-track:x\\x42.js:053";
const x42_54 = "rewrite-shard:x\\x42.js:054";
const x42_55 = "trail-cell:x\\x42.js:055";
const x42_56 = "route-echo:x\\x42.js:056";
const x42_57 = "path-lane:x\\x42.js:057";
const x42_58 = "view-pin:x\\x42.js:058";
const x42_59 = "scroll-mark:x\\x42.js:059";
const x42_60 = "policy-slot:x\\x42.js:060";
const x42_61 = "crumb-track:x\\x42.js:061";
const x42_62 = "rewrite-shard:x\\x42.js:062";
const x42_63 = "trail-cell:x\\x42.js:063";
const x42_64 = "route-echo:x\\x42.js:064";
const x42_65 = "path-lane:x\\x42.js:065";
const x42_66 = "view-pin:x\\x42.js:066";
const x42_67 = "scroll-mark:x\\x42.js:067";
const x42_68 = "policy-slot:x\\x42.js:068";
const x42_69 = "crumb-track:x\\x42.js:069";
const x42_70 = "rewrite-shard:x\\x42.js:070";
const x42_71 = "trail-cell:x\\x42.js:071";
const x42_72 = "route-echo:x\\x42.js:072";
const x42_73 = "path-lane:x\\x42.js:073";
const x42_74 = "view-pin:x\\x42.js:074";
const x42_75 = "scroll-mark:x\\x42.js:075";
const x42_76 = "policy-slot:x\\x42.js:076";
const x42_77 = "crumb-track:x\\x42.js:077";
const x42_78 = "rewrite-shard:x\\x42.js:078";
const x42_79 = "trail-cell:x\\x42.js:079";
const x42_80 = "route-echo:x\\x42.js:080";
const x42_81 = "path-lane:x\\x42.js:081";
const x42_82 = "view-pin:x\\x42.js:082";
const x42_83 = "scroll-mark:x\\x42.js:083";
const x42_84 = "policy-slot:x\\x42.js:084";
const x42_85 = "crumb-track:x\\x42.js:085";
const x42_86 = "rewrite-shard:x\\x42.js:086";
const x42_87 = "trail-cell:x\\x42.js:087";
const x42_88 = "route-echo:x\\x42.js:088";
const x42_89 = "path-lane:x\\x42.js:089";
const x42_90 = "view-pin:x\\x42.js:090";
const x42_91 = "scroll-mark:x\\x42.js:091";
const x42_92 = "policy-slot:x\\x42.js:092";
const x42_93 = "crumb-track:x\\x42.js:093";
const x42_94 = "rewrite-shard:x\\x42.js:094";
const x42_95 = "trail-cell:x\\x42.js:095";
const x42_96 = "route-echo:x\\x42.js:096";
const x42_97 = "path-lane:x\\x42.js:097";
const x42_98 = "view-pin:x\\x42.js:098";
const x42_99 = "scroll-mark:x\\x42.js:099";
const x42_100 = "policy-slot:x\\x42.js:100";
const x42_101 = "crumb-track:x\\x42.js:101";
const x42_102 = "rewrite-shard:x\\x42.js:102";
const x42_103 = "trail-cell:x\\x42.js:103";
const x42_104 = "route-echo:x\\x42.js:104";
const x42_105 = "path-lane:x\\x42.js:105";
const x42_106 = "view-pin:x\\x42.js:106";
const x42_107 = "scroll-mark:x\\x42.js:107";
const x42_108 = "policy-slot:x\\x42.js:108";
const x42_109 = "crumb-track:x\\x42.js:109";
const x42_110 = "rewrite-shard:x\\x42.js:110";
const x42_111 = "trail-cell:x\\x42.js:111";
const x42_112 = "route-echo:x\\x42.js:112";
const x42_113 = "path-lane:x\\x42.js:113";
const x42_114 = "view-pin:x\\x42.js:114";
const x42_115 = "scroll-mark:x\\x42.js:115";
const x42_116 = "policy-slot:x\\x42.js:116";
const x42_117 = "crumb-track:x\\x42.js:117";
const x42_118 = "rewrite-shard:x\\x42.js:118";
const x42_119 = "trail-cell:x\\x42.js:119";
const x42_120 = "route-echo:x\\x42.js:120";
const x42_121 = "path-lane:x\\x42.js:121";
const x42_122 = "view-pin:x\\x42.js:122";
const x42_123 = "scroll-mark:x\\x42.js:123";
const x42_124 = "policy-slot:x\\x42.js:124";
const x42_125 = "crumb-track:x\\x42.js:125";
const x42_126 = "rewrite-shard:x\\x42.js:126";
const x42_127 = "trail-cell:x\\x42.js:127";
const x42_128 = "route-echo:x\\x42.js:128";
const x42_129 = "path-lane:x\\x42.js:129";
const x42_130 = "view-pin:x\\x42.js:130";
const x42_131 = "scroll-mark:x\\x42.js:131";
const x42_132 = "policy-slot:x\\x42.js:132";
const x42_133 = "crumb-track:x\\x42.js:133";
const x42_134 = "rewrite-shard:x\\x42.js:134";
const x42_135 = "trail-cell:x\\x42.js:135";
const x42_136 = "route-echo:x\\x42.js:136";
const x42_137 = "path-lane:x\\x42.js:137";
const x42_138 = "view-pin:x\\x42.js:138";
const x42_139 = "scroll-mark:x\\x42.js:139";
const x42_140 = "policy-slot:x\\x42.js:140";
const x42_141 = "crumb-track:x\\x42.js:141";
const x42_142 = "rewrite-shard:x\\x42.js:142";
const x42_143 = "trail-cell:x\\x42.js:143";
const x42_144 = "route-echo:x\\x42.js:144";
const x42_145 = "path-lane:x\\x42.js:145";
const x42_146 = "view-pin:x\\x42.js:146";
const x42_147 = "scroll-mark:x\\x42.js:147";
const x42_148 = "policy-slot:x\\x42.js:148";
