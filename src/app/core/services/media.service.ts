import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';
import { url } from 'inspector';

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

  searchMedia(query: string) {
  // searchMedia(type: string, query: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const type = "movie"
    const arr:any = []
    // console.log(type, query)
    return this.http.get(`${this.BASE_URL}?type=${type}&query=${encodeURIComponent(query)}`, { headers })
    // this.http.get(`${this.BASE_URL}?type=${type}&query=${encodeURIComponent(query)}`, { headers }).subscribe({
    //   next: (response: any) => {
    //     console.log('Search results:', response.result.results);
    //   },
    //   error: (error) => { 
    //     console.error('Error searching media:', error);
    //   },
    //   complete: () => {
    //     console.log('Search completed');
    //     console.log('Search results:', arr.results);
    //   }
    // });
  }
}
