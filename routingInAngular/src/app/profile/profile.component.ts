import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName: string | null = " ";
  age: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userName = this.route.snapshot.params['name'];
    this.age = this.route.snapshot.params['age'];
    console.log(this.route);

  }
}
