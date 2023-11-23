import { Injectable } from '@angular/core';
import { StudentClass } from './types/student';

@Injectable()
export class StudentsService {
  students:StudentClass[]=[];

  constructor() { 
    this.students[0]=new StudentClass("Ola","Makota",123485,new Date("2000-01-21"));
    this.students[0].adres="rondo Czterech Pancernych 4/1, Białystok";
    this.students[0].grupa="Grupa 3";
    this.students[0].stypendium=1234.99;
    this.students[1]=new StudentClass("Jan","Kowlaski",2345,new Date("1999-10-23"));
    this.students.push(new StudentClass("Adrian","Duda",156789,new Date("2001-04-01")));
    this.students[2].marks=[2,3,3.5,4,3.5]
  }


  getStudents():StudentClass[]{
    return this.students;
  }

  getStudent(which: number):StudentClass{
    console.log('get student service',this.students);
    return this.students[which];
}

}