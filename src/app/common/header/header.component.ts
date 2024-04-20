import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges{
  loginUrl = GlobalConstants.loginUrl
  isLoggedIn:boolean = false;

  constructor(
    private Sessionservice:SessionService,
    private router: Router
  ){}

  ngOnInit() {
      this.checkLogin();
  }

  ngOnChanges(){

  }

  checkLogin(){
    if(this.Sessionservice.getCurrentSession()){
      this.isLoggedIn = true; 
    }
  }

  logoutUser(){
    this.Sessionservice.clearLoginSession();
    this.isLoggedIn = false;
    this.router.navigate([GlobalConstants.welcomeUrl])
  }
}
