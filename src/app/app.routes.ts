import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/pages/login/login.component';
import { BoardsComponent } from '@boards/pages/boards/boards.component';
import { BoardComponent } from '@boards/pages/board/board.component';
import { ForgotPasswordComponent } from '@auth/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '@auth/pages/register/register.component';
import { RecoveryComponent } from '@auth/pages/recovery/recovery.component';
import { authGuard } from './guards/auth.guard';
import { redirectGuard } from './guards/redirect.guard';

export const routes: Routes = [
  {
    path:'login',
    canActivate: [ redirectGuard ],
    component: LoginComponent
  },
  {
    path:'app/boards',
    canActivate: [ authGuard ],
    component: BoardsComponent
  },
  {
    path:'app/boards/:id',
    canActivate: [ authGuard ],
    component: BoardComponent
  },
  {
    path: 'forgot-password',
    canActivate: [ redirectGuard ],
    component: ForgotPasswordComponent
  },
  {
    path: 'register',
    canActivate: [ redirectGuard ],
    component: RegisterComponent
  },
  {
    path: 'recovery',
    canActivate: [ redirectGuard ],
    component: RecoveryComponent
  }
];
