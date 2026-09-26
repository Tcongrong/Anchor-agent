import { mountRolloutLedger } from './w00.js';
import { mountArmRegistry } from './w01.js';
import { mountCohortRing } from './w02.js';
import { mountScopeRegistry } from './w03.js';
import { mountStickyCatalog } from './w04.js';
import { mountBucketState } from './w05.js';
import { mountVaultQueue } from './w06.js';
import { mountRolloutModel } from './w07.js';
import { mountExposureQueue } from './w08.js';
import { mountSaltManager } from './w09.js';
import { mountVariantBundle } from './w10.js';
import { mountSlotSet } from './w11.js';
import { mountArmTree } from './w12.js';
import { mountPersistState } from './w13.js';
import { mountSaltCatalog } from './w14.js';
import { mountScopePane } from './w15.js';
import { mountVariantCache } from './w16.js';
import { mountRingMap } from './w17.js';
import { mountSlotMap } from './w18.js';
import { mountStageReporter } from './w19.js';

const mounts = [mountRolloutLedger, mountArmRegistry, mountCohortRing, mountScopeRegistry, mountStickyCatalog, mountBucketState, mountVaultQueue, mountRolloutModel, mountExposureQueue, mountSaltManager, mountVariantBundle, mountSlotSet, mountArmTree, mountPersistState, mountSaltCatalog, mountScopePane, mountVariantCache, mountRingMap, mountSlotMap, mountStageReporter];

export function mountVaultLikeVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
