import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/admin/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
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
  constructor(private service:DataService,private activatedRoute: ActivatedRoute,private route:Router,
              private toastr:ToastrService) { }

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
        this.pageTitle = `Edit Employee: ${this.employee.name} `;
    }
  }
  saveEmployee(){
      this.service.updateEmployee(this.employee).subscribe(
        () =>
          this.onSaveComplete(
            `The updated Employee ${this.employee.name} was saved`
          ),
      );

  }
  onSaveComplete(message?: string): void {
    if (message) {
        this.toastr.success(`Successfully Updated Employee: ${this.employee.name}`);
      }
    this.route.navigateByUrl("/Employee/Profile/"+this.ID);
  }
}
