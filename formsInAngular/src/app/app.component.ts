import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formsInAngular';
  name = new FormControl('Abil');
  password = new FormControl(123);

  displayValue() {
    console.log(this.name.value, this.password.value)
  }

  setValues() {
    this.name.setValue('Peter');
    this.password.setValue(123456);
  }

}
