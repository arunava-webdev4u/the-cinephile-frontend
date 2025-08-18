import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  http: HttpClient;
  baseUrl = `${environment.apiUrl}`

  constructor() {
    this.http = inject(HttpClient);
  }

  searchMovies(query:String) {
    return this.http.get(`${this.baseUrl}/movies/search?query=` + query)
  }
}
// https://image.tmdb.org/t/p/original/e0PVYBaGdKLtvyIp2uEUzT1JUO7.jpg