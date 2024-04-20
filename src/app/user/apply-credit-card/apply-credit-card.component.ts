import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-credit-card',
  templateUrl: './apply-credit-card.component.html',
  styleUrls: ['./apply-credit-card.component.scss']
})
export class ApplyCreditCardComponent implements OnInit{

  applyCreditFormReactive!: FormGroup;

  constructor( 
    private formBuilder : FormBuilder
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

  submitApplyCredit(){
    

  }
}
