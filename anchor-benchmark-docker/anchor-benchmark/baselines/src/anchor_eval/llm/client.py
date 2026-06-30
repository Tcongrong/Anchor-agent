"""Unified LLM client (plan v2 §2.9): single entry, token budget, archiving.

All LLM methods must go through this client; it records prompt + full response +
model/params/tokens to artifacts/prompts and artifacts/trajectories.

Two backbones are supported, selected automatically from the environment so the
same suite runs against either:

  * OpenAI-compatible (default when OPENAI_API_BASE / OPENAI_BASE_URL / SOPHNET_API_KEY
    is set) — e.g. SophNet `DeepSeek-V4-Pro`. Talks `/chat/completions`.
  * Anthropic (default when only ANTHROPIC_API_KEY is set) — Claude `/v1/messages`.

Set ANCHOR_LLM_PROVIDER=openai|anthropic to force one. Either way the response is
normalised to the internal Anthropic-style shape

    {"content": [ {"type":"text","text":..} | {"type":"tool_use","id","name","input"} ],
     "usage": {"input_tokens": int, "output_tokens": int}}

so the methods and the ReAct tool loop are provider-agnostic. Without a usable key
available() is False and methods degrade to not-run.
"""
from __future__ import annotations
import json, os, socket, time, urllib.error, urllib.request
from pathlib import Path

BASE = Path(__file__).resolve().parents[3]
PROMPTS = BASE / "artifacts" / "prompts"
TRAJ = BASE / "artifacts" / "trajectories"

# Friendly default for the SophNet OpenAI-compatible gateway; override with
# OPENAI_BASE_URL / OPENAI_API_BASE.
_DEFAULT_OPENAI_BASE = "https://www.sophnet.com/api/open-apis/v1"


def _detect_provider() -> str:
    p = (os.environ.get("ANCHOR_LLM_PROVIDER") or "").strip().lower()
    if p in ("openai", "anthropic"):
        return p
    if (os.environ.get("OPENAI_API_BASE") or os.environ.get("OPENAI_BASE_URL")
            or os.environ.get("SOPHNET_API_KEY") or os.environ.get("OPENAI_API_KEY")):
        return "openai"
    return "anthropic"


