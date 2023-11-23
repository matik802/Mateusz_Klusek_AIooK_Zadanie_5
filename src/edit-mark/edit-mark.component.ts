import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-mark',
  templateUrl: './edit-mark.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./edit-mark.component.css'],
})
export class EditMarkComponent implements OnInit {
  @Input() set mark4edit(mark4editZm: number) {
    this._mark4edit = mark4editZm;
    this.newMark = mark4editZm;
  }
  get mark4edit(): number {
    return this._mark4edit;
  }
  private _mark4edit: number = 0;
  newMark: number=0;
  @Output() changeMarkInParentAdd = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  changeValue(){
    console.log('edit', this.newMark)
    this.changeMarkInParentAdd.emit(this.newMark);
  }
}
