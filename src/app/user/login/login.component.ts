import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userLoginFormReactive !: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private ApiService: ApiService
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
    alert(0)
  }
}
