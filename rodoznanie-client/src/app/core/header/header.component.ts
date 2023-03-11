import { Component } from '@angular/core';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  icons = {
    globe: faEarthEurope,
  };

  constructor(public authService: AuthService) {}
}
