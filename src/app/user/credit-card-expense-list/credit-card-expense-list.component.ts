import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-credit-card-expense-list',
  templateUrl: './credit-card-expense-list.component.html',
  styleUrls: ['./credit-card-expense-list.component.scss']
})
export class CreditCardExpenseListComponent {
  currentLoginName: any;
  listAllExpData:any;
  requestSubmitted:boolean = false;
  showExplainPopup: boolean = false;
  itemDate:any;
  itemAmount:any;
  itemFieldReasonReject: any;
  itemReasonReject: any;
  itemRowGlobal:any;

  constructor(
    private SessionService : SessionService,
    private ApiService : ApiService
  ){}

  ngOnInit(){
    this.currentLoginName = this.SessionService.getCurrentSession();

    this.getAllCreditExpense()
  }
  askAdminToRemove(itemRow:any){    
    this.itemDate = itemRow.Date;
    this.itemAmount = itemRow.Amount;
    this.itemFieldReasonReject = this.itemReasonReject;
    this.itemRowGlobal = itemRow;
    this.showExplainPopup = true;
    //console.log("Itemrow ->",itemRow.id +'- amount ->'+this.itemAmount +'----'+this.showExplainPopup);    
  }

  getAllCreditExpense() {
    this.ApiService.getAllCreditExpenseAPI().subscribe(
      (allData:any)=>{
        this.listAllExpData = allData;
      },
      (err)=>{
        alert("fetch all credit exp list - error")
      }
    )
  }

  saveAdminRequest(){
    this.itemFieldReasonReject = this.itemReasonReject
    this.rejectRequestWithReason(this.itemFieldReasonReject);
    this.showExplainPopup = false;
  }


  rejectRequestWithReason(rReason:string){
    this.itemRowGlobal={
      "id":this.itemRowGlobal.id,
      "Status": false,
      "Name": this.currentLoginName,
      "Amount": this.itemAmount,
      "rejectFlag": true,
      "RejectedReason": rReason
    }
    console.log(this.itemRowGlobal);
    this.ApiService.rejectAdminRequest(this.itemRowGlobal).subscribe(
      (data)=>{
        this.getAllCreditExpense();
      },
      (err)=>{
        alert("err reject admin request")
      }
    );
  }
}
