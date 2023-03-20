import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 42, lng: 24 };
  markerPositions: google.maps.LatLngLiteral = { lat: 42, lng: 24 };
  constructor() {}
}
