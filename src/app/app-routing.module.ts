import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEmpComponent } from './display-emp/display-emp.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { LastAttendanceComponent } from './last-attendance/last-attendance.component';
import { TopwidgetComponent } from './topwidget/topwidget.component';
import { YearlyEarniuComponent } from './yearly-earniu/yearly-earniu.component';
import { TopPerformComponent } from './top-perform/top-perform.component';


const routes: Routes = [
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'updateEmployee',component:UpdateEmployeeComponent},
  {path:'dashboard',component:LastAttendanceComponent},
  {path:'location',component:TopwidgetComponent},
  {path:'technology',component:YearlyEarniuComponent},
  {path:'paystubs',component:TopPerformComponent},
  {path:'userdashboard',component:AdminComponentComponent},
  {path:'user',component:UsercomponentComponent},


   { path: '**', redirectTo: '/login', pathMatch: 'full' },
 
  { path: "login", component: LoginComponent },
 // { path: "updateMovie/:id", component: UpdateMovieComponent },
 {
   path: 'admin',
   component: AdminComponentComponent,
   children: [
  //   { path: "", component: DisplayEmpComponent },
     
    // { path: "**", redirectTo: '/admin', pathMatch: 'full' },
   ],
 },
 {
   path: "user",
   component: UsercomponentComponent ,
   children: [
    //{ path: '', component: DisplayEmpComponent },
   {path:'addEmployee',component:AddEmployeeComponent},
   {path:'updateEmployee',component:UpdateEmployeeComponent},
   {path:'viewEmployee',component:DisplayEmpComponent},
   {path:'userdashboard',component:AdminComponentComponent},
   
   { path: '**', redirectTo: '/user', pathMatch: 'full' },
   
    // { path: "**", redirectTo: "/user", pathMatch: "full" },
   ],
 },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
