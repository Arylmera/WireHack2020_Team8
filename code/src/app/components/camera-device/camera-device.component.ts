import { ViewChild, ViewChildren, Component} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-camera-device',
  templateUrl: './camera-device.component.html',
  styleUrls: ['./camera-device.component.css']
})
export class CameraDeviceComponent {

  @ViewChild('hardwareVideo') hardwareVideo: any;

  constructor() { }

  videoStart() {
    const video = this.hardwareVideo.nativeElement;

    const n = navigator as any;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    // tslint:disable-next-line:only-arrow-functions
    n.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    });

    // NOTE: For Video + Audio
    // n.mediaDevices.getUserMedia({video: true, audio: true}).then(function(stream) {
    //     video.src = window.URL.createObjectURL(stream);
    //     video.play();
    // });

  }

}
