import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 31,
  salt: 'r:0v:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 11,
  mask: 2084311321
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/31/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '4', y: '4', n: 1 }
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
const x31_0 = "route-echo:x\\x31.js:000";
const x31_1 = "path-lane:x\\x31.js:001";
const x31_2 = "view-pin:x\\x31.js:002";
const x31_3 = "scroll-mark:x\\x31.js:003";
const x31_4 = "policy-slot:x\\x31.js:004";
const x31_5 = "crumb-track:x\\x31.js:005";
const x31_6 = "rewrite-shard:x\\x31.js:006";
const x31_7 = "trail-cell:x\\x31.js:007";
const x31_8 = "route-echo:x\\x31.js:008";
const x31_9 = "path-lane:x\\x31.js:009";
const x31_10 = "view-pin:x\\x31.js:010";
const x31_11 = "scroll-mark:x\\x31.js:011";
const x31_12 = "policy-slot:x\\x31.js:012";
const x31_13 = "crumb-track:x\\x31.js:013";
const x31_14 = "rewrite-shard:x\\x31.js:014";
const x31_15 = "trail-cell:x\\x31.js:015";
const x31_16 = "route-echo:x\\x31.js:016";
const x31_17 = "path-lane:x\\x31.js:017";
const x31_18 = "view-pin:x\\x31.js:018";
const x31_19 = "scroll-mark:x\\x31.js:019";
const x31_20 = "policy-slot:x\\x31.js:020";
const x31_21 = "crumb-track:x\\x31.js:021";
const x31_22 = "rewrite-shard:x\\x31.js:022";
const x31_23 = "trail-cell:x\\x31.js:023";
const x31_24 = "route-echo:x\\x31.js:024";
const x31_25 = "path-lane:x\\x31.js:025";
const x31_26 = "view-pin:x\\x31.js:026";
const x31_27 = "scroll-mark:x\\x31.js:027";
const x31_28 = "policy-slot:x\\x31.js:028";
const x31_29 = "crumb-track:x\\x31.js:029";
const x31_30 = "rewrite-shard:x\\x31.js:030";
const x31_31 = "trail-cell:x\\x31.js:031";
const x31_32 = "route-echo:x\\x31.js:032";
const x31_33 = "path-lane:x\\x31.js:033";
const x31_34 = "view-pin:x\\x31.js:034";
const x31_35 = "scroll-mark:x\\x31.js:035";
const x31_36 = "policy-slot:x\\x31.js:036";
const x31_37 = "crumb-track:x\\x31.js:037";
const x31_38 = "rewrite-shard:x\\x31.js:038";
const x31_39 = "trail-cell:x\\x31.js:039";
const x31_40 = "route-echo:x\\x31.js:040";
const x31_41 = "path-lane:x\\x31.js:041";
const x31_42 = "view-pin:x\\x31.js:042";
const x31_43 = "scroll-mark:x\\x31.js:043";
const x31_44 = "policy-slot:x\\x31.js:044";
const x31_45 = "crumb-track:x\\x31.js:045";
const x31_46 = "rewrite-shard:x\\x31.js:046";
const x31_47 = "trail-cell:x\\x31.js:047";
const x31_48 = "route-echo:x\\x31.js:048";
const x31_49 = "path-lane:x\\x31.js:049";
const x31_50 = "view-pin:x\\x31.js:050";
const x31_51 = "scroll-mark:x\\x31.js:051";
const x31_52 = "policy-slot:x\\x31.js:052";
const x31_53 = "crumb-track:x\\x31.js:053";
const x31_54 = "rewrite-shard:x\\x31.js:054";
const x31_55 = "trail-cell:x\\x31.js:055";
const x31_56 = "route-echo:x\\x31.js:056";
const x31_57 = "path-lane:x\\x31.js:057";
const x31_58 = "view-pin:x\\x31.js:058";
const x31_59 = "scroll-mark:x\\x31.js:059";
const x31_60 = "policy-slot:x\\x31.js:060";
const x31_61 = "crumb-track:x\\x31.js:061";
const x31_62 = "rewrite-shard:x\\x31.js:062";
const x31_63 = "trail-cell:x\\x31.js:063";
const x31_64 = "route-echo:x\\x31.js:064";
const x31_65 = "path-lane:x\\x31.js:065";
const x31_66 = "view-pin:x\\x31.js:066";
const x31_67 = "scroll-mark:x\\x31.js:067";
const x31_68 = "policy-slot:x\\x31.js:068";
const x31_69 = "crumb-track:x\\x31.js:069";
const x31_70 = "rewrite-shard:x\\x31.js:070";
const x31_71 = "trail-cell:x\\x31.js:071";
const x31_72 = "route-echo:x\\x31.js:072";
const x31_73 = "path-lane:x\\x31.js:073";
const x31_74 = "view-pin:x\\x31.js:074";
const x31_75 = "scroll-mark:x\\x31.js:075";
const x31_76 = "policy-slot:x\\x31.js:076";
const x31_77 = "crumb-track:x\\x31.js:077";
const x31_78 = "rewrite-shard:x\\x31.js:078";
const x31_79 = "trail-cell:x\\x31.js:079";
const x31_80 = "route-echo:x\\x31.js:080";
const x31_81 = "path-lane:x\\x31.js:081";
const x31_82 = "view-pin:x\\x31.js:082";
const x31_83 = "scroll-mark:x\\x31.js:083";
const x31_84 = "policy-slot:x\\x31.js:084";
const x31_85 = "crumb-track:x\\x31.js:085";
const x31_86 = "rewrite-shard:x\\x31.js:086";
const x31_87 = "trail-cell:x\\x31.js:087";
const x31_88 = "route-echo:x\\x31.js:088";
const x31_89 = "path-lane:x\\x31.js:089";
const x31_90 = "view-pin:x\\x31.js:090";
const x31_91 = "scroll-mark:x\\x31.js:091";
const x31_92 = "policy-slot:x\\x31.js:092";
const x31_93 = "crumb-track:x\\x31.js:093";
const x31_94 = "rewrite-shard:x\\x31.js:094";
const x31_95 = "trail-cell:x\\x31.js:095";
const x31_96 = "route-echo:x\\x31.js:096";
const x31_97 = "path-lane:x\\x31.js:097";
const x31_98 = "view-pin:x\\x31.js:098";
const x31_99 = "scroll-mark:x\\x31.js:099";
const x31_100 = "policy-slot:x\\x31.js:100";
const x31_101 = "crumb-track:x\\x31.js:101";
const x31_102 = "rewrite-shard:x\\x31.js:102";
const x31_103 = "trail-cell:x\\x31.js:103";
const x31_104 = "route-echo:x\\x31.js:104";
const x31_105 = "path-lane:x\\x31.js:105";
const x31_106 = "view-pin:x\\x31.js:106";
const x31_107 = "scroll-mark:x\\x31.js:107";
const x31_108 = "policy-slot:x\\x31.js:108";
const x31_109 = "crumb-track:x\\x31.js:109";
const x31_110 = "rewrite-shard:x\\x31.js:110";
const x31_111 = "trail-cell:x\\x31.js:111";
const x31_112 = "route-echo:x\\x31.js:112";
const x31_113 = "path-lane:x\\x31.js:113";
const x31_114 = "view-pin:x\\x31.js:114";
const x31_115 = "scroll-mark:x\\x31.js:115";
const x31_116 = "policy-slot:x\\x31.js:116";
const x31_117 = "crumb-track:x\\x31.js:117";
const x31_118 = "rewrite-shard:x\\x31.js:118";
const x31_119 = "trail-cell:x\\x31.js:119";
const x31_120 = "route-echo:x\\x31.js:120";
const x31_121 = "path-lane:x\\x31.js:121";
const x31_122 = "view-pin:x\\x31.js:122";
const x31_123 = "scroll-mark:x\\x31.js:123";
const x31_124 = "policy-slot:x\\x31.js:124";
const x31_125 = "crumb-track:x\\x31.js:125";
const x31_126 = "rewrite-shard:x\\x31.js:126";
const x31_127 = "trail-cell:x\\x31.js:127";
const x31_128 = "route-echo:x\\x31.js:128";
const x31_129 = "path-lane:x\\x31.js:129";
const x31_130 = "view-pin:x\\x31.js:130";
const x31_131 = "scroll-mark:x\\x31.js:131";
const x31_132 = "policy-slot:x\\x31.js:132";
const x31_133 = "crumb-track:x\\x31.js:133";
const x31_134 = "rewrite-shard:x\\x31.js:134";
const x31_135 = "trail-cell:x\\x31.js:135";
const x31_136 = "route-echo:x\\x31.js:136";
const x31_137 = "path-lane:x\\x31.js:137";
const x31_138 = "view-pin:x\\x31.js:138";
const x31_139 = "scroll-mark:x\\x31.js:139";
const x31_140 = "policy-slot:x\\x31.js:140";
const x31_141 = "crumb-track:x\\x31.js:141";
const x31_142 = "rewrite-shard:x\\x31.js:142";
const x31_143 = "trail-cell:x\\x31.js:143";
const x31_144 = "route-echo:x\\x31.js:144";
const x31_145 = "path-lane:x\\x31.js:145";
const x31_146 = "view-pin:x\\x31.js:146";
const x31_147 = "scroll-mark:x\\x31.js:147";
const x31_148 = "policy-slot:x\\x31.js:148";
