import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient)
  baseUrl = `${environment.apiUrl}`
  
  getUsers() {
    return this.http.get(`${this.baseUrl}/users`)
  }
}
