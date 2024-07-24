import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/pages/login/login.component';
import { BoardsComponent } from '@boards/pages/boards/boards.component';
import { BoardComponent } from '@boards/pages/board/board.component';

export const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'boards',
    component: BoardsComponent
  },
  {
    path:'board',
    component: BoardComponent
  },
];
