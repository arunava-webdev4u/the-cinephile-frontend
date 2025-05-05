import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchService: SearchService = inject(SearchService);
  searchTerm: FormGroup;

  constructor() {
    this.searchTerm = new FormGroup({
      query: new FormControl("")
    });
  }

  searchMovies() {
    this.searchService.searchMovies(this.searchTerm.value.query).subscribe((ob) => {
      console.log(ob)
    })
  }
}
