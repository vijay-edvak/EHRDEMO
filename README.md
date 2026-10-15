# EHR Admin Portal

Step 1 foundation for Edvak's internal EHR operations console.

## Repository layout

- `ehr-admin-frontend`: Angular 17 standalone frontend.
- `ehr-admin-backend`: Node.js, Express, and TypeScript API.
- `docs`: architecture and delivery documentation.

## Run locally

```bash
cp ehr-admin-backend/.env.example ehr-admin-backend/.env
# Replace every placeholder with local values; use different random values for each secret.
npm install
npm run build
npm test
npm run lint
```

Start the backend with `npm run dev --workspace=ehr-admin-backend` and the frontend with `npm start --workspace=ehr-admin-frontend`. The health check is `GET http://localhost:3000/api/health`.

This repository intentionally stops at Step 1. Continue only when the next step is explicitly requested.
