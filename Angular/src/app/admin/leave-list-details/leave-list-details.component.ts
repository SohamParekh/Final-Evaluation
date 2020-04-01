import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveMapping } from 'src/app/models/EmployeeLeaveMapping';
import { DataService } from '../data.service';
import { Employee } from 'src/app/models/Employee';
import { Leave } from 'src/app/models/Leave';

@Component({
  selector: 'app-leave-list-details',
  templateUrl: './leave-list-details.component.html',
  styleUrls: ['./leave-list-details.component.css']
})
export class LeaveListDetailsComponent implements OnInit {
  employeeLeave:EmployeeLeaveMapping[];
  Employee:Employee[];
  Leave:Leave[];
  ID:number;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getEmployeeLeaves().subscribe(
      empleave => {this.employeeLeave = empleave}
    );
    console.log(this.employeeLeave);

  }

}
