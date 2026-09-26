import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 22,
  salt: 's:0m:store',
  order: [2, 3, 4, 5, 6, 0, 1],
  sep: '\u2062',
  shift: 5,
  mask: 1936384716
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault22@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '1', y: '1', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(2, 10) + '~' + (cfg.slot + 2).toString(36) + (0).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x22_0 = "arm-slot:x\\x22.js:000";
const x22_1 = "rollout-ledger:x\\x22.js:001";
const x22_2 = "cohort-ring:x\\x22.js:002";
const x22_3 = "exposure-log:x\\x22.js:003";
const x22_4 = "sticky-bit:x\\x22.js:004";
const x22_5 = "salt-shard:x\\x22.js:005";
const x22_6 = "bucket-cell:x\\x22.js:006";
const x22_7 = "variant-track:x\\x22.js:007";
const x22_8 = "arm-slot:x\\x22.js:008";
const x22_9 = "rollout-ledger:x\\x22.js:009";
const x22_10 = "cohort-ring:x\\x22.js:010";
const x22_11 = "exposure-log:x\\x22.js:011";
const x22_12 = "sticky-bit:x\\x22.js:012";
const x22_13 = "salt-shard:x\\x22.js:013";
const x22_14 = "bucket-cell:x\\x22.js:014";
const x22_15 = "variant-track:x\\x22.js:015";
const x22_16 = "arm-slot:x\\x22.js:016";
const x22_17 = "rollout-ledger:x\\x22.js:017";
const x22_18 = "cohort-ring:x\\x22.js:018";
const x22_19 = "exposure-log:x\\x22.js:019";
const x22_20 = "sticky-bit:x\\x22.js:020";
const x22_21 = "salt-shard:x\\x22.js:021";
const x22_22 = "bucket-cell:x\\x22.js:022";
const x22_23 = "variant-track:x\\x22.js:023";
const x22_24 = "arm-slot:x\\x22.js:024";
const x22_25 = "rollout-ledger:x\\x22.js:025";
const x22_26 = "cohort-ring:x\\x22.js:026";
const x22_27 = "exposure-log:x\\x22.js:027";
const x22_28 = "sticky-bit:x\\x22.js:028";
const x22_29 = "salt-shard:x\\x22.js:029";
const x22_30 = "bucket-cell:x\\x22.js:030";
const x22_31 = "variant-track:x\\x22.js:031";
const x22_32 = "arm-slot:x\\x22.js:032";
const x22_33 = "rollout-ledger:x\\x22.js:033";
const x22_34 = "cohort-ring:x\\x22.js:034";
const x22_35 = "exposure-log:x\\x22.js:035";
const x22_36 = "sticky-bit:x\\x22.js:036";
const x22_37 = "salt-shard:x\\x22.js:037";
const x22_38 = "bucket-cell:x\\x22.js:038";
const x22_39 = "variant-track:x\\x22.js:039";
const x22_40 = "arm-slot:x\\x22.js:040";
const x22_41 = "rollout-ledger:x\\x22.js:041";
const x22_42 = "cohort-ring:x\\x22.js:042";
const x22_43 = "exposure-log:x\\x22.js:043";
const x22_44 = "sticky-bit:x\\x22.js:044";
const x22_45 = "salt-shard:x\\x22.js:045";
const x22_46 = "bucket-cell:x\\x22.js:046";
const x22_47 = "variant-track:x\\x22.js:047";
const x22_48 = "arm-slot:x\\x22.js:048";
const x22_49 = "rollout-ledger:x\\x22.js:049";
const x22_50 = "cohort-ring:x\\x22.js:050";
const x22_51 = "exposure-log:x\\x22.js:051";
const x22_52 = "sticky-bit:x\\x22.js:052";
const x22_53 = "salt-shard:x\\x22.js:053";
const x22_54 = "bucket-cell:x\\x22.js:054";
const x22_55 = "variant-track:x\\x22.js:055";
const x22_56 = "arm-slot:x\\x22.js:056";
const x22_57 = "rollout-ledger:x\\x22.js:057";
const x22_58 = "cohort-ring:x\\x22.js:058";
const x22_59 = "exposure-log:x\\x22.js:059";
const x22_60 = "sticky-bit:x\\x22.js:060";
const x22_61 = "salt-shard:x\\x22.js:061";
const x22_62 = "bucket-cell:x\\x22.js:062";
const x22_63 = "variant-track:x\\x22.js:063";
const x22_64 = "arm-slot:x\\x22.js:064";
const x22_65 = "rollout-ledger:x\\x22.js:065";
const x22_66 = "cohort-ring:x\\x22.js:066";
const x22_67 = "exposure-log:x\\x22.js:067";
const x22_68 = "sticky-bit:x\\x22.js:068";
const x22_69 = "salt-shard:x\\x22.js:069";
const x22_70 = "bucket-cell:x\\x22.js:070";
const x22_71 = "variant-track:x\\x22.js:071";
const x22_72 = "arm-slot:x\\x22.js:072";
const x22_73 = "rollout-ledger:x\\x22.js:073";
const x22_74 = "cohort-ring:x\\x22.js:074";
const x22_75 = "exposure-log:x\\x22.js:075";
const x22_76 = "sticky-bit:x\\x22.js:076";
const x22_77 = "salt-shard:x\\x22.js:077";
const x22_78 = "bucket-cell:x\\x22.js:078";
const x22_79 = "variant-track:x\\x22.js:079";
const x22_80 = "arm-slot:x\\x22.js:080";
const x22_81 = "rollout-ledger:x\\x22.js:081";
const x22_82 = "cohort-ring:x\\x22.js:082";
const x22_83 = "exposure-log:x\\x22.js:083";
const x22_84 = "sticky-bit:x\\x22.js:084";
const x22_85 = "salt-shard:x\\x22.js:085";
const x22_86 = "bucket-cell:x\\x22.js:086";
const x22_87 = "variant-track:x\\x22.js:087";
const x22_88 = "arm-slot:x\\x22.js:088";
const x22_89 = "rollout-ledger:x\\x22.js:089";
const x22_90 = "cohort-ring:x\\x22.js:090";
const x22_91 = "exposure-log:x\\x22.js:091";
const x22_92 = "sticky-bit:x\\x22.js:092";
const x22_93 = "salt-shard:x\\x22.js:093";
const x22_94 = "bucket-cell:x\\x22.js:094";
const x22_95 = "variant-track:x\\x22.js:095";
const x22_96 = "arm-slot:x\\x22.js:096";
const x22_97 = "rollout-ledger:x\\x22.js:097";
const x22_98 = "cohort-ring:x\\x22.js:098";
const x22_99 = "exposure-log:x\\x22.js:099";
const x22_100 = "sticky-bit:x\\x22.js:100";
const x22_101 = "salt-shard:x\\x22.js:101";
const x22_102 = "bucket-cell:x\\x22.js:102";
const x22_103 = "variant-track:x\\x22.js:103";
const x22_104 = "arm-slot:x\\x22.js:104";
const x22_105 = "rollout-ledger:x\\x22.js:105";
const x22_106 = "cohort-ring:x\\x22.js:106";
const x22_107 = "exposure-log:x\\x22.js:107";
const x22_108 = "sticky-bit:x\\x22.js:108";
const x22_109 = "salt-shard:x\\x22.js:109";
const x22_110 = "bucket-cell:x\\x22.js:110";
const x22_111 = "variant-track:x\\x22.js:111";
const x22_112 = "arm-slot:x\\x22.js:112";
const x22_113 = "rollout-ledger:x\\x22.js:113";
const x22_114 = "cohort-ring:x\\x22.js:114";
const x22_115 = "exposure-log:x\\x22.js:115";
const x22_116 = "sticky-bit:x\\x22.js:116";
const x22_117 = "salt-shard:x\\x22.js:117";
const x22_118 = "bucket-cell:x\\x22.js:118";
const x22_119 = "variant-track:x\\x22.js:119";
const x22_120 = "arm-slot:x\\x22.js:120";
const x22_121 = "rollout-ledger:x\\x22.js:121";
const x22_122 = "cohort-ring:x\\x22.js:122";
const x22_123 = "exposure-log:x\\x22.js:123";
const x22_124 = "sticky-bit:x\\x22.js:124";
const x22_125 = "salt-shard:x\\x22.js:125";
const x22_126 = "bucket-cell:x\\x22.js:126";
const x22_127 = "variant-track:x\\x22.js:127";
const x22_128 = "arm-slot:x\\x22.js:128";
const x22_129 = "rollout-ledger:x\\x22.js:129";
const x22_130 = "cohort-ring:x\\x22.js:130";
const x22_131 = "exposure-log:x\\x22.js:131";
const x22_132 = "sticky-bit:x\\x22.js:132";
const x22_133 = "salt-shard:x\\x22.js:133";
const x22_134 = "bucket-cell:x\\x22.js:134";
const x22_135 = "variant-track:x\\x22.js:135";
const x22_136 = "arm-slot:x\\x22.js:136";
const x22_137 = "rollout-ledger:x\\x22.js:137";
const x22_138 = "cohort-ring:x\\x22.js:138";
const x22_139 = "exposure-log:x\\x22.js:139";
const x22_140 = "sticky-bit:x\\x22.js:140";
const x22_141 = "salt-shard:x\\x22.js:141";
const x22_142 = "bucket-cell:x\\x22.js:142";
const x22_143 = "variant-track:x\\x22.js:143";
const x22_144 = "arm-slot:x\\x22.js:144";
const x22_145 = "rollout-ledger:x\\x22.js:145";
const x22_146 = "cohort-ring:x\\x22.js:146";
