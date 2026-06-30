"""Import every active method module to populate the registry.

Importing this module registers all v5 methods. Key/framework-gated methods
(LLM localization, agents, Debugger-Agent) register fine without a backbone
— they only degrade to `not_run` at localize() time.
"""
from . import diagnostics, classical  # noqa: F401

# diagnostics
from .diagnostics import uniform_random, simple_sink, bm25_static, uniform_tracer, exec_llm  # noqa
# classical
from .classical import lsi_feature_location, sitir, software_reconnaissance, js_dynslice  # noqa
# llm localization
from .llm_localization import direct_llm, agentless_localization_adapter  # noqa
# code agents
from .agents import swe_agent_adapter, locagent_js_adapter  # noqa
# matched control
from .matched_control import debugger_agent  # noqa
