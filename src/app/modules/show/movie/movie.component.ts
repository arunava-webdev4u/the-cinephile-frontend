import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediaService } from '../../../core/services/media.service';

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;   // ISO date string
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/* ---- Nested interfaces ---- */

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}


@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  route = inject(ActivatedRoute);
  mediaService = inject(MediaService);
  
  movieId: ( string | null | undefined ) = null;
  movie: ( Movie | null | undefined ) = null;

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    /*
    if (this.movieId) {
      this.mediaService.searchMediaById(this.movieId, 'movie').subscribe({
        next: (response:any) => {
          this.movie = response.result
          console.log(this.movie)
        },
        error: (error) => {
          console.error(`Error fetching movies with id ${this.movieId}:`, error);
        }
      });
    } else {
      // handle the case where movieId is null, e.g., show an error or redirect
    }
      */
    this.movie = {
       "adult": false,
       "backdrop_path": "/1Lz0CmgukN8KyzxIn8gGe4NLV3D.jpg",
        "belongs_to_collection": null,
        "budget": 250000000,
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ],
        "homepage": "https://www.f1themovie.com",
        "id": 911430,
        "imdb_id": "tt16311594",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_title": "F1",
        "overview": "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
        "popularity": 74.3841,
        "poster_path": "/9JePWGvgg1t4BOojyZEVQdOWjXO.jpg",
        "production_companies": [
            {
                "id": 81,
                "logo_path": "/8wOfUhA7vwU2gbPjQy7Vv3EiF0o.png",
                "name": "Plan B Entertainment",
                "origin_country": "US"
            },
            {
                "id": 130,
                "logo_path": "/c9dVHPOL3cqCr2593Ahk0nEKTEM.png",
                "name": "Jerry Bruckheimer Films",
                "origin_country": "US"
            },
            {
                "id": 199632,
                "logo_path": null,
                "name": "Dawn Apollo Films",
                "origin_country": "US"
            },
            {
                "id": 194232,
                "logo_path": "/oE7H93u8sy5vvW5EH3fpCp68vvB.png",
                "name": "Apple Studios",
                "origin_country": "US"
            },
            {
                "id": 19647,
                "logo_path": null,
                "name": "Monolith Pictures",
                "origin_country": "US"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2025-06-25",
        "revenue": 579547225,
        "runtime": 156,
        "spoken_languages": [
            {
                "english_name": "Danish",
                "iso_639_1": "da",
                "name": "Dansk"
            },
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            },
            {
                "english_name": "German",
                "iso_639_1": "de",
                "name": "Deutsch"
            },
            {
                "english_name": "Spanish",
                "iso_639_1": "es",
                "name": "Español"
            }
        ],
        "status": "Released",
        "tagline": "This is just the start.",
        "title": "F1",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 1021
    }
    console.log(this.movie)
  }

  // searchMediaById
}
