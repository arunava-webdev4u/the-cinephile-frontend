import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient)

  getUsers() {
    return this.http.get("http://localhost:3000/api/v1/users")
  }
}
