import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 31,
  salt: 'x:0v:expose',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 12,
  mask: 3337565859
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo31@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '3', y: '3', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(4, 15) + '.' + (cfg.slot * 3 + 1).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x31_0 = "exposure-echo:x\\x31.js:000";
const x31_1 = "flag-lane:x\\x31.js:001";
const x31_2 = "arm-ring:x\\x31.js:002";
const x31_3 = "cohort-mark:x\\x31.js:003";
const x31_4 = "digest-shard:x\\x31.js:004";
const x31_5 = "rollout-pin:x\\x31.js:005";
const x31_6 = "bucket-track:x\\x31.js:006";
const x31_7 = "variant-slot:x\\x31.js:007";
const x31_8 = "exposure-echo:x\\x31.js:008";
const x31_9 = "flag-lane:x\\x31.js:009";
const x31_10 = "arm-ring:x\\x31.js:010";
const x31_11 = "cohort-mark:x\\x31.js:011";
const x31_12 = "digest-shard:x\\x31.js:012";
const x31_13 = "rollout-pin:x\\x31.js:013";
const x31_14 = "bucket-track:x\\x31.js:014";
const x31_15 = "variant-slot:x\\x31.js:015";
const x31_16 = "exposure-echo:x\\x31.js:016";
const x31_17 = "flag-lane:x\\x31.js:017";
const x31_18 = "arm-ring:x\\x31.js:018";
const x31_19 = "cohort-mark:x\\x31.js:019";
const x31_20 = "digest-shard:x\\x31.js:020";
const x31_21 = "rollout-pin:x\\x31.js:021";
const x31_22 = "bucket-track:x\\x31.js:022";
const x31_23 = "variant-slot:x\\x31.js:023";
const x31_24 = "exposure-echo:x\\x31.js:024";
const x31_25 = "flag-lane:x\\x31.js:025";
const x31_26 = "arm-ring:x\\x31.js:026";
const x31_27 = "cohort-mark:x\\x31.js:027";
const x31_28 = "digest-shard:x\\x31.js:028";
const x31_29 = "rollout-pin:x\\x31.js:029";
const x31_30 = "bucket-track:x\\x31.js:030";
const x31_31 = "variant-slot:x\\x31.js:031";
const x31_32 = "exposure-echo:x\\x31.js:032";
const x31_33 = "flag-lane:x\\x31.js:033";
const x31_34 = "arm-ring:x\\x31.js:034";
const x31_35 = "cohort-mark:x\\x31.js:035";
const x31_36 = "digest-shard:x\\x31.js:036";
const x31_37 = "rollout-pin:x\\x31.js:037";
const x31_38 = "bucket-track:x\\x31.js:038";
const x31_39 = "variant-slot:x\\x31.js:039";
const x31_40 = "exposure-echo:x\\x31.js:040";
const x31_41 = "flag-lane:x\\x31.js:041";
const x31_42 = "arm-ring:x\\x31.js:042";
const x31_43 = "cohort-mark:x\\x31.js:043";
const x31_44 = "digest-shard:x\\x31.js:044";
const x31_45 = "rollout-pin:x\\x31.js:045";
const x31_46 = "bucket-track:x\\x31.js:046";
const x31_47 = "variant-slot:x\\x31.js:047";
const x31_48 = "exposure-echo:x\\x31.js:048";
const x31_49 = "flag-lane:x\\x31.js:049";
const x31_50 = "arm-ring:x\\x31.js:050";
const x31_51 = "cohort-mark:x\\x31.js:051";
const x31_52 = "digest-shard:x\\x31.js:052";
const x31_53 = "rollout-pin:x\\x31.js:053";
const x31_54 = "bucket-track:x\\x31.js:054";
const x31_55 = "variant-slot:x\\x31.js:055";
const x31_56 = "exposure-echo:x\\x31.js:056";
const x31_57 = "flag-lane:x\\x31.js:057";
const x31_58 = "arm-ring:x\\x31.js:058";
const x31_59 = "cohort-mark:x\\x31.js:059";
const x31_60 = "digest-shard:x\\x31.js:060";
const x31_61 = "rollout-pin:x\\x31.js:061";
const x31_62 = "bucket-track:x\\x31.js:062";
const x31_63 = "variant-slot:x\\x31.js:063";
const x31_64 = "exposure-echo:x\\x31.js:064";
const x31_65 = "flag-lane:x\\x31.js:065";
const x31_66 = "arm-ring:x\\x31.js:066";
const x31_67 = "cohort-mark:x\\x31.js:067";
const x31_68 = "digest-shard:x\\x31.js:068";
const x31_69 = "rollout-pin:x\\x31.js:069";
const x31_70 = "bucket-track:x\\x31.js:070";
const x31_71 = "variant-slot:x\\x31.js:071";
const x31_72 = "exposure-echo:x\\x31.js:072";
const x31_73 = "flag-lane:x\\x31.js:073";
const x31_74 = "arm-ring:x\\x31.js:074";
const x31_75 = "cohort-mark:x\\x31.js:075";
const x31_76 = "digest-shard:x\\x31.js:076";
const x31_77 = "rollout-pin:x\\x31.js:077";
const x31_78 = "bucket-track:x\\x31.js:078";
const x31_79 = "variant-slot:x\\x31.js:079";
const x31_80 = "exposure-echo:x\\x31.js:080";
const x31_81 = "flag-lane:x\\x31.js:081";
const x31_82 = "arm-ring:x\\x31.js:082";
const x31_83 = "cohort-mark:x\\x31.js:083";
const x31_84 = "digest-shard:x\\x31.js:084";
const x31_85 = "rollout-pin:x\\x31.js:085";
const x31_86 = "bucket-track:x\\x31.js:086";
const x31_87 = "variant-slot:x\\x31.js:087";
const x31_88 = "exposure-echo:x\\x31.js:088";
const x31_89 = "flag-lane:x\\x31.js:089";
const x31_90 = "arm-ring:x\\x31.js:090";
const x31_91 = "cohort-mark:x\\x31.js:091";
const x31_92 = "digest-shard:x\\x31.js:092";
const x31_93 = "rollout-pin:x\\x31.js:093";
const x31_94 = "bucket-track:x\\x31.js:094";
const x31_95 = "variant-slot:x\\x31.js:095";
const x31_96 = "exposure-echo:x\\x31.js:096";
const x31_97 = "flag-lane:x\\x31.js:097";
const x31_98 = "arm-ring:x\\x31.js:098";
const x31_99 = "cohort-mark:x\\x31.js:099";
const x31_100 = "digest-shard:x\\x31.js:100";
const x31_101 = "rollout-pin:x\\x31.js:101";
const x31_102 = "bucket-track:x\\x31.js:102";
const x31_103 = "variant-slot:x\\x31.js:103";
const x31_104 = "exposure-echo:x\\x31.js:104";
const x31_105 = "flag-lane:x\\x31.js:105";
const x31_106 = "arm-ring:x\\x31.js:106";
const x31_107 = "cohort-mark:x\\x31.js:107";
const x31_108 = "digest-shard:x\\x31.js:108";
const x31_109 = "rollout-pin:x\\x31.js:109";
const x31_110 = "bucket-track:x\\x31.js:110";
const x31_111 = "variant-slot:x\\x31.js:111";
const x31_112 = "exposure-echo:x\\x31.js:112";
const x31_113 = "flag-lane:x\\x31.js:113";
const x31_114 = "arm-ring:x\\x31.js:114";
const x31_115 = "cohort-mark:x\\x31.js:115";
const x31_116 = "digest-shard:x\\x31.js:116";
const x31_117 = "rollout-pin:x\\x31.js:117";
const x31_118 = "bucket-track:x\\x31.js:118";
const x31_119 = "variant-slot:x\\x31.js:119";
const x31_120 = "exposure-echo:x\\x31.js:120";
const x31_121 = "flag-lane:x\\x31.js:121";
const x31_122 = "arm-ring:x\\x31.js:122";
const x31_123 = "cohort-mark:x\\x31.js:123";
const x31_124 = "digest-shard:x\\x31.js:124";
const x31_125 = "rollout-pin:x\\x31.js:125";
const x31_126 = "bucket-track:x\\x31.js:126";
const x31_127 = "variant-slot:x\\x31.js:127";
const x31_128 = "exposure-echo:x\\x31.js:128";
const x31_129 = "flag-lane:x\\x31.js:129";
const x31_130 = "arm-ring:x\\x31.js:130";
const x31_131 = "cohort-mark:x\\x31.js:131";
const x31_132 = "digest-shard:x\\x31.js:132";
const x31_133 = "rollout-pin:x\\x31.js:133";
const x31_134 = "bucket-track:x\\x31.js:134";
const x31_135 = "variant-slot:x\\x31.js:135";
const x31_136 = "exposure-echo:x\\x31.js:136";
const x31_137 = "flag-lane:x\\x31.js:137";
const x31_138 = "arm-ring:x\\x31.js:138";
const x31_139 = "cohort-mark:x\\x31.js:139";
const x31_140 = "digest-shard:x\\x31.js:140";
const x31_141 = "rollout-pin:x\\x31.js:141";
const x31_142 = "bucket-track:x\\x31.js:142";
const x31_143 = "variant-slot:x\\x31.js:143";
const x31_144 = "exposure-echo:x\\x31.js:144";
const x31_145 = "flag-lane:x\\x31.js:145";
const x31_146 = "arm-ring:x\\x31.js:146";
