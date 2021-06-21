import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRoute
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  //TO-DO  Caheck the user's role
  canActivate( ): any { 
    return true;
   }
  
}
