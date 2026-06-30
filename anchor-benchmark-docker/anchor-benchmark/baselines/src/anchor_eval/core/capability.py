"""Runtime capability guard for the active baseline suite.

Every runtime/debugger/instrumentation operation a method performs must be
authorised through a CapabilityGate built from the method's capability tier +
its per-method `forbidden` set. Each evidence-using method declares the ops it
will perform at the top of localize() via BaseLocalizer.require_ops(...); a tier
or forbidden-set that contradicts the method's actual behaviour raises
CapabilityViolation before any browser launch, rather than silently performing
the op. The capability-declaration audit table renders the same gate statically.

The gate is the machine-checkable capability matrix for baselines. Strategy
operation names are retained only as forbidden operations so baseline methods
can explicitly declare that they do not use them.
"""
from __future__ import annotations

# operation vocabulary (plan v5 §10.2)
OPS = [
    "read_static",            # read d, C statically (the floor; everyone may do this)
    "run_page",               # launch & drive the page
    "observe_output",         # console / DOM / network
    "instrument_values",      # source-level instrumentation reading full runtime values
    "set_breakpoint",
    "read_sync_stack",
    "read_async_stack",
    "read_vars",              # local / closure variables at a pause
    "info_gain_probe",        # strategy op; forbidden to active baselines
    "adaptive_breakpoint",    # strategy op; forbidden to active baselines
    "cross_round_async_graph",# strategy op; forbidden to active baselines
    "value_flow_stitch",      # strategy op; forbidden to active baselines
    "tc1_prior",              # strategy op; forbidden to active baselines
    "anchor_intermediate",    # reading intermediate products from another method
    "read_test_labels",       # hidden oracle / grader (never allowed for methods)
]

# Capabilities granted by each tier (before per-method `forbidden`). Higher tiers
# are supersets. `read_static` is the floor available to all methods.
TIER_ALLOW = {
    "static": {"read_static"},
    "exec_aware": {"read_static", "run_page", "observe_output"},
    "instrumented_exec": {"read_static", "run_page", "observe_output", "instrument_values"},
    "debugger": {"read_static", "run_page", "observe_output", "set_breakpoint",
                 "read_sync_stack", "read_async_stack", "read_vars"},
}

# Nobody may read the hidden oracle or another run's method intermediates.
ALWAYS_FORBIDDEN = {"read_test_labels", "anchor_intermediate"}

# Strategy op-set retained as an explicit forbidden set for baselines.
STRATEGY_OPS = {"info_gain_probe", "adaptive_breakpoint", "cross_round_async_graph",
                "value_flow_stitch", "tc1_prior"}


class CapabilityViolation(RuntimeError):
    pass


class CapabilityGate:
    def __init__(self, method: str, capability: str, forbidden: set | None = None):
        if capability not in TIER_ALLOW:
            raise ValueError(f"unknown capability tier {capability!r}")
        self.method = method
        self.capability = capability
        self.allowed = set(TIER_ALLOW[capability]) - ALWAYS_FORBIDDEN
        self.forbidden = set(forbidden or ()) | ALWAYS_FORBIDDEN

    def check(self, op: str):
        if op not in OPS:
            raise ValueError(f"unknown op {op!r}")
        if op in self.forbidden:
            raise CapabilityViolation(
                f"{self.method}: op {op!r} is forbidden for this method")
        if op not in self.allowed:
            raise CapabilityViolation(
                f"{self.method}: op {op!r} not allowed for tier {self.capability!r}")
        return True

    def allows(self, op: str) -> bool:
        try:
            return self.check(op)
        except CapabilityViolation:
            return False

    def declared_ops(self):
        """Ops this method is actually permitted to run (for the audit table)."""
        return sorted(self.allowed - self.forbidden)
