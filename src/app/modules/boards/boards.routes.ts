import { Routes } from "@angular/router";

export const boardsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full'
  },
  {
    path:'boards',
    loadComponent: () => import('../boards/pages/boards/boards.component')
  },
  {
    path:'boards/:id',
    loadComponent: () => import('../boards/pages/board/board.component')
  }

]
