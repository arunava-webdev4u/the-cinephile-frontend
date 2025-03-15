import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component'
import { ListsComponent } from './modules/lists/lists.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lists', component: ListsComponent }
];
