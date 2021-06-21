import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  moviesName: string[] = [];
  searchEnabled: boolean = false;
  updatedMovieList;

  public updateMessage = new Subject<string>()

  constructor() { }
  
  updateMessages(message) {
    this.updateMessage.next(message);
  }

  movieList = [
    { url: '../../assets/image/movies/movie1.jpg',language: 'ENGLISH',  name: 'KK', location: 'PUNE,', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie2.jpg',language: 'ENGLISH',  name: 'Geetha Govindam', location: 'PUNE,', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie3.jpg',language: 'ENGLISH',  name: 'Pyar prema kadhal', location: 'BANGALORE,', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie4.jpg',language: 'ENGLISH',  name: 'KKS', location: 'BANGALORE,', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie5.jpg',language: 'ENGLISH',  name: 'Alpha', location: 'DELHI,', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie6.jpg',language: 'ENGLISH',  name: 'Vishvaroopam 2', location: 'BANGALORE,', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie7.jpg',language: 'ENGLISH',  name: 'HPJ', location: 'CHENNAI', date: 'Sep 7-8' },
    { url: '../../assets/image/movies/movie8.jpg',language: 'HINDI',  name: 'MI', location: 'CHENNAI', date: 'Sep 7-8' },
  ]

  getMovieList() {
    return this.updatedMovieList;
  }

  getMovieListName() {
    this.moviesName = [];
    this.movieList.forEach(movielist => {
      this.moviesName.push(movielist.name);
    })
    return this.moviesName;
  }
  updateMovieList(updatedMovie: any) {
    
    this.updatedMovieList = []
    for (let flag = 0; flag < updatedMovie.length; flag++) {
      this.updatedMovieList.push(this.movieList.filter(x => x.name.toLocaleLowerCase() == updatedMovie[flag].toLocaleLowerCase()));
    }
   
  }
  updateMovieListByLocation(updatedMovie: any) {
    this.updatedMovieList = []
      this.updatedMovieList =this.movieList.filter(x => x.location.toLocaleLowerCase() == updatedMovie.toLocaleLowerCase());
   for (let flag = 0; flag < this.updatedMovieList.length; flag++) {
console.log(this.updatedMovieList[flag].name);
    }
  }
  updateMovieListByLanguage(updatedMovie: any) {
 
    this.updatedMovieList = []
   // for (let flag = 0; flag < this.updatedMovieList.length; flag++) {
    this.updatedMovieList =this.movieList.filter(x => x.language.toLocaleLowerCase() == updatedMovie.toLocaleLowerCase());
    //  this.updatedMovieList.push(this.movieList.filter(x => x.language.toLocaleLowerCase() == updatedMovie.toLocaleLowerCase()));
  //  }
  }

  addNewMovie(newMovie) {
    this.movieList.push(newMovie);
  }
  deleteMovie(index) {
    this.movieList.splice(index, 1);
  }
}
