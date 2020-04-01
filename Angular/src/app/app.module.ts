import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { LeaveListComponent } from './admin/leave-list/leave-list.component';
import { LeaveAddComponent } from './admin/leave-add/leave-add.component';
import { LeaveListDetailsComponent } from './admin/leave-list-details/leave-list-details.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeLeavesComponent } from './employee/employee-leaves/employee-leaves.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeLeavesAddComponent } from './employee/employee-leaves-add/employee-leaves-add.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmpADDComponent } from './admin/emp-add/emp-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    LeaveListComponent,
    LeaveAddComponent,
    LeaveListDetailsComponent,
    EmployeeProfileComponent,
    EmployeeLeavesComponent,
    EmployeeComponent,
    EmployeeLeavesAddComponent,
    LoginComponent,
    EmployeeEditComponent,
    EmpADDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
