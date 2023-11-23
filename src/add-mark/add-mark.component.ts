import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  imports:[CommonModule,FormsModule, ReactiveFormsModule],
  standalone:true,
  styleUrls: ['./add-mark.component.css']
})
export class AddMarkComponent implements OnInit {
  newMark:number=3.0;
  @Output() addMarkInParentAdd=new EventEmitter<number>();
  newMarkInput:FormControl;

  constructor() { 
      this.newMarkInput=new FormControl(3,[Validators.required,Validators.min(2)]);
  }

  ngOnInit() {
  }

  add(){
    this.newMark=this.newMarkInput.value;
    this.addMarkInParentAdd.emit(this.newMark);
  }

}