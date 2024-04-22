import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { ApiService } from 'src/app/service/api/api.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-view-credit-details',
  templateUrl: './view-credit-details.component.html',
  styleUrls: ['./view-credit-details.component.scss']
})
export class ViewCreditDetailsComponent implements OnInit{
  isAdmin:boolean = true;
  applications:any;

  constructor(
    private SessionService : SessionService,
    private ApiService : ApiService,
    private router : Router
  ){}

  ngOnInit(){
    if(this.SessionService.getCurrentSession()){
      this.ApiService.getAllApplication().subscribe(
        (response) =>{
          this.applications = response;
          console.log(response)
        }
      );
    }
    else{
      this.router.navigate([GlobalConstants.welcomeUrl])
    }
  }

  approveRequest(){

  }
  
  rejectRequest(){
    
  }
}
