import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyCreditCardComponent } from './user/apply-credit-card/apply-credit-card.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import { LoginComponent } from './user/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleDirective } from './directives/page-title/page-title.directive';
import { HttpClientModule } from '@angular/common/http';
import { ViewCreditDetailsComponent } from './user/view-credit-details/view-credit-details.component';
import { CheckStatusComponent } from './user/check-status/check-status.component';
import { LogoutComponent } from './user/logout/logout.component';
import { CreditCardExpenseListComponent } from './user/credit-card-expense-list/credit-card-expense-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyCreditCardComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleDirective,
    ViewCreditDetailsComponent,
    CheckStatusComponent,
    LogoutComponent,
    CreditCardExpenseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
