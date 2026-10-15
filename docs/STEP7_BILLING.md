# Step 7 — Billing

## Canonical invoice module

`/api/billing/invoices` is now the single invoice API and data model. Legacy `/api/invoices` paths issue a 301 redirect for one release. The old read-only/full-CRUD split is not recreated.

The recipient endpoint is available at:

```text
GET /api/billing/invoice-recipients/:practiceId
```

## Seed and configuration

```bash
npm run seed:plans --workspace=ehr-admin-backend
```

`EHR_BACKEND_URL` and `EHR_JWT_SECRET` are used by `EhrBackendClient` for short-lived Darwin service JWT delegation. Add `PAYMENT_WEBHOOK_SECRET` to the local environment when enabling mock gateway webhooks; never store card data.

## Money and invoice safety

All amounts are integer minor units. Invoice numbers are allocated through a MongoDB atomic sequence document. Issued invoices are immutable through the normal mutation paths; corrections use credit notes. Invoice creation and approval enforce separation of duties.

The mock payment provider supports idempotency keys and HMAC webhook verification. It is intentionally Stripe-ready but does not persist card data.

## Routes

- `GET /billing/dashboard`
- `GET /billing/plans`
- `GET/PATCH /billing/subscriptions/:practiceId`
- `GET/POST /billing/invoices`
- `POST /billing/invoices/:invoiceId/issue`
- `POST /billing/invoices/:invoiceId/void`
- `POST /billing/invoices/:invoiceId/payments`
- `GET /billing/invoices/:invoiceId/pdf`
- `POST /billing/invoices/:invoiceId/credit-notes`
- `GET /billing/invoice-recipients/:practiceId`

All routes are permission-gated with `billing.*`, `invoice.*`, and `subscription.*` codes. Export and payment operations are audited.
