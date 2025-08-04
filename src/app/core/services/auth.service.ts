import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../shared/interfaces/user';

import { Login } from '../../shared/interfaces/login';
import { Register } from '../../shared/interfaces/register';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  private apiUrl = "http://localhost:3000/api/v1/auth";
  authTokenSignal = signal<string | undefined | null>(undefined);
  
  constructor() {
    this.initAuth();
  }

  login(loginCredentials:Login) {
    return this.http.post<User>(`${this.apiUrl}/login`, loginCredentials).subscribe({
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

  register(registrationData:Register) {
    return this.http.post<User>(`${this.apiUrl}/register`, registrationData).subscribe({
      next: (response) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response['token']);
          this.authTokenSignal.set(localStorage.getItem('token'));
          this.router.navigate(['/']);
          // console.info('Registration successful');
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
