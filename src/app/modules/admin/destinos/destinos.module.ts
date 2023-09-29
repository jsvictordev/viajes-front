import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DestinosDetailComponent } from './destinos-detail/destinos-detail.component';
import { DestinosListComponent } from './destinos-list/destinos-list.component';
import { destinosRouting } from './destinos.routing';

@NgModule({
  declarations: [DestinosListComponent, DestinosDetailComponent],
  imports: [CommonModule, RouterModule.forChild(destinosRouting)],
})
export class DestinosModule {}
