import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [NotFoundComponent, ShortenPipe],
  imports: [CommonModule],
  exports: [ShortenPipe],
})
export class SharedModule {}
