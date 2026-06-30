"""LSI math shared by LSI-FL (§4.1.1) and SITIR (§4.1.2) — no registration.

Builds a term×function TF-IDF matrix A ≈ U_k Σ_k V_kᵀ (truncated SVD), folds the
behaviour description `d` into the same space (q̂ = Σ_k⁻¹ U_kᵀ q) and scores each
function by cosine(q̂, V_k[j]). The corpus and the query use the SAME tokenizer
(no hand-built keyword expansion), per §10.3.
"""
from __future__ import annotations
from collections import defaultdict
import numpy as np
from ...core.data import tokenize
from .._common import doc_tokens


def _tfidf_matrix(docs_tokens, drop_short_common=True):
    """docs_tokens: list[list[str]] (one per function). Returns (A, term_index, idf).

    A is a dense term×function L2-column-normalised TF-IDF matrix (functions are
    columns, matching the §10.3 orientation A ≈ U_k Σ_k V_kᵀ).
    """
    F = len(docs_tokens)
    df = defaultdict(int)
    for toks in docs_tokens:
        for t in set(toks):
            df[t] += 1
    # obfuscated 1-2 char tokens present in almost every function carry no signal;
    # IDF already downweights them, optionally drop them outright (declared option).
    terms = sorted(t for t, d in df.items()
                   if not (drop_short_common and len(t) <= 2 and d > 0.5 * F))
    tindex = {t: i for i, t in enumerate(terms)}
    T = len(terms)
    idf = np.zeros(T)
    for t, i in tindex.items():
        idf[i] = np.log((1.0 + F) / (1.0 + df[t])) + 1.0
    A = np.zeros((T, F))
    for j, toks in enumerate(docs_tokens):
        tf = defaultdict(int)
        for t in toks:
            if t in tindex:
                tf[t] += 1
        for t, c in tf.items():
            i = tindex[t]
            A[i, j] = (1.0 + np.log(c)) * idf[i]
        norm = np.linalg.norm(A[:, j])
        if norm > 0:
            A[:, j] /= norm
    return A, tindex, idf


def _truncated_svd(A, k):
    T, F = A.shape
    k = max(1, min(k, min(T, F) - 1)) if min(T, F) > 1 else 1
    try:
        # ARPACK (`scipy.sparse.linalg.svds`) can spend minutes trying to
        # converge on the large, dense-ish TF-IDF matrices produced by minified
        # bundles. scikit-learn is already a suite dependency, and its randomized
        # SVD is the standard scalable LSI approximation for this setting.
        from sklearn.decomposition import TruncatedSVD
        svd = TruncatedSVD(n_components=k, algorithm="randomized", n_iter=5,
                           random_state=0)
        doc_coords = svd.fit_transform(A.T)  # functions × k = V * s
        s = svd.singular_values_
        V = doc_coords / np.where(s > 1e-12, s, 1.0)
        Vt = V.T
        U = svd.components_.T             # terms × k
        return U, s, Vt
    except Exception:
        U, s, Vt = np.linalg.svd(A, full_matrices=False)
        return U[:, :k], s[:k], Vt[:k, :]


def lsi_scores(task, fc, dimensions=200, drop_short_common=True):
    """Return (scores per function index as np.ndarray, diagnostics dict)."""
    funcs = fc.functions
    docs = [doc_tokens(f) for f in funcs]
    A, tindex, idf = _tfidf_matrix(docs, drop_short_common)
    qtoks = list(tokenize(task.d))
    overlap = sum(1 for t in set(qtoks) if t in tindex)
    diag = {"query_terms": len(set(qtoks)),
            "query_corpus_overlap": round(overlap / max(len(set(qtoks)), 1), 3),
            "n_terms": len(tindex), "dimensions": dimensions}
    if A.shape[0] == 0 or A.shape[1] == 0 or not qtoks:
        return np.zeros(len(funcs)), diag
    U, s, Vt = _truncated_svd(A, dimensions)
    diag["dimensions"] = int(len(s))
    qtf = defaultdict(int)
    for t in qtoks:
        if t in tindex:
            qtf[t] += 1
    q = np.zeros(A.shape[0])
    for t, c in qtf.items():
        i = tindex[t]
        q[i] = (1.0 + np.log(c)) * idf[i]
    if np.linalg.norm(q) == 0:
        return np.zeros(len(funcs)), diag
    # fold-in: q̂ = Σ_k⁻¹ U_kᵀ q  (k-dim query coordinates)
    s_inv = np.where(s > 1e-12, 1.0 / s, 0.0)
    qhat = s_inv * (U.T @ q)
    qn = np.linalg.norm(qhat)
    if qn == 0:
        return np.zeros(len(funcs)), diag
    qhat /= qn
    V = Vt.T                              # functions × k  (function j rep = V[j])
    Vn = np.linalg.norm(V, axis=1)
    Vn[Vn == 0] = 1.0
    scores = (V @ qhat) / Vn
    return scores, diag
