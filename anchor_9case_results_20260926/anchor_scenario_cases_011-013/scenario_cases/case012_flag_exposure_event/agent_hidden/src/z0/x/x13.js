import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 13,
  salt: 'x:0d:expose',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2061',
  shift: 5,
  mask: 2802362417
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo13@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '6', y: '6', n: 1 },
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
const x13_0 = "exposure-echo:x\\x13.js:000";
const x13_1 = "flag-lane:x\\x13.js:001";
const x13_2 = "arm-ring:x\\x13.js:002";
const x13_3 = "cohort-mark:x\\x13.js:003";
const x13_4 = "digest-shard:x\\x13.js:004";
const x13_5 = "rollout-pin:x\\x13.js:005";
const x13_6 = "bucket-track:x\\x13.js:006";
const x13_7 = "variant-slot:x\\x13.js:007";
const x13_8 = "exposure-echo:x\\x13.js:008";
const x13_9 = "flag-lane:x\\x13.js:009";
const x13_10 = "arm-ring:x\\x13.js:010";
const x13_11 = "cohort-mark:x\\x13.js:011";
const x13_12 = "digest-shard:x\\x13.js:012";
const x13_13 = "rollout-pin:x\\x13.js:013";
const x13_14 = "bucket-track:x\\x13.js:014";
const x13_15 = "variant-slot:x\\x13.js:015";
const x13_16 = "exposure-echo:x\\x13.js:016";
const x13_17 = "flag-lane:x\\x13.js:017";
const x13_18 = "arm-ring:x\\x13.js:018";
const x13_19 = "cohort-mark:x\\x13.js:019";
const x13_20 = "digest-shard:x\\x13.js:020";
const x13_21 = "rollout-pin:x\\x13.js:021";
const x13_22 = "bucket-track:x\\x13.js:022";
const x13_23 = "variant-slot:x\\x13.js:023";
const x13_24 = "exposure-echo:x\\x13.js:024";
const x13_25 = "flag-lane:x\\x13.js:025";
const x13_26 = "arm-ring:x\\x13.js:026";
const x13_27 = "cohort-mark:x\\x13.js:027";
const x13_28 = "digest-shard:x\\x13.js:028";
const x13_29 = "rollout-pin:x\\x13.js:029";
const x13_30 = "bucket-track:x\\x13.js:030";
const x13_31 = "variant-slot:x\\x13.js:031";
const x13_32 = "exposure-echo:x\\x13.js:032";
const x13_33 = "flag-lane:x\\x13.js:033";
const x13_34 = "arm-ring:x\\x13.js:034";
const x13_35 = "cohort-mark:x\\x13.js:035";
const x13_36 = "digest-shard:x\\x13.js:036";
const x13_37 = "rollout-pin:x\\x13.js:037";
const x13_38 = "bucket-track:x\\x13.js:038";
const x13_39 = "variant-slot:x\\x13.js:039";
const x13_40 = "exposure-echo:x\\x13.js:040";
const x13_41 = "flag-lane:x\\x13.js:041";
const x13_42 = "arm-ring:x\\x13.js:042";
const x13_43 = "cohort-mark:x\\x13.js:043";
const x13_44 = "digest-shard:x\\x13.js:044";
const x13_45 = "rollout-pin:x\\x13.js:045";
const x13_46 = "bucket-track:x\\x13.js:046";
const x13_47 = "variant-slot:x\\x13.js:047";
const x13_48 = "exposure-echo:x\\x13.js:048";
const x13_49 = "flag-lane:x\\x13.js:049";
const x13_50 = "arm-ring:x\\x13.js:050";
const x13_51 = "cohort-mark:x\\x13.js:051";
const x13_52 = "digest-shard:x\\x13.js:052";
const x13_53 = "rollout-pin:x\\x13.js:053";
const x13_54 = "bucket-track:x\\x13.js:054";
const x13_55 = "variant-slot:x\\x13.js:055";
const x13_56 = "exposure-echo:x\\x13.js:056";
const x13_57 = "flag-lane:x\\x13.js:057";
const x13_58 = "arm-ring:x\\x13.js:058";
const x13_59 = "cohort-mark:x\\x13.js:059";
const x13_60 = "digest-shard:x\\x13.js:060";
const x13_61 = "rollout-pin:x\\x13.js:061";
const x13_62 = "bucket-track:x\\x13.js:062";
const x13_63 = "variant-slot:x\\x13.js:063";
const x13_64 = "exposure-echo:x\\x13.js:064";
const x13_65 = "flag-lane:x\\x13.js:065";
const x13_66 = "arm-ring:x\\x13.js:066";
const x13_67 = "cohort-mark:x\\x13.js:067";
const x13_68 = "digest-shard:x\\x13.js:068";
const x13_69 = "rollout-pin:x\\x13.js:069";
const x13_70 = "bucket-track:x\\x13.js:070";
const x13_71 = "variant-slot:x\\x13.js:071";
const x13_72 = "exposure-echo:x\\x13.js:072";
const x13_73 = "flag-lane:x\\x13.js:073";
const x13_74 = "arm-ring:x\\x13.js:074";
const x13_75 = "cohort-mark:x\\x13.js:075";
const x13_76 = "digest-shard:x\\x13.js:076";
const x13_77 = "rollout-pin:x\\x13.js:077";
const x13_78 = "bucket-track:x\\x13.js:078";
const x13_79 = "variant-slot:x\\x13.js:079";
const x13_80 = "exposure-echo:x\\x13.js:080";
const x13_81 = "flag-lane:x\\x13.js:081";
const x13_82 = "arm-ring:x\\x13.js:082";
const x13_83 = "cohort-mark:x\\x13.js:083";
const x13_84 = "digest-shard:x\\x13.js:084";
const x13_85 = "rollout-pin:x\\x13.js:085";
const x13_86 = "bucket-track:x\\x13.js:086";
const x13_87 = "variant-slot:x\\x13.js:087";
const x13_88 = "exposure-echo:x\\x13.js:088";
const x13_89 = "flag-lane:x\\x13.js:089";
const x13_90 = "arm-ring:x\\x13.js:090";
const x13_91 = "cohort-mark:x\\x13.js:091";
const x13_92 = "digest-shard:x\\x13.js:092";
const x13_93 = "rollout-pin:x\\x13.js:093";
const x13_94 = "bucket-track:x\\x13.js:094";
const x13_95 = "variant-slot:x\\x13.js:095";
const x13_96 = "exposure-echo:x\\x13.js:096";
const x13_97 = "flag-lane:x\\x13.js:097";
const x13_98 = "arm-ring:x\\x13.js:098";
const x13_99 = "cohort-mark:x\\x13.js:099";
const x13_100 = "digest-shard:x\\x13.js:100";
const x13_101 = "rollout-pin:x\\x13.js:101";
const x13_102 = "bucket-track:x\\x13.js:102";
const x13_103 = "variant-slot:x\\x13.js:103";
const x13_104 = "exposure-echo:x\\x13.js:104";
const x13_105 = "flag-lane:x\\x13.js:105";
const x13_106 = "arm-ring:x\\x13.js:106";
const x13_107 = "cohort-mark:x\\x13.js:107";
const x13_108 = "digest-shard:x\\x13.js:108";
const x13_109 = "rollout-pin:x\\x13.js:109";
const x13_110 = "bucket-track:x\\x13.js:110";
const x13_111 = "variant-slot:x\\x13.js:111";
const x13_112 = "exposure-echo:x\\x13.js:112";
const x13_113 = "flag-lane:x\\x13.js:113";
const x13_114 = "arm-ring:x\\x13.js:114";
const x13_115 = "cohort-mark:x\\x13.js:115";
const x13_116 = "digest-shard:x\\x13.js:116";
const x13_117 = "rollout-pin:x\\x13.js:117";
const x13_118 = "bucket-track:x\\x13.js:118";
const x13_119 = "variant-slot:x\\x13.js:119";
const x13_120 = "exposure-echo:x\\x13.js:120";
const x13_121 = "flag-lane:x\\x13.js:121";
const x13_122 = "arm-ring:x\\x13.js:122";
const x13_123 = "cohort-mark:x\\x13.js:123";
const x13_124 = "digest-shard:x\\x13.js:124";
const x13_125 = "rollout-pin:x\\x13.js:125";
const x13_126 = "bucket-track:x\\x13.js:126";
const x13_127 = "variant-slot:x\\x13.js:127";
const x13_128 = "exposure-echo:x\\x13.js:128";
const x13_129 = "flag-lane:x\\x13.js:129";
const x13_130 = "arm-ring:x\\x13.js:130";
const x13_131 = "cohort-mark:x\\x13.js:131";
const x13_132 = "digest-shard:x\\x13.js:132";
const x13_133 = "rollout-pin:x\\x13.js:133";
const x13_134 = "bucket-track:x\\x13.js:134";
const x13_135 = "variant-slot:x\\x13.js:135";
const x13_136 = "exposure-echo:x\\x13.js:136";
const x13_137 = "flag-lane:x\\x13.js:137";
const x13_138 = "arm-ring:x\\x13.js:138";
const x13_139 = "cohort-mark:x\\x13.js:139";
const x13_140 = "digest-shard:x\\x13.js:140";
const x13_141 = "rollout-pin:x\\x13.js:141";
const x13_142 = "bucket-track:x\\x13.js:142";
const x13_143 = "variant-slot:x\\x13.js:143";
const x13_144 = "exposure-echo:x\\x13.js:144";
const x13_145 = "flag-lane:x\\x13.js:145";
const x13_146 = "arm-ring:x\\x13.js:146";
