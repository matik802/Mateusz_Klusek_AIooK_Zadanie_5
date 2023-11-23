import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddMarkComponent } from '../add-mark/add-mark.component';
import { EditMarkComponent } from '../edit-mark/edit-mark.component';
import { ShowDateDirective } from '../show-date.directive';
import { ShowIndexPipe } from '../show-index.pipe';
import { StudentClass } from '../types/student';

export type AddMark={
  whichStudent:number;
  mark:number;
}
@Component({
  selector: 'print-student',
  templateUrl: './student.component.html',
  standalone:true,
  imports:[CommonModule,AddMarkComponent,FormsModule,EditMarkComponent,ShowDateDirective,ShowIndexPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() studentForPrint!:StudentClass;
  @Input() isOdd:boolean=false;
  @Input() title:string='';
  @Input() which:number=-1;
  clicked: number=-1;
  @Output() addMarkInParent=new EventEmitter<AddMark>();
  @Output() editMarkInParent=new EventEmitter<{whichStudent:number,whichMark:number,mark:number}>();

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  addMark(mark:number){
    this.addMarkInParent.emit({whichStudent:this.which,mark:mark});
  }

  editMark(mark:number){
    console.log('edit student',mark,this.which,this.clicked)
    this.editMarkInParent.emit({whichStudent:this.which,whichMark:this.clicked,mark:mark});
    this.clicked=-1;
  }
  

  formatDate():string{
    return this.studentForPrint.dataUrodzenia.toLocaleDateString();
  }
  
  
}