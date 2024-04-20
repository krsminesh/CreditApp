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


  applyCreditAPI(request : any){
    return this.postApi(GlobalConstants.applyCreditAPILink, request);
  }
}
