import { Component } from "@angular/core";

 @Component({
  selector: 'app-counter',
  template: `
    <p>Contador: {{ counter }}</p>

    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="decreaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `,
 })

 export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  decreaseBy( value: number ): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
 }
