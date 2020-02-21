import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-camera-device',
  templateUrl: './camera-device.component.html',
  styleUrls: ['./camera-device.component.css']
})
export class CameraDeviceComponent implements OnInit {

  @ViewChild('videoElement') videoElement: any;
  video: any;

  constructor() { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }
  // comment du cul

}
