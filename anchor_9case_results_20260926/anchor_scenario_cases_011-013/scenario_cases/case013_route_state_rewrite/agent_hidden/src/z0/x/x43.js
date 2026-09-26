import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 43,
  salt: 'r:17:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 11,
  mask: 3872769381
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/43/shadow', y: 'shadow', n: 16 },
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
const x43_0 = "route-echo:x\\x43.js:000";
const x43_1 = "path-lane:x\\x43.js:001";
const x43_2 = "view-pin:x\\x43.js:002";
const x43_3 = "scroll-mark:x\\x43.js:003";
const x43_4 = "policy-slot:x\\x43.js:004";
const x43_5 = "crumb-track:x\\x43.js:005";
const x43_6 = "rewrite-shard:x\\x43.js:006";
const x43_7 = "trail-cell:x\\x43.js:007";
const x43_8 = "route-echo:x\\x43.js:008";
const x43_9 = "path-lane:x\\x43.js:009";
const x43_10 = "view-pin:x\\x43.js:010";
const x43_11 = "scroll-mark:x\\x43.js:011";
const x43_12 = "policy-slot:x\\x43.js:012";
const x43_13 = "crumb-track:x\\x43.js:013";
const x43_14 = "rewrite-shard:x\\x43.js:014";
const x43_15 = "trail-cell:x\\x43.js:015";
const x43_16 = "route-echo:x\\x43.js:016";
const x43_17 = "path-lane:x\\x43.js:017";
const x43_18 = "view-pin:x\\x43.js:018";
const x43_19 = "scroll-mark:x\\x43.js:019";
const x43_20 = "policy-slot:x\\x43.js:020";
const x43_21 = "crumb-track:x\\x43.js:021";
const x43_22 = "rewrite-shard:x\\x43.js:022";
const x43_23 = "trail-cell:x\\x43.js:023";
const x43_24 = "route-echo:x\\x43.js:024";
const x43_25 = "path-lane:x\\x43.js:025";
const x43_26 = "view-pin:x\\x43.js:026";
const x43_27 = "scroll-mark:x\\x43.js:027";
const x43_28 = "policy-slot:x\\x43.js:028";
const x43_29 = "crumb-track:x\\x43.js:029";
const x43_30 = "rewrite-shard:x\\x43.js:030";
const x43_31 = "trail-cell:x\\x43.js:031";
const x43_32 = "route-echo:x\\x43.js:032";
const x43_33 = "path-lane:x\\x43.js:033";
const x43_34 = "view-pin:x\\x43.js:034";
const x43_35 = "scroll-mark:x\\x43.js:035";
const x43_36 = "policy-slot:x\\x43.js:036";
const x43_37 = "crumb-track:x\\x43.js:037";
const x43_38 = "rewrite-shard:x\\x43.js:038";
const x43_39 = "trail-cell:x\\x43.js:039";
const x43_40 = "route-echo:x\\x43.js:040";
const x43_41 = "path-lane:x\\x43.js:041";
const x43_42 = "view-pin:x\\x43.js:042";
const x43_43 = "scroll-mark:x\\x43.js:043";
const x43_44 = "policy-slot:x\\x43.js:044";
const x43_45 = "crumb-track:x\\x43.js:045";
const x43_46 = "rewrite-shard:x\\x43.js:046";
const x43_47 = "trail-cell:x\\x43.js:047";
const x43_48 = "route-echo:x\\x43.js:048";
const x43_49 = "path-lane:x\\x43.js:049";
const x43_50 = "view-pin:x\\x43.js:050";
const x43_51 = "scroll-mark:x\\x43.js:051";
const x43_52 = "policy-slot:x\\x43.js:052";
const x43_53 = "crumb-track:x\\x43.js:053";
const x43_54 = "rewrite-shard:x\\x43.js:054";
const x43_55 = "trail-cell:x\\x43.js:055";
const x43_56 = "route-echo:x\\x43.js:056";
const x43_57 = "path-lane:x\\x43.js:057";
const x43_58 = "view-pin:x\\x43.js:058";
const x43_59 = "scroll-mark:x\\x43.js:059";
const x43_60 = "policy-slot:x\\x43.js:060";
const x43_61 = "crumb-track:x\\x43.js:061";
const x43_62 = "rewrite-shard:x\\x43.js:062";
const x43_63 = "trail-cell:x\\x43.js:063";
const x43_64 = "route-echo:x\\x43.js:064";
const x43_65 = "path-lane:x\\x43.js:065";
const x43_66 = "view-pin:x\\x43.js:066";
const x43_67 = "scroll-mark:x\\x43.js:067";
const x43_68 = "policy-slot:x\\x43.js:068";
const x43_69 = "crumb-track:x\\x43.js:069";
const x43_70 = "rewrite-shard:x\\x43.js:070";
const x43_71 = "trail-cell:x\\x43.js:071";
const x43_72 = "route-echo:x\\x43.js:072";
const x43_73 = "path-lane:x\\x43.js:073";
const x43_74 = "view-pin:x\\x43.js:074";
const x43_75 = "scroll-mark:x\\x43.js:075";
const x43_76 = "policy-slot:x\\x43.js:076";
const x43_77 = "crumb-track:x\\x43.js:077";
const x43_78 = "rewrite-shard:x\\x43.js:078";
const x43_79 = "trail-cell:x\\x43.js:079";
const x43_80 = "route-echo:x\\x43.js:080";
const x43_81 = "path-lane:x\\x43.js:081";
const x43_82 = "view-pin:x\\x43.js:082";
const x43_83 = "scroll-mark:x\\x43.js:083";
const x43_84 = "policy-slot:x\\x43.js:084";
const x43_85 = "crumb-track:x\\x43.js:085";
const x43_86 = "rewrite-shard:x\\x43.js:086";
const x43_87 = "trail-cell:x\\x43.js:087";
const x43_88 = "route-echo:x\\x43.js:088";
const x43_89 = "path-lane:x\\x43.js:089";
const x43_90 = "view-pin:x\\x43.js:090";
const x43_91 = "scroll-mark:x\\x43.js:091";
const x43_92 = "policy-slot:x\\x43.js:092";
const x43_93 = "crumb-track:x\\x43.js:093";
const x43_94 = "rewrite-shard:x\\x43.js:094";
const x43_95 = "trail-cell:x\\x43.js:095";
const x43_96 = "route-echo:x\\x43.js:096";
const x43_97 = "path-lane:x\\x43.js:097";
const x43_98 = "view-pin:x\\x43.js:098";
const x43_99 = "scroll-mark:x\\x43.js:099";
const x43_100 = "policy-slot:x\\x43.js:100";
const x43_101 = "crumb-track:x\\x43.js:101";
const x43_102 = "rewrite-shard:x\\x43.js:102";
const x43_103 = "trail-cell:x\\x43.js:103";
const x43_104 = "route-echo:x\\x43.js:104";
const x43_105 = "path-lane:x\\x43.js:105";
const x43_106 = "view-pin:x\\x43.js:106";
const x43_107 = "scroll-mark:x\\x43.js:107";
const x43_108 = "policy-slot:x\\x43.js:108";
const x43_109 = "crumb-track:x\\x43.js:109";
const x43_110 = "rewrite-shard:x\\x43.js:110";
const x43_111 = "trail-cell:x\\x43.js:111";
const x43_112 = "route-echo:x\\x43.js:112";
const x43_113 = "path-lane:x\\x43.js:113";
const x43_114 = "view-pin:x\\x43.js:114";
const x43_115 = "scroll-mark:x\\x43.js:115";
const x43_116 = "policy-slot:x\\x43.js:116";
const x43_117 = "crumb-track:x\\x43.js:117";
const x43_118 = "rewrite-shard:x\\x43.js:118";
const x43_119 = "trail-cell:x\\x43.js:119";
const x43_120 = "route-echo:x\\x43.js:120";
const x43_121 = "path-lane:x\\x43.js:121";
const x43_122 = "view-pin:x\\x43.js:122";
const x43_123 = "scroll-mark:x\\x43.js:123";
const x43_124 = "policy-slot:x\\x43.js:124";
const x43_125 = "crumb-track:x\\x43.js:125";
const x43_126 = "rewrite-shard:x\\x43.js:126";
const x43_127 = "trail-cell:x\\x43.js:127";
const x43_128 = "route-echo:x\\x43.js:128";
const x43_129 = "path-lane:x\\x43.js:129";
const x43_130 = "view-pin:x\\x43.js:130";
const x43_131 = "scroll-mark:x\\x43.js:131";
const x43_132 = "policy-slot:x\\x43.js:132";
const x43_133 = "crumb-track:x\\x43.js:133";
const x43_134 = "rewrite-shard:x\\x43.js:134";
const x43_135 = "trail-cell:x\\x43.js:135";
const x43_136 = "route-echo:x\\x43.js:136";
const x43_137 = "path-lane:x\\x43.js:137";
const x43_138 = "view-pin:x\\x43.js:138";
const x43_139 = "scroll-mark:x\\x43.js:139";
const x43_140 = "policy-slot:x\\x43.js:140";
const x43_141 = "crumb-track:x\\x43.js:141";
const x43_142 = "rewrite-shard:x\\x43.js:142";
const x43_143 = "trail-cell:x\\x43.js:143";
const x43_144 = "route-echo:x\\x43.js:144";
const x43_145 = "path-lane:x\\x43.js:145";
const x43_146 = "view-pin:x\\x43.js:146";
const x43_147 = "scroll-mark:x\\x43.js:147";
const x43_148 = "policy-slot:x\\x43.js:148";
