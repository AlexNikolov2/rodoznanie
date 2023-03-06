import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HistoryModule } from './history/history.module';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    HistoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
