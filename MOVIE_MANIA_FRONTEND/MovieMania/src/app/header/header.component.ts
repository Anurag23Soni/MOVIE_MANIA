import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';
import { Router } from "@angular/router";
import { SearchMoviePipe } from '../search-movie/search-movie.pipe'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ SearchMoviePipe ]
})
export class HeaderComponent implements OnInit {

  locationList;
  LanguageList;
  selectedLocationText
  selectedlanguageText
  constructor(public commonserviceService: CommonserviceService, private searchMoviePipe: SearchMoviePipe, private router: Router,private http:HttpClient ) { }

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get<any>('https://localhost:44334/api/Movie/GetMovielocation').subscribe(data => {
    this.locationList = data;})

    // Simple GET request with response type <any>
    this.http.get<string>('https://localhost:44334/api/Movie/GetMovieLanguage').subscribe(data => {
    this.LanguageList = data;})
  }
  updateLocationEvent(event:any) {
    this.commonserviceService.updateMessages(event.target.value);
    console.log(event.target.value);
    this.commonserviceService.updateMovieListByLocation(event.target.value);
  }
  updateLanguageEvent(event:any) {
    this.commonserviceService.updateMessages(event.target.value);
    console.log(event.target.value);
    this.commonserviceService.updateMovieListByLanguage(event.target.value);
  }
}
