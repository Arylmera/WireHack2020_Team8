

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
  // barco = [50.798807, 3.276523]

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
        center: olProj.transform([3.276523, 50.798807], 'EPSG:4326', 'EPSG:3857'),
        zoom: 7,
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
