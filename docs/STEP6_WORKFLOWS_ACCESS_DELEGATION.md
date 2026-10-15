# Step 6 — Workflows, access requests, temporary access, and delegation

## Seed

```bash
npm run seed:workflows --workspace=ehr-admin-backend
```

This idempotently seeds `practice-creation` and `access-request` templates. The expiry worker starts with the API and runs every minute; its updates are guarded by `active:true` so repeated runs are safe.

## Governance

Workflow transitions are limited to `draft -> pending -> approved/rejected/cancelled/expired`. Rejections require a reason. Self-approval is rejected, approvers must hold the requested permission, and the existing SoD rules block conflicting access.

Break-glass requests require a reason and are limited to four hours. They are stored with `complianceReviewRequired: true` for Compliance Officer follow-up.

Delegation is limited to permissions held by the delegator, rejects self-delegation, invalid date ranges, SoD conflicts, and chained delegation. Revocation is explicit and expiry is handled by the same minute worker.

## Routes

- `/workflow/my-requests`
- `/workflow/requests`
- `/workflow/requests/:id/approve`
- `/workflow/requests/:id/reject`
- `/workflow/all-requests`
- `/workflow/templates`
- `/workflow/delegations`

All routes use Step 4 permission codes and state-changing operations audit before/after data where applicable.
