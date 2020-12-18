import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[twStrokedButton]',
  host: {
    class: 'px-5 py-2 rounded border text-sm',
  },
})
export class TwStrokedButtonDirective {

  @HostBinding('class') className = 'bg-gray-500';

  @Input('color') color: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.color) {
      case 'primary':
        this.className = 'text-blue-500 ';
        break;

      case 'accent':
        this.className = 'text-pink-500';
        break;

      case 'warn':
        this.className = 'text-red-500'
        break;

      case 'disabled':
        this.className = 'text-gray-500'
        break;
      default:
        this.className = 'text-gray-600 bg-white'
    }
  }
}
