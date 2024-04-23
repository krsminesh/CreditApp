import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global/globalConstants';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  @Input() text ="";
  isLoggedIn:Boolean = true
constructor(
){
}

  
}
