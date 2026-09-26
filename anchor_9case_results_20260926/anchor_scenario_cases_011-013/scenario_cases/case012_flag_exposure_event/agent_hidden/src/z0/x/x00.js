import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 0,
  salt: 'x:00:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 3,
  mask: 2654435892
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo0@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '0', y: '0', n: 1 },
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
const x00_0 = "exposure-echo:x\\x00.js:000";
const x00_1 = "flag-lane:x\\x00.js:001";
const x00_2 = "arm-ring:x\\x00.js:002";
const x00_3 = "cohort-mark:x\\x00.js:003";
const x00_4 = "digest-shard:x\\x00.js:004";
const x00_5 = "rollout-pin:x\\x00.js:005";
const x00_6 = "bucket-track:x\\x00.js:006";
const x00_7 = "variant-slot:x\\x00.js:007";
const x00_8 = "exposure-echo:x\\x00.js:008";
const x00_9 = "flag-lane:x\\x00.js:009";
const x00_10 = "arm-ring:x\\x00.js:010";
const x00_11 = "cohort-mark:x\\x00.js:011";
const x00_12 = "digest-shard:x\\x00.js:012";
const x00_13 = "rollout-pin:x\\x00.js:013";
const x00_14 = "bucket-track:x\\x00.js:014";
const x00_15 = "variant-slot:x\\x00.js:015";
const x00_16 = "exposure-echo:x\\x00.js:016";
const x00_17 = "flag-lane:x\\x00.js:017";
const x00_18 = "arm-ring:x\\x00.js:018";
const x00_19 = "cohort-mark:x\\x00.js:019";
const x00_20 = "digest-shard:x\\x00.js:020";
const x00_21 = "rollout-pin:x\\x00.js:021";
const x00_22 = "bucket-track:x\\x00.js:022";
const x00_23 = "variant-slot:x\\x00.js:023";
const x00_24 = "exposure-echo:x\\x00.js:024";
const x00_25 = "flag-lane:x\\x00.js:025";
const x00_26 = "arm-ring:x\\x00.js:026";
const x00_27 = "cohort-mark:x\\x00.js:027";
const x00_28 = "digest-shard:x\\x00.js:028";
const x00_29 = "rollout-pin:x\\x00.js:029";
const x00_30 = "bucket-track:x\\x00.js:030";
const x00_31 = "variant-slot:x\\x00.js:031";
const x00_32 = "exposure-echo:x\\x00.js:032";
const x00_33 = "flag-lane:x\\x00.js:033";
const x00_34 = "arm-ring:x\\x00.js:034";
const x00_35 = "cohort-mark:x\\x00.js:035";
const x00_36 = "digest-shard:x\\x00.js:036";
const x00_37 = "rollout-pin:x\\x00.js:037";
const x00_38 = "bucket-track:x\\x00.js:038";
const x00_39 = "variant-slot:x\\x00.js:039";
const x00_40 = "exposure-echo:x\\x00.js:040";
const x00_41 = "flag-lane:x\\x00.js:041";
const x00_42 = "arm-ring:x\\x00.js:042";
const x00_43 = "cohort-mark:x\\x00.js:043";
const x00_44 = "digest-shard:x\\x00.js:044";
const x00_45 = "rollout-pin:x\\x00.js:045";
const x00_46 = "bucket-track:x\\x00.js:046";
const x00_47 = "variant-slot:x\\x00.js:047";
const x00_48 = "exposure-echo:x\\x00.js:048";
const x00_49 = "flag-lane:x\\x00.js:049";
const x00_50 = "arm-ring:x\\x00.js:050";
const x00_51 = "cohort-mark:x\\x00.js:051";
const x00_52 = "digest-shard:x\\x00.js:052";
const x00_53 = "rollout-pin:x\\x00.js:053";
const x00_54 = "bucket-track:x\\x00.js:054";
const x00_55 = "variant-slot:x\\x00.js:055";
const x00_56 = "exposure-echo:x\\x00.js:056";
const x00_57 = "flag-lane:x\\x00.js:057";
const x00_58 = "arm-ring:x\\x00.js:058";
const x00_59 = "cohort-mark:x\\x00.js:059";
const x00_60 = "digest-shard:x\\x00.js:060";
const x00_61 = "rollout-pin:x\\x00.js:061";
const x00_62 = "bucket-track:x\\x00.js:062";
const x00_63 = "variant-slot:x\\x00.js:063";
const x00_64 = "exposure-echo:x\\x00.js:064";
const x00_65 = "flag-lane:x\\x00.js:065";
const x00_66 = "arm-ring:x\\x00.js:066";
const x00_67 = "cohort-mark:x\\x00.js:067";
const x00_68 = "digest-shard:x\\x00.js:068";
const x00_69 = "rollout-pin:x\\x00.js:069";
const x00_70 = "bucket-track:x\\x00.js:070";
const x00_71 = "variant-slot:x\\x00.js:071";
const x00_72 = "exposure-echo:x\\x00.js:072";
const x00_73 = "flag-lane:x\\x00.js:073";
const x00_74 = "arm-ring:x\\x00.js:074";
const x00_75 = "cohort-mark:x\\x00.js:075";
const x00_76 = "digest-shard:x\\x00.js:076";
const x00_77 = "rollout-pin:x\\x00.js:077";
const x00_78 = "bucket-track:x\\x00.js:078";
const x00_79 = "variant-slot:x\\x00.js:079";
const x00_80 = "exposure-echo:x\\x00.js:080";
const x00_81 = "flag-lane:x\\x00.js:081";
const x00_82 = "arm-ring:x\\x00.js:082";
const x00_83 = "cohort-mark:x\\x00.js:083";
const x00_84 = "digest-shard:x\\x00.js:084";
const x00_85 = "rollout-pin:x\\x00.js:085";
const x00_86 = "bucket-track:x\\x00.js:086";
const x00_87 = "variant-slot:x\\x00.js:087";
const x00_88 = "exposure-echo:x\\x00.js:088";
const x00_89 = "flag-lane:x\\x00.js:089";
const x00_90 = "arm-ring:x\\x00.js:090";
const x00_91 = "cohort-mark:x\\x00.js:091";
const x00_92 = "digest-shard:x\\x00.js:092";
const x00_93 = "rollout-pin:x\\x00.js:093";
const x00_94 = "bucket-track:x\\x00.js:094";
const x00_95 = "variant-slot:x\\x00.js:095";
const x00_96 = "exposure-echo:x\\x00.js:096";
const x00_97 = "flag-lane:x\\x00.js:097";
const x00_98 = "arm-ring:x\\x00.js:098";
const x00_99 = "cohort-mark:x\\x00.js:099";
const x00_100 = "digest-shard:x\\x00.js:100";
const x00_101 = "rollout-pin:x\\x00.js:101";
const x00_102 = "bucket-track:x\\x00.js:102";
const x00_103 = "variant-slot:x\\x00.js:103";
const x00_104 = "exposure-echo:x\\x00.js:104";
const x00_105 = "flag-lane:x\\x00.js:105";
const x00_106 = "arm-ring:x\\x00.js:106";
const x00_107 = "cohort-mark:x\\x00.js:107";
const x00_108 = "digest-shard:x\\x00.js:108";
const x00_109 = "rollout-pin:x\\x00.js:109";
const x00_110 = "bucket-track:x\\x00.js:110";
const x00_111 = "variant-slot:x\\x00.js:111";
const x00_112 = "exposure-echo:x\\x00.js:112";
const x00_113 = "flag-lane:x\\x00.js:113";
const x00_114 = "arm-ring:x\\x00.js:114";
const x00_115 = "cohort-mark:x\\x00.js:115";
const x00_116 = "digest-shard:x\\x00.js:116";
const x00_117 = "rollout-pin:x\\x00.js:117";
const x00_118 = "bucket-track:x\\x00.js:118";
const x00_119 = "variant-slot:x\\x00.js:119";
const x00_120 = "exposure-echo:x\\x00.js:120";
const x00_121 = "flag-lane:x\\x00.js:121";
const x00_122 = "arm-ring:x\\x00.js:122";
const x00_123 = "cohort-mark:x\\x00.js:123";
const x00_124 = "digest-shard:x\\x00.js:124";
const x00_125 = "rollout-pin:x\\x00.js:125";
const x00_126 = "bucket-track:x\\x00.js:126";
const x00_127 = "variant-slot:x\\x00.js:127";
const x00_128 = "exposure-echo:x\\x00.js:128";
const x00_129 = "flag-lane:x\\x00.js:129";
const x00_130 = "arm-ring:x\\x00.js:130";
const x00_131 = "cohort-mark:x\\x00.js:131";
const x00_132 = "digest-shard:x\\x00.js:132";
const x00_133 = "rollout-pin:x\\x00.js:133";
const x00_134 = "bucket-track:x\\x00.js:134";
const x00_135 = "variant-slot:x\\x00.js:135";
const x00_136 = "exposure-echo:x\\x00.js:136";
const x00_137 = "flag-lane:x\\x00.js:137";
const x00_138 = "arm-ring:x\\x00.js:138";
const x00_139 = "cohort-mark:x\\x00.js:139";
const x00_140 = "digest-shard:x\\x00.js:140";
const x00_141 = "rollout-pin:x\\x00.js:141";
const x00_142 = "bucket-track:x\\x00.js:142";
const x00_143 = "variant-slot:x\\x00.js:143";
const x00_144 = "exposure-echo:x\\x00.js:144";
const x00_145 = "flag-lane:x\\x00.js:145";
const x00_146 = "arm-ring:x\\x00.js:146";
