import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHistoryComponent } from './add-history/add-history.component';

@NgModule({
  declarations: [AddHistoryComponent],
  imports: [CommonModule],
  exports: [AddHistoryComponent],
})
export class HistoryModule {}
