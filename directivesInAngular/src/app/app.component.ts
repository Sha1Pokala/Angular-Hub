import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directivesInAngular';
  show = true;

  students = ["Shashank", "Aarav", "Priya", "Nisha", "Rohan"];

  studentData = [
    {
      Name: 'anil',
      age: '35',
      email: 'anil@Test.com'
    },
    {
      Name: 'Shashank',
      age: '28',
      email: 'shashank@Test.com'
    },
    {
      Name: 'Priya',
      age: '25',
      email: 'priya@test.com'
    },
    {
      Name: 'Aarav',
      age: '32',
      email: 'aarav@test.com'
    },
    {
      Name: 'Nisha',
      age: '29',
      email: 'nisha@test.com'
    }
  ]

  show1 = true;

  login = true;




}

