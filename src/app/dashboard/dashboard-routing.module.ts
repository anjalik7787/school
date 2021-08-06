import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { TeachersAddComponent } from './teachers/teachers-add/teachers-add.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';


const routes: Routes = [


  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "studentsList",
        component: StudentListComponent
      },
      {
        path: "studentsAdd",
        component: StudentAddComponent
      },
      {
        path: "teachersList",
        component: TeachersListComponent
      },
      {
        path: "teachersAdd",
        component: TeachersAddComponent
      }
      ,
      {
        path: "newsletter",
        component: NewsletterComponent
      }

    ]
  },


  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },



  {
    path: 'teachers',
    loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
