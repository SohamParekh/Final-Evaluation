import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveMapping } from 'src/app/models/EmployeeLeaveMapping';

@Component({
  selector: 'app-employee-leaves-add',
  templateUrl: './employee-leaves-add.component.html',
  styleUrls: ['./employee-leaves-add.component.css']
})
export class EmployeeLeavesAddComponent implements OnInit {
  empleave:EmployeeLeaveMapping = {
    id:0,
    employeeid:0,
    leaveid:0,
    leaveStartDate:null,
    leaveEndDate:null,
    status:'Pending'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
