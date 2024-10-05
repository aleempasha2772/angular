import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {path:'students',component: StudentListComponent},
  {path:'employees',component: EmployeeListComponent},
  {path:'test',component: TestComponent},
  {path:'form',component:TdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
