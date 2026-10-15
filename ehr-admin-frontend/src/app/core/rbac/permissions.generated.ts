/* Generated from shared/rbac/permissions.json. Run npm run generate:permissions after changes. */
export const PERMISSION_GROUPS = [
  {
    "name": "Practice operations",
    "module": "practice",
    "codes": [
      "practice.read",
      "practice.create",
      "practice.update",
      "practice.delete",
      "practice.status",
      "practice.export"
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
      "user.delete",
      "user.status",
      "user.assign-role",
      "user.export",
      "user.import"
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
  },
  {
    "name": "Department operations",
    "module": "department",
    "codes": [
      "department.read",
      "department.create",
      "department.update",
      "department.delete",
      "department.assign-manager",
      "department.export"
    ]
  },
  {
    "name": "Workflow operations",
    "module": "workflow",
    "codes": [
      "workflow.read",
      "workflow.create",
      "workflow.update",
      "workflow.approve",
      "workflow.reject",
      "workflow.admin"
    ]
  },
  {
    "name": "Access operations",
    "module": "access",
    "codes": [
      "access.read",
      "access.create",
      "access.approve",
      "access.reject",
      "access.grant",
      "access.revoke",
      "access.break-glass"
    ]
  },
  {
    "name": "Delegation operations",
    "module": "delegation",
    "codes": [
      "delegation.read",
      "delegation.create",
      "delegation.revoke",
      "delegation.admin"
    ]
  }
] as const;
export const PERMISSION_CODES = [
  "practice.read",
  "practice.create",
  "practice.update",
  "practice.delete",
  "practice.status",
  "practice.export",
  "invoice.read",
  "invoice.create",
  "invoice.update",
  "invoice.approve",
  "invoice.export",
  "user.read",
  "user.create",
  "user.update",
  "user.delete",
  "user.status",
  "user.assign-role",
  "user.export",
  "user.import",
  "audit.read",
  "audit.export",
  "security.read",
  "security.manage",
  "role.read",
  "role.create",
  "role.update",
  "role.delete",
  "permission.read",
  "permission.manage",
  "department.read",
  "department.create",
  "department.update",
  "department.delete",
  "department.assign-manager",
  "department.export",
  "workflow.read",
  "workflow.create",
  "workflow.update",
  "workflow.approve",
  "workflow.reject",
  "workflow.admin",
  "access.read",
  "access.create",
  "access.approve",
  "access.reject",
  "access.grant",
  "access.revoke",
  "access.break-glass",
  "delegation.read",
  "delegation.create",
  "delegation.revoke",
  "delegation.admin"
] as const;
export type PermissionCode = typeof PERMISSION_CODES[number];
