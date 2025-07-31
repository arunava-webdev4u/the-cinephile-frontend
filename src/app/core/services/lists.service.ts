import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { List } from '../../shared/interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  http = inject(HttpClient)

  baseUrl = "http://localhost:3000/api/v1"
  token = localStorage.getItem('token');

  // constructor() { }

  getDefaultLists() {
    return this.getLists('default_list');
  }

  getCustomLists() {
    return this.getLists('custom_list');
  }

  // getLists() {
  getLists(type: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<List[]>(`${this.baseUrl}/${type}`, { headers });
  }

  // createList(list:any) {
  //   return this.http.post('http://localhost:3000/api/v1/lists', {'list': {...list}})
  // }
}
