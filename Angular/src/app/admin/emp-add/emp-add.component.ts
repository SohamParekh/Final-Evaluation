import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpADDComponent implements OnInit {
  employee:Employee = {
    employeeid: 0,
    name:null,
    email:null,
    password:null,
    dob:null,
    doj:null,
    salary:0
  };
  ID: number;
  pageTitle: string;
  constructor(public service:DataService,private activatedRoute: ActivatedRoute,private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    console.log(this.employee);
    //var url = 'http://localhost:65343/api/Employees';
    var data= this.http.post<Employee>('http://localhost:65343/api/Employees',this.employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    data.subscribe();
    alert(`Successfully Added Employee ${this.employee.name}`);
    this.route.navigateByUrl('/Admin/Employee/List');
  }
}
