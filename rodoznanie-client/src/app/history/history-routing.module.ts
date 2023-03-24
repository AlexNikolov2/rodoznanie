import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AddHistoryComponent } from './add-history/add-history.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  {
    path: 'add-history',
    component: AddHistoryComponent,
    canActivate: [AuthGuard],
    data: { authRequired: true },
  },
  {
    path: 'history-details/:id',
    component: HistoryDetailsComponent,
    canActivate: [AuthGuard],
    data: { authRequired: true },
  },
  {
    path: 'edit/:id',
    component: EditHistoryComponent,
    canActivate: [AuthGuard],
    data: { authRequired: true },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
