import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, LandingPageComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeaderComponent, LandingPageComponent],
})
export class CoreModule {}
