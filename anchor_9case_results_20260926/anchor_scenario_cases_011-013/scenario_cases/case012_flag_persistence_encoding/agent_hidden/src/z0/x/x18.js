import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 18,
  salt: 's:0i:store',
  order: [1, 2, 3, 4, 5, 6, 0],
  sep: '\u2062',
  shift: 8,
  mask: 4203543560
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store18@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '4', y: '4', n: 1 },
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
const x18_0 = "arm-slot:x\\x18.js:000";
const x18_1 = "rollout-ledger:x\\x18.js:001";
const x18_2 = "cohort-ring:x\\x18.js:002";
const x18_3 = "exposure-log:x\\x18.js:003";
const x18_4 = "sticky-bit:x\\x18.js:004";
const x18_5 = "salt-shard:x\\x18.js:005";
const x18_6 = "bucket-cell:x\\x18.js:006";
const x18_7 = "variant-track:x\\x18.js:007";
const x18_8 = "arm-slot:x\\x18.js:008";
const x18_9 = "rollout-ledger:x\\x18.js:009";
const x18_10 = "cohort-ring:x\\x18.js:010";
const x18_11 = "exposure-log:x\\x18.js:011";
const x18_12 = "sticky-bit:x\\x18.js:012";
const x18_13 = "salt-shard:x\\x18.js:013";
const x18_14 = "bucket-cell:x\\x18.js:014";
const x18_15 = "variant-track:x\\x18.js:015";
const x18_16 = "arm-slot:x\\x18.js:016";
const x18_17 = "rollout-ledger:x\\x18.js:017";
const x18_18 = "cohort-ring:x\\x18.js:018";
const x18_19 = "exposure-log:x\\x18.js:019";
const x18_20 = "sticky-bit:x\\x18.js:020";
const x18_21 = "salt-shard:x\\x18.js:021";
const x18_22 = "bucket-cell:x\\x18.js:022";
const x18_23 = "variant-track:x\\x18.js:023";
const x18_24 = "arm-slot:x\\x18.js:024";
const x18_25 = "rollout-ledger:x\\x18.js:025";
const x18_26 = "cohort-ring:x\\x18.js:026";
const x18_27 = "exposure-log:x\\x18.js:027";
const x18_28 = "sticky-bit:x\\x18.js:028";
const x18_29 = "salt-shard:x\\x18.js:029";
const x18_30 = "bucket-cell:x\\x18.js:030";
const x18_31 = "variant-track:x\\x18.js:031";
const x18_32 = "arm-slot:x\\x18.js:032";
const x18_33 = "rollout-ledger:x\\x18.js:033";
const x18_34 = "cohort-ring:x\\x18.js:034";
const x18_35 = "exposure-log:x\\x18.js:035";
const x18_36 = "sticky-bit:x\\x18.js:036";
const x18_37 = "salt-shard:x\\x18.js:037";
const x18_38 = "bucket-cell:x\\x18.js:038";
const x18_39 = "variant-track:x\\x18.js:039";
const x18_40 = "arm-slot:x\\x18.js:040";
const x18_41 = "rollout-ledger:x\\x18.js:041";
const x18_42 = "cohort-ring:x\\x18.js:042";
const x18_43 = "exposure-log:x\\x18.js:043";
const x18_44 = "sticky-bit:x\\x18.js:044";
const x18_45 = "salt-shard:x\\x18.js:045";
const x18_46 = "bucket-cell:x\\x18.js:046";
const x18_47 = "variant-track:x\\x18.js:047";
const x18_48 = "arm-slot:x\\x18.js:048";
const x18_49 = "rollout-ledger:x\\x18.js:049";
const x18_50 = "cohort-ring:x\\x18.js:050";
const x18_51 = "exposure-log:x\\x18.js:051";
const x18_52 = "sticky-bit:x\\x18.js:052";
const x18_53 = "salt-shard:x\\x18.js:053";
const x18_54 = "bucket-cell:x\\x18.js:054";
const x18_55 = "variant-track:x\\x18.js:055";
const x18_56 = "arm-slot:x\\x18.js:056";
const x18_57 = "rollout-ledger:x\\x18.js:057";
const x18_58 = "cohort-ring:x\\x18.js:058";
const x18_59 = "exposure-log:x\\x18.js:059";
const x18_60 = "sticky-bit:x\\x18.js:060";
const x18_61 = "salt-shard:x\\x18.js:061";
const x18_62 = "bucket-cell:x\\x18.js:062";
const x18_63 = "variant-track:x\\x18.js:063";
const x18_64 = "arm-slot:x\\x18.js:064";
const x18_65 = "rollout-ledger:x\\x18.js:065";
const x18_66 = "cohort-ring:x\\x18.js:066";
const x18_67 = "exposure-log:x\\x18.js:067";
const x18_68 = "sticky-bit:x\\x18.js:068";
const x18_69 = "salt-shard:x\\x18.js:069";
const x18_70 = "bucket-cell:x\\x18.js:070";
const x18_71 = "variant-track:x\\x18.js:071";
const x18_72 = "arm-slot:x\\x18.js:072";
const x18_73 = "rollout-ledger:x\\x18.js:073";
const x18_74 = "cohort-ring:x\\x18.js:074";
const x18_75 = "exposure-log:x\\x18.js:075";
const x18_76 = "sticky-bit:x\\x18.js:076";
const x18_77 = "salt-shard:x\\x18.js:077";
const x18_78 = "bucket-cell:x\\x18.js:078";
const x18_79 = "variant-track:x\\x18.js:079";
const x18_80 = "arm-slot:x\\x18.js:080";
const x18_81 = "rollout-ledger:x\\x18.js:081";
const x18_82 = "cohort-ring:x\\x18.js:082";
const x18_83 = "exposure-log:x\\x18.js:083";
const x18_84 = "sticky-bit:x\\x18.js:084";
const x18_85 = "salt-shard:x\\x18.js:085";
const x18_86 = "bucket-cell:x\\x18.js:086";
const x18_87 = "variant-track:x\\x18.js:087";
const x18_88 = "arm-slot:x\\x18.js:088";
const x18_89 = "rollout-ledger:x\\x18.js:089";
const x18_90 = "cohort-ring:x\\x18.js:090";
const x18_91 = "exposure-log:x\\x18.js:091";
const x18_92 = "sticky-bit:x\\x18.js:092";
const x18_93 = "salt-shard:x\\x18.js:093";
const x18_94 = "bucket-cell:x\\x18.js:094";
const x18_95 = "variant-track:x\\x18.js:095";
const x18_96 = "arm-slot:x\\x18.js:096";
const x18_97 = "rollout-ledger:x\\x18.js:097";
const x18_98 = "cohort-ring:x\\x18.js:098";
const x18_99 = "exposure-log:x\\x18.js:099";
const x18_100 = "sticky-bit:x\\x18.js:100";
const x18_101 = "salt-shard:x\\x18.js:101";
const x18_102 = "bucket-cell:x\\x18.js:102";
const x18_103 = "variant-track:x\\x18.js:103";
const x18_104 = "arm-slot:x\\x18.js:104";
const x18_105 = "rollout-ledger:x\\x18.js:105";
const x18_106 = "cohort-ring:x\\x18.js:106";
const x18_107 = "exposure-log:x\\x18.js:107";
const x18_108 = "sticky-bit:x\\x18.js:108";
const x18_109 = "salt-shard:x\\x18.js:109";
const x18_110 = "bucket-cell:x\\x18.js:110";
const x18_111 = "variant-track:x\\x18.js:111";
const x18_112 = "arm-slot:x\\x18.js:112";
const x18_113 = "rollout-ledger:x\\x18.js:113";
const x18_114 = "cohort-ring:x\\x18.js:114";
const x18_115 = "exposure-log:x\\x18.js:115";
const x18_116 = "sticky-bit:x\\x18.js:116";
const x18_117 = "salt-shard:x\\x18.js:117";
const x18_118 = "bucket-cell:x\\x18.js:118";
const x18_119 = "variant-track:x\\x18.js:119";
const x18_120 = "arm-slot:x\\x18.js:120";
const x18_121 = "rollout-ledger:x\\x18.js:121";
const x18_122 = "cohort-ring:x\\x18.js:122";
const x18_123 = "exposure-log:x\\x18.js:123";
const x18_124 = "sticky-bit:x\\x18.js:124";
const x18_125 = "salt-shard:x\\x18.js:125";
const x18_126 = "bucket-cell:x\\x18.js:126";
const x18_127 = "variant-track:x\\x18.js:127";
const x18_128 = "arm-slot:x\\x18.js:128";
const x18_129 = "rollout-ledger:x\\x18.js:129";
const x18_130 = "cohort-ring:x\\x18.js:130";
const x18_131 = "exposure-log:x\\x18.js:131";
const x18_132 = "sticky-bit:x\\x18.js:132";
const x18_133 = "salt-shard:x\\x18.js:133";
const x18_134 = "bucket-cell:x\\x18.js:134";
const x18_135 = "variant-track:x\\x18.js:135";
const x18_136 = "arm-slot:x\\x18.js:136";
const x18_137 = "rollout-ledger:x\\x18.js:137";
const x18_138 = "cohort-ring:x\\x18.js:138";
const x18_139 = "exposure-log:x\\x18.js:139";
const x18_140 = "sticky-bit:x\\x18.js:140";
const x18_141 = "salt-shard:x\\x18.js:141";
const x18_142 = "bucket-cell:x\\x18.js:142";
const x18_143 = "variant-track:x\\x18.js:143";
const x18_144 = "arm-slot:x\\x18.js:144";
const x18_145 = "rollout-ledger:x\\x18.js:145";
const x18_146 = "cohort-ring:x\\x18.js:146";
