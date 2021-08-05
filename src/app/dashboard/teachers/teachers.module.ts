import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersRoutingModule } from './teachers-routing.modules';



@NgModule({
  declarations: [ TeachersAddComponent, TeachersListComponent],
  imports: [
    CommonModule,TeachersRoutingModule
  ]
})
export class TeachersModule { }
