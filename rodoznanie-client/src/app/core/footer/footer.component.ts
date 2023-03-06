import { Component } from '@angular/core';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  icons = {
    instagram: faInstagram,
    facebook: faFacebook,
  };

  constructor() {}
}
