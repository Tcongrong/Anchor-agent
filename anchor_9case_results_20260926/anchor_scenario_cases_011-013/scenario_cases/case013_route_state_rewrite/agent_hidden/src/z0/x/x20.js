import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 20,
  salt: 'r:0k:trail',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2060',
  shift: 12,
  mask: 2950289022
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/20/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '2', y: '2', n: 1 }
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
const x20_0 = "route-echo:x\\x20.js:000";
const x20_1 = "path-lane:x\\x20.js:001";
const x20_2 = "view-pin:x\\x20.js:002";
const x20_3 = "scroll-mark:x\\x20.js:003";
const x20_4 = "policy-slot:x\\x20.js:004";
const x20_5 = "crumb-track:x\\x20.js:005";
const x20_6 = "rewrite-shard:x\\x20.js:006";
const x20_7 = "trail-cell:x\\x20.js:007";
const x20_8 = "route-echo:x\\x20.js:008";
const x20_9 = "path-lane:x\\x20.js:009";
const x20_10 = "view-pin:x\\x20.js:010";
const x20_11 = "scroll-mark:x\\x20.js:011";
const x20_12 = "policy-slot:x\\x20.js:012";
const x20_13 = "crumb-track:x\\x20.js:013";
const x20_14 = "rewrite-shard:x\\x20.js:014";
const x20_15 = "trail-cell:x\\x20.js:015";
const x20_16 = "route-echo:x\\x20.js:016";
const x20_17 = "path-lane:x\\x20.js:017";
const x20_18 = "view-pin:x\\x20.js:018";
const x20_19 = "scroll-mark:x\\x20.js:019";
const x20_20 = "policy-slot:x\\x20.js:020";
const x20_21 = "crumb-track:x\\x20.js:021";
const x20_22 = "rewrite-shard:x\\x20.js:022";
const x20_23 = "trail-cell:x\\x20.js:023";
const x20_24 = "route-echo:x\\x20.js:024";
const x20_25 = "path-lane:x\\x20.js:025";
const x20_26 = "view-pin:x\\x20.js:026";
const x20_27 = "scroll-mark:x\\x20.js:027";
const x20_28 = "policy-slot:x\\x20.js:028";
const x20_29 = "crumb-track:x\\x20.js:029";
const x20_30 = "rewrite-shard:x\\x20.js:030";
const x20_31 = "trail-cell:x\\x20.js:031";
const x20_32 = "route-echo:x\\x20.js:032";
const x20_33 = "path-lane:x\\x20.js:033";
const x20_34 = "view-pin:x\\x20.js:034";
const x20_35 = "scroll-mark:x\\x20.js:035";
const x20_36 = "policy-slot:x\\x20.js:036";
const x20_37 = "crumb-track:x\\x20.js:037";
const x20_38 = "rewrite-shard:x\\x20.js:038";
const x20_39 = "trail-cell:x\\x20.js:039";
const x20_40 = "route-echo:x\\x20.js:040";
const x20_41 = "path-lane:x\\x20.js:041";
const x20_42 = "view-pin:x\\x20.js:042";
const x20_43 = "scroll-mark:x\\x20.js:043";
const x20_44 = "policy-slot:x\\x20.js:044";
const x20_45 = "crumb-track:x\\x20.js:045";
const x20_46 = "rewrite-shard:x\\x20.js:046";
const x20_47 = "trail-cell:x\\x20.js:047";
const x20_48 = "route-echo:x\\x20.js:048";
const x20_49 = "path-lane:x\\x20.js:049";
const x20_50 = "view-pin:x\\x20.js:050";
const x20_51 = "scroll-mark:x\\x20.js:051";
const x20_52 = "policy-slot:x\\x20.js:052";
const x20_53 = "crumb-track:x\\x20.js:053";
const x20_54 = "rewrite-shard:x\\x20.js:054";
const x20_55 = "trail-cell:x\\x20.js:055";
const x20_56 = "route-echo:x\\x20.js:056";
const x20_57 = "path-lane:x\\x20.js:057";
const x20_58 = "view-pin:x\\x20.js:058";
const x20_59 = "scroll-mark:x\\x20.js:059";
const x20_60 = "policy-slot:x\\x20.js:060";
const x20_61 = "crumb-track:x\\x20.js:061";
const x20_62 = "rewrite-shard:x\\x20.js:062";
const x20_63 = "trail-cell:x\\x20.js:063";
const x20_64 = "route-echo:x\\x20.js:064";
const x20_65 = "path-lane:x\\x20.js:065";
const x20_66 = "view-pin:x\\x20.js:066";
const x20_67 = "scroll-mark:x\\x20.js:067";
const x20_68 = "policy-slot:x\\x20.js:068";
const x20_69 = "crumb-track:x\\x20.js:069";
const x20_70 = "rewrite-shard:x\\x20.js:070";
const x20_71 = "trail-cell:x\\x20.js:071";
const x20_72 = "route-echo:x\\x20.js:072";
const x20_73 = "path-lane:x\\x20.js:073";
const x20_74 = "view-pin:x\\x20.js:074";
const x20_75 = "scroll-mark:x\\x20.js:075";
const x20_76 = "policy-slot:x\\x20.js:076";
const x20_77 = "crumb-track:x\\x20.js:077";
const x20_78 = "rewrite-shard:x\\x20.js:078";
const x20_79 = "trail-cell:x\\x20.js:079";
const x20_80 = "route-echo:x\\x20.js:080";
const x20_81 = "path-lane:x\\x20.js:081";
const x20_82 = "view-pin:x\\x20.js:082";
const x20_83 = "scroll-mark:x\\x20.js:083";
const x20_84 = "policy-slot:x\\x20.js:084";
const x20_85 = "crumb-track:x\\x20.js:085";
const x20_86 = "rewrite-shard:x\\x20.js:086";
const x20_87 = "trail-cell:x\\x20.js:087";
const x20_88 = "route-echo:x\\x20.js:088";
const x20_89 = "path-lane:x\\x20.js:089";
const x20_90 = "view-pin:x\\x20.js:090";
const x20_91 = "scroll-mark:x\\x20.js:091";
const x20_92 = "policy-slot:x\\x20.js:092";
const x20_93 = "crumb-track:x\\x20.js:093";
const x20_94 = "rewrite-shard:x\\x20.js:094";
const x20_95 = "trail-cell:x\\x20.js:095";
const x20_96 = "route-echo:x\\x20.js:096";
const x20_97 = "path-lane:x\\x20.js:097";
const x20_98 = "view-pin:x\\x20.js:098";
const x20_99 = "scroll-mark:x\\x20.js:099";
const x20_100 = "policy-slot:x\\x20.js:100";
const x20_101 = "crumb-track:x\\x20.js:101";
const x20_102 = "rewrite-shard:x\\x20.js:102";
const x20_103 = "trail-cell:x\\x20.js:103";
const x20_104 = "route-echo:x\\x20.js:104";
const x20_105 = "path-lane:x\\x20.js:105";
const x20_106 = "view-pin:x\\x20.js:106";
const x20_107 = "scroll-mark:x\\x20.js:107";
const x20_108 = "policy-slot:x\\x20.js:108";
const x20_109 = "crumb-track:x\\x20.js:109";
const x20_110 = "rewrite-shard:x\\x20.js:110";
const x20_111 = "trail-cell:x\\x20.js:111";
const x20_112 = "route-echo:x\\x20.js:112";
const x20_113 = "path-lane:x\\x20.js:113";
const x20_114 = "view-pin:x\\x20.js:114";
const x20_115 = "scroll-mark:x\\x20.js:115";
const x20_116 = "policy-slot:x\\x20.js:116";
const x20_117 = "crumb-track:x\\x20.js:117";
const x20_118 = "rewrite-shard:x\\x20.js:118";
const x20_119 = "trail-cell:x\\x20.js:119";
const x20_120 = "route-echo:x\\x20.js:120";
const x20_121 = "path-lane:x\\x20.js:121";
const x20_122 = "view-pin:x\\x20.js:122";
const x20_123 = "scroll-mark:x\\x20.js:123";
const x20_124 = "policy-slot:x\\x20.js:124";
const x20_125 = "crumb-track:x\\x20.js:125";
const x20_126 = "rewrite-shard:x\\x20.js:126";
const x20_127 = "trail-cell:x\\x20.js:127";
const x20_128 = "route-echo:x\\x20.js:128";
const x20_129 = "path-lane:x\\x20.js:129";
const x20_130 = "view-pin:x\\x20.js:130";
const x20_131 = "scroll-mark:x\\x20.js:131";
const x20_132 = "policy-slot:x\\x20.js:132";
const x20_133 = "crumb-track:x\\x20.js:133";
const x20_134 = "rewrite-shard:x\\x20.js:134";
const x20_135 = "trail-cell:x\\x20.js:135";
const x20_136 = "route-echo:x\\x20.js:136";
const x20_137 = "path-lane:x\\x20.js:137";
const x20_138 = "view-pin:x\\x20.js:138";
const x20_139 = "scroll-mark:x\\x20.js:139";
const x20_140 = "policy-slot:x\\x20.js:140";
const x20_141 = "crumb-track:x\\x20.js:141";
const x20_142 = "rewrite-shard:x\\x20.js:142";
const x20_143 = "trail-cell:x\\x20.js:143";
const x20_144 = "route-echo:x\\x20.js:144";
const x20_145 = "path-lane:x\\x20.js:145";
const x20_146 = "view-pin:x\\x20.js:146";
const x20_147 = "scroll-mark:x\\x20.js:147";
const x20_148 = "policy-slot:x\\x20.js:148";
