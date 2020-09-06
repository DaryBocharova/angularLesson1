import {
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHints]'
})
export class HintsDirective {

  @HostListener('keydown.enter')
  save(event) {
    this.setData(event);
    console.log("You entered: ", event.target.value);
  }

  @HostBinding('keydown.enter')
  get(event) {
   return this.getData(event);
    console.log(event);
  }
  
  constructor() { }

  private setData(names:any) {
    try {
    localStorage.setItem('names', JSON.stringify(names));
    } catch (e) {
      console.log('Error saving to localStorage', e);
      return null;
    }
}

  private getData(key:string) {
    try {
    return JSON.parse(localStorage.getItem(key));
    } catch (e) {
    console.log('Error getting data from localStorage', e);
    return null;
    }
}
}
