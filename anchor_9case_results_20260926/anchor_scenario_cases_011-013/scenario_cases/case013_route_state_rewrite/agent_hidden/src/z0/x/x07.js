import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 7,
  salt: 'r:07:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 11,
  mask: 2802362497
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/7/shadow', y: 'shadow', n: 15 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '7', y: '7', n: 1 }
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
const x07_0 = "route-echo:x\\x07.js:000";
const x07_1 = "path-lane:x\\x07.js:001";
const x07_2 = "view-pin:x\\x07.js:002";
const x07_3 = "scroll-mark:x\\x07.js:003";
const x07_4 = "policy-slot:x\\x07.js:004";
const x07_5 = "crumb-track:x\\x07.js:005";
const x07_6 = "rewrite-shard:x\\x07.js:006";
const x07_7 = "trail-cell:x\\x07.js:007";
const x07_8 = "route-echo:x\\x07.js:008";
const x07_9 = "path-lane:x\\x07.js:009";
const x07_10 = "view-pin:x\\x07.js:010";
const x07_11 = "scroll-mark:x\\x07.js:011";
const x07_12 = "policy-slot:x\\x07.js:012";
const x07_13 = "crumb-track:x\\x07.js:013";
const x07_14 = "rewrite-shard:x\\x07.js:014";
const x07_15 = "trail-cell:x\\x07.js:015";
const x07_16 = "route-echo:x\\x07.js:016";
const x07_17 = "path-lane:x\\x07.js:017";
const x07_18 = "view-pin:x\\x07.js:018";
const x07_19 = "scroll-mark:x\\x07.js:019";
const x07_20 = "policy-slot:x\\x07.js:020";
const x07_21 = "crumb-track:x\\x07.js:021";
const x07_22 = "rewrite-shard:x\\x07.js:022";
const x07_23 = "trail-cell:x\\x07.js:023";
const x07_24 = "route-echo:x\\x07.js:024";
const x07_25 = "path-lane:x\\x07.js:025";
const x07_26 = "view-pin:x\\x07.js:026";
const x07_27 = "scroll-mark:x\\x07.js:027";
const x07_28 = "policy-slot:x\\x07.js:028";
const x07_29 = "crumb-track:x\\x07.js:029";
const x07_30 = "rewrite-shard:x\\x07.js:030";
const x07_31 = "trail-cell:x\\x07.js:031";
const x07_32 = "route-echo:x\\x07.js:032";
const x07_33 = "path-lane:x\\x07.js:033";
const x07_34 = "view-pin:x\\x07.js:034";
const x07_35 = "scroll-mark:x\\x07.js:035";
const x07_36 = "policy-slot:x\\x07.js:036";
const x07_37 = "crumb-track:x\\x07.js:037";
const x07_38 = "rewrite-shard:x\\x07.js:038";
const x07_39 = "trail-cell:x\\x07.js:039";
const x07_40 = "route-echo:x\\x07.js:040";
const x07_41 = "path-lane:x\\x07.js:041";
const x07_42 = "view-pin:x\\x07.js:042";
const x07_43 = "scroll-mark:x\\x07.js:043";
const x07_44 = "policy-slot:x\\x07.js:044";
const x07_45 = "crumb-track:x\\x07.js:045";
const x07_46 = "rewrite-shard:x\\x07.js:046";
const x07_47 = "trail-cell:x\\x07.js:047";
const x07_48 = "route-echo:x\\x07.js:048";
const x07_49 = "path-lane:x\\x07.js:049";
const x07_50 = "view-pin:x\\x07.js:050";
const x07_51 = "scroll-mark:x\\x07.js:051";
const x07_52 = "policy-slot:x\\x07.js:052";
const x07_53 = "crumb-track:x\\x07.js:053";
const x07_54 = "rewrite-shard:x\\x07.js:054";
const x07_55 = "trail-cell:x\\x07.js:055";
const x07_56 = "route-echo:x\\x07.js:056";
const x07_57 = "path-lane:x\\x07.js:057";
const x07_58 = "view-pin:x\\x07.js:058";
const x07_59 = "scroll-mark:x\\x07.js:059";
const x07_60 = "policy-slot:x\\x07.js:060";
const x07_61 = "crumb-track:x\\x07.js:061";
const x07_62 = "rewrite-shard:x\\x07.js:062";
const x07_63 = "trail-cell:x\\x07.js:063";
const x07_64 = "route-echo:x\\x07.js:064";
const x07_65 = "path-lane:x\\x07.js:065";
const x07_66 = "view-pin:x\\x07.js:066";
const x07_67 = "scroll-mark:x\\x07.js:067";
const x07_68 = "policy-slot:x\\x07.js:068";
const x07_69 = "crumb-track:x\\x07.js:069";
const x07_70 = "rewrite-shard:x\\x07.js:070";
const x07_71 = "trail-cell:x\\x07.js:071";
const x07_72 = "route-echo:x\\x07.js:072";
const x07_73 = "path-lane:x\\x07.js:073";
const x07_74 = "view-pin:x\\x07.js:074";
const x07_75 = "scroll-mark:x\\x07.js:075";
const x07_76 = "policy-slot:x\\x07.js:076";
const x07_77 = "crumb-track:x\\x07.js:077";
const x07_78 = "rewrite-shard:x\\x07.js:078";
const x07_79 = "trail-cell:x\\x07.js:079";
const x07_80 = "route-echo:x\\x07.js:080";
const x07_81 = "path-lane:x\\x07.js:081";
const x07_82 = "view-pin:x\\x07.js:082";
const x07_83 = "scroll-mark:x\\x07.js:083";
const x07_84 = "policy-slot:x\\x07.js:084";
const x07_85 = "crumb-track:x\\x07.js:085";
const x07_86 = "rewrite-shard:x\\x07.js:086";
const x07_87 = "trail-cell:x\\x07.js:087";
const x07_88 = "route-echo:x\\x07.js:088";
const x07_89 = "path-lane:x\\x07.js:089";
const x07_90 = "view-pin:x\\x07.js:090";
const x07_91 = "scroll-mark:x\\x07.js:091";
const x07_92 = "policy-slot:x\\x07.js:092";
const x07_93 = "crumb-track:x\\x07.js:093";
const x07_94 = "rewrite-shard:x\\x07.js:094";
const x07_95 = "trail-cell:x\\x07.js:095";
const x07_96 = "route-echo:x\\x07.js:096";
const x07_97 = "path-lane:x\\x07.js:097";
const x07_98 = "view-pin:x\\x07.js:098";
const x07_99 = "scroll-mark:x\\x07.js:099";
const x07_100 = "policy-slot:x\\x07.js:100";
const x07_101 = "crumb-track:x\\x07.js:101";
const x07_102 = "rewrite-shard:x\\x07.js:102";
const x07_103 = "trail-cell:x\\x07.js:103";
const x07_104 = "route-echo:x\\x07.js:104";
const x07_105 = "path-lane:x\\x07.js:105";
const x07_106 = "view-pin:x\\x07.js:106";
const x07_107 = "scroll-mark:x\\x07.js:107";
const x07_108 = "policy-slot:x\\x07.js:108";
const x07_109 = "crumb-track:x\\x07.js:109";
const x07_110 = "rewrite-shard:x\\x07.js:110";
const x07_111 = "trail-cell:x\\x07.js:111";
const x07_112 = "route-echo:x\\x07.js:112";
const x07_113 = "path-lane:x\\x07.js:113";
const x07_114 = "view-pin:x\\x07.js:114";
const x07_115 = "scroll-mark:x\\x07.js:115";
const x07_116 = "policy-slot:x\\x07.js:116";
const x07_117 = "crumb-track:x\\x07.js:117";
const x07_118 = "rewrite-shard:x\\x07.js:118";
const x07_119 = "trail-cell:x\\x07.js:119";
const x07_120 = "route-echo:x\\x07.js:120";
const x07_121 = "path-lane:x\\x07.js:121";
const x07_122 = "view-pin:x\\x07.js:122";
const x07_123 = "scroll-mark:x\\x07.js:123";
const x07_124 = "policy-slot:x\\x07.js:124";
const x07_125 = "crumb-track:x\\x07.js:125";
const x07_126 = "rewrite-shard:x\\x07.js:126";
const x07_127 = "trail-cell:x\\x07.js:127";
const x07_128 = "route-echo:x\\x07.js:128";
const x07_129 = "path-lane:x\\x07.js:129";
const x07_130 = "view-pin:x\\x07.js:130";
const x07_131 = "scroll-mark:x\\x07.js:131";
const x07_132 = "policy-slot:x\\x07.js:132";
const x07_133 = "crumb-track:x\\x07.js:133";
const x07_134 = "rewrite-shard:x\\x07.js:134";
const x07_135 = "trail-cell:x\\x07.js:135";
const x07_136 = "route-echo:x\\x07.js:136";
const x07_137 = "path-lane:x\\x07.js:137";
const x07_138 = "view-pin:x\\x07.js:138";
const x07_139 = "scroll-mark:x\\x07.js:139";
const x07_140 = "policy-slot:x\\x07.js:140";
const x07_141 = "crumb-track:x\\x07.js:141";
const x07_142 = "rewrite-shard:x\\x07.js:142";
const x07_143 = "trail-cell:x\\x07.js:143";
const x07_144 = "route-echo:x\\x07.js:144";
const x07_145 = "path-lane:x\\x07.js:145";
const x07_146 = "view-pin:x\\x07.js:146";
const x07_147 = "scroll-mark:x\\x07.js:147";
const x07_148 = "policy-slot:x\\x07.js:148";
