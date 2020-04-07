import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Leave } from 'src/app/models/Leave';
import { DataService } from '../data.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
  leave:Leave[];
  p:number = 1;
  constructor(private route:Router,private service:DataService) { }

  ngOnInit(): void {
    this.service.getLeaves().subscribe(
      leave => {
        this.leave = leave
      }
    );

  }
  add(){
    this.route.navigateByUrl("Admin/leave/Add");
  }
  deleteLeave(leave: Leave){
    if (confirm(`Are you sure, you want to delete : ${leave.name} ?`))
    {
      this.service.deleteLeave(leave.leaveid)
        .subscribe(
          () => this.getLeaveData()
        );
    }
    window.location.reload();
  }
  getLeaveData(){
    this.service.getLeaves().subscribe(
      data => this.leave = data
    );
  }
}
