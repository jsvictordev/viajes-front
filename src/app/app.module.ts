import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { AdminComponent } from './layout/admin/admin.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { FooterComponent } from './layout/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, AdminComponent, NavbarComponent, SidebarComponent, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRouting)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
