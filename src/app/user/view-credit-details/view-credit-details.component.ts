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
  showRejectReason: boolean = false;
  itemReasonReject:string ='';
  itemTitleName: any;
  itemIdNumber: any;

  constructor(
    private SessionService : SessionService,
    private ApiService : ApiService,
    private router : Router
  ){}

  ngOnInit(){
    this.fetchCreditApplyData();
  }

  fetchCreditApplyData(){
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
  approveRequest(itemRow : any){
    
    itemRow={
      "id": (itemRow.id),
      "Status": !itemRow.Status,
      "Address": itemRow.Address,
      "FullName": itemRow.FullName,
      "trackingId": itemRow.trackingId,
      "CreditScore": itemRow.CreditScore,
      "AnnualIncome": itemRow.AnnualIncome
    }
    
    this.ApiService.approveAPI(itemRow, itemRow.id).subscribe(
      (data)=>{
        this.fetchCreditApplyData();
      },
      (err)=>{
        alert("err approve")
      }
    );
  }
  deleteRequest(itemRow : any){

  }

  saveRejectReason(){
    this.showRejectReason = false;
  }

  rejectRequest(itemRow : any){
    this.showRejectReason = true;
    this.itemTitleName = itemRow.FullName;
    this.itemIdNumber = itemRow.id;
    // itemRow={
    //   "id": (itemRow.id),
    //   "Status": false,
    //   "Address": itemRow.Address,
    //   "FullName": itemRow.FullName,
    //   "trackingId": itemRow.trackingId,
    //   "CreditScore": itemRow.CreditScore,
    //   "AnnualIncome": itemRow.AnnualIncome,
    //   "RejectedReason": 'adsadasdsad asdas dasd asdasd asdas '
    // }
    
    // this.ApiService.rejectAPI(itemRow, itemRow.id).subscribe(
    //   (data)=>{
    //     this.fetchCreditApplyData();
    //   },
    //   (err)=>{
    //     alert("err approve")
    //   }
    // );
  }
}
