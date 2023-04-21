import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http:HttpClient) { }
  public apiKey:string = "0fe4f2f63e4092e4f18d85855b7492cc";
  
  getTrendingMovies():Observable<any>{
    let url:string = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`;
    let result = this.http.get<any>(url);
    return result;
  }
  getSearchData(search):Observable<any>{
    let url: string = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${search}&page=1&include_adult=false`;
    let result = this.http.get<any>(url);
    return result;
  }
  getMovieByIdDetails(id):Observable<any>{
    let url:string = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`;
    let result = this.http.get<any>(url);
    console.log(result);
    return result;
  }
}