import {
  Directive,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHints]'
})
export class HintsDirective {
 @Input() fontWeight: string;

 
  constructor() { }


@HostBinding("style.fontWeight") get getFontWeight(){
         
  return this.fontWeight;
}

@HostBinding("style.cursor") get getCursor(){
  return "pointer";
}

@HostListener("mouseenter") onMouseEnter() {
  this.fontWeight ="bold";
}

@HostListener("mouseleave") onMouseLeave() {
  this.fontWeight = "normal";
}
}
