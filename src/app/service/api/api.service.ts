import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getApi(apiUrl:string){
    return this.httpClient.get(apiUrl);
  }

  postApi(apiUrl:string, request:any){
    return this.httpClient.post(apiUrl, request);
  }

  deleteAPI(apiUrl:string, request:any){
    return this.httpClient.delete(apiUrl, request);
  }

  putApi(apiUrl:string, request:any){
    return this.httpClient.put(apiUrl, request);
  }

  applyCreditAPI(request : any){
    return this.postApi(GlobalConstants.applyCreditAPILink, request);
  }

  loginAccoutAPI(loginname:string, pswd:string){
    let apiURL = GlobalConstants.userLoginAPILink+'?loginName='+loginname+'&password='+pswd;
    console.log(apiURL);
    return this.getApi(apiURL);
  }
  addNewLoginAccount(newLoginData:any){
     this.postApi(GlobalConstants.userLoginAPILink, newLoginData)
  }
  checkStatusAPI(){
    return this.getApi(GlobalConstants.applyCreditAPILink);
  }

  getAllApplication(){
    return this.getApi(GlobalConstants.applyCreditAPILink);
  }

  approveAPI(dataRow:any, dataChangeId:any){
    console.log(dataChangeId +' from api service file--- '+dataRow)
    return this.putApi(GlobalConstants.applyCreditAPILink+'/'+dataChangeId, dataRow);
  }

  rejectAPI(dataRow:any, dataChangeId:any){
    console.log(dataChangeId +' --- '+dataRow)
    return this.putApi(GlobalConstants.applyCreditAPILink+'/'+dataChangeId, dataRow);
  }
}
