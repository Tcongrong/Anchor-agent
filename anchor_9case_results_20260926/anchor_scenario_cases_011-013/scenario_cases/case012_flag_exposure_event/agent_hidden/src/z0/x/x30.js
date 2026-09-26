import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 30,
  salt: 'x:0u:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 11,
  mask: 683130098
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo30@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '2', y: '2', n: 1 },
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
const x30_0 = "exposure-echo:x\\x30.js:000";
const x30_1 = "flag-lane:x\\x30.js:001";
const x30_2 = "arm-ring:x\\x30.js:002";
const x30_3 = "cohort-mark:x\\x30.js:003";
const x30_4 = "digest-shard:x\\x30.js:004";
const x30_5 = "rollout-pin:x\\x30.js:005";
const x30_6 = "bucket-track:x\\x30.js:006";
const x30_7 = "variant-slot:x\\x30.js:007";
const x30_8 = "exposure-echo:x\\x30.js:008";
const x30_9 = "flag-lane:x\\x30.js:009";
const x30_10 = "arm-ring:x\\x30.js:010";
const x30_11 = "cohort-mark:x\\x30.js:011";
const x30_12 = "digest-shard:x\\x30.js:012";
const x30_13 = "rollout-pin:x\\x30.js:013";
const x30_14 = "bucket-track:x\\x30.js:014";
const x30_15 = "variant-slot:x\\x30.js:015";
const x30_16 = "exposure-echo:x\\x30.js:016";
const x30_17 = "flag-lane:x\\x30.js:017";
const x30_18 = "arm-ring:x\\x30.js:018";
const x30_19 = "cohort-mark:x\\x30.js:019";
const x30_20 = "digest-shard:x\\x30.js:020";
const x30_21 = "rollout-pin:x\\x30.js:021";
const x30_22 = "bucket-track:x\\x30.js:022";
const x30_23 = "variant-slot:x\\x30.js:023";
const x30_24 = "exposure-echo:x\\x30.js:024";
const x30_25 = "flag-lane:x\\x30.js:025";
const x30_26 = "arm-ring:x\\x30.js:026";
const x30_27 = "cohort-mark:x\\x30.js:027";
const x30_28 = "digest-shard:x\\x30.js:028";
const x30_29 = "rollout-pin:x\\x30.js:029";
const x30_30 = "bucket-track:x\\x30.js:030";
const x30_31 = "variant-slot:x\\x30.js:031";
const x30_32 = "exposure-echo:x\\x30.js:032";
const x30_33 = "flag-lane:x\\x30.js:033";
const x30_34 = "arm-ring:x\\x30.js:034";
const x30_35 = "cohort-mark:x\\x30.js:035";
const x30_36 = "digest-shard:x\\x30.js:036";
const x30_37 = "rollout-pin:x\\x30.js:037";
const x30_38 = "bucket-track:x\\x30.js:038";
const x30_39 = "variant-slot:x\\x30.js:039";
const x30_40 = "exposure-echo:x\\x30.js:040";
const x30_41 = "flag-lane:x\\x30.js:041";
const x30_42 = "arm-ring:x\\x30.js:042";
const x30_43 = "cohort-mark:x\\x30.js:043";
const x30_44 = "digest-shard:x\\x30.js:044";
const x30_45 = "rollout-pin:x\\x30.js:045";
const x30_46 = "bucket-track:x\\x30.js:046";
const x30_47 = "variant-slot:x\\x30.js:047";
const x30_48 = "exposure-echo:x\\x30.js:048";
const x30_49 = "flag-lane:x\\x30.js:049";
const x30_50 = "arm-ring:x\\x30.js:050";
const x30_51 = "cohort-mark:x\\x30.js:051";
const x30_52 = "digest-shard:x\\x30.js:052";
const x30_53 = "rollout-pin:x\\x30.js:053";
const x30_54 = "bucket-track:x\\x30.js:054";
const x30_55 = "variant-slot:x\\x30.js:055";
const x30_56 = "exposure-echo:x\\x30.js:056";
const x30_57 = "flag-lane:x\\x30.js:057";
const x30_58 = "arm-ring:x\\x30.js:058";
const x30_59 = "cohort-mark:x\\x30.js:059";
const x30_60 = "digest-shard:x\\x30.js:060";
const x30_61 = "rollout-pin:x\\x30.js:061";
const x30_62 = "bucket-track:x\\x30.js:062";
const x30_63 = "variant-slot:x\\x30.js:063";
const x30_64 = "exposure-echo:x\\x30.js:064";
const x30_65 = "flag-lane:x\\x30.js:065";
const x30_66 = "arm-ring:x\\x30.js:066";
const x30_67 = "cohort-mark:x\\x30.js:067";
const x30_68 = "digest-shard:x\\x30.js:068";
const x30_69 = "rollout-pin:x\\x30.js:069";
const x30_70 = "bucket-track:x\\x30.js:070";
const x30_71 = "variant-slot:x\\x30.js:071";
const x30_72 = "exposure-echo:x\\x30.js:072";
const x30_73 = "flag-lane:x\\x30.js:073";
const x30_74 = "arm-ring:x\\x30.js:074";
const x30_75 = "cohort-mark:x\\x30.js:075";
const x30_76 = "digest-shard:x\\x30.js:076";
const x30_77 = "rollout-pin:x\\x30.js:077";
const x30_78 = "bucket-track:x\\x30.js:078";
const x30_79 = "variant-slot:x\\x30.js:079";
const x30_80 = "exposure-echo:x\\x30.js:080";
const x30_81 = "flag-lane:x\\x30.js:081";
const x30_82 = "arm-ring:x\\x30.js:082";
const x30_83 = "cohort-mark:x\\x30.js:083";
const x30_84 = "digest-shard:x\\x30.js:084";
const x30_85 = "rollout-pin:x\\x30.js:085";
const x30_86 = "bucket-track:x\\x30.js:086";
const x30_87 = "variant-slot:x\\x30.js:087";
const x30_88 = "exposure-echo:x\\x30.js:088";
const x30_89 = "flag-lane:x\\x30.js:089";
const x30_90 = "arm-ring:x\\x30.js:090";
const x30_91 = "cohort-mark:x\\x30.js:091";
const x30_92 = "digest-shard:x\\x30.js:092";
const x30_93 = "rollout-pin:x\\x30.js:093";
const x30_94 = "bucket-track:x\\x30.js:094";
const x30_95 = "variant-slot:x\\x30.js:095";
const x30_96 = "exposure-echo:x\\x30.js:096";
const x30_97 = "flag-lane:x\\x30.js:097";
const x30_98 = "arm-ring:x\\x30.js:098";
const x30_99 = "cohort-mark:x\\x30.js:099";
const x30_100 = "digest-shard:x\\x30.js:100";
const x30_101 = "rollout-pin:x\\x30.js:101";
const x30_102 = "bucket-track:x\\x30.js:102";
const x30_103 = "variant-slot:x\\x30.js:103";
const x30_104 = "exposure-echo:x\\x30.js:104";
const x30_105 = "flag-lane:x\\x30.js:105";
const x30_106 = "arm-ring:x\\x30.js:106";
const x30_107 = "cohort-mark:x\\x30.js:107";
const x30_108 = "digest-shard:x\\x30.js:108";
const x30_109 = "rollout-pin:x\\x30.js:109";
const x30_110 = "bucket-track:x\\x30.js:110";
const x30_111 = "variant-slot:x\\x30.js:111";
const x30_112 = "exposure-echo:x\\x30.js:112";
const x30_113 = "flag-lane:x\\x30.js:113";
const x30_114 = "arm-ring:x\\x30.js:114";
const x30_115 = "cohort-mark:x\\x30.js:115";
const x30_116 = "digest-shard:x\\x30.js:116";
const x30_117 = "rollout-pin:x\\x30.js:117";
const x30_118 = "bucket-track:x\\x30.js:118";
const x30_119 = "variant-slot:x\\x30.js:119";
const x30_120 = "exposure-echo:x\\x30.js:120";
const x30_121 = "flag-lane:x\\x30.js:121";
const x30_122 = "arm-ring:x\\x30.js:122";
const x30_123 = "cohort-mark:x\\x30.js:123";
const x30_124 = "digest-shard:x\\x30.js:124";
const x30_125 = "rollout-pin:x\\x30.js:125";
const x30_126 = "bucket-track:x\\x30.js:126";
const x30_127 = "variant-slot:x\\x30.js:127";
const x30_128 = "exposure-echo:x\\x30.js:128";
const x30_129 = "flag-lane:x\\x30.js:129";
const x30_130 = "arm-ring:x\\x30.js:130";
const x30_131 = "cohort-mark:x\\x30.js:131";
const x30_132 = "digest-shard:x\\x30.js:132";
const x30_133 = "rollout-pin:x\\x30.js:133";
const x30_134 = "bucket-track:x\\x30.js:134";
const x30_135 = "variant-slot:x\\x30.js:135";
const x30_136 = "exposure-echo:x\\x30.js:136";
const x30_137 = "flag-lane:x\\x30.js:137";
const x30_138 = "arm-ring:x\\x30.js:138";
const x30_139 = "cohort-mark:x\\x30.js:139";
const x30_140 = "digest-shard:x\\x30.js:140";
const x30_141 = "rollout-pin:x\\x30.js:141";
const x30_142 = "bucket-track:x\\x30.js:142";
const x30_143 = "variant-slot:x\\x30.js:143";
const x30_144 = "exposure-echo:x\\x30.js:144";
const x30_145 = "flag-lane:x\\x30.js:145";
const x30_146 = "arm-ring:x\\x30.js:146";
