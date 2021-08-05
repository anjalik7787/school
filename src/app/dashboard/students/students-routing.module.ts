import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: 'studentsList',
    component: StudentListComponent
  },


  {
    path: 'studentsAdd',
    component: StudentAddComponent
  },

  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
