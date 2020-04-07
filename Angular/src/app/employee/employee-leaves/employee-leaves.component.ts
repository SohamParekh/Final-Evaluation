import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/admin/data.service';
import { Employee } from 'src/app/models/Employee';
import { Leave } from 'src/app/models/Leave';
import * as _ from 'lodash';
import { EmployeeLeaveMapping } from 'src/app/models/EmployeeLeaveMapping';
@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit {
  ID: number;
  employeeLeave:EmployeeLeaveMapping[]=[];
  empleav:EmployeeLeaveMapping[]=[];
  leave:Leave[]=[];
  emp:any[] = [];

  constructor(private service:DataService,private activatedRoute: ActivatedRoute,private route:Router) {
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.ID = +params.get('id');
      }
    );
    console.log(this.ID);
    this.service.getLeaves().subscribe(
      leave => {
        this.leave = leave
      }
    );
    this.service.getEmployeeLeaves().subscribe(
      empleave =>{
        this.employeeLeave = empleave,
        this.empleav = this.employeeLeave.filter(e => e.employeeid === this.ID),
        this.calculate_days();
      }
    );
  }
  add(){
    this.route.navigateByUrl("/Employee/LeaveList/Add");
  }
  calculate_days(){
    for(var i=0;i<this.empleav.length;i++){
        var date1 = new Date(this.empleav[i].leaveStartDate);
        var date2 = new Date(this.empleav[i].leaveEndDate);
        var diffintime = date2.getTime()-date1.getTime();
        this.empleav[i].diff = (diffintime/(1000 * 3600 * 24))+1;
        if(this.empleav[i].status=="Granted   "){
          let days_balance=(this.leave.find(c=>c.leaveid==this.empleav[i].leaveid));
          var result:number = days_balance.maximumLeavesAllowed - this.empleav[i].diff;
          (days_balance.maximumLeavesAllowed)=result;
          console.log(days_balance);
        }
      }
  }
  test1(){
    for(var i=0;i<this.empleav.length;i++){
      var date1 = new Date(this.empleav[i].leaveStartDate);
      var date2 = new Date(this.empleav[i].leaveEndDate);
      var diffintime = date2.getTime()-date1.getTime();
      this.empleav[i].diff = (diffintime/(1000 * 3600 * 24))+1;
      if(this.empleav[i].status=="Granted   "){
        var days_balance = (this.leave.find(c=>c.leaveid == this.empleav[i].leaveid));
        var result = days_balance.maximumLeavesAllowed - this.empleav[i].diff;
        days_balance.maximumLeavesAllowed =  result;
        console.log(days_balance);
     }
    }
  }
}
