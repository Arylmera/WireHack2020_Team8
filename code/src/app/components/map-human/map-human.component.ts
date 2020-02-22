

import {AfterViewInit, Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Geolocation from 'ol/Geolocation';
import * as olProj from 'ol/proj';

@Component({
  selector: 'app-map-human',
  templateUrl: './map-human.component.html',
  styleUrls: ['./map-human.component.css']
})

export class MapHumanComponent implements AfterViewInit {
  map: Map;
  // barco = [2.88626, 58.85039];
  barco = [2.88626, 58.85039];

  ngAfterViewInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: this.barco,
        zoom: 15,
        projection: 'EPSG:3857'
      }),
    });

    const geolocation = new Geolocation();
    geolocation.setTracking(true);
    // tslint:disable-next-line:only-arrow-functions
    geolocation.on('change:position', function() {
      console.log(geolocation.getPosition());
      this.map.getView().setCenter(olProj.transform(geolocation.getPosition(), 'EPSG:4326', 'EPSG:3857'));
    });
  }
}
