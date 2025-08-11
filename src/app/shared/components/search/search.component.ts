import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MediaService } from '../../../core/services/media.service';

interface SearchedItem {
  title: string;
  poster_path: string;
  overview: string;
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

  imgUrl(poster_path:string) {
    return `https://image.tmdb.org/t/p/w200/${poster_path}`
  }
  
  searchMovies() {
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








  // searchMovies() {}
        //   searchedItems = [
        //     {
        //         "adult": false,
        //         "backdrop_path": "/Al127H6f1RXpESdg0MGNL2g8mzO.jpg",
        //         "genre_ids": [
        //             16,
        //             35,
        //             878
        //         ],
        //         "id": 1359227,
        //         "original_language": "en",
        //         "original_title": "LEGO Marvel Avengers: Mission Demolition",
        //         "overview": "A young, aspiring hero and superhero fan inadvertently unleashes a powerful new villain looking to rid the world of the Avengers.",
        //         "popularity": 3.1942,
        //         "poster_path": "/x9Gi93zL1DZCNwcRkzpe1QndNlY.jpg",
        //         "release_date": "2024-10-17",
        //         "title": "LEGO Marvel Avengers: Mission Demolition",
        //         "video": false,
        //         "vote_average": 6.509,
        //         "vote_count": 116
        //     },
        //     {
        //         "adult": false,
        //         "backdrop_path": "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
        //         "genre_ids": [
        //             878,
        //             28,
        //             12
        //         ],
        //         "id": 24428,
        //         "original_language": "en",
        //         "original_title": "The Avengers",
        //         "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        //         "popularity": 31.8539,
        //         "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        //         "release_date": "2012-04-25",
        //         "title": "The Avengers",
        //         "video": false,
        //         "vote_average": 7.786,
        //         "vote_count": 32638
        //     },
        //     {
        //         "adult": false,
        //         "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
        //         "genre_ids": [
        //             12,
        //             28,
        //             878
        //         ],
        //         "id": 299536,
        //         "original_language": "en",
        //         "original_title": "Avengers: Infinity War",
        //         "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        //         "popularity": 30.8328,
        //         "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        //         "release_date": "2018-04-25",
        //         "title": "Avengers: Infinity War",
        //         "video": false,
        //         "vote_average": 8.236,
        //         "vote_count": 30806
        //     },
        //     {
        //         "adult": false,
        //         "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        //         "genre_ids": [
        //             12,
        //             878,
        //             28
        //         ],
        //         "id": 299534,
        //         "original_language": "en",
        //         "original_title": "Avengers: Endgame",
        //         "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        //         "popularity": 17.2409,
        //         "poster_path": "/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
        //         "release_date": "2019-04-24",
        //         "title": "Avengers: Endgame",
        //         "video": false,
        //         "vote_average": 8.239,
        //         "vote_count": 26587
        //     },
        //     {
        //         "adult": false,
        //         "backdrop_path": "/n2yv4KNOIeneb6zVzjbT9iLvnPE.jpg",
        //         "genre_ids": [
        //             28,
        //             18
        //         ],
        //         "id": 63441,
        //         "original_language": "zh",
        //         "original_title": "叉手",
        //         "overview": "Philip Kwok plays a repentant killer who vows to destroy the masked gang of which he was a member. A young fighter and his martial arts brothers come to the town to catch the killers, but one of them is not to be trusted!",
        //         "popularity": 0.8806,
        //         "poster_path": "/vr54E7RjvMLE4rFgb1NPgZdnpj6.jpg",
        //         "release_date": "1981-05-15",
        //         "title": "Masked Avengers",
        //         "video": false,
        //         "vote_average": 6.9,
        //         "vote_count": 33
        //     },
        //     {
        //         "adult": false,
        //         "backdrop_path": "/bsm7vCzMtE1aA1WDLoi310aY1oe.jpg",
        //         "genre_ids": [
        //             10751,
        //             35
        //         ],
        //         "id": 516339,
        //         "original_language": "ru",
        //         "original_title": "СуперБобровы. Народные мстители",
        //         "overview": "The continuations of the adventures of Bobrov family all members of which suddenly became superheroes...",
        //         "popularity": 0.6154,
        //         "poster_path": "/6iN2NxsyNf3WEQwDSWaYaGTVQ60.jpg",
        //         "release_date": "2017-12-25",
        //         "title": "Super Family. Better Than Avengers",
        //         "video": false,
        //         "vote_average": 6.06,
        //         "vote_count": 25
        //     }
        // ];
}
