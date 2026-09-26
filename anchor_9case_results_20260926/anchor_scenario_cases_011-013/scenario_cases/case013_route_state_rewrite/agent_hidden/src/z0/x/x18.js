import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 18,
  salt: 'r:0i:trail',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 10,
  mask: 1936384796
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/18/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '0', y: '0', n: 1 }
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
const x18_0 = "route-echo:x\\x18.js:000";
const x18_1 = "path-lane:x\\x18.js:001";
const x18_2 = "view-pin:x\\x18.js:002";
const x18_3 = "scroll-mark:x\\x18.js:003";
const x18_4 = "policy-slot:x\\x18.js:004";
const x18_5 = "crumb-track:x\\x18.js:005";
const x18_6 = "rewrite-shard:x\\x18.js:006";
const x18_7 = "trail-cell:x\\x18.js:007";
const x18_8 = "route-echo:x\\x18.js:008";
const x18_9 = "path-lane:x\\x18.js:009";
const x18_10 = "view-pin:x\\x18.js:010";
const x18_11 = "scroll-mark:x\\x18.js:011";
const x18_12 = "policy-slot:x\\x18.js:012";
const x18_13 = "crumb-track:x\\x18.js:013";
const x18_14 = "rewrite-shard:x\\x18.js:014";
const x18_15 = "trail-cell:x\\x18.js:015";
const x18_16 = "route-echo:x\\x18.js:016";
const x18_17 = "path-lane:x\\x18.js:017";
const x18_18 = "view-pin:x\\x18.js:018";
const x18_19 = "scroll-mark:x\\x18.js:019";
const x18_20 = "policy-slot:x\\x18.js:020";
const x18_21 = "crumb-track:x\\x18.js:021";
const x18_22 = "rewrite-shard:x\\x18.js:022";
const x18_23 = "trail-cell:x\\x18.js:023";
const x18_24 = "route-echo:x\\x18.js:024";
const x18_25 = "path-lane:x\\x18.js:025";
const x18_26 = "view-pin:x\\x18.js:026";
const x18_27 = "scroll-mark:x\\x18.js:027";
const x18_28 = "policy-slot:x\\x18.js:028";
const x18_29 = "crumb-track:x\\x18.js:029";
const x18_30 = "rewrite-shard:x\\x18.js:030";
const x18_31 = "trail-cell:x\\x18.js:031";
const x18_32 = "route-echo:x\\x18.js:032";
const x18_33 = "path-lane:x\\x18.js:033";
const x18_34 = "view-pin:x\\x18.js:034";
const x18_35 = "scroll-mark:x\\x18.js:035";
const x18_36 = "policy-slot:x\\x18.js:036";
const x18_37 = "crumb-track:x\\x18.js:037";
const x18_38 = "rewrite-shard:x\\x18.js:038";
const x18_39 = "trail-cell:x\\x18.js:039";
const x18_40 = "route-echo:x\\x18.js:040";
const x18_41 = "path-lane:x\\x18.js:041";
const x18_42 = "view-pin:x\\x18.js:042";
const x18_43 = "scroll-mark:x\\x18.js:043";
const x18_44 = "policy-slot:x\\x18.js:044";
const x18_45 = "crumb-track:x\\x18.js:045";
const x18_46 = "rewrite-shard:x\\x18.js:046";
const x18_47 = "trail-cell:x\\x18.js:047";
const x18_48 = "route-echo:x\\x18.js:048";
const x18_49 = "path-lane:x\\x18.js:049";
const x18_50 = "view-pin:x\\x18.js:050";
const x18_51 = "scroll-mark:x\\x18.js:051";
const x18_52 = "policy-slot:x\\x18.js:052";
const x18_53 = "crumb-track:x\\x18.js:053";
const x18_54 = "rewrite-shard:x\\x18.js:054";
const x18_55 = "trail-cell:x\\x18.js:055";
const x18_56 = "route-echo:x\\x18.js:056";
const x18_57 = "path-lane:x\\x18.js:057";
const x18_58 = "view-pin:x\\x18.js:058";
const x18_59 = "scroll-mark:x\\x18.js:059";
const x18_60 = "policy-slot:x\\x18.js:060";
const x18_61 = "crumb-track:x\\x18.js:061";
const x18_62 = "rewrite-shard:x\\x18.js:062";
const x18_63 = "trail-cell:x\\x18.js:063";
const x18_64 = "route-echo:x\\x18.js:064";
const x18_65 = "path-lane:x\\x18.js:065";
const x18_66 = "view-pin:x\\x18.js:066";
const x18_67 = "scroll-mark:x\\x18.js:067";
const x18_68 = "policy-slot:x\\x18.js:068";
const x18_69 = "crumb-track:x\\x18.js:069";
const x18_70 = "rewrite-shard:x\\x18.js:070";
const x18_71 = "trail-cell:x\\x18.js:071";
const x18_72 = "route-echo:x\\x18.js:072";
const x18_73 = "path-lane:x\\x18.js:073";
const x18_74 = "view-pin:x\\x18.js:074";
const x18_75 = "scroll-mark:x\\x18.js:075";
const x18_76 = "policy-slot:x\\x18.js:076";
const x18_77 = "crumb-track:x\\x18.js:077";
const x18_78 = "rewrite-shard:x\\x18.js:078";
const x18_79 = "trail-cell:x\\x18.js:079";
const x18_80 = "route-echo:x\\x18.js:080";
const x18_81 = "path-lane:x\\x18.js:081";
const x18_82 = "view-pin:x\\x18.js:082";
const x18_83 = "scroll-mark:x\\x18.js:083";
const x18_84 = "policy-slot:x\\x18.js:084";
const x18_85 = "crumb-track:x\\x18.js:085";
const x18_86 = "rewrite-shard:x\\x18.js:086";
const x18_87 = "trail-cell:x\\x18.js:087";
const x18_88 = "route-echo:x\\x18.js:088";
const x18_89 = "path-lane:x\\x18.js:089";
const x18_90 = "view-pin:x\\x18.js:090";
const x18_91 = "scroll-mark:x\\x18.js:091";
const x18_92 = "policy-slot:x\\x18.js:092";
const x18_93 = "crumb-track:x\\x18.js:093";
const x18_94 = "rewrite-shard:x\\x18.js:094";
const x18_95 = "trail-cell:x\\x18.js:095";
const x18_96 = "route-echo:x\\x18.js:096";
const x18_97 = "path-lane:x\\x18.js:097";
const x18_98 = "view-pin:x\\x18.js:098";
const x18_99 = "scroll-mark:x\\x18.js:099";
const x18_100 = "policy-slot:x\\x18.js:100";
const x18_101 = "crumb-track:x\\x18.js:101";
const x18_102 = "rewrite-shard:x\\x18.js:102";
const x18_103 = "trail-cell:x\\x18.js:103";
const x18_104 = "route-echo:x\\x18.js:104";
const x18_105 = "path-lane:x\\x18.js:105";
const x18_106 = "view-pin:x\\x18.js:106";
const x18_107 = "scroll-mark:x\\x18.js:107";
const x18_108 = "policy-slot:x\\x18.js:108";
const x18_109 = "crumb-track:x\\x18.js:109";
const x18_110 = "rewrite-shard:x\\x18.js:110";
const x18_111 = "trail-cell:x\\x18.js:111";
const x18_112 = "route-echo:x\\x18.js:112";
const x18_113 = "path-lane:x\\x18.js:113";
const x18_114 = "view-pin:x\\x18.js:114";
const x18_115 = "scroll-mark:x\\x18.js:115";
const x18_116 = "policy-slot:x\\x18.js:116";
const x18_117 = "crumb-track:x\\x18.js:117";
const x18_118 = "rewrite-shard:x\\x18.js:118";
const x18_119 = "trail-cell:x\\x18.js:119";
const x18_120 = "route-echo:x\\x18.js:120";
const x18_121 = "path-lane:x\\x18.js:121";
const x18_122 = "view-pin:x\\x18.js:122";
const x18_123 = "scroll-mark:x\\x18.js:123";
const x18_124 = "policy-slot:x\\x18.js:124";
const x18_125 = "crumb-track:x\\x18.js:125";
const x18_126 = "rewrite-shard:x\\x18.js:126";
const x18_127 = "trail-cell:x\\x18.js:127";
const x18_128 = "route-echo:x\\x18.js:128";
const x18_129 = "path-lane:x\\x18.js:129";
const x18_130 = "view-pin:x\\x18.js:130";
const x18_131 = "scroll-mark:x\\x18.js:131";
const x18_132 = "policy-slot:x\\x18.js:132";
const x18_133 = "crumb-track:x\\x18.js:133";
const x18_134 = "rewrite-shard:x\\x18.js:134";
const x18_135 = "trail-cell:x\\x18.js:135";
const x18_136 = "route-echo:x\\x18.js:136";
const x18_137 = "path-lane:x\\x18.js:137";
const x18_138 = "view-pin:x\\x18.js:138";
const x18_139 = "scroll-mark:x\\x18.js:139";
const x18_140 = "policy-slot:x\\x18.js:140";
const x18_141 = "crumb-track:x\\x18.js:141";
const x18_142 = "rewrite-shard:x\\x18.js:142";
const x18_143 = "trail-cell:x\\x18.js:143";
const x18_144 = "route-echo:x\\x18.js:144";
const x18_145 = "path-lane:x\\x18.js:145";
const x18_146 = "view-pin:x\\x18.js:146";
const x18_147 = "scroll-mark:x\\x18.js:147";
const x18_148 = "policy-slot:x\\x18.js:148";
