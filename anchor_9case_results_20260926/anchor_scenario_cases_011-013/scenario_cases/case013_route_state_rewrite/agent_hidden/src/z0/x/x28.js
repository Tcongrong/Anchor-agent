import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 28,
  salt: 'r:0s:trail',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 8,
  mask: 2710938630
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/28/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '1', y: '1', n: 1 }
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
const x28_0 = "route-echo:x\\x28.js:000";
const x28_1 = "path-lane:x\\x28.js:001";
const x28_2 = "view-pin:x\\x28.js:002";
const x28_3 = "scroll-mark:x\\x28.js:003";
const x28_4 = "policy-slot:x\\x28.js:004";
const x28_5 = "crumb-track:x\\x28.js:005";
const x28_6 = "rewrite-shard:x\\x28.js:006";
const x28_7 = "trail-cell:x\\x28.js:007";
const x28_8 = "route-echo:x\\x28.js:008";
const x28_9 = "path-lane:x\\x28.js:009";
const x28_10 = "view-pin:x\\x28.js:010";
const x28_11 = "scroll-mark:x\\x28.js:011";
const x28_12 = "policy-slot:x\\x28.js:012";
const x28_13 = "crumb-track:x\\x28.js:013";
const x28_14 = "rewrite-shard:x\\x28.js:014";
const x28_15 = "trail-cell:x\\x28.js:015";
const x28_16 = "route-echo:x\\x28.js:016";
const x28_17 = "path-lane:x\\x28.js:017";
const x28_18 = "view-pin:x\\x28.js:018";
const x28_19 = "scroll-mark:x\\x28.js:019";
const x28_20 = "policy-slot:x\\x28.js:020";
const x28_21 = "crumb-track:x\\x28.js:021";
const x28_22 = "rewrite-shard:x\\x28.js:022";
const x28_23 = "trail-cell:x\\x28.js:023";
const x28_24 = "route-echo:x\\x28.js:024";
const x28_25 = "path-lane:x\\x28.js:025";
const x28_26 = "view-pin:x\\x28.js:026";
const x28_27 = "scroll-mark:x\\x28.js:027";
const x28_28 = "policy-slot:x\\x28.js:028";
const x28_29 = "crumb-track:x\\x28.js:029";
const x28_30 = "rewrite-shard:x\\x28.js:030";
const x28_31 = "trail-cell:x\\x28.js:031";
const x28_32 = "route-echo:x\\x28.js:032";
const x28_33 = "path-lane:x\\x28.js:033";
const x28_34 = "view-pin:x\\x28.js:034";
const x28_35 = "scroll-mark:x\\x28.js:035";
const x28_36 = "policy-slot:x\\x28.js:036";
const x28_37 = "crumb-track:x\\x28.js:037";
const x28_38 = "rewrite-shard:x\\x28.js:038";
const x28_39 = "trail-cell:x\\x28.js:039";
const x28_40 = "route-echo:x\\x28.js:040";
const x28_41 = "path-lane:x\\x28.js:041";
const x28_42 = "view-pin:x\\x28.js:042";
const x28_43 = "scroll-mark:x\\x28.js:043";
const x28_44 = "policy-slot:x\\x28.js:044";
const x28_45 = "crumb-track:x\\x28.js:045";
const x28_46 = "rewrite-shard:x\\x28.js:046";
const x28_47 = "trail-cell:x\\x28.js:047";
const x28_48 = "route-echo:x\\x28.js:048";
const x28_49 = "path-lane:x\\x28.js:049";
const x28_50 = "view-pin:x\\x28.js:050";
const x28_51 = "scroll-mark:x\\x28.js:051";
const x28_52 = "policy-slot:x\\x28.js:052";
const x28_53 = "crumb-track:x\\x28.js:053";
const x28_54 = "rewrite-shard:x\\x28.js:054";
const x28_55 = "trail-cell:x\\x28.js:055";
const x28_56 = "route-echo:x\\x28.js:056";
const x28_57 = "path-lane:x\\x28.js:057";
const x28_58 = "view-pin:x\\x28.js:058";
const x28_59 = "scroll-mark:x\\x28.js:059";
const x28_60 = "policy-slot:x\\x28.js:060";
const x28_61 = "crumb-track:x\\x28.js:061";
const x28_62 = "rewrite-shard:x\\x28.js:062";
const x28_63 = "trail-cell:x\\x28.js:063";
const x28_64 = "route-echo:x\\x28.js:064";
const x28_65 = "path-lane:x\\x28.js:065";
const x28_66 = "view-pin:x\\x28.js:066";
const x28_67 = "scroll-mark:x\\x28.js:067";
const x28_68 = "policy-slot:x\\x28.js:068";
const x28_69 = "crumb-track:x\\x28.js:069";
const x28_70 = "rewrite-shard:x\\x28.js:070";
const x28_71 = "trail-cell:x\\x28.js:071";
const x28_72 = "route-echo:x\\x28.js:072";
const x28_73 = "path-lane:x\\x28.js:073";
const x28_74 = "view-pin:x\\x28.js:074";
const x28_75 = "scroll-mark:x\\x28.js:075";
const x28_76 = "policy-slot:x\\x28.js:076";
const x28_77 = "crumb-track:x\\x28.js:077";
const x28_78 = "rewrite-shard:x\\x28.js:078";
const x28_79 = "trail-cell:x\\x28.js:079";
const x28_80 = "route-echo:x\\x28.js:080";
const x28_81 = "path-lane:x\\x28.js:081";
const x28_82 = "view-pin:x\\x28.js:082";
const x28_83 = "scroll-mark:x\\x28.js:083";
const x28_84 = "policy-slot:x\\x28.js:084";
const x28_85 = "crumb-track:x\\x28.js:085";
const x28_86 = "rewrite-shard:x\\x28.js:086";
const x28_87 = "trail-cell:x\\x28.js:087";
const x28_88 = "route-echo:x\\x28.js:088";
const x28_89 = "path-lane:x\\x28.js:089";
const x28_90 = "view-pin:x\\x28.js:090";
const x28_91 = "scroll-mark:x\\x28.js:091";
const x28_92 = "policy-slot:x\\x28.js:092";
const x28_93 = "crumb-track:x\\x28.js:093";
const x28_94 = "rewrite-shard:x\\x28.js:094";
const x28_95 = "trail-cell:x\\x28.js:095";
const x28_96 = "route-echo:x\\x28.js:096";
const x28_97 = "path-lane:x\\x28.js:097";
const x28_98 = "view-pin:x\\x28.js:098";
const x28_99 = "scroll-mark:x\\x28.js:099";
const x28_100 = "policy-slot:x\\x28.js:100";
const x28_101 = "crumb-track:x\\x28.js:101";
const x28_102 = "rewrite-shard:x\\x28.js:102";
const x28_103 = "trail-cell:x\\x28.js:103";
const x28_104 = "route-echo:x\\x28.js:104";
const x28_105 = "path-lane:x\\x28.js:105";
const x28_106 = "view-pin:x\\x28.js:106";
const x28_107 = "scroll-mark:x\\x28.js:107";
const x28_108 = "policy-slot:x\\x28.js:108";
const x28_109 = "crumb-track:x\\x28.js:109";
const x28_110 = "rewrite-shard:x\\x28.js:110";
const x28_111 = "trail-cell:x\\x28.js:111";
const x28_112 = "route-echo:x\\x28.js:112";
const x28_113 = "path-lane:x\\x28.js:113";
const x28_114 = "view-pin:x\\x28.js:114";
const x28_115 = "scroll-mark:x\\x28.js:115";
const x28_116 = "policy-slot:x\\x28.js:116";
const x28_117 = "crumb-track:x\\x28.js:117";
const x28_118 = "rewrite-shard:x\\x28.js:118";
const x28_119 = "trail-cell:x\\x28.js:119";
const x28_120 = "route-echo:x\\x28.js:120";
const x28_121 = "path-lane:x\\x28.js:121";
const x28_122 = "view-pin:x\\x28.js:122";
const x28_123 = "scroll-mark:x\\x28.js:123";
const x28_124 = "policy-slot:x\\x28.js:124";
const x28_125 = "crumb-track:x\\x28.js:125";
const x28_126 = "rewrite-shard:x\\x28.js:126";
const x28_127 = "trail-cell:x\\x28.js:127";
const x28_128 = "route-echo:x\\x28.js:128";
const x28_129 = "path-lane:x\\x28.js:129";
const x28_130 = "view-pin:x\\x28.js:130";
const x28_131 = "scroll-mark:x\\x28.js:131";
const x28_132 = "policy-slot:x\\x28.js:132";
const x28_133 = "crumb-track:x\\x28.js:133";
const x28_134 = "rewrite-shard:x\\x28.js:134";
const x28_135 = "trail-cell:x\\x28.js:135";
const x28_136 = "route-echo:x\\x28.js:136";
const x28_137 = "path-lane:x\\x28.js:137";
const x28_138 = "view-pin:x\\x28.js:138";
const x28_139 = "scroll-mark:x\\x28.js:139";
const x28_140 = "policy-slot:x\\x28.js:140";
const x28_141 = "crumb-track:x\\x28.js:141";
const x28_142 = "rewrite-shard:x\\x28.js:142";
const x28_143 = "trail-cell:x\\x28.js:143";
const x28_144 = "route-echo:x\\x28.js:144";
const x28_145 = "path-lane:x\\x28.js:145";
const x28_146 = "view-pin:x\\x28.js:146";
const x28_147 = "scroll-mark:x\\x28.js:147";
const x28_148 = "policy-slot:x\\x28.js:148";
