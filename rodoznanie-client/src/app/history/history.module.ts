import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHistoryComponent } from './add-history/add-history.component';
import { MapComponent } from './map/map.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [AddHistoryComponent, MapComponent, HistoryDetailsComponent],
  imports: [CommonModule, HistoryRoutingModule],
  exports: [AddHistoryComponent],
})
export class HistoryModule {}
