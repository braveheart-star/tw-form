import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TwLabelDirective } from './tw-label/tw-label.directive';
import { TwInputDirective } from './tw-input/tw-input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwButtonComponent } from './tw-button/tw-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    TwLabelDirective,
    TwInputDirective,
    TwButtonComponent,

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
