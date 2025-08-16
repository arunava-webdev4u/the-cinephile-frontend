import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private BASE_URL = "http://localhost:3000/api/v1/search";
  private token = this.authService.authTokenSignal();

  // constructor() {}

  // http://localhost:3000/api/v1/search/name?type=movie&query=Avengers+Endgame
  // http://localhost:3000/api/v1/search/name?type=tv&query=Daredevil
  // http://localhost:3000/api/v1/search?type=people&query=tom+cruise
  searchMedia(query: string, type: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(`${this.BASE_URL}/name?type=${type}&query=${encodeURIComponent(query)}`, { headers })
  }

  // showMedia(id:number, type:string) {
  searchMediaById(id: string, type: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(`${this.BASE_URL}/id?type=${type}&tmdb_id=${id}`, { headers })
  }
}
