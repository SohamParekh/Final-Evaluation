import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Leave } from 'src/app/models/Leave';
@Component({
  selector: 'app-leave-add',
  templateUrl: './leave-add.component.html',
  styleUrls: ['./leave-add.component.css']
})
export class LeaveAddComponent implements OnInit {
  leave:Leave = {
    leaveid: 0 ,
    name: null,
    maximumLeavesAllowed: null
  };
  constructor(public service:DataService,private activatedRoute: ActivatedRoute,private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  saveLeave(){
    var data= this.http.post<Leave>('http://localhost:65343/api/Leaves',this.leave, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    data.subscribe();
    alert(`Successfully Added Leave ${this.leave.name}`);
    this.route.navigateByUrl('/Admin/leave/List');
  }

}
