"""Shared ReAct/CodeAct tool loop for the static code agents (plan v5 §8 protocol).

A minimal, faithful agent driver: the backbone freely plans, selects tools and
iterates over observation→action until it calls `submit` or a budget is hit. The
agents keep their own native tool surface + search strategy (so the action count
is not forced); only token / step / wall-clock budgets are unified here. The loop
maintains a running best-guess so a budget-exhausted agent still returns an answer.
"""
from __future__ import annotations
import json


def resolve_answer_to_func(fc, answer):
    """Map an agent's submitted {file,start_offset[,end_offset]} to a candidate func_id."""
    if not answer:
        return None
    file = answer.get("file")
    start = answer.get("start_offset", answer.get("start"))
    end = answer.get("end_offset", answer.get("end"))
    # exact span first, then start match, then enclosing function
    for f in fc.functions:
        if f.file == file and f.start == start and (end is None or f.end == end):
            return f.func_id
    for f in fc.functions:
        if f.file == file and f.start == start:
            return f.func_id
    if start is not None:
        enclosing = [f for f in fc.functions if f.file == file and f.start <= start <= f.end]
        if enclosing:
            return min(enclosing, key=lambda f: f.end - f.start).func_id
    return None


def run_tool_loop(client, method, task_id, system, user, tools, dispatch, budget,
                  max_steps=50, max_total_tokens=750000, initial_best_guess=None):
    """Drive the agent. dispatch(name, input)->dict. Returns (answer, steps, best_guess)."""
    messages = [{"role": "user", "content": user}]
    answer, best_guess, steps = None, initial_best_guess, []
    best_guess_score = -1 if initial_best_guess is not None else float("-inf")
    search_steps = max(0, max_steps - 1)
    for _ in range(search_steps):
        used = budget.used.get("llm_input_tokens", 0) + budget.used.get("llm_output_tokens", 0)
        if used >= max_total_tokens:
            break
        try:
            resp = client.call(method, task_id, messages, system=system, tools=tools, budget=budget)
        except Exception as e:
            if best_guess is None:
                raise
            answer = best_guess
            steps.append({"tool": "submit", "input": best_guess, "adapter_forced": True,
                          "reason": "llm_exception", "error": str(e)[:160]})
            break
        budget.charge("tool_steps", 1, hard=False)
        content = resp.get("content", [])
        messages.append({"role": "assistant", "content": content})
        tool_uses = [b for b in content if b.get("type") == "tool_use"]
        if not tool_uses:
            break
        results = []
        for tu in tool_uses:
            steps.append({"tool": tu.get("name"), "input": tu.get("input")})
            if tu.get("name") == "submit":
                submitted = tu.get("input") or {}
                if submitted.get("file") is not None:
                    answer = submitted
                    best_guess = best_guess or answer
                elif best_guess is not None:
                    answer = best_guess
                    steps.append({"tool": "submit", "input": best_guess, "adapter_forced": True,
                                  "reason": "empty_submit"})
                results.append({"type": "tool_result", "tool_use_id": tu["id"], "content": "ok"})
                continue
            try:
                out = dispatch(tu.get("name"), tu.get("input") or {})
            except Exception as e:
                out = {"error": str(e)[:160]}
            if isinstance(out, dict) and out.get("_best_guess"):
                score = out.get("_best_guess_score", 0)
                if score >= best_guess_score:
                    best_guess = out["_best_guess"]
                    best_guess_score = score
            results.append({"type": "tool_result", "tool_use_id": tu["id"],
                            "content": json.dumps(out)[:6000]})
        if answer is not None:
            break
        messages.append({"role": "user", "content": results})
    if answer is None and best_guess is not None and budget.used.get("tool_steps", 0) < max_steps:
        final_user = (
            "This is the final allowed step. You must call submit now and may not use any other tool. "
            "Submit exactly this single complete function unless you have a strictly better final candidate. "
            f"Current best candidate location: {json.dumps(best_guess)}"
        )
        try:
            resp = client.call(method, task_id, messages + [{"role": "user", "content": final_user}],
                               system=system, tools=[t for t in tools if t.get("name") == "submit"], budget=budget)
        except Exception as e:
            answer = best_guess
            steps.append({"tool": "submit", "input": best_guess, "adapter_forced": True,
                          "reason": "final_step_llm_exception", "error": str(e)[:160]})
            return answer, steps, best_guess
        budget.charge("tool_steps", 1, hard=False)
        content = resp.get("content", [])
        for tu in [b for b in content if b.get("type") == "tool_use"]:
            steps.append({"tool": tu.get("name"), "input": tu.get("input"), "final_submit": True})
            if tu.get("name") == "submit":
                submitted = tu.get("input") or {}
                if submitted.get("file") is not None:
                    answer = submitted
                elif best_guess is not None:
                    answer = best_guess
                    steps.append({"tool": "submit", "input": best_guess, "adapter_forced": True,
                                  "reason": "empty_final_submit"})
                break
            try:
                out = dispatch(tu.get("name"), tu.get("input") or {})
            except Exception as e:
                out = {"error": str(e)[:160]}
            if isinstance(out, dict) and out.get("_best_guess"):
                score = out.get("_best_guess_score", 0)
                if score >= best_guess_score:
                    best_guess = out["_best_guess"]
                    best_guess_score = score
        if answer is None:
            answer = best_guess
            steps.append({"tool": "submit", "input": best_guess, "adapter_forced": True,
                          "reason": "final_step_no_submit"})
    return answer, steps, best_guess
