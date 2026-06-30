"""Unified data objects shared by every method (plan v2 §2.1).

A Prediction's score is NEVER filled by a method; only the grader writes
top1_score/top1_role/strict_hit. Methods only ever output complete functions
(a func_id that must belong to the task's CandidateSet).
"""
from __future__ import annotations
from dataclasses import dataclass, field, asdict
from typing import Any
import hashlib, json, re


def _sha(t: str) -> str:
    return hashlib.sha256(t.encode("utf-8")).hexdigest()


def _nsha(t: str) -> str:
    return hashlib.sha256(re.sub(r"\s+", " ", t).strip().encode("utf-8")).hexdigest()


@dataclass
class Function:
    func_id: str
    file: str
    start: int
    end: int
    name: str
    kind: str
    body: str
    body_sha256: str
    normalized_sha256: str

    @staticmethod
    def make(task_id: str, file: str, start: int, end: int, name: str, kind: str, body: str) -> "Function":
        nsha = _nsha(body)
        func_id = hashlib.sha256(f"{task_id}|{file}|{start}|{end}|{nsha}".encode()).hexdigest()[:16]
        return Function(func_id, file, start, end, name, kind, body, _sha(body), nsha)


@dataclass
class Task:
    task_id: str
    app_id: str
    category: str
    d: str
    observable: dict
    interaction: list
    env: dict
    oracle_ref: str
    page: str = ""


@dataclass
class CandidateSet:
    task_id: str
    functions: list  # list[Function]
    source_manifest_hash: str
    extractor_version: str

    def by_id(self):
        return {f.func_id: f for f in self.functions}

    def index_of(self, func_id: str):
        for i, f in enumerate(self.functions):
            if f.func_id == func_id:
                return i
        return -1


@dataclass
class Prediction:
    task_id: str
    method: str
    top1_func_id: str | None
    top1_score: float = 0.0
    top1_role: str = "Off-chain"
    strict_hit: int = 0
    ranking: list = field(default_factory=list)   # ordered list[func_id]
    budget_used: dict = field(default_factory=dict)
    artifacts: dict = field(default_factory=dict)
    status: str = "ok"                            # ok | budget_exceeded | error | not_run
    error: str | None = None
    # The method committed to no real top-1 answer (e.g. an agent that never
    # submitted, or a dynamic slice/differential that isolated nothing) and only
    # carries a lexical (BM25) ranking for recall@k completeness. The grader scores
    # the top-1 as an explicit miss so these methods are not floored at BM25.
    abstained: bool = False

    def to_json(self) -> dict:
        return asdict(self)


@dataclass
class Evidence:
    task_id: str
    mode: str                       # external | debugger | trace | slice | tc1 | ...
    candidate_manifest_hash: str
    runtime_manifest_hash: str
    payload: dict

    def to_json(self) -> dict:
        return asdict(self)


@dataclass
class OracleRole:
    function: str
    role: str
    score: float
    sha256: str | None
    normalized_sha256: str | None
    file: str | None
    start: int | None
    end: int | None
    is_primary: bool = False


def prediction_from_json(d: dict) -> Prediction:
    return Prediction(**d)
