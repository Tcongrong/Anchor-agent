"""Application-grouped cross-validation (plan v2 §2.8).

Supervised methods may only use application-grouped splits so a test app's
bundle/recipe never leaks into training. app_id = bundle theme (see data.app_id_of).
"""
from __future__ import annotations
from collections import defaultdict


def get_app_id(task) -> str:
    return task.app_id


def group_by_application(tasks):
    groups = defaultdict(list)
    for t in tasks:
        groups[get_app_id(t)].append(t.task_id)
    return dict(groups)


def leave_one_app_out(tasks):
    """Yield (test_app, train_task_ids, test_task_ids)."""
    groups = group_by_application(tasks)
    for app in sorted(groups):
        test_ids = set(groups[app])
        train_ids = [t.task_id for t in tasks if t.task_id not in test_ids]
        yield app, train_ids, sorted(test_ids)


def group_kfold_by_app(tasks, k=5, seed=0):
    """Deterministic k-fold over apps (each fold is a set of whole apps)."""
    import random
    apps = sorted(group_by_application(tasks).keys())
    rng = random.Random(seed)
    rng.shuffle(apps)
    folds = [[] for _ in range(k)]
    for i, a in enumerate(apps):
        folds[i % k].append(a)
    groups = group_by_application(tasks)
    for fi in range(k):
        test_apps = set(folds[fi])
        test_ids = sorted(tid for a in test_apps for tid in groups[a])
        train_ids = [t.task_id for t in tasks if t.app_id not in test_apps]
        yield fi, sorted(test_apps), train_ids, test_ids


def _attr(task, attr):
    return getattr(task, attr)


def leave_one_group_out(tasks, attr="app_id"):
    """Generic leave-one-group-out over any task attribute (app_id or category)."""
    from collections import defaultdict
    groups = defaultdict(list)
    for t in tasks:
        groups[_attr(t, attr)].append(t.task_id)
    for g in sorted(groups):
        test_ids = set(groups[g])
        train_ids = [t.task_id for t in tasks if t.task_id not in test_ids]
        yield g, train_ids, sorted(test_ids)


def joint_group_holdout(tasks):
    """Strictest: for each held-out CATEGORY (recipe), the training set also drops
    every task from any app that appears in the test set, so neither the bundle
    (app) nor the behaviour recipe (category) leaks into training."""
    from collections import defaultdict
    by_cat = defaultdict(list)
    for t in tasks:
        by_cat[t.category].append(t)
    for cat in sorted(by_cat):
        test = by_cat[cat]
        test_ids = {t.task_id for t in test}
        test_apps = {t.app_id for t in test}
        train_ids = [t.task_id for t in tasks
                     if t.category != cat and t.app_id not in test_apps]
        yield cat, train_ids, sorted(test_ids)


def is_supervised_exploratory(n_apps, pilot_sigma=None, pilot_discordant=None):
    """A supervised comparison with too few apps is exploratory, not confirmatory."""
    return n_apps < 8


def split_summary(tasks):
    groups = group_by_application(tasks)
    return {"n_apps": len(groups),
            "apps": {a: len(v) for a, v in sorted(groups.items())},
            "supervised_exploratory": is_supervised_exploratory(len(groups))}
