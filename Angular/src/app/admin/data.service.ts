import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Employee } from '../models/Employee';
import { Leave } from '../models/Leave';
import { EmployeeLeaveMapping } from '../models/EmployeeLeaveMapping';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 private url = 'http://localhost:65343/api';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url+'/Employees')
      .pipe(
       // catchError(err => this.handleError(err))
      );
  }
  getEmployeesbyId(id: number): Observable<Employee> {
    if(id == 0){
      return of(this.initializeEmployee());
    }
    else{
      return this.http.get<Employee>(this.url+`/Employees/${id}`)
      .pipe(
        tap(data => console.log('getEmployeesbyId: ' + JSON.stringify(data))),
        //catchError(this.handleError)
      );
    }
}
private initializeEmployee(): Employee {
  return {
    employeeid:0,
    name: null,
    email:null,
    password:null,
    dob:null,
    doj:null,
    salary:null
  };
}
  getLeaves(): Observable<Leave[]> {
    return this.http.get<Leave[]>(this.url+'/Leaves')
      .pipe(
        //catchError(err => this.handleError(err))
      );
  }
  getEmployeeLeaves(): Observable<EmployeeLeaveMapping[]> {
    return this.http.get<EmployeeLeaveMapping[]>(this.url+'/EmployeeLeaveMappings')
      .pipe(
        catchError(err => this.handleError(err))
      );
  }
  getEmployeeLeavesbyEmployeeId(id:number): Observable<EmployeeLeaveMapping[]> {
    return this.http.get<EmployeeLeaveMapping[]>(this.url+'/EmployeeLeaveMappings')
      .pipe(
        //catchError(err => this.handleError(err))
      );
  }
  postEmployeeDetails(Employee:Employee): Observable<Employee>{
    return this.http.post<Employee>(this.url+'/Employees', Employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url+`/Employees/${employee.employeeid}`,employee , {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(
        tap(() => console.log('updateEmployee: ' + employee.employeeid)),
        map(() => employee),
       // catchError(this.handleError)
      );
  }
  deleteEmployee(id: number): Observable<{}> {
    return this.http.delete<Employee>(this.url+`/Employees/${id}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    })
  }
  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
