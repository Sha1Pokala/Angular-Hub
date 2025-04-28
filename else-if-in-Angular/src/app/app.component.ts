import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'else-if-in-Angular';
  color = 5;

  handleColor(val: number) {
    this.color = val;

  }

  handleInput(event: Event) {

    this.color = parseInt((event.target as HTMLInputElement).value)
  }

}
