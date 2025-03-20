import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <h3>Counter Signal: {{ counterSignal() }} </h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">RESET</button>
  <button (click)="decreaseBy(1)">-1</button>
  `,
})

export class CounterComponent {
  counter: number = 10;
  counterSignal = signal(10);

  constructor(){}

  increaseBy(value: number): void{
    this.counter += value;
    this.counterSignal.update( (current) => current + value);
  }
  reset():void{
    this.counter = 10;
    this.counterSignal.set(0);
  }
  decreaseBy(value:number):void{
    this.counter -= value;
  }
}
