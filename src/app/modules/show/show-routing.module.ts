import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: 'movie/:id', component: MovieComponent, data: { renderMode: 'client-side' } },
  { path: 'tv/:id', component: TvComponent, data: { renderMode: 'client-side' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ShowRoutingModule { }
