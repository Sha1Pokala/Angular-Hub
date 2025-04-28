import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practise';
  name = '';
  email = "";
  displayName = '';

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;

    //this.name=val;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = "Sam"
  }

  getEmail(val: string) {
    console.log(val);
    this.email = val;
  }
  setEmail() {
    this.email = "shashank@TestBed.com";
  }
}
