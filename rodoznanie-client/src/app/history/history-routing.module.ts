import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AddHistoryComponent } from './add-history/add-history.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'add-history', component: AddHistoryComponent },
  { path: 'history-details/:id', component: HistoryDetailsComponent },
  { path: 'edit/:id', component: HistoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
