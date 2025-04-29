import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signalsInAngular';
  count = signal(20);
  x = 30;

  constructor() {
    effect(() => {
      console.log(this.x);


    })
  }
  updateValue(val: string) {
    //this.x = 40

    if (val == 'inc') {

      this.count.set(this.count() + 1)
    }

    else {
      this.count.set(this.count() - 1)
    }

  }
}
