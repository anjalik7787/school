import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IndexRoutingModule } from './index-routing.module';
import { RegisterComponent } from './register/register.component';
import { GuestUserNavComponent } from './guest-user-nav/guest-user-nav.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [LoginComponent, AboutUsComponent, RegisterComponent, GuestUserNavComponent, ContactUsComponent],
  imports: [
    CommonModule,IndexRoutingModule
  ]
})
export class IndexModule { }
