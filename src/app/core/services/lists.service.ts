import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  http = inject(HttpClient)
  // constructor() { }
  getLists() {
    return this.http.get('http://localhost:3000/api/v1/lists?user_id=1')
  }
}
