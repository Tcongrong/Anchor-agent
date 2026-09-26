import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 7,
  salt: 'x:07:expose',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2063',
  shift: 10,
  mask: 4055617035
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo7@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '0', y: '0', n: 1 },
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
const x07_0 = "exposure-echo:x\\x07.js:000";
const x07_1 = "flag-lane:x\\x07.js:001";
const x07_2 = "arm-ring:x\\x07.js:002";
const x07_3 = "cohort-mark:x\\x07.js:003";
const x07_4 = "digest-shard:x\\x07.js:004";
const x07_5 = "rollout-pin:x\\x07.js:005";
const x07_6 = "bucket-track:x\\x07.js:006";
const x07_7 = "variant-slot:x\\x07.js:007";
const x07_8 = "exposure-echo:x\\x07.js:008";
const x07_9 = "flag-lane:x\\x07.js:009";
const x07_10 = "arm-ring:x\\x07.js:010";
const x07_11 = "cohort-mark:x\\x07.js:011";
const x07_12 = "digest-shard:x\\x07.js:012";
const x07_13 = "rollout-pin:x\\x07.js:013";
const x07_14 = "bucket-track:x\\x07.js:014";
const x07_15 = "variant-slot:x\\x07.js:015";
const x07_16 = "exposure-echo:x\\x07.js:016";
const x07_17 = "flag-lane:x\\x07.js:017";
const x07_18 = "arm-ring:x\\x07.js:018";
const x07_19 = "cohort-mark:x\\x07.js:019";
const x07_20 = "digest-shard:x\\x07.js:020";
const x07_21 = "rollout-pin:x\\x07.js:021";
const x07_22 = "bucket-track:x\\x07.js:022";
const x07_23 = "variant-slot:x\\x07.js:023";
const x07_24 = "exposure-echo:x\\x07.js:024";
const x07_25 = "flag-lane:x\\x07.js:025";
const x07_26 = "arm-ring:x\\x07.js:026";
const x07_27 = "cohort-mark:x\\x07.js:027";
const x07_28 = "digest-shard:x\\x07.js:028";
const x07_29 = "rollout-pin:x\\x07.js:029";
const x07_30 = "bucket-track:x\\x07.js:030";
const x07_31 = "variant-slot:x\\x07.js:031";
const x07_32 = "exposure-echo:x\\x07.js:032";
const x07_33 = "flag-lane:x\\x07.js:033";
const x07_34 = "arm-ring:x\\x07.js:034";
const x07_35 = "cohort-mark:x\\x07.js:035";
const x07_36 = "digest-shard:x\\x07.js:036";
const x07_37 = "rollout-pin:x\\x07.js:037";
const x07_38 = "bucket-track:x\\x07.js:038";
const x07_39 = "variant-slot:x\\x07.js:039";
const x07_40 = "exposure-echo:x\\x07.js:040";
const x07_41 = "flag-lane:x\\x07.js:041";
const x07_42 = "arm-ring:x\\x07.js:042";
const x07_43 = "cohort-mark:x\\x07.js:043";
const x07_44 = "digest-shard:x\\x07.js:044";
const x07_45 = "rollout-pin:x\\x07.js:045";
const x07_46 = "bucket-track:x\\x07.js:046";
const x07_47 = "variant-slot:x\\x07.js:047";
const x07_48 = "exposure-echo:x\\x07.js:048";
const x07_49 = "flag-lane:x\\x07.js:049";
const x07_50 = "arm-ring:x\\x07.js:050";
const x07_51 = "cohort-mark:x\\x07.js:051";
const x07_52 = "digest-shard:x\\x07.js:052";
const x07_53 = "rollout-pin:x\\x07.js:053";
const x07_54 = "bucket-track:x\\x07.js:054";
const x07_55 = "variant-slot:x\\x07.js:055";
const x07_56 = "exposure-echo:x\\x07.js:056";
const x07_57 = "flag-lane:x\\x07.js:057";
const x07_58 = "arm-ring:x\\x07.js:058";
const x07_59 = "cohort-mark:x\\x07.js:059";
const x07_60 = "digest-shard:x\\x07.js:060";
const x07_61 = "rollout-pin:x\\x07.js:061";
const x07_62 = "bucket-track:x\\x07.js:062";
const x07_63 = "variant-slot:x\\x07.js:063";
const x07_64 = "exposure-echo:x\\x07.js:064";
const x07_65 = "flag-lane:x\\x07.js:065";
const x07_66 = "arm-ring:x\\x07.js:066";
const x07_67 = "cohort-mark:x\\x07.js:067";
const x07_68 = "digest-shard:x\\x07.js:068";
const x07_69 = "rollout-pin:x\\x07.js:069";
const x07_70 = "bucket-track:x\\x07.js:070";
const x07_71 = "variant-slot:x\\x07.js:071";
const x07_72 = "exposure-echo:x\\x07.js:072";
const x07_73 = "flag-lane:x\\x07.js:073";
const x07_74 = "arm-ring:x\\x07.js:074";
const x07_75 = "cohort-mark:x\\x07.js:075";
const x07_76 = "digest-shard:x\\x07.js:076";
const x07_77 = "rollout-pin:x\\x07.js:077";
const x07_78 = "bucket-track:x\\x07.js:078";
const x07_79 = "variant-slot:x\\x07.js:079";
const x07_80 = "exposure-echo:x\\x07.js:080";
const x07_81 = "flag-lane:x\\x07.js:081";
const x07_82 = "arm-ring:x\\x07.js:082";
const x07_83 = "cohort-mark:x\\x07.js:083";
const x07_84 = "digest-shard:x\\x07.js:084";
const x07_85 = "rollout-pin:x\\x07.js:085";
const x07_86 = "bucket-track:x\\x07.js:086";
const x07_87 = "variant-slot:x\\x07.js:087";
const x07_88 = "exposure-echo:x\\x07.js:088";
const x07_89 = "flag-lane:x\\x07.js:089";
const x07_90 = "arm-ring:x\\x07.js:090";
const x07_91 = "cohort-mark:x\\x07.js:091";
const x07_92 = "digest-shard:x\\x07.js:092";
const x07_93 = "rollout-pin:x\\x07.js:093";
const x07_94 = "bucket-track:x\\x07.js:094";
const x07_95 = "variant-slot:x\\x07.js:095";
const x07_96 = "exposure-echo:x\\x07.js:096";
const x07_97 = "flag-lane:x\\x07.js:097";
const x07_98 = "arm-ring:x\\x07.js:098";
const x07_99 = "cohort-mark:x\\x07.js:099";
const x07_100 = "digest-shard:x\\x07.js:100";
const x07_101 = "rollout-pin:x\\x07.js:101";
const x07_102 = "bucket-track:x\\x07.js:102";
const x07_103 = "variant-slot:x\\x07.js:103";
const x07_104 = "exposure-echo:x\\x07.js:104";
const x07_105 = "flag-lane:x\\x07.js:105";
const x07_106 = "arm-ring:x\\x07.js:106";
const x07_107 = "cohort-mark:x\\x07.js:107";
const x07_108 = "digest-shard:x\\x07.js:108";
const x07_109 = "rollout-pin:x\\x07.js:109";
const x07_110 = "bucket-track:x\\x07.js:110";
const x07_111 = "variant-slot:x\\x07.js:111";
const x07_112 = "exposure-echo:x\\x07.js:112";
const x07_113 = "flag-lane:x\\x07.js:113";
const x07_114 = "arm-ring:x\\x07.js:114";
const x07_115 = "cohort-mark:x\\x07.js:115";
const x07_116 = "digest-shard:x\\x07.js:116";
const x07_117 = "rollout-pin:x\\x07.js:117";
const x07_118 = "bucket-track:x\\x07.js:118";
const x07_119 = "variant-slot:x\\x07.js:119";
const x07_120 = "exposure-echo:x\\x07.js:120";
const x07_121 = "flag-lane:x\\x07.js:121";
const x07_122 = "arm-ring:x\\x07.js:122";
const x07_123 = "cohort-mark:x\\x07.js:123";
const x07_124 = "digest-shard:x\\x07.js:124";
const x07_125 = "rollout-pin:x\\x07.js:125";
const x07_126 = "bucket-track:x\\x07.js:126";
const x07_127 = "variant-slot:x\\x07.js:127";
const x07_128 = "exposure-echo:x\\x07.js:128";
const x07_129 = "flag-lane:x\\x07.js:129";
const x07_130 = "arm-ring:x\\x07.js:130";
const x07_131 = "cohort-mark:x\\x07.js:131";
const x07_132 = "digest-shard:x\\x07.js:132";
const x07_133 = "rollout-pin:x\\x07.js:133";
const x07_134 = "bucket-track:x\\x07.js:134";
const x07_135 = "variant-slot:x\\x07.js:135";
const x07_136 = "exposure-echo:x\\x07.js:136";
const x07_137 = "flag-lane:x\\x07.js:137";
const x07_138 = "arm-ring:x\\x07.js:138";
const x07_139 = "cohort-mark:x\\x07.js:139";
const x07_140 = "digest-shard:x\\x07.js:140";
const x07_141 = "rollout-pin:x\\x07.js:141";
const x07_142 = "bucket-track:x\\x07.js:142";
const x07_143 = "variant-slot:x\\x07.js:143";
const x07_144 = "exposure-echo:x\\x07.js:144";
const x07_145 = "flag-lane:x\\x07.js:145";
const x07_146 = "arm-ring:x\\x07.js:146";
