import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TwLabelDirective } from './tw-label/tw-label.directive';
import { TwInputDirective } from './tw-input/tw-input.directive';
import { TwButtonDirective } from './tw-button/tw-button.directive';
import { TwRaisedButtonDirective } from './tw-raised-button/tw-raised-button.directive';
import { TwStrokedButtonDirective } from './tw-stroked/tw-stroked-button.directive';
import { TwFlatButtonDirective } from './tw-flat/tw-flat.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    TwLabelDirective,
    TwInputDirective,
    TwButtonDirective,
    TwRaisedButtonDirective,
    TwStrokedButtonDirective,
    TwFlatButtonDirective
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
