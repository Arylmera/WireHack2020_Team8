import { ViewChild, ViewChildren, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-camera-device',
  templateUrl: './camera-device.component.html',
  styleUrls: ['./camera-device.component.css']
})
export class CameraDeviceComponent implements OnInit {

  @ViewChild('hardwareVideo') hardwareVideo: any;

  constructor() { }

  ngOnInit(): void {
    const video = this.hardwareVideo.nativeElement;

    const n = navigator as any;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    });

  }

}
