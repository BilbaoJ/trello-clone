import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/pages/login/login.component';
import { BoardsComponent } from '@boards/pages/boards/boards.component';
import { BoardComponent } from '@boards/pages/board/board.component';
import { ForgotPasswordComponent } from '@auth/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '@auth/pages/register/register.component';
import { RecoveryComponent } from '@auth/pages/recovery/recovery.component';

export const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'app/boards',
    component: BoardsComponent
  },
  {
    path:'app/boards/:id',
    component: BoardComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  }
];
