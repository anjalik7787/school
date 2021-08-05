import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IndexRoutingModule } from './index-routing.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, AboutUsComponent, RegisterComponent],
  imports: [
    CommonModule,IndexRoutingModule
  ]
})
export class IndexModule { }
