import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  route = inject(ActivatedRoute);
  movieId: string | null = null;

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
  }
}
