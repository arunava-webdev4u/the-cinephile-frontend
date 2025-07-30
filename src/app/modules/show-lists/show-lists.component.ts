import { Component } from '@angular/core';

@Component({
  selector: 'app-show-lists',
  imports: [],
  templateUrl: './show-lists.component.html',
  styleUrl: './show-lists.component.css'
})
export class ShowListsComponent {
  default_lists = [
    {
        "id": 17,
        "user_id": 6,
        "name": "watchlist",
        "description": "Your watchlist collection",
        "private": false,
        "created_at": "2025-07-30T15:11:20.030Z",
        "updated_at": "2025-07-30T15:11:20.030Z"
    },
    {
        "id": 18,
        "user_id": 6,
        "name": "watched",
        "description": "Your watched collection",
        "private": false,
        "created_at": "2025-07-30T15:11:20.032Z",
        "updated_at": "2025-07-30T15:11:20.032Z"
    },
    {
        "id": 19,
        "user_id": 6,
        "name": "favourite_movies",
        "description": "Your favourite_movies collection",
        "private": false,
        "created_at": "2025-07-30T15:11:20.034Z",
        "updated_at": "2025-07-30T15:11:20.034Z"
    },
    {
        "id": 20,
        "user_id": 6,
        "name": "favourite_tv_Shows",
        "description": "Your favourite_tv_Shows collection",
        "private": false,
        "created_at": "2025-07-30T15:11:20.036Z",
        "updated_at": "2025-07-30T15:11:20.036Z"
    }
  ]

  custom_lists = [
    {
        "id": 27,
        "user_id": 6,
        "name": "My All Time Favourites",
        "description": "Your watchlist collection",
        "private": true,
        "created_at": "2025-07-30T15:11:20.030Z",
        "updated_at": "2025-07-30T15:11:20.030Z"
    },
    {
        "id": 44,
        "user_id": 6,
        "name": "Best Horror Movies",
        "description": "Your watched collection",
        "private": true,
        "created_at": "2025-07-30T15:11:20.032Z",
        "updated_at": "2025-07-30T15:11:20.032Z"
    },
    {
        "id": 77,
        "user_id": 6,
        "name": "Best Comedy Movies",
        "description": "Your favourite_movies collection",
        "private": true,
        "created_at": "2025-07-30T15:11:20.034Z",
        "updated_at": "2025-07-30T15:11:20.034Z"
    },
    {
        "id": 99,
        "user_id": 6,
        "name": "Best Drama Movies",
        "description": "Your favourite_tv_Shows collection",
        "private": true,
        "created_at": "2025-07-30T15:11:20.036Z",
        "updated_at": "2025-07-30T15:11:20.036Z"
    },
    {
        "id": 33,
        "user_id": 6,
        "name": "Watch with Family",
        "description": "Your favourite_tv_Shows collection",
        "private": true,
        "created_at": "2025-07-30T15:11:20.036Z",
        "updated_at": "2025-07-30T15:11:20.036Z"
    }
  ]
}
