import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // userLogin =  new BehaviorSubject<boolean>(false)
  isAuth(): boolean {
    const user = localStorage.getItem('user')
 return user !== null
 
}
}

