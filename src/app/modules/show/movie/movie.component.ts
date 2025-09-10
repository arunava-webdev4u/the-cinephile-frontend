import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediaService } from '../../../core/services/media.service';

import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';

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
  imports: [SkeletonComponent],
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

    if (this.movieId) {
      this.mediaService.searchMediaById(this.movieId, 'movie').subscribe({
        next: (response:any) => {
          this.movie = response
          console.log(this.movie)
        },
        error: (error) => {
          console.error(`Error fetching movies with id ${this.movieId}:`, error);
        }
      });
    } else {
      // handle the case where movieId is null, e.g., show an error or redirect
    }
      /**/
    // this.movie = {
    //     "adult": false,
    //     "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    //     "belongs_to_collection": {
    //         "id": 86311,
    //         "name": "The Avengers Collection",
    //         "poster_path": "/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg",
    //         "backdrop_path": "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"
    //     },
    //     "budget": 356000000,
    //     "genres": [
    //         {
    //             "id": 12,
    //             "name": "Adventure"
    //         },
    //         {
    //             "id": 878,
    //             "name": "Science Fiction"
    //         },
    //         {
    //             "id": 28,
    //             "name": "Action"
    //         }
    //     ],
    //     "homepage": "https://www.marvel.com/movies/avengers-endgame",
    //     "id": 299534,
    //     "imdb_id": "tt4154796",
    //     "origin_country": [
    //         "US"
    //     ],
    //     "original_language": "en",
    //     "original_title": "Avengers: Endgame",
    //     "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    //     "popularity": 17.7585,
    //     "poster_path": "/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    //     "production_companies": [
    //         {
    //             "id": 420,
    //             "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
    //             "name": "Marvel Studios",
    //             "origin_country": "US"
    //         }
    //     ],
    //     "production_countries": [
    //         {
    //             "iso_3166_1": "US",
    //             "name": "United States of America"
    //         }
    //     ],
    //     "release_date": "2019-04-24",
    //     "revenue": 2799439100,
    //     "runtime": 181,
    //     "spoken_languages": [
    //         {
    //             "english_name": "English",
    //             "iso_639_1": "en",
    //             "name": "English"
    //         },
    //         {
    //             "english_name": "Japanese",
    //             "iso_639_1": "ja",
    //             "name": "日本語"
    //         },
    //         {
    //             "english_name": "Xhosa",
    //             "iso_639_1": "xh",
    //             "name": ""
    //         }
    //     ],
    //     "status": "Released",
    //     "tagline": "Avenge the fallen.",
    //     "title": "Avengers: Endgame",
    //     "video": false,
    //     "vote_average": 8.238,
    //     "vote_count": 26606
    // }
    console.log(this.movie)
  }

  poster(path: string | null | undefined) {
    return `https://image.tmdb.org/t/p/w780/${path}`
  }
  
  backdrop(path: string | null | undefined) {
    return `https://image.tmdb.org/t/p/w1280/${path}`
  }

  // searchMediaById
}
