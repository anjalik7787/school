import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersAddComponent } from './teachers-add/teachers-add.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';

const routes: Routes = [
  
  {
    path: 'teachersAdd',
    component: TeachersAddComponent
  },

  {
    path: 'teachersList',
    component: TeachersListComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
