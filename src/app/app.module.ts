import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayEmpComponent } from './display-emp/display-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CrucComponent } from './cruc/cruc.component';
import { TopwidgetComponent } from './topwidget/topwidget.component';
import { MonthlyEarningsComponent } from './monthly-earnings/monthly-earnings.component';
import { YearlyEarniuComponent } from './yearly-earniu/yearly-earniu.component';
import { LastAttendanceComponent } from './last-attendance/last-attendance.component';
import { TopPerformComponent } from './top-perform/top-perform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    DisplayEmpComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    UsercomponentComponent,
    AdminComponentComponent,
    HeaderComponent,
    SidenavComponent,
    CrucComponent,
    TopwidgetComponent,
    MonthlyEarningsComponent,
    YearlyEarniuComponent,
    LastAttendanceComponent,

    TopPerformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
