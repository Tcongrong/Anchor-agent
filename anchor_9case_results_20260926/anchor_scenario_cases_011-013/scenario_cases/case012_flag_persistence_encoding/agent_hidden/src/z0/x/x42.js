import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 42,
  salt: 's:16:store',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2062',
  shift: 4,
  mask: 3485492384
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store42@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
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
const x42_0 = "arm-slot:x\\x42.js:000";
const x42_1 = "rollout-ledger:x\\x42.js:001";
const x42_2 = "cohort-ring:x\\x42.js:002";
const x42_3 = "exposure-log:x\\x42.js:003";
const x42_4 = "sticky-bit:x\\x42.js:004";
const x42_5 = "salt-shard:x\\x42.js:005";
const x42_6 = "bucket-cell:x\\x42.js:006";
const x42_7 = "variant-track:x\\x42.js:007";
const x42_8 = "arm-slot:x\\x42.js:008";
const x42_9 = "rollout-ledger:x\\x42.js:009";
const x42_10 = "cohort-ring:x\\x42.js:010";
const x42_11 = "exposure-log:x\\x42.js:011";
const x42_12 = "sticky-bit:x\\x42.js:012";
const x42_13 = "salt-shard:x\\x42.js:013";
const x42_14 = "bucket-cell:x\\x42.js:014";
const x42_15 = "variant-track:x\\x42.js:015";
const x42_16 = "arm-slot:x\\x42.js:016";
const x42_17 = "rollout-ledger:x\\x42.js:017";
const x42_18 = "cohort-ring:x\\x42.js:018";
const x42_19 = "exposure-log:x\\x42.js:019";
const x42_20 = "sticky-bit:x\\x42.js:020";
const x42_21 = "salt-shard:x\\x42.js:021";
const x42_22 = "bucket-cell:x\\x42.js:022";
const x42_23 = "variant-track:x\\x42.js:023";
const x42_24 = "arm-slot:x\\x42.js:024";
const x42_25 = "rollout-ledger:x\\x42.js:025";
const x42_26 = "cohort-ring:x\\x42.js:026";
const x42_27 = "exposure-log:x\\x42.js:027";
const x42_28 = "sticky-bit:x\\x42.js:028";
const x42_29 = "salt-shard:x\\x42.js:029";
const x42_30 = "bucket-cell:x\\x42.js:030";
const x42_31 = "variant-track:x\\x42.js:031";
const x42_32 = "arm-slot:x\\x42.js:032";
const x42_33 = "rollout-ledger:x\\x42.js:033";
const x42_34 = "cohort-ring:x\\x42.js:034";
const x42_35 = "exposure-log:x\\x42.js:035";
const x42_36 = "sticky-bit:x\\x42.js:036";
const x42_37 = "salt-shard:x\\x42.js:037";
const x42_38 = "bucket-cell:x\\x42.js:038";
const x42_39 = "variant-track:x\\x42.js:039";
const x42_40 = "arm-slot:x\\x42.js:040";
const x42_41 = "rollout-ledger:x\\x42.js:041";
const x42_42 = "cohort-ring:x\\x42.js:042";
const x42_43 = "exposure-log:x\\x42.js:043";
const x42_44 = "sticky-bit:x\\x42.js:044";
const x42_45 = "salt-shard:x\\x42.js:045";
const x42_46 = "bucket-cell:x\\x42.js:046";
const x42_47 = "variant-track:x\\x42.js:047";
const x42_48 = "arm-slot:x\\x42.js:048";
const x42_49 = "rollout-ledger:x\\x42.js:049";
const x42_50 = "cohort-ring:x\\x42.js:050";
const x42_51 = "exposure-log:x\\x42.js:051";
const x42_52 = "sticky-bit:x\\x42.js:052";
const x42_53 = "salt-shard:x\\x42.js:053";
const x42_54 = "bucket-cell:x\\x42.js:054";
const x42_55 = "variant-track:x\\x42.js:055";
const x42_56 = "arm-slot:x\\x42.js:056";
const x42_57 = "rollout-ledger:x\\x42.js:057";
const x42_58 = "cohort-ring:x\\x42.js:058";
const x42_59 = "exposure-log:x\\x42.js:059";
const x42_60 = "sticky-bit:x\\x42.js:060";
const x42_61 = "salt-shard:x\\x42.js:061";
const x42_62 = "bucket-cell:x\\x42.js:062";
const x42_63 = "variant-track:x\\x42.js:063";
const x42_64 = "arm-slot:x\\x42.js:064";
const x42_65 = "rollout-ledger:x\\x42.js:065";
const x42_66 = "cohort-ring:x\\x42.js:066";
const x42_67 = "exposure-log:x\\x42.js:067";
const x42_68 = "sticky-bit:x\\x42.js:068";
const x42_69 = "salt-shard:x\\x42.js:069";
const x42_70 = "bucket-cell:x\\x42.js:070";
const x42_71 = "variant-track:x\\x42.js:071";
const x42_72 = "arm-slot:x\\x42.js:072";
const x42_73 = "rollout-ledger:x\\x42.js:073";
const x42_74 = "cohort-ring:x\\x42.js:074";
const x42_75 = "exposure-log:x\\x42.js:075";
const x42_76 = "sticky-bit:x\\x42.js:076";
const x42_77 = "salt-shard:x\\x42.js:077";
const x42_78 = "bucket-cell:x\\x42.js:078";
const x42_79 = "variant-track:x\\x42.js:079";
const x42_80 = "arm-slot:x\\x42.js:080";
const x42_81 = "rollout-ledger:x\\x42.js:081";
const x42_82 = "cohort-ring:x\\x42.js:082";
const x42_83 = "exposure-log:x\\x42.js:083";
const x42_84 = "sticky-bit:x\\x42.js:084";
const x42_85 = "salt-shard:x\\x42.js:085";
const x42_86 = "bucket-cell:x\\x42.js:086";
const x42_87 = "variant-track:x\\x42.js:087";
const x42_88 = "arm-slot:x\\x42.js:088";
const x42_89 = "rollout-ledger:x\\x42.js:089";
const x42_90 = "cohort-ring:x\\x42.js:090";
const x42_91 = "exposure-log:x\\x42.js:091";
const x42_92 = "sticky-bit:x\\x42.js:092";
const x42_93 = "salt-shard:x\\x42.js:093";
const x42_94 = "bucket-cell:x\\x42.js:094";
const x42_95 = "variant-track:x\\x42.js:095";
const x42_96 = "arm-slot:x\\x42.js:096";
const x42_97 = "rollout-ledger:x\\x42.js:097";
const x42_98 = "cohort-ring:x\\x42.js:098";
const x42_99 = "exposure-log:x\\x42.js:099";
const x42_100 = "sticky-bit:x\\x42.js:100";
const x42_101 = "salt-shard:x\\x42.js:101";
const x42_102 = "bucket-cell:x\\x42.js:102";
const x42_103 = "variant-track:x\\x42.js:103";
const x42_104 = "arm-slot:x\\x42.js:104";
const x42_105 = "rollout-ledger:x\\x42.js:105";
const x42_106 = "cohort-ring:x\\x42.js:106";
const x42_107 = "exposure-log:x\\x42.js:107";
const x42_108 = "sticky-bit:x\\x42.js:108";
const x42_109 = "salt-shard:x\\x42.js:109";
const x42_110 = "bucket-cell:x\\x42.js:110";
const x42_111 = "variant-track:x\\x42.js:111";
const x42_112 = "arm-slot:x\\x42.js:112";
const x42_113 = "rollout-ledger:x\\x42.js:113";
const x42_114 = "cohort-ring:x\\x42.js:114";
const x42_115 = "exposure-log:x\\x42.js:115";
const x42_116 = "sticky-bit:x\\x42.js:116";
const x42_117 = "salt-shard:x\\x42.js:117";
const x42_118 = "bucket-cell:x\\x42.js:118";
const x42_119 = "variant-track:x\\x42.js:119";
const x42_120 = "arm-slot:x\\x42.js:120";
const x42_121 = "rollout-ledger:x\\x42.js:121";
const x42_122 = "cohort-ring:x\\x42.js:122";
const x42_123 = "exposure-log:x\\x42.js:123";
const x42_124 = "sticky-bit:x\\x42.js:124";
const x42_125 = "salt-shard:x\\x42.js:125";
const x42_126 = "bucket-cell:x\\x42.js:126";
const x42_127 = "variant-track:x\\x42.js:127";
const x42_128 = "arm-slot:x\\x42.js:128";
const x42_129 = "rollout-ledger:x\\x42.js:129";
const x42_130 = "cohort-ring:x\\x42.js:130";
const x42_131 = "exposure-log:x\\x42.js:131";
const x42_132 = "sticky-bit:x\\x42.js:132";
const x42_133 = "salt-shard:x\\x42.js:133";
const x42_134 = "bucket-cell:x\\x42.js:134";
const x42_135 = "variant-track:x\\x42.js:135";
const x42_136 = "arm-slot:x\\x42.js:136";
const x42_137 = "rollout-ledger:x\\x42.js:137";
const x42_138 = "cohort-ring:x\\x42.js:138";
const x42_139 = "exposure-log:x\\x42.js:139";
const x42_140 = "sticky-bit:x\\x42.js:140";
const x42_141 = "salt-shard:x\\x42.js:141";
const x42_142 = "bucket-cell:x\\x42.js:142";
const x42_143 = "variant-track:x\\x42.js:143";
const x42_144 = "arm-slot:x\\x42.js:144";
const x42_145 = "rollout-ledger:x\\x42.js:145";
const x42_146 = "cohort-ring:x\\x42.js:146";
