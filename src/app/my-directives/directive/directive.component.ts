import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  myControl = new FormControl();
 get options():string[] {
      return JSON.parse(localStorage.getItem('options')) || [];
}
}
