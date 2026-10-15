import { mkdir, readFile, writeFile } from 'node:fs/promises';
const source = JSON.parse(await readFile(new URL('../shared/rbac/permissions.json', import.meta.url), 'utf8'));
const codes = Object.entries(source).flatMap(([module, actions]) => actions.map((action) => `${module}.${action}`));
const groups = Object.entries(source).map(([module, actions]) => ({ name: `${module[0].toUpperCase()}${module.slice(1)} operations`, module, codes: actions.map((action) => `${module}.${action}`) }));
const output = `/* Generated from shared/rbac/permissions.json. Run npm run generate:permissions after changes. */\nexport const PERMISSION_GROUPS = ${JSON.stringify(groups, null, 2)} as const;\nexport const PERMISSION_CODES = ${JSON.stringify(codes, null, 2)} as const;\nexport type PermissionCode = typeof PERMISSION_CODES[number];\n`;
await mkdir(new URL('../ehr-admin-frontend/src/app/core/rbac/', import.meta.url), { recursive: true });
await mkdir(new URL('../ehr-admin-backend/src/rbac/', import.meta.url), { recursive: true });
await writeFile(new URL('../ehr-admin-frontend/src/app/core/rbac/permissions.generated.ts', import.meta.url), output);
await writeFile(new URL('../ehr-admin-backend/src/rbac/permissions.generated.ts', import.meta.url), output);
