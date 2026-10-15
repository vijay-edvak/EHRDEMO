# Step 9 — AI Modules

All AI features are recommendation-only. They never grant, revoke, block, or change access automatically. Recommendation records include pseudonymised inputs, deterministic rule version, confidence, explanation, status, and human actor.

Implemented modules:

- Permission recommender with SoD conflict rejection and peer-role explanation.
- Permission cleanup scan for inactive users, expired temporary access, and orphaned delegations.
- Explainable threat scoring for impossible travel, repeated failures, new-device odd hours, credential stuffing, and privileged new-device activity.
- Whitelist-only audit assistant. It maps natural language to fixed templates and rejects prompt/operator injection; raw MongoDB is never accepted.
- Per-module kill switches.
- AI Center recommendation inbox, threat list, cleanup action, and audit assistant.

AI endpoints are under `/api/ai` and protected by `ai.view`, `ai.recommend`, and `ai.manage`. Any future external provider must receive only pseudonymised metadata and must use the provider boundary rather than direct model calls.
