import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    PageNotFoundComponent,
    SearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }