import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2
} from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Directive({
  selector: '[appHints]'
})
export class HintsDirective {

  myControl = new FormControl();
  nameOptions: Observable<string[]>;
  options: string[] = JSON.parse(localStorage.getItem('names')) || [];
  text: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) {  }
  
  @HostListener('keydown.enter', ['$event.target.value']) onEnter(value: any): void {
    this.options.push(value);
    localStorage.setItem('options', JSON.stringify(this.options));
  }

  ngOnInit(): void {
    this.nameOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterGroup(value))
    );
  }

  private _filterGroup(value: string): string[] {
  if (value) {
    return this.options.filter(
      (option) => option.toLowerCase().indexOf(value) === 0
    );
  }
  }
}
