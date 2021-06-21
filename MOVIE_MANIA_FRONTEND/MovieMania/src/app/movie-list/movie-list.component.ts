import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, DoCheck {

  movieList: Array<any>;

  inputMessage: string;

  constructor(public commonserviceService: CommonserviceService) { }

  ngOnInit() {
    this.commonserviceService.updateMessage.subscribe(
      (message)=>{
        console.log('message in movie list component--'+message)
      }
    );
  }

  ngDoCheck() {
    //getting movie from common service
    this.movieList = this.commonserviceService.getMovieList();
  }
}
