# Step 10 security review

- Dependency audit: `npm audit` currently reports transitive vulnerabilities; release promotion must remediate or explicitly risk-accept them.
- Secret scan: CI rejects common private-key, MongoDB URI, and API-key patterns; `.env` remains ignored.
- OWASP review: Helmet, CORS allowlist, rate limiting, Joi/typed validation, CSRF cookie flow, JWT expiry/rotation, bcrypt, generic auth errors, and permission middleware are present.
- Tenant isolation: route/service tests cover RBAC and tenant scope; production must add database-level tenant identifiers to every practice query.
- Headers/cookies: security headers and secure SameSite refresh cookies are configured; production must set `AUTH_COOKIE_SECURE=true`.
- Backups: Atlas backup/restore procedure is documented; restore drill evidence is still an operational requirement.
- Known gaps: full SendGrid retry templates, complete Playwright/axe/Lighthouse automation, formal OpenAPI generation, complete 500-event demo activity volume, socket token refresh lifecycle, and independent penetration testing.
