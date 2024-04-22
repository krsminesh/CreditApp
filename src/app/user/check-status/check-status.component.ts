import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent implements OnInit{
  checkStatusFormReactive !: FormGroup;
  trackingIdValue:any;
  userTrackStatus:boolean = false;
  showResult:boolean = false;
  loginUrl = GlobalConstants.loginUrl;
  welcomeUrl = GlobalConstants.welcomeUrl;
  errCaseText: string ='';

  constructor(
    private ApiService : ApiService,
    private formBuilder : FormBuilder
  ){

  }

  ngOnInit(){
    this.checkStatusFormReactive = this.formBuilder.group({
      trackingId:["", Validators.required]
    });
    this.checkStatusFormReactive.patchValue({
      trackingId:"9797143196626252"
    });
  }

  checkStatus(){
    this.showResult = true;
    this.trackingIdValue = this.checkStatusFormReactive.get("trackingId")?.value;
    this.ApiService.checkStatusAPI().subscribe(
      (users:any)=>{
        for (let i = 0; i < users.length; i++) {
          if(users[i].trackingId == this.trackingIdValue){
            this.userTrackStatus =users[i].Status;
          }
          if(users[i].trackingId == null || users[i].trackingId == undefined){
            this.errCaseText = "Data not found";
          }
        }
      },
      (err) =>{
        console.log('status check error')
      }
    )
  }

}
