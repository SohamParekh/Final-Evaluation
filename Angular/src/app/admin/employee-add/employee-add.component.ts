import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Employee } from 'src/app/models/Employee';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee:Employee = {
    employeeid: 0,
    name:null,
    email:null,
    password:null,
    dob:null,
    doj:null,
    salary:null
  };
  ID: number;
  pageTitle: string;
  constructor(public service:DataService,private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      params => {
        this.ID = +params.get('id');
        this.getEmployee(this.ID);
      }
    );

  }
  getEmployee(id: number): void {
    this.service.getEmployeesbyId(id).subscribe(
      (employee: Employee) => this.employeeTitles(employee),
    );

  }
  employeeTitles(employee: Employee): void {
    this.employee = employee;

    if (!this.employee) {
      this.pageTitle = "No employee found";
    } else {
      if (this.ID === 0) {
        this.pageTitle = "Add Employee";

      } else {
        this.pageTitle = `Edit Employee: ${this.employee.name} `;
      }
    }
  }
  saveEmployee(){
    console.log(this.employee);
    if (this.ID == 0) {
      this.service.postEmployeeDetails(this.employee).subscribe(
        () =>
          this.onSaveComplete(`The new Employee ${this.employee.name} was saved`),
      );
    } else {

      this.service.updateEmployee(this.employee).subscribe(
        () =>
          this.onSaveComplete(
            `The updated Employee ${this.employee.name} was saved`
          ),
      );
    }
  }
  onSaveComplete(message?: string): void {
    if (message) {
      console.log(message);
      if(this.ID == 0){
        alert(`Successfully Added Employee: ${this.employee.name}`);
      }
      else{
        alert(`Successfully Updated Employee: ${this.employee.name}`);
      }

    }
    this.route.navigateByUrl("/Admin/Employee/List");
  }
}
