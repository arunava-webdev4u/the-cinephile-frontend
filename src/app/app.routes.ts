import { Routes } from '@angular/router';

import { authGuard } from './core/guard/auth.guard';
import { guestGuard } from './core/guard/guest.guard';

import { HomeComponent } from './modules/home/home.component'
import { ListsComponent } from './modules/lists/lists.component'
import { AddListComponent } from './modules/add-list/add-list.component'
import { UsersComponent } from './modules/users/users.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ShowListsComponent } from './modules/show-lists/show-lists.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lists', component: ListsComponent, canActivate: [authGuard] },
    { path: 'users', component: UsersComponent, canActivate: [authGuard] },
    { path: 'add-list', component: AddListComponent, canActivate: [authGuard] },
    { path: 'show-lists', component: ShowListsComponent, canActivate: [authGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'auth', loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule), canActivate: [guestGuard] },
    { path: '**', redirectTo: '' }
];
