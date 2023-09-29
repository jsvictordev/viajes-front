import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { authRoute } from './auth.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(authRoute)],
})
export class AuthModule {}
