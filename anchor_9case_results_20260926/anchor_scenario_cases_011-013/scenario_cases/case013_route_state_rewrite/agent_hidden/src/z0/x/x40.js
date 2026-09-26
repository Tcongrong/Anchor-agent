import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 40,
  salt: 'r:14:trail',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 8,
  mask: 204429394
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/40/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '4', y: '4', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 12) + '/' + (cfg.slot + 5).toString(36) + 'r0';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x40_0 = "route-echo:x\\x40.js:000";
const x40_1 = "path-lane:x\\x40.js:001";
const x40_2 = "view-pin:x\\x40.js:002";
const x40_3 = "scroll-mark:x\\x40.js:003";
const x40_4 = "policy-slot:x\\x40.js:004";
const x40_5 = "crumb-track:x\\x40.js:005";
const x40_6 = "rewrite-shard:x\\x40.js:006";
const x40_7 = "trail-cell:x\\x40.js:007";
const x40_8 = "route-echo:x\\x40.js:008";
const x40_9 = "path-lane:x\\x40.js:009";
const x40_10 = "view-pin:x\\x40.js:010";
const x40_11 = "scroll-mark:x\\x40.js:011";
const x40_12 = "policy-slot:x\\x40.js:012";
const x40_13 = "crumb-track:x\\x40.js:013";
const x40_14 = "rewrite-shard:x\\x40.js:014";
const x40_15 = "trail-cell:x\\x40.js:015";
const x40_16 = "route-echo:x\\x40.js:016";
const x40_17 = "path-lane:x\\x40.js:017";
const x40_18 = "view-pin:x\\x40.js:018";
const x40_19 = "scroll-mark:x\\x40.js:019";
const x40_20 = "policy-slot:x\\x40.js:020";
const x40_21 = "crumb-track:x\\x40.js:021";
const x40_22 = "rewrite-shard:x\\x40.js:022";
const x40_23 = "trail-cell:x\\x40.js:023";
const x40_24 = "route-echo:x\\x40.js:024";
const x40_25 = "path-lane:x\\x40.js:025";
const x40_26 = "view-pin:x\\x40.js:026";
const x40_27 = "scroll-mark:x\\x40.js:027";
const x40_28 = "policy-slot:x\\x40.js:028";
const x40_29 = "crumb-track:x\\x40.js:029";
const x40_30 = "rewrite-shard:x\\x40.js:030";
const x40_31 = "trail-cell:x\\x40.js:031";
const x40_32 = "route-echo:x\\x40.js:032";
const x40_33 = "path-lane:x\\x40.js:033";
const x40_34 = "view-pin:x\\x40.js:034";
const x40_35 = "scroll-mark:x\\x40.js:035";
const x40_36 = "policy-slot:x\\x40.js:036";
const x40_37 = "crumb-track:x\\x40.js:037";
const x40_38 = "rewrite-shard:x\\x40.js:038";
const x40_39 = "trail-cell:x\\x40.js:039";
const x40_40 = "route-echo:x\\x40.js:040";
const x40_41 = "path-lane:x\\x40.js:041";
const x40_42 = "view-pin:x\\x40.js:042";
const x40_43 = "scroll-mark:x\\x40.js:043";
const x40_44 = "policy-slot:x\\x40.js:044";
const x40_45 = "crumb-track:x\\x40.js:045";
const x40_46 = "rewrite-shard:x\\x40.js:046";
const x40_47 = "trail-cell:x\\x40.js:047";
const x40_48 = "route-echo:x\\x40.js:048";
const x40_49 = "path-lane:x\\x40.js:049";
const x40_50 = "view-pin:x\\x40.js:050";
const x40_51 = "scroll-mark:x\\x40.js:051";
const x40_52 = "policy-slot:x\\x40.js:052";
const x40_53 = "crumb-track:x\\x40.js:053";
const x40_54 = "rewrite-shard:x\\x40.js:054";
const x40_55 = "trail-cell:x\\x40.js:055";
const x40_56 = "route-echo:x\\x40.js:056";
const x40_57 = "path-lane:x\\x40.js:057";
const x40_58 = "view-pin:x\\x40.js:058";
const x40_59 = "scroll-mark:x\\x40.js:059";
const x40_60 = "policy-slot:x\\x40.js:060";
const x40_61 = "crumb-track:x\\x40.js:061";
const x40_62 = "rewrite-shard:x\\x40.js:062";
const x40_63 = "trail-cell:x\\x40.js:063";
const x40_64 = "route-echo:x\\x40.js:064";
const x40_65 = "path-lane:x\\x40.js:065";
const x40_66 = "view-pin:x\\x40.js:066";
const x40_67 = "scroll-mark:x\\x40.js:067";
const x40_68 = "policy-slot:x\\x40.js:068";
const x40_69 = "crumb-track:x\\x40.js:069";
const x40_70 = "rewrite-shard:x\\x40.js:070";
const x40_71 = "trail-cell:x\\x40.js:071";
const x40_72 = "route-echo:x\\x40.js:072";
const x40_73 = "path-lane:x\\x40.js:073";
const x40_74 = "view-pin:x\\x40.js:074";
const x40_75 = "scroll-mark:x\\x40.js:075";
const x40_76 = "policy-slot:x\\x40.js:076";
const x40_77 = "crumb-track:x\\x40.js:077";
const x40_78 = "rewrite-shard:x\\x40.js:078";
const x40_79 = "trail-cell:x\\x40.js:079";
const x40_80 = "route-echo:x\\x40.js:080";
const x40_81 = "path-lane:x\\x40.js:081";
const x40_82 = "view-pin:x\\x40.js:082";
const x40_83 = "scroll-mark:x\\x40.js:083";
const x40_84 = "policy-slot:x\\x40.js:084";
const x40_85 = "crumb-track:x\\x40.js:085";
const x40_86 = "rewrite-shard:x\\x40.js:086";
const x40_87 = "trail-cell:x\\x40.js:087";
const x40_88 = "route-echo:x\\x40.js:088";
const x40_89 = "path-lane:x\\x40.js:089";
const x40_90 = "view-pin:x\\x40.js:090";
const x40_91 = "scroll-mark:x\\x40.js:091";
const x40_92 = "policy-slot:x\\x40.js:092";
const x40_93 = "crumb-track:x\\x40.js:093";
const x40_94 = "rewrite-shard:x\\x40.js:094";
const x40_95 = "trail-cell:x\\x40.js:095";
const x40_96 = "route-echo:x\\x40.js:096";
const x40_97 = "path-lane:x\\x40.js:097";
const x40_98 = "view-pin:x\\x40.js:098";
const x40_99 = "scroll-mark:x\\x40.js:099";
const x40_100 = "policy-slot:x\\x40.js:100";
const x40_101 = "crumb-track:x\\x40.js:101";
const x40_102 = "rewrite-shard:x\\x40.js:102";
const x40_103 = "trail-cell:x\\x40.js:103";
const x40_104 = "route-echo:x\\x40.js:104";
const x40_105 = "path-lane:x\\x40.js:105";
const x40_106 = "view-pin:x\\x40.js:106";
const x40_107 = "scroll-mark:x\\x40.js:107";
const x40_108 = "policy-slot:x\\x40.js:108";
const x40_109 = "crumb-track:x\\x40.js:109";
const x40_110 = "rewrite-shard:x\\x40.js:110";
const x40_111 = "trail-cell:x\\x40.js:111";
const x40_112 = "route-echo:x\\x40.js:112";
const x40_113 = "path-lane:x\\x40.js:113";
const x40_114 = "view-pin:x\\x40.js:114";
const x40_115 = "scroll-mark:x\\x40.js:115";
const x40_116 = "policy-slot:x\\x40.js:116";
const x40_117 = "crumb-track:x\\x40.js:117";
const x40_118 = "rewrite-shard:x\\x40.js:118";
const x40_119 = "trail-cell:x\\x40.js:119";
const x40_120 = "route-echo:x\\x40.js:120";
const x40_121 = "path-lane:x\\x40.js:121";
const x40_122 = "view-pin:x\\x40.js:122";
const x40_123 = "scroll-mark:x\\x40.js:123";
const x40_124 = "policy-slot:x\\x40.js:124";
const x40_125 = "crumb-track:x\\x40.js:125";
const x40_126 = "rewrite-shard:x\\x40.js:126";
const x40_127 = "trail-cell:x\\x40.js:127";
const x40_128 = "route-echo:x\\x40.js:128";
const x40_129 = "path-lane:x\\x40.js:129";
const x40_130 = "view-pin:x\\x40.js:130";
const x40_131 = "scroll-mark:x\\x40.js:131";
const x40_132 = "policy-slot:x\\x40.js:132";
const x40_133 = "crumb-track:x\\x40.js:133";
const x40_134 = "rewrite-shard:x\\x40.js:134";
const x40_135 = "trail-cell:x\\x40.js:135";
const x40_136 = "route-echo:x\\x40.js:136";
const x40_137 = "path-lane:x\\x40.js:137";
const x40_138 = "view-pin:x\\x40.js:138";
const x40_139 = "scroll-mark:x\\x40.js:139";
const x40_140 = "policy-slot:x\\x40.js:140";
const x40_141 = "crumb-track:x\\x40.js:141";
const x40_142 = "rewrite-shard:x\\x40.js:142";
const x40_143 = "trail-cell:x\\x40.js:143";
const x40_144 = "route-echo:x\\x40.js:144";
const x40_145 = "path-lane:x\\x40.js:145";
const x40_146 = "view-pin:x\\x40.js:146";
const x40_147 = "scroll-mark:x\\x40.js:147";
const x40_148 = "policy-slot:x\\x40.js:148";
