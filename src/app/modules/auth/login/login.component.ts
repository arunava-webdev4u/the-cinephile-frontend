import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface LoginInterface {
  user: {
    email: string;
    password: string;
  }
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService)
  currentAuthStatus = this.authService.authTokenSignal();
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });

    // if (!this.currentAuthStatus) {
    //   console.log('No user is currently logged in.');
    // }
  }

  onSubmit() {
    const user:LoginInterface = { user: { ...this.loginForm.value } }
    this.authService.login(user)
  }
}
