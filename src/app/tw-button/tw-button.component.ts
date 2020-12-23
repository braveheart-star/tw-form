import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = [
  'tw-button',
  'tw-flatButton',
  'tw-strokedButton',
  'tw-raisedButton',
];

@Component({
  selector: 'button[tw-button], button[tw-flatButton], button[tw-strokedButton], button[tw-raisedButton]',
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
export class TwButtonComponent {

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
