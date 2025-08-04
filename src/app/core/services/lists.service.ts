import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';

import { AuthService } from './auth.service';
import { List } from '../../shared/interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  http = inject(HttpClient);
  authService = inject(AuthService);

  baseUrl = "http://localhost:3000/api/v1"
  token = this.authService.authTokenSignal();

  defaultLists = signal<List[]>([]);
  customLists = signal<List[]>([]);

  constructor() {
    effect(() => {
      this.token = this.authService.authTokenSignal();
      this.deleteLists();
    })
  }

  getLists() {
    this.getDefaultLists();
    this.getCustomLists();
  }

  private getDefaultLists() {
    this.fetchLists('default_list').subscribe({
      next: (response) => {
        this.defaultLists.set(response);
      },
      error: (error) => {
        console.error('Error fetching default lists:', error);
      },
    });
  }

  private getCustomLists() {
    this.fetchLists('custom_list').subscribe({
      next: (response) => {
        this.customLists.set(response);
      },
      error: (error) => {
        console.error('Error fetching custom lists:', error);
      }
    });
    return this.customLists();
  }

  private deleteLists() {
    this.defaultLists.set([]);
    this.customLists.set([]);
  }

  private fetchLists(type: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<List[]>(`${this.baseUrl}/${type}`, { headers });
  }

  createList(list:List) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(`${this.baseUrl}/custom_list`, {'list': {...list}}, { headers });
  }
}
