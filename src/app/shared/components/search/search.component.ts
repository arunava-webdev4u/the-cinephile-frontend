import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MediaService } from '../../../core/services/media.service';

interface SearchedItem {
  title: string;
}

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  mediaService: MediaService = inject(MediaService);
  searchTerm: FormGroup;

  searchedItems:SearchedItem[] = [];

  constructor() {
    this.searchTerm = new FormGroup({
      query: new FormControl("")
    });
  }

  searchMovies() {
    // this.mediaService.searchMedia(this.searchTerm.value.query)
    // console.log(this.searchTerm.value)
    this.mediaService.searchMedia(this.searchTerm.value.query).subscribe({
      next: (response: any) => {
        this.searchedItems = response.result.results;
        console.log('Search results:', this.searchedItems);
      },
      error: (error) => {
        console.error('Error searching movies:', error);
      }
    })
  }
}
