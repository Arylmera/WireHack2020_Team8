import {AfterViewInit, Component, OnInit} from '@angular/core';
import { defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';

@Component({
  selector: 'app-map-human',
  templateUrl: './map-human.component.html',
  styleUrls: ['./map-human.component.css']
})

export class MapHumanComponent implements AfterViewInit {
  map: Map;
  barco = [50.79774056229649, 3.276881057572907];
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
        zoom: 15
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            50.79774056229649, 3.276881057572907,
            50.79774056229649, 3.2768810575729079
          ]
        })
      ])
    });
  }
}
