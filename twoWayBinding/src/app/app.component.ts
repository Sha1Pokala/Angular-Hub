import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twoWayBinding';
  name = 'anil'
  name1 = 'anil'

  changeName(event: Event) {
    const val = (event.target as HTMLInputElement).value
    this.name1 = val;

  }

}
