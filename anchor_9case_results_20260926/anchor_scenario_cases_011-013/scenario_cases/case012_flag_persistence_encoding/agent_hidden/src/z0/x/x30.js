import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 30,
  salt: 's:0u:store',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2062',
  shift: 6,
  mask: 1697034324
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store30@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '2', y: '2', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(4, 14) + '-' + (cfg.slot + 5).toString(36) + 'aa';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x30_0 = "arm-slot:x\\x30.js:000";
const x30_1 = "rollout-ledger:x\\x30.js:001";
const x30_2 = "cohort-ring:x\\x30.js:002";
const x30_3 = "exposure-log:x\\x30.js:003";
const x30_4 = "sticky-bit:x\\x30.js:004";
const x30_5 = "salt-shard:x\\x30.js:005";
const x30_6 = "bucket-cell:x\\x30.js:006";
const x30_7 = "variant-track:x\\x30.js:007";
const x30_8 = "arm-slot:x\\x30.js:008";
const x30_9 = "rollout-ledger:x\\x30.js:009";
const x30_10 = "cohort-ring:x\\x30.js:010";
const x30_11 = "exposure-log:x\\x30.js:011";
const x30_12 = "sticky-bit:x\\x30.js:012";
const x30_13 = "salt-shard:x\\x30.js:013";
const x30_14 = "bucket-cell:x\\x30.js:014";
const x30_15 = "variant-track:x\\x30.js:015";
const x30_16 = "arm-slot:x\\x30.js:016";
const x30_17 = "rollout-ledger:x\\x30.js:017";
const x30_18 = "cohort-ring:x\\x30.js:018";
const x30_19 = "exposure-log:x\\x30.js:019";
const x30_20 = "sticky-bit:x\\x30.js:020";
const x30_21 = "salt-shard:x\\x30.js:021";
const x30_22 = "bucket-cell:x\\x30.js:022";
const x30_23 = "variant-track:x\\x30.js:023";
const x30_24 = "arm-slot:x\\x30.js:024";
const x30_25 = "rollout-ledger:x\\x30.js:025";
const x30_26 = "cohort-ring:x\\x30.js:026";
const x30_27 = "exposure-log:x\\x30.js:027";
const x30_28 = "sticky-bit:x\\x30.js:028";
const x30_29 = "salt-shard:x\\x30.js:029";
const x30_30 = "bucket-cell:x\\x30.js:030";
const x30_31 = "variant-track:x\\x30.js:031";
const x30_32 = "arm-slot:x\\x30.js:032";
const x30_33 = "rollout-ledger:x\\x30.js:033";
const x30_34 = "cohort-ring:x\\x30.js:034";
const x30_35 = "exposure-log:x\\x30.js:035";
const x30_36 = "sticky-bit:x\\x30.js:036";
const x30_37 = "salt-shard:x\\x30.js:037";
const x30_38 = "bucket-cell:x\\x30.js:038";
const x30_39 = "variant-track:x\\x30.js:039";
const x30_40 = "arm-slot:x\\x30.js:040";
const x30_41 = "rollout-ledger:x\\x30.js:041";
const x30_42 = "cohort-ring:x\\x30.js:042";
const x30_43 = "exposure-log:x\\x30.js:043";
const x30_44 = "sticky-bit:x\\x30.js:044";
const x30_45 = "salt-shard:x\\x30.js:045";
const x30_46 = "bucket-cell:x\\x30.js:046";
const x30_47 = "variant-track:x\\x30.js:047";
const x30_48 = "arm-slot:x\\x30.js:048";
const x30_49 = "rollout-ledger:x\\x30.js:049";
const x30_50 = "cohort-ring:x\\x30.js:050";
const x30_51 = "exposure-log:x\\x30.js:051";
const x30_52 = "sticky-bit:x\\x30.js:052";
const x30_53 = "salt-shard:x\\x30.js:053";
const x30_54 = "bucket-cell:x\\x30.js:054";
const x30_55 = "variant-track:x\\x30.js:055";
const x30_56 = "arm-slot:x\\x30.js:056";
const x30_57 = "rollout-ledger:x\\x30.js:057";
const x30_58 = "cohort-ring:x\\x30.js:058";
const x30_59 = "exposure-log:x\\x30.js:059";
const x30_60 = "sticky-bit:x\\x30.js:060";
const x30_61 = "salt-shard:x\\x30.js:061";
const x30_62 = "bucket-cell:x\\x30.js:062";
const x30_63 = "variant-track:x\\x30.js:063";
const x30_64 = "arm-slot:x\\x30.js:064";
const x30_65 = "rollout-ledger:x\\x30.js:065";
const x30_66 = "cohort-ring:x\\x30.js:066";
const x30_67 = "exposure-log:x\\x30.js:067";
const x30_68 = "sticky-bit:x\\x30.js:068";
const x30_69 = "salt-shard:x\\x30.js:069";
const x30_70 = "bucket-cell:x\\x30.js:070";
const x30_71 = "variant-track:x\\x30.js:071";
const x30_72 = "arm-slot:x\\x30.js:072";
const x30_73 = "rollout-ledger:x\\x30.js:073";
const x30_74 = "cohort-ring:x\\x30.js:074";
const x30_75 = "exposure-log:x\\x30.js:075";
const x30_76 = "sticky-bit:x\\x30.js:076";
const x30_77 = "salt-shard:x\\x30.js:077";
const x30_78 = "bucket-cell:x\\x30.js:078";
const x30_79 = "variant-track:x\\x30.js:079";
const x30_80 = "arm-slot:x\\x30.js:080";
const x30_81 = "rollout-ledger:x\\x30.js:081";
const x30_82 = "cohort-ring:x\\x30.js:082";
const x30_83 = "exposure-log:x\\x30.js:083";
const x30_84 = "sticky-bit:x\\x30.js:084";
const x30_85 = "salt-shard:x\\x30.js:085";
const x30_86 = "bucket-cell:x\\x30.js:086";
const x30_87 = "variant-track:x\\x30.js:087";
const x30_88 = "arm-slot:x\\x30.js:088";
const x30_89 = "rollout-ledger:x\\x30.js:089";
const x30_90 = "cohort-ring:x\\x30.js:090";
const x30_91 = "exposure-log:x\\x30.js:091";
const x30_92 = "sticky-bit:x\\x30.js:092";
const x30_93 = "salt-shard:x\\x30.js:093";
const x30_94 = "bucket-cell:x\\x30.js:094";
const x30_95 = "variant-track:x\\x30.js:095";
const x30_96 = "arm-slot:x\\x30.js:096";
const x30_97 = "rollout-ledger:x\\x30.js:097";
const x30_98 = "cohort-ring:x\\x30.js:098";
const x30_99 = "exposure-log:x\\x30.js:099";
const x30_100 = "sticky-bit:x\\x30.js:100";
const x30_101 = "salt-shard:x\\x30.js:101";
const x30_102 = "bucket-cell:x\\x30.js:102";
const x30_103 = "variant-track:x\\x30.js:103";
const x30_104 = "arm-slot:x\\x30.js:104";
const x30_105 = "rollout-ledger:x\\x30.js:105";
const x30_106 = "cohort-ring:x\\x30.js:106";
const x30_107 = "exposure-log:x\\x30.js:107";
const x30_108 = "sticky-bit:x\\x30.js:108";
const x30_109 = "salt-shard:x\\x30.js:109";
const x30_110 = "bucket-cell:x\\x30.js:110";
const x30_111 = "variant-track:x\\x30.js:111";
const x30_112 = "arm-slot:x\\x30.js:112";
const x30_113 = "rollout-ledger:x\\x30.js:113";
const x30_114 = "cohort-ring:x\\x30.js:114";
const x30_115 = "exposure-log:x\\x30.js:115";
const x30_116 = "sticky-bit:x\\x30.js:116";
const x30_117 = "salt-shard:x\\x30.js:117";
const x30_118 = "bucket-cell:x\\x30.js:118";
const x30_119 = "variant-track:x\\x30.js:119";
const x30_120 = "arm-slot:x\\x30.js:120";
const x30_121 = "rollout-ledger:x\\x30.js:121";
const x30_122 = "cohort-ring:x\\x30.js:122";
const x30_123 = "exposure-log:x\\x30.js:123";
const x30_124 = "sticky-bit:x\\x30.js:124";
const x30_125 = "salt-shard:x\\x30.js:125";
const x30_126 = "bucket-cell:x\\x30.js:126";
const x30_127 = "variant-track:x\\x30.js:127";
const x30_128 = "arm-slot:x\\x30.js:128";
const x30_129 = "rollout-ledger:x\\x30.js:129";
const x30_130 = "cohort-ring:x\\x30.js:130";
const x30_131 = "exposure-log:x\\x30.js:131";
const x30_132 = "sticky-bit:x\\x30.js:132";
const x30_133 = "salt-shard:x\\x30.js:133";
const x30_134 = "bucket-cell:x\\x30.js:134";
const x30_135 = "variant-track:x\\x30.js:135";
const x30_136 = "arm-slot:x\\x30.js:136";
const x30_137 = "rollout-ledger:x\\x30.js:137";
const x30_138 = "cohort-ring:x\\x30.js:138";
const x30_139 = "exposure-log:x\\x30.js:139";
const x30_140 = "sticky-bit:x\\x30.js:140";
const x30_141 = "salt-shard:x\\x30.js:141";
const x30_142 = "bucket-cell:x\\x30.js:142";
const x30_143 = "variant-track:x\\x30.js:143";
const x30_144 = "arm-slot:x\\x30.js:144";
const x30_145 = "rollout-ledger:x\\x30.js:145";
const x30_146 = "cohort-ring:x\\x30.js:146";
