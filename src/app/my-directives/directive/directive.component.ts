import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  constructor(private _formBuilder: FormBuilder) { }

  myControl = new FormControl();
  options: string[] = JSON.parse(localStorage.getItem('names')) || [];
  nameOptions: Observable<string[]>;
  text: string;


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

  setData() {
    if (this.text != null) {
   this.options.push(this.text);
   const newArray = [...new Set(this.options)];
   this.options = [...newArray];
  localStorage.setItem('names', JSON.stringify(newArray));
    } else {
      console.log('введите значение в поле!')
    }
  }

  getData(key:string) {
      return JSON.parse(localStorage.getItem('options'));
}
}
