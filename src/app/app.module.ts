import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TwLabelDirective } from './tw-label/tw-label.directive';
import { TwInputDirective } from './tw-input/tw-input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    TwLabelDirective,
    TwInputDirective,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