class LLMClient:
    def __init__(self, model=None, temperature=0, top_p=1, max_tokens=None):
        self.provider = _detect_provider()
        self.temperature = temperature
        self.top_p = top_p
        configured_max = max_tokens if max_tokens is not None else os.environ.get("ANCHOR_LLM_MAX_TOKENS")
        self.max_tokens = int(configured_max) if configured_max not in (None, "", "none", "None", "null", "0") else None
        if self.provider == "openai":
            self.api_key = os.environ.get("OPENAI_API_KEY") or os.environ.get("SOPHNET_API_KEY")
            self.base_url = (os.environ.get("OPENAI_BASE_URL") or os.environ.get("OPENAI_API_BASE")
                             or _DEFAULT_OPENAI_BASE).rstrip("/")
            self.model = model or os.environ.get("ANCHOR_LLM_MODEL", "DeepSeek-V4-Pro")
        else:
            self.api_key = os.environ.get("ANTHROPIC_API_KEY")
            self.base_url = "https://api.anthropic.com"
            self.model = model or os.environ.get("ANCHOR_LLM_MODEL") \
                or os.environ.get("ANCHOR_MODEL", "claude-opus-4-8")
        timeout = os.environ.get("ANCHOR_LLM_TIMEOUT_SEC")
        self.timeout = int(timeout) if timeout else None
        self.thinking = _thinking_config_from_env()

    def available(self) -> bool:
        return bool(self.api_key)

    # ---- public entry -----------------------------------------------------
    def call(self, method, task_id, messages, system=None, tools=None, budget=None, response_format=None):
        if not self.available():
            raise RuntimeError("no_api_key")
        if self.provider == "openai":
            resp = self._call_openai(messages, system, tools, response_format=response_format)
        else:
            resp = self._call_anthropic(messages, system, tools)
        usage = resp.get("usage", {})
        if budget is not None:
            budget.charge("llm_calls", 1, hard=False)
            budget.charge("llm_input_tokens", usage.get("input_tokens", 0), hard=False)
            budget.charge("llm_output_tokens", usage.get("output_tokens", 0), hard=False)
            budget.charge(
                "llm_total_tokens",
                usage.get("input_tokens", 0) + usage.get("output_tokens", 0),
                hard=True,
            )
        self._archive(method, task_id, messages, system, tools, resp, 0.0)
        return resp

    # ---- Anthropic backend ------------------------------------------------
    def _urlopen_json(self, req, *, retry=True):
        attempts = 2 if retry else 1
        last = None
        for i in range(attempts):
            try:
                with urllib.request.urlopen(req, timeout=self.timeout) as r:
                    return json.loads(r.read().decode())
            except urllib.error.HTTPError as e:
                last = e
                if e.code < 500 or i + 1 >= attempts:
                    raise
                time.sleep(2)
            except (TimeoutError, socket.timeout, urllib.error.URLError) as e:
                last = e
                if i + 1 >= attempts:
                    raise
                time.sleep(2)
        raise last

    def _call_anthropic(self, messages, system, tools):
        # Anthropic requires max_tokens; OpenAI-compatible providers do not.
        body = {"model": self.model, "max_tokens": self.max_tokens or 8192,
                "temperature": self.temperature, "top_p": self.top_p, "messages": messages}
        if system:
            body["system"] = system
        if tools:
            body["tools"] = tools
        req = urllib.request.Request(
            self.base_url + "/v1/messages",
            data=json.dumps(body).encode(),
            headers={"content-type": "application/json", "x-api-key": self.api_key,
                     "anthropic-version": "2023-06-01"})
        resp = self._urlopen_json(req)
        u = resp.get("usage", {})
        resp["usage"] = {"input_tokens": u.get("input_tokens", 0),
                         "output_tokens": u.get("output_tokens", 0)}
        return resp

    # ---- OpenAI-compatible backend (SophNet / DS4-Pro) --------------------
    def _call_openai(self, messages, system, tools, response_format=None):
        body = {"model": self.model,
                "temperature": self.temperature, "top_p": self.top_p,
                "messages": _to_openai_messages(system, messages)}
        if self.max_tokens is not None:
            body["max_tokens"] = self.max_tokens
        if response_format:
            body["response_format"] = response_format if isinstance(response_format, dict) else {"type": response_format}
        if tools:
            body["tools"] = _to_openai_tools(tools)
            body["tool_choice"] = "auto"
        if self.thinking is not None:
            body["thinking"] = self.thinking
        req = urllib.request.Request(
            self.base_url + "/chat/completions",
            data=json.dumps(body).encode(),
            headers={"content-type": "application/json",
                     "authorization": f"Bearer {self.api_key}"})
        try:
            j = self._urlopen_json(req)
        except urllib.error.HTTPError:
            if not response_format:
                raise
            body.pop("response_format", None)
            req = urllib.request.Request(
                self.base_url + "/chat/completions",
                data=json.dumps(body).encode(),
                headers={"content-type": "application/json",
                         "authorization": f"Bearer {self.api_key}"})
            j = self._urlopen_json(req)
        return _from_openai_response(j)

    # ---- archiving --------------------------------------------------------
    def _archive(self, method, task_id, messages, system, tools, resp, dt):
        (PROMPTS / method).mkdir(parents=True, exist_ok=True)
        (TRAJ / method).mkdir(parents=True, exist_ok=True)
        (PROMPTS / method / f"{task_id}.json").write_text(json.dumps(
            {"provider": self.provider, "model": self.model, "temperature": self.temperature,
             "top_p": self.top_p, "max_tokens": self.max_tokens, "system": system,
             "thinking": self.thinking, "messages": messages, "tools": tools,
             "ts": time.time()}, indent=1), encoding="utf-8")
        prev = []
        tp = TRAJ / method / f"{task_id}.json"
        if tp.exists():
            try:
                prev = json.loads(tp.read_text(encoding="utf-8-sig"))
            except Exception:
                prev = []
        prev.append({
            "request": {
                "provider": self.provider,
                "model": self.model,
                "temperature": self.temperature,
                "top_p": self.top_p,
                "max_tokens": self.max_tokens,
                "thinking": self.thinking,
                "system": system,
                "messages": messages,
                "tools": tools,
                "ts": time.time(),
            },
            "response": resp,
            "usage": resp.get("usage", {}),
        })
        tp.write_text(json.dumps(prev, indent=1), encoding="utf-8")


