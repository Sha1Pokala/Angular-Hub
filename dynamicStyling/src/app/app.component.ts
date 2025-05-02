import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamicStyling';

  bgcolor = 'green'
  fontSize = '30px'
  fontsize1 = '20'
  bgcolor1 = 'orange'
  bgcolor2 = 'green'
  fontsize2 = '80'
  headingSizeBig = '80px'
  headingSizeSmall = '30px'
  zoom = false

  zoom1 = false

  updateHeadingSize() {
    this.zoom1 = !this.zoom1
  }
}
