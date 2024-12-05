import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser = this.currentUserSubject.asObservable();
  public isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // hardcoded for now, this needs to integrated within login success.
    const user = { username: 'Username', role: 'Admin' };
    this.currentUserSubject.next(user);
    this.isLoggedIn.next(true);
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  getIsUserLoggedIn(){
    return this.isLoggedIn.value;
  }

}
