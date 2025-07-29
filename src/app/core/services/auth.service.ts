import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface UserInterface {
  token: string;
  user: {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    country: number;
    jti: string;
  }
}

interface LoginInterface {
  user: {
    email: string;
    password: string;
  }
}

interface RegisterInterface {}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  http = inject(HttpClient)
  router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  private apiUrl = "http://localhost:3000/api/v1/auth";
  authTokenSignal  = signal<string | undefined | null>(undefined);
  
  constructor() {
    this.initAuth();
  }

  login(loginCredentials:LoginInterface) {
    return this.http.post<UserInterface>(`${this.apiUrl}/login`, loginCredentials).subscribe({
      next: (response) => {
        if (isPlatformBrowser(this.platformId)) {
          console.log('Login successful');
          localStorage.setItem('token', response['token']);
          this.authTokenSignal.set(localStorage.getItem('token'));
          this.router.navigate(['/']);
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

  // logout() {}
  // register() {}
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
