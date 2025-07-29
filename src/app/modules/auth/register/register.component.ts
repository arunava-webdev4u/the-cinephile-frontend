import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../../core/services/auth.service';

interface RegisterInterface {
  user: {
    email: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    country: number;
    date_of_birth: string;
  }
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService)
  currentAuthStatus = this.authService.authTokenSignal();
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
      confirm_password: new FormControl(""),
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      country: new FormControl(null),
      date_of_birth: new FormControl(null),
    });

    if (!this.currentAuthStatus) {
      console.log('No user is currently logged in.');
    }
  }

  onSubmit() {
    console.log('Register form submitted');
    const user:RegisterInterface = { user: { ...this.registerForm.value } }
    this.authService.register(user)
  }
}
