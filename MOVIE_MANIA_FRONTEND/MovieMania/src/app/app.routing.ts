import { Routes } from "@angular/router";
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { UpdateMovieListComponent } from './update-movie-list/update-movie-list.component'

import { AuthGuard } from "./services/auth-gaurd.service";

export const appRoutes: Routes = [
  { path: 'user/:id', component: HomeComponent, 
     // canActivate: [AuthGuard] 
  },
  {path: 'update', component: UpdateMovieListComponent},
  { path: "**", component: HomeComponent }
];
