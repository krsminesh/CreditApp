import { Component } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  loginUrl = GlobalConstants.loginUrl;
  applyUrl = GlobalConstants.applyUrl;

}
