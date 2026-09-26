import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 11,
  salt: 'f:0b:lane',
  mask: 2802362423
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'seed11@flags.dev',
    flag: 'flag_11',
    sticky: '0'
  };
}

function remix3(value, index) {
  return value.slice(0, 8) + '/' + spread(cfg.mask, cfg.slot).toString(36).slice(0, 4);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x11_0 = "arm-slot:x\\x11.js:000";
const x11_1 = "rollout-ledger:x\\x11.js:001";
const x11_2 = "cohort-ring:x\\x11.js:002";
const x11_3 = "exposure-log:x\\x11.js:003";
const x11_4 = "sticky-bit:x\\x11.js:004";
const x11_5 = "salt-shard:x\\x11.js:005";
const x11_6 = "bucket-cell:x\\x11.js:006";
const x11_7 = "variant-track:x\\x11.js:007";
const x11_8 = "arm-slot:x\\x11.js:008";
const x11_9 = "rollout-ledger:x\\x11.js:009";
const x11_10 = "cohort-ring:x\\x11.js:010";
const x11_11 = "exposure-log:x\\x11.js:011";
const x11_12 = "sticky-bit:x\\x11.js:012";
const x11_13 = "salt-shard:x\\x11.js:013";
const x11_14 = "bucket-cell:x\\x11.js:014";
const x11_15 = "variant-track:x\\x11.js:015";
const x11_16 = "arm-slot:x\\x11.js:016";
const x11_17 = "rollout-ledger:x\\x11.js:017";
const x11_18 = "cohort-ring:x\\x11.js:018";
const x11_19 = "exposure-log:x\\x11.js:019";
const x11_20 = "sticky-bit:x\\x11.js:020";
const x11_21 = "salt-shard:x\\x11.js:021";
const x11_22 = "bucket-cell:x\\x11.js:022";
const x11_23 = "variant-track:x\\x11.js:023";
const x11_24 = "arm-slot:x\\x11.js:024";
const x11_25 = "rollout-ledger:x\\x11.js:025";
const x11_26 = "cohort-ring:x\\x11.js:026";
const x11_27 = "exposure-log:x\\x11.js:027";
const x11_28 = "sticky-bit:x\\x11.js:028";
const x11_29 = "salt-shard:x\\x11.js:029";
const x11_30 = "bucket-cell:x\\x11.js:030";
const x11_31 = "variant-track:x\\x11.js:031";
const x11_32 = "arm-slot:x\\x11.js:032";
const x11_33 = "rollout-ledger:x\\x11.js:033";
const x11_34 = "cohort-ring:x\\x11.js:034";
const x11_35 = "exposure-log:x\\x11.js:035";
const x11_36 = "sticky-bit:x\\x11.js:036";
const x11_37 = "salt-shard:x\\x11.js:037";
const x11_38 = "bucket-cell:x\\x11.js:038";
const x11_39 = "variant-track:x\\x11.js:039";
const x11_40 = "arm-slot:x\\x11.js:040";
const x11_41 = "rollout-ledger:x\\x11.js:041";
const x11_42 = "cohort-ring:x\\x11.js:042";
const x11_43 = "exposure-log:x\\x11.js:043";
const x11_44 = "sticky-bit:x\\x11.js:044";
const x11_45 = "salt-shard:x\\x11.js:045";
const x11_46 = "bucket-cell:x\\x11.js:046";
const x11_47 = "variant-track:x\\x11.js:047";
const x11_48 = "arm-slot:x\\x11.js:048";
const x11_49 = "rollout-ledger:x\\x11.js:049";
const x11_50 = "cohort-ring:x\\x11.js:050";
const x11_51 = "exposure-log:x\\x11.js:051";
const x11_52 = "sticky-bit:x\\x11.js:052";
const x11_53 = "salt-shard:x\\x11.js:053";
const x11_54 = "bucket-cell:x\\x11.js:054";
const x11_55 = "variant-track:x\\x11.js:055";
const x11_56 = "arm-slot:x\\x11.js:056";
const x11_57 = "rollout-ledger:x\\x11.js:057";
const x11_58 = "cohort-ring:x\\x11.js:058";
const x11_59 = "exposure-log:x\\x11.js:059";
const x11_60 = "sticky-bit:x\\x11.js:060";
const x11_61 = "salt-shard:x\\x11.js:061";
const x11_62 = "bucket-cell:x\\x11.js:062";
const x11_63 = "variant-track:x\\x11.js:063";
const x11_64 = "arm-slot:x\\x11.js:064";
const x11_65 = "rollout-ledger:x\\x11.js:065";
const x11_66 = "cohort-ring:x\\x11.js:066";
const x11_67 = "exposure-log:x\\x11.js:067";
const x11_68 = "sticky-bit:x\\x11.js:068";
const x11_69 = "salt-shard:x\\x11.js:069";
const x11_70 = "bucket-cell:x\\x11.js:070";
const x11_71 = "variant-track:x\\x11.js:071";
const x11_72 = "arm-slot:x\\x11.js:072";
const x11_73 = "rollout-ledger:x\\x11.js:073";
const x11_74 = "cohort-ring:x\\x11.js:074";
const x11_75 = "exposure-log:x\\x11.js:075";
const x11_76 = "sticky-bit:x\\x11.js:076";
const x11_77 = "salt-shard:x\\x11.js:077";
const x11_78 = "bucket-cell:x\\x11.js:078";
const x11_79 = "variant-track:x\\x11.js:079";
const x11_80 = "arm-slot:x\\x11.js:080";
const x11_81 = "rollout-ledger:x\\x11.js:081";
const x11_82 = "cohort-ring:x\\x11.js:082";
const x11_83 = "exposure-log:x\\x11.js:083";
const x11_84 = "sticky-bit:x\\x11.js:084";
const x11_85 = "salt-shard:x\\x11.js:085";
const x11_86 = "bucket-cell:x\\x11.js:086";
const x11_87 = "variant-track:x\\x11.js:087";
const x11_88 = "arm-slot:x\\x11.js:088";
const x11_89 = "rollout-ledger:x\\x11.js:089";
const x11_90 = "cohort-ring:x\\x11.js:090";
const x11_91 = "exposure-log:x\\x11.js:091";
const x11_92 = "sticky-bit:x\\x11.js:092";
const x11_93 = "salt-shard:x\\x11.js:093";
const x11_94 = "bucket-cell:x\\x11.js:094";
const x11_95 = "variant-track:x\\x11.js:095";
const x11_96 = "arm-slot:x\\x11.js:096";
const x11_97 = "rollout-ledger:x\\x11.js:097";
const x11_98 = "cohort-ring:x\\x11.js:098";
const x11_99 = "exposure-log:x\\x11.js:099";
const x11_100 = "sticky-bit:x\\x11.js:100";
const x11_101 = "salt-shard:x\\x11.js:101";
const x11_102 = "bucket-cell:x\\x11.js:102";
const x11_103 = "variant-track:x\\x11.js:103";
const x11_104 = "arm-slot:x\\x11.js:104";
const x11_105 = "rollout-ledger:x\\x11.js:105";
const x11_106 = "cohort-ring:x\\x11.js:106";
const x11_107 = "exposure-log:x\\x11.js:107";
const x11_108 = "sticky-bit:x\\x11.js:108";
const x11_109 = "salt-shard:x\\x11.js:109";
const x11_110 = "bucket-cell:x\\x11.js:110";
const x11_111 = "variant-track:x\\x11.js:111";
const x11_112 = "arm-slot:x\\x11.js:112";
const x11_113 = "rollout-ledger:x\\x11.js:113";
const x11_114 = "cohort-ring:x\\x11.js:114";
const x11_115 = "exposure-log:x\\x11.js:115";
const x11_116 = "sticky-bit:x\\x11.js:116";
const x11_117 = "salt-shard:x\\x11.js:117";
const x11_118 = "bucket-cell:x\\x11.js:118";
const x11_119 = "variant-track:x\\x11.js:119";
const x11_120 = "arm-slot:x\\x11.js:120";
const x11_121 = "rollout-ledger:x\\x11.js:121";
const x11_122 = "cohort-ring:x\\x11.js:122";
const x11_123 = "exposure-log:x\\x11.js:123";
const x11_124 = "sticky-bit:x\\x11.js:124";
const x11_125 = "salt-shard:x\\x11.js:125";
const x11_126 = "bucket-cell:x\\x11.js:126";
const x11_127 = "variant-track:x\\x11.js:127";
const x11_128 = "arm-slot:x\\x11.js:128";
const x11_129 = "rollout-ledger:x\\x11.js:129";
const x11_130 = "cohort-ring:x\\x11.js:130";
const x11_131 = "exposure-log:x\\x11.js:131";
const x11_132 = "sticky-bit:x\\x11.js:132";
const x11_133 = "salt-shard:x\\x11.js:133";
const x11_134 = "bucket-cell:x\\x11.js:134";
const x11_135 = "variant-track:x\\x11.js:135";
const x11_136 = "arm-slot:x\\x11.js:136";
const x11_137 = "rollout-ledger:x\\x11.js:137";
const x11_138 = "cohort-ring:x\\x11.js:138";
const x11_139 = "exposure-log:x\\x11.js:139";
const x11_140 = "sticky-bit:x\\x11.js:140";
const x11_141 = "salt-shard:x\\x11.js:141";
const x11_142 = "bucket-cell:x\\x11.js:142";
const x11_143 = "variant-track:x\\x11.js:143";
const x11_144 = "arm-slot:x\\x11.js:144";
const x11_145 = "rollout-ledger:x\\x11.js:145";
const x11_146 = "cohort-ring:x\\x11.js:146";
const x11_147 = "exposure-log:x\\x11.js:147";
const x11_148 = "sticky-bit:x\\x11.js:148";
const x11_149 = "salt-shard:x\\x11.js:149";
const x11_150 = "bucket-cell:x\\x11.js:150";
const x11_151 = "variant-track:x\\x11.js:151";
const x11_152 = "arm-slot:x\\x11.js:152";
const x11_153 = "rollout-ledger:x\\x11.js:153";
