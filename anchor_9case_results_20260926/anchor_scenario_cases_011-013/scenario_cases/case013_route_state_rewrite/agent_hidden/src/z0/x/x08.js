import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 8,
  salt: 'r:08:trail',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2060',
  shift: 12,
  mask: 1161830962
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/8/shadow', y: 'shadow', n: 15 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '8', y: '8', n: 1 }
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
const x08_0 = "route-echo:x\\x08.js:000";
const x08_1 = "path-lane:x\\x08.js:001";
const x08_2 = "view-pin:x\\x08.js:002";
const x08_3 = "scroll-mark:x\\x08.js:003";
const x08_4 = "policy-slot:x\\x08.js:004";
const x08_5 = "crumb-track:x\\x08.js:005";
const x08_6 = "rewrite-shard:x\\x08.js:006";
const x08_7 = "trail-cell:x\\x08.js:007";
const x08_8 = "route-echo:x\\x08.js:008";
const x08_9 = "path-lane:x\\x08.js:009";
const x08_10 = "view-pin:x\\x08.js:010";
const x08_11 = "scroll-mark:x\\x08.js:011";
const x08_12 = "policy-slot:x\\x08.js:012";
const x08_13 = "crumb-track:x\\x08.js:013";
const x08_14 = "rewrite-shard:x\\x08.js:014";
const x08_15 = "trail-cell:x\\x08.js:015";
const x08_16 = "route-echo:x\\x08.js:016";
const x08_17 = "path-lane:x\\x08.js:017";
const x08_18 = "view-pin:x\\x08.js:018";
const x08_19 = "scroll-mark:x\\x08.js:019";
const x08_20 = "policy-slot:x\\x08.js:020";
const x08_21 = "crumb-track:x\\x08.js:021";
const x08_22 = "rewrite-shard:x\\x08.js:022";
const x08_23 = "trail-cell:x\\x08.js:023";
const x08_24 = "route-echo:x\\x08.js:024";
const x08_25 = "path-lane:x\\x08.js:025";
const x08_26 = "view-pin:x\\x08.js:026";
const x08_27 = "scroll-mark:x\\x08.js:027";
const x08_28 = "policy-slot:x\\x08.js:028";
const x08_29 = "crumb-track:x\\x08.js:029";
const x08_30 = "rewrite-shard:x\\x08.js:030";
const x08_31 = "trail-cell:x\\x08.js:031";
const x08_32 = "route-echo:x\\x08.js:032";
const x08_33 = "path-lane:x\\x08.js:033";
const x08_34 = "view-pin:x\\x08.js:034";
const x08_35 = "scroll-mark:x\\x08.js:035";
const x08_36 = "policy-slot:x\\x08.js:036";
const x08_37 = "crumb-track:x\\x08.js:037";
const x08_38 = "rewrite-shard:x\\x08.js:038";
const x08_39 = "trail-cell:x\\x08.js:039";
const x08_40 = "route-echo:x\\x08.js:040";
const x08_41 = "path-lane:x\\x08.js:041";
const x08_42 = "view-pin:x\\x08.js:042";
const x08_43 = "scroll-mark:x\\x08.js:043";
const x08_44 = "policy-slot:x\\x08.js:044";
const x08_45 = "crumb-track:x\\x08.js:045";
const x08_46 = "rewrite-shard:x\\x08.js:046";
const x08_47 = "trail-cell:x\\x08.js:047";
const x08_48 = "route-echo:x\\x08.js:048";
const x08_49 = "path-lane:x\\x08.js:049";
const x08_50 = "view-pin:x\\x08.js:050";
const x08_51 = "scroll-mark:x\\x08.js:051";
const x08_52 = "policy-slot:x\\x08.js:052";
const x08_53 = "crumb-track:x\\x08.js:053";
const x08_54 = "rewrite-shard:x\\x08.js:054";
const x08_55 = "trail-cell:x\\x08.js:055";
const x08_56 = "route-echo:x\\x08.js:056";
const x08_57 = "path-lane:x\\x08.js:057";
const x08_58 = "view-pin:x\\x08.js:058";
const x08_59 = "scroll-mark:x\\x08.js:059";
const x08_60 = "policy-slot:x\\x08.js:060";
const x08_61 = "crumb-track:x\\x08.js:061";
const x08_62 = "rewrite-shard:x\\x08.js:062";
const x08_63 = "trail-cell:x\\x08.js:063";
const x08_64 = "route-echo:x\\x08.js:064";
const x08_65 = "path-lane:x\\x08.js:065";
const x08_66 = "view-pin:x\\x08.js:066";
const x08_67 = "scroll-mark:x\\x08.js:067";
const x08_68 = "policy-slot:x\\x08.js:068";
const x08_69 = "crumb-track:x\\x08.js:069";
const x08_70 = "rewrite-shard:x\\x08.js:070";
const x08_71 = "trail-cell:x\\x08.js:071";
const x08_72 = "route-echo:x\\x08.js:072";
const x08_73 = "path-lane:x\\x08.js:073";
const x08_74 = "view-pin:x\\x08.js:074";
const x08_75 = "scroll-mark:x\\x08.js:075";
const x08_76 = "policy-slot:x\\x08.js:076";
const x08_77 = "crumb-track:x\\x08.js:077";
const x08_78 = "rewrite-shard:x\\x08.js:078";
const x08_79 = "trail-cell:x\\x08.js:079";
const x08_80 = "route-echo:x\\x08.js:080";
const x08_81 = "path-lane:x\\x08.js:081";
const x08_82 = "view-pin:x\\x08.js:082";
const x08_83 = "scroll-mark:x\\x08.js:083";
const x08_84 = "policy-slot:x\\x08.js:084";
const x08_85 = "crumb-track:x\\x08.js:085";
const x08_86 = "rewrite-shard:x\\x08.js:086";
const x08_87 = "trail-cell:x\\x08.js:087";
const x08_88 = "route-echo:x\\x08.js:088";
const x08_89 = "path-lane:x\\x08.js:089";
const x08_90 = "view-pin:x\\x08.js:090";
const x08_91 = "scroll-mark:x\\x08.js:091";
const x08_92 = "policy-slot:x\\x08.js:092";
const x08_93 = "crumb-track:x\\x08.js:093";
const x08_94 = "rewrite-shard:x\\x08.js:094";
const x08_95 = "trail-cell:x\\x08.js:095";
const x08_96 = "route-echo:x\\x08.js:096";
const x08_97 = "path-lane:x\\x08.js:097";
const x08_98 = "view-pin:x\\x08.js:098";
const x08_99 = "scroll-mark:x\\x08.js:099";
const x08_100 = "policy-slot:x\\x08.js:100";
const x08_101 = "crumb-track:x\\x08.js:101";
const x08_102 = "rewrite-shard:x\\x08.js:102";
const x08_103 = "trail-cell:x\\x08.js:103";
const x08_104 = "route-echo:x\\x08.js:104";
const x08_105 = "path-lane:x\\x08.js:105";
const x08_106 = "view-pin:x\\x08.js:106";
const x08_107 = "scroll-mark:x\\x08.js:107";
const x08_108 = "policy-slot:x\\x08.js:108";
const x08_109 = "crumb-track:x\\x08.js:109";
const x08_110 = "rewrite-shard:x\\x08.js:110";
const x08_111 = "trail-cell:x\\x08.js:111";
const x08_112 = "route-echo:x\\x08.js:112";
const x08_113 = "path-lane:x\\x08.js:113";
const x08_114 = "view-pin:x\\x08.js:114";
const x08_115 = "scroll-mark:x\\x08.js:115";
const x08_116 = "policy-slot:x\\x08.js:116";
const x08_117 = "crumb-track:x\\x08.js:117";
const x08_118 = "rewrite-shard:x\\x08.js:118";
const x08_119 = "trail-cell:x\\x08.js:119";
const x08_120 = "route-echo:x\\x08.js:120";
const x08_121 = "path-lane:x\\x08.js:121";
const x08_122 = "view-pin:x\\x08.js:122";
const x08_123 = "scroll-mark:x\\x08.js:123";
const x08_124 = "policy-slot:x\\x08.js:124";
const x08_125 = "crumb-track:x\\x08.js:125";
const x08_126 = "rewrite-shard:x\\x08.js:126";
const x08_127 = "trail-cell:x\\x08.js:127";
const x08_128 = "route-echo:x\\x08.js:128";
const x08_129 = "path-lane:x\\x08.js:129";
const x08_130 = "view-pin:x\\x08.js:130";
const x08_131 = "scroll-mark:x\\x08.js:131";
const x08_132 = "policy-slot:x\\x08.js:132";
const x08_133 = "crumb-track:x\\x08.js:133";
const x08_134 = "rewrite-shard:x\\x08.js:134";
const x08_135 = "trail-cell:x\\x08.js:135";
const x08_136 = "route-echo:x\\x08.js:136";
const x08_137 = "path-lane:x\\x08.js:137";
const x08_138 = "view-pin:x\\x08.js:138";
const x08_139 = "scroll-mark:x\\x08.js:139";
const x08_140 = "policy-slot:x\\x08.js:140";
const x08_141 = "crumb-track:x\\x08.js:141";
const x08_142 = "rewrite-shard:x\\x08.js:142";
const x08_143 = "trail-cell:x\\x08.js:143";
const x08_144 = "route-echo:x\\x08.js:144";
const x08_145 = "path-lane:x\\x08.js:145";
const x08_146 = "view-pin:x\\x08.js:146";
const x08_147 = "scroll-mark:x\\x08.js:147";
const x08_148 = "policy-slot:x\\x08.js:148";
