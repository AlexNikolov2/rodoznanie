import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent, LandingPageComponent, FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [HeaderComponent, LandingPageComponent, FooterComponent],
})
export class CoreModule {}
