import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 12,
  salt: 's:0c:store',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2060',
  shift: 9,
  mask: 1161830882
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store12@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '5', y: '5', n: 1 },
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
const x12_0 = "arm-slot:x\\x12.js:000";
const x12_1 = "rollout-ledger:x\\x12.js:001";
const x12_2 = "cohort-ring:x\\x12.js:002";
const x12_3 = "exposure-log:x\\x12.js:003";
const x12_4 = "sticky-bit:x\\x12.js:004";
const x12_5 = "salt-shard:x\\x12.js:005";
const x12_6 = "bucket-cell:x\\x12.js:006";
const x12_7 = "variant-track:x\\x12.js:007";
const x12_8 = "arm-slot:x\\x12.js:008";
const x12_9 = "rollout-ledger:x\\x12.js:009";
const x12_10 = "cohort-ring:x\\x12.js:010";
const x12_11 = "exposure-log:x\\x12.js:011";
const x12_12 = "sticky-bit:x\\x12.js:012";
const x12_13 = "salt-shard:x\\x12.js:013";
const x12_14 = "bucket-cell:x\\x12.js:014";
const x12_15 = "variant-track:x\\x12.js:015";
const x12_16 = "arm-slot:x\\x12.js:016";
const x12_17 = "rollout-ledger:x\\x12.js:017";
const x12_18 = "cohort-ring:x\\x12.js:018";
const x12_19 = "exposure-log:x\\x12.js:019";
const x12_20 = "sticky-bit:x\\x12.js:020";
const x12_21 = "salt-shard:x\\x12.js:021";
const x12_22 = "bucket-cell:x\\x12.js:022";
const x12_23 = "variant-track:x\\x12.js:023";
const x12_24 = "arm-slot:x\\x12.js:024";
const x12_25 = "rollout-ledger:x\\x12.js:025";
const x12_26 = "cohort-ring:x\\x12.js:026";
const x12_27 = "exposure-log:x\\x12.js:027";
const x12_28 = "sticky-bit:x\\x12.js:028";
const x12_29 = "salt-shard:x\\x12.js:029";
const x12_30 = "bucket-cell:x\\x12.js:030";
const x12_31 = "variant-track:x\\x12.js:031";
const x12_32 = "arm-slot:x\\x12.js:032";
const x12_33 = "rollout-ledger:x\\x12.js:033";
const x12_34 = "cohort-ring:x\\x12.js:034";
const x12_35 = "exposure-log:x\\x12.js:035";
const x12_36 = "sticky-bit:x\\x12.js:036";
const x12_37 = "salt-shard:x\\x12.js:037";
const x12_38 = "bucket-cell:x\\x12.js:038";
const x12_39 = "variant-track:x\\x12.js:039";
const x12_40 = "arm-slot:x\\x12.js:040";
const x12_41 = "rollout-ledger:x\\x12.js:041";
const x12_42 = "cohort-ring:x\\x12.js:042";
const x12_43 = "exposure-log:x\\x12.js:043";
const x12_44 = "sticky-bit:x\\x12.js:044";
const x12_45 = "salt-shard:x\\x12.js:045";
const x12_46 = "bucket-cell:x\\x12.js:046";
const x12_47 = "variant-track:x\\x12.js:047";
const x12_48 = "arm-slot:x\\x12.js:048";
const x12_49 = "rollout-ledger:x\\x12.js:049";
const x12_50 = "cohort-ring:x\\x12.js:050";
const x12_51 = "exposure-log:x\\x12.js:051";
const x12_52 = "sticky-bit:x\\x12.js:052";
const x12_53 = "salt-shard:x\\x12.js:053";
const x12_54 = "bucket-cell:x\\x12.js:054";
const x12_55 = "variant-track:x\\x12.js:055";
const x12_56 = "arm-slot:x\\x12.js:056";
const x12_57 = "rollout-ledger:x\\x12.js:057";
const x12_58 = "cohort-ring:x\\x12.js:058";
const x12_59 = "exposure-log:x\\x12.js:059";
const x12_60 = "sticky-bit:x\\x12.js:060";
const x12_61 = "salt-shard:x\\x12.js:061";
const x12_62 = "bucket-cell:x\\x12.js:062";
const x12_63 = "variant-track:x\\x12.js:063";
const x12_64 = "arm-slot:x\\x12.js:064";
const x12_65 = "rollout-ledger:x\\x12.js:065";
const x12_66 = "cohort-ring:x\\x12.js:066";
const x12_67 = "exposure-log:x\\x12.js:067";
const x12_68 = "sticky-bit:x\\x12.js:068";
const x12_69 = "salt-shard:x\\x12.js:069";
const x12_70 = "bucket-cell:x\\x12.js:070";
const x12_71 = "variant-track:x\\x12.js:071";
const x12_72 = "arm-slot:x\\x12.js:072";
const x12_73 = "rollout-ledger:x\\x12.js:073";
const x12_74 = "cohort-ring:x\\x12.js:074";
const x12_75 = "exposure-log:x\\x12.js:075";
const x12_76 = "sticky-bit:x\\x12.js:076";
const x12_77 = "salt-shard:x\\x12.js:077";
const x12_78 = "bucket-cell:x\\x12.js:078";
const x12_79 = "variant-track:x\\x12.js:079";
const x12_80 = "arm-slot:x\\x12.js:080";
const x12_81 = "rollout-ledger:x\\x12.js:081";
const x12_82 = "cohort-ring:x\\x12.js:082";
const x12_83 = "exposure-log:x\\x12.js:083";
const x12_84 = "sticky-bit:x\\x12.js:084";
const x12_85 = "salt-shard:x\\x12.js:085";
const x12_86 = "bucket-cell:x\\x12.js:086";
const x12_87 = "variant-track:x\\x12.js:087";
const x12_88 = "arm-slot:x\\x12.js:088";
const x12_89 = "rollout-ledger:x\\x12.js:089";
const x12_90 = "cohort-ring:x\\x12.js:090";
const x12_91 = "exposure-log:x\\x12.js:091";
const x12_92 = "sticky-bit:x\\x12.js:092";
const x12_93 = "salt-shard:x\\x12.js:093";
const x12_94 = "bucket-cell:x\\x12.js:094";
const x12_95 = "variant-track:x\\x12.js:095";
const x12_96 = "arm-slot:x\\x12.js:096";
const x12_97 = "rollout-ledger:x\\x12.js:097";
const x12_98 = "cohort-ring:x\\x12.js:098";
const x12_99 = "exposure-log:x\\x12.js:099";
const x12_100 = "sticky-bit:x\\x12.js:100";
const x12_101 = "salt-shard:x\\x12.js:101";
const x12_102 = "bucket-cell:x\\x12.js:102";
const x12_103 = "variant-track:x\\x12.js:103";
const x12_104 = "arm-slot:x\\x12.js:104";
const x12_105 = "rollout-ledger:x\\x12.js:105";
const x12_106 = "cohort-ring:x\\x12.js:106";
const x12_107 = "exposure-log:x\\x12.js:107";
const x12_108 = "sticky-bit:x\\x12.js:108";
const x12_109 = "salt-shard:x\\x12.js:109";
const x12_110 = "bucket-cell:x\\x12.js:110";
const x12_111 = "variant-track:x\\x12.js:111";
const x12_112 = "arm-slot:x\\x12.js:112";
const x12_113 = "rollout-ledger:x\\x12.js:113";
const x12_114 = "cohort-ring:x\\x12.js:114";
const x12_115 = "exposure-log:x\\x12.js:115";
const x12_116 = "sticky-bit:x\\x12.js:116";
const x12_117 = "salt-shard:x\\x12.js:117";
const x12_118 = "bucket-cell:x\\x12.js:118";
const x12_119 = "variant-track:x\\x12.js:119";
const x12_120 = "arm-slot:x\\x12.js:120";
const x12_121 = "rollout-ledger:x\\x12.js:121";
const x12_122 = "cohort-ring:x\\x12.js:122";
const x12_123 = "exposure-log:x\\x12.js:123";
const x12_124 = "sticky-bit:x\\x12.js:124";
const x12_125 = "salt-shard:x\\x12.js:125";
const x12_126 = "bucket-cell:x\\x12.js:126";
const x12_127 = "variant-track:x\\x12.js:127";
const x12_128 = "arm-slot:x\\x12.js:128";
const x12_129 = "rollout-ledger:x\\x12.js:129";
const x12_130 = "cohort-ring:x\\x12.js:130";
const x12_131 = "exposure-log:x\\x12.js:131";
const x12_132 = "sticky-bit:x\\x12.js:132";
const x12_133 = "salt-shard:x\\x12.js:133";
const x12_134 = "bucket-cell:x\\x12.js:134";
const x12_135 = "variant-track:x\\x12.js:135";
const x12_136 = "arm-slot:x\\x12.js:136";
const x12_137 = "rollout-ledger:x\\x12.js:137";
const x12_138 = "cohort-ring:x\\x12.js:138";
const x12_139 = "exposure-log:x\\x12.js:139";
const x12_140 = "sticky-bit:x\\x12.js:140";
const x12_141 = "salt-shard:x\\x12.js:141";
const x12_142 = "bucket-cell:x\\x12.js:142";
const x12_143 = "variant-track:x\\x12.js:143";
const x12_144 = "arm-slot:x\\x12.js:144";
const x12_145 = "rollout-ledger:x\\x12.js:145";
const x12_146 = "cohort-ring:x\\x12.js:146";
