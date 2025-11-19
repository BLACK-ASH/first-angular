import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit() {
    console.log(this.loginForm.value);
    alert(
      `First Name: ${this.loginForm.value.firstName}\nLast Name: ${this.loginForm.value.lastName}\nEmail: ${this.loginForm.value.email}\nPassword: ${this.loginForm.value.password}`
    )
  }
}
