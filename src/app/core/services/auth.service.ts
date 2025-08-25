import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../shared/interfaces/user';

import { Login } from '../../shared/interfaces/login';
import { Register } from '../../shared/interfaces/register';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  private platformId = inject(PLATFORM_ID);


  private baseUrl = `${environment.apiUrl}/auth`;
  authTokenSignal = signal<string | undefined | null>(undefined);
  
  constructor() {
    this.initAuth();
  }

  login(loginCredentials:Login) {
    return this.http.post<User>(`${this.baseUrl}/login`, loginCredentials).subscribe({
      next: (response) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response['token']);
          this.authTokenSignal.set(localStorage.getItem('token'));
          this.router.navigate(['/']);
          // console.info('Login successful');
        }
      },
      error: (err) => {
        if (err.status === 401 || err.status === 404) {
          console.error('Invalid email or password', err);
        } else {
          console.error('Something went wrong. Please try again later.', err);
        }
      }
    })
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      this.authTokenSignal.set(null);
      localStorage.removeItem('token');
      this.router.navigate(['/']);
      // console.info('Logged out successfully');
    }
  }

  verify_email(otp:any) {
    const email: string|null = sessionStorage.getItem("email");
    const code: string = otp.otp

    const payload = { email: email, otp: code }
    
    return this.http.post<User>(`${this.baseUrl}/verify_email`, payload).subscribe({
      next: (response) => {
        sessionStorage.removeItem("email");
        localStorage.setItem('token', response['token']);
        this.authTokenSignal.set(localStorage.getItem('token'));
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Something went wrong. Please try again later.', err);
      }
    })
  }

  register(registrationData:Register) {
    return this.http.post<any>(`${this.baseUrl}/register`, registrationData).subscribe({
      next: (response) => {
        if (isPlatformBrowser(this.platformId)) {
          // localStorage.setItem('token', response['token']);
          // this.authTokenSignal.set(localStorage.getItem('token'));
          console.log(response)
          sessionStorage.setItem("email", registrationData.user.email)
          this.router.navigate(['/auth/verify-email']);
        }
      },
      error: (err) => {
        if (err.status == 400) {
          console.error('Registration failed. Please check your input.', err);
        } else {
          console.error('Something went wrong. Please try again later.', err);
        }
      }
    })
  }

  private initAuth() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token')
      if (token) {
        this.authTokenSignal.set(token)
      } else {
        this.authTokenSignal.set(null)
      }
    }
  }
}
