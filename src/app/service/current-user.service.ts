import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  constructor() { }
  isLogged(){
    return localStorage.getItem('token');
  }
}
