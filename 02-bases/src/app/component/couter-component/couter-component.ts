import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-couter-component',
  imports: [],
  templateUrl: './couter-component.html',
  styleUrl: './couter-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CouterComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.counterSignal.update((current) => current + 1);
    }, 2000);
  }
  
  increseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
