import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-update-movie-list',
  templateUrl: './update-movie-list.component.html',
  styleUrls: ['./update-movie-list.component.scss']
})
export class UpdateMovieListComponent implements OnInit {

  movieForm: FormGroup;
  movieList: any;

  constructor(private fb: FormBuilder, private router: Router, private commonserviceService: CommonserviceService) { }

  ngOnInit() {
    this.movieList =  this.commonserviceService.getMovieListName();
    console.log(this.movieList);
    console.log(JSON.stringify('list---'+this.movieList))
    this.buildForm();
  }

  buildForm() {
    this.movieForm = this.fb.group({
      url: '',
      name: '',
      location: '',
      date: '',
    });

  }

  updateMovieList() {
    //console.log('value-->'+ JSON.stringify(this.movieForm.value))
    this.commonserviceService.addNewMovie(this.movieForm.value);
  }
  backToHome() {
    this.router.navigate(["/home"]);
  }
  deleteMovie(index) {
    this.commonserviceService.deleteMovie(index);
    this.movieList =  this.commonserviceService.getMovieListName();
  }

}
