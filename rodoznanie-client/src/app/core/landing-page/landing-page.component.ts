import { Component } from '@angular/core';
import { faGlobe, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  icons = {
    map: faMapLocationDot,
  };
  constructor() {}
}
