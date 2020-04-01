import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/admin/data.service';
import { Employee } from 'src/app/models/Employee';
import { Leave } from 'src/app/models/Leave';
import { EmployeeLeaveMapping } from 'src/app/models/EmployeeLeaveMapping';
@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit {
  ID: number;
  employeeLeave:EmployeeLeaveMapping[];
  leave:Leave[];
  employee:Employee={
    employeeid:null,
    email:null,
    password:null,
    dob:null,
    doj:null,
    name:null,
    salary:null
  };
  constructor(private service:DataService,private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.ID = +params.get('id');
      }
    );
    this.service.getLeaves().subscribe(
      leave => {
        this.leave = leave
      }
    );
    this.service.getEmployeeLeaves().subscribe(
      empleave => this.employeeLeave = empleave
    );
    this.employeeLeave.find(el => el.employeeid == this.ID);
  }

  add(){
    this.route.navigateByUrl("Employee/LeaveList/Add");
  }
}
