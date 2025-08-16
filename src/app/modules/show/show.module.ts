import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShowRoutingModule } from './show-routing.module';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ShowRoutingModule,
    MovieComponent,
    TvComponent
  ]
})
export class ShowModule { }
