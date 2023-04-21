import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService,private router:Router) { }
  
  public search:string = ''
  public movieData;
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let search = params.get('search');
      this.search = search;
    this.movieService.getSearchData(this.search)
    .subscribe(data =>{
      data["results"].forEach(i=>{
        i.poster_path ="https://image.tmdb.org/t/p/original"+ i.poster_path;
        
      });
      this.movieData=data["results"];
    });
  });
  }
  
  onCardClick(id){
    this.router.navigate(['/details',id]);
  }

}
