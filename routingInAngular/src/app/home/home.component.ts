import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users = [
    {
      id: '1',
      fullname: 'Shashank Pokala',
      age: 28,
      email: 'shashank1@test.com'
    },
    {
      id: '2',
      fullname: 'Aarav Sharma',
      age: 28,
      email: 'aarav.sharma@test.com'
    },
    {
      id: '3',
      fullname: 'Priya Desai',
      age: 28,
      email: 'priya.desai@test.com'
    },
    {
      id: '4',
      fullname: 'Rohan Gupta',
      age: 28,
      email: 'rohan.gupta@test.com'
    }
  ]
}
