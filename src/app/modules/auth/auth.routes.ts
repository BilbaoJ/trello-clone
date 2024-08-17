import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    title: 'Inicia sesión para continuar',
    loadComponent: () => import('../auth/pages/login/login.component')
  },
  {
    path: 'forgot-password',
    title: '¿No puedes iniciar sesión?',
    loadComponent: () => import('../auth/pages/forgot-password/forgot-password.component')
  },
  {
    path: 'register',
    title: 'Registrate',
    loadComponent: () => import('../auth/pages/register/register.component')
  },
  {
    path: 'recovery',
    title: 'Recupera tu contraseña',
    loadComponent: () => import('../auth/pages/recovery/recovery.component')
  }
];
