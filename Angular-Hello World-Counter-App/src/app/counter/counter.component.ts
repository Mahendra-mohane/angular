import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  title = 'Counter App';
  counter = 0;
  incFn() {
    this.counter = this.counter + 1;
  }

  decFn() {
    this.counter = this.counter - 1;
  }
}
