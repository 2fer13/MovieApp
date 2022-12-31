import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
