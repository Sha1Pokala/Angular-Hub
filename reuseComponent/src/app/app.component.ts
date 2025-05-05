import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reuseComponent';

  users = ['Shashank', 'Aarav', 'Priya', 'Rohan', 'Nisha'];


  @Input() user: string = ''
}
