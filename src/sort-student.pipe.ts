import { Pipe, PipeTransform } from '@angular/core';
import { StudentClass } from './types/student';

@Pipe({
  name: 'sortStudents',
  standalone:true
})
export class SortStudentsPipe implements PipeTransform {

  transform(list: StudentClass[], ...args: string[]): StudentClass[] {
    let orderedList = list;
    let order = args[0];
    if (!order) { return list; }
    for(let i = 0; i < orderedList.length; i++) {
      for(let j = 0; j < orderedList.length-1; j++) {
        if (order == 'asc')
        {
          if (orderedList[j].Surname.charCodeAt(0) > orderedList[j+1].Surname.charCodeAt(0)) {
            let temp = orderedList[j];
            orderedList[j] = orderedList[j+1];
            orderedList[j+1] = temp;
          }
        }
        if (order == 'dsc')
        {
          if (orderedList[j].Surname.charCodeAt(0) < orderedList[j+1].Surname.charCodeAt(0)) {
            let temp = orderedList[j];
            orderedList[j] = orderedList[j+1];
            orderedList[j+1] = temp;
          }
        }
      }
    }
    return orderedList;
  }

}