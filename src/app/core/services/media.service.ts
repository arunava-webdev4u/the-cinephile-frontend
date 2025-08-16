import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  // http://localhost:3000/api/v1/search/name?type=movie&query=Avengers+Endgame
  // http://localhost:3000/api/v1/search/name?type=tv&query=Daredevil
  // http://localhost:3000/api/v1/search?type=people&query=tom+cruise
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private BASE_URL = "http://localhost:3000/api/v1/search/name";
  private token = this.authService.authTokenSignal();

  // constructor() {}

  searchMedia(query: string, type: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(`${this.BASE_URL}?type=${type}&query=${encodeURIComponent(query)}`, { headers })
  }

  // showMedia(id:number, type:string) {
  showMedia() {
    
  }
}
