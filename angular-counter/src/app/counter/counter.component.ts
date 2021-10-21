import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() count = 0;

  onIncrement() {
    this.count += 1;
  }
  onDecrement() {
    this.count -= 1;
  }
}
