"""Method registry + auto-generated capability matrix (plan v5 §2-3).

Methods are organised by `family` (provenance) but the main result table is read
along the `capability` axis. Registration validates the full v5 metadata so a
self-styled heuristic can never silently claim a paper or a capability tier.
"""
from __future__ import annotations
from .interfaces import FAMILIES, CAPABILITIES, FIDELITIES

_REGISTRY = {}   # name -> class

# canonical ordering of families for the main result table (capability-sorted within)
FAMILY_ORDER = ["classical", "llm_localization", "code_agent", "matched_control", "diagnostic"]
CAPABILITY_ORDER = {c: i for i, c in enumerate(CAPABILITIES)}


def register_method(cls=None):
    def _reg(c):
        validate_method_metadata(c)
        _REGISTRY[c.name] = c
        return c
    return _reg(cls) if cls is not None else _reg


def get_methods(family: str | None = None):
    out = []
    for name in all_method_names():
        c = _REGISTRY[name]
        if family is None or c.family == family:
            out.append(c)
    return out


def get_method(name: str):
    return _REGISTRY[name]


def all_method_names():
    return sorted(_REGISTRY.keys(),
                  key=lambda n: (FAMILY_ORDER.index(_REGISTRY[n].family)
                                 if _REGISTRY[n].family in FAMILY_ORDER else 99,
                                 CAPABILITY_ORDER.get(_REGISTRY[n].capability, 99), n))


def validate_method_metadata(cls):
    for attr in ("name", "family", "paper_id", "capability", "fidelity",
                 "uses", "forbidden", "supervised"):
        if not hasattr(cls, attr):
            raise ValueError(f"method {cls!r} missing metadata {attr!r}")
    if cls.family not in FAMILIES:
        raise ValueError(f"{cls.name}: bad family {cls.family!r}")
    if cls.capability not in CAPABILITIES:
        raise ValueError(f"{cls.name}: bad capability {cls.capability!r}")
    if cls.fidelity not in FIDELITIES:
        raise ValueError(f"{cls.name}: bad fidelity {cls.fidelity!r}")
    for k in ("TC1", "TC2", "TC3", "loop"):
        if k not in cls.uses:
            raise ValueError(f"{cls.name}: uses missing {k!r}")
    # fidelity discipline: a method that claims a paper must not be a bare
    # diagnostic, and 'faithful_reimplementation' is reserved for methods that DO
    # cite a paper. No active baseline claims authors' original implementation.
    if cls.fidelity == "original":
        raise ValueError(f"{cls.name}: fidelity 'original' is not used in the active baseline suite")
    if cls.fidelity == "faithful_reimplementation" and not cls.paper_id:
        raise ValueError(f"{cls.name}: faithful_reimplementation requires a paper_id")


def method_capability_matrix():
    rows = []
    for name in all_method_names():
        c = _REGISTRY[name]
        rows.append({
            "method": c.name, "family": c.family, "paper": c.paper_id or "—",
            "capability": c.capability, "fidelity": c.fidelity,
            "TC1": c.uses["TC1"], "TC2": c.uses["TC2"], "TC3": c.uses["TC3"],
            "loop": c.uses["loop"], "supervised": c.supervised,
            "forbidden": sorted(c.forbidden),
        })
    return rows
