import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[twFlatButton]',
  host: {
    class: 'px-5 py-2 rounded text-sm',
  },
})
export class TwFlatButtonDirective {

  @HostBinding('class') className = 'bg-gray-500';

  @Input('color') color: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.color) {
      case 'primary':
        this.className = 'text-white bg-blue-500';
        break;

      case 'accent':
        this.className = 'text-white bg-pink-500';
        break;

      case 'warn':
        this.className = 'text-white bg-red-500'
        break;

      case 'disabled':
        this.className = 'text-gray-400 bg-gray-200'
        break;
      default:
        this.className = 'text-gray-600 bg-white'
    }
  }
}
