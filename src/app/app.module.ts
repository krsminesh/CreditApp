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
import { ReactiveFormsModule } from '@angular/forms';
import { PageTitleDirective } from './directives/page-title/page-title.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApplyCreditCardComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
