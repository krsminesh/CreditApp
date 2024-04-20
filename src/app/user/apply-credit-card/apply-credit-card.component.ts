import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-apply-credit-card',
  templateUrl: './apply-credit-card.component.html',
  styleUrls: ['./apply-credit-card.component.scss']
})
export class ApplyCreditCardComponent implements OnInit{
  
  applyCreditSuccess:boolean = false;
  userData:any;
  fullName:string =''
  homeLink = GlobalConstants.welcomeUrl;
  genTrackIdNumber:number=0;

  applyCreditFormReactive!: FormGroup;

  constructor( 
    private formBuilder : FormBuilder,
    private ApiService: ApiService
  ){

  }

  ngOnInit(){
    this.applyCreditFormReactive = this.formBuilder.group({
      fullName : ['', Validators.required],
      fullAddress:['', Validators.required],
      creditScore:['', Validators.required],
      annualIncome:['', Validators.required]
    });
  }
  clearFormFields(){
    this.applyCreditFormReactive.reset();
  }
  generateRandom16DigitNumber() {
    let min = 1000000000000000; // Minimum 16-digit number
    let max = 9999999999999999; // Maximum 16-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  submitApplyCredit(){
    this.fullName = this.applyCreditFormReactive.get('fullName')?.value;
    this.genTrackIdNumber = this.generateRandom16DigitNumber();
    if(this.applyCreditFormReactive.valid){
     this.userData = {
        "Full Name":this.applyCreditFormReactive.get('fullName')?.value,
        "Address": this.applyCreditFormReactive.get('fullAddress')?.value,
        "Credit Score": this.applyCreditFormReactive.get('creditScore')?.value,
        "Annual income":this.applyCreditFormReactive.get('annualIncome')?.value,
        "Status":false,
        "trackingId":this.genTrackIdNumber
      }
      this.clearFormFields();
      
      this.ApiService.applyCreditAPI(this.userData).subscribe(
        (response) =>{
          this.applyCreditSuccess = !this.applyCreditSuccess; 
        },
        (err)=>{
          this.applyCreditSuccess = false;
        }
      );
    }
    else{
      alert('Please enter the values valid!')
    }
    

  }
}
