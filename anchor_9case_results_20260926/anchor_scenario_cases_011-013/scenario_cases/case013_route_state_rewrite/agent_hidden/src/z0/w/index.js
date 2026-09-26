import { mountRouteEventBus } from './w00.js';
import { mountBreadcrumbStore } from './w01.js';
import { mountPolicyLedger } from './w02.js';
import { mountScrollLedger } from './w03.js';
import { mountTrailCatalog } from './w04.js';
import { mountCompassFilter } from './w05.js';
import { mountWaypointQueue } from './w06.js';
import { mountDeskbarModel } from './w07.js';
import { mountBadgeQueue } from './w08.js';
import { mountVeilManager } from './w09.js';
import { mountLocaleBundle } from './w10.js';
import { mountBindingSet } from './w11.js';
import { mountOutlineTree } from './w12.js';
import { mountPaneState } from './w13.js';
import { mountAssetVault } from './w14.js';
import { mountPropPane } from './w15.js';
import { mountLabelCache } from './w16.js';
import { mountLayerMap } from './w17.js';
import { mountKeyMap } from './w18.js';
import { mountTallyReporter } from './w19.js';

const mounts = [mountRouteEventBus, mountBreadcrumbStore, mountPolicyLedger, mountScrollLedger, mountTrailCatalog, mountCompassFilter, mountWaypointQueue, mountDeskbarModel, mountBadgeQueue, mountVeilManager, mountLocaleBundle, mountBindingSet, mountOutlineTree, mountPaneState, mountAssetVault, mountPropPane, mountLabelCache, mountLayerMap, mountKeyMap, mountTallyReporter];

export function mountRouteLikeVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
