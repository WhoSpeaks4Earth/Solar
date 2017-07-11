import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { WeatherComponent } from './weather/weather.component';
import { SystemComponent } from './system/system.component';
import { SystemDetailsComponent } from './system-details/system-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    WeatherComponent,
    SystemComponent,
    SystemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
