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
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import {RouterModule, Routes} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { QuestComponent } from './components/quest/quest.component';

const routes: Routes = [
  {path: 'quest', component: QuestComponent}
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
    QuestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
