import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Employee } from 'src/app/models/Employee';
import { DataService } from '../data.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[];
  p:number = 1;
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }


  filteredProducts: Employee[] = [];
  constructor(private route:Router,private service:DataService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      employees => {
        this.employees = employees,
        this.filteredProducts = this.employees
      }
    );
  }
  deleteEmployee(employee: Employee){
    if (confirm(`Are you sure, you want to delete the employee: ${employee.name} ?`))
    {
      this.service.deleteEmployee(employee.employeeid)
        .subscribe(
          () => this.getEmployeedata()
        );
    }
    window.location.reload();
  }
  getEmployeedata(){
    this.service.getEmployees().subscribe(
      data => this.employees = data
    );
  }
  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: Employee) =>
      employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


}
