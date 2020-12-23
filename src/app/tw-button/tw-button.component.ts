import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = [
  'twButton',
  'twFlatButton',
  'twStrokedButton',
  'twRaisedButton',
];

@Component({
  selector: 'button[twButton], button[twFlatButton], button[twStrokedButton], button[twRaisedButton]',
  templateUrl: './tw-button.component.html',
  styleUrls: ['./tw-button.component.scss'],
  host: {
    '[attr.disabled]': 'disabled || null',
    class: 'px-5 py-2 rounded',
    '[class.tw-button-disabled]': 'disabled',
  },
  inputs: ['disabled', 'color'],
  encapsulation: ViewEncapsulation.None
})
export class TwButtonComponent{

  constructor(private _elementRef: ElementRef) {
    const hostElement = this._getHostElement() as HTMLElement
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        hostElement.classList.add(attr);
      }
    }

    hostElement.classList.add(hostElement.getAttribute('color'));
   }

   _getHostElement() {
    return this._elementRef.nativeElement;
  }

  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }
}
