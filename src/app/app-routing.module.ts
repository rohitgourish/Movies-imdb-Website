import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path : '',redirectTo:'/trending', pathMatch:'full'},
  { path :'trending',component:TrendingComponent},
  { path : 'search/:search', component:SearchComponent},
  { path : 'details/:id', component:MovieDetailsComponent},
  { path : '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }