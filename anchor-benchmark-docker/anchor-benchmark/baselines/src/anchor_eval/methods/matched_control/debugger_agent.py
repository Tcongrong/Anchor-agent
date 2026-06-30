"""Debugger-Agent — ReAct/CodeAct baseline over the CDP debugger surface.

It has generic CDP tools: breakpoints, sync/async stacks, local/closure vars,
interaction trigger, and console/DOM/network observation. Built on the standard
ReAct [R1] + CodeAct [R2] agent paradigm over that tool surface.

The wrapper exports budget knobs to node/agent_debugger.mjs via env and records
the configuration in the trajectory artifact.

capability = debugger; fidelity = task_adapted. Requires a backbone key; else not-run.
"""
from __future__ import annotations
import json, os, subprocess
from pathlib import Path
from ...core.interfaces import BaseLocalizer
from ...core.registry import register_method
from ...core.schema import Prediction
from ...core.data import CASES_DIR
from ...core.capability import STRATEGY_OPS
from ...runtime.collect import chrome_executable
from ..diagnostics.bm25_static import bm25_ranking
from ..agents._agent_loop import resolve_answer_to_func

BASE = Path(__file__).resolve().parents[4]
AGENT = str(BASE / "node" / "agent_debugger.mjs")
TRAJ = BASE / "artifacts" / "trajectories" / "Debugger-Agent"

# Default debugger-agent budget.
MATCHED_BUDGET = {"max_steps": 20, "bp_per_round": 6, "bp_total": 24,
                  "max_tokens": 750000, "wall_sec": 600}


@register_method
class DebuggerAgent(BaseLocalizer):
    name = "Debugger-Agent"
    family = "matched_control"
    paper_id = "R1+R2"         # ReAct (Yao'23) + CodeAct (Wang'24) over the CDP surface
    capability = "debugger"
    fidelity = "task_adapted"
    uses = {"TC1": False, "TC2": False, "TC3": False, "loop": False}
    forbidden = set(STRATEGY_OPS)
    supervised = False
    budget_config = dict(MATCHED_BUDGET)

    def localize(self, task, fc, budget) -> Prediction:
        if not (os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("OPENAI_API_KEY")
                or os.environ.get("SOPHNET_API_KEY")):
            return Prediction(task.task_id, self.name, None, status="not_run", error="no_api_key")
        self.require_ops("run_page", "observe_output", "set_breakpoint",
                         "read_sync_stack", "read_async_stack", "read_vars")
        env = dict(os.environ)
        ch = chrome_executable()
        if ch and not env.get("PW_CHROME"):
            env["PW_CHROME"] = ch
        env.update({"DBG_MAX_STEPS": str(self.budget_config["max_steps"]),
                    "DBG_BP_PER_ROUND": str(self.budget_config["bp_per_round"]),
                    "DBG_BP_TOTAL": str(self.budget_config["bp_total"]),
                    "DBG_MAX_TOKENS": str(self.budget_config["max_tokens"]),
                    "DBG_WALL_SEC": str(self.budget_config["wall_sec"])})
        try:
            r = subprocess.run(["node", AGENT, str(CASES_DIR / task.task_id)],
                               capture_output=True, text=True, encoding="utf-8", env=env,
                               timeout=self.budget_config["wall_sec"] + 60)
            ans = json.loads(r.stdout) if r.stdout.strip() else {"ok": False, "reason": (r.stderr or "no stdout")[:200]}
            TRAJ.mkdir(parents=True, exist_ok=True)
            (TRAJ / f"{task.task_id}.json").write_text(json.dumps({
                "answer": ans, "stderr": r.stderr[-4000:], "returncode": r.returncode,
                "budget_config": self.budget_config,
            }, indent=1), encoding="utf-8")
        except Exception as e:
            return Prediction(task.task_id, self.name, None, status="error", error=str(e)[:160])
        if ans.get("reason") == "no_api_key":
            return Prediction(task.task_id, self.name, None, status="not_run", error="no_api_key")
        budget.charge("tool_steps", len(ans.get("steps", [])), hard=False)
        budget.charge("distinct_breakpoints", ans.get("bp_total", 0), hard=False)
        budget.charge("page_triggers", sum(1 for s in ans.get("steps", []) if s.get("tool") == "trigger"), hard=False)
        in_tokens = int(ans.get("in_tokens", 0) or 0)
        out_tokens = int(ans.get("out_tokens", 0) or 0)
        transcript = ans.get("transcript", [])
        llm_calls = len(transcript) if isinstance(transcript, list) else int(bool(in_tokens or out_tokens))
        budget.charge("llm_calls", llm_calls, hard=False)
        budget.charge("llm_input_tokens", in_tokens, hard=False)
        budget.charge("llm_output_tokens", out_tokens, hard=False)
        budget.charge("llm_total_tokens", in_tokens + out_tokens, hard=False)
        bm = bm25_ranking(task, fc)
        top = resolve_answer_to_func(fc, ans.get("answer")) or resolve_answer_to_func(fc, ans.get("best_guess"))
        if top is None and ans.get("error"):
            return Prediction(task.task_id, self.name, bm[0] if bm else None, ranking=bm,
                              status="ok", error="debugger_agent_failed: " + str(ans.get("error"))[:120],
                              budget_used=budget.finalize(),
                              artifacts={"fallback": "bm25_after_debugger_agent_failure",
                                         "agent_steps": len(ans.get("steps", [])),
                                         "submitted": False,
                                         "breakpoints": ans.get("bp_total", 0),
                                         "budget_config": self.budget_config})
        ranking = ([top] if top else []) + [fid for fid in bm if fid != top]
        # no resolvable submission: keep the BM25 tail for recall@k but abstain on the
        # top-1 so the agent is scored as a miss, not credited with BM25's pick.
        status = "ok" if top else "budget_exceeded"
        return Prediction(task.task_id, self.name, ranking[0] if ranking else None,
                          ranking=ranking, status=status, budget_used=budget.finalize(),
                          abstained=not top,
                          artifacts={"agent_steps": len(ans.get("steps", [])),
                                     "submitted": bool(ans.get("answer")),
                                     "forced_submit": bool(ans.get("forced_submit")),
                                     "breakpoints": ans.get("bp_total", 0),
                                     "budget_config": self.budget_config})
