import {
  Component,
  ContentChild,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { TwInputDirective } from '../tw-input/tw-input.directive';
@Component({
  selector: 'tw-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.tw-input-error]': 'formFieldControl.invalid',
  },
})

export class FormFieldComponent implements OnInit {
  constructor() { }
  @ContentChild(TwInputDirective) formFieldControl;

  ngOnInit(): void {
    // console.log(this._formFieldControl)
  }

  ngAfterViewInit(): void {
    console.log('after view init', this.formFieldControl);
  }
}
