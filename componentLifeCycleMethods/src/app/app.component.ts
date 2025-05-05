import { afterRender, Component, ViewChild, viewChild } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UserComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentLifeCycleMethods';

  @ViewChild('user') UserComponent: any;
  counter = 0;

  constructor() {
    afterRender(() => {
      console.log("afterRender", this.UserComponent.counter);

    })
  }
  updateCounter() {
    this.counter++
  }
}
