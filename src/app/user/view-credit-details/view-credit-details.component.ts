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
  currentLoginName:any;
  isAdminPage:boolean = false;
  applications:any;
  showRejectReason: boolean = false;
  itemFieldReasonReject:string ='';
  itemTitleName: any;
  itemIdNumber: any;
  itemReasonReject: string ="";

  itemRowGlobal:any;

  constructor(
    private SessionService : SessionService,
    private ApiService : ApiService,
    private router : Router
  ){}

  ngOnInit(){
    this.fetchCreditApplyData();
    if(this.SessionService.getLoginUserType() == "true"){
      this.isAdminPage = true;
    }
    this.currentLoginName = this.SessionService.getCurrentSession()
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
      (data:any)=>{
        this.fetchCreditApplyData();
        this.showRejectReason = false;
        debugger;
        console.log("approve item data:",data.FullName)
        let newLoginItem = {
          "isAdmin": false,
          "password": "Welcome123",
          "loginName": data.FullName
        }
        this.ApiService.addNewLoginAccount(newLoginItem).subscribe(
          (Response) =>{
            alert("upon approval, the user is added to the login users list - by this the user can login with the default password = 'Welcome123'")
          },
          (err)=>{
            alert("error in adding the new usser to login list")
          }
        )
      },
      (err)=>{
        alert("err approve login by admin")
      }
    );
  }
  deleteRequest(itemRow : any){
    this.ApiService.deleteAPI(itemRow.id).subscribe(
      (res:any) => {
        alert("Deleted the request");
        this.fetchCreditApplyData();
      },
      (err) => {
        alert("delete api error")
      }
    );
  }

  saveRejectReason(){
    this.itemFieldReasonReject = this.itemReasonReject
    this.rejectRequestWithReason(this.itemFieldReasonReject);
    this.showRejectReason = false;
  }

  rejectRequestWithReason(rReason:string){
    //alert(this.itemReasonReject)
    this.itemRowGlobal={
      "id": (this.itemRowGlobal.id),
      "Status": false,
      "Address": this.itemRowGlobal.Address,
      "FullName": this.itemRowGlobal.FullName,
      "trackingId": this.itemRowGlobal.trackingId,
      "CreditScore": this.itemRowGlobal.CreditScore,
      "AnnualIncome": this.itemRowGlobal.AnnualIncome,
      "RejectedReason": rReason
    }
    console.log(this.itemRowGlobal);
    this.ApiService.rejectAPI(this.itemRowGlobal, this.itemRowGlobal.id).subscribe(
      (data)=>{
        this.fetchCreditApplyData();
      },
      (err)=>{
        alert("err approve")
      }
    );
  }

  rejectRequest(itemRow : any){
    this.showRejectReason = true;
    this.itemTitleName = itemRow.FullName;
    this.itemIdNumber = itemRow.id;
    this.itemRowGlobal = itemRow;
    
  }
}
