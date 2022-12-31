import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
title="Movie list";
movies?: Movie[];
selectedMovie:Movie | undefined;

  constructor(private movieService:MovieService){}

  ngOnInit():void{
    this.getMovies();
  }


  onSelect(movie:Movie):void{
    this.selectedMovie = movie;
   }

   getMovies():void{
    this.movies=this.movieService.getMovies();
   }
}
