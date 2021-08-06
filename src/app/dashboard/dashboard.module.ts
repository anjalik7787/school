import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { LoginUserNavComponent } from './login-user-nav/login-user-nav.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [DashboardComponent, SidepanelComponent, LoginUserNavComponent, NewsletterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
