import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyCreditCardComponent } from './user/apply-credit-card/apply-credit-card.component';
import { LoginComponent } from './user/login/login.component';
import { WelcomeComponent } from './user/welcome/welcome.component';

const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"login", component:LoginComponent},
  {path:"apply-credit", component:ApplyCreditCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
