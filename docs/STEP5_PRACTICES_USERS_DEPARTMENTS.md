# Step 5 — Practices, users, and departments

## Data ownership

- Practice records and practice users are created through the practice MongoDB connection (`MONGO_URI`).
- Portal staff, departments, roles, audit logs, and security records remain on the admin connection (`ADMIN_MONGO_URI`).
- Practice-scoped reads require a `practiceId` and reject mismatched `x-practice-id` headers.
- Backend permission middleware is authoritative; Angular route/UI permission checks only improve usability.

## Commands

```bash
npm run generate:permissions
npm run seed:departments --workspace=ehr-admin-backend
npm run build
npm test -- --ci
```

## Practice management

`/api/practices` supports paginated search/filter listing, create, detail, update, status transitions with mandatory reasons, soft archive, restore, and NPI verification boundary. Contract metadata is limited to five PDF/PNG/JPEG files, each at most 5 MB; storage upload should be connected to the approved private object-store adapter before production.

## User management

Portal staff and practice users have separate endpoints and Angular routes: `/admin-users` and `/practice-users`. Admin credentials are never returned by list endpoints. Status changes revoke sessions for suspended/deleted admin users and leavers; practice-user changes set `accessReviewRequired`. CSV import returns a preview and row-level validation errors without partially importing invalid rows.

## Departments and hierarchy

Departments are seeded with HR, Finance, Operations, Security, IT, Support, and Compliance. Manager assignments are checked against the practice-user graph and cycles return HTTP 409. Audit metadata stores before/after values while excluding password and MFA secrets.
