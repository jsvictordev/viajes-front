import { Routes } from '@angular/router';
import { DestinosDetailComponent } from './destinos-detail/destinos-detail.component';
import { DestinosListComponent } from './destinos-list/destinos-list.component';

export const destinosRouting: Routes = [
  { path: '', component: DestinosListComponent },
  { path: ':id', component: DestinosDetailComponent },
];
