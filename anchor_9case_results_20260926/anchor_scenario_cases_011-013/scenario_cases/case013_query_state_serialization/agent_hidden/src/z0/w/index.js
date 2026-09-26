import { mountFilterLedger } from './w00.js';
import { mountRegionRegistry } from './w01.js';
import { mountSortTree } from './w02.js';
import { mountPageCursor } from './w03.js';
import { mountArchiveVault } from './w04.js';
import { mountQueryShard } from './w05.js';
import { mountFacetIndex } from './w06.js';
import { mountGridModel } from './w07.js';
import { mountLedgerQueue } from './w08.js';
import { mountViewReporter } from './w09.js';
import { mountCachePane } from './w10.js';
import { mountSlotRing } from './w11.js';
import { mountCursorMap } from './w12.js';
import { mountFacetPane } from './w13.js';
import { mountSortCache } from './w14.js';
import { mountFilterTree } from './w15.js';
import { mountPageLedger } from './w16.js';
import { mountArchiveRing } from './w17.js';
import { mountShardSet } from './w18.js';
import { mountViewState } from './w19.js';

const mounts = [mountFilterLedger, mountRegionRegistry, mountSortTree, mountPageCursor, mountArchiveVault, mountQueryShard, mountFacetIndex, mountGridModel, mountLedgerQueue, mountViewReporter, mountCachePane, mountSlotRing, mountCursorMap, mountFacetPane, mountSortCache, mountFilterTree, mountPageLedger, mountArchiveRing, mountShardSet, mountViewState];

export function mountGridLikeVendor(target, state = {}) {
  const reports = [];
  for (let index = 0; index < mounts.length; index += 1) {
    const report = mounts[index](target, { ...state, vendorIndex: index });
    if (report && report.size != null) reports.push(report.size);
  }
  if (target && target.dataset) target.dataset.vendorMounted = String(reports.length);
  return reports;
}
const wi_0 = "query-shard:z0/w/index.js:000";
const wi_1 = "filter-lane:z0/w/index.js:001";
const wi_2 = "region-pin:z0/w/index.js:002";
const wi_3 = "sort-track:z0/w/index.js:003";
const wi_4 = "page-cursor:z0/w/index.js:004";
const wi_5 = "archive-bit:z0/w/index.js:005";
const wi_6 = "grid-slot:z0/w/index.js:006";
const wi_7 = "facet-mark:z0/w/index.js:007";
