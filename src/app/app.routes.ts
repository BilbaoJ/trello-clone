import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { redirectGuard } from './guards/redirect.guard';

export const routes: Routes = [
  {
    path:'',
    canActivate: [ redirectGuard ],
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path:'app',
    canActivate: [ authGuard ],
    loadChildren: () => import('./modules/boards/boards.routes').then(m => m.boardsRoutes)
  },

];
