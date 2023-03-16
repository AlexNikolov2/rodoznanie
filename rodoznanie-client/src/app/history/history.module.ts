import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHistoryComponent } from './add-history/add-history.component';
import { MapComponent } from './map/map.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { HistoryRoutingModule } from './history-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { EditHistoryComponent } from './edit-history/edit-history.component';

@NgModule({
  declarations: [AddHistoryComponent, MapComponent, HistoryDetailsComponent, EditHistoryComponent],
  imports: [CommonModule, HistoryRoutingModule, GoogleMapsModule],
  exports: [AddHistoryComponent],
})
export class HistoryModule {}
