# Dynamic RBAC migration notes

Step 4 introduces explicit permission codes instead of URL matching. The canonical source is `shared/rbac/permissions.json`; run `npm run generate:permissions` after changing it. The generated TypeScript files are consumed by the backend seed and Angular UI.

## Seed

```bash
cp ehr-admin-backend/.env.example ehr-admin-backend/.env
npm run seed:rbac --workspace=ehr-admin-backend
```

The seed is idempotent. It creates the `roles`, `permissions`, `permission_groups`, `role_permissions`, `role_groups`, and `user_roles` data. System roles are marked `system: true`; Super Admin is the only role with `allPermissions`.

## Legacy migration

```bash
npm run migrate:rbac --workspace=ehr-admin-backend
```

The migration reads `admin_permissions` and `admin_usertypes`, converts unambiguous dotted access values, and creates non-system role records for legacy user types. Ambiguous URL-style permissions are intentionally skipped and reported for manual review; they must be mapped to an explicit `<module>.<action>` code before granting access.

All RBAC mutations record before/after metadata in `audit_logs`. Cache entries are invalidated after role, group, or user-permission changes. Backend middleware is authoritative; the Angular directive only hides or disables controls for convenience.
