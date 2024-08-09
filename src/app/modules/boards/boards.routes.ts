import { Routes } from "@angular/router";
import { LayoutComponent } from "@shared/components/layout/layout.component";

export const boardsRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.routes').then((m) => m.usersRoutes),
      },
    ]
  }
]
