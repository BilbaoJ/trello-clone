import { Routes } from "@angular/router";
import { LayoutComponent } from "@shared/components/layout/layout.component";
import { authGuard } from "../../guards/auth.guard";

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
        canActivate: [ authGuard ],
        loadComponent: () => import('../boards/pages/boards/boards.component')
      },
      {
        path:'boards/:id',
        canActivate: [ authGuard ],
        loadComponent: () => import('../boards/pages/board/board.component')
      },
      {
        path: 'users',
        canActivate: [ authGuard ],
        loadChildren: () => import('../users/users.routes').then((m) => m.usersRoutes),
      },
    ]
  }
]
