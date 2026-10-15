import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { permissionGuard } from './core/rbac/permission.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./features/landing/landing.component').then((m) => m.LandingComponent) },
  { path: 'login', loadComponent: () => import('./features/login/login.component').then((m) => m.LoginComponent) },
  { path: 'auth/forgot-password', loadComponent: () => import('./features/auth-flow/auth-flow.component').then((m) => m.AuthFlowComponent) },
  { path: 'auth/reset-password', loadComponent: () => import('./features/auth-flow/auth-flow.component').then((m) => m.AuthFlowComponent) },
  { path: 'auth/mfa', loadComponent: () => import('./features/auth-flow/auth-flow.component').then((m) => m.AuthFlowComponent) },
  {
    path: '',
    canMatch: [authGuard],
    loadComponent: () => import('./features/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
      { path: 'devices', loadComponent: () => import('./features/devices/devices.component').then((m) => m.DevicesComponent) },
      { path: 'roles', canMatch: [permissionGuard('role.read')], loadComponent: () => import('./features/roles/roles.component').then((m) => m.RolesComponent) },
      { path: 'admin-users', canMatch: [permissionGuard('user.read')], loadComponent: () => import('./features/admin-users/admin-user-list.component').then((m) => m.AdminUserListComponent) },
      { path: 'practice-users', canMatch: [permissionGuard('user.read')], loadComponent: () => import('./features/practice-users/practice-user-list.component').then((m) => m.PracticeUserListComponent) },
      { path: 'practices', canMatch: [permissionGuard('practice.read')], loadComponent: () => import('./features/practices/practice-list.component').then((m) => m.PracticeListComponent) },
      { path: 'departments', canMatch: [permissionGuard('department.read')], loadComponent: () => import('./features/departments/department-list.component').then((m) => m.DepartmentListComponent) },
      { path: 'requests', canMatch: [permissionGuard('access.read')], loadComponent: () => import('./features/requests/request-portal.component').then((m) => m.RequestPortalComponent) },
      { path: 'workflow-builder', canMatch: [permissionGuard('workflow.read')], loadComponent: () => import('./features/workflow-builder/workflow-builder.component').then((m) => m.WorkflowBuilderComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];
