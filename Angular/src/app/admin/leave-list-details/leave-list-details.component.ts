import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveMapping } from 'src/app/models/EmployeeLeaveMapping';
import { DataService } from '../data.service';
import { Employee } from 'src/app/models/Employee';
import { Leave } from 'src/app/models/Leave';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-leave-list-details',
  templateUrl: './leave-list-details.component.html',
  styleUrls: ['./leave-list-details.component.css']
})
export class LeaveListDetailsComponent implements OnInit {
  employeeLeave:EmployeeLeaveMapping[];
  employeeleav:EmployeeLeaveMapping;
  Employee:Employee[];
  Leave:Leave[];
  ID:number;
  p:number = 1;
  constructor(private service:DataService,private http:HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEmployeeLeaves().subscribe(
      empleave => {this.employeeLeave = empleave}
    );
    this.service.getEmployees().subscribe(
      emp => this.Employee = emp
    );
  }
  updateEmployeeLeave(id){
    var url = 'http://localhost:65343/api';
    this.service.getEmployeeLeaves().subscribe(
      empleave => this.employeeLeave = empleave
    );
      var emp = this.employeeLeave.find(e => e.id === id);
    var data= this.http.put<EmployeeLeaveMapping>(url+`/EmployeeLeaveMappings/${id}`,emp);
    data.subscribe();
    window.location.reload();
  }
  test(){
    
    console.log(this.employeeLeave.filter(e => e.employeeid));
  }
}
