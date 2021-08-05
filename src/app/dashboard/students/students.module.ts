import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentsRoutingModule } from './students-routing.module';


@NgModule({
  declarations: [StudentListComponent, StudentAddComponent],
  imports: [
    CommonModule, StudentsRoutingModule
  ]
})
export class StudentsModule { }
