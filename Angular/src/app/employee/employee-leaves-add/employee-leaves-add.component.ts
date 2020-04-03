import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveMapping } from 'src/app/models/EmployeeLeaveMapping';
import { Leave } from 'src/app/models/Leave';
import { DataService } from 'src/app/admin/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee-leaves-add',
  templateUrl: './employee-leaves-add.component.html',
  styleUrls: ['./employee-leaves-add.component.css']
})
export class EmployeeLeavesAddComponent implements OnInit {
  ID: number;

  leave:Leave[];
  empleave:EmployeeLeaveMapping = {
    id:0,
    employeeid:0,
    leaveid:null,
    leaveStartDate:null,
    leaveEndDate:null,
    status:'Pending'
  }
  constructor(private service:DataService,private activatedRoute: ActivatedRoute,private http:HttpClient,
              private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.ID = +params.get('id');
        this.empleave.employeeid = this.ID;
      }
    );
    this.service.getLeaves().subscribe(
      leave => this.leave = leave
    );
   // console.log(this.ID);

  }


  save(){
    //this.empleave.leaveid = parseInt(this.empleave.leaveid);
    var data= this.http.post('http://localhost:65343/api/EmployeeLeaveMappings',JSON.stringify(this.empleave), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    data.subscribe();
    alert(`Successfully Added Leave`);
    this.route.navigateByUrl('/Employee/LeaveList/'+this.ID);
  }

}
