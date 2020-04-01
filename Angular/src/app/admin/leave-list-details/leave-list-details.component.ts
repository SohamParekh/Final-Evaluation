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
  constructor(private service:DataService,private http:HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEmployeeLeaves().subscribe(
      empleave => {this.employeeLeave = empleave}
    );
  }
  updateEmployeeLeave(id){
    var url = 'http://localhost:65343/api';
    this.service.getEmployeeLeavesbyEmployeeId(id).subscribe(
      empleave => this.employeeLeave = empleave
    );

      var emp = this.employeeLeave.find(e => e.id === id);
      console.log(emp);
    //this.service.updateEmployeeLeave(id).subscribe();
    var data= this.http.put<EmployeeLeaveMapping>(url+`/EmployeeLeaveMappings/${id}`,emp);
    data.subscribe();
    window.location.reload();
    //alert(`Successfully Updated EmployeeLeave`);
    //this.route.navigateByUrl('/Admin/Employee/List');
  }
}
