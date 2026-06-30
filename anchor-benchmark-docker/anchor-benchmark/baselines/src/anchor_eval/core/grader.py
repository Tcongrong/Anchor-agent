"""Unified grader (plan v2 §2.3): the ONLY module that reads test oracle.

Maps a predicted complete function to its weighted oracle score S_d and role.
Keyed on body sha256 / normalized_sha256, with {file,start,end} offset fallback.
"""
from __future__ import annotations
from .schema import Function, OracleRole


class ScoreResult:
    __slots__ = ("score", "role", "strict_hit", "matched_by")

    def __init__(self, score, role, strict_hit, matched_by):
        self.score = score; self.role = role
        self.strict_hit = strict_hit; self.matched_by = matched_by


class Grader:
    def __init__(self, oracle: dict):
        self.roles = load_role_oracle(oracle)
        self.by_sha, self.by_nsha, self.by_off = {}, {}, {}
        for r in self.roles:
            rec = (r.score, r.role)
            if r.sha256:
                self.by_sha.setdefault(r.sha256, rec)
            if r.normalized_sha256:
                self.by_nsha.setdefault(r.normalized_sha256, rec)
            if r.start is not None:
                self.by_off[(r.file, r.start, r.end)] = rec
        a = oracle["primary_anchor"]["captured_span"]
        self.anchor_sha = a.get("sha256")
        self.anchor_nsha = a.get("normalized_sha256")
        self.anchor_off = (a.get("file"), a.get("start_offset"), a.get("end_offset"))

    def lookup_func(self, f: Function):
        """(score, role, is_anchor, matched_by) for a Function."""
        if f.body_sha256 in self.by_sha:
            sc, role = self.by_sha[f.body_sha256]; mb = "sha256"
        elif f.normalized_sha256 in self.by_nsha:
            sc, role = self.by_nsha[f.normalized_sha256]; mb = "normalized_sha256"
        elif (f.file, f.start, f.end) in self.by_off:
            sc, role = self.by_off[(f.file, f.start, f.end)]; mb = "offset"
        else:
            return 0.0, "Off-chain", False, "none"
        is_anchor = (f.body_sha256 == self.anchor_sha or f.normalized_sha256 == self.anchor_nsha
                     or (f.file, f.start, f.end) == self.anchor_off)
        return sc, role, is_anchor, mb

    def score_function(self, f: Function) -> ScoreResult:
        sc, role, is_a, mb = self.lookup_func(f)
        return ScoreResult(sc, role, 1 if is_a else 0, mb)

    def anchor_index(self, cs):
        for i, f in enumerate(cs.functions):
            if self.lookup_func(f)[2]:
                return i
        return -1

    def score_ranking(self, cs, ranking_ids, k_values=(1, 3, 5, 10)):
        """ranking_ids = ordered list of func_id. Returns a metric row dict."""
        by_id = cs.by_id()
        ai = self.anchor_index(cs)
        anchor_id = cs.functions[ai].func_id if ai >= 0 else None
        top = ranking_ids[0] if ranking_ids else None
        if top is None or top not in by_id:
            res = {"score": 0.0, "role": "None", "strict_hit": 0, "matched_by": "none"}
        else:
            sr = self.score_function(by_id[top])
            res = {"score": sr.score, "role": sr.role, "strict_hit": sr.strict_hit,
                   "matched_by": sr.matched_by}
        for k in k_values:
            res[f"recall@{k}"] = 1 if (anchor_id and anchor_id in ranking_ids[:k]) else 0
        return res


def load_role_oracle(oracle: dict):
    roles = []
    anchor_span = oracle["primary_anchor"]["captured_span"]
    akey = (anchor_span.get("file"), anchor_span.get("start_offset"), anchor_span.get("end_offset"))
    for r in oracle["role_oracle"]:
        cs = r.get("captured_span") or {}
        is_primary = (cs.get("file"), cs.get("start_offset"), cs.get("end_offset")) == akey
        roles.append(OracleRole(
            function=r.get("answer_function") or r.get("function") or "",
            role=r["role"], score=float(r["score"]),
            sha256=cs.get("sha256"), normalized_sha256=cs.get("normalized_sha256"),
            file=cs.get("file"), start=cs.get("start_offset"), end=cs.get("end_offset"),
            is_primary=is_primary,
        ))
    return roles
