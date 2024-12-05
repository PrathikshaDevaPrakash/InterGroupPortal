import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Inter Group Portal';
  username: string = '';
  role: string = '';
  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService) { }
  
  ngOnInit() {
    this.isLoggedIn = this.loginService.getIsUserLoggedIn();
    const currentUser = this.loginService.getCurrentUser();
    this.username = currentUser.username;
    this.role = currentUser.role;
  }

}
