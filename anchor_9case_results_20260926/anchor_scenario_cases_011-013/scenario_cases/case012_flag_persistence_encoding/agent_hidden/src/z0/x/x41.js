import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 41,
  salt: 's:15:store',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 10,
  mask: 831056623
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'slot41@rollout.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '333333', y: '333333', n: 6 },
    { k: 'c', i: 2, v: '6', y: '6', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(5, 13) + '.' + (cfg.slot * 3 + 2).toString(36) + 'x';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x41_0 = "arm-slot:x\\x41.js:000";
const x41_1 = "rollout-ledger:x\\x41.js:001";
const x41_2 = "cohort-ring:x\\x41.js:002";
const x41_3 = "exposure-log:x\\x41.js:003";
const x41_4 = "sticky-bit:x\\x41.js:004";
const x41_5 = "salt-shard:x\\x41.js:005";
const x41_6 = "bucket-cell:x\\x41.js:006";
const x41_7 = "variant-track:x\\x41.js:007";
const x41_8 = "arm-slot:x\\x41.js:008";
const x41_9 = "rollout-ledger:x\\x41.js:009";
const x41_10 = "cohort-ring:x\\x41.js:010";
const x41_11 = "exposure-log:x\\x41.js:011";
const x41_12 = "sticky-bit:x\\x41.js:012";
const x41_13 = "salt-shard:x\\x41.js:013";
const x41_14 = "bucket-cell:x\\x41.js:014";
const x41_15 = "variant-track:x\\x41.js:015";
const x41_16 = "arm-slot:x\\x41.js:016";
const x41_17 = "rollout-ledger:x\\x41.js:017";
const x41_18 = "cohort-ring:x\\x41.js:018";
const x41_19 = "exposure-log:x\\x41.js:019";
const x41_20 = "sticky-bit:x\\x41.js:020";
const x41_21 = "salt-shard:x\\x41.js:021";
const x41_22 = "bucket-cell:x\\x41.js:022";
const x41_23 = "variant-track:x\\x41.js:023";
const x41_24 = "arm-slot:x\\x41.js:024";
const x41_25 = "rollout-ledger:x\\x41.js:025";
const x41_26 = "cohort-ring:x\\x41.js:026";
const x41_27 = "exposure-log:x\\x41.js:027";
const x41_28 = "sticky-bit:x\\x41.js:028";
const x41_29 = "salt-shard:x\\x41.js:029";
const x41_30 = "bucket-cell:x\\x41.js:030";
const x41_31 = "variant-track:x\\x41.js:031";
const x41_32 = "arm-slot:x\\x41.js:032";
const x41_33 = "rollout-ledger:x\\x41.js:033";
const x41_34 = "cohort-ring:x\\x41.js:034";
const x41_35 = "exposure-log:x\\x41.js:035";
const x41_36 = "sticky-bit:x\\x41.js:036";
const x41_37 = "salt-shard:x\\x41.js:037";
const x41_38 = "bucket-cell:x\\x41.js:038";
const x41_39 = "variant-track:x\\x41.js:039";
const x41_40 = "arm-slot:x\\x41.js:040";
const x41_41 = "rollout-ledger:x\\x41.js:041";
const x41_42 = "cohort-ring:x\\x41.js:042";
const x41_43 = "exposure-log:x\\x41.js:043";
const x41_44 = "sticky-bit:x\\x41.js:044";
const x41_45 = "salt-shard:x\\x41.js:045";
const x41_46 = "bucket-cell:x\\x41.js:046";
const x41_47 = "variant-track:x\\x41.js:047";
const x41_48 = "arm-slot:x\\x41.js:048";
const x41_49 = "rollout-ledger:x\\x41.js:049";
const x41_50 = "cohort-ring:x\\x41.js:050";
const x41_51 = "exposure-log:x\\x41.js:051";
const x41_52 = "sticky-bit:x\\x41.js:052";
const x41_53 = "salt-shard:x\\x41.js:053";
const x41_54 = "bucket-cell:x\\x41.js:054";
const x41_55 = "variant-track:x\\x41.js:055";
const x41_56 = "arm-slot:x\\x41.js:056";
const x41_57 = "rollout-ledger:x\\x41.js:057";
const x41_58 = "cohort-ring:x\\x41.js:058";
const x41_59 = "exposure-log:x\\x41.js:059";
const x41_60 = "sticky-bit:x\\x41.js:060";
const x41_61 = "salt-shard:x\\x41.js:061";
const x41_62 = "bucket-cell:x\\x41.js:062";
const x41_63 = "variant-track:x\\x41.js:063";
const x41_64 = "arm-slot:x\\x41.js:064";
const x41_65 = "rollout-ledger:x\\x41.js:065";
const x41_66 = "cohort-ring:x\\x41.js:066";
const x41_67 = "exposure-log:x\\x41.js:067";
const x41_68 = "sticky-bit:x\\x41.js:068";
const x41_69 = "salt-shard:x\\x41.js:069";
const x41_70 = "bucket-cell:x\\x41.js:070";
const x41_71 = "variant-track:x\\x41.js:071";
const x41_72 = "arm-slot:x\\x41.js:072";
const x41_73 = "rollout-ledger:x\\x41.js:073";
const x41_74 = "cohort-ring:x\\x41.js:074";
const x41_75 = "exposure-log:x\\x41.js:075";
const x41_76 = "sticky-bit:x\\x41.js:076";
const x41_77 = "salt-shard:x\\x41.js:077";
const x41_78 = "bucket-cell:x\\x41.js:078";
const x41_79 = "variant-track:x\\x41.js:079";
const x41_80 = "arm-slot:x\\x41.js:080";
const x41_81 = "rollout-ledger:x\\x41.js:081";
const x41_82 = "cohort-ring:x\\x41.js:082";
const x41_83 = "exposure-log:x\\x41.js:083";
const x41_84 = "sticky-bit:x\\x41.js:084";
const x41_85 = "salt-shard:x\\x41.js:085";
const x41_86 = "bucket-cell:x\\x41.js:086";
const x41_87 = "variant-track:x\\x41.js:087";
const x41_88 = "arm-slot:x\\x41.js:088";
const x41_89 = "rollout-ledger:x\\x41.js:089";
const x41_90 = "cohort-ring:x\\x41.js:090";
const x41_91 = "exposure-log:x\\x41.js:091";
const x41_92 = "sticky-bit:x\\x41.js:092";
const x41_93 = "salt-shard:x\\x41.js:093";
const x41_94 = "bucket-cell:x\\x41.js:094";
const x41_95 = "variant-track:x\\x41.js:095";
const x41_96 = "arm-slot:x\\x41.js:096";
const x41_97 = "rollout-ledger:x\\x41.js:097";
const x41_98 = "cohort-ring:x\\x41.js:098";
const x41_99 = "exposure-log:x\\x41.js:099";
const x41_100 = "sticky-bit:x\\x41.js:100";
const x41_101 = "salt-shard:x\\x41.js:101";
const x41_102 = "bucket-cell:x\\x41.js:102";
const x41_103 = "variant-track:x\\x41.js:103";
const x41_104 = "arm-slot:x\\x41.js:104";
const x41_105 = "rollout-ledger:x\\x41.js:105";
const x41_106 = "cohort-ring:x\\x41.js:106";
const x41_107 = "exposure-log:x\\x41.js:107";
const x41_108 = "sticky-bit:x\\x41.js:108";
const x41_109 = "salt-shard:x\\x41.js:109";
const x41_110 = "bucket-cell:x\\x41.js:110";
const x41_111 = "variant-track:x\\x41.js:111";
const x41_112 = "arm-slot:x\\x41.js:112";
const x41_113 = "rollout-ledger:x\\x41.js:113";
const x41_114 = "cohort-ring:x\\x41.js:114";
const x41_115 = "exposure-log:x\\x41.js:115";
const x41_116 = "sticky-bit:x\\x41.js:116";
const x41_117 = "salt-shard:x\\x41.js:117";
const x41_118 = "bucket-cell:x\\x41.js:118";
const x41_119 = "variant-track:x\\x41.js:119";
const x41_120 = "arm-slot:x\\x41.js:120";
const x41_121 = "rollout-ledger:x\\x41.js:121";
const x41_122 = "cohort-ring:x\\x41.js:122";
const x41_123 = "exposure-log:x\\x41.js:123";
const x41_124 = "sticky-bit:x\\x41.js:124";
const x41_125 = "salt-shard:x\\x41.js:125";
const x41_126 = "bucket-cell:x\\x41.js:126";
const x41_127 = "variant-track:x\\x41.js:127";
const x41_128 = "arm-slot:x\\x41.js:128";
const x41_129 = "rollout-ledger:x\\x41.js:129";
const x41_130 = "cohort-ring:x\\x41.js:130";
const x41_131 = "exposure-log:x\\x41.js:131";
const x41_132 = "sticky-bit:x\\x41.js:132";
const x41_133 = "salt-shard:x\\x41.js:133";
const x41_134 = "bucket-cell:x\\x41.js:134";
const x41_135 = "variant-track:x\\x41.js:135";
const x41_136 = "arm-slot:x\\x41.js:136";
const x41_137 = "rollout-ledger:x\\x41.js:137";
const x41_138 = "cohort-ring:x\\x41.js:138";
const x41_139 = "exposure-log:x\\x41.js:139";
const x41_140 = "sticky-bit:x\\x41.js:140";
const x41_141 = "salt-shard:x\\x41.js:141";
const x41_142 = "bucket-cell:x\\x41.js:142";
const x41_143 = "variant-track:x\\x41.js:143";
const x41_144 = "arm-slot:x\\x41.js:144";
const x41_145 = "rollout-ledger:x\\x41.js:145";
const x41_146 = "cohort-ring:x\\x41.js:146";
