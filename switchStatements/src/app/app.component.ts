import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'switchStatements';
  color = 'green'

  handleColor(val: string) {
    this.color = val
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value

  }

}
