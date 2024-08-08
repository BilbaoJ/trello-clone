import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadComponent: () => import('../auth/pages/login/login.component')
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('../auth/pages/forgot-password/forgot-password.component')
  },
  {
    path: 'register',
    loadComponent: () => import('../auth/pages/register/register.component')
  },
  {
    path: 'recovery',
    loadComponent: () => import('../auth/pages/recovery/recovery.component')
  }
];
