import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from '../admin/data.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee:Employee[];
  emp:Employee;
  email:string;
  constructor(private route:Router,private service:DataService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      employee => {
        this.employee = employee
      //  this.emp = this.employee.find(e => e.email === this.email)
      }
    );
    ;
  }
  display(){
    if(this.email === "admin@gmail.com"){
      this.route.navigateByUrl("/Admin/Employee/List");
    }
    else {
      this.emp = this.employee.find(e => e.email === this.email);
      this.route.navigateByUrl("/Employee/Profile/"+this.emp.employeeid);
    }

  }
}
