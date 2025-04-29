import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'computedSignals';
  x = signal(10);
  y = signal(20);

  z = computed(() => this.x() + this.y());

  showValue() {
    console.log(this.z());
    //this.x = 100; //even after x is updated here there will be no update in Z beacuse operation has already been performed. 
    this.x.set(100)
    console.log(this.z());
  }

  updateX() {
    this.x.set(200) // if you see once we change the value of X is changed Z has also been changed.
    // So bacially we direclty change the value of computed Signals but any dependencies on those will change the value. 
  }


}
