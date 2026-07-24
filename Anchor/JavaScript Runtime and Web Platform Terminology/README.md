# Measurement Protocol for Quantifying Runtime Semantic Explosion

## Subjects

We conducted the measurement on **14** production-grade Web applications selected from our real-world benchmark suite. Each subject contains one target behavior with an externally observable sink, including login authentication, request signing, encrypted parameter generation, and local state encoding. For each subject, we defined one scripted user-level interaction that triggers the target behavior exactly once. Table 1 lists all subjects.

**Table 1: Production websites used in preliminary measurement.**

| ID | Domain | Target Behavior |
|----|--------|-----------------|
| S1 | tzxm.jxzwfww.gov.cn | request signing |
| S2 | yngwypt.zmnyjk.com | password encryption |
| S3 | d.weidian.com | request transformation |
| S4 | iquicker.com.cn | login signing |
| S5 | 37.com | login signing |
| S6 | passport.fang.com | password signing |
| S7 | web.ewt360.com | login signing |
| S8 | fuwu.nhsa.gov.cn | encrypted payload generation |
| S9 | learn.open.com.cn | request signing |
| S10 | dict.cnki.net | request transformation |
| S11 | appmiu.com | local state encoding |
| S12 | max.pedata.cn | request signing |
| S13 | u.caixin.com | login signing |
| S14 | passport.yhd.com | login signing |

## Function Invocation Counting

For each subject, we instrumented all executable user-space JavaScript functions, including named functions, anonymous closures, arrow functions, and dynamically generated functions, while excluding browser-native APIs and engine-level built-ins.

During one interaction, every function entry emits one runtime probe event. Let $E=\{e_1,\dots,e_n\}$ denote the ordered sequence of observed function-entry events. We count invocation events rather than distinct functions, meaning repeated calls to the same function are counted multiple times. The total number of invocation events is therefore $N_{\mathrm{inv}}=|E|$.

Across all **14** subjects, a single interaction triggers a median of **493.5** function invocation events.

## Asynchronous Turn Counting

To quantify asynchronous execution, we partition the invocation sequence into asynchronous turns. An asynchronous turn is defined as a maximal contiguous subsequence of invocation events executed under the same event-loop continuation. A new turn begins whenever control returns to the event loop and later resumes through a macro-task or micro-task callback, such as Promise reactions, `setTimeout`, or network-response handlers.

Let $T_{\mathrm{async}}$ denote the number of asynchronous turns within one interaction. Across all subjects, the median number of asynchronous turns is **7**.

## Semantic Relevance Annotation

For each target behavior $t$, we identify the subset of invocation events that are semantically relevant to that behavior, denoted by $E_{\mathrm{sem}}(t)$.

An invocation event is considered semantically relevant if its executed function satisfies three criteria: (1) it is causally reachable from the user-event entry point to the observable sink; (2) it performs target-specific logic rather than generic reusable computation; and (3) it directly constructs, transforms, binds, or writes the target value. Generic utilities, framework dispatchers, event plumbing, and reusable cryptographic primitives are excluded unless they implement target-specific logic.

We define the semantic relevance ratio as $\sigma(t)=|E_{\mathrm{sem}}(t)|/|E|$, i.e., the fraction of invocation events relevant to target behavior $t$. Semantic relevance is determined using benchmark oracle annotations together with static call-graph constraints.

Across all subjects, fewer than **4.2%** of invocation events are semantically relevant to any particular target behavior.

## Summary

These measurements reveal a severe signal-to-noise imbalance in runtime execution: a single user interaction typically triggers hundreds of function invocations across multiple asynchronous stages, while only a small fraction contributes to the target behavior of interest. This quantitatively characterizes *runtime semantic explosion* and motivates behavior-aware localization instead of exhaustive runtime tracing.