# --------------------------------------------------------------------------
# Anthropic <-> OpenAI translation. The internal/canonical format is the
# Anthropic block shape used throughout the methods + the ReAct tool loop.
# --------------------------------------------------------------------------
def _to_openai_tools(tools):
    return [{"type": "function",
             "function": {"name": t["name"], "description": t.get("description", ""),
                          "parameters": t.get("input_schema") or {"type": "object", "properties": {}}}}
            for t in tools]


def _thinking_config_from_env():
    value = (os.environ.get("ANCHOR_LLM_THINKING") or "").strip().lower()
    if not value:
        return None
    if value in ("disabled", "disable", "off", "false", "0", "no"):
        return {"type": "disabled"}
    if value in ("enabled", "enable", "on", "true", "1", "yes"):
        return {"type": "enabled"}
    try:
        return json.loads(os.environ["ANCHOR_LLM_THINKING"])
    except Exception as exc:
        raise ValueError(f"invalid ANCHOR_LLM_THINKING={os.environ['ANCHOR_LLM_THINKING']!r}") from exc


def _to_openai_messages(system, messages):
    out = []
    if system:
        out.append({"role": "system", "content": system})
    for m in messages:
        role, content = m.get("role"), m.get("content")
        if role == "assistant" and isinstance(content, list):
            text, tool_calls = [], []
            for b in content:
                if b.get("type") == "text":
                    text.append(b.get("text", ""))
                elif b.get("type") == "tool_use":
                    tool_calls.append({"id": b.get("id"), "type": "function",
                                       "function": {"name": b.get("name"),
                                                    "arguments": json.dumps(b.get("input") or {})}})
            msg = {"role": "assistant", "content": ("\n".join(text) or None)}
            if tool_calls:
                msg["tool_calls"] = tool_calls
            out.append(msg)
        elif role == "user" and isinstance(content, list):
            # list of tool_result blocks -> one OpenAI `tool` message each
            for b in content:
                if b.get("type") == "tool_result":
                    c = b.get("content")
                    out.append({"role": "tool", "tool_call_id": b.get("tool_use_id"),
                                "content": c if isinstance(c, str) else json.dumps(c)})
                else:  # plain text block in a user turn
                    out.append({"role": "user", "content": b.get("text", "")})
        else:
            out.append({"role": role, "content": content if isinstance(content, str) else json.dumps(content)})
    return out


def _from_openai_response(j):
    try:
        msg = j["choices"][0]["message"]
    except (KeyError, IndexError):
        raise RuntimeError("openai response missing choices: " + json.dumps(j)[:300])
    blocks = []
    if msg.get("content"):
        blocks.append({"type": "text", "text": msg["content"]})
    for tc in (msg.get("tool_calls") or []):
        fn = tc.get("function", {})
        try:
            inp = json.loads(fn.get("arguments") or "{}")
        except Exception:
            inp = {}
        blocks.append({"type": "tool_use", "id": tc.get("id"), "name": fn.get("name"), "input": inp})
    u = j.get("usage", {})
    return {"content": blocks,
            "usage": {"input_tokens": u.get("prompt_tokens", 0),
                      "output_tokens": u.get("completion_tokens", 0)},
            "stop_reason": j.get("choices", [{}])[0].get("finish_reason"),
            "raw_response": j}
