import { Component, OnInit, ViewChild } from '@angular/core';
import { MapGeocoder, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;

  center: google.maps.LatLngLiteral = { lat: 42, lng: 24 };
  markerPositions: google.maps.LatLngLiteral[] = [];
  stories: any;
  storiesArray: any[] = [];

  baba = {} as any;

  constructor(
    private geocoder: MapGeocoder,
    private historyServices: HistoryService
  ) {}

  ngOnInit() {
    this.getStories();
    this.geocodeAddress();
  }

  getStories() {
    this.stories = this.historyServices.getAllStories();
    this.stories.forEach((story: any) => {
      story.forEach((s: any) => {
        this.geocoder
          .geocode({
            address: s.address,
          })
          .subscribe(({ results }) => {
            results.forEach((result) => {
              let lat = result.geometry.location.lat();
              let lng = result.geometry.location.lng();
              s.address = new google.maps.LatLng(lat, lng);
              //this.markerPositions.push({ lat, lng });
            });
          });
        this.storiesArray.push(s);
        console.log('S object: ' + JSON.stringify(s));
      });
    });
  }

  geocodeAddress() {
    let storiesForData = this.historyServices.getAllStories();
    storiesForData.forEach((story: any) => {
      story.forEach((s: any) => {});
    });
  }

  openInfoWindow(marker: MapMarker, baba: any) {
    this.baba = baba;
    this.infoWindow.open(marker);
  }
}
