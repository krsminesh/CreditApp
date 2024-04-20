import { Component } from '@angular/core';
import { GlobalConstants } from 'src/app/global/globalConstants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loginUrl = GlobalConstants.loginUrl
}
