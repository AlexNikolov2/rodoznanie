import {
  animate,
  style,
  trigger,
  state,
  transition,
} from '@angular/animations';
import { Component } from '@angular/core';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      transition('rotated => default', animate('150ms ease-out')),
      transition('default => rotated', animate('150ms ease-in')),
    ]),
  ],
})
export class HeaderComponent {
  icons = {
    globe: faEarthEurope,
  };

  constructor(public authService: AuthService) {}

  toggleHamburger() {
    this.rotate();

    let navbar = document.querySelector<HTMLElement>('#navbar');
    let header = document.querySelector<HTMLElement>('#header');

    if (navbar!.style.display === 'flex') {
      navbar!.style.display = 'none';
      header!.style.flexDirection = 'row';
    } else {
      navbar!.style.display = 'flex';
      navbar!.style.flexDirection = 'column';
      header!.style.flexDirection = 'column';
    }
  }

  state: string = 'default';
  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }
}
