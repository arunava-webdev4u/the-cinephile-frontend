import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: FormGroup;

  constructor() {
    this.searchTerm = new FormGroup({
      query: new FormControl("")
    });
  }

  search() {
    console.log(this.searchTerm.value);
  }
}
