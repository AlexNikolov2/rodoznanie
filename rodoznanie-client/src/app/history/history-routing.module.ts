import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AddHistoryComponent } from './add-history/add-history.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'add-history', component: AddHistoryComponent },
  { path: 'history-details/:id', component: HistoryDetailsComponent },
  { path: 'edit/:id', component: EditHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
