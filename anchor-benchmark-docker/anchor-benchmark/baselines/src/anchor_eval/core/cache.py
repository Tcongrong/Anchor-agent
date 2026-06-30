"""Hash-keyed cache (plan v2 §2.2): rebuild when any input hash changes."""
from __future__ import annotations
import hashlib, json
from pathlib import Path


def file_hash(p: Path) -> str:
    h = hashlib.sha256()
    h.update(p.read_bytes())
    return h.hexdigest()


def dir_js_hash(root: Path) -> str:
    h = hashlib.sha256()
    for f in sorted(root.rglob("*.js")):
        if not f.is_file():
            continue
        h.update(f.name.encode())
        h.update(f.read_bytes())
    return h.hexdigest()


def cache_get(path: Path, expected_keys: dict):
    if not path.exists():
        return None
    try:
        blob = json.loads(path.read_text(encoding="utf-8-sig"))
    except Exception:
        return None
    if blob.get("_keys") != expected_keys:
        return None
    return blob.get("data")


def cache_put(path: Path, expected_keys: dict, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps({"_keys": expected_keys, "data": data}), encoding="utf-8")
