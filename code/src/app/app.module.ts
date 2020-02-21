import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { MapHumanComponent } from './components/map-human/map-human.component';
import { TchatZombieComponent } from './components/tchat-zombie/tchat-zombie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    MapHumanComponent,
    TchatZombieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
