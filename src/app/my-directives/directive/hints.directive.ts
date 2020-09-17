import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appHints]',
})
export class HintsDirective {
  myControl = new FormControl();
  nameOptions: Observable<string[]>;
  text: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {}

  @HostListener('keydown.enter', ['$event.target.value']) onEnter(
    value: any
  ): void {
    let options = JSON.parse(localStorage.getItem('names')) || [];
    options.push(value);
    localStorage.setItem('options', JSON.stringify(options));
  }
}
