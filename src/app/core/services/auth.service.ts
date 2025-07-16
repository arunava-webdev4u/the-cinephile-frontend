import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// interface UserInterface {
//   token: string;
//   user: {
//     id: number;
//     email: string;
//     password_digest: string;
//     created_at: string;
//     updated_at: string;
//     first_name: string;
//     last_name: string;
//     date_of_birth: string;
//     country: number;
//     jti: string;
//   }
// }

export class AuthService {
  private apiUrl = "http://localhost:3000/api/v1/auth";
  // currentUserSignal = signal<UserInterface | undefined | null>(undefined);
  currentUserSignal = signal(undefined);
  http = inject(HttpClient)
  

  constructor() {
    // this.checkAuthStatus();
  }

  login(loginCredentials) {
    return this.http.post(`${this.apiUrl}/login`, loginCredentials).subscribe((response) => {
      console.log("Login successful");
      console.log(response);
    })
  }
}
