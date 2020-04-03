import { Pipe, PipeTransform } from '@angular/core';
import { Leave } from './models/Leave';
import { DataService } from './admin/data.service';

@Pipe({
  name: 'leave'
})
export class LeavePipe implements PipeTransform {
  leave:Leave[]=[];

  transform(leave:Leave[],value:number, ...args: any): string {
    var name;
        for(var i=0;i<leave.length;i++)
        {
          if(leave[i].leaveid==value){
            name=leave[i].name;
          }
        }
        return name;
      }

}
