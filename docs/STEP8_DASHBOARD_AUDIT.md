# Step 8 — Dashboard and Audit Center

## Real analytics

`GET /api/analytics/dashboard` uses date-range, practice, and department query filters. Tiles and trend aggregations are sourced from admin, workflow, billing, security-event, and practice collections. Empty data returns zero or an empty series; no placeholder values are supplied.

The dashboard supports an SSE stream at `/api/analytics/dashboard/stream` for pending approvals and failed-login refreshes. The Angular UI includes URL-compatible date controls, real metric tiles, an accessible table fallback for the revenue chart, and empty/loading states.

## Audit center

`audit_logs` is append-only from the application API. Records include user, delegated-for, action, module, entity, before/after, IP, device, request ID, timestamp, status, hash, and previous hash. No update or delete route is exposed.

`auditLog()` computes a SHA-256 hash chain beginning at `GENESIS`. `/api/analytics/audit/verify` verifies the chain and returns the broken record IDs. CSV/PDF exports are permission-gated and themselves audited.

Indexes cover timestamp, user, module, action/status, and hash lookups. Existing module writers can use `writeAudit()` or the `auditMiddleware()` helper.

## Routes

- `GET /analytics/dashboard`
- `GET /analytics/dashboard/stream`
- `GET /analytics/audit`
- `GET /analytics/audit/:id`
- `GET /analytics/audit/verify`
- `GET /analytics/audit/export.csv`
- `GET /analytics/audit/export.pdf`

All routes require `dashboard.*` or `audit.*` permissions.
