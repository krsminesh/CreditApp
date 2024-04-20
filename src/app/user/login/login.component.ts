import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { ApiService } from 'src/app/service/api/api.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userLoginFormReactive !: FormGroup
  loginName:string ='';
  password:string ='';
  loginErrorMessage:string = '';

  constructor(
    private formBuilder: FormBuilder,
    private ApiService: ApiService,
    private SessionService:SessionService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.userLoginFormReactive = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  clearFormFields() {
    this.userLoginFormReactive.reset();
  }

  loginAccount() {
    this.loginName = this.userLoginFormReactive.get("userName")?.value;
    this.password = this.userLoginFormReactive.get("password")?.value;
    if(this.userLoginFormReactive.valid){
      this.ApiService.loginAccoutAPI(this.loginName, this.password).subscribe(
        (user:any)=>{
          console.log(user);
          if(user.length > 0 && user && user[0].loginName == this.loginName && user[0].password == this.password){
            this.SessionService.setLoginUserSession(user[0].loginName);
            this.SessionService.setLoginUserType(user[0].isAdmin);
            this.router.navigate([GlobalConstants.viewCreditDetails])
          }
          else{
            this.loginErrorMessage = GlobalConstants.loginErrorMessage;
          }
          
        },
        (err) =>{
          alert('login:'+err)
        }
      )
    }else{
      alert('Please enter details to login')
    }
  }
}
