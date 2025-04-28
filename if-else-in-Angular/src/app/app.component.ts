import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'if-else-in-Angular';

  display = true;
  x = 10;
  togglediv = true;


  hide() {

    this.display = false
  }

  show() {

    this.display = true;
  }

  toggle() {

    this.display = !this.display;

  }

  toggleTwo() {
    this.togglediv = !this.togglediv
  }
}
