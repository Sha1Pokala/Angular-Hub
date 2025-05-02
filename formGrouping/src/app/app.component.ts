import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formGrouping';

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
    ]),

  })

  get name() {
    return this.profileForm.get('name')
  }

  get password() {
    return this.profileForm.get('password')
  }

  get email() {
    return this.profileForm.get('email')
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  setValue() {
    this.profileForm.setValue({
      name: 'Shashank',
      password: '123456',
      email: 'shashank@test.com',
    })
  }
}
