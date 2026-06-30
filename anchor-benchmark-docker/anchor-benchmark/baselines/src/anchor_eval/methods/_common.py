"""Shared helpers for methods, operating on CandidateSet.functions (Function)."""
from __future__ import annotations
import re, math
from collections import defaultdict
from ..core.data import tokenize

# Behaviour-anchor definition handed to every LLM/agent method (Section III).
# Kept identical across methods so the only thing that varies is the capability
# surface and the search/reasoning strategy, never the task framing.
ANCHOR_DEF = (
    "The anchor is the first target-specific value-construction function on the "
    "dynamic behaviour chain: the earliest function (after routing and input "
    "preparation) whose own body constructs the target observable value, rather "
    "than collecting inputs, dispatching control, wrapping a result, or emitting it."
)

_STR_LIT = re.compile(r"'([^'\\]{2,})'|\"([^\"\\]{2,})\"")
_IDENT = re.compile(r"[A-Za-z_$][\w$]*")
_SEG = re.compile(r"[^A-Za-z0-9]+")


def doc_tokens(f):
    toks = list(tokenize(f.body))
    for m in _STR_LIT.finditer(f.body):
        toks.extend(tokenize(m.group(1) or m.group(2) or ""))
    return toks


def is_sink_func(f):
    low = f.body.lower()
    return (("console" in low and "log" in low) or "fetch(" in low or ".send(" in low
            or "sendbeacon" in low.replace(" ", "") or "xmlhttprequest" in low)


def build_call_graph(funcs):
    """name -> indices ; callers[i], callees[i] via identifier references (robust to obfuscation)."""
    name_to_idx = defaultdict(list)
    for i, f in enumerate(funcs):
        if f.name and f.name != "(anon)":
            name_to_idx[f.name].append(i)
    names = set(name_to_idx)
    callers, callees = defaultdict(set), defaultdict(set)
    for i, f in enumerate(funcs):
        refs = (set(_IDENT.findall(f.body)) & names)
        refs.discard(f.name)
        for nm in refs:
            for j in name_to_idx[nm]:
                if j != i:
                    callees[i].add(j); callers[j].add(i)
    return name_to_idx, callers, callees


def sink_distance(funcs, callers, sink_idx, max_hops=5):
    dist = {i: 0 for i in sink_idx}
    frontier = list(sink_idx)
    for h in range(1, max_hops + 1):
        nxt = []
        for i in frontier:
            for j in callers[i]:
                if j not in dist:
                    dist[j] = h; nxt.append(j)
        frontier = nxt
    return dist


def field_action(task):
    obs = task.observable or {}
    return obs.get("field"), obs.get("action")
