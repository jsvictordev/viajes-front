import { Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';

export const appRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component: AdminComponent,
    // resolve: {       initialData: ModulesDataResolver,     },
    children: [
      {
        path: 'users',
        loadChildren: () => import('./modules/admin/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'destinos',
        loadChildren: () => import('./modules/admin/destinos/destinos.module').then(m => m.DestinosModule),
      },
    ],
  },
];
