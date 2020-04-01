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
  constructor(private activatedRoute: ActivatedRoute,private route:Router,private service:DataService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.ID = +params.get('id');
        this.getEmployee(this.ID);
      }
    );
  }
  getEmployee(id: any) {
    this.service.getEmployeesbyId(id).subscribe(
      (employee: Employee) => {this.employee = employee},
    );
  }
}
