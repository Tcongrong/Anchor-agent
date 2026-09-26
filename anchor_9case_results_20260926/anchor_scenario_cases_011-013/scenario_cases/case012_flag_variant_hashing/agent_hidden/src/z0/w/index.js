import { mountArmStore } from './w00.js';
import { mountRolloutLedger } from './w01.js';
import { mountCohortRing } from './w02.js';
import { mountExposureLog } from './w03.js';
import { mountBucketCatalog } from './w04.js';
import { mountStickyBoard } from './w05.js';
import { mountSaltQueue } from './w06.js';
import { mountGateBarModel } from './w07.js';
import { mountVariantQueue } from './w08.js';
import { mountSplitManager } from './w09.js';
import { mountTrafficBundle } from './w10.js';
import { mountArmFieldSet } from './w11.js';
import { mountOutlineLedger } from './w12.js';
import { mountScrollBoard } from './w13.js';
import { mountAssetLedger } from './w14.js';
import { mountPaneBoard } from './w15.js';
import { mountLabelLedger } from './w16.js';
import { mountLayerBoard } from './w17.js';
import { mountCommandMap } from './w18.js';
import { mountProgressLedger } from './w19.js';

const mounts = [mountArmStore, mountRolloutLedger, mountCohortRing, mountExposureLog, mountBucketCatalog, mountStickyBoard, mountSaltQueue, mountGateBarModel, mountVariantQueue, mountSplitManager, mountTrafficBundle, mountArmFieldSet, mountOutlineLedger, mountScrollBoard, mountAssetLedger, mountPaneBoard, mountLabelLedger, mountLayerBoard, mountCommandMap, mountProgressLedger];

export function mountFlagDeckVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
