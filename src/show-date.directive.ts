import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowDate]',
  standalone:true
})
export class ShowDateDirective implements AfterViewInit{
  @Input() inputDate: string='';
  @Input() title:string='Data: ';
  @Input() sep='*';
  @Input() color: string='blue';
  @Input() font: string='courier';
  oldColor = '';
  oldFont = '';

  constructor(private element: ElementRef) { }

ngAfterViewInit(): void {
  
  const elDate: string[] = this.inputDate.split('.');
  let outDate = '';
  elDate.forEach((el, index) => 
         index < (elDate.length - 1) ? outDate += el + this.sep : outDate += el);
  this.element.nativeElement.innerText =  this.title+outDate;
}

changeLook(old: boolean): void {
  if (!old) {
    this.oldColor = this.element.nativeElement.style.color;
    this.oldFont = this.element.nativeElement.style.fontFamily;
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontFamily = this.font;
  } else {
    this.element.nativeElement.style.color = this.oldColor;
    this.element.nativeElement.style.fontFamily = this.oldFont;
  }
}

@HostListener('mouseenter') onMouseEnter() {
  this.changeLook(false);
}

@HostListener('mouseleave') onMouseleave() {
  this.changeLook(true);
}

}