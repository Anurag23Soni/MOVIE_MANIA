import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import {appRoutes } from './app.routing';
import { SlideshowModule } from './slideshow/slideshow.module';
import { HeaderComponent } from './header/header.component';
import { MainBannerSlideComponent } from './main-banner-slide/main-banner-slide.component';
import { LowerBannerSlideComponent } from './lower-banner-slide/lower-banner-slide.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SearchMoviePipe } from './search-movie/search-movie.pipe';
import { UpdateMovieListComponent } from './update-movie-list/update-movie-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerSlideComponent,
    LowerBannerSlideComponent,
    MovieListComponent,
    SearchMovieComponent,
    //for search movie list
    SearchMoviePipe,
    UpdateMovieListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, 
      { //enableTracing: true 
      }),
    SlideshowModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
