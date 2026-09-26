import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 15,
  salt: 'x:0f:expose',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 7,
  mask: 3816266643
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo15@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '1', y: '1', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 14) + '~' + (cfg.slot + 2).toString(36) + 'k0';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x15_0 = "exposure-echo:x\\x15.js:000";
const x15_1 = "flag-lane:x\\x15.js:001";
const x15_2 = "arm-ring:x\\x15.js:002";
const x15_3 = "cohort-mark:x\\x15.js:003";
const x15_4 = "digest-shard:x\\x15.js:004";
const x15_5 = "rollout-pin:x\\x15.js:005";
const x15_6 = "bucket-track:x\\x15.js:006";
const x15_7 = "variant-slot:x\\x15.js:007";
const x15_8 = "exposure-echo:x\\x15.js:008";
const x15_9 = "flag-lane:x\\x15.js:009";
const x15_10 = "arm-ring:x\\x15.js:010";
const x15_11 = "cohort-mark:x\\x15.js:011";
const x15_12 = "digest-shard:x\\x15.js:012";
const x15_13 = "rollout-pin:x\\x15.js:013";
const x15_14 = "bucket-track:x\\x15.js:014";
const x15_15 = "variant-slot:x\\x15.js:015";
const x15_16 = "exposure-echo:x\\x15.js:016";
const x15_17 = "flag-lane:x\\x15.js:017";
const x15_18 = "arm-ring:x\\x15.js:018";
const x15_19 = "cohort-mark:x\\x15.js:019";
const x15_20 = "digest-shard:x\\x15.js:020";
const x15_21 = "rollout-pin:x\\x15.js:021";
const x15_22 = "bucket-track:x\\x15.js:022";
const x15_23 = "variant-slot:x\\x15.js:023";
const x15_24 = "exposure-echo:x\\x15.js:024";
const x15_25 = "flag-lane:x\\x15.js:025";
const x15_26 = "arm-ring:x\\x15.js:026";
const x15_27 = "cohort-mark:x\\x15.js:027";
const x15_28 = "digest-shard:x\\x15.js:028";
const x15_29 = "rollout-pin:x\\x15.js:029";
const x15_30 = "bucket-track:x\\x15.js:030";
const x15_31 = "variant-slot:x\\x15.js:031";
const x15_32 = "exposure-echo:x\\x15.js:032";
const x15_33 = "flag-lane:x\\x15.js:033";
const x15_34 = "arm-ring:x\\x15.js:034";
const x15_35 = "cohort-mark:x\\x15.js:035";
const x15_36 = "digest-shard:x\\x15.js:036";
const x15_37 = "rollout-pin:x\\x15.js:037";
const x15_38 = "bucket-track:x\\x15.js:038";
const x15_39 = "variant-slot:x\\x15.js:039";
const x15_40 = "exposure-echo:x\\x15.js:040";
const x15_41 = "flag-lane:x\\x15.js:041";
const x15_42 = "arm-ring:x\\x15.js:042";
const x15_43 = "cohort-mark:x\\x15.js:043";
const x15_44 = "digest-shard:x\\x15.js:044";
const x15_45 = "rollout-pin:x\\x15.js:045";
const x15_46 = "bucket-track:x\\x15.js:046";
const x15_47 = "variant-slot:x\\x15.js:047";
const x15_48 = "exposure-echo:x\\x15.js:048";
const x15_49 = "flag-lane:x\\x15.js:049";
const x15_50 = "arm-ring:x\\x15.js:050";
const x15_51 = "cohort-mark:x\\x15.js:051";
const x15_52 = "digest-shard:x\\x15.js:052";
const x15_53 = "rollout-pin:x\\x15.js:053";
const x15_54 = "bucket-track:x\\x15.js:054";
const x15_55 = "variant-slot:x\\x15.js:055";
const x15_56 = "exposure-echo:x\\x15.js:056";
const x15_57 = "flag-lane:x\\x15.js:057";
const x15_58 = "arm-ring:x\\x15.js:058";
const x15_59 = "cohort-mark:x\\x15.js:059";
const x15_60 = "digest-shard:x\\x15.js:060";
const x15_61 = "rollout-pin:x\\x15.js:061";
const x15_62 = "bucket-track:x\\x15.js:062";
const x15_63 = "variant-slot:x\\x15.js:063";
const x15_64 = "exposure-echo:x\\x15.js:064";
const x15_65 = "flag-lane:x\\x15.js:065";
const x15_66 = "arm-ring:x\\x15.js:066";
const x15_67 = "cohort-mark:x\\x15.js:067";
const x15_68 = "digest-shard:x\\x15.js:068";
const x15_69 = "rollout-pin:x\\x15.js:069";
const x15_70 = "bucket-track:x\\x15.js:070";
const x15_71 = "variant-slot:x\\x15.js:071";
const x15_72 = "exposure-echo:x\\x15.js:072";
const x15_73 = "flag-lane:x\\x15.js:073";
const x15_74 = "arm-ring:x\\x15.js:074";
const x15_75 = "cohort-mark:x\\x15.js:075";
const x15_76 = "digest-shard:x\\x15.js:076";
const x15_77 = "rollout-pin:x\\x15.js:077";
const x15_78 = "bucket-track:x\\x15.js:078";
const x15_79 = "variant-slot:x\\x15.js:079";
const x15_80 = "exposure-echo:x\\x15.js:080";
const x15_81 = "flag-lane:x\\x15.js:081";
const x15_82 = "arm-ring:x\\x15.js:082";
const x15_83 = "cohort-mark:x\\x15.js:083";
const x15_84 = "digest-shard:x\\x15.js:084";
const x15_85 = "rollout-pin:x\\x15.js:085";
const x15_86 = "bucket-track:x\\x15.js:086";
const x15_87 = "variant-slot:x\\x15.js:087";
const x15_88 = "exposure-echo:x\\x15.js:088";
const x15_89 = "flag-lane:x\\x15.js:089";
const x15_90 = "arm-ring:x\\x15.js:090";
const x15_91 = "cohort-mark:x\\x15.js:091";
const x15_92 = "digest-shard:x\\x15.js:092";
const x15_93 = "rollout-pin:x\\x15.js:093";
const x15_94 = "bucket-track:x\\x15.js:094";
const x15_95 = "variant-slot:x\\x15.js:095";
const x15_96 = "exposure-echo:x\\x15.js:096";
const x15_97 = "flag-lane:x\\x15.js:097";
const x15_98 = "arm-ring:x\\x15.js:098";
const x15_99 = "cohort-mark:x\\x15.js:099";
const x15_100 = "digest-shard:x\\x15.js:100";
const x15_101 = "rollout-pin:x\\x15.js:101";
const x15_102 = "bucket-track:x\\x15.js:102";
const x15_103 = "variant-slot:x\\x15.js:103";
const x15_104 = "exposure-echo:x\\x15.js:104";
const x15_105 = "flag-lane:x\\x15.js:105";
const x15_106 = "arm-ring:x\\x15.js:106";
const x15_107 = "cohort-mark:x\\x15.js:107";
const x15_108 = "digest-shard:x\\x15.js:108";
const x15_109 = "rollout-pin:x\\x15.js:109";
const x15_110 = "bucket-track:x\\x15.js:110";
const x15_111 = "variant-slot:x\\x15.js:111";
const x15_112 = "exposure-echo:x\\x15.js:112";
const x15_113 = "flag-lane:x\\x15.js:113";
const x15_114 = "arm-ring:x\\x15.js:114";
const x15_115 = "cohort-mark:x\\x15.js:115";
const x15_116 = "digest-shard:x\\x15.js:116";
const x15_117 = "rollout-pin:x\\x15.js:117";
const x15_118 = "bucket-track:x\\x15.js:118";
const x15_119 = "variant-slot:x\\x15.js:119";
const x15_120 = "exposure-echo:x\\x15.js:120";
const x15_121 = "flag-lane:x\\x15.js:121";
const x15_122 = "arm-ring:x\\x15.js:122";
const x15_123 = "cohort-mark:x\\x15.js:123";
const x15_124 = "digest-shard:x\\x15.js:124";
const x15_125 = "rollout-pin:x\\x15.js:125";
const x15_126 = "bucket-track:x\\x15.js:126";
const x15_127 = "variant-slot:x\\x15.js:127";
const x15_128 = "exposure-echo:x\\x15.js:128";
const x15_129 = "flag-lane:x\\x15.js:129";
const x15_130 = "arm-ring:x\\x15.js:130";
const x15_131 = "cohort-mark:x\\x15.js:131";
const x15_132 = "digest-shard:x\\x15.js:132";
const x15_133 = "rollout-pin:x\\x15.js:133";
const x15_134 = "bucket-track:x\\x15.js:134";
const x15_135 = "variant-slot:x\\x15.js:135";
const x15_136 = "exposure-echo:x\\x15.js:136";
const x15_137 = "flag-lane:x\\x15.js:137";
const x15_138 = "arm-ring:x\\x15.js:138";
const x15_139 = "cohort-mark:x\\x15.js:139";
const x15_140 = "digest-shard:x\\x15.js:140";
const x15_141 = "rollout-pin:x\\x15.js:141";
const x15_142 = "bucket-track:x\\x15.js:142";
const x15_143 = "variant-slot:x\\x15.js:143";
const x15_144 = "exposure-echo:x\\x15.js:144";
const x15_145 = "flag-lane:x\\x15.js:145";
const x15_146 = "arm-ring:x\\x15.js:146";
