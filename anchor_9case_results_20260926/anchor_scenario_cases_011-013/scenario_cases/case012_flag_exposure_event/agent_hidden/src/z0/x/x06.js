import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 6,
  salt: 'x:06:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 9,
  mask: 1401181274
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo6@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '6', y: '6', n: 1 },
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
const x06_0 = "exposure-echo:x\\x06.js:000";
const x06_1 = "flag-lane:x\\x06.js:001";
const x06_2 = "arm-ring:x\\x06.js:002";
const x06_3 = "cohort-mark:x\\x06.js:003";
const x06_4 = "digest-shard:x\\x06.js:004";
const x06_5 = "rollout-pin:x\\x06.js:005";
const x06_6 = "bucket-track:x\\x06.js:006";
const x06_7 = "variant-slot:x\\x06.js:007";
const x06_8 = "exposure-echo:x\\x06.js:008";
const x06_9 = "flag-lane:x\\x06.js:009";
const x06_10 = "arm-ring:x\\x06.js:010";
const x06_11 = "cohort-mark:x\\x06.js:011";
const x06_12 = "digest-shard:x\\x06.js:012";
const x06_13 = "rollout-pin:x\\x06.js:013";
const x06_14 = "bucket-track:x\\x06.js:014";
const x06_15 = "variant-slot:x\\x06.js:015";
const x06_16 = "exposure-echo:x\\x06.js:016";
const x06_17 = "flag-lane:x\\x06.js:017";
const x06_18 = "arm-ring:x\\x06.js:018";
const x06_19 = "cohort-mark:x\\x06.js:019";
const x06_20 = "digest-shard:x\\x06.js:020";
const x06_21 = "rollout-pin:x\\x06.js:021";
const x06_22 = "bucket-track:x\\x06.js:022";
const x06_23 = "variant-slot:x\\x06.js:023";
const x06_24 = "exposure-echo:x\\x06.js:024";
const x06_25 = "flag-lane:x\\x06.js:025";
const x06_26 = "arm-ring:x\\x06.js:026";
const x06_27 = "cohort-mark:x\\x06.js:027";
const x06_28 = "digest-shard:x\\x06.js:028";
const x06_29 = "rollout-pin:x\\x06.js:029";
const x06_30 = "bucket-track:x\\x06.js:030";
const x06_31 = "variant-slot:x\\x06.js:031";
const x06_32 = "exposure-echo:x\\x06.js:032";
const x06_33 = "flag-lane:x\\x06.js:033";
const x06_34 = "arm-ring:x\\x06.js:034";
const x06_35 = "cohort-mark:x\\x06.js:035";
const x06_36 = "digest-shard:x\\x06.js:036";
const x06_37 = "rollout-pin:x\\x06.js:037";
const x06_38 = "bucket-track:x\\x06.js:038";
const x06_39 = "variant-slot:x\\x06.js:039";
const x06_40 = "exposure-echo:x\\x06.js:040";
const x06_41 = "flag-lane:x\\x06.js:041";
const x06_42 = "arm-ring:x\\x06.js:042";
const x06_43 = "cohort-mark:x\\x06.js:043";
const x06_44 = "digest-shard:x\\x06.js:044";
const x06_45 = "rollout-pin:x\\x06.js:045";
const x06_46 = "bucket-track:x\\x06.js:046";
const x06_47 = "variant-slot:x\\x06.js:047";
const x06_48 = "exposure-echo:x\\x06.js:048";
const x06_49 = "flag-lane:x\\x06.js:049";
const x06_50 = "arm-ring:x\\x06.js:050";
const x06_51 = "cohort-mark:x\\x06.js:051";
const x06_52 = "digest-shard:x\\x06.js:052";
const x06_53 = "rollout-pin:x\\x06.js:053";
const x06_54 = "bucket-track:x\\x06.js:054";
const x06_55 = "variant-slot:x\\x06.js:055";
const x06_56 = "exposure-echo:x\\x06.js:056";
const x06_57 = "flag-lane:x\\x06.js:057";
const x06_58 = "arm-ring:x\\x06.js:058";
const x06_59 = "cohort-mark:x\\x06.js:059";
const x06_60 = "digest-shard:x\\x06.js:060";
const x06_61 = "rollout-pin:x\\x06.js:061";
const x06_62 = "bucket-track:x\\x06.js:062";
const x06_63 = "variant-slot:x\\x06.js:063";
const x06_64 = "exposure-echo:x\\x06.js:064";
const x06_65 = "flag-lane:x\\x06.js:065";
const x06_66 = "arm-ring:x\\x06.js:066";
const x06_67 = "cohort-mark:x\\x06.js:067";
const x06_68 = "digest-shard:x\\x06.js:068";
const x06_69 = "rollout-pin:x\\x06.js:069";
const x06_70 = "bucket-track:x\\x06.js:070";
const x06_71 = "variant-slot:x\\x06.js:071";
const x06_72 = "exposure-echo:x\\x06.js:072";
const x06_73 = "flag-lane:x\\x06.js:073";
const x06_74 = "arm-ring:x\\x06.js:074";
const x06_75 = "cohort-mark:x\\x06.js:075";
const x06_76 = "digest-shard:x\\x06.js:076";
const x06_77 = "rollout-pin:x\\x06.js:077";
const x06_78 = "bucket-track:x\\x06.js:078";
const x06_79 = "variant-slot:x\\x06.js:079";
const x06_80 = "exposure-echo:x\\x06.js:080";
const x06_81 = "flag-lane:x\\x06.js:081";
const x06_82 = "arm-ring:x\\x06.js:082";
const x06_83 = "cohort-mark:x\\x06.js:083";
const x06_84 = "digest-shard:x\\x06.js:084";
const x06_85 = "rollout-pin:x\\x06.js:085";
const x06_86 = "bucket-track:x\\x06.js:086";
const x06_87 = "variant-slot:x\\x06.js:087";
const x06_88 = "exposure-echo:x\\x06.js:088";
const x06_89 = "flag-lane:x\\x06.js:089";
const x06_90 = "arm-ring:x\\x06.js:090";
const x06_91 = "cohort-mark:x\\x06.js:091";
const x06_92 = "digest-shard:x\\x06.js:092";
const x06_93 = "rollout-pin:x\\x06.js:093";
const x06_94 = "bucket-track:x\\x06.js:094";
const x06_95 = "variant-slot:x\\x06.js:095";
const x06_96 = "exposure-echo:x\\x06.js:096";
const x06_97 = "flag-lane:x\\x06.js:097";
const x06_98 = "arm-ring:x\\x06.js:098";
const x06_99 = "cohort-mark:x\\x06.js:099";
const x06_100 = "digest-shard:x\\x06.js:100";
const x06_101 = "rollout-pin:x\\x06.js:101";
const x06_102 = "bucket-track:x\\x06.js:102";
const x06_103 = "variant-slot:x\\x06.js:103";
const x06_104 = "exposure-echo:x\\x06.js:104";
const x06_105 = "flag-lane:x\\x06.js:105";
const x06_106 = "arm-ring:x\\x06.js:106";
const x06_107 = "cohort-mark:x\\x06.js:107";
const x06_108 = "digest-shard:x\\x06.js:108";
const x06_109 = "rollout-pin:x\\x06.js:109";
const x06_110 = "bucket-track:x\\x06.js:110";
const x06_111 = "variant-slot:x\\x06.js:111";
const x06_112 = "exposure-echo:x\\x06.js:112";
const x06_113 = "flag-lane:x\\x06.js:113";
const x06_114 = "arm-ring:x\\x06.js:114";
const x06_115 = "cohort-mark:x\\x06.js:115";
const x06_116 = "digest-shard:x\\x06.js:116";
const x06_117 = "rollout-pin:x\\x06.js:117";
const x06_118 = "bucket-track:x\\x06.js:118";
const x06_119 = "variant-slot:x\\x06.js:119";
const x06_120 = "exposure-echo:x\\x06.js:120";
const x06_121 = "flag-lane:x\\x06.js:121";
const x06_122 = "arm-ring:x\\x06.js:122";
const x06_123 = "cohort-mark:x\\x06.js:123";
const x06_124 = "digest-shard:x\\x06.js:124";
const x06_125 = "rollout-pin:x\\x06.js:125";
const x06_126 = "bucket-track:x\\x06.js:126";
const x06_127 = "variant-slot:x\\x06.js:127";
const x06_128 = "exposure-echo:x\\x06.js:128";
const x06_129 = "flag-lane:x\\x06.js:129";
const x06_130 = "arm-ring:x\\x06.js:130";
const x06_131 = "cohort-mark:x\\x06.js:131";
const x06_132 = "digest-shard:x\\x06.js:132";
const x06_133 = "rollout-pin:x\\x06.js:133";
const x06_134 = "bucket-track:x\\x06.js:134";
const x06_135 = "variant-slot:x\\x06.js:135";
const x06_136 = "exposure-echo:x\\x06.js:136";
const x06_137 = "flag-lane:x\\x06.js:137";
const x06_138 = "arm-ring:x\\x06.js:138";
const x06_139 = "cohort-mark:x\\x06.js:139";
const x06_140 = "digest-shard:x\\x06.js:140";
const x06_141 = "rollout-pin:x\\x06.js:141";
const x06_142 = "bucket-track:x\\x06.js:142";
const x06_143 = "variant-slot:x\\x06.js:143";
const x06_144 = "exposure-echo:x\\x06.js:144";
const x06_145 = "flag-lane:x\\x06.js:145";
const x06_146 = "arm-ring:x\\x06.js:146";
