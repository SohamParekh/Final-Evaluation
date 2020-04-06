import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveMapping } from 'src/app/models/EmployeeLeaveMapping';
import { DataService } from '../data.service';
import { Employee } from 'src/app/models/Employee';
import { Leave } from 'src/app/models/Leave';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leave-list-details',
  templateUrl: './leave-list-details.component.html',
  styleUrls: ['./leave-list-details.component.css']
})
export class LeaveListDetailsComponent implements OnInit {
  employeeLeave:EmployeeLeaveMapping[]=[];
  employeeleav:EmployeeLeaveMapping;
  Employee:Employee[]=[];
  leave:Leave[]=[];
  e:Employee;
  ID:number;
  p:number = 1;

  constructor(private service:DataService,private http:HttpClient,private activatedRoute: ActivatedRoute,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getEmployeeLeaves().subscribe(
      empleave => {this.employeeLeave = empleave,this.calculate_days()}
    );
    this.service.getLeaves().subscribe(
      leave => {
        this.leave = leave
      }
    );
    this.service.getEmployees().subscribe(
      emp => {this.Employee = emp
          //this.Employee.find(e => e.employeeid === this.employeeLeave.find(e => e.employeeid))
      }

    );
    //var e = this.Employee.find(e => e.employeeid === this.employeeLeave.employeeid);
  }
  updateEmployeeLeave(id){
    var url = 'http://localhost:65343/api';
    this.service.getEmployeeLeaves().subscribe(
      empleave => this.employeeLeave = empleave
    );
      var emp = this.employeeLeave.find(e => e.id === id);
      this.e = this.Employee.find(e => e.employeeid === emp.employeeid);
    var data= this.http.put<EmployeeLeaveMapping>(url+`/EmployeeLeaveMappings/${id}`,emp);
    data.subscribe();
    alert(`Leave Status changed to ${emp.status} for ${this.e.name}`);
    window.location.reload();
  }
  calculate_days(){
    for(var i=0;i<this.employeeLeave.length;i++){
        var date1 = new Date(this.employeeLeave[i].leaveStartDate);
        var date2 = new Date(this.employeeLeave[i].leaveEndDate);
        var diffintime = date2.getTime()-date1.getTime();
        this.employeeLeave[i].diff = (diffintime/(1000 * 3600 * 24))+1;
      }
  }

}
