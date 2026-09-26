import { mountMetricEventBus } from './w00.js';
import { mountCohortStore } from './w01.js';
import { mountStreamModel } from './w02.js';
import { mountSignalRegistry } from './w03.js';
import { mountChartCatalog } from './w04.js';
import { mountFilterState } from './w05.js';
import { mountPulseQueue } from './w06.js';
import { mountToolbarModel } from './w07.js';
import { mountThumbQueue } from './w08.js';
import { mountOverlayManager } from './w09.js';
import { mountLocaleBundle } from './w10.js';
import { mountFieldSet } from './w11.js';
import { mountOutlineTree } from './w12.js';
import { mountScrollState } from './w13.js';
import { mountAssetCatalog } from './w14.js';
import { mountPropPane } from './w15.js';
import { mountLabelCache } from './w16.js';
import { mountLayerMap } from './w17.js';
import { mountKeyMap } from './w18.js';
import { mountProgressReporter } from './w19.js';

const mounts = [mountMetricEventBus, mountCohortStore, mountStreamModel, mountSignalRegistry, mountChartCatalog, mountFilterState, mountPulseQueue, mountToolbarModel, mountThumbQueue, mountOverlayManager, mountLocaleBundle, mountFieldSet, mountOutlineTree, mountScrollState, mountAssetCatalog, mountPropPane, mountLabelCache, mountLayerMap, mountKeyMap, mountProgressReporter];

export function mountGridLikeVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
