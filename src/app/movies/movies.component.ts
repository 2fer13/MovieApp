import { Component } from '@angular/core';
import { Movies } from '../movie.datasource';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
title="Movie list";
movies=Movies;

}
