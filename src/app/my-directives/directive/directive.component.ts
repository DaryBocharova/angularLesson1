import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  constructor() { }

  myControl = new FormControl();
  options: string[] = JSON.parse(localStorage.getItem('names'));
  text: string;


  setData() {
    if (this.text) {
   this.options.push(this.text);
   let newArray = [this.setData()];
  localStorage.setItem('names', JSON.stringify(newArray));
    } else {
      console.log('введите значение в поле!')
    }
  }


  getData(key:string) {
      return JSON.parse(localStorage.getItem('options'));
}

}
