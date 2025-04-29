import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forLoopinAngular';


  users = ["shashank", "likhita", "Peter", "Bruce", "Tony"];

  students = [
    { fullName: 'Shashank Pokala', age: 25, email: 'shashank@Test.com' },
    { fullName: 'Likhita Pulijala', age: 26, email: 'likhita@Test.com' },
    { fullName: 'Sam gupta', age: 27, email: 'Sam@Test.com' },
    { fullName: 'Pandu reddy', age: 30, email: 'Pandu@Test.com' },
  ]

  getName(name: string) {
    console.log(name);
  }
}
