import { Employee } from './Employee';

export interface EmployeeLeaveMapping{
  id: number;
  employeeid: number;
  leaveid: number;
  leaveStartDate:string;
  leaveEndDate:string;
  status:string;
  diff:number;
  employee:Employee;
}
