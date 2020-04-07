import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../admin/data.service';
import { Employee } from '../models/Employee';
import { slideInAnimation } from '../app.animation';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [slideInAnimation]
})
export class EmployeeComponent implements OnInit {
  ID: number;
  employee:Employee;
  constructor() { }

  ngOnInit(): void {

  }

}
