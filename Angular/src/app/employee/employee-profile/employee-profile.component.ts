import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Employee } from 'src/app/models/Employee';
import { DataService } from 'src/app/admin/data.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  employee:Employee={
    employeeid:0,
    email:null,
    password:null,
    dob:null,
    doj:null,
    name:null,
    salary:null
  };
  ID: number;

  constructor(private service:DataService,private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.ID = +params.get('id');
        this.getEmployee(this.ID);
      }
    );
    console.log(this.ID);
  }
  getEmployee(id: any) {
    this.service.getEmployeesbyId(id).subscribe(
      (employee: Employee) => {this.employee = employee},
    );
  }
}
