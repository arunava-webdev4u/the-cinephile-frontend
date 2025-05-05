import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }

  searchMovies(query:String) {
    return this.http.get("http://localhost:3000/api/v1/movies/search?query=" + query)
  }
}
// https://image.tmdb.org/t/p/original/e0PVYBaGdKLtvyIp2uEUzT1JUO7.jpg