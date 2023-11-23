import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { SerachStudentsPipe } from '../serach-students.pipe';
import { AddMark, StudentComponent } from '../student/student.component';
import { StudentsService } from '../students.service';
import { StudentClass } from '../types/student';
import { SortStudentsPipe } from "../sort-student.pipe";

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    standalone: true,
    providers: [StudentsService],
    styleUrls: ['./students.component.css'],
    imports: [StudentComponent, CommonModule, SerachStudentsPipe, FormsModule, EditStudentComponent, RouterModule, SortStudentsPipe]
})
export class StudentsComponent implements OnInit {

  students:StudentClass[]=[];
  searchValue:string='';
  sortValue:string='';
  ktoryStudentDoEdycji=-1;
  constructor(private studentsService:StudentsService) { }

  ngOnInit() {
    console.log("Students");
    // this.students[0]=new StudentClass("Ala","Makota",123485,new Date("2000-01-21"));
    // this.students[0].adres="rondo Czterech Pancernych 4/1, Białystok";
    // this.students[0].grupa="Grupa 3";
    // this.students[0].stypendium=1234.99;
    // this.students[1]=new StudentClass("Jan","Kowlaski",2345,new Date("1999-10-23"));
    // this.students.push(new StudentClass("Adrian","Duda",156789,new Date("2001-04-01")));
    // this.students[2].marks=[2,3,3.5,4,3.5]
    this.students=this.studentsService.getStudents();
  }

  addMark(markData:AddMark){
    this.students[markData.whichStudent].addMark(markData.mark);
  }

  doEditMark(data:{whichStudent:number,whichMark:number,mark:number}){
    console.log("students")
    this.students[data.whichStudent].marks[data.whichMark]=data.mark;
    console.log(this.students);
  }

  doEditStudent(data:{student:StudentClass, ktory:number}){
    this.students[data.ktory]=data.student;
    console.log("after edit",this.students);
    this.ktoryStudentDoEdycji=-1;
  }

}