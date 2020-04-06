import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../admin/data.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  ID: number;
  employee:Employee;
  constructor() { }

  ngOnInit(): void {

  }

}
