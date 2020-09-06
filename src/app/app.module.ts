import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HintsDirective } from './my-directives/directive/hints.directive';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DirectiveComponent } from './my-directives/directive/directive.component';
import { MatFormField } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    HintsDirective,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  exports:[,
    MatFormField],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
