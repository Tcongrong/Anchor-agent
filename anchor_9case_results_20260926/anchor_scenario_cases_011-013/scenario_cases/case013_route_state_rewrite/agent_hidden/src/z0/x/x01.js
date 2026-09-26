import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 1,
  salt: 'r:01:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2061',
  shift: 5,
  mask: 4055617115
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/1/shadow', y: 'shadow', n: 15 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '1', y: '1', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(2, 11) + '=' + (cfg.slot * 3 + 1).toString(36) + 'q1';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x01_0 = "route-echo:x\\x01.js:000";
const x01_1 = "path-lane:x\\x01.js:001";
const x01_2 = "view-pin:x\\x01.js:002";
const x01_3 = "scroll-mark:x\\x01.js:003";
const x01_4 = "policy-slot:x\\x01.js:004";
const x01_5 = "crumb-track:x\\x01.js:005";
const x01_6 = "rewrite-shard:x\\x01.js:006";
const x01_7 = "trail-cell:x\\x01.js:007";
const x01_8 = "route-echo:x\\x01.js:008";
const x01_9 = "path-lane:x\\x01.js:009";
const x01_10 = "view-pin:x\\x01.js:010";
const x01_11 = "scroll-mark:x\\x01.js:011";
const x01_12 = "policy-slot:x\\x01.js:012";
const x01_13 = "crumb-track:x\\x01.js:013";
const x01_14 = "rewrite-shard:x\\x01.js:014";
const x01_15 = "trail-cell:x\\x01.js:015";
const x01_16 = "route-echo:x\\x01.js:016";
const x01_17 = "path-lane:x\\x01.js:017";
const x01_18 = "view-pin:x\\x01.js:018";
const x01_19 = "scroll-mark:x\\x01.js:019";
const x01_20 = "policy-slot:x\\x01.js:020";
const x01_21 = "crumb-track:x\\x01.js:021";
const x01_22 = "rewrite-shard:x\\x01.js:022";
const x01_23 = "trail-cell:x\\x01.js:023";
const x01_24 = "route-echo:x\\x01.js:024";
const x01_25 = "path-lane:x\\x01.js:025";
const x01_26 = "view-pin:x\\x01.js:026";
const x01_27 = "scroll-mark:x\\x01.js:027";
const x01_28 = "policy-slot:x\\x01.js:028";
const x01_29 = "crumb-track:x\\x01.js:029";
const x01_30 = "rewrite-shard:x\\x01.js:030";
const x01_31 = "trail-cell:x\\x01.js:031";
const x01_32 = "route-echo:x\\x01.js:032";
const x01_33 = "path-lane:x\\x01.js:033";
const x01_34 = "view-pin:x\\x01.js:034";
const x01_35 = "scroll-mark:x\\x01.js:035";
const x01_36 = "policy-slot:x\\x01.js:036";
const x01_37 = "crumb-track:x\\x01.js:037";
const x01_38 = "rewrite-shard:x\\x01.js:038";
const x01_39 = "trail-cell:x\\x01.js:039";
const x01_40 = "route-echo:x\\x01.js:040";
const x01_41 = "path-lane:x\\x01.js:041";
const x01_42 = "view-pin:x\\x01.js:042";
const x01_43 = "scroll-mark:x\\x01.js:043";
const x01_44 = "policy-slot:x\\x01.js:044";
const x01_45 = "crumb-track:x\\x01.js:045";
const x01_46 = "rewrite-shard:x\\x01.js:046";
const x01_47 = "trail-cell:x\\x01.js:047";
const x01_48 = "route-echo:x\\x01.js:048";
const x01_49 = "path-lane:x\\x01.js:049";
const x01_50 = "view-pin:x\\x01.js:050";
const x01_51 = "scroll-mark:x\\x01.js:051";
const x01_52 = "policy-slot:x\\x01.js:052";
const x01_53 = "crumb-track:x\\x01.js:053";
const x01_54 = "rewrite-shard:x\\x01.js:054";
const x01_55 = "trail-cell:x\\x01.js:055";
const x01_56 = "route-echo:x\\x01.js:056";
const x01_57 = "path-lane:x\\x01.js:057";
const x01_58 = "view-pin:x\\x01.js:058";
const x01_59 = "scroll-mark:x\\x01.js:059";
const x01_60 = "policy-slot:x\\x01.js:060";
const x01_61 = "crumb-track:x\\x01.js:061";
const x01_62 = "rewrite-shard:x\\x01.js:062";
const x01_63 = "trail-cell:x\\x01.js:063";
const x01_64 = "route-echo:x\\x01.js:064";
const x01_65 = "path-lane:x\\x01.js:065";
const x01_66 = "view-pin:x\\x01.js:066";
const x01_67 = "scroll-mark:x\\x01.js:067";
const x01_68 = "policy-slot:x\\x01.js:068";
const x01_69 = "crumb-track:x\\x01.js:069";
const x01_70 = "rewrite-shard:x\\x01.js:070";
const x01_71 = "trail-cell:x\\x01.js:071";
const x01_72 = "route-echo:x\\x01.js:072";
const x01_73 = "path-lane:x\\x01.js:073";
const x01_74 = "view-pin:x\\x01.js:074";
const x01_75 = "scroll-mark:x\\x01.js:075";
const x01_76 = "policy-slot:x\\x01.js:076";
const x01_77 = "crumb-track:x\\x01.js:077";
const x01_78 = "rewrite-shard:x\\x01.js:078";
const x01_79 = "trail-cell:x\\x01.js:079";
const x01_80 = "route-echo:x\\x01.js:080";
const x01_81 = "path-lane:x\\x01.js:081";
const x01_82 = "view-pin:x\\x01.js:082";
const x01_83 = "scroll-mark:x\\x01.js:083";
const x01_84 = "policy-slot:x\\x01.js:084";
const x01_85 = "crumb-track:x\\x01.js:085";
const x01_86 = "rewrite-shard:x\\x01.js:086";
const x01_87 = "trail-cell:x\\x01.js:087";
const x01_88 = "route-echo:x\\x01.js:088";
const x01_89 = "path-lane:x\\x01.js:089";
const x01_90 = "view-pin:x\\x01.js:090";
const x01_91 = "scroll-mark:x\\x01.js:091";
const x01_92 = "policy-slot:x\\x01.js:092";
const x01_93 = "crumb-track:x\\x01.js:093";
const x01_94 = "rewrite-shard:x\\x01.js:094";
const x01_95 = "trail-cell:x\\x01.js:095";
const x01_96 = "route-echo:x\\x01.js:096";
const x01_97 = "path-lane:x\\x01.js:097";
const x01_98 = "view-pin:x\\x01.js:098";
const x01_99 = "scroll-mark:x\\x01.js:099";
const x01_100 = "policy-slot:x\\x01.js:100";
const x01_101 = "crumb-track:x\\x01.js:101";
const x01_102 = "rewrite-shard:x\\x01.js:102";
const x01_103 = "trail-cell:x\\x01.js:103";
const x01_104 = "route-echo:x\\x01.js:104";
const x01_105 = "path-lane:x\\x01.js:105";
const x01_106 = "view-pin:x\\x01.js:106";
const x01_107 = "scroll-mark:x\\x01.js:107";
const x01_108 = "policy-slot:x\\x01.js:108";
const x01_109 = "crumb-track:x\\x01.js:109";
const x01_110 = "rewrite-shard:x\\x01.js:110";
const x01_111 = "trail-cell:x\\x01.js:111";
const x01_112 = "route-echo:x\\x01.js:112";
const x01_113 = "path-lane:x\\x01.js:113";
const x01_114 = "view-pin:x\\x01.js:114";
const x01_115 = "scroll-mark:x\\x01.js:115";
const x01_116 = "policy-slot:x\\x01.js:116";
const x01_117 = "crumb-track:x\\x01.js:117";
const x01_118 = "rewrite-shard:x\\x01.js:118";
const x01_119 = "trail-cell:x\\x01.js:119";
const x01_120 = "route-echo:x\\x01.js:120";
const x01_121 = "path-lane:x\\x01.js:121";
const x01_122 = "view-pin:x\\x01.js:122";
const x01_123 = "scroll-mark:x\\x01.js:123";
const x01_124 = "policy-slot:x\\x01.js:124";
const x01_125 = "crumb-track:x\\x01.js:125";
const x01_126 = "rewrite-shard:x\\x01.js:126";
const x01_127 = "trail-cell:x\\x01.js:127";
const x01_128 = "route-echo:x\\x01.js:128";
const x01_129 = "path-lane:x\\x01.js:129";
const x01_130 = "view-pin:x\\x01.js:130";
const x01_131 = "scroll-mark:x\\x01.js:131";
const x01_132 = "policy-slot:x\\x01.js:132";
const x01_133 = "crumb-track:x\\x01.js:133";
const x01_134 = "rewrite-shard:x\\x01.js:134";
const x01_135 = "trail-cell:x\\x01.js:135";
const x01_136 = "route-echo:x\\x01.js:136";
const x01_137 = "path-lane:x\\x01.js:137";
const x01_138 = "view-pin:x\\x01.js:138";
const x01_139 = "scroll-mark:x\\x01.js:139";
const x01_140 = "policy-slot:x\\x01.js:140";
const x01_141 = "crumb-track:x\\x01.js:141";
const x01_142 = "rewrite-shard:x\\x01.js:142";
const x01_143 = "trail-cell:x\\x01.js:143";
const x01_144 = "route-echo:x\\x01.js:144";
const x01_145 = "path-lane:x\\x01.js:145";
const x01_146 = "view-pin:x\\x01.js:146";
const x01_147 = "scroll-mark:x\\x01.js:147";
const x01_148 = "policy-slot:x\\x01.js:148";
