import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  constructor(private movieService:MovieService,private router:Router) { }
  public movieData:any[] = [];
  ngOnInit(): void {
    this.movieService.getTrendingMovies()
    .subscribe(data =>{
      data["results"].forEach(i=>{
        i.poster_path ="https://image.tmdb.org/t/p/original"+ i.poster_path;
        
      });
      this.movieData=data["results"]});
    }
    onCardClick(id){
      this.router.navigate(['/details',id]);
    }
}