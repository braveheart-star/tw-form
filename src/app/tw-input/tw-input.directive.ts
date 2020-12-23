import { Directive, ElementRef, Input } from '@angular/core';
import { ControlContainer, NgControl } from '@angular/forms';

@Directive({
  selector: '[twInput]',
  host: {
    class: 'block w-full appearance-none focus:outline-none bg-transparent',
  },
})
export class TwInputDirective {
  @Input('formControlName') formControlName: string;
  invalid = this.control.invalid;
  private valSubscription;
  constructor(private control: NgControl) {}

  ngOnInit() {
    this.invalid = this.control.invalid;
    this.valSubscription = this.control.valueChanges.subscribe(() => {
      this.invalid = this.control.invalid;
      console.log(this.invalid);
    });
  }

  ngOnDestory(){
    this.valSubscription.unsubscribe()
  }
}
