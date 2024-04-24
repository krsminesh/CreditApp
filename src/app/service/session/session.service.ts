import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  
  setLoginUserSession(ssValue:string){
    sessionStorage.setItem(GlobalConstants.userSession, ssValue)
  }
  setLoginUserType(ttValue:string){
    sessionStorage.setItem(GlobalConstants.userType, ttValue)
  }

  getLoginUserType(){
    return sessionStorage.getItem(GlobalConstants.userType)
  }

  getCurrentSession(){
    return sessionStorage.getItem(GlobalConstants.userSession)
  }

  clearLoginSession(){
    sessionStorage.clear();
  }
}
