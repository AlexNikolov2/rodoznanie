import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHistoryComponent } from './add-history/add-history.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AddHistoryComponent, MapComponent],
  imports: [CommonModule],
  exports: [AddHistoryComponent],
})
export class HistoryModule {}
