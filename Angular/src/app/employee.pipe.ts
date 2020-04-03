import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './models/Employee';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  employee:Employee[]=[];

  transform(emp:Employee[],value:number, ...args: any): string {
    var name;
        for(var i=0;i<emp.length;i++)
        {
          if(emp[i].employeeid==value){
            name=emp[i].name;
          }
        }
        return name;
      }

}
