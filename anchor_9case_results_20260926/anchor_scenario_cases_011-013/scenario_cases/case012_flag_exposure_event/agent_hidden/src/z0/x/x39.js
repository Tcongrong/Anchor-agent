import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 39,
  salt: 'x:13:expose',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 9,
  mask: 3098215467
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo39@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '4', y: '4', n: 1 },
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
const x39_0 = "exposure-echo:x\\x39.js:000";
const x39_1 = "flag-lane:x\\x39.js:001";
const x39_2 = "arm-ring:x\\x39.js:002";
const x39_3 = "cohort-mark:x\\x39.js:003";
const x39_4 = "digest-shard:x\\x39.js:004";
const x39_5 = "rollout-pin:x\\x39.js:005";
const x39_6 = "bucket-track:x\\x39.js:006";
const x39_7 = "variant-slot:x\\x39.js:007";
const x39_8 = "exposure-echo:x\\x39.js:008";
const x39_9 = "flag-lane:x\\x39.js:009";
const x39_10 = "arm-ring:x\\x39.js:010";
const x39_11 = "cohort-mark:x\\x39.js:011";
const x39_12 = "digest-shard:x\\x39.js:012";
const x39_13 = "rollout-pin:x\\x39.js:013";
const x39_14 = "bucket-track:x\\x39.js:014";
const x39_15 = "variant-slot:x\\x39.js:015";
const x39_16 = "exposure-echo:x\\x39.js:016";
const x39_17 = "flag-lane:x\\x39.js:017";
const x39_18 = "arm-ring:x\\x39.js:018";
const x39_19 = "cohort-mark:x\\x39.js:019";
const x39_20 = "digest-shard:x\\x39.js:020";
const x39_21 = "rollout-pin:x\\x39.js:021";
const x39_22 = "bucket-track:x\\x39.js:022";
const x39_23 = "variant-slot:x\\x39.js:023";
const x39_24 = "exposure-echo:x\\x39.js:024";
const x39_25 = "flag-lane:x\\x39.js:025";
const x39_26 = "arm-ring:x\\x39.js:026";
const x39_27 = "cohort-mark:x\\x39.js:027";
const x39_28 = "digest-shard:x\\x39.js:028";
const x39_29 = "rollout-pin:x\\x39.js:029";
const x39_30 = "bucket-track:x\\x39.js:030";
const x39_31 = "variant-slot:x\\x39.js:031";
const x39_32 = "exposure-echo:x\\x39.js:032";
const x39_33 = "flag-lane:x\\x39.js:033";
const x39_34 = "arm-ring:x\\x39.js:034";
const x39_35 = "cohort-mark:x\\x39.js:035";
const x39_36 = "digest-shard:x\\x39.js:036";
const x39_37 = "rollout-pin:x\\x39.js:037";
const x39_38 = "bucket-track:x\\x39.js:038";
const x39_39 = "variant-slot:x\\x39.js:039";
const x39_40 = "exposure-echo:x\\x39.js:040";
const x39_41 = "flag-lane:x\\x39.js:041";
const x39_42 = "arm-ring:x\\x39.js:042";
const x39_43 = "cohort-mark:x\\x39.js:043";
const x39_44 = "digest-shard:x\\x39.js:044";
const x39_45 = "rollout-pin:x\\x39.js:045";
const x39_46 = "bucket-track:x\\x39.js:046";
const x39_47 = "variant-slot:x\\x39.js:047";
const x39_48 = "exposure-echo:x\\x39.js:048";
const x39_49 = "flag-lane:x\\x39.js:049";
const x39_50 = "arm-ring:x\\x39.js:050";
const x39_51 = "cohort-mark:x\\x39.js:051";
const x39_52 = "digest-shard:x\\x39.js:052";
const x39_53 = "rollout-pin:x\\x39.js:053";
const x39_54 = "bucket-track:x\\x39.js:054";
const x39_55 = "variant-slot:x\\x39.js:055";
const x39_56 = "exposure-echo:x\\x39.js:056";
const x39_57 = "flag-lane:x\\x39.js:057";
const x39_58 = "arm-ring:x\\x39.js:058";
const x39_59 = "cohort-mark:x\\x39.js:059";
const x39_60 = "digest-shard:x\\x39.js:060";
const x39_61 = "rollout-pin:x\\x39.js:061";
const x39_62 = "bucket-track:x\\x39.js:062";
const x39_63 = "variant-slot:x\\x39.js:063";
const x39_64 = "exposure-echo:x\\x39.js:064";
const x39_65 = "flag-lane:x\\x39.js:065";
const x39_66 = "arm-ring:x\\x39.js:066";
const x39_67 = "cohort-mark:x\\x39.js:067";
const x39_68 = "digest-shard:x\\x39.js:068";
const x39_69 = "rollout-pin:x\\x39.js:069";
const x39_70 = "bucket-track:x\\x39.js:070";
const x39_71 = "variant-slot:x\\x39.js:071";
const x39_72 = "exposure-echo:x\\x39.js:072";
const x39_73 = "flag-lane:x\\x39.js:073";
const x39_74 = "arm-ring:x\\x39.js:074";
const x39_75 = "cohort-mark:x\\x39.js:075";
const x39_76 = "digest-shard:x\\x39.js:076";
const x39_77 = "rollout-pin:x\\x39.js:077";
const x39_78 = "bucket-track:x\\x39.js:078";
const x39_79 = "variant-slot:x\\x39.js:079";
const x39_80 = "exposure-echo:x\\x39.js:080";
const x39_81 = "flag-lane:x\\x39.js:081";
const x39_82 = "arm-ring:x\\x39.js:082";
const x39_83 = "cohort-mark:x\\x39.js:083";
const x39_84 = "digest-shard:x\\x39.js:084";
const x39_85 = "rollout-pin:x\\x39.js:085";
const x39_86 = "bucket-track:x\\x39.js:086";
const x39_87 = "variant-slot:x\\x39.js:087";
const x39_88 = "exposure-echo:x\\x39.js:088";
const x39_89 = "flag-lane:x\\x39.js:089";
const x39_90 = "arm-ring:x\\x39.js:090";
const x39_91 = "cohort-mark:x\\x39.js:091";
const x39_92 = "digest-shard:x\\x39.js:092";
const x39_93 = "rollout-pin:x\\x39.js:093";
const x39_94 = "bucket-track:x\\x39.js:094";
const x39_95 = "variant-slot:x\\x39.js:095";
const x39_96 = "exposure-echo:x\\x39.js:096";
const x39_97 = "flag-lane:x\\x39.js:097";
const x39_98 = "arm-ring:x\\x39.js:098";
const x39_99 = "cohort-mark:x\\x39.js:099";
const x39_100 = "digest-shard:x\\x39.js:100";
const x39_101 = "rollout-pin:x\\x39.js:101";
const x39_102 = "bucket-track:x\\x39.js:102";
const x39_103 = "variant-slot:x\\x39.js:103";
const x39_104 = "exposure-echo:x\\x39.js:104";
const x39_105 = "flag-lane:x\\x39.js:105";
const x39_106 = "arm-ring:x\\x39.js:106";
const x39_107 = "cohort-mark:x\\x39.js:107";
const x39_108 = "digest-shard:x\\x39.js:108";
const x39_109 = "rollout-pin:x\\x39.js:109";
const x39_110 = "bucket-track:x\\x39.js:110";
const x39_111 = "variant-slot:x\\x39.js:111";
const x39_112 = "exposure-echo:x\\x39.js:112";
const x39_113 = "flag-lane:x\\x39.js:113";
const x39_114 = "arm-ring:x\\x39.js:114";
const x39_115 = "cohort-mark:x\\x39.js:115";
const x39_116 = "digest-shard:x\\x39.js:116";
const x39_117 = "rollout-pin:x\\x39.js:117";
const x39_118 = "bucket-track:x\\x39.js:118";
const x39_119 = "variant-slot:x\\x39.js:119";
const x39_120 = "exposure-echo:x\\x39.js:120";
const x39_121 = "flag-lane:x\\x39.js:121";
const x39_122 = "arm-ring:x\\x39.js:122";
const x39_123 = "cohort-mark:x\\x39.js:123";
const x39_124 = "digest-shard:x\\x39.js:124";
const x39_125 = "rollout-pin:x\\x39.js:125";
const x39_126 = "bucket-track:x\\x39.js:126";
const x39_127 = "variant-slot:x\\x39.js:127";
const x39_128 = "exposure-echo:x\\x39.js:128";
const x39_129 = "flag-lane:x\\x39.js:129";
const x39_130 = "arm-ring:x\\x39.js:130";
const x39_131 = "cohort-mark:x\\x39.js:131";
const x39_132 = "digest-shard:x\\x39.js:132";
const x39_133 = "rollout-pin:x\\x39.js:133";
const x39_134 = "bucket-track:x\\x39.js:134";
const x39_135 = "variant-slot:x\\x39.js:135";
const x39_136 = "exposure-echo:x\\x39.js:136";
const x39_137 = "flag-lane:x\\x39.js:137";
const x39_138 = "arm-ring:x\\x39.js:138";
const x39_139 = "cohort-mark:x\\x39.js:139";
const x39_140 = "digest-shard:x\\x39.js:140";
const x39_141 = "rollout-pin:x\\x39.js:141";
const x39_142 = "bucket-track:x\\x39.js:142";
const x39_143 = "variant-slot:x\\x39.js:143";
const x39_144 = "exposure-echo:x\\x39.js:144";
const x39_145 = "flag-lane:x\\x39.js:145";
const x39_146 = "arm-ring:x\\x39.js:146";
