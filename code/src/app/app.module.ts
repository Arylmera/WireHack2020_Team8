import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MapHumanComponent } from './components/map-human/map-human.component';
import { TchatZombieComponent } from './components/tchat-zombie/tchat-zombie.component';
import { CameraDeviceComponent } from './components/camera-device/camera-device.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
<<<<<<< HEAD
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

=======
import {MatInputModule} from '@angular/material/input';
import {Route} from '@angular/router';
>>>>>>> 45fbaf7559efa1f4f484a5f59669e5601f469699

const appRoutes: Route = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    MapHumanComponent,
    TchatZombieComponent,
    CameraDeviceComponent,
    MapHumanComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
<<<<<<< HEAD
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
=======
    MatInputModule
>>>>>>> 45fbaf7559efa1f4f484a5f59669e5601f469699
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
