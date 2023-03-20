import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  markerPositions: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  constructor() {}
}
