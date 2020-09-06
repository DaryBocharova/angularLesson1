import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { HintsDirective } from './hints.directive';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';


@NgModule({
  declarations: [DirectiveComponent, HintsDirective],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports:[ MatAutocompleteModule,
    MatInputModule,
    DirectiveComponent,
    MatFormField
  ]
})
export class DirectiveModule { }
