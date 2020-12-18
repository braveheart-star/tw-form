import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[twButton]',
  host: {
    class: 'px-5 py-2 rounded text-sm',
  },
})
export class TwButtonDirective {
  @HostBinding('class') className = 'text-gray-700 hover:bg-gray-100';
  @Input('color') color: string;
  constructor() {
  }

  ngOnInit() {
    switch (this.color) {
      case 'primary':
        this.className = 'text-blue-700 hover:bg-blue-100';
        break;

      case 'accent':
        this.className = 'text-pink-700 hover:bg-pink-100';
        break;

      case 'warn':
        this.className = 'text-red-700 hover:bg-red-100'
        break;

      case 'disabled':
        this.className = 'text-gray-400'
        break;
      default:
        this.className = 'text-gray-700 hover:bg-gray-100'

    }
  }
}
