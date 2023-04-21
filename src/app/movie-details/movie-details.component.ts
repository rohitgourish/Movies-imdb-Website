import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService, private router:Router) { }
  
  public movieId:number;
  public movieDetails:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.movieId = id;
    });
    this.movieService.getMovieByIdDetails(this.movieId)
    .subscribe(data=>{
      
      data.poster_path ="https://image.tmdb.org/t/p/original"+ data.poster_path;
      this.movieDetails = data;
    });

  }
  ImdbPage(id){
    return `https://www.imdb.com/title/${id}/?ref_=nv_sr_srsg_0`;
  }

  goBack(){
    this.router.navigate(['/trending'])
  }
}