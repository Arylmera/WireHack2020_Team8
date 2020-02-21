import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MapHumanComponent } from './components/map-human/map-human.component';
import { TchatZombieComponent } from './components/tchat-zombie/tchat-zombie.component';
import { CameraDeviceComponent } from './components/camera-device/camera-device.component';



@NgModule({
<<<<<<< HEAD
    declarations: [
        AppComponent,
        LoginComponent,
        FormLoginComponent,
        MapHumanComponent,
        TchatZombieComponent,
        CameraDeviceComponent,
        CameraDeviceComponent
    ],
=======
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    MapHumanComponent,
    TchatZombieComponent,
    CameraDeviceComponent,
    MapHumanComponent
  ],
>>>>>>> 915f1db7ff3df295ee8ad0c2eaa7d508374c03a8
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
