import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 43,
  salt: 'x:17:expose',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 13,
  mask: 831056623
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo43@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '1', y: '1', n: 1 },
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
const x43_0 = "exposure-echo:x\\x43.js:000";
const x43_1 = "flag-lane:x\\x43.js:001";
const x43_2 = "arm-ring:x\\x43.js:002";
const x43_3 = "cohort-mark:x\\x43.js:003";
const x43_4 = "digest-shard:x\\x43.js:004";
const x43_5 = "rollout-pin:x\\x43.js:005";
const x43_6 = "bucket-track:x\\x43.js:006";
const x43_7 = "variant-slot:x\\x43.js:007";
const x43_8 = "exposure-echo:x\\x43.js:008";
const x43_9 = "flag-lane:x\\x43.js:009";
const x43_10 = "arm-ring:x\\x43.js:010";
const x43_11 = "cohort-mark:x\\x43.js:011";
const x43_12 = "digest-shard:x\\x43.js:012";
const x43_13 = "rollout-pin:x\\x43.js:013";
const x43_14 = "bucket-track:x\\x43.js:014";
const x43_15 = "variant-slot:x\\x43.js:015";
const x43_16 = "exposure-echo:x\\x43.js:016";
const x43_17 = "flag-lane:x\\x43.js:017";
const x43_18 = "arm-ring:x\\x43.js:018";
const x43_19 = "cohort-mark:x\\x43.js:019";
const x43_20 = "digest-shard:x\\x43.js:020";
const x43_21 = "rollout-pin:x\\x43.js:021";
const x43_22 = "bucket-track:x\\x43.js:022";
const x43_23 = "variant-slot:x\\x43.js:023";
const x43_24 = "exposure-echo:x\\x43.js:024";
const x43_25 = "flag-lane:x\\x43.js:025";
const x43_26 = "arm-ring:x\\x43.js:026";
const x43_27 = "cohort-mark:x\\x43.js:027";
const x43_28 = "digest-shard:x\\x43.js:028";
const x43_29 = "rollout-pin:x\\x43.js:029";
const x43_30 = "bucket-track:x\\x43.js:030";
const x43_31 = "variant-slot:x\\x43.js:031";
const x43_32 = "exposure-echo:x\\x43.js:032";
const x43_33 = "flag-lane:x\\x43.js:033";
const x43_34 = "arm-ring:x\\x43.js:034";
const x43_35 = "cohort-mark:x\\x43.js:035";
const x43_36 = "digest-shard:x\\x43.js:036";
const x43_37 = "rollout-pin:x\\x43.js:037";
const x43_38 = "bucket-track:x\\x43.js:038";
const x43_39 = "variant-slot:x\\x43.js:039";
const x43_40 = "exposure-echo:x\\x43.js:040";
const x43_41 = "flag-lane:x\\x43.js:041";
const x43_42 = "arm-ring:x\\x43.js:042";
const x43_43 = "cohort-mark:x\\x43.js:043";
const x43_44 = "digest-shard:x\\x43.js:044";
const x43_45 = "rollout-pin:x\\x43.js:045";
const x43_46 = "bucket-track:x\\x43.js:046";
const x43_47 = "variant-slot:x\\x43.js:047";
const x43_48 = "exposure-echo:x\\x43.js:048";
const x43_49 = "flag-lane:x\\x43.js:049";
const x43_50 = "arm-ring:x\\x43.js:050";
const x43_51 = "cohort-mark:x\\x43.js:051";
const x43_52 = "digest-shard:x\\x43.js:052";
const x43_53 = "rollout-pin:x\\x43.js:053";
const x43_54 = "bucket-track:x\\x43.js:054";
const x43_55 = "variant-slot:x\\x43.js:055";
const x43_56 = "exposure-echo:x\\x43.js:056";
const x43_57 = "flag-lane:x\\x43.js:057";
const x43_58 = "arm-ring:x\\x43.js:058";
const x43_59 = "cohort-mark:x\\x43.js:059";
const x43_60 = "digest-shard:x\\x43.js:060";
const x43_61 = "rollout-pin:x\\x43.js:061";
const x43_62 = "bucket-track:x\\x43.js:062";
const x43_63 = "variant-slot:x\\x43.js:063";
const x43_64 = "exposure-echo:x\\x43.js:064";
const x43_65 = "flag-lane:x\\x43.js:065";
const x43_66 = "arm-ring:x\\x43.js:066";
const x43_67 = "cohort-mark:x\\x43.js:067";
const x43_68 = "digest-shard:x\\x43.js:068";
const x43_69 = "rollout-pin:x\\x43.js:069";
const x43_70 = "bucket-track:x\\x43.js:070";
const x43_71 = "variant-slot:x\\x43.js:071";
const x43_72 = "exposure-echo:x\\x43.js:072";
const x43_73 = "flag-lane:x\\x43.js:073";
const x43_74 = "arm-ring:x\\x43.js:074";
const x43_75 = "cohort-mark:x\\x43.js:075";
const x43_76 = "digest-shard:x\\x43.js:076";
const x43_77 = "rollout-pin:x\\x43.js:077";
const x43_78 = "bucket-track:x\\x43.js:078";
const x43_79 = "variant-slot:x\\x43.js:079";
const x43_80 = "exposure-echo:x\\x43.js:080";
const x43_81 = "flag-lane:x\\x43.js:081";
const x43_82 = "arm-ring:x\\x43.js:082";
const x43_83 = "cohort-mark:x\\x43.js:083";
const x43_84 = "digest-shard:x\\x43.js:084";
const x43_85 = "rollout-pin:x\\x43.js:085";
const x43_86 = "bucket-track:x\\x43.js:086";
const x43_87 = "variant-slot:x\\x43.js:087";
const x43_88 = "exposure-echo:x\\x43.js:088";
const x43_89 = "flag-lane:x\\x43.js:089";
const x43_90 = "arm-ring:x\\x43.js:090";
const x43_91 = "cohort-mark:x\\x43.js:091";
const x43_92 = "digest-shard:x\\x43.js:092";
const x43_93 = "rollout-pin:x\\x43.js:093";
const x43_94 = "bucket-track:x\\x43.js:094";
const x43_95 = "variant-slot:x\\x43.js:095";
const x43_96 = "exposure-echo:x\\x43.js:096";
const x43_97 = "flag-lane:x\\x43.js:097";
const x43_98 = "arm-ring:x\\x43.js:098";
const x43_99 = "cohort-mark:x\\x43.js:099";
const x43_100 = "digest-shard:x\\x43.js:100";
const x43_101 = "rollout-pin:x\\x43.js:101";
const x43_102 = "bucket-track:x\\x43.js:102";
const x43_103 = "variant-slot:x\\x43.js:103";
const x43_104 = "exposure-echo:x\\x43.js:104";
const x43_105 = "flag-lane:x\\x43.js:105";
const x43_106 = "arm-ring:x\\x43.js:106";
const x43_107 = "cohort-mark:x\\x43.js:107";
const x43_108 = "digest-shard:x\\x43.js:108";
const x43_109 = "rollout-pin:x\\x43.js:109";
const x43_110 = "bucket-track:x\\x43.js:110";
const x43_111 = "variant-slot:x\\x43.js:111";
const x43_112 = "exposure-echo:x\\x43.js:112";
const x43_113 = "flag-lane:x\\x43.js:113";
const x43_114 = "arm-ring:x\\x43.js:114";
const x43_115 = "cohort-mark:x\\x43.js:115";
const x43_116 = "digest-shard:x\\x43.js:116";
const x43_117 = "rollout-pin:x\\x43.js:117";
const x43_118 = "bucket-track:x\\x43.js:118";
const x43_119 = "variant-slot:x\\x43.js:119";
const x43_120 = "exposure-echo:x\\x43.js:120";
const x43_121 = "flag-lane:x\\x43.js:121";
const x43_122 = "arm-ring:x\\x43.js:122";
const x43_123 = "cohort-mark:x\\x43.js:123";
const x43_124 = "digest-shard:x\\x43.js:124";
const x43_125 = "rollout-pin:x\\x43.js:125";
const x43_126 = "bucket-track:x\\x43.js:126";
const x43_127 = "variant-slot:x\\x43.js:127";
const x43_128 = "exposure-echo:x\\x43.js:128";
const x43_129 = "flag-lane:x\\x43.js:129";
const x43_130 = "arm-ring:x\\x43.js:130";
const x43_131 = "cohort-mark:x\\x43.js:131";
const x43_132 = "digest-shard:x\\x43.js:132";
const x43_133 = "rollout-pin:x\\x43.js:133";
const x43_134 = "bucket-track:x\\x43.js:134";
const x43_135 = "variant-slot:x\\x43.js:135";
const x43_136 = "exposure-echo:x\\x43.js:136";
const x43_137 = "flag-lane:x\\x43.js:137";
const x43_138 = "arm-ring:x\\x43.js:138";
const x43_139 = "cohort-mark:x\\x43.js:139";
const x43_140 = "digest-shard:x\\x43.js:140";
const x43_141 = "rollout-pin:x\\x43.js:141";
const x43_142 = "bucket-track:x\\x43.js:142";
const x43_143 = "variant-slot:x\\x43.js:143";
const x43_144 = "exposure-echo:x\\x43.js:144";
const x43_145 = "flag-lane:x\\x43.js:145";
const x43_146 = "arm-ring:x\\x43.js:146";
