import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { MaterialSharedModule } from 'src/app/shared/material-shared/material-shared.module';
import { authRoute } from './auth.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(authRoute), MaterialSharedModule],
})
export class AuthModule {}
