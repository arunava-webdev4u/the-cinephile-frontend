import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';


import { MediaService } from '../../../core/services/media.service';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

interface SearchedItem {
  title: string;
  poster_path: string;
  overview: string;
  id: number
}

@Component({
  selector: 'app-search',
  imports: [ ReactiveFormsModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  router = inject(Router);
  mediaService = inject(MediaService);
  
  @Input() modalId: string = 'my_modal_3';
  searchTerm: FormGroup;
  type:string[] = ["movie", "tv"]
  searchedItems:SearchedItem[] = [];
  
  constructor() {
    this.searchTerm = new FormGroup({
      query: new FormControl(""),
      type: new FormControl(this.type[0])
    });
    // this.searchTerm.valueChanges.subscribe(val => {
    //   this.searchMovies()
    // });
    this.searchTerm.valueChanges.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      filter(val => val.query?.trim().length > 0)
    ).subscribe(val => {
      this.searchMovies();
    });
  }

  imgUrl(poster_path:string) {
    return `https://image.tmdb.org/t/p/w200/${poster_path}`
  }
  
  searchMovies() {
    this.mediaService.searchMedia(this.searchTerm.value.query, this.searchTerm.value.type).subscribe({
      next: (response: any) => {
        this.searchedItems = response.result.results;
        console.log('Search results:', this.searchedItems);
      },
      error: (error) => {
        console.error('Error searching movies:', error);
      }
    })
  }

  navigate (item_id: number) {
    const type = this.searchTerm.value.type
    
    const modal = document.getElementById(this.modalId) as HTMLDialogElement | null;
    
    this.searchTerm.reset({
      query: '',
      type: this.type[0]
    });
    
    this.searchedItems = [];

    modal?.close();
    
    this.router.navigate([ '/show', type, item_id.toString() ]);
  }

}
