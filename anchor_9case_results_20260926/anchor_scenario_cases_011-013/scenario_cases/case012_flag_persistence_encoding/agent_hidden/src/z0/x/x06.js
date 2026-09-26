import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 6,
  salt: 's:06:store',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2062',
  shift: 10,
  mask: 2415085500
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store6@rollout.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '6', y: '6', n: 1 },
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
const x06_0 = "arm-slot:x\\x06.js:000";
const x06_1 = "rollout-ledger:x\\x06.js:001";
const x06_2 = "cohort-ring:x\\x06.js:002";
const x06_3 = "exposure-log:x\\x06.js:003";
const x06_4 = "sticky-bit:x\\x06.js:004";
const x06_5 = "salt-shard:x\\x06.js:005";
const x06_6 = "bucket-cell:x\\x06.js:006";
const x06_7 = "variant-track:x\\x06.js:007";
const x06_8 = "arm-slot:x\\x06.js:008";
const x06_9 = "rollout-ledger:x\\x06.js:009";
const x06_10 = "cohort-ring:x\\x06.js:010";
const x06_11 = "exposure-log:x\\x06.js:011";
const x06_12 = "sticky-bit:x\\x06.js:012";
const x06_13 = "salt-shard:x\\x06.js:013";
const x06_14 = "bucket-cell:x\\x06.js:014";
const x06_15 = "variant-track:x\\x06.js:015";
const x06_16 = "arm-slot:x\\x06.js:016";
const x06_17 = "rollout-ledger:x\\x06.js:017";
const x06_18 = "cohort-ring:x\\x06.js:018";
const x06_19 = "exposure-log:x\\x06.js:019";
const x06_20 = "sticky-bit:x\\x06.js:020";
const x06_21 = "salt-shard:x\\x06.js:021";
const x06_22 = "bucket-cell:x\\x06.js:022";
const x06_23 = "variant-track:x\\x06.js:023";
const x06_24 = "arm-slot:x\\x06.js:024";
const x06_25 = "rollout-ledger:x\\x06.js:025";
const x06_26 = "cohort-ring:x\\x06.js:026";
const x06_27 = "exposure-log:x\\x06.js:027";
const x06_28 = "sticky-bit:x\\x06.js:028";
const x06_29 = "salt-shard:x\\x06.js:029";
const x06_30 = "bucket-cell:x\\x06.js:030";
const x06_31 = "variant-track:x\\x06.js:031";
const x06_32 = "arm-slot:x\\x06.js:032";
const x06_33 = "rollout-ledger:x\\x06.js:033";
const x06_34 = "cohort-ring:x\\x06.js:034";
const x06_35 = "exposure-log:x\\x06.js:035";
const x06_36 = "sticky-bit:x\\x06.js:036";
const x06_37 = "salt-shard:x\\x06.js:037";
const x06_38 = "bucket-cell:x\\x06.js:038";
const x06_39 = "variant-track:x\\x06.js:039";
const x06_40 = "arm-slot:x\\x06.js:040";
const x06_41 = "rollout-ledger:x\\x06.js:041";
const x06_42 = "cohort-ring:x\\x06.js:042";
const x06_43 = "exposure-log:x\\x06.js:043";
const x06_44 = "sticky-bit:x\\x06.js:044";
const x06_45 = "salt-shard:x\\x06.js:045";
const x06_46 = "bucket-cell:x\\x06.js:046";
const x06_47 = "variant-track:x\\x06.js:047";
const x06_48 = "arm-slot:x\\x06.js:048";
const x06_49 = "rollout-ledger:x\\x06.js:049";
const x06_50 = "cohort-ring:x\\x06.js:050";
const x06_51 = "exposure-log:x\\x06.js:051";
const x06_52 = "sticky-bit:x\\x06.js:052";
const x06_53 = "salt-shard:x\\x06.js:053";
const x06_54 = "bucket-cell:x\\x06.js:054";
const x06_55 = "variant-track:x\\x06.js:055";
const x06_56 = "arm-slot:x\\x06.js:056";
const x06_57 = "rollout-ledger:x\\x06.js:057";
const x06_58 = "cohort-ring:x\\x06.js:058";
const x06_59 = "exposure-log:x\\x06.js:059";
const x06_60 = "sticky-bit:x\\x06.js:060";
const x06_61 = "salt-shard:x\\x06.js:061";
const x06_62 = "bucket-cell:x\\x06.js:062";
const x06_63 = "variant-track:x\\x06.js:063";
const x06_64 = "arm-slot:x\\x06.js:064";
const x06_65 = "rollout-ledger:x\\x06.js:065";
const x06_66 = "cohort-ring:x\\x06.js:066";
const x06_67 = "exposure-log:x\\x06.js:067";
const x06_68 = "sticky-bit:x\\x06.js:068";
const x06_69 = "salt-shard:x\\x06.js:069";
const x06_70 = "bucket-cell:x\\x06.js:070";
const x06_71 = "variant-track:x\\x06.js:071";
const x06_72 = "arm-slot:x\\x06.js:072";
const x06_73 = "rollout-ledger:x\\x06.js:073";
const x06_74 = "cohort-ring:x\\x06.js:074";
const x06_75 = "exposure-log:x\\x06.js:075";
const x06_76 = "sticky-bit:x\\x06.js:076";
const x06_77 = "salt-shard:x\\x06.js:077";
const x06_78 = "bucket-cell:x\\x06.js:078";
const x06_79 = "variant-track:x\\x06.js:079";
const x06_80 = "arm-slot:x\\x06.js:080";
const x06_81 = "rollout-ledger:x\\x06.js:081";
const x06_82 = "cohort-ring:x\\x06.js:082";
const x06_83 = "exposure-log:x\\x06.js:083";
const x06_84 = "sticky-bit:x\\x06.js:084";
const x06_85 = "salt-shard:x\\x06.js:085";
const x06_86 = "bucket-cell:x\\x06.js:086";
const x06_87 = "variant-track:x\\x06.js:087";
const x06_88 = "arm-slot:x\\x06.js:088";
const x06_89 = "rollout-ledger:x\\x06.js:089";
const x06_90 = "cohort-ring:x\\x06.js:090";
const x06_91 = "exposure-log:x\\x06.js:091";
const x06_92 = "sticky-bit:x\\x06.js:092";
const x06_93 = "salt-shard:x\\x06.js:093";
const x06_94 = "bucket-cell:x\\x06.js:094";
const x06_95 = "variant-track:x\\x06.js:095";
const x06_96 = "arm-slot:x\\x06.js:096";
const x06_97 = "rollout-ledger:x\\x06.js:097";
const x06_98 = "cohort-ring:x\\x06.js:098";
const x06_99 = "exposure-log:x\\x06.js:099";
const x06_100 = "sticky-bit:x\\x06.js:100";
const x06_101 = "salt-shard:x\\x06.js:101";
const x06_102 = "bucket-cell:x\\x06.js:102";
const x06_103 = "variant-track:x\\x06.js:103";
const x06_104 = "arm-slot:x\\x06.js:104";
const x06_105 = "rollout-ledger:x\\x06.js:105";
const x06_106 = "cohort-ring:x\\x06.js:106";
const x06_107 = "exposure-log:x\\x06.js:107";
const x06_108 = "sticky-bit:x\\x06.js:108";
const x06_109 = "salt-shard:x\\x06.js:109";
const x06_110 = "bucket-cell:x\\x06.js:110";
const x06_111 = "variant-track:x\\x06.js:111";
const x06_112 = "arm-slot:x\\x06.js:112";
const x06_113 = "rollout-ledger:x\\x06.js:113";
const x06_114 = "cohort-ring:x\\x06.js:114";
const x06_115 = "exposure-log:x\\x06.js:115";
const x06_116 = "sticky-bit:x\\x06.js:116";
const x06_117 = "salt-shard:x\\x06.js:117";
const x06_118 = "bucket-cell:x\\x06.js:118";
const x06_119 = "variant-track:x\\x06.js:119";
const x06_120 = "arm-slot:x\\x06.js:120";
const x06_121 = "rollout-ledger:x\\x06.js:121";
const x06_122 = "cohort-ring:x\\x06.js:122";
const x06_123 = "exposure-log:x\\x06.js:123";
const x06_124 = "sticky-bit:x\\x06.js:124";
const x06_125 = "salt-shard:x\\x06.js:125";
const x06_126 = "bucket-cell:x\\x06.js:126";
const x06_127 = "variant-track:x\\x06.js:127";
const x06_128 = "arm-slot:x\\x06.js:128";
const x06_129 = "rollout-ledger:x\\x06.js:129";
const x06_130 = "cohort-ring:x\\x06.js:130";
const x06_131 = "exposure-log:x\\x06.js:131";
const x06_132 = "sticky-bit:x\\x06.js:132";
const x06_133 = "salt-shard:x\\x06.js:133";
const x06_134 = "bucket-cell:x\\x06.js:134";
const x06_135 = "variant-track:x\\x06.js:135";
const x06_136 = "arm-slot:x\\x06.js:136";
const x06_137 = "rollout-ledger:x\\x06.js:137";
const x06_138 = "cohort-ring:x\\x06.js:138";
const x06_139 = "exposure-log:x\\x06.js:139";
const x06_140 = "sticky-bit:x\\x06.js:140";
const x06_141 = "salt-shard:x\\x06.js:141";
const x06_142 = "bucket-cell:x\\x06.js:142";
const x06_143 = "variant-track:x\\x06.js:143";
const x06_144 = "arm-slot:x\\x06.js:144";
const x06_145 = "rollout-ledger:x\\x06.js:145";
const x06_146 = "cohort-ring:x\\x06.js:146";
