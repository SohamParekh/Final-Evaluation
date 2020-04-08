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
  employeeLeave:EmployeeLeaveMapping[]=[];
 // employeeleav:EmployeeLeaveMapping;
  Employee:Employee[]=[];
  leave:Leave[]=[];
  emp:Employee;
  ID:number;
  p:number = 1;
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.employeeLeave;
  }


  filteredProducts: EmployeeLeaveMapping[] = [];
  constructor(private service:DataService,private http:HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEmployeeLeaves().subscribe(
      empleave => {
        this.employeeLeave = empleave,
        this.filteredProducts = this.employeeLeave
        ,this.calculate_days()}
    );
    this.service.getLeaves().subscribe(
      leave => {
        this.leave = leave
      }
    );
    this.service.getEmployees().subscribe(
      emp => {this.Employee = emp
          //this.Employee.find(e => e.employeeid === this.employeeLeave.find(e => e.employeeid))
      }

    );
    //var e = this.Employee.find(e => e.employeeid === this.employeeLeave.employeeid);
  }
  performFilter(filterBy: string): EmployeeLeaveMapping[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employeeLeave.filter((employee: EmployeeLeaveMapping) =>
      employee.employeeid.toString().indexOf(filterBy) !== -1);
  }
  updateEmployeeLeave(id){
    var url = 'http://localhost:65343/api';
    this.service.getEmployeeLeaves().subscribe(
      empleave => this.employeeLeave = empleave
    );
      var emp = this.employeeLeave.find(e => e.id === id);
      this.emp = this.Employee.find(e => e.employeeid === emp.employeeid);
    var data= this.http.put<EmployeeLeaveMapping>(url+`/EmployeeLeaveMappings/${id}`,emp);
    data.subscribe();
    /*--By mistake status in database is of data type nchar(10) so it will take 10 spaces due to that there will be some gap after status is alert box --*/
    alert(`Leave Status changed to ${emp.status} for ${this.emp.name}`);
    window.location.reload();
  }
  calculate_days(){
    for(var i=0;i<this.employeeLeave.length;i++){
        var date1 = new Date(this.employeeLeave[i].leaveStartDate);
        var date2 = new Date(this.employeeLeave[i].leaveEndDate);
        var diffintime = date2.getTime()-date1.getTime();
        this.employeeLeave[i].diff = (diffintime/(1000 * 3600 * 24))+1;
      }
  }

}
