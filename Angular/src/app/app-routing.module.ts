import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { LeaveAddComponent } from './admin/leave-add/leave-add.component';
import { LeaveListComponent } from './admin/leave-list/leave-list.component';
import { LeaveListDetailsComponent } from './admin/leave-list-details/leave-list-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeLeavesComponent } from './employee/employee-leaves/employee-leaves.component';
import { EmployeeLeavesAddComponent } from './employee/employee-leaves-add/employee-leaves-add.component';
import { AppComponent } from './app.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmpADDComponent } from './admin/emp-add/emp-add.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'Admin', component: AdminComponent,  //Admin Component
        children : [
          { path: 'Employee/List', component: EmployeeListComponent }, // Admin Employee List Component
          { path: 'Employee/Edit/:id', component: EmployeeAddComponent }, // Admin Employee Edit Component
          { path: 'Employee/Add', component: EmpADDComponent }, // Admin Employee Add Component
          { path: 'leave/Add', component: LeaveAddComponent },  // Admin Leave Add Component
          { path: 'leave/List', component: LeaveListComponent }, // Admin Leave List Component
          { path: 'leaveList/Employee', component: LeaveListDetailsComponent }, // Admin Employee Leave List Component
        ]
      },
      { path: 'Employee', component:  EmployeeComponent, // Employee Component
        children : [
          { path: 'Profile/:id', component:  EmployeeProfileComponent}, // Employee Profile Component
          { path: 'Profile/Edit/:id', component:  EmployeeEditComponent}, // Employee Profile Edit Component
          { path: 'LeaveList/:id', component: EmployeeLeavesComponent }, // Employee Leave List Component
          { path: 'LeaveList/:id/Add', component: EmployeeLeavesAddComponent }, // Employee Leave Add Component
        ]
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
