import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showIndex',
  standalone:true
})
export class ShowIndexPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let valueStr:string=value.toString();
    return valueStr;
  }

}