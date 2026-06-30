"""Run a single method end-to-end (plan v2 §9.1).

  python scripts/run_method.py <MethodName>
"""
import sys
from pathlib import Path
BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE / "src"))
sys.path.insert(0, str(BASE / "scripts"))

import run_panel as R
from anchor_eval.core import data
from anchor_eval.core.grader import Grader
from anchor_eval.core.registry import get_method
from anchor_eval.eval import metrics
import json


def main():
    if len(sys.argv) < 2:
        print("usage: run_method.py <MethodName>"); return
    name = sys.argv[1]
    cls = get_method(name)
    tasks, cands, files = data.load_tasks()
    graders = {t.task_id: Grader(data.load_oracle(data.CASES_DIR / t.task_id)) for t in tasks}
    if cls.name == "Uniform-Random":
        rows, brows = R.run_random(cls, tasks, cands, graders)
    elif cls.supervised:
        rows, brows = R.run_supervised(cls, tasks, cands, graders)
    else:
        rows, brows = R.run_training_free(cls, tasks, cands, graders)
    out = R.PRED / f"{cls.name}.jsonl"
    with out.open("w", encoding="utf-8") as f:
        for r in rows:
            f.write(json.dumps(r) + "\n")
    s = metrics.aggregate(rows)
    print(f"{name}: " + (f"mean_score={s['mean_score']:.3f} total={s['total_score']:.2f} "
          f"strict={s['strict_accuracy']:.3f} recall@5={s['recall@5']:.3f} n={s['n']}"
          if s.get("n") else "no scored rows"))
    print("wrote", out)


if __name__ == "__main__":
    main()
