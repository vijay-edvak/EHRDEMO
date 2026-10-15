/* Generated from shared/rbac/permissions.json. Run npm run generate:permissions after changes. */
export const PERMISSION_GROUPS = [
  {
    "name": "Practice operations",
    "module": "practice",
    "codes": [
      "practice.read",
      "practice.create",
      "practice.update",
      "practice.delete"
    ]
  },
  {
    "name": "Invoice operations",
    "module": "invoice",
    "codes": [
      "invoice.read",
      "invoice.create",
      "invoice.update",
      "invoice.approve",
      "invoice.export"
    ]
  },
  {
    "name": "User operations",
    "module": "user",
    "codes": [
      "user.read",
      "user.create",
      "user.update",
      "user.assign-role"
    ]
  },
  {
    "name": "Audit operations",
    "module": "audit",
    "codes": [
      "audit.read",
      "audit.export"
    ]
  },
  {
    "name": "Security operations",
    "module": "security",
    "codes": [
      "security.read",
      "security.manage"
    ]
  },
  {
    "name": "Role operations",
    "module": "role",
    "codes": [
      "role.read",
      "role.create",
      "role.update",
      "role.delete"
    ]
  },
  {
    "name": "Permission operations",
    "module": "permission",
    "codes": [
      "permission.read",
      "permission.manage"
    ]
  }
] as const;
export const PERMISSION_CODES = [
  "practice.read",
  "practice.create",
  "practice.update",
  "practice.delete",
  "invoice.read",
  "invoice.create",
  "invoice.update",
  "invoice.approve",
  "invoice.export",
  "user.read",
  "user.create",
  "user.update",
  "user.assign-role",
  "audit.read",
  "audit.export",
  "security.read",
  "security.manage",
  "role.read",
  "role.create",
  "role.update",
  "role.delete",
  "permission.read",
  "permission.manage"
] as const;
export type PermissionCode = typeof PERMISSION_CODES[number];
