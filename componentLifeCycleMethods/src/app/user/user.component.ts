import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() counter = 0

  name = "anil"
  constructor() {
    console.log("constrcutor");

    this.name = "sid"
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.name = "Sam"
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

  ngOnChanges() {
    console.log("ngOnChanges")
  }

}
