# EHR Admin Portal

## Five-minute setup

1. `cp ehr-admin-backend/.env.example ehr-admin-backend/.env` and fill local secrets.
2. `npm ci`.
3. `npm run seed:rbac` and optionally `npm run seed:demo` (fake `example.com` data; never production).
4. `npm run dev --workspace=ehr-admin-backend`.
5. In a second terminal, `npm start --workspace=ehr-admin-frontend`.

Demo seed credentials are intentionally documented only as development fixtures and must be changed immediately.

## Commands

- `npm run lint`, `npm test`, `npm run build`
- `npm run seed:demo --workspace=ehr-admin-backend -- --reset`
- `docker compose up --build`

See [architecture](ARCHITECTURE.md), [API reference](API.md), [runbook](RUNBOOK.md), [HIPAA readiness](HIPAA_READINESS.md), and [demo script](DEMO_SCRIPT.md).
