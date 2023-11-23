import { Pipe, PipeTransform } from '@angular/core';
import { StudentClass } from './types/student';

@Pipe({
  name: 'sortStudents',
  standalone: true
})
export class SortStudentsPipe implements PipeTransform {

  transform(list: StudentClass[], ...args: string[]): StudentClass[] {
    //let order = args[0];
    //if (!order) { return list; }


    // let criteria=args[1];
    // console.log('criteria',criteria)
    // if(criteria==undefined) criteria='surname';
    //searchBy=searchBy.toLowerCase();
    
    // const filteredList = list.filter(el => {
    //   console.log('filter', searchBy, list, el);
    //   if(criteria=='name'){
    //   if (el.Name.toLowerCase().includes(searchBy)) { return el; }
    //   }
    //   else if(criteria=='surname'){
    //     if (el.Surname.toLowerCase().includes(searchBy)) { return el; }
    //   }
    //   return null;
    // });
    //const filteredList = list.filter(el => {
      for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length-1; j++) {
          if (list[j].Surname.charCodeAt(0) > list[j+1].Surname.charCodeAt(0)) {
            let temp = list[j];
            list[j+1] = list[j];
            list[j+1] = temp;
          }
        }
      }
    //});
    return list;
  }

}
