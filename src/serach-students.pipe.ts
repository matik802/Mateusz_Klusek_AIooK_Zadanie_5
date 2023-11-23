import { Pipe, PipeTransform } from '@angular/core';
import { StudentClass } from './types/student';

@Pipe({
  name: 'searchStudents',
  standalone:true
})
export class SerachStudentsPipe implements PipeTransform {

  transform(list: StudentClass[], ...args: string[]): StudentClass[] {
    let searchBy = args[0];
    let criteria=args[1];
    console.log('criteria',criteria)
    if(criteria==undefined) criteria='surname';
    searchBy=searchBy.toLowerCase();
    if (!searchBy) { return list; }
    const filteredList = list.filter(el => {
      console.log('filter', searchBy, list, el);
      if(criteria=='name'){
      if (el.Name.toLowerCase().includes(searchBy)) { return el; }
      }
      else if(criteria=='surname'){
        if (el.Surname.toLowerCase().includes(searchBy)) { return el; }
      }
      return null;
    });
    
    return filteredList;
  }

}