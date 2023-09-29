import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { userRouting } from './user.routing';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, RouterModule.forChild(userRouting)],
})
export class UsersModule {}
