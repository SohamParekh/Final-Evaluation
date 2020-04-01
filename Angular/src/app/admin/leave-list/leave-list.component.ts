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
}
