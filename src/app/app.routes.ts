import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component'
import { ListsComponent } from './modules/lists/lists.component'
import { AddListComponent } from './modules/add-list/add-list.component'
import { UsersComponent } from './modules/users/users.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'add-list', component: AddListComponent }
];
