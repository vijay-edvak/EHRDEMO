# API reference

Base path: `/api`. Every protected route requires a short-lived Bearer access token and state-changing cookie flows require CSRF protection.

| Area | Routes |
|---|---|
| Health | `GET /health`, `GET /health/ready` |
| Auth | `/auth/*` login, MFA, refresh, logout and recovery |
| RBAC | `/rbac/*` roles, groups, permissions and simulation |
| Workflow | `/workflow/*` access requests, approvals, delegation and expiry |
| Billing | `/billing/*` plans, subscriptions, invoices, payments and webhooks |
| Analytics | `/analytics/dashboard`, `/analytics/audit/*` |
| AI | `/ai/recommendations`, `/ai/cleanup/run`, `/ai/threats`, `/ai/assistant/query` |
| Notifications | `GET /notifications`, `POST /notifications/read-all`, `PATCH /notifications/preferences` |

OpenAPI generation is intentionally kept as documentation-only until the public API contracts stabilize; controllers validate typed inputs and enforce RBAC at the route boundary.
