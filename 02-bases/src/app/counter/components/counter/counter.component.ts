import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">RESET</button>
  <button (click)="decreaseBy(1)">-1</button>
  `
})

export class CounterComponent {
  counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }
  reset():void{
    this.counter = 10;
  }
  decreaseBy(value:number):void{
    this.counter -= value;
  }
}
