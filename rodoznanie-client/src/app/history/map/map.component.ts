import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { Router } from '@angular/router';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 42, lng: 24 };
  markerPositions: google.maps.LatLngLiteral = { lat: 42, lng: 24 };
  stories: any;

  constructor(
    private router: Router,
    private geocoder: MapGeocoder,
    private historyServices: HistoryService
  ) {}

  ngOnInit() {
    this.getStories();
    this.geocodeAddress();
  }

  getStories() {
    this.stories = this.historyServices.getAllStories();
  }

  geocodeAddress() {
    this.stories.forEach((story: any) => {
      story.forEach((s: any) => {
        this.geocoder
          .geocode({
            address: s.address,
          })
          .subscribe(({ results }) => {
            console.log(results);
          });
      });
    });
  }

  redirectToDetails() {
    this.router.navigate(['/history-details']);
  }
}
