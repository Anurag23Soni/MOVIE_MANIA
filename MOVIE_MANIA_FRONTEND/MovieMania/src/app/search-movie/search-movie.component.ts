import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';
import { Router } from "@angular/router";
import { SearchMoviePipe } from './search-movie.pipe'

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  providers: [ SearchMoviePipe ]
})
export class SearchMovieComponent implements OnInit, DoCheck {

  movieList: Array<string>;
  movieListnew: Array<string>;
  searchText: string;
  selectedLocationText: string;
  selectedLanguageText: string;

  constructor(public commonserviceService: CommonserviceService, private searchMoviePipe: SearchMoviePipe, private router: Router, ) { }

  ngOnInit() {
    this.movieList = this.commonserviceService.getMovieListName();      
  }
  ngDoCheck() {
    this.commonserviceService.updateMovieList(this.searchMoviePipe.transform(this.movieList,this.searchText));
  }
  updateEvent(message) {
    this.commonserviceService.updateMessages(message);
  }
  addMovie() {
    this.router.navigate(["/update"]);
  }
}
