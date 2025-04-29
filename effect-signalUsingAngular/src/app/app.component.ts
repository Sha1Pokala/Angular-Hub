import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'effect-signalUsingAngular';

  userName = signal('Anil');
  count = signal(0);
  displayHeading = false;


  constructor() {
    effect(() => {

      if (this.count() == 2) {
        this.displayHeading = true
        setTimeout(() => {
          this.displayHeading = false
        }, 2000)
      } else {
        this.displayHeading = false
      }
    })
  }
  toggleValue() {
    this.count.set(this.count() + 1)
  }

}
